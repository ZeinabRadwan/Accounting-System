<template>
  <span class="currency-display">
    <img 
      v-if="isSvgSymbol" 
      :src="svgPath" 
      :alt="currency.code"
      width="15"
      height="15"
      style="vertical-align: middle; margin-right: 5px; filter: brightness(0.2) contrast(2) saturate(1.5);"
      class="currency-svg"
    />
    <span v-else-if="currency && currency.position === 'left'" class="currency-text">{{ currency.symbol }}</span>
    <span class="currency-amount">{{ formattedAmount }}</span>
    <span v-if="!isSvgSymbol && currency && currency.position === 'right'" class="currency-text">{{ currency.symbol }}</span>
  </span>
</template>

<script>
import store from '../store'

export default {
  name: 'CurrencyDisplay',
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
    svgPath() {
      if (this.isSvgSymbol) {
        return this.currency.symbol.startsWith('/') ? this.currency.symbol : `/images/${this.currency.symbol}`
      }
      return null
    },
    formattedAmount() {
      const num = Number(this.amount)
      if (num > 0) {
        return num.toFixed(2).toLocaleString()
      }
      return '0'
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
</style>
