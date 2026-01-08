<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'purchases.index' }" class="btn btn-info">
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
                <button type="submit" class="btn btn-success" :form="'purchaseEditForm'" :title="$t('Save')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="purchaseEditForm" role="form" @submit.prevent="updatePurchase" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="suppliers && products">
                <div class="form-group col-md-12 col-xl-3">
                  <label for="supplier">{{ $t('Supplier') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.supplier" :options="suppliers" label="name"
                    :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier"
                    :placeholder="$t('Select a supplier')" @input="onSupplierChange" />
                  
                  <!-- Supplier Chart of Account Status -->
                  <div class="supplier-status mt-2" v-if="form.supplier">
                    <div v-if="!form.supplier.chart_of_account_id" class="supplier-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Supplier needs Chart of Account') }}</span>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="autoAssignSupplierChartOfAccount"
                        :disabled="isAutoAssigningSupplier"
                      >
                        <i :class="isAutoAssigningSupplier ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                        {{ isAutoAssigningSupplier ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                    </div>
                  </div>
                  
                  
                  
                  <has-error :form="form" field="supplier" />
                </div>
                <div class="form-group col-md-12 col-xl-3">
                  <label for="purchaseNo">{{
                    $t('Purchase No')
                  }}</label>
                  <input id="purchaseNo" v-model="form.purchaseNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseNo') }" name="purchaseNo" :placeholder="$t('Enter purchase no')
                      " readonly />
                  <has-error :form="form" field="purchaseNo" />
                </div>
                <div v-if="products" class="form-group col-md-12 col-xl-6">
                  <label for="product">{{ $t('Select Products') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.product" :options="products" label="label" :class="{
                    'is-invalid': form.errors.has('selectedProducts'),
                  }" name="product" :placeholder="$t('Search products')"
                    @input="storeProduct(form.product)" />
                  
                  <!-- Product Chart of Account Status -->
                  <div class="product-status mt-2" v-if="form.selectedProducts && form.selectedProducts.length > 0">
                    <div v-if="!form.selectedProducts[0].purchase_account_id" class="product-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('needs Purchase Account') }}</span>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="autoAssignProductChartOfAccount(form.selectedProducts[0])"
                        :disabled="isAutoAssigningProduct === form.selectedProducts[0].id"
                      >
                        <i :class="isAutoAssigningProduct === form.selectedProducts[0].id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                        {{ isAutoAssigningProduct === form.selectedProducts[0].id ? $t('Assigning...') : $t('Auto-Assign') }}
                      </button>
                    </div>
                  </div>
                  
                  <has-error :form="form" field="selectedProducts" />
                </div>
              </div>

              <ItemsTable
                v-if="form.selectedProducts && form.selectedProducts.length > 0"
                :items="form.selectedProducts"
                :prefix="prefix"
                :taxes="taxes"
                :form-errors="form.errors"
                :total-unit-price="totalUnitPrice"
                :total-product-discount="totalProductDiscount"
                :total-after-discount="totalAfterDiscount"
                :total-product-tax="totalProductTax"
                :subtotal="subtotal"
                :amount-in-words="toWord()"
                :show-current-qty-column="!!form.purchaseReturnData"
                :show-return-price-column="!!form.purchaseReturnData"
                :totals-colspan="5"
                :custom-total-value="form.purchaseReturnData ? form.purchaseReturn : null"
                table-class="quotations-create-table"
                @item-change="handleItemChange"
                @discount-change="calculateProductDiscount"
                @vat-change="calculateProductVat"
                @remove-item="removeItem"
              />
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row">
                <div class="form-group col-md-6 col-xl-3">
                  <label for="poReference">{{
                    $t('PO Reference')
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference" :placeholder="$t('Enter PO reference')
                      " />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="paymentTerms">{{
                    $t('Payment Terms')
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms" :placeholder="$t('Enter payment terms')
                      " />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="payment_method_id">{{ $t("Payment Method") }} ({{ $t("وسيلة الدفع") }})</label>
                  <select id="payment_method_id" v-model="form.payment_method_id" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('payment_method_id') }" name="payment_method_id"
                    :disabled="loadingPaymentMethods"
                    @change="clearFieldError('payment_method_id')">
                    <option value="">{{ loadingPaymentMethods ? $t("Loading...") : $t("Select") }}</option>
                    <option v-if="!loadingPaymentMethods && paymentMethods.length === 0" value="" disabled>
                      {{ $t("No payment methods available") }}
                    </option>
                    <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
                      {{ method.name }}
                    </option>
                  </select>
                  <has-error :form="form" field="payment_method_id" />
                  <small v-if="loadingPaymentMethods" class="form-text text-muted">
                    <i class="fas fa-spinner fa-spin"></i> {{ $t("Loading payment methods...") }}
                  </small>
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-3">
                  <label for="orderTax">{{ $t('Purchase Tax') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" :placeholder="$t('Select a tax type')
                      " @input="updateTax" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-3">
                  <label for="totalTax">{{
                    $t('Total Tax')
                  }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6" :class="form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'">
                  <label for="discount">{{
                    $t('Discount')
                  }}</label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1" :max="form.rowSubTotal"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')
                      " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <!-- Transport Cost Fields - Show based on supplier tax status -->
                <div v-if="isSupplierTaxable" class="form-group col-md-6" :class="form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'">
                  <label for="transportTaxableCost">{{
                    $t("Taxable Transport Cost")
                  }}</label>
                  <input id="transportTaxableCost" v-model="form.transportTaxableCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportTaxableCost') }" name="transportTaxableCost"
                    :placeholder="$t('Enter transport cost')
                        " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportTaxableCost" />
                </div>
                <div v-if="isSupplierTaxable" class="form-group col-md-6" :class="form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'">
                  <label for="transportVatAmount">{{
                    $t("Transport VAT Amount")
                  }}</label>
                  <input id="transportVatAmount" v-model="form.transportVatAmount" type="number" step="any" 
                    class="form-control" name="transportVatAmount" readonly />
                </div>
                <div v-else class="form-group col-md-6" :class="form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')
                        " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
                <div v-if="form.purchaseReturnData" class="form-group col-md-6"
                  :class="form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'">
                  <label for="purchaseReturn">{{
                    $t('Cost of Return Products')
                  }}</label>
                  <input id="purchaseReturn" v-model="form.purchaseReturn" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseReturn') }" name="purchaseReturn" readonly />
                  <has-error :form="form" field="purchaseReturn" />
                </div>

                <div class="form-group col-md-6" :class="form.purchaseReturnData ? 'col-lg-3' : 'col-lg-4'">
                  <label for="netTotal">{{ $t('Net Total') }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
              </div>

              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="purchaseDate">{{
                    $t('Purchase Date')
                  }}</label>
                  <input id="purchaseDate" v-model="form.purchaseDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseDate') }" name="purchaseDate" />
                  <has-error :form="form" field="purchaseDate" />
                </div>
                <div class="form-group col-md-4">
                  <label for="poDate">{{
                    $t('PO Date')
                  }}</label>
                  <input id="poDate" v-model="form.poDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poDate') }" name="poDate" />
                  <has-error :form="form" field="poDate" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
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
                    <i class="fas fa-edit" /> {{ $t('Save changes') }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
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
import RTLMixin from '~/mixins/RTLMixin'
import { ToWords } from 'to-words'


export default {
  middleware: ['auth', 'check-permissions'],
  components: {
    ItemsTable,
  },
  metaInfo() {
    return { title: this.$t('Edit Purchase') }
  },
  mixins: [RTLMixin],

  data: () => ({
    breadcrumbsCurrent: 'Edit Purchase',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Purchases',
        url: 'purchases.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    suppliers: [], // Local suppliers array instead of using shared items
    form: new Form({
      supplier: '',
      purchaseNo: '',
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discount: '',
      discount_type: 'percentage', // "percentage" or "fixed"
      discount_value: 0,
      transportCost: '',
      transportTaxableCost: '',
      transportVatAmount: 0,
      transportIsTaxable: true, // Default to true to maintain existing behavior (transport is taxable)
      orderTax: '',
      totalTax: 0,
      totalProductTax: 0,
      poReference: '',
      paymentTerms: '',
      payment_method_id: null,
      poDate: new Date().toISOString().slice(0, 10),
      purchaseDate: new Date().toISOString().slice(0, 10),
      purchaseReturnData: '',
      purchaseReturn: 0,
      note: '',
      status: 1,
      totalDiscount: 0,
    }),
    products: '',
    accounts: '',
    taxes: '',
    paymentMethods: [],
    loadingPaymentMethods: false,
    prefix: '',
    purchasePrefix: '',
    isAutoAssigningSupplier: false,
    isAutoAssigningProduct: null,
  }),
  mounted() {
    this.$nextTick(() => {
      this.loadTemporaryData();
    })
  },
  computed: {
    ...mapGetters('operations', ['appInfo']),

    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + (item.originalPrice || item.unitPrice) * item.qty;
      }, 0);
    },

    totalProductDiscount() {
      return this.getTotalDiscountSum();
    },

    totalAfterDiscount() {
      return this.getSubTotalAfterDiscount();
    },

    totalProductTax() {
      return this.getTotalVATSum();
    },

    subtotal() {
      return this.getTotalWithVATSum();
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
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Check if supplier is taxable (has tax_status === 'taxable' and tax_registration_number)
    isSupplierTaxable() {
      if (!this.form.supplier) {
        return false;
      }

      // Support both camelCase and snake_case
      const taxStatus =
        this.form.supplier.tax_status || this.form.supplier.taxStatus;
      const taxRegNumber =
        this.form.supplier.tax_registration_number ||
        this.form.supplier.taxRegistrationNumber ||
        this.form.supplier.tax_registrationNumber;

      const isTaxable =
        taxStatus === 'taxable' &&
        taxRegNumber &&
        taxRegNumber.length > 0;

      return isTaxable;
    },

    // Invoice Subtotal: Sum of all item subtotals before discount (qty × unit_price)
    invoiceSubtotal() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      return this.roundToTwoDecimals(
        this.form.selectedProducts.reduce((total, item) => {
          const unitPriceNumber =
            Number(item.originalPrice || item.unitPrice) || 0;
          const qtyNumber = Number(item.qty) || 0;
          return total + unitPriceNumber * qtyNumber;
        }, 0)
      );
    },

    // Invoice-Level Discount Total: Total discount applied at invoice level and distributed across items
    // This is calculated from invoice-level discount inputs (discount_type and discount_value)
    invoiceLevelDiscountTotal() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }

      const subtotal = this.invoiceSubtotal;
      if (
        subtotal <= 0 ||
        !this.form.discount_value ||
        this.form.discount_value <= 0
      ) {
        return 0;
      }

      let discountAmount = 0;
      if (this.form.discount_type === 'percentage') {
        discountAmount = this.roundToTwoDecimals(
          (subtotal * this.form.discount_value) / 100
        );
      } else {
        discountAmount = this.roundToTwoDecimals(
          Number(this.form.discount_value)
        );
      }

      // Ensure discount doesn't exceed the subtotal
      return discountAmount > subtotal
        ? this.roundToTwoDecimals(subtotal)
        : discountAmount;
    },

    // Shipping Cost Total: Total shipping cost (regardless of taxability)
    // Gets transport amount from either transportTaxableCost or transportCost field
    shippingCostTotal() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      // Get transport cost from the appropriate field based on supplier tax status
      // This is the total transport amount, used in calculations regardless of taxability setting
      const transportCost = this.isSupplierTaxable
        ? Number(this.form.transportTaxableCost || 0)
        : Number(this.form.transportCost || 0);
      return this.roundToTwoDecimals(transportCost);
    },

    // Net Amount Before VAT: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of item net totals to avoid discount issues
    //
    // If transport is taxable:
    //   Net Amount = Invoice Subtotal - Invoice Discount + Transport
    //   Transport is included in VAT base
    //
    // If transport is non-taxable:
    //   Net Amount = Sum of Item Net Totals (after item-level discounts)
    //   This ensures item-level discounts are correctly included without double-counting
    //   Transport is NOT included in VAT base and is added after VAT calculation
    netAmountBeforeVAT() {
      const subtotal = this.invoiceSubtotal;
      const invoiceDiscount = this.invoiceLevelDiscountTotal;
      const shipping = this.shippingCostTotal;

      if (this.form.transportIsTaxable) {
        // Transport is taxable: include it in Net Amount (part of VAT base)
        // Net Amount = Invoice Subtotal - Invoice Discount + Transport
        return this.roundToTwoDecimals(subtotal - invoiceDiscount + shipping);
      } else {
        // Transport is non-taxable: use sum of item net totals (after item-level discounts)
        // This ensures item-level discounts are correctly included
        if (
          !this.form.selectedProducts ||
          this.form.selectedProducts.length === 0
        ) {
          return 0;
        }

        // Sum of item net totals after discount (transport excluded)
        const sumOfItemNetTotals = this.form.selectedProducts.reduce(
          (total, item) => {
            const itemNetTotal = item.netTotal || item.totalAfterDiscount || 0;
            return total + itemNetTotal;
          },
          0
        );

        // Net Amount = Taxable Base = Sum of Item Net Totals (transport excluded)
        // Transport will be added after VAT calculation in grandTotal()
        return this.roundToTwoDecimals(sumOfItemNetTotals);
      }
    },

    // VAT Amount: Calculated based on transport taxability
    // CRITICAL: VAT calculation differs based on whether transport is taxable or not
    //
    // Transport Taxability Behavior:
    // - If transport is taxable:
    //   VAT base = Subtotal - Discount + Transport
    //   VAT = VAT base × Weighted Average VAT Rate
    // - If transport is non-taxable:
    //   VAT base = Subtotal - Discount (transport EXCLUDED from VAT base)
    //   VAT = Sum of item VATs (totalProductTax) - ensures consistency with item-level calculations
    //   Transport is NOT included in VAT calculation and is added after VAT
    //
    // Why this approach:
    // - When transport is taxable: It's part of the transaction value, so included in VAT base
    // - When transport is non-taxable: Item-level VAT already correctly excludes transport,
    //   so we use the sum of item VATs to ensure consistency and avoid double-counting
    // - This matches standard accounting practices for non-taxable shipping
    vatAmount() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }

      // When transport is non-taxable, use sum of item VATs directly
      // This ensures VAT equals the sum of item VATs and transport is NOT included in VAT base
      if (!this.form.transportIsTaxable) {
        // Transport is non-taxable: VAT = Sum of item VATs (transport excluded from VAT base)
        // Item-level calculations already correctly exclude transport from VAT when non-taxable
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
      // We use items' net amounts (after discount) as weights
      let totalNetAmountForWeighting = 0;
      let weightedVatRateSum = 0;

      this.form.selectedProducts.forEach((item) => {
        const itemNetAmount = item.netTotal || 0;

        if (itemNetAmount > 0) {
          // Get item's VAT rate
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

          // Ensure vatRate is valid
          if (!isNaN(vatRate) && vatRate >= 0) {
            totalNetAmountForWeighting += itemNetAmount;
            // Weighted contribution: itemNetAmount × (vatRate / 100)
            weightedVatRateSum += itemNetAmount * (vatRate / 100);
          }
        }
      });

      // If no valid net amount for weighting, return 0
      if (totalNetAmountForWeighting <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate as percentage
      // Formula: weightedAverageRate = (sum(itemNetAmount × itemVatRate) / sum(itemNetAmount)) × 100
      const weightedAverageVatRate =
        (weightedVatRateSum / totalNetAmountForWeighting) * 100;

      // Calculate VAT on the Net Amount using weighted average rate
      // Net Amount includes transport when transport is taxable
      const vat = this.roundToTwoDecimals(
        netAmount * (weightedAverageVatRate / 100)
      );

      return vat;
    },

    // Grand Total: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of item totals to avoid discount double-counting
    //
    // If transport is taxable:
    //   Grand Total = Net Amount + VAT
    //   Where: Net Amount = Subtotal - Discount + Transport (transport included in VAT base)
    //
    // If transport is non-taxable:
    //   Grand Total = Sum of Item Totals After VAT + Transport
    //   This ensures:
    //   - Item-level discounts are correctly included (no double-counting)
    //   - VAT is calculated correctly on items only (transport excluded)
    //   - Transport is added only once at invoice level
    //
    // Why use sum of item totals when non-taxable:
    // - Item totals already include item-level discounts and VAT
    // - Avoids issues with invoice-level vs item-level discount calculations
    // - Ensures accuracy: Grand Total = sum(item totals) + transport
    grandTotal() {
      const shipping = this.shippingCostTotal;

      if (this.form.transportIsTaxable) {
        // Transport is taxable: use Net Amount + VAT calculation
        const netAmount = this.netAmountBeforeVAT;
        const vat = this.vatAmount;
        // Grand Total = Net Amount + VAT (transport already included in Net Amount)
        return this.roundToTwoDecimals(netAmount + vat);
      } else {
        // Transport is non-taxable: use sum of item totals after VAT
        // This ensures item-level discounts are correctly included without double-counting
        if (
          !this.form.selectedProducts ||
          this.form.selectedProducts.length === 0
        ) {
          return this.roundToTwoDecimals(shipping);
        }

        // Calculate sum of all item totals after VAT (includes item-level discounts and VAT)
        const sumOfItemTotals = this.form.selectedProducts.reduce(
          (total, item) => {
            // Item total after VAT = itemAfterDiscount + itemVAT (transport excluded)
            const itemTotal = item.totalPrice || 0;
            return total + itemTotal;
          },
          0
        );

        // Grand Total = Sum of Item Totals + Transport (transport added after VAT)
        return this.roundToTwoDecimals(sumOfItemTotals + shipping);
      }
    },
  },
  watch: {
    appInfo: {
      handler() {
        // Watcher for appInfo changes
      },
      immediate: true,
      deep: true,
    },
    isSaudiArabia: {
      handler(newVal) {
        // Clear orderTax when fields are hidden (when isSaudiArabia is true)
        if (newVal === true) {
          this.form.orderTax = null;
          this.form.totalTax = 0;
        }
      },
      immediate: true,
    },
    // Watch for changes in selectedProducts to update Net Total
    'form.selectedProducts': {
      handler() {
        this.updateNetTotal();
      },
      deep: true,
    },
    // Watch for changes in transport cost to update Net Total
    'form.transportCost': {
      handler() {
        this.updateNetTotal();
      },
    },
    'form.transportTaxableCost': {
      handler() {
        this.updateNetTotal();
      },
    },
    // Watch for changes in transport taxability to recalculate totals
    'form.transportIsTaxable': {
      handler() {
        this.calculateSum();
      },
    },
  },
  created() {
    this.getPurchase()
    this.getSuppliers()
    this.getProducts()
    this.getTaxes()
    this.getPaymentMethods()
    this.prefix = this.appInfo.productPrefix
    this.purchasePrefix = this.appInfo.purchasePrefix
  },
  methods: {
    // get purchase
    async getPurchase() {
      const { data } = await axios.get(
        window.location.origin + '/api/purchases/' + this.$route.params.slug
      )
      this.form.purchaseNo = this.$options.filters.withPrefix(
        data.data.purchaseNo,
        this.purchasePrefix
      )
      this.form.supplier = data.data.supplier
      this.form.poReference = data.data.poReference
      this.form.transportCost = data.data.transport
      this.form.transportTaxableCost = data.data.transport_taxable || ''
      // Calculate VAT amount if transport_taxable exists
      if (data.data.transport_taxable && data.data.transport && data.data.transport > data.data.transport_taxable) {
        this.form.transportVatAmount = Number((data.data.transport - data.data.transport_taxable).toFixed(2))
      } else {
        this.form.transportVatAmount = 0
      }
      this.form.totalTax = data.data.tax
      this.form.orderTax = data.data.taxType || null
      // Initialize discount fields - handle both new format (discount_type/discount_value) and old format (discount)
      if (data.data.discount_type && data.data.discount_value !== undefined) {
        this.form.discount_type = data.data.discount_type || 'percentage'
        this.form.discount_value = Number(data.data.discount_value) || 0
        // Keep old discount field for backward compatibility
        this.form.discount = data.data.totalDiscount || ''
      } else {
        // Backward compatibility: if only totalDiscount is provided, try to infer type
        const totalDiscount = Number(data.data.totalDiscount) || 0
        this.form.discount = totalDiscount
        if (totalDiscount > 0) {
          // Default to fixed amount if we can't determine
          this.form.discount_type = 'fixed'
          this.form.discount_value = totalDiscount
        } else {
          this.form.discount_type = 'percentage'
          this.form.discount_value = 0
        }
      }
      // Initialize transport taxability - handle both new and old format
      this.form.transportIsTaxable = data.data.transportIsTaxable !== undefined 
        ? Boolean(data.data.transportIsTaxable) 
        : (data.data.transport_taxable !== undefined 
          ? Boolean(data.data.transport_taxable) 
          : true) // Default to true for backward compatibility
      this.form.paymentTerms = data.data.paymentTerms
      this.form.poDate = data.data.poDate
      this.form.purchaseDate = data.data.purchaseDate
      this.form.purchaseReturnData = data.data.purchaseReturn
      this.form.status = data.data.status
      this.form.note = data.data.note
      this.form.selectedProducts = this.assignProducts(data.data.products)
      
      // Preselect payment method if available
      if (data.data.payment_method_id) {
        this.form.payment_method_id = data.data.payment_method_id;
      } else if (data.data.paymentMethod && data.data.paymentMethod.id) {
        this.form.payment_method_id = data.data.paymentMethod.id;
      }
      
      // Trigger full recalculation after all data is loaded
      this.$nextTick(() => {
        this.calculateSum();
        this.updateTax();
        this.updateNetTotal();
      });
    },

    // get all local suppliers
    async getSuppliers() {
      const { data } = await axios.get(window.location.origin + '/api/all-suppliers');
      this.suppliers = data.data || [];
    },

    // get products
    async getProducts() {
      // Store the current selected products IDs
      const currentProductIds = this.form.selectedProducts ? this.form.selectedProducts.map(p => p.id) : [];
      
      const { data } = await axios.get(
        window.location.origin + '/api/all-products-not-service'
      )
      this.products = data.data
      
      // Update selected products with fresh data if they exist
      if (currentProductIds.length > 0 && this.form.selectedProducts) {
        this.form.selectedProducts.forEach(selectedProduct => {
          const freshProduct = this.products.find(p => p.id === selectedProduct.id);
          if (freshProduct) {
            // Update the product with fresh data while preserving user input
            Object.assign(selectedProduct, freshProduct);
          }
        });
      }
    },

    // get taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-vat-rates'
      )
      this.taxes = data.data
    },

    // get payment methods
    async getPaymentMethods() {
      this.loadingPaymentMethods = true;
      try {
        const response = await axios.get(window.location.origin + '/api/payment-methods', {
          params: { perPage: 1000 } // Get all payment methods
        });
        // Handle both paginated and non-paginated responses
        if (response.data) {
          if (Array.isArray(response.data)) {
            this.paymentMethods = response.data;
          } else if (response.data.data && Array.isArray(response.data.data)) {
            this.paymentMethods = response.data.data;
          } else {
            this.paymentMethods = [];
          }
        } else {
          this.paymentMethods = [];
        }
      } catch (error) {
        console.error('Error loading payment methods:', error);
        this.paymentMethods = [];
        toast.fire({
          type: 'error',
          title: this.$t('Error'),
          text: this.$t('Failed to load payment methods'),
        });
      } finally {
        this.loadingPaymentMethods = false;
      }
    },

    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      )
      let quantity = 1
      if (index === -1) {
        // Use average purchase price by supplier if available, otherwise fall back to avgPurchasePrice or regularPrice
        let purchasePrice =
          product.avgPurchasePriceBySupplier &&
          product.avgPurchasePriceBySupplier > 0
            ? product.avgPurchasePriceBySupplier
            : product.avgPurchasePrice > 0
            ? product.avgPurchasePrice
            : product.regularPrice > 0
            ? product.regularPrice
            : 1

        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: quantity,
          unitPrice: purchasePrice,
          originalPrice: purchasePrice, // Align calculations with unitPrice
          discount: 0,
          discountType: 'fixed',
          discountAmount: 0,
          selectedVatRate:
            this.findMatchingVatRate(product.productTax) ||
            (this.taxes && this.taxes.length > 0 ? this.taxes[0] : null),
          productTax: 0,
          totalTax: 0,
          unitCost: purchasePrice,
          totalPrice: purchasePrice * quantity,
          totalBeforeDiscount: purchasePrice * quantity, // For ItemsTable component
          totalAfterDiscount: purchasePrice * quantity, // For ItemsTable component
          // Include chart of account IDs for validation
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id,
        })
      } else {
        // Product already exists, update it with fresh data while preserving user input
        let existingProduct = this.form.selectedProducts[index]
        let updatedProduct = {
          ...existingProduct,
          // Update chart of account IDs with fresh data
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id,
        }
        this.form.selectedProducts[index] = updatedProduct
      }
      this.generateItemTotal(quantity, 'qty', index, '')
      // Calculate VAT for the newly added product if it has a default VAT rate
      if (index === -1 && this.taxes && this.taxes.length > 0) {
        this.calculateProductVat(0) // 0 because we used unshift, so new product is at index 0
      }
      this.updateTax()
      return
    },

    // Handle item change from ItemsTable component
    handleItemChange({ value, type, index, action }) {
      // Map ItemsTable event format to generateItemTotal method signature
      this.generateItemTotal(value, type, index, action);
    },

    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == 'qty') {
          item.qty = value;
          if (action == 'increment') {
            item.qty = Number(item.qty) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else {
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
          // Update original price when user manually changes unit price
          item.originalPrice = item.unitPrice;
        }

        // Use the new method to calculate totals (will recalculate sum internally)
        this.generateItemTotalPrice(index);

        this.form.selectedProducts[index] = item;
      }
      this.updateTax();
      // Note: calculateSum is already called by generateItemTotalPrice
      return;
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item)
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1)
      }
      this.updateTax()
      return
    },
    
    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Recalculate totals using the new method (will recalculate sum internally)
        this.generateItemTotalPrice(index);
      }
    },

    // calculate product VAT
    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Recalculate totals using the new method (will recalculate sum internally)
        this.generateItemTotalPrice(index);
      }
    },
    
    // Helper method to round to 2 decimal places (for calculations)
    roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },

    // Format number to display with exactly 2 decimal places
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

    // Helper method to find matching VAT rate
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;

      // If productTax is an object (VAT rate object), use its rate property
      if (typeof productTax === 'object' && productTax.rate !== undefined) {
        return this.taxes.find((tax) => tax.rate === productTax.rate);
      }

      // If productTax is a number (rate value), compare directly
      if (typeof productTax === 'number') {
        return this.taxes.find((tax) => tax.rate === productTax);
      }

      return null;
    },

    // Helper method to get total after discount for display
    getTotalAfterDiscount(item) {
      let total = (item.originalPrice || item.unitPrice) * item.qty;
      if (item.discountType === 'percentage') {
        return total - (total * (item.discount || 0)) / 100;
      } else {
        return total - (item.discountAmount || 0);
      }
    },

    // Helper method to get subtotal after discount for display
    getSubTotalAfterDiscount() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (prev, cur) {
        let lineTotal = (cur.originalPrice || cur.unitPrice) * cur.qty;
        let lineTotalAfterDiscount;
        if (cur.discountType === 'percentage') {
          lineTotalAfterDiscount =
            lineTotal - (lineTotal * (cur.discount || 0)) / 100;
        } else {
          lineTotalAfterDiscount = lineTotal - (cur.discountAmount || 0);
        }
        return Number((prev + lineTotalAfterDiscount).toFixed(2));
      }, 0);
    },

    // Helper method to get total with VAT for display (VAT + Total After Discount)
    getTotalWithVAT(item) {
      let totalAfterDiscount = this.getTotalAfterDiscount(item);
      // Use totalTax (VAT for entire quantity) not productTax (VAT per unit)
      let vatAmount = item.totalTax || 0;
      return Number((totalAfterDiscount + vatAmount).toFixed(2));
    },

    // Helper method to get grand total with VAT (Total VAT + Total After Discount)
    getGrandTotalWithVAT() {
      let totalAfterDiscount = this.getSubTotalAfterDiscount();
      let totalVAT = this.form.totalProductTax || 0;
      return Number((totalAfterDiscount + totalVAT).toFixed(2));
    },

    // Helper method to get sum of all individual "Total with VAT" values
    getTotalWithVATSum() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      // Sum of all item.totalPrice values (which is totalAfterDiscount + totalTax)
      return this.form.selectedProducts.reduce((total, item) => {
        return Number((total + (item.totalPrice || 0)).toFixed(2));
      }, 0);
    },

    // Helper method to get sum of all individual VAT amounts
    getTotalVATSum() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        // Use totalTax (VAT for entire quantity) not productTax (VAT per unit)
        return Number((total + (item.totalTax || 0)).toFixed(2));
      }, 0);
    },

    // Helper method to get sum of all individual discount amounts
    getTotalDiscountSum() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return Number((total + (item.discountAmount || 0)).toFixed(2));
      }, 0);
    },

    // Update Net Total when Total with VAT or Transport Cost changes
    updateNetTotal() {
      // Update form.netTotal to match the computed grandTotal
      // This ensures backend submission uses the correct final amount
      // Grand Total = Net Amount + VAT (calculated correctly on Net Amount, not Subtotal)
      this.form.netTotal = this.grandTotal;
      this.form.transportVatAmount = 0;
    },

    // generate item total price (following sales module logic with proportional discount and transport)
    generateItemTotalPrice(index, skipRecalculate = false) {
      let item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }

      // Normalize numeric inputs
      const unitPriceNumber = Number(item.originalPrice || item.unitPrice) || 0;
      const qtyNumber = Number(item.qty) || 0;

      // 1. Line Item: Total (Before Discount) = qty × unit_price
      const totalBeforeDiscount = this.roundToTwoDecimals(
        unitPriceNumber * qtyNumber
      );
      this.$set(item, 'totalBeforeDiscount', totalBeforeDiscount);

      // 2. Calculate product-level discount amount
      let productDiscountAmount = 0;
      if (item.discountType === 'percentage') {
        productDiscountAmount = this.roundToTwoDecimals(
          (unitPriceNumber * qtyNumber * (item.discount || 0)) / 100
        );
      } else {
        productDiscountAmount = this.roundToTwoDecimals(
          Number(item.discount || 0)
        );
      }

      // Ensure product discount amount doesn't exceed the total before discount
      if (productDiscountAmount > totalBeforeDiscount) {
        productDiscountAmount = this.roundToTwoDecimals(totalBeforeDiscount);
      }

      // Store product-level discount
      item.discountAmount = productDiscountAmount;

      // 3. Get proportional invoice-level discount allocation (if any)
      const proportionalDiscount = item.proportionalDiscountAmount || 0;

      // 4. Total discount = product discount + proportional invoice-level discount
      const discountAmount = this.roundToTwoDecimals(
        productDiscountAmount + proportionalDiscount
      );

      // Ensure total discount doesn't exceed the total before discount
      const finalDiscountAmount =
        discountAmount > totalBeforeDiscount
          ? this.roundToTwoDecimals(totalBeforeDiscount)
          : discountAmount;

      // 5. Calculate net total after discount
      const netTotal = this.roundToTwoDecimals(
        totalBeforeDiscount - finalDiscountAmount
      );
      this.$set(item, 'totalAfterDiscount', netTotal);

      // 6. Get proportional transport cost allocation (if any)
      const proportionalTransport = item.proportionalTransportAmount || 0;

      // 7. Get VAT rate
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

      // Ensure vatRate is a valid number
      if (isNaN(vatRate) || vatRate < 0) {
        vatRate = 0;
      }

      // 8. Calculate VAT base depending on transport taxability
      // CRITICAL: When transport is non-taxable, it must NOT affect item-level calculations
      // If transport is taxable: VAT base = netTotal + proportionalTransport
      // If transport is non-taxable: VAT base = netTotal (transport EXCLUDED from item calculations)
      // Use form.transportIsTaxable to respect user's choice (defaults to true for backward compatibility)
      const isTransportTaxable = this.form.transportIsTaxable !== false; // Default to true if not set

      // When transport is non-taxable, proportionalTransport should be 0 (not distributed)
      // But we explicitly exclude it to ensure clean calculation
      const transportForVatBase = isTransportTaxable
        ? proportionalTransport
        : 0;
      const vatBase = this.roundToTwoDecimals(netTotal + transportForVatBase);

      item.totalTax = this.roundToTwoDecimals(vatBase * (vatRate / 100));
      // productTax is VAT per unit (for display purposes)
      item.productTax =
        qtyNumber > 0
          ? this.roundToTwoDecimals(item.totalTax / qtyNumber)
          : 0;

      // 9. Line Item: Total With VAT
      // CRITICAL: When transport is non-taxable, it must NOT be included in item totals
      // Transport is only added at the invoice level (grand total) when non-taxable
      // If transport is taxable: Total = vatBase + VAT (transport already included in vatBase)
      // If transport is non-taxable: Total = vatBase + VAT (transport NOT included, added at invoice level only)
      if (isTransportTaxable) {
        // Transport is taxable: included in VAT base, so total = vatBase + VAT
        item.totalPrice = this.roundToTwoDecimals(vatBase + item.totalTax);
      } else {
        // Transport is non-taxable: EXCLUDE it from item total
        // Item total = itemAfterDiscount + itemVAT (transport added only at invoice grand total)
        item.totalPrice = this.roundToTwoDecimals(vatBase + item.totalTax);
      }

      // 10. Calculate unit cost for inventory valuation
      // Business rule: cost per item = after_discount + transport_share (VAT is NOT part of cost)
      // Note: When transport is non-taxable, proportionalTransport will be 0 (transport not distributed)
      // This means transport cost is not included in item unit cost when non-taxable
      const costBase = this.roundToTwoDecimals(
        netTotal + proportionalTransport
      );
      item.unitCost =
        qtyNumber > 0 ? this.roundToTwoDecimals(costBase / qtyNumber) : 0;

      // Store all calculated values
      this.$set(item, 'proportionalDiscountAmount', proportionalDiscount);
      this.$set(item, 'proportionalTransportAmount', proportionalTransport);
      this.$set(item, 'netTotal', netTotal);

      // Update the item in the array
      this.$set(this.form.selectedProducts, index, item);

      // Recalculate sum and update reactive totals (unless we are already in a global recomputation)
      if (!skipRecalculate) {
        this.calculateSum();
      }
    },

    // Allocate invoice-level discount proportionally across all items based on item subtotals (qty × unit_price)
    // Business rule: invoice-level discount is NOT a line-level discount.
    // Formula: itemDiscount = (itemSubtotal / invoiceSubtotal) * invoiceDiscount
    allocateInvoiceDiscountProportionally(invoiceLevelDiscount) {
      if (!invoiceLevelDiscount || invoiceLevelDiscount <= 0) {
        // Clear proportional discounts if no invoice-level discount
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalDiscountAmount) {
            this.$set(
              this.form.selectedProducts[index],
              'proportionalDiscountAmount',
              0
            );
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: qty × unit_price)
      let invoiceSubtotal = 0;
      const itemSubtotals = [];

      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber =
          Number(item.originalPrice || item.unitPrice) || 0;
        const qtyNumber = Number(item.qty) || 0;
        const itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = qty × unit_price

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
          proportionalAmount = this.roundToTwoDecimals(
            invoiceLevelDiscount * proportion
          );
          allocatedTotal += proportionalAmount;
        }

        // Store proportional discount amount
        this.$set(
          this.form.selectedProducts[index],
          'proportionalDiscountAmount',
          proportionalAmount
        );
      });

      // Handle rounding differences - add/subtract from the last item
      const roundingDifference = this.roundToTwoDecimals(
        invoiceLevelDiscount - allocatedTotal
      );
      if (
        Math.abs(roundingDifference) > 0.01 &&
        this.form.selectedProducts.length > 0
      ) {
        const lastIndex = this.form.selectedProducts.length - 1;
        const lastItem = this.form.selectedProducts[lastIndex];
        const currentProportional = lastItem.proportionalDiscountAmount || 0;
        const adjusted = this.roundToTwoDecimals(
          currentProportional + roundingDifference
        );
        this.$set(
          this.form.selectedProducts[lastIndex],
          'proportionalDiscountAmount',
          Math.max(0, adjusted)
        );
      }
    },

    // Allocate transport costs proportionally across all items based on item subtotals (qty × unit_price)
    // CRITICAL: This function should ONLY be called when transport is taxable
    // When transport is non-taxable, it must NOT be distributed to items
    // Formula: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
    // Note: Transport is allocated for reporting/display purposes and included in VAT calculation (when taxable)
    allocateTransportCostProportionally(transportCost) {
      if (!transportCost || transportCost <= 0) {
        // Clear proportional transport if no transport cost
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalTransportAmount) {
            this.$set(
              this.form.selectedProducts[index],
              'proportionalTransportAmount',
              0
            );
          }
        });
        return;
      }

      // IMPORTANT: This function assumes transport is taxable
      // If transport is non-taxable, this function should NOT be called
      // Transport distribution is only needed when transport affects item-level VAT calculations

      // Calculate total invoice subtotal (sum of all item subtotals: qty × unit_price)
      let invoiceSubtotal = 0;
      const itemSubtotals = [];

      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber =
          Number(item.originalPrice || item.unitPrice) || 0;
        const qtyNumber = Number(item.qty) || 0;
        const itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = qty × unit_price

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
          proportionalAmount = this.roundToTwoDecimals(
            transportCost * proportion
          );
          allocatedTotal += proportionalAmount;
        }

        // Store proportional transport amount (for reporting/display and VAT calculation)
        this.$set(
          this.form.selectedProducts[index],
          'proportionalTransportAmount',
          proportionalAmount
        );
      });

      // Handle rounding differences - add/subtract from the last item
      const roundingDifference = this.roundToTwoDecimals(
        transportCost - allocatedTotal
      );
      if (
        Math.abs(roundingDifference) > 0.01 &&
        this.form.selectedProducts.length > 0
      ) {
        const lastIndex = this.form.selectedProducts.length - 1;
        const lastItem = this.form.selectedProducts[lastIndex];
        const currentProportional = lastItem.proportionalTransportAmount || 0;
        const adjusted = this.roundToTwoDecimals(
          currentProportional + roundingDifference
        );
        this.$set(
          this.form.selectedProducts[lastIndex],
          'proportionalTransportAmount',
          Math.max(0, adjusted)
        );
      }
    },

    // Recalculate all items with proportional discount allocation (without re-entering calculateSum)
    recalculateAllItemsWithProportionalDiscount() {
      this.form.selectedProducts.forEach((item, index) => {
        // Recalculate this item to include proportional discount and transport
        // Pass skipRecalculate = true to avoid recursive global recalculation
        this.generateItemTotalPrice(index, true);
      });
    },

    // calculate sum (following sales module logic with proportional discount and transport)
    calculateSum() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        this.form.totalDiscount = 0;
        this.form.subTotal = 0;
        this.form.totalProductTax = 0;
        this.form.netTotal = 0;
        return;
      }

      // Calculate invoice subtotal (sum of all item subtotals: qty × unit_price)
      const invoiceSubtotal = this.form.selectedProducts.reduce(
        (total, item) => {
          const unitPriceNumber =
            Number(item.originalPrice || item.unitPrice) || 0;
          const qtyNumber = Number(item.qty) || 0;
          return total + unitPriceNumber * qtyNumber;
        },
        0
      );

      // Apply commercial invoice-level discount (for allocation only)
      // Business rule: invoice-level discount is applied on the INVOICE SUBTOTAL (sum of qty × unit_price),
      // not on a single line or on net/after-tax amounts.
      let invoiceLevelDiscount = 0;
      if (this.form.discount_value > 0) {
        if (this.form.discount_type === 'percentage') {
          // Percentage discount on invoice subtotal
          invoiceLevelDiscount = this.roundToTwoDecimals(
            (invoiceSubtotal * this.form.discount_value) / 100
          );
        } else {
          // Fixed discount amount
          invoiceLevelDiscount = this.roundToTwoDecimals(
            Number(this.form.discount_value)
          );
        }

        // Ensure discount doesn't exceed the invoice subtotal
        if (invoiceLevelDiscount > invoiceSubtotal) {
          invoiceLevelDiscount = invoiceSubtotal;
        }
      }

      // Get transport cost (use transportTaxableCost if supplier is taxable, otherwise transportCost)
      const transportCost = this.isSupplierTaxable
        ? Number(this.form.transportTaxableCost || 0)
        : Number(this.form.transportCost || 0);

      // Allocate invoice-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(invoiceLevelDiscount);

      // Allocate transport costs proportionally to items ONLY when transport is taxable
      // CRITICAL: When transport is non-taxable, it must NOT be distributed to items
      // Transport should only be added at the invoice level (grand total) when non-taxable
      if (this.form.transportIsTaxable) {
        // Transport is taxable: distribute it proportionally across items
        // This allows transport to be included in item-level VAT calculations
        this.allocateTransportCostProportionally(transportCost);
      } else {
        // Transport is non-taxable: DO NOT distribute to items
        // Clear any existing proportional transport amounts to ensure clean calculation
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalTransportAmount) {
            this.$set(
              this.form.selectedProducts[index],
              'proportionalTransportAmount',
              0
            );
          }
        });
      }

      // Recalculate all items with proportional discount and transport allocation (if applicable)
      this.recalculateAllItemsWithProportionalDiscount();

      // Calculate totals after recalculation
      // Total discount (sum of all discounts including proportional allocation)
      this.form.totalDiscount = this.form.selectedProducts.reduce(
        (total, item) => {
          const productDiscount = item.discountAmount || 0;
          const proportionalDiscount = item.proportionalDiscountAmount || 0;
          return total + productDiscount + proportionalDiscount;
        },
        0
      );

      // Subtotal after discount (sum of netTotal values)
      this.form.subTotal = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.netTotal || item.totalAfterDiscount || 0);
      }, 0);

      // Total VAT (sum of totalTax values, which already include VAT on transport)
      this.form.totalProductTax = this.form.selectedProducts.reduce(
        (total, item) => {
          return total + (item.totalTax || 0);
        },
        0
      );

      // Update netTotal to match grandTotal computed property
      this.form.netTotal = this.grandTotal;
    },

    // update tax
    updateTax() {
      this.form.totalTax = 0;
      if (
        this.form.orderTax &&
        this.form.orderTax.rate > 0 &&
        this.form.subTotal > 0
      ) {
        this.form.totalTax = Number(
          ((this.form.orderTax.rate / 100) * this.form.subTotal).toFixed(2)
        );
      }
      this.calculateSum();
      return;
    },

    // get purchase products
    assignProducts(purchaseProducts) {
      for (var key in purchaseProducts) {
        let purchaseProduct = purchaseProducts[key]
        let minQty =
          purchaseProduct.returnQty > 0 ? purchaseProduct.returnQty : 1
        const unitPrice = Number(purchaseProduct.purchasePrice) || 0
        const qty = Number(purchaseProduct.quantity) || 0
        
        // Find matching VAT rate from taxes list
        let selectedVatRate = null
        if (this.taxes && this.taxes.length > 0) {
          if (purchaseProduct.taxRate) {
            selectedVatRate = this.taxes.find(tax => tax.rate === purchaseProduct.taxRate) || null
          }
          if (!selectedVatRate) {
            selectedVatRate = this.taxes[0] // Default to first tax rate
          }
        }
        
        const productItem = {
          id: purchaseProduct.productID,
          slug: purchaseProduct.productSlug,
          name: purchaseProduct.productName,
          code: purchaseProduct.productCode,
          qty: qty,
          taxType: purchaseProduct.taxType,
          taxRate: purchaseProduct.taxRate,
          productTax: purchaseProduct.taxAmount,
          totalTax: purchaseProduct.taxTotal,
          unitCost: purchaseProduct.unitCost,
          totalPrice: purchaseProduct.unitCostTotal,
          returnQty: purchaseProduct.returnQty,
          unitPrice: unitPrice,
          originalPrice: unitPrice, // Set originalPrice to match unitPrice
          totalReturn: purchaseProduct.totalReturn,
          minQty:
            purchaseProduct.stockQty >= purchaseProduct.quantity
              ? minQty
              : minQty <= purchaseProduct.stockQty
                ? minQty + 1
                : purchaseProduct.stockQty,
          oldQty: purchaseProduct.quantity,
          discount: purchaseProduct.discount || 0,
          discountType: purchaseProduct.discountType || "fixed",
          discountAmount: purchaseProduct.discountAmount || 0,
          selectedVatRate: selectedVatRate,
          // Initialize proportional amounts (will be recalculated)
          proportionalDiscountAmount: 0,
          proportionalTransportAmount: 0,
          totalBeforeDiscount: unitPrice * qty,
          totalAfterDiscount: unitPrice * qty,
          netTotal: unitPrice * qty,
          // Include chart of account IDs if available
          sales_account_id: purchaseProduct.sales_account_id,
          purchase_account_id: purchaseProduct.purchase_account_id,
        }
        
        this.form.selectedProducts.unshift(productItem)
      }
      
      // After loading products, recalculate all totals
      this.$nextTick(() => {
        // Recalculate all items to ensure proper initialization
        this.form.selectedProducts.forEach((item, index) => {
          this.generateItemTotalPrice(index, true)
        })
        this.calculateSum()
        this.updateTax()
      })
      
      return this.form.selectedProducts
    },

    // Handle chart of account assignment
    async handleChartOfAccountAssigned(data) {
      if (data.entity === 'supplier') {
        // Refresh supplier data
        await this.getSuppliers();
        
        // If we have a selected supplier, update it with the new data
        if (this.form.supplier && this.suppliers && this.suppliers.length > 0) {
          const updatedSupplier = this.suppliers.find(s => s.id === this.form.supplier.id);
          if (updatedSupplier) {
            this.form.supplier = updatedSupplier;
          }
        }
      } else if (data.entity === 'product') {
        // Refresh product data
        await this.getProducts();
        
        // Update selected products with new chart of account data
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.form.selectedProducts.forEach(selectedProduct => {
            const updatedProduct = this.products.find(p => p.id === selectedProduct.id);
            if (updatedProduct) {
              // Update the chart of account fields
              selectedProduct.sales_account_id = updatedProduct.sales_account_id;
              selectedProduct.purchase_account_id = updatedProduct.purchase_account_id;
            }
          });
        }
      }
      
      // Force re-render of the validation component
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },

    // Auto-assign Chart of Account for supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form.supplier || this.isAutoAssigningSupplier) {
        return;
      }
      
      this.isAutoAssigningSupplier = true;
      
      try {
        const response = await axios.post(`/api/suppliers/${this.form.supplier.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          
          
          // Update the supplier data with new chart of account
          this.form.supplier.chart_of_account_id = response.data.chart_of_account_id;
          
          
          
          // Force Vue to re-render the component to update the UI
          this.$nextTick(() => {
            this.$forceUpdate();
          });
          
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: response.data.message || this.$t("Please try again or assign manually")
          });
        }
        
      } catch (error) {
        
        toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningSupplier = false;
      }
    },

    // Auto-assign Chart of Account for a specific product
    async autoAssignProductChartOfAccount(product) {
      if (!product || this.isAutoAssigningProduct === product.id) {
        return;
      }
      
      this.isAutoAssigningProduct = product.id;
      
      try {
        const response = await axios.post(`/api/products/${product.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          // Update the product data with new chart of account
          product.purchase_account_id = response.data.purchase_account_id;
          
          // Force Vue to re-render the component to update the UI
          this.$nextTick(() => {
            this.$forceUpdate();
          });
          
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: response.data.message || this.$t("Please try again or assign manually")
          });
        }
        
      } catch (error) {
        
        toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningProduct = false;
      }
    },

    // Handle supplier change
    onSupplierChange() {
      // Clear any previous errors
      this.form.errors.clear('supplier');
      
      // If a supplier is selected, ensure we have the latest data including Chart of Account
      if (this.form.supplier && this.form.supplier.id) {
        // Find the supplier in the suppliers list to get the most up-to-date data
        const updatedSupplier = this.suppliers.find(s => s.id === this.form.supplier.id);
        if (updatedSupplier) {
          // Update the form supplier with all the latest data
          this.form.supplier = { ...updatedSupplier };
        }
      }
    },

    // update purchase
    async updatePurchase() {
      await this.form
        .patch(
          window.location.origin + '/api/purchases/' + this.$route.params.slug
        )
        .then(({ data }) => {
          toast.fire({
            type: 'success',
            title: this.$t('Purchase updated successfully'),
          })
          this.clearTemporaryData()
          this.$router.push({ name: 'purchases.show', params: { slug: data.data.slug }, })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Please check your input and try again.'),
          })
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        supplier: this.form.supplier,
        purchaseNo: this.form.purchaseNo,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        transportTaxableCost: this.form.transportTaxableCost,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        poDate: this.form.poDate,
        purchaseDate: this.form.purchaseDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('purchaseEditTempData', JSON.stringify(tempData))
       
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('purchaseEditTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.supplier = data.supplier || this.form.supplier
          this.form.purchaseNo = data.purchaseNo || this.form.purchaseNo
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts
          this.form.subTotal = data.subTotal || this.form.subTotal
          this.form.netTotal = data.netTotal || this.form.netTotal
          this.form.transportCost = data.transportCost || this.form.transportCost
          this.form.orderTax = data.orderTax || this.form.orderTax
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax
          this.form.totalTax = data.totalTax || this.form.totalTax
          this.form.discount = data.discount || this.form.discount
          this.form.poReference = data.poReference || this.form.poReference
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms
          this.form.poDate = data.poDate || this.form.poDate
          this.form.purchaseDate = data.purchaseDate || this.form.purchaseDate
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
        } catch (e) {
          
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('purchaseEditTempData')
    },

    // return number to word with language support
    toWord(){
      const amount = this.totalUnitPrice || 0;
      
      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }
      
      if (this.isRTL && this.currentLocale === 'ar') {
        return this.convertToArabicWords(amount);
      } else {
        return this.convertToEnglishWords(amount);
      }
    },

    // Convert number to Arabic words
    convertToArabicWords(amount) {
      const currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return `صفر ${currencyInfo.main} فقط`;
      
      const integerPart = Math.floor(amount);
      const decimalPart = Math.round((amount - integerPart) * 100);
      
      let result = '';
      
      if (integerPart > 0) {
        const arabicNumber = this.convertIntegerToArabic(integerPart);
        result += arabicNumber + ' ' + currencyInfo.main;
        
        // Add proper pluralization for main currency
        if (integerPart === 1) {
          // Keep singular form
        } else if (integerPart === 2) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ان');
        } else if (integerPart >= 3 && integerPart <= 10) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      
      if (decimalPart > 0) {
        if (result) result += ' و ';
        const arabicDecimal = this.convertIntegerToArabic(decimalPart);
        result += arabicDecimal + ' ' + currencyInfo.sub;
        
        // Add proper pluralization for sub currency
        if (decimalPart === 1) {
          // Keep singular form
        } else if (decimalPart === 2) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان');
        } else if (decimalPart >= 3 && decimalPart <= 10) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      
      return result + ' فقط';
    },

    // Get currency information based on locale and app settings
    getCurrencyInfo() {
      const currency = this.appInfo?.currency || 'SAR';
      const isArabic = this.isRTL && this.currentLocale === 'ar';
      
      const currencyMap = {
        'SAR': {
          en: { main: 'Riyal', sub: 'Halala', symbol: 'ê' },
          ar: { main: 'ريال', sub: 'هللة', symbol: 'ê' }
        },
        'USD': {
          en: { main: 'Dollar', sub: 'Cent', symbol: '$' },
          ar: { main: 'دولار', sub: 'سنت', symbol: '$' }
        },
        'EUR': {
          en: { main: 'Euro', sub: 'Cent', symbol: '€' },
          ar: { main: 'يورو', sub: 'سنت', symbol: '€' }
        },
        'EGP': {
          en: { main: 'Pound', sub: 'Piastre', symbol: '£' },
          ar: { main: 'جنيه', sub: 'قرش', symbol: '£' }
        }
      };
      
      return currencyMap[currency]?.[isArabic ? 'ar' : 'en'] || currencyMap['SAR'][isArabic ? 'ar' : 'en'];
    },

    // Convert number to English words
    convertToEnglishWords(amount) {
      const currencyInfo = this.getCurrencyInfo();
      const toWords = new ToWords();
      let words = toWords.convert(amount);
      
      // Add currency information
      const integerPart = Math.floor(amount);
      const decimalPart = Math.round((amount - integerPart) * 100);
      
      let result = words;
      
      if (integerPart > 0) {
        result += ' ' + currencyInfo.main;
        if (integerPart !== 1) result += 's';
      }
      
      if (decimalPart > 0) {
        if (result) result += ' and ';
        result += this.convertIntegerToEnglish(decimalPart) + ' ' + currencyInfo.sub;
        if (decimalPart !== 1) result += 's';
      }
      
      return result + ' Only';
    },

    // Convert integer to English words (for decimal parts)
    convertIntegerToEnglish(num) {
      if (num === 0) return 'zero';
      
      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        const ten = Math.floor(num / 10);
        const one = num % 10;
        if (one === 0) return tens[ten];
        return tens[ten] + '-' + ones[one];
      }
      
      return 'number';
    },

    // Convert integer to Arabic words
    convertIntegerToArabic(num) {
      if (num === 0) return 'صفر';
      
      const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
      const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
      const teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
      const hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
      
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        const ten = Math.floor(num / 10);
        const one = num % 10;
        if (one === 0) return tens[ten];
        return ones[one] + ' و ' + tens[ten];
      }
      if (num < 1000) {
        const hundred = Math.floor(num / 100);
        const remainder = num % 100;
        if (remainder === 0) return hundreds[hundred];
        return hundreds[hundred] + ' و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000) {
        const thousand = Math.floor(num / 1000);
        const remainder = num % 1000;
        if (remainder === 0) {
          if (thousand === 1) return 'ألف';
          if (thousand === 2) return 'ألفان';
          if (thousand >= 3 && thousand <= 10) return this.convertIntegerToArabic(thousand) + ' آلاف';
          return this.convertIntegerToArabic(thousand) + ' ألف';
        }
        return this.convertIntegerToArabic(thousand) + ' ألف و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000000) {
        const million = Math.floor(num / 1000000);
        const remainder = num % 1000000;
        if (remainder === 0) {
          if (million === 1) return 'مليون';
          if (million === 2) return 'مليونان';
          if (million >= 3 && million <= 10) return this.convertIntegerToArabic(million) + ' ملايين';
          return this.convertIntegerToArabic(million) + ' مليون';
        }
        return this.convertIntegerToArabic(million) + ' مليون و ' + this.convertIntegerToArabic(remainder);
      }
      
      return 'رقم كبير جداً';
    },
  },
}
</script>

<style scoped>
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

/* Search Input Background Override */
.form-control{
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

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

.create-btn {
  padding: 11px;
}

/* Supplier status styles */
.supplier-status {
  font-size: 13px;
}

.supplier-warning,
.supplier-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.supplier-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.supplier-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Product status styles */
.product-status {
  font-size: 13px;
}

.product-warning,
.product-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.product-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.product-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.btn-outline-warning {
  border-color: #ffc107;
  color: #856404;
  font-size: 12px;
  padding: 4px 8px;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}

.btn-outline-warning:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
