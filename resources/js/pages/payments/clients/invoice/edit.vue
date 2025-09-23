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
                <router-link :to="{ name: 'invoicePayments.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updatePayment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="form.invoice">
                <div class="form-group col-md-4">
                  <label for="invoice">{{ $t('Invoice No')
                  }}<span class="required">*</span></label>
                  <input id="invoice" v-model="form.invoice.invoiceLabel" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('invoice') }" name="invoice" readonly />
                  <has-error :form="form" field="invoice" />
                </div>
                <div class="form-group col-md-4">
                  <label for="invoice.invoiceTotal">{{
                    $t('Invoice Total')
                  }}</label>
                  <input id="invoice.invoiceTotal" v-model="form.invoiceTotal" type="text" step="any" class="form-control"
                    :class="{
                      'is-invalid': form.errors.has('invoice.invoiceTotal'),
                    }" name="invoice.invoiceTotal" readonly />
                  <has-error :form="form" field="invoice.invoiceTotal" />
                </div>
                <div class="form-group col-md-4">
                  <label for="dueAmount">{{ $t('Total Due') }}</label>
                  <input id="dueAmount" v-model="form.dueAmount" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('dueAmount') }" name="dueAmount" readonly />
                  <has-error :form="form" field="dueAmount" />
                </div>
              </div>

              <div class="row" v-if="accounts">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t('Account') }}
                    <span class="required">*</span>
                    <small v-if="isPaymentActive" class="text-muted ml-2">({{ $t('Cannot be changed when payment is active') }})</small>
                  </label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')" :disabled="isPaymentActive">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" :disabled="isPaymentActive" />
                  <has-error :form="form" field="chequeNo" />
                </div>
                <div class="form-group col-md-3">
                  <label for="receiptNo">{{ $t('Receipt No') }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" :disabled="isPaymentActive" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="paidAmount">{{ $t('Paid Amount') }}
                    <span class="required">*</span>
                    <small v-if="isPaymentActive" class="text-muted ml-2">({{ $t('Cannot be changed when payment is active') }})</small>
                  </label>
                  <input id="paidAmount" v-model="form.paidAmount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paidAmount') }" name="paidAmount" :max="form.maxAmount"
                    :min="form.minAmount" :placeholder="$t('Enter an amount')" @change="calculateDue"
                    @keyup="calculateDue" :disabled="isPaymentActive" />
                  <has-error :form="form" field="paidAmount" />
                </div>
                <div class="form-group col-md-4">
                  <label for="paymentDate">{{
                    $t('Payment Date')
                  }}
                    <small v-if="isPaymentActive" class="text-info ml-2">({{ $t('Only editable field when payment is active') }})</small>
                  </label>
                  <input id="paymentDate" v-model="form.paymentDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentDate') }" name="paymentDate" />
                  <has-error :form="form" field="paymentDate" />
                </div>
                <div class="form-group col-md-4">
                  <label for="status">{{ $t('Status') }}
                    <small v-if="isPaymentActive" class="text-muted ml-2">({{ $t('Cannot be changed when payment is active') }})</small>
                    <small v-else-if="form.invoice && form.invoice.status === 0" class="text-muted ml-2">({{ $t('Cannot be changed when invoice is inactive') }})</small>
                  </label>
                  <select id="status" v-model.number="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }"
                    :disabled="(form.invoice && form.invoice.status === 0) || isPaymentActive">
                    <option v-if="!form.invoice || form.invoice.status === 1" :value="1">{{ $t('Active') }}</option>
                    <option :value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                  <!-- Debug info - remove in production -->
                  <small class="text-info">Debug: Status={{ form.status }}, isPaymentActive={{ isPaymentActive }}, invoiceStatus={{ form.invoice ? form.invoice.status : 'N/A' }}</small>
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" 
                  :disabled="isPaymentActive" />
                <has-error :form="form" field="note" />
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
    return { title: this.$t('Edit Client Invoice Payment') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Payment',
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
        name: 'Invoice Payments',
        url: 'invoicePayments.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    form: new Form({
      client: '',
      invoice: '',
      invoiceTotal: 0,
      dueAmount: 0,
      account: '',
      paidAmount: '',
      maxAmount: 0,
      minAmount: 0,
      previousPaidAmount: 0,
      chequeNo: '',
      receiptNo: '',
      paymentDate: '',
      paymentType: '',
      note: '',
      status: 1,
    }),
    accounts: '',
  }),
  computed: {
    ...mapGetters('operations', ['items']),
    // Check if payment status is active
    isPaymentActive() {
      return this.form.status == 1; // Use == instead of === to handle string/number comparison
    },
  },
  created() {
    this.getAccounts()
    this.getInvoicePayment()
  },
  mounted() {
    // Load temporary data after component is mounted
    this.$nextTick(() => {
      this.loadTemporaryData()
    })
  },
  methods: {
    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = data.data
    },

    // get invoice payment
    async getInvoicePayment() {
      const { data } = await axios.get(
        window.location.origin +
        '/api/payments/invoice/' +
        this.$route.params.slug
      )
      this.form.invoice = data.data.invoice
      this.form.invoiceTotal =
        data.data.invoice.subTotal +
        data.data.invoice.tax +
        data.data.invoice.transport -
        data.data.invoice.discount -
        data.data.costOfReturn
      this.form.client = data.data.client
      this.form.account = data.data.account
      this.form.paidAmount = data.data.amount
      this.form.previousPaidAmount = data.data.amount
      this.form.dueAmount = data.data.invoice.due
      this.form.maxAmount = data.data.amount + data.data.invoice.due
      this.form.minAmount = data.data.accountPayable > 0 ? data.data.amount : 1
      this.form.chequeNo = data.data.transaction.cheque_no
      this.form.receiptNo = data.data.transaction.receipt_no
      this.form.paymentDate = data.data.date
      this.form.note = data.data.note
      this.form.status = parseInt(data.data.status) // Ensure status is a number
      
      // Check if payment is cancelled - redirect if so
      if (this.form.status === 2) {
        this.$router.push({ name: 'invoicePayments.index' })
        this.$toastr.error(this.$t('Cannot edit cancelled payment'))
        return
      }
      
      // Set payment status based on invoice status if invoice is inactive
      if (data.data.invoice.status === 0) {
        this.form.status = 0
      }
    },

    // calculate due
    calculateDue() {
      let paid = Number(this.form.paidAmount)
      this.form.dueAmount =
        this.form.invoice.due + this.form.previousPaidAmount - paid
    },

    // update payment
    async updatePayment() {
      await this.form
        .patch(
          window.location.origin +
          '/api/payments/invoice/' +
          this.$route.params.slug
        )
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: 'success',
            title: this.$t('Invoice payment updated successfully'),
          })
          this.$router.push({ name: 'invoicePayments.index' })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Opps...something went wrong'),
          })
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        invoice: this.form.invoice,
        invoiceTotal: this.form.invoiceTotal,
        amount: this.form.amount,
        paymentMethod: this.form.paymentMethod,
        reference: this.form.reference,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        sendSms: this.form.sendSms,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('invoicePaymentEditTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('invoicePaymentEditTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.invoice = data.invoice || this.form.invoice
          this.form.invoiceTotal = data.invoiceTotal || this.form.invoiceTotal
          this.form.amount = data.amount || this.form.amount
          this.form.paymentMethod = data.paymentMethod || this.form.paymentMethod
          this.form.reference = data.reference || this.form.reference
          this.form.date = data.date || this.form.date
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
          this.form.sendSms = data.sendSms || this.form.sendSms
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('invoicePaymentEditTempData')
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
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
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
</style>
