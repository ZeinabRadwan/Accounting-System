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
                <router-link :to="{ name: 'payroll.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-primary" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="savePayroll" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div v-if="items" class="form-group col-md-6">
                  <label for="employee">{{ $t('Employee')
                  }}<span class="required">*</span></label>
                  <v-select v-if="items" v-model="form.employee" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('employee') }" name="employee"
                    :placeholder="$t('Select an employee')" @input="calculateTotalSalary" />
                  <has-error :form="form" field="employee" />
                </div>
                <div class="form-group col-md-6">
                  <label for="salaryMonth">{{ $t('Salary Month')
                  }}<span class="required">*</span></label>
                  <select id="salaryMonth" v-model="form.salaryMonth" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('salaryMonth') }" name="salaryMonth">
                    <option value="" selected disabled>
                      {{ $t('Select a salary month') }}
                    </option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <has-error :form="form" field="salaryMonth" />
                </div>
              </div>
              <div v-if="form.employee" class="row">
                <div class="form-group col-md-4">
                  <label for="presentSalary">{{
                    $t('Present Salary')
                  }}</label>
                  <input id="presentSalary" v-model="form.employee.totalSalary" type="number" step="any"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('presentSalary') }" name="presentSalary"
                    readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="deductionAmount">{{
                    $t('Deduction Amount')
                  }}</label>
                  <input id="deductionAmount" v-model="form.deductionAmount" type="number" step="any" class="form-control"
                    :class="{
                      'is-invalid': form.errors.has('deductionAmount'),
                    }" name="deductionAmount" min="0" :placeholder="$t('Enter a deduction amount')"
                    @change="calculateTotalSalary" @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="deductionAmount" />
                </div>
                <div class="form-group col-md-4">
                  <label for="deductionReason">{{
                    $t('Deduction Reason')
                  }}</label>
                  <input id="deductionReason" v-model="form.deductionReason" type="text" class="form-control" :class="{
                    'is-invalid': form.errors.has('deductionReason'),
                  }" name="deductionReason" :placeholder="$t('Enter a deduction reason')" />
                  <has-error :form="form" field="deductionReason" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                  <label for="mobileBill">{{
                    $t('Mobile Bill')
                  }}</label>
                  <input id="mobileBill" v-model="form.mobileBill" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('mobileBill') }" name="mobileBill" min="0"
                    :placeholder="$t('Enter a mobile bill')" @change="calculateTotalSalary"
                    @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="mobileBill" />
                </div>
                <div class="form-group col-md-3">
                  <label for="foodBill">{{
                    $t('Food Bill')
                  }}</label>
                  <input id="foodBill" v-model="form.foodBill" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('foodBill') }" name="foodBill"
                    :placeholder="$t('Enter a food bill')" @change="calculateTotalSalary"
                    @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="foodBill" />
                </div>
                <div class="form-group col-md-3">
                  <label for="bonus">{{ $t('Bonus') }}</label>
                  <input id="bonus" v-model="form.bonus" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('bonus') }" name="bonus" min="0"
                    :placeholder="$t('Enter a bonus')" @change="calculateTotalSalary"
                    @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="bonus" />
                </div>
                <div class="form-group col-md-3">
                  <label for="commission">{{
                    $t('Commission')
                  }}</label>
                  <input id="commission" v-model="form.commission" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('commission') }" name="commission"
                    :placeholder="$t('Enter a commission')" @change="calculateTotalSalary"
                    @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="commission" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-3">
                  <label for="festivalBonus">{{
                    $t('Festival Bonus')
                  }}</label>
                  <input id="festivalBonus" v-model="form.festivalBonus" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('festivalBonus') }" name="festivalBonus" min="0" :placeholder="$t('Enter a festival bonus')
                        " @change="calculateTotalSalary" @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="festivalBonus" />
                </div>
                <div class="form-group col-md-3">
                  <label for="travelAllowance">{{
                    $t('Travel Allowance(TA)')
                  }}</label>
                  <input id="travelAllowance" v-model="form.travelAllowance" type="number" step="any" class="form-control"
                    :class="{
                      'is-invalid': form.errors.has('travelAllowance'),
                    }" name="travelAllowance" :placeholder="$t('Enter a travel allowance')"
                    @change="calculateTotalSalary" @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="travelAllowance" />
                </div>
                <div class="form-group col-md-3">
                  <label for="others">{{ $t('Others') }}</label>
                  <input id="others" v-model="form.others" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('others') }" name="others" min="0"
                    :placeholder="$t('Enter others amount')" @change="calculateTotalSalary"
                    @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="others" />
                </div>
                <div class="form-group col-md-3">
                  <label for="advance">{{
                    $t('Advance')
                  }}</label>
                  <input id="advance" v-model="form.advance" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('advance') }" name="advance"
                    :placeholder="$t('Advance')" @change="calculateTotalSalary"
                    @keyup="calculateTotalSalary" />
                  <has-error :form="form" field="advance" />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-4">
                  <label for="totalSalary">{{
                    $t('Total Salary')
                  }}</label>
                  <input id="totalSalary" v-model="form.totalSalary" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalSalary') }" name="totalSalary" readonly />
                  <has-error :form="form" field="totalSalary" />
                </div>
                <div v-if="accounts" class="form-group col-md-4">
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
                <div class="form-group col-md-4">
                  <label for="availableBalance">{{
                    $t('Available Balance')
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div>
                <div class="form-group col-md-4">
                  <label for="salaryDate">{{
                    $t('Salary Date')
                  }}</label>
                  <input id="salaryDate" v-model="form.salaryDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('salaryDate') }" name="salaryDate" />
                  <has-error :form="form" field="salaryDate" />
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
              <div class="form-group">
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
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons">
                  <v-button :loading="form.busy" class="btn btn-primary">
                    <i class="fas fa-save" /> {{ $t('Save') }}
                  </v-button>
                  <button type="reset" class="btn btn-secondary" @click="form.reset()">
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
    return { title: this.$t('Create Payroll') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Payroll',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Payroll',
        url: 'payroll.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      chequeNo: '',
      salaryMonth: '',
      employee: '',
      account: '',
      availableBalance: 0,
      presentSalary: '',
      deductionAmount: '',
      deductionReason: '',
      mobileBill: '',
      foodBill: '',
      bonus: '',
      commission: '',
      advance: '',
      festivalBonus: '',
      travelAllowance: '',
      others: '',
      totalSalary: '',
      salaryDate: new Date().toISOString().slice(0, 10),
      status: 1,
      note: '',
      image: '',
    }),
    url: null,
    accounts: '',
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
  },
  created() {
    this.getEmployees()
    this.getAccounts()
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all employees
    async getEmployees() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-employees',
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
        this.updateBalance()
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
        reader.onloadend = () => {
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

    updateBalance() {
      this.form.availableBalance = 0
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance
      }
    },

    // calculate total
    calculateTotalSalary() {
      let salary = Number(this.form.employee.totalSalary)
      let deduction = Number(this.form.deductionAmount)
      let mobileBill = Number(this.form.mobileBill)
      let foodBill = Number(this.form.foodBill)
      let bonus = Number(this.form.bonus)
      let commission = Number(this.form.commission)
      let advance = Number(this.form.advance)
      let festivalBonus = Number(this.form.festivalBonus)
      let travelAllowance = Number(this.form.travelAllowance)
      let others = Number(this.form.others)
      this.form.totalSalary =
        mobileBill +
        foodBill +
        bonus +
        commission +
        festivalBonus +
        travelAllowance +
        others +
        advance -
        deduction
      if (salary > 0) {
        return (this.form.totalSalary = salary + this.form.totalSalary)
      }
      return this.form.totalSalary
    },

    // save payroll
    async savePayroll() {
      await this.form
        .post(window.location.origin + '/api/payroll')
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: 'success',
            title: this.$t('Payroll added successfully'),
          })
          this.$router.push({ name: 'payroll.index' })
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        employee: this.form.employee,
        salaryMonth: this.form.salaryMonth,
        salaryYear: this.form.salaryYear,
        basicSalary: this.form.basicSalary,
        houseRent: this.form.houseRent,
        medical: this.form.medical,
        transport: this.form.transport,
        allowance: this.form.allowance,
        overtime: this.form.overtime,
        bonus: this.form.bonus,
        commission: this.form.commission,
        advance: this.form.advance,
        loan: this.form.loan,
        deduction: this.form.deduction,
        totalSalary: this.form.totalSalary,
        netSalary: this.form.netSalary,
        status: this.form.status,
        note: this.form.note,
        image: this.form.image ? this.form.image.name : null,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('payrollTempData', JSON.stringify(tempData))
      toast.fire({
        type: 'success',
        title: this.$t('Form saved temporarily'),
      })
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('payrollTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.employee = data.employee || null
          this.form.salaryMonth = data.salaryMonth || ''
          this.form.salaryYear = data.salaryYear || ''
          this.form.basicSalary = data.basicSalary || ''
          this.form.houseRent = data.houseRent || ''
          this.form.medical = data.medical || ''
          this.form.transport = data.transport || ''
          this.form.allowance = data.allowance || ''
          this.form.overtime = data.overtime || ''
          this.form.bonus = data.bonus || ''
          this.form.commission = data.commission || ''
          this.form.advance = data.advance || ''
          this.form.loan = data.loan || ''
          this.form.deduction = data.deduction || ''
          this.form.totalSalary = data.totalSalary || ''
          this.form.netSalary = data.netSalary || ''
          this.form.status = data.status !== undefined ? data.status : 1
          this.form.note = data.note || ''
          // Note: Image file cannot be restored from localStorage
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('payrollTempData')
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

/* Restore full border radius for buttons inside the group */
.btn-group.c-w-100 > .btn {
  border-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:first-child {
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.btn-group.c-w-100 > .btn:last-child {
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
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
  background: #F1F5FB !important;
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
  border-radius: 10px !important;
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
  border-radius: 10px !important;
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
  background: #F1F5FB !important;
}

.v-select .vs__dropdown-toggle {
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB !important;
  border-radius: 10px !important;
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
  background: #F1F5FB !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
}

.custom-file-label {
  background: #F1F5FB !important;
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
