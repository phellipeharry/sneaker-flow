const { DatabaseSync } = require('node:sqlite');
const path = require('node:path');
const fs = require('node:fs');

const DB_PATH = path.join(__dirname, '..', 'data', 'calcados.db');

// Ensure data directory exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

let currentDb = new DatabaseSync(DB_PATH);

// Enable WAL mode & foreign keys for performance, safety, and integrity
currentDb.exec('PRAGMA foreign_keys = ON;');
currentDb.exec('PRAGMA journal_mode = WAL;');

// Database proxy to allow hot reloads and seamless restore operations
const db = new Proxy({}, {
  get(target, prop) {
    const val = currentDb[prop];
    return typeof val === 'function' ? val.bind(currentDb) : val;
  }
});

function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL CHECK(type IN ('cliente', 'fornecedor')),
      name TEXT NOT NULL,
      phone TEXT,
      photo_url TEXT,
      notes TEXT,
      created_at TEXT DEFAULT (datetime('now', 'localtime'))
    );

    CREATE TABLE IF NOT EXISTS models (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      brand TEXT,
      last_purchase_price REAL DEFAULT 0,
      last_price_updated_at TEXT,
      description TEXT,
      is_special_grade INTEGER DEFAULT 0,
      special_grade_notes TEXT,
      pairs_per_grade INTEGER DEFAULT 12,
      created_at TEXT DEFAULT (datetime('now', 'localtime'))
    );

    CREATE TABLE IF NOT EXISTS model_suppliers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      model_id INTEGER NOT NULL,
      supplier_id INTEGER NOT NULL,
      cost_price REAL DEFAULT 0,
      notes TEXT,
      updated_at TEXT DEFAULT (datetime('now', 'localtime')),
      FOREIGN KEY(model_id) REFERENCES models(id) ON DELETE CASCADE,
      FOREIGN KEY(supplier_id) REFERENCES contacts(id) ON DELETE CASCADE,
      UNIQUE(model_id, supplier_id)
    );

    CREATE TABLE IF NOT EXISTS model_photos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      model_id INTEGER NOT NULL,
      color TEXT,
      cut_type TEXT DEFAULT 'baixa',
      url TEXT NOT NULL,
      is_primary INTEGER DEFAULT 0,
      cost_price REAL DEFAULT NULL,
      created_at TEXT DEFAULT (datetime('now', 'localtime')),
      FOREIGN KEY(model_id) REFERENCES models(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS price_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      model_id INTEGER NOT NULL,
      supplier_id INTEGER,
      old_price REAL,
      new_price REAL NOT NULL,
      changed_at TEXT DEFAULT (datetime('now', 'localtime')),
      notes TEXT,
      FOREIGN KEY(model_id) REFERENCES models(id) ON DELETE CASCADE,
      FOREIGN KEY(supplier_id) REFERENCES contacts(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_id INTEGER NOT NULL,
      dispatch_friday TEXT NOT NULL,
      order_date TEXT DEFAULT (date('now', 'localtime')),
      total_amount REAL DEFAULT 0,
      total_boxes INTEGER DEFAULT 0,
      total_pairs INTEGER DEFAULT 0,
      is_paid INTEGER DEFAULT 0,
      is_dispatched INTEGER DEFAULT 0,
      list_generated INTEGER DEFAULT 0,
      total_cost REAL DEFAULT 0,
      total_profit REAL DEFAULT 0,
      discount REAL DEFAULT 0,
      notes TEXT,
      created_at TEXT DEFAULT (datetime('now', 'localtime')),
      FOREIGN KEY(customer_id) REFERENCES contacts(id) ON DELETE RESTRICT
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      model_id INTEGER,
      model_name TEXT NOT NULL,
      color TEXT NOT NULL,
      cut_type TEXT NOT NULL DEFAULT 'baixa',
      quantity INTEGER NOT NULL DEFAULT 1,
      pairs_per_grade INTEGER NOT NULL DEFAULT 12,
      total_pairs INTEGER NOT NULL DEFAULT 12,
      cost_price REAL NOT NULL DEFAULT 0,
      unit_price REAL NOT NULL DEFAULT 0,
      total_price REAL NOT NULL DEFAULT 0,
      grade_notes TEXT,
      FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE,
      FOREIGN KEY(model_id) REFERENCES models(id) ON DELETE SET NULL
    );

    CREATE TABLE IF NOT EXISTS order_payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      amount REAL NOT NULL,
      payment_date TEXT DEFAULT (date('now', 'localtime')),
      payment_method TEXT DEFAULT 'Pix',
      notes TEXT,
      receipt_url TEXT,
      created_at TEXT DEFAULT (datetime('now', 'localtime')),
      FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE
    );
  `);

  migrateSchema();
  seedInitialData();
}

function migrateSchema() {
  // Ensure new columns exist in models
  const modelsInfo = db.prepare("PRAGMA table_info(models)").all();
  const modelCols = modelsInfo.map(c => c.name);
  if (!modelCols.includes('is_special_grade')) {
    db.exec("ALTER TABLE models ADD COLUMN is_special_grade INTEGER DEFAULT 0;");
  }
  if (!modelCols.includes('special_grade_notes')) {
    db.exec("ALTER TABLE models ADD COLUMN special_grade_notes TEXT;");
  }
  if (!modelCols.includes('pairs_per_grade')) {
    db.exec("ALTER TABLE models ADD COLUMN pairs_per_grade INTEGER DEFAULT 12;");
  }

  // Ensure new columns exist in orders
  const ordersInfo = db.prepare("PRAGMA table_info(orders)").all();
  const orderCols = ordersInfo.map(c => c.name);
  if (!orderCols.includes('is_dispatched')) {
    db.exec("ALTER TABLE orders ADD COLUMN is_dispatched INTEGER DEFAULT 0;");
  }
  if (!orderCols.includes('list_generated')) {
    db.exec("ALTER TABLE orders ADD COLUMN list_generated INTEGER DEFAULT 0;");
  }
  if (!orderCols.includes('total_pairs')) {
    db.exec("ALTER TABLE orders ADD COLUMN total_pairs INTEGER DEFAULT 0;");
  }
  if (!orderCols.includes('total_cost')) {
    db.exec("ALTER TABLE orders ADD COLUMN total_cost REAL DEFAULT 0;");
  }
  if (!orderCols.includes('total_profit')) {
    db.exec("ALTER TABLE orders ADD COLUMN total_profit REAL DEFAULT 0;");
  }
  if (!orderCols.includes('discount')) {
    db.exec("ALTER TABLE orders ADD COLUMN discount REAL DEFAULT 0;");
  }

  // Ensure new columns exist in model_photos
  const photoInfo = db.prepare("PRAGMA table_info(model_photos)").all();
  const photoCols = photoInfo.map(c => c.name);
  if (!photoCols.includes('cost_price')) {
    db.exec("ALTER TABLE model_photos ADD COLUMN cost_price REAL DEFAULT NULL;");
  }

  // Ensure new columns exist in order_items
  const itemsInfo = db.prepare("PRAGMA table_info(order_items)").all();
  const itemCols = itemsInfo.map(c => c.name);
  if (!itemCols.includes('cost_price')) {
    db.exec("ALTER TABLE order_items ADD COLUMN cost_price REAL NOT NULL DEFAULT 0;");
  }
  if (!itemCols.includes('pairs_per_grade')) {
    db.exec("ALTER TABLE order_items ADD COLUMN pairs_per_grade INTEGER NOT NULL DEFAULT 12;");
  }
  if (!itemCols.includes('total_pairs')) {
    db.exec("ALTER TABLE order_items ADD COLUMN total_pairs INTEGER NOT NULL DEFAULT 12;");
  }
  if (!itemCols.includes('grade_notes')) {
    db.exec("ALTER TABLE order_items ADD COLUMN grade_notes TEXT;");
  }

  // Backfill cost_price from models if empty
  db.exec(`
    UPDATE order_items
    SET cost_price = (
      SELECT COALESCE(models.last_purchase_price, 0)
      FROM models
      WHERE models.id = order_items.model_id
    )
    WHERE (cost_price IS NULL OR cost_price = 0) AND model_id IS NOT NULL;
  `);

  // Ensure pairs_per_grade and total_pairs are populated on existing items
  db.exec(`
    UPDATE order_items
    SET pairs_per_grade = 12
    WHERE pairs_per_grade IS NULL OR pairs_per_grade <= 0;

    UPDATE order_items
    SET total_pairs = quantity * pairs_per_grade
    WHERE total_pairs IS NULL OR total_pairs <= 0;
  `);

  // Ensure order_payments table exists
  db.exec(`
    CREATE TABLE IF NOT EXISTS order_payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      amount REAL NOT NULL,
      payment_date TEXT DEFAULT (date('now', 'localtime')),
      payment_method TEXT DEFAULT 'Pix',
      notes TEXT,
      receipt_url TEXT,
      created_at TEXT DEFAULT (datetime('now', 'localtime')),
      FOREIGN KEY(order_id) REFERENCES orders(id) ON DELETE CASCADE
    );
  `);

  // Recalculate total_pairs, total_cost and total_profit for all orders
  const orders = db.prepare("SELECT id FROM orders").all();
  const updateOrderTotals = db.prepare(`
    UPDATE orders
    SET total_pairs = ?, total_amount = ?, total_cost = ?, total_profit = ?
    WHERE id = ?
  `);

  orders.forEach(ord => {
    const summary = db.prepare(`
      SELECT 
        COALESCE(SUM(total_pairs), 0) AS pairs,
        COALESCE(SUM(total_price), 0) AS amount,
        COALESCE(SUM(total_pairs * cost_price), 0) AS cost
      FROM order_items
      WHERE order_id = ?
    `).get(ord.id);

    const ordRow = db.prepare("SELECT discount FROM orders WHERE id = ?").get(ord.id);
    const discount = ordRow ? (Math.max(0, Number(ordRow.discount) || 0)) : 0;

    const pairs = summary ? summary.pairs : 0;
    const rawAmount = summary ? summary.amount : 0;
    const amount = Math.max(0, rawAmount - discount);
    const cost = summary ? summary.cost : 0;
    const profit = amount - cost;
    updateOrderTotals.run(pairs, amount, cost, profit, ord.id);
  });

  // Mark past orders as dispatched if not already specified
  db.exec(`
    UPDATE orders
    SET is_dispatched = 1
    WHERE is_dispatched = 0 AND dispatch_friday < date('now', 'localtime');
  `);
}

// Function to calculate Friday for a given date or next upcoming Friday
function getNextFriday(baseDate = new Date()) {
  const d = new Date(baseDate);
  const day = d.getDay(); // 0: Sunday, 5: Friday, 6: Saturday
  let diff = 5 - day;
  if (diff <= 0) {
    diff += 7; // Next Friday
  }
  d.setDate(d.getDate() + diff);
  return d.toISOString().split('T')[0];
}

// Function to calculate past Friday (e.g. last week = 1, two weeks ago = 2)
function getPastFriday(weeksAgo = 1) {
  const d = new Date();
  const day = d.getDay(); // 0: Sunday, 5: Friday
  let diff = day - 5;
  if (diff < 0) {
    diff += 7; // Days since last Friday
  }
  d.setDate(d.getDate() - diff - ((weeksAgo - 1) * 7));
  return d.toISOString().split('T')[0];
}

function seedInitialData() {
  // Check settings
  const hasSettings = db.prepare('SELECT count(*) as count FROM settings').get();
  if (hasSettings.count === 0) {
    const insertSetting = db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)');
    insertSetting.run('pix_key', '00000000000');
    insertSetting.run('pix_name', 'SUA DISTRIBUIDORA LTDA');
    insertSetting.run('store_name', 'SneakerFlow');
  }

  // Safety: If initial seeding has already run, DO NOT insert mock data again!
  // This protects real user data from ever being mixed with mock data.
  const seedFlag = db.prepare("SELECT value FROM settings WHERE key = 'initial_seed_completed'").get();
  if (seedFlag && seedFlag.value === '1') {
    return;
  }

  // Check contacts - only seed generic examples if completely empty on first install
  const hasContacts = db.prepare('SELECT count(*) as count FROM contacts').get();
  if (hasContacts.count === 0) {
    const insertContact = db.prepare(`
      INSERT INTO contacts (type, name, phone, photo_url, notes)
      VALUES (?, ?, ?, ?, ?)
    `);

    const nowDateTime = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const todayStr = new Date().toISOString().split('T')[0];

    // Generic Suppliers
    const sup1 = insertContact.run('fornecedor', 'Fornecedor Exemplo A', '00000000000', '/assets/supplier1.svg', 'Fornecedor de exemplo - edite ou exclua');
    const sup2 = insertContact.run('fornecedor', 'Fornecedor Exemplo B', '00000000000', '/assets/supplier2.svg', 'Fornecedor de exemplo - edite ou exclua');

    // Generic Clients
    const cli1 = insertContact.run('cliente', 'Cliente Exemplo 1', '00000000000', '/assets/client1.svg', 'Cliente de exemplo');
    const cli2 = insertContact.run('cliente', 'Cliente Exemplo 2', '00000000000', '/assets/client2.svg', 'Cliente de exemplo');
    const cli3 = insertContact.run('cliente', 'Cliente Exemplo 3', '00000000000', '/assets/client3.svg', 'Cliente de exemplo');

    // Generic Models
    const insertModel = db.prepare(`
      INSERT INTO models (name, brand, last_purchase_price, last_price_updated_at, description)
      VALUES (?, ?, ?, ?, ?)
    `);

    const m1 = insertModel.run('Adidas Campus', 'Adidas', 180.00, nowDateTime, 'Modelo de exemplo - camurça com solado vulcanizado');
    const m2 = insertModel.run('Air Force One', 'Nike', 210.00, nowDateTime, 'Modelo de exemplo - couro clássico');
    const m3 = insertModel.run('Dunk Low Panda', 'Nike', 220.00, nowDateTime, 'Modelo de exemplo - preto e branco');

    // Model Suppliers link
    const insertModelSup = db.prepare(`
      INSERT INTO model_suppliers (model_id, supplier_id, cost_price, notes)
      VALUES (?, ?, ?, ?)
    `);
    insertModelSup.run(m1.lastInsertRowid, sup1.lastInsertRowid, 180.00, 'Prazo 7 dias');
    insertModelSup.run(m2.lastInsertRowid, sup2.lastInsertRowid, 210.00, 'Pronta entrega');
    insertModelSup.run(m3.lastInsertRowid, sup1.lastInsertRowid, 220.00, 'Lote mínimo 5 cx');

    // Price history
    const insertHistory = db.prepare(`
      INSERT INTO price_history (model_id, supplier_id, old_price, new_price, changed_at, notes)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    insertHistory.run(m1.lastInsertRowid, sup1.lastInsertRowid, 170.00, 180.00, nowDateTime, 'Cadastro inicial de exemplo');
    insertHistory.run(m2.lastInsertRowid, sup2.lastInsertRowid, 195.00, 210.00, nowDateTime, 'Cadastro inicial de exemplo');

    // Generic Sample Orders
    const targetFriday = getNextFriday();
    const pastFridayStr = getPastFriday(1);

    const insertOrder = db.prepare(`
      INSERT INTO orders (customer_id, dispatch_friday, order_date, total_amount, total_boxes, is_paid, is_dispatched, total_cost, total_profit, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const insertItem = db.prepare(`
      INSERT INTO order_items (order_id, model_id, model_name, color, cut_type, quantity, cost_price, unit_price, total_price)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const o1 = insertOrder.run(cli1.lastInsertRowid, targetFriday, todayStr, 2550.00, 10, 0, 0, 1890.00, 660.00, 'Pedido de exemplo - despacho de sexta');
    const o1Id = o1.lastInsertRowid;
    insertItem.run(o1Id, m1.lastInsertRowid, 'Adidas Campus', 'Preto / Vinho', 'baixa', 2, 180.00, 250.00, 500.00);
    insertItem.run(o1Id, m1.lastInsertRowid, 'Adidas Campus', 'Preto / Vinho', 'alta', 3, 180.00, 260.00, 780.00);
    insertItem.run(o1Id, m1.lastInsertRowid, 'Adidas Campus', 'Preto / Branco', 'baixa', 1, 180.00, 250.00, 250.00);
    insertItem.run(o1Id, m1.lastInsertRowid, 'Adidas Campus', 'Preto / Branco', 'alta', 1, 180.00, 260.00, 260.00);
    insertItem.run(o1Id, m2.lastInsertRowid, 'Air Force One', 'Branco', 'baixa', 3, 210.00, 253.33, 760.00);

    const o2 = insertOrder.run(cli2.lastInsertRowid, targetFriday, todayStr, 1450.00, 5, 1, 0, 1100.00, 350.00, 'Pedido de exemplo - pago');
    const o2Id = o2.lastInsertRowid;
    insertItem.run(o2Id, m3.lastInsertRowid, 'Dunk Low Panda', 'Preto / Branco', 'baixa', 5, 220.00, 290.00, 1450.00);

    const o3 = insertOrder.run(cli3.lastInsertRowid, pastFridayStr, pastFridayStr, 1800.00, 6, 0, 1, 1260.00, 540.00, 'Pedido anterior de exemplo - já despachado');
    const o3Id = o3.lastInsertRowid;
    insertItem.run(o3Id, m2.lastInsertRowid, 'Air Force One', 'Branco', 'baixa', 6, 210.00, 300.00, 1800.00);
  }

  // Mark seed as completed so no mock data will ever be automatically inserted again
  db.prepare("INSERT OR REPLACE INTO settings (key, value) VALUES ('initial_seed_completed', '1')").run();
}

