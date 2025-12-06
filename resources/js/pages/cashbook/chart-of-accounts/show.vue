<template>
  <div class="chart-account-detail">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <div class="container-fluid">
      <!-- Header Actions -->
      <div class="page-header-actions no-print" v-if="accountData">
        <div class="d-flex justify-content-between align-items-center">
          <div class="page-title">
            <h2 class="page-title-text">{{ accountData.name }}</h2>
            <p class="page-subtitle">{{ accountData.code }} • {{ accountData.types ? accountData.types.name : 'N/A' }}</p>
          </div>
          <div class="page-actions">
            <button @click="printWindow" class="btn btn-outline-secondary btn-sm">
              <i class="fas fa-print mr-1"></i>
              {{ $t("Print") }}
            </button>
            <router-link :to="{ name: 'chart-of-accounts.tree' }" class="btn btn-primary btn-sm">
              <i class="fas fa-arrow-left mr-1"></i>
              {{ $t("Back to Tree") }}
            </router-link>
          </div>
        </div>
      </div>

    <!-- Account Overview -->
    <div class="account-overview" v-if="accountData">
      <div class="row">
        <!-- Account Information -->
        <div class="col-lg-8">
          <div class="info-card">
            <div class="info-card-header">
              <h5 class="info-card-title">
                <i class="fas fa-info-circle mr-2"></i>
                {{ $t("Account Information") }}
              </h5>
            </div>
            <div class="info-card-body">
              <div class="info-grid">
                <div class="info-item">
                  <label class="info-label">{{ $t("Account Name") }}</label>
                  <span class="info-value">{{ accountData.name }}</span>
                </div>
                <div class="info-item">
                  <label class="info-label">{{ $t("Account Code") }}</label>
                  <span class="info-value code-value">{{ accountData.code }}</span>
                </div>
                <div class="info-item" v-if="accountData.types">
                  <label class="info-label">{{ $t("Account Type") }}</label>
                  <span class="info-value type-value">{{ accountData.types.name }}</span>
                </div>
                <div class="info-item" v-if="accountData.parent">
                  <label class="info-label">{{ $t("Parent Account") }}</label>
                  <span class="info-value">{{ accountData.parent.name }}</span>
                </div>
                <div class="info-item">
                  <label class="info-label">{{ $t("Status") }}</label>
                  <span class="status-badge" :class="accountData.is_active ? 'status-active' : 'status-inactive'">
                    {{ accountData.is_active ? $t('Active') : $t('Inactive') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Balance Summary -->
        <div class="col-lg-4">
          <div class="balance-card">
            <div class="balance-card-header">
              <h5 class="balance-card-title">
                <i class="fas fa-calculator mr-2"></i>
                {{ $t("Account Balance") }}
              </h5>
            </div>
            <div class="balance-card-body">
              <div class="balance-summary">
                <div class="balance-row">
                  <span class="balance-label">{{ $t("Total Debits") }}</span>
                  <span class="balance-value debit-value">
                    {{ accountData.formatted_debit_amount || '0.00' }}
                  </span>
                </div>
                <div class="balance-row">
                  <span class="balance-label">{{ $t("Total Credits") }}</span>
                  <span class="balance-value credit-value">
                    {{ accountData.formatted_credit_amount || '0.00' }}
                  </span>
                </div>
                <div class="balance-divider"></div>
                <div class="balance-row balance-total">
                  <span class="balance-label">{{ $t("Current Balance") }}</span>
                  <span class="balance-value total-value" 
                        :class="accountData.balance_type === 'Debit' ? 'debit-total' : 'credit-total'">
                    {{ accountData.formatted_balance_with_type || '0.00 ' + $t('Debit') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Journal Entries Section -->
    <div class="journal-entries-section" v-if="accountData">
      <div class="section-header">
        <div class="section-title">
          <h3 class="section-title-text">
            <i class="fas fa-book mr-2"></i>
            {{ $t("Journal Entries") }}
          </h3>
          <p class="section-subtitle">{{ $t("Transaction history for this account") }}</p>
        </div>
      </div>

      <!-- Search and Filters -->
      <div class="filters-section">
        <div class="row">
          <div class="col-md-8">
            <div class="search-box">
              <i class="fas fa-search search-icon"></i>
              <input 
                v-model="query" 
                type="text" 
                class="search-input" 
                :placeholder="$t('Search by reference or description...')"
                @input="searchJournalEntries"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="per-page-selector">
              <label class="per-page-label">{{ $t("Show") }}</label>
              <select v-model="perPage" @change="updatePerPager" class="per-page-select">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span class="per-page-text">{{ $t("entries") }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Journal Entries Table -->
      <div class="table-container" v-if="journalEntries.length > 0">
        <div class="table-wrapper">
          <GeneralTable
            :columns="journalEntriesColumns"
            :rows="journalEntriesRows"
            :loading="loading"
            wrapper-class=""
          >
            <template #cell-date="{ value }">
              <span class="date-text">{{ value | moment("MMM DD, YYYY") }}</span>
            </template>
            <template #cell-reference="{ value }">
              <span class="reference-badge">{{ value }}</span>
            </template>
            <template #cell-debit="{ row }">
              <span class="amount-value debit-amount" v-if="row._raw.debit_amount > 0">
                {{ row._raw.formatted_debit_amount }}
              </span>
              <span class="amount-value empty-amount" v-else>-</span>
            </template>
            <template #cell-credit="{ row }">
              <span class="amount-value credit-amount" v-if="row._raw.credit_amount > 0">
                {{ row._raw.formatted_credit_amount }}
              </span>
              <span class="amount-value empty-amount" v-else>-</span>
            </template>
            <template #cell-balance="{ row }">
              <span class="balance-badge" 
                    :class="row._raw.balance_type === 'Debit' ? 'balance-debit' : 'balance-credit'">
                {{ row._raw.formatted_balance_with_type || '0.00 ' + $t('Debit') }}
              </span>
            </template>
            <template #cell-status="{ row }">
              <span class="status-badge" 
                    :class="row._raw.status === 'posted' ? 'status-posted' : 'status-draft'">
                {{ row._raw.formatted_status }}
              </span>
            </template>
          </GeneralTable>
        </div>
      </div>

      <!-- No Journal Entries Message -->
      <div v-else class="empty-state">
        <div class="empty-state-content">
          <div class="empty-state-icon">
            <i class="fas fa-book-open"></i>
          </div>
          <h4 class="empty-state-title">{{ $t("No Journal Entries") }}</h4>
          <p class="empty-state-text">{{ $t("This account doesn't have any journal entries yet.") }}</p>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="pagination && pagination.last_page > 1" class="pagination-container">
        <pagination 
          :pagination="pagination" 
          :offset="5"
          @paginate="paginate" 
        />
      </div>
    </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">{{ $t("Loading...") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import moment from "moment";
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Chart of Account Details") };
  },
  components: {
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: "Chart of Account Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Chart of Accounts",
        url: "chart-of-accounts.tree",
      },
      {
        name: "Account Details",
        url: "",
      },
    ],
    query: "",
    accountData: null,
    journalEntries: [],
    perPage: 10,
    totalCount: 0,
    loading: false,
  }),

  // Map Getters
  computed: {
    ...mapGetters("operations", ["pagination"]),

    // Journal entries columns
    journalEntriesColumns() {
      return [
        { key: "date", label: this.$t("Date"), align: "text-left" },
        { key: "reference", label: this.$t("Reference"), align: "text-left" },
        { key: "description", label: this.$t("Description"), align: "text-left" },
        { key: "debit", label: this.$t("Debit"), align: "text-right" },
        { key: "credit", label: this.$t("Credit"), align: "text-right" },
        { key: "balance", label: this.$t("Balance"), align: "text-right" },
        { key: "status", label: this.$t("Status"), align: "text-center" },
      ];
    },

    // Journal entries rows
    journalEntriesRows() {
      if (!this.journalEntries || this.journalEntries.length === 0) return [];
      return this.journalEntries.map((entry) => ({
        date: entry.entry_date,
        reference: entry.reference,
        description: entry.description,
        debit: entry,
        credit: entry,
        balance: entry,
        status: entry,
        _raw: entry,
      }));
    },
  },
  
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        this.getJournalEntries();
      } else {
        this.searchJournalEntries();
      }
    },
  },

  created() {
    this.getAccount();
    this.getJournalEntries();
  },
  
  methods: {
    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getJournalEntries() : this.searchJournalEntries();
    },

    // get the chart of account
    async getAccount() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          `/api/chart-of-accounts/${this.$route.params.slug}`
        );
        this.accountData = data.data;
      } catch (error) {
        console.error('Error loading account:', error);
        this.$toastr.error(this.$t("Error loading account details"));
      } finally {
        this.loading = false;
      }
    },

    // get journal entries for this account
    async getJournalEntries() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          `/api/chart-of-accounts/${this.$route.params.slug}/journal-entries`,
          {
            params: {
              per_page: this.perPage,
              page: this.pagination?.current_page || 1
          }
        });
        this.journalEntries = data.data || [];
        this.totalCount = data.total || 0;
      } catch (error) {
        console.error('Error loading journal entries:', error);
        this.$toastr.error(this.$t("Error loading journal entries"));
      } finally {
        this.loading = false;
      }
    },

    // search journal entries
    async searchJournalEntries() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          `/api/chart-of-accounts/${this.$route.params.slug}/journal-entries`,
          {
            params: {
              search: this.query,
              per_page: this.perPage,
              page: this.pagination?.current_page || 1
            }
          }
        );
        this.journalEntries = data.data || [];
        this.totalCount = data.total || 0;
      } catch (error) {
        console.error('Error searching journal entries:', error);
        this.$toastr.error(this.$t("Error searching journal entries"));
      } finally {
        this.loading = false;
      }
    },

    // pagination
    paginate(page) {
      this.pagination.current_page = page;
      this.query === "" ? this.getJournalEntries() : this.searchJournalEntries();
    },

    // print window
    printWindow() {
      window.print();
    },
  },
};
</script>

