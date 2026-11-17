// ========================================================
// SNEAKERFLOW - CLIENT APPLICATION (CLEAN TAILWIND UI)
// ========================================================

const ICONS = {
  check: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>',
  clock: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  truck: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>',
  box: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
  edit: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
  copy: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',
  trash: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
  chat: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',
  phone: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
  plus: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>',
  x: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>',
  calendar: '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  alert: '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
};

const state = {
  currentPeriod: 'todos',
  contacts: [],
  models: [],
  orders: [],
  lastSalesTrend: [],
  settings: {
    pix_key: '00000000000',
    pix_name: 'SUA DISTRIBUIDORA LTDA',
    store_name: 'SneakerFlow'
  },
  upcomingFriday: '',
  lastFriday: '',
  quickDates: null,
  contactFilterType: 'cliente',
  selectedFileBase64: null,
  selectedFileName: '',
  selectedContactPhotoBase64: null,
  selectedContactPhotoName: ''
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  await loadFridaysInfo();
  await loadContacts();
  await loadModels();
  await loadDashboard();
  await loadOrders();
  initGenerator();

  window.addEventListener('resize', () => {
    if (state.lastSalesTrend) renderChart(state.lastSalesTrend);
  });
});

// --- TABS NAVIGATION ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.toggle('active', tab.id === tabId);
  });

  if (tabId === 'tab-dashboard') loadDashboard();
  if (tabId === 'tab-orders') loadOrders();
  if (tabId === 'tab-models') loadModels();
  if (tabId === 'tab-contacts') loadContacts();
  if (tabId === 'tab-generator') updateGeneratorPreview();
}

// --- UTILITIES ---
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatCurrency(val) {
  return Number(val || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

function formatDateTime(dateTimeStr) {
  if (!dateTimeStr) return '-';
  const d = new Date(dateTimeStr);
  if (isNaN(d.getTime())) return dateTimeStr;
  return d.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });
}

function cleanPhone(phone) {
  return (phone || '').replace(/\D/g, '');
}

function getWhatsAppUrl(phone, message = '') {
  let clean = cleanPhone(phone);
  if (!clean) return '#';
  if (!clean.startsWith('55') && clean.length >= 10) {
    clean = '55' + clean;
  }
  return `https://wa.me/${clean}` + (message ? `?text=${encodeURIComponent(message)}` : '');
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <span class="${type === 'error' ? 'text-rose-200' : 'text-emerald-400'}">${type === 'error' ? ICONS.alert : ICONS.check}</span>
    <span>${escapeHtml(message)}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// --- MODALS ---
function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.remove('active');
    if (!document.querySelector('.modal-overlay.active')) {
      document.body.style.overflow = '';
    }
  }
}

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    if (!document.querySelector('.modal-overlay.active')) {
      document.body.style.overflow = '';
    }
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = '';
  }
});

// --- SETTINGS ---
async function loadSettings() {
  try {
    const res = await fetch('/api/settings');
    if (res.ok) {
      const data = await res.json();
      state.settings = { ...state.settings, ...data };
      document.getElementById('settingsPixKey').value = state.settings.pix_key || '';
      document.getElementById('settingsPixName').value = state.settings.pix_name || '';
      document.getElementById('settingsStoreName').value = state.settings.store_name || '';

      const genKey = document.getElementById('genPixKey');
      const genName = document.getElementById('genPixName');
      if (genKey) genKey.value = state.settings.pix_key || '';
      if (genName) genName.value = state.settings.pix_name || '';
    }
  } catch (err) {
    console.error('Error loading settings:', err);
  }
}

async function handleSaveSettings(e) {
  e.preventDefault();
  const key = document.getElementById('settingsPixKey').value.trim();
  const name = document.getElementById('settingsPixName').value.trim();
  const store = document.getElementById('settingsStoreName').value.trim();

  try {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pix_key: key, pix_name: name, store_name: store })
    });
    if (res.ok) {
      state.settings.pix_key = key;
      state.settings.pix_name = name;
      state.settings.store_name = store;
      const genKey = document.getElementById('genPixKey');
      const genName = document.getElementById('genPixName');
      if (genKey) genKey.value = key;
      if (genName) genName.value = name;
      showToast('Configurações salvas com sucesso.');
      closeModal('modalSettings');
      updateGeneratorPreview();
    }
  } catch (err) {
    showToast('Erro ao salvar configurações.', 'error');
  }
}

// --- FRIDAYS & QUICK DATES ---
async function loadFridaysInfo() {
  try {
    const res = await fetch('/api/fridays');
    if (res.ok) {
      const data = await res.json();
      state.upcomingFriday = data.upcomingFriday;
      state.lastFriday = data.lastFriday;
      document.getElementById('headerFridayDate').textContent = formatDate(data.upcomingFriday);

      const sel = document.getElementById('orderFilterFriday');
      const prevVal = sel.value;
      sel.innerHTML = '<option value="">Todas as Sextas de Despacho</option>';
      data.history.forEach(h => {
        const isUpcoming = h.dispatch_friday === data.upcomingFriday;
        const opt = document.createElement('option');
        opt.value = h.dispatch_friday;
        opt.textContent = `${formatDate(h.dispatch_friday)} (${h.total_boxes || 0} cx - ${formatCurrency(h.total_amount)})${isUpcoming ? ' [Próximo]' : ''}`;
        sel.appendChild(opt);
      });
      if (prevVal) sel.value = prevVal;
    }

    const qRes = await fetch('/api/quick-dates');
    if (qRes.ok) {
      state.quickDates = await qRes.json();
      if (!state.lastFriday && state.quickDates.lastFriday) {
        state.lastFriday = state.quickDates.lastFriday;
      }
    }
  } catch (err) {
    console.error('Error loading fridays info:', err);
  }
}

// ========================================================
// 1. DASHBOARD CONTROLLER
// ========================================================
async function loadDashboard() {
  try {
    const res = await fetch(`/api/dashboard?period=${state.currentPeriod}`);
    if (!res.ok) return;
    const data = await res.json();

    const rec = data.receivableSummary;
    document.getElementById('kpiReceivable').textContent = formatCurrency(rec.total_receivable);
    document.getElementById('kpiUnpaidOrdersCount').textContent = rec.unpaid_orders_count;

    const summary = data.periodSummary;
    document.getElementById('kpiTotalRevenue').textContent = formatCurrency(summary.total_revenue);
    document.getElementById('kpiPaidRatio').textContent = formatCurrency(summary.paid_revenue);
    document.getElementById('kpiPendingInPeriod').textContent = `Pendente: ${formatCurrency(summary.pending_revenue)}`;

    const profit = data.profitSummary || {};
    const totalProfitEl = document.getElementById('kpiTotalProfit');
    if (totalProfitEl) totalProfitEl.textContent = formatCurrency(profit.total_profit ?? summary.total_profit);

    const marginEl = document.getElementById('kpiProfitMargin');
    if (marginEl) marginEl.textContent = `${summary.profit_margin ?? profit.profit_margin ?? 0}%`;

    const avgWeeklyEl = document.getElementById('kpiAvgWeeklyProfit');
    if (avgWeeklyEl) {
      avgWeeklyEl.innerHTML = `${formatCurrency(profit.avg_weekly_profit || 0)} <span class="text-xs font-normal text-slate-500">/ sem</span>`;
    }

    const avgMonthlyEl = document.getElementById('kpiAvgMonthlyProfit');
    if (avgMonthlyEl) {
      avgMonthlyEl.textContent = `${formatCurrency(profit.avg_monthly_profit || 0)} / mês`;
    }

    // Demonstrativo Detalhado
    document.getElementById('statGrossRevenue').textContent = formatCurrency(summary.total_revenue);
    document.getElementById('statTotalCost').textContent = formatCurrency(summary.total_cost ?? profit.total_cost);
    document.getElementById('statNetProfit').textContent = formatCurrency(summary.total_profit ?? profit.total_profit);
    document.getElementById('statMarginPct').textContent = `${summary.profit_margin || 0}%`;
    document.getElementById('statAvgWeekly').textContent = formatCurrency(profit.avg_weekly_profit || 0);
    document.getElementById('statAvgMonthly').textContent = formatCurrency(profit.avg_monthly_profit || 0);

    const dispBoxes = summary.dispatched_boxes || 0;
    const totBoxes = summary.total_boxes || 0;
    const awaiting = Math.max(0, totBoxes - dispBoxes);
    document.getElementById('statDispatchedRatio').textContent = `${dispBoxes} / ${totBoxes} cx`;
    document.getElementById('statDispatchedDesc').textContent = `${dispBoxes} despachadas / ${awaiting} a despachar`;

    const labels = {
      dia: 'Faturamento de hoje',
      semana: 'Últimos 7 dias',
      mes: 'Neste mês',
      ano: 'Neste ano',
      todos: 'Todo o histórico'
    };
    document.getElementById('kpiRevenuePeriodLabel').textContent = labels[state.currentPeriod] || 'No período';

    renderDebtors(data.debtors);
    state.lastSalesTrend = data.salesTrend || [];
    renderChart(state.lastSalesTrend);
    renderTopModels(data.topModels);
    renderRecentOrders(data.recentOrders);
  } catch (err) {
    console.error('Error loading dashboard:', err);
  }
}

