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

          <!-- Compare Period -->
          <div class="col-md-3">
            <div class="form-group">
              <label>&nbsp;</label>
              <div class="form-check mt-2">
                <input class="form-check-input" type="checkbox" v-model="filters.comparePeriod" id="comparePeriod">
                <label class="form-check-label" for="comparePeriod">
                  {{ $t('Compare with Previous Period') }}
                </label>
              </div>
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
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Summary Cards -->
    <div v-if="reportData" class="row">
      <div class="col-lg-3 col-6">
        <div class="small-box bg-info">
          <div class="inner">
            <h3>{{ formatCurrency(summary.total_amount) }}</h3>
            <p>{{ $t('Total Revenue') }}</p>
          </div>
          <div class="icon">
            <i class="fas fa-money-bill-wave"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bg-success">
          <div class="inner">
            <h3>{{ summary.total_transactions }}</h3>
            <p>{{ $t('Total Transactions') }}</p>
          </div>
          <div class="icon">
            <i class="fas fa-receipt"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6">
        <div class="small-box bg-warning">
          <div class="inner">
            <h3>{{ formatCurrency(summary.average_transaction_size) }}</h3>
            <p>{{ $t('Average Transaction Size') }}</p>
          </div>
          <div class="icon">
            <i class="fas fa-chart-line"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-6" v-if="analytics.growth_rates && analytics.growth_rates.growth_rate !== undefined">
        <div class="small-box" :class="analytics.growth_rates.growth_direction === 'up' ? 'bg-success' : 'bg-danger'">
          <div class="inner">
            <h3>
              <i :class="analytics.growth_rates.growth_direction === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
              {{ Math.abs(analytics.growth_rates.growth_rate) }}%
            </h3>
            <p>{{ $t('Growth Rate') }}</p>
          </div>
          <div class="icon">
            <i class="fas fa-chart-bar"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div v-if="reportData" class="row">
      <!-- Payment Method Distribution Pie Chart -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Payment Method Distribution') }}</h3>
          </div>
          <div class="card-body">
            <v-chart v-if="pieChartOptions.series[0].data.length > 0" class="chart" :option="pieChartOptions" style="height: 400px;" />
            <div v-else class="text-center text-muted p-4">
              {{ $t('No data available') }}
            </div>
          </div>
        </div>
      </div>

      <!-- Trends Over Time Line Chart -->
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Trends Over Time') }}</h3>
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

    <!-- Top Analytical Accounts -->
    <div v-if="reportData && analytics.top_analytical_accounts && analytics.top_analytical_accounts.length > 0" class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Top Performing Analytical Accounts') }}</h3>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>{{ $t('Rank') }}</th>
                    <th>{{ $t('Analytical Account') }}</th>
                    <th class="text-right">{{ $t('Total Amount') }}</th>
                    <th class="text-right">{{ $t('Transactions') }}</th>
                    <th class="text-right">{{ $t('Average') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(account, index) in analytics.top_analytical_accounts" :key="account.analytical_account.id">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <strong>{{ account.analytical_account.code }}</strong> - {{ account.analytical_account.name }}
                    </td>
                    <td class="text-right">{{ formatCurrency(account.total_amount) }}</td>
                    <td class="text-right">{{ account.transaction_count }}</td>
                    <td class="text-right">{{ formatCurrency(account.total_amount / account.transaction_count) }}</td>
                  </tr>
                </tbody>
              </table>
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
            <h3 class="card-title">{{ $t('Detailed Breakdown') }}</h3>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>{{ $t('Analytical Account') }}</th>
                    <th>{{ $t('Payment Method') }}</th>
                    <th class="text-right">{{ $t('Total Amount') }}</th>
                    <th class="text-right">{{ $t('Transactions') }}</th>
                    <th class="text-right">{{ $t('Average') }}</th>
                    <th class="text-right">{{ $t('Percentage') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in reportData" :key="index">
                    <td>
                      <strong v-if="item.analytical_account">{{ item.analytical_account.code }}</strong>
                      <span v-if="item.analytical_account"> - {{ item.analytical_account.name }}</span>
                      <span v-else class="text-muted">-</span>
                    </td>
                    <td>
                      <strong v-if="item.payment_method">{{ item.payment_method.code }}</strong>
                      <span v-if="item.payment_method"> - {{ item.payment_method.name }}</span>
                      <span v-else class="text-muted">-</span>
                    </td>
                    <td class="text-right">{{ formatCurrency(item.total_amount) }}</td>
                    <td class="text-right">{{ item.transaction_count }}</td>
                    <td class="text-right">{{ formatCurrency(item.average_transaction_size) }}</td>
                    <td class="text-right">
                      <span class="badge badge-info">{{ item.percentage }}%</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot v-if="reportData.length > 0">
                  <tr>
                    <th colspan="2">{{ $t('Total') }}</th>
                    <th class="text-right">{{ formatCurrency(summary.total_amount) }}</th>
                    <th class="text-right">{{ summary.total_transactions }}</th>
                    <th class="text-right">{{ formatCurrency(summary.average_transaction_size) }}</th>
                    <th class="text-right">100%</th>
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
  name: "AnalyticalAccountDashboard",
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
      loadingBranches: false,
      reportData: null,
      summary: {},
      analytics: {},

      breadcrumbs: [
        {
          name: 'Dashboard',
          url: 'home'
        },
        {
          name: 'Analytical Account Dashboard',
          url: ''
        }
      ],
      breadcrumbsCurrent: 'Analytical Account Dashboard',

      filters: {
        analyticalAccount: null,
        fromDate: null,
        toDate: null,
        branch: null,
        comparePeriod: false,
      },

      analyticalAccounts: [],
      branches: [],

      // Chart options
      pieChartOptions: {
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
            name: 'Payment Method',
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

      lineChartOptions: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Total Amount', 'Transactions']
        },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: [
          {
            type: 'value',
            name: 'Amount',
            position: 'left'
          },
          {
            type: 'value',
            name: 'Count',
            position: 'right'
          }
        ],
        series: [
          {
            name: 'Total Amount',
            type: 'line',
            data: [],
            yAxisIndex: 0
          },
          {
            name: 'Transactions',
            type: 'line',
            data: [],
            yAxisIndex: 1
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
        if (this.filters.fromDate) {
          params.from_date = this.filters.fromDate;
        }
        if (this.filters.toDate) {
          params.to_date = this.filters.toDate;
        }
        if (this.filters.branch) {
          params.branch_id = this.filters.branch;
        }

        const response = await axios.get('/api/reports/payment-method-analytics', { params });

        if (response.data.success) {
          this.reportData = response.data.data;
          this.summary = response.data.summary;
          this.analytics = response.data.analytics || {};

          // Update pie chart
          this.updatePieChart();
          
          // Update line chart
          this.updateLineChart();

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

    updatePieChart() {
      if (!this.reportData || this.reportData.length === 0) {
        return;
      }

      // Group by payment method
      const paymentMethodMap = {};
      this.reportData.forEach(item => {
        if (item.payment_method) {
          const methodId = item.payment_method.id;
          if (!paymentMethodMap[methodId]) {
            paymentMethodMap[methodId] = {
              name: item.payment_method.name,
              value: 0
            };
          }
          paymentMethodMap[methodId].value += item.total_amount;
        }
      });

      const chartData = Object.values(paymentMethodMap);
      this.pieChartOptions.legend.data = chartData.map(item => item.name);
      this.pieChartOptions.series[0].data = chartData;
    },

    updateLineChart() {
      if (!this.analytics.time_series_data || this.analytics.time_series_data.length === 0) {
        return;
      }

      const periods = this.analytics.time_series_data.map(item => item.period);
      const amounts = this.analytics.time_series_data.map(item => item.total_amount);
      const transactions = this.analytics.time_series_data.map(item => item.transaction_count);

      this.lineChartOptions.xAxis.data = periods;
      this.lineChartOptions.series[0].data = amounts;
      this.lineChartOptions.series[1].data = transactions;
    },

    resetFilters() {
      this.filters = {
        analyticalAccount: null,
        fromDate: null,
        toDate: null,
        branch: null,
        comparePeriod: false,
      };
      this.reportData = null;
      this.summary = {};
      this.analytics = {};
      
      // Reset charts
      this.pieChartOptions.series[0].data = [];
      this.lineChartOptions.xAxis.data = [];
      this.lineChartOptions.series[0].data = [];
      this.lineChartOptions.series[1].data = [];
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



