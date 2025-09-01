<template>
  <div class="product-discount-fields">
    <div class="grid grid-cols-3 gap-4">
      <!-- Discount Type -->
      <div class="form-group">
        <label class="form-label">Discount Type</label>
        <select 
          v-model="discountType" 
          class="form-select"
          @change="onDiscountTypeChange"
        >
          <option value="fixed">Fixed Amount</option>
          <option value="percentage">Percentage</option>
        </select>
      </div>

      <!-- Discount Value -->
      <div class="form-group">
        <label class="form-label">
          {{ discountType === 'percentage' ? 'Discount %' : 'Discount Amount' }}
        </label>
        <input
          v-model.number="discountValue"
          type="number"
          :step="discountType === 'percentage' ? '0.01' : '0.01'"
          :min="0"
          :max="discountType === 'percentage' ? '100' : '999999.99'"
          class="form-input"
          @input="onDiscountChange"
          placeholder="0.00"
        />
      </div>

      <!-- Calculated Discount Amount -->
      <div class="form-group">
        <label class="form-label">Discount Amount</label>
        <input
          :value="calculatedDiscountAmount"
          type="text"
          class="form-input bg-gray-100"
          readonly
          placeholder="0.00"
        />
      </div>
    </div>

    <!-- Validation Error -->
    <div v-if="validationError" class="text-red-600 text-sm mt-2">
      {{ validationError }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDiscountFields',
  props: {
    product: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    unitPrice: {
      type: Number,
      required: true
    },
    maxDiscount: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      discountType: 'fixed',
      discountValue: 0,
      validationError: ''
    }
  },
  computed: {
    calculatedDiscountAmount() {
      if (this.discountValue <= 0) return 0
      
      if (this.discountType === 'percentage') {
        return ((this.unitPrice * this.quantity * this.discountValue) / 100).toFixed(2)
      } else {
        return this.discountValue.toFixed(2)
      }
    },
    totalBeforeDiscount() {
      return this.unitPrice * this.quantity
    }
  },
  methods: {
    onDiscountTypeChange() {
      this.discountValue = 0
      this.validateDiscount()
      this.emitChange()
    },
    onDiscountChange() {
      this.validateDiscount()
      this.emitChange()
    },
    validateDiscount() {
      this.validationError = ''
      
      if (this.discountValue < 0) {
        this.validationError = 'Discount cannot be negative'
        return false
      }
      
      if (this.discountType === 'percentage' && this.discountValue > 100) {
        this.validationError = 'Discount percentage cannot exceed 100%'
        return false
      }
      
      if (this.maxDiscount !== null) {
        const maxAllowed = this.maxDiscount
        if (this.calculatedDiscountAmount > maxAllowed) {
          this.validationError = `Discount cannot exceed ${maxAllowed.toFixed(2)}`
          return false
        }
      }
      
      return true
    },
    emitChange() {
      this.$emit('discount-changed', {
        discount: this.discountValue,
        discountType: this.discountType,
        discountAmount: parseFloat(this.calculatedDiscountAmount),
        isValid: this.validationError === ''
      })
    },
    reset() {
      this.discountType = 'fixed'
      this.discountValue = 0
      this.validationError = ''
    },
    setDiscount(discount, discountType = 'fixed') {
      this.discountType = discountType
      this.discountValue = discount
      this.validateDiscount()
      this.emitChange()
    }
  },
  watch: {
    quantity() {
      this.validateDiscount()
      this.emitChange()
    },
    unitPrice() {
      this.validateDiscount()
      this.emitChange()
    }
  }
}
</script>

<style scoped>
.product-discount-fields {
  @apply p-4 border border-gray-200 rounded-lg bg-gray-50;
}

.form-group {
  @apply flex flex-col;
}

.form-label {
  @apply text-sm font-medium text-gray-700 mb-1;
}

.form-input {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent;
}

.form-select {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent;
}
</style>
