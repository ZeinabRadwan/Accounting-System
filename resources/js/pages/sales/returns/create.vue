<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="dynamicBreadcrumbs" :current="dynamicBreadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'invoiceReturns.index' }" class="btn btn-info">
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
                <button type="submit" class="btn btn-success" :form="'invoiceReturnCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="invoiceReturnCreateForm" role="form" @submit.prevent="saveInvoiceReturn"
            @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="returnReason">{{ $t('Return Reason') }}
                    <span class="required">*</span></label>
                  <input id="returnReason" v-model="form.returnReason" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('returnReason') }" name="returnReason"
                    :placeholder="$t('Enter a reason')" />
                  <has-error :form="form" field="returnReason" />
                </div>
                <div class="form-group col-md-6">
                  <label for="client">{{ $t('Client') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.client" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                    :placeholder="$t('Select a client')" @input="assignInvoices" />
                  <has-error :form="form" field="client" />
                </div>
              </div>
              <!-- <div class="row">
                <div class="form-group col-md-12">
                  <label for="product">{{
                    $t('Select Products')
                  }}</label>
                  <v-select :disabled="form.client == ''" multiple v-model="form.product" :options="products"
                    label="label" :class="{ 'is-invalid': form.errors.has('product') }" name="product"
                    :placeholder="$t('Search products')" @input="assignInvoices" />
                  <has-error :form="form" field="product" />
                </div>
              </div> -->
              <div class="row" v-if="form.client && clientInvoices">
                <div class="form-group col-md-12">
                  <label for="invoice">{{ $t('Invoices') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.invoice" :options="clientInvoices" label="label"
                    :class="{ 'is-invalid': form.errors.has('invoice') }" name="invoice"
                    :placeholder="$t('Select an invoice')" @input="storeProducts" />
                  <has-error :form="form" field="invoice" />
                </div>
              </div>
              <div v-if="form.errors.errors && form.errors.errors.selectedProducts" class="w-100 m-auto mb-3">
                <div v-for="(msg, i) in form.errors.errors.selectedProducts" :key="i" class="callout callout-danger">
                  <p><i class="icon fas fa-ban"></i> {{ msg }}</p>
                </div>
              </div>
              <ItemsTable :items="form.selectedProducts" :prefix="prefix" :taxes="taxes" :form-errors="form.errors"
                :total-unit-price="totalUnitPrice" :total-product-discount="totalProductDiscount"
                :total-after-discount="totalAfterDiscount" :total-product-tax="totalProductTax" :subtotal="subtotal"
                :amount-in-words="toWord()" table-class="quotations-create-table" qty-field-name="returnQty"
                unit-price-field-name="unitCost" :price-readonly="true" :show-edit-button="false"
                :custom-total-value="totalTotal" :totals-colspan="4" :hide-discount-column="true" :hide-vat-column="true"
                @item-change="handleItemChange" @discount-change="calculateProductDiscount" @vat-change="calculateProductVat"
                @remove-item="removeItem" />
              <div class="row" id="input-fields">
                <!-- <div class="form-group col-md-3">
                  <label for="invoiceTotal">{{
                    $t('Invoice Total')
                  }}</label>
                  <input id="invoiceTotal" v-model="formattedOriginalInvoiceTotal" type="text" class="form-control"
                    name="invoiceTotal" readonly />
                </div> -->
                <div v-if="!isSaudiArabia" class="form-group col-md-3">
                  <label for="totalDiscount">{{
                    $t('Total Discount')
                    }}</label>
                  <input id="totalDiscount" v-model="formattedTotalDiscount" type="text" class="form-control"
                    name="totalDiscount" readonly />
                </div>
                <div v-if="!isSaudiArabia" class="form-group col-md-3">
                  <label for="transportCost">{{
                    $t('Transport Cost')
                    }}</label>
                  <input id="transportCost" v-model="formattedTransportCost" type="text" class="form-control"
                    name="transportCost" readonly />
                </div>
                <div v-if="!isSaudiArabia" class="form-group col-md-3">
                  <label for="invoiceTax">{{
                    $t('Invoice Tax')
                    }}</label>
                  <input id="invoiceTax" v-model="formattedInvoiceTax" type="text" class="form-control"
                    name="invoiceTax" readonly />
                </div>
                <!-- <div class="form-group col-md-3">
                  <label for="totalPaid">{{ $t('Total Paid') }}</label>
                  <input id="totalPaid" v-model="formattedTotalPaid" type="text" class="form-control"
                    name="totalPaid" readonly />
                </div> -->
                <div v-if="form.returnAmount > 0" class="form-group col-md-3">
                  <label for="returnAmountText">{{
                    $t('Return Amount')
                    }}</label>
                  <input id="returnAmountText" v-model="form.returnAmountText" type="text" class="form-control" :class="{
                    'is-invalid': form.errors.has('returnAmountText'),
                  }" name="returnAmountText" readonly />
                  <has-error :form="form" field="returnAmountText" />
                </div>
                <!-- <div v-else class="form-group col-md-3">
                  <label for="newDueText">{{
                    $t('New Due')
                  }}</label>
                  <input id="newDueText" v-model="form.newDueText" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('newDueText') }" name="newDueText" readonly />
                  <has-error :form="form" field="newDueText" />
                </div> -->
              </div>
              <div v-if="accounts && form.returnAmount > 0" class="row">
                <div class="form-group col-md-4">
                  <label for="account">{{ $t('Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')" @input="updateBalance">
                    <template slot="option" slot-scope="option">
                      <img :src="option.image" style="width: 30px; height: 30px;" />
                      {{ option.label }}
                    </template>
                  </v-select>

                  <!-- Bank Account Chart of Account Status -->
                  <div class="account-status mt-2" v-if="form.account">
                    <div v-if="!form.account.chartOfAccountId" class="account-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Bank Account needs Chart of Account') }}</span>
                      <button type="button" class="btn btn-sm btn-outline-warning ml-2" @click="goToBankAccounts">
                        <i class="fas fa-external-link-alt"></i>
                        {{ $t('Go to Bank Accounts') }}
                      </button>
                    </div>
                    <div v-else class="account-success">
                      <i class="fas fa-check-circle text-success"></i>
                      <span class="ml-2">{{ $t('Bank Account Chart of Account ready') }}</span>
                    </div>
                  </div>

                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-2">
                  <label for="availableBalance">{{
                    $t('Available Balance')
                    }}</label>
                  <input id="availableBalance" v-model="formattedAvailableBalance" type="text" class="form-control"
                    :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <!-- <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div> -->
                <div class="form-group col-md-3">
                  <label for="receiptNo">{{ $t('Receipt No') }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date">{{ $t('Return Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div v-if="!isSaudiArabia" class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t('Save') }}
                  </v-button>
                  <button type="reset" class="btn btn-info ml-2" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t('Reset') }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'
import ItemsTable from '~/components/ItemsTable'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return') }
  },
  components: {
    ItemsTable,
  },
  data: () => ({
    breadcrumbsCurrent: '',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: '',
        url: 'invoiceReturns.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      returnReason: '',
      account: '',
      availableBalance: 0,
      chequeNo: '',
      receiptNo: '',
      client: '',
      invoice: '',
      product: '',
      selectedProducts: [],
      totalReturn: 0,
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      // Match sales invoice create structure
      subTotal: 0,
      netTotal: 0,
      transportCost: '',
      transportIsTaxable: true, // Default to true to maintain existing behavior (transport is taxable)
      orderTax: '',
      totalTax: 0,
      productTotalTax: 0,
      invoiceTax: 0, // Invoice-level tax (for non-Saudi Arabia)
      total_amount: 0,
      totalPaid: '',
      dueAmount: '',
      // Legacy fields for backward compatibility
      newTax: 0,
      invoiceDiscount: 0,
      discountType: 0,
      discountPercentage: 0,
      invoiceTransport: 0,
      invoiceTaxRate: 0,
      invoiceTotal: 0,
      originalInvoiceTotal: 0,
      invoiceDue: 0,
      newDue: 0,
      newDueText: '',
      returnAmount: 0,
      returnAmountText: 0,
      newSubTotal: 0,
      taxAmount: 0,
      discountTotal: 0,
      totalDiscount: 0,
      // Discount structure (matching sales invoice create)
      discountType: 0, // 0 for fixed, 1 for percentage
      discount: 0,
      discount_type: 'percentage', // "percentage" or "fixed"
      discount_value: 0,
    }),
    products: '',
    accounts: '',
    clientInvoices: '',
    prefix: '',
    taxes: '',
    paymentMethods: [],
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),

    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA'
    },

    // Check if bank account has chart of account assigned (when payment is being added)
    hasBankAccountChartOfAccount() {
      if (this.form.returnAmount <= 0) {
        return true; // No payment being added, so no validation needed
      }
      return this.form.account && this.form.account.chartOfAccountId;
    },


    // Calculate total product discounts
    totalProductDiscounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0
      }

      return this.form.selectedProducts.reduce((total, product) => {
        let remainingQty = product.qty - product.returnQty
        let productTotal = remainingQty * product.unitCost

        if (product.productDiscount && product.productDiscount > 0) {
          if (product.discountType === 'percentage') {
            return total + ((productTotal * product.productDiscount) / 100)
          } else {
            let discountPerUnit = product.productDiscount / product.qty
            return total + (discountPerUnit * remainingQty)
          }
        }
        return total
      }, 0)
    },

    // Calculate total invoice discount
    totalInvoiceDiscount() {
      return this.form.invoiceDiscount || 0
    },

    // Calculate total discount (product + invoice)
    totalDiscount() {
      return this.totalProductDiscounts + this.totalInvoiceDiscount
    },


    // Calculate original invoice total discount from invoice_products table
    originalInvoiceTotalDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0
      }

      return this.form.selectedProducts.reduce((total, product) => {
        // Use the original product data from invoice_products
        const salePrice = parseFloat(product.unitCost) || 0
        const quantity = parseFloat(product.qty) || 0
        const discountAmount = parseFloat(product.discountAmount) || 0
        const discountType = product.discountType || 'fixed'

        let lineDiscount = 0
        if (discountType === 'fixed') {
          lineDiscount = discountAmount
        } else if (discountType === 'percentage') {
          lineDiscount = (salePrice * quantity) * (discountAmount / 100)
        }

        return total + lineDiscount
      }, 0)
    },

    // Calculate original invoice total tax from invoice_products table
    originalInvoiceTotalTax() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0
      }

      return this.form.selectedProducts.reduce((total, product) => {
        // Use the logic: (SUM(tax_amount) / quantity) per product line
        const taxAmount = parseFloat(product.totalTax) || 0
        const quantity = parseFloat(product.qty) || 1
        const lineTax = taxAmount / quantity
        return total + lineTax
      }, 0)
    },
    // Dynamic breadcrumbs current based on country
    dynamicBreadcrumbsCurrent() {
      return this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return');
    },
    // Dynamic breadcrumbs based on country
    dynamicBreadcrumbs() {
      return [
        {
          name: 'Dashboard',
          url: 'home',
        },
        {
          name: this.isSaudiArabia ? this.$t('Credit notes') : this.$t('Invoice Returns'),
          url: 'invoiceReturns.index',
        },
        {
          name: 'Create',
          url: '',
        },
      ];
    },

    // Calculate total unit price (sum of all unit prices) - using returnQty for sales returns
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        const qty = Number(item.returnQty || item.qty) || 0;
        return total + (item.unitPrice * qty);
      }, 0);
    },

    // Calculate total after discount (sum of all totalAfterDiscount values)
    totalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
    },

    // Calculate total discount from all products (reactive)
    totalProductDiscount() {
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Calculate total product tax (reactive)
    totalProductTax() {
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Invoice Subtotal: Sum of all item subtotals before discount (returnQty × unit_price)
    invoiceSubtotal() {
      return this.roundToTwoDecimals(this.totalUnitPrice);
    },

    // Invoice-Level Discount Total: Total discount applied at invoice level and distributed across items
    invoiceLevelDiscountTotal() {
      const subtotal = this.invoiceSubtotal;
      if (
        !this.form.discount ||
        this.form.discount <= 0
      ) {
        return 0;
      }

      let discountAmount = 0;
      if (this.form.discountType == 1) {
        discountAmount = this.roundToTwoDecimals(
          (subtotal * this.form.discount) / 100
        );
      } else {
        discountAmount = this.roundToTwoDecimals(
          Number(this.form.discount)
        );
      }

      // Ensure discount doesn't exceed the subtotal
      return discountAmount > subtotal
        ? this.roundToTwoDecimals(subtotal)
        : discountAmount;
    },

    // Gets transport amount
    shippingCostTotal() {
      const transportCost = Number(this.form.transportCost || 0);
      return this.roundToTwoDecimals(transportCost);
    },

    // Calculate subtotal (reactive) - sum of line net_totals (line_total - discount)
    subtotal() {
      return this.roundToTwoDecimals(this.totalAfterDiscount);
    },

    // Net Amount Before VAT: Calculated based on transport taxability
    netAmountBeforeVAT() {
      const subtotal = this.invoiceSubtotal;
      const invoiceDiscount = this.invoiceLevelDiscountTotal;
      const shipping = this.shippingCostTotal;

      if (this.form.transportIsTaxable) {
        // Transport is taxable: include it in Net Amount (part of VAT base)
        return this.roundToTwoDecimals(subtotal - invoiceDiscount + shipping);
      } else {
        // Transport is non-taxable: use sum of item net totals (after item-level discounts)
        if (
          !this.form.selectedProducts ||
          this.form.selectedProducts.length === 0
        ) {
          return 0;
        }

        const sumOfItemNetTotals = this.form.selectedProducts.reduce(
          (total, item) => {
            const itemNetTotal = item.netTotal || item.totalAfterDiscount || 0;
            return total + itemNetTotal;
          },
          0
        );

        return this.roundToTwoDecimals(sumOfItemNetTotals);
      }
    },

    // VAT Amount: Calculated based on transport taxability
    vatAmount() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }

      // When transport is non-taxable, use sum of item VATs directly
      if (!this.form.transportIsTaxable) {
        const itemVatSum = this.form.selectedProducts.reduce((total, item) => {
          return total + (item.totalTax || 0);
        }, 0);
        return this.roundToTwoDecimals(itemVatSum);
      }

      // When transport is taxable, calculate VAT on Net Amount (includes transport)
      const netAmount = this.netAmountBeforeVAT;
      if (netAmount <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate from all items
      let totalNetAmountForWeighting = 0;
      let weightedVatRateSum = 0;

      this.form.selectedProducts.forEach((item) => {
        const itemNetAmount = item.netTotal || 0;

        if (itemNetAmount > 0) {
          let vatRate = 0;
          if (
            item.selectedVatRate &&
            item.selectedVatRate.rate !== undefined &&
            item.selectedVatRate.rate !== null
          ) {
            vatRate = Number(item.selectedVatRate.rate);
          } else if (item.taxRate !== undefined && item.taxRate !== null) {
            vatRate = Number(item.taxRate);
          }

          if (!isNaN(vatRate) && vatRate >= 0) {
            totalNetAmountForWeighting += itemNetAmount;
            weightedVatRateSum += itemNetAmount * (vatRate / 100);
          }
        }
      });

      if (totalNetAmountForWeighting <= 0) {
        return 0;
      }

      const weightedAverageVatRate =
        (weightedVatRateSum / totalNetAmountForWeighting) * 100;

      const vat = this.roundToTwoDecimals(
        netAmount * (weightedAverageVatRate / 100)
      );

      return vat;
    },

    // Grand Total: Calculated based on transport taxability
    grandTotal() {
      const shipping = this.shippingCostTotal;

      if (this.form.transportIsTaxable) {
        const netAmount = this.netAmountBeforeVAT;
        const vat = this.vatAmount;
        return this.roundToTwoDecimals(netAmount + vat);
      } else {
        if (
          !this.form.selectedProducts ||
          this.form.selectedProducts.length === 0
        ) {
          return this.roundToTwoDecimals(shipping);
        }

        const sumOfItemTotals = this.form.selectedProducts.reduce(
          (total, item) => {
            const itemTotal = item.totalPrice || 0;
            return total + itemTotal;
          },
          0
        );

        return this.roundToTwoDecimals(sumOfItemTotals + shipping);
      }
    },
    
    // Calculate number of items
    numberOfItems() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      return this.form.selectedProducts.length;
    },

    // Formatted computed properties for display
    formattedOriginalInvoiceTotal() {
      return this.formatToTwoDecimals(this.form.originalInvoiceTotal)
    },

    formattedTotalDiscount() {
      return this.formatToTwoDecimals(this.form.totalDiscount)
    },

    formattedTransportCost() {
      return this.formatToTwoDecimals(this.form.transportCost)
    },

    formattedInvoiceTax() {
      return this.formatToTwoDecimals(this.form.invoiceTax)
    },

    formattedTotalPaid() {
      return this.formatToTwoDecimals(this.form.invoice?.totalPaid || 0)
    },

    formattedAvailableBalance() {
      return this.formatToTwoDecimals(this.form.availableBalance)
    },
  },
  watch: {
    'appInfo': {
      handler() {
        // Recalculate when app info changes (e.g., country changes)
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      },
      deep: true
    },
    'isSaudiArabia': {
      handler() {
        // Recalculate when country changes
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.selectedProducts': {
      handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      },
      deep: true
    },
    'form.transportCost': {
      handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.transportIsTaxable': {
      handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discount': {
      handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discountType': {
      handler() {
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discount_type': {
      handler() {
        this.syncDiscountFields();
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    },
    'form.discount_value': {
      handler() {
        this.syncDiscountFields();
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.calculateSum();
        }
      }
    }
  },

  async created() {
    await Promise.all([
      this.getClients(),
      this.getProducts(),
      this.getAccounts(),
      this.getTaxes(),
      this.getPaymentMethods()
    ])
    this.prefix = this.appInfo.productPrefix

    // Set default status based on country
    if (this.isSaudiArabia) {
      this.form.status = 0 // Inactive for Saudi Arabia
    } else {
      this.form.status = 1 // Active for other countries
    }
  },
  methods: {
    // get all clients
    async getClients() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-clients',
      })
    },

    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-products'
      )
      this.products = data.data
    },

    // get taxes
    async getTaxes() {
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/all-vat-rates'
        )
        this.taxes = data.data
      } catch (error) {
        console.error('Error getting taxes:', error)
        this.taxes = []
      }
    },

    // get payment methods
    async getPaymentMethods() {
      try {
        const response = await axios.get(window.location.origin + '/api/payment-methods/all');
        if (response.data && response.data.data) {
          this.paymentMethods = response.data.data;
        }
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.paymentMethods = [];
      }
    },

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = data.data
    },

    // handle pre-selection from query parameters
    async handlePreSelection() {
      let clientSlug = this.$route.query.client
      const invoiceSlug = this.$route.query.invoice
      let invoiceData = null


      if (invoiceSlug) {
        try {
          // If we have an invoice slug but no client slug, fetch the invoice details
          if (!clientSlug) {
            const response = await axios.get(`/api/invoices/${invoiceSlug}`)
            invoiceData = response.data.data

            if (invoiceData && invoiceData.client) {
              clientSlug = invoiceData.client.slug
            }
          }

          if (clientSlug) {
            // Wait for items to be loaded (reduced from 10 attempts to 3)
            let attempts = 0
            const maxAttempts = 3

            while (attempts < maxAttempts) {

              if (this.items && this.items.length > 0) {
                try {
                  const selectedClient = this.items.find(client => client.slug === clientSlug)

                  // If not found by slug, try to find by ID or name as fallback
                  if (!selectedClient && invoiceData && invoiceData.client) {
                    const fallbackClient = this.items.find(client =>
                      client.id === invoiceData.client.id ||
                      client.name === invoiceData.client.name
                    )
                    if (fallbackClient) {
                      this.form.client = fallbackClient

                      // Trigger invoice loading for this client
                      await this.assignInvoices()

                      // Wait for invoices to be loaded, then select the invoice
                      await this.$nextTick()
                      await new Promise(resolve => setTimeout(resolve, 200))


                      if (this.clientInvoices && this.clientInvoices.length > 0) {

                        const selectedInvoice = this.clientInvoices.find(invoice => invoice.slug === invoiceSlug)

                        if (selectedInvoice) {
                          this.form.invoice = selectedInvoice
                          // Trigger product loading for this invoice
                          this.storeProducts()
                          return // Success, exit the loop
                        } else {

                          // Try multiple fallback methods
                          let fallbackInvoice = null

                          // Method 1: Try by ID
                          if (invoiceData && invoiceData.id) {
                            fallbackInvoice = this.clientInvoices.find(invoice => invoice.id === invoiceData.id)
                          }

                          // Method 2: Try by invoice number
                          if (!fallbackInvoice && invoiceData && invoiceData.invoiceNo) {
                            fallbackInvoice = this.clientInvoices.find(invoice => invoice.invoiceNo === invoiceData.invoiceNo)
                          }

                          // Method 3: Try by slug with different casing
                          if (!fallbackInvoice) {
                            fallbackInvoice = this.clientInvoices.find(invoice =>
                              invoice.slug && invoice.slug.toLowerCase() === invoiceSlug.toLowerCase()
                            )
                          }

                          if (fallbackInvoice) {
                            this.form.invoice = fallbackInvoice
                            this.storeProducts()
                            return // Success, exit the loop
                          } else {

                            // If we have invoice data from API but it's not in client's list, use it directly
                            if (invoiceData && invoiceData.slug === invoiceSlug) {
                              this.form.invoice = invoiceData
                              this.storeProducts()
                              return // Success, exit the loop
                            }
                          }
                        }
                      }
                      // Continue trying instead of returning early
                    }
                  }

                  if (selectedClient) {
                    this.form.client = selectedClient

                    // Trigger invoice loading for this client
                    await this.assignInvoices()

                    // Wait for invoices to be loaded, then select the invoice
                    await this.$nextTick()
                    await new Promise(resolve => setTimeout(resolve, 200))


                    if (this.clientInvoices && this.clientInvoices.length > 0) {

                      const selectedInvoice = this.clientInvoices.find(invoice => invoice.slug === invoiceSlug)

                      if (selectedInvoice) {
                        this.form.invoice = selectedInvoice
                        // Trigger product loading for this invoice
                        this.storeProducts()
                        return // Success, exit the loop
                      } else {

                        // Try multiple fallback methods
                        let fallbackInvoice = null

                        // Method 1: Try by ID
                        if (invoiceData && invoiceData.id) {
                          fallbackInvoice = this.clientInvoices.find(invoice => invoice.id === invoiceData.id)
                        }

                        // Method 2: Try by invoice number
                        if (!fallbackInvoice && invoiceData && invoiceData.invoiceNo) {
                          fallbackInvoice = this.clientInvoices.find(invoice => invoice.invoiceNo === invoiceData.invoiceNo)
                        }

                        // Method 3: Try by slug with different casing
                        if (!fallbackInvoice) {
                          fallbackInvoice = this.clientInvoices.find(invoice =>
                            invoice.slug && invoice.slug.toLowerCase() === invoiceSlug.toLowerCase()
                          )
                        }

                        if (fallbackInvoice) {
                          this.form.invoice = fallbackInvoice
                          this.storeProducts()
                          return // Success, exit the loop
                        } else {

                          // If we have invoice data from API but it's not in client's list, use it directly
                          if (invoiceData && invoiceData.slug === invoiceSlug) {
                            this.form.invoice = invoiceData
                            this.storeProducts()
                            return // Success, exit the loop
                          }
                        }
                      }
                    }
                    // Continue trying instead of returning early
                  }
                } catch (err) {
                  console.error('Error in handlePreSelection:', err)
                }
              }
              attempts++
              if (attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 200))
              }
            }

          }
        } catch (error) {
          console.error('Error fetching invoice details:', error)
        }
      }
    },

    // update available balance
    updateBalance() {
      this.form.availableBalance = 0
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance
      }

      // Validate bank account chart of account when account is selected
      if (this.form.account && this.form.returnAmount > 0) {
        this.validateBankAccountChartOfAccount();
      }

      return
    },

    // Validate bank account chart of account
    validateBankAccountChartOfAccount() {
      if (this.form.account && !this.form.account.chartOfAccountId) {
        toast.fire({
          type: "warning",
          title: this.$t("Bank Account Chart of Account Required"),
          text: this.$t("The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account."),
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t("Go to Bank Accounts"),
          showCancelButton: true,
          cancelButtonText: this.$t("Close"),
        }).then((result) => {
          if (result.isConfirmed) {
            // Navigate to bank accounts page
            this.goToBankAccounts();
          }
        });
      }
    },

    // Navigate to bank accounts page
    goToBankAccounts() {
      this.$router.push({ name: 'accounts.index' });
    },

    // assign invoices
    async assignInvoices() {
      this.form.selectedProducts = []
      this.form.invoice = ''
      if (this.form.client) {
        axios
          .post(window.location.origin + '/api/client/filter-invoices', {
            products: this.form.product,
            clientSlug: this.form.client.slug,
          })
          .then((response) => {
            this.clientInvoices = response.data.data
          })
      } else {
        this.form.product = ''
        this.form.client = ''
      }
    },

    // store item in array
    storeProducts() {
      this.form.selectedProducts = []
      this.form.invoiceTax = this.form.invoice.tax
      this.form.newTax = this.form.invoice.tax
      this.form.invoiceTaxRate = this.form.invoice.taxRate
      this.form.originalInvoiceTotal = this.form.invoice.invoiceTotal
      this.form.invoiceTotal = this.form.invoice.invoiceTotal
      this.form.invoiceTransport = this.form.invoice.transport
      this.form.invoiceDiscount = this.form.invoice.discount
      this.form.discountType = this.form.invoice.discountType
      this.form.discountPercentage = this.form.invoice.discountPercentage
      this.form.invoiceDue = this.form.invoice.due
      this.form.newDue = this.form.invoice.due
      this.form.newDueText = this.form.invoice.due
      this.form.totalPaid = this.form.invoice.totalPaid
      // Set the new display fields with calculated values
      // These will be updated in calculateSum() method
      this.form.totalDiscount = 0
      this.form.transportCost = this.form.invoice.transport || 0
      // Initialize transport taxability (default to true for backward compatibility)
      this.form.transportIsTaxable = this.form.invoice.transportIsTaxable !== undefined 
        ? this.form.invoice.transportIsTaxable 
        : true
      // Initialize discount fields (sync with legacy fields)
      if (this.form.invoice.discount_type) {
        this.form.discount_type = this.form.invoice.discount_type
      }
      if (this.form.invoice.discount_value !== undefined) {
        this.form.discount_value = this.form.invoice.discount_value
      }
      // Sync discount fields
      this.syncDiscountFields()
      for (var key in this.form.invoice.invoiceProducts) {
        let invoiceItem = this.form.invoice.invoiceProducts[key]
        
        // Calculate remaining quantity that can be returned
        const remainingQty = invoiceItem.quantity - invoiceItem.returnQty
        
        // Skip products with 0 remaining quantity (already fully returned)
        if (remainingQty <= 0) {
          continue
        }
        
        this.form.selectedProducts.unshift({
          id: invoiceItem.productID,
          slug: invoiceItem.productSlug,
          name: invoiceItem.productName,
          code: invoiceItem.productCode,
          unit: invoiceItem.productUnit,
          taxType: invoiceItem.taxType,
          taxRate: invoiceItem.taxRate,
          oldQty: invoiceItem.quantity,
          qty: invoiceItem.quantity,
          returnQty: remainingQty, // Default to remaining quantity
          totalReturnQty: remainingQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.salePrice,
          originalPrice: invoiceItem.salePrice, // Store original price
          totalPrice: invoiceItem.total,
          returnTotal: 0,
          productTax: invoiceItem.unitTax,
          totalTax: invoiceItem.taxTotal,
          maxQty: remainingQty, // Max is remaining quantity
          // Product-level discount information
          productDiscount: invoiceItem.productDiscount || 0,
          discountType: invoiceItem.discountType || 'fixed',
          discountAmount: invoiceItem.productDiscount || 0,
          // Initialize proportional amounts
          proportionalDiscountAmount: 0,
          proportionalTransportAmount: 0,
          netTotal: 0, // Will be calculated
          // Calculate discount value: if percentage type, use discountPercentage or calculate from discount_amount
          discount: (() => {
            if (invoiceItem.discountType === 'percentage') {
              // If discountPercentage exists (including 0), use it
              // Check for both null and undefined, and also check if it's a valid number
              if (invoiceItem.discountPercentage !== null && 
                  invoiceItem.discountPercentage !== undefined && 
                  !isNaN(invoiceItem.discountPercentage)) {
                return Number(invoiceItem.discountPercentage)
              }
              // Otherwise, calculate percentage from discount_amount and total_before_discount
              const totalBeforeDiscount = (invoiceItem.quantity || 0) * (invoiceItem.salePrice || 0)
              if (totalBeforeDiscount > 0 && invoiceItem.productDiscount > 0) {
                return Number(((invoiceItem.productDiscount / totalBeforeDiscount) * 100).toFixed(2))
              }
              return 0
            } else {
              // Fixed discount: use productDiscount (the amount)
              return invoiceItem.productDiscount || 0
            }
          })(),
          // Product-level VAT information
          vatRate: invoiceItem.vatRate,
          selectedVatRate: this.findMatchingVatRate(invoiceItem.productTax) || this.form.orderTax || this.taxes?.[0],
          // Initialize totals (will be calculated by calculateItemAmounts)
          totalBeforeDiscount: 0,
          totalAfterDiscount: 0,
          // Chart of account information
          sales_account_id: invoiceItem.sales_account_id,
          purchase_account_id: invoiceItem.purchase_account_id,
          itemType: invoiceItem.itemType || 'product',
        })
      }

      // Calculate all items after loading products
      // Use calculateItemAmounts for each item to ensure proper initialization
      this.form.selectedProducts.forEach((item, index) => {
        // Calculate item amounts (this will set all totals correctly)
        this.calculateItemAmounts(index, true); // Skip global recalculation for now
      })

      // Initialize calculations after loading products
      // Now trigger global recalculation to allocate discounts and transport
      this.calculateSum()
      return
    },

    // update items
    updateItem(value, index) {
      let selectedProduct = this.form.selectedProducts[index]
      if (selectedProduct && value >= 0 && value <= selectedProduct.maxQty) {
        selectedProduct.returnQty = Number(value)

        // Force reactivity update
        this.$set(this.form.selectedProducts, index, selectedProduct)

        // Recalculate all amounts (discount, price, tax, total) using unified function
        this.calculateItemAmounts(index)
      }
    },

    // update items reactively for v-model
    updateItemReactively(item) {
      if (item.returnQty < 0) {
        item.returnQty = 0
      } else if (item.returnQty > item.maxQty) {
        item.returnQty = item.maxQty
      }

      // Find the index of the item
      const index = this.form.selectedProducts.findIndex(p => p === item)
      if (index !== -1) {
        // Recalculate all amounts (discount, price, tax, total) using unified function
        this.calculateItemAmounts(index)
      }

      // Calculate return total proportionally from original invoice line total
      const originalLineTotal = parseFloat(item.totalPrice) || 0
      const totalQty = parseFloat(item.qty) || 1
      const returnQty = parseFloat(item.returnQty) || 0

      // Calculate proportional return amount: (original_line_total / total_qty) * return_qty
      const unitPrice = originalLineTotal / totalQty
      const returnTotal = Number((unitPrice * returnQty).toFixed(2))

      item.returnTotal = returnTotal
      this.calculateSum()
    },

    // calculate sum - matching sales invoice create logic
    calculateSum() {
      // Early exit when no products: reset return totals so payment section hides (mirror purchase returns)
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        this.$set(this.form, 'totalReturn', 0);
        this.$set(this.form, 'returnAmount', 0);
        this.$set(this.form, 'returnAmountText', '0.00');
        return;
      }

      // Update products with default VAT rate if needed
      this.updateProductsWithDefaultVatRate();

      // Update form values for consistency with computed properties
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));

      // Sync discount fields before calculations
      this.syncDiscountFields();
      
      // Global discount used ONLY for legacy invoice-level tax (orderTax)
      let globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          globalDiscount = this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal);
        } else {
          globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
        }
      }

      // Invoice-level tax (orderTax) computed on (subTotal - globalDiscount)
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(
          (this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)
        ));
      }

      // Total tax = product VAT + invoice-level tax
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));

      // Apply commercial invoice-level discount (for allocation only)
      const invoiceLevelDiscount = this.invoiceLevelDiscountTotal;

      // Update netTotal to match the computed grandTotal
      this.$set(this.form, 'netTotal', this.grandTotal);

      // Allocate invoice-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(invoiceLevelDiscount);

      // Allocate transport costs proportionally to items (only when transport is taxable)
      const transportCost = Number(this.form.transportCost || 0);
      this.allocateTransportCostProportionally(transportCost);

      // Recalculate all items with proportional discount and transport allocation
      this.recalculateAllItemsWithProportionalDiscount();

      // Set total return amount so payment section shows and is saved with the return (mirror purchase returns)
      const totalReturn = this.form.selectedProducts.reduce(
        (sum, item) => sum + (Number(item.totalPrice) || 0),
        0
      );
      this.$set(this.form, 'totalReturn', this.roundToTwoDecimals(totalReturn));
      this.$set(this.form, 'returnAmount', this.form.totalReturn);
      this.$set(this.form, 'returnAmountText', this.formatToTwoDecimals(this.form.totalReturn));

      return;
    },

    // Sync discount fields (matching sales invoice create)
    syncDiscountFields() {
      // Map discount_type ("fixed"/"percentage") to discountType (0/1)
      if (this.form.discount_type) {
        this.form.discountType = this.form.discount_type === 'percentage' ? 1 : 0;
      }
      // Map discount_value to discount
      if (this.form.discount_value !== null && this.form.discount_value !== undefined) {
        this.form.discount = parseFloat(this.form.discount_value) || 0;
      }
    },

    // Update products with default VAT rate if needed
    updateProductsWithDefaultVatRate() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return;
      }

      this.form.selectedProducts.forEach((item, index) => {
        if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
          // Try to find matching VAT rate from product's taxRate
          if (item.taxRate !== undefined && item.taxRate !== null) {
            const matchingRate = this.findMatchingVatRate(item.taxRate);
            if (matchingRate) {
              this.$set(this.form.selectedProducts[index], 'selectedVatRate', matchingRate);
            } else {
              this.$set(this.form.selectedProducts[index], 'selectedVatRate', this.taxes[0]);
            }
          } else {
            this.$set(this.form.selectedProducts[index], 'selectedVatRate', this.taxes[0]);
          }
        }
      });
    },

    // Allocate invoice-level discount proportionally across all items based on item subtotals (returnQty × unit_price)
    // Adapted from sales invoice create for sales returns (using returnQty instead of qty)
    allocateInvoiceDiscountProportionally(invoiceLevelDiscount) {
      if (!invoiceLevelDiscount || invoiceLevelDiscount <= 0) {
        // Clear proportional discounts if no invoice-level discount
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalDiscountAmount) {
            this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: returnQty × unit_price)
      let invoiceSubtotal = 0;
      const itemSubtotals = [];

      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber = Number(item.unitPrice || item.unitCost) || 0;
        const qtyNumber = Number(item.returnQty || item.qty) || 0;
        const itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = returnQty × unit_price

        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      // Allocate discount proportionally based on item subtotals
      let allocatedTotal = 0;
      this.form.selectedProducts.forEach((item, index) => {
        const itemSubtotal = itemSubtotals[index] || 0;
        let proportionalAmount = 0;

        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemDiscount = (itemSubtotal / invoiceSubtotal) * invoiceDiscount
          const proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = this.roundToTwoDecimals(invoiceLevelDiscount * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional discount amount
        this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      const roundingDifference = this.roundToTwoDecimals(invoiceLevelDiscount - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        const lastIndex = this.form.selectedProducts.length - 1;
        const lastItem = this.form.selectedProducts[lastIndex];
        const currentProportional = lastItem.proportionalDiscountAmount || 0;
        const adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalDiscountAmount', Math.max(0, adjusted));
      }
    },

    // Allocate transport costs proportionally across all items based on item subtotals (returnQty × unit_price)
    // Adapted from sales invoice create for sales returns (using returnQty instead of qty)
    allocateTransportCostProportionally(transportCost) {
      if (!transportCost || transportCost <= 0) {
        // Clear proportional transport if no transport cost
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalTransportAmount) {
            this.$set(this.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }

      // CRITICAL: Only allocate transport when it is taxable
      if (!this.form.transportIsTaxable) {
        // Clear all proportional transport amounts when transport is non-taxable
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalTransportAmount) {
            this.$set(this.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: returnQty × unit_price)
      let invoiceSubtotal = 0;
      const itemSubtotals = [];

      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber = Number(item.unitPrice || item.unitCost) || 0;
        const qtyNumber = Number(item.returnQty || item.qty) || 0;
        const itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = returnQty × unit_price
        
        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      // Allocate transport proportionally based on item subtotals
      let allocatedTotal = 0;
      this.form.selectedProducts.forEach((item, index) => {
        const itemSubtotal = itemSubtotals[index] || 0;
        let proportionalAmount = 0;

        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
          const proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = this.roundToTwoDecimals(transportCost * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional transport amount
        this.$set(this.form.selectedProducts[index], 'proportionalTransportAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      const roundingDifference = this.roundToTwoDecimals(transportCost - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        const lastIndex = this.form.selectedProducts.length - 1;
        const lastItem = this.form.selectedProducts[lastIndex];
        const currentProportional = lastItem.proportionalTransportAmount || 0;
        const adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalTransportAmount', Math.max(0, adjusted));
      }
    },

    // Recalculate all items with proportional discount allocation (without re-entering calculateSum)
    recalculateAllItemsWithProportionalDiscount() {
      this.form.selectedProducts.forEach((item, index) => {
        // Recalculate this item to include proportional discount and transport
        // Pass skipRecalculate = true to avoid recursive global recalculation
        this.calculateItemAmounts(index, true);
      });
    },

    // Debug method to show calculation breakdown
    showCalculationBreakdown() {
      this.form.selectedProducts.forEach((product, index) => {
        // Calculate original line discount for this product
        const salePrice = parseFloat(product.unitCost) || 0
        const productQty = parseFloat(product.qty) || 0
        const discountAmount = parseFloat(product.discountAmount) || 0
        const discountType = product.discountType || 'fixed'

        let originalLineDiscount = 0
        if (discountType === 'fixed') {
          originalLineDiscount = discountAmount
        } else if (discountType === 'percentage') {
          originalLineDiscount = (salePrice * productQty) * (discountAmount / 100)
        }

        // Calculate original line tax for this product
        const totalTax = parseFloat(product.totalTax) || 0
        const taxQty = parseFloat(product.qty) || 1
        const originalLineTax = totalTax / taxQty

      })

      // Show alert with key information
      let message = `Calculation Summary:\n\n`
      message += `Base Subtotal: ${(this.form.newSubTotal + this.form.invoiceDiscount).toFixed(2)}\n`
      message += `Discount Amount: ${this.form.invoiceDiscount.toFixed(2)}\n`
      message += `New Subtotal: ${this.form.newSubTotal.toFixed(2)}\n`
      message += `Total Return: ${this.form.totalReturn.toFixed(2)}\n`
      message += `New Tax: ${this.form.newTax.toFixed(2)}\n`
      message += `New Total: ${this.form.invoiceTotal.toFixed(2)}\n`
      message += `New Due: ${this.form.invoiceDue.toFixed(2)}`

      alert(message)
    },

    // Validate return quantities and calculations
    validateReturns() {
      let isValid = true
      let errors = []

      // Check if any products have returns
      if (this.form.totalReturn <= 0) {
        errors.push(this.$t('At least one product must have a return quantity greater than 0'))
        isValid = false
      }

      // Check if return quantities exceed available quantities
      this.form.selectedProducts.forEach((product) => {
        if (product.returnQty > product.qty) {
          errors.push(this.$t('Return quantity for {name} cannot exceed available quantity', { name: product.name }))
          isValid = false
        }

        if (product.returnQty < 0) {
          errors.push(this.$t('Return quantity for {name} cannot be negative', { name: product.name }))
          isValid = false
        }
      })

      // Check if new subtotal is valid
      if (this.form.newSubTotal < 0) {
        errors.push(this.$t('New subtotal cannot be negative'))
        isValid = false
      }

      // Check if discount is valid
      if (this.form.invoiceDiscount > this.form.newSubTotal) {
        errors.push(this.$t('Total discount cannot exceed new subtotal'))
        isValid = false
      }

      if (errors.length > 0) {
        console.error('Validation Errors:', errors)
        // Show a toast like other parts of the system
        if (typeof toast !== 'undefined' && toast.fire) {
          toast.fire({
            type: 'error',
            title: this.$t('Validation Errors'),
            text: errors[0],
          })
        }

        // Bind errors to vform so they appear under inputs/section
        if (this.form && this.form.errors && typeof this.form.errors.set === 'function') {
          this.form.errors.set({ selectedProducts: errors })
        }
      }

      return isValid
    },

    // save return
    async saveInvoiceReturn() {
      // Validate returns before submitting
      if (!this.validateReturns()) {
        return
      }

      // For Saudi Arabia, only validate bank account chart of account if status will be active
      // Since we're saving as inactive for Saudi Arabia, skip this validation
      if (!this.isSaudiArabia && this.form.returnAmount > 0 && !this.hasBankAccountChartOfAccount) {
        toast.fire({
          type: "warning",
          title: this.$t("Bank Account Chart of Account Required"),
          text: this.$t("Bank Account must have a Chart of Account assigned for journal entries."),
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t("Go to Bank Accounts"),
          showCancelButton: true,
          cancelButtonText: this.$t("Close"),
        }).then((result) => {
          if (result.isConfirmed) {
            this.goToBankAccounts();
          }
        });
        return;
      }

      // Sync form fields with Calculation Summary just before save
      this.form.totalPaid = this.form.invoice?.totalPaid || 0
      this.form.invoiceTax = this.form.newTax
      this.form.newDue = this.form.invoiceDue
      // invoiceTotal, invoiceDiscount and invoiceTransport are already current

      await this.form
        .post(window.location.origin + '/api/invoice-returns')
        .then(({ data }) => {
          if (this.isSaudiArabia) {
            toast.fire({
              type: 'success',
              title: this.$t('Credit Note created successfully'),
              text: this.$t('Credit Note has been created as inactive. You can send it to ZATCA from the invoice returns list.'),
              timer: 8000,
              timerProgressBar: true
            })
          } else {
            toast.fire({
              type: 'success',
              title: this.$t('Invoice return added successfully'),
            })
          }
          this.clearTemporaryData()
          this.$router.push({ name: 'invoiceReturns.show', params: { slug: data.data.slug }, })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        returnReason: this.form.returnReason,
        client: this.form.client,
        selectedInvoices: this.form.selectedInvoices,
        returnAmount: this.form.returnAmount,
        returnDate: this.form.returnDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('salesReturnTempData', JSON.stringify(tempData))

    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('salesReturnTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.returnReason = data.returnReason || this.form.returnReason
          this.form.client = data.client || this.form.client
          this.form.selectedInvoices = data.selectedInvoices || this.form.selectedInvoices
          this.form.returnAmount = data.returnAmount || this.form.returnAmount
          this.form.returnDate = data.returnDate || this.form.returnDate
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
        } catch (e) {
          console.error('Error loading temporary data:', e)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('salesReturnTempData')
    },

    // Helper methods for invoice create compatibility
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null
      return this.taxes.find(tax => tax.id === productTax.id || tax.rate === productTax.rate)
    },

    // Helper method to round to 2 decimal places (for calculations)
    roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },

    formatToTwoDecimals(value) {
      if (value === null || value === undefined || value === '') {
        return '0.00';
      }
      const numValue = Number(value);
      if (isNaN(numValue)) {
        return '0.00';
      }
      return numValue.toFixed(2);
    },

    toWord() {
      // Simple implementation - you might want to use a proper number-to-words library
      return this.$t('Total')
    },

    // Calculate all item amounts (discount, price, tax, total) - single function for all calculations
    // Adapted from sales invoice create for sales returns (using returnQty instead of qty)
    // Optional second parameter skipRecalculate controls whether to trigger global recalculation (calculateSum)
    calculateItemAmounts(index, skipRecalculate = false) {
      let item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }

      // Normalize numeric inputs - use returnQty for sales returns
      const unitPriceNumber = Number(item.unitPrice || item.unitCost) || 0;
      const qtyNumber = Number(item.returnQty || item.qty) || 0;

      // Calculate total before discount (unit price × return quantity)
      const totalBeforeDiscount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber);

      // Calculate product-level discount amount based on type
      let productDiscountAmount = 0;
      if (item.discountType === "percentage") {
        productDiscountAmount = this.roundToTwoDecimals((unitPriceNumber * qtyNumber * (item.discount || 0)) / 100);
      } else {
        productDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
      }

      // Ensure product discount amount doesn't exceed the total before discount
      if (productDiscountAmount > totalBeforeDiscount) {
        productDiscountAmount = this.roundToTwoDecimals(totalBeforeDiscount);
      }

      // Get proportional invoice-level discount allocation (if any)
      const proportionalDiscount = item.proportionalDiscountAmount || 0;

      // Total discount = product discount + proportional invoice-level discount
      const discountAmount = this.roundToTwoDecimals(productDiscountAmount + proportionalDiscount);

      // Ensure total discount doesn't exceed the total before discount
      const finalDiscountAmount = discountAmount > totalBeforeDiscount 
        ? this.roundToTwoDecimals(totalBeforeDiscount) 
        : discountAmount;

      // Calculate net total after discount (this is what VAT is calculated on)
      const netTotal = this.roundToTwoDecimals(totalBeforeDiscount - finalDiscountAmount);

      // Get proportional transport cost allocation (if any)
      const proportionalTransport = item.proportionalTransportAmount || 0;

      // Use selected VAT rate if available, otherwise fall back to product's default tax rate
      let vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
        vatRate = Number(item.selectedVatRate.rate);
      } else if (item.taxRate !== undefined && item.taxRate !== null) {
        vatRate = Number(item.taxRate);
      }

      // Ensure vatRate is a valid number
      if (isNaN(vatRate) || vatRate < 0) {
        vatRate = 0;
      }

      // Ensure the selectedVatRate is properly set for VAT calculations
      let updatedItem = { ...item };
      if (!updatedItem.selectedVatRate && vatRate > 0) {
        // First try to use the product's default VAT rate, then fall back to available taxes
        if (updatedItem.productTax) {
          updatedItem.selectedVatRate = this.findMatchingVatRate(updatedItem.productTax);
        }

        // If no match found or no productTax, fall back to available taxes
        if (!updatedItem.selectedVatRate && this.taxes && this.taxes.length > 0) {
          updatedItem.selectedVatRate = this.taxes[0];
        }
      }

      // Calculate VAT base depending on transport taxability
      const isTransportTaxable = this.form.transportIsTaxable !== false; // Default to true if not set

      // When transport is non-taxable, proportionalTransport should be 0 (not distributed)
      const transportForVatBase = isTransportTaxable
        ? proportionalTransport
        : 0;
      const vatBase = this.roundToTwoDecimals(netTotal + transportForVatBase);

      // Calculate tax and total based on tax type
      let productTax, totalTax, totalPrice;

      if (item.taxType == "Exclusive") {
        // VAT on vatBase (which includes transport only if transport is taxable)
        productTax = this.roundToTwoDecimals(vatBase * (vatRate / 100));
        totalTax = this.roundToTwoDecimals(productTax);
        // Total after VAT = vatBase + VAT
        totalPrice = this.roundToTwoDecimals(vatBase + totalTax);
      } else {
        // Inclusive: VAT is included in unit price; derive VAT from net_total
        let netUnitPrice = this.roundToTwoDecimals(qtyNumber > 0 ? (netTotal / qtyNumber) : 0);
        productTax = this.roundToTwoDecimals(netUnitPrice - (netUnitPrice / (1 + vatRate / 100)));
        totalTax = this.roundToTwoDecimals(productTax * qtyNumber);
        // Total after VAT = net_total (VAT already included, transport added at invoice level only if non-taxable)
        totalPrice = this.roundToTwoDecimals(netTotal);
      }

      // Create updated item with all calculated values
      updatedItem = {
        ...updatedItem,
        discountAmount: finalDiscountAmount,
        productDiscountAmount: productDiscountAmount, // Store product-level discount separately
        proportionalDiscountAmount: proportionalDiscount, // Store proportional discount separately
        proportionalTransportAmount: proportionalTransport, // Store proportional transport separately (for reporting only)
        totalBeforeDiscount,
        totalAfterDiscount: netTotal,
        netTotal: netTotal,
        productTax,
        totalTax,
        totalPrice // Total after VAT (transport added at invoice level)
      };

      // Use Vue.set to ensure reactivity
      this.$set(this.form.selectedProducts, index, updatedItem);

      // Recalculate sum and update reactive totals (unless we are already in a global recomputation)
      if (!skipRecalculate) {
        this.calculateSum();
      }

      // Force update to ensure template re-renders
      this.$forceUpdate();
    },

    calculateProductDiscount(index) {
      this.calculateItemAmounts(index)
    },

    calculateProductVat(index) {
      this.calculateItemAmounts(index)
    },

    // Handle item change from ItemsTable component
    handleItemChange({ value, type, index, action }) {
      if (type === 'qty') {
        if (action === 'increment') {
          this.updateItem(Math.min(this.form.selectedProducts[index].maxQty, Number(value) + 1), index)
        } else if (action === 'decrement') {
          this.updateItem(Math.max(0, Number(value) - 1), index)
        } else {
          // Direct value change
          const item = this.form.selectedProducts[index]
          if (item) {
            item.returnQty = Number(value)
            this.updateItemReactively(item)
          }
        }
      } else if (type === 'price') {
        // Price changes are not allowed in returns (readonly)
        // But handle it anyway for consistency
        const item = this.form.selectedProducts[index]
        if (item) {
          item.unitCost = Number(value)
          // Recalculate all amounts (discount, price, tax, total) using unified function
          this.calculateItemAmounts(index)
        }
      }
    },

    removeItem(item, index) {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts)) return
      this.form.selectedProducts.splice(index, 1)
      this.calculateSum()
    },
  },
  async mounted() {
    this.loadTemporaryData()
    // Handle pre-selection from query parameters after component is mounted
    // Wait a bit to ensure data is loaded
    await this.$nextTick()
    this.handlePreSelection()
  },
}
</script>

<style scoped>
/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}

.create-btn {
  padding: 11px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.create-btn:hover {
  background-color: #e9ecef;
}

.edit-btn {
  background-color: #17a2b8 !important;
  color: white !important;
  border-color: #17a2b8 !important;
}

.edit-btn:hover {
  background-color: #138496 !important;
  border-color: #117a8b !important;
}

.table-custom {
  border: none !important;
}

.quotations-create-table {
  border-collapse: separate;
  border-spacing: 0;
}

.quotations-create-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.quotations-create-table thead tr {
  border: none !important;
}

.quotations-create-table thead th:first-child {
  border-top-left-radius: 10px;
}

.quotations-create-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .quotations-create-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .quotations-create-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}


.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Custom Status Badge Styling */
.quotations-create-table .badge.badge-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Search Input Background Override */
.form-control {
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

/* Custom Quantity Input Styling */
.custom-qty-input {
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
}

.button-minus,
.button-plus {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button-minus {
  background-color: #dc3545;
  color: white;
}

.button-plus {
  background-color: #007bff;
  color: white;
}

.button-minus:hover {
  background-color: #c82333;
  transform: scale(1.05);
}

.button-plus:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.quantity-field {
  width: 60px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 5px;
}

.quantity-field:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* RTL-specific adjustments for this component */
[dir="rtl"] .d-flex {
  direction: rtl;
}

[dir="rtl"] .create-btn {
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .create-btn {
  border-radius: 0 0.25rem 0.25rem 0;
}

/* RTL adjustments for v-select in this component */
[dir="rtl"] .rtl-select .vs__dropdown-toggle {
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .rtl-select .vs__dropdown-toggle {
  border-radius: 0.25rem;
}

/* Ensure proper RTL layout for the select and button combination */
[dir="rtl"] .flex-grow-1.rtl-select {
  border-right: none;
}

[dir="ltr"] .flex-grow-1.rtl-select {
  border-right: 1px solid #ced4da;
}

/* Clickable badge styling */
.clickable-badge {
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.clickable-badge:hover {
  background-color: #c82333 !important;
  transform: scale(1.05);
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);
}

.clickable-badge:active {
  transform: scale(0.95);
}

/* Insufficient stock input styling */
.insufficient-stock-input {
  border: 2px solid #dc3545 !important;
  background-color: #fff5f5 !important;
  color: #dc3545 !important;
}

.insufficient-stock-input:focus {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}

/* Debug Panel Styles */
.debug-panel {
  border: 2px solid #ffc107;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 193, 7, 0.2);
  display: none;
  /* Hide debug panel by default */
}

.debug-panel .card-header {
  background: linear-gradient(45deg, #ffc107, #ffeb3b) !important;
  border-bottom: 2px solid #ffc107;
  border-radius: 8px 8px 0 0 !important;
}

.debug-item {
  background-color: #f8f9fa;
  border-left: 4px solid #007bff !important;
  transition: all 0.3s ease;
}

.debug-item:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.debug-step {
  margin-bottom: 8px;
  padding: 4px 8px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.debug-summary {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.debug-summary ul li {
  padding: 4px 0;
  border-bottom: 1px solid #e9ecef;
}

.debug-summary ul li:last-child {
  border-bottom: none;
}

.debug-display {
  background: linear-gradient(135deg, #e3f2fd, #f3e5f5) !important;
  border: 1px solid #bbdefb;
  font-family: 'Courier New', monospace;
}

.debug-steps .step {
  padding: 8px 12px;
  margin-bottom: 8px;
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.debug-state {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.debug-state div {
  padding: 4px 0;
  border-bottom: 1px solid #e9ecef;
}

.debug-state div:last-child {
  border-bottom: none;
}

/* Debug table styling */
.debug-panel .table th {
  background-color: #f8f9fa;
  font-weight: 600;
  font-size: 0.85em;
}

.debug-panel .table td {
  font-size: 0.85em;
  vertical-align: middle;
}

.debug-panel .table tbody tr:hover {
  background-color: #f8f9fa;
}

/* Responsive adjustments for debug panel */
@media (max-width: 768px) {
  .debug-panel .card-body {
    padding: 15px;
  }

  .debug-item .row {
    margin: 0;
  }

  .debug-item .col-md-6 {
    padding: 0 5px;
  }

  .debug-step {
    font-size: 0.8em;
    padding: 3px 6px;
  }

  .debug-panel .table {
    font-size: 0.75em;
  }
}
</style>