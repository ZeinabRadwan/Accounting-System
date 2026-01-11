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
          <!-- Analytical Account -->
          <div class="col-md-4">
            <div class="form-group">
              <label>{{ $t('Analytical Account') }} <span class="text-danger">*</span></label>
              <v-select v-model="filters.analyticalAccount" :options="analyticalAccounts" :reduce="account => account.id"
                label="display_name" :placeholder="$t('Select Analytical Account')" :searchable="true" :clearable="true"
                :loading="loadingAnalyticalAccounts" @search="searchAnalyticalAccounts" />
              <div v-if="errors.analytical_account_id" class="text-danger">
                {{ errors.analytical_account_id[0] }}
              </div>
            </div>
          </div>

          <!-- Date Range -->
          <div class="col-md-4">
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

          <!-- Action Buttons -->
          <div class="col-md-4">
            <div class="form-group">
              <label>&nbsp;</label>
              <div>
                <button type="submit" class="btn btn-primary" :disabled="loading || !filters.analyticalAccount">
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
          </div>

          <!-- Export Buttons -->
          <div class="col-12">
            <div class="form-group">
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
          {{ $t('Analytical Account Statement') }} -
          <span v-if="reportData.analytical_account">
            {{ reportData.analytical_account.code }} - {{ reportData.analytical_account.name }}
          </span>
        </h3>
        <div class="card-tools">
          <span v-if="reportData.analytical_account" class="badge badge-info">{{ $t('Type') }}: {{ reportData.analytical_account.type }}</span>
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
              <th>{{ $t('Chart of Account') }}</th>
              <th class="text-right">{{ $t('Debit') }}</th>
              <th class="text-right">{{ $t('Credit') }}</th>
              <th class="text-right">{{ $t('Net Amount') }}</th>
              <th class="text-right">{{ $t('Running Balance') }}</th>
              <th class="text-center">{{ $t('Balance Type') }}</th>
            </thead>
            <tbody>
              <tr v-if="loadingEntries">
                <td colspan="10" class="text-center">
                  <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading entries...') }}
                </td>
              </tr>
              <tr v-else-if="!loadingEntries && entriesCount === 0">
                <td colspan="10" class="text-center text-muted">
                  {{ $t('No entries found for the selected criteria') }}
                </td>
              </tr>
              <template v-else-if="!loadingEntries">
                <tr v-for="entry in safeAllEntries" :key="entry.id">
                  <td>{{ entry.entry_date }}</td>
                  <td>{{ entry.entry_number }}</td>
                  <td>{{ entry.reference || '-' }}</td>
                  <td>{{ entry.description || '-' }}</td>
                  <td>
                    <span v-if="entry.account_code">{{ entry.account_code }} - {{ entry.account_name }}</span>
                    <span v-else class="text-muted">-</span>
                  </td>
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
  name: "AnalyticalAccountStatement",
  data() {
    return {
      loading: false,
      loadingAnalyticalAccounts: false,
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
          name: 'Analytical Account Statement',
          url: ''
        }
      ],
      breadcrumbsCurrent: 'Analytical Account Statement',

      // Filters
      filters: {
        analyticalAccount: null,
        fromDate: null,
        toDate: null,
      },

      // Options
      analyticalAccounts: [],

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
      if (this.filters.analyticalAccount) {
        params.append('analytical_account_id', this.filters.analyticalAccount);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);
      return `/analytical-account-statement/export?${params.toString()}`;
    },

    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.filters.analyticalAccount) {
        params.append('analytical_account_id', this.filters.analyticalAccount);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      return `/print/reports/analytical-account-statement/pdf?${params.toString()}`;
    },

    printTemplateUrl() {
      const params = new URLSearchParams();
      if (this.filters.analyticalAccount) {
        params.append('analytical_account_id', this.filters.analyticalAccount);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      return `/print/reports/analytical-account-statement?${params.toString()}`;
    },

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
        this.loadAnalyticalAccounts(),
      ]);
    },

    async loadAnalyticalAccounts(search = '') {
      this.loadingAnalyticalAccounts = true;
      try {
        const response = await axios.get('/api/analytical-accounts', {
          params: {
            search: search,
            perPage: 100,
            status: 1
          }
        });
        
        // Handle response - AnalyticalAccountResource collection returns data array
        let accounts = [];
        if (response.data && Array.isArray(response.data)) {
          accounts = response.data;
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          accounts = response.data.data;
        } else if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
          accounts = response.data.data;
        }
        
        // Add display_name for v-select
        this.analyticalAccounts = accounts.map(account => ({
          ...account,
          display_name: account.display_name || `${account.code || ''} - ${account.name || ''}`
        }));
      } catch (error) {
        console.error('Error loading analytical accounts:', error);
        this.$toast.error('', this.$t('Failed to load analytical accounts'));
        this.analyticalAccounts = [];
      } finally {
        this.loadingAnalyticalAccounts = false;
      }
    },

    async searchAnalyticalAccounts(search) {
      await this.loadAnalyticalAccounts(search);
    },

    async generateReport() {
      if (!this.filters.analyticalAccount) {
        this.$toast.error('', this.$t('Please select an analytical account'));
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
            page: this.currentChunk,
            per_page: this.chunkSize,
            analytical_account_id: this.filters.analyticalAccount,
            from_date: this.filters.fromDate,
            to_date: this.filters.toDate,
          };

          const response = await axios.get('/api/reports/analytical-account-statement', { params });

          if (response.data.success) {
            const data = response.data.data;

            // Store summary and analytical account info on first chunk
            if (this.currentChunk === 1) {
              this.reportData = {
                analytical_account: data.analytical_account,
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
        analyticalAccount: null,
        fromDate: null,
        toDate: null,
      };
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
      if (this.filters.analyticalAccount) {
        params.append('analytical_account_id', this.filters.analyticalAccount);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      const pdfUrl = `/print/reports/analytical-account-statement/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    previewPDF() {
      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.filters.analyticalAccount) {
        params.append('analytical_account_id', this.filters.analyticalAccount);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }

      const pdfUrl = `/print/reports/analytical-account-statement/preview?${params.toString()}`;
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

.preview-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
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

.dataTables_info {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
}
</style>

