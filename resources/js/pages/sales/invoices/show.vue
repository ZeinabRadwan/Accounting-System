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
                  @click="getInvoice"
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
              @click="notify((form.isSendSMS = true))"
              href="#"
              class="btn btn-secondary"
            >
              <i class="fas fa-sms"></i> {{ $t("SMS") }}
            </a>
            <a
              @click="notify((form.isSendEmail = true))"
              href="#"
              class="btn btn-success"
              ><i class="fas fa-paper-plane"></i> {{ $t("email") }}</a
            >
            <a @click="generatePDF()" href="#" class="btn btn-primary">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <a @click="printWindow()" href="#" class="btn btn-secondary">
              <i class="fas fa-print"></i> {{ $t("Print") }}
            </a>

            <router-link
              v-if="$can('invoice-edit')"
              :to="{
                name: 'invoices.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'invoices.index' }"
              class="btn btn-dark float-right"
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
                class="col-sm-6 offset-sm-2 invoice-col float-right text-md-right"
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
                        <th v-if="allData.invoiceNo">
                          {{ $t("Invoice No") }}
                        </th>
                        <th v-if="allData.invoiceDate">
                          {{ $t("Invoice Date") }}
                        </th>
                        <th v-if="allData.reference">
                          {{ $t("Reference") }}
                        </th>
                        <th v-if="allData.poReference">
                          {{ $t("PO Reference") }}
                        </th>
                        <th v-if="allData.paymentTerms">
                          {{ $t("Payment Terms") }}
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
                        <td v-if="allData.invoiceNo">
                          {{ allData.invoiceNo | withPrefix(invoicePrefix) }}
                        </td>
                        <td v-if="allData.invoiceDate">
                          {{ allData.invoiceDate | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.reference">
                          {{ allData.reference }}
                        </td>
                        <td v-if="allData.poReference">
                          {{ allData.poReference }}
                        </td>
                        <td v-if="allData.paymentTerms">
                          {{ allData.paymentTerms }}
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
            <div class="row mt-4">
              <div class="col-12">
                <strong class="mb-2 d-block"
                  >{{ $t("Invoice Products") }}:</strong
                >
                <div class="table-responsive table-custom">
                  <table class="table table-sm text-center">
                                         <thead>
                       <tr>
                         <th>{{ $t("#") }}</th>
                         <th>{{ $t("Code") }}</th>
                         <th>{{ $t("Item Name") }}</th>
                         <th>{{ $t("Qty") }}</th>
                         <th v-if="allData.totalInvoiceReturn">
                           {{ $t("Return Qty") }}
                         </th>
                         <th>{{ $t("Price") }}</th>
                         <th>{{ $t("Total") }}</th>
                         <th>{{ $t("Discount") }}</th>
                         <th>{{ $t("Total After Discount") }}</th>
                         <th>{{ $t("VAT") }}</th>
                         <th>{{ $t("Total with VAT") }}</th>
                         <!-- <th
                           v-if="allData.totalInvoiceReturn"
                           class="text-right"
                         >
                           {{ $t("Total Return") }}
                         </th> -->
                       </tr>
                     </thead>
                    <tbody v-if="invoiceProducts">
                      <tr v-for="(data, i) in invoiceProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          {{ data.productCode | withPrefix(productPrefix) }}
                        </td>
                        <td>{{ data.productName }}</td>
                        <td>{{ data.quantity }} {{ data.productUnit }}</td>
                        <td v-if="allData.totalInvoiceReturn">
                          {{ data.returnQty }} {{ data.productUnit }}
                        </td>
                        <td>{{ data.salePrice | withCurrency }}</td>
                        <td>{{ (data.salePrice * data.quantity) | withCurrency }}</td>
                        <td>
                          <span v-if="data.discountType === 'percentage'">
                            {{ data.discountPercentage }}% ({{ calculateProductDiscountAmount(data) | withCurrency }})
                          </span>
                          <span v-else-if="data.productDiscount > 0">
                            {{ calculateProductDiscountAmount(data) | withCurrency }}
                          </span>
                          <span v-else class="text-muted">
                            {{ $t('No Discount') }}
                          </span>
                        </td>
                        <td>{{ ((data.salePrice * data.quantity) - calculateProductDiscountAmount(data)) | withCurrency }}</td>
                        <td>
                          <span v-if="data.productTax > 0">
                            {{ data.productTax | withCurrency }}
                            <small v-if="data.vatRate" class="text-muted d-block">
                              ({{ data.vatRate.rate }}%)
                            </small>
                          </span>
                          <span v-else class="text-muted">
                            {{ $t('No VAT') }}
                          </span>
                        </td>
                        <td>{{ ((data.salePrice * data.quantity) - calculateProductDiscountAmount(data) + (data.productTax || 0)) | withCurrency }}</td>
                        <!-- <td>{{ data.unitCost | withCurrency }}</td>
                        <td
                          v-if="allData.totalInvoiceReturn"
                          class="text-right"
                        >
                          {{ (data.unitCost * data.returnQty) | withCurrency }}
                        </td>
                      </tr>
                      <tr>
                        <td
                          :colspan="allData.totalInvoiceReturn ? 12 : 11"
                          class="text-right"
                        >
                          <strong>{{ $t("Subtotal") }} </strong>
                        </td>
                        <td class="text-right">
                          <strong>
                            {{ allData.subTotal | withCurrency }}
                          </strong>
                        </td> -->
                        <!-- <td
                          v-if="allData.totalInvoiceReturn"
                          class="text-right"
                        >
                          <strong>{{
                            allData.totalInvoiceReturn | withCurrency
                          }}</strong>
                        </td> -->
                      </tr>
                      <tr>
                        <td
                          :colspan="allData.totalInvoiceReturn ? 10 : 9"
                          class="text-right"
                        >
                          <strong>{{ $t("Subtotal") }} </strong>
                        </td>
                        <td class="text-center">
                          <strong>
                            {{ allData.subTotal | withCurrency }}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

                         <!-- Product-level VAT and Discount Notice -->
             <!-- <div class="row mt-3">
               <div class="col-12">
                 <div class="alert alert-info">
                   <i class="fas fa-info-circle"></i>
                   <strong>{{ $t('Note') }}:</strong> 
                   {{ $t('Product-level VAT and discount are shown in the table above. The table displays the calculation flow: Price → Total → Discount → Total After Discount → VAT → Total with VAT.') }}
                 </div>
               </div>
             </div> -->
             
                           <!-- Product Summary -->
              <!-- <div class="row mt-3">
               <div class="col-12">
                 <div class="table-responsive table-custom">
                   <table class="table table-sm">
                     <tbody>
                       <tr class="bg-light">
                         <th>{{ $t('Total Product VAT') }}:</th>
                         <td>{{ totalProductVat | withCurrency }}</td>
                         <th>{{ $t('Total Product Discount') }}:</th>
                         <td>{{ totalProductDiscount | withCurrency }}</td>
                       </tr>
                       <tr class="bg-light">
                         <th>{{ $t('Products with VAT') }}:</th>
                         <td>{{ productsWithVat }}</td>
                         <th>{{ $t('Products with Discount') }}:</th>
                         <td>{{ productsWithDiscount }}</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
             </div> -->
            
                         <!-- Debug Information (remove in production) -->
             <div class="row mt-3" v-if="false">
               <div class="col-12">
                 <div class="alert alert-warning">
                   <strong>Debug Info:</strong><br>
                   Country: {{ appInfo?.country || 'Not set' }}<br>
                   Is Saudi Arabia: {{ isSaudiArabia }}<br>
                   Subtotal: {{ allData?.subTotal }}<br>
                   Discount: {{ allData?.discount }} (Type: {{ allData?.discountType }})<br>
                   Transport: {{ allData?.transport }}<br>
                   Tax: {{ allData?.tax }}<br>
                   Calculated Total: {{ calculatedTotal }}<br>
                   Total Product VAT: {{ totalProductVat }}<br>
                   Total Product Discount: {{ totalProductDiscount }}<br>
                   Products with VAT: {{ productsWithVat }}<br>
                   Products with Discount: {{ productsWithDiscount }}
                 </div>
               </div>
             </div>
            
            <!-- /.row -->
            <div class="row mt-4" id="page-break">
              <div class="col-lg-12 col-xl-8">
                <div
                  v-if="
                    allData.invoicePayments &&
                    allData.invoicePayments.length > 0
                  "
                >
                  <strong class="mb-2 d-block"
                    >{{ $t("Payment History") }}:</strong
                  >
                  <div class="table-responsive table-custom">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>{{ $t("#") }}</th>
                          <th>{{ $t("Payment Date") }}</th>
                          <th>{{ $t("Paid Amount") }}</th>
                          <th>{{ $t("Account") }}</th>
                          <th>{{ $t("Cheque No") }}</th>
                          <th>{{ $t("Receipt No") }}</th>
                          <th class="text-right">{{ $t("Status") }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(data, i) in allData.invoicePayments"
                          :key="i"
                        >
                          <td>{{ ++i }}</td>
                          <td>
                            <span v-if="data.date">{{ data.date }}</span>
                          </td>
                          <td>{{ data.amount | withCurrency }}</td>
                          <td>
                            <span v-if="data.account">{{
                              data.account.label
                            }}</span>
                          </td>
                          <td v-if="data.transaction">
                            {{ data.transaction.cheque_no }}
                          </td>
                          <td v-if="data.transaction">
                            {{ data.transaction.receipt_no }}
                          </td>
                          <td class="text-right">
                            <span
                              v-if="data.status === 1"
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
                              allData.totalPaid | withCurrency
                            }}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="no-print callout callout-danger mt-4 w-100" v-else>
                  <h5>{{ $t("No payments available yet!") }}</h5>
                  <p>{{ $t("You haven/'t add any payment for this purchase. After adding payments you will see the list here.") }}</p>
                </div>
              </div>
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4">
                <div class="table-responsive table-custom table-border-y-0">
                  <table class="table">
                    <tbody>
                    
                     
                      <tr class="bg-sub-light text-bold">
                        <th>{{ $t("Subtotal") }}:</th>
                        <td>{{ allData.subTotal }} </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Product Discount") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ totalProductDiscount  }} 
                        </td>
                      </tr>

                      <tr v-if="isSaudiArabia" class="bg-green-light text-bold">
                        <th>{{ $t("Total After Discount") }}:</th>
                        <td>{{ (allData.subTotal - totalProductDiscount)  }} </td>
                      </tr>

                      <tr v-if="isSaudiArabia && totalProductVat > 0">
                        <th>{{ $t("Product VAT") }}:</th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ totalProductVat  }} 
                        </td>
                      </tr>




                      <!-- <tr v-if="allData.totalInvoiceReturn">
                        <th>{{ $t("Cost of Return Products") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ allData.totalInvoiceReturn | withCurrency }}
                        </td>
                      </tr> -->
                      <tr v-if="!isSaudiArabia && allData.discount > 0">
                        <th>
                          {{ $t("Discount") }}
                          <span v-if="allData.discountType == 1"
                            >({{ allData.discount }}%)</span
                          >
                          :
                        </th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ globalDiscountAmount | withCurrency }}
                        </td>
                      </tr>
                      <tr v-if="!isSaudiArabia && allData.transport > 0">
                        <th>{{ $t("Transport") }}:</th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ allData.transport | withCurrency }}
                        </td>
                      </tr>
                      <tr v-if="!isSaudiArabia && allData.tax > 0">
                        <th>
                          {{ $t("Tax") }}
                          <span v-if="allData.taxRate"
                            >({{ allData.taxRate.rate }}%)</span
                          >: <br />
                          <span
                            v-if="
                              allData.taxRate &&
                              allData.taxRate.group_tax_details &&
                              allData.taxRate.group_tax_details.length
                            "
                          >
                            (                              <span
                                v-for="(tax, index) in allData.taxRate
                                  .group_tax_details"
                                :key="tax.id"
                              >
                              {{ tax.rate }}%<span
                                v-if="
                                  index <
                                  allData.taxRate.group_tax_details.length - 1
                                "
                              >
                                +</span
                              > </span
                            >)
                          </span>
                        </th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ allData.tax  }}
                        </td>
                      </tr>
                      <tr class="bg-indigo-light">
                        <th>{{ $t("Total with VAT") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ calculatedTotal  }} 
                        </td>
                      </tr>
                      <tr v-if="allData.invoicePayments">
                        <th>{{ $t("Total Paid") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ allData.totalPaid  }}
                        </td>
                      </tr>
                      <tr class="bg-red-light">
                        <th>{{ $t("Due") }}:</th>
                        <td>{{ (calculatedTotal - (allData.totalPaid || 0))  }}</td>
                      </tr>
                      <tr class="bg-green-light" v-if="allData.accountPayable">
                        <th>{{ $t("Account Payable") }}:</th>
                        <td>{{ allData.accountPayable  }}</td>
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
    return { title: this.$t("Invoice Details") };
  },
  data: () => ({
    allData: "",
    breadcrumbsCurrent: "Invoice Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Invoices",
        url: "invoices.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    invoiceProducts: [],
    productPrefix: "",
    clientPrefix: "",
    invoicePrefix: "",
    loading: false,
    form: new Form({
      isSendEmail: false,
      isSendSMS: false,
    }),
    isDemoMode: window.config.isDemoMode,
    query: "",
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "pagination"]),
    
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      const result = !this.appInfo?.country || this.appInfo.country === 'SA';
      console.log('[InvoiceDetails] isSaudiArabia:', result, 'appInfo.country:', this.appInfo?.country);
      return result;
    },
    
    // Calculate correct total based on Saudi Arabia rules
     calculatedTotal() {
       if (!this.allData) return 0;
       
       if (this.isSaudiArabia) {
         // For Saudi Arabia: Subtotal - Product Discount + Product VAT
         return this.allData.subTotal - this.totalProductDiscount + this.totalProductVat;
       } else {
         // For other countries: Subtotal - Returns - Global Discount + Transport + Tax
         return this.allData.subTotal - 
                (this.allData.totalInvoiceReturn || 0) - 
                this.globalDiscountAmount + 
                (this.allData.transport || 0) + 
                (this.allData.tax || 0);
       }
     },
     
     // Calculate total product VAT
     totalProductVat() {
       if (!this.invoiceProducts) return 0;
       return this.invoiceProducts.reduce((total, product) => {
         return total + (product.productTax || 0);
       }, 0);
     },
     
     // Calculate total product discount
     totalProductDiscount() {
       if (!this.invoiceProducts) return 0;
       return this.invoiceProducts.reduce((total, product) => {
         return total + this.calculateProductDiscountAmount(product);
       }, 0);
     },
     
     // Count products with VAT
     productsWithVat() {
       if (!this.invoiceProducts) return 0;
       return this.invoiceProducts.filter(product => product.productTax && product.productTax > 0).length;
     },
     
     // Count products with discount
     productsWithDiscount() {
       if (!this.invoiceProducts) return 0;
       return this.invoiceProducts.filter(product => product.productDiscount && product.productDiscount > 0).length;
     },
     

     
     // Calculate global discount amount (handles both percentage and fixed)
     globalDiscountAmount() {
       if (!this.allData || !this.allData.discount || this.allData.discount <= 0) return 0;
       
       // Global invoice discounts use numeric values: 1 for percentage, 0 for fixed
       if (this.allData.discountType == 1) { // Percentage
         return (this.allData.subTotal * this.allData.discount) / 100;
       } else { // Fixed
         return this.allData.discount;
       }
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
    this.getInvoice();
    this.productPrefix = this.appInfo.productPrefix;
    this.clientPrefix = this.appInfo.clientPrefix;
    this.invoicePrefix = this.appInfo.invoicePrefix;
  },
  methods: {
    // Calculate actual discount amount for a product (handles both percentage and fixed)
    calculateProductDiscountAmount(product) {
      if (!product.productDiscount || product.productDiscount <= 0) return 0;
      
      // Product discounts use string values: 'percentage' or 'fixed'
      if (product.discountType === 'percentage') {
        return (product.salePrice * product.quantity * product.productDiscount) / 100;
      } else {
        return product.productDiscount;
      }
    },
    
    // get the invoice
    async getInvoice() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/invoices/" + this.$route.params.slug
      );
      this.allData = data.data;
      this.invoiceProducts = this.allData.invoiceProducts;
      this.invoiceProducts.sort(this.sortProducts);
      
      // Debug: Check what we're getting
      console.log('[InvoiceDetails] allData.subTotal:', this.allData.subTotal);
      console.log('[InvoiceDetails] totalProductVat:', this.totalProductVat);
      console.log('[InvoiceDetails] totalProductDiscount:', this.totalProductDiscount);
      console.log('[InvoiceDetails] calculatedTotal:', this.calculatedTotal);
      console.log('[InvoiceDetails] isSaudiArabia:', this.isSaudiArabia);
      console.log('[InvoiceDetails] appInfo:', this.appInfo);
      
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
    // download pdf - now opens print page
    generatePDF() {
      // Open the print page in a new window
      const printUrl = `/print/invoice/${this.$route.params.slug}`;
      window.open(printUrl, '_blank');
    },
    // notify
    async notify() {
      if (!this.isDemoMode) {
        this.loading = true;
        await this.form
          .post(
            window.location.origin +
              "/api/invoice/notify/" +
              this.$route.params.slug
          )
          .then(() => {
            toast.fire({
              type: "success",
              title: this.$t("Notification sent successfully."),
            });
          })
          .catch(() => {
            toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
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
      const printUrl = `/print/invoice/${this.$route.params.slug}`;
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
      let modelName = "Invoice";
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
      let modelName = "Invoice";
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
