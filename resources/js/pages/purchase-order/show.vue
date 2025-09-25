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
                  @click="getPurchaseOrder"
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
            <a @click="printWindow()" href="#" class="btn btn-secondary">
              <i class="fas fa-print"></i> {{ $t("Print") }}
            </a>
            <router-link
              v-if="$can('purchase-order-edit')"
              :to="{
                name: 'purchase-order.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'purchase-order.index' }"
              class="btn btn-info float-right"
            >
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane active" id="details">
        <div class="row">
          <!-- Main content -->
          <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
            <table-loading v-show="loading" />
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                <CompanyInfo />
              </div>
              <!-- /.col -->
              <div
                class="col-sm-8 invoice-col float-right text-md-right"
              >
                <h5>{{ $t("Supplier Details") }}</h5>
                <div v-if="allData.supplier">
                  <strong>{{ $t("Supplier ID") }}:</strong>
                  {{ allData.supplier.supplier_id | withPrefix(supplierPrefix)
                  }}<br />
                  <strong>{{ $t("Supplier Name") }}:</strong>
                  {{ allData.supplier.name }}<br />
                  <span v-if="allData.supplier.company_name"
                    ><strong>{{ $t("Company Name") }}:</strong>
                    {{ allData.supplier.company_name }}<br
                  /></span>
                  <span v-if="allData.supplier.email"
                    ><strong>{{ $t("Email") }}:</strong>
                    {{ allData.supplier.email }}<br
                  /></span>
                  <span v-if="allData.supplier.phone_number"
                    ><strong>{{ $t("Contact Number") }}:</strong>
                    {{ allData.supplier.phone_number }}<br
                  /></span>
                  <span v-if="allData.supplier.address"
                    ><strong>{{ $t("Address") }}:</strong>
                    {{ allData.supplier.address }}<br
                  /></span>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th v-if="allData.purchase_no">
                          {{ $t("Purchase Order No") }}
                        </th>
                        <th v-if="allData.po_reference">
                          {{ $t("PO Reference") }}
                        </th>
                        <th v-if="allData.payment_terms">
                          {{ $t("Payment Terms") }}
                        </th>
                        <th v-if="allData.po_date">
                          {{ $t("PO Date") }}
                        </th>
                        <th v-if="allData.purchase_date">
                          {{ $t("Purchase Date") }}
                        </th>
                        <th v-if="allData.note">{{ $t("Note") }}</th>
                        <th>{{ $t("Status") }}</th>
                        <th class="text-right">
                          {{ $t("Created By") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td v-if="allData.purchase_no">
                          {{ allData.purchase_no | withPrefix(purchaseOrderPrefix) }}
                        </td>
                        <td v-if="allData.po_reference">
                          {{ allData.po_reference }}
                        </td>
                        <td v-if="allData.payment_terms">
                          {{ allData.payment_terms }}
                        </td>
                        <td v-if="allData.po_date">
                          {{ allData.po_date | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.purchase_date">
                          {{ allData.purchase_date | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.note">{{ allData.note }}</td>
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
                        <td class="text-right">
                          {{ allData.created_by }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Table row -->
            <div class="row position-relative mt-4 mb-4">
              <div class="col-12">
                <strong class="mb-2 d-block"
                  >{{ $t("Purchase Order Products") }}:</strong
                >
                <div class="table-custom table-responsive">
                  <table class="table table-sm text-center">
                    <thead>
                      <tr>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Product Name") }}</th>
                        <th>{{ $t("Ordered Qty") }}</th>
                        <th>{{ $t("Unit Price") }}</th>
                        <th>{{ $t("Total") }}</th>
                        <th>{{ $t("Discount") }}</th>
                        <th>{{ $t("Total After Discount") }}</th>
                        <th>{{ $t("VAT") }}</th>
                        <th>{{ $t("Total with VAT") }}</th>
                      </tr>
                    </thead>
                    <tbody v-if="purchaseOrderProducts && purchaseOrderProducts.length > 0">
                      <tr v-for="(data, i) in purchaseOrderProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          {{ data.product.code | withPrefix(productPrefix) }}
                        </td>
                        <td>{{ data.product.name }}</td>
                        <td>{{ data.quantity }}</td>
                        <td>{{ data.purchase_price  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ (data.quantity * data.purchase_price)  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ data.discount_amount  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ ((data.quantity * data.purchase_price) - parseFloat(data.discount_amount))  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ data.tax_amount  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ ((data.quantity * data.purchase_price) - parseFloat(data.discount_amount) + parseFloat(data.tax_amount))  }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr>
                        <td
                          class="text-right"
                          colspan="9"
                        >
                          <strong>{{ $t("Subtotal") }}</strong>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="10" class="text-center">
                          <div class="no-print callout callout-info">
                            <h5>{{ $t("No products found") }}</h5>
                            <p>{{ $t("This purchase order doesn't have any products yet.") }}</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- /.row -->
            <div class="row mt-4" id="page-break">
              <div class="col-lg-12 col-xl-8">
                <div class="no-print callout callout-info mt-4 w-100">
                  <h5>{{ $t("Purchase Order Information") }}</h5>
                  <p>{{ $t("This is a purchase order document. No payments are required at this stage.") }}</p>
                </div>
              </div>
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4 pt-2">
                <div
                  class="table-responsive table-custom table-border-y-0"
                  v-if="allData.supplier"
                >
                  <table class="table">
                    <tbody>
                      <tr class="bg-sub-light text-bold">
                        <th>{{ $t("Subtotal") }}:</th>
                        <td>{{ (allData.sub_total || 0)  }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr class="bg-indigo-light">
                        <th>{{ $t("Total") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ (allData.net_total || allData.calculated_total || 0)  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="text-muted small">
                        <th colspan="2">{{ $t("Breakdown") }}:</th>
                      </tr>
                      <tr class="text-muted small">
                        <th>{{ $t("Product Discounts") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ (allData.discount || 0)  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="text-muted small">
                        <th>{{ $t("Transport") }}:</th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ (allData.transport || 0)  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="text-muted small">
                        <th>{{ $t("Tax") }}:</th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ (allData.total_tax || allData.calculated_tax || 0)  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.row -->

          </div>
          <!-- /.invoice -->
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
                  @click="refreshTable()"
                  href="#"
                  v-tooltip="'Refresh'"
                  class="btn btn-success"
                >
                  <i class="fas fa-sync"></i>
                </a>
                <a
                  @click="print"
                  v-tooltip="$t('Print Table')"
                  class="btn btn-info"
                >
                  <i class="fas fa-print"></i>
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
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import html2pdf from "html2pdf.js";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Purchase Order Details") };
  },
  data: () => ({
    breadcrumbsCurrent: "Purchase Order Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Purchase Orders",
        url: "purchase-order.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allData: "",
    purchaseOrderSubTotal: 0,
    purchaseOrderProducts: [],
    productPrefix: "",
    purchaseOrderPrefix: "",
    supplierPrefix: "",
    form: new Form({
      isSendEmail: false,
      isSendSMS: false,
    }),
    isDemoMode: window.config.isDemoMode,
    query: "",
    perPage: 10,
  }),
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
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
    this.getPurchaseOrder();
    this.productPrefix = this.appInfo.productPrefix;
    this.purchaseOrderPrefix = this.appInfo.purchaseOrderPrefix;
    this.supplierPrefix = this.appInfo.supplierPrefix;
  },
  methods: {
    // get the purchase order
    async getPurchaseOrder() {
      this.$store.state.operations.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/purchase-order/" + this.$route.params.slug
      );
      this.allData = data.data;
      this.purchaseOrderProducts = this.allData.purchase_order_products || [];
      if (this.purchaseOrderProducts && this.purchaseOrderProducts.length > 0) {
        this.purchaseOrderProducts.sort(this.sortProducts);
      }
      this.$store.state.operations.loading = false;
    },
    sortProducts(a, b) {
      if (a.product.code < b.product.code) {
        return -1;
      }
      if (a.product.code > b.product.code) {
        return 1;
      }
      return 0;
    },

    // download pdf
    generatePDF() {
      // Get the HTML content to be converted
      const element = document.getElementById("content-to-pdf");
      // Options for PDF generation
      const options = {
        margin: 5,
        filename: "Purchase Order-" + this.$route.params.slug + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        pagebreak: { mode: "avoid-all", before: "#page-break" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };
      // Generate PDF from HTML content
      html2pdf().from(element).set(options).save();
    },

    // print
    printWindow() {
      window.print();
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
      let modelName = "PurchaseOrder";
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
      let modelName = "PurchaseOrder";
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
    refreshTable() {
      this.query = "";
      this.query === "" ? this.getActivity() : this.searchData();
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
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