function clearSampleData() {
  db.exec(`
    DELETE FROM order_items;
    DELETE FROM orders;
    DELETE FROM model_suppliers;
    DELETE FROM price_history;
    DELETE FROM model_photos;
    DELETE FROM models;
    DELETE FROM contacts;
    INSERT OR REPLACE INTO settings (key, value) VALUES ('initial_seed_completed', '1');
  `);
}

function checkpointDatabase() {
  try {
    currentDb.exec('PRAGMA wal_checkpoint(TRUNCATE);');
  } catch (e) {
    console.warn('wal_checkpoint warning:', e.message);
  }
}

function getDatabaseStats() {
  checkpointDatabase();
  let sizeBytes = 0;
  try {
    if (fs.existsSync(DB_PATH)) {
      sizeBytes = fs.statSync(DB_PATH).size;
    }
  } catch {}

  const ordersCount = currentDb.prepare('SELECT count(*) as count FROM orders').get()?.count || 0;
  const contactsCount = currentDb.prepare('SELECT count(*) as count FROM contacts').get()?.count || 0;
  const modelsCount = currentDb.prepare('SELECT count(*) as count FROM models').get()?.count || 0;
  const itemsCount = currentDb.prepare('SELECT count(*) as count FROM order_items').get()?.count || 0;

  return {
    sizeBytes,
    sizeFormatted: (sizeBytes / 1024 < 1024)
      ? `${(sizeBytes / 1024).toFixed(1)} KB`
      : `${(sizeBytes / (1024 * 1024)).toFixed(2)} MB`,
    ordersCount,
    contactsCount,
    modelsCount,
    itemsCount,
    dbPath: DB_PATH
  };
}

