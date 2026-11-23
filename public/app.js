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
  alert: '<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  printer: '<svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9V4h12v5M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v6H6v-6z"/></svg>'
};

const state = {
  currentPeriod: 'todos',
  contacts: [],
  models: [],
  orders: [],
  pendingListOrders: [],
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
  selectedContactPhotoName: '',
  importContactsDraft: [],
  importFileName: '',
  importDropzoneBound: false,
  labelTextSettings: null
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  await loadFridaysInfo();
  await loadContacts();
  await loadModels();
  await loadDashboard();
  await loadOrders();
  await loadPendingListOrders();
  initGenerator();
  initLabelGenerator();
  updateBackupStatusUI();

  window.addEventListener('resize', () => {
    if (state.lastSalesTrend) renderChart(state.lastSalesTrend);
  });
});

// --- TABS NAVIGATION ---
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const isActive = btn.dataset.tab === tabId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.toggle('active', tab.id === tabId);
  });

  if (tabId === 'tab-dashboard') loadDashboard();
  if (tabId === 'tab-orders') loadOrders();
  if (tabId === 'tab-models') loadModels();
  if (tabId === 'tab-contacts') loadContacts();
  if (tabId === 'tab-generator') {
    loadPendingListOrders();
    updateGeneratorPreview();
  }
  if (tabId === 'tab-labels') {
    loadOrdersForLabels();
    updateLabelPreview();
  }
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
  if (clean.startsWith('00')) {
    clean = clean.slice(2);
  }

  const raw = String(phone || '').trim();
  const hasPlus = raw.startsWith('+');

  // Só adiciona DDI 55 se for estritamente um número nacional brasileiro sem DDI (10 ou 11 dígitos, ex: DDD 11 a 99).
  // Se o usuário já cadastrou o contato com DDI (ex: +54 Argentina, +598 Uruguai, +55 Brasil, ou se já começa com DDI internacional ou tem 12+ dígitos),
  // mantém o contato original intacto, sem prefixar 55 indevidamente.
  const hasInternationalPrefix = hasPlus ||
    clean.startsWith('54') ||
    clean.startsWith('55') ||
    clean.startsWith('598') ||
    clean.startsWith('595') ||
    clean.startsWith('56') ||
    clean.startsWith('591') ||
    clean.startsWith('57') ||
    clean.startsWith('51') ||
    clean.length >= 12;

  if (!hasInternationalPrefix && clean && (clean.length === 10 || clean.length === 11)) {
    clean = '55' + clean;
  }

  const params = new URLSearchParams();
  if (clean) params.set('phone', clean);
  if (message) params.set('text', message);

  const query = params.toString();
  return `https://api.whatsapp.com/send${query ? `?${query}` : ''}`;
}

function openWhatsApp(phone, message = '') {
  const url = getWhatsAppUrl(phone, message);
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = url;
  } else {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
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

// --- MODALS (Accessible Focus Management) ---
let lastFocusedBeforeModal = null;

function openModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    lastFocusedBeforeModal = document.activeElement;
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (modalId === 'modalSettings') {
      loadDatabaseBackupInfo();
    }
    const firstFocusable = el.querySelector('input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])');
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 40);
    }
  }
}

function closeModal(modalId) {
  const el = document.getElementById(modalId);
  if (el) {
    el.classList.remove('active');
    if (!document.querySelector('.modal-overlay.active')) {
      document.body.style.overflow = '';
      if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
        lastFocusedBeforeModal.focus();
        lastFocusedBeforeModal = null;
      }
    }
  }
}

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal(e.target.id);
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
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

// ==========================================
// BACKUP EM 1 CLIQUE & RESTAURAÇÃO DE BANCO
// ==========================================
function downloadDatabaseBackup() {
  showToast('Iniciando download do backup do banco...', 'info');

  const downloadLink = document.createElement('a');
  downloadLink.href = '/api/backup/download?t=' + Date.now();
  downloadLink.download = '';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  const now = new Date();
  const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('pt-BR');
  localStorage.setItem('sneakerflow_last_backup', `${dateStr} às ${timeStr}`);

  setTimeout(() => {
    showToast('Backup baixado com sucesso! Arquivo .db protegido.', 'success');
    updateBackupStatusUI();
  }, 900);
}

async function loadDatabaseBackupInfo() {
  try {
    const res = await fetch('/api/backup/info');
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.stats) {
        const s = data.stats;
        const sizeBadge = document.getElementById('backupDbSizeBadge');
        if (sizeBadge) sizeBadge.textContent = s.sizeFormatted || 'Ativo';

        const ordEl = document.getElementById('backupStatsOrders');
        if (ordEl) ordEl.textContent = s.ordersCount;

        const contEl = document.getElementById('backupStatsContacts');
        if (contEl) contEl.textContent = s.contactsCount;

        const modEl = document.getElementById('backupStatsModels');
        if (modEl) modEl.textContent = s.modelsCount;
      }
    }
  } catch (err) {
    console.error('Erro ao buscar estatísticas do backup:', err);
  }
  updateBackupStatusUI();
}

function updateBackupStatusUI() {
  const lastHint = document.getElementById('backupLastDownloadedHint');
  if (lastHint) {
    const saved = localStorage.getItem('sneakerflow_last_backup');
    if (saved) {
      lastHint.textContent = `Último backup salvo: ${saved}`;
    } else {
      lastHint.textContent = 'Recomendado fazer backup semanalmente.';
    }
  }
}

async function handleRestoreDatabaseFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.name.toLowerCase().endsWith('.db')) {
    showToast('Selecione um arquivo de banco SQLite válido (.db).', 'error');
    event.target.value = '';
    return;
  }

  const confirmed = confirm(
    `ATENÇÃO: Você selecionou o arquivo "${file.name}".\n\n` +
    'Restaurar este backup substituirá permanentemente todos os pedidos, clientes e modelos atuais pelos dados do arquivo.\n\n' +
    'Deseja realmente continuar com a restauração?'
  );

  if (!confirmed) {
    event.target.value = '';
    return;
  }

  showToast('Restaurando banco de dados, aguarde...', 'info');

  const reader = new FileReader();
  reader.onload = async function() {
    try {
      const base64Data = reader.result;
      const res = await fetch('/api/backup/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: base64Data, filename: file.name })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Falha ao restaurar banco');
      }

      showToast('Banco de dados restaurado com sucesso!', 'success');
      event.target.value = '';
      closeModal('modalSettings');

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error('Erro ao restaurar:', err);
      showToast('Erro ao restaurar: ' + (err.message || 'Arquivo inválido'), 'error');
      event.target.value = '';
    }
  };

  reader.onerror = function() {
    showToast('Erro ao ler arquivo selecionado.', 'error');
    event.target.value = '';
  };

  reader.readAsDataURL(file);
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
        <a href="${waUrl}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition shrink-0" title="Abrir WhatsApp com cobrança" aria-label="Abrir WhatsApp com cobrança">
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
    container.innerHTML = '<p class="text-xs text-slate-500 py-6 text-center">Nenhuma venda registrada no período.</p>';
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
    tbody.innerHTML = '<tr><td colspan="9" class="py-10 text-center text-sm text-slate-500">Nenhum pedido registrado ainda.</td></tr>';
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
            <a href="${getWhatsAppUrl(o.customer_phone)}" target="_blank" class="text-emerald-600 hover:text-emerald-700" title="Abrir WhatsApp" aria-label="Abrir WhatsApp">${ICONS.chat}</a>
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
        <button type="button" onclick="toggleOrderDispatched(${o.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${o.is_dispatched === 1 ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100' : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'}" title="Clique para alternar status do despacho" aria-label="Clique para alternar status do despacho">
          ${o.is_dispatched === 1 ? ICONS.truck : ICONS.box}
          <span>${o.is_dispatched === 1 ? 'Despachado' : 'A Despachar'}</span>
        </button>
      </td>
      <td class="py-3 px-4 whitespace-nowrap">
        <button type="button" onclick="toggleOrderPaid(${o.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${o.is_paid === 1 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'}" title="Clique para alternar status do pagamento" aria-label="Clique para alternar status do pagamento">
          ${o.is_paid === 1 ? ICONS.check : ICONS.clock}
          <span>${o.is_paid === 1 ? 'Pago' : 'Pendente'}</span>
        </button>
      </td>
      <td class="py-3 px-4 whitespace-nowrap text-right">
        <div class="inline-flex items-center gap-1.5">
          <button onclick="editOrder(${o.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Editar pedido" aria-label="Editar pedido">
            ${ICONS.edit}
          </button>
          <button onclick="copyOrderList(${o.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Copiar lista" aria-label="Copiar lista">
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
    loadOrdersForLabels();
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
    let totalBoxes = 0;
    let totalPairs = 0;
    let dispatchedBoxes = 0;
    let totalVal = 0;
    let totalProfit = 0;
    let unpaidVal = 0;

    list.forEach(o => {
      const b = o.total_boxes || 0;
      const p = o.total_pairs || (b * 12);
      totalBoxes += b;
      totalPairs += p;
      if (o.is_dispatched === 1) dispatchedBoxes += b;
      totalVal += o.total_amount || 0;
      totalProfit += o.total_profit || 0;
      if (o.is_paid !== 1) unpaidVal += o.total_amount || 0;
    });

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
            <span class="text-slate-600">Total: <strong class="text-slate-900 tabular-nums">${totalBoxes} cx (${totalPairs} pares)</strong> <span class="text-slate-500">(${dispatchedBoxes} cx desp.)</span></span>
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
                <th class="py-3 px-4">Caixas / Pares</th>
                <th class="py-3 px-4">Total</th>
                <th class="py-3 px-4">Lucro</th>
                <th class="py-3 px-4">Despacho</th>
                <th class="py-3 px-4">Pagamento</th>
                <th class="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-sm">
              ${list.map(ord => {
          const itemsSummary = (ord.items || []).map(i => {
            const pairs = i.total_pairs || (i.quantity * (i.pairs_per_grade || 12));
            const gradeText = i.cut_type === 'especial' && i.grade_notes
              ? `esp (${escapeHtml(i.grade_notes)})`
              : `${escapeHtml(i.cut_type)}`;
            return `
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs whitespace-nowrap shrink-0 border border-slate-200/70">
                    <strong class="font-semibold text-slate-900">${escapeHtml(i.model_name)}</strong>
                    <span class="text-slate-500">${escapeHtml(i.color)} · ${gradeText} · ${i.quantity} cx (${pairs}p)</span>
                  </span>
                `;
          }).join('');

          const waUrl = getWhatsAppUrl(ord.customer_phone);

          const paidAmt = Number(ord.paid_amount) || (ord.is_paid === 1 ? Number(ord.total_amount) : 0);
          const totalAmt = Number(ord.total_amount) || 0;
          const remAmt = (ord.remaining_amount !== undefined) ? Number(ord.remaining_amount) : (totalAmt - paidAmt);
          const isFullPaid = ord.payment_status === 'paid' || (ord.is_paid === 1 && remAmt <= 0);
          const isPartial = ord.payment_status === 'partial' || (!isFullPaid && paidAmt > 0);

          return `
                  <tr class="hover:bg-slate-50/70 transition">
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      <div class="flex items-center gap-3">
                        <img src="${escapeHtml(ord.customer_photo || '/assets/client1.svg')}" class="w-9 h-9 rounded-full object-cover border border-slate-200 bg-slate-100 shrink-0" alt="">
                        <div>
                          <div class="font-semibold text-slate-900 text-sm">${escapeHtml(ord.customer_name)}</div>
                          <div class="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span>${escapeHtml(ord.customer_phone || 'Sem telefone')}</span>
                            ${ord.customer_phone ? `<a href="${waUrl}" target="_blank" class="text-emerald-600 hover:text-emerald-700" title="Abrir WhatsApp" aria-label="Abrir WhatsApp">${ICONS.chat}</a>` : ''}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 max-w-lg min-w-[280px]">
                      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin max-w-lg">
                        ${itemsSummary || '<span class="text-xs text-slate-500">Sem itens</span>'}
                      </div>
                      ${ord.notes ? `<div class="text-xs text-slate-500 mt-1 truncate max-w-lg" title="${escapeHtml(ord.notes)}">Obs: ${escapeHtml(ord.notes)}</div>` : ''}
                      <div class="mt-1.5 flex items-center gap-2">
                        <button type="button" onclick="toggleOrderListStatus(${ord.id})" class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold transition cursor-pointer ${ord.list_generated === 1 ? 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200' : 'bg-indigo-50 text-indigo-700 border border-indigo-200/80 hover:bg-indigo-100'}" title="Clique para alternar se a lista já foi feita" aria-label="Clique para alternar se a lista já foi feita">
                          <span>${ord.list_generated === 1 ? 'Lista feita' : 'Lista pendente'}</span>
                        </button>
                        ${ord.payments_count ? `<span class="text-[10px] text-slate-400 font-medium">${ord.payments_count} depósitos</span>` : ''}
                      </div>
                    </td>
                    <td class="py-3.5 px-4 whitespace-nowrap tabular-nums">
                      <div class="font-semibold text-slate-800">${ord.total_boxes} cx</div>
                      <div class="text-[11px] text-slate-500">${ord.total_pairs || (ord.total_boxes * 12)} pares</div>
                    </td>
                    <td class="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap tabular-nums">${formatCurrency(ord.total_amount)}</td>
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70 tabular-nums">
                        +${formatCurrency(ord.total_profit)}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      <button type="button" onclick="toggleOrderDispatched(${ord.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer ${ord.is_dispatched === 1 ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100' : 'bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100'}" title="Alternar status do despacho" aria-label="Alternar status do despacho">
                        ${ord.is_dispatched === 1 ? ICONS.truck : ICONS.box}
                        <span>${ord.is_dispatched === 1 ? 'Despachado' : 'A Despachar'}</span>
                      </button>
                    </td>
                    <td class="py-3.5 px-4 whitespace-nowrap">
                      ${isFullPaid ? `
                        <button type="button" onclick="openOrderPaymentsModal(${ord.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition cursor-pointer" title="Ver depósitos / gerenciar pagamentos">
                          ${ICONS.check}
                          <span>Quitado</span>
                        </button>
                      ` : isPartial ? `
                        <button type="button" onclick="openOrderPaymentsModal(${ord.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 transition cursor-pointer" title="Ver depósitos / registrar pagamento parcial">
                          ${ICONS.clock}
                          <span>Parcial (${formatCurrency(paidAmt)})</span>
                        </button>
                      ` : `
                        <button type="button" onclick="openOrderPaymentsModal(${ord.id})" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition cursor-pointer" title="Registrar depósito / quitar">
                          ${ICONS.clock}
                          <span>Pendente</span>
                        </button>
                      `}
                    </td>
                    <td class="py-3.5 px-4 whitespace-nowrap text-right">
                      <div class="inline-flex items-center gap-1">
                        <button onclick="openOrderPaymentsModal(${ord.id})" class="p-1.5 rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition" title="Gerenciar pagamentos e depósitos" aria-label="Gerenciar pagamentos e depósitos">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </button>
                        <button onclick="openLabelForOrder(${ord.id})" class="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition" title="Gerar etiqueta de envio" aria-label="Gerar etiqueta de envio">${ICONS.printer}</button>
                        <button onclick="editOrder(${ord.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Editar pedido" aria-label="Editar pedido">${ICONS.edit}</button>
                        <button onclick="copyOrderList(${ord.id})" class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition" title="Copiar lista" aria-label="Copiar lista">${ICONS.copy}</button>
                        <button onclick="sendOrderWhatsApp(${ord.id})" class="p-1.5 rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition" title="Enviar lista no WhatsApp" aria-label="Enviar lista no WhatsApp">${ICONS.chat}</button>
                        <button onclick="deleteOrder(${ord.id})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Excluir pedido" aria-label="Excluir pedido">${ICONS.trash}</button>
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

// ========================================================
// ORDER PAYMENTS & DEPOSITS (PAGAMENTOS PARCIAIS & COMPROVANTES)
// ========================================================
let currentOrderPaymentsSummary = null;
let paymentReceiptBase64 = null;
let paymentReceiptFileName = '';

async function openOrderPaymentsModal(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}/payments`);
    if (!res.ok) {
      showToast('Erro ao buscar pagamentos do pedido.', 'error');
      return;
    }
    const summary = await res.json();
    currentOrderPaymentsSummary = summary;

    const order = (state.orders || []).find(o => Number(o.id) === Number(orderId)) || {};
    const customerName = order.customer_name || 'Cliente';
    const customerPhone = order.customer_phone || '';

    const orderIdEl = document.getElementById('paymentOrderId');
    if (orderIdEl) orderIdEl.value = orderId;
    const titleEl = document.getElementById('paymentModalTitle');
    if (titleEl) titleEl.textContent = `Pagamentos do Pedido #${orderId}`;
    const subTitleEl = document.getElementById('paymentModalSubtitle');
    if (subTitleEl) subTitleEl.textContent = `Cliente: ${customerName}${customerPhone ? ` (${customerPhone})` : ''}`;

    const total = Number(summary.total_amount) || 0;
    const paid = Number(summary.paid_amount) || 0;
    const remaining = Number(summary.remaining_amount) || 0;

    const totalEl = document.getElementById('paySummaryTotal');
    if (totalEl) totalEl.textContent = formatCurrency(total);
    const paidEl = document.getElementById('paySummaryPaid');
    if (paidEl) paidEl.textContent = formatCurrency(paid);
    const remEl = document.getElementById('paySummaryRemaining');
    if (remEl) remEl.textContent = formatCurrency(remaining);

    const remBox = document.getElementById('paySummaryRemainingBox');
    if (remBox) {
      if (remaining <= 0) {
        remBox.className = 'p-3 rounded-xl bg-emerald-50/80 border border-emerald-200';
        const label = remBox.querySelector('.text-\\[11px\\]');
        if (label) label.className = 'text-[11px] font-semibold text-emerald-700 uppercase';
        if (remEl) remEl.className = 'text-base font-bold text-emerald-700 tabular-nums mt-0.5';
      } else {
        remBox.className = 'p-3 rounded-xl bg-rose-50/80 border border-rose-200';
        const label = remBox.querySelector('.text-\\[11px\\]');
        if (label) label.className = 'text-[11px] font-semibold text-rose-700 uppercase';
        if (remEl) remEl.className = 'text-base font-bold text-rose-700 tabular-nums mt-0.5';
      }
    }

    const pct = total > 0 ? Math.min(100, Math.round((paid / total) * 100)) : (paid > 0 ? 100 : 0);
    const progressPercentEl = document.getElementById('payProgressPercent');
    const progressBarEl = document.getElementById('payProgressBar');
    if (progressPercentEl) progressPercentEl.textContent = `${pct}% ${remaining <= 0 ? '(Quitado)' : ''}`;
    if (progressBarEl) progressBarEl.style.width = `${pct}%`;

    // Reset payment form fields
    const amountInput = document.getElementById('paymentAmountInput');
    if (amountInput) amountInput.value = remaining > 0 ? remaining.toFixed(2) : '';
    const dateInput = document.getElementById('paymentDateInput');
    if (dateInput) dateInput.value = new Date().toISOString().substring(0, 10);
    const notesInput = document.getElementById('paymentNotesInput');
    if (notesInput) notesInput.value = '';
    const methodSelect = document.getElementById('paymentMethodSelect');
    if (methodSelect) methodSelect.value = 'Pix';

    clearPaymentReceiptFile();

    // Render payment history
    renderOrderPaymentsHistory(summary.payments || []);

    openModal('modalOrderPayments');
  } catch (err) {
    console.error('Erro ao abrir pagamentos:', err);
    showToast('Erro ao carregar pagamentos do pedido.', 'error');
  }
}

