import CurrencySymbol from '../components/CurrencySymbol.vue'

export default {
  components: {
    CurrencySymbol
  },
  methods: {
    /**
     * Check if a currency symbol should be rendered as SVG
     * @param {string} symbol - Currency symbol
     * @param {string} currencyCode - Currency code
     * @returns {boolean} - True if should use SVG
     */
    isSvgCurrencySymbol(symbol, currencyCode) {
      return symbol && symbol.includes('.svg');
    },
    
    /**
     * Check if a currency symbol should use the Saudi Riyal font
     * @param {string} symbol - Currency symbol
     * @param {string} currencyCode - Currency code
     * @returns {boolean} - True if should use Saudi Riyal font
     */
    isSaudiRiyalCurrency(symbol, currencyCode) {
      return ['SAR', 'RY'].includes(currencyCode) && symbol && symbol.includes('ê');
    },
    
    /**
     * Get the full path for an SVG currency symbol
     * @param {string} symbol - Currency symbol
     * @returns {string} - Full path to SVG file
     */
    getSvgCurrencyPath(symbol) {
      if (symbol && symbol.includes('.svg')) {
        return symbol.startsWith('/') ? symbol : `/images/${symbol}`;
      }
      return null;
    },
    
    /**
     * Format currency with proper symbol handling
     * @param {number} amount - Amount to format
     * @param {Object} currency - Currency object
     * @returns {Object} - Formatted currency data
     */
    formatCurrencyWithSymbol(amount, currency) {
      const formattedAmount = Number(amount).toFixed(2).toLocaleString();
      const isSvg = this.isSvgCurrencySymbol(currency.symbol, currency.code);
      
      return {
        amount: formattedAmount,
        isSvg,
        symbol: currency.symbol,
        position: currency.position,
        displayText: formattedAmount,
        symbolPath: isSvg ? this.getSvgCurrencyPath(currency.symbol) : null
      };
    }
  }
}
