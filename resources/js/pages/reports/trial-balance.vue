<template>
  <div>

    <!-- Filters Card -->
    <div class="row no-print mb-3">
      <div class="col-12">
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
          <div class="collapse show" id="filtersCollapse">
            <div class="card-body">
              <div class="row">
                <!-- Chart of Account Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="chart_of_account_id">{{ $t("Chart of Account") }}</label>
                    <v-select v-model="filters.chartOfAccountId" :options="chartOfAccounts"
                      :reduce="account => account.id" label="display_name" :placeholder="$t('Select Chart of Account')"
                      :searchable="true" :clearable="true" :loading="loadingChartOfAccounts"
                      @search="searchChartOfAccounts" @input="onChartOfAccountChange" />
                  </div>
                </div>

                <!-- Sub Chart of Account Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="sub_chart_of_account_id">{{ $t("Sub Account") }}</label>
                    <v-select v-model="filters.subChartOfAccountId" :options="subChartOfAccounts"
                      :reduce="account => account.id" label="display_name" :placeholder="$t('Select Sub Account')"
                      :searchable="true" :clearable="true" :loading="loadingSubChartOfAccounts"
                      :disabled="!filters.chartOfAccountId" @search="searchSubChartOfAccounts" />
                  </div>
                </div>

                <!-- Date Range Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="from_date">{{ $t("From Date") }} <span class="text-danger">*</span></label>
                    <input type="date" v-model="filters.fromDate" class="form-control" :placeholder="$t('From Date')" required />
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group">
                    <label for="to_date">{{ $t("To Date") }} <span class="text-danger">*</span></label>
                    <input type="date" v-model="filters.toDate" class="form-control" :placeholder="$t('To Date')" required />
                  </div>
                </div>
              </div>

              <div class="row">
                <!-- Cost Center Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="cost_center_id">{{ $t("Cost Center") }}</label>
                    <v-select v-model="filters.costCenterId" :options="costCenters"
                      :reduce="center => center.id" label="display_name" :placeholder="$t('Select Cost Center')"
                      :searchable="true" :clearable="true" :loading="loadingCostCenters" @search="searchCostCenters" />
                  </div>
                </div>

                <!-- Analytical Account Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="analytical_account_id">{{ $t("Analytical Account") }}</label>
                    <v-select v-model="filters.analyticalAccountId" :options="analyticalAccounts"
                      :reduce="account => account.id" label="display_name" :placeholder="$t('Select Analytical Account')"
                      :searchable="true" :clearable="true" :loading="loadingAnalyticalAccounts" @search="searchAnalyticalAccounts" />
                  </div>
                </div>

                <!-- Account Level Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="account_level">{{ $t("Account Level") }}</label>
                    <select v-model="filters.accountLevel" class="form-control">
                      <option :value="null">{{ $t('All Levels') }}</option>
                      <option v-for="level in accountLevels" :key="level" :value="level">{{ $t('Level') }} {{ level }}</option>
                    </select>
                  </div>
                </div>

                <!-- Account Display Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="account_display_filter">{{ $t("Display Options") }}</label>
                    <select v-model="filters.accountDisplayFilter" class="form-control" id="account_display_filter">
                      <option value="all">{{ $t('Show All Accounts') }}</option>
                      <option value="transactions_only">{{ $t('Show Accounts with Transactions Only') }}</option>
                      <option value="hide_zero_balance">{{ $t('Hide Zero Balance Accounts') }}</option>
                      <option value="hide_zero_opening">{{ $t('Hide Zero Opening Balances') }}</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-3" style="margin-top: 32px;">
                  <button @click="generateReport()" class="btn btn-primary mb-3" :disabled="loading">
                    <i class="fas fa-search me-1"></i>
                    {{ loading ? $t("Generating...") : $t("Generate Report") }}
                  </button>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <!-- Expand/Collapse Controls -->
                  <button v-if="reportData && reportData.trial_balance && reportData.trial_balance.length > 0"
                    @click="expandAll" class="btn btn-outline-success mb-3" :disabled="loading">
                    <i class="fas fa-expand-arrows-alt me-1"></i>
                    {{ $t("Expand All") }}
                  </button>
                  <button v-if="reportData && reportData.trial_balance && reportData.trial_balance.length > 0"
                    @click="collapseAll" class="btn btn-outline-warning mb-3" :disabled="loading">
                    <i class="fas fa-compress-arrows-alt me-1"></i>
                    {{ $t("Collapse All") }}
                  </button>
                  
                  <!-- Export Buttons -->
                  <button @click="exportToExcel" class="btn export-excel-btn mb-3" :disabled="!reportData">
                    <i class="fa fa-arrow-circle-down"></i>
                  </button>
                  <button v-if="reportData" @click="downloadPDF" v-tooltip="$t('Export to PDF')"
                    class="btn export-pdf-btn mb-3">
                    <i class="fas fa-file-export"></i>
                  </button>
                  <button v-if="reportData" @click="previewPDF" v-tooltip="$t('Preview')" class="btn preview-btn mb-3">
                    <i class="fas fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Report Card -->
    <div class="row" v-if="reportData">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t("Trial Balance") }}</h3>
            <div class="card-tools">
              <span class="badge badge-info">{{ dateRangeDisplayName }}</span>
            </div>
          </div>
          <div class="card-body">
            <!-- Report Summary -->
            <div class="row mb-4" v-if="reportData.grand_totals">
              <div class="col-md-6">
                <div class="info-box">
                  <span class="info-box-icon bg-info">
                    <i class="fas fa-calculator"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">{{ $t("Total Debits") }}</span>
                    <span class="info-box-number">
                      <CurrencyDisplay :amount="reportData.grand_totals.total_debits" />
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <span class="info-box-icon bg-warning">
                    <i class="fas fa-calculator"></i>
                  </span>
                  <div class="info-box-content">
                    <span class="info-box-text">{{ $t("Total Credits") }}</span>
                    <span class="info-box-number">
                      <CurrencyDisplay :amount="reportData.grand_totals.total_credits" />
                    </span>
                  </div>
                </div>
              </div>
            </div>


            <!-- Trial Balance Table -->
            <div class="table-responsive">
              <table class="table table-bordered table-striped table-sm trial-balance-table">
                <thead class="table-header">
                  <th class="text-center header-code">{{ $t("Code") }}</th>
                  <th class="header-account">{{ $t("Account Name") }}</th>
                  <th class="text-right header-amount">{{ $t("Opening Balance") }} {{ $t("Debit") }}</th>
                  <th class="text-right header-amount">{{ $t("Opening Balance") }} {{ $t("Credit") }}</th>
                  <th class="text-right header-amount">{{ $t("Movements") }} {{ $t("Debit") }}</th>
                  <th class="text-right header-amount">{{ $t("Movements") }} {{ $t("Credit") }}</th>
                  <th class="text-right header-amount">{{ $t("Net Movement") }} {{ $t("Debit") }}</th>
                  <th class="text-right header-amount">{{ $t("Net Movement") }} {{ $t("Credit") }}</th>
                  <th class="text-right header-amount">{{ $t("Closing Balance") }} {{ $t("Debit") }}</th>
                  <th class="text-right header-amount">{{ $t("Closing Balance") }} {{ $t("Credit") }}</th>
                </thead>
                <tbody>
                  <tr v-for="account in hierarchicalAccounts" :key="account.id" :class="getAccountRowClass(account)">
                    <td class="text-center cell-code">
                      <span class="account-code-badge">{{ account.code }}</span>
                    </td>
                    <td class="cell-account">
                      <div class="account-name-container" :style="{ paddingLeft: (account.level * 20) + 'px' }">
                        <button v-if="account.hasChildren && !account.isTotalRow" @click="toggleNode(account.id)"
                          class="expand-btn">
                          <i
                            :class="account.expanded ? 'fas fa-chevron-down' : (isRTL ? 'fas fa-chevron-left' : 'fas fa-chevron-right')"></i>
                        </button>
                        <span v-else-if="!account.isTotalRow" class="expand-spacer"></span>
                        <i v-if="account.hasChildren && !account.isTotalRow" class="account-icon"
                          :class="account.expanded ? 'fa-folder-open' : 'fa-folder'"></i>
                        <i v-else-if="!account.isTotalRow" class="account-icon fa-file"></i>
                        <i v-if="account.isTotalRow" class="account-icon fa-calculator"></i>
                        <span class="account-name" :class="{ 'total-row-name': account.isTotalRow }">
                          {{ account.name }}
                          <i v-if="isAccountCalculating(account.id)" class="fas fa-spinner fa-spin ms-2 text-warning"
                            :title="$t('Calculating balance...')"></i>
                        </span>
                      </div>
                    </td>
                    <!-- Opening Balance -->
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'opening_debit') > 0" class="amount-value debit-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'opening_debit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'opening_credit') > 0" class="amount-value credit-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'opening_credit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                    <!-- Movements -->
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'movement_debit') > 0" class="amount-value debit-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'movement_debit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'movement_credit') > 0" class="amount-value credit-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'movement_credit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                    <!-- Net Movement -->
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'net_movement_debit') > 0"
                        class="amount-value debit-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'net_movement_debit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'net_movement_credit') > 0"
                        class="amount-value credit-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'net_movement_credit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                    <!-- Closing Balance -->
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'closing_debit') > 0"
                        class="amount-value debit-amount closing-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'closing_debit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                    <td class="text-right cell-amount">
                      <span v-if="getDisplayAmount(account, 'closing_credit') > 0"
                        class="amount-value credit-amount closing-amount">
                        <CurrencyDisplay :amount="getDisplayAmount(account, 'closing_credit')" />
                      </span>
                      <span v-else class="amount-empty">-</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot v-if="reportData.grand_totals" class="table-footer">
                  <tr class="grand-total-row">
                    <td colspan="2" class="text-center grand-total-label">
                      <strong>{{ $t("Grand Total") }}</strong>
                    </td>
                    <!-- Opening Balance Totals -->
                    <td class="text-right cell-amount">
                      <strong class="amount-value debit-amount grand-total-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.opening_debit" />
                      </strong>
                    </td>
                    <td class="text-right cell-amount">
                      <strong class="amount-value credit-amount grand-total-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.opening_credit" />
                      </strong>
                    </td>
                    <!-- Movements Totals -->
                    <td class="text-right cell-amount">
                      <strong class="amount-value debit-amount grand-total-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.movement_debit" />
                      </strong>
                    </td>
                    <td class="text-right cell-amount">
                      <strong class="amount-value credit-amount grand-total-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.movement_credit" />
                      </strong>
                    </td>
                    <!-- Net Movement Totals -->
                    <td class="text-right cell-amount">
                      <strong class="amount-value debit-amount grand-total-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.net_movement_debit" />
                      </strong>
                    </td>
                    <td class="text-right cell-amount">
                      <strong class="amount-value credit-amount grand-total-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.net_movement_credit" />
                      </strong>
                    </td>
                    <!-- Closing Balance Totals -->
                    <td class="text-right cell-amount">
                      <strong class="amount-value debit-amount grand-total-amount closing-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.closing_debit" />
                      </strong>
                    </td>
                    <td class="text-right cell-amount">
                      <strong class="amount-value credit-amount grand-total-amount closing-amount">
                        <CurrencyDisplay :amount="reportData.grand_totals.closing_credit" />
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <!-- Load More Button -->
            <div v-if="hasMoreData && reportData && !autoLoadMore" class="text-center mt-3">
              <button @click="loadMoreData" class="btn btn-outline-primary" :disabled="loadingMore">
                <i v-if="loadingMore" class="fas fa-spinner fa-spin me-1"></i>
                <i v-else class="fas fa-plus me-1"></i>
                {{ loadingMore ? $t("Loading...") : $t("Load More Data") }}
              </button>
              <p class="text-muted mt-2">
                {{ $t("Loaded") }} {{ allAccounts.length }} {{ $t("accounts") }}
                <span v-if="reportData.pagination">
                  {{ $t("of") }} {{ reportData.pagination.total_count }} {{ $t("total") }}
                </span>
              </p>
            </div>

            <!-- Auto-loading indicator -->
            <div v-if="loadingMore && autoLoadMore" class="text-center mt-3">
              <div class="alert alert-info">
                <i class="fas fa-spinner fa-spin me-2"></i>
                {{ $t("Calculating account balances...") }} ({{ allAccounts.length }} {{ $t("accounts loaded") }})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">{{ $t("Loading...") }}</span>
            </div>
            <p class="mt-2">{{ $t("Generating trial balance report...") }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!loading && !reportData" class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body text-center">
            <i class="fas fa-balance-scale fa-3x text-muted mb-3"></i>
            <h5>{{ $t("No Data Available") }}</h5>
            <p class="text-muted">{{ $t("Please select filters and generate the trial balance report.") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import CurrencyDisplay from "~/components/CurrencyDisplay.vue";

export default {
  name: "TrialBalance",
  components: {
    CurrencyDisplay
  },
  data() {
    return {
      breadcrumbs: [
        {
          name: this.$t("Dashboard"),
          url: "/dashboard",
        },
        {
          name: this.$t("Reports"),
          url: "/reports",
        },
        {
          name: this.$t("Trial Balance"),
          url: "",
        },
      ],
      breadcrumbsCurrent: this.$t("Trial Balance"),
      loading: false,
      reportData: null,
      allAccounts: [], // Store all loaded accounts
      currentPage: 1,
      perPage: 30, // Increased to 30 for better performance
      hasMoreData: false,
      loadingMore: false,
      autoLoadMore: true, // Auto-load more data progressively
      expandedNodes: [], // Track expanded nodes
      calculatingAccounts: new Set(), // Track which accounts are being calculated
      filters: {
        chartOfAccountId: null,
        subChartOfAccountId: null,
        costCenterId: null,
        analyticalAccountId: null,
        accountLevel: null,
        fromDate: null,
        toDate: null,
        // Account display filter - single select option
        accountDisplayFilter: 'all', // Default: 'all', 'transactions_only', 'hide_zero_balance', 'hide_zero_opening'
      },
      chartOfAccounts: [],
      subChartOfAccounts: [],
      costCenters: [],
      analyticalAccounts: [],
      accountLevels: [1, 2, 3, 4, 5],
      loadingChartOfAccounts: false,
      loadingSubChartOfAccounts: false,
      loadingCostCenters: false,
      loadingAnalyticalAccounts: false,
    };
  },
  computed: {
    ...mapGetters("operations", ["items"]),
    hierarchicalAccounts() {
      if (!this.reportData || !this.reportData.trial_balance) {
        return [];
      }
      // Apply filters to the account hierarchy
      const filteredAccounts = this.applyAccountFilters(this.reportData.trial_balance);
      return this.buildHierarchicalList(filteredAccounts);
    },
    dateRangeDisplayName() {
      if (!this.reportData || !this.reportData.filters) {
        return this.$t('All Data');
      }

      const filters = this.reportData.filters;

      if (filters.from_date && filters.to_date) {
        return `${filters.from_date} - ${filters.to_date}`;
      } else {
        return this.$t('All Data');
      }
    },
    printTemplateUrl() {
      // Create a dynamic print template URL for trial balance with current filters
      const params = new URLSearchParams();

      if (this.filters.chartOfAccountId) {
        params.append('chart_of_account_id', this.filters.chartOfAccountId);
      }
      if (this.filters.subChartOfAccountId) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
      }
      if (this.filters.costCenterId) {
        params.append('cost_center_id', this.filters.costCenterId);
      }
      if (this.filters.analyticalAccountId) {
        params.append('analytical_account_id', this.filters.analyticalAccountId);
      }
      if (this.filters.accountLevel) {
        params.append('account_level', this.filters.accountLevel);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      return `/print/reports/trial-balance?${params.toString()}`;
    },
    isRTL() {
      return document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
    },
  },
  created() {
    this.loadInitialData();
  },
  methods: {
    async loadInitialData() {
      await Promise.all([
        this.loadChartOfAccounts(),
        this.loadCostCenters(),
        this.loadAnalyticalAccounts(),
      ]);
    },

    async loadChartOfAccounts() {
      this.loadingChartOfAccounts = true;
      try {
        const { data } = await axios.get("/api/chart-of-accounts");
        this.chartOfAccounts = data.data.map(account => ({
          ...account,
          display_name: `[${account.code}] ${account.name}`
        }));
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load chart of accounts"));
      } finally {
        this.loadingChartOfAccounts = false;
      }
    },

    async loadSubChartOfAccounts(parentAccountId) {
      if (!parentAccountId) {
        this.subChartOfAccounts = [];
        return;
      }

      this.loadingSubChartOfAccounts = true;
      try {
        const { data } = await axios.get(`/api/reports/sub-chart-of-accounts?parent_account_id=${parentAccountId}`);
        this.subChartOfAccounts = data.data.map(account => ({
          ...account,
          display_name: `[${account.code}] ${account.name}`
        }));
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load sub accounts"));
      } finally {
        this.loadingSubChartOfAccounts = false;
      }
    },

    async loadCostCenters() {
      this.loadingCostCenters = true;
      try {
        const response = await axios.get("/api/cost-centers/all", {
          params: { limit: 100 }
        });
        // Handle response - CostCenterResource collection returns data array
        if (response.data && Array.isArray(response.data)) {
          this.costCenters = response.data;
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          this.costCenters = response.data.data;
        } else {
          this.costCenters = [];
        }
      } catch (error) {
        console.error('Error loading cost centers:', error);
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load cost centers"));
        this.costCenters = [];
      } finally {
        this.loadingCostCenters = false;
      }
    },

    async searchChartOfAccounts(search, loading) {
      loading(true);
      try {
        const { data } = await axios.get(`/api/chart-of-accounts?search=${search}`);
        this.chartOfAccounts = data.data.map(account => ({
          ...account,
          display_name: `[${account.code}] ${account.name}`
        }));
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to search chart of accounts"));
      } finally {
        loading(false);
      }
    },

    async searchSubChartOfAccounts(search, loading) {
      if (!this.filters.chartOfAccountId) return;

      loading(true);
      try {
        const { data } = await axios.get(`/api/reports/sub-chart-of-accounts?parent_account_id=${this.filters.chartOfAccountId}&search=${search}`);
        this.subChartOfAccounts = data.data.map(account => ({
          ...account,
          display_name: `[${account.code}] ${account.name}`
        }));
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to search sub accounts"));
      } finally {
        loading(false);
      }
    },

    async searchCostCenters(search, loading) {
      if (loading) {
        loading(true);
      } else {
        this.loadingCostCenters = true;
      }
      try {
        const response = await axios.get("/api/cost-centers/all", {
          params: { search, limit: 100 }
        });
        // Handle response - CostCenterResource collection returns data array
        if (response.data && Array.isArray(response.data)) {
          this.costCenters = response.data;
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          this.costCenters = response.data.data;
        } else {
          this.costCenters = [];
        }
      } catch (error) {
        console.error('Error searching cost centers:', error);
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to search cost centers"));
        this.costCenters = [];
      } finally {
        if (loading) {
          loading(false);
        } else {
          this.loadingCostCenters = false;
        }
      }
    },

    async loadAnalyticalAccounts() {
      this.loadingAnalyticalAccounts = true;
      try {
        const response = await axios.get("/api/analytical-accounts/all", {
          params: { limit: 100 }
        });
        if (response.data && Array.isArray(response.data)) {
          this.analyticalAccounts = response.data.map(account => ({
            ...account,
            display_name: `[${account.code}] ${account.name}`
          }));
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          this.analyticalAccounts = response.data.data.map(account => ({
            ...account,
            display_name: `[${account.code}] ${account.name}`
          }));
        } else {
          this.analyticalAccounts = [];
        }
      } catch (error) {
        console.error('Error loading analytical accounts:', error);
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load analytical accounts"));
        this.analyticalAccounts = [];
      } finally {
        this.loadingAnalyticalAccounts = false;
      }
    },

    async searchAnalyticalAccounts(search, loading) {
      if (loading) {
        loading(true);
      } else {
        this.loadingAnalyticalAccounts = true;
      }
      try {
        const response = await axios.get("/api/analytical-accounts/all", {
          params: { search, limit: 100 }
        });
        if (response.data && Array.isArray(response.data)) {
          this.analyticalAccounts = response.data.map(account => ({
            ...account,
            display_name: `[${account.code}] ${account.name}`
          }));
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          this.analyticalAccounts = response.data.data.map(account => ({
            ...account,
            display_name: `[${account.code}] ${account.name}`
          }));
        } else {
          this.analyticalAccounts = [];
        }
      } catch (error) {
        console.error('Error searching analytical accounts:', error);
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to search analytical accounts"));
        this.analyticalAccounts = [];
      } finally {
        if (loading) {
          loading(false);
        } else {
          this.loadingAnalyticalAccounts = false;
        }
      }
    },

    onChartOfAccountChange(accountId) {
      this.filters.subChartOfAccountId = null;
      this.subChartOfAccounts = [];
      if (accountId) {
        this.loadSubChartOfAccounts(accountId);
      }
    },




    async generateReport() {
      if (!this.filters.fromDate || !this.filters.toDate) {
        this.$toast.error('', this.$t('Please select date range'));
        return;
      }

      this.loading = true;
      this.allAccounts = [];
      this.calculatingAccounts.clear();

      try {
        const params = new URLSearchParams();

        if (this.filters.chartOfAccountId) {
          params.append('chart_of_account_id', this.filters.chartOfAccountId);
        }
        if (this.filters.subChartOfAccountId) {
          params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
        }
        if (this.filters.costCenterId) {
          params.append('cost_center_id', this.filters.costCenterId);
        }
        if (this.filters.analyticalAccountId) {
          params.append('analytical_account_id', this.filters.analyticalAccountId);
        }
        if (this.filters.accountLevel) {
          params.append('account_level', this.filters.accountLevel);
        }
        params.append('from_date', this.filters.fromDate);
        params.append('to_date', this.filters.toDate);

        const response = await axios.get(`/api/reports/trial-balance?${params.toString()}`);

        if (response.data && response.data.success === true) {
          // All balances are already calculated by the backend!
          this.reportData = response.data.data;
          this.allAccounts = [...(response.data.data?.trial_balance || [])];
          
          // Mark all accounts as NOT calculating since they're already calculated
          this.calculatingAccounts.clear();
          
          // Automatically expand all nodes to show the full hierarchy
          this.expandAll();
          
          this.$toast.success('', this.$t("Trial balance loaded successfully"));
        } else {
          const errorMsg = response.data?.message || this.$t("Failed to generate trial balance report");
          console.error('API Error:', errorMsg);
          this.$toast.error('', errorMsg);
        }
      } catch (error) {
        console.error('Trial Balance Error:', error);
        let errorMessage = this.$t("Failed to generate trial balance report");

        if (error && typeof error === 'object') {
          if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
        }

        this.$toast.error('', errorMessage);
      } finally {
        this.loading = false;
      }
    },

    // DEPRECATED: No longer needed - balances are calculated server-side
    startBalanceCalculations() {
      // This method is no longer used
      // All balances are now calculated on the server in a single query
      console.warn('startBalanceCalculations is deprecated - balances are now calculated server-side');
    },

    // DEPRECATED: No longer needed - balances are calculated server-side
    getAllAccountIds(accounts) {
      const accountIds = [];

      const extractIds = (accountList) => {
        accountList.forEach(account => {
          accountIds.push(account.id);
          if (account.children && account.children.length > 0) {
            extractIds(account.children);
          }
        });
      };

      extractIds(accounts);
      return accountIds;
    },

    // DEPRECATED: No longer needed - balances are calculated server-side
    updateAccountsCalculatingState(accountIds, isCalculating) {
      const updateAccount = (accountList) => {
        accountList.forEach(account => {
          if (accountIds.includes(account.id)) {
            account.isCalculating = isCalculating;
          }
          if (account.children && account.children.length > 0) {
            updateAccount(account.children);
          }
        });
      };

      updateAccount(this.allAccounts);
    },

    // DEPRECATED: No longer needed - balances are calculated server-side
    async calculateBalancesInChunks(accountIds) {
      console.warn('calculateBalancesInChunks is deprecated - balances are now calculated server-side');
    },

    // DEPRECATED: No longer needed - balances are calculated server-side
    async calculateSingleAccountBalance(accountId) {
      console.warn('calculateSingleAccountBalance is deprecated - balances are now calculated server-side');
    },

    // DEPRECATED: No longer needed - balances are calculated server-side
    updateSingleAccountBalance(calculatedAccount) {
      // Find and update the account in the hierarchy
      const updated = this.updateAccountInHierarchy(this.allAccounts, calculatedAccount);

      if (updated) {
        // Remove from calculating set
        this.calculatingAccounts.delete(calculatedAccount.id);

        // Update the report data to keep both in sync
        if (this.reportData) {
          this.reportData.trial_balance = [...this.allAccounts];
        }

        // Force Vue reactivity update
        this.$forceUpdate();
      } else {
        console.error('Failed to find account in hierarchy:', calculatedAccount.id);
      }
    },

    findAccountById(accounts, accountId) {
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].id === accountId) {
          return accounts[i];
        }
        if (accounts[i].children && accounts[i].children.length > 0) {
          const found = this.findAccountById(accounts[i].children, accountId);
          if (found) return found;
        }
      }
      return null;
    },

    updateAccountInHierarchy(accounts, calculatedAccount) {
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].id === calculatedAccount.id) {
          // Update the account with calculated data
          accounts[i] = {
            ...accounts[i],
            ...calculatedAccount,
            isCalculating: false
          };
          return true;
        }

        // Check children recursively
        if (accounts[i].children && accounts[i].children.length > 0) {
          if (this.updateAccountInHierarchy(accounts[i].children, calculatedAccount)) {
            return true;
          }
        }
      }

      return false;
    },

    calculateGrandTotals() {
      let totalMovementDebit = 0;
      let totalMovementCredit = 0;
      let totalNetMovementDebit = 0;
      let totalNetMovementCredit = 0;
      let totalOpeningDebit = 0;
      let totalOpeningCredit = 0;
      let totalClosingDebit = 0;
      let totalClosingCredit = 0;

      // Recursively calculate totals from all leaf accounts only
      const calculateTotals = (accounts) => {
        if (!accounts || !Array.isArray(accounts)) {
          return;
        }

        accounts.forEach(account => {
          // Skip total rows - they are display-only and should not be included in grand totals
          if (account.isTotalRow) {
            return;
          }

          if (account.children && account.children.length > 0) {
            // Parent account - recursively process children
            calculateTotals(account.children);
          } else {
            // Leaf account - add its amounts to grand totals
            totalMovementDebit += parseFloat(account.movement_debit || 0);
            totalMovementCredit += parseFloat(account.movement_credit || 0);
            totalNetMovementDebit += parseFloat(account.net_movement_debit || 0);
            totalNetMovementCredit += parseFloat(account.net_movement_credit || 0);
            totalOpeningDebit += parseFloat(account.opening_debit || 0);
            totalOpeningCredit += parseFloat(account.opening_credit || 0);
            totalClosingDebit += parseFloat(account.closing_debit || 0);
            totalClosingCredit += parseFloat(account.closing_credit || 0);
          }
        });
      };

      calculateTotals(this.allAccounts);

      const grandTotals = {
        total_debits: totalClosingDebit,
        total_credits: totalClosingCredit,
        opening_debit: totalOpeningDebit,
        opening_credit: totalOpeningCredit,
        movement_debit: totalMovementDebit,
        movement_credit: totalMovementCredit,
        net_movement_debit: totalNetMovementDebit,
        net_movement_credit: totalNetMovementCredit,
        closing_debit: totalClosingDebit,
        closing_credit: totalClosingCredit,
        difference: Math.abs(totalClosingDebit - totalClosingCredit)
      };

      // Update report data with grand totals
      if (this.reportData) {
        this.reportData.grand_totals = grandTotals;
      }
    },

    toggleAutoLoad() {
      this.autoLoadMore = !this.autoLoadMore;
      if (this.autoLoadMore && this.hasMoreData) {
        this.loadMoreData();
      }
    },


    isAccountCalculating(accountId) {
      return this.calculatingAccounts.has(accountId);
    },

    // Build hierarchical list for expand/collapse functionality
    buildHierarchicalList(accounts, level = 0) {
      const result = [];

      accounts.forEach(account => {
        const accountWithLevel = {
          ...account,
          level: level,
          expanded: this.expandedNodes.includes(account.id),
          hasChildren: account.children && account.children.length > 0,
          isParent: account.children && account.children.length > 0,
          isLeaf: !account.children || account.children.length === 0
        };

        result.push(accountWithLevel);

        // Add children if expanded - recursively show ALL descendants
        if (accountWithLevel.expanded && account.children && account.children.length > 0) {
          const children = this.buildHierarchicalList(account.children, level + 1);
          result.push(...children);

          // Add total row for this account's children
          if (children.length > 0) {
            // Calculate totals from all leaf accounts under this parent (not just direct children)
            const childrenTotals = this.calculateChildrenTotals(account.children);

            const totalRow = {
              id: `total-${account.id}`,
              code: '',
              name: `Total ${account.name}`,
              type: 'TOTAL',
              level: level + 1,
              expanded: false,
              hasChildren: false,
              isTotalRow: true,
              isParent: false,
              isLeaf: false,
              parentId: account.id,
              // Use the calculated children totals
              children_opening_debit: childrenTotals.opening_debit,
              children_opening_credit: childrenTotals.opening_credit,
              children_movement_debit: childrenTotals.movement_debit,
              children_movement_credit: childrenTotals.movement_credit,
              children_net_movement_debit: childrenTotals.net_movement_debit,
              children_net_movement_credit: childrenTotals.net_movement_credit,
              children_closing_debit: childrenTotals.closing_debit,
              children_closing_credit: childrenTotals.closing_credit,
            };
            result.push(totalRow);
          }
        }
      });

      return result;
    },

    // Calculate totals from all leaf accounts under a parent
    calculateChildrenTotals(childrenAccounts) {
      const totals = {
        opening_debit: 0,
        opening_credit: 0,
        movement_debit: 0,
        movement_credit: 0,
        net_movement_debit: 0,
        net_movement_credit: 0,
        closing_debit: 0,
        closing_credit: 0,
      };

      const calculateFromAccount = (account) => {
        // If account has children, recursively calculate from children
        if (account.children && account.children.length > 0) {
          account.children.forEach(child => {
            calculateFromAccount(child);
          });
        } else {
          // Leaf account - add its amounts to totals
          totals.opening_debit += parseFloat(account.opening_debit || 0);
          totals.opening_credit += parseFloat(account.opening_credit || 0);
          totals.movement_debit += parseFloat(account.movement_debit || 0);
          totals.movement_credit += parseFloat(account.movement_credit || 0);
          totals.net_movement_debit += parseFloat(account.net_movement_debit || 0);
          totals.net_movement_credit += parseFloat(account.net_movement_credit || 0);
          totals.closing_debit += parseFloat(account.closing_debit || 0);
          totals.closing_credit += parseFloat(account.closing_credit || 0);
        }
      };

      childrenAccounts.forEach(account => {
        calculateFromAccount(account);
      });

      return totals;
    },

    // Apply account filters to the account hierarchy
    applyAccountFilters(accounts) {
      if (!accounts || !Array.isArray(accounts)) {
        return [];
      }

      // If "Show All Accounts" is selected, return all accounts without filtering
      if (this.filters.accountDisplayFilter === 'all') {
        return accounts;
      }

      // Build filter function based on selected option
      const shouldShowAccount = (account) => {
        switch (this.filters.accountDisplayFilter) {
          case 'transactions_only':
            // Show only accounts with transactions
            return this.accountHasTransactions(account);

          case 'hide_zero_balance':
            // Hide accounts with zero closing balance
            return !this.accountHasZeroBalance(account);

          case 'hide_zero_opening':
            // Hide accounts with zero opening balance
            return !this.accountHasZeroOpeningBalance(account);

          default:
            return true;
        }
      };

      return this.filterAccountHierarchy(accounts, shouldShowAccount);
    },

    // Filter account hierarchy recursively, keeping parents if they have visible children
    filterAccountHierarchy(accounts, filterFn) {
      if (!accounts || !Array.isArray(accounts)) {
        return [];
      }

      const filtered = [];

      accounts.forEach(account => {
        const accountCopy = { ...account };

        // If account has children, filter children first
        if (account.children && account.children.length > 0) {
          const filteredChildren = this.filterAccountHierarchy(account.children, filterFn);
          
          // Only include parent if it has visible children
          if (filteredChildren.length > 0) {
            accountCopy.children = filteredChildren;
            filtered.push(accountCopy);
          }
        } else {
          // Leaf account - apply filter directly
          if (filterFn(account)) {
            filtered.push(accountCopy);
          }
        }
      });

      return filtered;
    },

    // Check if account has transactions (debit or credit movements)
    accountHasTransactions(account) {
      const movementDebit = parseFloat(account.movement_debit || 0);
      const movementCredit = parseFloat(account.movement_credit || 0);
      return movementDebit > 0 || movementCredit > 0;
    },

    // Check if account has zero closing balance
    accountHasZeroBalance(account) {
      const closingDebit = parseFloat(account.closing_debit || 0);
      const closingCredit = parseFloat(account.closing_credit || 0);
      return closingDebit === 0 && closingCredit === 0;
    },

    // Check if account has zero opening balance
    accountHasZeroOpeningBalance(account) {
      const openingDebit = parseFloat(account.opening_debit || 0);
      const openingCredit = parseFloat(account.opening_credit || 0);
      return openingDebit === 0 && openingCredit === 0;
    },

    // Toggle node expansion
    toggleNode(accountId) {
      const index = this.expandedNodes.indexOf(accountId);
      if (index > -1) {
        this.expandedNodes.splice(index, 1);
      } else {
        this.expandedNodes.push(accountId);
      }
    },

    // Expand all nodes
    expandAll() {
      if (!this.reportData || !this.reportData.trial_balance) return;

      // Use the current allAccounts data to ensure we're working with the latest updates
      this.addAllAccountIds(this.allAccounts);

      // Force Vue reactivity update to show expanded view with updated data
      this.$forceUpdate();
    },

    // Collapse all nodes
    collapseAll() {
      this.expandedNodes = [];
    },

    // Helper method to add all account IDs to expanded array
    addAllAccountIds(accounts) {
      accounts.forEach(account => {
        if (account.children && account.children.length > 0) {
          if (!this.expandedNodes.includes(account.id)) {
            this.expandedNodes.push(account.id);
          }
          this.addAllAccountIds(account.children);
        }
      });
    },

    printReport() {
      window.print();
    },

    exportToExcel() {
      // TODO: Implement Excel export functionality
      this.$toast.info('', this.$t("Excel export functionality will be implemented soon"));
    },

    downloadPDF() {
      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.filters.chartOfAccountId) {
        params.append('chart_of_account_id', this.filters.chartOfAccountId);
      }
      if (this.filters.subChartOfAccountId) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
      }
      if (this.filters.costCenterId) {
        params.append('cost_center_id', this.filters.costCenterId);
      }
      if (this.filters.accountLevel) {
        params.append('account_level', this.filters.accountLevel);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      const pdfUrl = `/print/reports/trial-balance/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    previewPDF() {
      // Build query parameters from filters
      const params = new URLSearchParams();
      if (this.filters.chartOfAccountId) {
        params.append('chart_of_account_id', this.filters.chartOfAccountId);
      }
      if (this.filters.subChartOfAccountId) {
        params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
      }
      if (this.filters.costCenterId) {
        params.append('cost_center_id', this.filters.costCenterId);
      }
      if (this.filters.accountLevel) {
        params.append('account_level', this.filters.accountLevel);
      }
      params.append('from_date', this.filters.fromDate);
      params.append('to_date', this.filters.toDate);

      // Redirect to backend PDF route with query parameters
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      
      const pdfUrl = `/print/reports/trial-balance/preview?${params.toString()}`;
      window.location.href = pdfUrl;
    },


    getAccountRowClass(account) {
      if (account.isTotalRow) {
        return 'table-warning font-weight-bold';
      }
      if (account.isParent) {
        return 'table-info font-weight-bold';
      }
      return '';
    },

    // Helper method to get the correct amount for display
    getDisplayAmount(account, field) {
      // Total rows should show children totals (sum of all leaf accounts under the parent)
      if (account.isTotalRow) {
        const childrenField = `children_${field}`;
        return parseFloat(account[childrenField] || 0);
      }

      // Parent accounts should show empty cells (no amounts displayed)
      // Only leaf accounts and total rows show amounts
      if (account.isParent && !account.isTotalRow) {
        return null;
      }

      // Leaf accounts (individual accounts) should show their own amounts
      if (account.isLeaf) {
        return parseFloat(account[field] || 0);
      }

      // Fallback to the field value
      return parseFloat(account[field] || 0);
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
  border-radius: 10px;
  border: none;
}

.export-excel-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  border-radius: 10px;
  border: none;
}

.export-pdf-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  border-radius: 10px;
  border: none;
}

.preview-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  border-radius: 10px;
  border: none;
}

.print-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  border-radius: 10px;
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

.table-responsive {
  overflow-y: auto;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
}

.table-sm th,
.table-sm td {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

.table th {
  background-color: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  font-weight: 600;
  color: #495057;
}

.table tbody tr:hover {
  background-color: #f8f9fa;
}

.table tbody tr.table-info {
  background-color: #e3f2fd;
  font-weight: 600;
}

.table tbody tr.table-info:hover {
  background-color: #bbdefb;
}

.info-box {
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 0.375rem;
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
  font-size: 1.5rem;
  font-weight: 700;
  color: #495057;
}

.badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}

.font-weight-bold {
  color: #212529;
}

.text-muted {
  color: #6c757d !important;
}

/* Expand/Collapse functionality */
.btn-link {
  color: #007bff;
  text-decoration: none;
  border: none;
  background: none;
  padding: 0;
}

.btn-link:hover {
  color: #0056b3;
  text-decoration: none;
}

.btn-link:focus {
  box-shadow: none;
  outline: none;
}

.tree-toggle-icon {
  transition: transform 0.2s ease;
}

.tree-toggle-icon.expanded {
  transform: rotate(90deg);
}

.tree-item-icon {
  width: 16px;
  text-align: center;
}

/* Button alignment and spacing */
.gap-2>*+* {
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .gap-2 {
    flex-direction: column;
    align-items: stretch;
  }

  .gap-2>*+* {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}

/* Trial Balance Table Styling */
.trial-balance-table {
  background: #ffffff;
  border: 1px solid #dee2e6;
  font-size: 16px;
}

/* Table Header */
.table-header {
  background: #f8f9fa;
}

.table-header th {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 12px 8px;
  font-weight: 600;
  font-size: 16px;
  color: #495057;
}

/* Header Column Styles */
.header-code {
  width: 10%;
}

.header-account {
  width: 30%;
}

.header-amount {
  width: 12%;
  font-size: 16px;
}

/* Table Body */
.trial-balance-table tbody tr {
  border-bottom: 1px solid #dee2e6;
}

.trial-balance-table tbody tr:hover {
  background: #f8f9fa;
}

.trial-balance-table tbody tr.table-info {
  background: #e9ecef;
  font-weight: 600;
  border-left: 3px solid #6c757d;
}

.trial-balance-table tbody tr.table-info:hover {
  background: #dee2e6;
}

.trial-balance-table tbody tr.table-warning {
  background: #fff3cd;
  font-weight: 600;
  border-left: 3px solid #ffc107;
}

.trial-balance-table tbody tr.table-warning:hover {
  background: #ffeaa7;
}

/* Cell Styling */
.cell-code {
  background: #f8f9fa;
}

.cell-account {
  background: #ffffff;
}

.cell-amount {
  background: #ffffff;
  font-weight: 600;
}

/* Account Code Badge */
.account-code-badge {
  background: #6c757d;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
}

/* Account Name Container */
.account-name-container {
  display: flex;
  align-items: center;
  padding: 8px 0;
}

.expand-btn {
  background: none;
  border: none;
  color: #6c757d;
  font-size: 16px;
  padding: 2px;
  margin-right: 8px;
  border-radius: 2px;
  transition: color 0.2s ease;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-btn:hover {
  color: #495057;
  background: #f8f9fa;
}

.expand-spacer {
  width: 24px;
  margin-right: 8px;
}

.account-icon {
  margin-right: 8px;
  font-size: 16px;
  width: 16px;
  text-align: center;
}

.account-icon.fa-folder {
  color: #6c757d;
}

.account-icon.fa-folder-open {
  color: #495057;
}

.account-icon.fa-file {
  color: #adb5bd;
}

.account-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 16px;
}

.total-row-name {
  font-weight: 700;
  color: #d63384;
  font-style: italic;
}


/* Amount Values */
.amount-value {
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  display: inline-block;
  min-width: 80px;
  text-align: right;
  background: none;
  color: #495057;
}

.debit-amount {
  background: none;
  color: #495057;
  border: none;
}

.credit-amount {
  background: none;
  color: #495057;
  border: none;
}

.closing-amount {
  font-weight: 800;
  font-size: 16px;
  background: none;
}

.amount-empty {
  color: #adb5bd;
  font-style: italic;
  font-size: 16px;
}

/* Table Footer */
.table-footer {
  background: #f8f9fa;
  color: #495057;
}

.grand-total-row {
  background: #e9ecef;
  border-top: 2px solid #6c757d;
}

.grand-total-label {
  background: none;
  font-size: 16px;
  padding: 12px 8px;
  font-weight: 700;
  color: #495057;
}

.grand-total-amount {
  background: none;
  color: #495057;
  font-size: 16px;
  font-weight: 600;
  padding: 0;
  margin: 0;
  border: none;
}

.grand-total-amount.debit-amount {
  background: none;
  border: none;
}

.grand-total-amount.credit-amount {
  background: none;
  border: none;
}

@media print {
  .no-print {
    display: none !important;
  }

  .card {
    border: none !important;
    box-shadow: none !important;
  }

  .table {
    font-size: 16px;
  }

  .table-responsive {
    overflow: visible;
  }
}

@media (max-width: 1300px) {
  .info-box {
    padding: 0;
  }
}
</style>
