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
                :custom-total-value="totalTotal" :totals-colspan="4" @item-change="handleItemChange"
                @discount-change="calculateProductDiscount" @vat-change="calculateProductVat"
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
      invoiceTax: 0,
      newTax: 0,
      invoiceDiscount: 0,
      discountType: 0,
      discountPercentage: 0,
      invoiceTransport: 0,
      invoiceTaxRate: 0,
      invoiceTotal: 0,
      originalInvoiceTotal: 0,
      invoiceDue: 0,
      totalPaid: 0,
      newDue: 0,
      newDueText: '',
      returnAmount: 0,
      returnAmountText: 0,
      newSubTotal: 0,
      // Detailed return calculation fields
      netTotal: 0, // Net Sale (without VAT)
      taxAmount: 0, // VAT amount
      discountTotal: 0, // Total discount
      // New fields for display
      totalDiscount: 0,
      transportCost: 0,
    }),
    products: '',
    accounts: '',
    clientInvoices: '',
    prefix: '',
    taxes: '',
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

    // Computed properties for totals (matching invoice create)
    totalUnitPrice() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0
      }
      const total = this.form.selectedProducts.reduce((total, product) => {
        return total + (Number(product.totalBeforeDiscount) || 0)
      }, 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },

    totalProductDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0
      }
      const total = this.form.selectedProducts.reduce((total, product) => {
        return total + (Number(product.discountAmount) || 0)
      }, 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },

    totalAfterDiscount() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0
      }
      const total = this.form.selectedProducts.reduce((total, product) => {
        return total + (Number(product.totalAfterDiscount) || 0)
      }, 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },

    totalProductTax() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0
      }
      const total = this.form.selectedProducts.reduce((total, product) => {
        return total + (Number(product.productTax) || 0)
      }, 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },

    subtotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0
      }
      const total = this.form.selectedProducts.reduce((total, product) => {
        return total + (Number(product.totalPrice) || 0)
      }, 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
    },

    // Total for the "Total" column (sum of totalBeforeDiscount)
    totalTotal() {
      if (!this.form.selectedProducts || !Array.isArray(this.form.selectedProducts) || this.form.selectedProducts.length === 0) {
        return 0
      }
      const total = this.form.selectedProducts.reduce((total, product) => {
        return total + (Number(product.totalBeforeDiscount) || 0)
      }, 0)
      const numValue = Number(total)
      return isNaN(numValue) ? 0 : Number(numValue.toFixed(2))
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

  async created() {
    await Promise.all([
      this.getClients(),
      this.getProducts(),
      this.getAccounts(),
      this.getTaxes()
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
          returnQty: invoiceItem.quantity - invoiceItem.returnQty, // Default to remaining quantity
          totalReturnQty: invoiceItem.quantity - invoiceItem.returnQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.salePrice,
          totalPrice: invoiceItem.total,
          returnTotal: 0,
          productTax: invoiceItem.unitTax,
          totalTax: invoiceItem.taxTotal,
          maxQty: invoiceItem.quantity - invoiceItem.returnQty, // Max is remaining quantity
          // Product-level discount information
          productDiscount: invoiceItem.productDiscount || 0,
          discountType: invoiceItem.discountType || 'fixed',
          discountAmount: invoiceItem.productDiscount || 0,
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
          // Calculate totals for display based on return quantity
          totalBeforeDiscount: Number(((invoiceItem.quantity - invoiceItem.returnQty) * invoiceItem.salePrice).toFixed(2)),
          totalAfterDiscount: Number(((invoiceItem.quantity - invoiceItem.returnQty) * invoiceItem.salePrice).toFixed(2)),
          // Chart of account information
          sales_account_id: invoiceItem.sales_account_id,
          purchase_account_id: invoiceItem.purchase_account_id,
          itemType: invoiceItem.itemType || 'product',
        })

        // Initialize discount and VAT calculations for the last added product
        const lastIndex = 0 // Since we're adding to the beginning
        const lastProduct = this.form.selectedProducts[lastIndex]

        // Calculate discount amount
        if (lastProduct.discount && lastProduct.discount > 0) {
          if (lastProduct.discountType === 'percentage') {
            lastProduct.discountAmount = Number(((lastProduct.returnQty * lastProduct.unitCost) * (lastProduct.discount / 100)).toFixed(2))
          } else {
            lastProduct.discountAmount = Number(lastProduct.discount.toFixed(2))
          }
          lastProduct.totalAfterDiscount = Number((lastProduct.totalBeforeDiscount - lastProduct.discountAmount).toFixed(2))
        } else {
          lastProduct.discountAmount = 0
          lastProduct.totalAfterDiscount = lastProduct.totalBeforeDiscount
        }

        // Calculate VAT
        if (lastProduct.selectedVatRate && lastProduct.selectedVatRate.rate) {
          const vatAmount = Number((lastProduct.totalAfterDiscount * (lastProduct.selectedVatRate.rate / 100)).toFixed(2))
          lastProduct.productTax = vatAmount
          lastProduct.totalTax = vatAmount
          lastProduct.totalPrice = Number((lastProduct.totalAfterDiscount + vatAmount).toFixed(2))
        } else {
          lastProduct.productTax = 0
          lastProduct.totalTax = 0
          lastProduct.totalPrice = lastProduct.totalAfterDiscount
        }
      }

      // Initialize calculations after loading products
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

    // calculate sum
    calculateSum() {
      // calculate total
      let length = this.form.selectedProducts.length
      this.form.newSubTotal = this.form.totalReturn = 0
      let totalProductDiscount = 0
      let totalProductTax = 0
      let invoiceSubtotal = 0

      // Initialize detailed return calculation fields
      this.form.netTotal = 0
      this.form.taxAmount = 0
      this.form.discountTotal = 0

      for (let i = 0; i < length; i++) {
        let looProduct = this.form.selectedProducts[i]
        let remainingQty = looProduct.qty - looProduct.returnQty

        // Calculate product total for remaining items
        let productTotal = remainingQty * looProduct.unitCost
        invoiceSubtotal += productTotal

        // Calculate subtotal for remaining items (this will be the base for calculations)
        this.form.newSubTotal += Number(productTotal.toFixed(2))

        // Calculate return total using proportional calculation from original invoice
        if (looProduct.returnQty > 0) {
          // Calculate return amount proportionally from the original invoice line total
          const originalLineTotal = parseFloat(looProduct.totalPrice) || 0 // This is the total price from invoice_products
          const totalQty = parseFloat(looProduct.qty) || 1
          const returnQty = parseFloat(looProduct.returnQty) || 0

          // Calculate proportional return amount: (original_line_total / total_qty) * return_qty
          const unitPrice = originalLineTotal / totalQty
          const returnTotal = Number((unitPrice * returnQty).toFixed(2))

          // Update the product's returnTotal with the proportional calculation
          looProduct.returnTotal = returnTotal

          // Add to total return
          this.form.totalReturn += returnTotal

          // For detailed breakdown, calculate proportional amounts
          const originalDiscount = parseFloat(looProduct.discountAmount) || 0
          const originalTax = parseFloat(looProduct.totalTax) || 0

          // Proportional discount and tax
          const proportionalDiscount = Number(((originalDiscount / totalQty) * returnQty).toFixed(2))
          const proportionalTax = Number(((originalTax / totalQty) * returnQty).toFixed(2))
          const proportionalNet = Number((returnTotal - proportionalDiscount).toFixed(2))

          this.form.netTotal += proportionalNet
          this.form.taxAmount += proportionalTax
          this.form.discountTotal += proportionalDiscount
        }

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

      // Note: Product-level taxes are already included in the original invoice calculation
      // We only need to calculate the invoice-level tax on the new subtotal

      // Calculate final totals
      // Note: invoiceTotal should remain as the original invoice total
      // The new calculated total would be:
      // this.form.invoiceTotal = Number(
      //   (
      //     this.form.newSubTotal +
      //     this.form.newTax +
      //     this.form.invoiceTransport
      //   ).toFixed(2)
      // )

      this.form.invoiceDue = Number(
        (this.form.originalInvoiceTotal - this.form.invoice.totalPaid).toFixed(2)
      )

      // Update the display fields with calculated values
      // 1. Total Discount = Original Invoice Total Discount - Return discount amount
      this.form.totalDiscount = Number(
        (this.originalInvoiceTotalDiscount - this.form.discountTotal).toFixed(2)
      )

      // 2. Transport Cost = from table invoices.transport (already set in storeProducts)
      // this.form.transportCost is already set from this.form.invoice.transport

      // 3. Invoice Tax = Original Invoice Total Tax - Return tax amount
      this.form.invoiceTax = Number(
        (this.originalInvoiceTotalTax - this.form.taxAmount).toFixed(2)
      )

      // calculate new due or payable
      if (this.form.invoiceDue >= 0) {
        this.form.newDue = this.form.originalInvoiceTotal - this.form.invoice.totalPaid
        this.form.newDueText =
          this.form.originalInvoiceTotal +
          ' - ' +
          this.form.invoice.totalPaid +
          ' = ' +
          Number(this.form.newDue).toFixed(2)
        this.form.returnAmount = 0
      } else {
        this.form.returnAmount = Number(
          (this.form.invoice.totalPaid - this.form.originalInvoiceTotal).toFixed(2)
        )
        this.form.returnAmountText =
          this.form.invoice.totalPaid +
          ' - ' +
          this.form.originalInvoiceTotal +
          ' = ' +
          this.form.returnAmount
        this.form.invoiceDue = 0
        this.form.newDue = 0
      }
      return
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

    formatToTwoDecimals(value) {
      // Handle null, undefined, or non-numeric values
      if (value === null || value === undefined || isNaN(value)) {
        return '0.00'
      }
      const numValue = Number(value)
      if (isNaN(numValue)) {
        return '0.00'
      }
      return numValue.toFixed(2)
    },

    toWord() {
      // Simple implementation - you might want to use a proper number-to-words library
      return this.$t('Total')
    },

    // Calculate all item amounts (discount, price, tax, total) - single function for all calculations
    calculateItemAmounts(index) {
      const product = this.form.selectedProducts[index]
      if (!product || !this.form.selectedProducts || !Array.isArray(this.form.selectedProducts)) {
        return
      }

      // Normalize numeric inputs
      const returnQtyNumber = Number(product.returnQty) || 0
      const unitCostNumber = Number(product.unitCost) || 0

      // Calculate total before discount (unit cost × return quantity)
      const totalBeforeDiscount = Number((returnQtyNumber * unitCostNumber).toFixed(2))

      // Calculate discount amount based on type
      let discountAmount = 0
      if (product.discountType === 'percentage') {
        discountAmount = Number(((returnQtyNumber * unitCostNumber) * (product.discount || 0) / 100).toFixed(2))
      } else {
        discountAmount = Number((product.discount || 0).toFixed(2))
      }

      // Ensure discount amount doesn't exceed the total before discount
      if (discountAmount > totalBeforeDiscount) {
        discountAmount = Number(totalBeforeDiscount.toFixed(2))
      }

      // Calculate price after discount
      const totalAfterDiscount = Number((totalBeforeDiscount - discountAmount).toFixed(2))

      // Save original totalPrice from invoice before modifying it (needed for returnTotal calculation)
      const originalLineTotal = parseFloat(product.totalPrice) || 0

      // Calculate VAT and total price
      let productTax = 0
      let totalTax = 0
      let totalPrice = totalAfterDiscount

      if (product.selectedVatRate && product.selectedVatRate.rate) {
        const vatAmount = Number((totalAfterDiscount * (product.selectedVatRate.rate / 100)).toFixed(2))
        productTax = vatAmount
        totalTax = vatAmount
        totalPrice = Number((totalAfterDiscount + vatAmount).toFixed(2))
      }

      // Calculate return total proportionally from original invoice line total
      const totalQty = parseFloat(product.qty) || 1
      const returnQty = parseFloat(product.returnQty) || 0

      // Calculate proportional return amount: (original_line_total / total_qty) * return_qty
      const unitPrice = totalQty > 0 ? originalLineTotal / totalQty : 0
      const returnTotal = Number((unitPrice * returnQty).toFixed(2))

      // Update product with all calculated values
      product.discountAmount = discountAmount
      product.totalBeforeDiscount = totalBeforeDiscount
      product.totalAfterDiscount = totalAfterDiscount
      product.productTax = productTax
      product.totalTax = totalTax
      product.totalPrice = totalPrice
      product.returnTotal = returnTotal

      // Force reactivity update
      this.$set(this.form.selectedProducts, index, product)

      // Recalculate sum
      this.calculateSum()
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