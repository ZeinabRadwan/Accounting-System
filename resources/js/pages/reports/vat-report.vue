<template>
  <div class="vat-report">
    <div class="page-header">
      <h1 class="page-title">{{ $t('VAT Report') }}</h1>
      <p class="page-description">
        {{ $t('Comprehensive VAT reporting with Chart of Account integration') }}
      </p>
    </div>

    <!-- Date Range Selector -->
    <div class="filters-section">
      <div class="row">
        <div class="col-md-3">
          <label class="form-label">{{ $t('Start Date') }}</label>
          <input 
            type="date" 
            v-model="filters.startDate" 
            class="form-control"
            @change="generateReport"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ $t('End Date') }}</label>
          <input 
            type="date" 
            v-model="filters.endDate" 
            class="form-control"
            @change="generateReport"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ $t('VAT Rate') }}</label>
          <v-select
            v-model="filters.vatRateId"
            :options="vatRates"
            :reduce="option => option.id"
            :placeholder="$t('All VAT Rates')"
            :clearable="true"
            @input="generateReport"
          />
        </div>
        <div class="col-md-3">
          <label class="form-label">&nbsp;</label>
          <button @click="generateReport" class="btn btn-primary btn-block">
            <i class="fas fa-sync-alt"></i> {{ $t('Generate Report') }}
          </button>
        </div>
      </div>
    </div>

    <!-- VAT Summary Cards -->
    <div class="summary-cards">
      <div class="row">
        <div class="col-md-4">
          <div class="summary-card sales-vat">
            <div class="card-icon">
              <i class="fas fa-arrow-up"></i>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ $t('Sales VAT') }}</h3>
              <div class="card-amount">{{ formatCurrency(summary.salesVatTotal) }}</div>
              <div class="card-description">{{ $t('VAT collected on sales') }}</div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="summary-card purchase-vat">
            <div class="card-icon">
              <i class="fas fa-arrow-down"></i>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ $t('Purchase VAT') }}</h3>
              <div class="card-amount">{{ formatCurrency(summary.purchaseVatTotal) }}</div>
              <div class="card-description">{{ $t('VAT paid on purchases') }}</div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="summary-card net-vat" :class="{ 'positive': summary.netVat >= 0, 'negative': summary.netVat < 0 }">
            <div class="card-icon">
              <i class="fas fa-balance-scale"></i>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ $t('Net VAT') }}</h3>
              <div class="card-amount">{{ formatCurrency(summary.netVat) }}</div>
              <div class="card-description">
                {{ summary.netVat >= 0 ? $t('VAT payable to tax authority') : $t('VAT receivable from tax authority') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VAT Transactions -->
    <div class="transactions-section">
      <div class="row">
        <!-- Sales VAT Transactions -->
        <div class="col-md-6">
          <div class="transaction-card">
            <div class="card-header">
              <h4 class="card-title">
                <i class="fas fa-shopping-cart text-success"></i>
                {{ $t('Sales VAT Transactions') }}
              </h4>
              <span class="badge bg-success">{{ salesVatTransactions.length }}</span>
            </div>
            <div class="card-body">
              <div v-if="salesVatTransactions.length === 0" class="no-data">
                {{ $t('No sales VAT transactions found') }}
              </div>
              <div v-else class="transaction-list">
                <div 
                  v-for="transaction in salesVatTransactions" 
                  :key="transaction.id"
                  class="transaction-item"
                >
                  <div class="transaction-header">
                    <span class="transaction-reference">{{ transaction.reference }}</span>
                    <span class="transaction-date">{{ formatDate(transaction.date) }}</span>
                  </div>
                  <div class="transaction-description">{{ transaction.description }}</div>
                  <div class="transaction-amount text-success">
                    {{ formatCurrency(getTransactionVatAmount(transaction)) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Purchase VAT Transactions -->
        <div class="col-md-6">
          <div class="transaction-card">
            <div class="card-header">
              <h4 class="card-title">
                <i class="fas fa-truck text-info"></i>
                {{ $t('Purchase VAT Transactions') }}
              </h4>
              <span class="badge bg-info">{{ purchaseVatTransactions.length }}</span>
            </div>
            <div class="card-body">
              <div v-if="purchaseVatTransactions.length === 0" class="no-data">
                {{ $t('No purchase VAT transactions found') }}
              </div>
              <div v-else class="transaction-list">
                <div 
                  v-for="transaction in purchaseVatTransactions" 
                  :key="transaction.id"
                  class="transaction-item"
                >
                  <div class="transaction-header">
                    <span class="transaction-reference">{{ transaction.reference }}</span>
                    <span class="transaction-date">{{ formatDate(transaction.date) }}</span>
                  </div>
                  <div class="transaction-description">{{ transaction.description }}</div>
                  <div class="transaction-amount text-info">
                    {{ formatCurrency(getTransactionVatAmount(transaction)) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VAT Rate Analysis -->
    <div class="vat-rate-analysis">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            <i class="fas fa-chart-pie"></i>
            {{ $t('VAT Rate Analysis') }}
          </h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <h5>{{ $t('Sales VAT by Rate') }}</h5>
              <div class="rate-breakdown">
                <div 
                  v-for="rate in vatRateBreakdown.sales" 
                  :key="rate.rate"
                  class="rate-item"
                >
                  <span class="rate-label">{{ rate.rate }}%</span>
                  <span class="rate-amount">{{ formatCurrency(rate.amount) }}</span>
                  <span class="rate-count">({{ rate.count }} {{ $t('transactions') }})</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h5>{{ $t('Purchase VAT by Rate') }}</h5>
              <div class="rate-breakdown">
                <div 
                  v-for="rate in vatRateBreakdown.purchase" 
                  :key="rate.rate"
                  class="rate-item"
                >
                  <span class="rate-label">{{ rate.rate }}%</span>
                  <span class="rate-amount">{{ formatCurrency(rate.amount) }}</span>
                  <span class="rate-count">({{ rate.count }} {{ $t('transactions') }})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Export Options -->
    <div class="export-section">
      <div class="row">
        <div class="col-md-12 text-center">
          <button @click="exportToPDF" class="btn btn-danger mr-2">
            <i class="fas fa-file-pdf"></i> {{ $t('Export to PDF') }}
          </button>
          <button @click="exportToExcel" class="btn btn-success mr-2">
            <i class="fas fa-file-excel"></i> {{ $t('Export to Excel') }}
          </button>
          <button @click="printReport" class="btn btn-info">
            <i class="fas fa-print"></i> {{ $t('Print Report') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VatReport',
  data() {
    return {
      filters: {
        startDate: this.getDefaultStartDate(),
        endDate: this.getDefaultEndDate(),
        vatRateId: null
      },
      summary: {
        salesVatTotal: 0,
        purchaseVatTotal: 0,
        netVat: 0
      },
      salesVatTransactions: [],
      purchaseVatTransactions: [],
      vatRates: [],
      vatRateBreakdown: {
        sales: [],
        purchase: []
      },
      loading: false
    }
  },
  
  mounted() {
    this.loadVatRates()
    this.generateReport()
  },
  
  methods: {
    getDefaultStartDate() {
      const date = new Date()
      date.setMonth(date.getMonth() - 1)
      return date.toISOString().split('T')[0]
    },
    
    getDefaultEndDate() {
      return new Date().toISOString().split('T')[0]
    },
    
    async loadVatRates() {
      try {
        const response = await this.$http.get('/api/vat-rates')
        this.vatRates = response.data.data || []
      } catch (error) {
        console.error('Error loading VAT rates:', error)
      }
    },
    
    async generateReport() {
      this.loading = true
      
      try {
        const response = await this.$http.get('/api/vat-report', {
          params: this.filters
        })
        
        const data = response.data.data
        this.summary = data.summary
        this.salesVatTransactions = data.salesVatTransactions || []
        this.purchaseVatTransactions = data.purchaseVatTransactions || []
        this.vatRateBreakdown = data.vatRateBreakdown || { sales: [], purchase: [] }
        
      } catch (error) {
        console.error('Error generating VAT report:', error)
        this.$toast.error(this.$t('Error generating report'))
      } finally {
        this.loading = false
      }
    },
    
    getTransactionVatAmount(transaction) {
      // Calculate VAT amount from journal entry lines
      const vatLine = transaction.lines?.find(line => 
        line.chart_of_account?.type?.name === 'Liability' || 
        line.chart_of_account?.type?.name === 'Asset'
      )
      return vatLine ? (vatLine.credit || vatLine.debit) : 0
    },
    
    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)
    },
    
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    
    exportToPDF() {
      // Implementation for PDF export
      this.$toast.info(this.$t('PDF export feature coming soon'))
    },
    
    exportToExcel() {
      // Implementation for Excel export
      this.$toast.info(this.$t('Excel export feature coming soon'))
    },
    
    printReport() {
      window.print()
    }
  }
}
</script>

<style scoped>
.vat-report {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.1rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}

.filters-section {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.summary-cards {
  margin-bottom: 2rem;
}

.summary-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
}

.card-icon {
  font-size: 2.5rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.sales-vat .card-icon {
  background: linear-gradient(135deg, #28a745, #20c997);
}

.purchase-vat .card-icon {
  background: linear-gradient(135deg, #17a2b8, #6f42c1);
}

.net-vat .card-icon {
  background: linear-gradient(135deg, #ffc107, #fd7e14);
}

.net-vat.positive .card-icon {
  background: linear-gradient(135deg, #28a745, #20c997);
}

.net-vat.negative .card-icon {
  background: linear-gradient(135deg, #dc3545, #e83e8c);
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.card-amount {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.transactions-section {
  margin-bottom: 2rem;
}

.transaction-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  height: 100%;
}

.transaction-card .card-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.transaction-card .card-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
}

.transaction-card .card-body {
  padding: 1.5rem;
  max-height: 400px;
  overflow-y: auto;
}

.transaction-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.transaction-item {
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
}

.transaction-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.transaction-reference {
  font-weight: 600;
  color: #2c3e50;
}

.transaction-date {
  color: #6c757d;
  font-size: 0.9rem;
}

.transaction-description {
  color: #495057;
  margin-bottom: 0.5rem;
}

.transaction-amount {
  font-weight: 600;
  font-size: 1.1rem;
}

.no-data {
  text-align: center;
  color: #6c757d;
  padding: 2rem;
}

.vat-rate-analysis {
  margin-bottom: 2rem;
}

.rate-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.rate-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.rate-label {
  font-weight: 600;
  color: #2c3e50;
  min-width: 60px;
}

.rate-amount {
  font-weight: 600;
  color: #28a745;
  flex: 1;
  text-align: right;
  margin-right: 1rem;
}

.rate-count {
  color: #6c757d;
  font-size: 0.9rem;
}

.export-section {
  text-align: center;
  padding: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .vat-report {
    padding: 1rem;
  }
  
  .summary-card {
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>
