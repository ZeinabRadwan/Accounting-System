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
              </div>

              <div class="row">
                <div class="col-12">
                  <button
                    @click="generateReport"
                    class="btn btn-primary"
                    :disabled="loading"
                  >
                    <i class="fas fa-sync-alt" :class="{ 'fa-spin': loading }"></i>
                    {{ $t("Generate Report") }}
                  </button>
                  <button @click="resetFilters" class="btn btn-secondary ml-2">
                    <i class="fas fa-undo"></i> {{ $t("Reset") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="btn-group">
          <a @click="generatePDF()" href="#" class="btn btn-primary">
            <i class="fas fa-download"></i> {{ $t("Download") }}
          </a>
          <a @click="printWindow()" href="#" class="btn btn-secondary">
            <i class="fas fa-print"></i> {{ $t("Print") }}
          </a>
          <router-link :to="{ name: 'home' }" class="btn btn-dark float-right">
            <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
        <!-- info row -->
        <div class="row invoice-info">
          <div class="col-sm-4 m-auto invoice-col">
            <CompanyInfo class="text-center" />
          </div>
        </div>
        <!-- /.row -->

        <!-- Date Range Info -->
        <div class="row mt-3" v-if="balanceData && balanceData.date_range">
          <div class="col-12 text-center">
            <h6 class="text-muted">
              {{ $t("Period") }}: {{ balanceData.date_range.name }}
              ({{ formatDate(balanceData.date_range.start_date) }} - {{ formatDate(balanceData.date_range.end_date) }})
            </h6>
          </div>
        </div>

        <!-- Table row -->
        <div class="row mt-3 position-relative">
          <div v-if="loading" class="overlay">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">{{ $t("Loading") }}...</span>
            </div>
          </div>
          <div class="table-responsive w-100">
            <table class="table table-striped table-bordered">
              <thead>
                <tr class="text-center">
                  <th colspan="2">
                    <h5>{{ $t("Assets") }}</h5>
                  </th>
                  <th class="red" colspan="2">
                    <h5>{{ $t("Liabilities & Equity") }}</h5>
                  </th>
                </tr>
              </thead>
              <tbody v-if="balanceData && balanceData.accounts && balanceData.totals">
                <!-- Assets Section -->
                <tr v-for="account in balanceData.accounts.assets" :key="'asset-' + account.id">
                  <th>{{ account.name }} ({{ account.code }})</th>
                  <th class="text-right">
                    <span v-if="account.balance_type === 'Debit'" class="text-success">
                      {{ account.absolute_balance | withAbsoluteCurrency }}
                    </span>
                    <span v-else class="text-danger">
                      ({{ account.absolute_balance | withAbsoluteCurrency }})
                    </span>
                  </th>
                  <th></th>
                  <th></th>
                </tr>

                <!-- Liabilities Section -->
                <tr v-for="account in balanceData.accounts.liabilities" :key="'liability-' + account.id">
                  <th></th>
                  <th></th>
                  <th>{{ account.name }} ({{ account.code }})</th>
                  <th class="text-right">
                    <span v-if="account.balance_type === 'Credit'" class="text-danger">
                      {{ account.absolute_balance | withAbsoluteCurrency }}
                    </span>
                    <span v-else class="text-success">
                      ({{ account.absolute_balance | withAbsoluteCurrency }})
                    </span>
                  </th>
                </tr>

                <!-- Equity Section -->
                <tr v-for="account in balanceData.accounts.equity" :key="'equity-' + account.id">
                  <th></th>
                  <th></th>
                  <th>{{ account.name }} ({{ account.code }})</th>
                  <th class="text-right">
                    <span v-if="account.balance_type === 'Credit'" class="text-danger">
                      {{ account.absolute_balance | withAbsoluteCurrency }}
                    </span>
                    <span v-else class="text-success">
                      ({{ account.absolute_balance | withAbsoluteCurrency }})
                    </span>
                  </th>
                </tr>

                <!-- Net Income Row -->
                <tr v-if="balanceData.totals.net_income !== 0">
                  <th></th>
                  <th></th>
                  <th>{{ $t("Net Income") }}</th>
                  <th class="text-right">
                    <span v-if="balanceData.totals.net_income > 0" class="text-danger">
                      {{ balanceData.totals.net_income | withAbsoluteCurrency }}
                    </span>
                    <span v-else class="text-success">
                      ({{ Math.abs(balanceData.totals.net_income) | withAbsoluteCurrency }})
                    </span>
                  </th>
                </tr>

                <!-- Totals Row -->
                <tr class="text-right font-weight-bold">
                  <th>{{ $t("Total Assets") }}</th>
                  <th class="text-success">
                    {{ balanceData.totals.total_assets | withAbsoluteCurrency }}
                  </th>
                  <th>{{ $t("Total Liabilities & Equity") }}</th>
                  <th class="text-danger">
                    {{ balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency }}
                  </th>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4" class="text-center">
                    <p class="text-muted">{{ $t("No data available. Please generate a report.") }}</p>
                  </td>
                </tr>
              </tbody>
              <tfoot v-if="balanceData && balanceData.totals">
                <tr>
                  <td colspan="4" class="text-center">
                    <strong>{{ $t("Balance Sheet Summary") }}</strong><br />
                    <h4 class="mt-2">
                      {{ $t("Total Assets") }}:
                      <span v-if="balanceData.totals.total_assets > balanceData.totals.total_liabilities_and_equity" class="text-success">
                        {{ balanceData.totals.total_assets | withAbsoluteCurrency }}
                      </span>
                      <span v-else-if="balanceData.totals.total_assets < balanceData.totals.total_liabilities_and_equity" class="text-danger">
                        {{ balanceData.totals.total_assets | withAbsoluteCurrency }}
                      </span>
                      <span v-else class="text-success">
                        {{ balanceData.totals.total_assets | withAbsoluteCurrency }}
                      </span>
                    </h4>
                    <h4>
                      {{ $t("Total Liabilities & Equity") }}:
                      <span v-if="balanceData.totals.total_liabilities_and_equity > balanceData.totals.total_assets" class="text-danger">
                        {{ balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency }}
                      </span>
                      <span v-else-if="balanceData.totals.total_liabilities_and_equity < balanceData.totals.total_assets" class="text-success">
                        {{ balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency }}
                      </span>
                      <span v-else class="text-success">
                        {{ balanceData.totals.total_liabilities_and_equity | withAbsoluteCurrency }}
                      </span>
                    </h4>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <!-- /.row -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import html2pdf from "html2pdf.js";

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
        const response = await axios.get('/api/accounting-periods/by-fiscal-year', {
          params: { 
            fiscal_year_id: this.filters.fiscalYearId,
            search,
            perPage: 100
          }
        });
        // Handle paginated response
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
      this.loadAccountingPeriods();
    },

    // Handle accounting period change
    onAccountingPeriodChange() {
      this.filters.fiscalYearId = null;
      this.filters.fromDate = null;
      this.filters.toDate = null;
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
      this.generateReport();
    },

    // Format date
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },

    // Print
    printWindow() {
      window.print();
    },

    // Download PDF
    generatePDF() {
      const element = document.getElementById("content-to-pdf");
      const options = {
        margin: 2,
        filename: "Balance Sheet.pdf",
        image: { type: "jpeg", quality: 0.98 },
        pagebreak: { mode: "avoid-all", before: "#page-break" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };

      html2pdf().from(element).set(options).save();
    },
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.red {
  color: #dc3545;
}

.font-weight-bold {
  font-weight: bold;
}
</style>