function changePeriod(period) {
  state.currentPeriod = period;
  document.querySelectorAll('#periodFilterGroup .filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.period === period);
  });
  loadDashboard();
}

function renderDebtors(debtors) {
  const container = document.getElementById('debtorsListContainer');
  if (!debtors || debtors.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-8 text-center text-sm text-emerald-700 bg-emerald-50/50 rounded-lg border border-emerald-100">
        Nenhum cliente com pagamento pendente no momento. Todas as contas estão em dia.
      </div>
    `;
    return;
  }

  container.innerHTML = debtors.map(d => {
    const msg = `Olá ${d.customer_name}, tudo bem? Passando para atualizar sobre o fechamento dos pedidos de calçados. O valor pendente é de *${formatCurrency(d.total_debt)}* (${d.pending_orders_count} pedido(s)). Segue nossa chave Pix: *${state.settings.pix_key}* (Titular: ${state.settings.pix_name}). Assim que realizar o pagamento, por favor envie o comprovante por aqui. Obrigado.`;
    const waUrl = getWhatsAppUrl(d.customer_phone, msg);

    return `
      <div class="flex items-center justify-between gap-3 p-4 rounded-xl bg-slate-50/80 border border-rose-200/80 hover:border-rose-300 transition">
        <div class="flex items-center gap-3 min-w-0">
          <img src="${escapeHtml(d.customer_photo || '/assets/client1.svg')}" class="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0 bg-white" alt="${escapeHtml(d.customer_name)}">
          <div class="min-w-0">
            <h3 class="text-sm font-semibold text-slate-900 truncate">${escapeHtml(d.customer_name)}</h3>
            <p class="text-xs text-slate-500 truncate">${escapeHtml(d.customer_phone || 'Sem telefone')} · ${d.pending_orders_count} pendência(s)</p>
            <div class="text-sm font-bold text-rose-600 mt-0.5 tabular-nums">${formatCurrency(d.total_debt)}</div>
          </div>
        </div>
        <a href="${waUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition shrink-0" title="Abrir WhatsApp com cobrança">
          ${ICONS.chat}
          <span>Cobrar</span>
        </a>
      </div>
    `;
  }).join('');
}

function renderChart(trend) {
  const canvas = document.getElementById('salesChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0) return;

  const h = 250;
  canvas.width = rect.width * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  ctx.clearRect(0, 0, w, h);

  if (!trend || trend.length === 0) {
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 13px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Nenhuma venda registrada nos últimos 14 dias', w / 2, h / 2);
    return;
  }

  const padding = { top: 24, right: 20, bottom: 36, left: 64 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const maxVal = Math.max(...trend.map(t => Number(t.daily_revenue) || 0), 500);

  // Horizontal grid lines
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  const gridSteps = 4;
  for (let i = 0; i <= gridSteps; i++) {
    const y = padding.top + (chartH / gridSteps) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();

    const val = maxVal - (maxVal / gridSteps) * i;
    ctx.fillStyle = '#64748b';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`R$ ${Math.round(val)}`, padding.left - 10, y + 4);
  }

  // Dual bars: Revenue (slate-900) and Profit (emerald-500)
  const stepX = chartW / trend.length;
  const groupW = Math.min(40, stepX * 0.65);
  const singleBarW = Math.max(6, (groupW - 4) / 2);

  trend.forEach((item, idx) => {
    const centerX = padding.left + idx * stepX + stepX / 2;
    const rev = Number(item.daily_revenue) || 0;
    const prof = Math.max(0, Number(item.daily_profit) || 0);

    const revH = (rev / maxVal) * chartH;
    const profH = (prof / maxVal) * chartH;

    // Revenue bar
    ctx.fillStyle = '#0f172a';
    const revX = centerX - singleBarW - 1.5;
    const revY = padding.top + chartH - revH;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(revX, revY, singleBarW, revH, [3, 3, 0, 0]) : ctx.rect(revX, revY, singleBarW, revH);
    ctx.fill();

    // Profit bar
    ctx.fillStyle = '#10b981';
    const profX = centerX + 1.5;
    const profY = padding.top + chartH - profH;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(profX, profY, singleBarW, profH, [3, 3, 0, 0]) : ctx.rect(profX, profY, singleBarW, profH);
    ctx.fill();

    // Date label
    ctx.fillStyle = '#64748b';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    const parts = (item.order_date || '').split('-');
    const shortDate = parts.length === 3 ? `${parts[2]}/${parts[1]}` : (item.order_date || '');
    ctx.fillText(shortDate, centerX, h - padding.bottom + 18);

    // Boxes count above bar
    if (item.daily_boxes > 0) {
      ctx.fillStyle = '#334155';
      ctx.font = '600 10px Inter, sans-serif';
      ctx.fillText(`${item.daily_boxes}cx`, centerX, Math.min(revY, profY) - 6);
    }
  });
}

function renderTopModels(models) {
  const container = document.getElementById('topModelsList');
  if (!models || models.length === 0) {
    container.innerHTML = '<p class="text-xs text-slate-400 py-6 text-center">Nenhuma venda registrada no período.</p>';
    return;
  }

  container.innerHTML = models.map((m, idx) => `
    <div class="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
      <div class="flex items-center gap-3 min-w-0">
        <span class="w-6 h-6 rounded-md ${idx === 0 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700'} text-xs font-bold flex items-center justify-center shrink-0">
          ${idx + 1}
        </span>
        <div class="min-w-0">
          <div class="text-sm font-semibold text-slate-900 truncate">${escapeHtml(m.model_name)}</div>
          <div class="text-xs text-slate-500 tabular-nums">
            ${formatCurrency(m.total_value)} ${m.total_profit !== undefined ? `· <span class="text-emerald-600 font-medium">+${formatCurrency(m.total_profit)}</span>` : ''}
          </div>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 shrink-0 tabular-nums">
        ${m.total_boxes} cx
      </span>
    </div>
  `).join('');
}

function renderRecentOrders(orders) {
  const tbody = document.getElementById('recentOrdersTbody');
  if (!orders || orders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="9" class="py-10 text-center text-sm text-slate-400">Nenhum pedido registrado ainda.</td></tr>';
    return;
  }

  tbody.innerHTML = orders.map(o => `
    <tr class="hover:bg-slate-50/80 transition">
      <td class="py-3 px-4 text-xs text-slate-600 whitespace-nowrap tabular-nums">${formatDate(o.order_date)}</td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-900 whitespace-nowrap tabular-nums">${formatDate(o.dispatch_friday)}</td>
      <td class="py-3 px-4">
        <div class="flex items-center gap-2">
          <span class="font-medium text-slate-900">${escapeHtml(o.customer_name)}</span>
          ${o.customer_phone ? `
            <a href="${getWhatsAppUrl(o.customer_phone)}" target="_blank" class="text-emerald-600 hover:text-emerald-700" title="Abrir WhatsApp">${ICONS.chat}</a>
          ` : ''}
        </div>
      </td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-700 whitespace-nowrap tabular-nums">${o.total_boxes} cx</td>
      <td class="py-3 px-4 text-xs font-semibold text-slate-900 whitespace-nowrap tabular-nums">${formatCurrency(o.total_amount)}</td>
      <td class="py-3 px-4 whitespace-nowrap">
        <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70 tabular-nums">
          +${formatCurrency(o.total_profit)}
        </span>
      </td>
      <td class="py-3 px-4 whitespace-nowrap">
        <button type="button" onclick="toggleOrderDispatched(${o.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${o.is_dispatched === 1 ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100' : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'}" title="Clique para alternar status do despacho">
          ${o.is_dispatched === 1 ? ICONS.truck : ICONS.box}
          <span>${o.is_dispatched === 1 ? 'Despachado' : 'A Despachar'}</span>
        </button>
      </td>
      <td class="py-3 px-4 whitespace-nowrap">
        <button type="button" onclick="toggleOrderPaid(${o.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${o.is_paid === 1 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'}" title="Clique para alternar status do pagamento">
          ${o.is_paid === 1 ? ICONS.check : ICONS.clock}
          <span>${o.is_paid === 1 ? 'Pago' : 'Pendente'}</span>
        </button>
      </td>
      <td class="py-3 px-4 whitespace-nowrap text-right">
        <div class="inline-flex items-center gap-1.5">
          <button onclick="editOrder(${o.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Editar pedido">
            ${ICONS.edit}
          </button>
          <button onclick="copyOrderList(${o.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Copiar lista">
            ${ICONS.copy}
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ========================================================
// 2. ORDERS & FRIDAY DISPATCHES
// ========================================================
async function loadOrders() {
  const friday = document.getElementById('orderFilterFriday').value;
  const isPaid = document.getElementById('orderFilterPaid').value;
  const isDispatched = document.getElementById('orderFilterDispatched')?.value || '';

  let url = '/api/orders?';
  if (friday) url += `dispatch_friday=${friday}&`;
  if (isPaid !== '') url += `is_paid=${isPaid}&`;
  if (isDispatched !== '') url += `is_dispatched=${isDispatched}&`;

  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const orders = await res.json();
    state.orders = orders;

    const pendingCount = orders.filter(o => o.is_paid === 0).length;
    document.getElementById('countPendingOrders').textContent = pendingCount;

    renderOrdersGroupedByFriday(orders);
    updateOrderSelectInGenerator();
  } catch (err) {
    console.error('Error loading orders:', err);
  }
}

function renderOrdersGroupedByFriday(orders) {
  const container = document.getElementById('ordersContainer');
  if (!orders || orders.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs">
        <p class="text-sm text-slate-500 mb-5">Nenhum pedido encontrado para os filtros selecionados.</p>
        <div class="flex flex-wrap justify-center gap-3">
          <button onclick="openPastOrderModal()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition">
            Cadastrar Pedido Anterior
          </button>
          <button onclick="openNewOrderModal()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition">
            Criar Novo Pedido
          </button>
        </div>
      </div>
    `;
    return;
  }

  const groups = new Map();
  orders.forEach(o => {
    const f = o.dispatch_friday;
    if (!groups.has(f)) groups.set(f, []);
    groups.get(f).push(o);
  });

  const html = Array.from(groups.entries()).map(([fridayDate, list]) => {
    const totalBoxes = list.reduce((acc, o) => acc + (o.total_boxes || 0), 0);
    const totalVal = list.reduce((acc, o) => acc + (o.total_amount || 0), 0);
    const totalProfit = list.reduce((acc, o) => acc + (o.total_profit || 0), 0);
    const paidVal = list.filter(o => o.is_paid === 1).reduce((acc, o) => acc + (o.total_amount || 0), 0);
    const unpaidVal = totalVal - paidVal;
    const dispatchedBoxes = list.filter(o => o.is_dispatched === 1).reduce((acc, o) => acc + (o.total_boxes || 0), 0);
    const isUpcoming = fridayDate === state.upcomingFriday;
    const isPast = state.upcomingFriday && fridayDate < state.upcomingFriday;

    return `
      <div class="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <!-- Batch Header -->
        <div class="px-5 py-4 bg-slate-50 border-b border-slate-200 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="text-slate-500">${ICONS.calendar}</span>
            <span class="text-sm font-semibold text-slate-900">Despacho: ${formatDate(fridayDate)}</span>
            ${isUpcoming ? '<span class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-900 text-white">Semana Atual</span>' : ''}
            ${isPast ? '<span class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-200 text-slate-600">Semana Anterior</span>' : ''}
          </div>
          <div class="flex flex-wrap items-center gap-4 text-xs">
            <span class="text-slate-600">Total: <strong class="text-slate-900 tabular-nums">${totalBoxes} cx</strong> <span class="text-slate-400">(${dispatchedBoxes} desp.)</span></span>
            <span class="text-slate-600">Faturamento: <strong class="text-slate-900 tabular-nums">${formatCurrency(totalVal)}</strong></span>
            <span class="text-slate-600">Lucro: <strong class="text-emerald-600 tabular-nums">+${formatCurrency(totalProfit)}</strong></span>
            ${unpaidVal > 0
              ? `<span class="font-semibold text-rose-600 tabular-nums">A Receber: ${formatCurrency(unpaidVal)}</span>`
              : '<span class="font-semibold text-emerald-600">100% Pago</span>'}
          </div>
        </div>

        <!-- Batch Orders Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-slate-200 text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-white">
                <th class="py-3 px-4">Cliente</th>
                <th class="py-3 px-4">Itens Vendidos</th>
                <th class="py-3 px-4">Caixas</th>
                <th class="py-3 px-4">Total</th>
                <th class="py-3 px-4">Lucro</th>
                <th class="py-3 px-4">Despacho</th>
                <th class="py-3 px-4">Pagamento</th>
                <th class="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-sm">
              ${list.map(ord => {
                const itemsSummary = (ord.items || []).map(i => `
                  <span class="inline-flex items-center gap-1 mr-1.5 mb-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs">
                    <strong class="font-semibold text-slate-900">${escapeHtml(i.model_name)}</strong>
                    <span class="text-slate-500">${escapeHtml(i.color)} · ${escapeHtml(i.cut_type)} ${i.quantity}x</span>
                  </span>
                `).join('');

                const waUrl = getWhatsAppUrl(ord.customer_phone);

                return `
                  <tr class="hover:bg-slate-50/70 transition">
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img src="${escapeHtml(ord.customer_photo || '/assets/client1.svg')}" class="w-9 h-9 rounded-full object-cover border border-slate-200 bg-slate-100 shrink-0" alt="">
                        <div>
                          <div class="font-semibold text-slate-900 text-sm">${escapeHtml(ord.customer_name)}</div>
                          <div class="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span>${escapeHtml(ord.customer_phone || 'Sem telefone')}</span>
                            ${ord.customer_phone ? `<a href="${waUrl}" target="_blank" class="text-emerald-600 hover:text-emerald-700" title="Abrir WhatsApp">${ICONS.chat}</a>` : ''}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 max-w-sm">
                      <div class="flex flex-wrap">${itemsSummary || '<span class="text-xs text-slate-400">Sem itens</span>'}</div>
                      ${ord.notes ? `<div class="text-xs text-slate-500 mt-1">Obs: ${escapeHtml(ord.notes)}</div>` : ''}
                    </td>
                    <td class="py-3.5 px-4 font-semibold text-slate-800 whitespace-nowrap tabular-nums">${ord.total_boxes} cx</td>
                    <td class="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap tabular-nums">${formatCurrency(ord.total_amount)}</td>
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70 tabular-nums">
                        +${formatCurrency(ord.total_profit)}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      <button type="button" onclick="toggleOrderDispatched(${ord.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${ord.is_dispatched === 1 ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100' : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'}" title="Alternar status do despacho">
                        ${ord.is_dispatched === 1 ? ICONS.truck : ICONS.box}
                        <span>${ord.is_dispatched === 1 ? 'Despachado' : 'A Despachar'}</span>
                      </button>
                    </td>
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      <button type="button" onclick="toggleOrderPaid(${ord.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${ord.is_paid === 1 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'}" title="Alternar status do pagamento">
                        ${ord.is_paid === 1 ? ICONS.check : ICONS.clock}
                        <span>${ord.is_paid === 1 ? 'Pago' : 'Pendente'}</span>
                      </button>
                    </td>
                    <td class="py-3.5 px-4 whitespace-nowrap text-right">
                      <div class="inline-flex items-center gap-1">
                        <button onclick="editOrder(${ord.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Editar pedido">${ICONS.edit}</button>
                        <button onclick="copyOrderList(${ord.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Copiar lista">${ICONS.copy}</button>
                        <button onclick="sendOrderWhatsApp(${ord.id})" class="p-1.5 rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition" title="Enviar lista no WhatsApp">${ICONS.chat}</button>
                        <button onclick="deleteOrder(${ord.id})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Excluir pedido">${ICONS.trash}</button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

async function toggleOrderPaid(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}/toggle-paid`, { method: 'PATCH' });
    if (res.ok) {
      const data = await res.json();
      showToast(data.is_paid === 1 ? 'Pedido marcado como Pago.' : 'Pedido marcado como Pendente.');
      await loadOrders();
      await loadDashboard();
    }
  } catch (err) {
    showToast('Erro ao alternar status de pagamento.', 'error');
  }
}

async function toggleOrderDispatched(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}/toggle-dispatched`, { method: 'PATCH' });
    if (res.ok) {
      const data = await res.json();
      showToast(data.is_dispatched === 1 ? 'Pedido marcado como Despachado.' : 'Pedido marcado como Aguardando Despacho.');
      await loadOrders();
      await loadDashboard();
    }
  } catch (err) {
    showToast('Erro ao alternar status do despacho.', 'error');
  }
}

async function deleteOrder(orderId) {
  if (!confirm('Deseja realmente excluir este pedido?')) return;
  try {
    const res = await fetch(`/api/orders/${orderId}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Pedido excluído com sucesso.');
      await loadOrders();
      await loadDashboard();
      await loadFridaysInfo();
    }
  } catch (err) {
    showToast('Erro ao excluir pedido.', 'error');
  }
}

