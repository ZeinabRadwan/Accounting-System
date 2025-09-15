<template>
  <div class="currency-rtl-test">
    <h3>Currency RTL Test</h3>
    
    <div class="test-section">
      <h4>Current Mode: {{ isRTL ? 'RTL' : 'LTR' }}</h4>
      <p>Current Locale: {{ currentLocale }}</p>
    </div>
    
    <div class="test-section">
      <h4>Currency Display Test</h4>
      <div class="currency-examples">
        <div class="example">
          <label>SAR (Saudi Riyal) - Position: {{ currency.position }}</label>
          <CurrencyDisplay :amount="1234.56" />
        </div>
        
        <div class="example">
          <label>USD (US Dollar) - Position: {{ currency.position }}</label>
          <CurrencyDisplay :amount="1234.56" />
        </div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>Manual RTL Toggle</h4>
      <button @click="toggleRTL" class="btn btn-primary">
        Switch to {{ isRTL ? 'LTR' : 'RTL' }}
      </button>
    </div>
  </div>
</template>

<script>
import CurrencyDisplay from './CurrencyDisplay.vue'
import RTLMixin from '../mixins/RTLMixin'

export default {
  name: 'CurrencyRTLTest',
  components: {
    CurrencyDisplay
  },
  mixins: [RTLMixin],
  computed: {
    currency() {
      return this.$store.state.operations.appInfo.currency
    }
  },
  methods: {
    toggleRTL() {
      if (this.isRTL) {
        this.setRTLMode('en')
      } else {
        this.setRTLMode('ar')
      }
    }
  }
}
</script>

<style scoped>
.currency-rtl-test {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 20px 0;
}

.test-section {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 3px;
}

.example {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 3px;
}

.example label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.currency-examples {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
