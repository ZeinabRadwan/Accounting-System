<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <DetailsActivityTabs
      v-if="allData"
      default-tab="details"
      @details-clicked="getAdjustment"
      @activity-clicked="getActivity"
    >
      <template #actions>
        <div class="btn-group">
            <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <router-link v-if="$can('adjustment-edit')" :to="{
              name: 'adjustments.edit',
              params: { slug: allData.slug },
            }" class="btn btn-info">
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link :to="{ name: 'adjustments.index' }" class="btn btn-info float-right">
              <template
                v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

              </template>

              <template v-else>

                <template
                  v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                  {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                </template>


                <template v-else>


                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                </template>

              </template>
            </router-link>
          </div>
        </template>

      <template #details>
        <div class="row">
          <!-- Main content -->
          <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                <CompanyInfo />
              </div>
              <!-- /.col -->
              <div class="col-sm-8 invoice-col float-right text-md-right">
                <h5>
                  {{ $t("Adjustment Details") }}
                </h5>
                <strong>{{ $t("Reason") }}:</strong> {{ allData.reason
                }}<br />
                <strong>{{ $t("Created By") }}:</strong>
                {{ allData.createdBy }}<br />
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row mt-2">
              <div class="col-12">
                <div class="table-responsive table-custom mt-3">
                  <table class="table adjustments-table">
                    <thead>
                      <tr>
                        <th v-if="allData.code">
                          {{ $t("Adjustment No") }}
                        </th>
                        <th v-if="allData.reason">{{ $t("Reason") }}</th>
                        <th v-if="allData.date">{{ $t("Date") }}</th>
                        <th v-if="allData.note">{{ $t("Note") }}</th>
                        <th>{{ $t("Status") }}</th>
                        <th class="text-right">
                          {{ $t("Created By") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td v-if="allData.code">
                          {{ allData.code | withPrefix(adjustmentPrefix) }}
                        </td>
                        <td v-if="allData.reason">{{ allData.reason }}</td>
                        <td v-if="allData.date">
                          {{ allData.date | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.note">{{ allData.note }}</td>
                        <td>
                          <span v-if="allData.status === 1" class="badge bg-success">{{ $t("Active") }}</span>
                          <span v-else class="badge bg-danger">{{
                            $t("Inactive")
                          }}</span>
                        </td>
                        <td class="text-right">{{ allData.createdBy }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Table row -->
            <div class="row mb-3 mt-3">
              <div class="col-12">
                <strong class="mt-4 mb-2 d-block">{{ $t("Adjustment Reason") }}:</strong>
                <div class="table-responsive table-custom mt-3">
                  <GeneralTable
                    :columns="adjustedProductsColumns"
                    :rows="adjustedProductsRows"
                    :loading="loading"
                    wrapper-class=""
                  >
                    <template #cell-code="{ value }">
                      {{ value | withPrefix(productPrefix) }}
                    </template>
                    <template #cell-purchasePrice="{ value }">
                      {{ value }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-adjustmentType="{ value }">
                      <span v-if="value === $t('Increment')" class="badge badge-primary">{{ value }}</span>
                      <span v-else class="badge badge-danger">{{ value }}</span>
                    </template>
                  </GeneralTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #activity-log>
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success">
                  <i class="fas fa-sync"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="loading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div v-show="items.length > 0" v-for="(data, i) in items" :key="i">
                <div class="card mb-0 border border-gray">
                  <div class="card-body py-1">
                    <div class="row">
                      <div class="col-1 d-flex justify-content-center align-items-center">
                        <i v-if="data.event == 'Update'" class="fa fa-magic" aria-hidden="true"></i>
                        <i v-if="data.event == 'Create'" class="fa fa-plus-circle" aria-hidden="true"></i>
                        <i v-if="data.event == 'Delete'" class="fa fa-trash" aria-hidden="true"></i>
                      </div>
                      <div class="col-11">
                        <div class="row">
                          <div class="col-12">
                            <p class="text-bold mb-0">{{ data.causer_name }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ data.description }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ data.performedAt }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center" v-show="!loading && !items.length">
                <EmptyTable />
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
      </template>
    </DetailsActivityTabs>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import html2pdf from "html2pdf.js";
import GeneralTable from "~/components/GeneralTable";
import DetailsActivityTabs from "~/components/DetailsActivityTabs";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Adjustment Details") };
  },
  components: {
    GeneralTable,
    DetailsActivityTabs,
  },
  data: () => ({
    breadcrumbsCurrent: "Adjustment Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Adjustments",
        url: "adjustments.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allData: "",
    adjustedProducts: [],
    productPrefix: "",
    adjustmentPrefix: "",
    query: "",
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),

    // Adjusted products columns
    adjustedProductsColumns() {
      return [
        { key: "index", label: this.$t("#"), align: "text-center" },
        { key: "code", label: this.$t("Code"), align: "text-center" },
        { key: "name", label: this.$t("Name"), align: "text-center" },
        { key: "purchasePrice", label: this.$t("Purchase Price"), align: "text-center" },
        { key: "quantity", label: this.$t("Quantity"), align: "text-center" },
        { key: "adjustmentType", label: this.$t("Adjustment Type"), align: "text-right" },
      ];
    },

    // Adjusted products rows
    adjustedProductsRows() {
      if (!this.adjustedProducts || this.adjustedProducts.length === 0) return [];
      return this.adjustedProducts.map((product, index) => ({
        index: index + 1,
        code: product.productCode,
        name: product.productName,
        purchasePrice: product.avgPurchasePrice,
        quantity: `${product.type == 1 ? '+' : '-'}${product.quantity} ${product.productUnit}`,
        adjustmentType: product.type == 1 ? this.$t("Increment") : this.$t("Decrement"),
        _raw: product,
      }));
    },
  },

  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchData();
      }
    },
  },

  created() {
    this.getAdjustment();
    this.productPrefix = this.appInfo.productPrefix;
    this.adjustmentPrefix = this.appInfo.adjustmentPrefix;
  },
  methods: {
    // get the adjustment
    async getAdjustment() {
      const { data } = await axios.get(
        window.location.origin +
        "/api/inventory-adjustments/" +
        this.$route.params.slug
      );
      this.allData = data.data;
      this.adjustedProducts = this.allData.adjustmentProducts;
      this.adjustedProducts.sort(this.sortProducts);
    },

    sortProducts(a, b) {
      if (a.productCode < b.productCode) {
        return -1;
      }
      if (a.productCode > b.productCode) {
        return 1;
      }
      return 0;
    },

    // print
    printWindow() {
      window.print();
    },

    // download pdf
    generatePDF() {
      // Get the HTML content to be converted
      const element = document.getElementById("content-to-pdf");
      // Options for PDF generation
      const options = {
        margin: 5,
        filename: "Adjustment-" + this.$route.params.slug + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        pagebreak: { mode: "avoid-all", before: "#page-break" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };
      // Generate PDF from HTML content
      html2pdf().from(element).set(options).save();
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // get activity logs
    async getActivity() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "InventoryAdjustment";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
        slug: slug,
        modelName: modelName,
      });
    },

    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "InventoryAdjustment";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: this.pagination.current_page + "&perPage=" + this.perPage,
        term: this.query,
        slug: slug,
        modelName: modelName,
      });
    },

    // pagination
    async paginate() {
      this.getActivity();
    },

    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getActivity() : this.searchData();
    },

    // reload after search
    async reload() {
      this.query = "";
    },

    // refresh table
    async refreshTable() {
      this.query = "";
      if (this.pagination) {
        this.pagination.current_page = 1;
      }
      this.query === "" ? await this.getActivity() : await this.searchData();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },
  },
};
</script>
<style scoped>
.table-custom {
  border: none !important;
}

.adjustments-table {
  border-collapse: separate;
  border-spacing: 0;
}

.adjustments-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.adjustments-table thead tr {
  border: none !important;
}

.adjustments-table thead th:first-child {
  border-top-left-radius: 10px;
}

.adjustments-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .adjustments-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .adjustments-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Custom Status Badge Styling */
.adjustments-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.adjustments-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.adjustments-table .badge.badge-primary {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.adjustments-table .badge.badge-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}
</style>