// --- ORDER MODAL (CREATE / PAST / EDIT) ---
function openNewOrderModal() {
  document.getElementById('orderEditId').value = '';
  document.getElementById('modalNewOrderTitle').textContent = 'Novo Pedido de Despacho';
  document.getElementById('btnSubmitOrder').textContent = 'Salvar Pedido';

  document.getElementById('orderDispatchFriday').value = state.upcomingFriday || '';
  document.getElementById('orderDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('orderDispatchStatus').value = '0';
  document.getElementById('orderPaymentStatus').value = '0';
  document.getElementById('orderNotes').value = '';

  populateClientSelect();

  const container = document.getElementById('orderItemsTableContainer');
  container.innerHTML = '';
  addOrderItemRow();

  recalcOrderTotals();
  openModal('modalNewOrder');
}

function openPastOrderModal() {
  document.getElementById('orderEditId').value = '';
  document.getElementById('modalNewOrderTitle').textContent = 'Cadastrar Pedido Anterior (Já Despachado)';
  document.getElementById('btnSubmitOrder').textContent = 'Salvar Pedido Anterior';

  const pastFriday = state.lastFriday || (state.quickDates ? state.quickDates.lastFriday : '');
  document.getElementById('orderDispatchFriday').value = pastFriday;
  document.getElementById('orderDate').value = pastFriday;
  document.getElementById('orderDispatchStatus').value = '1';
  document.getElementById('orderPaymentStatus').value = '0';
  document.getElementById('orderNotes').value = 'Pedido da semana anterior já despachado';

  populateClientSelect();

  const container = document.getElementById('orderItemsTableContainer');
  container.innerHTML = '';
  addOrderItemRow();

  recalcOrderTotals();
  openModal('modalNewOrder');
}

function setOrderTemplate(type) {
  if (type === 'past_week') {
    const pastFriday = state.lastFriday || (state.quickDates ? state.quickDates.lastFriday : '');
    document.getElementById('orderDispatchFriday').value = pastFriday;
    document.getElementById('orderDate').value = pastFriday;
    document.getElementById('orderDispatchStatus').value = '1';
    showToast('Datas preenchidas para a semana passada (Despachado).');
  } else if (type === 'current_week') {
    document.getElementById('orderDispatchFriday').value = state.upcomingFriday || '';
    document.getElementById('orderDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('orderDispatchStatus').value = '0';
    showToast('Datas preenchidas para o despacho desta semana.');
  } else if (type === 'next_week') {
    if (state.upcomingFriday) {
      const d = new Date(state.upcomingFriday + 'T12:00:00');
      d.setDate(d.getDate() + 7);
      const nextNextFriday = d.toISOString().split('T')[0];
      document.getElementById('orderDispatchFriday').value = nextNextFriday;
      document.getElementById('orderDispatchStatus').value = '0';
      showToast(`Despacho definido para ${formatDate(nextNextFriday)}.`);
    }
  }
}

function populateClientSelect(selectedId = null) {
  const sel = document.getElementById('orderCustomerSelect');
  sel.innerHTML = '<option value="">Selecione um cliente...</option>';
  state.contacts.filter(c => c.type === 'cliente').forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.name}${c.phone ? ` (${c.phone})` : ''}`;
    if (selectedId && Number(selectedId) === Number(c.id)) {
      opt.selected = true;
    }
    sel.appendChild(opt);
  });
}

function addOrderItemRow(modelId = '', modelName = '', color = '', cut = 'baixa', qty = 1, cost = '', price = 250) {
  const container = document.getElementById('orderItemsTableContainer');
  const rowId = 'item_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);

  if ((cost === '' || cost === null) && modelId) {
    const m = state.models.find(x => x.id === Number(modelId));
    if (m) cost = m.last_purchase_price || 0;
  }
  if (cost === '' || cost === null) cost = 180;

  const isCustom = !modelId && modelName && modelName !== 'Sem Modelo';

  const row = document.createElement('div');
  row.className = 'order-item-row grid grid-cols-1 md:grid-cols-12 gap-2 items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200';
  row.id = rowId;

  const modelOptions = state.models.map(m => {
    const isSel = modelId && Number(modelId) === Number(m.id) ? 'selected' : '';
    return `<option value="${m.id}" data-name="${escapeHtml(m.name)}" data-cost="${m.last_purchase_price || 0}" ${isSel}>${escapeHtml(m.name)}</option>`;
  }).join('');

  row.innerHTML = `
    <div class="md:col-span-3">
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Modelo</label>
      <select class="item-model-select w-full px-2.5 py-1.5 rounded-md border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-slate-900" onchange="onOrderItemModelChange('${rowId}', this)">
        <option value="">Selecione o modelo...</option>
        ${modelOptions}
        <option value="custom" ${isCustom ? 'selected' : ''}>+ Outro modelo...</option>
      </select>
      <input type="text" class="item-model-custom w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs mt-1.5 ${isCustom ? '' : 'hidden'}" placeholder="Nome do modelo" value="${escapeHtml(modelName)}">
    </div>
    <div class="md:col-span-2">
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Cor</label>
      <input type="text" class="item-color w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-slate-900" placeholder="Ex: Preto / Branco" value="${escapeHtml(color)}" required>
    </div>
    <div class="md:col-span-1">
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Cano</label>
      <select class="item-cut w-full px-2 py-1.5 rounded-md border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-slate-900">
        <option value="baixa" ${cut === 'baixa' ? 'selected' : ''}>Baixa</option>
        <option value="alta" ${cut === 'alta' ? 'selected' : ''}>Alta</option>
        <option value="media" ${cut === 'media' ? 'selected' : ''}>Média</option>
      </select>
    </div>
    <div class="md:col-span-1">
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Qtd</label>
      <input type="number" min="1" class="item-qty w-full px-2 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 tabular-nums focus:outline-none focus:border-slate-900" value="${qty}" oninput="recalcOrderTotals()" required>
    </div>
    <div class="md:col-span-2">
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Custo Unit. (R$)</label>
      <input type="number" step="0.01" class="item-cost w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 tabular-nums focus:outline-none focus:border-slate-900" placeholder="Custo R$" value="${cost}" oninput="recalcOrderTotals()" required>
    </div>
    <div class="md:col-span-2">
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Venda Unit. (R$)</label>
      <div class="flex items-center gap-1.5">
        <input type="number" step="0.01" class="item-price w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 tabular-nums focus:outline-none focus:border-slate-900" placeholder="Venda R$" value="${price}" oninput="recalcOrderTotals()" required>
      </div>
    </div>
    <div class="md:col-span-1 flex items-center justify-between md:justify-end gap-1">
      <span class="item-row-profit md:hidden text-xs font-semibold text-emerald-600 tabular-nums">R$ 0,00</span>
      <button type="button" onclick="document.getElementById('${rowId}').remove(); recalcOrderTotals();" class="p-1.5 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Remover item">
        ${ICONS.x}
      </button>
    </div>
  `;

  container.appendChild(row);
  recalcOrderTotals();
}

function onOrderItemModelChange(rowId, selectEl) {
  const row = document.getElementById(rowId);
  const customInput = row.querySelector('.item-model-custom');
  const costInput = row.querySelector('.item-cost');

  if (selectEl.value === 'custom') {
    customInput.classList.remove('hidden');
  } else {
    customInput.classList.add('hidden');
    if (selectEl.value) {
      const selectedOpt = selectEl.options[selectEl.selectedIndex];
      const modelCost = Number(selectedOpt.dataset.cost) || 0;
      if (modelCost > 0) {
        costInput.value = modelCost;
      }
    }
  }
  recalcOrderTotals();
}

function recalcOrderTotals() {
  const container = document.getElementById('orderItemsTableContainer');
  const rows = container.querySelectorAll('.order-item-row');
  let totalBoxes = 0;
  let totalVal = 0;
  let totalCost = 0;

  rows.forEach(r => {
    const qty = Number(r.querySelector('.item-qty')?.value) || 0;
    const cost = Number(r.querySelector('.item-cost')?.value) || 0;
    const price = Number(r.querySelector('.item-price')?.value) || 0;
    const itemProfit = (price - cost) * qty;

    const rowProfitEl = r.querySelector('.item-row-profit');
    if (rowProfitEl) {
      rowProfitEl.textContent = `Lucro: ${itemProfit >= 0 ? '+' : ''}${formatCurrency(itemProfit)}`;
      rowProfitEl.className = `item-row-profit md:hidden text-xs font-semibold tabular-nums ${itemProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`;
    }

    totalBoxes += qty;
    totalVal += qty * price;
    totalCost += qty * cost;
  });

  const totalProfit = totalVal - totalCost;
  document.getElementById('modalOrderTotalBoxes').textContent = `${totalBoxes} cx`;
  document.getElementById('modalOrderTotalValue').textContent = formatCurrency(totalVal);
  document.getElementById('modalOrderTotalCost').textContent = formatCurrency(totalCost);

  const profitEl = document.getElementById('modalOrderTotalProfit');
  profitEl.textContent = `${totalProfit >= 0 ? '+' : ''}${formatCurrency(totalProfit)}`;
  profitEl.className = `text-base font-bold tabular-nums ${totalProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`;
}

async function editOrder(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}`);
    if (!res.ok) {
      showToast('Não foi possível carregar o pedido.', 'error');
      return;
    }
    const order = await res.json();

    document.getElementById('orderEditId').value = order.id;
    document.getElementById('modalNewOrderTitle').textContent = `Editar Pedido #${order.id} — ${order.customer_name}`;
    document.getElementById('btnSubmitOrder').textContent = 'Salvar Alterações';

    populateClientSelect(order.customer_id);
    document.getElementById('orderDispatchFriday').value = order.dispatch_friday || '';
    document.getElementById('orderDate').value = order.order_date || '';
    document.getElementById('orderDispatchStatus').value = order.is_dispatched ? '1' : '0';
    document.getElementById('orderPaymentStatus').value = order.is_paid ? '1' : '0';
    document.getElementById('orderNotes').value = order.notes || '';

    const container = document.getElementById('orderItemsTableContainer');
    container.innerHTML = '';

    if (order.items && order.items.length > 0) {
      order.items.forEach(it => {
        addOrderItemRow(
          it.model_id,
          it.model_name,
          it.color,
          it.cut_type,
          it.quantity,
          it.cost_price,
          it.unit_price
        );
      });
    } else {
      addOrderItemRow();
    }

    recalcOrderTotals();
    openModal('modalNewOrder');
  } catch (err) {
    showToast('Erro ao abrir pedido para edição.', 'error');
  }
}

async function handleSaveOrder(e) {
  e.preventDefault();
  const editId = document.getElementById('orderEditId').value;
  const customerId = document.getElementById('orderCustomerSelect').value;
  const dispatchFriday = document.getElementById('orderDispatchFriday').value;
  const orderDate = document.getElementById('orderDate').value;
  const dispatchStatus = document.getElementById('orderDispatchStatus').value;
  const isPaid = document.getElementById('orderPaymentStatus').value;
  const notes = document.getElementById('orderNotes').value.trim();

  const container = document.getElementById('orderItemsTableContainer');
  const rows = container.querySelectorAll('.order-item-row');
  if (rows.length === 0) {
    showToast('Adicione pelo menos um item ao pedido.', 'error');
    return;
  }

  const items = [];
  rows.forEach(r => {
    const selModel = r.querySelector('.item-model-select');
    const customInput = r.querySelector('.item-model-custom');
    let modelName = '';
    let modelId = null;

    if (selModel.value === 'custom') {
      modelName = customInput.value.trim() || 'Sem Modelo';
    } else if (selModel.value) {
      modelId = Number(selModel.value);
      modelName = selModel.options[selModel.selectedIndex].dataset.name || 'Sem Modelo';
    } else {
      modelName = 'Sem Modelo';
    }

    const color = r.querySelector('.item-color').value.trim() || 'Padrão';
    const cutType = r.querySelector('.item-cut').value;
    const qty = Number(r.querySelector('.item-qty').value) || 1;
    const costPrice = Number(r.querySelector('.item-cost').value) || 0;
    const unitPrice = Number(r.querySelector('.item-price').value) || 0;

    items.push({
      model_id: modelId,
      model_name: modelName,
      color,
      cut_type: cutType,
      quantity: qty,
      cost_price: costPrice,
      unit_price: unitPrice
    });
  });

  const payload = {
    customer_id: customerId,
    dispatch_friday: dispatchFriday,
    order_date: orderDate,
    is_dispatched: Number(dispatchStatus),
    is_paid: Number(isPaid),
    notes,
    items
  };

  try {
    const url = editId ? `/api/orders/${editId}` : '/api/orders';
    const method = editId ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      showToast(editId ? 'Pedido atualizado com sucesso.' : 'Pedido salvo com sucesso.');
      closeModal('modalNewOrder');
      await loadOrders();
      await loadDashboard();
      await loadFridaysInfo();
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao salvar pedido.', 'error');
    }
  } catch (err) {
    showToast('Erro de conexão ao salvar pedido.', 'error');
  }
}