<style scoped>
/* Main Container */
.chart-account-detail {
  background: #f8f9fa;
  min-height: 100vh;
  padding: 0;
}

/* Page Header */
.page-header-actions {
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 1.5rem;
  margin: 0 0 2rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-title-text {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  line-height: 1.2;
}

.page-subtitle {
  color: #6c757d;
  font-size: 0.95rem;
  margin: 0.25rem 0 0 0;
  font-weight: 400;
}

.page-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

/* Account Overview */
.account-overview {
  margin-bottom: 2rem;
}

/* Info Card */
.info-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid #e9ecef;
  overflow: hidden;
}

.info-card-header {
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 1.5rem;
}

.info-card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #495057;
  margin: 0;
  display: flex;
  align-items: center;
}

.info-card-body {
  padding: 1.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
}

.code-value {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background: #f8f9fa;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.type-value {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  width: fit-content;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  width: fit-content;
}

.status-active {
  background: #d4edda;
  color: #155724;
}

.status-inactive {
  background: #f8d7da;
  color: #721c24;
}

/* Balance Card */
.balance-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid #e9ecef;
  overflow: hidden;
  height: fit-content;
}

.balance-card-header {
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 1.5rem;
}

.balance-card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #495057;
  margin: 0;
  display: flex;
  align-items: center;
}

