<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'purchaseReturns.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="updatePurchaseReturn" :title="$t('Save Changes')">
                  <i class="fas fa-save" /> {{ $t('Save Changes') }}
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updatePurchaseReturn" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="purchaseNo">{{
                    $t('Purchase No')
                  }}</label>
                  <input id="purchaseNo" v-model="form.purchaseNo" type="text" class="form-control" name="purchaseNo"
                    readonly />
                </div>
                <div class="form-group col-md-6">
                  <label for="purchaseReturnNo">{{
                    $t('Purchase Return No')
                  }}</label>
                  <input id="purchaseReturnNo" v-model="form.purchaseReturnNo" type="text" class="form-control"
                    name="purchaseReturnNo" readonly />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="returnReason">{{
                    $t('Return Reason')
                  }}</label>
                  <input id="returnReason" v-model="form.returnReason" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('returnReason') }" name="returnReason"
                    placeholder="Enter a reason" />
                  <has-error :form="form" field="returnReason" />
                </div>
                <div v-if="form.supplier" class="form-group col-md-6">
                  <label for="supplier">{{ $t('Supplier') }}
                    <span class="required">*</span></label>
                  <input v-model="form.supplier" type="text" class="form-control" name="supplier" readonly />
                </div>
              </div>
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
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div v-if="form.errors.errors && form.errors.errors.selectedProducts" class="w-100 m-auto">
                  <div v-for="(msg, i) in form.errors.errors.selectedProducts" :key="i" class="callout callout-danger">
                    <p><i class="icon fas fa-ban"></i> {{ msg }}</p>
                  </div>
                </div>
                <div class="table-responsive table-custom w-100 m-auto" style="max-width: 100%;">
                  <table class="table table-hover table-sm text-center purchases-create-table">
                    <thead>
                      <th>{{ $t('#') }}</th>
                      <th>{{ $t('Code') }}</th>
                      <th>{{ $t('Item Name') }}</th>
                      <th>{{ $t('Qty') }}</th>
                      <th>{{ $t('Price') }}</th>
                      <th>{{ $t('Total') }}</th>
                      <th>{{ $t('Discount') }}</th>
                      <th>{{ $t('Total After Discount') }}</th>
                      <th>{{ $t('VAT Type') }}</th>
                      <th>{{ $t('VAT') }}</th>
                      <th>{{ $t('Total with VAT') }}</th>
                      <th class="text-right">{{ $t('Action') }}</th>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in form.selectedProducts" :key="`item-${index}`">
                        <td style="min-width: 30px;">{{ index + 1 }}</td>
                        <td style="min-width: 60px;">{{ item.code | withPrefix(prefix) }}</td>
                        <td style="min-width: 120px;">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                              <router-link v-if="$can('product-view')" :to="{ name: 'products.show', params: { slug: item.slug } }">{{ item.name }}</router-link>
                              <span v-else>{{ item.name }}</span>
                            </div>
                          </div>
                        </td>
                        <td style="min-width: 120px;">
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger" data-field="quantity" @click="updateItem(Math.max(0, item.returnQty - 1), index)" />
                            <input type="number" step="any" :id="`returnQty-${index+1}`" v-model.number="item.returnQty" name="quantity" class="quantity-field border-0 incrementor" min="0" :max="item.maxQty" @input="updateItemReactively(item)" placeholder="Return Qty" />
                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary" data-field="quantity" @click="updateItem(Math.min(item.maxQty, Number(item.returnQty) + 1), index)" />
                          </div>
                        </td>
                        <td style="min-width: 100px;">{{ formatToTwoDecimals(item.unitCost) }}</td>
                        <td style="min-width: 80px;">{{ formatToTwoDecimals(item.totalBeforeDiscount) }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 120px;">
                          <div class="input-group">
                            <select v-model="item.discountType" class="form-control form-control-sm" style="width: 85px;" @change="calculateProductDiscount(index)">
                              <option value="fixed">{{ $t('Fixed') }}</option>
                              <option value="percentage">{{ $t('%') }}</option>
                            </select>
                            <input type="number" v-model="item.discount" class="form-control form-control-sm" style="width: 80px;" step="any" min="0" :max="item.discountType == 'percentage' ? 100 : (item.unitCost * item.qty)" placeholder="0" @change="calculateProductDiscount(index)" @keyup="calculateProductDiscount(index)" />
                          </div>
                        </td>
                        <td style="min-width: 80px;">{{ formatToTwoDecimals(item.totalAfterDiscount) }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 100px;">
                          <div class="d-flex align-items-center">
                            <select v-model="item.selectedVatRate" class="form-control form-control-sm flex-grow-1" @change="calculateProductVat(index)" style="min-width: 80px;">
                              <option value="">{{ $t('Select VAT') }}</option>
                              <option v-for="tax in taxes" :key="tax.id" :value="tax">{{ tax.code }} ({{ tax.rate }}%)</option>
                            </select>
                          </div>
                        </td>
                        <td style="min-width: 60px;"><span class="form-control-plaintext form-control-sm text-center">{{ formatToTwoDecimals(item.productTax) }} <span class="saudi-riyal">ê</span></span></td>
                        <td style="min-width: 80px;">{{ formatToTwoDecimals(item.totalPrice) }} <span class="saudi-riyal">ê</span></td>
                        <td class="text-right" style="min-width: 50px;">
                          <button type="button" class="btn btn-danger" @click="removeItem(item, index)"><i class="fas fa-times"></i></button>
                        </td>
                      </tr>
                      <tr :key="`totals`">
                        <td colspan="4" class="text-right"><strong> {{ $t('Total') }} : {{ toWord() }} </strong></td>
                        <td><strong>{{ formatToTwoDecimals(totalUnitPrice) }} <span class="saudi-riyal">ê</span></strong></td>
                        <td><strong>{{ formatToTwoDecimals(totalTotal) }} <span class="saudi-riyal">ê</span></strong></td>
                        <td><strong>{{ formatToTwoDecimals(totalProductDiscount) }} <span class="saudi-riyal">ê</span></strong></td>
                        <td><strong>{{ formatToTwoDecimals(totalAfterDiscount) }} <span class="saudi-riyal">ê</span></strong></td>
                        <td><strong></strong></td>
                        <td><strong>{{ formatToTwoDecimals(totalProductTax) }} <span class="saudi-riyal">ê</span></strong></td>
                        <td><strong>{{ formatToTwoDecimals(subtotal) }} <span class="saudi-riyal">ê</span></strong></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Purchase Return') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Purchase Return',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Purchase Returns',
        url: 'purchaseReturns.index',
      },
      {
        name: 'Edit',
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
      purchaseNo: '',
      purchase: '',
      product: '',
      selectedProducts: [],
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      purchaseTotal: '',
      totalReturn: 0,
      newTotal: 0,
      newReturn: 0,
      taxRate: 0,
      newSubTotal: 0,
      purchaseTax: 0,
      purchaseTransport: 100,
      purchaseDiscount: 0,
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
    accounts: '',
    prefix: '',
    purchasePrefix: '',
    purchaseReturnPrefix: '',
    taxes: '',
  }),
  computed: {
    ...mapGetters('operations', ['appInfo']),
    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
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
    totalProductTax() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) return 0
      const total = this.form.selectedProducts.reduce((total, product) => total + (Number(product.productTax) || 0), 0)
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
    this.prefix = this.appInfo.productPrefix
    this.purchasePrefix = this.appInfo.purchasePrefix
    this.purchaseReturnPrefix = this.appInfo.purchaseReturnPrefix
    this.getPurchaseReturn()
    this.getAccounts()
    this.getTaxes()
    // default status by country
    this.form.status = this.isSaudiArabia ? 0 : 1
  },
  methods: {
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

    // get the purchase return
    async getPurchaseReturn() {
      const { data } = await axios.get(
        window.location.origin +
        '/api/purchase-returns/' +
        this.$route.params.slug
      )
      this.form.returnReason = data.data.reason
      this.form.account = data.data.account
      this.form.chequeNo = data.data.accountReceivable
        ? data.data.accountReceivable.cheque_no
        : ''
      this.form.receiptNo = data.data.accountReceivable
        ? data.data.accountReceivable.receipt_no
        : ''
      this.form.supplier = data.data.supplier.name
      this.form.purchaseNo = this.$options.filters.withPrefix(
        data.data.purchase.code,
        this.purchasePrefix
      )
      this.form.purchaseReturnNo = this.$options.filters.withPrefix(
        data.data.returnNo,
        this.purchaseReturnPrefix
      )
      this.form.purchase = data.data.purchase
      this.form.date = data.data.returnDate
      this.form.note = data.data.note
      this.form.status = data.data.status
      this.form.newTotal = data.data.purchase.purchaseTotal
      this.form.totalReturn = data.data.totalReturn
      this.form.oldReturn = data.data.totalReturn
      this.form.taxRate = data.data.purchase.taxRate
      this.form.purchaseTax = data.data.purchase.tax
      this.form.newTax = data.data.purchase.tax
      this.form.purchaseTotal = data.data.purchase.purchaseTotal
      this.form.purchaseTransport = data.data.purchase.transport
      this.form.purchaseDiscount = data.data.purchase.totalDiscount
      this.form.purchaseDue =
        data.data.purchase.due > 0 ? data.data.purchase.due : 0
      this.form.suppllierAdvance = data.data.creditAmount
      this.form.supplierAdvanceText = data.data.creditAmount
      this.form.newDueText =
        data.data.purchase.due > 0 ? data.data.purchase.due : 0
      this.form.selectedProducts = await this.assignProducts(data.data.returnProducts)
    },

    // get order products
    async assignProducts(products) {
      this.form.selectedProducts = []
      for (var key in products) {
        let purchaseReturnItem = products[key]
        let purchaseReturnProduct = products[key].product
        
        // Fetch fresh product data to get purchase_account_id
        let productData = null
        try {
          const response = await axios.get(`/api/products/${purchaseReturnProduct.slug}`)
          productData = response.data.data
          console.log('Product data for', purchaseReturnProduct.name, ':', productData?.purchase_account_id)
        } catch (error) {
          console.warn('Could not fetch product data for:', purchaseReturnProduct.slug)
        }
        const selectedVatRate = this.findMatchingVatRate(purchaseReturnItem.productTax) || this.taxes?.[0]
        const totalBeforeDiscount = Number((purchaseReturnItem.returnQty * purchaseReturnItem.purchasePrice).toFixed(2))
        let discountAmount = 0
        if ((purchaseReturnItem.discountType || 'fixed') === 'percentage') {
          discountAmount = Number(((totalBeforeDiscount) * (purchaseReturnItem.productDiscount || 0) / 100).toFixed(2))
        } else {
          discountAmount = Number((purchaseReturnItem.productDiscount || 0).toFixed ? (purchaseReturnItem.productDiscount || 0).toFixed(2) : Number(purchaseReturnItem.productDiscount || 0))
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
        
        const finalPurchaseAccountId = purchaseReturnItem.purchase_account_id || purchaseReturnProduct?.purchase_account_id || productData?.purchase_account_id
        console.log('Final purchase_account_id for', purchaseReturnProduct.name, ':', finalPurchaseAccountId)
        
        this.form.selectedProducts.unshift({
          id: purchaseReturnProduct.id,
          slug: purchaseReturnProduct.slug,
          name: purchaseReturnProduct.name,
          code: purchaseReturnProduct.code,
          purchasedQty: purchaseReturnItem.purchasedQty,
          qty: purchaseReturnItem.purchasedQty,
          returnQty: purchaseReturnItem.returnQty,
          oldReturnedQty: purchaseReturnItem.returnQty,
          totalReturnedQty: purchaseReturnItem.returnQty,
          maxQty: purchaseReturnItem.purchasedQty - 1,
          price: purchaseReturnItem.purchasePrice,
          unitCost: purchaseReturnItem.purchasePrice,
          returnTotal: totalPrice,
          totalPrice: totalPrice,
          productTax: productTax,
          totalTax: productTax,
          productDiscount: purchaseReturnItem.productDiscount || 0,
          discountType: purchaseReturnItem.discountType || 'fixed',
          discountAmount: discountAmount,
          discount: purchaseReturnItem.productDiscount || 0,
          vatRate: purchaseReturnItem.vatRate,
          selectedVatRate: selectedVatRate,
          totalBeforeDiscount: totalBeforeDiscount,
          totalAfterDiscount: totalAfterDiscount,
          purchase_account_id: finalPurchaseAccountId,
        })
      }
      this.calculateSum()
      return this.form.selectedProducts
    },

    // updateItems
    updateItem(value, index) {
      let selectedProduct = this.form.selectedProducts[index]
      if (selectedProduct && value >= 0 && value <= selectedProduct.maxQty) {
        selectedProduct.returnQty = Number(value)
        selectedProduct.totalBeforeDiscount = Number((selectedProduct.returnQty * selectedProduct.unitCost).toFixed(2))
        selectedProduct.totalAfterDiscount = Number((selectedProduct.totalBeforeDiscount - (selectedProduct.discountAmount || 0)).toFixed(2))
        if (selectedProduct.selectedVatRate && selectedProduct.selectedVatRate.rate) {
          const vatAmount = Number((selectedProduct.totalAfterDiscount * (selectedProduct.selectedVatRate.rate / 100)).toFixed(2))
          selectedProduct.productTax = vatAmount
          selectedProduct.totalTax = vatAmount
          selectedProduct.totalPrice = Number((selectedProduct.totalAfterDiscount + vatAmount).toFixed(2))
        } else {
          selectedProduct.productTax = 0
          selectedProduct.totalTax = 0
          selectedProduct.totalPrice = selectedProduct.totalAfterDiscount
        }
        this.$set(this.form.selectedProducts, index, selectedProduct)
      }
      this.calculateSum()
    },

    updateItemReactively(item) {
      if (item.returnQty < 0) item.returnQty = 0
      else if (item.returnQty > item.maxQty) item.returnQty = item.maxQty
      item.totalBeforeDiscount = Number((item.returnQty * item.unitCost).toFixed(2))
      item.totalAfterDiscount = Number((item.totalBeforeDiscount - (item.discountAmount || 0)).toFixed(2))
      if (item.selectedVatRate && item.selectedVatRate.rate) {
        const vatAmount = Number((item.totalAfterDiscount * (item.selectedVatRate.rate / 100)).toFixed(2))
        item.productTax = vatAmount
        item.totalTax = vatAmount
        item.totalPrice = Number((item.totalAfterDiscount + vatAmount).toFixed(2))
      } else {
        item.productTax = 0
        item.totalTax = 0
        item.totalPrice = item.totalAfterDiscount
      }
      this.calculateSum()
    },

    // discount and vat per product
    calculateProductDiscount(index) {
      const product = this.form.selectedProducts[index]
      if (!product) return
      let discountAmount = 0
      if (product.discountType === 'percentage') {
        discountAmount = (product.returnQty * product.unitCost) * (product.discount / 100)
      } else {
        discountAmount = product.discount
      }
      product.discountAmount = Number(discountAmount.toFixed(2))
      product.totalBeforeDiscount = Number((product.returnQty * product.unitCost).toFixed(2))
      product.totalAfterDiscount = Number((product.totalBeforeDiscount - discountAmount).toFixed(2))
      this.calculateSum()
    },

    calculateProductVat(index) {
      const product = this.form.selectedProducts[index]
      if (!product || !product.selectedVatRate) return
      const vatAmount = Number((product.totalAfterDiscount * (product.selectedVatRate.rate / 100)).toFixed(2))
      product.productTax = vatAmount
      product.totalTax = vatAmount
      product.totalPrice = Number((product.totalAfterDiscount + vatAmount).toFixed(2))
      this.calculateSum()
    },

    // helpers
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null
      return this.taxes.find(tax => tax.id === productTax.id || tax.rate === productTax.rate)
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
      this.form.selectedProducts.splice(index, 1)
      this.calculateSum()
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
        const productTotal = remainingQty * p.unitCost
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

    // update purchase return
    async updatePurchaseReturn() {
      await this.form
        .patch(
          window.location.origin +
          '/api/purchase-returns/' +
          this.$route.params.slug
        )
        .then(({ data }) => {
          toast.fire({
            type: 'success',
            title: this.$t('Purchase return updated successfully'),
          })
          this.clearTemporaryData()
          this.$router.push({ name: 'purchaseReturns.show', params: { slug: data.data.slug }, })
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
        returnReason: this.form.returnReason,
        returnAmount: this.form.returnAmount,
        returnDate: this.form.returnDate,
        note: this.form.note,
        status: this.form.status,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('purchaseReturnEditTempData', JSON.stringify(tempData))
       
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('purchaseReturnEditTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.returnReason = data.returnReason || this.form.returnReason
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
      localStorage.removeItem('purchaseReturnEditTempData')
    },
  },
  mounted() {
    this.loadTemporaryData()
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
</style>