async function handleClearSampleData() {
  const confirmed = confirm(
    'Deseja remover os pedidos e contatos fictícios de exemplo?\n\n' +
    'O banco ficará limpo para receber exclusivamente seus registros reais.'
  );
  if (!confirmed) return;

  try {
    const res = await fetch('/api/clear-sample-data', { method: 'POST' });
    if (res.ok) {
      const data = await res.json();
      showToast(data.message || 'Dados de exemplo removidos com sucesso.');
      closeModal('modalSettings');
      await loadContacts();
      await loadModels();
      await loadOrders();
      await loadDashboard();
      await loadFridaysInfo();
    } else {
      showToast('Erro ao limpar dados de exemplo.', 'error');
    }
  } catch (err) {
    showToast('Erro de comunicação com o servidor.', 'error');
  }
}

async function copyOrderList(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}/tree-list`);
    if (!res.ok) return;
    const data = await res.json();
    await navigator.clipboard.writeText(data.formattedText);
    showToast('Lista formatada copiada para a área de transferência.');
  } catch (err) {
    showToast('Erro ao copiar lista.', 'error');
  }
}

async function sendOrderWhatsApp(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}/tree-list`);
    if (!res.ok) return;
    const data = await res.json();
    const phone = data.customer?.phone;
    if (!phone) {
      await navigator.clipboard.writeText(data.formattedText);
      showToast('Cliente sem telefone cadastrado. Lista copiada.');
      return;
    }
    window.open(getWhatsAppUrl(phone, data.formattedText), '_blank');
  } catch (err) {
    showToast('Erro ao abrir WhatsApp.', 'error');
  }
}

