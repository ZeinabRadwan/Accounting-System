<template>
  <div>
    <!-- Filters Card -->
    <div class="card">
      <div class="card-header">
        <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
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
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Analytical Account') }}</label>
              <v-select v-model="filters.analyticalAccount" :options="analyticalAccounts" :reduce="account => account.id"
                label="display_name" :placeholder="$t('Select Analytical Account')" :searchable="true" :clearable="true"
                :loading="loadingAnalyticalAccounts" @search="searchAnalyticalAccounts" />
            </div>
          </div>

          <!-- Chart of Account (Cash/Bank Account) -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Cash/Bank Account') }}</label>
              <v-select v-model="filters.chartOfAccount" :options="chartOfAccounts" :reduce="account => account.id"
                label="display_name" :placeholder="$t('Select Cash/Bank Account')" :searchable="true" :clearable="true"
                :loading="loadingAccounts" />
            </div>
          </div>

          <!-- Date Range -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Date Range') }}</label>
              <div class="input-group">
                <input type="date" v-model="filters.fromDate" class="form-control" :placeholder="$t('From Date')" />
                <div class="input-group-append">
                  <span class="input-group-text">{{ $t('to') }}</span>
                </div>
                <input type="date" v-model="filters.toDate" class="form-control" :placeholder="$t('To Date')" />
              </div>
            </div>
          </div>

          <!-- Branch -->
          <div class="col-md-3">
            <div class="form-group">
              <label>{{ $t('Branch') }}</label>
              <v-select v-model="filters.branch" :options="branches" :reduce="branch => branch.id"
                label="name" :placeholder="$t('Select Branch')" :searchable="true" :clearable="true"
                :loading="loadingBranches" @search="searchBranches" />
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="col-12">
            <div class="form-group">
              <button type="submit" class="btn btn-primary" :disabled="loading">
                <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fas fa-search"></i>
                {{ $t('Generate Report') }}
              </button>
              <button type="button" @click="resetFilters" class="btn btn-secondary ml-2">
                <i class="fas fa-undo"></i>
                {{ $t('Reset') }}
              </button>
              <button v-if="reportData" type="button" @click="downloadPDF" class="btn btn-danger ml-2">
                <i class="fas fa-file-pdf"></i>
                {{ $t('Export PDF') }}
              </button>
              <button v-if="reportData" type="button" @click="downloadExcel" class="btn btn-success ml-2">
                <i class="fas fa-file-excel"></i>
                {{ $t('Export Excel') }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Summary Cards -->
    <div v-if="reportData" class="row">
      <div class="col-lg-3 col-6">
        <div class="small-box bg-success">
          <div class="inner">
            <h3>{{ formatCurrency(summary.total_inflows) }}</h3>
            <p>{{ $t('Total Inflows') }}</p>
          </div>
          <div class="icon">
            <i class="fas fa-arrow-down"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bg-danger">
          <div class="inner">
            <h3>{{ formatCurrency(summary.total_outflows) }}</h3>
            <p>{{ $t('Total Outflows') }}</p>
          </div>
          <div class="icon">
            <i class="fas fa-arrow-up"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box" :class="summary.net_cash_flow >= 0 ? 'bg-info' : 'bg-warning'">
          <div class="inner">
            <h3>{{ formatCurrency(summary.net_cash_flow) }}</h3>
            <p>{{ $t('Net Cash Flow') }}</p>
          </div>
          <div class="icon">
            <i class="fas fa-exchange-alt"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bg-primary">
          <div class="inner">
            <h3>{{ formatCurrency(summary.closing_balance) }}</h3>
            <p>{{ $t('Closing Balance') }}</p>
            <small>{{ $t('Opening') }}: {{ formatCurrency(summary.opening_balance) }}</small>
          </div>
          <div class="icon">
            <i class="fas fa-wallet"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div v-if="reportData" class="row">
      <!-- Cash Flow Trends Line Chart -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Cash Flow Trends Over Time') }}</h3>
          </div>
          <div class="card-body">
            <v-chart v-if="lineChartOptions.series[0].data.length > 0" class="chart" :option="lineChartOptions" style="height: 400px;" />
            <div v-else class="text-center text-muted p-4">
              {{ $t('No data available') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cash Flow by Analytical Account -->
    <div v-if="reportData" class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Inflows by Analytical Account') }}</h3>
          </div>
          <div class="card-body">
            <v-chart v-if="inflowPieChartOptions.series[0].data.length > 0" class="chart" :option="inflowPieChartOptions" style="height: 350px;" />
            <div v-else class="text-center text-muted p-4">
              {{ $t('No data available') }}
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Outflows by Analytical Account') }}</h3>
          </div>
          <div class="card-body">
            <v-chart v-if="outflowPieChartOptions.series[0].data.length > 0" class="chart" :option="outflowPieChartOptions" style="height: 350px;" />
            <div v-else class="text-center text-muted p-4">
              {{ $t('No data available') }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Detailed Breakdown Table -->
    <div v-if="reportData" class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Cash Flow by Analytical Account') }}</h3>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>{{ $t('Analytical Account') }}</th>
                    <th class="text-right">{{ $t('Inflows') }}</th>
                    <th class="text-right">{{ $t('Outflows') }}</th>
                    <th class="text-right">{{ $t('Net Cash Flow') }}</th>
                    <th class="text-right">{{ $t('Inflow Transactions') }}</th>
                    <th class="text-right">{{ $t('Outflow Transactions') }}</th>
                    <th class="text-right">{{ $t('Total Transactions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in reportData" :key="index">
                    <td>
                      <strong v-if="item.analytical_account">{{ item.analytical_account.code }}</strong>
                      <span v-if="item.analytical_account"> - {{ item.analytical_account.name }}</span>
                      <span v-else class="text-muted">-</span>
                    </td>
                    <td class="text-right text-success">
                      <strong>{{ formatCurrency(item.inflows) }}</strong>
                    </td>
                    <td class="text-right text-danger">
                      <strong>{{ formatCurrency(item.outflows) }}</strong>
                    </td>
                    <td class="text-right" :class="item.net_cash_flow >= 0 ? 'text-success' : 'text-danger'">
                      <strong>{{ formatCurrency(item.net_cash_flow) }}</strong>
                    </td>
                    <td class="text-right">{{ item.inflow_transactions }}</td>
                    <td class="text-right">{{ item.outflow_transactions }}</td>
                    <td class="text-right">{{ item.total_transactions }}</td>
                  </tr>
                </tbody>
                <tfoot v-if="reportData.length > 0">
                  <tr>
                    <th>{{ $t('Total') }}</th>
                    <th class="text-right text-success">{{ formatCurrency(summary.total_inflows) }}</th>
                    <th class="text-right text-danger">{{ formatCurrency(summary.total_outflows) }}</th>
                    <th class="text-right" :class="summary.net_cash_flow >= 0 ? 'text-success' : 'text-danger'">
                      {{ formatCurrency(summary.net_cash_flow) }}
                    </th>
                    <th class="text-right">
                      {{ reportData.reduce((sum, item) => sum + item.inflow_transactions, 0) }}
                    </th>
                    <th class="text-right">
                      {{ reportData.reduce((sum, item) => sum + item.outflow_transactions, 0) }}
                    </th>
                    <th class="text-right">
                      {{ reportData.reduce((sum, item) => sum + item.total_transactions, 0) }}
                    </th>
                  </tr>
                </tfoot>
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
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import { LineChart } from "echarts/charts";
import VChart, { THEME_KEY } from "vue-echarts";
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "CashFlowAnalysis",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "vintage",
  },
  data() {
    return {
      loading: false,
      loadingAnalyticalAccounts: false,
      loadingAccounts: false,
      loadingBranches: false,
      reportData: null,
      summary: {},
      timeSeries: [],

      breadcrumbs: [
        {
          name: 'Dashboard',
          url: 'home'
        },
        {
          name: 'Cash Flow Analysis',
          url: ''
        }
      ],
      breadcrumbsCurrent: 'Cash Flow Analysis',

      filters: {
        analyticalAccount: null,
        chartOfAccount: null,
        fromDate: null,
        toDate: null,
        branch: null,
      },

      analyticalAccounts: [],
      chartOfAccounts: [],
      branches: [],

      // Chart options
      lineChartOptions: {
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            let result = params[0].name + '<br/>';
            params.forEach(function(item) {
              result += item.marker + item.seriesName + ': ' + item.value.toFixed(2) + '<br/>';
            });
            return result;
          }
        },
        legend: {
          data: ['Inflows', 'Outflows', 'Net Cash Flow']
        },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value',
          name: 'Amount'
        },
        series: [
          {
            name: 'Inflows',
            type: 'line',
            data: [],
            itemStyle: { color: '#28a745' }
          },
          {
            name: 'Outflows',
            type: 'line',
            data: [],
            itemStyle: { color: '#dc3545' }
          },
          {
            name: 'Net Cash Flow',
            type: 'line',
            data: [],
            itemStyle: { color: '#007bff' }
          }
        ]
      },

      inflowPieChartOptions: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: []
        },
        series: [
          {
            name: 'Inflows',
            type: 'pie',
            radius: '50%',
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },

      outflowPieChartOptions: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: []
        },
        series: [
          {
            name: 'Outflows',
            type: 'pie',
            radius: '50%',
            data: [],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    };
  },

  computed: {
    ...mapGetters({
      appInfo: "appInfo",
    }),
  },

  mounted() {
    this.loadInitialData();
    // Set default date range to last 30 days
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setDate(lastMonth.getDate() - 30);
    this.filters.toDate = today.toISOString().split('T')[0];
    this.filters.fromDate = lastMonth.toISOString().split('T')[0];
  },

  methods: {
    async loadInitialData() {
      await Promise.all([
        this.loadAnalyticalAccounts(),
        this.loadCashBankAccounts(),
        this.loadBranches(),
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
        
        let accounts = [];
        if (response.data && Array.isArray(response.data)) {
          accounts = response.data;
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          accounts = response.data.data;
        } else if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
          accounts = response.data.data;
        }
        
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

    async loadCashBankAccounts() {
      this.loadingAccounts = true;
      try {
        // Get accounts from main_cash_account and main_bank_account routing settings
        const [cashResponse, bankResponse] = await Promise.all([
          axios.get('/api/account-routing-settings/main_cash_account/accounts').catch(() => ({ data: { success: false, data: { accounts: [] } } })),
          axios.get('/api/account-routing-settings/main_bank_account/accounts').catch(() => ({ data: { success: false, data: { accounts: [] } } }))
        ]);

        let allAccounts = [];

        // Get cash accounts
        if (cashResponse.data && cashResponse.data.success && cashResponse.data.data && cashResponse.data.data.accounts) {
          allAccounts = allAccounts.concat(cashResponse.data.data.accounts);
        }

        // Get bank accounts
        if (bankResponse.data && bankResponse.data.success && bankResponse.data.data && bankResponse.data.data.accounts) {
          allAccounts = allAccounts.concat(bankResponse.data.data.accounts);
        }

        // Remove duplicates based on id
        const uniqueAccounts = allAccounts.filter((account, index, self) =>
          index === self.findIndex(a => a.id === account.id)
        );

        // Use display_name from backend if available, otherwise create one
        this.chartOfAccounts = uniqueAccounts.map(account => ({
          ...account,
          display_name: account.display_name || `${account.code || ''} - ${account.name || ''}`
        }));
        
        // Sort: main accounts first, then children
        this.chartOfAccounts.sort((a, b) => {
          if (a.is_main && !b.is_main) return -1;
          if (!a.is_main && b.is_main) return 1;
          return (a.code || '').localeCompare(b.code || '');
        });
      } catch (error) {
        console.error('Error loading cash/bank accounts:', error);
        this.$toast.error('', this.$t('Failed to load cash/bank accounts'));
        this.chartOfAccounts = [];
      } finally {
        this.loadingAccounts = false;
      }
    },

    async loadBranches(search = '') {
      this.loadingBranches = true;
      try {
        const response = await axios.get('/api/branches', {
          params: {
            search: search,
            perPage: 100
          }
        });
        
        let branchesList = [];
        if (response.data && Array.isArray(response.data)) {
          branchesList = response.data;
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          branchesList = response.data.data;
        } else if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
          branchesList = response.data.data;
        }
        
        this.branches = branchesList;
      } catch (error) {
        console.error('Error loading branches:', error);
        this.$toast.error('', this.$t('Failed to load branches'));
        this.branches = [];
      } finally {
        this.loadingBranches = false;
      }
    },

    async searchBranches(search) {
      await this.loadBranches(search);
    },

    async generateReport() {
      this.loading = true;
      try {
        const params = {};
        if (this.filters.analyticalAccount) {
          params.analytical_account_id = this.filters.analyticalAccount;
        }
        if (this.filters.chartOfAccount) {
          params.chart_of_account_id = this.filters.chartOfAccount;
        }
        if (this.filters.fromDate) {
          params.from_date = this.filters.fromDate;
        }
        if (this.filters.toDate) {
          params.to_date = this.filters.toDate;
        }
        if (this.filters.branch) {
          params.branch_id = this.filters.branch;
        }

        const response = await axios.get('/api/reports/cash-flow-analysis', { params });

        if (response.data.success) {
          this.reportData = response.data.data;
          this.summary = response.data.summary;
          this.timeSeries = response.data.time_series || [];

          // Update charts
          this.updateCharts();

          this.$toast.success('', this.$t('Report generated successfully'));
        } else {
          throw new Error(response.data.message || this.$t('Failed to generate report'));
        }
      } catch (error) {
        console.error('Generate report error:', error);
        const errorMessage = error.response?.data?.message || error.message || this.$t('Failed to generate report');
        this.$toast.error('', errorMessage);
      } finally {
        this.loading = false;
      }
    },

    updateCharts() {
      // Update line chart (time series)
      if (this.timeSeries && this.timeSeries.length > 0) {
        const periods = this.timeSeries.map(item => item.period);
        const inflows = this.timeSeries.map(item => parseFloat(item.inflows || 0));
        const outflows = this.timeSeries.map(item => parseFloat(item.outflows || 0));
        const netFlow = this.timeSeries.map(item => parseFloat(item.net_flow || 0));

        this.lineChartOptions.xAxis.data = periods;
        this.lineChartOptions.series[0].data = inflows;
        this.lineChartOptions.series[1].data = outflows;
        this.lineChartOptions.series[2].data = netFlow;
      }

      // Update inflow pie chart
      if (this.reportData && this.reportData.length > 0) {
        const inflowData = this.reportData
          .filter(item => item.inflows > 0)
          .map(item => ({
            name: item.analytical_account ? item.analytical_account.display_name : 'Unknown',
            value: item.inflows
          }));

        this.inflowPieChartOptions.legend.data = inflowData.map(item => item.name);
        this.inflowPieChartOptions.series[0].data = inflowData;

        // Update outflow pie chart
        const outflowData = this.reportData
          .filter(item => item.outflows > 0)
          .map(item => ({
            name: item.analytical_account ? item.analytical_account.display_name : 'Unknown',
            value: item.outflows
          }));

        this.outflowPieChartOptions.legend.data = outflowData.map(item => item.name);
        this.outflowPieChartOptions.series[0].data = outflowData;
      }
    },

    resetFilters() {
      this.filters = {
        analyticalAccount: null,
        chartOfAccount: null,
        fromDate: null,
        toDate: null,
        branch: null,
      };
      this.reportData = null;
      this.summary = {};
      this.timeSeries = [];
      
      // Reset charts
      this.lineChartOptions.xAxis.data = [];
      this.lineChartOptions.series[0].data = [];
      this.lineChartOptions.series[1].data = [];
      this.lineChartOptions.series[2].data = [];
      this.inflowPieChartOptions.series[0].data = [];
      this.outflowPieChartOptions.series[0].data = [];
    },

    downloadPDF() {
      const params = new URLSearchParams();
      if (this.filters.analyticalAccount) {
        params.append('analytical_account_id', this.filters.analyticalAccount);
      }
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      if (this.filters.branch) {
        params.append('branch_id', this.filters.branch);
      }

      window.open(`/cash-flow-analysis/pdf?${params.toString()}`, '_blank');
    },

    downloadExcel() {
      const params = new URLSearchParams();
      if (this.filters.analyticalAccount) {
        params.append('analytical_account_id', this.filters.analyticalAccount);
      }
      if (this.filters.chartOfAccount) {
        params.append('chart_of_account_id', this.filters.chartOfAccount);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      if (this.filters.branch) {
        params.append('branch_id', this.filters.branch);
      }

      window.open(`/cash-flow-analysis/export?${params.toString()}`, '_blank');
    },

    formatCurrency(amount) {
      if (amount === null || amount === undefined) {
        return '0.00';
      }
      return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
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

.small-box {
  border-radius: 0.25rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  display: block;
  margin-bottom: 20px;
  position: relative;
}

.small-box > .inner {
  padding: 10px;
}

.small-box > .small-box-footer {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.8);
  display: block;
  padding: 3px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  z-index: 10;
}

.small-box .icon {
  color: rgba(0, 0, 0, 0.15);
  z-index: 0;
}

.small-box .icon > i {
  font-size: 70px;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: transform 0.3s linear;
}

.small-box:hover .icon > i {
  transform: scale(1.1);
}
</style>