function renderOrderPaymentsHistory(payments) {
  const listEl = document.getElementById('paymentsHistoryList');
  const countBadge = document.getElementById('paymentsCountBadge');
  if (!listEl) return;

  if (countBadge) {
    countBadge.textContent = `${payments.length} ${payments.length === 1 ? 'depósito registrado' : 'depósitos registrados'}`;
  }

  if (!payments || payments.length === 0) {
    listEl.innerHTML = `
      <div class="p-4 rounded-xl border border-dashed border-slate-200 text-center text-xs text-slate-500">
        Nenhum depósito registrado ainda. Utilize o formulário acima para registrar depósitos parciais ou quitação.
      </div>
    `;
    return;
  }

  listEl.innerHTML = payments.map((pay, idx) => {
    const hasReceipt = Boolean(pay.receipt_url);
    return `
      <div class="p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/50 flex items-center justify-between gap-3 transition">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
            #${idx + 1}
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-slate-900 tabular-nums">${formatCurrency(pay.amount)}</span>
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase bg-slate-100 text-slate-600">${escapeHtml(pay.payment_method || 'Pix')}</span>
            </div>
            <div class="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
              <span>${formatDate(pay.payment_date || '')}</span>
              ${pay.notes ? `<span>· ${escapeHtml(pay.notes)}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          ${hasReceipt ? `
            <button type="button" onclick="zoomImage('${escapeHtml(pay.receipt_url)}')" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition" title="Ver foto do comprovante">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>Comprovante</span>
            </button>
          ` : `
            <span class="text-[11px] text-slate-400 italic">Sem foto</span>
          `}
          <button type="button" onclick="handleDeleteOrderPayment(${pay.id})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Excluir este depósito" aria-label="Excluir este depósito">
            ${ICONS.trash}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function handlePaymentReceiptFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  paymentReceiptFileName = file.name;
  const reader = new FileReader();
  reader.onload = (e) => {
    paymentReceiptBase64 = e.target.result;
    const previewBox = document.getElementById('paymentReceiptPreviewBox');
    const previewImg = document.getElementById('paymentReceiptPreviewImg');
    const filenameEl = document.getElementById('paymentReceiptFilename');
    const removeBtn = document.getElementById('btnRemovePaymentReceipt');
    const btnText = document.getElementById('paymentReceiptBtnText');

    if (previewImg) previewImg.src = paymentReceiptBase64;
    if (filenameEl) filenameEl.textContent = file.name;
    if (previewBox) previewBox.classList.remove('hidden');
    if (removeBtn) removeBtn.classList.remove('hidden');
    if (btnText) btnText.textContent = 'Trocar Comprovante';
  };
  reader.readAsDataURL(file);
}

function clearPaymentReceiptFile() {
  paymentReceiptBase64 = null;
  paymentReceiptFileName = '';
  const fileInput = document.getElementById('paymentReceiptFileInput');
  if (fileInput) fileInput.value = '';
  const previewBox = document.getElementById('paymentReceiptPreviewBox');
  if (previewBox) previewBox.classList.add('hidden');
  const removeBtn = document.getElementById('btnRemovePaymentReceipt');
  if (removeBtn) removeBtn.classList.add('hidden');
  const btnText = document.getElementById('paymentReceiptBtnText');
  if (btnText) btnText.textContent = '+ Anexar Comprovante';
}

async function handleRegisterOrderPayment(event) {
  event.preventDefault();
  const orderId = document.getElementById('paymentOrderId').value;
  const amount = parseFloat(document.getElementById('paymentAmountInput').value);
  const paymentDate = document.getElementById('paymentDateInput').value;
  const paymentMethod = document.getElementById('paymentMethodSelect').value;
  const notes = document.getElementById('paymentNotesInput').value.trim();

  if (!amount || isNaN(amount) || amount <= 0) {
    showToast('Informe um valor de depósito válido.', 'error');
    return;
  }

  const btn = document.getElementById('btnSubmitPayment');
  if (btn) btn.disabled = true;

  try {
    const res = await fetch(`/api/orders/${orderId}/payments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        payment_date: paymentDate,
        payment_method: paymentMethod,
        notes,
        receipt_data: paymentReceiptBase64,
        filename: paymentReceiptFileName
      })
    });

    if (res.ok) {
      showToast('Depósito registrado com sucesso!');
      await loadOrders();
      await loadDashboard();
      await openOrderPaymentsModal(orderId);
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao registrar pagamento.', 'error');
    }
  } catch (err) {
    console.error('Erro ao registrar pagamento:', err);
    showToast('Erro de conexão ao salvar depósito.', 'error');
  } finally {
    if (btn) btn.disabled = false;
  }
}

async function handleDeleteOrderPayment(paymentId) {
  if (!confirm('Deseja realmente excluir este depósito?')) return;
  const orderId = document.getElementById('paymentOrderId').value;

  try {
    const res = await fetch(`/api/payments/${paymentId}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Depósito excluído.');
      await loadOrders();
      await loadDashboard();
      if (orderId) {
        await openOrderPaymentsModal(orderId);
      }
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao excluir pagamento.', 'error');
    }
  } catch (err) {
    console.error('Erro ao excluir pagamento:', err);
    showToast('Erro de conexão.', 'error');
  }
}

function sendOrderPaymentWhatsApp() {
  if (!currentOrderPaymentsSummary) return;
  const orderId = currentOrderPaymentsSummary.order_id;
  const order = (state.orders || []).find(o => Number(o.id) === Number(orderId));
  if (!order) return;

  const total = Number(currentOrderPaymentsSummary.total_amount) || 0;
  const paid = Number(currentOrderPaymentsSummary.paid_amount) || 0;
  const remaining = Number(currentOrderPaymentsSummary.remaining_amount) || 0;
  const isPaid = remaining <= 0;

  const lines = [
    `*RECIBO DE PAGAMENTO — SNEAKERFLOW*`,
    `Pedido: #${orderId}`,
    `Cliente: ${order.customer_name || ''}`,
    `Data do Despacho: ${formatDate(order.dispatch_friday || '')}`,
    `--------------------------------`,
    `Total do Pedido: ${formatCurrency(total)}`,
    `Total Pago: ${formatCurrency(paid)}`,
    `Saldo Restante: ${formatCurrency(remaining)}`,
    `Status: ${isPaid ? 'QUITADO (100% PAGO)' : 'PAGAMENTO PARCIAL'}`
  ];

  if (currentOrderPaymentsSummary.payments && currentOrderPaymentsSummary.payments.length > 0) {
    lines.push(`--------------------------------`);
    lines.push(`*Histórico de Depósitos:*`);
    currentOrderPaymentsSummary.payments.forEach((p, i) => {
      lines.push(`${i + 1}. ${formatDate(p.payment_date || '')}: ${formatCurrency(p.amount)} (${p.payment_method || 'Pix'})${p.notes ? ` - ${p.notes}` : ''}`);
    });
  }

  lines.push(`--------------------------------`);
  lines.push(`Obrigado pela preferência!`);

  const text = encodeURIComponent(lines.join('\n'));
  const phone = (order.customer_phone || '').replace(/\D/g, '');
  if (!phone) {
    alert('Cliente não possui telefone cadastrado.');
    return;
  }
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

async function markOrderListGenerated(orderId, status = 1) {
  if (!orderId) return false;
  try {
    const res = await fetch(`/api/orders/${orderId}/list-status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ list_generated: status })
    });
    if (res.ok) {
      await loadPendingListOrders();
      await loadOrders();
      return true;
    }
  } catch (err) {
    console.error('Erro ao atualizar status da lista:', err);
  }
  return false;
}

async function toggleOrderListStatus(orderId) {
  try {
    const res = await fetch(`/api/orders/${orderId}/list-status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
    if (res.ok) {
      const data = await res.json();
      showToast(data.list_generated === 1 ? 'Lista marcada como feita.' : 'Pedido devolvido para pendentes de lista.');
      await loadPendingListOrders();
      await loadOrders();
    }
  } catch (err) {
    showToast('Erro ao alternar status da lista.', 'error');
  }
}

async function deleteOrder(orderId) {
  if (!confirm('Deseja realmente excluir este pedido?')) return;
  try {
    const res = await fetch(`/api/orders/${orderId}`, { method: 'DELETE' });
    if (res.ok) {
      showToast('Pedido excluído com sucesso.');
      await loadOrders();
      await loadPendingListOrders();
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
  const discountEl = document.getElementById('orderDiscount');
  if (discountEl) discountEl.value = '0.00';

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
  const pastDiscountEl = document.getElementById('orderDiscount');
  if (pastDiscountEl) pastDiscountEl.value = '0.00';

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

// ========================================================
// COMBOBOX: CLIENTE DO PEDIDO (BUSCA FLUTUANTE UNIFICADA)
// ========================================================
function populateClientSelect(selectedId = null) {
  const hiddenInput = document.getElementById('orderCustomerSelect');
  const searchInput = document.getElementById('orderCustomerSearchInput');
  const clearBtn = document.getElementById('orderCustomerClearBtn');

  if (!hiddenInput || !searchInput) return;

  if (selectedId) {
    const clients = (state.contacts || []).filter(c => c.type === 'cliente');
    const found = clients.find(c => Number(c.id) === Number(selectedId));
    if (found) {
      hiddenInput.value = found.id;
      searchInput.value = `${found.name}${found.phone ? ` (${found.phone})` : ''}`;
      if (clearBtn) clearBtn.classList.remove('hidden');
    } else {
      hiddenInput.value = selectedId;
      searchInput.value = `Cliente #${selectedId}`;
      if (clearBtn) clearBtn.classList.remove('hidden');
    }
  } else {
    hiddenInput.value = '';
    searchInput.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
  }

  closeCustomerDropdown();
}

function openCustomerDropdown() {
  const searchInput = document.getElementById('orderCustomerSearchInput');
  const query = searchInput ? searchInput.value : '';
  filterCustomerDropdown(query);
  const listEl = document.getElementById('orderCustomerDropdownList');
  if (listEl) listEl.classList.remove('hidden');
}

function closeCustomerDropdown() {
  const listEl = document.getElementById('orderCustomerDropdownList');
  if (listEl) listEl.classList.add('hidden');
}

function filterCustomerDropdown(query = '') {
  const listEl = document.getElementById('orderCustomerDropdownList');
  if (!listEl) return;

  const hiddenInput = document.getElementById('orderCustomerSelect');
  const currentId = hiddenInput ? hiddenInput.value : '';
  const clients = (state.contacts || []).filter(c => c.type === 'cliente');

  const q = (query || '').trim().toLowerCase();
  // If the query exactly matches the current selected client's display text, show all
  const currentClient = clients.find(c => Number(c.id) === Number(currentId));
  const currentDisplay = currentClient ? `${currentClient.name}${currentClient.phone ? ` (${currentClient.phone})` : ''}`.toLowerCase() : '';

  const isMatchingSelection = currentDisplay && q === currentDisplay;
  const filtered = (!q || isMatchingSelection)
    ? clients
    : clients.filter(c => (c.name || '').toLowerCase().includes(q) || (c.phone || '').toLowerCase().includes(q));

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="p-3 text-center text-xs text-slate-500">Nenhum cliente encontrado.</div>`;
  } else {
    listEl.innerHTML = filtered.map(c => {
      const isSelected = currentId && Number(currentId) === Number(c.id);
      return `
        <div onclick="selectCustomer(${c.id})" class="px-3.5 py-2.5 hover:bg-slate-50 cursor-pointer flex items-center justify-between transition ${isSelected ? 'bg-slate-50 font-semibold' : ''}">
          <div class="min-w-0 pr-2">
            <span class="block text-xs font-semibold text-slate-900 truncate">${escapeHtml(c.name)}</span>
            ${c.phone ? `<span class="block text-[11px] text-slate-500 truncate mt-0.5">${escapeHtml(c.phone)}</span>` : ''}
          </div>
          ${isSelected ? `<svg class="w-4 h-4 text-slate-900 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>` : ''}
        </div>
      `;
    }).join('');
  }
  listEl.classList.remove('hidden');
}

function selectCustomer(id) {
  const clients = (state.contacts || []).filter(c => c.type === 'cliente');
  const found = clients.find(c => Number(c.id) === Number(id));
  const hiddenInput = document.getElementById('orderCustomerSelect');
  const searchInput = document.getElementById('orderCustomerSearchInput');
  const clearBtn = document.getElementById('orderCustomerClearBtn');

  if (found) {
    if (hiddenInput) hiddenInput.value = found.id;
    if (searchInput) searchInput.value = `${found.name}${found.phone ? ` (${found.phone})` : ''}`;
    if (clearBtn) clearBtn.classList.remove('hidden');
  }
  closeCustomerDropdown();
}

function clearCustomerSelection() {
  const hiddenInput = document.getElementById('orderCustomerSelect');
  const searchInput = document.getElementById('orderCustomerSearchInput');
  const clearBtn = document.getElementById('orderCustomerClearBtn');

  if (hiddenInput) hiddenInput.value = '';
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  if (clearBtn) clearBtn.classList.add('hidden');
  openCustomerDropdown();
}

// Backward compatibility stub
function filterCustomerSelect(query = '', selectedId = null) {
  populateClientSelect(selectedId);
}

// ========================================================
// COMBOBOX: FORNECEDOR EM NOVO MODELO
// ========================================================
function populateModelSupplier(selectedId = null) {
  const hiddenInput = document.getElementById('modelSupplierSelect');
  const searchInput = document.getElementById('modelSupplierSearchInput');
  const clearBtn = document.getElementById('modelSupplierClearBtn');

  if (!hiddenInput || !searchInput) return;

  if (selectedId) {
    const suppliers = (state.contacts || []).filter(c => c.type === 'fornecedor');
    const found = suppliers.find(s => Number(s.id) === Number(selectedId));
    if (found) {
      hiddenInput.value = found.id;
      searchInput.value = `${found.name}${found.phone ? ` (${found.phone})` : ''}`;
      if (clearBtn) clearBtn.classList.remove('hidden');
    } else {
      hiddenInput.value = selectedId;
      searchInput.value = `Fornecedor #${selectedId}`;
      if (clearBtn) clearBtn.classList.remove('hidden');
    }
  } else {
    hiddenInput.value = '';
    searchInput.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
  }

  closeModelSupplierDropdown();
}

function openModelSupplierDropdown() {
  const searchInput = document.getElementById('modelSupplierSearchInput');
  const query = searchInput ? searchInput.value : '';
  filterModelSupplierDropdown(query);
  const listEl = document.getElementById('modelSupplierDropdownList');
  if (listEl) listEl.classList.remove('hidden');
}

function closeModelSupplierDropdown() {
  const listEl = document.getElementById('modelSupplierDropdownList');
  if (listEl) listEl.classList.add('hidden');
}

function filterModelSupplierDropdown(query = '') {
  const listEl = document.getElementById('modelSupplierDropdownList');
  if (!listEl) return;

  const hiddenInput = document.getElementById('modelSupplierSelect');
  const currentId = hiddenInput ? hiddenInput.value : '';
  const suppliers = (state.contacts || []).filter(c => c.type === 'fornecedor');

  const q = (query || '').trim().toLowerCase();
  const currentSupplier = suppliers.find(s => Number(s.id) === Number(currentId));
  const currentDisplay = currentSupplier ? `${currentSupplier.name}${currentSupplier.phone ? ` (${currentSupplier.phone})` : ''}`.toLowerCase() : '';

  const isMatchingSelection = currentDisplay && q === currentDisplay;
  const filtered = (!q || isMatchingSelection)
    ? suppliers
    : suppliers.filter(s => (s.name || '').toLowerCase().includes(q) || (s.phone || '').toLowerCase().includes(q));

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="p-3 text-center text-xs text-slate-500">Nenhum fornecedor encontrado.</div>`;
  } else {
    listEl.innerHTML = filtered.map(s => {
      const isSelected = currentId && Number(currentId) === Number(s.id);
      return `
        <div onclick="selectModelSupplier(${s.id})" class="px-3.5 py-2.5 hover:bg-slate-50 cursor-pointer flex items-center justify-between transition ${isSelected ? 'bg-slate-50 font-semibold' : ''}">
          <div class="min-w-0 pr-2">
            <span class="block text-xs font-semibold text-slate-900 truncate">${escapeHtml(s.name)}</span>
            ${s.phone ? `<span class="block text-[11px] text-slate-500 truncate mt-0.5">${escapeHtml(s.phone)}</span>` : ''}
          </div>
          ${isSelected ? `<svg class="w-4 h-4 text-slate-900 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>` : ''}
        </div>
      `;
    }).join('');
  }
  listEl.classList.remove('hidden');
}

function selectModelSupplier(id) {
  const suppliers = (state.contacts || []).filter(c => c.type === 'fornecedor');
  const found = suppliers.find(s => Number(s.id) === Number(id));
  const hiddenInput = document.getElementById('modelSupplierSelect');
  const searchInput = document.getElementById('modelSupplierSearchInput');
  const clearBtn = document.getElementById('modelSupplierClearBtn');

  if (found) {
    if (hiddenInput) hiddenInput.value = found.id;
    if (searchInput) searchInput.value = `${found.name}${found.phone ? ` (${found.phone})` : ''}`;
    if (clearBtn) clearBtn.classList.remove('hidden');
  }
  closeModelSupplierDropdown();
}

function clearModelSupplierSelection() {
  const hiddenInput = document.getElementById('modelSupplierSelect');
  const searchInput = document.getElementById('modelSupplierSearchInput');
  const clearBtn = document.getElementById('modelSupplierClearBtn');

  if (hiddenInput) hiddenInput.value = '';
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  if (clearBtn) clearBtn.classList.add('hidden');
  openModelSupplierDropdown();
}

function filterModelSupplierSelect(query = '') {
  populateModelSupplier();
}

// ========================================================
// COMBOBOX: FORNECEDOR EM VINCULAR FORNECEDOR
// ========================================================
function populateLinkSupplier(selectedId = null) {
  const hiddenInput = document.getElementById('linkSupplierSelect');
  const searchInput = document.getElementById('linkSupplierSearchInput');
  const clearBtn = document.getElementById('linkSupplierClearBtn');

  if (!hiddenInput || !searchInput) return;

  if (selectedId) {
    const suppliers = (state.contacts || []).filter(c => c.type === 'fornecedor');
    const found = suppliers.find(s => Number(s.id) === Number(selectedId));
    if (found) {
      hiddenInput.value = found.id;
      searchInput.value = `${found.name}${found.phone ? ` (${found.phone})` : ''}`;
      if (clearBtn) clearBtn.classList.remove('hidden');
    } else {
      hiddenInput.value = selectedId;
      searchInput.value = `Fornecedor #${selectedId}`;
      if (clearBtn) clearBtn.classList.remove('hidden');
    }
  } else {
    hiddenInput.value = '';
    searchInput.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
  }

  closeLinkSupplierDropdown();
}

function openLinkSupplierDropdown() {
  const searchInput = document.getElementById('linkSupplierSearchInput');
  const query = searchInput ? searchInput.value : '';
  filterLinkSupplierDropdown(query);
  const listEl = document.getElementById('linkSupplierDropdownList');
  if (listEl) listEl.classList.remove('hidden');
}

function closeLinkSupplierDropdown() {
  const listEl = document.getElementById('linkSupplierDropdownList');
  if (listEl) listEl.classList.add('hidden');
}

function filterLinkSupplierDropdown(query = '') {
  const listEl = document.getElementById('linkSupplierDropdownList');
  if (!listEl) return;

  const hiddenInput = document.getElementById('linkSupplierSelect');
  const currentId = hiddenInput ? hiddenInput.value : '';
  const suppliers = (state.contacts || []).filter(c => c.type === 'fornecedor');

  const q = (query || '').trim().toLowerCase();
  const currentSupplier = suppliers.find(s => Number(s.id) === Number(currentId));
  const currentDisplay = currentSupplier ? `${currentSupplier.name}${currentSupplier.phone ? ` (${currentSupplier.phone})` : ''}`.toLowerCase() : '';

  const isMatchingSelection = currentDisplay && q === currentDisplay;
  const filtered = (!q || isMatchingSelection)
    ? suppliers
    : suppliers.filter(s => (s.name || '').toLowerCase().includes(q) || (s.phone || '').toLowerCase().includes(q));

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="p-3 text-center text-xs text-slate-500">Nenhum fornecedor encontrado.</div>`;
  } else {
    listEl.innerHTML = filtered.map(s => {
      const isSelected = currentId && Number(currentId) === Number(s.id);
      return `
        <div onclick="selectLinkSupplier(${s.id})" class="px-3.5 py-2.5 hover:bg-slate-50 cursor-pointer flex items-center justify-between transition ${isSelected ? 'bg-slate-50 font-semibold' : ''}">
          <div class="min-w-0 pr-2">
            <span class="block text-xs font-semibold text-slate-900 truncate">${escapeHtml(s.name)}</span>
            ${s.phone ? `<span class="block text-[11px] text-slate-500 truncate mt-0.5">${escapeHtml(s.phone)}</span>` : ''}
          </div>
          ${isSelected ? `<svg class="w-4 h-4 text-slate-900 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>` : ''}
        </div>
      `;
    }).join('');
  }
  listEl.classList.remove('hidden');
}

function selectLinkSupplier(id) {
  const suppliers = (state.contacts || []).filter(c => c.type === 'fornecedor');
  const found = suppliers.find(s => Number(s.id) === Number(id));
  const hiddenInput = document.getElementById('linkSupplierSelect');
  const searchInput = document.getElementById('linkSupplierSearchInput');
  const clearBtn = document.getElementById('linkSupplierClearBtn');

  if (found) {
    if (hiddenInput) hiddenInput.value = found.id;
    if (searchInput) searchInput.value = `${found.name}${found.phone ? ` (${found.phone})` : ''}`;
    if (clearBtn) clearBtn.classList.remove('hidden');
  }
  closeLinkSupplierDropdown();
}

function clearLinkSupplierSelection() {
  const hiddenInput = document.getElementById('linkSupplierSelect');
  const searchInput = document.getElementById('linkSupplierSearchInput');
  const clearBtn = document.getElementById('linkSupplierClearBtn');

  if (hiddenInput) hiddenInput.value = '';
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  if (clearBtn) clearBtn.classList.add('hidden');
  openLinkSupplierDropdown();
}

function filterLinkSupplierSelect(query = '') {
  populateLinkSupplier();
}

function addOrderItemRow(modelId = '', modelName = '', color = '', cut = 'baixa', qty = 1, cost = '', price = '', pairsPerGrade = 12, gradeNotes = '') {
  const container = document.getElementById('orderItemsTableContainer');
  const rowId = 'item_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);

  let selectedModelObj = null;
  if (modelId) {
    selectedModelObj = state.models.find(x => Number(x.id) === Number(modelId));
  }

  if (selectedModelObj) {
    let effectiveCost = selectedModelObj.last_purchase_price || 0;
    if (color && selectedModelObj.photos) {
      const matched = selectedModelObj.photos.find(p => (p.color || '').trim().toLowerCase() === color.trim().toLowerCase());
      if (matched && matched.cost_price && Number(matched.cost_price) > 0) {
        effectiveCost = Number(matched.cost_price);
      }
    }
    if ((cost === '' || cost === null) && effectiveCost > 0) {
      cost = effectiveCost;
    }
    if ((price === '' || price === null) && cost !== '' && Number(cost) > 0) {
      price = (Number(cost) + 4).toFixed(2);
    }
    if (selectedModelObj.is_special_grade) {
      if (!cut || cut === 'baixa') cut = 'especial';
      if (!gradeNotes && selectedModelObj.special_grade_notes) gradeNotes = selectedModelObj.special_grade_notes;
      if (!pairsPerGrade || pairsPerGrade === 12) pairsPerGrade = selectedModelObj.pairs_per_grade || 12;
    }
  }
  if (cost === null || cost === undefined) cost = '';
  if (price === null || price === undefined) price = '';
  if (!pairsPerGrade || pairsPerGrade <= 0) pairsPerGrade = 12;

  const isCustom = !modelId && modelName && modelName !== 'Sem Modelo';

  const row = document.createElement('div');
  row.className = 'order-item-row grid grid-cols-1 md:grid-cols-[2.1fr_1.6fr_1.8fr_0.8fr_1fr_1.2fr_1.2fr_32px] gap-2 items-start p-2.5 rounded-lg bg-slate-50 border border-slate-200';
  row.id = rowId;

  const modelOptions = state.models.map(m => {
    const isSel = modelId && Number(modelId) === Number(m.id) ? 'selected' : '';
    return `<option value="${m.id}" data-name="${escapeHtml(m.name)}" data-cost="${m.last_purchase_price || 0}" data-special="${m.is_special_grade ? 1 : 0}" data-pairs="${m.pairs_per_grade || 12}" data-notes="${escapeHtml(m.special_grade_notes || '')}" ${isSel}>${escapeHtml(m.name)}</option>`;
  }).join('');

  const colorDatalistOptions = selectedModelObj && selectedModelObj.photos
    ? selectedModelObj.photos.map(p => {
        const costHint = (p.cost_price && p.cost_price > 0 && p.cost_price !== selectedModelObj.last_purchase_price)
          ? ` (Custo R$ ${formatCurrency(p.cost_price)})`
          : '';
        return `<option value="${escapeHtml(p.color || '')}">${escapeHtml(p.color || '')}${costHint}</option>`;
      }).join('')
    : '';

  row.innerHTML = `
    <div>
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Modelo</label>
      <select class="item-model-select w-full px-2.5 py-1.5 rounded-md border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-slate-900" onchange="onOrderItemModelChange('${rowId}', this)">
        <option value="">Selecione o modelo...</option>
        ${modelOptions}
        <option value="custom" ${isCustom ? 'selected' : ''}>+ Outro modelo...</option>
      </select>
      <input type="text" class="item-model-custom w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs mt-1.5 ${isCustom ? '' : 'hidden'}" placeholder="Nome do modelo" value="${escapeHtml(modelName)}">
    </div>
    <div>
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Cor</label>
      <input type="text" list="colors_${rowId}" class="item-color w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-slate-900" placeholder="Ex: Preto / Branco" value="${escapeHtml(color)}" oninput="onOrderItemColorChange('${rowId}', this)" onchange="onOrderItemColorChange('${rowId}', this)" required>
      <datalist id="colors_${rowId}">${colorDatalistOptions}</datalist>
    </div>
    <div>
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Grade</label>
      <select class="item-cut w-full px-2 py-1.5 rounded-md border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-slate-900" onchange="onOrderItemCutChange('${rowId}', this)">
        <option value="baixa" ${cut === 'baixa' ? 'selected' : ''}>Baixa (34-39)</option>
        <option value="alta" ${cut === 'alta' ? 'selected' : ''}>Alta (38-43)</option>
        <option value="especial" ${cut === 'especial' ? 'selected' : ''}>Especial (Anotação)</option>
      </select>
      <input type="text" class="item-grade-notes w-full px-2 py-1 rounded-md border border-slate-300 text-[11px] text-slate-700 mt-1 ${cut === 'especial' ? '' : 'hidden'}" placeholder="Anotação da grade" value="${escapeHtml(gradeNotes)}" oninput="recalcOrderTotals()">
    </div>
    <div>
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Qtd (cx)</label>
      <input type="number" min="1" class="item-qty w-full px-2 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 tabular-nums focus:outline-none focus:border-slate-900" value="${qty}" oninput="recalcOrderTotals()" required>
    </div>
    <div>
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Pares</label>
      <div class="flex items-center gap-1">
        <input type="number" min="1" max="100" class="item-pairs-per-grade w-12 px-1.5 py-1.5 rounded-md border border-slate-300 bg-white text-xs text-slate-900 tabular-nums focus:outline-none focus:border-slate-900" value="${pairsPerGrade}" oninput="recalcOrderTotals()" title="Pares por caixa (padrão 12)">
        <span class="item-pairs-display text-[11px] font-semibold text-slate-600 whitespace-nowrap">(${qty * pairsPerGrade} p)</span>
      </div>
    </div>
    <div>
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Custo/Par (R$)</label>
      <input type="number" step="0.01" class="item-cost w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 tabular-nums focus:outline-none focus:border-slate-900" placeholder="Custo R$" value="${cost}" oninput="onOrderItemCostInput('${rowId}', this)" required>
    </div>
    <div>
      <label class="md:hidden block text-[10px] font-semibold uppercase text-slate-500 mb-1">Venda/Par (R$)</label>
      <input type="number" step="0.01" class="item-price w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs text-slate-900 tabular-nums focus:outline-none focus:border-slate-900" placeholder="Venda R$" value="${price}" oninput="recalcOrderTotals()" required>
    </div>
    <div class="flex items-center justify-between md:justify-end gap-1 pt-1.5 md:pt-0">
      <span class="item-row-profit md:hidden text-xs font-semibold text-emerald-600 tabular-nums">R$ 0,00</span>
      <button type="button" onclick="document.getElementById('${rowId}').remove(); recalcOrderTotals();" class="p-1.5 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Remover item" aria-label="Remover item">
        ${ICONS.x}
      </button>
    </div>
  `;

  container.appendChild(row);
  recalcOrderTotals();
}

function onOrderItemColorChange(rowId, colorInput) {
  const row = document.getElementById(rowId);
  if (!row) return;
  const selModel = row.querySelector('.item-model-select');
  const costInput = row.querySelector('.item-cost');
  const priceInput = row.querySelector('.item-price');
  if (!selModel || !selModel.value || selModel.value === 'custom') return;

  const model = state.models.find(m => Number(m.id) === Number(selModel.value));
  if (!model) return;

  const colorVal = colorInput.value.trim().toLowerCase();
  const matched = (model.photos || []).find(p => (p.color || '').trim().toLowerCase() === colorVal);

  let effectiveCost = model.last_purchase_price || 0;
  if (matched && matched.cost_price && Number(matched.cost_price) > 0) {
    effectiveCost = Number(matched.cost_price);
  }

  if (effectiveCost > 0) {
    costInput.value = effectiveCost;
    priceInput.value = (effectiveCost + 4).toFixed(2);
    recalcOrderTotals();
  }
}

function onOrderItemCostInput(rowId, costInput) {
  const row = document.getElementById(rowId);
  if (!row) return;
  const priceInput = row.querySelector('.item-price');
  const costVal = parseFloat(costInput.value);
  if (!isNaN(costVal) && costVal > 0 && priceInput) {
    priceInput.value = (costVal + 4).toFixed(2);
  }
  recalcOrderTotals();
}

function onOrderItemCutChange(rowId, selectEl) {
  const row = document.getElementById(rowId);
  if (!row) return;
  const notesInput = row.querySelector('.item-grade-notes');
  if (notesInput) {
    if (selectEl.value === 'especial') {
      notesInput.classList.remove('hidden');
      notesInput.focus();
    } else {
      notesInput.classList.add('hidden');
    }
  }
  recalcOrderTotals();
}

function onOrderItemModelChange(rowId, selectEl) {
  const row = document.getElementById(rowId);
  if (!row) return;
  const customInput = row.querySelector('.item-model-custom');
  const costInput = row.querySelector('.item-cost');
  const priceInput = row.querySelector('.item-price');
  const colorInput = row.querySelector('.item-color');
  const cutSelect = row.querySelector('.item-cut');
  const notesInput = row.querySelector('.item-grade-notes');
  const pairsInput = row.querySelector('.item-pairs-per-grade');
  const datalist = document.getElementById(`colors_${rowId}`);

  if (selectEl.value === 'custom') {
    customInput.classList.remove('hidden');
    if (datalist) datalist.innerHTML = '';
  } else {
    customInput.classList.add('hidden');
    if (selectEl.value) {
      const selectedOpt = selectEl.options[selectEl.selectedIndex];
      const modelCost = Number(selectedOpt.dataset.cost) || 0;
      const isSpecial = selectedOpt.dataset.special === '1';
      const modPairs = Number(selectedOpt.dataset.pairs) || 12;
      const modNotes = selectedOpt.dataset.notes || '';

      const mod = state.models.find(m => Number(m.id) === Number(selectEl.value));
      const photos = mod && mod.photos ? mod.photos : [];

      if (datalist) {
        datalist.innerHTML = photos.map(p => {
          const customCost = (p.cost_price && p.cost_price > 0 && p.cost_price !== modelCost)
            ? ` (Custo R$ ${formatCurrency(p.cost_price)})`
            : '';
          return `<option value="${escapeHtml(p.color || '')}">${escapeHtml(p.color || '')}${customCost}</option>`;
        }).join('');
      }

      // Check current color or use model cost
      let effectiveCost = modelCost;
      const currentColor = colorInput?.value.trim().toLowerCase();
      const matched = photos.find(p => (p.color || '').trim().toLowerCase() === currentColor);
      if (matched && matched.cost_price && Number(matched.cost_price) > 0) {
        effectiveCost = Number(matched.cost_price);
      }

      if (effectiveCost > 0) {
        costInput.value = effectiveCost;
        if (priceInput) priceInput.value = (effectiveCost + 4).toFixed(2);
      }

      if (isSpecial) {
        if (cutSelect) cutSelect.value = 'especial';
        if (notesInput) {
          notesInput.classList.remove('hidden');
          notesInput.value = modNotes;
        }
        if (pairsInput) pairsInput.value = modPairs;
      } else {
        if (cutSelect && cutSelect.value === 'especial') cutSelect.value = 'baixa';
        if (notesInput) notesInput.classList.add('hidden');
        if (pairsInput) pairsInput.value = 12;
      }
    } else if (datalist) {
      datalist.innerHTML = '';
    }
  }
  recalcOrderTotals();
}

function recalcOrderTotals() {
  const container = document.getElementById('orderItemsTableContainer');
  const rows = container.querySelectorAll('.order-item-row');
  let totalBoxes = 0;
  let totalPairs = 0;
  let totalVal = 0;
  let totalCost = 0;

  rows.forEach(r => {
    const qty = Math.max(1, Number(r.querySelector('.item-qty')?.value) || 1);
    const pairsPerGrade = Math.max(1, Number(r.querySelector('.item-pairs-per-grade')?.value) || 12);
    const itemPairs = qty * pairsPerGrade;
    const cost = Number(r.querySelector('.item-cost')?.value) || 0;
    const price = Number(r.querySelector('.item-price')?.value) || 0;

    const itemRevenue = itemPairs * price;
    const itemCost = itemPairs * cost;
    const itemProfit = itemRevenue - itemCost;

    const rowProfitEl = r.querySelector('.item-row-profit');
    if (rowProfitEl) {
      rowProfitEl.textContent = `Lucro: ${itemProfit >= 0 ? '+' : ''}${formatCurrency(itemProfit)}`;
      rowProfitEl.className = `item-row-profit md:hidden text-xs font-semibold tabular-nums ${itemProfit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`;
    }

    const pairsDisplayEl = r.querySelector('.item-pairs-display');
    if (pairsDisplayEl) {
      pairsDisplayEl.textContent = `(${itemPairs} p)`;
      pairsDisplayEl.title = `${qty} cx x ${pairsPerGrade} pares = ${itemPairs} pares`;
    }

    totalBoxes += qty;
    totalPairs += itemPairs;
    totalVal += itemRevenue;
    totalCost += itemCost;
  });

  const discountInput = document.getElementById('orderDiscount');
  const discount = Math.max(0, Number(discountInput?.value) || 0);
  const finalVal = Math.max(0, totalVal - discount);
  const totalProfit = finalVal - totalCost;

  document.getElementById('modalOrderTotalBoxes').textContent = `${totalBoxes} cx (${totalPairs} pares)`;
  document.getElementById('modalOrderTotalValue').textContent = formatCurrency(finalVal);
  document.getElementById('modalOrderTotalCost').textContent = formatCurrency(totalCost);

  const discountBadge = document.getElementById('modalOrderDiscountBadge');
  if (discountBadge) {
    if (discount > 0) {
      discountBadge.textContent = `Subtotal ${formatCurrency(totalVal)} | - ${formatCurrency(discount)}`;
      discountBadge.classList.remove('hidden');
    } else {
      discountBadge.classList.add('hidden');
    }
  }

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
    const editDiscountEl = document.getElementById('orderDiscount');
    if (editDiscountEl) {
      editDiscountEl.value = (order.discount !== undefined && order.discount !== null) ? Number(order.discount).toFixed(2) : '0.00';
    }

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
          it.unit_price,
          it.pairs_per_grade || 12,
          it.grade_notes || ''
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
  if (!customerId) {
    showToast('Selecione um cliente para o pedido.', 'error');
    const input = document.getElementById('orderCustomerSearchInput');
    if (input) {
      input.focus();
      openCustomerDropdown();
    }
    return;
  }
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
    const gradeNotes = (r.querySelector('.item-grade-notes')?.value || '').trim();
    const qty = Math.max(1, Number(r.querySelector('.item-qty').value) || 1);
    const pairsPerGrade = Math.max(1, Number(r.querySelector('.item-pairs-per-grade')?.value) || 12);
    const totalPairs = qty * pairsPerGrade;
    const costPrice = Number(r.querySelector('.item-cost').value) || 0;
    const unitPrice = Number(r.querySelector('.item-price').value) || 0;

    items.push({
      model_id: modelId,
      model_name: modelName,
      color,
      cut_type: cutType,
      quantity: qty,
      pairs_per_grade: pairsPerGrade,
      total_pairs: totalPairs,
      grade_notes: gradeNotes,
      cost_price: costPrice,
      unit_price: unitPrice
    });
  });

  const discount = Math.max(0, Number(document.getElementById('orderDiscount')?.value) || 0);

  const payload = {
    customer_id: customerId,
    dispatch_friday: dispatchFriday,
    order_date: orderDate,
    is_dispatched: Number(dispatchStatus),
    is_paid: Number(isPaid),
    notes,
    discount,
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
      await loadPendingListOrders();
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
      await loadPendingListOrders();
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
    await markOrderListGenerated(orderId, 1);
    showToast('Lista copiada e marcada como feita.');
  } catch (err) {
    showToast('Erro ao copiar lista.', 'error');
  }
}

async function sendOrderWhatsApp(orderId) {
  try {
    // Open WhatsApp synchronously when order is already in memory to preserve user click gesture on mobile/desktop
    const cached = state.orders.find(o => Number(o.id) === Number(orderId)) ||
      state.pendingListOrders.find(o => Number(o.id) === Number(orderId));

    if (cached && cached.items) {
      const formattedText = generateAsciiTreeClient(
        cached.items,
        state.settings.pix_key || '00000000000',
        state.settings.pix_name || 'SUA DISTRIBUIDORA LTDA',
        cached.customer_name || '',
        cached.discount || 0
      );
      openWhatsApp(cached.customer_phone || '', formattedText);
      await markOrderListGenerated(orderId, 1);
      showToast('WhatsApp aberto e lista marcada como feita.');
      return;
    }

    const res = await fetch(`/api/orders/${orderId}/tree-list`);
    if (!res.ok) return;
    const data = await res.json();
    openWhatsApp(data.customer?.phone || '', data.formattedText);
    await markOrderListGenerated(orderId, 1);
    showToast('WhatsApp aberto e lista marcada como feita.');
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

// State for product registration & profile variations
let newModelVariations = [];
let activeProfileModelId = null;
let activeProfileVariationId = null;
let profileNewVarPhotoBase64 = null;
let profileNewVarPhotoName = '';

function renderModels(models) {
  const container = document.getElementById('modelsGridContainer');
  if (!models || models.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs">
        <p class="text-sm text-slate-500 mb-4">Nenhum modelo cadastrado.</p>
        <button onclick="openNewModelModal()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition">
          Cadastrar Novo Modelo
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = models.map(m => {
    const photos = m.photos || [];
    const primaryPhoto = photos.find(p => p.is_primary === 1) || photos[0] || null;
    const coverUrl = primaryPhoto ? primaryPhoto.url : '/assets/sneaker-default.svg';
    const coverColor = primaryPhoto ? (primaryPhoto.color || 'Padrão') : 'Sem variação';

    const suppliersHtml = (m.suppliers && m.suppliers.length > 0) ? m.suppliers.map(s => {
      const waUrl = getWhatsAppUrl(s.supplier_phone);
      return `
        <div class="flex items-center justify-between gap-2 py-2 border-b border-slate-100 last:border-0">
          <div class="flex items-center gap-2 min-w-0">
            <img src="${escapeHtml(s.supplier_photo || '/assets/supplier1.svg')}" class="w-6 h-6 rounded-full object-cover border border-slate-200 shrink-0" alt="">
            <div class="min-w-0">
              <div class="text-xs font-semibold text-slate-800 truncate">${escapeHtml(s.supplier_name)}</div>
              ${s.notes ? `<div class="text-[11px] text-slate-500 truncate">${escapeHtml(s.notes)}</div>` : ''}
            </div>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <span class="text-xs font-bold text-emerald-700 tabular-nums">${formatCurrency(s.cost_price)}</span>
            ${s.supplier_phone ? `<a href="${waUrl}" target="_blank" class="p-1 rounded text-emerald-600 hover:bg-emerald-50" title="WhatsApp do fornecedor" aria-label="WhatsApp do fornecedor">${ICONS.chat}</a>` : ''}
            <button onclick="unlinkSupplier(${m.id}, ${s.supplier_id})" class="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50" title="Desvincular" aria-label="Desvincular">${ICONS.x}</button>
          </div>
        </div>
      `;
    }).join('') : `<div class="text-xs text-slate-500 py-2">Nenhum fornecedor vinculado.</div>`;

    const variationsHtml = photos.length > 0 ? photos.map((p, idx) => {
      const isSelected = primaryPhoto && p.id === primaryPhoto.id;
      return `
        <button type="button"
          id="cardVarBtn_${m.id}_${p.id}"
          data-model-var="${m.id}"
          onclick="selectCardVariation(${m.id}, ${p.id})"
          class="inline-flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-lg border text-xs font-medium transition cursor-pointer ${isSelected ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}"
          title="Ver foto da cor ${escapeHtml(p.color || 'Padrão')}" aria-label="Ver foto da cor ${escapeHtml(p.color || 'Padrão')}">
          <img src="${escapeHtml(p.url)}" class="w-5 h-5 rounded object-cover border border-slate-200 bg-slate-50 shrink-0" alt="">
          <span class="truncate max-w-[110px]">${escapeHtml(p.color || 'Padrão')}</span>
        </button>
      `;
    }).join('') : `<span class="text-xs text-slate-500">Nenhuma variação de cor vinculada.</span>`;

    const lastUpdatedText = m.last_price_updated_at ? formatDateTime(m.last_price_updated_at) : 'Nunca alterado';

    return `
      <div class="bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col overflow-hidden">
        <!-- Header -->
        <div class="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between gap-3">
          <div class="min-w-0 cursor-pointer" onclick="openModelProfile(${m.id})">
            <div class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">${escapeHtml(m.brand || 'Sem Marca')}</div>
            <h3 class="text-base font-bold text-slate-900 truncate mt-0.5 hover:text-slate-700 transition">${escapeHtml(m.name)}</h3>
            ${m.is_special_grade ? `
              <div class="mt-1">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Grade Especial (${m.pairs_per_grade || 12} pares)${m.special_grade_notes ? ': ' + escapeHtml(m.special_grade_notes) : ''}
                </span>
              </div>
            ` : ''}
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="openModelProfile(${m.id})" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition" title="Abrir perfil e gerenciar variações de cor" aria-label="Abrir perfil e gerenciar variações de cor">
              ${ICONS.edit}
              <span>Perfil</span>
            </button>
            <button onclick="deleteModel(${m.id})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Excluir modelo" aria-label="Excluir modelo">
              ${ICONS.trash}
            </button>
          </div>
        </div>

        <!-- Product Variation Showcase -->
        <div class="relative bg-slate-50 border-b border-slate-100 h-44 flex items-center justify-center overflow-hidden cursor-pointer group" onclick="openModelProfile(${m.id})">
          <img id="cardCover_${m.id}" src="${escapeHtml(coverUrl)}" alt="${escapeHtml(m.name)}" class="w-full h-full object-contain p-3 transition group-hover:scale-105">
          <span id="cardColor_${m.id}" class="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-md bg-white/95 border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-xs">
            ${escapeHtml(coverColor)}
          </span>
        </div>

        <!-- Body -->
        <div class="p-5 space-y-4 flex-1 flex flex-col">
          <!-- Variations Selector -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Variações de Cor (${photos.length})</span>
              <button onclick="openModelProfile(${m.id})" class="text-xs font-semibold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                ${ICONS.plus}
                <span>Gerenciar</span>
              </button>
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${variationsHtml}
            </div>
          </div>

          <!-- Cost Box -->
          <div class="flex items-center justify-between gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200/70">
            <div>
              <div class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Último Custo</div>
              <div class="text-xl font-bold text-slate-900 tabular-nums mt-0.5">${formatCurrency(m.last_purchase_price)} <span class="text-xs font-normal text-slate-500">/ par</span></div>
              <div class="text-[11px] text-slate-500 mt-0.5">${formatCurrency((m.last_purchase_price || 0) * (m.pairs_per_grade || 12))} / grade (${m.pairs_per_grade || 12} pares)</div>
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

          ${m.description ? `<p class="text-xs text-slate-500 pt-2 border-t border-slate-100 mt-auto">${escapeHtml(m.description)}</p>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function selectCardVariation(modelId, photoId) {
  const model = state.models.find(m => Number(m.id) === Number(modelId));
  if (!model || !model.photos) return;
  const photo = model.photos.find(p => Number(p.id) === Number(photoId));
  if (!photo) return;

  const imgEl = document.getElementById(`cardCover_${modelId}`);
  const badgeEl = document.getElementById(`cardColor_${modelId}`);
  if (imgEl) imgEl.src = photo.url;
  if (badgeEl) badgeEl.textContent = photo.color || 'Padrão';

  document.querySelectorAll(`[data-model-var="${modelId}"]`).forEach(btn => {
    const active = btn.id === `cardVarBtn_${modelId}_${photoId}`;
    btn.className = `inline-flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-lg border text-xs font-medium transition cursor-pointer ${active ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}`;
  });
}

function toggleSpecialGradeFields(scope) {
  if (scope === 'new') {
    const chk = document.getElementById('modelIsSpecialGrade');
    const opts = document.getElementById('newModelSpecialGradeOptions');
    if (chk && opts) {
      opts.classList.toggle('hidden', !chk.checked);
    }
  } else if (scope === 'profile') {
    const chk = document.getElementById('profileEditIsSpecialGrade');
    const opts = document.getElementById('profileSpecialGradeOptions');
    if (chk && opts) {
      opts.classList.toggle('hidden', !chk.checked);
    }
  }
}

// --- NEW MODEL MODAL WITH COLOR VARIATIONS ---
function openNewModelModal() {
  document.getElementById('formNewModel').reset();
  populateModelSupplier();
  const chk = document.getElementById('modelIsSpecialGrade');
  if (chk) chk.checked = false;
  const pairs = document.getElementById('modelPairsPerGrade');
  if (pairs) pairs.value = '12';
  const notes = document.getElementById('modelSpecialGradeNotes');
  if (notes) notes.value = '';
  const opts = document.getElementById('newModelSpecialGradeOptions');
  if (opts) opts.classList.add('hidden');
  newModelVariations = [];
  addNewModelVariationRow();
  openModal('modalNewModel');
}

function addNewModelVariationRow() {
  const id = 'var_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
  newModelVariations.push({
    id,
    color: '',
    cost_price: '',
    cut_type: 'baixa',
    photo_data: null,
    filename: '',
    preview: '/assets/sneaker-default.svg'
  });
  renderNewModelVariations();
}

function removeNewModelVariationRow(id) {
  newModelVariations = newModelVariations.filter(v => v.id !== id);
  renderNewModelVariations();
}

function updateNewModelVariationField(id, field, val) {
  const item = newModelVariations.find(v => v.id === id);
  if (item) item[field] = val;
}

function handleNewModelVarFile(id, event) {
  const file = event.target.files[0];
  if (!file) return;
  const item = newModelVariations.find(v => v.id === id);
  if (!item) return;

  item.filename = file.name;
  const reader = new FileReader();
  reader.onload = (ev) => {
    item.photo_data = ev.target.result;
    item.preview = ev.target.result;
    renderNewModelVariations();
  };
  reader.readAsDataURL(file);
}

function renderNewModelVariations() {
  const container = document.getElementById('newModelVariationsContainer');
  if (!container) return;

  if (newModelVariations.length === 0) {
    container.innerHTML = `<div class="text-xs text-slate-500 py-3 text-center rounded-lg border border-dashed border-slate-200">Nenhuma variação adicionada. Clique em Adicionar Variação acima.</div>`;
    return;
  }

  container.innerHTML = newModelVariations.map(v => `
    <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
      <div class="sm:col-span-5">
        <input type="text" placeholder="Cor (ex: Preto / Vinho)" value="${escapeHtml(v.color)}" oninput="updateNewModelVariationField('${v.id}', 'color', this.value)" class="w-full px-2.5 py-1.5 rounded-md border border-slate-300 bg-white text-xs focus:outline-none focus:border-slate-900">
      </div>
      <div class="sm:col-span-3">
        <input type="number" step="0.01" min="0" placeholder="Custo R$ (Opcional)" value="${v.cost_price || ''}" oninput="updateNewModelVariationField('${v.id}', 'cost_price', this.value)" class="w-full px-2 py-1.5 rounded-md border border-slate-300 bg-white text-xs tabular-nums focus:outline-none focus:border-slate-900" title="Deixe vazio se for o mesmo custo padrão do calçado">
      </div>
      <div class="sm:col-span-3 flex items-center gap-2">
        <img src="${escapeHtml(v.preview)}" alt="" class="w-8 h-8 rounded-md object-cover border border-slate-200 bg-white shrink-0">
        <label class="flex-1 text-center px-2 py-1.5 rounded-md border border-slate-300 bg-white hover:bg-slate-100 text-xs font-medium text-slate-700 cursor-pointer truncate transition">
          <span>${v.photo_data ? 'Trocar' : 'Foto'}</span>
          <input type="file" accept="image/*" class="hidden" onchange="handleNewModelVarFile('${v.id}', event)">
        </label>
      </div>
      <div class="sm:col-span-1 text-right">
        <button type="button" onclick="removeNewModelVariationRow('${v.id}')" class="p-1.5 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Remover variação" aria-label="Remover variação">
          ${ICONS.x}
        </button>
      </div>
    </div>
  `).join('');
}

async function handleCreateModel(e) {
  e.preventDefault();
  const name = document.getElementById('modelName').value.trim();
  const brand = document.getElementById('modelBrand').value.trim();
  const price = document.getElementById('modelLastPrice').value;
  const supplierId = document.getElementById('modelSupplierSelect').value;
  const desc = document.getElementById('modelDescription').value.trim();
  const isSpecialGrade = document.getElementById('modelIsSpecialGrade')?.checked ? 1 : 0;
  const pairsPerGrade = Math.max(1, Number(document.getElementById('modelPairsPerGrade')?.value) || 12);
  const specialGradeNotes = document.getElementById('modelSpecialGradeNotes')?.value.trim() || '';

  const variations = newModelVariations
    .filter(v => v.color.trim() || v.photo_data)
    .map((v, idx) => ({
      color: v.color.trim() || 'Padrão',
      cost_price: (v.cost_price !== undefined && v.cost_price !== '' && !isNaN(Number(v.cost_price))) ? Number(v.cost_price) : null,
      cut_type: v.cut_type || 'baixa',
      photo_data: v.photo_data,
      filename: v.filename,
      is_primary: idx === 0 ? 1 : 0
    }));

  try {
    const res = await fetch('/api/models', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        brand,
        last_purchase_price: Number(price) || 0,
        supplier_id: supplierId ? Number(supplierId) : null,
        description: desc,
        is_special_grade: isSpecialGrade,
        pairs_per_grade: pairsPerGrade,
        special_grade_notes: specialGradeNotes,
        variations
      })
    });

    if (res.ok) {
      showToast('Modelo cadastrado com sucesso.');
      closeModal('modalNewModel');
      document.getElementById('formNewModel').reset();
      newModelVariations = [];
      await loadModels();
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao cadastrar modelo.', 'error');
    }
  } catch (err) {
    showToast('Erro de conexão.', 'error');
  }
}

// --- PRODUCT PROFILE MODAL (VARIATIONS & PHOTOS) ---
async function openModelProfile(modelId, selectedVariationId = null) {
  activeProfileModelId = Number(modelId);
  activeProfileVariationId = selectedVariationId;
  profileNewVarPhotoBase64 = null;
  profileNewVarPhotoName = '';

  const formAdd = document.getElementById('formAddVariation');
  if (formAdd) formAdd.reset();
  const newPrev = document.getElementById('newVarPhotoPreview');
  if (newPrev) newPrev.src = '/assets/sneaker-default.svg';
  const newLbl = document.getElementById('newVarPhotoLabel');
  if (newLbl) newLbl.textContent = 'Foto';

  try {
    const res = await fetch(`/api/models/${modelId}`);
    if (!res.ok) {
      showToast('Não foi possível abrir o perfil do produto.', 'error');
      return;
    }
    const model = await res.json();
    renderModelProfile(model);
    openModal('modalModelProfile');
  } catch (err) {
    showToast('Erro ao carregar perfil do produto.', 'error');
  }
}

function renderModelProfile(model) {
  document.getElementById('profileModelId').value = model.id;
  document.getElementById('profileModelBrand').textContent = model.brand || 'Sem Marca';
  document.getElementById('profileModelTitle').textContent = model.name;
  document.getElementById('profileEditName').value = model.name || '';
  document.getElementById('profileEditBrand').value = model.brand || '';
  document.getElementById('profileEditDesc').value = model.description || '';

  const isSpecial = Number(model.is_special_grade) === 1;
  const chkEl = document.getElementById('profileEditIsSpecialGrade');
  const pairsEl = document.getElementById('profileEditPairsPerGrade');
  const notesEl = document.getElementById('profileEditSpecialNotes');
  const optEl = document.getElementById('profileSpecialGradeOptions');
  if (chkEl) chkEl.checked = isSpecial;
  if (pairsEl) pairsEl.value = model.pairs_per_grade || 12;
  if (notesEl) notesEl.value = model.special_grade_notes || '';
  if (optEl) optEl.classList.toggle('hidden', !isSpecial);

  const photos = model.photos || [];
  let activeVar = photos.find(p => Number(p.id) === Number(activeProfileVariationId))
    || photos.find(p => p.is_primary === 1)
    || photos[0]
    || null;

  activeProfileVariationId = activeVar ? activeVar.id : null;

  // Showcase
  const showcaseImg = document.getElementById('profileShowcaseImg');
  const activeColorEl = document.getElementById('profileActiveVarColor');
  const activeCutEl = document.getElementById('profileActiveVarCut');
  const activePrimaryEl = document.getElementById('profileActiveVarPrimary');

  if (activeVar) {
    showcaseImg.src = activeVar.url;
    activeColorEl.textContent = activeVar.color || 'Padrão';
    activeCutEl.textContent = 'Variação de cor';
    activePrimaryEl.classList.toggle('hidden', activeVar.is_primary !== 1);
  } else {
    showcaseImg.src = '/assets/sneaker-default.svg';
    activeColorEl.textContent = 'Nenhuma variação cadastrada';
    activeCutEl.textContent = 'Adicione uma cor e foto ao lado';
    activePrimaryEl.classList.add('hidden');
  }

  // Variation selector pills
  const pillsContainer = document.getElementById('profileVariationPills');
  if (photos.length === 0) {
    pillsContainer.innerHTML = `<span class="text-xs text-slate-500">Sem variações vinculadas.</span>`;
  } else {
    pillsContainer.innerHTML = photos.map(p => {
      const isAct = activeVar && p.id === activeVar.id;
      return `
        <button type="button" onclick="selectProfileVariation(${model.id}, ${p.id})"
          class="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-lg border text-xs font-semibold transition cursor-pointer ${isAct ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'}">
          <img src="${escapeHtml(p.url)}" class="w-6 h-6 rounded object-cover border border-slate-200 bg-slate-50" alt="">
          <span>${escapeHtml(p.color || 'Padrão')}</span>
        </button>
      `;
    }).join('');
  }

  // Manageable variations list
  const listContainer = document.getElementById('profileVariationsList');
  if (photos.length === 0) {
    listContainer.innerHTML = `
      <div class="p-6 text-center text-xs text-slate-500 rounded-xl border border-dashed border-slate-200">
        Nenhuma variação cadastrada neste produto. Utilize o formulário acima para vincular uma cor e sua foto.
      </div>
    `;
  } else {
    listContainer.innerHTML = photos.map(p => {
      const isDefaultImg = !p.url || p.url.includes('sneaker-default.svg');
      return `
      <div class="p-3 rounded-xl border ${p.is_primary === 1 ? 'border-slate-400 bg-slate-50/80' : 'border-slate-200 bg-white'} flex flex-col sm:flex-row sm:items-center gap-3">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <div class="relative group shrink-0">
            <img src="${escapeHtml(p.url)}" onclick="selectProfileVariation(${model.id}, ${p.id})" class="w-12 h-12 rounded-lg object-cover border ${isDefaultImg ? 'border-amber-300 bg-amber-50/50' : 'border-slate-200 bg-slate-50'} cursor-pointer" alt="${escapeHtml(p.color || '')}">
            <label class="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center cursor-pointer transition text-white" title="Vincular foto a esta cor">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="3"/></svg>
              <input type="file" accept="image/*" class="hidden" onchange="handleVariationReplacePhoto(${p.id}, event, ${model.id})">
            </label>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 flex-1 min-w-0">
            <input type="text" id="varColor_${p.id}" value="${escapeHtml(p.color || '')}" placeholder="Nome da cor" class="w-full sm:w-1/2 px-2.5 py-1.5 rounded-md border border-slate-300 bg-white text-xs font-medium text-slate-900 focus:outline-none focus:border-slate-900">
            <div class="flex items-center gap-1 sm:w-1/2 min-w-[150px]">
              <span class="text-[10px] uppercase font-semibold text-slate-500 whitespace-nowrap">Custo R$:</span>
              <input type="number" step="0.01" min="0" id="varCost_${p.id}" value="${p.cost_price !== null && p.cost_price !== undefined ? p.cost_price : ''}" placeholder="Padrão (${formatCurrency(model.last_purchase_price)})" class="w-full px-2 py-1.5 rounded-md border border-slate-300 bg-white text-xs tabular-nums text-slate-900 focus:outline-none focus:border-slate-900" title="Deixe em branco para usar o custo padrão do calçado">
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-end gap-1.5 shrink-0">
          <label class="px-2.5 py-1.5 rounded-md border text-[11px] font-semibold cursor-pointer transition ${isDefaultImg ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 shadow-xs' : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700'}" title="Vincular ou trocar foto desta cor">
            <span>${isDefaultImg ? '+ Adicionar Foto' : 'Trocar foto'}</span>
            <input type="file" accept="image/*" class="hidden" onchange="handleVariationReplacePhoto(${p.id}, event, ${model.id})">
          </label>
          <button type="button" onclick="saveVariationChanges(${p.id})" class="px-2.5 py-1.5 rounded-md bg-slate-900 hover:bg-slate-800 text-[11px] font-semibold text-white transition" title="Salvar alteração desta cor e custo" aria-label="Salvar alteração desta cor e custo">
            Salvar
          </button>
          ${p.is_primary === 1
            ? `<span class="px-2 py-1 rounded-md bg-slate-200 text-slate-700 text-[10px] font-semibold uppercase">Capa</span>`
            : `<button type="button" onclick="setVariationPrimary(${p.id})" class="px-2.5 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-100 text-[11px] font-medium text-slate-600 transition" title="Definir como capa do produto" aria-label="Definir como capa do produto">Capa</button>`}
          <button type="button" onclick="deleteVariationInProfile(${p.id})" class="p-1.5 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Excluir variação" aria-label="Excluir variação">
            ${ICONS.trash}
          </button>
        </div>
      </div>
    `;
    }).join('');
  }
}

async function selectProfileVariation(modelId, variationId) {
  activeProfileVariationId = Number(variationId);
  const res = await fetch(`/api/models/${modelId}`);
  if (res.ok) {
    const model = await res.json();
    renderModelProfile(model);
  }
}

function zoomProfileShowcase() {
  const src = document.getElementById('profileShowcaseImg')?.src;
  if (src) zoomImage(src);
}

async function handleUpdateModelProfile(e) {
  e.preventDefault();
  const modelId = document.getElementById('profileModelId').value;
  const name = document.getElementById('profileEditName').value.trim();
  const brand = document.getElementById('profileEditBrand').value.trim();
  const description = document.getElementById('profileEditDesc').value.trim();
  const isSpecialGrade = document.getElementById('profileEditIsSpecialGrade')?.checked ? 1 : 0;
  const pairsPerGrade = Math.max(1, Number(document.getElementById('profileEditPairsPerGrade')?.value) || 12);
  const specialGradeNotes = document.getElementById('profileEditSpecialNotes')?.value.trim() || '';

  try {
    const res = await fetch(`/api/models/${modelId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        brand,
        description,
        is_special_grade: isSpecialGrade,
        pairs_per_grade: pairsPerGrade,
        special_grade_notes: specialGradeNotes
      })
    });
    if (res.ok) {
      const updated = await res.json();
      renderModelProfile(updated);
      await loadModels();
      showToast('Dados do produto atualizados.');
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao atualizar produto.', 'error');
    }
  } catch (err) {
    showToast('Erro de conexão.', 'error');
  }
}

function handleProfileNewVarPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  profileNewVarPhotoName = file.name;
  const reader = new FileReader();
  reader.onload = (ev) => {
    profileNewVarPhotoBase64 = ev.target.result;
    document.getElementById('newVarPhotoPreview').src = profileNewVarPhotoBase64;
    document.getElementById('newVarPhotoLabel').textContent = 'Selecionada';
  };
  reader.readAsDataURL(file);
}