// ========================================================
// 3. SHOE MODELS & PHOTOS
// ========================================================
async function loadModels() {
  try {
    const res = await fetch('/api/models');
    if (!res.ok) return;
    const models = await res.json();
    state.models = models;
    document.getElementById('countModels').textContent = models.length;

    renderModels(models);
    populateModelSelects(models);
  } catch (err) {
    console.error('Error loading models:', err);
  }
}

function populateModelSelects(models) {
  const uploadSel = document.getElementById('uploadModelSelect');
  if (uploadSel) {
    uploadSel.innerHTML = models.map(m => `<option value="${m.id}">${escapeHtml(m.name)} (${escapeHtml(m.brand || 'Sem marca')})</option>`).join('');
  }
}

function filterModels() {
  const q = document.getElementById('modelSearchInput').value.toLowerCase().trim();
  const filtered = state.models.filter(m =>
    m.name.toLowerCase().includes(q) ||
    (m.brand && m.brand.toLowerCase().includes(q)) ||
    (m.description && m.description.toLowerCase().includes(q))
  );
  renderModels(filtered);
}

function renderModels(models) {
  const container = document.getElementById('modelsGridContainer');
  if (!models || models.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs">
        <p class="text-sm text-slate-500 mb-4">Nenhum modelo cadastrado.</p>
        <button onclick="openModal('modalNewModel')" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition">
          Cadastrar Novo Modelo
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = models.map(m => {
    const suppliersHtml = (m.suppliers && m.suppliers.length > 0) ? m.suppliers.map(s => {
      const waUrl = getWhatsAppUrl(s.supplier_phone);
      return `
        <div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 last:border-0">
          <div class="flex items-center gap-2 min-w-0">
            <img src="${escapeHtml(s.supplier_photo || '/assets/supplier1.svg')}" class="w-6 h-6 rounded-full object-cover border border-slate-200 shrink-0" alt="">
            <div class="min-w-0">
              <div class="text-xs font-semibold text-slate-800 truncate">${escapeHtml(s.supplier_name)}</div>
              ${s.notes ? `<div class="text-[11px] text-slate-400 truncate">${escapeHtml(s.notes)}</div>` : ''}
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <span class="text-xs font-bold text-emerald-700 tabular-nums">${formatCurrency(s.cost_price)}</span>
            ${s.supplier_phone ? `<a href="${waUrl}" target="_blank" class="p-1 rounded text-emerald-600 hover:bg-emerald-50" title="WhatsApp do fornecedor">${ICONS.chat}</a>` : ''}
            <button onclick="unlinkSupplier(${m.id}, ${s.supplier_id})" class="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50" title="Desvincular">${ICONS.x}</button>
          </div>
        </div>
      `;
    }).join('') : `<div class="text-xs text-slate-400 py-2">Nenhum fornecedor vinculado.</div>`;

    const photosHtml = (m.photos && m.photos.length > 0) ? m.photos.map(p => `
      <div class="relative inline-block">
        <img src="${escapeHtml(p.url)}" class="gallery-thumb" alt="${escapeHtml(p.color)}" title="${escapeHtml(p.color)} (${escapeHtml(p.cut_type)})" onclick="zoomImage('${escapeHtml(p.url)}')">
        <span class="absolute bottom-1 left-1 right-1 bg-slate-900/75 text-white text-[10px] px-1 py-0.5 rounded truncate text-center">
          ${escapeHtml(p.color)}
        </span>
        <button onclick="deletePhoto(${p.id})" class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xs hover:bg-rose-700" title="Excluir foto">
          ${ICONS.x}
        </button>
      </div>
    `).join('') : `<div class="text-xs text-slate-400 py-2">Sem fotos cadastradas.</div>`;

    const lastUpdatedText = m.last_price_updated_at ? formatDateTime(m.last_price_updated_at) : 'Nunca alterado';

    return `
      <div class="bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col overflow-hidden">
        <!-- Header -->
        <div class="px-5 py-4 border-b border-slate-100 flex items-start justify-between gap-3">
          <div class="min-w-0">
            <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">${escapeHtml(m.brand || 'Sem Marca')}</div>
            <h3 class="text-base font-bold text-slate-900 truncate mt-0.5">${escapeHtml(m.name)}</h3>
          </div>
          <button onclick="deleteModel(${m.id})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition shrink-0" title="Excluir modelo">
            ${ICONS.trash}
          </button>
        </div>

        <!-- Body -->
        <div class="p-5 space-y-4 flex-1 flex flex-col">
          <!-- Cost Box -->
          <div class="flex items-center justify-between gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/70">
            <div>
              <div class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Último Custo</div>
              <div class="text-xl font-bold text-slate-900 tabular-nums mt-0.5">${formatCurrency(m.last_purchase_price)}</div>
              <div class="text-[11px] text-slate-400 mt-0.5">Atualizado: ${lastUpdatedText}</div>
            </div>
            <button onclick="openUpdatePriceModal(${m.id}, '${escapeHtml(m.name)}', ${m.last_purchase_price})" class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition shrink-0">
              ${ICONS.edit}
              <span>Alterar</span>
            </button>
          </div>

          <!-- Suppliers -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Fornecedores</span>
              <button onclick="openLinkSupplierModal(${m.id}, '${escapeHtml(m.name)}')" class="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                ${ICONS.plus}
                <span>Vincular</span>
              </button>
            </div>
            <div class="bg-slate-50/50 rounded-lg border border-slate-100 px-3">
              ${suppliersHtml}
            </div>
          </div>

          <!-- Photos -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Fotos (${(m.photos || []).length})</span>
              <button onclick="openUploadForModel(${m.id})" class="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                ${ICONS.plus}
                <span>Adicionar</span>
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              ${photosHtml}
            </div>
          </div>

          ${m.description ? `<p class="text-xs text-slate-500 pt-2 border-t border-slate-100 mt-auto">${escapeHtml(m.description)}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

async function handleCreateModel(e) {
  e.preventDefault();
  const name = document.getElementById('modelName').value.trim();
  const brand = document.getElementById('modelBrand').value.trim();
  const price = document.getElementById('modelLastPrice').value;
  const supplierId = document.getElementById('modelSupplierSelect').value;
  const desc = document.getElementById('modelDescription').value.trim();

  try {
    const res = await fetch('/api/models', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        brand,
        last_purchase_price: Number(price) || 0,
        supplier_id: supplierId ? Number(supplierId) : null,
        description: desc
      })
    });

    if (res.ok) {
      showToast('Modelo cadastrado com sucesso.');
      closeModal('modalNewModel');
      document.getElementById('formNewModel').reset();
      await loadModels();
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao cadastrar modelo.', 'error');
    }
  } catch (err) {
    showToast('Erro de conexão.', 'error');
  }
}

async function deleteModel(modelId) {
  if (!confirm('Deseja excluir este modelo?')) return;
  try {
    const res = await fetch(`/api/models/${modelId}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Modelo excluído.');
      await loadModels();
    }
  } catch (err) {
    showToast('Erro ao excluir modelo.', 'error');
  }
}

function openUpdatePriceModal(modelId, modelName, currentPrice) {
  document.getElementById('updatePriceModelId').value = modelId;
  document.getElementById('updatePriceModelTitle').textContent = `Modelo: ${modelName}`;
  document.getElementById('updatePriceNewVal').value = currentPrice || '';
  document.getElementById('updatePriceNotes').value = '';

  const sel = document.getElementById('updatePriceSupplierSelect');
  sel.innerHTML = '<option value="">Sem fornecedor específico</option>';
  state.contacts.filter(c => c.type === 'fornecedor').forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name}${s.phone ? ` (${s.phone})` : ''}`;
    sel.appendChild(opt);
  });

  openModal('modalUpdatePrice');
}

async function handleUpdatePrice(e) {
  e.preventDefault();
  const modelId = document.getElementById('updatePriceModelId').value;
  const newPrice = document.getElementById('updatePriceNewVal').value;
  const supplierId = document.getElementById('updatePriceSupplierSelect').value;
  const notes = document.getElementById('updatePriceNotes').value.trim();

  try {
    const res = await fetch(`/api/models/${modelId}/price`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        new_price: Number(newPrice),
        supplier_id: supplierId ? Number(supplierId) : null,
        notes
      })
    });

    if (res.ok) {
      showToast('Preço de compra atualizado com sucesso.');
      closeModal('modalUpdatePrice');
      await loadModels();
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao atualizar preço.', 'error');
    }
  } catch (err) {
    showToast('Erro ao atualizar preço.', 'error');
  }
}

