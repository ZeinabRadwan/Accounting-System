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
      // Check if appInfo is loaded and currency exists
      if (!store.state.operations.appInfo || !store.state.operations.appInfo.currency) {
        return
      }
      
      const currency = store.state.operations.appInfo.currency
      
      // Only process if currency symbol is SVG
      if (!currency || !currency.symbol || !currency.symbol.includes('.svg')) {
        return
      }
      
      // Check if $el exists and has querySelectorAll method
      if (!this.$el || typeof this.$el.querySelectorAll !== 'function') {
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
        
        // Skip journal-related elements to avoid duplicate currency symbols
        if (this.isJournalElement(element)) {
          return
        }
        
        // Skip elements that are likely to contain dates, IDs, or other non-currency numbers
        if (this.shouldSkipElement(element)) {
          return
        }
        
        // Skip elements with no-currency class
        if (element.classList && element.classList.contains('no-currency')) {
          return
        }
        
        // Skip elements that are inside a parent with no-currency class
        if (element.closest && element.closest('.no-currency')) {
          return
        }
        
        // Skip if element already contains a currency display component
        if (element.querySelector && element.querySelector('.currency-display')) {
          return
        }
        
        // Skip if element is inside a currency display component
        if (element.closest && element.closest('.currency-display')) {
          return
        }
        
        // Skip if element already has currency symbol (to avoid double processing)
        const text = element.textContent || element.innerText
        if (text && text.includes(currency.symbol)) {
          return
        }
        
        // Skip if element contains an img tag (likely SVG currency symbol)
        if (element.querySelector && element.querySelector('img[alt*="currency"], img[alt*="Currency"], img.currency-svg')) {
          return
        }
        
        // Skip if element has data-currency-processed attribute
        if (element.hasAttribute('data-currency-processed')) {
          return
        }
        
        // Check for currency amounts (numbers with decimals)
        if (text && this.containsCurrencyAmount(text)) {
          // Double-check: if this looks like it should be handled by CurrencyDisplay, skip it
          if (this.shouldUseCurrencyDisplay(element)) {
            return
          }
          this.processCurrencyElement(element, currency, text)
        }
      })
    },
    
    containsCurrencyAmount(text) {
      // Skip if text looks like a date (YYYY-MM-DD, MM/DD/YYYY, etc.)
      if (this.isDateText(text)) {
        return false
      }
      
      // Skip if text looks like an ID (just numbers, possibly with prefixes)
      if (this.isIdText(text)) {
        return false
      }
      
      // Check if text contains currency-like amounts (numbers with decimals or commas)
      // Must have at least 2 decimal places to be considered currency
      const currencyPattern = /\d{1,3}(?:,\d{3})*(?:\.\d{2})/
      return currencyPattern.test(text)
    },
    
    isDateText(text) {
      // Check for common date patterns
      const datePatterns = [
        /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
        /^\d{2}\/\d{2}\/\d{4}$/, // MM/DD/YYYY
        /^\d{1,2}\/\d{1,2}\/\d{4}$/, // M/D/YYYY
        /^\d{4}\/\d{2}\/\d{2}$/, // YYYY/MM/DD
        /^\d{1,2}-\d{1,2}-\d{4}$/, // M-D-YYYY
        /^\d{4}-\d{1,2}-\d{1,2}$/, // YYYY-M-D
        /^\d{1,2}\/\d{1,2}\/\d{2}$/, // M/D/YY
        /^\d{2}-\d{2}-\d{4}$/, // MM-DD-YYYY
        /^\d{1,2}\.\d{1,2}\.\d{4}$/, // M.D.YYYY
        /^\d{4}\.\d{2}\.\d{2}$/, // YYYY.MM.DD
      ]
      
      return datePatterns.some(pattern => pattern.test(text.trim()))
    },
    
    isIdText(text) {
      // Check if text is just a number (likely an ID)
      const trimmedText = text.trim()
      
      // If it's just digits, it's likely an ID
      if (/^\d+$/.test(trimmedText)) {
        return true
      }
      
      // If it's a number with a common ID prefix/suffix pattern
      const idPatterns = [
        /^#\d+$/, // #123
        /^ID:\d+$/i, // ID:123
        /^id-\d+$/i, // id-123
        /^\d+-[A-Z]+$/i, // 123-ABC
        /^[A-Z]+-\d+$/i, // ABC-123
      ]
      
      return idPatterns.some(pattern => pattern.test(trimmedText))
    },
    
    shouldSkipElement(element) {
      // Skip elements that are likely to contain dates, IDs, or other non-currency numbers
      const text = element.textContent || element.innerText
      
      // Skip if text looks like a date or ID
      if (this.isDateText(text) || this.isIdText(text)) {
        return true
      }
      
      // Skip elements with specific classes that are likely to contain non-currency numbers
      const skipClasses = [
        'date', 'time', 'id', 'number', 'reference', 'code',
        'entry-number', 'line-number', 'page-number', 'item-number',
        'badge', 'label', 'status', 'priority', 'level'
      ]
      
      const classList = element.className || ''
      if (skipClasses.some(skipClass => classList.includes(skipClass))) {
        return true
      }
      
      // Skip table cells that are likely to contain IDs or dates
      if (element.tagName === 'TD' || element.tagName === 'TH') {
        const parentTable = element.closest('table')
        if (parentTable) {
          const headers = parentTable.querySelectorAll('th')
          const columnIndex = Array.from(element.parentNode.children).indexOf(element)
          const header = headers[columnIndex]
          
          if (header) {
            const headerText = header.textContent.toLowerCase()
            if (headerText.includes('date') || headerText.includes('id') || 
                headerText.includes('number') || headerText.includes('reference') ||
                headerText.includes('code') || headerText.includes('status') ||
                headerText.includes('vat') || headerText.includes('total with vat')) {
              return true
            }
          }
        }
      }
      
      return false
    },
    
    isJournalElement(element) {
      // Check if element is part of a journal table or journal-related component
      const journalSelectors = [
        '.journal-entries',
        '.journal-entry',
        '[class*="journal"]',
        'table[class*="journal"]',
        '.table-striped[class*="journal"]'
      ]
      
      // Check if element or any parent matches journal selectors
      let currentElement = element
      while (currentElement && currentElement !== document.body) {
        for (const selector of journalSelectors) {
          if (currentElement.matches && currentElement.matches(selector)) {
            return true
          }
        }
        currentElement = currentElement.parentElement
      }
      
      // Check if element is in a journal table by looking for specific table structure
      const table = element.closest('table')
      if (table) {
        const headers = table.querySelectorAll('th')
        const hasJournalHeaders = Array.from(headers).some(th => {
          const text = th.textContent.toLowerCase()
          return text.includes('debit') || text.includes('credit') || text.includes('journal')
        })
        if (hasJournalHeaders) {
          return true
        }
      }
      
      // Check if element contains CurrencyDisplay component (already processed)
      if (element.querySelector && element.querySelector('.currency-display')) {
        return true
      }
      
      // Check if element is a debit or credit column specifically
      if (this.isDebitCreditColumn(element)) {
        return true
      }
      
      return false
    },
    
    isDebitCreditColumn(element) {
      // Check if this is a debit or credit column in any table
      if (element.tagName === 'TD' || element.tagName === 'TH') {
        const table = element.closest('table')
        if (table) {
          const headers = table.querySelectorAll('th')
          const columnIndex = Array.from(element.parentNode.children).indexOf(element)
          const header = headers[columnIndex]
          
          if (header) {
            const headerText = header.textContent.toLowerCase()
            if (headerText.includes('debit') || headerText.includes('credit')) {
              return true
            }
          }
        }
      }
      
      // Check if element has classes that indicate debit/credit
      const classList = element.className || ''
      if (classList.includes('debit') || classList.includes('credit') || 
          classList.includes('text-success') || classList.includes('text-danger')) {
        return true
      }
      
      // Check if element is a span inside a debit/credit column
      if (element.tagName === 'SPAN') {
        const parentTd = element.closest('td')
        if (parentTd) {
          const table = parentTd.closest('table')
          if (table) {
            const headers = table.querySelectorAll('th')
            const columnIndex = Array.from(parentTd.parentNode.children).indexOf(parentTd)
            const header = headers[columnIndex]
            
            if (header) {
              const headerText = header.textContent.toLowerCase()
              if (headerText.includes('debit') || headerText.includes('credit')) {
                return true
              }
            }
          }
        }
      }
      
      return false
    },
    
    shouldUseCurrencyDisplay(element) {
      // Check if this element should use CurrencyDisplay component instead of mixin processing
      
      // If it's in a journal table, use CurrencyDisplay
      if (this.isJournalElement(element)) {
        return true
      }
      
      // If it's a debit/credit column, use CurrencyDisplay
      if (this.isDebitCreditColumn(element)) {
        return true
      }
      
      // If it's in a table with debit/credit headers, use CurrencyDisplay
      const table = element.closest('table')
      if (table) {
        const headers = table.querySelectorAll('th')
        const hasDebitCreditHeaders = Array.from(headers).some(th => {
          const text = th.textContent.toLowerCase()
          return text.includes('debit') || text.includes('credit')
        })
        if (hasDebitCreditHeaders) {
          return true
        }
      }
      
      // If it's a span with text-success or text-danger class, likely a debit/credit amount
      if (element.tagName === 'SPAN') {
        const classList = element.className || ''
        if (classList.includes('text-success') || classList.includes('text-danger')) {
          return true
        }
      }
      
      return false
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