async function handleAddModelVariation(e) {
  e.preventDefault();
  const modelId = document.getElementById('profileModelId').value;
  const color = document.getElementById('newVarColor').value.trim();
  const costRaw = document.getElementById('newVarCost')?.value.trim();
  const cost_price = (costRaw !== '' && costRaw !== null && !isNaN(Number(costRaw))) ? Number(costRaw) : null;

  if (!color) {
    showToast('Informe a cor da variação.', 'error');
    return;
  }

  try {
    const res = await fetch(`/api/models/${modelId}/variations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        color,
        cost_price,
        photo_data: profileNewVarPhotoBase64,
        filename: profileNewVarPhotoName
      })
    });
    if (res.ok) {
      const created = await res.json();
      profileNewVarPhotoBase64 = null;
      profileNewVarPhotoName = '';
      document.getElementById('formAddVariation').reset();
      document.getElementById('newVarPhotoPreview').src = '/assets/sneaker-default.svg';
      document.getElementById('newVarPhotoLabel').textContent = 'Escolher foto';
      await loadModels();
      await openModelProfile(modelId, created.id);
      showToast('Variação de cor vinculada com sucesso.');
    } else {
      const err = await res.json();
      showToast(err.error || 'Erro ao adicionar variação.', 'error');
    }
  } catch (err) {
    showToast('Erro ao vincular variação.', 'error');
  }
}

async function saveVariationChanges(photoId) {
  const color = document.getElementById(`varColor_${photoId}`)?.value.trim();
  const costRaw = document.getElementById(`varCost_${photoId}`)?.value.trim();
  const cost_price = (costRaw !== '' && costRaw !== null && !isNaN(Number(costRaw))) ? Number(costRaw) : null;

  if (!color) {
    showToast('O nome da cor não pode ficar vazio.', 'error');
    return;
  }

  try {
    const res = await fetch(`/api/photos/${photoId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ color, cost_price })
    });
    if (res.ok) {
      await loadModels();
      await openModelProfile(activeProfileModelId, photoId);
      showToast('Variação atualizada com sucesso.');
    } else {
      showToast('Erro ao salvar variação.', 'error');
    }
  } catch (err) {
    showToast('Erro de conexão.', 'error');
  }
}

