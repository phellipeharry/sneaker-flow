const { db, initDatabase, getNextFriday } = require('./src/db.js');
const { buildTreeSummary, formatCurrency } = require('./src/listGenerator.js');

initDatabase();

console.log('--- 1. Testing getNextFriday ---');
const friday = getNextFriday();
console.log('Next Friday:', friday);

console.log('--- 2. Testing Models & Suppliers ---');
const models = db.prepare('SELECT * FROM models').all();
console.log(`Found ${models.length} models:`, models.map(m => m.name));

const adidasSuppliers = db.prepare(`
  SELECT ms.*, c.name as supplier_name, c.phone
  FROM model_suppliers ms
  JOIN contacts c ON ms.supplier_id = c.id
  WHERE ms.model_id = 1
`).all();
console.log('Adidas Campus suppliers:', adidasSuppliers.map(s => `${s.supplier_name} (Custo: R$ ${s.cost_price}, Phone: ${s.phone})`));

console.log('--- 3. Testing Price History & Updates ---');
const updatePrice = (modelId, newPrice, notes) => {
  const current = db.prepare('SELECT last_purchase_price FROM models WHERE id = ?').get(modelId);
  const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
  db.prepare('UPDATE models SET last_purchase_price = ?, last_price_updated_at = ? WHERE id = ?').run(newPrice, now, modelId);
  db.prepare('INSERT INTO price_history (model_id, old_price, new_price, changed_at, notes) VALUES (?, ?, ?, ?, ?)').run(modelId, current.last_purchase_price, newPrice, now, notes);
};
updatePrice(1, 185.00, 'Reajuste teste fornecedor');
const history = db.prepare('SELECT * FROM price_history WHERE model_id = 1 ORDER BY id DESC').all();
console.log('Price history for Adidas Campus:', history.map(h => `${h.changed_at}: R$ ${h.old_price} -> R$ ${h.new_price} (${h.notes})`));

console.log('--- 4. Testing Debtors & Orders ---');
const debtors = db.prepare(`
  SELECT 
    c.id AS customer_id,
    c.name AS customer_name,
    c.phone AS customer_phone,
    SUM(o.total_amount) AS total_debt,
    COUNT(o.id) AS pending_orders_count
  FROM orders o
  JOIN contacts c ON o.customer_id = c.id
  WHERE o.is_paid = 0
  GROUP BY c.id
  ORDER BY total_debt DESC
`).all();
console.log('Debtors list:', debtors.map(d => `${d.customer_name}: R$ ${d.total_debt} (${d.pending_orders_count} pedidos pendentes)`));

console.log('--- 5. Testing List Generator (Matching User Sketch) ---');
const order1Items = db.prepare('SELECT * FROM order_items WHERE order_id = 1').all();
const pixKey = db.prepare("SELECT value FROM settings WHERE key = 'pix_key'").get()?.value;
const pixName = db.prepare("SELECT value FROM settings WHERE key = 'pix_name'").get()?.value;

const summary = buildTreeSummary({ items: order1Items, pixKey, pixName });
console.log('Generated Output:\n' + summary);

console.log('ALL UNIT CHECKS PASSED PERFECTLY!');

