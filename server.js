const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const url = require('node:url');
const { db, initDatabase, getNextFriday, getPastFriday, clearSampleData } = require('./src/db.js');
const { buildTreeSummary, formatCurrency } = require('./src/listGenerator.js');

// Initialize database schema, migrations and seeds
initDatabase();

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const UPLOADS_DIR = path.join(PUBLIC_DIR, 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// MIME types for static file serving
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon'
};

// Helper to parse JSON body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // 50MB max upload size
      if (body.length > 50 * 1024 * 1024) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

// Helper to send JSON response
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data));
}

// Helper to send errors
function sendError(res, statusCode, message) {
  sendJSON(res, statusCode, { error: message });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Handle CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  try {
    // ==========================================
    // API ROUTES
    // ==========================================

    // Quick Dates (Upcoming Friday, Last Friday, Today)
    if (pathname === '/api/quick-dates' && method === 'GET') {
      return sendJSON(res, 200, {
        today: new Date().toISOString().split('T')[0],
        upcomingFriday: getNextFriday(),
        lastFriday: getPastFriday(1),
        twoWeeksAgoFriday: getPastFriday(2)
      });
    }

    // Clear Mock / Sample Data (Guarantees purely real data from now on)
    if (pathname === '/api/clear-sample-data' && method === 'POST') {
      clearSampleData();
      return sendJSON(res, 200, {
        success: true,
        message: 'Dados de teste removidos com sucesso! O banco agora armazenará exclusivamente seus dados reais.'
      });
    }

    // 1. Dashboard & Financials (including Weekly & Monthly Profit Averages)
    if (pathname === '/api/dashboard' && method === 'GET') {
      const period = parsedUrl.query.period || 'todos'; // dia, semana, mes, ano, todos
      let dateFilter = '';
      const params = [];

      if (period === 'dia') {
        dateFilter = "AND o.order_date = date('now', 'localtime')";
      } else if (period === 'semana') {
        dateFilter = "AND o.order_date >= date('now', 'localtime', '-7 days')";
      } else if (period === 'mes') {
        dateFilter = "AND o.order_date >= date('now', 'localtime', 'start of month')";
      } else if (period === 'ano') {
        dateFilter = "AND o.order_date >= date('now', 'localtime', 'start of year')";
      }

      // Period Revenue, Costs, Profits & Boxes
      const summaryQuery = `
        SELECT 
          COALESCE(SUM(total_amount), 0) AS total_revenue,
          COALESCE(SUM(CASE WHEN is_paid = 1 THEN total_amount ELSE 0 END), 0) AS paid_revenue,
          COALESCE(SUM(CASE WHEN is_paid = 0 THEN total_amount ELSE 0 END), 0) AS pending_revenue,
          COALESCE(SUM(total_boxes), 0) AS total_boxes,
          COALESCE(SUM(CASE WHEN is_dispatched = 1 THEN total_boxes ELSE 0 END), 0) AS dispatched_boxes,
          COALESCE(SUM(CASE WHEN is_dispatched = 0 THEN total_boxes ELSE 0 END), 0) AS awaiting_boxes,
          COALESCE(SUM(total_cost), 0) AS total_cost,
          COALESCE(SUM(total_profit), 0) AS total_profit,
          COUNT(*) AS total_orders
        FROM orders o
        WHERE 1=1 ${dateFilter}
      `;
      const periodSummary = db.prepare(summaryQuery).get(...params);

      const totalRevenue = periodSummary.total_revenue || 0;
      const totalProfit = periodSummary.total_profit || 0;
      const totalCost = periodSummary.total_cost || 0;
      const profitMargin = totalRevenue > 0 ? Number(((totalProfit / totalRevenue) * 100).toFixed(1)) : 0;

      // Activity statistics for Weekly and Monthly Profit Averages
      const activityQuery = `
        SELECT 
          COUNT(DISTINCT dispatch_friday) AS active_fridays,
          COUNT(DISTINCT strftime('%Y-%W', order_date)) AS active_weeks,
          COUNT(DISTINCT strftime('%Y-%m', order_date)) AS active_months,
          MIN(order_date) AS min_order_date,
          MAX(order_date) AS max_order_date
        FROM orders o
        WHERE 1=1 ${dateFilter}
      `;
      const activity = db.prepare(activityQuery).get(...params);

      let avgWeeklyProfit = 0;
      let avgMonthlyProfit = 0;

      if (period === 'dia') {
        avgWeeklyProfit = totalProfit;
        avgMonthlyProfit = totalProfit;
      } else if (period === 'semana') {
        avgWeeklyProfit = totalProfit;
        avgMonthlyProfit = Number((totalProfit * 4.33).toFixed(2));
      } else if (period === 'mes') {
        avgWeeklyProfit = Number((totalProfit / 4).toFixed(2));
        avgMonthlyProfit = totalProfit;
      } else {
        // 'ano' or 'todos'
        const weeksCount = Math.max(1, activity?.active_fridays || activity?.active_weeks || 1);
        const monthsCount = Math.max(1, activity?.active_months || 1);
        avgWeeklyProfit = Number((totalProfit / weeksCount).toFixed(2));
        avgMonthlyProfit = Number((totalProfit / monthsCount).toFixed(2));
      }

      // Weekly breakdown
      const weeklyBreakdownQuery = `
        SELECT 
          dispatch_friday,
          COUNT(*) AS orders_count,
          COALESCE(SUM(total_amount), 0) AS revenue,
          COALESCE(SUM(total_cost), 0) AS cost,
          COALESCE(SUM(total_profit), 0) AS profit,
          COALESCE(SUM(total_boxes), 0) AS boxes,
          COALESCE(SUM(CASE WHEN is_paid = 1 THEN total_amount ELSE 0 END), 0) AS paid_revenue
        FROM orders o
        WHERE 1=1 ${dateFilter}
        GROUP BY dispatch_friday
        ORDER BY dispatch_friday DESC
        LIMIT 10
      `;
      const weeklyBreakdown = db.prepare(weeklyBreakdownQuery).all(...params);

      // Monthly breakdown
      const monthlyBreakdownQuery = `
        SELECT 
          strftime('%Y-%m', order_date) AS month_code,
          COUNT(*) AS orders_count,
          COALESCE(SUM(total_amount), 0) AS revenue,
          COALESCE(SUM(total_cost), 0) AS cost,
          COALESCE(SUM(total_profit), 0) AS profit,
          COALESCE(SUM(total_boxes), 0) AS boxes
        FROM orders o
        WHERE 1=1 ${dateFilter}
        GROUP BY month_code
        ORDER BY month_code DESC
        LIMIT 12
      `;
      const monthlyBreakdown = db.prepare(monthlyBreakdownQuery).all(...params);

      // Global Total Receivable (All Unpaid Orders across all time)
      const receivableQuery = `
        SELECT 
          COALESCE(SUM(total_amount), 0) AS total_receivable,
          COUNT(*) AS unpaid_orders_count
        FROM orders
        WHERE is_paid = 0
      `;
      const receivableSummary = db.prepare(receivableQuery).get();

      // Debtors List (Customers who owe money)
      const debtorsQuery = `
        SELECT 
          c.id AS customer_id,
          c.name AS customer_name,
          c.phone AS customer_phone,
          c.photo_url AS customer_photo,
          SUM(o.total_amount) AS total_debt,
          COUNT(o.id) AS pending_orders_count,
          GROUP_CONCAT(o.dispatch_friday) AS pending_dates
        FROM orders o
        JOIN contacts c ON o.customer_id = c.id
        WHERE o.is_paid = 0
        GROUP BY c.id
        ORDER BY total_debt DESC
      `;
      const debtors = db.prepare(debtorsQuery).all();

      // Top Selling Models with Profit
      const topModelsQuery = `
        SELECT 
          oi.model_name,
          SUM(oi.quantity) AS total_boxes,
          SUM(oi.total_price) AS total_value,
          SUM(oi.total_price - (oi.quantity * oi.cost_price)) AS total_profit
        FROM order_items oi
        JOIN orders o ON oi.order_id = o.id
        WHERE 1=1 ${dateFilter}
        GROUP BY oi.model_name
        ORDER BY total_boxes DESC
        LIMIT 5
      `;
      const topModels = db.prepare(topModelsQuery).all(...params);

      // Sales Trend (last 14 days) with profit
      const trendQuery = `
        SELECT 
          order_date,
          SUM(total_amount) AS daily_revenue,
          SUM(total_cost) AS daily_cost,
          SUM(total_profit) AS daily_profit,
          SUM(total_boxes) AS daily_boxes
        FROM orders
        WHERE order_date >= date('now', 'localtime', '-14 days')
        GROUP BY order_date
        ORDER BY order_date ASC
      `;
      const salesTrend = db.prepare(trendQuery).all();

      // Recent Orders with dispatch and payment status
      const recentOrdersQuery = `
        SELECT 
          o.id,
          o.dispatch_friday,
          o.order_date,
          o.total_amount,
          o.total_cost,
          o.total_profit,
          o.total_boxes,
          o.is_paid,
          o.is_dispatched,
          c.name AS customer_name,
          c.phone AS customer_phone
        FROM orders o
        JOIN contacts c ON o.customer_id = c.id
        ORDER BY o.id DESC
        LIMIT 10
      `;
      const recentOrders = db.prepare(recentOrdersQuery).all();

      return sendJSON(res, 200, {
        period,
        periodSummary: {
          ...periodSummary,
          profit_margin: profitMargin
        },
        profitSummary: {
          total_profit: totalProfit,
          total_cost: totalCost,
          profit_margin: profitMargin,
          avg_weekly_profit: avgWeeklyProfit,
          avg_monthly_profit: avgMonthlyProfit,
          active_weeks: activity?.active_fridays || activity?.active_weeks || 1,
          active_months: activity?.active_months || 1,
          weekly_breakdown: weeklyBreakdown,
          monthly_breakdown: monthlyBreakdown
        },
        receivableSummary,
        debtors,
        topModels,
        salesTrend,
        recentOrders
      });
    }

    // 2. Contacts (Clientes & Fornecedores)
    if (pathname === '/api/contacts' && method === 'GET') {
      const type = parsedUrl.query.type; // 'cliente' or 'fornecedor'
      let sql = 'SELECT * FROM contacts';
      const params = [];
      if (type) {
        sql += ' WHERE type = ?';
        params.push(type);
      }
      sql += ' ORDER BY name ASC';
      const contacts = db.prepare(sql).all(...params);

      // Enrich contacts with financial/business metrics
      const enriched = contacts.map(c => {
        if (c.type === 'cliente') {
          const stats = db.prepare(`
            SELECT 
              COALESCE(SUM(total_amount), 0) AS total_spent,
              COALESCE(SUM(CASE WHEN is_paid = 0 THEN total_amount ELSE 0 END), 0) AS total_debt,
              COUNT(*) AS total_orders
            FROM orders
            WHERE customer_id = ?
          `).get(c.id);
          return { ...c, ...stats };
        } else {
          // Fornecedor: count models supplied
          const stats = db.prepare(`
            SELECT COUNT(*) AS supplied_models_count
            FROM model_suppliers
            WHERE supplier_id = ?
          `).get(c.id);
          return { ...c, ...stats };
        }
      });

      return sendJSON(res, 200, enriched);
    }

    if (pathname === '/api/contacts' && method === 'POST') {
      const body = await parseBody(req);
      if (!body.name || !body.type) {
        return sendError(res, 400, 'Nome e Tipo são obrigatórios');
      }
      const stmt = db.prepare(`
        INSERT INTO contacts (type, name, phone, photo_url, notes)
        VALUES (?, ?, ?, ?, ?)
      `);
      const result = stmt.run(
        body.type,
        body.name.trim(),
        (body.phone || '').trim(),
        body.photo_url || (body.type === 'cliente' ? '/assets/client1.svg' : '/assets/supplier1.svg'),
        body.notes || ''
      );
      const newContact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(result.lastInsertRowid);
      return sendJSON(res, 201, newContact);
    }

    const contactIdMatch = pathname.match(/^\/api\/contacts\/(\d+)$/);
    if (contactIdMatch) {
      const contactId = Number(contactIdMatch[1]);
      if (method === 'GET') {
        const contact = db.prepare('SELECT * FROM contacts WHERE id = ?').get(contactId);
        if (!contact) return sendError(res, 404, 'Contato não encontrado');
        return sendJSON(res, 200, contact);
      }
      if (method === 'PUT') {
        const body = await parseBody(req);
        if (!body.name || !body.name.trim()) {
          return sendError(res, 400, 'Nome é obrigatório');
        }
        const existing = db.prepare('SELECT * FROM contacts WHERE id = ?').get(contactId);
        if (!existing) {
          return sendError(res, 404, 'Contato não encontrado');
        }
        const newType = (body.type === 'cliente' || body.type === 'fornecedor') ? body.type : existing.type;
        const newPhoto = body.photo_url !== undefined && body.photo_url !== '' ? body.photo_url : existing.photo_url;
        db.prepare(`
          UPDATE contacts
          SET type = ?, name = ?, phone = ?, photo_url = ?, notes = ?
          WHERE id = ?
        `).run(
          newType,
          body.name.trim(),
          (body.phone || '').trim(),
          newPhoto,
          (body.notes || '').trim(),
          contactId
        );
        const updated = db.prepare('SELECT * FROM contacts WHERE id = ?').get(contactId);
        return sendJSON(res, 200, updated);
      }
      if (method === 'DELETE') {
        // Check if has orders
        const ordersCount = db.prepare('SELECT count(*) as count FROM orders WHERE customer_id = ?').get(contactId);
        if (ordersCount.count > 0) {
          return sendError(res, 400, 'Não é possível excluir contato que possui pedidos vinculados.');
        }
        db.prepare('DELETE FROM contacts WHERE id = ?').run(contactId);
        return sendJSON(res, 200, { success: true });
      }
    }

    // 3. Shoe Models & Catalog
    if (pathname === '/api/models' && method === 'GET') {
      const models = db.prepare('SELECT * FROM models ORDER BY name ASC').all();

      const enriched = models.map(m => {
        // Linked suppliers
        const suppliers = db.prepare(`
          SELECT 
            ms.id AS link_id,
            ms.supplier_id,
            ms.cost_price,
            ms.notes,
            ms.updated_at,
            c.name AS supplier_name,
            c.phone AS supplier_phone,
            c.photo_url AS supplier_photo
          FROM model_suppliers ms
          JOIN contacts c ON ms.supplier_id = c.id
          WHERE ms.model_id = ?
        `).all(m.id);

        // Photos
        const photos = db.prepare(`
          SELECT * FROM model_photos WHERE model_id = ? ORDER BY is_primary DESC, id ASC
        `).all(m.id);

        // Price history
        const history = db.prepare(`
          SELECT 
            ph.*,
            c.name AS supplier_name
          FROM price_history ph
          LEFT JOIN contacts c ON ph.supplier_id = c.id
          WHERE ph.model_id = ?
          ORDER BY ph.id DESC
          LIMIT 10
        `).all(m.id);

        return {
          ...m,
          suppliers,
          photos,
          history
        };
      });

      return sendJSON(res, 200, enriched);
    }

    if (pathname === '/api/models' && method === 'POST') {
      const body = await parseBody(req);
      if (!body.name) {
        return sendError(res, 400, 'Nome do modelo é obrigatório');
      }

      const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
      const lastPrice = Number(body.last_purchase_price) || 0;

      const stmt = db.prepare(`
        INSERT INTO models (name, brand, last_purchase_price, last_price_updated_at, description)
        VALUES (?, ?, ?, ?, ?)
      `);

      const resInsert = stmt.run(
        body.name.trim(),
        (body.brand || '').trim(),
        lastPrice,
        lastPrice > 0 ? now : null,
        body.description || ''
      );
      const modelId = resInsert.lastInsertRowid;

      // If supplier provided
      if (body.supplier_id) {
        db.prepare(`
          INSERT INTO model_suppliers (model_id, supplier_id, cost_price, notes)
          VALUES (?, ?, ?, ?)
        `).run(modelId, Number(body.supplier_id), lastPrice, body.supplier_notes || '');

        if (lastPrice > 0) {
          db.prepare(`
            INSERT INTO price_history (model_id, supplier_id, old_price, new_price, changed_at, notes)
            VALUES (?, ?, ?, ?, ?, ?)
          `).run(modelId, Number(body.supplier_id), 0, lastPrice, now, 'Preço de cadastro inicial');
        }
      }

      // If initial photo provided
      if (body.photo_url) {
        db.prepare(`
          INSERT INTO model_photos (model_id, color, cut_type, url, is_primary)
          VALUES (?, ?, ?, ?, 1)
        `).run(modelId, body.photo_color || 'Padrão', body.photo_cut || 'baixa', body.photo_url);
      }

      const created = db.prepare('SELECT * FROM models WHERE id = ?').get(modelId);
      return sendJSON(res, 201, created);
    }

    const modelIdMatch = pathname.match(/^\/api\/models\/(\d+)$/);
    if (modelIdMatch) {
      const modelId = Number(modelIdMatch[1]);
      if (method === 'PUT') {
        const body = await parseBody(req);
        db.prepare(`
          UPDATE models
          SET name = ?, brand = ?, description = ?
          WHERE id = ?
        `).run(body.name.trim(), body.brand || '', body.description || '', modelId);
        const updated = db.prepare('SELECT * FROM models WHERE id = ?').get(modelId);
        return sendJSON(res, 200, updated);
      }
      if (method === 'DELETE') {
        db.prepare('DELETE FROM models WHERE id = ?').run(modelId);
        return sendJSON(res, 200, { success: true });
      }
    }

    // Update model purchase price with history log
    const modelPriceMatch = pathname.match(/^\/api\/models\/(\d+)\/price$/);
    if (modelPriceMatch && method === 'POST') {
      const modelId = Number(modelPriceMatch[1]);
      const body = await parseBody(req);
      const newPrice = Number(body.new_price);
      if (isNaN(newPrice) || newPrice < 0) {
        return sendError(res, 400, 'Preço inválido');
      }

      const current = db.prepare('SELECT last_purchase_price FROM models WHERE id = ?').get(modelId);
      if (!current) {
        return sendError(res, 404, 'Modelo não encontrado');
      }

      const oldPrice = current.last_purchase_price;
      const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

      // Update model record
      db.prepare(`
        UPDATE models
        SET last_purchase_price = ?, last_price_updated_at = ?
        WHERE id = ?
      `).run(newPrice, now, modelId);

      // Record in history
      db.prepare(`
        INSERT INTO price_history (model_id, supplier_id, old_price, new_price, changed_at, notes)
        VALUES (?, ?, ?, ?, ?, ?)
      `).run(modelId, body.supplier_id ? Number(body.supplier_id) : null, oldPrice, newPrice, now, body.notes || 'Atualização de preço de compra');

      // If supplier provided, update or insert in model_suppliers
      if (body.supplier_id) {
        const existingLink = db.prepare(`
          SELECT id FROM model_suppliers WHERE model_id = ? AND supplier_id = ?
        `).get(modelId, Number(body.supplier_id));

        if (existingLink) {
          db.prepare(`
            UPDATE model_suppliers
            SET cost_price = ?, updated_at = ?
            WHERE id = ?
          `).run(newPrice, now, existingLink.id);
        } else {
          db.prepare(`
            INSERT INTO model_suppliers (model_id, supplier_id, cost_price, notes, updated_at)
            VALUES (?, ?, ?, ?, ?)
          `).run(modelId, Number(body.supplier_id), newPrice, body.notes || '', now);
        }
      }

      return sendJSON(res, 200, {
        success: true,
        model_id: modelId,
        old_price: oldPrice,
        new_price: newPrice,
        updated_at: now
      });
    }

    // Link Supplier to Model
    const modelSupMatch = pathname.match(/^\/api\/models\/(\d+)\/suppliers$/);
    if (modelSupMatch && method === 'POST') {
      const modelId = Number(modelSupMatch[1]);
      const body = await parseBody(req);
      const supplierId = Number(body.supplier_id);
      const costPrice = Number(body.cost_price) || 0;
      const notes = body.notes || '';
      const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

      const existing = db.prepare('SELECT id FROM model_suppliers WHERE model_id = ? AND supplier_id = ?').get(modelId, supplierId);
      if (existing) {
        db.prepare(`
          UPDATE model_suppliers
          SET cost_price = ?, notes = ?, updated_at = ?
          WHERE id = ?
        `).run(costPrice, notes, now, existing.id);
      } else {
        db.prepare(`
          INSERT INTO model_suppliers (model_id, supplier_id, cost_price, notes, updated_at)
          VALUES (?, ?, ?, ?, ?)
        `).run(modelId, supplierId, costPrice, notes, now);
      }

      return sendJSON(res, 200, { success: true });
    }

    const modelSupDeleteMatch = pathname.match(/^\/api\/models\/(\d+)\/suppliers\/(\d+)$/);
    if (modelSupDeleteMatch && method === 'DELETE') {
      const modelId = Number(modelSupDeleteMatch[1]);
      const supplierId = Number(modelSupDeleteMatch[2]);
      db.prepare('DELETE FROM model_suppliers WHERE model_id = ? AND supplier_id = ?').run(modelId, supplierId);
      return sendJSON(res, 200, { success: true });
    }

    // Delete photo
    const photoDeleteMatch = pathname.match(/^\/api\/photos\/(\d+)$/);
    if (photoDeleteMatch && method === 'DELETE') {
      const photoId = Number(photoDeleteMatch[1]);
      db.prepare('DELETE FROM model_photos WHERE id = ?').run(photoId);
      return sendJSON(res, 200, { success: true });
    }

    // 4. Orders & Dispatch
    if (pathname === '/api/orders' && method === 'GET') {
      const friday = parsedUrl.query.dispatch_friday;
      const isPaid = parsedUrl.query.is_paid;
      const isDispatched = parsedUrl.query.is_dispatched;
      const customerId = parsedUrl.query.customer_id;

      let sql = `
        SELECT 
          o.*,
          c.name AS customer_name,
          c.phone AS customer_phone,
          c.photo_url AS customer_photo
        FROM orders o
        JOIN contacts c ON o.customer_id = c.id
        WHERE 1=1
      `;
      const params = [];

      if (friday) {
        sql += ' AND o.dispatch_friday = ?';
        params.push(friday);
      }
      if (isPaid !== undefined && isPaid !== '') {
        sql += ' AND o.is_paid = ?';
        params.push(Number(isPaid));
      }
      if (isDispatched !== undefined && isDispatched !== '') {
        sql += ' AND o.is_dispatched = ?';
        params.push(Number(isDispatched));
      }
      if (customerId) {
        sql += ' AND o.customer_id = ?';
        params.push(Number(customerId));
      }

      sql += ' ORDER BY o.dispatch_friday DESC, o.id DESC';
      const orders = db.prepare(sql).all(...params);

      const enriched = orders.map(ord => {
        const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(ord.id);
        const enrichedItems = items.map(it => ({
          ...it,
          profit: (it.total_price || 0) - ((it.cost_price || 0) * (it.quantity || 1))
        }));
        return {
          ...ord,
          items: enrichedItems
        };
      });

      return sendJSON(res, 200, enriched);
    }

    // Get Single Order Details
    const singleOrderMatch = pathname.match(/^\/api\/orders\/(\d+)$/);
    if (singleOrderMatch && method === 'GET') {
      const orderId = Number(singleOrderMatch[1]);
      const order = db.prepare(`
        SELECT o.*, c.name AS customer_name, c.phone AS customer_phone
        FROM orders o
        JOIN contacts c ON o.customer_id = c.id
        WHERE o.id = ?
      `).get(orderId);

      if (!order) {
        return sendError(res, 404, 'Pedido não encontrado');
      }

      const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);
      return sendJSON(res, 200, { ...order, items });
    }

    // Create Order (Supports past retro orders, dispatched status, and paid status)
    if (pathname === '/api/orders' && method === 'POST') {
      const body = await parseBody(req);
      if (!body.customer_id) {
        return sendError(res, 400, 'Cliente é obrigatório');
      }
      if (!body.items || !Array.isArray(body.items) || body.items.length === 0) {
        return sendError(res, 400, 'Pelo menos um item deve ser adicionado ao pedido');
      }

      const dispatchFriday = body.dispatch_friday || getNextFriday();
      const orderDate = body.order_date || new Date().toISOString().split('T')[0];
      const isPaid = Number(body.is_paid) ? 1 : 0;
      const todayStr = new Date().toISOString().split('T')[0];
      
      // If dispatch_friday is in the past and is_dispatched wasn't passed, default to dispatched (1)
      const isDispatched = body.is_dispatched !== undefined 
        ? (Number(body.is_dispatched) ? 1 : 0)
        : (dispatchFriday < todayStr ? 1 : 0);
      
      const notes = body.notes || '';

      // Calculate totals with cost & profit
      let totalAmount = 0;
      let totalCost = 0;
      let totalBoxes = 0;

      const processedItems = body.items.map(item => {
        const qty = Number(item.quantity) || 1;
        const price = Number(item.unit_price) || 0;
        let cost = Number(item.cost_price);

        // Auto-fetch cost from model if not given
        if ((isNaN(cost) || cost === 0) && item.model_id) {
          const mod = db.prepare('SELECT last_purchase_price FROM models WHERE id = ?').get(Number(item.model_id));
          if (mod) {
            cost = Number(mod.last_purchase_price) || 0;
          }
        }
        if (isNaN(cost)) cost = 0;

        totalBoxes += qty;
        totalAmount += qty * price;
        totalCost += qty * cost;

        return {
          model_id: item.model_id ? Number(item.model_id) : null,
          model_name: (item.model_name || 'Sem Modelo').trim(),
          color: (item.color || 'Padrão').trim(),
          cut_type: item.cut_type || 'baixa',
          quantity: qty,
          cost_price: cost,
          unit_price: price,
          total_price: qty * price
        };
      });

      const totalProfit = totalAmount - totalCost;

      const insertOrder = db.prepare(`
        INSERT INTO orders (customer_id, dispatch_friday, order_date, total_amount, total_boxes, is_paid, is_dispatched, total_cost, total_profit, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      const resOrd = insertOrder.run(
        Number(body.customer_id),
        dispatchFriday,
        orderDate,
        totalAmount,
        totalBoxes,
        isPaid,
        isDispatched,
        totalCost,
        totalProfit,
        notes
      );
      const orderId = resOrd.lastInsertRowid;

      const insertItem = db.prepare(`
        INSERT INTO order_items (order_id, model_id, model_name, color, cut_type, quantity, cost_price, unit_price, total_price)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      processedItems.forEach(item => {
        insertItem.run(
          orderId,
          item.model_id,
          item.model_name,
          item.color,
          item.cut_type,
          item.quantity,
          item.cost_price,
          item.unit_price,
          item.total_price
        );
      });

      const created = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
      const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);
      return sendJSON(res, 201, { ...created, items });
    }

    // Update / Edit Order
    if (singleOrderMatch && method === 'PUT') {
      const orderId = Number(singleOrderMatch[1]);
      const body = await parseBody(req);
      if (!body.customer_id) {
        return sendError(res, 400, 'Cliente é obrigatório');
      }

      const dispatchFriday = body.dispatch_friday || getNextFriday();
      const orderDate = body.order_date || new Date().toISOString().split('T')[0];
      const isPaid = Number(body.is_paid) ? 1 : 0;
      const isDispatched = Number(body.is_dispatched) ? 1 : 0;
      const notes = body.notes || '';

      const items = Array.isArray(body.items) && body.items.length > 0 ? body.items : null;

      if (items) {
        let totalAmount = 0;
        let totalCost = 0;
        let totalBoxes = 0;

        const processedItems = items.map(item => {
          const qty = Number(item.quantity) || 1;
          const price = Number(item.unit_price) || 0;
          let cost = Number(item.cost_price);
          if ((isNaN(cost) || cost === 0) && item.model_id) {
            const mod = db.prepare('SELECT last_purchase_price FROM models WHERE id = ?').get(Number(item.model_id));
            if (mod) cost = Number(mod.last_purchase_price) || 0;
          }
          if (isNaN(cost)) cost = 0;

          totalBoxes += qty;
          totalAmount += qty * price;
          totalCost += qty * cost;

          return {
            model_id: item.model_id ? Number(item.model_id) : null,
            model_name: (item.model_name || 'Sem Modelo').trim(),
            color: (item.color || 'Padrão').trim(),
            cut_type: item.cut_type || 'baixa',
            quantity: qty,
            cost_price: cost,
            unit_price: price,
            total_price: qty * price
          };
        });

        const totalProfit = totalAmount - totalCost;

        // Delete old items and insert updated items
        db.prepare('DELETE FROM order_items WHERE order_id = ?').run(orderId);

        const insertItem = db.prepare(`
          INSERT INTO order_items (order_id, model_id, model_name, color, cut_type, quantity, cost_price, unit_price, total_price)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);

        processedItems.forEach(item => {
          insertItem.run(
            orderId,
            item.model_id,
            item.model_name,
            item.color,
            item.cut_type,
            item.quantity,
            item.cost_price,
            item.unit_price,
            item.total_price
          );
        });

        db.prepare(`
          UPDATE orders
          SET customer_id = ?, dispatch_friday = ?, order_date = ?, total_amount = ?, total_boxes = ?, is_paid = ?, is_dispatched = ?, total_cost = ?, total_profit = ?, notes = ?
          WHERE id = ?
        `).run(Number(body.customer_id), dispatchFriday, orderDate, totalAmount, totalBoxes, isPaid, isDispatched, totalCost, totalProfit, notes, orderId);

      } else {
        // Just update header info
        db.prepare(`
          UPDATE orders
          SET customer_id = ?, dispatch_friday = ?, order_date = ?, is_paid = ?, is_dispatched = ?, notes = ?
          WHERE id = ?
        `).run(Number(body.customer_id), dispatchFriday, orderDate, isPaid, isDispatched, notes, orderId);
      }

      const updated = db.prepare('SELECT * FROM orders WHERE id = ?').get(orderId);
      const updatedItems = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);
      return sendJSON(res, 200, { ...updated, items: updatedItems });
    }

    // Toggle Payment Status
    const togglePaidMatch = pathname.match(/^\/api\/orders\/(\d+)\/toggle-paid$/);
    if (togglePaidMatch && method === 'PATCH') {
      const orderId = Number(togglePaidMatch[1]);
      const current = db.prepare('SELECT is_paid FROM orders WHERE id = ?').get(orderId);
      if (!current) {
        return sendError(res, 404, 'Pedido não encontrado');
      }
      const newStatus = current.is_paid === 1 ? 0 : 1;
      db.prepare('UPDATE orders SET is_paid = ? WHERE id = ?').run(newStatus, orderId);
      return sendJSON(res, 200, { success: true, is_paid: newStatus });
    }

    // Toggle Dispatched Status
    const toggleDispatchedMatch = pathname.match(/^\/api\/orders\/(\d+)\/toggle-dispatched$/);
    if (toggleDispatchedMatch && method === 'PATCH') {
      const orderId = Number(toggleDispatchedMatch[1]);
      const current = db.prepare('SELECT is_dispatched FROM orders WHERE id = ?').get(orderId);
      if (!current) {
        return sendError(res, 404, 'Pedido não encontrado');
      }
      const newStatus = current.is_dispatched === 1 ? 0 : 1;
      db.prepare('UPDATE orders SET is_dispatched = ? WHERE id = ?').run(newStatus, orderId);
      return sendJSON(res, 200, { success: true, is_dispatched: newStatus });
    }

    // Delete order
    if (singleOrderMatch && method === 'DELETE') {
      const orderId = Number(singleOrderMatch[1]);
      db.prepare('DELETE FROM orders WHERE id = ?').run(orderId);
      return sendJSON(res, 200, { success: true });
    }

    // 5. Tree List Generator for an Order (Format matches user's photo!)
    const orderListMatch = pathname.match(/^\/api\/orders\/(\d+)\/tree-list$/);
    if (orderListMatch && method === 'GET') {
      const orderId = Number(orderListMatch[1]);
      const order = db.prepare(`
        SELECT o.*, c.name AS customer_name, c.phone AS customer_phone
        FROM orders o
        JOIN contacts c ON o.customer_id = c.id
        WHERE o.id = ?
      `).get(orderId);

      if (!order) {
        return sendError(res, 404, 'Pedido não encontrado');
      }

      const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(orderId);
      const pixKey = db.prepare("SELECT value FROM settings WHERE key = 'pix_key'").get()?.value || 'xxxxxxxxxxxx';
      const pixName = db.prepare("SELECT value FROM settings WHERE key = 'pix_name'").get()?.value || 'xxxxxxxxxxxx';

      const formattedTree = buildTreeSummary({
        items,
        pixKey,
        pixName,
        customerName: order.customer_name
      });

      return sendJSON(res, 200, {
        orderId,
        customer: {
          name: order.customer_name,
          phone: order.customer_phone
        },
        pixKey,
        pixName,
        formattedText: formattedTree
      });
    }

    // Custom List Generator (Live builder)
    if (pathname === '/api/generate-custom-list' && method === 'POST') {
      const body = await parseBody(req);
      const items = body.items || [];
      const pixKey = body.pixKey || db.prepare("SELECT value FROM settings WHERE key = 'pix_key'").get()?.value || 'xxxxxxxxxxxx';
      const pixName = body.pixName || db.prepare("SELECT value FROM settings WHERE key = 'pix_name'").get()?.value || 'xxxxxxxxxxxx';

      const formattedText = buildTreeSummary({
        items,
        pixKey,
        pixName,
        customerName: body.customerName
      });

      return sendJSON(res, 200, { formattedText });
    }

    // 6. Base64 Upload & Automatic Photo Categorization by Model
    if (pathname === '/api/upload' && method === 'POST') {
      const body = await parseBody(req);
      if (!body.data) {
        return sendError(res, 400, 'Dados da imagem não fornecidos');
      }

      // Extract base64
      const matches = body.data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      let buffer;
      let ext = '.png';

      if (matches && matches.length === 3) {
        const mime = matches[1];
        if (mime === 'image/jpeg') ext = '.jpg';
        else if (mime === 'image/png') ext = '.png';
        else if (mime === 'image/webp') ext = '.webp';
        buffer = Buffer.from(matches[2], 'base64');
      } else {
        buffer = Buffer.from(body.data, 'base64');
      }

      const cleanFileName = (body.filename || 'foto')
        .replace(/[^a-zA-Z0-9_\-\.]/g, '_')
        .replace(/\.[^/.]+$/, '');
      const uniqueName = `${Date.now()}_${cleanFileName}${ext}`;
      const filePath = path.join(UPLOADS_DIR, uniqueName);

      fs.writeFileSync(filePath, buffer);
      const publicUrl = `/uploads/${uniqueName}`;

      // If model_id is provided, automatically link to model photos!
      if (body.model_id) {
        const modelId = Number(body.model_id);
        const color = (body.color || 'Padrão').trim();
        const cutType = (body.cut_type || 'baixa').trim();
        const isPrimary = body.is_primary ? 1 : 0;

        db.prepare(`
          INSERT INTO model_photos (model_id, color, cut_type, url, is_primary)
          VALUES (?, ?, ?, ?, ?)
        `).run(modelId, color, cutType, publicUrl, isPrimary);
      }

      // If contact_id is provided, update avatar
      if (body.contact_id) {
        db.prepare('UPDATE contacts SET photo_url = ? WHERE id = ?').run(publicUrl, Number(body.contact_id));
      }

      return sendJSON(res, 201, {
        success: true,
        url: publicUrl,
        filename: uniqueName
      });
    }

    // 7. Settings
    if (pathname === '/api/settings' && method === 'GET') {
      const rows = db.prepare('SELECT key, value FROM settings').all();
      const settings = {};
      rows.forEach(r => { settings[r.key] = r.value; });
      return sendJSON(res, 200, settings);
    }

    if (pathname === '/api/settings' && method === 'POST') {
      const body = await parseBody(req);
      const upsert = db.prepare(`
        INSERT INTO settings (key, value)
        VALUES (?, ?)
        ON CONFLICT(key) DO UPDATE SET value = excluded.value
      `);

      Object.entries(body).forEach(([k, v]) => {
        upsert.run(k, String(v));
      });

      return sendJSON(res, 200, { success: true });
    }

    // 8. Friday Dispatches List
    if (pathname === '/api/fridays' && method === 'GET') {
      const rows = db.prepare(`
        SELECT 
          dispatch_friday,
          COUNT(*) AS total_orders,
          SUM(total_boxes) AS total_boxes,
          SUM(total_amount) AS total_amount,
          SUM(total_cost) AS total_cost,
          SUM(total_profit) AS total_profit,
          SUM(CASE WHEN is_paid = 1 THEN total_amount ELSE 0 END) AS paid_amount,
          SUM(CASE WHEN is_paid = 0 THEN total_amount ELSE 0 END) AS unpaid_amount,
          SUM(CASE WHEN is_dispatched = 1 THEN 1 ELSE 0 END) AS dispatched_orders,
          SUM(CASE WHEN is_dispatched = 0 THEN 1 ELSE 0 END) AS awaiting_orders
        FROM orders
        GROUP BY dispatch_friday
        ORDER BY dispatch_friday DESC
      `).all();

      return sendJSON(res, 200, {
        upcomingFriday: getNextFriday(),
        lastFriday: getPastFriday(1),
        history: rows
      });
    }

    // ==========================================
    // STATIC FILE SERVING
    // ==========================================
    if (method === 'GET') {
      let relativePath = pathname === '/' ? 'index.html' : pathname;
      if (relativePath.startsWith('/')) {
        relativePath = relativePath.slice(1);
      }

      const filePath = path.join(PUBLIC_DIR, relativePath);

      // Security check: prevent directory traversal
      if (!filePath.startsWith(PUBLIC_DIR)) {
        return sendError(res, 403, 'Acesso Proibido');
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        const stream = fs.createReadStream(filePath);
        return stream.pipe(res);
      }

      // Default fallback to index.html for SPA
      const indexPath = path.join(PUBLIC_DIR, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return fs.createReadStream(indexPath).pipe(res);
      }
    }

    // If nothing matched
    return sendError(res, 404, 'Rota não encontrada');

  } catch (err) {
    console.error('Server Error:', err);
    return sendError(res, 500, err.message || 'Erro interno do servidor');
  }
});

function startServer(port) {
  const s = server.listen(port);
  
  s.once('listening', () => {
    console.log(`=======================================================`);
    console.log(`👟 Sistema de Gestão de Calçados rodando com sucesso!`);
    console.log(`📍 URL Local: http://localhost:${port}`);
    console.log(`=======================================================`);
  });

  s.once('error', (err) => {
    if ((err.code === 'EACCES' || err.code === 'EADDRINUSE') && port === 3000) {
      console.warn(`Porta 3000 ocupada ou restrita pelo Windows, iniciando automaticamente na porta 3001...`);
      startServer(3001);
    } else {
      console.error('Server Listen Error:', err);
    }
  });
}

startServer(PORT);