function openLinkSupplierModal(modelId) {
  document.getElementById('linkSupplierModelId').value = modelId;
  document.getElementById('linkSupplierCost').value = '';
  document.getElementById('linkSupplierNotes').value = '';
  const sel = document.getElementById('linkSupplierSelect');
  sel.innerHTML = '<option value="">Selecione um fornecedor...</option>';
  state.contacts.filter(c => c.type === 'fornecedor').forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = `${s.name}${s.phone ? ` (${s.phone})` : ''}`;
    sel.appendChild(opt);
  });

  openModal('modalLinkSupplier');
}

async function handleLinkSupplier(e) {
  e.preventDefault();
  const modelId = document.getElementById('linkSupplierModelId').value;
  const supplierId = document.getElementById('linkSupplierSelect').value;
  const cost = document.getElementById('linkSupplierCost').value;
  const notes = document.getElementById('linkSupplierNotes').value.trim();

  try {
    const res = await fetch(`/api/models/${modelId}/suppliers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        supplier_id: supplierId,
        cost_price: Number(cost),
        notes
      })
    });

    if (res.ok) {
      showToast('Fornecedor vinculado ao modelo.');
      closeModal('modalLinkSupplier');
      await loadModels();
    }
  } catch (err) {
    showToast('Erro ao vincular fornecedor.', 'error');
  }
}

async function unlinkSupplier(modelId, supplierId) {
  if (!confirm('Desvincular este fornecedor do modelo?')) return;
  try {
    const res = await fetch(`/api/models/${modelId}/suppliers/${supplierId}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Fornecedor desvinculado.');
      await loadModels();
    }
  } catch (err) {
    showToast('Erro ao desvincular fornecedor.', 'error');
  }
}

function openUploadForModel(modelId) {
  document.getElementById('uploadModelSelect').value = modelId;
  openModal('modalBatchUpload');
}

function handleFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;

  state.selectedFileName = file.name;
  const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
  state.models.forEach(m => {
    if (cleanName.toLowerCase().includes(m.name.toLowerCase())) {
      document.getElementById('uploadModelSelect').value = m.id;
      const rest = cleanName.toLowerCase().replace(m.name.toLowerCase(), '').trim();
      if (rest) {
        document.getElementById('uploadPhotoColor').value = rest.replace(/\b\w/g, l => l.toUpperCase());
      }
    }
  });

  const reader = new FileReader();
  reader.onload = (event) => {
    state.selectedFileBase64 = event.target.result;
    document.getElementById('uploadPreviewImg').src = state.selectedFileBase64;
    document.getElementById('uploadPreviewBox').classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

async function submitPhotoUpload() {
  if (!state.selectedFileBase64) {
    showToast('Selecione uma imagem primeiro.', 'error');
    return;
  }

  const modelId = document.getElementById('uploadModelSelect').value;
  const color = document.getElementById('uploadPhotoColor').value.trim() || 'Padrão';
  const cut = document.getElementById('uploadPhotoCut').value;

  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: state.selectedFileBase64,
        filename: state.selectedFileName,
        model_id: modelId,
        color,
        cut_type: cut
      })
    });

    if (res.ok) {
      showToast('Foto salva e organizada com sucesso.');
      closeModal('modalBatchUpload');
      state.selectedFileBase64 = null;
      state.selectedFileName = '';
      document.getElementById('uploadPreviewBox').classList.add('hidden');
      document.getElementById('fileUploadInput').value = '';
      await loadModels();
    } else {
      showToast('Erro ao salvar foto.', 'error');
    }
  } catch (err) {
    showToast('Erro no envio da imagem.', 'error');
  }
}

