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
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="formId" :title="isEdit ? $t('Save changes') : $t('Save')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form :id="formId" role="form" @submit.prevent="onSubmit" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items && !isEdit">
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

              <div class="row" v-if="isEdit">
                <div class="form-group col-md-6">
                  <label for="returnReason">{{ $t('Return Reason') }}
                    <span class="required">*</span></label>
                  <input id="returnReason" v-model="form.returnReason" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('returnReason') }" name="returnReason"
                    :placeholder="$t('Enter a reason')" />
                  <has-error :form="form" field="returnReason" />
                </div>
                <div class="form-group col-md-6">
                  <label for="clientName">{{ $t('Client') }}
                    <span class="required">*</span></label>
                  <input v-model="clientNameReadonly" type="text" class="form-control" name="clientName" readonly />
                </div>
              </div>

              <div class="row" v-if="form.client && clientInvoices && !isEdit">
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
                <div v-if="form.errors.errors && form.errors.errors.selectedProducts" class="w-100 m-auto">
                  <div v-for="(msg, i) in form.errors.errors.selectedProducts" :key="i" class="callout callout-danger">
                    <p><i class="icon fas fa-ban"></i> {{ msg }}</p>
                  </div>
                </div>
                <div class="table-responsive table-custom w-100 m-auto" style="max-width: 100%;">
                  <table class="table table-hover table-sm text-center invoices-create-table">
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
                  <label for="invoiceTax">{{ $t('Invoice Tax') }}</label>
                  <input id="invoiceTax" v-model="formattedInvoiceTax" type="text" class="form-control" name="invoiceTax" readonly />
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
                  <label for="date">{{ $t('Return Date') }}</label>
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
                    <i class="fas fa-save" /> {{ isEdit ? $t('Save changes') : $t('Save') }}
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.isEdit ? this.$t('Edit Invoice Return') : (this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return')) }
  },
  data: () => ({
    breadcrumbsCurrent: '',
    breadcrumbs: [
      { name: 'Dashboard', url: 'home' },
      { name: '', url: 'invoiceReturns.index' },
      { name: 'Create', url: '' },
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
      netTotal: 0,
      taxAmount: 0,
      discountTotal: 0,
      // New fields for display
      totalDiscount: 0,
      transportCost: 0,
    }),
    products: '',
    accounts: '',
    clientInvoices: '',
    prefix: '',
    taxes: '',
    loadedReturn: null,
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
    isEdit() {
      return this.$route.name === 'invoiceReturns.edit' || !!this.$route.params.slug
    },
    clientNameReadonly() {
      return this.form.client?.name || ''
    },
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA'
    },
    formId() {
      return this.isEdit ? 'invoiceReturnEditUnifiedForm' : 'invoiceReturnCreateUnifiedForm'
    },
    hasBankAccountChartOfAccount() {
      if (this.form.returnAmount <= 0) return true
      return this.form.account && this.form.account.chartOfAccountId
    },
    dynamicBreadcrumbsCurrent() {
      if (this.isEdit) return this.$t('Edit Invoice Return')
      return this.isSaudiArabia ? this.$t('Create Credit Note') : this.$t('Create Invoice Return')
    },
    dynamicBreadcrumbs() {
      return [
        { name: 'Dashboard', url: 'home' },
        { name: this.isSaudiArabia ? this.$t('Credit notes') : this.$t('Invoice Returns'), url: 'invoiceReturns.index' },
        { name: this.isEdit ? 'Edit' : 'Create', url: '' },
      ]
    },
    // Totals (same as create.vue)
    totalUnitPrice() {
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
      return this.formatToTwoDecimals(this.form.totalDiscount)
    },
    formattedTransportCost() {
      return this.formatToTwoDecimals(this.form.transportCost)
    },
    formattedInvoiceTax() {
      return this.formatToTwoDecimals(this.form.invoiceTax)
    },
    formattedAvailableBalance() {
      return this.formatToTwoDecimals(this.form.availableBalance)
    },
  },
  watch: {
    'form.selectedProducts': {
      handler(newVal) {
        if (newVal && newVal.length > 0) this.calculateSum()
      },
      deep: true,
    },
    'form.newSubTotal': {
      handler(newVal) {
        if (this.form.discountType == 1 && this.form.invoiceDiscount > 0 && newVal > 0) {
          this.form.discountPercentage = Number(((this.form.invoiceDiscount / newVal) * 100).toFixed(2))
        }
      },
    },
  },
  async created() {
    await this.getClients()
    this.getProducts()
    this.getAccounts()
    this.getTaxes()
    this.prefix = this.appInfo.productPrefix
    // default status by country
    this.form.status = this.isSaudiArabia ? 0 : 1
    if (this.isEdit) {
      this.loadExistingReturn()
    }
    // handle pre-selection from query on create
    if (!this.isEdit) {
      this.handlePreSelection()
    }
  },
  methods: {
    // get all clients
    async getClients() {
      await this.$store.dispatch('operations/allData', { path: '/api/all-clients' })
    },
    // handle pre-selection from query parameters (client and/or invoice)
    async handlePreSelection() {
      let clientSlug = this.$route?.query?.client
      const invoiceSlug = this.$route?.query?.invoice
      let invoiceData = null

      console.log('Preselection starting:', { clientSlug, invoiceSlug, query: this.$route?.query })

      try {
        // if we have invoice slug but no client, fetch invoice to get client
        if (invoiceSlug && !clientSlug) {
          console.log('Fetching invoice to get client:', invoiceSlug)
          const response = await axios.get(`/api/invoices/${invoiceSlug}`)
          invoiceData = response.data?.data
          if (invoiceData && invoiceData.client) {
            clientSlug = invoiceData.client.slug
            console.log('Found client from invoice:', clientSlug)
          }
        }

        if (clientSlug) {
          console.log('Looking for client:', clientSlug)
          // wait for clients to be available in store
          let attempts = 0
          const maxAttempts = 10
          while (attempts < maxAttempts) {
            if (this.items && Array.isArray(this.items) && this.items.length > 0) break
            await new Promise(r => setTimeout(r, 200))
            attempts++
          }

          console.log('Available clients:', this.items?.length)
          const matchedClient = (this.items || []).find(c => c.slug === clientSlug)
          if (matchedClient) {
            console.log('Found client, setting form.client:', matchedClient)
            this.form.client = matchedClient
            await this.assignInvoices()
            console.log('Client invoices loaded:', this.clientInvoices?.length)

            // if invoice slug was provided, try to pick that invoice
            if (invoiceSlug) {
              // ensure we have invoice data if not already fetched
              if (!invoiceData) {
                try {
                  const resp = await axios.get(`/api/invoices/${invoiceSlug}`)
                  invoiceData = resp.data?.data
                  console.log('Fetched invoice data:', invoiceData?.id)
                } catch (e) { 
                  console.warn('Failed to fetch invoice:', e)
                }
              }

              // pick from clientInvoices by slug match; fallback by id if available
              const matchedInvoice = (this.clientInvoices || []).find(inv => inv.slug === invoiceSlug || inv.id === invoiceData?.id)
              if (matchedInvoice) {
                console.log('Found invoice in clientInvoices:', matchedInvoice)
                this.form.invoice = matchedInvoice
                this.storeProducts()
              } else {
                // if not found in clientInvoices, try using the full invoice data directly
                if (invoiceData) {
                  console.log('Using full invoice data directly:', invoiceData)
                  this.form.invoice = invoiceData
                  this.storeProducts()
                } else {
                  console.warn('No invoice found for slug:', invoiceSlug)
                }
              }
            }
          } else {
            console.warn('Client not found in store:', clientSlug)
            // fallback: if we already fetched invoiceData with client, use it directly
            if (invoiceData && invoiceData.client) {
              this.form.client = invoiceData.client
              await this.assignInvoices()

              if (invoiceSlug) {
                const matchedInvoice = (this.clientInvoices || []).find(inv => inv.slug === invoiceSlug || inv.id === invoiceData?.id)
                if (matchedInvoice) {
                  this.form.invoice = matchedInvoice
                  this.storeProducts()
                } else if (invoiceData) {
                  this.form.invoice = invoiceData
                  this.storeProducts()
                }
              }
            }
          }
        }
      } catch (e) {
        console.warn('Preselection failed:', e)
        // silent fail – preselection is best-effort
      }
    },
    // get products
    async getProducts() {
      const { data } = await axios.get(window.location.origin + '/api/all-products')
      this.products = data.data
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
    // get accounts
    async getAccounts() {
      const { data } = await axios.get(window.location.origin + '/api/all-accounts')
      this.accounts = data.data
    },
    // assign invoices
    async assignInvoices() {
      this.form.selectedProducts = []
      this.form.invoice = ''
      if (this.form.client) {
        const response = await axios.post(window.location.origin + '/api/client/filter-invoices', {
          products: this.form.product,
          clientSlug: this.form.client.slug,
        })
        this.clientInvoices = response.data.data
      } else {
        this.form.product = ''
        this.form.client = ''
      }
    },
    // populate products from selected invoice
    storeProducts() {
      if (!this.form.invoice || !this.form.invoice.invoiceProducts) return
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
      this.form.totalDiscount = 0
      this.form.transportCost = this.form.invoice.transport || 0
      for (const invoiceItem of this.form.invoice.invoiceProducts) {
        const matchedReturn = this.isEdit && this.loadedReturn ? this.loadedReturn.invoiceReturnProducts.find(p => p.productID === invoiceItem.productID) : null
        // On edit, only include products that were saved in this return
        if (this.isEdit && this.loadedReturn && !matchedReturn) continue
        const presetReturnQty = matchedReturn ? matchedReturn.returnQty : (invoiceItem.quantity - invoiceItem.returnQty)
        const maxQty = invoiceItem.quantity - (invoiceItem.returnQty || 0)
        const selectedVatRate = this.findMatchingVatRate(invoiceItem.productTax) || this.form.orderTax || this.taxes?.[0]
        const totalBeforeDiscount = Number((presetReturnQty * invoiceItem.salePrice).toFixed(2))
        let discountAmount = 0
        if ((invoiceItem.discountType || 'fixed') === 'percentage') {
          discountAmount = Number(((totalBeforeDiscount) * (invoiceItem.productDiscount || 0) / 100).toFixed(2))
        } else {
          discountAmount = Number((invoiceItem.productDiscount || 0).toFixed ? (invoiceItem.productDiscount || 0).toFixed(2) : Number(invoiceItem.productDiscount || 0))
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
          returnQty: Math.max(0, Math.min(presetReturnQty, maxQty)),
          totalReturnQty: maxQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          // backend update expects 'purchasePrice' key; mirror avgPurchasePrice
          purchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.salePrice,
          totalPrice: totalPrice,
          returnTotal: totalPrice, // will be recalculated in calculateSum
          productTax: productTax,
          totalTax: invoiceItem.taxTotal || productTax,
          maxQty: maxQty,
          productDiscount: invoiceItem.productDiscount || 0,
          discountType: invoiceItem.discountType || 'fixed',
          discountAmount: discountAmount,
          discount: invoiceItem.productDiscount || 0,
          vatRate: invoiceItem.vatRate,
          selectedVatRate: selectedVatRate,
          totalBeforeDiscount: totalBeforeDiscount,
          totalAfterDiscount: totalAfterDiscount,
          sales_account_id: invoiceItem.sales_account_id,
          purchase_account_id: invoiceItem.purchase_account_id,
          itemType: invoiceItem.itemType || 'product',
        })
      }
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
    // edit loader
    async loadExistingReturn() {
      const { data } = await axios.get(`/api/invoice-returns/${this.$route.params.slug}`)
      this.loadedReturn = data.data
      // set top-level fields
      this.form.returnReason = data.data.reason
      this.form.availableBalance = data.data.account ? data.data.account.availableBalance : 0
      this.form.account = data.data.account
      this.form.receiptNo = data.data.accountPayable ? data.data.accountPayable.receipt_no : ''
      this.form.client = data.data.client
      this.form.date = data.data.returnDate
      this.form.note = data.data.note
      this.form.status = data.data.status
      // fetch invoice full details to reuse create logic design
      const invoiceSlug = data.data.invoice.slug
      const invoiceResp = await axios.get(`/api/invoices/${invoiceSlug}`)
      const invoiceData = invoiceResp.data.data
      this.form.invoice = invoiceData
      // build products with return qty prefilled from invoiceReturnProducts
      this.storeProducts()
    },
    // item updates
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
    // main totals
    calculateSum() {
      const length = this.form.selectedProducts.length
      this.form.newSubTotal = this.form.totalReturn = 0
      let totalProductDiscount = 0
      let invoiceSubtotal = 0
      this.form.netTotal = 0
      this.form.taxAmount = 0
      this.form.discountTotal = 0
      for (let i = 0; i < length; i++) {
        const p = this.form.selectedProducts[i]
        const remainingQty = p.qty - p.returnQty
        const productTotal = remainingQty * p.unitCost
        invoiceSubtotal += productTotal
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
      // invoice-level discount
      let invoiceDiscountAmount = 0
      if (this.form.discountType == 1) {
        invoiceDiscountAmount = Number(((this.form.discountPercentage / 100) * invoiceSubtotal).toFixed(2))
      } else {
        invoiceDiscountAmount = Number(this.form.invoiceDiscount || 0)
      }
      this.form.newSubTotal = Number((invoiceSubtotal - totalProductDiscount - invoiceDiscountAmount).toFixed(2))
      this.form.invoiceDiscount = invoiceDiscountAmount
      const taxableAmount = this.form.newSubTotal
      if (this.form.invoiceTaxRate && this.form.invoiceTaxRate.rate) {
        this.form.newTax = Number(((this.form.invoiceTaxRate.rate / 100) * taxableAmount).toFixed(2))
      } else {
        this.form.newTax = 0
      }
      this.form.invoiceDue = Number((this.form.originalInvoiceTotal - (this.form.invoice?.totalPaid || 0)).toFixed(2))
      this.form.totalDiscount = Number((this.form.totalDiscount).toFixed(2))
      this.form.invoiceTax = Number((this.form.invoice.tax - this.form.taxAmount).toFixed(2))
      if (this.form.invoiceDue >= 0) {
        this.form.newDue = this.form.originalInvoiceTotal - (this.form.invoice?.totalPaid || 0)
        this.form.newDueText = `${this.form.originalInvoiceTotal} - ${this.form.invoice?.totalPaid || 0} = ${Number(this.form.newDue).toFixed(2)}`
        this.form.returnAmount = 0
      } else {
        this.form.returnAmount = Number(((this.form.invoice?.totalPaid || 0) - this.form.originalInvoiceTotal).toFixed(2))
        this.form.returnAmountText = `${this.form.invoice?.totalPaid || 0} - ${this.form.originalInvoiceTotal} = ${this.form.returnAmount}`
        this.form.invoiceDue = 0
        this.form.newDue = 0
      }
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
    // submit
    async onSubmit() {
      if (!this.validateReturns()) return
      if (!this.isSaudiArabia && this.form.returnAmount > 0 && !this.hasBankAccountChartOfAccount) {
        toast.fire({
          type: 'warning',
          title: this.$t('Bank Account Chart of Account Required'),
          text: this.$t('Bank Account must have a Chart of Account assigned for journal entries.'),
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t('Go to Bank Accounts'),
          showCancelButton: true,
          cancelButtonText: this.$t('Close'),
        }).then((result) => { if (result.isConfirmed) this.goToBankAccounts() })
        return
      }
      this.form.totalPaid = this.form.invoice?.totalPaid || 0
      this.form.invoiceTax = this.form.newTax
      this.form.newDue = this.form.invoiceDue
      try {
        if (this.isEdit) {
          await this.form.patch(`/api/invoice-returns/${this.$route.params.slug}`)
          toast.fire({ type: 'success', title: this.$t('Invoice return updated successfully') })
          this.$router.push({ name: 'invoiceReturns.index' })
        } else {
          const { data } = await this.form.post('/api/invoice-returns')
          if (this.isSaudiArabia) {
            toast.fire({ type: 'success', title: this.$t('Credit Note created successfully'), text: this.$t('Credit Note has been created as inactive. You can send it to ZATCA from the invoice returns list.'), timer: 8000, timerProgressBar: true })
          } else {
            toast.fire({ type: 'success', title: this.$t('Invoice return added successfully') })
          }
          this.$router.push({ name: 'invoiceReturns.show', params: { slug: data.data.slug } })
        }
      } catch (e) {
        toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
      }
    },
    validateReturns() {
      let isValid = true
      let errors = []
      if (this.form.totalReturn <= 0) {
        errors.push(this.$t('At least one product must have a return quantity greater than 0'))
        isValid = false
      }
      this.form.selectedProducts.forEach((product) => {
        if (product.returnQty > product.maxQty) {
          errors.push(this.$t('Return quantity for {name} cannot exceed available quantity', { name: product.name }))
          isValid = false
        }
        if (product.returnQty < 0) {
          errors.push(this.$t('Return quantity for {name} cannot be negative', { name: product.name }))
          isValid = false
        }
      })
      if (this.form.newSubTotal < 0) {
        errors.push(this.$t('New subtotal cannot be negative'))
        isValid = false
      }
      if (this.form.invoiceDiscount > this.form.newSubTotal) {
        errors.push(this.$t('Total discount cannot exceed new subtotal'))
        isValid = false
      }
      if (errors.length > 0) {
        if (typeof toast !== 'undefined' && toast.fire) {
          toast.fire({ type: 'error', title: this.$t('Validation Errors'), text: errors[0] })
        }
        if (this.form && this.form.errors && typeof this.form.errors.set === 'function') {
          this.form.errors.set({ selectedProducts: errors })
        }
      }
      return isValid
    },
  },
}
</script>

<style scoped>
.header-buttons { margin-bottom: 15px; }
.footer-buttons { gap: 10px; display: flex; }
.footer-buttons .btn { margin-right: 10px; }
.footer-buttons .btn:last-child { margin-right: 0; }
.table-custom { border: none !important; }
.invoices-create-table { border-collapse: separate; border-spacing: 0; }
.invoices-create-table thead th { background-color: #33a0d9; color: #ffffff; padding: 8px; border: none !important; border-color: inherit !important; font-weight: 400; }
.invoices-create-table thead tr { border: none !important; }
.invoices-create-table thead th:first-child { border-top-left-radius: 10px; }
.invoices-create-table thead th:last-child { border-top-right-radius: 10px; }
[dir="rtl"] .invoices-create-table thead th:first-child { border-top-left-radius: 0; border-top-right-radius: 10px; }
[dir="rtl"] .invoices-create-table thead th:last-child { border-top-right-radius: 0; border-top-left-radius: 10px; }
.btn-group.c-w-100 { gap: 10px; }
.card { margin-top: 30px; border-radius: 20px; box-shadow: 0px 8px 20px 0px #00000014; border: 1px solid #CED4DA }
.card-footer { background-color: white; border-top: 1px solid #CED4DA; padding: 0 1.25rem 0.625rem 1.25rem; border-radius: 0 0 20px 20px; }
.invoices-create-table .badge.badge-info { background: #E3F2FD !important; color: #1976D2 !important; font-size: 12px !important; font-weight: 500 !important; padding: 10px 16px; }
.form-control{ background: #fff !important; }
.btn-primary { background: #2AB930 !important; }
.btn-secondary { background: #33a0d9 !important; color: white !important; padding: 10px 20px !important; border: none !important; }
.quantity-field { border-radius: 0 !important; min-height: 50px !important; margin: 0 !important; }
.account-status { font-size: 0.875rem; }
.account-status .account-warning { color: #856404; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 0.25rem; padding: 0.5rem; display: flex; align-items: center; }
.account-status .account-success { color: #155724; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 0.25rem; padding: 0.5rem; display: flex; align-items: center; }
</style>

