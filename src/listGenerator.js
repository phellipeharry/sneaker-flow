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
function buildTreeSummary({ items, pixKey = '00000000000', pixName = 'SUA DISTRIBUIDORA LTDA', customerName = '', discount = 0 }) {
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

    const qty = Math.max(1, Number(item.quantity) || 1);
    const pairsPerGrade = Number(item.pairs_per_grade) || 12;
    const totalPairs = Number(item.total_pairs) || (qty * pairsPerGrade);
    const unitPrice = Number(item.unit_price) || 0;
    const totalPrice = Number(item.total_price) || (totalPairs * unitPrice);

    colorMap.get(colName).push({
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

    lines.push(`${modName} ${modBoxes} cx - R$ ${formatCurrency(modValue)}`);

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
            : formatCurrency(c.unitPrice);
          return c.unitPrice > 0
            ? `${c.qty}x ${gradeLabel} ${priceStr}x${c.totalPairs} - R$ ${formatCurrency(c.totalPrice)}`
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
    lines.push(`Subtotal: R$ ${formatCurrency(totalValueAll)}`);
    lines.push(`Dedução: - R$ ${formatCurrency(discNum)}`);
    lines.push(`Valor total: R$ ${formatCurrency(finalVal)}`);
  } else {
    lines.push(`Valor total: R$ ${formatCurrency(totalValueAll)}`);
  }
  lines.push('');
  lines.push(`Chave: ${pixKey}`);
  lines.push(`Titular: ${pixName}`);

  return lines.join('\n');
}

module.exports = {
  formatCurrency,
  buildTreeSummary
};
