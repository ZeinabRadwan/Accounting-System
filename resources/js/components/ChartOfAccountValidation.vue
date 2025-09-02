<template>
  <div v-if="validationErrors.length > 0" class="alert alert-warning">
    <div class="d-flex align-items-center">
      <i class="fas fa-exclamation-triangle mr-2"></i>
      <strong>{{ $t('Chart of Account Validation Required') }}</strong>
    </div>
    <hr class="my-2">
    <div class="validation-errors">
      <div v-for="(error, index) in validationErrors" :key="index" class="validation-error mb-2">
        <div class="d-flex align-items-center justify-content-between">
          <span class="text-danger">
            <i class="fas fa-times-circle mr-1"></i>
            {{ error.message }}
          </span>
          <div class="validation-actions">
            <router-link 
              v-if="error.editUrl" 
              :to="error.editUrl" 
              class="btn btn-sm btn-outline-primary mr-2"
              target="_blank"
              type="button"
            >
              <i class="fas fa-edit mr-1"></i>
              {{ $t('Edit') }}
            </router-link>
            <button 
              v-if="error.autoAssignUrl" 
              type="button"
              @click="autoAssignChartOfAccount(error)"
              class="btn btn-sm btn-outline-success"
              :disabled="error.isAutoAssigning"
            >
              <i class="fas fa-magic mr-1"></i>
              {{ error.isAutoAssigning ? $t('Assigning...') : $t('Auto-Assign') }}
            </button>
          </div>
        </div>
        <small v-if="error.context" class="text-muted d-block mt-1">
          {{ error.context }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ChartOfAccountValidation',
     props: {
     client: {
       type: Object,
       default: null
     },
     products: {
       type: Array,
       default: () => []
     },
     allProducts: {
       type: Array,
       default: () => []
     },
     supplier: {
       type: Object,
       default: null
     },
     type: {
       type: String,
       default: 'invoice', // 'invoice', 'purchase'
       validator: value => ['invoice', 'purchase'].includes(value)
     }
   },
  data() {
    return {
      autoAssigning: {}
    }
  },
  mounted() {
  },
     watch: {
     client: {
       handler(newVal, oldVal) {
         console.log('Client changed:', { new: newVal, old: oldVal })
       },
       deep: true
     },
     products: {
       handler(newVal, oldVal) {
         console.log('Products changed:', { new: newVal, old: oldVal })
       },
       deep: true
     },
     allProducts: {
       handler(newVal, oldVal) {
         console.log('AllProducts changed:', { new: newVal?.length, old: oldVal?.length })
         // Force re-computation of validation errors when allProducts changes
         this.$forceUpdate()
       },
       deep: true
     }
   },
  computed: {
    validationErrors() {
      const errors = []
      
      // Check if we have data to validate
      if (!this.client && !this.products) {
        return errors
      }
      
      // Validate client (for invoices)
      if (this.type === 'invoice' && this.client && typeof this.client === 'object') {
        if (!this.client.chart_of_account_id) {
          errors.push({
            message: this.$t('Client must have a Chart of Account assigned for journal entries'),
            field: 'client',
            entity: 'client',
            entityId: this.client.id,
            entitySlug: this.client.slug,
            editUrl: { name: 'clients.edit', params: { slug: this.client.slug } },
            autoAssignUrl: `/api/clients/${this.client.slug}/auto-assign-chart-of-account`,
            context: `Client: ${this.client.name}`
          })
        }
      }
      
      // Validate supplier (for purchases)
      if (this.type === 'purchase' && this.supplier && typeof this.supplier === 'object') {
        if (!this.supplier.chart_of_account_id) {
          errors.push({
            message: this.$t('Supplier must have a Chart of Account assigned for journal entries'),
            field: 'supplier',
            entity: 'supplier',
            entityId: this.supplier.id,
            entitySlug: this.supplier.slug,
            editUrl: { name: 'suppliers.edit', params: { slug: this.supplier.slug } },
            autoAssignUrl: `/api/suppliers/${this.supplier.slug}/auto-assign-chart-of-account`,
            context: `Supplier: ${this.supplier.name}`
          })
        }
      }
      
      // Validate products
      if (this.products && Array.isArray(this.products) && this.products.length > 0) {
        console.log('Validating products array:', this.products)
        this.products.forEach((product, index) => {
          if (product && typeof product === 'object') {
            // Get the latest product data from allProducts to check chart of accounts
            const latestProduct = this.allProducts.find(p => p.id === product.id)
            const salesAccountId = latestProduct ? latestProduct.sales_account_id : product.sales_account_id
            const purchaseAccountId = latestProduct ? latestProduct.purchase_account_id : product.purchase_account_id
            
            console.log(`Validating product ${index + 1}:`, product)
            console.log(`Product ${index + 1} latest sales_account_id:`, salesAccountId)
            console.log(`Product ${index + 1} latest purchase_account_id:`, purchaseAccountId)
            
            if (this.type === 'invoice' && !salesAccountId) {
              console.log(`Product ${index + 1} missing sales account`)
              errors.push({
                message: this.$t('Product must have a Sales Account assigned for journal entries'),
                field: 'sales_account_id',
                entity: 'product',
                entityId: product.id,
                entitySlug: product.slug,
                editUrl: { name: 'products.edit', params: { slug: product.slug } },
                autoAssignUrl: `/api/products/${product.slug}/auto-assign-chart-of-account`,
                context: `Product ${index + 1}: ${product.name || 'Unknown'}`
              })
            } else if (this.type === 'invoice') {
              console.log(`Product ${index + 1} has sales account:`, salesAccountId)
            }
            
            if (this.type === 'purchase' && !purchaseAccountId) {
              errors.push({
                message: this.$t('Product must have a Purchase Account assigned for journal entries'),
                field: 'purchase_account_id',
                entity: 'product',
                entityId: product.id,
                entitySlug: product.slug,
                editUrl: { name: 'products.edit', params: { slug: product.slug } },
                autoAssignUrl: `/api/products/${product.slug}/auto-assign-chart-of-account`,
                context: `Product ${index + 1}: ${product.name || 'Unknown'}`
              })
            }
          }
        })
      }
      
      return errors
    }
  },
  methods: {
    async autoAssignChartOfAccount(error) {
      if (!error.autoAssignUrl) return
      
      console.log('Starting auto-assignment for:', error)
      this.$set(error, 'isAutoAssigning', true)
      
      try {
        const response = await axios.post(error.autoAssignUrl)
        console.log('Auto-assignment response:', response.data)
        
        if (response.data.success) {
          // Show success message
          this.$toast.fire({
            icon: 'success',
            title: this.$t('Chart of Account assigned successfully')
          })
          
          console.log('Emitting chart-of-account-assigned event:', {
            entity: error.entity,
            entityId: error.entityId,
            chartOfAccountId: response.data.chart_of_account_id
          })
          
          // Emit event to refresh data
          this.$emit('chart-of-account-assigned', {
            entity: error.entity,
            entityId: error.entityId,
            chartOfAccountId: response.data.chart_of_account_id
          })
          
          // Force re-computation of validation errors
          this.$nextTick(() => {
            this.$forceUpdate()
          })
        }
      } catch (apiError) {
        console.error('Failed to auto-assign chart of account:', apiError)
        this.$toast.fire({
          icon: 'error',
          title: this.$t('Failed to assign Chart of Account automatically')
        })
      } finally {
        this.$set(error, 'isAutoAssigning', false)
        console.log('Auto-assignment completed')
      }
    },
    
    // Method to refresh validation state
    refreshValidation() {
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.validation-errors {
  max-height: 300px;
  overflow-y: auto;
}

.validation-error {
  padding: 8px;
  border-left: 3px solid #ffc107;
  background-color: rgba(255, 193, 7, 0.1);
  border-radius: 4px;
}

.validation-actions {
  display: flex;
  gap: 8px;
}

.alert-warning {
  border-color: #ffc107;
  background-color: #fff3cd;
  color: #856404;
}

.alert-warning hr {
  border-color: #ffeaa7;
}
</style>
