import Vue from 'vue'

// Plugin to automatically apply Saudi Riyal font to ê symbols
const SaudiRiyalSymbolPlugin = {
  install(Vue) {
    // Global mixin to process currency text after rendering
    Vue.mixin({
      mounted() {
        this.$nextTick(() => {
          this.processCurrencyElements()
        })
      },
      updated() {
        this.$nextTick(() => {
          this.processCurrencyElements()
        })
      },
      methods: {
        processCurrencyElements() {
          // Find all text nodes that contain ê symbol
          const walker = document.createTreeWalker(
            this.$el || document.body,
            NodeFilter.SHOW_TEXT,
            {
              acceptNode: function(node) {
                return node.textContent && node.textContent.includes('ê') ? 
                  NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
              }
            }
          )

          const textNodes = []
          let node
          while (node = walker.nextNode()) {
            textNodes.push(node)
          }

          textNodes.forEach(textNode => {
            const text = textNode.textContent
            // Check if this looks like a currency amount
            const currencyPattern = /^[\d,]+\.?\d*\s*ê$|^ê\s*[\d,]+\.?\d*$|^[\d,]+\.?\d*\s*ê\s*$|^ê\s*[\d,]+\.?\d*\s*$/
            
            if (currencyPattern.test(text.trim())) {
              const parent = textNode.parentNode
              if (parent && parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
                // Create a new element with the processed content
                const span = document.createElement('span')
                span.innerHTML = text.replace(/ê/g, '<span class="saudi-riyal">ê</span>')
                
                // Replace the text node with the new element
                parent.replaceChild(span, textNode)
              }
            }
          })
        }
      }
    })

    // Global method to process any text
    Vue.prototype.$processSaudiRiyalSymbol = (text) => {
      if (typeof text !== 'string') return text
      return text.replace(/ê/g, '<span class="saudi-riyal">ê</span>')
    }
  }
}

export default SaudiRiyalSymbolPlugin