function restoreDatabase(buffer) {
  if (!buffer || buffer.length < 16) {
    throw new Error('Arquivo de backup inválido ou vazio.');
  }

  // SQLite files start with "SQLite format 3\0"
  const magic = buffer.subarray(0, 16).toString();
  if (!magic.startsWith('SQLite format 3')) {
    throw new Error('O arquivo selecionado não é um banco de dados SQLite válido (.db).');
  }

  // 1. Commit everything & close existing connection
  checkpointDatabase();
  currentDb.close();

  // 2. Safety copy of current db
  const backupPath = DB_PATH + '.bak';
  try {
    if (fs.existsSync(DB_PATH)) {
      fs.copyFileSync(DB_PATH, backupPath);
    }
  } catch (e) {
    console.warn('Não foi possível gerar .bak de segurança pré-restore:', e.message);
  }

  // 3. Remove -wal and -shm
  const walPath = DB_PATH + '-wal';
  const shmPath = DB_PATH + '-shm';
  if (fs.existsSync(walPath)) try { fs.unlinkSync(walPath); } catch {}
  if (fs.existsSync(shmPath)) try { fs.unlinkSync(shmPath); } catch {}

  // 4. Overwrite main file
  fs.writeFileSync(DB_PATH, buffer);

  // 5. Re-open connection
  currentDb = new DatabaseSync(DB_PATH);
  currentDb.exec('PRAGMA foreign_keys = ON;');
  currentDb.exec('PRAGMA journal_mode = WAL;');

  // 6. Run migrations to guarantee schema compliance
  initDatabase();

  return getDatabaseStats();
}