function handleVariationReplacePhoto(photoId, event, modelId = null) {
  const targetModelId = modelId || activeProfileModelId;
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async (ev) => {
    try {
      const res = await fetch(`/api/photos/${photoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          photo_data: ev.target.result,
          filename: file.name
        })
      });
      if (res.ok) {
        await loadModels();
        if (targetModelId) {
          await openModelProfile(targetModelId, photoId);
        }
        showToast('Foto da variação vinculada com sucesso.');
      } else {
        showToast('Erro ao atualizar foto.', 'error');
      }
    } catch (err) {
      showToast('Erro ao enviar foto.', 'error');
    }
  };
  reader.readAsDataURL(file);
}

async function setVariationPrimary(photoId) {
  try {
    const res = await fetch(`/api/photos/${photoId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_primary: 1 })
    });
    if (res.ok) {
      await loadModels();
      await openModelProfile(activeProfileModelId, photoId);
      showToast('Variação definida como capa do produto.');
    }
  } catch (err) {
    showToast('Erro ao definir capa.', 'error');
  }
}

async function deleteVariationInProfile(photoId) {
  if (!confirm('Deseja remover esta variação de cor e sua foto?')) return;
  try {
    const res = await fetch(`/api/photos/${photoId}`, { method: 'DELETE' });
    if (res.ok) {
      await loadModels();
      await openModelProfile(activeProfileModelId);
      showToast('Variação removida.');
    }
  } catch (err) {
    showToast('Erro ao remover variação.', 'error');
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

function openLinkSupplierModal(modelId, modelName = '') {
  document.getElementById('linkSupplierModelId').value = modelId;
  const titleEl = document.getElementById('linkSupplierModelTitle');
  if (titleEl) {
    if (!modelName) {
      const found = (state.models || []).find(m => Number(m.id) === Number(modelId));
      modelName = found ? found.name : `Modelo #${modelId}`;
    }
    titleEl.textContent = `Modelo: ${modelName}`;
  }
  document.getElementById('linkSupplierCost').value = '';
  document.getElementById('linkSupplierNotes').value = '';
  populateLinkSupplier();
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

  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: state.selectedFileBase64,
        filename: state.selectedFileName,
        model_id: modelId,
        color
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
    if (supSel && supSel.tagName === 'SELECT') {
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
        <div class="flex flex-wrap items-center justify-center gap-2.5">
          <button onclick="openImportContactsModal()" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition">
            Importar Arquivo
          </button>
          <button onclick="openNewContactModal()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition">
            Cadastrar Contato
          </button>
        </div>
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

            ${c.notes ? `<p class="text-xs text-slate-500 mt-2 line-clamp-2">${escapeHtml(c.notes)}</p>` : ''}
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
          <button onclick="deleteContact(${c.id})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Excluir contato" aria-label="Excluir contato">
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
// 4.1 IMPORTAÇÃO DE CONTATOS (.VCF / .CSV / .TXT)
// ========================================================
function normalizePhoneKey(phone) {
  let digits = cleanPhone(phone);
  if (digits.startsWith('55') && digits.length >= 12) {
    digits = digits.slice(2);
  }
  return digits;
}

function decodeQuotedPrintableUtf8(str) {
  const cleaned = String(str || '').replace(/=\r?\n/g, '');
  const bytes = [];
  for (let i = 0; i < cleaned.length; i++) {
    if (cleaned[i] === '=' && /^[0-9A-Fa-f]{2}$/.test(cleaned.slice(i + 1, i + 3))) {
      bytes.push(parseInt(cleaned.slice(i + 1, i + 3), 16));
      i += 2;
    } else {
      const code = cleaned.charCodeAt(i);
      if (code < 128) {
        bytes.push(code);
      } else {
        const encoded = new TextEncoder().encode(cleaned[i]);
        for (const b of encoded) bytes.push(b);
      }
    }
  }
  try {
    return new TextDecoder('utf-8').decode(new Uint8Array(bytes));
  } catch (_) {
    return cleaned;
  }
}

function unescapeVcfValue(val) {
  return String(val || '')
    .replace(/\\n/gi, ' ')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\')
    .trim();
}

function parseVcfContacts(text) {
  // Join quoted-printable soft breaks and standard folded continuation lines
  const normalized = String(text || '')
    .replace(/^\uFEFF/, '')
    .replace(/=\r?\n/g, '')
    .replace(/\r?\n[ \t]/g, '');

  const blocks = normalized.split(/BEGIN:VCARD/i).slice(1);
  const results = [];

  for (const rawBlock of blocks) {
    const endIdx = rawBlock.search(/END:VCARD/i);
    const block = endIdx >= 0 ? rawBlock.slice(0, endIdx) : rawBlock;
    const lines = block.split(/\r?\n/);

    let fn = '';
    let nName = '';
    let org = '';
    let note = '';
    const phones = [];

    for (const line of lines) {
      if (!line.trim()) continue;
      const colonIdx = line.indexOf(':');
      if (colonIdx === -1) continue;

      const left = line.slice(0, colonIdx);
      let value = line.slice(colonIdx + 1);
      const parts = left.split(';');
      // Strip vCard group prefix like item1.TEL
      const rawKey = parts[0].includes('.') ? parts[0].split('.').pop() : parts[0];
      const key = rawKey.trim().toUpperCase();
      const paramsUpper = parts.slice(1).join(';').toUpperCase();

      if (paramsUpper.includes('QUOTED-PRINTABLE')) {
        value = decodeQuotedPrintableUtf8(value);
      } else {
        value = unescapeVcfValue(value);
      }

      if (key === 'FN' && value) {
        fn = value.trim();
      } else if (key === 'N' && value && !nName) {
        const nParts = value.split(';').map(p => p.trim()).filter(Boolean);
        // vCard N order: Family;Given;Additional;Prefix;Suffix
        const rawParts = value.split(';');
        const family = (rawParts[0] || '').trim();
        const given = (rawParts[1] || '').trim();
        const middle = (rawParts[2] || '').trim();
        nName = [given, middle, family].filter(Boolean).join(' ') || nParts.join(' ');
      } else if (key === 'ORG' && value && !org) {
        org = value.replace(/;+/g, ' ').trim();
      } else if (key === 'NOTE' && value) {
        note = note ? `${note} | ${value}` : value;
      } else if (key === 'TEL' && value) {
        const cleaned = value.replace(/^tel:/i, '').trim();
        if (cleaned) {
          const priority = /CELL|MOBILE|WHATSAPP|PREF/i.test(paramsUpper) ? 0 : 1;
          phones.push({ phone: cleaned, priority });
        }
      }
    }

    phones.sort((a, b) => a.priority - b.priority);
    const chosenPhone = phones.length > 0 ? phones[0].phone : '';
    const name = (fn || nName || org || '').trim();
    const notesParts = [];
    if (org && org.toLowerCase() !== name.toLowerCase()) notesParts.push(org);
    if (note) notesParts.push(note);

    if (name || chosenPhone) {
      results.push({
        name: name || chosenPhone,
        phone: chosenPhone,
        notes: notesParts.join(' - '),
        explicitType: ''
      });
    }
  }

  return results;
}

function parseCsvLine(line, delimiter) {
  const fields = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === delimiter) {
        fields.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
  }
  fields.push(current.trim());
  return fields;
}

function normalizeHeaderName(h) {
  return String(h || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function parseCsvContacts(text) {
  const cleanText = String(text || '').replace(/^\uFEFF/, '');
  const lines = cleanText.split(/\r?\n/).filter(l => l.trim().length > 0);
  if (lines.length === 0) return [];

  // Detect delimiter from first line
  const firstLine = lines[0];
  const semicolons = (firstLine.match(/;/g) || []).length;
  const commas = (firstLine.match(/,/g) || []).length;
  const tabs = (firstLine.match(/\t/g) || []).length;
  let delimiter = ',';
  if (tabs > commas && tabs > semicolons) delimiter = '\t';
  else if (semicolons >= commas && semicolons > 0) delimiter = ';';

  const rows = lines.map(l => parseCsvLine(l, delimiter));
  const headerNorm = rows[0].map(normalizeHeaderName);
  const firstRowHasPhoneNumber = rows[0].some(cell => cleanPhone(cell).length >= 8);

  const hasHeader = !firstRowHasPhoneNumber && headerNorm.some(h =>
    /^(nome|name|first name|given name|contato|loja|telefone|phone|celular|whatsapp|fone|tel|tipo|type|categoria|observa|notas|notes|organization)/.test(h)
  );

  const results = [];

  if (hasHeader) {
    const findIdx = (patterns) => headerNorm.findIndex(h => patterns.some(p => p.test(h)));

    const nameIdx = findIdx([/^nome$/, /^name$/, /^nome completo$/, /^full name$/, /^contato$/, /^loja$/, /^cliente$/]);
    const firstNameIdx = findIdx([/^first name$/, /^given name$/, /^primeiro nome$/]);
    const middleNameIdx = findIdx([/^middle name$/, /^additional name$/]);
    const lastNameIdx = findIdx([/^last name$/, /^family name$/, /^sobrenome$/]);
    const orgIdx = findIdx([/^organization/, /^empresa$/, /^company$/]);
    const phoneIdx = findIdx([/^telefone/, /^phone 1 - value$/, /^phone/, /^whatsapp/, /^celular/, /^mobile/, /^fone/, /^tel$/]);
    const typeIdx = findIdx([/^tipo$/, /^type$/, /^categoria$/, /^colecao$/, /^grupo$/, /^group membership$/]);
    const notesIdx = findIdx([/^observa/, /^notas$/, /^notes$/, /^obs$/, /^endereco$/]);

    for (let i = 1; i < rows.length; i++) {
      const cols = rows[i];
      if (!cols || cols.every(c => !c)) continue;

      let name = nameIdx >= 0 ? (cols[nameIdx] || '') : '';
      if (!name && (firstNameIdx >= 0 || lastNameIdx >= 0)) {
        name = [
          firstNameIdx >= 0 ? cols[firstNameIdx] : '',
          middleNameIdx >= 0 ? cols[middleNameIdx] : '',
          lastNameIdx >= 0 ? cols[lastNameIdx] : ''
        ].filter(Boolean).join(' ');
      }
      if (!name && orgIdx >= 0) {
        name = cols[orgIdx] || '';
      }

      let phone = phoneIdx >= 0 ? (cols[phoneIdx] || '') : '';
      if (phone.includes(':::')) {
        phone = phone.split(':::')[0].trim();
      }
      // Fallback: search phone in other columns if Google Contacts Phone 1 was empty
      if (!phone) {
        for (let cIdx = 0; cIdx < cols.length; cIdx++) {
          if (headerNorm[cIdx] && headerNorm[cIdx].includes('phone') && headerNorm[cIdx].includes('value') && cols[cIdx]) {
            phone = cols[cIdx].split(':::')[0].trim();
            break;
          }
        }
      }

      const explicitType = typeIdx >= 0 ? (cols[typeIdx] || '') : '';
      const notes = notesIdx >= 0 ? (cols[notesIdx] || '') : '';

      name = name.trim();
      phone = phone.trim();
      if (name || phone) {
        results.push({
          name: name || phone,
          phone,
          notes: notes.trim(),
          explicitType: explicitType.trim()
        });
      }
    }
  } else {
    // Headerless CSV fallback: Col 0 = Name, Col 1 = Phone, Col 2 = Type/Notes, Col 3 = Notes
    for (const cols of rows) {
      if (!cols || cols.every(c => !c)) continue;
      const name = (cols[0] || '').trim();
      const phone = (cols[1] || '').trim();
      const col2 = (cols[2] || '').trim();
      const col3 = (cols[3] || '').trim();

      const col2IsType = /^(cliente|fornecedor|client|supplier|forn|cli)/i.test(col2);
      const explicitType = col2IsType ? col2 : '';
      const notes = col2IsType ? col3 : [col2, col3].filter(Boolean).join(' - ');

      if (name || phone) {
        results.push({
          name: name || phone,
          phone,
          notes,
          explicitType
        });
      }
    }
  }

  return results;
}

function parseTxtContacts(text) {
  const cleanText = String(text || '').replace(/^\uFEFF/, '');
  const lines = cleanText.split(/\r?\n/);
  const results = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#') || line.startsWith('//')) continue;

    // Check explicit delimiter (;, tab, |, or " - ")
    let parts = null;
    if (line.includes(';')) parts = line.split(';').map(p => p.trim());
    else if (line.includes('\t')) parts = line.split('\t').map(p => p.trim());
    else if (line.includes('|')) parts = line.split('|').map(p => p.trim());
    else if (line.includes(' - ')) parts = line.split(' - ').map(p => p.trim());

    if (parts && parts.length >= 2) {
      const name = parts[0];
      const phone = parts[1];
      const rest = parts.slice(2).join(' - ').trim();
      const restIsType = /^(cliente|fornecedor|forn|cli)/i.test(rest);
      results.push({
        name: name || phone,
        phone,
        notes: restIsType ? '' : rest,
        explicitType: restIsType ? rest : ''
      });
      continue;
    }

    // Fallback: extract phone pattern anywhere in the line
    const phoneMatch = line.match(/(\+?\(?\d[\d\s().-]{7,}\d)/);
    if (phoneMatch) {
      const phone = phoneMatch[1].trim();
      const name = line.replace(phoneMatch[1], '').replace(/[-:,;]+$/g, '').replace(/^[-:,;]+/g, '').trim();
      results.push({
        name: name || phone,
        phone,
        notes: '',
        explicitType: ''
      });
    } else {
      results.push({
        name: line,
        phone: '',
        notes: '',
        explicitType: ''
      });
    }
  }

  return results;
}

function detectImportContactType(name, notes, explicitType) {
  const explicitNorm = normalizeHeaderName(explicitType);
  if (/forn|supplier|fabric|distrib/.test(explicitNorm)) {
    return { type: 'fornecedor', autoSuggestedSupplier: true };
  }
  if (/cli|customer|comprador/.test(explicitNorm)) {
    return { type: 'cliente', autoSuggestedSupplier: false };
  }

  const combined = normalizeHeaderName(`${name} ${notes}`);
  if (/\b(fornecedor|forn|fabrica|distribuidora|atacado|atacadista|industria|representante)\b/.test(combined)) {
    return { type: 'fornecedor', autoSuggestedSupplier: true };
  }

  const fallbackType = state.contactFilterType === 'fornecedor' ? 'fornecedor' : 'cliente';
  return { type: fallbackType, autoSuggestedSupplier: false };
}

function openImportContactsModal() {
  resetImportContactsStep();
  bindImportContactsDropzone();
  openModal('modalImportContacts');
}

function resetImportContactsStep() {
  state.importContactsDraft = [];
  state.importFileName = '';
  const fileInput = document.getElementById('contactImportFileInput');
  if (fileInput) fileInput.value = '';
  const searchInput = document.getElementById('importSearchInput');
  if (searchInput) searchInput.value = '';
  const hideDup = document.getElementById('importHideDuplicates');
  if (hideDup) hideDup.checked = false;

  document.getElementById('importUploadStep').classList.remove('hidden');
  document.getElementById('importPreviewStep').classList.add('hidden');
  document.getElementById('importSelectionSummary').textContent = 'Selecione um arquivo para iniciar a importação.';
  document.getElementById('btnConfirmImportContacts').disabled = true;
}

function bindImportContactsDropzone() {
  if (state.importDropzoneBound) return;
  const dropzone = document.getElementById('importContactsDropzone');
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(evtName => {
    dropzone.addEventListener(evtName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('border-slate-900', 'bg-slate-100');
    });
  });

  ['dragleave', 'drop'].forEach(evtName => {
    dropzone.addEventListener(evtName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('border-slate-900', 'bg-slate-100');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) processImportContactFile(file);
  });

  state.importDropzoneBound = true;
}

function handleImportFileSelected(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  processImportContactFile(file);
}

function readFileTextWithEncodingFallback(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const buffer = ev.target.result;
        const utf8Text = new TextDecoder('utf-8').decode(buffer);
        // If UTF-8 produced replacement chars (common in Windows Excel ISO-8859-1 CSVs), decode as windows-1252
        if (utf8Text.includes('\uFFFD')) {
          resolve(new TextDecoder('windows-1252').decode(buffer));
        } else {
          resolve(utf8Text);
        }
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Falha ao ler o arquivo'));
    reader.readAsArrayBuffer(file);
  });
}

async function processImportContactFile(file) {
  try {
    const text = await readFileTextWithEncodingFallback(file);
    const ext = (file.name.split('.').pop() || '').toLowerCase();

    let parsed = [];
    if (ext === 'vcf' || /BEGIN:VCARD/i.test(text)) {
      parsed = parseVcfContacts(text);
    } else if (ext === 'csv') {
      parsed = parseCsvContacts(text);
    } else if (ext === 'txt') {
      parsed = parseTxtContacts(text);
    } else {
      showToast('Formato não suportado. Use arquivos .vcf, .csv ou .txt.', 'error');
      return;
    }

    if (!parsed || parsed.length === 0) {
      showToast('Nenhum contato válido encontrado neste arquivo.', 'error');
      return;
    }

    // Build lookup sets from existing DB contacts to prevent duplicates
    const existingPhones = new Set();
    const existingNames = new Set();
    for (const c of state.contacts) {
      const pKey = normalizePhoneKey(c.phone);
      if (pKey.length >= 8) existingPhones.add(pKey);
      if (c.name) existingNames.add(c.name.trim().toLowerCase());
    }

    const seenInFilePhones = new Set();
    const draft = parsed.map((item, idx) => {
      const pKey = normalizePhoneKey(item.phone);
      const nameKey = (item.name || '').trim().toLowerCase();
      const matchesDb = (pKey.length >= 8 && existingPhones.has(pKey)) ||
        (pKey.length < 8 && nameKey && existingNames.has(nameKey));
      const matchesFile = pKey.length >= 8 && seenInFilePhones.has(pKey);
      if (pKey.length >= 8) seenInFilePhones.add(pKey);

      const isDuplicate = matchesDb || matchesFile;
      const detected = detectImportContactType(item.name, item.notes, item.explicitType);

      return {
        idx,
        selected: !isDuplicate,
        name: item.name || '',
        phone: item.phone || '',
        notes: item.notes || '',
        type: detected.type,
        isDuplicate,
        duplicateReason: matchesDb ? 'Já cadastrado' : (matchesFile ? 'Repetido no arquivo' : '')
      };
    });

    state.importContactsDraft = draft;
    state.importFileName = file.name;

    const dupCount = draft.filter(d => d.isDuplicate).length;
    document.getElementById('importFileNameBadge').textContent = file.name;
    document.getElementById('importParsedStats').textContent = dupCount > 0
      ? `${draft.length} lido(s) • ${dupCount} já cadastrado(s)`
      : `${draft.length} contato(s) lido(s)`;

    document.getElementById('importUploadStep').classList.add('hidden');
    document.getElementById('importPreviewStep').classList.remove('hidden');

    renderImportPreview();
  } catch (err) {
    console.error('Import parse error:', err);
    showToast('Erro ao ler o arquivo de contatos.', 'error');
  }
}

function getVisibleImportRows() {
  const q = (document.getElementById('importSearchInput')?.value || '').toLowerCase().trim();
  const hideDuplicates = document.getElementById('importHideDuplicates')?.checked || false;

  return state.importContactsDraft.filter(row => {
    if (hideDuplicates && row.isDuplicate) return false;
    if (!q) return true;
    return (row.name && row.name.toLowerCase().includes(q)) ||
      (row.phone && row.phone.toLowerCase().includes(q)) ||
      (row.notes && row.notes.toLowerCase().includes(q));
  });
}

function updateImportSelectionSummary() {
  const selected = state.importContactsDraft.filter(r => r.selected && r.name.trim());
  const clientsCount = selected.filter(r => r.type === 'cliente').length;
  const suppliersCount = selected.filter(r => r.type === 'fornecedor').length;

  const summaryEl = document.getElementById('importSelectionSummary');
  const btnEl = document.getElementById('btnConfirmImportContacts');

  if (selected.length === 0) {
    summaryEl.textContent = 'Nenhum contato selecionado para importação.';
    btnEl.disabled = true;
    btnEl.textContent = 'Importar Selecionados';
  } else {
    summaryEl.textContent = `${selected.length} selecionado(s): ${clientsCount} cliente(s) e ${suppliersCount} fornecedor(es).`;
    btnEl.disabled = false;
    btnEl.textContent = `Importar ${selected.length} Contato(s)`;
  }
}

function renderImportPreview() {
  const tbody = document.getElementById('importContactsTbody');
  const emptyMsg = document.getElementById('importEmptyFilterMsg');
  const visibleRows = getVisibleImportRows();

  if (visibleRows.length === 0) {
    tbody.innerHTML = '';
    emptyMsg.classList.remove('hidden');
    updateImportSelectionSummary();
    return;
  }

  emptyMsg.classList.add('hidden');
  tbody.innerHTML = visibleRows.map(row => {
    const isClient = row.type === 'cliente';
    const rowBg = row.selected ? 'bg-white' : 'bg-slate-50/60 opacity-75';

    return `
      <tr class="${rowBg} hover:bg-slate-50 transition">
        <td class="py-2.5 px-3 text-center align-middle">
          <input type="checkbox" ${row.selected ? 'checked' : ''}
            aria-label="Incluir ${escapeHtml(row.name)}"
            onchange="toggleImportRow(${row.idx}, this.checked)"
            class="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer">
        </td>
        <td class="py-2 px-3 align-middle">
          <input type="text" value="${escapeHtml(row.name)}"
            aria-label="Nome do contato"
            oninput="updateImportRowField(${row.idx}, 'name', this.value)"
            class="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900">
          ${row.notes ? `<p class="text-[11px] text-slate-500 mt-1 truncate max-w-[260px]" title="${escapeHtml(row.notes)}">${escapeHtml(row.notes)}</p>` : ''}
        </td>
        <td class="py-2 px-3 align-middle">
          <input type="text" value="${escapeHtml(row.phone)}"
            aria-label="Telefone do contato"
            placeholder="Sem telefone"
            oninput="updateImportRowField(${row.idx}, 'phone', this.value)"
            class="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900">
        </td>
        <td class="py-2 px-3 align-middle">
          <div class="inline-flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200">
            <button type="button" onclick="setImportRowType(${row.idx}, 'cliente')"
              class="px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${isClient ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Cliente
            </button>
            <button type="button" onclick="setImportRowType(${row.idx}, 'fornecedor')"
              class="px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${!isClient ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
              Fornecedor
            </button>
          </div>
        </td>
        <td class="py-2 px-3 align-middle">
          ${row.isDuplicate
            ? `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200" title="${escapeHtml(row.duplicateReason)}">${escapeHtml(row.duplicateReason)}</span>`
            : `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">Novo</span>`
          }
        </td>
      </tr>
    `;
  }).join('');

  updateImportSelectionSummary();
}

function toggleImportRow(idx, checked) {
  const row = state.importContactsDraft.find(r => r.idx === idx);
  if (!row) return;
  row.selected = Boolean(checked);
  renderImportPreview();
}

function setImportRowType(idx, type) {
  const row = state.importContactsDraft.find(r => r.idx === idx);
  if (!row) return;
  row.type = type === 'fornecedor' ? 'fornecedor' : 'cliente';
  renderImportPreview();
}

function updateImportRowField(idx, field, value) {
  const row = state.importContactsDraft.find(r => r.idx === idx);
  if (!row) return;
  row[field] = value;
  if (field === 'name') {
    updateImportSelectionSummary();
  }
}

function selectVisibleImportRows(checked) {
  const visible = getVisibleImportRows();
  for (const row of visible) {
    row.selected = Boolean(checked);
  }
  renderImportPreview();
}

function bulkSetSelectedImportType(type) {
  const targetType = type === 'fornecedor' ? 'fornecedor' : 'cliente';
  let changed = 0;
  for (const row of state.importContactsDraft) {
    if (row.selected) {
      row.type = targetType;
      changed++;
    }
  }
  if (changed === 0) {
    showToast('Marque pelo menos um contato primeiro.', 'error');
    return;
  }
  renderImportPreview();
}

async function handleConfirmImportContacts() {
  const toImport = state.importContactsDraft
    .filter(r => r.selected && r.name.trim())
    .map(r => ({
      type: r.type === 'fornecedor' ? 'fornecedor' : 'cliente',
      name: r.name.trim(),
      phone: (r.phone || '').trim(),
      notes: (r.notes || '').trim()
    }));

  if (toImport.length === 0) {
    showToast('Selecione pelo menos um contato com nome válido.', 'error');
    return;
  }

  const btn = document.getElementById('btnConfirmImportContacts');
  btn.disabled = true;
  btn.textContent = 'Importando...';

  try {
    const res = await fetch('/api/contacts/bulk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contacts: toImport })
    });

    const data = await res.json();
    if (!res.ok) {
      showToast(data.error || 'Erro ao importar contatos.', 'error');
      updateImportSelectionSummary();
      return;
    }

    closeModal('modalImportContacts');
    await loadContacts();
    await loadOrders();
    await loadDashboard();
    await loadModels();

    const parts = [];
    if (data.clientsCount > 0) parts.push(`${data.clientsCount} cliente(s)`);
    if (data.suppliersCount > 0) parts.push(`${data.suppliersCount} fornecedor(es)`);
    showToast(`Importação concluída: ${data.importedCount} contato(s) (${parts.join(' e ')}).`);
  } catch (err) {
    console.error('Bulk import error:', err);
    showToast('Erro de conexão ao importar contatos.', 'error');
    updateImportSelectionSummary();
  }
}

function downloadContactsCsvTemplate() {
  const csvContent = '\uFEFF' + [
    'Nome;Telefone;Tipo;Observacoes',
    'Loja do Lucas;(11) 98765-4321;cliente;Entrega as sextas',
    'Fabrica Nova Franca;(16) 99123-4567;fornecedor;Lote minimo 12 pares'
  ].join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'modelo_contatos_sneakerflow.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

// ========================================================
// 5. LIST GENERATOR (CLEAN WHATSAPP-READY FORMAT)
// ========================================================
let generatorItems = [];
let currentOrderCustomerPhone = '';
let currentOrderCustomerName = '';
let currentGeneratorOrderId = null;

function initGenerator() {
  generatorItems = [
    { model_name: 'Adidas Campus', color: 'Preto / Vinho', cut_type: 'baixa', quantity: 2, unit_price: 250 },
    { model_name: 'Adidas Campus', color: 'Preto / Vinho', cut_type: 'alta', quantity: 3, unit_price: 260 },
    { model_name: 'Adidas Campus', color: 'Preto / Branco', cut_type: 'baixa', quantity: 1, unit_price: 250 },
    { model_name: 'Adidas Campus', color: 'Preto / Branco', cut_type: 'alta', quantity: 1, unit_price: 260 },
    { model_name: 'Air Force One', color: 'Branco', cut_type: 'baixa', quantity: 3, unit_price: 250 }
  ];

  renderGeneratorManualRows();
  updateGeneratorPreview();
}

async function loadPendingListOrders() {
  try {
    const res = await fetch('/api/orders?list_generated=0');
    if (!res.ok) return;
    const pendingOrders = await res.json();
    state.pendingListOrders = pendingOrders;
    updateOrderSelectInGenerator();
  } catch (err) {
    console.error('Error loading pending list orders:', err);
  }
}

function updateOrderSelectInGenerator() {
  const pending = state.pendingListOrders || [];
  const count = pending.length;

  const navBadge = document.getElementById('countPendingLists');
  if (navBadge) navBadge.textContent = count;

  const genBadge = document.getElementById('genPendingCountBadge');
  if (genBadge) {
    genBadge.textContent = count === 0 ? 'Tudo em dia' : `${count} pendente(s)`;
    genBadge.className = count === 0
      ? 'px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80'
      : 'px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200/80';
  }

  const sel = document.getElementById('genSelectOrder');
  if (!sel) return;

  const previousId = currentGeneratorOrderId;
  const placeholder = count === 0
    ? 'Todos os pedidos já tiveram suas listas feitas'
    : 'Selecione um pedido pendente de lista...';

  sel.innerHTML = `<option value="">${placeholder}</option>` +
    pending.map(o => `<option value="${o.id}">Pedido #${o.id} - ${escapeHtml(o.customer_name)} (${o.total_boxes} cx - ${formatDate(o.dispatch_friday)})</option>`).join('');

  if (previousId && pending.some(o => Number(o.id) === Number(previousId))) {
    sel.value = String(previousId);
  } else {
    sel.value = '';
    currentGeneratorOrderId = null;
    currentOrderCustomerName = '';
    const btnDone = document.getElementById('btnGenMarkDone');
    if (btnDone) btnDone.classList.add('hidden');
  }
}

async function loadOrderIntoGenerator() {
  const orderId = document.getElementById('genSelectOrder').value;
  const btnDone = document.getElementById('btnGenMarkDone');

  if (!orderId) {
    currentGeneratorOrderId = null;
    currentOrderCustomerPhone = '';
    currentOrderCustomerName = '';
    if (btnDone) btnDone.classList.add('hidden');
    updateGeneratorPreview();
    return;
  }

  currentGeneratorOrderId = Number(orderId);
  if (btnDone) btnDone.classList.remove('hidden');

  try {
    let ord = state.pendingListOrders.find(o => Number(o.id) === currentGeneratorOrderId);
    if (!ord) {
      const ordRes = await fetch(`/api/orders/${orderId}`);
      if (ordRes.ok) ord = await ordRes.json();
    }

    if (ord && ord.items) {
      generatorItems = ord.items.map(i => ({
        model_name: i.model_name,
        color: i.color,
        cut_type: i.cut_type,
        quantity: i.quantity,
        pairs_per_grade: i.pairs_per_grade || 12,
        total_pairs: i.total_pairs || (i.quantity * (i.pairs_per_grade || 12)),
        grade_notes: i.grade_notes || '',
        unit_price: i.unit_price,
        total_price: i.total_price
      }));
      currentOrderCustomerPhone = ord.customer_phone || '';
      currentOrderCustomerName = ord.customer_name || '';
      renderGeneratorManualRows();
      updateGeneratorPreview();
    }
  } catch (err) {
    console.error('Error loading order into generator:', err);
  }
}

async function markCurrentGeneratorOrderDone() {
  if (!currentGeneratorOrderId) return;
  const orderId = currentGeneratorOrderId;
  const ok = await markOrderListGenerated(orderId, 1);
  if (ok) {
    currentGeneratorOrderId = null;
    currentOrderCustomerPhone = '';
    currentOrderCustomerName = '';
    const sel = document.getElementById('genSelectOrder');
    if (sel) sel.value = '';
    const btnDone = document.getElementById('btnGenMarkDone');
    if (btnDone) btnDone.classList.add('hidden');
    updateGeneratorPreview();
    showToast(`Lista do Pedido #${orderId} marcada como feita.`);
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
      <div class="col-span-2">
        <input type="text" class="w-full px-2 py-1.5 rounded-md border border-slate-300 text-xs focus:outline-none focus:border-slate-900" placeholder="Cor" value="${escapeHtml(item.color)}" oninput="updateGeneratorItem(${idx}, 'color', this.value)">
      </div>
      <div class="col-span-3">
        <select class="w-full px-1.5 py-1.5 rounded-md border border-slate-300 bg-white text-xs focus:outline-none focus:border-slate-900" onchange="updateGeneratorItem(${idx}, 'cut_type', this.value)" title="Grade de numeração">
          <option value="baixa" ${item.cut_type === 'baixa' ? 'selected' : ''}>Baixa (34-39)</option>
          <option value="alta" ${item.cut_type === 'alta' ? 'selected' : ''}>Alta (38-43)</option>
          <option value="especial" ${item.cut_type === 'especial' ? 'selected' : ''}>Especial</option>
        </select>
      </div>
      <div class="col-span-1">
        <input type="number" min="1" class="w-full px-1.5 py-1.5 rounded-md border border-slate-300 text-xs tabular-nums focus:outline-none focus:border-slate-900" placeholder="Qtd" value="${item.quantity}" oninput="updateGeneratorItem(${idx}, 'quantity', Number(this.value))">
      </div>
      <div class="col-span-2">
        <input type="number" step="0.01" class="w-full px-2 py-1.5 rounded-md border border-slate-300 text-xs tabular-nums focus:outline-none focus:border-slate-900" placeholder="Preço/par" value="${item.unit_price}" oninput="updateGeneratorItem(${idx}, 'unit_price', Number(this.value))">
      </div>
      <div class="col-span-1 text-right">
        <button type="button" onclick="removeGeneratorRow(${idx})" class="p-1.5 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition" title="Remover" aria-label="Remover">
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
    pairs_per_grade: 12,
    total_pairs: 12,
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
    if (field === 'quantity') {
      const ppg = generatorItems[idx].pairs_per_grade || 12;
      generatorItems[idx].total_pairs = (Number(val) || 1) * ppg;
    }
    updateGeneratorPreview();
  }
}

function generateAsciiTreeClient(items, pixKey, pixName, customerName = '', discount = 0) {
  const divider = '--------------------------------';
  const lines = ['RESUMO DO PEDIDO'];

  if (customerName && customerName.trim()) {
    lines.push(`Cliente: ${customerName.trim()}`);
  }
  lines.push(divider);
  lines.push('');

  const modelMap = new Map();
  (items || []).forEach(item => {
    const mod = (item.model_name || 'Sem Modelo').trim();
    if (!modelMap.has(mod)) modelMap.set(mod, new Map());
    const colorMap = modelMap.get(mod);
    const col = (item.color || 'Padrão').trim();
    if (!colorMap.has(col)) colorMap.set(col, []);
    const qty = Math.max(1, Number(item.quantity) || 1);
    const pairsPerGrade = Number(item.pairs_per_grade) || 12;
    const totalPairs = Number(item.total_pairs) || (qty * pairsPerGrade);
    const unitPrice = Number(item.unit_price) || 0;
    const totalPrice = Number(item.total_price) || (totalPairs * unitPrice);

    colorMap.get(col).push({
      cut: (item.cut_type || 'baixa').toLowerCase(),
      qty,
      pairsPerGrade,
      totalPairs,
      gradeNotes: (item.grade_notes || '').trim(),
      unitPrice,
      totalPrice
    });
  });

  let totalBoxesAll = 0;
  let totalPairsAll = 0;
  let totalValueAll = 0;
  const fmtMoney = (v) => Number(v || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  Array.from(modelMap.entries()).forEach(([modName, colorMap]) => {
    let modBoxes = 0;
    let modPairs = 0;
    let modValue = 0;

    colorMap.forEach(cuts => {
      cuts.forEach(c => {
        modBoxes += c.qty;
        modPairs += c.totalPairs;
        modValue += c.totalPrice;
      });
    });

    totalBoxesAll += modBoxes;
    totalPairsAll += modPairs;
    totalValueAll += modValue;

    lines.push(`${modName} ${modBoxes} cx - R$ ${fmtMoney(modValue)}`);

    Array.from(colorMap.entries()).forEach(([colName, cuts]) => {
      const cutsText = cuts
        .map(c => {
          let gradeLabel = 'baixa';
          if (c.cut === 'alta') {
            gradeLabel = 'alta';
          } else if (c.cut === 'especial') {
            gradeLabel = c.gradeNotes ? `grade especial (${c.gradeNotes})` : 'grade especial';
          }
          const priceStr = Number.isInteger(c.unitPrice)
            ? String(c.unitPrice)
            : fmtMoney(c.unitPrice);
          return c.unitPrice > 0
            ? `${c.qty}x ${gradeLabel} ${priceStr}x${c.totalPairs} - R$ ${fmtMoney(c.totalPrice)}`
            : `${c.qty}x ${gradeLabel}`;
        })
        .join(' | ');
      lines.push(`- ${colName}: ${cutsText}`);
    });

    lines.push('');
  });

  lines.push(divider);
  lines.push(`Total de caixas: ${totalBoxesAll} cx`);
  const discNum = Math.max(0, Number(discount) || 0);
  if (discNum > 0) {
    const finalVal = Math.max(0, totalValueAll - discNum);
    lines.push(`Subtotal: R$ ${fmtMoney(totalValueAll)}`);
    lines.push(`Dedução: - R$ ${fmtMoney(discNum)}`);
    lines.push(`Valor total: R$ ${fmtMoney(finalVal)}`);
  } else {
    lines.push(`Valor total: R$ ${fmtMoney(totalValueAll)}`);
  }
  lines.push('');
  lines.push(`Chave: ${pixKey}`);
  lines.push(`Titular: ${pixName}`);

  return lines.join('\n');
}

function updateGeneratorPreview() {
  const pixKey = document.getElementById('genPixKey')?.value || state.settings.pix_key || '00000000000';
  const pixName = document.getElementById('genPixName')?.value || state.settings.pix_name || 'SUA DISTRIBUIDORA LTDA';
  const formattedText = generateAsciiTreeClient(generatorItems, pixKey, pixName, currentOrderCustomerName);
  const previewEl = document.getElementById('genAsciiPreview');
  if (previewEl) previewEl.textContent = formattedText;
}

async function copyGeneratorText() {
  const text = document.getElementById('genAsciiPreview')?.textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    if (currentGeneratorOrderId) {
      const orderId = currentGeneratorOrderId;
      currentGeneratorOrderId = null;
      currentOrderCustomerPhone = '';
      currentOrderCustomerName = '';
      await markOrderListGenerated(orderId, 1);
      updateGeneratorPreview();
      showToast(`Lista do Pedido #${orderId} copiada e marcada como feita.`);
    } else {
      showToast('Lista copiada com sucesso.');
    }
  } catch (err) {
    showToast('Erro ao copiar texto.', 'error');
  }
}

async function sendGeneratorWhatsApp() {
  const text = document.getElementById('genAsciiPreview')?.textContent;
  if (!text) return;
  const phone = currentOrderCustomerPhone;
  // Trigger WhatsApp redirect synchronously before any await so mobile/desktop apps launch reliably
  openWhatsApp(phone, text);
  if (currentGeneratorOrderId) {
    const orderId = currentGeneratorOrderId;
    currentGeneratorOrderId = null;
    currentOrderCustomerPhone = '';
    currentOrderCustomerName = '';
    await markOrderListGenerated(orderId, 1);
    updateGeneratorPreview();
    showToast(`WhatsApp aberto para o Pedido #${orderId} e lista marcada como feita.`);
  }
}

// ========================================================
// 6. ETIQUETAS DE ENVIO (IMPRESSORA TÉRMICA ZEBRA)
// ========================================================
const LABEL_STORAGE_KEYS = {
  size: 'sneakerflow_label_size_v1',
  recent: 'sneakerflow_label_recent_v1',
  customerMap: 'sneakerflow_label_customer_map_v1',
  textSettings: 'sneakerflow_label_text_settings_v1'
};

const DEFAULT_LABEL_TEXT_SETTINGS = {
  fontFamily: 'condensed',
  sizeScale: 1.0,
  recipientBold: true,
  recipientUnderline: false,
  recipientAlign: 'center',
  destinationBold: true,
  destinationUnderline: false,
  headerBold: true,
  headerUnderline: false
};

function getLabelFontFamilyCss(familyKey) {
  switch (familyKey) {
    case 'sans':
      return "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    case 'mono':
      return "'JetBrains Mono', 'Courier New', Courier, monospace";
    case 'serif':
      return "Georgia, 'Times New Roman', Times, serif";
    case 'condensed':
    default:
      return "'Arial Narrow', 'Bahnschrift Condensed', 'Helvetica Neue', Arial, sans-serif";
  }
}

function getLabelTextSettings() {
  if (!state.labelTextSettings) {
    state.labelTextSettings = loadSavedLabelTextSettings();
  }
  return state.labelTextSettings;
}

function loadSavedLabelTextSettings() {
  const saved = getLabelStorageJson(LABEL_STORAGE_KEYS.textSettings, null);
  const merged = { ...DEFAULT_LABEL_TEXT_SETTINGS, ...(saved || {}) };
  state.labelTextSettings = merged;
  return merged;
}

function saveLabelTextSettings() {
  setLabelStorageJson(LABEL_STORAGE_KEYS.textSettings, state.labelTextSettings || DEFAULT_LABEL_TEXT_SETTINGS);
}

function openLabelTextSettingsModal() {
  getLabelTextSettings();
  syncModalLabelTextControls();
  updateModalLabelPreview();
  openModal('modalLabelTextSettings');
}

function syncModalLabelTextControls() {
  const s = getLabelTextSettings();

  const fontSel = document.getElementById('labelTextFontFamily');
  if (fontSel) fontSel.value = s.fontFamily || 'condensed';

  document.querySelectorAll('.label-scale-btn').forEach(btn => {
    const scale = parseFloat(btn.dataset.scale);
    const isActive = Math.abs(scale - (s.sizeScale || 1.0)) < 0.01;
    btn.className = `label-scale-btn px-2.5 py-2 rounded-lg border text-xs transition text-center ${
      isActive
        ? 'font-semibold text-white bg-slate-900 border-slate-900 shadow-xs'
        : 'font-medium text-slate-700 bg-white border-slate-300 hover:bg-slate-50'
    }`;
    const subSpan = btn.querySelector('span');
    if (subSpan) {
      subSpan.className = `text-[10px] font-normal ${isActive ? 'text-slate-300' : 'text-slate-500'}`;
    }
  });

  const updateToggleBtn = (btnId, active) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.className = `px-3 py-1.5 rounded-lg border text-xs transition ${
      active
        ? 'font-bold text-white bg-slate-900 border-slate-900 shadow-xs'
        : 'font-medium text-slate-700 bg-white border-slate-300 hover:bg-slate-50'
    }`;
  };

  updateToggleBtn('btnToggleRecBold', s.recipientBold);
  updateToggleBtn('btnToggleRecUnderline', s.recipientUnderline);
  updateToggleBtn('btnToggleDestBold', s.destinationBold);
  updateToggleBtn('btnToggleDestUnderline', s.destinationUnderline);
  updateToggleBtn('btnToggleHeaderBold', s.headerBold);
  updateToggleBtn('btnToggleHeaderUnderline', s.headerUnderline);

  const btnLeft = document.getElementById('btnRecAlignLeft');
  const btnCenter = document.getElementById('btnRecAlignCenter');
  const isLeft = s.recipientAlign === 'left';
  if (btnLeft) {
    btnLeft.className = `px-2 py-1 rounded text-xs transition ${
      isLeft ? 'font-semibold text-white bg-slate-900' : 'text-slate-600 hover:text-slate-900'
    }`;
  }
  if (btnCenter) {
    btnCenter.className = `px-2 py-1 rounded text-xs transition ${
      !isLeft ? 'font-semibold text-white bg-slate-900' : 'text-slate-600 hover:text-slate-900'
    }`;
  }
}

function updateModalLabelPreview() {
  const s = getLabelTextSettings();
  const paper = document.getElementById('modalLabelPreviewPaper');
  const meta = document.getElementById('modalPreviewFontMeta');
  const recEl = document.getElementById('modalPreviewRecipient');
  const destEl = document.getElementById('modalPreviewDest');
  const volEl = document.getElementById('modalPreviewVol');
  const headEl = document.getElementById('modalPreviewHeader');

  if (!paper) return;

  paper.style.fontFamily = getLabelFontFamilyCss(s.fontFamily);

  const fontLabels = {
    condensed: 'Condensada',
    sans: 'Sem Serifa',
    mono: 'Monoespaçada',
    serif: 'Com Serifa'
  };
  const pct = Math.round((s.sizeScale || 1.0) * 100);
  if (meta) {
    meta.textContent = `${fontLabels[s.fontFamily] || 'Condensada'} · ${pct}%`;
  }

  const currentRec = (document.getElementById('labelRecipient')?.value || '').trim().toUpperCase() || 'SANTIAGO / GUINHO';
  const currentDest = (document.getElementById('labelDestination')?.value || '').trim().toUpperCase() || 'BARRACAO';
  const currentVols = document.getElementById('labelVolumes')?.value || '1';
  const currentUnit = document.getElementById('labelVolumeUnit')?.value || 'VL';
  const currentHeader = (document.getElementById('labelHeader')?.value || '').trim().toUpperCase();
  const currentNf = (document.getElementById('labelInvoiceNumber')?.value || '').trim().toUpperCase();
  const topLine = getLabelTopLine({ header: currentHeader, invoiceNumber: currentNf }) || 'LK DISTRIBUIDORA - NF: 048.121.006';

  if (headEl) {
    headEl.textContent = topLine;
    headEl.style.fontWeight = s.headerBold ? '800' : '400';
    headEl.style.textDecoration = s.headerUnderline ? 'underline' : 'none';
  }

  if (recEl) {
    recEl.textContent = currentRec;
    recEl.style.fontWeight = s.recipientBold ? '900' : '500';
    recEl.style.textDecoration = s.recipientUnderline ? 'underline' : 'none';
    recEl.style.textAlign = s.recipientAlign || 'center';
    recEl.style.fontSize = `${(1.15 * s.sizeScale).toFixed(2)}rem`;
  }

  if (destEl) {
    destEl.textContent = currentDest;
    destEl.style.fontWeight = s.destinationBold ? '900' : '500';
    destEl.style.textDecoration = s.destinationUnderline ? 'underline' : 'none';
    destEl.style.fontSize = `${(1.0 * s.sizeScale).toFixed(2)}rem`;
  }

  if (volEl) {
    volEl.textContent = `${currentVols} ${currentUnit}`;
    volEl.style.fontWeight = s.destinationBold ? '900' : '500';
    volEl.style.fontSize = `${(1.0 * s.sizeScale).toFixed(2)}rem`;
  }
}

function onModalTextSettingChanged() {
  const s = getLabelTextSettings();
  const fontSel = document.getElementById('labelTextFontFamily');
  if (fontSel) s.fontFamily = fontSel.value;
  saveLabelTextSettings();
  syncModalLabelTextControls();
  updateModalLabelPreview();
  updateLabelPreview();
}

function setLabelSizeScale(scale) {
  const s = getLabelTextSettings();
  s.sizeScale = Number(scale) || 1.0;
  saveLabelTextSettings();
  syncModalLabelTextControls();
  updateModalLabelPreview();
  updateLabelPreview();
}

function toggleLabelSetting(key) {
  const s = getLabelTextSettings();
  s[key] = !s[key];
  saveLabelTextSettings();
  syncModalLabelTextControls();
  updateModalLabelPreview();
  updateLabelPreview();
}

function setLabelRecipientAlign(align) {
  const s = getLabelTextSettings();
  s.recipientAlign = align === 'left' ? 'left' : 'center';
  saveLabelTextSettings();
  syncModalLabelTextControls();
  updateModalLabelPreview();
  updateLabelPreview();
}

function resetLabelTextSettings() {
  state.labelTextSettings = { ...DEFAULT_LABEL_TEXT_SETTINGS };
  saveLabelTextSettings();
  syncModalLabelTextControls();
  updateModalLabelPreview();
  updateLabelPreview();
  showToast('Formatação restaurada para o padrão Zebra.');
}

const DEFAULT_LABEL_DESTINATIONS = ['BARRACAO', 'FOZ', 'FOZ DO IGUAÇU', 'REDESPACHO'];

let labelOrdersCache = [];
let currentLabelOrderCustomerName = '';
let currentLabelOrderCustomerId = null;

function initLabelGenerator() {
  loadSavedLabelSize();
  loadSavedLabelTextSettings();
  renderQuickDestinations();
  renderRecentLabels();
  loadOrdersForLabels();
  updateLabelPreview();
}

function getLabelStorageJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}

function setLabelStorageJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {}
}

