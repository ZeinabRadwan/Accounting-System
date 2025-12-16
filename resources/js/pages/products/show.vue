<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between" v-if="allData">
          <div class="btn-group">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="#details"
                  data-toggle="tab"
                  @click="getProduct"
                >
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click="getActivity"
                  class="nav-link"
                  href="#activity-log"
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a
                >
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <router-link
              v-if="$can('product-edit')"
              :to="{
                name: 'products.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'products.index' }"
              class="btn btn-info float-right"
            >
              <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

              </template>

              <template v-else>

                <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                  {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                </template>


                <template v-else>


                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                </template>

              </template>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane active" id="details">
        <div class="row">
          <table-loading v-show="loading" />
          <div
            v-if="!loading"
            class="invoice p-3 mb-3 w-100"
            id="content-to-pdf"
          >
            <div class="row align-items-center flex-row-reverse">
              <div class="col-lg-6">
                <table class="table table-hover table-bordered table-md">
                  <tbody>
                    <tr>
                      <th>{{ $t("Barcode") }}</th>
                      <td>
                        <barcode
                          :format="allData.symbology"
                          width="1"
                          height="25"
                          fontSize="15"
                          :value="allData.code"
                        >
                          {{ $t("Rendering fails.") }}
                        </barcode>
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Item Type") }}</th>
                      <td class="text-capitalize">{{ allData.itemType }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Name") }}</th>
                      <td>{{ allData.name }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Code") }}</th>
                      <td>{{ allData.code | withPrefix(prefix) }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Item Model") }}</th>
                      <td>{{ allData.itemModel }}</td>
                    </tr>
                    <tr>
                      <th>
                        {{ $t("Barcode Symbology") }}
                      </th>
                      <td>{{ allData.symbology }}</td>
                    </tr>
                    <tr v-if="allData.category">
                      <th>{{ $t("Category") }}</th>
                      <td>
                        {{ allData.category.name }} [{{
                          allData.category.code | withPrefix(catPrefix)
                        }}]
                      </td>
                    </tr>
                    <tr v-if="allData.subCategory">
                      <th>{{ $t("Sub Category") }}</th>
                      <td>
                        {{ allData.subCategory.name }} [{{
                          allData.subCategory.code | withPrefix(subCatPrefix)
                        }}]
                      </td>
                    </tr>
                    <tr v-if="allData.itemBrand">
                      <th>{{ $t("Brand") }}</th>
                      <td>{{ allData.itemBrand.name }}</td>
                    </tr>
                    <tr v-if="allData.itemUnit">
                      <th>{{ $t("Unit") }}</th>
                      <td>{{ allData.itemUnit.code }}</td>
                    </tr>
                    <tr v-if="allData.itemTax">
                      <th>{{ $t("Product Tax") }}</th>
                      <td>
                        {{ allData.itemTax.code }}
                        <span
                          v-if="
                            allData.itemTax &&
                            allData.itemTax.groupTaxDetails &&
                            allData.itemTax.groupTaxDetails.length
                          "
                        >
                          (<span
                            v-for="(tax, index) in allData.itemTax
                              .groupTaxDetails"
                            :key="tax.id"
                          >
                            {{ tax.rate }}%<span
                              v-if="
                                index <
                                allData.itemTax.groupTaxDetails.length - 1
                              "
                            >
                              +</span
                            > </span
                          >)
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Tax Type") }}</th>
                      <td>{{ allData.taxType }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Tax Amount") }}</th>
                      <td>{{ allData.taxAmount }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Regular Price") }}</th>
                      <td>{{ allData.regularPrice  }} <span class="saudi-riyal">ê</span></td>
                    </tr>
                    <tr>
                      <th>{{ $t("Discount") }}</th>
                      <td>{{ allData.discount || 0 }} <span class="saudi-riyal">ê</span></td>
                    </tr>
                    <tr>
                      <th>{{ $t("Selling Price") }}</th>
                      <td>
                        <span v-if="allData.discount > 0">
                          <del>{{ allData.regularPrice  }} <span class="saudi-riyal">ê</span></del>
                          {{ calculatedSellingPrice  }} <span class="saudi-riyal">ê</span> ({{
                            allData.discount
                          }}%)
                        </span>
                        <span v-else
                          >{{ calculatedSellingPrice  }} <span class="saudi-riyal">ê</span>
                        </span>
                      </td>
                    </tr>
                    <tr v-if="allData.itemUnit">
                      <th>{{ $t("Stock") }}</th>
                      <td>
                        {{ allData.availableQty }} {{ allData.itemUnit.code }}
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Inventory Value") }}</th>
                      <td>
                        {{
                          calculatedInventoryValue
                        }} <span class="saudi-riyal">ê</span>
                      </td>
                    </tr>
                    <tr>
                      <th>{{ $t("Alert Quantity") }}</th>
                      <td>
                        {{ allData.alertQty }}
                        <span v-if="allData.itemUnit">{{
                          allData.itemUnit.code
                        }}</span>
                      </td>
                    </tr>
                    <tr v-if="allData.openingStockCount">
                      <th>{{ $t("Opening Stock Quantity") }}</th>
                      <td>
                        {{ allData.openingStockCount }} <span v-if="allData.itemUnit">{{
                          allData.itemUnit.code
                        }}</span>
                      </td>
                    </tr>
                    <tr v-if="allData.openingStockUnitPrice">
                      <th>{{ $t("Opening Stock Unit Price") }}</th>
                      <td>
                        {{ allData.openingStockUnitPrice  }} <span class="saudi-riyal">ê</span>
                      </td>
                    </tr>
                    <tr v-if="allData.note">
                      <th>{{ $t("Note") }}</th>
                      <td>{{ allData.note }}</td>
                    </tr>
                    <tr>
                      <th>{{ $t("Status") }}</th>
                      <td>
                        <span
                          v-if="allData.status === 1"
                          class="badge bg-success"
                          >{{ $t("Active") }}</span
                        >
                        <span v-else class="badge bg-danger">{{
                          $t("Inactive")
                        }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-lg-6 no-print">
                <div class="about-avatar text-center">
                  <img
                    v-if="allData.image"
                    :src="allData.image"
                    class="img-fluid"
                    loading="lazy"
                  />
                  <img
                    v-else
                    src="https://via.placeholder.com/800x1000"
                    class="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Purchase Cost Breakdown Section -->
            <div v-if="!allData.itemType || allData.itemType === 'product'" class="row mt-4">
              <div class="col-12">
                <div class="card custom-card">
                  <div class="card-header setings-header">
                    <h3 class="card-title">{{ $t("Purchase Cost Breakdown") }}</h3>
                  </div>
                  <div class="card-body">
                    <div v-if="purchaseHistory && purchaseHistory.length > 0">
                      <div class="table-responsive">
                        <table class="table table-bordered table-hover table-sm">
                          <thead class="thead-light">
                            <tr>
                              <th>{{ $t("Date") }}</th>
                              <th>{{ $t("Purchase No") }}</th>
                              <th>{{ $t("Reference") }}</th>
                              <th class="text-right">{{ $t("Quantity") }}</th>
                              <th class="text-right">{{ $t("Unit Price") }}</th>
                              <th class="text-right">{{ $t("Line Total") }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(purchase, index) in purchaseHistory" :key="purchase.id || index" :class="{'table-info': purchase.type === 'opening_stock'}">
                              <td>
                                <span v-if="purchase.purchase_date">{{ formatDate(purchase.purchase_date) }}</span>
                                <span v-else-if="purchase.type === 'opening_stock'" class="text-muted">{{ $t("Opening Stock") }}</span>
                                <span v-else class="text-muted">-</span>
                              </td>
                              <td>
                                <span v-if="purchase.purchase_no">
                                  {{ formatPurchaseNumber(purchase.purchase_no) }}
                                </span>
                                <span v-else-if="purchase.type === 'opening_stock'" class="text-muted">-</span>
                                <span v-else class="text-muted">-</span>
                              </td>
                              <td>
                                <span v-if="purchase.purchase_reference">
                                  {{ purchase.purchase_reference }}
                                </span>
                                <span v-else class="text-muted">-</span>
                              </td>
                              <td class="text-right">
                                {{ formatNumber(purchase.quantity) }}
                                <span v-if="allData.itemUnit">{{ allData.itemUnit.code }}</span>
                              </td>
                              <td class="text-right">
                                {{ formatCurrency(purchase.purchase_price) }} <span class="saudi-riyal">ê</span>
                              </td>
                              <td class="text-right">
                                <strong>{{ formatCurrency(purchase.line_total) }} <span class="saudi-riyal">ê</span></strong>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot class="thead-light">
                            <tr>
                              <th colspan="3" class="text-right">{{ $t("Totals") }}:</th>
                              <th class="text-right">
                                {{ formatNumber(totalPurchaseQuantity) }}
                                <span v-if="allData.itemUnit">{{ allData.itemUnit.code }}</span>
                              </th>
                              <th class="text-right">-</th>
                              <th class="text-right">
                                <strong>{{ formatCurrency(totalPurchaseValue) }} <span class="saudi-riyal">ê</span></strong>
                              </th>
                            </tr>
                            <tr v-if="totalPurchaseQuantity > 0" class="bg-light">
                              <th colspan="5" class="text-right">
                                <strong>{{ $t("Average Cost") }}:</strong>
                              </th>
                              <th class="text-right">
                                <strong class="text-primary">{{ formatCurrency(calculatedAverageCost) }} <span class="saudi-riyal">ê</span></strong>
                              </th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                    <div v-else class="alert alert-info">
                      <i class="fas fa-info-circle"></i>
                      {{ $t("No purchase history available for this product.") }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  activity logs -->
      <div class="tab-pane" id="activity-log">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a
                  @click.prevent="!loading && refreshTable()"
                  href="#"
                  v-tooltip="$t('Refresh')"
                  :class="['btn', 'btn-success', loading ? 'disabled' : '']"
                  :aria-busy="loading ? 'true' : 'false'"
                >
                  <i v-if="!loading" class="fas fa-sync"></i>
                  <i v-else class="fas fa-spinner fa-spin"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="loading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search
                  v-model="query"
                  @reset-pagination="resetPagination()"
                  @reload="reload"
                />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div
                v-show="items.length > 0"
                v-for="(data, i) in items"
                :key="i"
              >
                <div class="card mb-0 border border-gray">
                  <div class="card-body py-1">
                    <div class="row">
                      <div
                        class="col-1 d-flex justify-content-center align-items-center"
                      >
                        <i
                          v-if="data.event == 'Update'"
                          class="fa fa-magic"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Create'"
                          class="fa fa-plus-circle"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Delete'"
                          class="fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div class="col-11">
                        <div class="row">
                          <div class="col-12">
                            <p class="text-bold mb-0">{{ data.causer_name }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ $t(data.description) }}</p>
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
                  <select
                    @change="updatePerPager"
                    v-model="perPage"
                    class="form-control form-control-sm ml-1"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <!-- pagination-start -->
              <pagination
                v-if="pagination && pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                class="justify-flex-end"
                @paginate="paginate"
              />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBarcode from "vue-barcode";
import { mapGetters } from "vuex";
import axios from "axios";
import html2pdf from "html2pdf.js";
import iziToast from "izitoast";
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Product Details") };
  },
  components: {
    barcode: VueBarcode,
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: "Product Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Products",
        url: "products.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allData: "",
    loading: false,
    query: "",
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
    // Calculate selling price as regularPrice + taxAmount - discount
    calculatedSellingPrice() {
      if (!this.allData) return 0;
      const regularPrice = parseFloat(this.allData.regularPrice) || 0;
      const taxAmount = parseFloat(this.allData.taxAmount) || 0;
      const discount = parseFloat(this.allData.discount) || 0;
      return regularPrice + taxAmount - discount;
    },
    // Calculate inventory value as sellingPrice * stockQty
    calculatedInventoryValue() {
      if (!this.allData) return 0;
      const stockQty = parseFloat(this.allData.availableQty) || 0;
      return this.calculatedSellingPrice * stockQty;
    },
    // Get purchase history from allData (including opening stock)
    purchaseHistory() {
      const history = [];
      
      // Add opening stock if it exists
      if (this.allData && this.allData.openingStockData) {
        const openingStock = this.allData.openingStockData;
        if (openingStock.quantity > 0 && openingStock.unit_price > 0) {
          history.push({
            id: 'opening',
            type: 'opening_stock',
            purchase_date: null,
            purchase_no: null,
            purchase_reference: this.$t('Opening Stock'),
            quantity: parseFloat(openingStock.quantity) || 0,
            purchase_price: parseFloat(openingStock.unit_price) || 0,
            line_total: parseFloat(openingStock.total_value) || 0,
          });
        }
      }
      
      // Add purchase products
      if (this.allData && this.allData.purchaseProducts) {
        const purchaseProducts = this.allData.purchaseProducts
          .filter(pp => pp && pp.purchase_price !== null && pp.purchase_price !== undefined)
          .map(pp => ({
            id: pp.id,
            type: 'purchase',
            purchase_date: pp.purchase_date,
            purchase_no: pp.purchase_no,
            purchase_reference: pp.purchase_reference,
            quantity: parseFloat(pp.quantity) || 0,
            purchase_price: parseFloat(pp.purchase_price) || 0,
            line_total: (parseFloat(pp.quantity) || 0) * (parseFloat(pp.purchase_price) || 0),
          }));
        
        history.push(...purchaseProducts);
      }
      
      // Sort by date (oldest first, opening stock first if no date)
      return history.sort((a, b) => {
        if (a.type === 'opening_stock') return -1;
        if (b.type === 'opening_stock') return 1;
        const dateA = a.purchase_date ? new Date(a.purchase_date) : new Date(0);
        const dateB = b.purchase_date ? new Date(b.purchase_date) : new Date(0);
        return dateA - dateB; // Oldest first
      });
    },
    // Calculate total purchase quantity
    totalPurchaseQuantity() {
      if (!this.purchaseHistory || this.purchaseHistory.length === 0) {
        return 0;
      }
      return this.purchaseHistory.reduce((sum, purchase) => {
        return sum + (parseFloat(purchase.quantity) || 0);
      }, 0);
    },
    // Calculate total purchase value
    totalPurchaseValue() {
      if (!this.purchaseHistory || this.purchaseHistory.length === 0) {
        return 0;
      }
      return this.purchaseHistory.reduce((sum, purchase) => {
        return sum + purchase.line_total;
      }, 0);
    },
    // Calculate weighted average cost
    calculatedAverageCost() {
      if (this.totalPurchaseQuantity > 0) {
        return this.totalPurchaseValue / this.totalPurchaseQuantity;
      }
      return 0;
    },
  },

  watch: {
    // watch search data
    query: function (newQ, oldQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchData();
      }
    },
  },

  created() {
    this.getProduct();
    this.prefix = this.appInfo.productPrefix;
    this.catPrefix = this.appInfo.proCatPrefix;
    this.subCatPrefix = this.appInfo.proSubCatPrefix;
  },

  methods: {
    // print
    printWindow() {
      window.print();
    },
    // get the product
    async getProduct() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/products/" + this.$route.params.slug
      );
      this.allData = data.data;
      this.loading = false;
    },
    // download pdf
    generatePDF() {
      // Get the HTML content to be converted
      const element = document.getElementById("content-to-pdf");
      // Options for PDF generation
      const options = {
        margin: 5,
        filename: "Product-" + this.$route.params.slug + ".pdf",
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
      let modelName = "Product";
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
      let modelName = "Product";
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
      await this.getActivity();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },
    // Format currency
    formatCurrency(value) {
      if (value === null || value === undefined || isNaN(value)) {
        return "0.00";
      }
      return parseFloat(value).toFixed(2);
    },
    // Format number
    formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) {
        return "0";
      }
      return parseFloat(value).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      });
    },
    // Format date
    formatDate(dateString) {
      if (!dateString) return "-";
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
      } catch (e) {
        return dateString;
      }
    },
    // Format purchase number with prefix
    formatPurchaseNumber(purchaseNo) {
      if (!purchaseNo) return "-";
      const prefix = this.appInfo?.purchasePrefix || "PUR";
      return `${prefix}-${String(purchaseNo).padStart(5, '0')}`;
    },
  },
};
</script>
<style scoped>
.nav-pills .nav-item {
  background: #ddd;
  margin: 2px;
  border-radius: 0.25rem;
}
</style>