.balance-card-body {
  padding: 1.5rem;
}

.balance-summary {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.balance-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
}

.balance-row:not(:last-child) {
  border-bottom: 1px solid #f1f3f4;
}

.balance-total {
  background: #f8f9fa;
  margin: 0 -1.5rem;
  padding: 1rem 1.5rem;
  border-top: 2px solid #e9ecef;
  font-weight: 600;
}

.balance-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6c757d;
}

.balance-value {
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.debit-value {
  color: #28a745;
}

.credit-value {
  color: #dc3545;
}

.debit-total {
  color: #28a745;
  font-size: 1.1rem;
}

.credit-total {
  color: #dc3545;
  font-size: 1.1rem;
}

.balance-divider {
  height: 1px;
  background: #e9ecef;
  margin: 0.5rem 0;
}

/* Journal Entries Section */
.journal-entries-section {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  border: 1px solid #e9ecef;
  overflow: hidden;
}

.section-header {
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1.5rem;
}

.section-title-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #495057;
  margin: 0;
  display: flex;
  align-items: center;
}

.section-subtitle {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
}

/* Filters Section */
.filters-section {
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
  background: #fff;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1rem;
  color: #6c757d;
  font-size: 0.875rem;
  z-index: 2;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
}

.per-page-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
}

.per-page-label {
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
}

