<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              {{ $t('Create invoice return') }}
            </h3>
            <router-link :to="{ name: 'invoiceReturns.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveInvoiceReturn" @keydown="form.onKeydown($event)">
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
              <div v-if="products" class="row">
                <div class="form-group col-md-12">
                  <label for="product">{{
                    $t('Select Products')
                  }}</label>
                  <v-select :disabled="form.client == ''" multiple v-model="form.product" :options="products"
                    label="label" :class="{ 'is-invalid': form.errors.has('product') }" name="product"
                    :placeholder="$t('Search products')" @input="assignInvoices" />
                  <has-error :form="form" field="product" />
                </div>
              </div>
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
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div v-if="form.errors.errors && form.errors.errors.selectedProducts
                  " class="w-95 m-auto">
                  <div v-for="(msg, i) in form.errors.errors.selectedProducts" :key="i" class="callout callout-danger">
                    <p><i class="icon fas fa-ban"></i> {{ msg }}</p>
                  </div>
                </div>
                <div class="table-responsive table-custom w-95 m-auto">
                  <table class="table table-hover table-sm text-center">
                    <thead>
                      <tr>
                        <th>{{ $t('#') }}</th>
                        <th>{{ $t('Code') }}</th>
                        <th>{{ $t('Item Name') }}</th>
                        <th>{{ $t('Invoice Qty') }}</th>
                        <th>{{ $t('Current Qty') }}</th>
                        <th>{{ $t('Return Qty') }}</th>
                        <th>{{ $t('Unit Price') }}</th>
                        <th>{{ $t('Product Discount') }}</th>
                        <th>{{ $t('Total Price') }}</th>
                        <th class="text-right">
                          {{ $t('Return Price') }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>{{ item.code | withPrefix(prefix) }}</td>
                        <td>
                          <router-link v-if="$can('product-view')" :to="{
                            name: 'products.show',
                            params: { slug: item.slug },
                          }">
                            {{ item.name }}
                          </router-link>
                          <span v-else>{{ item.name }}</span>
                        </td>
                        <td>{{ item.qty }} {{ item.unit }}</td>
                        <td>{{ item.totalReturnQty }} {{ item.unit }}</td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity" @click="updateItem(Math.max(0, item.returnQty - 1), i - 1)" />
                            <input type="number" step="any" :id="`returnQty-${i}`" v-model.number="item.returnQty" name="quantity"
                              class="quantity-field border-0 incrementor" min="0" :max="item.maxQty"
                              @input="updateItemReactively(item)" placeholder="Return Qty" />
                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="
                                updateItem(Math.min(item.maxQty, Number(item.returnQty) + 1), i - 1)
                                " />
                          </div>
                        </td>
                        <td>{{ item.unitCost | withCurrency }}</td>
                        <td>
                          <span v-if="item.productDiscount && item.productDiscount > 0" class="badge badge-info">
                            {{ item.discountType === 'percentage' ? item.productDiscount + '%' : item.productDiscount | withCurrency }}
                          </span>
                          <span v-else class="text-muted">-</span>
                        </td>
                        <td>{{ item.totalPrice | withCurrency }}</td>
                        <td class="text-right">
                          {{ item.returnTotal | withCurrency }}
                        </td>
                      </tr>
                      <tr v-if="form.invoice">
                        <td colspan="8" class="text-right">
                          <strong>{{ $t('Subtotal') }}</strong>
                        </td>
                        <td class="text-center">
                          <strong>{{
                            form.invoice.subTotal | withCurrency
                          }}</strong>
                        </td>
                        <td class="text-right">
                          <strong>{{ form.totalReturn | withCurrency }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div v-if="form.invoice" class="row">
                <div v-if="form.discountPercentage > 0" class="form-group col-md-2">
                  <label for="discountType">{{
                    $t('Discount Type')
                  }}</label>
                  <select id="discountType" v-model="form.discountType" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType" disabled>
                    <option value="0">{{ $t('Fixed') }}</option>
                    <option value="1">{{ $t('Percentage') }}(%)</option>
                  </select>
                  <has-error :form="form" field="discountType" />
                </div>
                <div class="form-group" :class="form.discountPercentage > 0 ? 'col-md-2' : 'col-md-4'">
                  <label for="invoiceDiscount">{{
                    $t('Total discount')
                  }}</label>
                  <input id="invoiceDiscount" v-model="form.invoiceDiscount" type="number" step="any" class="form-control"
                    name="invoiceDiscount" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="invoiceTransport">{{
                    $t('Transport Cost')
                  }}</label>
                  <input id="invoiceTransport" v-model="form.invoiceTransport" type="number" step="any"
                    class="form-control" name="invoiceTransport" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="invoiceTax">{{
                    $t('Invoice Tax')
                  }}</label>
                  <input id="invoiceTax" v-model="form.newTax" type="number" step="any" class="form-control"
                    name="invoiceTax" readonly />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="invoiceTotal">{{
                    $t('Invoice Total')
                  }}</label>
                  <input id="invoiceTotal" v-model="form.invoiceTotal" type="number" step="any" class="form-control"
                    name="invoiceTotal" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="totalPaid">{{ $t('Total Paid') }}</label>
                  <input id="totalPaid" v-model="form.invoice.totalPaid" type="number" step="any" class="form-control"
                    name="totalPaid" readonly />
                </div>
                <div v-if="form.returnAmount > 0" class="form-group col-md-4">
                  <label for="returnAmountText">{{
                    $t('Return Amount')
                  }}</label>
                  <input id="returnAmountText" v-model="form.returnAmountText" type="text" class="form-control" :class="{
                    'is-invalid': form.errors.has('returnAmountText'),
                  }" name="returnAmountText" readonly />
                  <has-error :form="form" field="returnAmountText" />
                </div>
                <div v-else class="form-group col-md-4">
                  <label for="newDueText">{{
                    $t('New Due')
                  }}</label>
                  <input id="newDueText" v-model="form.newDueText" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('newDueText') }" name="newDueText" readonly />
                  <has-error :form="form" field="newDueText" />
                </div>
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
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-2">
                  <label for="availableBalance">{{
                    $t('Available Balance')
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
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
                  <label for="date">{{ $t('Return Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              
              <!-- Calculation Summary -->
              <div v-if="form.invoice" class="row mt-4">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">{{ $t('Calculation Summary') }}</h5>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-secondary"><i class="fas fa-calculator"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Base Subtotal') }}</span>
                              <span class="info-box-number">{{ (form.newSubTotal + form.invoiceDiscount) | withCurrency }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-info"><i class="fas fa-tags"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('New Subtotal') }}</span>
                              <span class="info-box-number">{{ form.newSubTotal | withCurrency }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-warning"><i class="fas fa-percentage"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Total Discount') }}</span>
                              <span class="info-box-number">{{ totalDiscount | withCurrency }}</span>
                              <small class="d-block text-muted">
                                Product: {{ totalProductDiscounts | withCurrency }}<br>
                                Invoice: {{ totalInvoiceDiscount | withCurrency }}
                              </small>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-success"><i class="fas fa-receipt"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Total Tax') }}</span>
                              <span class="info-box-number">{{ form.newTax | withCurrency }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-primary"><i class="fas fa-file-invoice-dollar"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('New Total') }}</span>
                              <span class="info-box-number">{{ form.newSubTotal | withCurrency }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-danger"><i class="fas fa-undo"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Return Amount') }}</span>
                              <span class="info-box-number">{{ form.totalReturn | withCurrency }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-primary">
                <i class="fas fa-save" /> {{ $t('Save') }}
              </v-button>
              <button type="button" class="btn btn-info ml-2" @click="showCalculationBreakdown">
                <i class="fas fa-calculator" /> Debug Calculations
              </button>
              <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t('Reset') }}
              </button>
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
    return { title: this.$t('Create Invoice Return') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Invoice Return',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Invoice Returns',
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
      invoiceTax: 0,
      newTax: 0,
      invoiceDiscount: 0,
      discountType: 0,
      discountPercentage: 0,
      invoiceTransport: 0,
      invoiceTaxRate: 0,
      invoiceTotal: 0,
      invoiceDue: 0,
      totalPaid: 0,
      newDue: 0,
      newDueText: '',
      returnAmount: 0,
      returnAmountText: 0,
      newSubTotal: 0,
    }),
    products: '',
    accounts: '',
    clientInvoices: '',
    prefix: '',
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
    
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
    }
  },
  watch: {
    'form.selectedProducts': {
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          this.calculateSum()
        }
      },
      deep: true
    },
    'form.newSubTotal': {
      handler(newVal) {
        // Recalculate discount percentage if it's a percentage-based discount
        if (this.form.discountType == 1 && this.form.invoiceDiscount > 0 && newVal > 0) {
          this.form.discountPercentage = Number(
            ((this.form.invoiceDiscount / newVal) * 100).toFixed(2)
          )
        }
      }
    }
  },

  created() {
    this.getClients()
    this.getProducts()
    this.getAccounts()
    this.prefix = this.appInfo.productPrefix
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

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = data.data
    },

    // update available balance
    updateBalance() {
      this.form.availableBalance = 0
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance
      }
      return
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
      this.form.invoiceTotal = this.form.invoice.invoiceTotal
      this.form.invoiceTransport = this.form.invoice.transport
      this.form.invoiceDiscount = this.form.invoice.discount
      this.form.discountType = this.form.invoice.discountType
      this.form.discountPercentage = this.form.invoice.discountPercentage
      this.form.invoiceDue = this.form.invoice.due
      this.form.newDue = this.form.invoice.due
      this.form.newDueText = this.form.invoice.due
      for (var key in this.form.invoice.invoiceProducts) {
        let invoiceItem = this.form.invoice.invoiceProducts[key]
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
          returnQty: 0,
          totalReturnQty: invoiceItem.quantity - invoiceItem.returnQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.unitCost,
          totalPrice: invoiceItem.unitCostTotal,
          returnTotal: 0,
          productTax: invoiceItem.unitTax,
          totalTax: invoiceItem.taxTotal,
          maxQty: invoiceItem.quantity,
          // Product-level discount information
          productDiscount: invoiceItem.productDiscount || 0,
          discountType: invoiceItem.discountType || 'fixed',
          discountAmount: invoiceItem.productDiscount || 0,
          // Product-level VAT information
          vatRate: invoiceItem.vatRate,
        })
      }
      
      // Initialize calculations after loading products
      this.calculateSum()
      return
    },

    // update items
    updateItem(value, index) {
      let selectedProduct = this.form.selectedProducts[index]
      if (selectedProduct && value >= 0 && value <= selectedProduct.qty) {
        selectedProduct.returnQty = Number(value)
        
        // Calculate return total including any product-level discounts
        let returnSubtotal = selectedProduct.returnQty * selectedProduct.unitCost
        
        // Apply product-level discount to return amount if applicable
        if (selectedProduct.productDiscount && selectedProduct.productDiscount > 0) {
          if (selectedProduct.discountType === 'percentage') {
            let discountAmount = (returnSubtotal * selectedProduct.productDiscount) / 100
            returnSubtotal -= discountAmount
          } else {
            // For fixed discount, calculate proportionally
            let discountPerUnit = selectedProduct.productDiscount / selectedProduct.qty
            let totalDiscount = discountPerUnit * selectedProduct.returnQty
            returnSubtotal -= totalDiscount
          }
        }
        
        selectedProduct.returnTotal = Number(returnSubtotal.toFixed(2))
        
        // Force reactivity update
        this.$set(this.form.selectedProducts, index, selectedProduct)
      }
      this.calculateSum()
    },

    // update items reactively for v-model
    updateItemReactively(item) {
      if (item.returnQty < 0) {
        item.returnQty = 0
      } else if (item.returnQty > item.qty) {
        item.returnQty = item.qty
      }
      
      // Calculate return total including any product-level discounts
      let returnSubtotal = item.returnQty * item.unitCost
      
      // Apply product-level discount to return amount if applicable
      if (item.productDiscount && item.productDiscount > 0) {
        if (item.discountType === 'percentage') {
          let discountAmount = (returnSubtotal * item.productDiscount) / 100
          returnSubtotal -= discountAmount
        } else {
          // For fixed discount, calculate proportionally
          let discountPerUnit = item.productDiscount / item.qty
          let totalDiscount = discountPerUnit * item.returnQty
          returnSubtotal -= totalDiscount
        }
      }
      
      item.returnTotal = Number(returnSubtotal.toFixed(2))
      this.calculateSum()
    },

    // calculate sum
    calculateSum() {
      // calculate total
      let length = this.form.selectedProducts.length
      this.form.newSubTotal = this.form.totalReturn = 0
      let totalProductDiscount = 0
      let totalProductTax = 0
      let invoiceSubtotal = 0
      
      for (let i = 0; i < length; i++) {
        let looProduct = this.form.selectedProducts[i]
        let remainingQty = looProduct.qty - looProduct.returnQty
        
        // Calculate product total for remaining items
        let productTotal = remainingQty * looProduct.unitCost
        invoiceSubtotal += productTotal
        
        // Calculate subtotal for remaining items (this will be the base for calculations)
        this.form.newSubTotal += Number(productTotal.toFixed(2))
        
        // Calculate return total
        this.form.totalReturn += Number(looProduct.returnTotal.toFixed(2))
        
        // Calculate product-level discounts for remaining items
        if (looProduct.productDiscount && looProduct.productDiscount > 0) {
          if (looProduct.discountType === 'percentage') {
            // For percentage discount: discount = total * percentage / 100
            let discountAmount = (productTotal * looProduct.productDiscount) / 100
            totalProductDiscount += Number(discountAmount.toFixed(2))
          } else {
            // For fixed discount: calculate proportionally based on remaining quantity
            let discountPerUnit = looProduct.productDiscount / looProduct.qty
            let discountAmount = discountPerUnit * remainingQty
            totalProductDiscount += Number(discountAmount.toFixed(2))
          }
        }
        
        // Calculate product-level taxes for remaining items
        if (looProduct.productTax && looProduct.productTax > 0) {
          let taxPerUnit = looProduct.productTax / looProduct.qty
          totalProductTax += Number(
            (taxPerUnit * remainingQty).toFixed(2)
          )
        }
      }

      // Calculate invoice-level discount
      let invoiceDiscountAmount = 0
      if (this.form.discountType == 1) {
        // Percentage discount - calculate based on invoice subtotal
        invoiceDiscountAmount = Number(
          ((this.form.discountPercentage / 100) * invoiceSubtotal).toFixed(2)
        )
      } else {
        // Fixed discount - use the original fixed amount
        invoiceDiscountAmount = Number(this.form.invoiceDiscount || 0)
      }

      // Apply the discount formula: discounted_total = base_total - discount_amount
      // Calculate new subtotal after applying all discounts
      this.form.newSubTotal = Number(
        (invoiceSubtotal - totalProductDiscount - invoiceDiscountAmount).toFixed(2)
      )

      // Update the invoice discount field to show the calculated amount
      this.form.invoiceDiscount = invoiceDiscountAmount

      // Calculate total discount (product + invoice level) for display
      // Note: totalProductDiscount + invoiceDiscountAmount = total discount applied

      // Update tax calculation
      // Tax is calculated on the discounted amount
      let taxableAmount = this.form.newSubTotal
      
      if (this.form.invoiceTaxRate && this.form.invoiceTaxRate.rate) {
        this.form.newTax = Number(
          ((this.form.invoiceTaxRate.rate / 100) * taxableAmount).toFixed(2)
        )
      } else {
        this.form.newTax = 0
      }
      
      // Add product-level taxes to the total tax
      this.form.newTax += totalProductTax

      // Calculate final totals
      this.form.invoiceTotal = Number(
        (
          this.form.newSubTotal +
          this.form.newTax +
          this.form.invoiceTransport
        ).toFixed(2)
      )
      
      this.form.invoiceDue = Number(
        (this.form.invoiceTotal - this.form.invoice.totalPaid).toFixed(2)
      )

      // calculate new due or payable
      if (this.form.invoiceDue >= 0) {
        this.form.newDue = this.form.invoiceTotal - this.form.invoice.totalPaid
        this.form.newDueText =
          this.form.invoiceTotal +
          ' - ' +
          this.form.invoice.totalPaid +
          ' = ' +
          Number(this.form.newDue).toFixed(2)
        this.form.returnAmount = 0
      } else {
        this.form.returnAmount = Number(
          (this.form.invoice.totalPaid - this.form.invoiceTotal).toFixed(2)
        )
        this.form.returnAmountText =
          this.form.invoice.totalPaid +
          ' - ' +
          this.form.invoiceTotal +
          ' = ' +
          this.form.returnAmount
        this.form.invoiceDue = 0
        this.form.newDue = 0
      }
      return
    },

    // Debug method to show calculation breakdown
    showCalculationBreakdown() {
      console.log('=== Invoice Return Calculation Breakdown ===')
      console.log('Original Invoice Subtotal:', this.form.invoice.subTotal)
      console.log('Base Subtotal (before discounts):', this.form.newSubTotal + this.form.invoiceDiscount)
      console.log('New Subtotal (after discounts):', this.form.newSubTotal)
      console.log('Total Return Amount:', this.form.totalReturn)
      console.log('Invoice Discount:', this.form.invoiceDiscount)
      console.log('Discount Type:', this.form.discountType == 1 ? 'Percentage' : 'Fixed')
      console.log('Discount Percentage:', this.form.discountPercentage)
      console.log('Invoice Tax Rate:', this.form.invoiceTaxRate?.rate || 0)
      console.log('New Tax Amount:', this.form.newTax)
      console.log('Transport Cost:', this.form.invoiceTransport)
      console.log('New Invoice Total:', this.form.invoiceTotal)
      console.log('New Due Amount:', this.form.invoiceDue)
      console.log('Return Amount:', this.form.returnAmount)
      
      console.log('=== Discount Calculation ===')
      console.log('Formula: discounted_total = base_total - discount_amount')
      console.log('Base Total:', this.form.newSubTotal + this.form.invoiceDiscount)
      console.log('Discount Amount:', this.form.invoiceDiscount)
      console.log('Discounted Total:', this.form.newSubTotal)
      
      console.log('=== Product Details ===')
      this.form.selectedProducts.forEach((product, index) => {
        console.log(`Product ${index + 1}:`, {
          name: product.name,
          originalQty: product.qty,
          returnQty: product.returnQty,
          remainingQty: product.qty - product.returnQty,
          unitCost: product.unitCost,
          productTotal: (product.qty - product.returnQty) * product.unitCost,
          productDiscount: product.productDiscount,
          discountType: product.discountType,
          discountAmount: product.discountType === 'percentage' 
            ? ((product.qty - product.returnQty) * product.unitCost * product.productDiscount) / 100
            : (product.productDiscount / product.qty) * (product.qty - product.returnQty),
          productTax: product.productTax,
          returnTotal: product.returnTotal
        })
      })
      
      console.log('=== Discount Breakdown ===')
      console.log('Total Product Discounts:', this.totalProductDiscounts)
      console.log('Total Invoice Discount:', this.totalInvoiceDiscount)
      console.log('Total Discount:', this.totalDiscount)
      
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
        errors.push('At least one product must have a return quantity greater than 0')
        isValid = false
      }
      
      // Check if return quantities exceed available quantities
      this.form.selectedProducts.forEach((product) => {
        if (product.returnQty > product.qty) {
          errors.push(`Return quantity for ${product.name} cannot exceed available quantity`)
          isValid = false
        }
        
        if (product.returnQty < 0) {
          errors.push(`Return quantity for ${product.name} cannot be negative`)
          isValid = false
        }
      })
      
      // Check if new subtotal is valid
      if (this.form.newSubTotal < 0) {
        errors.push('New subtotal cannot be negative')
        isValid = false
      }
      
      // Check if discount is valid
      if (this.form.invoiceDiscount > this.form.newSubTotal) {
        errors.push('Total discount cannot exceed new subtotal')
        isValid = false
      }
      
      if (errors.length > 0) {
        console.error('Validation Errors:', errors)
        alert('Validation Errors:\n' + errors.join('\n'))
      }
      
      return isValid
    },

    // save return
    async saveInvoiceReturn() {
      // Validate returns before submitting
      if (!this.validateReturns()) {
        return
      }
      
      await this.form
        .post(window.location.origin + '/api/invoice-returns')
        .then(({ data }) => {
          toast.fire({
            type: 'success',
            title: this.$t('Invoice return added successfully'),
          })
          this.$router.push({ name: 'invoiceReturns.show', params: { slug: data.data.slug }, })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
        })
    },
  },
}
</script>

<style scoped>
.info-box {
  display: flex;
  min-height: 80px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 1px rgba(0,0,0,.125), 0 1px 3px rgba(0,0,0,.2);
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.info-box-icon {
  border-radius: 0.25rem 0 0 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
  font-weight: 300;
  width: 70px;
  text-align: center;
  color: #fff;
}

.info-box-content {
  padding: 5px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-box-text {
  display: block;
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.info-box-number {
  display: block;
  font-weight: 700;
  font-size: 1.25rem;
  color: #495057;
}

.bg-secondary { background-color: #6c757d !important; }
.bg-info { background-color: #17a2b8 !important; }
.bg-warning { background-color: #ffc107 !important; }
.bg-success { background-color: #28a745 !important; }
.bg-primary { background-color: #007bff !important; }
.bg-danger { background-color: #dc3545 !important; }

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}

.badge-info {
  color: #fff;
  background-color: #17a2b8;
}

.text-muted {
  color: #6c757d !important;
}
</style>