function loadSavedLabelSize() {
  const saved = getLabelStorageJson(LABEL_STORAGE_KEYS.size, { preset: '100x50', widthMm: 100, heightMm: 50 });
  const presetEl = document.getElementById('labelSizePreset');
  const wEl = document.getElementById('labelCustomWidth');
  const hEl = document.getElementById('labelCustomHeight');
  const customRow = document.getElementById('labelCustomSizeRow');

  if (presetEl) presetEl.value = saved.preset || '100x50';
  if (wEl) wEl.value = saved.widthMm || 100;
  if (hEl) hEl.value = saved.heightMm || 50;
  if (customRow) customRow.classList.toggle('hidden', saved.preset !== 'custom');
}

function getLabelDimensionsMm() {
  const preset = document.getElementById('labelSizePreset')?.value || '100x50';
  if (preset === 'custom') {
    const w = Math.max(30, Math.min(200, Number(document.getElementById('labelCustomWidth')?.value) || 100));
    const h = Math.max(20, Math.min(200, Number(document.getElementById('labelCustomHeight')?.value) || 50));
    return { preset: 'custom', widthMm: w, heightMm: h };
  }
  const parts = preset.split('x').map(Number);
  return {
    preset,
    widthMm: parts[0] || 100,
    heightMm: parts[1] || 50
  };
}

