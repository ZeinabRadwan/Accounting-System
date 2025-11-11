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
            <!-- Commented out old download and print buttons -->
            <!-- <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <a @click="printWindow()" href="#" class="btn btn-secondary">
              <i class="fas fa-print"></i> {{ $t("Print") }}
            </a> -->
            <!-- New preview and download PDF buttons -->
            <a @click="previewPDF" href="#" class="btn btn-info">
              <i class="fas fa-eye"></i> {{ $t("Preview PDF") }}
            </a>
            <a @click="downloadPDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <a 
              v-if="isSaudiArabia && allData && allData.status === 0"
              @click="sendInvoice(allData)" 
              href="#" 
              class="btn btn-success"
            >
              <i class="fas fa-paper-plane"></i> {{ $t("Send Invoice to ZATCA") }}
            </a>

            <router-link
              v-if="$can('invoice-edit') && !(isSaudiArabia && allData && allData.status === 1)"
              :to="{
                name: 'invoices.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <a
              v-if="allData && allData.status === 1 && calculateDueAmount > 0"
              @click.prevent="addPayment()"
              href="#"
              class="btn btn-primary"
            >
              <i class="fas fa-money-bill" /> {{ $t("Add Payment") }}
            </a>
            <a
              v-if="$can('invoice-return-create') && allData && allData.status === 1"
              @click.prevent="returnInvoice(allData)"
              href="#"
              class="btn btn-warning"
            >
              <i class="fas fa-undo" /> {{ $t("Return Invoice") }}
            </a>
            <router-link
              :to="{ name: 'invoices.index' }"
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
                class="col-sm-8  invoice-col float-right text-md-right"
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
                        <td>{{ formatNumber(data.salePrice) }} <span class="saudi-riyal">ê</span></td>
                        <td class="align-middle">{{ formatNumber(data.salePrice * data.quantity) }} <span class="saudi-riyal">ê</span></td>
                        <td>
                          <span v-if="data.discountType === 'percentage'">
                            {{ data.discountPercentage }}% ({{ formatNumber(calculateProductDiscountAmount(data)) }} <span class="saudi-riyal">ê</span>)
                          </span>
                          <span v-else-if="data.productDiscount > 0">
                            {{ formatNumber(calculateProductDiscountAmount(data)) }} <span class="saudi-riyal">ê</span>
                          </span>
                          <span v-else class="text-muted">
                            {{ $t('No Discount') }}
                          </span>
                        </td>
                        <td class="align-middle">{{ formatNumber((data.salePrice * data.quantity) - calculateProductDiscountAmount(data)) }} <span class="saudi-riyal">ê</span></td>
                        <td>
                          <span v-if="data.productTax > 0">
                            {{ formatNumber(data.productTax) }} <span class="saudi-riyal">ê</span>
                            <small v-if="data.vatRate" class="text-muted d-block">
                              ({{ data.vatRate.rate }}%)
                            </small>
                          </span>
                          <span v-else class="text-muted">
                            {{ $t('No VAT') }}
                          </span>
                        </td>
                        <td class="align-middle">{{ formatNumber((data.salePrice * data.quantity) - calculateProductDiscountAmount(data) + (data.productTax || 0)) }} <span class="saudi-riyal">ê</span></td>
                        <!-- <td>{{ data.unitCost  }} <span class="saudi-riyal">ê</span></td>
                        <td
                          v-if="allData.totalInvoiceReturn"
                          class="text-right"
                        >
                          {{ (data.unitCost * data.returnQty)  }} <span class="saudi-riyal">ê</span>
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
                            {{ allData.subTotal  }} <span class="saudi-riyal">ê</span>
                          </strong>
                        </td> -->
                        <!-- <td
                          v-if="allData.totalInvoiceReturn"
                          class="text-right"
                        >
                          <strong>{{
                            allData.totalInvoiceReturn 
                          }} <span class="saudi-riyal">ê</span></strong>
                        </td> -->
                      </tr>
                      <tr>
                        <td
                          :colspan="allData.totalInvoiceReturn ? 10 : 9"
                          class="text-center"
                        >
                          <strong>
                            {{ formatNumber(allData.subTotal) }} <span class="saudi-riyal">ê</span>
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
                         <td>{{ totalProductVat  }} <span class="saudi-riyal">ê</span></td>
                         <th>{{ $t('Total Product Discount') }}:</th>
                         <td>{{ totalProductDiscount  }} <span class="saudi-riyal">ê</span></td>
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
                          <td>{{ formatNumber(data.amount) }} <span class="saudi-riyal">ê</span></td>
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
                              formatNumber(allData.totalPaid)
                            }} <span class="saudi-riyal">ê</span></strong>
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




                      <!-- <tr v-if="allData.totalInvoiceReturn">
                        <th>{{ $t("Cost of Return Products") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ allData.totalInvoiceReturn  }} <span class="saudi-riyal">ê</span>
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
                          {{ formatNumber(globalDiscountAmount) }} <span class="saudi-riyal">ê</span>
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
                          {{ formatNumber(allData.tax) }}
                        </td>
                      </tr>
                      <tr class="bg-indigo-light">
                        <th>{{ $t("Total with VAT") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ formatNumber(totalPrice - totalProductDiscount + totalProductVat) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr v-if="allData.invoicePayments">
                        <th>{{ $t("Total Paid") }}:</th>
                        <td>
                          {{ formatNumber(allData.totalPaid) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-red-light">
                        <th>{{ $t("Due") }}:</th>
                        <td>{{ formatNumber((totalPrice - totalProductDiscount + totalProductVat) - (allData.totalPaid || 0)) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr class="bg-green-light" v-if="allData.accountPayable">
                        <th>{{ $t("Account Payable") }}:</th>
                        <td>{{ formatNumber(allData.accountPayable) }}</td>
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
    // Communication configuration status
    communicationConfig: {
      email_configured: false,
      sms_configured: false,
      loading: true,
    },
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
         // For Saudi Arabia: subTotal already includes discount and VAT
         return this.allData.subTotal;
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
     
     // Calculate total price (sum of Total column in items table)
     totalPrice() {
       if (!this.invoiceProducts) return 0;
       return this.invoiceProducts.reduce((total, product) => {
         return total + (product.salePrice * product.quantity);
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
     
     // Calculate due amount
     calculateDueAmount() {
       if (!this.allData) return 0;
       const total = this.totalPrice - this.totalProductDiscount + this.totalProductVat;
       const paid = this.allData.totalPaid || 0;
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
    this.getInvoice();
    this.loadCommunicationConfigStatus();
    this.productPrefix = this.appInfo.productPrefix;
    this.clientPrefix = this.appInfo.clientPrefix;
    this.invoicePrefix = this.appInfo.invoicePrefix;
  },
  methods: {
    // Format number to 2 decimal places
    formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return parseFloat(value).toFixed(2);
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

    // Get discount amount directly from invoice_products.discount_amount (no calculation needed)
    calculateProductDiscountAmount(product) {
      // productDiscount is already the discount_amount from the database
      // No need to multiply by quantity - just return the stored discount_amount
      return product.productDiscount || 0;
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
    // Commented out - replaced with downloadPDF method
    // generatePDF() {
    //   // Open the print page in a new window
    //   const printUrl = `/print/invoice/${this.$route.params.slug}`;
    //   window.open(printUrl, '_blank');
    // },
    
    // download PDF
    downloadPDF() {
      window.location.href = `/print/invoice/${this.$route.params.slug}/pdf`;
    },

    // preview PDF
    previewPDF() {
      window.location.href = `/print/invoice/${this.$route.params.slug}/preview`;
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
    // Commented out - replaced with printTemplateUrl link
    // printWindow() {
    //   // Open the print page in a new window
    //   const printUrl = `/print/invoice/${this.$route.params.slug}`;
    //   window.open(printUrl, '_blank');
    // },

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

    // Send invoice to ZATCA
    async sendInvoice(data) {
      console.log('Send invoice clicked for:', data);
      console.log('isSaudiArabia:', this.isSaudiArabia);
      console.log('data.status:', data.status);
      
      SwalOriginal.fire({
        title: this.$t("Send Invoice to ZATCA"),
        text: this.$t("Do you want to send this invoice to ZATCA?"),
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
              text: this.$t("Please wait while we send the invoice to ZATCA"),
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                SwalOriginal.showLoading();
              }
            });

            // Send invoice to ZATCA and create journal entries
            const response = await axios.post(`/api/invoices/${data.slug}/send-to-zatca`);
            
            // Close the loading dialog
            SwalOriginal.close();
            
            if (response.data.success) {
              this.$toast.success(
                this.$t("Sent Successfully!"),
                this.$t("Invoice has been sent to ZATCA and journal entries have been created.")
              );
              // Refresh the invoice data to update the status
              this.getInvoice();
            } else {
              this.$toast.error(
                this.$t("Failed!"),
                response.data.message || this.$t("Failed to send invoice to ZATCA")
              );
            }
          } catch (error) {
            console.error('Error sending invoice to ZATCA:', error);
            // Close the loading dialog
            SwalOriginal.close();
            this.$toast.error(
              this.$t("Error!"),
              error.response?.data?.message || this.$t("An error occurred while sending the invoice to ZATCA")
            );
          }
        }
      });
    },

    // Return invoice
    returnInvoice(data) {
      // Navigate to invoice return create page with pre-selected invoice
      // We'll fetch the client info from the invoice on the create page
      console.log('Full invoice data:', JSON.stringify(data, null, 2))
      console.log('Invoice slug:', data.slug)
      
      this.$router.push({
        name: 'invoiceReturns.create',
        query: {
          invoice: data.slug
        }
      });
    },

    // Add payment to invoice
    addPayment() {
      // Navigate to invoice payment create page with the invoice data
      this.$router.push({
        name: 'invoicePayments.create',
        query: {
          invoice: this.allData.slug,
          client: this.allData.client?.slug
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