async function deletePhoto(photoId) {
  if (!confirm('Deseja excluir esta foto?')) return;
  try {
    const res = await fetch(`/api/photos/${photoId}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Foto removida.');
      await loadModels();
    }
  } catch (err) {
    showToast('Erro ao remover foto.', 'error');
  }
}

function zoomImage(url) {
  window.open(url, '_blank');
}

// ========================================================
// 4. CONTACTS: CLIENTES & FORNECEDORES (CREATE & EDIT)
// ========================================================
async function loadContacts() {
  try {
    const res = await fetch('/api/contacts');
    if (!res.ok) return;
    const contacts = await res.json();
    state.contacts = contacts;
    document.getElementById('countContacts').textContent = contacts.length;

    const supSel = document.getElementById('modelSupplierSelect');
    if (supSel) {
      supSel.innerHTML = '<option value="">Selecione um fornecedor...</option>' +
        contacts.filter(c => c.type === 'fornecedor').map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
    }

    applyContactFilters();
  } catch (err) {
    console.error('Error loading contacts:', err);
  }
}

function filterContactsType(type) {
  state.contactFilterType = type;
  document.getElementById('btnFilterClients').classList.toggle('active', type === 'cliente');
  document.getElementById('btnFilterSuppliers').classList.toggle('active', type === 'fornecedor');
  document.getElementById('btnFilterAllContacts').classList.toggle('active', type === '');
  applyContactFilters();
}

function applyContactFilters() {
  const q = (document.getElementById('contactSearchInput')?.value || '').toLowerCase().trim();
  const filtered = state.contacts.filter(c => {
    const matchesType = !state.contactFilterType || c.type === state.contactFilterType;
    const matchesQuery = !q ||
      (c.name && c.name.toLowerCase().includes(q)) ||
      (c.phone && c.phone.toLowerCase().includes(q)) ||
      (c.notes && c.notes.toLowerCase().includes(q));
    return matchesType && matchesQuery;
  });
  renderContacts(filtered);
}

function renderContacts(contacts) {
  const container = document.getElementById('contactsGridContainer');
  if (!contacts || contacts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs">
        <p class="text-sm text-slate-500 mb-4">Nenhum contato encontrado.</p>
        <button onclick="openNewContactModal()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition">
          Cadastrar Contato
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = contacts.map(c => {
    const isClient = c.type === 'cliente';
    const waUrl = getWhatsAppUrl(c.phone);
    const hasDebt = isClient && c.total_debt > 0;

    return `
      <div class="bg-white rounded-xl border ${hasDebt ? 'border-rose-200' : 'border-slate-200'} p-5 shadow-xs flex flex-col justify-between gap-4 hover:border-slate-300 transition">
        <div class="flex items-start gap-3.5">
          <img src="${escapeHtml(c.photo_url || (isClient ? '/assets/client1.svg' : '/assets/supplier1.svg'))}" class="w-11 h-11 rounded-full object-cover border border-slate-200 bg-slate-50 shrink-0" alt="${escapeHtml(c.name)}">
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-2">
              <h3 class="text-sm font-bold text-slate-900 truncate">${escapeHtml(c.name)}</h3>
              <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide shrink-0 ${isClient ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/70' : 'bg-blue-50 text-blue-700 border border-blue-200/70'}">
                ${isClient ? 'Cliente' : 'Fornecedor'}
              </span>
            </div>
            <div class="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
              ${ICONS.phone}
              <span>${escapeHtml(c.phone || 'Sem telefone')}</span>
            </div>

            ${isClient ? `
              <div class="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <span class="text-slate-500">Comprado: <strong class="text-slate-900 tabular-nums">${formatCurrency(c.total_spent)}</strong></span>
                ${hasDebt ? `<span class="text-rose-600 font-semibold tabular-nums">Pendente: ${formatCurrency(c.total_debt)}</span>` : '<span class="text-emerald-600 font-medium">Em dia</span>'}
              </div>
            ` : `
              <div class="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
                Modelos vinculados: <strong class="text-slate-900">${c.supplied_models_count || 0}</strong>
              </div>
            `}

            ${c.notes ? `<p class="text-xs text-slate-400 mt-2 line-clamp-2">${escapeHtml(c.notes)}</p>` : ''}
          </div>
        </div>

        <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
          ${c.phone ? `
            <a href="${waUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition">
              ${ICONS.chat}
              <span>WhatsApp</span>
            </a>
          ` : ''}
          <button onclick="openEditContactModal(${c.id})" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition">
            ${ICONS.edit}
            <span>Editar</span>
          </button>
          <button onclick="deleteContact(${c.id})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Excluir contato">
            ${ICONS.trash}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openNewContactModal() {
  document.getElementById('contactEditId').value = '';
  document.getElementById('contactCurrentPhoto').value = '';
  document.getElementById('modalContactTitle').textContent = 'Cadastrar Contato';
  document.getElementById('btnSubmitContact').textContent = 'Salvar Contato';
  document.getElementById('formNewContact').reset();

  const defaultType = state.contactFilterType === 'fornecedor' ? 'fornecedor' : 'cliente';
  document.getElementById('contactType').value = defaultType;
  document.getElementById('contactPhotoPreview').src = defaultType === 'fornecedor' ? '/assets/supplier1.svg' : '/assets/client1.svg';
  state.selectedContactPhotoBase64 = null;
  state.selectedContactPhotoName = '';

  openModal('modalNewContact');
}

function openEditContactModal(contactId) {
  const contact = state.contacts.find(c => Number(c.id) === Number(contactId));
  if (!contact) {
    showToast('Contato não encontrado.', 'error');
    return;
  }

  document.getElementById('contactEditId').value = contact.id;
  document.getElementById('contactCurrentPhoto').value = contact.photo_url || '';
  document.getElementById('modalContactTitle').textContent = `Editar ${contact.type === 'fornecedor' ? 'Fornecedor' : 'Cliente'}`;
  document.getElementById('btnSubmitContact').textContent = 'Salvar Alterações';

  document.getElementById('contactType').value = contact.type || 'cliente';
  document.getElementById('contactName').value = contact.name || '';
  document.getElementById('contactPhone').value = contact.phone || '';
  document.getElementById('contactNotes').value = contact.notes || '';
  document.getElementById('contactPhotoPreview').src = contact.photo_url || (contact.type === 'fornecedor' ? '/assets/supplier1.svg' : '/assets/client1.svg');
  document.getElementById('contactPhotoInput').value = '';

  state.selectedContactPhotoBase64 = null;
  state.selectedContactPhotoName = '';

  openModal('modalNewContact');
}

function handleContactPhotoSelected(e) {
  const file = e.target.files[0];
  if (!file) return;
  state.selectedContactPhotoName = file.name;
  const reader = new FileReader();
  reader.onload = (ev) => {
    state.selectedContactPhotoBase64 = ev.target.result;
    document.getElementById('contactPhotoPreview').src = state.selectedContactPhotoBase64;
  };
  reader.readAsDataURL(file);
}

async function handleSaveContact(e) {
  e.preventDefault();
  const editId = document.getElementById('contactEditId').value;
  const type = document.getElementById('contactType').value;
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const notes = document.getElementById('contactNotes').value.trim();
  let photoUrl = document.getElementById('contactCurrentPhoto').value;

  try {
    // Upload avatar first if user chose a new photo
    if (state.selectedContactPhotoBase64) {
      const upRes = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: state.selectedContactPhotoBase64,
          filename: state.selectedContactPhotoName || 'avatar.png'
        })
      });
      if (upRes.ok) {
        const upData = await upRes.json();
        photoUrl = upData.url;
      }
    }

    const url = editId ? `/api/contacts/${editId}` : '/api/contacts';
    const method = editId ? 'PUT' : 'POST';

    const payload = { type, name, phone, notes };
    if (photoUrl) payload.photo_url = photoUrl;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      showToast(editId ? 'Contato atualizado com sucesso.' : 'Contato cadastrado com sucesso.');
      closeModal('modalNewContact');
      document.getElementById('formNewContact').reset();
      state.selectedContactPhotoBase64 = null;
      state.selectedContactPhotoName = '';
      await loadContacts();
      await loadOrders();
      await loadDashboard();
      await loadModels();
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao salvar contato.', 'error');
    }
  } catch (err) {
    showToast('Erro de conexão.', 'error');
  }
}