function onLabelSizePresetChange() {
  const preset = document.getElementById('labelSizePreset')?.value || '100x50';
  const customRow = document.getElementById('labelCustomSizeRow');
  if (customRow) customRow.classList.toggle('hidden', preset !== 'custom');

  const dims = getLabelDimensionsMm();
  setLabelStorageJson(LABEL_STORAGE_KEYS.size, dims);
  updateLabelPreview();
}

function onLabelCustomSizeChange() {
  const dims = getLabelDimensionsMm();
  setLabelStorageJson(LABEL_STORAGE_KEYS.size, dims);
  updateLabelPreview();
}

async function loadOrdersForLabels() {
  try {
    const res = await fetch('/api/orders');
    if (res.ok) {
      labelOrdersCache = await res.json();
    } else {
      labelOrdersCache = state.orders || [];
    }
  } catch (_) {
    labelOrdersCache = state.orders || [];
  }
  populateLabelOrderSelect();
}

function populateLabelOrderSelect() {
  const sel = document.getElementById('labelOrderSelect');
  if (!sel) return;
  const currentVal = sel.value;

  const orders = labelOrdersCache.length > 0 ? labelOrdersCache : (state.orders || []);
  sel.innerHTML = '<option value="">Preenchimento manual (sem pedido)</option>' +
    orders.map(o => {
      const boxes = Number(o.total_boxes) || 1;
      return `<option value="${o.id}">Pedido #${o.id} - ${escapeHtml(o.customer_name)} (${boxes} cx - Despacho ${formatDate(o.dispatch_friday)})</option>`;
    }).join('');

  if (currentVal && orders.some(o => String(o.id) === String(currentVal))) {
    sel.value = currentVal;
  }
}

