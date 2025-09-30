<template>
  <div>
    <div class="card">
      <div class="card-header">
        <!-- breadcrumbs Start -->
        <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
        <!-- breadcrumbs end -->
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

          <!-- Accounting Period -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Accounting Period') }}</label>
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
                />
                <div class="input-group-append">
                  <span class="input-group-text">{{ $t('to') }}</span>
                </div>
                <input
                  type="date"
                  v-model="filters.toDate"
                  class="form-control"
                  :placeholder="$t('To Date')"
                />
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="col-12">
            <div class="form-group btn-group c-w-100">
              <button type="submit" class="btn btn-primary" :disabled="loading">
                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fas fa-search"></i>
                {{ $t('Generate Report') }}
              </button>
              <button type="button" @click="resetFilters" class="btn btn-secondary ml-2">
                <i class="fas fa-undo"></i>
                {{ $t('Reset') }}
              </button>
              <a 
                v-if="balanceData" 
                :href="exportUrl" 
                v-tooltip="$t('Export to Excel')" 
                class="btn export-excel-btn ml-2"
              >
                <i class="fa fa-arrow-circle-down"></i>
              </a>
              <a 
                v-if="balanceData" 
                href="/reports/balance-sheet/pdf" 
                v-tooltip="$t('Export to PDF')" 
                class="btn export-pdf-btn ml-2"
              >
                <i class="fas fa-file-export"></i>
              </a>
              <a 
                v-if="balanceData" 
                :href="printTemplateUrl" 
                target="_blank" 
                class="btn print-btn ml-2 print-template-btn"
              >
                <i class="fas fa-print mr-1"></i>
                <!-- <span class="print-template-label">{{ $t('Print with Template') }}</span> -->
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Report Results -->
    <div v-if="balanceData" class="card">
      <div class="card-header">
        <h3 class="card-title">{{ $t('Balance Sheet') }}</h3>
      </div>
      <div class="card-body position-relative">
        <!-- Date Range Info -->
        <div class="row mb-3" v-if="balanceData && balanceData.filters">
          <div class="col-12 text-center">
            <h6 class="text-muted">{{ $t('Period') }}: {{ dateRangeDisplayName }}</h6>
          </div>
        </div>

        <div v-if="loading" class="overlay">
          <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>

        <div class="table-responsive table-custom">
          <table class="table account-statement-table">
            <thead>
              <tr class="text-center">
                <th colspan="2"><h5>{{ $t('Assets') }}</h5></th>
                <th class="red" colspan="2"><h5>{{ $t('Liabilities & Equity') }}</h5></th>
              </tr>
            </thead>
            <tbody v-if="balanceData && balanceData.accounts && balanceData.totals">
              <tr v-for="account in balanceData.accounts.assets" :key="'asset-' + account.id">
                <th>{{ account.name }} ({{ account.code }})</th>
                <th class="text-right">
                  <span v-if="account.balance_type === 'Debit'" class="text-success">
                    <span v-html="account.absolute_balance | withAbsoluteCurrency"></span>
                  </span>
                  <span v-else class="text-danger">
                    (
                      <span v-html="account.absolute_balance | withAbsoluteCurrency"></span>
                    )
                  </span>
                </th>
                <th></th>
                <th></th>
              </tr>

              <tr v-for="account in balanceData.accounts.liabilities" :key="'liability-' + account.id">
                <th></th>
                <th></th>
                <th>{{ account.name }} ({{ account.code }})</th>
                <th class="text-right">
                  <span v-if="account.balance_type === 'Credit'" class="text-danger">
                    <span v-html="account.absolute_balance | withAbsoluteCurrency"></span>
                  </span>
                  <span v-else class="text-success">
                    (
                      <span v-html="account.absolute_balance | withAbsoluteCurrency"></span>
                    )
                  </span>
                </th>
              </tr>

              <tr v-for="account in balanceData.accounts.equity" :key="'equity-' + account.id">
                <th></th>
                <th></th>
                <th>{{ account.name }} ({{ account.code }})</th>
                <th class="text-right">
                  <span v-if="account.balance_type === 'Credit'" class="text-danger">
                    <span v-html="account.absolute_balance | withAbsoluteCurrency"></span>
                  </span>
                  <span v-else class="text-success">
                    (
                      <span v-html="account.absolute_balance | withAbsoluteCurrency"></span>
                    )
                  </span>
                </th>
              </tr>

              <tr v-if="balanceData.totals.net_income !== 0">
                <th></th>
                <th></th>
                <th>{{ $t('Net Income') }}</th>
                <th class="text-right">
                  <span v-if="balanceData.totals.net_income > 0" class="text-danger">
                    <span v-html="balanceData.totals.net_income | withAbsoluteCurrency"></span>
                  </span>
                  <span v-else class="text-success">
                    (
                      <span v-html="Math.abs(balanceData.totals.net_income) | withAbsoluteCurrency"></span>
                    )
                  </span>
                </th>
              </tr>

              <tr class="text-right font-weight-bold">
                <th>{{ $t('Total Assets') }}</th>
                <th class="text-success"><span v-html="balanceData.totals.total_assets | withAbsoluteCurrency"></span></th>
                <th>{{ $t('Total Liabilities & Equity') }}</th>
                <th class="text-danger"><span v-html="balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency"></span></th>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="4" class="text-center">
                  <p class="text-muted">{{ $t('No data available. Please generate a report.') }}</p>
                </td>
              </tr>
            </tbody>
            <tfoot v-if="balanceData && balanceData.totals">
              <tr>
                <td colspan="4" class="text-center">
                  <strong>{{ $t('Balance Sheet Summary') }}</strong><br />
                  <h4 class="mt-2">
                    {{ $t('Total Assets') }}:
                    <span v-if="balanceData.totals.total_assets > balanceData.totals.total_liabilities_and_equity" class="text-success">
                      <span v-html="balanceData.totals.total_assets | withAbsoluteCurrency"></span>
                    </span>
                    <span v-else-if="balanceData.totals.total_assets < balanceData.totals.total_liabilities_and_equity" class="text-danger">
                      <span v-html="balanceData.totals.total_assets | withAbsoluteCurrency"></span>
                    </span>
                    <span v-else class="text-success">
                      <span v-html="balanceData.totals.total_assets | withAbsoluteCurrency"></span>
                    </span>
                  </h4>
                  <h4>
                    {{ $t('Total Liabilities & Equity') }}:
                    <span v-if="balanceData.totals.total_liabilities_and_equity > balanceData.totals.total_assets" class="text-danger">
                      <span v-html="balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency"></span>
                    </span>
                    <span v-else-if="balanceData.totals.total_liabilities_and_equity < balanceData.totals.total_assets" class="text-success">
                      <span v-html="balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency"></span>
                    </span>
                    <span v-else class="text-success">
                      <span v-html="balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency"></span>
                    </span>
                  </h4>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Balance Sheet") };
  },
  data: () => ({
    breadcrumbsCurrent: "Balance Sheet",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Reports",
        url: "",
      },
      {
        name: "Balance Sheet",
        url: "",
      },
    ],
    loading: false,
    loadingFiscalYears: false,
    loadingAccountingPeriods: false,
    balanceData: null,
    fiscalYears: [],
    accountingPeriods: [],
    filters: {
      fiscalYearId: null,
      accountingPeriodId: null,
      fromDate: null,
      toDate: null,
    },
  }),

  computed: {
    exportUrl() {
      // Create a dynamic export URL for balance sheet with current filters
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
      
      return `/reports/balance-sheet/export?${params.toString()}`;
    },
    
    printTemplateUrl() {
      // Create a dynamic print template URL for balance sheet with current filters
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
      
      return `/print/reports/balance-sheet?${params.toString()}`;
    },

    // Moved here to keep a single computed block
    dateRangeDisplayName() {
      if (!this.balanceData || !this.balanceData.filters) {
        return this.$t('All Data');
      }
      
      const filters = this.balanceData.filters;
      
      if (filters.fiscal_year_id) {
        // Find the fiscal year name from the loaded fiscal years
        const fiscalYear = this.fiscalYears.find(fy => fy.id === filters.fiscal_year_id);
        return fiscalYear ? fiscalYear.name : this.$t('Fiscal Year');
      } else if (filters.accounting_period_id) {
        // Find the accounting period name from the loaded periods
        const accountingPeriod = this.accountingPeriods.find(ap => ap.id === filters.accounting_period_id);
        return accountingPeriod ? accountingPeriod.name : this.$t('Accounting Period');
      } else if (filters.from_date && filters.to_date) {
        return `${filters.from_date} - ${filters.to_date}`;
      } else {
        return this.$t('All Data');
      }
    },
  },

  created() {
    try {
      this.loadFiscalYears();
    } catch (error) {
      console.error("Error in created():", error);
    }
  },

  methods: {
    // Load fiscal years
    async loadFiscalYears(search = '') {
      this.loadingFiscalYears = true;
      try {
        const response = await axios.get('/api/fiscal-years/search', {
          params: { search, perPage: 100 }
        });
        // Handle paginated response
        this.fiscalYears = response.data.data || response.data;
        console.log("Fiscal Years Response:", this.fiscalYears);
      } catch (error) {
        console.error("Failed to load fiscal years:", error);
        this.$toast.error('', this.$t("Failed to load fiscal years"));
      } finally {
        this.loadingFiscalYears = false;
      }
    },

    // Load accounting periods
    async loadAccountingPeriods(search = '') {
      if (!this.filters.fiscalYearId) {
        this.accountingPeriods = [];
        return;
      }
      
      this.loadingAccountingPeriods = true;
      try {
        const response = await axios.get(`/api/accounting-periods/by-fiscal-year/${this.filters.fiscalYearId}`, {
          params: { 
            search,
            perPage: 1000 // Increased to get all periods for the year
          }
        });
        // Handle response - the API returns data directly, not paginated
        this.accountingPeriods = response.data.data || response.data;
        console.log("Accounting Periods Response:", this.accountingPeriods);
      } catch (error) {
        console.error("Failed to load accounting periods:", error);
        this.$toast.error('', this.$t("Failed to load accounting periods"));
      } finally {
        this.loadingAccountingPeriods = false;
      }
    },

    // Search fiscal years
    async searchFiscalYears(search) {
      await this.loadFiscalYears(search);
    },

    // Search accounting periods
    async searchAccountingPeriods(search) {
      await this.loadAccountingPeriods(search);
    },

    // Handle fiscal year change
    onFiscalYearChange() {
      this.filters.accountingPeriodId = null;
      this.filters.fromDate = null;
      this.filters.toDate = null;
      
      // Load all accounting periods for the selected fiscal year
      if (this.filters.fiscalYearId) {
        this.loadAccountingPeriods();
      } else {
        this.accountingPeriods = [];
      }
    },

    // Handle accounting period change
    onAccountingPeriodChange() {
      // Clear date filters when accounting period changes
      this.filters.fromDate = null;
      this.filters.toDate = null;
      
      // If an accounting period is selected, update the date range
      if (this.filters.accountingPeriodId) {
        const selectedPeriod = this.accountingPeriods.find(
          period => period.id === this.filters.accountingPeriodId
        );
        if (selectedPeriod) {
          this.filters.fromDate = selectedPeriod.start_date;
          this.filters.toDate = selectedPeriod.end_date;
        }
      }
    },

    // Generate balance sheet report
    async generateReport() {
      this.loading = true;
      try {
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

        const { data } = await axios.get(
          window.location.origin + "/api/reports/balance-sheet?" + params.toString()
        );

        if (data.success) {
          this.balanceData = data.data;
        } else {
          this.$toast.error('', data.message || this.$t("Failed to generate balance sheet"));
        }
      } catch (error) {
        console.error("Error generating balance sheet:", error);
        this.$toast.error('', this.$t("Failed to generate balance sheet"));
      } finally {
        this.loading = false;
      }
    },

    // Reset filters
    resetFilters() {
      this.filters = {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null,
      };
      this.accountingPeriods = [];
      this.balanceData = null;
    },

    // Format date
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },

    // Printing handled via server-rendered templates (see printTemplateUrl)
  },
};
</script>

