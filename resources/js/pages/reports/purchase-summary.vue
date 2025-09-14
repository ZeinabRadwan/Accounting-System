<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <!-- Filters Card -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ $t('Filters') }}</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <form @submit.prevent="generateReport" class="row">
          <!-- Fiscal Year -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Fiscal Year') }}</label>
              <v-select
                v-model="filters.fiscalYear"
                :options="fiscalYears"
                :reduce="year => year.id"
                label="name"
                :placeholder="$t('Select Fiscal Year')"
                :searchable="true"
                :clearable="true"
                :loading="loadingFiscalYears"
                @search="searchFiscalYears"
              />
            </div>
          </div>

          <!-- Accounting Period -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Accounting Period') }}</label>
              <v-select
                v-model="filters.accountingPeriod"
                :options="accountingPeriods"
                :reduce="period => period.id"
                label="name"
                :placeholder="$t('Select Period')"
                :searchable="true"
                :clearable="true"
                :loading="loadingAccountingPeriods"
                :disabled="!filters.fiscalYear"
                @search="searchAccountingPeriods"
              />
            </div>
          </div>

          <!-- Date Range -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Date Range') }}</label>
              <div class="input-group">
                <input
                  type="date"
                  v-model="filters.fromDate"
                  class="form-control"
                  :placeholder="$t('From Date')"
                  :disabled="filters.fiscalYear || filters.accountingPeriod"
                />
                <div class="input-group-append">
                  <span class="input-group-text">{{ $t('to') }}</span>
                </div>
                <input
                  type="date"
                  v-model="filters.toDate"
                  class="form-control"
                  :placeholder="$t('To Date')"
                  :disabled="filters.fiscalYear || filters.accountingPeriod"
                />
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="col-12">
            <div class="form-group">
              <button 
                type="submit" 
                class="btn btn-primary"
                :disabled="loading"
              >
                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fas fa-search"></i>
                {{ $t('Generate Report') }}
              </button>
              <button type="button" @click="resetFilters" class="btn btn-secondary ml-2">
                <i class="fas fa-undo"></i>
                {{ $t('Reset') }}
              </button>
              <button 
                v-if="reportData && reportData.summary" 
                type="button" 
                @click="exportToPDF" 
                class="btn btn-success ml-2"
              >
                <i class="fas fa-file-pdf"></i>
                {{ $t('Export PDF') }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Report Results -->
    <div v-if="reportData" class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{ $t('Purchase Summary Report') }}
        </h3>
        <div class="card-tools">
          <span class="badge badge-info">{{ $t('Total Purchases') }}: {{ reportData.summary.total_purchases }}</span>
          <span class="badge badge-success ml-2">{{ $t('Net Purchases') }}: {{ reportData.summary.net_purchases }}</span>
        </div>
      </div>
      <div class="card-body">
        <!-- Summary Cards -->
        <div class="row mb-4">
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-primary">
                <i class="fas fa-shopping-cart"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Purchases') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_purchases }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-success">
                <i class="fas fa-dollar-sign"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Amount') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_amount }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-info">
                <i class="fas fa-check-circle"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Paid') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_paid }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-warning">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Due') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_due }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Summary Cards -->
        <div class="row mb-4">
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-danger">
                <i class="fas fa-undo"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Returns') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_returns }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-secondary">
                <i class="fas fa-percentage"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Discount') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_discount }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-dark">
                <i class="fas fa-receipt"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Tax') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_tax }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-success">
                <i class="fas fa-chart-line"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Net Purchases') }}</span>
                <span class="info-box-number">{{ reportData.summary.net_purchases }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Supplier Summary Table -->
        <div class="row mb-4">
          <div class="col-12">
            <h5>{{ $t('Supplier Summary') }}</h5>
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>{{ $t('Supplier Name') }}</th>
                    <th>{{ $t('Phone') }}</th>
                    <th class="text-center">{{ $t('Purchase Count') }}</th>
                    <th class="text-right">{{ $t('Total Amount') }}</th>
                    <th class="text-right">{{ $t('Paid Amount') }}</th>
                    <th class="text-right">{{ $t('Due Amount') }}</th>
                    <th class="text-right">{{ $t('Discount') }}</th>
                    <th class="text-right">{{ $t('Tax') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="reportData.supplier_summary.length === 0">
                    <td colspan="8" class="text-center text-muted">
                      {{ $t('No supplier data available') }}
                    </td>
                  </tr>
                  <tr v-else v-for="supplier in reportData.supplier_summary" :key="supplier.supplier_id">
                    <td>{{ supplier.supplier_name }}</td>
                    <td>{{ supplier.supplier_phone || '-' }}</td>
                    <td class="text-center">{{ supplier.purchase_count }}</td>
                    <td class="text-right">{{ numberFormat(supplier.total_amount) }}</td>
                    <td class="text-right">{{ numberFormat(supplier.paid_amount) }}</td>
                    <td class="text-right">{{ numberFormat(supplier.due_amount) }}</td>
                    <td class="text-right">{{ numberFormat(supplier.discount_amount) }}</td>
                    <td class="text-right">{{ numberFormat(supplier.tax_amount) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Monthly Summary Table -->
        <div class="row mb-4">
          <div class="col-12">
            <h5>{{ $t('Monthly Summary') }}</h5>
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>{{ $t('Month') }}</th>
                    <th class="text-center">{{ $t('Purchase Count') }}</th>
                    <th class="text-right">{{ $t('Total Amount') }}</th>
                    <th class="text-right">{{ $t('Paid Amount') }}</th>
                    <th class="text-right">{{ $t('Due Amount') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="reportData.monthly_summary.length === 0">
                    <td colspan="5" class="text-center text-muted">
                      {{ $t('No monthly data available') }}
                    </td>
                  </tr>
                  <tr v-else v-for="month in reportData.monthly_summary" :key="month.month">
                    <td>{{ month.month_name }}</td>
                    <td class="text-center">{{ month.purchase_count }}</td>
                    <td class="text-right">{{ numberFormat(month.total_amount) }}</td>
                    <td class="text-right">{{ numberFormat(month.paid_amount) }}</td>
                    <td class="text-right">{{ numberFormat(month.due_amount) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Returns Summary -->
        <div v-if="reportData.return_purchases && reportData.return_purchases.length > 0" class="row mb-4">
          <div class="col-12">
            <h5>{{ $t('Purchase Returns Summary') }}</h5>
            <div class="table-responsive">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>{{ $t('Purchase #') }}</th>
                    <th>{{ $t('Supplier') }}</th>
                    <th>{{ $t('Purchase Date') }}</th>
                    <th class="text-right">{{ $t('Original Amount') }}</th>
                    <th class="text-right">{{ $t('Return Amount') }}</th>
                    <th class="text-center">{{ $t('Return Count') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="returnData in reportData.return_purchases" :key="returnData.purchase.id">
                    <td>{{ returnData.purchase.purchase_no }}</td>
                    <td>{{ returnData.purchase.supplier?.name || '-' }}</td>
                    <td>{{ formatDate(returnData.purchase.purchase_date) }}</td>
                    <td class="text-right">{{ numberFormat(returnData.purchase.sub_total) }}</td>
                    <td class="text-right text-danger">{{ numberFormat(returnData.return_amount) }}</td>
                    <td class="text-center">{{ returnData.returns.length }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Overlay -->
    <div v-if="loading" class="overlay">
      <i class="fas fa-2x fa-sync-alt fa-spin"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'PurchaseSummary',
  
  data() {
    return {
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      reportData: null,
      errors: {},
      
      // Breadcrumbs
      breadcrumbs: [
        {
          name: 'Dashboard',
          url: '/'
        },
        {
          name: 'Reports',
          url: ''
        }
      ],
      breadcrumbsCurrent: 'Purchase Summary',
      
      // Filters
      filters: {
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null,
      },
      
      // Options
      fiscalYears: [],
      accountingPeriods: [],
    };
  },
  
  computed: {
    ...mapGetters({
      appInfo: "appInfo",
    }),
  },
  
  mounted() {
    this.loadInitialData();
  },
  
  methods: {
    async loadInitialData() {
      await Promise.all([
        this.loadFiscalYears(),
      ]);
    },

    async loadFiscalYears(search = '') {
      this.loadingFiscalYears = true;
      try {
        const response = await axios.get('/api/fiscal-years/search', {
          params: { search, perPage: 100 }
        });
        this.fiscalYears = response.data.data || response.data;
      } catch (error) {
        this.$toast.error('', this.$t('Failed to load fiscal years'));
      } finally {
        this.loadingFiscalYears = false;
      }
    },

    async loadAccountingPeriods(search = '') {
      this.loadingAccountingPeriods = true;
      try {
        const response = await axios.get('/api/accounting-periods/search', {
          params: { search, perPage: 100 }
        });
        this.accountingPeriods = response.data.data || response.data;
      } catch (error) {
        this.$toast.error('', this.$t('Failed to load accounting periods'));
      } finally {
        this.loadingAccountingPeriods = false;
      }
    },

    async searchFiscalYears(search) {
      await this.loadFiscalYears(search);
    },

    async searchAccountingPeriods(search) {
      await this.loadAccountingPeriods(search);
    },

    async generateReport() {
      this.loading = true;
      this.errors = {};
      this.reportData = null;

      try {
        const params = {};

        if (this.filters.fiscalYear) {
          params.fiscal_year_id = this.filters.fiscalYear;
        } else if (this.filters.accountingPeriod) {
          params.accounting_period_id = this.filters.accountingPeriod;
        } else if (this.filters.fromDate && this.filters.toDate) {
          params.from_date = this.filters.fromDate;
          params.to_date = this.filters.toDate;
        }

        const response = await axios.get('/api/reports/purchase-summary', { params });
        
        if (response.data.success) {
          this.reportData = response.data.data;
          this.$toast.success('', this.$t('Report generated successfully'));
        } else {
          this.$toast.error('', response.data.message || this.$t('Failed to generate report'));
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        this.$toast.error('', error.response?.data?.message || this.$t('Failed to generate report'));
      } finally {
        this.loading = false;
      }
    },

    numberFormat(value) {
      return parseFloat(value).toFixed(2);
    },

    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    },

    resetFilters() {
      this.filters = {
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null,
      };
      this.reportData = null;
      this.errors = {};
    },

    exportToPDF() {
      // TODO: Implement PDF export functionality
      this.$toast.info('', this.$t('PDF export functionality will be implemented soon'));
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.info-box {
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
}

.info-box-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 0.375rem;
  margin-right: 1rem;
}

.info-box-content {
  flex: 1;
}

.info-box-text {
  display: block;
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.info-box-number {
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: #495057;
}
</style>