async function openLabelForOrder(orderId) {
  switchTab('tab-labels');
  await loadOrdersForLabels();
  const sel = document.getElementById('labelOrderSelect');
  if (sel) {
    sel.value = String(orderId);
    loadOrderIntoLabel();
  }
}

function loadOrderIntoLabel() {
  const sel = document.getElementById('labelOrderSelect');
  const orderId = sel?.value;
  const hintBox = document.getElementById('labelOrderClientHint');
  const hintText = document.getElementById('labelOrderClientHintText');

  if (!orderId) {
    currentLabelOrderCustomerName = '';
    currentLabelOrderCustomerId = null;
    if (hintBox) hintBox.classList.add('hidden');
    updateLabelPreview();
    return;
  }

  const orders = labelOrdersCache.length > 0 ? labelOrdersCache : (state.orders || []);
  const ord = orders.find(o => String(o.id) === String(orderId));
  if (!ord) return;

  currentLabelOrderCustomerName = ord.customer_name || '';
  currentLabelOrderCustomerId = ord.customer_id || null;

  const customerMap = getLabelStorageJson(LABEL_STORAGE_KEYS.customerMap, {});
  const savedProfile = currentLabelOrderCustomerId ? customerMap[String(currentLabelOrderCustomerId)] : null;

  const totalBoxes = Math.max(1, Number(ord.total_boxes) || 1);

  document.getElementById('labelRecipient').value = (savedProfile && savedProfile.recipient)
    ? savedProfile.recipient
    : currentLabelOrderCustomerName;

  if (savedProfile && savedProfile.destination) {
    document.getElementById('labelDestination').value = savedProfile.destination;
  }
  if (savedProfile && savedProfile.header !== undefined) {
    document.getElementById('labelHeader').value = savedProfile.header;
  }
  if (savedProfile && savedProfile.unit) {
    document.getElementById('labelVolumeUnit').value = savedProfile.unit;
  }

  // Always clear NF when switching to another order so a previous invoice number is never reused by mistake
  const invEl = document.getElementById('labelInvoiceNumber');
  if (invEl) invEl.value = '';

  document.getElementById('labelVolumes').value = totalBoxes;
  const syncCopies = document.getElementById('labelSyncCopies')?.checked !== false;
  if (syncCopies) {
    document.getElementById('labelCopies').value = totalBoxes;
  }

  if (hintBox && hintText) {
    hintText.textContent = savedProfile && savedProfile.recipient && savedProfile.recipient.toUpperCase() !== currentLabelOrderCustomerName.toUpperCase()
      ? `Cliente: ${currentLabelOrderCustomerName} (último destinatário carregado)`
      : `Cliente do pedido: ${currentLabelOrderCustomerName}`;
    hintBox.classList.remove('hidden');
  }

  updateLabelPreview();
}

function restoreLabelOrderClientName() {
  if (!currentLabelOrderCustomerName) return;
  document.getElementById('labelRecipient').value = currentLabelOrderCustomerName;
  updateLabelPreview();
}

function clearLabelForm() {
  const sel = document.getElementById('labelOrderSelect');
  if (sel) sel.value = '';
  currentLabelOrderCustomerName = '';
  currentLabelOrderCustomerId = null;
  document.getElementById('labelOrderClientHint')?.classList.add('hidden');
  document.getElementById('labelRecipient').value = '';
  document.getElementById('labelDestination').value = '';
  document.getElementById('labelHeader').value = '';
  const invEl = document.getElementById('labelInvoiceNumber');
  if (invEl) invEl.value = '';
  document.getElementById('labelVolumes').value = 1;
  document.getElementById('labelCopies').value = 1;
  const syncEl = document.getElementById('labelSyncCopies');
  if (syncEl) syncEl.checked = true;
  const seqEl = document.getElementById('labelSequentialVolumes');
  if (seqEl) seqEl.checked = false;
  updateLabelPreview();
}

function onLabelVolumesInput() {
  const volumes = Math.max(1, parseInt(document.getElementById('labelVolumes')?.value, 10) || 1);
  const syncEl = document.getElementById('labelSyncCopies');
  if (syncEl && syncEl.checked) {
    document.getElementById('labelCopies').value = volumes;
  }
  updateLabelPreview();
}

function onLabelCopiesInput() {
  const volumes = Math.max(1, parseInt(document.getElementById('labelVolumes')?.value, 10) || 1);
  const copies = Math.max(1, parseInt(document.getElementById('labelCopies')?.value, 10) || 1);
  const syncEl = document.getElementById('labelSyncCopies');
  if (syncEl && copies !== volumes) {
    syncEl.checked = false;
  }
  updateLabelPreview();
}

function syncLabelCopiesToVolumes() {
  const volumes = Math.max(1, parseInt(document.getElementById('labelVolumes')?.value, 10) || 1);
  document.getElementById('labelCopies').value = volumes;
  const syncEl = document.getElementById('labelSyncCopies');
  if (syncEl) syncEl.checked = true;
  updateLabelPreview();
}

function formatLabelVolumeText(volumes, unit, copyIndex = null, sequential = false) {
  const v = Math.max(1, parseInt(volumes, 10) || 1);
  const u = (unit || 'VL').toUpperCase();
  if (sequential && copyIndex !== null) {
    return `${copyIndex}/${v} ${u}`;
  }
  return `${v} ${u}`;
}

