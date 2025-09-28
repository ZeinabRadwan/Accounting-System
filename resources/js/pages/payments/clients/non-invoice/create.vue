<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'nonInvoicePayments.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'clientNonInvoicePaymentCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="clientNonInvoicePaymentCreateForm" role="form" @submit.prevent="savePayment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t('Client')
                  }}<span class="required">*</span></label>
                  <v-select v-model="form.client" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                    :placeholder="$t('Select a client')" @input="calculateValues" />
                  <has-error :form="form" field="client" />
                </div>
                <div class="form-group col-md-6">
                  <label for="type">{{ $t('Type') }}
                    <span class="required">*</span></label>
                  <select id="type" v-model="form.type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('type') }" @change="updateMax">
                    <option value="1">
                      {{ $t('Add Payment') }}
                    </option>
                  </select>
                  <has-error :form="form" field="type" />
                </div>
              </div>
              <div v-if="form.client" class="row">
                <div class="form-group col-md-4">
                  <label for="nonInvoiceTotal">{{
                    $t('Non Invoice Total')
                  }}</label>
                  <input id="nonInvoiceTotal" v-model="form.nonInvoiceTotal" type="number" step="any" class="form-control"
                    name="nonInvoiceTotal" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="nonInvoicePaid">{{
                    $t('Non Invoice Paid')
                  }}</label>
                  <input id="nonInvoicePaid" v-model="form.nonInvoicePaid" type="number" step="any" class="form-control"
                    name="nonInvoicePaid" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="currentDue">{{
                    $t('Current Due')
                  }}</label>
                  <input id="nonInvoiceDue" v-model="form.nonInvoiceDue" type="number" step="any" class="form-control"
                    name="nonInvoiceDue" readonly />
                </div>
              </div>
              <div class="row" v-if="form.type == 1 && accounts">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t('Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Non Invoice Payment') }
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
        name: 'Non Invoice Payments',
        url: 'nonInvoicePayments.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      client: '',
      type: 1,
      account: '',
      amount: '',
      chequeNo: '',
      receiptNo: '',
      nonInvoiceTotal: 0,
      nonInvoicePaid: 0,
      nonInvoiceDue: 0,
      paymentDate: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
    }),
    accounts: '',
  }),
  computed: {
    ...mapGetters('operations', ['items']),
  },
  created() {
    this.getClients()
    this.getAccounts()
  },
  methods: {
    // get all clients
    async getClients() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/clients-for-noninvoice-payments',
      })
    },

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = data.data
    },

    // calculate values
    calculateValues() {
      if (this.form.client) {
        this.form.nonInvoiceTotal = this.form.client.nonInvoiceDue
        this.form.nonInvoicePaid = this.form.client.nonInvoicePaid
        this.form.nonInvoiceDue = this.form.client.nonInvoiceCurrentDue
      }
      return
    },

    // update values
    updateValues() {
      let amount = Number(this.form.amount)
      if (this.form.client && this.form.type == 1) {
        this.form.nonInvoicePaid =
          Number(this.form.client.nonInvoicePaid) + amount
        this.form.nonInvoiceDue =
          Number(this.form.client.nonInvoiceCurrentDue) - amount
      }
      return
    },

    // save payment
    async savePayment() {
      await this.form
        .post(window.location.origin + '/api/payments/non-invoice')
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Payment added successfully'),
          })
          this.$router.push({ name: 'nonInvoicePayments.index' })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
        })
    },
  },
}
</script>

<style scoped>
/* Header buttons styling to match invoices page */
.header-buttons {
  margin-bottom: 15px;
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

/* Footer buttons styling to match invoices page */
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
</style>
