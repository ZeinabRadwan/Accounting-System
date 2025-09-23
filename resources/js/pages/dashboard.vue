<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="container-fluid">
              <!-- Main row -->
              <div v-if="isDemoMode" class="alert alert-danger">
                <strong class="text-capitalize"
                  ><i class="icon fas fa-ban"></i> Delete buttons are hidden in
                  demo version.</strong
                ><br />
                <strong class="text-capitalize"
                  ><i class="icon fas fa-ban"></i> Demo database will be cleared
                  every two hours.</strong
                ><br />
                <strong class="text-capitalize"
                  ><i class="icon fas fa-ban"></i> Email & SMS notifications are
                  disabled in demo version.</strong
                >
              </div>

              <div
                v-if="$can('account-summery') && dashboardSummery"
                class="row"
              >
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header">
                      <div class="card-header-content">
                        <h3 class="card-title">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          {{ $t(form.summeryType) }}
                          {{ $t("Summary") }}
                        </h3>
                        <div class="card-tools">
                          <select
                            v-model="form.summeryType"
                            @change="getSummery($event)"
                            class="form-control"
                            id="summeryType"
                            name="summeryType"
                          >
                            <option value="today" selected>
                              {{ $t("Today") }}
                            </option>
                            <option value="last_7_days">
                              {{ $t("Last 7 Days") }}
                            </option>
                            <option value="this_month">
                              {{ $t("This Month") }}
                            </option>
                            <option value="this_year">
                              {{ $t("This Year") }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="card-body summary-cards">
                      <div class="row">
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-primary">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.purchaseAmount | withCurrency
                                }}
                              </h3>
                              <p>{{ $t("Purchase") }}</p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-shopping-cart"></i>
                            </div>
                            <router-link
                              :to="{ name: 'purchases.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-light-green">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.purchaseReturnAmount
                                    | withCurrency
                                }}
                              </h3>
                              <p>{{ $t("Debit Notes") }}</p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-undo-alt"></i>
                            </div>
                            <router-link
                              :to="{ name: 'purchaseReturns.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-light-blue">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.salesAmount | withCurrency
                                }}
                              </h3>
                              <p>{{ $t("Sales") }}</p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-chart-line"></i>
                            </div>
                            <router-link
                              :to="{ name: 'invoices.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-green">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.salesReturnAmount
                                    | withCurrency
                                }}
                              </h3>
                              <p>{{ $t("Credit Notes") }}</p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-receipt"></i>
                            </div>
                            <router-link
                              :to="{ name: 'invoiceReturns.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-dark-blue">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.paymentReceived
                                    | withCurrency
                                }}
                              </h3>
                              <p>
                                {{ $t("Client Payment") }}
                              </p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-money-bill-wave"></i>
                            </div>
                            <router-link
                              :to="{ name: 'invoicePayments.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-teal">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.paymentSent | withCurrency
                                }}
                              </h3>
                              <p>{{ $t("Supplier Payment") }}</p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-credit-card"></i>
                            </div>
                            <router-link
                              :to="{ name: 'purchasePayments.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-dark-teal">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.expenseAmount | withCurrency
                                }}
                              </h3>
                              <p>{{ $t("Expense") }}</p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-receipt"></i>
                            </div>
                            <router-link
                              :to="{ name: 'expenses.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-primary">
                            <div class="inner">
                              <h3>
                                {{
                                  dashboardSummery.balanceTransfer
                                    | withCurrency
                                }}
                              </h3>
                              <p>
                                {{ $t("Balance Transfers") }}
                              </p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-exchange-alt"></i>
                            </div>
                            <router-link
                              :to="{ name: 'transferBalances.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-green">
                            <div class="inner">
                              <h3>
                                {{ dashboardSummery.totalStockQuantity }}
                              </h3>
                              <p>
                                {{ $t("Total Stock Quantity") }}
                                <span v-tooltip="$t('Till Now')">
                                  <i class="fas fa-info"></i>
                                </span>
                              </p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-boxes"></i>
                            </div>
                            <router-link
                              :to="{ name: 'inventory.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                        <div class="col-lg-2-4 col-md-4 col-6">
                          <div class="small-box bg-brand-light-green">
                            <div class="inner">
                              <h3>
                                {{ dashboardSummery.totalStockValue }}
                              </h3>
                              <p>
                                {{ $t("Total Stock Value") }}
                                <span v-tooltip="$t('Till Now')">
                                  <i class="fas fa-info"></i>
                                </span>
                              </p>
                            </div>
                            <div class="icon">
                              <i class="fas fa-dollar-sign"></i>
                            </div>
                            <router-link
                              :to="{ name: 'inventory.index' }"
                              class="small-box-footer"
                            >
                              {{ $t("More info") }}
                              <i class="fas fa-arrow-circle-right"></i>
                            </router-link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="$can('top-selling-products') || $can('recent-activities')"
                class="row"
              >
                <div
                  v-if="
                    $can('top-selling-products') &&
                    pieChartOptions.legend.data &&
                    pieChartOptions.legend.data.length > 0
                  "
                  class="col-md-12 col-lg-4"
                >
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        {{ $t("Top Selling Products") }} ({{ year }})
                      </h3>
                    </div>
                    <div class="card-body">
                      <template>
                        <v-chart class="chart" :option="pieChartOptions" />
                      </template>
                    </div>
                  </div>
                </div>
                <div
                  v-if="$can('recent-activities')"
                  class="col-md-12"
                  :class="
                    $can('top-selling-products') &&
                    pieChartOptions.legend.data &&
                    pieChartOptions.legend.data.length > 0
                      ? 'col-lg-8'
                      : 'col-lg-12'
                  "
                >
                  <RecentActivities />
                </div>
              </div>

              <div
                v-if="
                  $can('payment-sent-vs-payment-received') ||
                  $can('top-clients')
                "
                class="row"
              >
                <div
                  v-if="
                    $can('payment-sent-vs-payment-received') &&
                    lineChartOptions.series[0].data &&
                    lineChartOptions.series[0].data.length > 0
                  "
                  class="col-md-12 col-lg-8"
                >
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                        {{ $t("Payment Sent vs Payment Received") }} ({{
                          year
                        }})
                        <a
                          href="#"
                          class="badge badge-info ml-2"
                          v-tooltip="
                            $t(
                              'Payment Sent = Supplier Payment + Loan Payment <br/> Payment Received = Client Payment + Loan Recevied'
                            )
                          "
                        >
                          <i class="fas fa-info"></i>
                        </a>
                      </h3>
                    </div>
                    <div class="card-body">
                      <template>
                        <v-chart
                          class="chart"
                          :option="translatedLineChartOptions"
                        />
                      </template>
                    </div>
                  </div>
                </div>
                <div
                  v-if="$can('top-clients')"
                  class="col-md-12"
                  :class="
                    $can('payment-sent-vs-payment-received')
                      ? 'col-lg-4'
                      : 'col-lg-12'
                  "
                >
                  <TopClients />
                </div>

                <div
                  v-if="
                    $can('sales-vs-purchases') &&
                    barChartOptions.series[0].data &&
                    barChartOptions.series[0].data.length > 0
                  "
                  class="col-md-12 col-lg-8"
                >
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {{ $t("Sales vs Purchases") }} ({{ year }})
                        <a
                          href="#"
                          class="badge badge-info ml-2"
                          v-tooltip="
                            $t(
                              'Monthly sales & purchases after deduction of the cost of return products.'
                            )
                          "
                        >
                          <i class="fas fa-info"></i>
                        </a>
                      </h3>
                    </div>
                    <div class="card-body">
                      <template>
                        <v-chart class="chart" :option="barChartOptions" />
                      </template>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div
                v-if="$can('stock-alert') || $can('sales-vs-purchases')"
                class="row"
              >
                <div v-if="$can('stock-alert')" class="col-md-12 col-lg-6">
                  <StockAlert />
                </div>
          
              </div> -->
            </div>
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
import { use } from "echarts/core";
import "echarts/lib/component/grid";
import { PieChart } from "echarts/charts";
import { BarChart } from "echarts/charts";
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
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  middleware: "auth",
  metaInfo() {
    return { title: this.$t("Dashboard") };
  },
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "vintage",
  },

  data: () => ({
    paymentStatus: null,
    paymentMessage: null,
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Dashboard",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "",
      },
    ],
    form: new Form({
      summeryType: "today",
    }),
    year: new Date().getFullYear(),
    className: "col-lg-4",
    allData: "",
    topClients: "",
    dashboardSummery: "",
    loading: false,

    // options for pie chart(Top selling products)
    pieChartOptions: {
      responsive: true,
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "#33A0D9",
        borderWidth: 2,
        textStyle: {
          color: "#1b3c71",
          fontSize: 13,
          fontWeight: "600",
        },
        formatter: function (params) {
          return `<div style="padding: 8px;">
            <div style="font-weight: 700; color: #1b3c71; margin-bottom: 4px;">${params.name}</div>
            <div style="color: #33A0D9; font-size: 16px; font-weight: 600;">${params.value}</div>
            <div style="color: #666; font-size: 12px;">${params.percent}% of total</div>
          </div>`;
        },
        extraCssText:
          "border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);",
      },
      legend: {
        orient: "vertical",
        left: "left",
        top: "center",
        itemGap: 16,
        textStyle: {
          color: "#1b3c71",
          fontSize: 12,
          fontWeight: "600",
          lineHeight: 18,
        },
        itemWidth: 12,
        itemHeight: 12,
        formatter: function (name) {
          return name.length > 15 ? name.substring(0, 15) + "..." : name;
        },
      },
      series: [
        {
          name: "Top Selling Products",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["65%", "50%"],
          data: [],
          itemStyle: {
            borderRadius: 8,
            borderColor: "#fff",
            borderWidth: 3,
            shadowBlur: 8,
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 15,
              shadowOffsetX: 0,
              shadowOffsetY: 4,
              shadowColor: "rgba(51, 160, 217, 0.4)",
              scale: 1.05,
            },
            label: {
              show: true,
              fontSize: 14,
              fontWeight: "700",
              color: "#1b3c71",
              formatter: "{b}\n{d}%",
            },
          },
          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function () {
            return Math.random() * 200;
          },
        },
      ],
      color: [
        "#33A0D9", // Primary blue
        "#2AB930", // Green
        "#1B3C71", // Dark blue
        "#449EAE", // Teal
        "#377578", // Dark teal
        "#EBF6FC", // Light blue
        "#F6FEF4", // Light green
        "#FF6B6B", // Coral
        "#4ECDC4", // Mint
        "#45B7D1", // Sky blue
      ],
    },

    // options for line chart(payment sent & receive)
    lineChartOptions: {
      responsive: true,
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "#33A0D9",
        borderWidth: 2,
        textStyle: {
          color: "#1b3c71",
          fontSize: 13,
          fontWeight: "600",
        },
        formatter: function (params) {
          let result = `<div style="padding: 12px; font-weight: 600; color: #1b3c71; margin-bottom: 8px;">${params[0].axisValue}</div>`;
          params.forEach(function (item) {
            const color = item.color;
            const value = item.value;
            const name = item.seriesName;
            result += `<div style="display: flex; align-items: center; margin-bottom: 6px;">
              <span style="display: inline-block; width: 12px; height: 12px; background: ${color}; border-radius: 50%; margin-right: 8px;"></span>
              <span style="color: #64748b; font-size: 12px; margin-right: 8px;">${name}:</span>
              <span style="color: #1b3c71; font-weight: 700; font-size: 14px;">${value}</span>
            </div>`;
          });
          return result;
        },
        extraCssText:
          "border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);",
      },
      legend: {
        data: ["Payment Sent", "Payment Received"],
        top: "top",
        left: "center",
        itemGap: 30,
        textStyle: {
          color: "#1b3c71",
          fontSize: 13,
          fontWeight: "600",
        },
        itemWidth: 14,
        itemHeight: 14,
        formatter: function (name) {
          return name;
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "8%",
        top: "15%",
        containLabel: true,
        backgroundColor: "transparent",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [],
        axisLine: {
          lineStyle: {
            color: "#e2e8f0",
            width: 2,
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#64748b",
          fontSize: 11,
          fontWeight: "500",
          margin: 12,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#64748b",
          fontSize: 11,
          fontWeight: "500",
          formatter: function (value) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
        splitLine: {
          lineStyle: {
            color: "#f1f5f9",
            type: "dashed",
            width: 1,
          },
        },
      },
      series: [
        {
          name: "Payment Sent",
          type: "line",
          smooth: true,
          data: [],
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            width: 3,
            shadowBlur: 8,
            shadowColor: "rgba(27, 60, 113, 0.3)",
          },
          itemStyle: {
            color: "#1B3C71",
            borderColor: "#ffffff",
            borderWidth: 3,
            shadowBlur: 4,
            shadowColor: "rgba(27, 60, 113, 0.2)",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowColor: "rgba(27, 60, 113, 0.4)",
              scale: 1.2,
            },
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(27, 60, 113, 0.3)" },
                { offset: 1, color: "rgba(27, 60, 113, 0.05)" },
              ],
            },
          },
        },
        {
          name: "Payment Received",
          type: "line",
          smooth: true,
          data: [],
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            width: 3,
            shadowBlur: 8,
            shadowColor: "rgba(51, 160, 217, 0.3)",
          },
          itemStyle: {
            color: "#33A0D9",
            borderColor: "#ffffff",
            borderWidth: 3,
            shadowBlur: 4,
            shadowColor: "rgba(51, 160, 217, 0.2)",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowColor: "rgba(51, 160, 217, 0.4)",
              scale: 1.2,
            },
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(51, 160, 217, 0.3)" },
                { offset: 1, color: "rgba(51, 160, 217, 0.05)" },
              ],
            },
          },
        },
      ],
      color: ["#1B3C71", "#33A0D9"],
      animation: true,
      animationDuration: 1000,
      animationEasing: "cubicOut",
    },

    // options for bar chart(purcahses vs sales)
    barChartOptions: {
      responsive: true,
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "#33A0D9",
        borderWidth: 2,
        textStyle: {
          color: "#1b3c71",
          fontSize: 13,
          fontWeight: "600",
        },
        formatter: function (params) {
          let result = `<div style="padding: 12px; font-weight: 600; color: #1b3c71; margin-bottom: 8px;">${params[0].axisValue}</div>`;
          params.forEach(function (item) {
            const color = item.color;
            const value = item.value;
            const name = item.seriesName;
            const percentage = (
              (value / (params[0].value + params[1].value)) *
              100
            ).toFixed(1);
            result += `<div style="display: flex; align-items: center; margin-bottom: 6px;">
              <span style="display: inline-block; width: 12px; height: 12px; background: ${color}; border-radius: 50%; margin-right: 8px;"></span>
              <span style="color: #64748b; font-size: 12px; margin-right: 8px;">${name}:</span>
              <span style="color: #1b3c71; font-weight: 700; font-size: 14px;">${value}</span>
              <span style="color: #33A0D9; font-size: 11px; margin-left: 8px;">(${percentage}%)</span>
            </div>`;
          });
          return result;
        },
        extraCssText:
          "border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);",
      },
      legend: {
        data: ["Purchases", "Sales"],
        top: "top",
        left: "center",
        itemGap: 30,
        textStyle: {
          color: "#1b3c71",
          fontSize: 13,
          fontWeight: "600",
        },
        itemWidth: 14,
        itemHeight: 14,
        formatter: function (name) {
          return name;
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "8%",
        top: "15%",
        containLabel: true,
        backgroundColor: "transparent",
      },
      xAxis: {
        type: "category",
        data: [],
        axisLine: {
          lineStyle: {
            color: "#e2e8f0",
            width: 2,
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#64748b",
          fontSize: 11,
          fontWeight: "500",
          margin: 12,
        },
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#64748b",
          fontSize: 11,
          fontWeight: "500",
          formatter: function (value) {
            return value >= 1000 ? value / 1000 + "k" : value;
          },
        },
        splitLine: {
          lineStyle: {
            color: "#f1f5f9",
            type: "dashed",
            width: 1,
          },
        },
      },
      series: [
        {
          name: "Purchases",
          type: "bar",
          data: [],
          barWidth: "60%",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#1B3C71" },
                { offset: 1, color: "#2a4a6b" },
              ],
            },
            borderRadius: [4, 4, 0, 0],
            shadowBlur: 4,
            shadowColor: "rgba(27, 60, 113, 0.2)",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowColor: "rgba(27, 60, 113, 0.4)",
              shadowOffsetY: 2,
            },
          },
          animationDelay: function (idx) {
            return idx * 100;
          },
        },
        {
          name: "Sales",
          type: "bar",
          data: [],
          barWidth: "60%",
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#33A0D9" },
                { offset: 1, color: "#2a8bc7" },
              ],
            },
            borderRadius: [4, 4, 0, 0],
            shadowBlur: 4,
            shadowColor: "rgba(51, 160, 217, 0.2)",
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowColor: "rgba(51, 160, 217, 0.4)",
              shadowOffsetY: 2,
            },
          },
          animationDelay: function (idx) {
            return idx * 100 + 50;
          },
        },
      ],
      color: ["#1B3C71", "#33A0D9"],
      animation: true,
      animationDuration: 1000,
      animationEasing: "cubicOut",
    },
  }),

  mounted() {
    // to show payment status
    const urlParams = new URLSearchParams(window.location.search);
    this.paymentStatus = urlParams.get("payment_status");
    this.paymentMessage = urlParams.get("message");
    if (this.paymentStatus && this.paymentMessage) {
      this.showPaymentNotification(this.paymentStatus, this.paymentMessage);
    }
  },

  created() {
    this.loading = true;
    if (this.$can("account-summery")) {
      this.getSummery();
    }
    if (this.$can("top-selling-products")) {
      this.getTopSellingProducts();
    }
    if (this.$can("payment-sent-vs-payment-received")) {
      this.getMonthlySentAndReceived();
    }
    if (this.$can("top-clients")) {
      this.getTopClients();
    }
    if (this.$can("sales-vs-purchases")) {
      this.getMonthlySalesAndPurchases();
    }
    this.loading = false;
  },

  computed: {
    // Computed property for line chart options with translations
    translatedLineChartOptions() {
      return {
        ...this.lineChartOptions,
        legend: {
          data: [this.$t("Payment Sent"), this.$t("Payment Received")],
        },
        series: [
          {
            name: this.$t("Payment Sent"),
            type: "line",
            smooth: true,
            data: this.lineChartOptions.series[0].data,
          },
          {
            name: this.$t("Payment Received"),
            type: "line",
            smooth: true,
            data: this.lineChartOptions.series[1].data,
          },
        ],
      };
    },
  },

  methods: {
    showPaymentNotification(status, message) {
      if (status === "success") {
        toast.fire({
          type: "success",
          title: message,
        });
      } else if (status === "cancelled") {
        toast.fire({
          type: "error",
          title: message,
        });
      }
    },

    // get summery
    async getSummery(event) {
      let summerType = "Today";
      if (event) {
        summerType = event.target.value;
      }
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard-summery/" + summerType
      );
      this.dashboardSummery = data;
    },

    // get top-selling products
    async getTopSellingProducts() {
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/top-selling-products"
      );
      this.pieChartOptions.legend.data = data.names;
      this.pieChartOptions.series[0].data = data.products;
    },

    // get top clients
    async getTopClients() {
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/top-clients"
      );
      this.topClients = data;
    },

    // get monthly sent & received
    async getMonthlySentAndReceived() {
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/monthly-payment-sent-received"
      );
      this.lineChartOptions.xAxis.data = data.months;
      this.lineChartOptions.series[0].data = data.sent;
      this.lineChartOptions.series[1].data = data.received;
    },

    // get monthly sales & purchases
    async getMonthlySalesAndPurchases() {
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/monthly-sales-purchases"
      );
      this.barChartOptions.xAxis.data = data.months;
      this.barChartOptions.series[0].data = data.purchase;
      this.barChartOptions.series[1].data = data.sales;
    },
  },
};
</script>
<style scoped>
.chart {
  height: 400px;
  padding: 20px;
}

