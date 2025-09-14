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
                <!-- Chart of Account Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="chart_of_account_id">{{ $t("Chart of Account") }}</label>
                    <v-select
                      v-model="filters.chartOfAccountId"
                      :options="chartOfAccounts"
                      :reduce="account => account.id"
                      label="display_name"
                      :placeholder="$t('Select Chart of Account')"
                      :searchable="true"
                      :clearable="true"
                      :loading="loadingChartOfAccounts"
                      @search="searchChartOfAccounts"
                      @input="onChartOfAccountChange"
                    />
                  </div>
                </div>

                <!-- Sub Chart of Account Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="sub_chart_of_account_id">{{ $t("Sub Account") }}</label>
                    <v-select
                      v-model="filters.subChartOfAccountId"
                      :options="subChartOfAccounts"
                      :reduce="account => account.id"
                      label="display_name"
                      :placeholder="$t('Select Sub Account')"
                      :searchable="true"
                      :clearable="true"
                      :loading="loadingSubChartOfAccounts"
                      :disabled="!filters.chartOfAccountId"
                      @search="searchSubChartOfAccounts"
                    />
                  </div>
                </div>

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
              </div>

              <div class="row">
                <!-- Date Range Filter -->
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="from_date">{{ $t("From Date") }}</label>
                    <input
                      type="date"
                      v-model="filters.fromDate"
                      class="form-control"
                      :placeholder="$t('From Date')"
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
                    />
                  </div>
                </div>

                <div class="col-md-6" style="margin-top: 32px;">
                  <button
                    @click="generateReport()"
                    class="btn btn-primary"
                    :disabled="loading"
                  >
                    <i class="fas fa-search me-1"></i>
                    {{ loading ? $t("Generating...") : $t("Generate Report") }}
                  </button>
                  <button
                    @click="printReport"
                    class="btn btn-success"
                    :disabled="!reportData"
                  >
                    <i class="fas fa-print me-1"></i>
                    {{ $t("Print") }}
                  </button>
                  <button
                    v-if="reportData && reportData.trial_balance && reportData.trial_balance.length > 0"
                    @click="expandAll"
                    class="btn btn-outline-success"
                    :disabled="loading"
                  >
                    <i class="fas fa-expand-arrows-alt me-1"></i>
                    {{ $t("Expand All") }}
                  </button>
                  <button
                    v-if="reportData && reportData.trial_balance && reportData.trial_balance.length > 0"
                    @click="collapseAll"
                    class="btn btn-outline-warning"
                    :disabled="loading"
                  >
                    <i class="fas fa-compress-arrows-alt me-1"></i>
                    {{ $t("Collapse All") }}
                  </button>
                  <button
                    @click="exportToExcel"
                    class="btn btn-info"
                    :disabled="!reportData"
                  >
                    <i class="fas fa-file-excel me-1"></i>
                    {{ $t("Export Excel") }}
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
              <span class="badge badge-info">{{ reportData.date_range.name }}</span>
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
                  <tr>
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
                  </tr>
                </thead>
                <tbody>
                  <template v-for="account in hierarchicalAccounts">
                    <tr :key="account.id" :class="getAccountRowClass(account)">
                      <td class="text-center cell-code">
                        <span class="account-code-badge">{{ account.code }}</span>
                      </td>
                      <td class="cell-account">
                        <div class="account-name-container" :style="{ paddingLeft: (account.level * 20) + 'px' }">
                          <button
                            v-if="account.hasChildren && !account.isTotalRow"
                            @click="toggleNode(account.id)"
                            class="expand-btn"
                          >
                            <i :class="account.expanded ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i>
                          </button>
                          <span v-else-if="!account.isTotalRow" class="expand-spacer"></span>
                          <i v-if="account.hasChildren && !account.isTotalRow" class="account-icon" :class="account.expanded ? 'fa-folder-open' : 'fa-folder'"></i>
                          <i v-else-if="!account.isTotalRow" class="account-icon fa-file"></i>
                          <i v-if="account.isTotalRow" class="account-icon fa-calculator"></i>
                          <span class="account-name" :class="{ 'total-row-name': account.isTotalRow }">{{ account.name }}</span>
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
                        <span v-if="getDisplayAmount(account, 'net_movement_debit') > 0" class="amount-value debit-amount">
                          <CurrencyDisplay :amount="getDisplayAmount(account, 'net_movement_debit')" />
                        </span>
                        <span v-else class="amount-empty">-</span>
                      </td>
                      <td class="text-right cell-amount">
                        <span v-if="getDisplayAmount(account, 'net_movement_credit') > 0" class="amount-value credit-amount">
                          <CurrencyDisplay :amount="getDisplayAmount(account, 'net_movement_credit')" />
                        </span>
                        <span v-else class="amount-empty">-</span>
                      </td>
                      <!-- Closing Balance -->
                      <td class="text-right cell-amount">
                        <span v-if="getDisplayAmount(account, 'closing_debit') > 0" class="amount-value debit-amount closing-amount">
                          <CurrencyDisplay :amount="getDisplayAmount(account, 'closing_debit')" />
                        </span>
                        <span v-else class="amount-empty">-</span>
                      </td>
                      <td class="text-right cell-amount">
                        <span v-if="getDisplayAmount(account, 'closing_credit') > 0" class="amount-value credit-amount closing-amount">
                          <CurrencyDisplay :amount="getDisplayAmount(account, 'closing_credit')" />
                        </span>
                        <span v-else class="amount-empty">-</span>
                      </td>
                    </tr>
                  </template>
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
            <div v-if="hasMoreData && reportData" class="text-center mt-3">
              <button
                @click="loadMoreData"
                class="btn btn-outline-primary"
                :disabled="loadingMore"
              >
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
      perPage: 20,
      hasMoreData: false,
      loadingMore: false,
      expandedNodes: [], // Track expanded nodes
      filters: {
        chartOfAccountId: null,
        subChartOfAccountId: null,
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null,
      },
      chartOfAccounts: [],
      subChartOfAccounts: [],
      fiscalYears: [],
      accountingPeriods: [],
      loadingChartOfAccounts: false,
      loadingSubChartOfAccounts: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
    };
  },
  computed: {
    ...mapGetters("operations", ["items"]),
    hierarchicalAccounts() {
      if (!this.reportData || !this.reportData.trial_balance) {
        return [];
      }
      return this.buildHierarchicalList(this.reportData.trial_balance);
    },
  },
  created() {
    this.loadInitialData();
  },
  methods: {
    async loadInitialData() {
      await Promise.all([
        this.loadChartOfAccounts(),
        this.loadFiscalYears(),
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

    async loadFiscalYears() {
      this.loadingFiscalYears = true;
      try {
        const { data } = await axios.get("/api/fiscal-years");
        this.fiscalYears = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load fiscal years"));
      } finally {
        this.loadingFiscalYears = false;
      }
    },

    async loadAccountingPeriods(fiscalYearId) {
      if (!fiscalYearId) {
        this.accountingPeriods = [];
        return;
      }

      this.loadingAccountingPeriods = true;
      try {
        const { data } = await axios.get(`/api/accounting-periods?fiscal_year_id=${fiscalYearId}`);
        this.accountingPeriods = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load accounting periods"));
      } finally {
        this.loadingAccountingPeriods = false;
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

    async searchFiscalYears(search, loading) {
      loading(true);
      try {
        const { data } = await axios.get(`/api/fiscal-years?search=${search}`);
        this.fiscalYears = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to search fiscal years"));
      } finally {
        loading(false);
      }
    },

    async searchAccountingPeriods(search, loading) {
      if (!this.filters.fiscalYearId) return;
      
      loading(true);
      try {
        const { data } = await axios.get(`/api/accounting-periods?fiscal_year_id=${this.filters.fiscalYearId}&search=${search}`);
        this.accountingPeriods = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to search accounting periods"));
      } finally {
        loading(false);
      }
    },

    onChartOfAccountChange(accountId) {
      this.filters.subChartOfAccountId = null;
      this.subChartOfAccounts = [];
      if (accountId) {
        this.loadSubChartOfAccounts(accountId);
      }
    },

    onFiscalYearChange(fiscalYearId) {
      this.filters.accountingPeriodId = null;
      this.accountingPeriods = [];
      if (fiscalYearId) {
        this.loadAccountingPeriods(fiscalYearId);
      }
    },

    onAccountingPeriodChange(accountingPeriodId) {
      // No dependent filters to clear for accounting period
      // This method is here for consistency with other filter change handlers
    },

    async generateReport(page = 1) {
      // Ensure page is a number
      const pageNumber = typeof page === 'number' ? page : 1;
      
      if (pageNumber === 1) {
        this.loading = true;
        this.allAccounts = [];
        this.currentPage = 1;
      } else {
        this.loadingMore = true;
      }

      try {
        const params = new URLSearchParams();
        
        if (this.filters.chartOfAccountId) {
          params.append('chart_of_account_id', this.filters.chartOfAccountId);
        }
        if (this.filters.subChartOfAccountId) {
          params.append('sub_chart_of_account_id', this.filters.subChartOfAccountId);
        }
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
        params.append('page', pageNumber.toString());
        params.append('per_page', this.perPage.toString());

        const response = await axios.get(`/api/reports/trial-balance?${params.toString()}`);
        console.log('API Response:', response);
        
        // Handle both direct array response and JSON response
        let data;
        if (response.data && typeof response.data === 'object' && 'success' in response.data) {
          // Direct array response from successful API call
          data = response.data;
        } else {
          // JSON response (usually error cases)
          data = response.data;
        }
        
        console.log('Response data:', data);
        
        if (data && data.success === true) {
          if (pageNumber === 1) {
            this.reportData = data.data;
            this.allAccounts = [...(data.data?.trial_balance || [])];
          } else {
            this.allAccounts = [...this.allAccounts, ...(data.data?.trial_balance || [])];
            if (this.reportData) {
              this.reportData.trial_balance = this.allAccounts;
            }
          }
          
          this.currentPage = pageNumber;
          this.hasMoreData = data.data?.pagination?.has_more || false;
          
          if (pageNumber === 1) {
            this.$toast.success('', this.$t("Trial balance report generated successfully"));
          }
        } else {
          const errorMsg = data?.message || this.$t("Failed to generate trial balance report");
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
        this.loadingMore = false;
      }
    },

    async loadMoreData() {
      if (this.hasMoreData && !this.loadingMore) {
        await this.generateReport(this.currentPage + 1);
      }
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
        
        // Add children if expanded
        if (accountWithLevel.expanded && account.children && account.children.length > 0) {
          const children = this.buildHierarchicalList(account.children, level + 1);
          result.push(...children);
          
          // Add total row for this account's children
          if (children.length > 0) {
            // Calculate totals from direct children only (not their children)
            // Direct children are those that are exactly one level deeper
            const directChildren = children.filter(child => child.level === level + 1 && !child.isTotalRow);
            const childrenTotals = {
              opening_debit: 0,
              opening_credit: 0,
              movement_debit: 0,
              movement_credit: 0,
              net_movement_debit: 0,
              net_movement_credit: 0,
              closing_debit: 0,
              closing_credit: 0,
            };
            
            // Sum amounts from direct children only (their own amounts, not totals)
            directChildren.forEach(child => {
              // For parent accounts, use their total amounts
              // For leaf accounts, use their own amounts
              const amountField = child.isParent ? 'total_' : '';
              
              childrenTotals.opening_debit += child[`${amountField}opening_debit`] || 0;
              childrenTotals.opening_credit += child[`${amountField}opening_credit`] || 0;
              childrenTotals.movement_debit += child[`${amountField}movement_debit`] || 0;
              childrenTotals.movement_credit += child[`${amountField}movement_credit`] || 0;
              childrenTotals.net_movement_debit += child[`${amountField}net_movement_debit`] || 0;
              childrenTotals.net_movement_credit += child[`${amountField}net_movement_credit`] || 0;
              childrenTotals.closing_debit += child[`${amountField}closing_debit`] || 0;
              childrenTotals.closing_credit += child[`${amountField}closing_credit`] || 0;
            });
            
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
      
      this.addAllAccountIds(this.reportData.trial_balance);
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
      // Total rows should show children totals (sum of direct children's amounts)
      if (account.isTotalRow) {
        const childrenField = `children_${field}`;
        return account[childrenField] || 0;
      }
      
      // Parent accounts should show empty cells (no amounts displayed)
      if (account.isParent && !account.isTotalRow) {
        return null;
      }
      
      // Leaf accounts (individual accounts) should show their own amounts
      if (account.isLeaf) {
        return account[field] || 0;
      }
      
      // Fallback to the field value
      return account[field] || 0;
    },

  },
};
</script>

<style scoped>
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
.gap-2 > * + * {
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .gap-2 {
    flex-direction: column;
    align-items: stretch;
  }
  
  .gap-2 > * + * {
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
</style>
