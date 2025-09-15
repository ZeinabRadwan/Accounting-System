<template>
  <span class="currency-symbol" :style="symbolStyle">
    <img 
      v-if="isSvgSymbol" 
      :src="symbolPath" 
      :alt="currencyCode"
      :width="width"
      :height="height"
      class="currency-svg"
      @error="handleImageError"
    />
    <span v-else-if="isSaudiRiyal" class="saudi-riyal">{{ symbol }}</span>
    <span v-else>{{ symbol }}</span>
  </span>
</template>

<script>
export default {
  name: 'CurrencySymbol',
  props: {
    symbol: {
      type: String,
      required: true
    },
    currencyCode: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 16
    },
    height: {
      type: [String, Number],
      default: 16
    },
    color: {
      type: String,
      default: '#231f20'
    }
  },
  computed: {
    isSvgSymbol() {
      // Check if the symbol is a path to an SVG file
      return this.symbol && this.symbol.includes('.svg');
    },
    isSaudiRiyal() {
      // Check if this is Saudi Riyal currency (SAR or RY) with the new symbol
      return (this.currencyCode === 'SAR' || this.currencyCode === 'RY') && 
             this.symbol && this.symbol.includes('ê');
    },
    symbolPath() {
      if (this.isSvgSymbol) {
        return this.symbol.startsWith('/') ? this.symbol : `/images/${this.symbol}`;
      }
      return null;
    },
    symbolStyle() {
      return {
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'middle'
      };
    }
  },
  methods: {
    handleImageError() {
      console.warn('Failed to load currency SVG:', this.symbolPath);
      // Fallback to text symbol if SVG fails to load
      this.$emit('svg-error', this.symbol);
    }
  }
}
</script>

<style scoped>
.currency-symbol {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}

.currency-svg {
  display: inline-block;
  vertical-align: middle;
  filter: brightness(0) saturate(100%);
}

.currency-svg[alt="SAR"] {
  filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
}
</style>
