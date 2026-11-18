function formatCurrency(val) {
  return Number(val || 0).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/**
 * Builds a clean, modern WhatsApp-ready order summary
 *
 * @param {Object} options
 * @param {Array} options.items - [{ model_name, color, cut_type, quantity, unit_price, total_price }]
 * @param {string} options.pixKey - Chave Pix
 * @param {string} options.pixName - Nome do titular da conta
 * @param {string} [options.customerName] - Optional customer name for header
 * @returns {string} Formatted text ready for WhatsApp or clipboard
 */
function buildTreeSummary({ items, pixKey = '00000000000', pixName = 'SUA DISTRIBUIDORA LTDA', customerName = '' }) {
  const divider = '--------------------------------';
  const lines = ['RESUMO DO PEDIDO'];

  if (customerName && customerName.trim()) {
    lines.push(`Cliente: ${customerName.trim()}`);
  }
  lines.push(divider);
  lines.push('');

  // Group items by model name -> color
  const modelMap = new Map();

  (items || []).forEach(item => {
    const modName = (item.model_name || 'Sem Modelo').trim();
    if (!modelMap.has(modName)) {
      modelMap.set(modName, new Map());
    }
    const colorMap = modelMap.get(modName);
    const colName = (item.color || 'Padrão').trim();
    if (!colorMap.has(colName)) {
      colorMap.set(colName, []);
    }

    const qty = Number(item.quantity) || 1;
    const unitPrice = Number(item.unit_price) || 0;
    const totalPrice = Number(item.total_price) || (qty * unitPrice);

    colorMap.get(colName).push({
      cut: (item.cut_type || 'baixa').toLowerCase(),
      qty,
      unitPrice,
      totalPrice
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

    lines.push(`${modName} (${modBoxes} cx - R$ ${formatCurrency(modValue)})`);

    Array.from(colorMap.entries()).forEach(([colName, cuts]) => {
      const cutsText = cuts
        .map(c => {
          const gradeLabel = c.cut === 'alta' ? 'grade alta (38-43)' : 'grade baixa (34-39)';
          return c.unitPrice > 0
            ? `${c.qty}x ${gradeLabel} - R$ ${formatCurrency(c.unitPrice)}`
            : `${c.qty}x ${gradeLabel}`;
        })
        .join(' | ');
      lines.push(`- ${colName}: ${cutsText}`);
    });

    lines.push('');
  });

  lines.push(divider);
  lines.push(`Total de caixas: ${totalBoxesAll} cx`);
  lines.push(`Valor total: R$ ${formatCurrency(totalValueAll)}`);
  lines.push('');
  lines.push(`Chave: ${pixKey}`);
  lines.push(`Titular: ${pixName}`);

  return lines.join('\n');
}

module.exports = {
  formatCurrency,
  buildTreeSummary
};
