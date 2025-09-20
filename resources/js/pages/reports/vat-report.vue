<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <!-- Filters Card -->
    <div class="row no-print mb-3">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title mb-0">
              <button
                class="btn btn-link p-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#filtersCollapse"
                aria-expanded="true"
                aria-controls="filtersCollapse"
              >
                <i class="fas fa-filter"></i> {{ $t("Filters") }}
              </button>
            </h5>
          </div>
          <div class="collapse show" id="filtersCollapse">
            <div class="card-body">
      <div class="row">
                <!-- Fiscal Year Filter -->
        <div class="col-md-3">
                  <div class="form-group">
                    <label for="fiscal_year_id">{{ $t("Fiscal Year") }}</label>
                    <v-select
                      v-model="filters.fiscalYearId"
                      :options="fiscalYears"
                      :reduce="year => year.id"
                      label="name"
                      :placeholder="$t('Select Fiscal Year')"
                      :searchable="true"
                      :clearable="true"
                      :loading="loadingFiscalYears"
                      @search="searchFiscalYears"
                      @input="onFiscalYearChange"
          />
        </div>
        </div>

                <!-- Accounting Period Filter -->
        <div class="col-md-3">
                  <div class="form-group">
                    <label for="accounting_period_id">{{ $t("Accounting Period") }}</label>
          <v-select
                      v-model="filters.accountingPeriodId"
                      :options="accountingPeriods"
                      :reduce="period => period.id"
                      label="name"
                      :placeholder="$t('Select Accounting Period')"
                      :searchable="true"
            :clearable="true"
                      :loading="loadingAccountingPeriods"
                      :disabled="!filters.fiscalYearId"
                      @search="searchAccountingPeriods"
                      @input="onAccountingPeriodChange"
                    />
      </div>
    </div>

                <!-- Date Range Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="from_date">{{ $t("From Date") }}</label>
                    <input
                      type="date"
                      v-model="filters.fromDate"
                      class="form-control"
                      :placeholder="$t('From Date')"
                      :disabled="filters.fiscalYearId || filters.accountingPeriodId"
                    />
      </div>
    </div>

                <div class="col-md-3">
                  <div class="form-group">
                    <label for="to_date">{{ $t("To Date") }}</label>
                    <input
                      type="date"
                      v-model="filters.toDate"
                      class="form-control"
                      :placeholder="$t('To Date')"
                      :disabled="filters.fiscalYearId || filters.accountingPeriodId"
                    />
            </div>
          </div>
        </div>

              <div class="row">
                <div class="col-12">
                  <button
                    @click="generateReport"
                    class="btn btn-primary"
                    :disabled="loading"
                  >
                    <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                    <i v-else class="fas fa-search"></i>
                    {{ $t('Generate Report') }}
                  </button>
                  <button type="button" class="btn btn-secondary ml-2" @click="clearFilters">
                    <i class="fas fa-times"></i>
                    {{ $t('Clear') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Report Data -->
    <div v-if="reportData" class="card">
        <div class="card-header">
        <h3 class="card-title">{{ $t('VAT Report') }}</h3>
        <div class="card-tools">
          <button type="button" class="btn btn-tool" @click="printReport">
            <i class="fas fa-print"></i>
          </button>
          <a 
            v-if="reportData && reportData.summary" 
            :href="exportExcelUrl" 
            v-tooltip="$t('Export to Excel')" 
            class="btn btn-tool"
          >
            <i class="fas fa-file-excel"></i>
          </a>
          <a 
            v-if="reportData && reportData.summary" 
            :href="exportPdfUrl" 
            v-tooltip="$t('Export to PDF')" 
            class="btn btn-tool"
          >
            <i class="fas fa-file-pdf"></i>
          </a>
          <a 
            v-if="reportData && reportData.summary" 
            :href="printTemplateUrl" 
            target="_blank" 
            v-tooltip="$t('Print with Template')" 
            class="btn btn-tool"
          >
            <i class="fas fa-print"></i>
          </a>
        </div>
        </div>
        <div class="card-body">
        <!-- VAT Summary - Sales -->
        <div v-if="reportData && reportData.summary && Array.isArray(reportData.summary) && reportData.summary.length > 0" class="mb-4">
          <h5>{{ $t('Sales VAT Summary') }}</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>{{ $t('VAT Rate') }}</th>
                  <th>{{ $t('Rate %') }}</th>
                  <th>{{ $t('Total Sales') }}</th>
                  <th>{{ $t('Sales VAT') }}</th>
                  <th>{{ $t('Journal VAT') }}</th>
                  <th>{{ $t('Total Sales VAT') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="summary in reportData.summary" :key="'sales-' + summary.vat_rate_id">
                  <td>
                    <strong>{{ summary.vat_rate_name }}</strong><br>
                    <small class="text-muted">{{ summary.vat_rate_code }}</small>
                  </td>
                  <td class="text-center">{{ summary.vat_rate_percentage }}%</td>
                  <td class="text-right">{{ calculateAmountBeforeVat(summary.sales_vat, summary.vat_rate_percentage) | withAbsoluteCurrency }}</td>
                  <td class="text-right">{{ summary.sales_vat | withAbsoluteCurrency }}</td>
                  <td class="text-right">{{ summary.journal_vat | withAbsoluteCurrency }}</td>
                  <td class="text-right">
                    <span class="text-success">
                      {{ (summary.sales_vat + summary.journal_vat) | withAbsoluteCurrency }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="table-success">
                  <th colspan="2">{{ $t('Total') }}</th>
                  <th class="text-right">{{ totalSalesAmount | withAbsoluteCurrency }}</th>
                  <th class="text-right">{{ totalSalesVat | withAbsoluteCurrency }}</th>
                  <th class="text-right">{{ totalJournalVat | withAbsoluteCurrency }}</th>
                  <th class="text-right">
                    <span class="text-success">
                      {{ (totalSalesVat + totalJournalVat) | withAbsoluteCurrency }}
                    </span>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- VAT Summary - Purchase -->
        <div v-if="reportData && reportData.summary && Array.isArray(reportData.summary) && reportData.summary.length > 0" class="mb-4">
          <h5>{{ $t('Purchase VAT Summary') }}</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>{{ $t('VAT Rate') }}</th>
                  <th>{{ $t('Rate %') }}</th>
                  <th>{{ $t('Total Purchases') }}</th>
                  <th>{{ $t('Purchase VAT') }}</th>
                  <th>{{ $t('Journal VAT') }}</th>
                  <th>{{ $t('Total Purchase VAT') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="summary in reportData.summary" :key="'purchase-' + summary.vat_rate_id">
                  <td>
                    <strong>{{ summary.vat_rate_name }}</strong><br>
                    <small class="text-muted">{{ summary.vat_rate_code }}</small>
                  </td>
                  <td class="text-center">{{ summary.vat_rate_percentage }}%</td>
                  <td class="text-right">{{ calculateAmountBeforeVat(summary.purchase_vat, summary.vat_rate_percentage) | withAbsoluteCurrency }}</td>
                  <td class="text-right">{{ summary.purchase_vat | withAbsoluteCurrency }}</td>
                  <td class="text-right">{{ summary.journal_vat | withAbsoluteCurrency }}</td>
                  <td class="text-right">
                    <span class="text-danger">
                      {{ (summary.purchase_vat + summary.journal_vat) | withAbsoluteCurrency }}
                    </span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="table-danger">
                  <th colspan="2">{{ $t('Total') }}</th>
                  <th class="text-right">{{ totalPurchaseAmount | withAbsoluteCurrency }}</th>
                  <th class="text-right">{{ totalPurchaseVat | withAbsoluteCurrency }}</th>
                  <th class="text-right">{{ totalJournalVat | withAbsoluteCurrency }}</th>
                  <th class="text-right">
                    <span class="text-danger">
                      {{ (totalPurchaseVat + totalJournalVat) | withAbsoluteCurrency }}
                    </span>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <!-- VAT Transactions -->
        <div v-if="reportData && reportData.transactions && reportData.transactions.length > 0">
          <h5>{{ $t('VAT Transactions') }}</h5>
          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>{{ $t('Date') }}</th>
                  <th>{{ $t('Reference') }}</th>
                  <th>{{ $t('Client/Supplier') }}</th>
                  <th>{{ $t('Type') }}</th>
                  <th>{{ $t('Source') }}</th>
                  <th>{{ $t('VAT Amount') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loadingTransactions">
                  <td colspan="6" class="text-center">
                    <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading transactions...') }}
                  </td>
                </tr>
                <tr v-else-if="!loadingTransactions && transactionsCount === 0">
                  <td colspan="6" class="text-center text-muted">
                    {{ $t('No transactions found for the selected criteria') }}
                  </td>
                </tr>
                <template v-else-if="!loadingTransactions">
                  <tr v-for="(transaction, index) in safeTransactions" :key="`${transaction.reference}-${transaction.date}-${transaction.type}-${index}`">
                    <td>{{ formatDate(transaction.date) }}</td>
                    <td>{{ transaction.reference }}</td>
                    <td>{{ transaction.client_supplier }}</td>
                    <td>
                      <span :class="transaction.type === 'Sales' ? 'badge badge-success' : 'badge badge-info'">
                        {{ transaction.type }}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-secondary">{{ transaction.source }}</span>
                    </td>
                    <td class="text-right">{{ transaction.vat_amount | withAbsoluteCurrency }}</td>
                  </tr>
                </template>
              </tbody>
            </table>
                </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="d-flex justify-content-between align-items-center mt-3">
            <div class="dataTables_info">
              {{ $t('Showing') }} {{ ((currentPage - 1) * pageSize) + 1 }} 
              {{ $t('to') }} {{ Math.min(currentPage * pageSize, totalTransactions) }} 
              {{ $t('of') }} {{ totalTransactions }} {{ $t('transactions') }}
            </div>
            <nav>
              <ul class="pagination pagination-sm mb-0">
                <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                  <button class="page-link" @click="goToPage(1)" :disabled="currentPage <= 1">
                    <i class="fas fa-angle-double-left"></i>
                  </button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                  <button class="page-link" @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">
                    <i class="fas fa-angle-left"></i>
                  </button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
                  <button class="page-link" @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">
                    <i class="fas fa-angle-right"></i>
                  </button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
                  <button class="page-link" @click="goToPage(totalPages)" :disabled="currentPage >= totalPages">
                    <i class="fas fa-angle-double-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
    </div>

        <!-- No Data Message -->
        <div v-if="!reportData || (!reportData.summary && transactionsCount === 0)" class="text-center py-4">
          <i class="fas fa-info-circle fa-3x text-muted mb-3"></i>
          <h5 class="text-muted">{{ $t('No VAT data found') }}</h5>
          <p class="text-muted">{{ $t('Try adjusting your filters or date range') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VatReport",
  data() {
    return {
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      loadingTransactions: false,
      reportData: null,
      allTransactions: [], // Store all loaded transactions
      errors: {},
      
      // Breadcrumbs
      breadcrumbs: [
        {
          name: 'Dashboard',
          url: '/'
        },
        {
          name: 'Reports',
          url: '/reports'
        }
      ],
      breadcrumbsCurrent: 'VAT Report',
      
      // Filters
      filters: {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null,
      },
      
      // Options
      fiscalYears: [],
      accountingPeriods: [],
      
      // Pagination
      currentPage: 1,
      pageSize: 10,
      totalPages: 0,
      totalTransactions: 0,
    };
  },
  
  computed: {
    // Safe access to transactions with fallback
    safeTransactions() {
      return this.reportData?.transactions || [];
    },
    
    // Safe access to transactions count
    transactionsCount() {
      return this.safeTransactions.length;
    },
    
    // Calculate visible pages for pagination
    visiblePages() {
      const pages = [];
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(this.totalPages, this.currentPage + 2);
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
    
    totalSalesVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.sales_vat, 0);
    },
    
    totalPurchaseVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.purchase_vat, 0);
    },
    
    totalJournalVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.journal_vat, 0);
    },
    
    totalNetVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.net_vat, 0);
    },
    
    // Calculate total sales amount (before VAT)
    totalSalesAmount() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => {
        return sum + this.calculateAmountBeforeVat(item.sales_vat, item.vat_rate_percentage);
      }, 0);
    },
    
    // Calculate total purchase amount (before VAT)
    totalPurchaseAmount() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => {
        return sum + this.calculateAmountBeforeVat(item.purchase_vat, item.vat_rate_percentage);
      }, 0);
    },
    
    // Export URLs
    exportExcelUrl() {
      const params = new URLSearchParams();
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return `/vat-report/export?${params.toString()}`;
    },
    
    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return `/vat-report/pdf?${params.toString()}`;
    },
    
    printTemplateUrl() {
      // Create a dynamic print template URL for VAT report with current filters
      const params = new URLSearchParams();
      
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      
      return `/print/reports/vat-report?${params.toString()}`;
    },
  },
  
  mounted() {
    this.loadInitialData();
  },

  watch: {
    'filters.fiscalYearId'(newValue) {
      if (newValue) {
        this.filters.accountingPeriodId = null;
        this.loadAccountingPeriods();
      } else {
        this.accountingPeriods = [];
      }
    },
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
        const { data } = await axios.get(`/api/fiscal-years?search=${search}`);
        this.fiscalYears = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load fiscal years"));
      } finally {
        this.loadingFiscalYears = false;
      }
    },

    async searchFiscalYears(search) {
      await this.loadFiscalYears(search);
    },

    async loadAccountingPeriods(search = '') {
      if (!this.filters.fiscalYearId) return;
      
      this.loadingAccountingPeriods = true;
      try {
        const { data } = await axios.get(`/api/accounting-periods?fiscal_year_id=${this.filters.fiscalYearId}&search=${search}`);
        this.accountingPeriods = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load accounting periods"));
      } finally {
        this.loadingAccountingPeriods = false;
      }
    },

    async searchAccountingPeriods(search) {
      await this.loadAccountingPeriods(search);
    },

    onFiscalYearChange() {
      this.filters.accountingPeriodId = null;
      this.accountingPeriods = [];
      if (this.filters.fiscalYearId) {
        this.loadAccountingPeriods();
      }
    },

    onAccountingPeriodChange() {
      // Reset date filters when accounting period is selected
      if (this.filters.accountingPeriodId) {
        this.filters.fromDate = null;
        this.filters.toDate = null;
      }
    },
    
    async generateReport() {
      this.loading = true;
      this.loadingTransactions = false; // Reset this to false initially
      this.errors = {};
      this.currentPage = 1;
      
      try {
        // Load first page
        await this.loadPage(1);
        this.$toast.success('', this.$t("VAT report generated successfully"));
      } catch (error) {
        console.error('VAT Report Error:', error);
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to generate VAT report"));
      } finally {
        this.loading = false;
        this.loadingTransactions = false;
      }
    },

    async loadPage(page) {
      if (this.loadingTransactions) {
        return;
      }
      
      this.loadingTransactions = true;
      
      try {
        const params = new URLSearchParams();
        params.append('page', page);
        params.append('per_page', this.pageSize);
        
        if (this.filters.fiscalYearId) {
          params.append('fiscal_year_id', this.filters.fiscalYearId);
        }
        if (this.filters.accountingPeriodId) {
          params.append('accounting_period_id', this.filters.accountingPeriodId);
        }
        if (this.filters.fromDate) {
          params.append('from_date', this.filters.fromDate);
        }
        if (this.filters.toDate) {
          params.append('to_date', this.filters.toDate);
        }
        
        const response = await axios.post(`/api/reports/vat-report?${params.toString()}`);
        
        if (response.data && response.data.success === true) {
          const data = response.data.data;
          
          // Store summary and VAT rates info on first page
          if (page === 1) {
            this.reportData = {
              filters: data.filters,
              vat_rates: data.vat_rates,
              summary: data.summary,
              transactions: data.transactions,
            };
          } else {
            // Update transactions for subsequent pages
            if (this.reportData) {
              this.reportData.transactions = data.transactions;
            }
          }
          
          // Update pagination info
          if (data.pagination) {
            this.currentPage = data.pagination.current_page;
            this.totalPages = data.pagination.total_pages;
            this.totalTransactions = data.pagination.total_count;
          }
          
        } else if (response.data && response.data.error) {
          throw new Error(response.data.message || this.$t('Failed to load page'));
        } else {
          throw new Error(this.$t('Failed to load page'));
        }
        
      } catch (error) {
        console.error(`Page ${page} failed:`, error);
        this.$toast.error('', error.message || this.$t('Failed to load page'));
        throw error;
      } finally {
        this.loadingTransactions = false;
      }
    },
    
    async goToPage(page) {
      if (page < 1 || page > this.totalPages || page === this.currentPage) {
        return;
      }
      
      await this.loadPage(page);
    },

    clearFilters() {
      this.filters = {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null,
      };
      this.reportData = null;
      this.errors = {};
      this.accountingPeriods = [];
      this.currentPage = 1;
      this.totalPages = 0;
      this.totalTransactions = 0;
    },
    
    // Safe calculation for amount before VAT
    calculateAmountBeforeVat(vatAmount, vatRatePercentage) {
      const vatAmountNum = parseFloat(vatAmount || 0);
      const vatRate = parseFloat(vatRatePercentage || 0);
      
      // Handle edge cases
      if (vatAmountNum === 0) return 0;
      if (vatRate === 0) return vatAmountNum; // If no VAT rate, return the amount as-is
      if (isNaN(vatAmountNum) || isNaN(vatRate)) return 0;
      
      const result = vatAmountNum / (vatRate / 100);
      return isNaN(result) ? 0 : result;
    },
    
    
    
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },

    printReport() {
      window.print();
    },
  },
};
</script>

<style scoped>
.table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.badge {
  font-size: 0.75em;
}

.text-success {
  color: #28a745 !important;
}

.text-danger {
  color: #dc3545 !important;
}

@media print {
  .card-tools {
    display: none !important;
  }
  
  .btn {
    display: none !important;
  }
}
</style>