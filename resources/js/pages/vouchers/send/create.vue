<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'sendVouchers.index' }" class="btn btn-info">
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
                <button type="submit" class="btn btn-success" :form="'sendVoucherCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="sendVoucherCreateForm" role="form" @submit.prevent="saveVoucher" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <!-- Entity Type Selection -->
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="entityType">{{ $t('Entity Type') }}<span class="required">*</span></label>
                  <select id="entityType" v-model="form.entityType" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('entityType') }" @change="onEntityTypeChange">
                    <option value="">{{ $t('Select Entity Type') }}</option>
                    <option value="client">{{ $t('Client') }}</option>
                    <option value="supplier">{{ $t('Supplier') }}</option>
                    <option value="chart_of_account">{{ $t('Chart of Account') }}</option>
                  </select>
                  <has-error :form="form" field="entityType" />
                </div>
              </div>

              <!-- Client Selection -->
              <div class="row" v-if="form && form.entityType === 'client' && clients">
                <div class="form-group col-md-12">
                  <label for="client">{{ $t('Client') }}<span class="required">*</span></label>
                  <v-select v-model="form.client" :options="clients" label="name"
                    :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                    :placeholder="$t('Select a client')" @input="onClientChange" />
                  <has-error :form="form" field="client" />
                  <!-- Client Chart of Account Status -->
                  <div class="client-status mt-2" v-if="form.client">
                    <div v-if="!form.client.chart_of_account_id" class="client-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Client needs Chart of Account') }}</span>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="autoAssignClientChartOfAccount"
                        :disabled="isAutoAssigningClient"
                      >
                        <i :class="isAutoAssigningClient ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                        {{ isAutoAssigningClient ? $t('Assigning...') : $t('Auto-Assign') }}
                      </button>
                    </div>
                    <div v-else class="client-success">
                      <i class="fas fa-check-circle text-success"></i>
                      <span class="ml-2">{{ $t('Client Chart of Account ready') }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Supplier Selection -->
              <div class="row" v-if="form && form.entityType === 'supplier' && suppliers">
                <div class="form-group col-md-12">
                  <label for="supplier">{{ $t('Supplier') }}<span class="required">*</span></label>
                  <v-select v-model="form.supplier" :options="suppliers" label="name"
                    :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier"
                    :placeholder="$t('Select a supplier')" @input="onSupplierChange" />
                  <has-error :form="form" field="supplier" />
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
                </div>
              </div>

              <!-- Chart of Account Selection -->
              <div class="row" v-if="form && form.entityType === 'chart_of_account' && chartOfAccounts">
                <div class="form-group col-md-12">
                  <label for="chartOfAccount">{{ $t('Chart of Account') }}<span class="required">*</span></label>
                  <v-select v-model="form.chartOfAccount" :options="chartOfAccounts" label="name"
                    :class="{ 'is-invalid': form.errors.has('chartOfAccount') }" name="chartOfAccount"
                    :placeholder="$t('Select a chart of account')" />
                  <has-error :form="form" field="chartOfAccount" />
                </div>
              </div>

              <!-- Payment Method Selection -->
              <div class="row" v-if="form && form.entityType && (form.client || form.supplier || form.chartOfAccount)">
                <div class="form-group col-md-6">
                  <label for="paymentMethod">{{ $t('Payment Method') }}</label>
                  <select id="paymentMethod" v-model="form.payment_method_id" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('payment_method_id') }"
                    :disabled="loadingPaymentMethods" name="payment_method_id" @change="onPaymentMethodChange">
                    <option value="">{{ loadingPaymentMethods ? $t("Loading...") : $t("Select") }}</option>
                    <option v-if="!loadingPaymentMethods && paymentMethods.length === 0" value="" disabled>
                      {{ $t("No payment methods available") }}
                    </option>
                    <option v-for="method in paymentMethods" :key="method.id" :value="method.id">
                      {{ method.name }}
                    </option>
                  </select>
                  <small v-if="loadingPaymentMethods" class="form-text text-muted">
                    {{ $t("Loading payment methods...") }}
                  </small>
                  <has-error :form="form" field="payment_method_id" />
                </div>
                <div class="form-group col-md-6" v-if="selectedPaymentMethodAnalyticalAccount">
                  <label for="analyticalAccount">{{ $t("Analytical Account") }}</label>
                  <input type="text" class="form-control" readonly
                    :value="selectedPaymentMethodAnalyticalAccount.name || '-'" />
                  <small class="form-text text-muted">
                    {{ $t("Automatically set based on payment method") }}
                  </small>
                </div>
              </div>

              <!-- Purchase Selection (for supplier purchase payments) -->
              <div class="row" v-if="form && form.entityType === 'supplier' && purchases">
                <div class="form-group col-md-12">
                  <label for="purchase">{{ $t('Select Purchase') }}<span class="required">*</span></label>
                  <v-select v-model="form.purchase" :options="purchases" label="label"
                    :class="{ 'is-invalid': form.errors.has('purchase') }" name="purchase"
                    :placeholder="$t('Select a purchase')" />
                  <has-error :form="form" field="purchase" />
                  
                  <!-- Purchase Details -->
                  <div v-if="form.purchase && form.purchase.purchaseTotal !== undefined" class="purchase-details mt-3 p-3 bg-light rounded">
                    <h6 class="mb-3">{{ $t('Purchase Details') }}</h6>
                    <div class="row">
                      <div class="col-md-6">
                        <table class="table table-sm table-bordered mb-0">
                          <tr>
                            <th class="w-50">{{ $t('Sub Total') }}:</th>
                            <td>{{ formatNumber(form.purchase.subTotal) }} <span class="saudi-riyal">ê</span></td>
                          </tr>
                          <tr v-if="form.purchase.totalDiscount > 0">
                            <th>{{ $t('Discount') }}:</th>
                            <td>- {{ formatNumber(form.purchase.totalDiscount) }} <span class="saudi-riyal">ê</span></td>
                          </tr>
                          <tr v-if="form.purchase.transport > 0">
                            <th>{{ $t('Transport') }}:</th>
                            <td>+ {{ formatNumber(form.purchase.transport) }} <span class="saudi-riyal">ê</span></td>
                          </tr>
                          <tr v-if="form.purchase.tax > 0">
                            <th>{{ $t('Tax') }} <span v-if="form.purchase.taxRate">({{ form.purchase.taxRate }}%)</span>:</th>
                            <td>+ {{ formatNumber(form.purchase.tax) }} <span class="saudi-riyal">ê</span></td>
                          </tr>
                          <tr class="bg-indigo-light">
                            <th><strong>{{ $t('Total') }}:</strong></th>
                            <td><strong>{{ formatNumber(form.purchase.purchaseTotal) }} <span class="saudi-riyal">ê</span></strong></td>
                          </tr>
                        </table>
                      </div>
                      <div class="col-md-6">
                        <table class="table table-sm table-bordered mb-0">
                          <tr>
                            <th class="w-50">{{ $t('Total Paid') }}:</th>
                            <td>{{ formatNumber(form.purchase.totalPaid) }} <span class="saudi-riyal">ê</span></td>
                          </tr>
                          <tr class="bg-red-light">
                            <th><strong>{{ $t('Due') }}:</strong></th>
                            <td><strong>{{ formatNumber(form.purchase.due) }} <span class="saudi-riyal">ê</span></strong></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Account Selection -->
              <div class="row" v-if="accounts">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t('Account') }}<span class="required">*</span></label>
                  <div class="d-flex w-100">
                    <v-select v-model="form.account" :options="accounts" label="label"
                      :class="{ 
                        'is-invalid': form.errors.has('account'),
                        'account-select': true
                      }" name="account"
                      :placeholder="$t('Select an account')" @input="updateBalance" class="flex-grow-1">
                      <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                      </template>
                    </v-select>
                    <AccountCreateModal @accountCreated="handleAccountCreated">
                      <div class="input-group-text create-btn">
                        <i class="fas fa-solid fa-plus-circle"></i>
                      </div>
                    </AccountCreateModal>
                  </div>
                  <has-error :form="form" field="account" />
                  <!-- Account Balance Display -->
                  <div v-if="form.account && form.account.availableBalance !== undefined" class="account-balance mt-2">
                    <small class="text-muted">
                      <strong>{{ $t('Available Balance') }}:</strong> 
                      <span class="text-primary">{{ formatNumber(form.account.availableBalance) }} <span class="saudi-riyal">ê</span></span>
                    </small>
                  </div>
                </div>
                <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div>
                <div class="form-group col-md-3">
                  <label for="receiptNo">{{ $t('Receipt No') }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter receipt number')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>

              <!-- Amount, Date, Status -->
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="amount">{{ $t('Amount') }}<span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" min="1"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="amount" />
                </div>
                <div class="form-group col-md-4">
                  <label for="date">{{ $t('Date') }}<span class="required">*</span></label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-4">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>

              <!-- Note -->
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" class="btn btn-success">
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
import AccountCreateModal from '~/components/AccountCreateModal'

export default {
  middleware: ['auth', 'check-permissions'],
  components: {
    AccountCreateModal,
  },
  metaInfo() {
    return { title: this.$t('Create Send Voucher') }
  },
  data() {
    return {
      breadcrumbsCurrent: this.$t('Create'),
      breadcrumbs: [
        {
          name: this.$t('Dashboard'),
          url: 'home',
        },
        {
          name: this.$t('Vouchers'),
          url: '',
        },
        {
          name: this.$t('Send Vouchers'),
          url: 'sendVouchers.index',
        },
        {
          name: this.$t('Create'),
          active: true,
        },
      ],
      form: new Form({
        voucherType: 0, // Send voucher
        entityType: '',
        client: '',
        supplier: '',
        chartOfAccount: '',
        paymentMethod: 'direct', // Keep for backward compatibility
        payment_method_id: null,
        invoice: '',
        purchase: '',
        account: '',
        amount: '',
        date: new Date().toISOString().slice(0, 10),
        chequeNo: '',
        receiptNo: '',
        note: '',
        status: 1,
      }),
      clients: '',
      suppliers: '',
      chartOfAccounts: '',
      invoices: '',
      purchases: '',
      accounts: '',
      isAutoAssigningClient: false,
      isAutoAssigningSupplier: false,
      paymentMethods: [],
      loadingPaymentMethods: false,
    }
  },
  computed: {
    ...mapGetters('operations', ['appInfo']),
    // Get analytical account for selected payment method
    selectedPaymentMethodAnalyticalAccount() {
      if (!this.form.payment_method_id || !this.paymentMethods || this.paymentMethods.length === 0) {
        return null;
      }
      const selectedMethod = this.paymentMethods.find(method => method.id == this.form.payment_method_id);
      if (selectedMethod && selectedMethod.analytical_account) {
        return selectedMethod.analytical_account;
      }
      return null;
    },
  },
  created() {
    this.getAccounts()
    this.getPaymentMethods()
  },
  mounted() {
    this.handleQueryParams()
  },
  methods: {
    // Handle query parameters from purchase pages
    async handleQueryParams() {
      const query = this.$route.query
      
      // If purchase and supplier are provided, auto-fill the form
      if (query.purchase && query.supplier) {
        // Set entity type to supplier
        this.form.entityType = 'supplier'
        
        // Get suppliers first
        await this.getSuppliers()
        
        // Find and set the supplier
        const supplier = this.suppliers.find(s => s.slug === query.supplier)
        if (supplier) {
          this.form.supplier = supplier
          // Set payment method to purchase (for backward compatibility)
          this.form.paymentMethod = 'purchase'
          
          // Get purchases for this supplier
          await this.getPurchases()
          
          // Find and set the purchase
          if (this.purchases && this.purchases.length > 0) {
            const purchase = this.purchases.find(p => p.slug === query.purchase)
            if (purchase) {
              this.form.purchase = purchase
            }
          }
        }
      }
    },
    // Get clients
    async getClients() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/clients-for-noninvoice-payments',
      })
      this.clients = this.$store.getters['operations/items'] || []
    },

    // Get suppliers
    async getSuppliers() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/suppliers-for-nonpurchase-payments',
      })
      this.suppliers = this.$store.getters['operations/items'] || []
    },

    // Get chart of accounts
    async getChartOfAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/chart-of-accounts/all'
      )
      this.chartOfAccounts = (data.data || data || []).map(account => ({
        id: account.id,
        name: account.name,
        code: account.code,
      }))
    },

    // Get invoices for selected client
    async getInvoices() {
      if (this.form.client && this.form.client.slug) {
        try {
          const { data } = await axios.get(
            window.location.origin + '/api/client/' + this.form.client.slug + '/invoices'
          )
          this.invoices = (data.invoices || []).map(invoice => ({
            id: invoice.id,
            slug: invoice.slug,
            label: invoice.label || `${invoice.invoiceNo} - Due: ${invoice.due}`,
            invoiceNo: invoice.invoiceNo,
            due: invoice.due,
            // Store all invoice details for display
            invoiceTotal: invoice.invoiceTotal,
            totalPaid: invoice.totalPaid,
            subTotal: invoice.subTotal,
            baseSubTotal: invoice.baseSubTotal, // Base subtotal (sum of product prices)
            discount: invoice.discount,
            transport: invoice.transport,
            tax: invoice.tax,
            taxRate: invoice.taxRate,
            totalInvoiceReturn: invoice.totalInvoiceReturn || 0,
          }))
        } catch (error) {
          this.invoices = []
        }
      }
    },

    // Get purchases for selected supplier
    async getPurchases() {
      if (this.form.supplier && this.form.supplier.slug) {
        try {
          const { data } = await axios.get(
            window.location.origin + '/api/supplier/' + this.form.supplier.slug + '/purchases'
          )
          this.purchases = (data.purchases || data || []).map(purchase => ({
            id: purchase.id,
            slug: purchase.slug,
            label: purchase.purchaseNo || `${purchase.code} - Due: ${purchase.due}`,
            purchaseNo: purchase.purchaseNo || purchase.code,
            due: purchase.due,
            // Store all purchase details for display
            purchaseTotal: purchase.purchaseTotal,
            totalPaid: purchase.totalPaid,
            subTotal: purchase.subTotal,
            totalDiscount: purchase.totalDiscount,
            transport: purchase.transport,
            tax: purchase.tax,
            taxRate: purchase.taxRate,
          }))
        } catch (error) {
          this.purchases = []
        }
      }
    },

    // Get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = (data.data || data || []).map(account => ({
        id: account.id,
        label: account.label || `${account.bankName} [${account.accountNumber}]`,
        bankName: account.bankName,
        accountNumber: account.accountNumber,
        availableBalance: account.availableBalance || 0,
        image: account.image || null,
      }))
    },

    // Update balance when account changes
    updateBalance() {
      // Balance is automatically displayed via v-model binding
      // This method can be used for additional logic if needed
    },

    // Handle account created event from AccountCreateModal
    async handleAccountCreated(newAccount) {
      // Refresh accounts list
      await this.getAccounts()
      
      // Find and select the newly created account
      // Try to find by ID first, then by account number as fallback
      let account = this.accounts.find(acc => acc.id === newAccount.id)
      
      // If not found by ID, try to find by account number
      if (!account && newAccount.accountNumber) {
        account = this.accounts.find(acc => acc.accountNumber === newAccount.accountNumber)
      }
      
      // If still not found, use the newAccount data directly (format it properly)
      if (!account && newAccount) {
        account = {
          id: newAccount.id,
          label: newAccount.label || `${newAccount.bankName} [${newAccount.accountNumber}]`,
          bankName: newAccount.bankName,
          accountNumber: newAccount.accountNumber,
          availableBalance: newAccount.availableBalance || 0,
          image: newAccount.image || null,
        }
        // Add it to the accounts list if not already there
        this.accounts.push(account)
      }
      
      if (account) {
        // Use $nextTick to ensure Vue updates the form
        this.$nextTick(() => {
          this.form.account = account
          this.updateBalance()
        })
      }
    },

    // Handle entity type change
    onEntityTypeChange() {
      this.form.client = ''
      this.form.supplier = ''
      this.form.chartOfAccount = ''
      this.form.invoice = ''
      this.form.purchase = ''
      this.invoices = ''
      this.purchases = ''

      if (this.form.entityType === 'client') {
        this.getClients()
      } else if (this.form.entityType === 'supplier') {
        this.getSuppliers()
      } else if (this.form.entityType === 'chart_of_account') {
        this.getChartOfAccounts()
      }
    },

    // Handle client change
    onClientChange() {
      // Send vouchers don't support invoices
      this.form.invoice = ''
      this.invoices = ''
    },

    // Handle supplier change
    onSupplierChange() {
      // Show purchases when supplier is selected (for purchase payment type)
      if (this.form.entityType === 'supplier') {
        this.getPurchases()
      }
    },

    // Handle payment method change
    onPaymentMethodChange() {
      this.form.invoice = ''
      this.form.purchase = ''
      this.invoices = ''
      this.purchases = ''

      // If supplier is selected, show purchases (for purchase payment type)
      if (this.form.entityType === 'supplier' && this.form.supplier) {
        this.getPurchases()
      }
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

    // Auto-assign Chart of Account for selected client
    async autoAssignClientChartOfAccount() {
      if (!this.form.client || !this.form.client.slug || this.isAutoAssigningClient) {
        return
      }
      
      this.isAutoAssigningClient = true
      
      try {
        const currentClientSlug = this.form.client.slug
        const response = await axios.post(`/api/clients/${this.form.client.slug}/auto-assign-chart-of-account`)
        
        if (response.data.success) {
          const newAccountId = response.data.chart_of_account_id || (response.data.data && response.data.data.chart_of_account_id) || null
          if (newAccountId) {
            this.form.client.chart_of_account_id = newAccountId
            const idx = (this.clients || []).findIndex(i => i.slug === currentClientSlug)
            if (idx !== -1) {
              this.$set(this.clients[idx], 'chart_of_account_id', newAccountId)
            }
          }
          
          this.$nextTick(() => {
            this.$forceUpdate()
          })
          
          toast.fire({
            type: 'success',
            title: this.$t('Chart of Account assigned successfully'),
          })
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: response.data.message || this.$t('Please try again or assign manually')
          })
        }
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error)
        if (error.response?.status === 400) {
          toast.fire({
            type: 'error',
            title: this.$t('Invalid Request'),
            text: error.response?.data?.message || this.$t('Please check the client data and try again')
          })
        } else if (error.response?.status === 403 || error.response?.status === 401) {
          toast.fire({
            type: 'error',
            title: this.$t('Permission Denied'),
            text: this.$t("You don't have permission to assign Chart of Accounts.")
          })
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: error.response?.data?.message || error.message || this.$t('An error occurred. Please try again.')
          })
        }
      } finally {
        this.isAutoAssigningClient = false
      }
    },

    // Auto-assign Chart of Account for selected supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form.supplier || !this.form.supplier.slug || this.isAutoAssigningSupplier) {
        return
      }
      
      this.isAutoAssigningSupplier = true
      
      try {
        const currentSupplierSlug = this.form.supplier.slug
        const response = await axios.post(`/api/suppliers/${this.form.supplier.slug}/auto-assign-chart-of-account`)
        
        if (response.data.success) {
          const newAccountId = response.data.chart_of_account_id || (response.data.data && response.data.data.chart_of_account_id) || null
          if (newAccountId) {
            this.form.supplier.chart_of_account_id = newAccountId
            const idx = (this.suppliers || []).findIndex(i => i.slug === currentSupplierSlug)
            if (idx !== -1) {
              this.$set(this.suppliers[idx], 'chart_of_account_id', newAccountId)
            }
          }
          
          this.$nextTick(() => {
            this.$forceUpdate()
          })
          
          toast.fire({
            type: 'success',
            title: this.$t('Chart of Account assigned successfully'),
          })
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: response.data.message || this.$t('Please try again or assign manually')
          })
        }
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error)
        if (error.response?.status === 400) {
          toast.fire({
            type: 'error',
            title: this.$t('Invalid Request'),
            text: error.response?.data?.message || this.$t('Please check the supplier data and try again')
          })
        } else if (error.response?.status === 403 || error.response?.status === 401) {
          toast.fire({
            type: 'error',
            title: this.$t('Permission Denied'),
            text: this.$t("You don't have permission to assign Chart of Accounts.")
          })
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: error.response?.data?.message || error.message || this.$t('An error occurred. Please try again.')
          })
        }
      } finally {
        this.isAutoAssigningSupplier = false
      }
    },

    // Format number for display
    formatNumber(number) {
      if (number !== null && number !== undefined) {
        return Number(number).toLocaleString('en-US', { 
          minimumFractionDigits: 2, 
          maximumFractionDigits: 2 
        })
      }
      return '0.00'
    },

    // translate validation messages from backend to localized messages
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message)
      if (direct && direct !== message) return direct

      // Get current locale
      const currentLocale = this.$i18n.locale || 'en'
      const isArabic = currentLocale === 'ar'

      // Field label mapping for voucher send form fields
      const fieldLabelMap = {
        'entityType': this.$t('Entity Type'),
        'entity type': this.$t('Entity Type'),
        'entity_type': this.$t('Entity Type'),
        'client': this.$t('Client'),
        'supplier': this.$t('Supplier'),
        'chartOfAccount': this.$t('Chart of Account'),
        'chart of account': this.$t('Chart of Account'),
        'chart_of_account': this.$t('Chart of Account'),
        'paymentMethod': this.$t('Payment Method'),
        'payment method': this.$t('Payment Method'),
        'payment_method': this.$t('Payment Method'),
        'purchase': this.$t('Select Purchase'),
        'account': this.$t('Account'),
        'amount': this.$t('Amount'),
        'date': this.$t('Date'),
        'chequeNo': this.$t('Cheque No'),
        'cheque no': this.$t('Cheque No'),
        'cheque_no': this.$t('Cheque No'),
        'receiptNo': this.$t('Receipt No'),
        'receipt no': this.$t('Receipt No'),
        'receipt_no': this.$t('Receipt No'),
        'note': this.$t('Note'),
        'status': this.$t('Status'),
      }
      const fieldLabel = fieldLabelMap[field] || fieldLabelMap[field?.toLowerCase()] || field

      // Handle mixed language messages from backend (Arabic + English)
      // Pattern: "حقل [field] مطلوب" -> "Field is required"
      const mixedLanguagePatterns = [
        // Arabic "حقل" + English field + Arabic "مطلوب"
        { 
          re: /حقل\s+([^م]+?)\s+مطلوب/i, 
          en: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `${fieldTranslation} is required`
          },
          ar: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `${fieldTranslation} مطلوب`
          }
        },
        // Arabic "يرجى اختيار" + English field
        { 
          re: /يرجى\s+اختيار\s+([^.]+)/i, 
          en: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `Please select ${fieldTranslation}`
          },
          ar: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `يرجى اختيار ${fieldTranslation}`
          }
        },
        // Arabic "يرجى إدخال" + English field
        { 
          re: /يرجى\s+إدخال\s+([^.]+)/i, 
          en: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `Please enter ${fieldTranslation}`
          },
          ar: (_, fieldName) => {
            const cleanFieldName = fieldName.trim()
            const fieldTranslation = fieldLabelMap[cleanFieldName] || 
                                    fieldLabelMap[cleanFieldName.toLowerCase()] || 
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '')] ||
                                    fieldLabelMap[cleanFieldName.replace(/\s+/g, '_')] ||
                                    cleanFieldName
            return `يرجى إدخال ${fieldTranslation}`
          }
        }
      ]

      // Check mixed language patterns first
      for (const { re, en, ar } of mixedLanguagePatterns) {
        const match = message.match(re)
        if (match) {
          const text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en)(...match) : (isArabic ? ar : en)
          return text
        }
      }

      // Additional pattern for "حقل [field] مطلوب" format
      if (message.includes('حقل') && message.includes('مطلوب')) {
        const fieldMatch = message.match(/حقل\s+([^م]+?)\s+مطلوب/i)
        if (fieldMatch) {
          const fieldName = fieldMatch[1].trim()
          let fieldTranslation = fieldLabelMap[fieldName] || 
                                fieldLabelMap[fieldName.toLowerCase()] || 
                                fieldLabelMap[fieldName.replace(/\s+/g, '')] ||
                                fieldLabelMap[fieldName.replace(/\s+/g, '_')] ||
                                fieldName
          return isArabic ? `${fieldTranslation} مطلوب` : `${fieldTranslation} is required`
        }
      }

      // Handle "يرجى اختيار" patterns
      if (message.includes('يرجى اختيار')) {
        const fieldMatch = message.match(/يرجى\s+اختيار\s+([^.]+)/i)
        if (fieldMatch) {
          const fieldName = fieldMatch[1].trim()
          let fieldTranslation = fieldLabelMap[fieldName] || 
                                fieldLabelMap[fieldName.toLowerCase()] || 
                                fieldLabelMap[fieldName.replace(/\s+/g, '')] ||
                                fieldLabelMap[fieldName.replace(/\s+/g, '_')] ||
                                fieldName
          return isArabic ? `يرجى اختيار ${fieldTranslation}` : `Please select ${fieldTranslation}`
        }
      }

      // Common Laravel validation patterns with localized messages
      const patterns = [
        // Required field patterns
        { 
          re: /The\s+.+?\s+field\s+is\s+required\.?/i, 
          en: `${fieldLabel} is required`,
          ar: `${fieldLabel} مطلوب`
        },
        { 
          re: /Please\s+select\s+an?\s+.+?\.?/i, 
          en: `Please select ${fieldLabel}`,
          ar: `يرجى اختيار ${fieldLabel}`
        },
        { 
          re: /Please\s+enter\s+a\s+.+?\.?/i, 
          en: `Please enter ${fieldLabel}`,
          ar: `يرجى إدخال ${fieldLabel}`
        },
        { 
          re: /Please\s+provide\s+a\s+.+?\.?/i, 
          en: `Please provide ${fieldLabel}`,
          ar: `يرجى تقديم ${fieldLabel}`
        },
      ]

      // Check standard Laravel patterns
      for (const { re, en, ar } of patterns) {
        if (re.test(message)) {
          return isArabic ? ar : en
        }
      }

      // Fallback: return the message with translation attempt
      return this.$t(message) !== message ? this.$t(message) : message
    },

    // Save voucher
    async saveVoucher() {
      await this.form
        .post(window.location.origin + '/api/vouchers')
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Voucher created successfully'),
          })
          this.$router.push({ name: 'sendVouchers.index' })
        })
        .catch((error) => {
          // Handle validation errors
          if (error?.response?.status === 422 && error?.response?.data?.errors) {
            // Translate validation errors
            const translatedErrors = {}
            Object.keys(error.response.data.errors).forEach(field => {
              translatedErrors[field] = error.response.data.errors[field].map(message => {
                // Use translateValidationMessage to handle mixed language messages
                return this.translateValidationMessage(message, field)
              })
            })
            
            // Set the translated errors back to the form
            this.form.errors.set(translatedErrors)
            
            // Show a general validation error message
            toast.fire({ 
              type: 'error', 
              title: this.$t('Please check your input and try again.') 
            })
          } else {
            // Handle other errors
            const backendMessage = error?.response?.data?.message || 
                                  error?.response?.data?.error || 
                                  error?.message
            
            // Try to translate the error message
            const translatedMessage = backendMessage ? this.translateValidationMessage(backendMessage, '') : null
            
            toast.fire({ 
              type: 'error', 
              title: translatedMessage || this.$t('Please check your input and try again.'),
              text: backendMessage && translatedMessage !== backendMessage ? backendMessage : undefined
            })
          }
        })
    },
  },
}
</script>

<style scoped>
.client-status, .supplier-status {
  font-size: 13px;
}

.client-warning,
.client-success,
.supplier-warning {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.client-warning,
.supplier-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.client-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Account create button styling */
.create-btn {
  background-color: #33a0d9;
  color: white;
  border: 1px solid #33a0d9;
  border-left: none;
  border-radius: 0 10px 10px 0;
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.create-btn:hover {
  background-color: #2a8bc4;
  border-color: #2a8bc4;
}

.create-btn i {
  font-size: 18px;
}

.account-select {
  border-radius: 10px 0 0 10px;
}

[dir="rtl"] .create-btn {
  border-left: 1px solid #33a0d9;
  border-right: none;
  border-radius: 10px 0 0 10px;
}

[dir="rtl"] .account-select {
  border-radius: 0 10px 10px 0;
}
</style>
