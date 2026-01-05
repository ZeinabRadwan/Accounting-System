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
                <router-link :to="{ name: 'nonPurchasePayments.index' }" class="btn btn-info">
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
                <button type="submit" class="btn btn-success" :form="'supplierNonPurchasePaymentCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="supplierNonPurchasePaymentCreateForm" role="form" @submit.prevent="savePayment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="supplier">{{ $t('Supplier')
                  }}<span class="required">*</span></label>
                  <v-select v-model="form.supplier" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier"
                    :placeholder="$t('Select a supplier')" @input="calculateValues" />
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
                <div class="form-group col-md-6">
                  <label for="type">{{ $t('Type') }}
                    <span class="required">*</span></label>
                  <select id="type" v-model="form.type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('type') }" @change="updateMax">
                    <option value="1">
                      {{ $t('Payment Sent') }}
                    </option>
                    <option value="0">
                      {{ $t('Payment Received') }}
                    </option>
                  </select>
                  <has-error :form="form" field="type" />
                </div>
              </div>
              <div v-if="form.supplier" class="row">
                <div class="form-group col-md-4">
                  <label for="nonPurchaseTotal">{{
                    $t('Non Purchase Total')
                  }}</label>
                  <input id="nonPurchaseTotal" v-model="form.nonPurchaseTotal" type="number" step="any"
                    class="form-control" name="nonPurchaseTotal" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="nonPurchasePaid">{{
                    $t('Non Purchase Paid')
                  }}</label>
                  <input id="nonPurchasePaid" v-model="form.nonPurchasePaid" type="number" step="any" class="form-control"
                    name="nonPurchasePaid" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="currentDue">{{
                    $t('Current Due')
                  }}</label>
                  <input id="nonPurchaseDue" v-model="form.nonPurchaseDue" type="number" step="any" class="form-control"
                    name="nonPurchaseDue" readonly />
                </div>
              </div>
              <div class="row" v-if="accounts">
                <div class="form-group col-md-6">
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
                <div class="form-group col-md-6">
                  <label for="availableBalance">{{
                    $t('Available Balance')
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="text" step="any" class="form-control"
                    :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <!-- <div class="form-group col-md-6">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div> -->
                <div class="form-group col-md-6">
                  <label for="receiptNo">{{ $t('Receipt No') }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="paymentMethod">{{ $t("Payment Method") }}</label>
                  <select id="paymentMethod" v-model="form.payment_method_id" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('payment_method_id') }"
                    :disabled="loadingPaymentMethods" name="payment_method_id">
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
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="amount">{{ $t('Amount') }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" min="1"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('Enter an amount')" @change="updateValues" @keyup="updateValues" />
                  <has-error :form="form" field="amount" />
                </div>
                <div class="form-group col-md-4">
                  <label for="paymentDate">{{
                    $t('Payment Date')
                  }}</label>
                  <input id="paymentDate" v-model="form.paymentDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentDate') }" name="paymentDate" />
                  <has-error :form="form" field="paymentDate" />
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return {
      title: this.$t('Create Non Purchase Payment'),
    }
  },
  data: () => ({
    breadcrumbsCurrent:
      'Create Payment',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Payments',
        url: '',
      },
      {
        name: 'Non Purchase Payments',
        url: 'nonPurchasePayments.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      supplier: '',
      type: 0,
      account: '',
      amount: '',
      chequeNo: '',
      receiptNo: '',
      nonPurchaseTotal: 0,
      nonPurchasePaid: 0,
      nonPurchaseDue: 0,
      availableBalance: 0,
      paymentDate: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      payment_method_id: null,
    }),
    accounts: '',
    isAutoAssigningSupplier: false,
    paymentMethods: [],
    loadingPaymentMethods: false,
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
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
    this.getSuppliers()
    this.getAccounts()
    this.getPaymentMethods()
  },
  methods: {
    // get all suppliers
    async getSuppliers() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/suppliers-for-nonpurchase-payments',
      })
    },

    // Auto-assign Chart of Account for selected supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form.supplier || !this.form.supplier.slug || this.isAutoAssigningSupplier) {
        return
      }
      
      this.isAutoAssigningSupplier = true
      
      try {
        // Store the current supplier slug before making the API call
        const currentSupplierSlug = this.form.supplier.slug
        
        const response = await axios.post(`/api/suppliers/${this.form.supplier.slug}/auto-assign-chart-of-account`)
        
        if (response.data.success) {
          // Update the supplier data with new chart of account
          const newAccountId = response.data.chart_of_account_id || (response.data.data && response.data.data.chart_of_account_id) || null
          if (newAccountId) {
            this.form.supplier.chart_of_account_id = newAccountId
            // Also update the option in items list to keep state consistent when switching suppliers
            const idx = (this.items || []).findIndex(i => i.slug === currentSupplierSlug)
            if (idx !== -1) {
              this.$set(this.items[idx], 'chart_of_account_id', newAccountId)
            }
          }
          
          // Force Vue to re-render the component to update the UI
          this.$nextTick(() => {
            this.$forceUpdate()
          })
          
          // Show success message
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
        // eslint-disable-next-line no-console
        console.error('Error auto-assigning chart of account:', error)
        
        // Handle different types of errors
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

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = data.data
      // assign default account
      if (this.accounts && this.accounts.length > 0) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.form.account = this.accounts.find(account => account.slug == defaultAccountSlug);
        this.updateBalance()
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

    // update available balance
    updateBalance() {
      this.form.availableBalance = 0
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance
      }
    },

    // calculate values
    calculateValues() {
      if (this.form.supplier) {
        this.form.nonPurchaseTotal = this.form.supplier.nonPurchaseTotalDue
        this.form.nonPurchasePaid = this.form.supplier.nonPurchasePaid
        this.form.nonPurchaseDue = this.form.supplier.nonPurchaseCurrentDue
      }
      return
    },

    // update values
    updateValues() {
      let amount = Number(this.form.amount)
      if (this.form.supplier) {
        if (this.form.type == 1) {
          this.form.nonPurchasePaid = Number(this.form.supplier.nonPurchasePaid) + amount
          this.form.nonPurchaseDue = Number(this.form.supplier.nonPurchaseCurrentDue) - amount
        } else if (this.form.type == 0) {
          this.form.nonPurchasePaid = Math.max(0, Number(this.form.supplier.nonPurchasePaid) - amount)
          this.form.nonPurchaseDue = Number(this.form.supplier.nonPurchaseCurrentDue) + amount
        }
      }
      return
    },

    // save payment
    async savePayment() {
      await this.form
        .post(window.location.origin + '/api/payments/non-purchase')
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t(
              'Payment added successfully'
            ),
          })
          this.$router.push({ name: 'nonPurchasePayments.index' })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
        })
    },
  },
}
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
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
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB !important;
  padding: 10px 16px !important;
}

.v-select .vs__dropdown-toggle:focus {
  border-color: #33a0d9 !important;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25) !important;
}

.v-select.is-invalid .vs__dropdown-toggle {
  border-color: #DC3545 !important;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
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
}

.supplier-status {
  font-size: 13px;
}

.supplier-warning {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}
</style>
