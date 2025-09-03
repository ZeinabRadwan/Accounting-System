import store from '../store'

export default {
  mounted() {
    // Auto-replace currency displays after component is mounted
    this.$nextTick(() => {
      this.replaceCurrencyDisplays()
    })
  },
  updated() {
    // Re-run when component updates
    this.$nextTick(() => {
      this.replaceCurrencyDisplays()
    })
  },
  methods: {
    replaceCurrencyDisplays() {
      const currency = store.state.operations.appInfo.currency
      
      // Only process if currency symbol is SVG
      if (!currency || !currency.symbol || !currency.symbol.includes('.svg')) {
        return
      }
      
      // Find all elements that might contain currency amounts
      const elements = this.$el.querySelectorAll(`
        .currency-display, 
        [class*="currency"], 
        h3, h4, h5, h6,
        .small-box .inner h3,
        .card-body h3,
        .table td, .table th,
        .badge, .label,
        .text-right, .text-left,
        .amount, .total, .price,
        .currency-amount,
        .form-control,
        .input-group-text,
        .btn,
        .alert,
        .list-group-item,
        .media-body,
        .widget-content,
        .widget-header,
        .panel-body,
        .well,
        .jumbotron,
        .breadcrumb,
        .pagination,
        .nav,
        .navbar,
        .dropdown-menu,
        .modal-body,
        .popover-content,
        .tooltip-inner
      `)
      
      elements.forEach(element => {
        // Skip if already processed
        if (element.hasAttribute('data-currency-processed')) {
          return
        }
        
        const text = element.textContent || element.innerText
        // Check for currency symbol or currency amounts (numbers with decimals)
        if (text && (text.includes(currency.symbol) || this.containsCurrencyAmount(text))) {
          this.processCurrencyElement(element, currency, text)
        }
      })
    },
    
    containsCurrencyAmount(text) {
      // Check if text contains currency-like amounts (numbers with decimals or commas)
      const currencyPattern = /\d{1,3}(?:,\d{3})*(?:\.\d{2})?/
      return currencyPattern.test(text)
    },
    
    processCurrencyElement(element, currency, text) {
      // Mark as processed
      element.setAttribute('data-currency-processed', 'true')
      
      // Extract the amount from the text
      const amountMatch = text.match(/(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/)
      if (!amountMatch) return
      
      const amount = amountMatch[1]
      
      // Create SVG image element
      const svgElement = document.createElement('img')
      svgElement.src = currency.symbol.startsWith('/') ? currency.symbol : `/images/${currency.symbol}`
      svgElement.alt = currency.code || 'Currency'
      svgElement.width = 15
      svgElement.height = 15
      svgElement.style.verticalAlign = 'middle'
      svgElement.style.marginRight = '5px'
      // Check if this is a dashboard card (small-box)
      const isDashboardCard = element.closest('.small-box')
      if (isDashboardCard) {
        svgElement.style.filter = 'brightness(0) invert(1) contrast(1)'
      } else {
        svgElement.style.filter = 'brightness(0.2) contrast(2) saturate(1.5)'
      }
      svgElement.style.opacity = '1'
      svgElement.classList.add('currency-svg')
      
      // Replace the content
      element.innerHTML = ''
      if (currency.position === 'left') {
        element.appendChild(svgElement)
        element.appendChild(document.createTextNode(' ' + amount))
      } else {
        element.appendChild(document.createTextNode(amount + ' '))
        element.appendChild(svgElement)
      }
    }
  }
}