function formatInvoiceText(raw) {
  const val = String(raw || '').trim().toUpperCase();
  if (!val) return '';
  if (/^NF[\s:\-.]/i.test(val) || val === 'NF') return val;
  return `NF: ${val}`;
}

function getLabelTopLine(data) {
  const parts = [];
  if (data.header) parts.push(data.header);
  const nfText = formatInvoiceText(data.invoiceNumber);
  if (nfText) parts.push(nfText);
  return parts.join(' - ');
}

function getLabelFormData() {
  const header = (document.getElementById('labelHeader')?.value || '').trim().toUpperCase();
  const invoiceNumber = (document.getElementById('labelInvoiceNumber')?.value || '').trim().toUpperCase();
  const recipient = (document.getElementById('labelRecipient')?.value || '').trim().toUpperCase();
  const destination = (document.getElementById('labelDestination')?.value || '').trim().toUpperCase();
  const volumes = Math.max(1, parseInt(document.getElementById('labelVolumes')?.value, 10) || 1);
  const unit = (document.getElementById('labelVolumeUnit')?.value || 'VL').toUpperCase();
  const copies = Math.max(1, Math.min(200, parseInt(document.getElementById('labelCopies')?.value, 10) || 1));
  const sequential = Boolean(document.getElementById('labelSequentialVolumes')?.checked);
  const dims = getLabelDimensionsMm();
  return { header, invoiceNumber, recipient, destination, volumes, unit, copies, sequential, ...dims };
}

function computeLabelTypographyScale(data) {
  const textSettings = getLabelTextSettings();
  const scaleMult = Number(textSettings.sizeScale) || 1.0;
  const hasHeader = Boolean(getLabelTopLine(data));
  const recLen = Math.max(1, (data.recipient || 'NOME DO DESTINATARIO').length);
  const bottomLen = Math.max(1, `${data.destination || 'LOCAL'} ${formatLabelVolumeText(data.volumes, data.unit, 1, data.sequential)}`.length);

  // Preview rem sizes
  let recRem = hasHeader ? 1.55 : 1.95;
  if (recLen > 24) recRem *= 0.72;
  else if (recLen > 18) recRem *= 0.84;

  let botRem = hasHeader ? 1.35 : 1.65;
  if (bottomLen > 24) botRem *= 0.74;
  else if (bottomLen > 18) botRem *= 0.85;

  // Print mm sizes proportional to label height (base 50mm)
  const hScale = Math.max(0.7, Math.min(1.6, data.heightMm / 50));
  const wScale = Math.max(0.65, Math.min(1.4, data.widthMm / 100));
  const sizeFactor = Math.min(hScale, wScale);

  let headerMm = 5.2 * sizeFactor;
  let recMm = (hasHeader ? 8.2 : 10.6) * sizeFactor;
  if (recLen > 26) recMm *= 0.68;
  else if (recLen > 20) recMm *= 0.8;
  else if (recLen > 15) recMm *= 0.9;

  let botMm = (hasHeader ? 7.4 : 9.2) * sizeFactor;
  if (bottomLen > 24) botMm *= 0.7;
  else if (bottomLen > 18) botMm *= 0.84;

  return {
    recRem: (recRem * scaleMult).toFixed(2),
    botRem: (botRem * scaleMult).toFixed(2),
    headerMm: (headerMm * scaleMult).toFixed(1),
    recMm: (recMm * scaleMult).toFixed(1),
    botMm: (botMm * scaleMult).toFixed(1)
  };
}

function updateLabelPreview() {
  const data = getLabelFormData();
  const textSettings = getLabelTextSettings();
  const paper = document.getElementById('thermalLabelPaper');
  const headerEl = document.getElementById('previewLabelHeader');
  const recEl = document.getElementById('previewLabelRecipient');
  const destEl = document.getElementById('previewLabelDestination');
  const volEl = document.getElementById('previewLabelVolume');
  const metaEl = document.getElementById('labelPreviewMeta');
  const btnTextEl = document.getElementById('btnPrintThermalLabelText');

  if (!paper) return;

  paper.style.aspectRatio = `${data.widthMm} / ${data.heightMm}`;
  paper.style.fontFamily = getLabelFontFamilyCss(textSettings.fontFamily);

  const scale = computeLabelTypographyScale(data);
  const topLine = getLabelTopLine(data);

  if (topLine) {
    headerEl.textContent = topLine;
    headerEl.style.fontWeight = textSettings.headerBold ? '800' : '400';
    headerEl.style.textDecoration = textSettings.headerUnderline ? 'underline' : 'none';
    headerEl.classList.remove('hidden');
  } else {
    headerEl.textContent = '';
    headerEl.classList.add('hidden');
  }

  recEl.textContent = data.recipient || 'NOME DO DESTINATÁRIO';
  recEl.style.fontSize = `${scale.recRem}rem`;
  recEl.style.fontWeight = textSettings.recipientBold ? '900' : '500';
  recEl.style.textDecoration = textSettings.recipientUnderline ? 'underline' : 'none';
  recEl.style.textAlign = textSettings.recipientAlign || 'center';
  recEl.style.opacity = data.recipient ? '1' : '0.35';

  destEl.textContent = data.destination || 'LOCAL DE ENVIO';
  destEl.style.fontWeight = textSettings.destinationBold ? '900' : '500';
  destEl.style.textDecoration = textSettings.destinationUnderline ? 'underline' : 'none';
  destEl.style.opacity = data.destination ? '1' : '0.35';

  volEl.textContent = formatLabelVolumeText(data.volumes, data.unit, 1, data.sequential);
  volEl.style.fontWeight = textSettings.destinationBold ? '900' : '500';

  const bottomEl = document.getElementById('previewLabelBottom');
  if (bottomEl) bottomEl.style.fontSize = `${scale.botRem}rem`;

  if (metaEl) {
    const fontLabels = {
      condensed: 'Condensada',
      sans: 'Sem Serifa',
      mono: 'Mono',
      serif: 'Serifa'
    };
    const fName = fontLabels[textSettings.fontFamily] || 'Condensada';
    const scalePct = Math.round((textSettings.sizeScale || 1.0) * 100);
    metaEl.textContent = `${data.widthMm} x ${data.heightMm} mm · ${fName} (${scalePct}%) · ${data.copies} ${data.copies === 1 ? 'etiqueta' : 'etiquetas'}`;
  }
  if (btnTextEl) {
    btnTextEl.textContent = data.copies === 1
      ? 'Imprimir 1 Etiqueta'
      : `Imprimir ${data.copies} Etiquetas`;
  }
}

function renderQuickDestinations() {
  const recent = getLabelStorageJson(LABEL_STORAGE_KEYS.recent, []);
  const destinations = [...DEFAULT_LABEL_DESTINATIONS];
  for (const r of recent) {
    if (r.destination && !destinations.includes(r.destination)) {
      destinations.push(r.destination);
    }
  }
  const topList = destinations.slice(0, 8);

  const datalist = document.getElementById('labelDestinationSuggestions');
  if (datalist) {
    datalist.innerHTML = topList.map(d => `<option value="${escapeHtml(d)}">`).join('');
  }

  const chipsEl = document.getElementById('labelQuickDestinations');
  if (chipsEl) {
    chipsEl.innerHTML = topList.map(d => `
      <button type="button" onclick="applyQuickLabelDestination('${escapeHtml(d).replace(/'/g, "\\'")}')"
        class="px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition">
        ${escapeHtml(d)}
      </button>
    `).join('');
  }
}

function applyQuickLabelDestination(dest) {
  const input = document.getElementById('labelDestination');
  if (input) {
    input.value = dest;
    updateLabelPreview();
  }
}

function saveLabelToHistory(data) {
  const recent = getLabelStorageJson(LABEL_STORAGE_KEYS.recent, []);
  const entry = {
    header: data.header,
    invoiceNumber: data.invoiceNumber || '',
    recipient: data.recipient,
    destination: data.destination,
    volumes: data.volumes,
    unit: data.unit,
    copies: data.copies,
    sequential: data.sequential
  };

  // Deduplicate by recipient + destination + header
  const filtered = recent.filter(r =>
    !(r.recipient === entry.recipient && r.destination === entry.destination && (r.header || '') === entry.header)
  );
  filtered.unshift(entry);
  setLabelStorageJson(LABEL_STORAGE_KEYS.recent, filtered.slice(0, 10));

  if (currentLabelOrderCustomerId) {
    const customerMap = getLabelStorageJson(LABEL_STORAGE_KEYS.customerMap, {});
    customerMap[String(currentLabelOrderCustomerId)] = {
      header: data.header,
      recipient: data.recipient,
      destination: data.destination,
      unit: data.unit
    };
    setLabelStorageJson(LABEL_STORAGE_KEYS.customerMap, customerMap);
  }

  renderQuickDestinations();
  renderRecentLabels();
}

function renderRecentLabels() {
  const container = document.getElementById('recentLabelsContainer');
  const clearBtn = document.getElementById('btnClearRecentLabels');
  if (!container) return;

  const recent = getLabelStorageJson(LABEL_STORAGE_KEYS.recent, []);
  if (clearBtn) clearBtn.classList.toggle('hidden', recent.length === 0);

  if (recent.length === 0) {
    container.innerHTML = `
      <div class="col-span-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
        As etiquetas impressas aparecerão aqui para reimpressão em 1 clique.
      </div>
    `;
    return;
  }

  container.innerHTML = recent.map((item, idx) => {
    const topLine = getLabelTopLine(item);
    return `
    <button type="button" onclick="applyRecentLabel(${idx})"
      class="text-left p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition">
      ${topLine ? `<div class="text-[10px] font-semibold uppercase tracking-wide text-slate-500 truncate">${escapeHtml(topLine)}</div>` : ''}
      <div class="text-xs font-bold text-slate-900 truncate">${escapeHtml(item.recipient)}</div>
      <div class="flex items-center justify-between gap-2 mt-1 text-[11px] text-slate-600">
        <span class="truncate">${escapeHtml(item.destination)}</span>
        <span class="font-semibold text-slate-800 shrink-0 tabular-nums">${escapeHtml(formatLabelVolumeText(item.volumes, item.unit))}</span>
      </div>
    </button>
  `;
  }).join('');
}

function applyRecentLabel(idx) {
  const recent = getLabelStorageJson(LABEL_STORAGE_KEYS.recent, []);
  const item = recent[idx];
  if (!item) return;

  document.getElementById('labelHeader').value = item.header || '';
  const invEl = document.getElementById('labelInvoiceNumber');
  if (invEl) invEl.value = item.invoiceNumber || '';
  document.getElementById('labelRecipient').value = item.recipient || '';
  document.getElementById('labelDestination').value = item.destination || '';
  document.getElementById('labelVolumes').value = item.volumes || 1;
  document.getElementById('labelVolumeUnit').value = item.unit || 'VL';
  document.getElementById('labelCopies').value = item.copies || item.volumes || 1;
  const seqEl = document.getElementById('labelSequentialVolumes');
  if (seqEl) seqEl.checked = Boolean(item.sequential);
  updateLabelPreview();
}

function clearRecentLabels() {
  setLabelStorageJson(LABEL_STORAGE_KEYS.recent, []);
  renderRecentLabels();
  renderQuickDestinations();
  showToast('Histórico de etiquetas limpo.');
}

function buildThermalPrintHtml(data) {
  const textSettings = getLabelTextSettings();
  const fontFamilyCss = getLabelFontFamilyCss(textSettings.fontFamily);
  const scale = computeLabelTypographyScale(data);
  const topLine = getLabelTopLine(data);
  const pages = [];

  for (let i = 1; i <= data.copies; i++) {
    const volText = formatLabelVolumeText(data.volumes, data.unit, i, data.sequential);
    const isLast = i === data.copies;
    pages.push(`
      <div class="label-sheet${isLast ? ' last-sheet' : ''}">
        ${topLine ? `<div class="line-header">${escapeHtml(topLine)}</div>` : ''}
        <div class="line-recipient">${escapeHtml(data.recipient)}</div>
        <div class="line-bottom">
          <span class="line-dest">${escapeHtml(data.destination)}</span>
          <span class="line-vol">${escapeHtml(volText)}</span>
        </div>
      </div>
    `);
  }

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Etiqueta - ${escapeHtml(data.recipient)}</title>
<style>
  @page {
    size: ${data.widthMm}mm ${data.heightMm}mm;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: ${data.widthMm}mm;
    background: #ffffff;
    color: #000000;
    font-family: ${fontFamilyCss};
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .label-sheet {
    width: ${data.widthMm}mm;
    height: ${data.heightMm}mm;
    padding: 2.5mm 3.5mm;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2.2mm;
    overflow: hidden;
    text-transform: uppercase;
    page-break-after: always;
    break-after: page;
  }
  .label-sheet.last-sheet {
    page-break-after: auto;
    break-after: auto;
  }
  .line-header {
    width: 100%;
    font-weight: ${textSettings.headerBold ? '800' : '400'};
    text-decoration: ${textSettings.headerUnderline ? 'underline' : 'none'};
    font-size: ${scale.headerMm}mm;
    line-height: 1.08;
    letter-spacing: 0.02em;
    word-break: break-word;
  }
  .line-recipient {
    width: 100%;
    font-weight: ${textSettings.recipientBold ? '900' : '500'};
    text-decoration: ${textSettings.recipientUnderline ? 'underline' : 'none'};
    text-align: ${textSettings.recipientAlign || 'center'};
    font-size: ${scale.recMm}mm;
    line-height: 1.06;
    word-break: break-word;
  }
  .line-bottom {
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 3mm;
    font-weight: ${textSettings.destinationBold ? '900' : '500'};
    font-size: ${scale.botMm}mm;
    line-height: 1.06;
  }
  .line-dest {
    text-align: left;
    word-break: break-word;
    text-decoration: ${textSettings.destinationUnderline ? 'underline' : 'none'};
  }
  .line-vol {
    text-align: right;
    white-space: nowrap;
    flex-shrink: 0;
  }
</style>
</head>
<body>${pages.join('')}</body>
</html>`;
}

function printThermalLabels() {
  const data = getLabelFormData();
  if (!data.recipient) {
    showToast('Informe o Nome do Destinatário antes de imprimir.', 'error');
    document.getElementById('labelRecipient')?.focus();
    return;
  }
  if (!data.destination) {
    showToast('Informe o Local de Envio antes de imprimir.', 'error');
    document.getElementById('labelDestination')?.focus();
    return;
  }

  saveLabelToHistory(data);

  const existingFrame = document.getElementById('thermalPrintFrame');
  if (existingFrame) existingFrame.remove();

  const iframe = document.createElement('iframe');
  iframe.id = 'thermalPrintFrame';
  iframe.setAttribute('aria-hidden', 'true');
  iframe.style.position = 'fixed';
  iframe.style.right = '0';
  iframe.style.bottom = '0';
  iframe.style.width = '0';
  iframe.style.height = '0';
  iframe.style.border = '0';
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(buildThermalPrintHtml(data));
  doc.close();

  setTimeout(() => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (err) {
      console.error('Thermal print error:', err);
      showToast('Não foi possível abrir o diálogo de impressão.', 'error');
    }
  }, 80);
}

function sanitizeZplText(str) {
  return String(str || '')
    .replace(/[\^~]/g, ' ')
    .replace(/\r?\n/g, ' ')
    .trim();
}

function generateZplCode(data) {
  const textSettings = getLabelTextSettings();
  const scaleMult = Number(textSettings.sizeScale) || 1.0;
  const dpiPerMm = 8; // Standard Zebra 203 DPI
  const pw = Math.round(data.widthMm * dpiPerMm);
  const ll = Math.round(data.heightMm * dpiPerMm);
  const marginX = Math.round(3 * dpiPerMm);
  const usableW = pw - (marginX * 2);

  const header = sanitizeZplText(getLabelTopLine(data));
  const recipient = sanitizeZplText(data.recipient);
  const destination = sanitizeZplText(data.destination);

  let recFontH = Math.round((recipient.length > 22 ? ll * 0.22 : ll * 0.27) * scaleMult);
  let recFontW = Math.round(recFontH * 0.62);
  let botFontH = Math.round(ll * 0.24 * scaleMult);
  let botFontW = Math.round(botFontH * 0.62);
  let headFontH = Math.round(ll * 0.14 * scaleMult);
  let headFontW = Math.round(headFontH * 0.65);

  const alignFlag = textSettings.recipientAlign === 'left' ? 'L' : 'C';

  const buildSingleZpl = (volText, qtyCopies) => {
    const lines = [
      '^XA',
      '^CI28',
      `^PW${pw}`,
      `^LL${ll}`,
      '^LH0,0'
    ];

    if (header) {
      const yHead = Math.round(ll * 0.08);
      const yRec = Math.round(ll * 0.30);
      const yBot = Math.round(ll * 0.66);
      lines.push(`^FO${marginX},${yHead}^A0N,${headFontH},${headFontW}^FB${usableW},1,0,C,0^FD${header}^FS`);
      lines.push(`^FO${marginX},${yRec}^A0N,${recFontH},${recFontW}^FB${usableW},2,0,${alignFlag},0^FD${recipient}^FS`);
      lines.push(`^FO${marginX},${yBot}^A0N,${botFontH},${botFontW}^FB${usableW},1,0,L,0^FD${destination}^FS`);
      lines.push(`^FO${marginX},${yBot}^A0N,${botFontH},${botFontW}^FB${usableW},1,0,R,0^FD${sanitizeZplText(volText)}^FS`);
    } else {
      const yRec = Math.round(ll * 0.16);
      const yBot = Math.round(ll * 0.58);
      lines.push(`^FO${marginX},${yRec}^A0N,${recFontH},${recFontW}^FB${usableW},2,0,${alignFlag},0^FD${recipient}^FS`);
      lines.push(`^FO${marginX},${yBot}^A0N,${botFontH},${botFontW}^FB${usableW},1,0,L,0^FD${destination}^FS`);
      lines.push(`^FO${marginX},${yBot}^A0N,${botFontH},${botFontW}^FB${usableW},1,0,R,0^FD${sanitizeZplText(volText)}^FS`);
    }

    lines.push(`^PQ${qtyCopies},0,1,Y`);
    lines.push('^XZ');
    return lines.join('\r\n');
  };

  if (data.sequential && data.copies > 1) {
    const blocks = [];
    for (let i = 1; i <= data.copies; i++) {
      blocks.push(buildSingleZpl(formatLabelVolumeText(data.volumes, data.unit, i, true), 1));
    }
    return blocks.join('\r\n');
  }

  return buildSingleZpl(formatLabelVolumeText(data.volumes, data.unit, 1, false), data.copies);
}

function downloadZplLabel() {
  const data = getLabelFormData();
  if (!data.recipient) {
    showToast('Informe o Nome do Destinatário antes de exportar ZPL.', 'error');
    document.getElementById('labelRecipient')?.focus();
    return;
  }
  if (!data.destination) {
    showToast('Informe o Local de Envio antes de exportar ZPL.', 'error');
    document.getElementById('labelDestination')?.focus();
    return;
  }

  saveLabelToHistory(data);
  const zpl = generateZplCode(data);
  const safeName = data.recipient.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '').slice(0, 32) || 'etiqueta';

  const blob = new Blob([zpl], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `etiqueta_${safeName}.zpl`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`Arquivo ZPL gerado para ${data.copies} etiqueta(s).`);
}

// Fechamento automático de dropdowns ao clicar fora
document.addEventListener('click', (e) => {
  const custCombo = document.getElementById('orderCustomerCombobox');
  if (custCombo && !custCombo.contains(e.target)) {
    closeCustomerDropdown();
  }
  const modCombo = document.getElementById('modelSupplierCombobox');
  if (modCombo && !modCombo.contains(e.target)) {
    closeModelSupplierDropdown();
  }
  const linkCombo = document.getElementById('linkSupplierCombobox');
  if (linkCombo && !linkCombo.contains(e.target)) {
    closeLinkSupplierDropdown();
  }
});
