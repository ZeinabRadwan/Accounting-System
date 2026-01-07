<template>
  <div>
    <!-- Filters Card -->
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
          <!-- Chart of Account -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Chart of Account') }} <span class="text-danger">*</span></label>
              <v-select v-model="filters.chartOfAccount" :options="chartOfAccounts" :reduce="account => account.id"
                label="display_name" :placeholder="$t('Select Account')" :searchable="true" :clearable="false"
                :loading="loadingAccounts" @search="searchAccounts" @input="onChartOfAccountChange" />
              <div v-if="errors.chart_of_account_id" class="text-danger">
                {{ errors.chart_of_account_id[0] }}
              </div>
            </div>
          </div>

          <!-- Sub Chart of Account -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Sub Chart of Account') }}</label>
              <v-select v-model="filters.subChartOfAccount" :options="subChartOfAccounts"
                :reduce="account => account.id" label="display_name" :placeholder="$t('Select Sub Account')"
                :searchable="true" :clearable="true" :loading="loadingSubAccounts" @search="searchSubAccounts"
                :disabled="!filters.chartOfAccount" />
              <div v-if="errors.sub_chart_of_account_id" class="text-danger">
                {{ errors.sub_chart_of_account_id[0] }}
              </div>
            </div>
          </div>

          <!-- Date Range -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Date Range') }} <span class="text-danger">*</span></label>
              <div class="input-group">
                <input type="date" v-model="filters.fromDate" class="form-control" :placeholder="$t('From Date')" required />
                <div class="input-group-append">
                  <span class="input-group-text">{{ $t('to') }}</span>
                </div>
                <input type="date" v-model="filters.toDate" class="form-control" :placeholder="$t('To Date')" required />
              </div>
            </div>
          </div>

          <!-- Cost Center -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Cost Center') }}</label>
              <v-select v-model="filters.costCenter" :options="costCenters" :reduce="center => center.id"
                label="display_name" :placeholder="$t('Select Cost Center')" :searchable="true" :clearable="true"
                :loading="loadingCostCenters" @search="searchCostCenters" />
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="col-12">
            <div class="form-group">
              <button type="submit" class="btn btn-primary" :disabled="loading || !filters.chartOfAccount">
                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fas fa-search"></i>
                {{ $t('Generate Report') }}
              </button>
              <button type="button" @click="resetFilters" class="btn btn-secondary ml-2">
                <i class="fas fa-undo"></i>
                {{ $t('Reset') }}
              </button>
              <a v-if="reportData && entriesCount > 0" :href="exportExcelUrl" v-tooltip="$t('Export to Excel')"
                class="btn export-excel-btn ml-2">
                <i class="fa fa-arrow-circle-down"></i>
              </a>
              <button v-if="reportData && entriesCount > 0" @click="downloadPDF" v-tooltip="$t('Export to PDF')"
                class="btn export-pdf-btn ml-2">
                <i class="fas fa-file-export"></i>
              </button>
              <button v-if="reportData && entriesCount > 0" @click="previewPDF" v-tooltip="$t('Preview')"
                class="btn preview-btn ml-2">
                <i class="fas fa-eye"></i>
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
          {{ $t('Account Statement') }} -
          <span v-if="reportData.report_account && reportData.report_account.id !== reportData.chart_of_account.id">
            {{ reportData.report_account.code }} - {{ reportData.report_account.name }}
            <small class="text-muted">({{ $t('Sub Account of') }} {{ reportData.chart_of_account.code }} - {{
              reportData.chart_of_account.name }})</small>
          </span>
          <span v-else>
            {{ reportData.chart_of_account.code }} - {{ reportData.chart_of_account.name }}
          </span>
        </h3>
        <div class="card-tools">
          <span class="badge badge-info">{{ $t('Type') }}: {{ reportData.chart_of_account.type }}</span>
          <span v-if="reportData.report_account && reportData.report_account.id !== reportData.chart_of_account.id"
            class="badge badge-secondary ml-2">
            {{ $t('Sub Account Type') }}: {{ reportData.report_account.type }}
          </span>
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
                  {{ summary ? summary.opening_balance : 0 }} <span class="saudi-riyal">ê</span> {{ summary &&
                    summary.opening_balance_type ? $t(summary.opening_balance_type) : '' }}
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
                <span class="info-box-number">{{ summary ? summary.period_debits : 0 }} <span
                    class="saudi-riyal">ê</span></span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-warning">
                <i class="fas fa-arrow-down"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Period Credits') }}</span>
                <span class="info-box-number">{{ summary ? summary.period_credits : 0 }} <span
                    class="saudi-riyal">ê</span></span>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-primary">
                <i class="fas fa-calculator"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">{{ $t('Closing Balance') }}</span>
                <span class="info-box-number">
                  {{ summary ? summary.closing_balance : 0 }} <span class="saudi-riyal">ê</span> {{ summary &&
                    summary.closing_balance_type ? $t(summary.closing_balance_type) : '' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Entries Table -->
        <div class="table-responsive table-custom">
          <table class="table account-statement-table">
            <thead>
              <th>{{ $t('Date') }}</th>
              <th>{{ $t('Entry #') }}</th>
              <th>{{ $t('Reference') }}</th>
              <th>{{ $t('Description') }}</th>
              <th class="text-right">{{ $t('Debit') }}</th>
              <th class="text-right">{{ $t('Credit') }}</th>
              <th class="text-right">{{ $t('Net Amount') }}</th>
              <th class="text-right">{{ $t('Running Balance') }}</th>
              <th class="text-center">{{ $t('Balance Type') }}</th>
            </thead>
            <tbody>
              <tr v-if="loadingEntries">
                <td colspan="9" class="text-center">
                  <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading entries...') }}
                </td>
              </tr>
              <tr v-else-if="!loadingEntries && entriesCount === 0">
                <td colspan="9" class="text-center text-muted">
                  {{ $t('No entries found for the selected criteria') }}
                </td>
              </tr>
              <template v-else-if="!loadingEntries">
                <tr v-for="entry in safeAllEntries" :key="entry.id">
                  <td>{{ entry.entry_date }}</td>
                  <td>{{ entry.entry_number }}</td>
                  <td>{{ entry.reference || '-' }}</td>
                  <td>{{ entry.description || '-' }}</td>
                  <td class="text-right">{{ entry.debit_amount }} <span class="saudi-riyal">ê</span></td>
                  <td class="text-right">{{ entry.credit_amount }} <span class="saudi-riyal">ê</span></td>
                  <td class="text-right">
                    <span :class="entry.net_amount < 0 ? 'text-danger' : 'text-success'">
                      {{ entry.net_amount }} <span class="saudi-riyal">ê</span>
                    </span>
                  </td>
                  <td class="text-right">
                    <span :class="entry.balance_type === 'Debit' ? 'text-success' : 'text-danger'">
                      {{ entry.running_balance }} <span class="saudi-riyal">ê</span>
                    </span>
                  </td>
                  <td class="text-center">
                    <span class="badge" :class="entry.balance_type === 'Debit' ? 'badge-success' : 'badge-danger'">
                      {{ entry.balance_type ? $t(entry.balance_type) : '' }}
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
              {{ $t('Loading more entries...') }} ({{ entriesCount }} {{ $t('loaded') }})
            </div>
          </div>
        </div>

        <!-- Load More Button (if needed) -->

        <!-- Data Summary -->
        <div v-if="entriesCount > 0" class="row mt-3">
          <div class="col-12">
            <div class="dataTables_info">
              {{ $t('Total entries loaded') }}: {{ entriesCount }}
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
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "AccountStatement",
  data() {
    return {
      loading: false,
      loadingAccounts: false,
      loadingSubAccounts: false,
      loadingCostCenters: false,
      loadingEntries: false,
      reportData: null,
      summary: null,
      allEntries: [], // Store all loaded entries
      errors: {},

      // Breadcrumbs
      breadcrumbs: [
        {
          name: 'Dashboard',
          url: 'home'
        },
        {
          name: 'Account Statement',
          url: ''
        }
      ],
      breadcrumbsCurrent: 'Account Statement',

      // Filters
      filters: {
        chartOfAccount: null,
        subChartOfAccount: null,
        costCenter: null,
        fromDate: null,
        toDate: null,
      },

      // Options
      chartOfAccounts: [],
      subChartOfAccounts: [],
      costCenters: [],
      loadingCostCenters: false,

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
    // Safe access to allEntries with fallback
    safeAllEntries() {
      return this.allEntries || [];
    },

    // Safe access to entries count
    entriesCount() {
      return this.safeAllEntries.length;
    },

    // Export URLs
    exportExcelUrl() {
      const params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
      }
      if (this.filters.costCenter) {
        params.append('cost_center_id', this.filters.costCenter);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);
      return `/account-statement/export?${params.toString()}`;
    },

    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
      }
      if (this.filters.costCenter) {
        params.append('cost_center_id', this.filters.costCenter);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      return `/print/reports/account-statement/pdf?${params.toString()}`;
    },

    printTemplateUrl() {
      const params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
      }
      if (this.filters.costCenter) {
        params.append('cost_center_id', this.filters.costCenter);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      return `/print/reports/account-statement?${params.toString()}`;
    },

    ...mapGetters({
      appInfo: "appInfo",
    }),
  },

  mounted() {
    this.loadInitialData();
  },

    watch: {
    'filters.subChartOfAccount'(newValue, oldValue) {
      // If sub account changes and we have a parent account selected, regenerate the report
      if (this.filters.chartOfAccount && newValue !== oldValue && !this.loading) {
        this.generateReport();
      }
    },
  },

  methods: {
    async loadInitialData() {
      await Promise.all([
        this.loadChartOfAccounts(),
        this.loadCostCenters(),
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
          display_name: `${account.code} - ${account.name}`
        }));
      } catch (error) {
        this.$toast.error('', this.$t('Failed to load chart of accounts'));
      } finally {
        this.loadingAccounts = false;
      }
    },

    async loadCostCenters(search = '') {
      this.loadingCostCenters = true;
      try {
        const response = await axios.get('/api/cost-centers/get-all', {
          params: { search, limit: 100 }
        });
        // Handle response
        const centers = response.data.data || response.data;
        this.costCenters = centers.map(center => ({
          ...center,
          display_name: center.code ? `[${center.code}] ${center.name}` : center.name
        }));
      } catch (error) {
        this.$toast.error('', this.$t('Failed to load cost centers'));
      } finally {
        this.loadingCostCenters = false;
      }
    },

    async searchAccounts(search) {
      await this.loadChartOfAccounts(search);
    },

    async searchCostCenters(search) {
      await this.loadCostCenters(search);
    },

    async onChartOfAccountChange(accountId) {
      // Clear sub chart of account when parent changes
      this.filters.subChartOfAccount = null;
      this.subChartOfAccounts = [];

      if (accountId) {
        await this.loadSubChartOfAccounts(accountId);
      }
    },

    async loadSubChartOfAccounts(parentAccountId, search = '') {
      this.loadingSubAccounts = true;
      try {
        const response = await axios.get('/api/reports/sub-chart-of-accounts', {
          params: {
            parent_account_id: parentAccountId,
            search: search
          }
        });

        if (response.data.success) {
          this.subChartOfAccounts = response.data.data;
        }
      } catch (error) {
        console.error('Error loading sub chart of accounts:', error);
        this.$toast.error('', this.$t('Failed to load sub chart of accounts'));
      } finally {
        this.loadingSubAccounts = false;
      }
    },

    async searchSubAccounts(search) {
      if (search && this.filters.chartOfAccount) {
        await this.loadSubChartOfAccounts(this.filters.chartOfAccount, search);
      }
    },

    async generateReport() {
      if (!this.filters.chartOfAccount) {
        this.$toast.error('', this.$t('Please select a chart of account'));
        return;
      }

      if (!this.filters.fromDate || !this.filters.toDate) {
        this.$toast.error('', this.$t('Please select date range'));
        return;
      }

      this.loading = true;
      this.loadingEntries = true;
      this.errors = {};
      this.allEntries = []; // Initialize before calling loadNextChunk
      this.currentChunk = 1;
      this.hasMoreData = true;
      this.retryCount = 0;

      try {
        // Load first chunk
        await this.loadNextChunk();
        this.$toast.success('', this.$t('Report generated successfully'));
      } catch (error) {
        console.error('Generate report error:', error);
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        const errorMessage = error.response?.data?.message || error.message || this.$t('Failed to generate report');
        this.$toast.error('', errorMessage);
      } finally {
        this.loading = false;
        this.loadingEntries = false;
      }
    },

    async loadNextChunk() {
      if (!this.hasMoreData || this.loadingMore) {
        return;
      }

      this.loadingMore = true;
      this.retryCount = 0;

      try {
        await this.loadChunkWithRetry();
      } finally {
        this.loadingMore = false;
      }
    },

    async loadChunkWithRetry() {
      let lastError = null;

      for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
        try {
          console.log(`Loading chunk ${this.currentChunk}, attempt ${attempt}`);

          const params = {
            chart_of_account_id: this.filters.chartOfAccount,
            page: this.currentChunk,
            per_page: this.chunkSize,
          };

          if (this.filters.subChartOfAccount) {
            params.sub_chart_of_account_id = this.filters.subChartOfAccount;
          }

          if (this.filters.costCenter) {
            params.cost_center_id = this.filters.costCenter;
          }

          params.from_date = this.filters.fromDate;
          params.to_date = this.filters.toDate;

          const response = await axios.get('/api/reports/account-statement', { params });

          if (response.data.success) {
            const data = response.data.data;

            // Store summary and chart of account info on first chunk
            if (this.currentChunk === 1) {
              this.reportData = {
                chart_of_account: data.chart_of_account,
                report_account: data.report_account,
                filters: data.filters,
              };
              this.summary = data.summary;
            }

            // Add new entries to the list
            if (data.entries && data.entries.length > 0) {
              // Ensure allEntries is always an array
              if (!Array.isArray(this.allEntries)) {
                this.allEntries = [];
              }
              this.allEntries = [...this.allEntries, ...data.entries];
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

            console.log(`Chunk ${this.currentChunk - 1} loaded successfully. Total entries: ${this.allEntries ? this.allEntries.length : 0}`);
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
            // Wait before retry (exponential backoff)
            const delay = Math.pow(2, attempt) * 1000;
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
          }
        }
      }

      // All retries failed
      throw new Error(`Failed to load chunk ${this.currentChunk} after ${this.maxRetries} attempts: ${lastError?.message || 'Unknown error'}`);
    },



    resetFilters() {
      this.filters = {
        chartOfAccount: null,
        subChartOfAccount: null,
        costCenter: null,
        fromDate: null,
        toDate: null,
      };
      this.subChartOfAccounts = [];
      this.reportData = null;
      this.summary = null;
      this.allEntries = []; // Ensure it's always an array
      this.errors = {};
      this.currentChunk = 1;
      this.hasMoreData = true;
      this.retryCount = 0;
    },

    downloadPDF() {
      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
      }
      if (this.filters.costCenter) {
        params.append('cost_center_id', this.filters.costCenter);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      const pdfUrl = `/print/reports/account-statement/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    previewPDF() {
      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.subChartOfAccount) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccount);
      }
      if (this.filters.costCenter) {
        params.append('cost_center_id', this.filters.costCenter);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      const pdfUrl = `/print/reports/account-statement/preview?${params.toString()}`;
      window.location.href = pdfUrl;
    },

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
  font-weight: 700;
  color: #495057;
}

/* maintain spacing */
.table th {
  border-top: 1px solid #dee2e6;
}

.pagination {
  margin-bottom: 0;
}

.dataTables_info {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
}

.dataTables_paginate {
  text-align: right;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

@media (max-width: 1300px) {
  .info-box {
    padding: 0;
  }
}
</style>
