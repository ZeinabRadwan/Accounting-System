<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <div class="card-body position-relative">
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
            <div class="form-group d-flex align-items-center">
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
            </div>
          </div>
        </form>
              </div>
            </div>

            <!-- Top Actions -->
            <div class="row mt-2">
              <div class="col-xl-12 text-right">
                <div class="btn-group c-w-100">
                  <a
                    @click.prevent="refreshTable"
                    href="#"
                    v-tooltip="'Refresh'"
                    class="btn btn-success refresh-btn"
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                  <a
                    v-if="reportData && reportData.summary"
                    :href="exportExcelUrl"
                    v-tooltip="$t('Export to Excel')"
                    class="btn export-excel-btn"
                    title="Export to Excel"
                  >
                    <i class="fas fa-file-excel"></i>
                  </a>
                  <a
                    v-if="reportData && reportData.summary"
                    :href="exportPdfUrl"
                    v-tooltip="$t('Export to PDF')"
                    class="btn export-pdf-btn"
                    title="Export to PDF"
                  >
                    <i class="fas fa-file-pdf"></i>
                  </a>
                  <a
                    @click="printReport"
                    v-tooltip="$t('Print Table')"
                    class="btn print-btn"
                  >
                    <i class="fas fa-print"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Report Results -->
            <div v-if="reportData" class="card mt-3">
      <div class="card-header">
        <h3 class="card-title">
          {{ $t('Invoice Summary Report') }}
        </h3>
        <div class="card-tools">
          <span class="badge badge-info">{{ $t('Total Invoices') }}: {{ reportData.summary.total_invoices }}</span>
          <span class="badge badge-success ml-2">{{ $t('Net Sales') }}: {{ reportData.summary.net_sales }}</span>
        </div>
      </div>
      <div class="card-body">
        <!-- Summary Cards -->
        <div class="row mb-4">
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-primary">
                <i class="fas fa-file-invoice"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Total Invoices') }}</span>
                <span class="info-box-number">{{ reportData.summary.total_invoices }}</span>
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
                <span class="info-box-text">{{ $t('Net Sales') }}</span>
                <span class="info-box-number">{{ reportData.summary.net_sales }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Summary Table -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h5>{{ $t('Client Summary') }}</h5>
              <div class="d-flex align-items-center">
                <label class="mr-2">{{ $t('Per Page') }}:</label>
                <select v-model="clientPerPage" @change="loadClientPage(1)" class="form-control form-control-sm" style="width: 80px;">
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
            <div class="table-responsive table-custom">
              <table class="table invoice-summary-table">
                <thead>
                  <th>{{ $t('Client Name') }}</th>
                  <th>{{ $t('Phone') }}</th>
                  <th class="text-center">{{ $t('Invoice Count') }}</th>
                  <th class="text-right">{{ $t('Total Amount') }}</th>
                  <th class="text-right">{{ $t('Paid Amount') }}</th>
                  <th class="text-right">{{ $t('Due Amount') }}</th>
                  <th class="text-right">{{ $t('Discount') }}</th>
                  <th class="text-right">{{ $t('Tax') }}</th>
                </thead>
                <tbody>
                  <tr v-if="loadingClients">
                    <td colspan="8" class="text-center">
                      <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading clients...') }}
                    </td>
                  </tr>
                  <tr v-else-if="reportData.client_summary.length === 0">
                    <td colspan="8" class="text-center text-muted">
                      {{ $t('No client data available') }}
                    </td>
                  </tr>
                  <template v-else>
                    <tr v-for="client in reportData.client_summary" :key="client.client_id">
                      <td>{{ client.client_name }}</td>
                      <td>{{ client.client_phone || '-' }}</td>
                      <td class="text-center">{{ client.invoice_count }}</td>
                      <td class="text-right">{{ client.total_amount | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ client.paid_amount | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ client.due_amount | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ client.discount_amount | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ client.tax_amount | withAbsoluteCurrency }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            
            <!-- Client Pagination -->
            <div v-if="reportData.pagination" class="d-flex justify-content-between align-items-center mt-3">
              <div class="dataTables_info">
                {{ $t('Showing') }} {{ ((reportData.pagination.current_page - 1) * reportData.pagination.per_page) + 1 }} 
                {{ $t('to') }} {{ Math.min(reportData.pagination.current_page * reportData.pagination.per_page, reportData.pagination.total_clients) }} 
                {{ $t('of') }} {{ reportData.pagination.total_clients }} {{ $t('clients') }}
              </div>
              <nav>
                <ul class="pagination pagination-sm mb-0">
                  <li class="page-item" :class="{ disabled: reportData.pagination.current_page <= 1 }">
                    <button class="page-link" @click="loadClientPage(1)" :disabled="reportData.pagination.current_page <= 1">
                      <i class="fas fa-angle-double-left"></i>
                    </button>
                  </li>
                  <li class="page-item" :class="{ disabled: reportData.pagination.current_page <= 1 }">
                    <button class="page-link" @click="loadClientPage(reportData.pagination.current_page - 1)" :disabled="reportData.pagination.current_page <= 1">
                      <i class="fas fa-angle-left"></i>
                    </button>
                  </li>
                  <li class="page-item" :class="{ disabled: reportData.pagination.current_page >= reportData.pagination.total_pages }">
                    <button class="page-link" @click="loadClientPage(reportData.pagination.current_page + 1)" :disabled="reportData.pagination.current_page >= reportData.pagination.total_pages">
                      <i class="fas fa-angle-right"></i>
                    </button>
                  </li>
                  <li class="page-item" :class="{ disabled: reportData.pagination.current_page >= reportData.pagination.total_pages }">
                    <button class="page-link" @click="loadClientPage(reportData.pagination.total_pages)" :disabled="reportData.pagination.current_page >= reportData.pagination.total_pages">
                      <i class="fas fa-angle-double-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <!-- Monthly Summary Table -->
        <div class="row mb-4">
          <div class="col-12">
            <h5>{{ $t('Monthly Summary') }}</h5>
            <div class="table-responsive table-custom">
              <table class="table invoice-summary-table">
                <thead>
                  <th>{{ $t('Month') }}</th>
                  <th class="text-center">{{ $t('Invoice Count') }}</th>
                  <th class="text-right">{{ $t('Total Amount') }}</th>
                  <th class="text-right">{{ $t('Paid Amount') }}</th>
                  <th class="text-right">{{ $t('Due Amount') }}</th>
                </thead>
                <tbody>
                  <tr v-if="reportData.monthly_summary.length === 0">
                    <td colspan="5" class="text-center text-muted">
                      {{ $t('No monthly data available') }}
                    </td>
                  </tr>
                  <template v-else>
                    <tr v-for="month in reportData.monthly_summary" :key="month.month">
                      <td>{{ month.month_name }}</td>
                      <td class="text-center">{{ month.invoice_count }}</td>
                      <td class="text-right">{{ month.total_amount | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ month.paid_amount | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ month.due_amount | withAbsoluteCurrency }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Returns Summary -->
        <div v-if="reportData.return_invoices && reportData.return_invoices.length > 0" class="row mb-4">
          <div class="col-12">
            <h5>{{ $t('Invoice Returns Summary') }}</h5>
            <div class="table-responsive table-custom">
              <table class="table invoice-summary-table">
                <thead>
                  <th>{{ $t('Invoice #') }}</th>
                  <th>{{ $t('Client') }}</th>
                  <th>{{ $t('Invoice Date') }}</th>
                  <th class="text-right">{{ $t('Original Amount') }}</th>
                  <th class="text-right">{{ $t('Return Amount') }}</th>
                  <th class="text-center">{{ $t('Return Count') }}</th>
                </thead>
                <tbody>
                  <tr v-for="returnData in reportData.return_invoices" :key="returnData.invoice.id">
                    <td>{{ returnData.invoice.invoice_no }}</td>
                    <td>{{ returnData.invoice.client?.name || '-' }}</td>
                    <td>{{ formatDate(returnData.invoice.invoice_date) }}</td>
                    <td class="text-right">{{ returnData.invoice.sub_total | withAbsoluteCurrency }}</td>
                    <td class="text-right text-danger">{{ returnData.return_amount | withAbsoluteCurrency }}</td>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'InvoiceSummary',
  
  data() {
    return {
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      loadingClients: false,
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
      breadcrumbsCurrent: 'Invoice Summary',
      
      // Filters
      filters: {
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null,
      },
      
      // Pagination
      clientPerPage: 50,
      currentClientPage: 1,
      
      // Options
      fiscalYears: [],
      accountingPeriods: [],
    };
  },
  
  computed: {
    ...mapGetters({
      appInfo: "appInfo",
    }),
    
    // Export URLs
    exportExcelUrl() {
      const params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return `/invoice-summary/export?${params.toString()}`;
    },
    
    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return `/invoice-summary/pdf?${params.toString()}`;
    },

    printTemplateUrl() {
      const params = new URLSearchParams();
      if (this.filters.fiscalYear) {
        params.append('fiscal_year_id', this.filters.fiscalYear);
      }
      if (this.filters.accountingPeriod) {
        params.append('accounting_period_id', this.filters.accountingPeriod);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return `/print/reports/invoice-summary?${params.toString()}`;
    },
  },
  
  watch: {
    'filters.fiscalYear'(newValue) {
      if (newValue) {
        this.loadAccountingPeriods();
        this.filters.accountingPeriod = null; // Reset accounting period when fiscal year changes
      } else {
        this.accountingPeriods = [];
        this.filters.accountingPeriod = null;
      }
    },
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
        const params = { search, perPage: 100 };
        if (this.filters.fiscalYear) {
          params.fiscal_year_id = this.filters.fiscalYear;
        }
        
        const response = await axios.get('/api/accounting-periods/search', { params });
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
        const params = {
          page: this.currentClientPage,
          per_page: this.clientPerPage
        };

        if (this.filters.fiscalYear) {
          params.fiscal_year_id = this.filters.fiscalYear;
        } else if (this.filters.accountingPeriod) {
          params.accounting_period_id = this.filters.accountingPeriod;
        } else if (this.filters.fromDate && this.filters.toDate) {
          params.from_date = this.filters.fromDate;
          params.to_date = this.filters.toDate;
        }

        const response = await axios.get('/api/reports/invoice-summary', { params });
        
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


    async loadClientPage(page) {
      if (!this.reportData) return;
      
      this.loadingClients = true;
      this.currentClientPage = page;

      try {
        const params = {
          page: page,
          per_page: this.clientPerPage
        };

        if (this.filters.fiscalYear) {
          params.fiscal_year_id = this.filters.fiscalYear;
        } else if (this.filters.accountingPeriod) {
          params.accounting_period_id = this.filters.accountingPeriod;
        } else if (this.filters.fromDate && this.filters.toDate) {
          params.from_date = this.filters.fromDate;
          params.to_date = this.filters.toDate;
        }

        const response = await axios.get('/api/reports/invoice-summary', { params });
        
        if (response.data.success) {
          // Update only the client summary and pagination data
          this.reportData.client_summary = response.data.data.client_summary;
          this.reportData.pagination = response.data.data.pagination;
        } else {
          this.$toast.error('', response.data.message || this.$t('Failed to load client data'));
        }
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t('Failed to load client data'));
      } finally {
        this.loadingClients = false;
      }
    },
    refreshTable() {
      this.generateReport();
    },
    printReport() {
      window.print();
    },
  },
};
</script>

<style scoped>
.table-custom {
  border: none !important;
}

.invoice-summary-table {
  border-collapse: separate;
  border-spacing: 0;
}

.invoice-summary-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.invoice-summary-table thead tr {
  border: none !important;
}

.invoice-summary-table thead th:first-child {
  border-top-left-radius: 10px;
}

.invoice-summary-table thead th:last-child {
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoice-summary-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoice-summary-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-excel-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-pdf-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.print-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.btn-group.c-w-100 {
  gap: 10px;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

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
