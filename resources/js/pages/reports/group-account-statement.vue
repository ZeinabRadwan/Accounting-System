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
          <!-- Chart of Accounts (Multiple Selection) -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Chart of Accounts') }} <span class="text-danger">*</span></label>
              <v-select
                v-model="filters.chartOfAccounts"
                :options="chartOfAccounts"
                :reduce="account => account.id"
                label="display_name"
                :placeholder="$t('Select Accounts')"
                :searchable="true"
                :clearable="false"
                :loading="loadingAccounts"
                multiple
                @search="searchAccounts"
                @input="onChartOfAccountsChange"
              />
              <div v-if="errors.chart_of_account_ids" class="text-danger">
                {{ errors.chart_of_account_ids[0] }}
              </div>
              <small class="form-text text-muted">
                {{ $t('Select one or more accounts to include in the report') }}
              </small>
            </div>
          </div>

          <!-- Sub Chart of Accounts (Multiple Selection) -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Sub Chart of Accounts') }}</label>
              <v-select
                v-model="filters.subChartOfAccounts"
                :options="subChartOfAccounts"
                :reduce="account => account.id"
                label="display_name"
                :placeholder="$t('Select Sub Accounts')"
                :searchable="true"
                :clearable="true"
                :loading="loadingSubAccounts"
                multiple
                @search="searchSubAccounts"
                :disabled="!filters.chartOfAccounts || filters.chartOfAccounts.length === 0"
              />
              <div v-if="errors.sub_chart_of_account_ids" class="text-danger">
                {{ errors.sub_chart_of_account_ids[0] }}
              </div>
            </div>
          </div>

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
                :disabled="loading || !filters.chartOfAccounts || filters.chartOfAccounts.length === 0"
              >
                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fas fa-search"></i>
                {{ $t('Generate Report') }}
              </button>
              <button type="button" @click="resetFilters" class="btn btn-secondary ml-2">
                <i class="fas fa-undo"></i>
                {{ $t('Reset') }}
              </button>
              <a 
                v-if="reportData && reportData.entries && reportData.entries.length > 0" 
                :href="exportExcelUrl" 
                v-tooltip="$t('Export to Excel')" 
                class="btn btn-info ml-2"
              >
                <i class="fa fa-arrow-circle-down"></i>
              </a>
              <a 
                v-if="reportData && reportData.entries && reportData.entries.length > 0" 
                :href="exportPdfUrl" 
                v-tooltip="$t('Export to PDF')" 
                class="btn btn-success ml-2"
              >
                <i class="fas fa-file-export"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Report Results -->
    <div v-if="reportData" class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{ $t('Group Account Statement') }} - {{ selectedAccountsText }}
        </h3>
        <div class="card-tools">
          <span class="badge badge-info">{{ $t('Accounts') }}: {{ reportData.chart_of_accounts.length }}</span>
          <span class="badge badge-secondary ml-2">{{ $t('Entries') }}: {{ reportData.summary.total_entries }}</span>
        </div>
      </div>
      <div class="card-body">
        <!-- Summary Section -->
        <div class="row mb-4">
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-info">
                <i class="fas fa-balance-scale"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Opening Balance') }}</span>
                <span class="info-box-number">
                  {{ reportData.summary.opening_balance | withAbsoluteCurrency }}
                  <small class="text-muted">({{ reportData.summary.opening_balance_type }})</small>
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-success">
                <i class="fas fa-arrow-up"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Period Debits') }}</span>
                <span class="info-box-number">{{ reportData.summary.period_debits | withAbsoluteCurrency }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-danger">
                <i class="fas fa-arrow-down"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Period Credits') }}</span>
                <span class="info-box-number">{{ reportData.summary.period_credits | withAbsoluteCurrency }}</span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-warning">
                <i class="fas fa-balance-scale"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Closing Balance') }}</span>
                <span class="info-box-number">
                  {{ reportData.summary.closing_balance | withAbsoluteCurrency }}
                  <small class="text-muted">({{ reportData.summary.closing_balance_type }})</small>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Selected Accounts -->
        <div class="row mb-4">
          <div class="col-12">
            <h5>{{ $t('Selected Accounts') }}</h5>
            <div class="row">
              <div 
                v-for="account in reportData.chart_of_accounts" 
                :key="account.id"
                class="col-md-4 mb-2"
              >
                <div class="card card-outline card-info">
                  <div class="card-body p-2">
                    <div class="d-flex justify-content-between">
                      <div>
                        <strong>{{ account.code }}</strong> - {{ account.name }}
                      </div>
                      <span class="badge badge-info">{{ account.type }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Entries Table -->
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>{{ $t('Date') }}</th>
                <th>{{ $t('Entry #') }}</th>
                <th>{{ $t('Reference') }}</th>
                <th>{{ $t('Description') }}</th>
                <th>{{ $t('Account Name') }}</th>
                <th class="text-right">{{ $t('Debit') }}</th>
                <th class="text-right">{{ $t('Credit') }}</th>
                <th class="text-right">{{ $t('Net Amount') }}</th>
                <th class="text-right">{{ $t('Running Balance') }}</th>
                <th class="text-center">{{ $t('Balance Type') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td colspan="10" class="text-center">
                  <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading entries...') }}
                </td>
              </tr>
              <tr v-else-if="reportData.entries.length === 0">
                <td colspan="10" class="text-center text-muted">
                  {{ $t('No entries found for the selected criteria') }}
                </td>
              </tr>
              <template v-else>
                <tr v-for="entry in reportData.entries" :key="entry.id">
                  <td>{{ formatDate(entry.entry_date) }}</td>
                  <td>{{ entry.entry_number }}</td>
                  <td>{{ entry.reference || '-' }}</td>
                  <td>{{ entry.description || '-' }}</td>
                  <td>
                    <div v-if="entry.accounts && entry.accounts.length > 0">
                      <div v-for="(account, index) in entry.accounts" :key="account.id" class="mb-1">
                        <span class="badge badge-info mr-1">{{ account.code }}</span>
                        <span class="small">{{ account.name }}</span>
                        <div v-if="index < entry.accounts.length - 1" class="border-bottom mb-1"></div>
                      </div>
                    </div>
                    <span v-else class="text-muted">-</span>
                  </td>
                  <td class="text-right">{{ entry.debit_amount | withAbsoluteCurrency }}</td>
                  <td class="text-right">{{ entry.credit_amount | withAbsoluteCurrency }}</td>
                  <td class="text-right">
                    <span :class="entry.net_amount >= 0 ? 'text-success' : 'text-danger'">
                      {{ entry.net_amount | withAbsoluteCurrency }}
                    </span>
                  </td>
                  <td class="text-right">
                    <span :class="entry.balance_type === 'Debit' ? 'text-success' : 'text-danger'">
                      {{ entry.running_balance | withAbsoluteCurrency }}
                    </span>
                  </td>
                  <td class="text-center">
                    <span 
                      class="badge"
                      :class="entry.balance_type === 'Debit' ? 'badge-success' : 'badge-danger'"
                    >
                      {{ entry.balance_type }}
                    </span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          
        </div>

        <!-- Loading More Data Indicator -->
        <div v-if="loadingMore" class="row mt-3">
          <div class="col-12 text-center">
            <div class="alert alert-info">
              <i class="fas fa-spinner fa-spin"></i> 
              {{ $t('Loading more entries...') }} ({{ reportData.entries.length }} {{ $t('loaded') }})
            </div>
          </div>
        </div>
        
        <!-- Data Summary -->
        <div v-if="reportData && reportData.entries.length > 0" class="row mt-3">
          <div class="col-12">
            <div class="dataTables_info">
              {{ $t('Total entries loaded') }}: {{ reportData.entries.length }}
              <span v-if="!hasMoreData" class="text-success">
                <i class="fas fa-check"></i> {{ $t('All data loaded') }}
              </span>
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
  name: 'GroupAccountStatement',
  
  data() {
    return {
      loading: false,
      loadingAccounts: false,
      loadingSubAccounts: false,
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
      breadcrumbsCurrent: 'Group Account Statement',
      
      // Filters
      filters: {
        chartOfAccounts: [],
        subChartOfAccounts: [],
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null,
      },
      
      // Options
      chartOfAccounts: [],
      subChartOfAccounts: [],
      fiscalYears: [],
      accountingPeriods: [],
      
      // Chunked loading
      currentChunk: 1,
      chunkSize: 30,
      hasMoreData: true,
      loadingMore: false,
      retryCount: 0,
      maxRetries: 3,
    };
  },
  
  computed: {
    ...mapGetters({
      appInfo: "appInfo",
    }),
    
    selectedAccountsText() {
      if (!this.reportData || !this.reportData.chart_of_accounts) return '';
      return this.reportData.chart_of_accounts.map(acc => `${acc.code} - ${acc.name}`).join(', ');
    },
    
    entriesCount() {
      return this.reportData && this.reportData.entries ? this.reportData.entries.length : 0;
    },
    
    // Export URLs
    exportExcelUrl() {
      const params = new URLSearchParams();
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        this.filters.chartOfAccounts.forEach(id => {
          params.append('chart_of_account_ids[]', id);
        });
      }
      if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
        this.filters.subChartOfAccounts.forEach(id => {
          params.append('sub_chart_of_account_ids[]', id);
        });
      }
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
      return `/group-account-statement/export?${params.toString()}`;
    },
    
    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        this.filters.chartOfAccounts.forEach(id => {
          params.append('chart_of_account_ids[]', id);
        });
      }
      if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
        this.filters.subChartOfAccounts.forEach(id => {
          params.append('sub_chart_of_account_ids[]', id);
        });
      }
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
      return `/group-account-statement/pdf?${params.toString()}`;
    },
  },
  
  mounted() {
    this.loadInitialData();
  },

   
  methods: {
    async loadInitialData() {
      await Promise.all([
        this.loadChartOfAccounts(),
        this.loadFiscalYears(),
      ]);
    },

    async loadChartOfAccounts(search = '') {
      this.loadingAccounts = true;
      try {
        const response = await axios.get('/api/chart-of-accounts/search', {
          params: { term: search, perPage: 100 }
        });
        // Handle paginated response
        const accounts = response.data.data || response.data;
        // Add display_name for v-select
        this.chartOfAccounts = accounts.map(account => ({
          ...account,
          display_name: `[${account.code}] ${account.name}`
        }));
      } catch (error) {
        this.$toast.error('', this.$t('Failed to load chart of accounts'));
      } finally {
        this.loadingAccounts = false;
      }
    },

    async loadFiscalYears(search = '') {
      this.loadingFiscalYears = true;
      try {
        const response = await axios.get('/api/fiscal-years/search', {
          params: { search, perPage: 100 }
        });
        // Handle paginated response
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
        // Handle paginated response
        this.accountingPeriods = response.data.data || response.data;
      } catch (error) {
        this.$toast.error('', this.$t('Failed to load accounting periods'));
      } finally {
        this.loadingAccountingPeriods = false;
      }
    },

    async searchAccounts(search) {
      await this.loadChartOfAccounts(search);
    },

    async searchFiscalYears(search) {
      await this.loadFiscalYears(search);
    },

    async searchAccountingPeriods(search) {
      await this.loadAccountingPeriods(search);
    },

    async onChartOfAccountsChange(accountIds) {
      // Don't clear sub chart of accounts when parent accounts change
      // Just load new sub accounts for the selected parent accounts
      
      if (accountIds && accountIds.length > 0) {
        // Load sub accounts for all selected parent accounts
        await this.loadSubChartOfAccounts(accountIds);
      } else {
        // Clear sub accounts and report data if no accounts selected
        this.filters.subChartOfAccounts = [];
        this.subChartOfAccounts = [];
        this.reportData = null;
      }
    },

    async loadSubChartOfAccounts(parentAccountIds, search = '') {
      this.loadingSubAccounts = true;
      try {
        // Load sub accounts for each parent account
        const subAccountPromises = parentAccountIds.map(accountId => 
          axios.get('/api/reports/sub-chart-of-accounts', {
            params: {
              parent_account_id: accountId,
              search: search
            }
          })
        );
        
        const responses = await Promise.all(subAccountPromises);
        const allSubAccounts = [];
        
        responses.forEach(response => {
          if (response.data.success) {
            allSubAccounts.push(...response.data.data);
          }
        });
        
        // Remove duplicates based on ID
        const uniqueSubAccounts = allSubAccounts.filter((account, index, self) => 
          index === self.findIndex(a => a.id === account.id)
        );
        
        // Merge with existing sub accounts instead of replacing
        const existingSubAccountIds = this.subChartOfAccounts.map(acc => acc.id);
        const newSubAccounts = uniqueSubAccounts.filter(account => 
          !existingSubAccountIds.includes(account.id)
        );
        
        this.subChartOfAccounts = [
          ...this.subChartOfAccounts,
          ...newSubAccounts.map(account => ({
            ...account,
            display_name: `[${account.code}] ${account.name}`
          }))
        ];
      } catch (error) {
        this.$toast.error('', this.$t('Failed to load sub chart of accounts'));
      } finally {
        this.loadingSubAccounts = false;
      }
    },

    async searchSubAccounts(search) {
      if (this.filters.chartOfAccounts && this.filters.chartOfAccounts.length > 0) {
        await this.loadSubChartOfAccounts(this.filters.chartOfAccounts, search);
      }
    },

    async generateReport() {
      if (!this.filters.chartOfAccounts || this.filters.chartOfAccounts.length === 0) {
        this.$toast.error('', this.$t('Please select at least one account'));
        return;
      }

      this.loading = true;
      this.errors = {};
      this.reportData = null;
      this.currentChunk = 1;
      this.hasMoreData = true;
      this.loadingMore = false;

      try {
        // Load first chunk
        await this.loadNextChunk();
        this.$toast.success('', this.$t('Report generated successfully'));
      } catch (error) {
        console.error('Generate report error:', error);
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

    // Chunked loading methods
    async loadNextChunk() {
      if (this.loadingMore) return;
      
      this.loadingMore = true;
      this.retryCount = 0;
      
      try {
        await this.loadChunkWithRetry();
      } catch (error) {
        console.error('Load next chunk error:', error);
        throw error;
      } finally {
        this.loadingMore = false;
      }
    },
    
    async loadChunkWithRetry() {
      let lastError = null;
      
      for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
        try {
          console.log(`Loading chunk ${this.currentChunk}, attempt ${attempt}`);
          
          // Determine which accounts to use for reporting
          let reportAccountIds = this.filters.chartOfAccounts;
          if (this.filters.subChartOfAccounts && this.filters.subChartOfAccounts.length > 0) {
            reportAccountIds = this.filters.subChartOfAccounts;
          }

          const params = {
            chart_of_account_ids: reportAccountIds,
            page: this.currentChunk,
            per_page: this.chunkSize,
          };

          if (this.filters.fiscalYear) {
            params.fiscal_year_id = this.filters.fiscalYear;
          } else if (this.filters.accountingPeriod) {
            params.accounting_period_id = this.filters.accountingPeriod;
          } else if (this.filters.fromDate && this.filters.toDate) {
            params.from_date = this.filters.fromDate;
            params.to_date = this.filters.toDate;
          }
          
          const response = await axios.get('/api/reports/group-account-statement', { params });
          
          if (response.data.success) {
            const data = response.data.data;
            
            // Store summary and chart of account info on first chunk
            if (this.currentChunk === 1) {
              this.reportData = {
                chart_of_accounts: data.chart_of_accounts,
                filters: data.filters,
                entries: [],
                summary: data.summary,
              };
            }
            
            // Append new entries
            if (data.entries && data.entries.length > 0) {
              this.reportData.entries = [...this.reportData.entries, ...data.entries];
            }
            
            // Check if there's more data
            const pagination = data.pagination;
            this.hasMoreData = pagination.has_more;
            
            if (this.hasMoreData) {
              this.currentChunk++;
              // Automatically load next chunk after a short delay
              setTimeout(() => {
                this.loadNextChunk();
              }, 100);
            }
            
            this.retryCount = 0;
            return;
            
          } else if (response.data.error) {
            throw new Error(response.data.message || this.$t('Failed to load chunk'));
          } else {
            throw new Error(this.$t('Failed to load chunk'));
          }
          
        } catch (error) {
          lastError = error;
          console.error(`Chunk ${this.currentChunk} attempt ${attempt} failed:`, error);
          
          if (attempt < this.maxRetries) {
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
          }
        }
      }
      
      // All retries failed
      throw new Error(`Failed to load chunk ${this.currentChunk} after ${this.maxRetries} attempts: ${lastError?.message || 'Unknown error'}`);
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
        chartOfAccounts: [],
        subChartOfAccounts: [],
        fiscalYear: null,
        accountingPeriod: null,
        fromDate: null,
        toDate: null,
      };
      this.subChartOfAccounts = [];
      this.reportData = null;
      this.errors = {};
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
