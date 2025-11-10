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
                  @click="getPurchase"
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
              :title="!communicationConfig.sms_configured ? $t('SMS settings not configured') : ''"
              v-tooltip="!communicationConfig.sms_configured ? $t('SMS settings not configured') : ''"
            >
              <i class="fas fa-sms"></i> {{ $t("SMS") }}
            </a>
            <a
              @click="notify((form.isSendEmail = true))"
              href="#"
              class="btn btn-success"
              ><i class="fas fa-paper-plane"></i> {{ $t("email") }}</a
            >
            <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <a @click="printWindow()" href="#" class="btn btn-secondary">
              <i class="fas fa-print"></i> {{ $t("Print") }}
            </a>
            <a 
              v-if="isSaudiArabia && allData && allData.status === 0"
              @click="sendPurchase(allData)" 
              href="#" 
              class="btn btn-success"
            >
              <i class="fas fa-paper-plane"></i> {{ $t("Send Purchase to ZATCA") }}
            </a>
            <a
              v-if="allData && allData.status === 1 && calculateDueAmount > 0"
              @click.prevent="addPayment()"
              href="#"
              class="btn btn-primary"
            >
              <i class="fas fa-money-bill" /> {{ $t("Add Payment") }}
            </a>
            <a 
              v-if="$can('purchase-return-create') && allData && allData.status === 1"
              @click.prevent="returnPurchase(allData)" 
              href="#" 
              class="btn btn-warning"
            >
              <i class="fas fa-undo"></i> {{ $t("Return Purchase") }}
            </a>
            <router-link
              v-if="$can('purchase-edit')"
              :to="{
                name: 'purchases.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'purchases.index' }"
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
                  {{ allData.supplier.supplierID | withPrefix(supplierPrefix)
                  }}<br />
                  <strong>{{ $t("Supplier Name") }}:</strong>
                  {{ allData.supplier.name }}<br />
                  <span v-if="allData.supplier.companyName"
                    ><strong>{{ $t("Company Name") }}:</strong>
                    {{ allData.supplier.companyName }}<br
                  /></span>
                  <span v-if="allData.supplier.email"
                    ><strong>{{ $t("Email") }}:</strong>
                    {{ allData.supplier.email }}<br
                  /></span>
                  <span v-if="allData.supplier.phoneNumber"
                    ><strong>{{ $t("Contact Number") }}:</strong>
                    {{ allData.supplier.phoneNumber }}<br
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
                        <th v-if="allData.purchaseNo">
                          {{ $t("Purchase No") }}
                        </th>
                        <th v-if="allData.poReference">
                          {{ $t("PO Reference") }}
                        </th>
                        <th v-if="allData.paymentTerms">
                          {{ $t("Payment Terms") }}
                        </th>
                        <th v-if="allData.poDate">
                          {{ $t("PO Date") }}
                        </th>
                        <th v-if="allData.purchaseDate">
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
                        <td v-if="allData.purchaseNo">
                          {{ allData.purchaseNo | withPrefix(purchasePrefix) }}
                        </td>
                        <td v-if="allData.poReference">
                          {{ allData.poReference }}
                        </td>
                        <td v-if="allData.paymentTerms">
                          {{ allData.paymentTerms }}
                        </td>
                        <td v-if="allData.poDate">
                          {{ allData.poDate | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.purchaseDate">
                          {{ allData.purchaseDate | moment("Do MMM, YYYY") }}
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
            <div class="row position-relative mt-4 mb-4">
              <div class="col-12">
                <strong class="mb-2 d-block"
                  >{{ $t("Purchase Products") }}:</strong
                >
                <div class="table-custom table-responsive">
                  <table class="table table-sm text-center">
                    <thead>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Product Name") }}</th>
                        <th>{{ $t("Purchased Qty") }}</th>
                        <th v-if="allData.purchaseReturn">
                          {{ $t("Returned Qty") }}
                        </th>
                        <th>{{ $t("Unit Price") }}</th>
                        <th>{{ $t("Total") }}</th>
                        <th>{{ $t("Discount") }}</th>
                        <th>{{ $t("Total After Discount") }}</th>
                        <th>{{ $t("VAT") }}</th>
                        <th>{{ $t("Total with VAT") }}</th>
                        <th
                          v-if="allData.purchaseReturn"
                          :class="allData.purchaseReturn ? 'text-right' : ''"
                        >
                          {{ $t("Total Return") }}
                        </th>
                    </thead>
                    <tbody v-if="purchaseProducts">
                      <tr v-for="(data, i) in purchaseProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          {{ data.productCode | withPrefix(productPrefix) }}
                        </td>
                        <td>{{ data.productName }}</td>
                        <td>{{ data.quantity }} {{ data.productUnit }}</td>
                        <td v-if="allData.purchaseReturn">
                          {{ data.returnQty > 0 ? data.returnQty : 0 }}
                          {{ data.productUnit }}
                        </td>
                        <td>{{ data.purchasePrice  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ data.grossTotal  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ data.discountAmount  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ data.totalAfterDiscount  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ data.taxTotal  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ data.lineTotal  }} <span class="saudi-riyal">ê</span></td>
                        <td
                          v-if="allData.purchaseReturn"
                          :class="allData.purchaseReturn ? 'text-right' : ''"
                        >
                          {{ (data.unitCost * data.returnQty)  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="text-right"
                          :colspan="allData.purchaseReturn ? 11 : 9"
                        >
                          <strong>{{ $t("Total with VAT") }}</strong>
                        </td>
                        <td>
                          <strong>{{ formatNumber(getTotalWithVatSum()) }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td
                          v-if="allData.purchaseReturn"
                          :class="allData.purchaseReturn ? 'text-right' : ''"
                        >
                          <strong>{{
                            allData.purchaseReturn.totalReturn 
                          }} <span class="saudi-riyal">ê</span></strong>
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
                <strong class="mb-2 d-block"
                  >{{ $t("Payment History") }}:</strong
                >
                <div
                  v-if="allData.payments && allData.payments.length > 0"
                  class="table-custom table-responsive"
                >
                  <table class="table table-sm">
                    <thead>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Payment Date") }}</th>
                        <th>{{ $t("Paid Amount") }}</th>
                        <th>{{ $t("Account") }}</th>
                        <th>{{ $t("Cheque No") }}</th>
                        <th>{{ $t("Receipt No") }}</th>
                        <th class="text-right">{{ $t("Status") }}</th>
                    </thead>
                    <tbody>
                      <tr v-for="(data, i) in allData.payments" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          <span v-if="data.date">{{ data.date }}</span>
                        </td>
                        <td>
                          <span v-if="data.amount">{{
                            data.amount 
                          }} <span class="saudi-riyal">ê</span></span>
                        </td>
                        <td>
                          <span
                            v-if="
                              data.purchase_payment_transaction &&
                              data.purchase_payment_transaction.cashbook_account
                            "
                            >{{
                              data.purchase_payment_transaction.cashbook_account
                                .bank_name
                            }}
                            ({{
                              data.purchase_payment_transaction.cashbook_account
                                .account_number
                            }})</span
                          >
                        </td>
                        <td v-if="data.purchase_payment_transaction">
                          {{ data.purchase_payment_transaction.cheque_no }}
                        </td>
                        <td v-if="data.purchase_payment_transaction">
                          {{ data.purchase_payment_transaction.receipt_no }}
                        </td>
                        <td class="text-right">
                          <span
                            v-if="data.status == 1"
                            class="badge bg-success"
                            >{{ $t("Active") }}</span
                          >
                          <span v-else class="badge bg-danger">{{
                            $t("Inactive")
                          }}</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-right" colspan="2">
                          <strong>{{ $t("Total Paid") }}</strong>
                        </td>
                        <td colspan="5">
                          <strong>{{
                            formatNumber(allData.totalPaid)
                          }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="no-print callout callout-danger mt-4 w-100" v-else>
                  <h5>{{ $t("No payments available yet!") }}</h5>
                  <p>{{ $t("You haven/'t add any payment for this purchase. After adding payments you will see the list here.") }}</p>
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

                      <tr v-if="allData.purchaseReturn">
                        <th>{{ $t("Cost of Return Products") }}:</th>
                        <td>
                          {{
                            allData.purchaseReturn.totalReturn 
                          }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr v-if="!isSaudiArabia && allData.discount > 0">
                        <th>
                          {{ $t("Discount") }}
                          <span v-if="allData.discountType == 1"
                            >({{ allData.discount }}%)</span
                          >
                          :
                        </th>
                        <td>
                          {{ formatNumber(allData.discount) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr v-if="!isSaudiArabia && allData.transport > 0">
                        <th>{{ $t("Transport") }}:</th>
                        <td>
                          {{ formatNumber(allData.transport) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr v-if="!isSaudiArabia && allData.tax > 0">
                        <th>
                          {{ $t("Tax") }}
                          <span v-if="allData.taxRate"
                            >({{ allData.taxRate }}%)</span
                          >:
                        </th>
                        <td>
                          {{ formatNumber(allData.tax) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-indigo-light">
                        <th>{{ $t("Total with VAT") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ formatNumber(totalPrice - totalProductDiscount + totalProductVat) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Total Paid") }}:</th>
                        <td>
                          {{ formatNumber(allData.totalPaid) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-red-light">
                        <th>{{ $t("Due") }}:</th>
                        <td>{{ formatNumber((totalPrice - totalProductDiscount + totalProductVat) - (parseFloat(allData.totalPaid) || 0)) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr
                        class="bg-green-light"
                        v-if="allData.accountReceivable"
                      >
                        <th>{{ $t("Account Receivable") }}:</th>
                        <td>{{ formatNumber(allData.accountReceivable) }} <span class="saudi-riyal">ê</span></td>
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
                  v-tooltip="$t('Refresh')"
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
import Swal from "sweetalert2";
import SwalOriginal from "sweetalert2/dist/sweetalert2";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Purchase Details") };
  },
  data: () => ({
    breadcrumbsCurrent: "Purchase Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Purchases",
        url: "purchases.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allData: "",
    purchaseSubTotal: 0,
    purchaseReturn: 0,
    purchaseProducts: [],
    productPrefix: "",
    purchasePrefix: "",
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
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),
    
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA'
    },
    
    // Calculate total price (sum of Total column in items table)
    totalPrice() {
      if (!this.purchaseProducts) return 0;
      return this.purchaseProducts.reduce((total, product) => {
        return total + (parseFloat(product.grossTotal) || 0);
      }, 0);
    },
    
    // Calculate total product discount
    totalProductDiscount() {
      if (!this.purchaseProducts) return 0;
      return this.purchaseProducts.reduce((total, product) => {
        return total + (parseFloat(product.discountAmount) || 0);
      }, 0);
    },
    
    // Calculate total product VAT
    totalProductVat() {
      if (!this.purchaseProducts) return 0;
      return this.purchaseProducts.reduce((total, product) => {
        return total + (parseFloat(product.taxTotal) || 0);
      }, 0);
    },
    
    // Calculate due amount
    calculateDueAmount() {
      if (!this.allData) return 0;
      const total = this.totalPrice - this.totalProductDiscount + this.totalProductVat;
      const paid = parseFloat(this.allData.totalPaid) || 0;
      return total - paid;
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
    this.getPurchase();
    this.loadCommunicationConfigStatus();
    this.productPrefix = this.appInfo.productPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.supplierPrefix = this.appInfo.supplierPrefix;
  },
  methods: {
    // Format number to 2 decimal places
    formatNumber(value) {
      if (value === null || value === undefined || value === '') return '0.00';
      return parseFloat(value).toFixed(2);
    },

    // Calculate total with VAT sum for all items
    getTotalWithVatSum() {
      if (!this.purchaseProducts) return 0;
      return this.purchaseProducts.reduce((total, product) => {
        return total + (parseFloat(product.lineTotal) || 0);
      }, 0);
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

    // get the purchase
    async getPurchase() {
      this.$store.state.operations.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/purchases/" + this.$route.params.slug
      );
      this.allData = data.data;
      this.purchaseProducts = this.allData.products;
      this.purchaseProducts.sort(this.sortProducts);
      this.$store.state.operations.loading = false;
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

    // download pdf - now opens print page
    generatePDF() {
      // Open the print page in a new window
      const printUrl = `/print/purchase/${this.$route.params.slug}`;
      window.open(printUrl, '_blank');
    },

    // notify
    async notify() {
      if (!this.isDemoMode) {
        this.$store.state.operations.loading = true;
        await this.form
          .post(
            window.location.origin +
              "/api/purchase/notify/" +
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
        this.$store.state.operations.loading = false;
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
      const printUrl = `/print/purchase/${this.$route.params.slug}`;
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
      let modelName = "Purchase";
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
      let modelName = "Purchase";
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

    // Send purchase to ZATCA
    async sendPurchase(data) {
      console.log('Send purchase clicked for:', data);
      console.log('isSaudiArabia:', this.isSaudiArabia);
      console.log('data.status:', data.status);
      
      SwalOriginal.fire({
        title: this.$t("Send Purchase to ZATCA"),
        text: this.$t("Do you want to send this purchase to ZATCA?"),
        type: "question",
        showCancelButton: true,
        confirmButtonText: this.$t("Yes"),
        cancelButtonText: this.$t("No"),
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
      }).then(async (result) => {
        if (result.value) {
          try {
            // Show loading
            SwalOriginal.fire({
              title: this.$t("Sending..."),
              text: this.$t("Please wait while we send the purchase to ZATCA"),
              allowOutsideClick: false,
              showConfirmButton: true,
              confirmButtonText: this.$t("Please wait..."),
              confirmButtonColor: "#28a745",
              willOpen: () => {
                SwalOriginal.showLoading();
              }
            });

            // Send purchase to ZATCA and create journal entries
            const response = await axios.post(`/api/purchases/${data.slug}/send-to-zatca`);
            
            // Close the loading dialog
            SwalOriginal.close();
            
            if (response.data.success) {
              this.$toast.success(
                this.$t("Sent Successfully!"),
                this.$t("Purchase has been sent to ZATCA and journal entries have been created.")
              );
              // Refresh the purchase data to update the status
              this.getPurchase();
            } else {
              this.$toast.error(
                this.$t("Failed!"),
                response.data.message || this.$t("Failed to send purchase to ZATCA")
              );
            }
          } catch (error) {
            console.error('Error sending purchase to ZATCA:', error);
            // Close the loading dialog
            SwalOriginal.close();
            this.$toast.error(
              this.$t("Error!"),
              error.response?.data?.message || this.$t("An error occurred while sending the purchase to ZATCA")
            );
          }
        }
      });
    },

    // return purchase
    returnPurchase(data) {
      // Navigate to purchase return create page with pre-selected purchase
      // We'll fetch the supplier info from the purchase on the create page
      console.log('Full purchase data:', JSON.stringify(data, null, 2))
      console.log('Purchase slug:', data.slug)
      
      this.$router.push({
        name: 'purchaseReturns.create',
        query: {
          purchase: data.slug
        }
      });
    },

    // Add payment to purchase
    addPayment() {
      // Navigate to send voucher create page with the purchase data
      this.$router.push({
        name: 'sendVouchers.create',
        query: {
          purchase: this.allData.slug,
          supplier: this.allData.supplier?.slug
        }
      });
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