<style scoped>
.table-custom {
  border: none !important;
}

.account-statement-table {
  border-collapse: separate;
  border-spacing: 0;
}

.account-statement-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

/* Ensure print with template label has width to avoid vertical stacking in AR */
.print-template-btn {
  display: inline-flex;
  align-items: center;
}
.print-template-label {
  display: inline-block;
  min-width: 140px;
  text-align: left;
}

.account-statement-table thead tr {
  border: none !important;
}

.account-statement-table thead th:first-child {
  border-top-left-radius: 10px;
}

.account-statement-table thead th:last-child {
  border-top-right-radius: 10px;
}

[dir="rtl"] .account-statement-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .account-statement-table thead th:last-child {
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
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.info-box-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 1rem;
}

.info-box-content { flex: 1; }
.info-box-text { font-size: 0.875rem; color: #6c757d; margin-bottom: 0.25rem; }
.info-box-number { font-size: 1.25rem; font-weight: 700; color: #495057; }

.table th { border-top: 1px solid #dee2e6; }
.pagination { margin-bottom: 0; }
.dataTables_info { padding-top: 0.75rem; padding-bottom: 0.75rem; color: #6c757d; }
.dataTables_paginate { text-align: right; }

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.red { color: #dc3545; }
.font-weight-bold { font-weight: bold; }
</style>