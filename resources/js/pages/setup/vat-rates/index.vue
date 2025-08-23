<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-12 col-xl-3">
        <SettingsSidebar />
      </div>
      <div class="col-12 col-xl-9">
        <div class="card">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Tax Rates") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group">
                <a href="/setup/vat-rates/pdf" v-tooltip="$t('Export Table')" class="btn btn-secondary">
                  <i class="fas fa-file-export"></i>
                </a>
                <a @click="print" v-tooltip="$t('Print Table')" class="btn btn-info">
                  <i class="fas fa-print"></i>
                </a>
                <router-link :to="{ name: 'vatRates.create' }" class="btn btn-primary">
                  {{ $t("Create") }}
                  <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-md-6">
                <div class="alert alert-info" role="alert">
                  <i class="fas fa-info-circle"></i>
                  <strong>{{ $t("VAT Chart of Accounts") }}:</strong>
                  {{ $t("Connect VAT rates to chart of accounts for proper journal entries") }}
                </div>
              </div>
              <div class="col-md-6 text-right">
                <button @click="checkConnections" class="btn btn-warning btn-sm">
                  <i class="fas fa-check-circle"></i> {{ $t("Check Connections") }}
                </button>
              </div>
            </div>
            <search class="col-md-12" v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
            <div class="col-md-12">
              <table-loading v-show="loading" />
              <div class="table-responsive table-custom mt-3" id="printMe">
                <table class="table">
                  <thead>
                    <tr>
                      <th>{{ $t("#") }}</th>
                      <th>{{ $t("Name") }}</th>
                      <th>{{ $t("Short Code") }}</th>
                      <th>{{ $t("Rate") }}</th>
                      <th>{{ $t("Chart of Accounts") }}</th>
                      <th>{{ $t("Status") }}</th>
                      <th class="text-right no-print">
                        {{ $t("Action") }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-show="items.length" v-for="(data, i) in items" :key="i">
                      <td>
                        <span v-if="pagination && pagination.current_page > 1">
                          {{
                            pagination.per_page *
                            (pagination.current_page - 1) +
                            (i + 1)
                          }}
                        </span>
                        <span v-else>{{ i + 1 }}</span>
                      </td>
                      <td>{{ data.name }}</td>
                      <td>{{ data.code }}</td>
                      <td>{{ data.rate }}%</td>
                      <td>
                        <div v-if="data.salesVatAccount || data.purchaseVatAccount" class="small">
                          <div v-if="data.salesVatAccount" class="text-success">
                            <i class="fas fa-arrow-up"></i> {{ data.salesVatAccount.name }}
                          </div>
                          <div v-if="data.purchaseVatAccount" class="text-info">
                            <i class="fas fa-arrow-down"></i> {{ data.purchaseVatAccount.name }}
                          </div>
                        </div>
                        <span v-else class="text-muted">
                          <i class="fas fa-exclamation-triangle"></i> {{ $t("Not Connected") }}
                        </span>
                      </td>
                      <td>
                        <span v-if="data.status === 1" class="badge bg-success">{{ $t("Active") }}</span>
                        <span v-else class="badge bg-danger">{{
                          $t("Inactive")
                        }}</span>
                      </td>
                      <td class="text-right no-print">
                        <div class="btn-group">
                          <router-link v-tooltip="$t('Edit')" :to="{
                                name: 'vatRates.edit',
                                params: { slug: data.slug },
                              }" class="btn btn-info btn-sm">
                            <i class="fas fa-edit" />
                          </router-link>
                          <a v-if="appInfo.defaultVatRateSlug !== data.slug" v-tooltip="$t('Delete')" href="#"
                            class="btn btn-danger btn-sm" @click="deleteData(data.slug)">
                            <i class="fas fa-trash" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr v-show="!loading && !items.length">
                      <td colspan="8">
                        <EmptyTable />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t("per_page") }} </label>
                <div>
                  <select @change="updatePerPager" v-model="perPage" class="form-control form-control-sm ml-1">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <!-- pagination-start -->
              <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination" :offset="5"
                class="justify-flex-end" @paginate="paginate" />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Tax Rates") };
  },
  data: () => ({
    breadcrumbsCurrent: "Tax Rates",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Setup",
        url: "setup.index",
      },
      {
        name: "Tax Rates",
        url: "",
      },
    ],
    query: "",
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["items", "loading", "pagination", "appInfo"]),
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        this.getData();
      } else {
        this.searchData();
      }
    },
  },
  created() {
    this.getData();
  },
  methods: {
    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },
    // get data
    async getData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/vat-rates?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
    },

    // Pagination
    async paginate() {
      this.query === "" ? this.getData() : this.searchData();
    },

    // Reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/searchData", {
        term: this.query,
        path: "/api/vat-rates/search/",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
    },

    // Reload after search
    async reload() {
      this.query = "";
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // delete data
    async deleteData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/vat-rates/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                Swal.fire(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully."),
                  "success"
                );
              } else {
                Swal.fire(
                  this.$t("Failed!"),
                  this.$t("There was something wrong."),
                  "warning"
                );
              }
            });
        }
      });
    },

    // check VAT chart of account connections
    async checkConnections() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/vat-rates/check-connections"
        );
        
        const connectionData = data.data;
        const percentage = connectionData.connection_percentage;
        const connected = connectionData.connected_vat_rates;
        const total = connectionData.total_vat_rates;
        const unconnected = connectionData.unconnected_vat_rates;
        
        let message = `<div class="text-left">`;
        message += `<p><strong>Connection Status:</strong> ${percentage}% (${connected}/${total})</p>`;
        
        if (unconnected.length > 0) {
          message += `<p><strong>Unconnected VAT Rates:</strong></p><ul>`;
          unconnected.forEach(vatRate => {
            message += `<li>${vatRate.name} (${vatRate.code})</li>`;
          });
          message += `</ul>`;
        }
        
        message += `</div>`;
        
        Swal.fire({
          title: this.$t("VAT Chart of Account Connections"),
          html: message,
          icon: percentage === 100 ? 'success' : percentage > 50 ? 'warning' : 'error',
          confirmButtonText: this.$t("OK"),
        });
        
        // Refresh data to show updated connections
        this.getData();
        
      } catch (error) {
        console.error('Error checking connections:', error);
        Swal.fire({
          title: this.$t("Error"),
          text: this.$t("Failed to check VAT connections"),
          icon: 'error',
          confirmButtonText: this.$t("OK"),
        });
      }
    },
  },
};
</script>