function getOrderPaymentSummary(orderId) {
  const order = db.prepare('SELECT id, total_amount, is_paid FROM orders WHERE id = ?').get(orderId);
  if (!order) return null;

  const payments = db.prepare('SELECT * FROM order_payments WHERE order_id = ? ORDER BY payment_date DESC, id DESC').all(orderId);
  const paidSumRow = db.prepare('SELECT COALESCE(SUM(amount), 0) AS total_paid FROM order_payments WHERE order_id = ?').get(orderId);
  
  let paidAmount = paidSumRow ? Number(paidSumRow.total_paid) : 0;
  
  // If no partial records exist but is_paid = 1, consider 100% paid
  if (payments.length === 0 && order.is_paid === 1) {
    paidAmount = Number(order.total_amount) || 0;
  }

  const totalAmount = Number(order.total_amount) || 0;
  const remainingAmount = Math.max(0, totalAmount - paidAmount);
  let status = 'unpaid';
  if (paidAmount >= totalAmount && totalAmount > 0) {
    status = 'paid';
  } else if (paidAmount > 0) {
    status = 'partial';
  }

  return {
    order_id: orderId,
    total_amount: totalAmount,
    paid_amount: paidAmount,
    remaining_amount: remainingAmount,
    status,
    payments
  };
}