async function deleteContact(id) {
  if (!confirm('Deseja excluir este contato?')) return;
  try {
    const res = await fetch(`/api/contacts/${id}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Contato excluído.');
      await loadContacts();
      await loadDashboard();
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao excluir contato.', 'error');
    }
  } catch (err) {
    showToast('Erro ao excluir contato.', 'error');
  }
}

// ========================================================
// 5. LIST GENERATOR (ASCII TREE FORMAT)
// ========================================================
let generatorItems = [];
let currentOrderCustomerPhone = '';

function initGenerator() {
  generatorItems = [
    { model_name: 'Adidas Campus', color: 'Preto / Vinho', cut_type: 'baixa', quantity: 2, unit_price: 200 },
    { model_name: 'Adidas Campus', color: 'Preto / Vinho', cut_type: 'alta', quantity: 3, unit_price: 200 },
    { model_name: 'Adidas Campus', color: 'Preto / Branco', cut_type: 'baixa', quantity: 1, unit_price: 200 },
    { model_name: 'Adidas Campus', color: 'Preto / Branco', cut_type: 'alta', quantity: 1, unit_price: 200 },
    { model_name: 'Air Force One', color: 'Branco', cut_type: 'baixa', quantity: 3, unit_price: 250 }
  ];

  renderGeneratorManualRows();
  updateGeneratorPreview();
}

function updateOrderSelectInGenerator() {
  const sel = document.getElementById('genSelectOrder');
  if (!sel) return;
  sel.innerHTML = '<option value="">Selecione um pedido existente...</option>' +
    state.orders.map(o => `<option value="${o.id}">Pedido #${o.id} - ${escapeHtml(o.customer_name)} (${o.total_boxes} cx - ${formatDate(o.dispatch_friday)})</option>`).join('');
}

async function loadOrderIntoGenerator() {
  const orderId = document.getElementById('genSelectOrder').value;
  if (!orderId) return;

  try {
    const res = await fetch(`/api/orders/${orderId}/tree-list`);
    if (!res.ok) return;
    const data = await res.json();

    const ord = state.orders.find(o => o.id === Number(orderId));
    if (ord && ord.items) {
      generatorItems = ord.items.map(i => ({
        model_name: i.model_name,
        color: i.color,
        cut_type: i.cut_type,
        quantity: i.quantity,
        unit_price: i.unit_price
      }));
      currentOrderCustomerPhone = data.customer?.phone || '';
      renderGeneratorManualRows();
      updateGeneratorPreview();
    }
  } catch (err) {
    console.error('Error loading order into generator:', err);
  }
}

function renderGeneratorManualRows() {
  const container = document.getElementById('genManualItems');
  if (!container) return;

  container.innerHTML = generatorItems.map((item, idx) => `
    <div class="grid grid-cols-12 gap-1.5 items-center">
      <div class="col-span-3">
        <input type="text" class="w-full px-2 py-1.5 rounded-md border border-slate-300 text-xs focus:outline-none focus:border-slate-900" placeholder="Modelo" value="${escapeHtml(item.model_name)}" oninput="updateGeneratorItem(${idx}, 'model_name', this.value)">
      </div>
      <div class="col-span-3">
        <input type="text" class="w-full px-2 py-1.5 rounded-md border border-slate-300 text-xs focus:outline-none focus:border-slate-900" placeholder="Cor" value="${escapeHtml(item.color)}" oninput="updateGeneratorItem(${idx}, 'color', this.value)">
      </div>
      <div class="col-span-2">
        <select class="w-full px-1.5 py-1.5 rounded-md border border-slate-300 bg-white text-xs focus:outline-none focus:border-slate-900" onchange="updateGeneratorItem(${idx}, 'cut_type', this.value)">
          <option value="baixa" ${item.cut_type === 'baixa' ? 'selected' : ''}>baixa</option>
          <option value="alta" ${item.cut_type === 'alta' ? 'selected' : ''}>alta</option>
          <option value="media" ${item.cut_type === 'media' ? 'selected' : ''}>média</option>
        </select>
      </div>
      <div class="col-span-1">
        <input type="number" min="1" class="w-full px-1.5 py-1.5 rounded-md border border-slate-300 text-xs tabular-nums focus:outline-none focus:border-slate-900" placeholder="Qtd" value="${item.quantity}" oninput="updateGeneratorItem(${idx}, 'quantity', Number(this.value))">
      </div>
      <div class="col-span-2">
        <input type="number" step="0.01" class="w-full px-2 py-1.5 rounded-md border border-slate-300 text-xs tabular-nums focus:outline-none focus:border-slate-900" placeholder="Preço" value="${item.unit_price}" oninput="updateGeneratorItem(${idx}, 'unit_price', Number(this.value))">
      </div>
      <div class="col-span-1 text-right">
        <button type="button" onclick="removeGeneratorRow(${idx})" class="p-1.5 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Remover">
          ${ICONS.x}
        </button>
      </div>
    </div>
  `).join('');
}

function addGeneratorManualRow() {
  generatorItems.push({
    model_name: 'Adidas Campus',
    color: 'Preto / Branco',
    cut_type: 'baixa',
    quantity: 1,
    unit_price: 200
  });
  renderGeneratorManualRows();
  updateGeneratorPreview();
}

function removeGeneratorRow(idx) {
  generatorItems.splice(idx, 1);
  renderGeneratorManualRows();
  updateGeneratorPreview();
}

function updateGeneratorItem(idx, field, val) {
  if (generatorItems[idx]) {
    generatorItems[idx][field] = val;
    updateGeneratorPreview();
  }
}

function generateAsciiTreeClient(items, pixKey, pixName) {
  const lineSeparator = '/'.repeat(108);
  const lines = [lineSeparator];

  const modelMap = new Map();
  items.forEach(item => {
    const mod = (item.model_name || 'Sem Modelo').trim();
    if (!modelMap.has(mod)) modelMap.set(mod, new Map());
    const colorMap = modelMap.get(mod);
    const col = (item.color || 'Padrão').trim();
    if (!colorMap.has(col)) colorMap.set(col, []);
    colorMap.get(col).push({
      cut: item.cut_type || 'baixa',
      qty: Number(item.quantity) || 1,
      unitPrice: Number(item.unit_price) || 0,
      totalPrice: (Number(item.quantity) || 1) * (Number(item.unit_price) || 0)
    });
  });

  let totalBoxesAll = 0;
  let totalValueAll = 0;

  Array.from(modelMap.entries()).forEach(([modName, colorMap]) => {
    let modBoxes = 0;
    let modValue = 0;

    colorMap.forEach(cuts => {
      cuts.forEach(c => {
        modBoxes += c.qty;
        modValue += c.totalPrice;
      });
    });

    totalBoxesAll += modBoxes;
    totalValueAll += modValue;

    const valStr = Number(modValue).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    lines.push(`${modName.padEnd(16)} ${modBoxes}cx  ${valStr}`);

    const colors = Array.from(colorMap.entries());
    const numColors = colors.length;

    colors.forEach(([colName, cuts], colIdx) => {
      const isLastColor = colIdx === numColors - 1;
      const colPrefix = isLastColor ? '└ ' : '├ ';
      const contBar = isLastColor ? '  ' : '│ ';

      if (cuts.length === 1) {
        const cut = cuts[0];
        lines.push(`${colPrefix}${colName}  ${cut.cut} ${cut.qty}cx`);
      } else {
        cuts.forEach((cut, cutIdx) => {
          if (cutIdx === 0) {
            lines.push(`${colPrefix}${colName} ┬ ${cut.cut} ${cut.qty}x`);
          } else {
            const padLen = colName.length + 1;
            const branchSymbol = (cutIdx === cuts.length - 1) ? '└' : '├';
            lines.push(`${contBar}${' '.repeat(padLen)}${branchSymbol} ${cut.cut} ${cut.qty}x`);
          }
        });
      }

      if (!isLastColor && cuts.length > 1) {
        lines.push('│');
      }
    });

    lines.push('');
  });

  const totalValStr = Number(totalValueAll).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const boxSummary = `${totalBoxesAll} cx`.padEnd(19);
  const totalSummary = `valor total: ${totalValStr}`.padEnd(25);

  lines.push(`                                                chave pix: ${pixKey}`);
  lines.push(`${boxSummary}${totalSummary}nome: ${pixName}`);
  lines.push(lineSeparator);

  return lines.join('\n');
}

function updateGeneratorPreview() {
  const pixKey = document.getElementById('genPixKey')?.value || state.settings.pix_key || 'xxxxxxxxxxxx';
  const pixName = document.getElementById('genPixName')?.value || state.settings.pix_name || 'xxxxxxxxxxxx';
  const asciiText = generateAsciiTreeClient(generatorItems, pixKey, pixName);
  const previewEl = document.getElementById('genAsciiPreview');
  if (previewEl) previewEl.textContent = asciiText;
}

async function copyGeneratorText() {
  const text = document.getElementById('genAsciiPreview')?.textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    showToast('Lista copiada com sucesso.');
  } catch (err) {
    showToast('Erro ao copiar texto.', 'error');
  }
}

function sendGeneratorWhatsApp() {
  const text = document.getElementById('genAsciiPreview')?.textContent;
  if (!text) return;
  window.open(getWhatsAppUrl(currentOrderCustomerPhone, text), '_blank');
}
