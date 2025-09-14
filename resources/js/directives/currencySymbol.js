import Vue from 'vue'
import store from '../store'

Vue.directive('currency-symbol', {
  bind(el) {
    // Add a class to mark this element
    el.classList.add('currency-display')
    this.processCurrencySymbol(el)
  },
  update(el) {
    this.processCurrencySymbol(el)
  },
  processCurrencySymbol(el) {
    const currency = store.state.operations.appInfo.currency
    
    // Skip if already processed
    if (el.hasAttribute('data-currency-processed')) {
      return
    }
    
    // Remove any existing SVG images
    const existingImg = el.querySelector('.currency-svg')
    if (existingImg) {
      existingImg.remove()
    }
    
    if (currency && currency.symbol) {
      // Mark as processed
      el.setAttribute('data-currency-processed', 'true')
      
      if (currency.symbol.includes('.svg')) {
        // Create SVG element with better visibility
        const svgElement = document.createElement('img')
        svgElement.src = currency.symbol.startsWith('/') ? currency.symbol : `/images/${currency.symbol}`
        svgElement.alt = currency.code || 'Currency Symbol'
        svgElement.width = 15
        svgElement.height = 15
        svgElement.style.verticalAlign = 'middle'
        svgElement.style.marginRight = currency.position === 'left' ? '5px' : '0px'
        svgElement.style.marginLeft = currency.position === 'right' ? '5px' : '0px'
        // Check if this is a dashboard card (small-box)
        const isDashboardCard = el.closest('.small-box')
        if (isDashboardCard) {
          svgElement.style.filter = 'brightness(0) invert(1) contrast(1)'
        } else {
          svgElement.style.filter = 'brightness(0.2) contrast(2) saturate(1.5)'
        }
        svgElement.style.opacity = '1'
        svgElement.classList.add('currency-svg')
        
        // Insert SVG symbol
        if (currency.position === 'left') {
          el.insertBefore(svgElement, el.firstChild)
        } else {
          el.appendChild(svgElement)
        }
      } else if ((currency.code === 'SAR' || currency.code === 'RY') && currency.symbol.includes('ê')) {
        // Apply Saudi Riyal font class to the element
        el.classList.add('saudi-riyal')
      }
    }
  }
})