function recordOrderPayment(orderId, { amount, payment_date, payment_method, notes, receipt_url }) {
  const val = Number(amount);
  if (isNaN(val) || val <= 0) {
    throw new Error('Valor do pagamento deve ser maior que zero');
  }

  const pDate = payment_date || new Date().toISOString().split('T')[0];
  const pMethod = payment_method || 'Pix';

  const res = db.prepare(`
    INSERT INTO order_payments (order_id, amount, payment_date, payment_method, notes, receipt_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(orderId, val, pDate, pMethod, notes || '', receipt_url || null);

  // Recalculate is_paid status
  const order = db.prepare('SELECT total_amount FROM orders WHERE id = ?').get(orderId);
  const totalPaid = db.prepare('SELECT COALESCE(SUM(amount), 0) AS total_paid FROM order_payments WHERE order_id = ?').get(orderId)?.total_paid || 0;
  const isPaid = (totalPaid >= (order?.total_amount || 0) && (order?.total_amount || 0) > 0) ? 1 : 0;

  db.prepare('UPDATE orders SET is_paid = ? WHERE id = ?').run(isPaid, orderId);

  return {
    payment_id: res.lastInsertRowid,
    summary: getOrderPaymentSummary(orderId)
  };
}

function deleteOrderPayment(paymentId) {
  const payment = db.prepare('SELECT order_id FROM order_payments WHERE id = ?').get(paymentId);
  if (!payment) return null;

  db.prepare('DELETE FROM order_payments WHERE id = ?').run(paymentId);

  // Recalculate is_paid status
  const order = db.prepare('SELECT total_amount FROM orders WHERE id = ?').get(payment.order_id);
  const totalPaid = db.prepare('SELECT COALESCE(SUM(amount), 0) AS total_paid FROM order_payments WHERE order_id = ?').get(payment.order_id)?.total_paid || 0;
  const isPaid = (totalPaid >= (order?.total_amount || 0) && (order?.total_amount || 0) > 0) ? 1 : 0;

  db.prepare('UPDATE orders SET is_paid = ? WHERE id = ?').run(isPaid, payment.order_id);

  return getOrderPaymentSummary(payment.order_id);
}

module.exports = {
  db,
  DB_PATH,
  initDatabase,
  getNextFriday,
  getPastFriday,
  clearSampleData,
  checkpointDatabase,
  getDatabaseStats,
  restoreDatabase,
  getOrderPaymentSummary,
  recordOrderPayment,
  deleteOrderPayment
};
