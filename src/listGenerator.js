function formatCurrency(val) {
  return Number(val || 0).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

/**
 * Builds the exact tree-structured ASCII order list as requested in user's reference image
 * 
 * @param {Object} options
 * @param {Array} options.items - Array of order items: [{ model_name, color, cut_type, quantity, unit_price, total_price }]
 * @param {string} options.pixKey - Chave Pix
 * @param {string} options.pixName - Nome do titular da conta
 * @param {string} [options.customerName] - Optional customer name for header
 * @returns {string} Formatted ASCII text
 */
function buildTreeSummary({ items, pixKey = 'xxxxxxxxxxxx', pixName = 'xxxxxxxxxxxx', customerName = '' }) {
  const lineSeparator = '/'.repeat(108);
  const lines = [lineSeparator];

  // Group items by model name
  const modelMap = new Map();

  items.forEach(item => {
    const modName = (item.model_name || 'Sem Modelo').trim();
    if (!modelMap.has(modName)) {
      modelMap.set(modName, new Map());
    }
    const colorMap = modelMap.get(modName);
    const colName = (item.color || 'Padrão').trim();
    if (!colorMap.has(colName)) {
      colorMap.set(colName, []);
    }
    colorMap.get(colName).push({
      cut: item.cut_type || 'baixa',
      qty: Number(item.quantity) || 1,
      unitPrice: Number(item.unit_price) || 0,
      totalPrice: Number(item.total_price) || ((Number(item.quantity) || 1) * (Number(item.unit_price) || 0))
    });
  });

  let totalBoxesAll = 0;
  let totalValueAll = 0;

  const modelEntries = Array.from(modelMap.entries());

  modelEntries.forEach(([modName, colorMap], modIdx) => {
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

    // Header: Adidas Campus   7cx  xx.xxx,xx
    const modValStr = formatCurrency(modValue);
    const modelHeader = `${modName}   ${modBoxes}cx  ${modValStr}`;
    lines.push(modelHeader);

    const colors = Array.from(colorMap.entries());
    const numColors = colors.length;

    colors.forEach(([colName, cuts], colIdx) => {
      const isLastColor = colIdx === numColors - 1;
      const colPrefix = isLastColor ? '└ ' : '├ ';
      const contBar = isLastColor ? '  ' : '│ ';

      if (cuts.length === 1) {
        const cut = cuts[0];
        // e.g.: └ Branco  baixa 3cx  or  ├ Preto / Branco  baixa 1x
        const suffix = cut.qty > 1 && cut.cut.toLowerCase() === 'baixa' && numColors === 1 ? `${cut.qty}cx` : `${cut.qty}x`;
        lines.push(`${colPrefix}${colName}  ${cut.cut} ${suffix}`);
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

    lines.push(''); // blank line between models
  });

  // Footer with totals, Pix key and Beneficiary name
  const totalValStr = formatCurrency(totalValueAll);
  const boxSummary = `${totalBoxesAll} cx`.padEnd(19);
  const totalSummary = `valor total: ${totalValStr}`.padEnd(25);

  lines.push(`                                                chave pix: ${pixKey}`);
  lines.push(`${boxSummary}${totalSummary}nome: ${pixName}`);
  lines.push(lineSeparator);

  return lines.join('\n');
}

module.exports = {
  formatCurrency,
  buildTreeSummary
};

