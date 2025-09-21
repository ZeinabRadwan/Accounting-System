<template>
  <span class="currency-display" :class="rtlClasses">
    <img 
      v-if="isSvgSymbol" 
      :src="svgPath" 
      :alt="currency.code"
      width="15"
      height="15"
      :style="svgStyle"
      class="currency-svg"
    />
    <span v-else-if="currency && shouldShowSymbolLeft" class="currency-text" :class="{ 'saudi-riyal': isSaudiRiyal }">{{ currency.symbol }}</span>
    <span class="currency-amount">{{ formattedAmount }}</span>
    <span v-if="!isSvgSymbol && currency && shouldShowSymbolRight" class="currency-text" :class="{ 'saudi-riyal': isSaudiRiyal }">{{ currency.symbol }}</span>
  </span>
</template>

<script>
import store from '../store'
import RTLMixin from '../mixins/RTLMixin'

export default {
  name: 'CurrencyDisplay',
  mixins: [RTLMixin],
  props: {
    amount: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    currency() {
      return store.state.operations.appInfo.currency
    },
    isSvgSymbol() {
      return this.currency && this.currency.symbol && this.currency.symbol.includes('.svg')
    },
    isSaudiRiyal() {
      // Check if this is Saudi Riyal currency (SAR or RY) with the new symbol
      return (this.currency && (this.currency.code === 'SAR' || this.currency.code === 'RY')) && 
             this.currency.symbol && this.currency.symbol.includes('ê')
    },
    svgPath() {
      if (this.isSvgSymbol) {
        return this.currency.symbol.startsWith('/') ? this.currency.symbol : `/images/${this.currency.symbol}`
      }
      return null
    },
    formattedAmount() {
      const num = Number(this.amount)
      if (num > 0) {
        return num.toLocaleString('en-US', { 
          minimumFractionDigits: 2, 
          maximumFractionDigits: 2 
        })
      }
      return '0'
    },
    // RTL-aware symbol positioning
    shouldShowSymbolLeft() {
      if (!this.currency) return false
      // In RTL mode, reverse the position logic
      return this.isRTL ? this.currency.position === 'right' : this.currency.position === 'left'
    },
    shouldShowSymbolRight() {
      if (!this.currency) return false
      // In RTL mode, reverse the position logic
      return this.isRTL ? this.currency.position === 'left' : this.currency.position === 'right'
    },
    // RTL-aware SVG styling
    svgStyle() {
      const baseStyle = {
        verticalAlign: 'middle',
        filter: 'brightness(0.2) contrast(2) saturate(1.5)'
      }
      
      if (this.isRTL) {
        // In RTL mode, reverse the margin logic
        if (this.currency && this.currency.position === 'left') {
          baseStyle.marginLeft = '5px'
          baseStyle.marginRight = '0px'
        } else {
          baseStyle.marginRight = '5px'
          baseStyle.marginLeft = '0px'
        }
      } else {
        // LTR mode - original logic
        if (this.currency && this.currency.position === 'left') {
          baseStyle.marginRight = '5px'
          baseStyle.marginLeft = '0px'
        } else {
          baseStyle.marginLeft = '5px'
          baseStyle.marginRight = '0px'
        }
      }
      
      return baseStyle
    }
  }
}
</script>

<style scoped>
.currency-display {
  display: inline-flex;
  align-items: center;
}

.currency-svg {
  display: inline-block;
  vertical-align: middle;
  filter: brightness(0.2) contrast(2) saturate(1.5);
  opacity: 1;
}

/* White symbol for dashboard cards */
.small-box .currency-svg {
  filter: brightness(0) invert(1) contrast(1);
}

.currency-text {
  margin: 0 2px;
}

.currency-amount {
}

/* RTL-specific styles */
[dir="rtl"] .currency-display {
  direction: rtl;
}

[dir="rtl"] .currency-display .currency-svg {
  /* RTL margin adjustments are handled in the computed svgStyle */
}

[dir="rtl"] .currency-display .currency-text {
  /* RTL text alignment */
  text-align: right;
}
</style>