/* Professional chart styling */
.card .chart {
  position: relative;
  overflow: hidden;
}

/* Enhanced styling for Payment Sent vs Payment Received chart */
.col-lg-8 .card .chart {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* Enhanced styling for Sales vs Purchases chart */
.col-lg-6 .card .chart {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* Professional chart loading state for line chart */
.col-lg-8 .chart.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
}

.col-lg-8 .chart.loading::after {
  content: "";
  width: 40px;
  height: 40px;
  border: 3px solid #33a0d9;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Professional chart loading state for bar chart */
.col-lg-6 .chart.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
}

.col-lg-6 .chart.loading::after {
  content: "";
  width: 40px;
  height: 40px;
  border: 3px solid #33a0d9;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Professional chart loading state */
.chart.loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart.loading::after {
  content: "";
  width: 40px;
  height: 40px;
  border: 3px solid #33a0d9;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Chart hover effects */
.card:hover .chart {
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Professional chart title styling */
.card-header h3 {
  position: relative;
}


.card {
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #ced4da;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #ced4da;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #ced4da;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Custom Status Badge Styling */
.badge.bg-success {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.badge.bg-danger {
  background: #fef4f4 !important;
  color: #dc3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Search Input Background Override */
.form-control {
  background: #fff !important;
}

/* Create Button Styling */
.btn-primary {
  background: #2ab930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}

/* Small box styling updates */
.small-box {
  border-radius: 20px;
  box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.small-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 20px 20px 0 0;
}

.small-box:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.15);
}

.small-box .inner {
  position: relative;
  z-index: 2;
}

.small-box .inner h3 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
  line-height: 1.1;
}

.small-box .inner p {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  opacity: 0.9;
  letter-spacing: 0.3px;
}

.small-box .icon {
  font-size: 3rem;
  opacity: 0.15;
  position: absolute;
  right: 18px;
  top: 18px;
  transition: all 0.3s ease;
  z-index: 1;
}

.small-box:hover .icon {
  opacity: 0.25;
  transform: scale(1.1);
}

.small-box-footer {
  background: rgba(0, 0, 0, 0.08);
  color: inherit;
  padding: 12px 18px;
  text-decoration: none;
  display: block;
  border-radius: 0 0 20px 20px;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
}

.small-box-footer:hover {
  background: rgba(0, 0, 0, 0.15);
  color: inherit;
  text-decoration: none;
  transform: translateY(-1px);
}

/* Card header styling */
.card-header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.card-header h3 {
  color: #023033;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* RTL support for card header */
[dir="rtl"] .card-header-content {
  flex-direction: row-reverse;
}


[dir="rtl"] .card-header h3 svg {
  margin-right: 0;
  margin-left: 12px;
}

/* SVG Icon styling in card header */
.card-header h3 svg {
  width: 44px;
  height: 44px;
  background: #33a0d91a;
  color: #33a0d9;
  border-radius: 10px;
  padding: 8px;
  margin-right: 12px;
  font-weight: bold;
  box-sizing: border-box;
}

/* RTL support for SVG icon */
[dir="rtl"] .card-header h3 svg {
  margin-right: 0;
  margin-left: 12px;
}

/* RTL support for small-box icon positioning */
[dir="rtl"] .small-box .icon {
  right: auto;
  left: 18px;
}

.card-header .card-tools {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* RTL support for card tools */
[dir="rtl"] .card-header .card-tools {
  flex-direction: row-reverse;
}

.card-header .card-tools .form-control {
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding: 8px 12px;
  font-size: 0.875rem;
}

/* Styles for the new select dropdown position */
.card-header .d-flex .form-control {
  border-radius: 10px;
  border: 1px solid #ced4da;
  padding: 8px 12px;
  font-size: 0.875rem;
}

/* Alert styling */
.alert {
  border-radius: 15px;
  border: none;
  box-shadow: 0px 4px 10px 0px #0000000a;
  margin-bottom: 20px;
}

.alert-danger {
  background: #fef4f4;
  color: #dc3545;
  border-left: 4px solid #dc3545;
}

/* Chart card styling */
.card .card-header {
  background: white;
  border-bottom: 1px solid #ced4da;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card .card-body {
  background: white;
}

/* Badge info styling */
.badge.badge-info {
  background: #e3f2fd !important;
  color: #1976d2 !important;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
  padding: 4px 8px;
  border-radius: 6px;
}

/* Custom 5-column layout for summary cards */
.col-lg-2-4 {
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 8px;
  margin-bottom: 24px;
}

/* Professional spacing for summary cards row */
.summary-cards .row {
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

/* Brand color variations for summary cards */
.small-box.bg-brand-primary {
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  color: white;
  border: 1px solid rgba(51, 160, 217, 0.3);
}

.small-box.bg-brand-primary .inner {
  background: transparent;
}

.small-box.bg-brand-primary .inner h3,
.small-box.bg-brand-primary .inner p {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.small-box.bg-brand-primary .icon {
  color: rgba(235, 246, 252, 0.8);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.small-box.bg-brand-light-blue {
  background: linear-gradient(135deg, #ebf6fc 0%, #d6edf7 100%);
  color: #1b3c71;
  border: 1px solid rgba(235, 246, 252, 0.5);
}

.small-box.bg-brand-light-blue .inner {
  background: transparent;
}

.small-box.bg-brand-light-blue .inner h3,
.small-box.bg-brand-light-blue .inner p {
  color: #1b3c71;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.small-box.bg-brand-light-blue .icon {
  color: #33a0d9;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.small-box.bg-brand-green {
  background: linear-gradient(135deg, #2ab930 0%, #239a26 100%);
  color: white;
  border: 1px solid rgba(42, 185, 48, 0.3);
}

.small-box.bg-brand-green .inner {
  background: transparent;
}

.small-box.bg-brand-green .inner h3,
.small-box.bg-brand-green .inner p {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.small-box.bg-brand-green .icon {
  color: rgba(246, 254, 244, 0.8);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.small-box.bg-brand-light-green {
  background: linear-gradient(135deg, #f6fef4 0%, #e8f5e8 100%);
  color: #1b3c71;
  border: 1px solid rgba(246, 254, 244, 0.5);
}

.small-box.bg-brand-light-green .inner {
  background: transparent;
}

.small-box.bg-brand-light-green .inner h3,
.small-box.bg-brand-light-green .inner p {
  color: #1b3c71;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
}

.small-box.bg-brand-light-green .icon {
  color: #2ab930;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.small-box.bg-brand-dark-blue {
  background: linear-gradient(135deg, #1b3c71 0%, #152a4a 100%);
  color: white;
  border: 1px solid rgba(27, 60, 113, 0.3);
}

.small-box.bg-brand-dark-blue .inner {
  background: transparent;
}

.small-box.bg-brand-dark-blue .inner h3,
.small-box.bg-brand-dark-blue .inner p {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.small-box.bg-brand-dark-blue .icon {
  color: rgba(235, 246, 252, 0.8);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.small-box.bg-brand-teal {
  background: linear-gradient(135deg, #449eae 0%, #3a8a98 100%);
  color: white;
  border: 1px solid rgba(68, 158, 174, 0.3);
}

.small-box.bg-brand-teal .inner {
  background: transparent;
}

.small-box.bg-brand-teal .inner h3,
.small-box.bg-brand-teal .inner p {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.small-box.bg-brand-teal .icon {
  color: rgba(235, 246, 252, 0.8);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.small-box.bg-brand-dark-teal {
  background: linear-gradient(135deg, #377578 0%, #2d5f61 100%);
  color: white;
  border: 1px solid rgba(55, 117, 120, 0.3);
}

.small-box.bg-brand-dark-teal .inner {
  background: transparent;
}

.small-box.bg-brand-dark-teal .inner h3,
.small-box.bg-brand-dark-teal .inner p {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.small-box.bg-brand-dark-teal .icon {
  color: rgba(235, 246, 252, 0.8);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* Professional animations and micro-interactions */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.small-box {
  animation: fadeInUp 0.8s ease-out;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.small-box:nth-child(1) {
  animation: slideInLeft 0.8s ease-out;
  animation-delay: 0.1s;
}
.small-box:nth-child(2) {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 0.2s;
}
.small-box:nth-child(3) {
  animation: slideInRight 0.8s ease-out;
  animation-delay: 0.3s;
}
.small-box:nth-child(4) {
  animation: scaleIn 0.8s ease-out;
  animation-delay: 0.4s;
}
.small-box:nth-child(5) {
  animation: slideInLeft 0.8s ease-out;
  animation-delay: 0.5s;
}
.small-box:nth-child(6) {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 0.6s;
}
.small-box:nth-child(7) {
  animation: slideInRight 0.8s ease-out;
  animation-delay: 0.7s;
}
.small-box:nth-child(8) {
  animation: scaleIn 0.8s ease-out;
  animation-delay: 0.8s;
}
.small-box:nth-child(9) {
  animation: slideInLeft 0.8s ease-out;
  animation-delay: 0.9s;
}
.small-box:nth-child(10) {
  animation: fadeInUp 0.8s ease-out;
  animation-delay: 1s;
}

/* Enhanced hover effects */
.small-box:hover::before {
  height: 6px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.2)
  );
}

.small-box:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.small-box:hover .icon {
  animation: bounce 0.6s ease-in-out;
  transform: scale(1.1);
}

.small-box:hover .inner h3 {
  animation: pulse 0.6s ease-in-out;
}

.small-box .icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.small-box .inner h3 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Professional focus states */
.small-box:focus-within {
  outline: 2px solid rgba(51, 160, 217, 0.5);
  outline-offset: 2px;
}

/* Equal height cards for dashboard rows */
.row {
  display: flex;
  flex-wrap: wrap;
}

.row > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.row > [class*="col-"] > .card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.row > [class*="col-"] > .card > .card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Specific height for first row (Top Selling Products + Recent Activities) */
.row:nth-of-type(2) .card {
  min-height: 500px;
}

/* Specific height for second row (Payment Sent vs Payment Received + Top 5 Clients) */
.row:nth-of-type(3) .card {
  min-height: 450px;
}

/* Specific height for third row (Stock Alert + Sales vs Purchases) */
.row:nth-of-type(4) .card {
  min-height: 400px;
}

/* Ensure chart containers take full height */
.chart {
  flex: 1;
  min-height: 300px;
}

/* Responsive adjustments for equal height cards */
@media (max-width: 991.98px) {
  .row > [class*="col-"] {
    margin-bottom: 1rem;
  }

  .row:nth-of-type(2) .card,
  .row:nth-of-type(3) .card,
  .row:nth-of-type(4) .card {
    min-height: auto;
  }
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .col-lg-2-4 {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

@media (max-width: 992px) {
  .col-lg-2-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

@media (max-width: 768px) {
  .col-lg-2-4 {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 4px;
    margin-bottom: 16px;
  }

  .small-box .inner h3 {
    font-size: 1.8rem;
  }

  .small-box .inner p {
    font-size: 0.9rem;
  }

  .small-box .icon {
    font-size: 2.5rem;
    right: 14px;
    top: 14px;
  }


  .small-box-footer {
    padding: 10px 14px;
    font-size: 0.8rem;
  }

  .card {
    margin-top: 20px;
  }
}

@media (max-width: 576px) {
  .col-lg-2-4 {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 8px;
    margin-bottom: 16px;
  }

  .small-box .inner h3 {
    font-size: 1.6rem;
  }

  .small-box .icon {
    font-size: 2.2rem;
  }
}

/* Professional chart hover effects */
.col-lg-8 .card:hover .chart {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.col-lg-6 .card:hover .chart {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}



/* Responsive chart styling */
@media (max-width: 992px) {
  .chart {
    height: 350px;
    padding: 15px;
  }

  .col-lg-8 .card .chart {
    padding: 20px;
  }

  .col-lg-6 .card .chart {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .chart {
    height: 300px;
    padding: 12px;
  }

  .col-lg-8 .card .chart {
    padding: 16px;
  }

  .col-lg-6 .card .chart {
    padding: 16px;
  }



}

@media (max-width: 576px) {
  .chart {
    height: 280px;
    padding: 10px;
  }

  .col-lg-8 .card .chart {
    padding: 12px;
  }

  .col-lg-6 .card .chart {
    padding: 12px;
  }
}
.card .card-body {
  background: none;
}
</style>
