<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="dynamicBreadcrumbs" :current="dynamicBreadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'purchaseReturns.index' }" class="btn btn-info">
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
                <button type="button" class="btn btn-success" @click="savePurchaseReturn" :title="$t('Save')">
                  <i class="fas fa-save" /> {{ $t('Save') }}
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="savePurchaseReturn" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="returnReason">{{ $t('Return Reason') }}
                    <span class="required">*</span></label>
                  <input id="returnReason" v-model="form.returnReason" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('returnReason') }" name="returnReason" :placeholder="$t('Enter a reason')
                      " />
                  <has-error :form="form" field="returnReason" />
                </div>
                <div class="form-group col-md-6">
                  <label for="supplier">{{ $t('Supplier') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.supplier" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier"
                    :placeholder="$t('Select a supplier')" @input="assignPurchases" />
                  <has-error :form="form" field="supplier" />
                </div>
              </div>
              <div v-if="products && !form.purchase" class="row">
                <div class="form-group col-md-12">
                  <label for="product">{{
                    $t('Select Products')
                  }}</label>
                  <v-select :disabled="form.client == ''" multiple v-model="form.product" :options="products"
                    label="label" :class="{ 'is-invalid': form.errors.has('product') }" name="product"
                    :placeholder="$t('Search products')" @input="assignPurchases" />
                  <has-error :form="form" field="product" />
                </div>
              </div>
              <div class="row" v-if="form.supplier && supplierPurchases">
                <div class="form-group col-md-12">
                  <label for="purchase">{{ $t('Purchases') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.purchase" :options="supplierPurchases" label="purchaseNo"
                    :class="{ 'is-invalid': form.errors.has('purchase') }" name="purchase"
                    :placeholder="$t('Select a purchase')" @input="storeProducts" />
                  <has-error :form="form" field="purchase" />
                  <!-- Product Chart of Account Status -->
                  <div class="product-status mt-2" v-if="form.selectedProducts && form.selectedProducts.length > 0">
                    <div v-for="(product, index) in form.selectedProducts" :key="`status-${product.id}`" v-if="!product.purchase_account_id" class="product-warning mb-2">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Product') }} "{{ product.name }}" {{ $t('needs Purchase Account') }}</span>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="autoAssignProductChartOfAccount(product)"
                        :disabled="isAutoAssigningProduct === product.id"
                      >
                        <i :class="isAutoAssigningProduct === product.id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                        {{ isAutoAssigningProduct === product.id ? $t('Assigning...') : $t('Auto-Assign') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div v-if="form.errors.errors && form.errors.errors.selectedProducts" class="w-100 m-auto mb-3">
                  <div v-for="(msg, i) in form.errors.errors.selectedProducts" :key="i" class="callout callout-danger">
                    <p><i class="icon fas fa-ban"></i> {{ msg }}</p>
                  </div>
                </div>
                <ItemsTable
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
                  table-class="purchases-create-table"
                  qty-field-name="returnQty"
                  unit-price-field-name="unitCost"
                  :price-readonly="true"
                  :show-edit-button="false"
                  :custom-total-value="totalTotal"
                  :totals-colspan="4"
                  @item-change="handleItemChange"
                  @discount-change="calculateProductDiscount"
                  @vat-change="calculateProductVat"
                  @remove-item="removeItem"
                />
              </div>
              <div class="row" id="input-fields">
                <div v-if="!isSaudiArabia" class="form-group col-md-3">
                  <label for="totalDiscount">{{ $t('Total Discount') }}</label>
                  <input id="totalDiscount" v-model="formattedTotalDiscount" type="text" class="form-control" name="totalDiscount" readonly />
                </div>
                <div v-if="!isSaudiArabia" class="form-group col-md-3">
                  <label for="transportCost">{{ $t('Transport Cost') }}</label>
                  <input id="transportCost" v-model="formattedTransportCost" type="text" class="form-control" name="transportCost" readonly />
                </div>
                <div v-if="!isSaudiArabia" class="form-group col-md-3">
                  <label for="purchaseTax">{{ $t('Purchase Tax') }}</label>
                  <input id="purchaseTax" v-model="formattedPurchaseTax" type="text" class="form-control" name="purchaseTax" readonly />
                </div>
                <!-- <div v-if="form.returnAmount > 0" class="form-group col-md-3">
                  <label for="returnAmountText">{{ $t('Return Amount') }}</label>
                  <input id="returnAmountText" v-model="form.returnAmountText" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('returnAmountText'), }" name="returnAmountText" readonly />
                  <has-error :form="form" field="returnAmountText" />
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
                  <label for="availableBalance">{{ $t('Available Balance') }}</label>
                  <input id="availableBalance" v-model="formattedAvailableBalance" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('availableBalance'), }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
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
                  <label for="date">{{
                    $t('Return Date')
                  }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6" v-if="!isSaudiArabia">
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

export default {
  middleware: ['auth', 'check-permissions'],
  components: {
    ItemsTable,
  },
  metaInfo() {
    return { title: this.isSaudiArabia ? this.$t('Create Debit Note') : this.$t('Create Purchase Return') }
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
        url: 'purchaseReturns.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    isAutoAssigningProduct: null,
    form: new Form({
      returnReason: '',
      account: '',
      chequeNo: '',
      receiptNo: '',
      supplier: '',
      purchase: '',
      product: '',
      selectedProducts: [],
      totalReturn: 0,
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      purchaseTotal: 0,
      newSubTotal: 0,
      purchaseTax: 0,
      purchaseTransport: 0,
      purchaseDiscount: 0,
      newTax: 0,
      taxRate: 0,
      purchaseDue: 0,
      newDue: 0,
      newDueText: '',
      returnAmount: 0,
      returnAmountText: 0,
      availableBalance: 0,
      totalDiscount: 0,
      transportCost: 0,
      netTotal: 0,
      taxAmount: 0,
      discountTotal: 0,
    }),
    products: '',
    accounts: '',
    supplierPurchases: '',
    taxes: '',
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },
    // Dynamic breadcrumbs current based on country
    dynamicBreadcrumbsCurrent() {
      return this.isSaudiArabia ? this.$t('Create Debit Note') : this.$t('Create Purchase Return');
    },
    // Dynamic breadcrumbs based on country
    dynamicBreadcrumbs() {
      return [
        {
          name: this.$t('Dashboard'),
          url: 'home',
        },
        {
          name: this.isSaudiArabia ? this.$t('Debit notes') : this.$t('Purchase Returns'),
          url: 'purchaseReturns.index',
        },
        {
          name: this.$t('Create'),
          url: '',
        },
      ];
    },
    // Totals (same as invoice return)
    totalUnitPrice() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0
      const total = this.form.selectedProducts.reduce((total, product) => total + (Number(product.totalBeforeDiscount) || 0), 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },
    totalTotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0
      const total = this.form.selectedProducts.reduce((total, product) => total + (Number(product.totalBeforeDiscount) || 0), 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },
    totalProductDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0
      const total = this.form.selectedProducts.reduce((total, product) => total + (Number(product.discountAmount) || 0), 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },
    totalAfterDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0
      const total = this.form.selectedProducts.reduce((total, product) => total + (Number(product.totalAfterDiscount) || 0), 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },
    // Total VAT (sum of line VAT amounts, same logic as purchase create)
    totalProductTax() {
      if (
        !this.form.selectedProducts ||
        !Array.isArray(this.form.selectedProducts) ||
        this.form.selectedProducts.length === 0
      ) {
        return 0
      }
      const total = this.form.selectedProducts.reduce(
        (sum, product) => sum + (Number(product.totalTax) || 0),
        0
      )
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },
    subtotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0
      const total = this.form.selectedProducts.reduce((total, product) => total + (Number(product.totalPrice) || 0), 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },
    formattedTotalDiscount() {
      return this.formatToTwoDecimals(this.form.totalDiscount || 0)
    },
    formattedTransportCost() {
      return this.formatToTwoDecimals(this.form.purchaseTransport || 0)
    },
    formattedPurchaseTax() {
      return this.formatToTwoDecimals(this.form.newTax || 0)
    },
    formattedAvailableBalance() {
      return this.formatToTwoDecimals(this.form.availableBalance || 0)
    },
  },
  created() {
    this.getSuppliers()
    this.getProducts()
    this.getAccounts()
    this.getTaxes()
    this.prefix = this.appInfo.productPrefix
    // default status by country
    this.form.status = this.isSaudiArabia ? 0 : 1
  },
  methods: {
    formatAmount(value) {
      const num = Number(value) || 0;
      const locale = (this.$i18n && this.$i18n.locale) ? this.$i18n.locale : 'en';
      return num.toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    // get all suppliers
    async getSuppliers() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-suppliers',
      })
    },

    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-products'
      )
      this.products = data.data
    },

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = data.data
    },

    // get taxes
    async getTaxes() {
      try {
        const { data } = await axios.get(window.location.origin + '/api/all-vat-rates')
        this.taxes = data.data
      } catch (e) {
        this.taxes = []
      }
    },

    // assign purchases
    async assignPurchases() {
      this.form.selectedProducts = []
      this.form.purchase = ''
      if (this.form.supplier) {
        axios
          .post(window.location.origin + '/api/supplier/filter-purchases', {
            products: this.form.product,
            supplierSlug: this.form.supplier.slug,
          })
          .then((response) => {
            this.supplierPurchases = response.data.data
          })
      } else {
        this.form.product = ''
        this.form.supplier = ''
      }
    },

    // store item in array
    async storeProducts() {
      this.form.selectedProducts = []
      this.form.purchaseTotal = this.form.purchase.purchaseTotal
      this.form.purchaseDue = this.form.purchase.due
      this.form.purchaseTax = this.form.purchase.tax
      this.form.newTax = this.form.purchase.tax
      this.form.taxRate = this.form.purchase.taxRate
      this.form.purchaseTransport = this.form.purchase.transport
      this.form.purchaseDiscount = this.form.purchase.totalDiscount
      this.form.newDue = this.form.purchase.due
      this.form.newDueText = this.form.purchase.due
      
      // Check if we're coming from purchase actions (pre-selected purchase)
      const isPreSelected = this.$route.query.purchase
      
      for (var key in this.form.purchase.purchaseProducts) {
        let purchaseItem = this.form.purchase.purchaseProducts[key]
        
        // Fetch fresh product data to get purchase_account_id
        let productData = null
        try {
          const response = await axios.get(`/api/products/${purchaseItem.productSlug}`)
          productData = response.data.data
          console.log('Product data for', purchaseItem.productName, ':', productData?.purchase_account_id)
        } catch (error) {
          console.warn('Could not fetch product data for:', purchaseItem.productSlug)
        }
        const availableQty = Number(purchaseItem.quantity) - Number(purchaseItem.returnQty)
        const presetReturnQty = availableQty // Default to remaining quantity (like sales returns)
        const maxQty = availableQty
        // Try to find matching VAT rate, fallback to 15% VAT rate, then first available
        let selectedVatRate = this.findMatchingVatRate(purchaseItem.productTax)
        if (!selectedVatRate) {
          // Try to find 15% VAT rate as default
          selectedVatRate = this.taxes?.find(tax => Math.abs(tax.rate - 15) < 0.01)
          // If 15% not found, use first available
          if (!selectedVatRate) {
            selectedVatRate = this.taxes?.[0]
          }
        }
        // Use purchasePrice (base price without VAT) instead of unitCost (which includes VAT)
        const totalBeforeDiscount = Number((presetReturnQty * purchaseItem.purchasePrice).toFixed(2))
        let discountAmount = 0
        if ((purchaseItem.discountType || 'fixed') === 'percentage') {
          discountAmount = Number(((totalBeforeDiscount) * (purchaseItem.productDiscount || 0) / 100).toFixed(2))
        } else {
          discountAmount = Number((purchaseItem.productDiscount || 0).toFixed ? (purchaseItem.productDiscount || 0).toFixed(2) : Number(purchaseItem.productDiscount || 0))
        }
        let totalAfterDiscount = Number((totalBeforeDiscount - discountAmount).toFixed(2))
        let productTax = 0
        let totalTax = 0
        let totalPrice = totalAfterDiscount
        if (selectedVatRate && selectedVatRate.rate) {
          productTax = Number((totalAfterDiscount * (selectedVatRate.rate / 100)).toFixed(2))
          totalTax = productTax
          totalPrice = Number((totalAfterDiscount + productTax).toFixed(2))
        }
        
        const finalPurchaseAccountId = purchaseItem.purchase_account_id || purchaseItem.product?.purchase_account_id || productData?.purchase_account_id
        console.log('Final purchase_account_id for', purchaseItem.productName, ':', finalPurchaseAccountId)
        
        this.form.selectedProducts.unshift({
          id: purchaseItem.productID,
          slug: purchaseItem.productSlug,
          name: purchaseItem.productName,
          code: purchaseItem.productCode,
          unit: purchaseItem.productUnit,
          oldQty: purchaseItem.quantity, // Original quantity from purchase
          qty: purchaseItem.quantity, // Original quantity from purchase
          returnQty: availableQty, // Default to remaining quantity (like sales returns)
          totalReturnQty: availableQty, // Total quantity that can be returned
          maxQty: maxQty, // Maximum quantity that can be returned
          purchasePrice: purchaseItem.purchasePrice,
          unitCost: purchaseItem.purchasePrice,
          totalPrice: totalPrice,
          returnTotal: totalPrice,
          productTax: productTax,
          totalTax: productTax,
          productDiscount: purchaseItem.productDiscount || 0,
          discountType: purchaseItem.discountType || 'fixed',
          discountAmount: discountAmount,
          discount: purchaseItem.productDiscount || 0,
          vatRate: purchaseItem.vatRate,
          selectedVatRate: selectedVatRate,
          totalBeforeDiscount: totalBeforeDiscount,
          totalAfterDiscount: totalAfterDiscount,
          purchase_account_id: finalPurchaseAccountId,
        })
      }
      this.calculateSum()
      return
    },

    // Handle item change from ItemsTable component (clone of purchase create logic, adapted for returnQty)
    handleItemChange({ value, type, index, action }) {
      const item = this.form.selectedProducts[index]
      if (!item) return

      if (type === 'qty') {
        let qty = Number(item.returnQty || 0)

        if (action === 'increment') {
          qty = qty + 1
        } else if (action === 'decrement') {
          qty = qty - 1
        } else {
          qty = Number(value)
        }

        // Clamp between 0 and maxQty
        if (qty < 0) qty = 0
        if (item.maxQty != null && qty > item.maxQty) qty = item.maxQty

        item.returnQty = qty
        this.$set(this.form.selectedProducts, index, item)

        // Recalculate line totals and overall sums
        this.recalculateReturnItem(index)
        this.calculateSum()
      } else if (type === 'price') {
        // Price is readonly for returns, but keep it in sync if needed
        item.unitCost = Number(value)
        this.$set(this.form.selectedProducts, index, item)
        this.recalculateReturnItem(index)
        this.calculateSum()
      }
    },

    // Recalculate a single return line using the same logic as purchase create
    recalculateReturnItem(index) {
      const item = this.form.selectedProducts[index]
      if (!item) return

      const qty = Number(item.returnQty || 0)
      const unitPrice = Number(item.purchasePrice || item.unitCost || 0)

      // 1. Total before discount
      const total = Number((unitPrice * qty).toFixed(2))
      this.$set(item, 'totalBeforeDiscount', total)

      // 2. Discount amount and total after discount
      let discountAmount = 0
      if (item.discountType === 'percentage') {
        discountAmount = Number((total * (item.discount || 0) / 100).toFixed(2))
      } else {
        discountAmount = Number(item.discountAmount || item.discount || 0)
      }
      this.$set(item, 'discountAmount', discountAmount)

      const totalAfterDiscount = Number((total - discountAmount).toFixed(2))
      this.$set(item, 'totalAfterDiscount', totalAfterDiscount)

      // 3. VAT rate
      let vatRate = 0
      if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
        vatRate = Number(item.selectedVatRate.rate)
      } else if (item.vatRate !== undefined && item.vatRate !== null) {
        vatRate = Number(item.vatRate)
      }
      if (isNaN(vatRate) || vatRate < 0) vatRate = 0

      // 4. VAT amount (for entire returned quantity) and per-unit VAT
      const totalTax = Number((totalAfterDiscount * vatRate / 100).toFixed(2))
      const productTax = qty > 0 ? Number((totalTax / qty).toFixed(2)) : 0
      this.$set(item, 'totalTax', totalTax)
      this.$set(item, 'productTax', productTax)

      // 5. Total with VAT and unit cost
      const totalPrice = Number((totalAfterDiscount + totalTax).toFixed(2))
      this.$set(item, 'totalPrice', totalPrice)
      const unitCost = Number((unitPrice + productTax).toFixed(2))
      this.$set(item, 'unitCost', unitCost)

      this.$set(this.form.selectedProducts, index, item)
    },

    // Discount and VAT per product (delegating to recalculateReturnItem, same as purchase create)
    calculateProductDiscount(index) {
      this.recalculateReturnItem(index)
      this.calculateSum()
    },

    calculateProductVat(index) {
      this.recalculateReturnItem(index)
      this.calculateSum()
    },

    // helpers
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null
      
      // If productTax is an object with id and rate properties
      if (typeof productTax === 'object' && productTax !== null) {
        // Try to find by ID first (most reliable)
        if (productTax.id) {
          const matchById = this.taxes.find(tax => tax.id === productTax.id)
          if (matchById) return matchById
        }
        
        // Try to find by rate
        if (productTax.rate !== undefined) {
          const matchByRate = this.taxes.find(tax => Math.abs(tax.rate - productTax.rate) < 0.01)
          if (matchByRate) return matchByRate
        }
      }
      
      // If productTax is a number (rate value)
      if (typeof productTax === 'number') {
        return this.taxes.find(tax => Math.abs(tax.rate - productTax) < 0.01)
      }
      
      return null
    },

    formatToTwoDecimals(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00'
      const numValue = Number(value)
      if (isNaN(numValue)) return '0.00'
      return numValue.toFixed(2)
    },

    toWord() { return this.$t('Total') },

    removeItem(item, index) {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts)) return
      // ItemsTable passes item, but we need index - find it if not provided
      const itemIndex = index !== undefined ? index : this.form.selectedProducts.findIndex(p => p.id === item.id)
      if (itemIndex > -1) {
        this.form.selectedProducts.splice(itemIndex, 1)
        this.calculateSum()
      }
    },

    // update available balance
    updateBalance() {
      this.form.availableBalance = 0
      if (this.form.account) this.form.availableBalance = this.form.account.availableBalance
      if (this.form.account && this.form.returnAmount > 0) this.validateBankAccountChartOfAccount()
    },

    validateBankAccountChartOfAccount() {
      if (this.form.account && !this.form.account.chartOfAccountId) {
        toast.fire({
          type: 'warning',
          title: this.$t('Bank Account Chart of Account Required'),
          text: this.$t('The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account.'),
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t('Go to Bank Accounts'),
          showCancelButton: true,
          cancelButtonText: this.$t('Close'),
        }).then((result) => { if (result.isConfirmed) this.goToBankAccounts() })
      }
    },

    goToBankAccounts() { this.$router.push({ name: 'accounts.index' }) },

    // Auto-assign Chart of Account for a specific product
    async autoAssignProductChartOfAccount(product) {
      if (!product || this.isAutoAssigningProduct === product.id) {
        return;
      }
      
      this.isAutoAssigningProduct = product.id;
      
      try {
        const response = await this.$http.post(`/api/products/${product.slug}/auto-assign-chart-of-account`);
        
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
        console.error('Error auto-assigning chart of account:', error);
        toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningProduct = false;
      }
    },

    // calculate sum
    calculateSum() {
      const length = this.form.selectedProducts.length
      this.form.newSubTotal = this.form.totalReturn = 0
      let totalProductDiscount = 0
      let purchaseSubtotal = 0
      this.form.netTotal = 0
      this.form.taxAmount = 0
      this.form.discountTotal = 0
      
      for (let i = 0; i < length; i++) {
        const p = this.form.selectedProducts[i]
        const remainingQty = p.qty - p.returnQty
        // Use purchasePrice (base price without VAT) for calculations
        const productTotal = remainingQty * p.purchasePrice
        purchaseSubtotal += productTotal
        this.form.newSubTotal += Number(productTotal.toFixed(2))
        
        if (p.returnQty > 0) {
          const originalLineTotal = parseFloat(p.totalPrice) || 0
          const totalQty = parseFloat(p.qty) || 1
          const returnQty = parseFloat(p.returnQty) || 0
          const unitPrice = originalLineTotal / totalQty
          const returnTotal = Number((unitPrice * returnQty).toFixed(2))
          p.returnTotal = returnTotal
          this.form.totalReturn += returnTotal
          const originalDiscount = parseFloat(p.discountAmount) || 0
          const originalTax = parseFloat(p.totalTax) || 0
          const proportionalDiscount = Number(((originalDiscount / totalQty) * returnQty).toFixed(2))
          const proportionalTax = Number(((originalTax / totalQty) * returnQty).toFixed(2))
          const proportionalNet = Number((returnTotal - proportionalDiscount).toFixed(2))
          this.form.netTotal += proportionalNet
          this.form.taxAmount += proportionalTax
          this.form.discountTotal += proportionalDiscount
        }
        
        if (p.productDiscount && p.productDiscount > 0) {
          if (p.discountType === 'percentage') {
            let discountAmount = (productTotal * p.productDiscount) / 100
            totalProductDiscount += Number(discountAmount.toFixed(2))
          } else {
            let discountPerUnit = p.productDiscount / p.qty
            let discountAmount = discountPerUnit * remainingQty
            totalProductDiscount += Number(discountAmount.toFixed(2))
          }
        }
      }
      
      // purchase-level discount
      let purchaseDiscountAmount = Number(this.form.purchaseDiscount || 0)
      this.form.newSubTotal = Number((purchaseSubtotal - totalProductDiscount - purchaseDiscountAmount).toFixed(2))
      this.form.purchaseDiscount = purchaseDiscountAmount
      
      const taxableAmount = this.form.newSubTotal
      if (this.form.taxRate && this.form.taxRate.rate) {
        this.form.newTax = Number(((this.form.taxRate.rate / 100) * taxableAmount).toFixed(2))
      } else {
        this.form.newTax = 0
      }
      
      this.form.purchaseTotal = Number((this.form.newSubTotal + this.form.newTax + this.form.purchaseTransport - this.form.purchaseDiscount).toFixed(2))
      this.form.purchaseDue = Number((this.form.purchaseTotal - (this.form.purchase?.totalPaid || 0)).toFixed(2))
      
      if (this.form.purchaseDue >= 0) {
        this.form.newDue = this.form.purchaseTotal - (this.form.purchase?.totalPaid || 0)
        this.form.newDueText = `${this.form.purchaseTotal} - ${this.form.purchase?.totalPaid || 0} = ${Number(this.form.newDue).toFixed(2)}`
        this.form.returnAmount = 0
      } else {
        this.form.returnAmount = Number(((this.form.purchase?.totalPaid || 0) - this.form.purchaseTotal).toFixed(2))
        this.form.returnAmountText = `${this.form.purchase?.totalPaid || 0} - ${this.form.purchaseTotal} = ${this.form.returnAmount}`
        this.form.purchaseDue = 0
        this.form.newDue = 0
      }
    },

    // save return
    async savePurchaseReturn() {
      await this.form
        .post(window.location.origin + '/api/purchase-returns')
        .then(({ data }) => {
          toast.fire({
            type: 'success',
            title: this.isSaudiArabia ? this.$t('Debit note added successfully') : this.$t('Purchase return added successfully'),
          })
          // Show journal entry creation confirmation toast
          setTimeout(() => {
            toast.fire({
              type: 'success',
              title: this.$t('Journal Entry Created Successfully'),
            })
          }, 500)
          this.clearTemporaryData()
          this.$router.push({ name: 'purchaseReturns.show', params: { slug: data.data.slug }, })
        })
        .catch((error) => {
          // Extract error message from response
          let errorMessage = null
          
          if (error?.response?.data) {
            const errorData = error.response.data
            
            // Check for message field
            if (errorData.message && typeof errorData.message === 'string') {
              errorMessage = errorData.message
            } else if (errorData.error && typeof errorData.error === 'string') {
              errorMessage = errorData.error
            } else if (errorData.errors && typeof errorData.errors === 'object') {
              // If there are validation errors, try to get the first one
              const firstErrorKey = Object.keys(errorData.errors)[0]
              if (firstErrorKey && Array.isArray(errorData.errors[firstErrorKey])) {
                const firstError = errorData.errors[firstErrorKey][0]
                if (typeof firstError === 'string') {
                  errorMessage = firstError
                }
              } else if (firstErrorKey && typeof errorData.errors[firstErrorKey] === 'string') {
                errorMessage = errorData.errors[firstErrorKey]
              }
            }
          }
          
          // Translate and show error
          if (errorMessage) {
            // Try to translate the message if it exists as a translation key
            const translatedMessage = this.$t(errorMessage)
            // Use translated version if available, otherwise use original (might already be localized)
            toast.fire({ 
              type: 'error', 
              title: translatedMessage !== errorMessage ? translatedMessage : errorMessage 
            })
          } else {
            toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
          }
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        returnReason: this.form.returnReason,
        supplier: this.form.supplier,
        selectedPurchases: this.form.selectedPurchases,
        returnAmount: this.form.returnAmount,
        returnDate: this.form.returnDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('purchaseReturnTempData', JSON.stringify(tempData))
       
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('purchaseReturnTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.returnReason = data.returnReason || this.form.returnReason
          this.form.supplier = data.supplier || this.form.supplier
          this.form.selectedPurchases = data.selectedPurchases || this.form.selectedPurchases
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
      localStorage.removeItem('purchaseReturnTempData')
    },

    // handle pre-selection from query parameters
    async handlePreSelection() {
      let supplierSlug = this.$route.query.supplier
      const purchaseSlug = this.$route.query.purchase
      let purchaseData = null
      
      if (purchaseSlug) {
        try {
          // If we have a purchase slug but no supplier slug, fetch the purchase details
          if (!supplierSlug) {
            const response = await axios.get(`/api/purchases/${purchaseSlug}`)
            purchaseData = response.data.data
            
            if (purchaseData && purchaseData.supplier) {
              supplierSlug = purchaseData.supplier.slug
            }
          }
          
          if (supplierSlug) {
            // Try multiple times with increasing delays
            let attempts = 0
            const maxAttempts = 10
            
            while (attempts < maxAttempts) {
              if (this.items && this.items.length > 0) {
                const selectedSupplier = this.items.find(supplier => supplier.slug === supplierSlug)
                
                // If not found by slug, try to find by ID or name as fallback
                if (!selectedSupplier && purchaseData && purchaseData.supplier) {
                  const fallbackSupplier = this.items.find(supplier => 
                    supplier.id === purchaseData.supplier.id || 
                    supplier.name === purchaseData.supplier.name
                  )
                  if (fallbackSupplier) {
                    this.form.supplier = fallbackSupplier
                    
                    // Trigger purchase loading for this supplier
                    await this.assignPurchases()
                    
                    // Wait for purchases to be loaded, then select the purchase
                    await this.$nextTick()
                    await new Promise(resolve => setTimeout(resolve, 500))
                    
                    if (this.supplierPurchases && this.supplierPurchases.length > 0) {
                      const selectedPurchase = this.supplierPurchases.find(purchase => purchase.slug === purchaseSlug)
                      
                      if (selectedPurchase) {
                        this.form.purchase = selectedPurchase
                        // Trigger product loading for this purchase
                        await this.storeProducts()
                        return // Success, exit the loop
                      } else {
                        // Try multiple fallback methods
                        let fallbackPurchase = null
                        
                        // Method 1: Try by ID
                        if (purchaseData && purchaseData.id) {
                          fallbackPurchase = this.supplierPurchases.find(purchase => purchase.id === purchaseData.id)
                        }
                        
                        // Method 2: Try by purchase number
                        if (!fallbackPurchase && purchaseData && purchaseData.purchaseNo) {
                          fallbackPurchase = this.supplierPurchases.find(purchase => purchase.purchaseNo === purchaseData.purchaseNo)
                        }
                        
                        // Method 3: Try by slug with different casing
                        if (!fallbackPurchase) {
                          fallbackPurchase = this.supplierPurchases.find(purchase => 
                            purchase.slug && purchase.slug.toLowerCase() === purchaseSlug.toLowerCase()
                          )
                        }
                        
                        if (fallbackPurchase) {
                          this.form.purchase = fallbackPurchase
                          await this.storeProducts()
                          return // Success, exit the loop
                        } else {
                          // If we have purchase data from API but it's not in supplier's list, use it directly
                          if (purchaseData && purchaseData.slug === purchaseSlug) {
                            this.form.purchase = purchaseData
                            await this.storeProducts()
                            return // Success, exit the loop
                          }
                        }
                      }
                    }
                    // Continue trying instead of returning early
                  }
                }
                
                if (selectedSupplier) {
                  this.form.supplier = selectedSupplier
                  
                  // Trigger purchase loading for this supplier
                  await this.assignPurchases()
                  
                  // Wait for purchases to be loaded, then select the purchase
                  await this.$nextTick()
                  await new Promise(resolve => setTimeout(resolve, 500))
                  
                  if (this.supplierPurchases && this.supplierPurchases.length > 0) {
                    const selectedPurchase = this.supplierPurchases.find(purchase => purchase.slug === purchaseSlug)
                    
                    if (selectedPurchase) {
                      this.form.purchase = selectedPurchase
                      // Trigger product loading for this purchase
                      await this.storeProducts()
                      return // Success, exit the loop
                    } else {
                      // Try multiple fallback methods
                      let fallbackPurchase = null
                      
                      // Method 1: Try by ID
                      if (purchaseData && purchaseData.id) {
                        fallbackPurchase = this.supplierPurchases.find(purchase => purchase.id === purchaseData.id)
                      }
                      
                      // Method 2: Try by purchase number
                      if (!fallbackPurchase && purchaseData && purchaseData.purchaseNo) {
                        fallbackPurchase = this.supplierPurchases.find(purchase => purchase.purchaseNo === purchaseData.purchaseNo)
                      }
                      
                      // Method 3: Try by slug with different casing
                      if (!fallbackPurchase) {
                        fallbackPurchase = this.supplierPurchases.find(purchase => 
                          purchase.slug && purchase.slug.toLowerCase() === purchaseSlug.toLowerCase()
                        )
                      }
                      
                      if (fallbackPurchase) {
                        this.form.purchase = fallbackPurchase
                        await this.storeProducts()
                        return // Success, exit the loop
                      } else {
                        // If we have purchase data from API but it's not in supplier's list, use it directly
                        if (purchaseData && purchaseData.slug === purchaseSlug) {
                          this.form.purchase = purchaseData
                          await this.storeProducts()
                          return // Success, exit the loop
                        }
                      }
                    }
                  }
                  // Continue trying instead of returning early
                }
              }
              attempts++
              if (attempts < maxAttempts) {
                await new Promise(resolve => setTimeout(resolve, 200))
              }
            }
          }
        } catch (error) {
          console.error('Error fetching purchase details:', error)
        }
      }
    },
  },
  mounted() {
    this.loadTemporaryData()
    // Handle pre-selection from query parameters after component is mounted
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

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}



.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Form Control Styling */
.form-control {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Form Group Labels */
.form-group label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
}

.required {
  color: #DC3545;
  font-weight: bold;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
  margin-right: 10px;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* V-Select Styling */
.v-select {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  padding: 10px 16px;
}

.v-select .vs__search::placeholder {
  color: #6c757d;
}

.v-select .vs__selected {
  color: #374151;
}

.v-select .vs__dropdown-menu {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Table Styling */
.table-custom { border: none !important; }
.purchases-create-table { border-collapse: separate; border-spacing: 0; }
.purchases-create-table thead th { background-color: #33a0d9; color: #ffffff; padding: 8px; border: none !important; border-color: inherit !important; font-weight: 400; }
.purchases-create-table thead tr { border: none !important; }
.purchases-create-table thead th:first-child { border-top-left-radius: 10px; }
.purchases-create-table thead th:last-child { border-top-right-radius: 10px; }
[dir="rtl"] .purchases-create-table thead th:first-child { border-top-left-radius: 0; border-top-right-radius: 10px; }
[dir="rtl"] .purchases-create-table thead th:last-child { border-top-right-radius: 0; border-top-left-radius: 10px; }
.purchases-create-table .badge.badge-info { background: #E3F2FD !important; color: #1976D2 !important; font-size: 12px !important; font-weight: 500 !important; padding: 10px 16px; }

/* Custom Quantity Input Styling */
.custom-qty-input {
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.custom-qty-input .button-minus,
.custom-qty-input .button-plus {
  background: #6C757D;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.custom-qty-input .button-minus:hover {
  background: #DC3545;
}

.custom-qty-input .button-plus:hover {
  background: #2AB930;
}

.custom-qty-input .quantity-field {
  border: none;
  background: transparent;
  text-align: center;
  width: 60px;
  padding: 8px 4px;
  font-weight: 500;
}

.custom-qty-input .quantity-field:focus {
  outline: none;
  box-shadow: none;
}

.quantity-field { border-radius: 0 !important; min-height: 50px !important; margin: 0 !important; }
.account-status { font-size: 0.875rem; }
.account-status .account-warning { color: #856404; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 0.25rem; padding: 0.5rem; display: flex; align-items: center; }
.account-status .account-success { color: #155724; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 0.25rem; padding: 0.5rem; display: flex; align-items: center; }

/* Product Status Styles */
.product-status {
  font-size: 13px;
}

.product-warning {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.btn-outline-warning {
  border-color: #ffc107;
  color: #856404;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
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

/* Callout Styling */
.callout {
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border-left: 4px solid;
}

.callout-danger {
  background-color: #f8d7da;
  border-left-color: #dc3545;
  color: #721c24;
}

.callout i {
  margin-right: 8px;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Form Text Styling */
.form-text {
  color: #6B7280;
  font-size: 0.875rem;
}

.text-muted {
  color: #6B7280 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .table-custom {
    font-size: 12px;
  }
  
  .table-custom thead th,
  .table-custom tbody td {
    padding: 8px 4px;
  }
}
</style>
