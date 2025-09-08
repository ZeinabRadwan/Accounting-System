import CurrencySymbol from '../components/CurrencySymbol.vue'

/**
 * Format currency with SVG symbol support
 * @param {number} amount - The amount to format
 * @param {Object} currency - Currency object with symbol, position, code
 * @param {Object} options - Formatting options
 * @returns {Object} - Formatted currency object with symbol component and text
 */
export function formatCurrencyWithSvg(amount, currency, options = {}) {
  const {
    width = 16,
    height = 16,
    color = '#231f20',
    decimalPlaces = 2
  } = options;

  const formattedAmount = Number(amount).toFixed(decimalPlaces).toLocaleString();
  
  // Check if symbol is an SVG path
  const isSvgSymbol = currency.symbol && currency.symbol.includes('.svg');
  
  let symbolComponent = null;
  let displayText = '';
  
  if (isSvgSymbol) {
    symbolComponent = {
      component: CurrencySymbol,
      props: {
        symbol: currency.symbol,
        currencyCode: currency.code,
        width,
        height,
        color
      }
    };
  }
  
  if (currency.position === 'left') {
    displayText = isSvgSymbol ? formattedAmount : `${currency.symbol}${formattedAmount}`;
  } else {
    displayText = isSvgSymbol ? formattedAmount : `${formattedAmount}${currency.symbol}`;
  }
  
  return {
    amount: formattedAmount,
    symbol: currency.symbol,
    position: currency.position,
    isSvgSymbol,
    symbolComponent,
    displayText,
    fullText: displayText
  };
} 

/**
 * Check if a currency symbol should be rendered as SVG
 * @param {string} symbol - Currency symbol
 * @param {string} currencyCode - Currency code
 * @returns {boolean} - True if should use SVG
 */
export function shouldUseSvgSymbol(symbol, currencyCode) {
  // Use SVG for SAR and RY currencies
  return ['SAR', 'RY'].includes(currencyCode) || (symbol && symbol.includes('.svg'));
}
