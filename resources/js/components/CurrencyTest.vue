<template>
  <div class="currency-test">
    <h3>Currency Symbol Test</h3>
    
    <div class="test-item">
      <strong>SAR with SVG:</strong>
      <currency-symbol 
        symbol="riyal-symbol.svg"
        currency-code="SAR"
        :width="20"
        :height="20"
      />
      100.00
    </div>
    
    <div class="test-item">
      <strong>USD with text:</strong>
      <currency-symbol 
        symbol="$"
        currency-code="USD"
        :width="20"
        :height="20"
      />
      100.00
    </div>
    
    <div class="test-item">
      <strong>Using mixin method:</strong>
      <span v-if="isSvgCurrencySymbol('riyal-symbol.svg', 'SAR')">
        <img :src="getSvgCurrencyPath('riyal-symbol.svg')" alt="SAR" width="20" height="20" style="vertical-align: middle; margin-right: 5px;">
      </span>
      <span v-else>riyal-symbol.svg</span>
      100.00
    </div>
    
    <div class="test-item">
      <strong>Current currency from store:</strong>
      <span v-if="currentCurrency">
        <currency-symbol 
          :symbol="currentCurrency.symbol"
          :currency-code="currentCurrency.code"
          :width="20"
          :height="20"
        />
        100.00
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CurrencyTest',
  computed: {
    ...mapGetters({
      currentCurrency: 'operations/appInfo/currency'
    })
  }
}
</script>

<style scoped>
.currency-test {
  padding: 20px;
  border: 1px solid #ddd;
  margin: 20px;
  background: #f9f9f9;
}

.test-item {
  margin: 15px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
}
</style>
