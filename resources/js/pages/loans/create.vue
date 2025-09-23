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
                <router-link :to="{ name: 'loans.index' }" class="btn btn-info">
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
          <form role="form" @submit.prevent="saveLoan" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items && accounts">
                <div class="form-group col-md-6">
                  <label for="authority">{{ $t('Loan Authority') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.authority" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('authority') }" name="authority"
                    :placeholder="$t('Select an authority')" />
                  <has-error :form="form" field="authority" />
                </div>
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
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="reason">{{ $t('Loan Reason') }}
                    <span class="required">*</span></label>
                  <input id="reason" v-model="form.reason" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reason') }" name="reason"
                    :placeholder="$t('Enter a reason')" />
                  <has-error :form="form" field="reason" />
                </div>
                <div class="form-group col-md-4">
                  <label for="referenceNo">{{ $t('Reference') }}
                    <span class="required">*</span></label>
                  <input id="referenceNo" v-model="form.referenceNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('referenceNo') }" name="referenceNo"
                    :placeholder="$t('Enter reference')" />
                  <has-error :form="form" field="referenceNo" />
                </div>
                <div class="form-group col-md-4">
                  <label for="loanType">{{ $t('Loan Type')
                  }}<span class="required">*</span></label>
                  <select id="loanType" v-model="form.loanType" name="loanType" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('loanType') }" @change="generatePayable">
                    <option value="1">
                      {{ $t('Term Loan') }}
                    </option>
                    <option value="0">
                      {{ $t('Cash Credit(CC) Loan') }}
                    </option>
                  </select>
                  <has-error :form="form" field="loanType" />
                </div>
              </div>
              <div class="row" v-if="form.authority && form.loanType == 0">
                <div class="form-group col-md-6">
                  <label for="ccLoanLimit">{{ $t('CC Limit') }}
                  </label>
                  <input id="ccLoanLimit" v-model="form.authority.ccLimit" type="text" class="form-control"
                    name="ccLoanLimit" readonly />
                </div>
                <div class="form-group col-md-6">
                  <label for="availableAmount">{{
                    $t('Available Amount')
                  }}</label>
                  <input id="availableAmount" v-model="form.authority.availableCCLoan" type="text" class="form-control"
                    name="availableAmount" readonly />
                </div>
              </div>

              <div v-if="form.loanType == 0" class="row">
                <div class="form-group col-md-6">
                  <label for="amount">{{ $t('Amount') }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('Enter an amount')" min="1" :max="form.loanType == 0 ? form.authority.availableCCLoan : ''
                      " @change="generatePayable" @keyup="generatePayable" />
                  <has-error :form="form" field="amount" />
                </div>
                <div class="form-group col-md-6">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
              </div>

              <div v-else class="row">
                <div class="form-group col-md-6">
                  <label for="amount">{{ $t('Amount') }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('Enter an amount')" min="1" :max="form.loanType == 0 ? form.authority.availableAmount : ''
                      " @change="generatePayable" @keyup="generatePayable" />
                  <has-error :form="form" field="amount" />
                </div>
                <div class="form-group col-md-6">
                  <label for="interest">{{ $t('Interest') }} (%)</label>
                  <input id="interest" v-model="form.interest" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('interest') }" min="0" max="100" name="interest"
                    :placeholder="$t('Enter an interest rate in percentage')" @change="generatePayable"
                    @keyup="generatePayable" />
                </div>
                <div class="form-group col-md-4">
                  <label for="paymentType">{{
                    $t('Payment Type')
                  }}</label>
                  <select id="paymentType" v-model="form.paymentType" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentType') }" @change="generatePayable">
                    <option value="0">{{ $t('Daily') }}</option>
                    <option value="1">{{ $t('Monthly') }}</option>
                    <option value="2">{{ $t('Yearly') }}</option>
                  </select>
                  <has-error :form="form" field="paymentType" />
                </div>
                <div class="form-group col-md-4">
                  <label for="duration">{{ $t('Duration') }}
                    <span class="required">*</span></label>
                  <input id="duration" v-model="form.duration" type="number" class="form-control" step="1"
                    :class="{ 'is-invalid': form.errors.has('duration') }" name="duration"
                    :placeholder="$t('Enter a duration')" min="1" max="255" @change="generatePayable"
                    @keyup="generatePayable" />
                  <has-error :form="form" field="duration" />
                </div>
                <div class="form-group col-md-4">
                  <label for="payReturn">
                    {{ $t('Per') }}
                    <span v-if="form.paymentType == 0">{{
                      $t('Day')
                    }}</span>
                    <span v-else-if="form.paymentType == 1">{{
                      $t('Month')
                    }}</span>
                    <span v-else>{{ $t('Year') }}</span>
                  </label>
                  <input id="payReturn" v-model="form.payReturn" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('payReturn') }" name="payReturn" readonly />
                  <has-error :form="form" field="payReturn" />
                </div>
                <div class="form-group col-md-6">
                  <label for="payableAmount">{{
                    $t('Payable Amount')
                  }}</label>
                  <input id="payableAmount" v-model.lazy="form.payableAmount" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('payableAmount') }" name="payableAmount" readonly />
                </div>
                <div class="form-group col-md-6">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
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
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                <div class="form-group col-md-6">
                  <label for="image">{{ $t('Image') }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t('Choose file')
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
                  </div>
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Loan') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Loan',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Loans',
        url: 'loans.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      reason: '',
      authority: '',
      referenceNo: '',
      account: '',
      loanType: 1,
      amount: '',
      interest: '',
      payableAmount: '',
      rowPayableAMount: 0,
      paymentType: 1,
      duration: '',
      payReturn: '',
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      image: '',
    }),
    url: null,
    options: [],
    accounts: '',
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
  },
  created() {
    this.getAuthorities()
    this.getAccounts()
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all expense categories
    async getAuthorities() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-loan-authorities',
      })
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
      }
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      if (
        file.size < 2111775 &&
        (file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif')
      ) {
        reader.onloadend = (file) => {
          this.form.image = reader.result
        }
        reader.readAsDataURL(file)
        this.url = URL.createObjectURL(file)
      } else {
        Swal.fire(
          this.$t('Error!'),
          this.$t('Please select a valid thumbnail with size less than 2 MB'),
          'error'
        )
      }
    },

    // generate payable amount
    generatePayable() {
      let amount = Number(this.form.amount)
      let interest = Number(this.form.interest)
      let duration = Number(this.form.duration)
      this.form.payableAmount = 0
      if (this.form.loanType == 0) {
        this.form.rowPayableAMount = amount + interest
        return (this.form.payableAmount =
          amount + ' + ' + interest + ' = ' + this.form.rowPayableAMount)
      } else {
        let totalInterestAmount = 0
        let monthlyPayment = 0
        let interestRate = interest / 100
        let numOfYears = 0
        if (interest && duration) {
          if (this.form.paymentType == 0) {
            numOfYears = duration / 365
          } else if (this.form.paymentType == 1) {
            numOfYears = duration / 12
          } else {
            numOfYears = duration
          }
          monthlyPayment = Number(
            (
              ((interestRate / 12) * amount) /
              (1 - Math.pow(1 + interestRate / 12, numOfYears * -12))
            ).toFixed(2)
          )
          totalInterestAmount = Number(
            (monthlyPayment * (numOfYears * 12) - amount).toFixed(2)
          )
          this.form.rowPayableAMount = Number(
            (amount + totalInterestAmount).toFixed(2)
          )
          this.form.payableAmount =
            amount +
            ' + ' +
            totalInterestAmount +
            ' = ' +
            this.form.rowPayableAMount
          return (this.form.payReturn = Number(
            (this.form.rowPayableAMount / duration).toFixed(2)
          ))
        }
      }
    },

    // save loan
    async saveLoan() {
      await this.form
        .post(window.location.origin + '/api/loans')
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: 'success',
            title: this.$t('Loan added successfully'),
          })
          this.$router.push({ name: 'loans.index' })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        authority: this.form.authority,
        account: this.form.account,
        reason: this.form.reason,
        amount: this.form.amount,
        interestRate: this.form.interestRate,
        duration: this.form.duration,
        durationType: this.form.durationType,
        installmentAmount: this.form.installmentAmount,
        installmentType: this.form.installmentType,
        startDate: this.form.startDate,
        endDate: this.form.endDate,
        status: this.form.status,
        note: this.form.note,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('loanTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('loanTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.authority = data.authority || null
          this.form.account = data.account || null
          this.form.reason = data.reason || ''
          this.form.amount = data.amount || ''
          this.form.interestRate = data.interestRate || ''
          this.form.duration = data.duration || ''
          this.form.durationType = data.durationType || 'month'
          this.form.installmentAmount = data.installmentAmount || ''
          this.form.installmentType = data.installmentType || 'month'
          this.form.startDate = data.startDate || ''
          this.form.endDate = data.endDate || ''
          this.form.status = data.status !== undefined ? data.status : 1
          this.form.note = data.note || ''
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('loanTempData')
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
  border-radius: 10px;
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

/* Custom File Input Styling */
.custom-file-input {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
}

.custom-file-label {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
  color: #6C757D;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Image Preview Styling */
.bg-light {
  background-color: #F8F9FA !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
}

.img-fluid {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
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