.per-page-select {
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 0.875rem;
  background: #fff;
}

.per-page-text {
  font-size: 0.875rem;
  color: #6c757d;
}

/* Table Container */
.table-container {
  overflow-x: auto;
}

.table-wrapper {
  min-width: 100%;
}

.journal-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.journal-table thead {
  background: #f8f9fa;
}

.journal-table th {
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #e9ecef;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.journal-table td {
  padding: 1rem;
  border-bottom: 1px solid #f1f3f4;
  vertical-align: middle;
}

.journal-row:hover {
  background: #f8f9fa;
}

/* Table Columns */
.date-col { width: 120px; }
.reference-col { width: 180px; }
.description-col { min-width: 250px; }
.amount-col { width: 130px; text-align: right; }
.balance-col { width: 180px; text-align: center; }
.status-col { width: 120px; text-align: center; }

/* Cell Content */
.date-text {
  font-size: 0.875rem;
  color: #495057;
  font-weight: 500;
}

.reference-badge {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.description-text {
  color: #495057;
  font-size: 0.9rem;
  line-height: 1.4;
}

.amount-value {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-weight: 600;
  font-size: 0.9rem;
}

.debit-amount {
  color: #28a745;
}

.credit-amount {
  color: #dc3545;
}

.empty-amount {
  color: #6c757d;
  font-weight: 400;
}

.balance-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.balance-debit {
  background: #d4edda;
  color: #155724;
}

.balance-credit {
  background: #f8d7da;
  color: #721c24;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-posted {
  background: #d4edda;
  color: #155724;
}

.status-draft {
  background: #fff3cd;
  color: #856404;
}

/* Empty State */
.empty-state {
  padding: 4rem 2rem;
  text-align: center;
}

.empty-state-content {
  max-width: 400px;
  margin: 0 auto;
}

.empty-state-icon {
  font-size: 3rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
}

.empty-state-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.75rem;
}

.empty-state-text {
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

/* Pagination */
.pagination-container {
  padding: 1.5rem;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
}

/* Loading State */
.loading {
  text-align: center;
  padding: 3rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-header-actions {
    padding: 1rem;
    margin: 0 0 1.5rem 0;
  }
  
  .page-title-text {
    font-size: 1.5rem;
  }
  
  .page-actions {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
    margin-top: 1rem;
  }
  
  .d-flex {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .filters-section .row {
    flex-direction: column;
    gap: 1rem;
  }
  
  .per-page-selector {
    justify-content: flex-start;
  }
  
  .journal-table {
    font-size: 0.8rem;
  }
  
  .journal-table th,
  .journal-table td {
    padding: 0.75rem 0.5rem;
  }
  
  .date-col { width: 100px; }
  .reference-col { width: 150px; }
  .description-col { min-width: 180px; }
  .amount-col { width: 110px; }
  .balance-col { width: 150px; }
  .status-col { width: 100px; }
}

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .chart-account-detail {
    background: #fff !important;
  }
  
  .info-card,
  .balance-card,
  .journal-entries-section {
    box-shadow: none !important;
    border: 1px solid #000 !important;
  }
  
  .journal-table {
    font-size: 0.8rem;
  }
  
  .journal-table th {
    background: #f0f0f0 !important;
  }
}
</style>
