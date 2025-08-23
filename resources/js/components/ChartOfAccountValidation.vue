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
            >
              <i class="fas fa-edit mr-1"></i>
              {{ $t('Edit') }}
            </router-link>
            <button 
              v-if="error.autoAssignUrl" 
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
    console.log('ChartOfAccountValidation component mounted')
    console.log('Initial props:', {
      client: this.client,
      products: this.products,
      type: this.type
    })
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
    }
  },
  computed: {
    validationErrors() {
      console.log('Computing validation errors:', {
        client: this.client,
        products: this.products,
        type: this.type
      })
      
      const errors = []
      
      // Check if we have data to validate
      if (!this.client && !this.products) {
        console.log('No data to validate yet')
        return errors
      }
      
      // Validate client (for invoices)
      if (this.type === 'invoice' && this.client && typeof this.client === 'object') {
        console.log('Validating client:', this.client)
        if (!this.client.chart_of_account_id) {
          console.log('Client missing chart of account')
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
        } else {
          console.log('Client has chart of account:', this.client.chart_of_account_id)
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
        this.products.forEach((product, index) => {
          if (product && typeof product === 'object') {
            console.log(`Validating product ${index + 1}:`, product)
            if (this.type === 'invoice' && !product.sales_account_id) {
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
              console.log(`Product ${index + 1} has sales account:`, product.sales_account_id)
            }
            
            if (this.type === 'purchase' && !product.purchase_account_id) {
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
      
      console.log('Validation errors found:', errors.length)
      return errors
    }
  },
  methods: {
    async autoAssignChartOfAccount(error) {
      if (!error.autoAssignUrl) return
      
      console.log('Starting auto-assignment for:', error)
      this.$set(error, 'isAutoAssigning', true)
      
      try {
        const response = await this.$http.post(error.autoAssignUrl)
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
          
          // Remove this error from the list safely
          try {
            const index = this.validationErrors.findIndex(e => e === error)
            if (index > -1) {
              this.validationErrors.splice(index, 1)
              console.log('Removed validation error from list')
            }
          } catch (removeError) {
            console.error('Error removing validation error:', removeError)
          }
        }
      } catch (error) {
        console.error('Failed to auto-assign chart of account:', error)
        this.$toast.fire({
          icon: 'error',
          title: this.$t('Failed to assign Chart of Account automatically')
        })
      } finally {
        this.$set(error, 'isAutoAssigning', false)
        console.log('Auto-assignment completed')
      }
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
