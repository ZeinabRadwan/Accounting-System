<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'expenses.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" :title="$t('Save Temporarily')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveExpense" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="reason">{{ $t('Expense Reason') }}
                    <span class="required">*</span></label>
                  <input id="reason" v-model="form.reason" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reason') }" name="reason" :placeholder="$t('Enter a reason')
                      " />
                  <has-error :form="form" field="reason" />
                </div>
                <div v-if="items" class="form-group col-md-6">
                  <label for="subCategory">{{ $t('Category Name') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.subCategory" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                    :placeholder="$t('Select a category')" />
                  <has-error :form="form" field="subCategory" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t('Payment Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts || []" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select payment account')" @input="updateBalance">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
                  <small class="form-text text-muted" v-if="!accounts || accounts.length === 0">
                    {{ $t('Loading payment accounts...') }}
                  </small>
                </div>
                <div class="form-group col-md-6">
                  <label for="availableBalance">{{
                    $t('Available Balance')
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
              </div>
              <div class="row" v-if="expenseAccounts">
                <div class="form-group col-md-12">
                  <label for="expenseAccount">{{ $t('Expense Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.expenseAccount" :options="expenseAccounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('expenseAccount') }" name="expenseAccount"
                    :placeholder="$t('Select expense account')">
                    <template slot="option" slot-scope="option">
                      <strong>{{ option.name }}</strong>
                      <br>
                      <small class="text-muted">{{ option.code }} - {{ option.type }}</small>
                    </template>
                  </v-select>
                  <has-error :form="form" field="expenseAccount" />
                  <small class="form-text text-muted">{{ $t('This account will be debited for the expense') }}</small>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="amount">{{ $t('Amount') }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="amount" />
                </div>
                <!-- <div class="form-group col-md-4">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div> -->
                <div class="form-group col-md-4">
                  <label for="voucherNo">{{ $t('Voucher No') }}</label>
                  <input id="voucherNo" v-model="form.voucherNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('voucherNo') }" name="voucherNo"
                    :placeholder="$t('Voucher No')" />
                  <has-error :form="form" field="voucherNo" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-4">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">
                      {{ $t('Active') }}
                    </option>
                    <option value="0">
                      {{ $t('Inactive') }}
                    </option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                <div class="form-group col-md-4">
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
import Swal from "sweetalert2"

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Expense') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Expense',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Expenses',
        url: 'expenses.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      reason: '',
      subCategory: '',
      account: '',
      expenseAccount: '',
      amount: '',
      chequeNo: '',
      voucherNo: '',
      availableBalance: 0,
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      image: '',
    }),
    url: null,
    accounts: '',
    expenseAccounts: '',
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
  },
  created() {
    this.getSubCategories()
    this.getAccounts()
    this.getExpenseAccounts()
    // Load app info if not already loaded
    if (!this.appInfo) {
      this.$store.dispatch('operations/fetchSettingData')
    }
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    // get all expense categories
    async getSubCategories() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-expense-sub-categories',
      })
    },

    // get payment accounts (with available balance)
    async getAccounts() {
      try {
        console.log('Loading payment accounts...')
        const { data } = await axios.get(
          window.location.origin + '/api/all-accounts'
        )
        
        console.log('API Response:', data)
        
        // Check if data is an array (direct collection) or has success/data structure
        const accountsData = Array.isArray(data) ? data : (data.data || data)
        
        if (accountsData && Array.isArray(accountsData)) {
          // Transform the accounts to match the expected format
          this.accounts = accountsData.map(account => ({
            id: account.id,
            label: account.label || `${account.bankName} [${account.accountNumber}]`,
            name: account.bankName,
            code: account.accountNumber, // Use accountNumber as code
            availableBalance: account.availableBalance || 0,
            image: account.image || null
          }))
          
          console.log('Transformed accounts:', this.accounts)
          
          // Set default account if available
          if (this.accounts && this.accounts.length > 0) {
            this.updateBalance()
          }
        } else {
          console.warn('No accounts data found in response:', data)
          this.accounts = []
        }
      } catch (error) {
        console.error('Error loading payment accounts:', error)
        this.accounts = []
      }
    },


    // get expense accounts from routing settings
    async getExpenseAccounts() {
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/expense-accounts'
        )
        
        if (data.success) {
          // Transform the accounts to match the expected format
          this.expenseAccounts = data.data.accounts.map(account => ({
            id: account.id,
            label: `${account.name} [${account.code}]`,
            name: account.name,
            code: account.code,
            type: account.type
          }))
        } else {
          console.warn('Expense account routing not configured:', data.message)
          this.expenseAccounts = []
        }
      } catch (error) {
        console.error('Error loading expense accounts:', error)
        this.expenseAccounts = []
      }
    },

    // update available balance
    updateBalance() {
      this.form.availableBalance = 0
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance
      }
      return
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
        this.$toast.error(
          this.$t('Error!'),
          this.$t('Please select a valid thumbnail with size less than 2 MB')
        )
      }
    },

    // save expense
    async saveExpense() {
      // Ensure we have the required data in the correct format
      if (!this.form.account || !this.form.account.id) {
        toast.fire({
          type: 'error',
          title: this.$t('Please select a payment account')
        })
        return
      }
      
      if (!this.form.expenseAccount || !this.form.expenseAccount.id) {
        toast.fire({
          type: 'error',
          title: this.$t('Please select an expense account')
        })
        return
      }
      
      if (!this.form.subCategory || !this.form.subCategory.id) {
        toast.fire({
          type: 'error',
          title: this.$t('Please select a sub category')
        })
        return
      }
      
      // Debug: Log the form data before sending
      console.log('Form data being sent:', {
        account: this.form.account,
        expenseAccount: this.form.expenseAccount,
        amount: this.form.amount,
        reason: this.form.reason,
        subCategory: this.form.subCategory
      })
      
      // Create a new form with properly formatted data
      const formData = new FormData()
      formData.append('reason', this.form.reason)
      formData.append('subCategory[id]', this.form.subCategory.id)
      formData.append('subCategory[code]', this.form.subCategory.code)
      formData.append('account[id]', this.form.account.id)
      formData.append('account[availableBalance]', this.form.account.availableBalance)
      formData.append('expenseAccount[id]', this.form.expenseAccount.id)
      formData.append('amount', this.form.amount)
      formData.append('chequeNo', this.form.chequeNo || '')
      formData.append('voucherNo', this.form.voucherNo || '')
      formData.append('date', this.form.date)
      formData.append('note', this.form.note || '')
      formData.append('status', this.form.status)
      if (this.form.image) {
        formData.append('image', this.form.image)
      }
      
      // Debug: Log the form data being sent
      console.log('Form data being sent:')
      for (let [key, value] of formData.entries()) {
        console.log(key, ':', value)
      }
      
      await axios.post(window.location.origin + '/api/expenses', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          if (response.data.success) {
            // Clear temporary data after successful save
            this.clearTemporaryData()
            toast.fire({
              type: 'success',
              title: this.$t('Expense added successfully'),
            })
            this.$router.push({ name: 'expenses.index' })
          } else {
            toast.fire({
              type: 'error',
              title: this.$t('Error'),
              text: response.data.message || this.$t('Please check your input and try again.')
            })
          }
        })
        .catch((error) => {
          console.error('Error details:', error.response?.data)
          if (error.response?.status === 422 && error.response?.data?.errors) {
            // Handle validation errors
            const errors = error.response.data.errors
            let errorMessage = this.$t('Validation errors:')
            Object.keys(errors).forEach(field => {
              errorMessage += `\n${field}: ${errors[field].join(', ')}`
            })
            toast.fire({
              type: 'error',
              title: this.$t('Validation Error'),
              text: errorMessage
            })
          } else {
            toast.fire({ 
              type: 'error', 
              title: this.$t('Error'),
              text: error.response?.data?.message || this.$t('Please check your input and try again.')
            })
          }
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        reason: this.form.reason,
        subCategory: this.form.subCategory,
        account: this.form.account,
        expenseAccount: this.form.expenseAccount,
        amount: this.form.amount,
        chequeNo: this.form.chequeNo,
        voucherNo: this.form.voucherNo,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        image: this.form.image ? this.form.image.name : null,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('expenseTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('expenseTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.reason = data.reason || ''
          this.form.subCategory = data.subCategory || null
          this.form.account = data.account || null
          this.form.expenseAccount = data.expenseAccount || null
          this.form.amount = data.amount || ''
          this.form.chequeNo = data.chequeNo || ''
          this.form.voucherNo = data.voucherNo || ''
          this.form.date = data.date || ''
          this.form.note = data.note || ''
          this.form.status = data.status !== undefined ? data.status : 1
          // Note: Image file cannot be restored from localStorage
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('expenseTempData')
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
