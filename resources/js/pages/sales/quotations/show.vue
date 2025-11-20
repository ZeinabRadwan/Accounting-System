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
                  @click="getQuotation"
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
            <a
              @click="communicationConfig.sms_configured ? notify((form.isSendSMS = true)) : null"
              href="#"
              :class="[
                'btn',
                communicationConfig.sms_configured ? 'btn-secondary' : 'btn-secondary disabled'
              ]"
              :disabled="!communicationConfig.sms_configured"
              :title="!communicationConfig.sms_configured ? smsNotConfiguredText() : ''"
              v-tooltip="!communicationConfig.sms_configured ? smsNotConfiguredText() : ''"
            >
              <i class="fas fa-sms"></i> {{ $t("SMS") }}
            </a>
            <a
              @click="notify((form.isSendEmail = true))"
              href="#"
              class="btn btn-success"
              ><i class="fas fa-paper-plane"></i> {{ $t("email") }}</a
            >
            <!-- New preview and download PDF buttons -->
            <a @click="previewPDF" href="#" class="btn btn-info">
              <i class="fas fa-eye"></i> {{ $t("Preview PDF") }}
            </a>
            <a @click="downloadPDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <router-link
              v-if="$can('quotation-to-invoice')"
              :to="{
                name: 'quotations.invoice',
                params: { slug: allData.slug },
              }"
              class="btn btn-success"
            >
              <i class="fas fa-file-invoice" /> {{ $t("Create Invoice") }}
            </router-link>
            <router-link
              v-if="$can('quotation-edit')"
              :to="{
                name: 'quotations.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'quotations.index' }"
              class="btn btn-info float-right"
            >
              <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">
                {{ $t("Back") }} <i class="fas fa-long-arrow-alt-left" />
              </template>
              <template v-else>
                <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
              </template>
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
                <h5>{{ $t("Client Details") }}</h5>
                <div v-if="allData.client">
                  <span v-if="allData.client.companyName"
                    ><strong>{{ $t("Client ID") }}:</strong>
                    {{ allData.client.clientID | withPrefix(clientPrefix) }}<br
                  /></span>
                  <strong>{{ $t("Client Name") }}:</strong>
                  {{ allData.client.name }}<br />
                  <span v-if="allData.client.companyName"
                    ><strong>{{ $t("Company Name") }}:</strong>
                    {{ allData.client.companyName }}<br
                  /></span>
                  <span v-if="allData.client.email"
                    ><strong>{{ $t("Email") }}:</strong>
                    {{ allData.client.email }}<br
                  /></span>
                  <span v-if="allData.client.phoneNumber"
                    ><strong>{{ $t("Contact Number") }}:</strong>
                    {{ allData.client.phoneNumber }}<br
                  /></span>
                  <span v-if="allData.client.address"
                    ><strong>{{ $t("Address") }}:</strong>
                    {{ allData.client.address }}<br
                  /></span>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row mt-3">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table class="table">
                    <thead>
                      <tr>
                        <th v-if="allData.quotationNo">
                          {{ $t("Quotation No") }}
                        </th>
                        <th v-if="allData.reference">
                          {{ $t("Reference") }}
                        </th>
                        <th v-if="allData.date">
                          {{ $t("Quotation Date") }}
                        </th>
                        <th v-if="allData.deliveryPlace">
                          {{ $t("Delivery Place") }}
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
                        <td v-if="allData.quotationNo">
                          {{
                            allData.quotationNo | withPrefix(quotationPrefix)
                          }}
                        </td>
                        <td v-if="allData.reference">
                          {{ allData.reference }}
                        </td>
                        <td v-if="allData.date">
                          {{ allData.date | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.deliveryPlace">
                          {{ allData.deliveryPlace }}
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
                          {{ allData.createdBy }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Table row -->
            <div class="row position-relative mt-4">
              <div class="col-12">
                <strong class="mb-2 d-block"
                  >{{ $t("Products") }}:</strong
                >
                <div class="table-custom table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Item Name") }}</th>
                        <th>{{ $t("Qty") }}</th>
                        <th>{{ $t("Price") }}</th>
                        <th>{{ $t("Total") }}</th>
                        <th>{{ $t("Discount") }}</th>
                        <th>{{ $t("Total After Discount") }}</th>
                        <th>{{ $t("VAT") }}</th>
                        <th>{{ $t("Total with VAT") }}</th>
                      </tr>
                    </thead>
                    <tbody v-if="allData.products">
                      <tr v-for="(data, i) in allData.products" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          {{ data.productCode | withPrefix(productPrefix) }}
                        </td>
                        <td>{{ data.productName }}</td>
                        <td>{{ data.quantity }}</td>
                        <td>{{ formatNumber(data.salePrice) }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ formatNumber(data.salePrice * data.quantity) }} <span class="saudi-riyal">ê</span></td>
                        <td>
                          <span v-if="data.discountType === 'percentage'">
                            {{ data.discount }}% ({{ calculateProductDiscountAmount(data) }} <span class="saudi-riyal">ê</span>)
                          </span>
                          <span v-else-if="data.discountAmount > 0">
                            {{ calculateProductDiscountAmount(data) }} <span class="saudi-riyal">ê</span>
                          </span>
                          <span v-else class="text-muted">
                            {{ $t('No Discount') }}
                          </span>
                        </td>
                        <td>{{ formatNumber((data.salePrice * data.quantity) - parseFloat(calculateProductDiscountAmount(data))) }} <span class="saudi-riyal">ê</span></td>
                        <td>
                          <span v-if="data.taxAmount > 0">
                            {{ formatNumber(data.taxAmount) }} <span class="saudi-riyal">ê</span>
                            <small v-if="data.taxRate" class="text-muted d-block">
                              ({{ data.taxRate }}%)
                            </small>
                          </span>
                          <span v-else class="text-muted">
                            {{ $t('No VAT') }}
                          </span>
                        </td>
                        <td>{{ formatNumber((data.salePrice * data.quantity) - parseFloat(calculateProductDiscountAmount(data)) + (parseFloat(data.taxAmount) || 0)) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr>
                        <td class="text-right" colspan="9">
                          <strong>{{ $t("Total with VAT") }}</strong>
                        </td>
                        <td class="text-center">
                          <strong>{{ calculatedTotal }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.row -->
            <div class="row mt-4">
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4">
                <div class="table-responsive table-custom table-border-y-0">
                  <table class="table">
                    <tbody>
                      <tr class="bg-sub-light text-bold">
                        <th>{{ $t("Total Price") }}:</th>
                        <td>{{ formatNumber(totalPrice) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr>
                        <th>{{ $t("Product Discount") }}:</th>
                        <td>
                          {{ formatNumber(totalProductDiscount) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-green-light text-bold">
                        <th>{{ $t("Total After Discount") }}:</th>
                        <td>{{ formatNumber(totalPrice - totalProductDiscount) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr>
                        <th>{{ $t("Product VAT") }}:</th>
                        <td>
                          {{ formatNumber(totalProductVat) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-indigo-light">
                        <th>{{ $t("Total with VAT") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ formatNumber(totalPrice - totalProductDiscount + totalProductVat) }} <span class="saudi-riyal">ê</span>
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
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import iziToast from "izitoast";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Quotation Details") };
  },
  data: () => ({
    allData: "",
    breadcrumbsCurrent: "Quotation Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Quotations",
        url: "quotations.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    quotationProducts: [],
    quotationPrefix: "",
    clientPrefix: "",
    productPrefix: "",
    loading: false,
    form: new Form({
      isSendEmail: false,
      isSendSMS: false,
    }),
    isDemoMode: window.config.isDemoMode,
    query: "",
    perPage: 10,
    // Communication configuration status
    communicationConfig: {
      email_configured: false,
      sms_configured: false,
      loading: true,
    },
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
    
    // calculate total subtotal based on new formula
    calculatedSubTotal() {
      if (!this.allData.products) return 0;
      
      let total = 0;
      this.allData.products.forEach(product => {
        const unitPrice = parseFloat(product.salePrice) || 0;
        const quantity = parseFloat(product.quantity) || 0;
        total += unitPrice * quantity;
      });
      return total.toFixed(2);
    },

    // calculate total product VAT
    totalProductVat() {
      if (!this.allData.products) return 0;
      return this.allData.products.reduce((total, product) => {
        return total + (product.taxAmount || 0);
      }, 0);
    },
    
    // calculate total product discount
    totalProductDiscount() {
      if (!this.allData.products) return 0;
      return this.allData.products.reduce((total, product) => {
        return total + this.calculateProductDiscountAmount(product);
      }, 0);
    },
    
    // Calculate total price (sum of Total column in items table)
    totalPrice() {
      if (!this.allData.products) return 0;
      return this.allData.products.reduce((total, product) => {
        return total + (product.salePrice * product.quantity);
      }, 0);
    },

    // calculate total with new formulas
    calculatedTotal() {
      const subtotal = parseFloat(this.calculatedSubTotal) || 0;
      const productDiscount = parseFloat(this.totalProductDiscount) || 0;
      const productVat = parseFloat(this.totalProductVat) || 0;
      
      // Total = Subtotal - Product Discount + Product VAT
      const total = subtotal - productDiscount + productVat;
      return total.toFixed(2);
    },
  },
  created() {
    this.getQuotation();
    this.loadCommunicationConfigStatus();
    this.quotationPrefix = this.appInfo.quotationPrefix;
    this.clientPrefix = this.appInfo.clientPrefix;
    this.productPrefix = this.appInfo.productPrefix;
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

  methods: {
    smsNotConfiguredText() {
      if (this.$te && this.$te('SMS settings not configured')) {
        const translated = this.$t('SMS settings not configured');
        return typeof translated === 'string' ? translated : 'SMS settings not configured';
      }
      return 'SMS settings not configured';
    },
    // Load communication configuration status
    async loadCommunicationConfigStatus() {
      try {
        this.communicationConfig.loading = true;
        
        const response = await axios.get('/api/communication-config-status');
        
        this.communicationConfig.email_configured = response.data.email_configured;
        this.communicationConfig.sms_configured = response.data.sms_configured;
        this.communicationConfig.loading = false;
      } catch (error) {
        console.error('Error loading communication config status:', error);
        // Default to false if there's an error
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
        this.communicationConfig.loading = false;
      }
    },

    // get the quotation
    async getQuotation() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/quotations/" + this.$route.params.slug
      );
      this.allData = data.data;
      this.quotationProducts = this.allData.products;
      this.quotationProducts.sort(this.sortProducts);
      this.loading = false;
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
    // download PDF
    downloadPDF() {
      window.location.href = `/print/quotation/${this.$route.params.slug}/pdf`;
    },

    // preview PDF
    previewPDF() {
      window.location.href = `/print/quotation/${this.$route.params.slug}/preview`;
    },
    // notify
    async notify() {
      if (!this.isDemoMode) {
        this.loading = true;
        await this.form
          .post(
            window.location.origin +
              "/api/quotation/notify/" +
              this.$route.params.slug
          )
          .then(() => {
            toast.fire({
              type: "success",
              title: this.$t("Notification sent successfully"),
            });
          })
          .catch(() => {
            toast.fire({ type: "error", title: this.$t("Please check your input and try again.") });
          });
        this.loading = false;
      } else {
        toast.fire({
          type: "warning",
          title: this.$t("You are not allowed to do this in demo version."),
        });
      }
    },
    // print - now opens print page
    printWindow() {
      // Open the print page in a new window
      const printUrl = `/print/quotation/${this.$route.params.slug}`;
      window.open(printUrl, '_blank');
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
      let modelName = "Quotation";
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
      let modelName = "Quotation";
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
      const refreshedText = (this.$te && this.$te('Refreshed'))
        ? this.$t('Refreshed')
        : 'Refreshed';
      if (typeof iziToast !== 'undefined') {
        iziToast.success({
          title: refreshedText,
          message: '',
          position: 'topRight',
          timeout: 3000
        });
      }
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // calculate total after discount
    calculateTotalAfterDiscount(data) {
      const salePrice = parseFloat(data.salePrice) || 0;
      const discountAmount = Number(data.discountAmount) || 0;
      const quantity = parseFloat(data.quantity) || 1;
      
      // Total After Discount = quotation_products.sale_price - (quotation_products.discount_amount/quotation_products.quantity)
      const totalAfterDiscount = salePrice - (discountAmount / quantity);
      return totalAfterDiscount.toFixed(2);
    },

    // calculate unit tax
    calculateUnitTax(data) {
      const taxAmount = parseFloat(data.taxAmount) || 0;
      const quantity = parseFloat(data.quantity) || 1;
      
      // Unit Tax = quotation_products.tax_amount/quotation_products.quantity
      const unitTax = taxAmount / quantity;
      return unitTax.toFixed(2);
    },

    // calculate unit cost
    calculateUnitCost(data) {
      const totalAfterDiscount = parseFloat(this.calculateTotalAfterDiscount(data)) || 0;
      const unitTax = parseFloat(this.calculateUnitTax(data)) || 0;
      
      // Unit Cost = Total After Discount + Unit Tax
      const unitCost = totalAfterDiscount + unitTax;
      return unitCost.toFixed(2);
    },

    // calculate subtotal
    calculateSubtotal(data) {
      const unitCost = parseFloat(this.calculateUnitCost(data)) || 0;
      const quantity = parseFloat(data.quantity) || 1;
      
      // Subtotal = Unit Cost * quantity
      const subtotal = unitCost * quantity;
      return subtotal.toFixed(2);
    },

    // calculate product discount amount
    calculateProductDiscountAmount(data) {
      if (data.discountType === 'percentage') {
        return ((data.salePrice * data.quantity) * data.discount / 100).toFixed(2);
      } else if (data.discountAmount && data.discountAmount > 0) {
        return Number(data.discountAmount).toFixed(2);
      }
      return 0;
    },

    // Format number to 2 decimal places
    formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return parseFloat(value).toFixed(2);
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
