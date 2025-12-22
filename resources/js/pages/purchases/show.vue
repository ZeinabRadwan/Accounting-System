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
                <a class="nav-link active" href="#details" data-toggle="tab" @click="getPurchase">
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a>
              </li>
              <li class="nav-item">
                <a @click="getActivity" class="nav-link" href="#activity-log" data-toggle="tab">
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a>
              </li>
            </ul>
          </div>

          <div class="btn-group">
            <a @click="communicationConfig.sms_configured ? notify((form.isSendSMS = true)) : null" href="#" :class="[
              'btn',
              communicationConfig.sms_configured ? 'btn-secondary' : 'btn-secondary disabled'
            ]" :disabled="!communicationConfig.sms_configured"
              :title="!communicationConfig.sms_configured ? $t('SMS settings not configured') : ''"
              v-tooltip="!communicationConfig.sms_configured ? $t('SMS settings not configured') : ''">
              <i class="fas fa-sms"></i> {{ $t("SMS") }}
            </a>
            <a @click="notify((form.isSendEmail = true))" href="#" class="btn btn-success"><i
                class="fas fa-paper-plane"></i> {{ $t("email") }}</a>
            <!-- New preview and download PDF buttons -->
            <a @click="previewPDF" href="#" class="btn btn-info">
              <i class="fas fa-eye"></i> {{ $t("Preview PDF") }}
            </a>
            <a @click="downloadPDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <!-- Add Payment button hidden -->
            <!-- <a v-if="allData && allData.status === 1 && calculateDueAmount > 0" @click.prevent="addPayment()" href="#"
              class="btn btn-primary">
              <i class="fas fa-money-bill" /> {{ $t("Add Payment") }}
            </a> -->
            <a v-if="$can('purchase-return-create') && allData"
              @click.prevent="returnPurchase(allData)" href="#" class="btn btn-warning">
              <i class="fas fa-undo"></i> {{ $t("Return Purchase") }}
            </a>
            <router-link v-if="$can('purchase-edit')" :to="{
              name: 'purchases.edit',
              params: { slug: allData.slug },
            }" class="btn btn-info">
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link :to="{ name: 'purchases.index' }" class="btn btn-info float-right">
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
              <div class="col-sm-8 invoice-col float-right text-md-right">
                <h5>{{ $t("Supplier Details") }}</h5>
                <div v-if="allData.supplier">
                  <strong>{{ $t("Supplier ID") }}:</strong>
                  {{ allData.supplier.supplierID | withPrefix(supplierPrefix)
                  }}<br />
                  <strong>{{ $t("Supplier Name") }}:</strong>
                  {{ allData.supplier.name }}<br />
                  <span v-if="allData.supplier.companyName"><strong>{{ $t("Company Name") }}:</strong>
                    {{ allData.supplier.companyName }}<br /></span>
                  <span v-if="allData.supplier.email"><strong>{{ $t("Email") }}:</strong>
                    {{ allData.supplier.email }}<br /></span>
                  <span v-if="allData.supplier.phoneNumber"><strong>{{ $t("Contact Number") }}:</strong>
                    {{ allData.supplier.phoneNumber }}<br /></span>
                  <span v-if="allData.supplier.address"><strong>{{ $t("Address") }}:</strong>
                    {{ allData.supplier.address }}<br /></span>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Purchase Header Information Table -->
            <div class="row mt-3">
              <div class="col-12">
                <GeneralTable :columns="purchaseHeaderColumns" :rows="purchaseHeaderRows" :loading="loading"
                  wrapper-class="">
                  <template #cell-purchaseNo="{ value }">
                    {{ value | withPrefix(purchasePrefix) }}
                  </template>
                  <template #cell-purchaseDate="{ value }">
                    {{ value | moment("Do MMM, YYYY") }}
                  </template>
                  <template #cell-purchaseStatus="{ value }">
                    <span v-if="value === 'تم الاستلام'" class="badge bg-success">
                      {{ $t("Received") }} ({{ value }})
                    </span>
                    <span v-else-if="value === 'معلقة'" class="badge bg-warning">
                      {{ $t("Pending") }} ({{ value }})
                    </span>
                    <span v-else>{{ value || '-' }}</span>
                  </template>
                  <template #cell-date="{ value }">
                    {{ value | moment("Do MMM, YYYY") }}
                  </template>
                  <template #cell-paymentType="{ value }">
                    <span v-if="value === 'paid'" class="badge bg-success">
                      {{ $t("Paid") }} (مدفوع)
                    </span>
                    <span v-else-if="value === 'due'" class="badge bg-warning">
                      {{ $t("On Credit") }} (أجل)
                    </span>
                    <span v-else>{{ value || '-' }}</span>
                  </template>
                  <template #cell-journalEntry="{ value }">
                    <router-link v-if="value && value.id" 
                      :to="{ name: 'journal-entries.show', params: { id: value.id } }" 
                      class="badge bg-info text-white" 
                      style="text-decoration: none;">
                      {{ value.entry_number || `#${value.id}` }}
                    </router-link>
                    <span v-else class="text-muted">-</span>
                  </template>
                </GeneralTable>
              </div>
            </div>

            <!-- Purchase-Level Discount Section -->
            <div class="row mt-3" v-if="hasPurchaseDiscount">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table class="table invoices-table">
                    <thead>
                      <tr>
                        <th>{{ $t("Purchase Discount") }}</th>
                        <th>{{ $t("Discount Type") }}</th>
                        <th>{{ $t("Discount Value") }}</th>
                        <th>{{ $t("Discount Amount") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t("Purchase Discount") }}</td>
                        <td>
                          <span v-if="purchaseDiscountType === 'percentage'">{{ $t("%") }}</span>
                          <span v-else-if="purchaseDiscountType === 'fixed'">{{ $t("Fixed") }}</span>
                          <span v-else>{{ purchaseDiscountType }}</span>
                        </td>
                        <td>
                          {{ formatNumber(purchaseDiscountValue) }}
                          <span v-if="purchaseDiscountType === 'percentage'">%</span>
                          <span v-else class="saudi-riyal">ê</span>
                        </td>
                        <td>
                          {{ formatNumber(globalDiscountAmount) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Attachments Section -->
            <div class="row mt-3" v-if="allData.attachments && allData.attachments.length > 0">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table class="table invoices-table">
                    <thead>
                      <tr>
                        <th>{{ $t("Attachments") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <ul class="list-unstyled mb-0">
                            <li v-for="(attachment, index) in allData.attachments" :key="index" class="mb-2">
                              <a :href="attachment.url || attachment.path" target="_blank"
                                class="d-flex align-items-center">
                                <i class="fas fa-file mr-2"></i>
                                <span>{{ attachment.name || attachment.file_name || `Attachment ${index + 1}` }}</span>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Notes Section -->
            <div class="row mt-3" v-if="allData.note">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table class="table invoices-table">
                    <thead>
                      <tr>
                        <th>{{ $t("Notes") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ allData.note }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Table row -->
            <div class="row mt-4">
              <div class="col-12">
                <strong class="mb-2 d-block">{{ $t("Purchase Products") }}:</strong>
                <GeneralTable :columns="purchaseProductsColumns" :rows="purchaseProductsRows" :loading="loading"
                  wrapper-class="">
                  <template #cell-code="{ value }">
                    {{ value | withPrefix(productPrefix) }}
                  </template>
                  <template #cell-price="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                  <template #cell-total="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                  <template #cell-discount="{ value }">
                    <span v-if="value > 0">
                      {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                    </span>
                    <span v-else class="text-muted">
                      {{ $t('No Discount') }}
                    </span>
                  </template>
                  <template #cell-totalAfterDiscount="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                  <template #cell-vat="{ value }">
                    <span v-if="value > 0">
                      {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                    </span>
                    <span v-else class="text-muted">
                      {{ $t('No VAT') }}
                    </span>
                  </template>
                  <template #cell-totalWithVat="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                </GeneralTable>
                <div class="mt-2 text-center">
                  <strong>{{ $t("Subtotal") }}: {{ formatNumber(allData.subTotal) }} <span
                      class="saudi-riyal">ê</span></strong>
                </div>
              </div>
            </div>

            <!-- /.row -->
            <div class="row mt-4" id="page-break">
              <div class="col-lg-12 col-xl-8">
                <div v-if="
                  allData.payments &&
                  allData.payments.length > 0
                ">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <strong>{{ $t("Payment History") }}:</strong>
                    <div v-if="allData.paymentType !== undefined || allData.payment_type !== undefined">
                      <strong>{{ $t("Payment Type") }}:</strong>
                      <span v-if="allData.paymentType === 'paid' || allData.payment_type === 'paid'"
                        class="badge bg-success ml-2">
                        {{ $t("Paid") }} (مدفوع)
                      </span>
                      <span v-else class="badge bg-warning ml-2">
                        {{ $t("On Credit") }} (أجل)
                      </span>
                      <span
                        v-if="(allData.paymentType === 'paid' || allData.payment_type === 'paid') && (allData.paymentMethod || allData.payment_method_id)"
                        class="ml-2">
                        - {{ allData.paymentMethod ? allData.paymentMethod.name : (allData.payment_method_id ?
                          getPaymentMethodName(allData.payment_method_id) : '-') }}
                      </span>
                    </div>
                  </div>
                  <GeneralTable :columns="purchasePaymentHistoryColumns" :rows="purchasePaymentHistoryRows"
                    :loading="loading" wrapper-class="">
                    <template #cell-amount="{ value }">
                      {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-status="{ value }">
                      <span v-if="value === 1" class="badge bg-success">{{ $t("Active") }}</span>
                      <span v-else class="badge bg-danger">{{ $t("Inactive") }}</span>
                    </template>
                  </GeneralTable>
                  <div class="mt-2 text-right">
                    <strong>{{ $t("Total Paid") }}: {{ formatNumber(allData.totalPaid) }} <span
                        class="saudi-riyal">ê</span></strong>
                  </div>
                </div>
                <div class="no-print callout callout-danger mt-4 w-100" v-else>
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">{{ $t("No payments available yet!") }}</h5>
                    <div v-if="allData.paymentType !== undefined || allData.payment_type !== undefined" class="ml-3">
                      <strong>{{ $t("Payment Type") }}:</strong>
                      <span v-if="allData.paymentType === 'paid' || allData.payment_type === 'paid'"
                        class="badge bg-success ml-2">
                        {{ $t("Paid") }} (مدفوع)
                      </span>
                      <span v-else class="badge bg-warning ml-2">
                        {{ $t("On Credit") }} (أجل)
                      </span>
                      <span
                        v-if="(allData.paymentType === 'paid' || allData.payment_type === 'paid') && (allData.paymentMethod || allData.payment_method_id)"
                        class="ml-2">
                        - {{ allData.paymentMethod ? allData.paymentMethod.name : (allData.payment_method_id ?
                          getPaymentMethodName(allData.payment_method_id) : '-') }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4 pt-2">
                <div class="table-responsive table-custom table-border-y-0" v-if="allData.supplier">
                  <table class="table">
                    <tbody>
                      <tr class="bg-sub-light text-bold">
                        <th>{{ $t("Subtotal") }}:</th>
                        <td>{{ formatNumber(subtotal) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr v-if="totalDiscount > 0">
                        <th>{{ $t("Total Discount") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ formatNumber(totalDiscount) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>

                      <tr class="bg-green-light text-bold">
                        <th>{{ $t("Total After Discount") }}:</th>
                        <td>{{ formatNumber(subtotal) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>

                      <tr>
                        <th>{{ $t("Total Tax") }}:</th>
                        <td>
                          {{ formatNumber(totalTax) }} <span class="saudi-riyal">ê</span>
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
                      <tr v-if="allData.transport > 0">
                        <th>{{ $t("Transport") }}:</th>
                        <td>
                          {{ formatNumber(allData.transport) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-indigo-light text-bold">
                        <th>{{ $t("Grand Total") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ formatNumber(grandTotal) }} <span
                            class="saudi-riyal">ê</span>
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
                        <td>{{ formatNumber(netTotal - (parseFloat(allData.totalPaid) || 0)) }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr class="bg-green-light" v-if="allData.accountReceivable">
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
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import SwalOriginal from "sweetalert2/dist/sweetalert2";
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Purchase Details") };
  },
  components: {
    GeneralTable,
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

    // Calculate total price (sum of Total column in items table) - stored value
    totalPrice() {
      if (!this.purchaseProducts) return 0;
      return this.purchaseProducts.reduce((total, product) => {
        return total + (parseFloat(product.grossTotal) || 0);
      }, 0);
    },

    // Subtotal = sum of item net prices (after all discounts) - use stored values only
    // Net price = (quantity × purchase_price) - discount_amount (stored in database)
    subtotal() {
      if (!this.purchaseProducts || this.purchaseProducts.length === 0) return 0;
      
      let subtotal = 0;
      this.purchaseProducts.forEach((product) => {
        // Use stored values: line_total - discount_amount = net_price
        const lineTotal = parseFloat(product.grossTotal || 0);
        const discountAmount = parseFloat(product.discountAmount || 0); // Stored discount_amount
        const netPrice = lineTotal - discountAmount;
        subtotal += netPrice;
      });
      
      return this.roundToTwoDecimals(subtotal);
    },

    // Total discount = sum of stored discount_amount values (display-only, not applied again)
    totalProductDiscount() {
      if (!this.purchaseProducts) return 0;
      const total = this.purchaseProducts.reduce((sum, product) => {
        return sum + (parseFloat(product.discountAmount || 0)); // Stored discount_amount
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Total tax = sum of stored tax_amount values + invoice-level tax (if any)
    totalProductVat() {
      if (!this.purchaseProducts) return 0;
      
      // Sum of stored VAT values (already calculated on net prices after discount + transport)
      let totalVat = this.purchaseProducts.reduce((sum, product) => {
        return sum + (parseFloat(product.taxTotal || 0)); // Stored tax_amount
      }, 0);
      
      // Add invoice-level tax if any (for non-Saudi Arabia)
      if (!this.isSaudiArabia && this.allData && this.allData.tax) {
        totalVat += parseFloat(this.allData.tax);
      }
      
      return this.roundToTwoDecimals(totalVat);
    },

    // Calculate due amount
    calculateDueAmount() {
      if (!this.allData) return 0;
      const total = this.netTotal;
      const paid = parseFloat(this.allData.totalPaid) || 0;
      return total - paid;
    },

    // Check if purchase has discount (supports both old and new format)
    hasPurchaseDiscount() {
      if (!this.allData) return false;
      // Check new format first (discount_type/discount_value)
      if (this.allData.discount_type && this.allData.discount_value && this.allData.discount_value > 0) {
        return true;
      }
      // Check old format (discount/discountType)
      if (this.allData.discount && this.allData.discount > 0) {
        return true;
      }
      return false;
    },

    // Get purchase discount type (supports both old and new format)
    purchaseDiscountType() {
      if (!this.allData) return null;
      // New format: discount_type is already "percentage" or "fixed"
      if (this.allData.discount_type) {
        return this.allData.discount_type;
      }
      // Old format: discountType is 0 (fixed) or 1 (percentage)
      if (this.allData.discountType !== null && this.allData.discountType !== undefined) {
        return this.allData.discountType == 1 ? 'percentage' : 'fixed';
      }
      return null;
    },

    // Get purchase discount value (supports both old and new format)
    purchaseDiscountValue() {
      if (!this.allData) return 0;
      // New format: discount_value
      if (this.allData.discount_value !== null && this.allData.discount_value !== undefined) {
        return this.allData.discount_value;
      }
      // Old format: discount
      if (this.allData.discount !== null && this.allData.discount !== undefined) {
        return this.allData.discount;
      }
      return 0;
    },

    // Total discount (display-only info, not applied again)
    // Note: discount_amount in database already includes product-level + proportional invoice-level discount
    totalDiscount() {
      return this.totalProductDiscount;
    },

    // Total tax = sum of stored tax_amount values + invoice-level tax (if any)
    totalTax() {
      return this.totalProductVat;
    },

    // Grand total = subtotal + VAT + transport (simple addition of stored values)
    // Always use: subtotal_after_discount + vat_total + transport_cost
    grandTotal() {
      if (!this.allData) return 0;
      
      // Always calculate: subtotal + VAT + transport
      // This matches the create page exactly
      const transportCost = parseFloat(this.allData.transport || 0);
      const grandTotal = this.subtotal + this.totalTax + transportCost;
      
      return this.roundToTwoDecimals(Math.max(0, grandTotal));
    },

    // Calculate net total (for backward compatibility - same as grandTotal)
    netTotal() {
      return this.grandTotal;
    },

    // Purchase header columns
    purchaseHeaderColumns() {
      const columns = [
        { key: "purchaseNo", label: this.$t("Purchase No"), align: "text-center" },
        { key: "purchaseDate", label: this.$t("Purchase Date"), align: "text-center" },
        { key: "createdBy", label: this.$t("Created By"), align: "text-center" },
      ];

      // Add journal entry column if journal entry exists
      if (this.allData && this.allData.journalEntry) {
        columns.push({ key: "journalEntry", label: this.$t("Journal Entry"), align: "text-center" });
      }

      if (this.allData && this.allData.costCenter) {
        columns.push({ key: "costCenter", label: this.$t("Cost Center"), align: "text-center" });
      }
      if (this.allData && this.allData.branch) {
        columns.push({ key: "branch", label: this.$t("Branch"), align: "text-center" });
      }
      if (this.allData && this.allData.purchase_status) {
        columns.push({ key: "purchaseStatus", label: this.$t("Purchase Status"), align: "text-center" });
      }
      if (this.allData && this.allData.purchaseDate) {
        columns.push({ key: "date", label: this.$t("Date"), align: "text-center" });
      }
      if (this.allData && this.allData.reference) {
        columns.push({ key: "reference", label: this.$t("Reference Number"), align: "text-center" });
      }
      if (this.allData && this.allData.payment_type) {
        columns.push({ key: "paymentType", label: this.$t("Payment Type"), align: "text-center" });
      }
      if (this.allData && (this.allData.paymentMethod || this.allData.payment_method_id)) {
        columns.push({ key: "paymentMethod", label: this.$t("Payment Method"), align: "text-center" });
      }

      return columns;
    },

    // Purchase header rows
    purchaseHeaderRows() {
      if (!this.allData) return [];

      const row = {
        purchaseNo: this.allData.purchaseNo || '',
        purchaseDate: this.allData.purchaseDate || '',
        createdBy: this.allData.createdBy || '-',
        journalEntry: this.allData.journalEntry || null,
      };

      if (this.allData.costCenter) {
        row.costCenter = this.allData.costCenter.name || '-';
      }
      if (this.allData.branch) {
        row.branch = this.allData.branch.name || '-';
      }
      if (this.allData.purchase_status) {
        row.purchaseStatus = this.allData.purchase_status;
      }
      if (this.allData.purchaseDate) {
        row.date = this.allData.purchaseDate;
      }
      if (this.allData.reference) {
        row.reference = this.allData.reference;
      }
      if (this.allData.payment_type) {
        row.paymentType = this.allData.payment_type;
      }
      if (this.allData.paymentMethod || this.allData.payment_method_id) {
        row.paymentMethod = this.allData.paymentMethod ? this.allData.paymentMethod.name : this.getPaymentMethodName(this.allData.payment_method_id);
      }

      return [row];
    },

    // Purchase products columns
    purchaseProductsColumns() {
      const columns = [
        { key: "index", label: this.$t("#"), align: "text-center" },
        { key: "code", label: this.$t("Code"), align: "text-center" },
        { key: "name", label: this.$t("Item Name"), align: "text-center" },
        { key: "quantity", label: this.$t("Qty"), align: "text-center" },
      ];
      if (this.allData && this.allData.purchaseReturn) {
        columns.push({ key: "returnQty", label: this.$t("Return Qty"), align: "text-center" });
      }
      columns.push(
        { key: "price", label: this.$t("Price"), align: "text-center" },
        { key: "total", label: this.$t("Total"), align: "text-center" },
        { key: "discount", label: this.$t("Discount"), align: "text-center" },
        { key: "totalAfterDiscount", label: this.$t("Total After Discount"), align: "text-center" },
        { key: "vat", label: this.$t("VAT"), align: "text-center" },
        { key: "totalWithVat", label: this.$t("Total with VAT"), align: "text-center" }
      );
      return columns;
    },

    // Purchase products rows
    purchaseProductsRows() {
      if (!this.purchaseProducts || !this.purchaseProducts.length) return [];
      return this.purchaseProducts.map((product, index) => {
        const row = {
          index: index + 1,
          code: product.productCode || '',
          name: product.productName || '',
          quantity: `${product.quantity || 0} ${product.productUnit || ''}`,
          price: parseFloat(product.purchasePrice) || 0,
          total: parseFloat(product.grossTotal) || 0,
          discount: parseFloat(product.discountAmount) || 0,
          totalAfterDiscount: parseFloat(product.totalAfterDiscount) || 0,
          vat: parseFloat(product.taxTotal) || 0,
          totalWithVat: parseFloat(product.lineTotal) || 0,
          _raw: product,
        };
        if (this.allData && this.allData.purchaseReturn) {
          row.returnQty = `${product.returnQty > 0 ? product.returnQty : 0} ${product.productUnit || ''}`;
        }
        return row;
      });
    },

    // Purchase payment history columns
    purchasePaymentHistoryColumns() {
      return [
        { key: "index", label: this.$t("#"), align: "" },
        { key: "date", label: this.$t("Payment Date"), align: "" },
        { key: "amount", label: this.$t("Paid Amount"), align: "" },
        { key: "account", label: this.$t("Account"), align: "" },
        { key: "chequeNo", label: this.$t("Cheque No"), align: "" },
        { key: "receiptNo", label: this.$t("Receipt No"), align: "" },
        { key: "status", label: this.$t("Status"), align: "text-right" },
      ];
    },

    // Purchase payment history rows
    purchasePaymentHistoryRows() {
      if (!this.allData || !this.allData.payments) return [];
      return this.allData.payments.map((payment, index) => ({
        index: index + 1,
        date: payment.date || "",
        amount: payment.amount || 0,
        account: payment.purchase_payment_transaction?.cashbook_account
          ? `${payment.purchase_payment_transaction.cashbook_account.bank_name} (${payment.purchase_payment_transaction.cashbook_account.account_number})`
          : "",
        chequeNo: payment.purchase_payment_transaction?.cheque_no || "",
        receiptNo: payment.purchase_payment_transaction?.receipt_no || "",
        status: payment.status,
        _raw: payment,
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

    // Helper method to round to 2 decimal places (for calculations in computed props)
    roundToTwoDecimals(value) {
      return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
    },

    // Get payment method name by ID
    getPaymentMethodName(methodId) {
      const methods = {
        'cash': 'نقدي (Cash)',
        'visa': 'فيزا (Visa)',
        'mada': 'مدى (Mada)',
        'mastercard': 'ماستركارد (Mastercard)',
        'bank_transfer': 'تحويل بنكي (Bank Transfer)',
        'stc_pay': 'STC Pay',
        'amex': 'أمريكان إكسبريس (American Express)'
      };
      return methods[methodId] || methodId;
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

    // Commented out - replaced with downloadPDF method
    // printWindow() {
    //   // Open the print page in a new window
    //   const printUrl = `/print/purchase/${this.$route.params.slug}`;
    //   window.open(printUrl, '_blank');
    // },

    // download PDF
    downloadPDF() {
      const params = new URLSearchParams();
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      const pdfUrl = `/print/purchase/${this.$route.params.slug}/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    // preview PDF
    previewPDF() {
      const params = new URLSearchParams();
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      const pdfUrl = `/print/purchase/${this.$route.params.slug}/preview?${params.toString()}`;
      window.location.href = pdfUrl;
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
