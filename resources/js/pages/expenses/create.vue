<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'expenses.index' }" class="btn btn-info">
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
                <button type="button" class="btn btn-success" @click="saveTemporary" :title="$t('Save Temporarily')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>

          <div class="card-body">
            <form role="form" @submit.prevent="saveExpense" @keydown="form.onKeydown($event)">
              <!-- Row 1: Cost Center / Branch / Expense Reason / Category -->
              <div class="row">
                <div class="form-group col-md-3">
                  <label for="costCenter">{{ $t("Cost Center") }}</label>
                  <v-select class="flex-grow-1" v-model="form.costCenter" :options="costCenters" label="name"
                    :class="{ 'is-invalid': form.errors.has('cost_center_id') }" name="costCenter"
                    :placeholder="$t('Select a cost center')" @input="onCostCenterChange" />
                  <has-error :form="form" field="cost_center_id" />
                </div>
                <div class="form-group col-md-3">
                  <label for="branch">{{ $t("Branch") }}</label>
                  <v-select class="flex-grow-1" v-model="form.branch" :options="branches" label="name"
                    :class="{ 'is-invalid': form.errors.has('branch_id') }" name="branch"
                    :placeholder="$t('Select a branch')" @input="onBranchChange" />
                  <has-error :form="form" field="branch_id" />
                </div>
                <div class="form-group col-md-3">
                  <label for="reason">{{ $t('Expense Reason') }}
                    <span class="required">*</span></label>
                  <input id="reason" v-model="form.reason" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reason') }" name="reason"
                    :placeholder="$t('Enter a reason')" />
                  <has-error :form="form" field="reason" />
                </div>
                <div class="form-group col-md-3">
                  <label for="subCategory">{{ $t('Category Name') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.subCategory" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                    :placeholder="$t('Select a category')" />
                  <has-error :form="form" field="subCategory" />
                  <small v-if="items.length === 0" class="form-text text-muted">
                    {{ $t('Loading categories...') }}
                  </small>
                </div>
              </div>

              <!-- Row 2: Payment Account / Available Balance / Expense Account / Amount -->
              <div class="row">
                <div class="form-group col-md-3">
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
                <div class="form-group col-md-3">
                  <label for="availableBalance">{{ $t('Available Balance') }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <div class="form-group col-md-3" v-if="expenseAccounts">
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
                <div class="form-group col-md-3">
                  <label for="amount">{{ $t('Amount') }}
                    <span class="required">*</span></label>
                  <input id="amount" v-model="form.amount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('amount') }" name="amount"
                    :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="amount" />
                </div>
              </div>

              <!-- Row 3: Date / Reference Number / Voucher No / Status -->
              <div class="row">
                <div class="form-group col-md-3">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-3">
                  <label for="reference">
                    {{ $t("Reference Number") }}
                  </label>
                  <input id="reference" v-model="form.reference" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reference') }" name="reference"
                    :placeholder="$t('Enter reference')" @input="clearFieldError('reference')" />
                  <has-error :form="form" field="reference" />
                </div>
                <div class="form-group col-md-3">
                  <label for="voucherNo">{{ $t('Voucher No') }}</label>
                  <input id="voucherNo" v-model="form.voucherNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('voucherNo') }" name="voucherNo"
                    :placeholder="$t('Voucher No')" />
                  <has-error :form="form" field="voucherNo" />
                </div>
                <div class="form-group col-md-3">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }" @change="clearFieldError('status')">
                    <option value="1">
                      {{ $t('Active') }}
                    </option>
                    <option value="0">
                      {{ $t('Inactive') }}
                    </option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>

              <!-- Row 4: Tax Type & Value -->
              <div class="row">
                <div v-if="taxes" class="form-group col-md-3">
                  <label for="orderTax">{{ $t("Tax Type") }}</label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax"
                    :placeholder="$t('Select a tax type')" @input="onTaxChange(); clearFieldError('orderTax')" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes && form.orderTax" class="form-group col-md-3">
                  <label for="taxValue">{{ $t("Tax Amount") }}</label>
                  <input id="taxValue" v-model="form.taxValue" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('taxValue') }" name="taxValue" readonly />
                  <has-error :form="form" field="taxValue" />
                </div>
              </div>

              <!-- Row 5: Attachments -->
              <div class="form-group">
                <label for="attachments">{{ $t("Attachments") }}</label>
                <input id="attachments" type="file" multiple class="form-control"
                  :class="{ 'is-invalid': form.errors.has('attachments') }" name="attachments"
                  @change="onAttachmentChange" />
                <has-error :form="form" field="attachments" />
                <div v-if="form.attachments && form.attachments.length > 0" class="mt-2">
                  <small class="text-muted">{{ $t("Selected files") }}:</small>
                  <ul class="list-unstyled mt-1">
                    <li v-for="(file, index) in form.attachments" :key="index"
                      class="d-flex justify-content-between align-items-center mb-1">
                      <span class="text-truncate" style="max-width: 70%;">
                        <i class="fas fa-file mr-1"></i>{{ file.name }}
                      </span>
                      <button type="button" class="btn btn-sm btn-danger" @click="removeAttachment(index)">
                        <i class="fas fa-times"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Row 6: Notes -->
              <div class="form-group">
                <label for="note">{{ $t("Notes") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')"
                  @input="clearFieldError('note')" />
                <has-error :form="form" field="note" />
              </div>

              <!-- Form Actions -->
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
      costCenter: null,
      cost_center_id: null,
      branch: null,
      branch_id: null,
      reference: '',
      orderTax: null,
      taxValue: 0,
      attachments: [],
    }),
    url: null,
    imageFile: null,
    accounts: '',
    expenseAccounts: '',
    costCenters: [],
    branches: [],
    taxes: [],
  }),
  computed: {
    ...mapGetters('operations', ['appInfo']),
    // Ensure items is always an array for v-select
    items() {
      const storeItems = this.$store.getters['operations/items']
      if (!storeItems || typeof storeItems !== 'object') {
        return []
      }
      if (Array.isArray(storeItems)) {
        return storeItems
      }
      if (storeItems.data && Array.isArray(storeItems.data)) {
        return storeItems.data
      }
      return []
    },
  },
  created() {
    this.getSubCategories()
    this.getAccounts()
    this.getExpenseAccounts()
    this.getCostCenters()
    this.getBranches()
    this.getTaxes()
    if (!this.appInfo) {
      this.$store.dispatch('operations/fetchSettingData')
    }
  },
  mounted() {
    this.loadTemporaryData()
  },
  watch: {
    'form.amount'() {
      this.onTaxChange()
    },
  },
  methods: {
    // get all expense categories
    async getSubCategories() {
      try {
        await this.$store.dispatch('operations/allData', {
          path: '/api/all-expense-sub-categories',
        })
        const items = this.$store.getters['operations/items']
        console.log('Sub Categories loaded:', items)
        console.log('Items type:', typeof items, 'Is Array:', Array.isArray(items))
      } catch (error) {
        console.error('Error loading sub categories:', error)
      }
    },

    // get payment accounts (with available balance)
    async getAccounts() {
      try {
        console.log('Loading payment accounts...')
        const { data } = await axios.get(
          window.location.origin + '/api/all-accounts'
        )

        console.log('API Response:', data)

        const accountsData = Array.isArray(data) ? data : (data.data || data)

        if (accountsData && Array.isArray(accountsData)) {
          this.accounts = accountsData.map(account => ({
            id: account.id,
            label: account.label || `${account.bankName} [${account.accountNumber}]`,
            name: account.bankName,
            code: account.accountNumber,
            availableBalance: account.availableBalance || 0,
            image: account.image || null
          }))

          console.log('Transformed accounts:', this.accounts)

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

    // get all cost centers
    async getCostCenters() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/cost-centers"
        )
        if (data.data && Array.isArray(data.data)) {
          this.costCenters = data.data
        } else if (Array.isArray(data)) {
          this.costCenters = data
        } else {
          this.costCenters = []
        }
      } catch (error) {
        console.error('Error getting cost centers:', error)
        this.costCenters = []
      }
    },

    // handle cost center change
    onCostCenterChange(costCenter) {
      if (costCenter && costCenter.id) {
        this.form.cost_center_id = costCenter.id
      } else {
        this.form.cost_center_id = null
      }
      this.clearFieldError('cost_center_id')
    },

    // get all branches
    async getBranches() {
      try {
        const user = this.$store.getters['auth/user']
        const isSuperAdmin = user && Number(user.account_role) === 1
        let branchesData = []

        if (isSuperAdmin) {
          const { data } = await axios.get('/api/branches')
          if (data && data.data && Array.isArray(data.data)) {
            branchesData = data.data
          } else if (Array.isArray(data)) {
            branchesData = data
          }
        } else if (user && user.id) {
          try {
            const { data } = await axios.get(`/api/users/${user.id}/branches`)
            if (Array.isArray(data)) {
              branchesData = data
            } else if (data && Array.isArray(data.data)) {
              branchesData = data.data
            }
          } catch (error) {
            const { data } = await axios.get('/api/branches')
            if (data && data.data && Array.isArray(data.data)) {
              branchesData = data.data
            }
          }
        }

        this.branches = branchesData
      } catch (error) {
        console.error('Error getting branches:', error)
        this.branches = []
      }
    },

    // handle branch change
    onBranchChange(branch) {
      if (branch && branch.id) {
        this.form.branch_id = branch.id
      } else {
        this.form.branch_id = null
      }
      this.clearFieldError('branch_id')
    },

    // get taxes
    async getTaxes() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-vat-rates"
        )
        this.taxes = data.data || []

        if (this.taxes && this.taxes.length > 0) {
          let defaultVatRateSlug = this.appInfo?.defaultVatRateSlug
          this.form.orderTax = this.taxes.find(
            (tax) => tax.slug === defaultVatRateSlug
          ) || this.taxes[0]
          this.onTaxChange()
        }
      } catch (error) {
        console.error('Error getting taxes:', error)
        this.taxes = []
      }
    },

    // handle tax change
    onTaxChange() {
      if (this.form.orderTax && this.form.orderTax.rate && this.form.amount) {
        const amount = parseFloat(this.form.amount) || 0
        const taxRate = parseFloat(this.form.orderTax.rate) || 0
        this.form.taxValue = (amount * taxRate / 100).toFixed(2)
      } else {
        this.form.taxValue = 0
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

    // handle attachment file change
    onAttachmentChange(e) {
      const files = Array.from(e.target.files)
      const validFiles = []

      files.forEach(file => {
        if (file.size < 2 * 1024 * 1024) {
          validFiles.push(file)
        } else {
          Swal.fire({
            icon: 'error',
            title: this.$t('Error!'),
            text: this.$t('Please select a file with size less than 2 MB')
          })
        }
      })

      if (validFiles.length > 0) {
        this.form.attachments = [...this.form.attachments, ...validFiles]
      }

      e.target.value = ''
    },

    // remove attachment
    removeAttachment(index) {
      this.form.attachments.splice(index, 1)
    },

    // clear field error
    clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field)
      }
    },

    // save expense
    async saveExpense() {
      if (!this.form.account || !this.form.account.id) {
        Swal.fire({
          icon: 'error',
          title: this.$t('Error'),
          text: this.$t('Please select a payment account')
        })
        return
      }

      if (!this.form.expenseAccount || !this.form.expenseAccount.id) {
        Swal.fire({
          icon: 'error',
          title: this.$t('Error'),
          text: this.$t('Please select an expense account')
        })
        return
      }

      if (!this.form.subCategory || !this.form.subCategory.id) {
        Swal.fire({
          icon: 'error',
          title: this.$t('Error'),
          text: this.$t('Please select a sub category')
        })
        return
      }

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

      if (this.form.cost_center_id) {
        formData.append('cost_center_id', this.form.cost_center_id)
      }

      if (this.form.branch_id) {
        formData.append('branch_id', this.form.branch_id)
      }

      if (this.form.reference) {
        formData.append('reference', this.form.reference)
      }

      if (this.form.orderTax && this.form.orderTax.id) {
        formData.append('orderTax[id]', this.form.orderTax.id)
        formData.append('taxValue', this.form.taxValue || 0)
      }

      if (this.form.attachments && this.form.attachments.length > 0) {
        this.form.attachments.forEach((file) => {
          formData.append('attachments[]', file)
        })
      }

      if (this.imageFile && this.imageFile instanceof File) {
        formData.append('image', this.imageFile)
      }

      try {
        const response = await axios.post(window.location.origin + '/api/expenses', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        if (response.data.success) {
          this.clearTemporaryData()
          Swal.fire({
            icon: 'success',
            title: this.$t('Success'),
            text: this.$t('Expense added successfully'),
            timer: 2000,
            showConfirmButton: false
          })
          this.$router.push({ name: 'expenses.index' })
        } else {
          Swal.fire({
            icon: 'error',
            title: this.$t('Error'),
            text: response.data.message || this.$t('Please check your input and try again.')
          })
        }
      } catch (error) {
        console.error('Error details:', error.response?.data)

        if (error.response?.status === 422 && error.response?.data?.errors) {
          const errors = error.response.data.errors
          this.form.errors.set(errors)

          let errorMessages = []
          Object.keys(errors).forEach(field => {
            errors[field].forEach(msg => {
              errorMessages.push(`• ${msg}`)
            })
          })

          Swal.fire({
            icon: 'error',
            title: this.$t('Validation Error'),
            html: `<div style="text-align: right; direction: rtl;">${errorMessages.join('<br>')}</div>`,
            confirmButtonText: this.$t('OK')
          })

          this.$nextTick(() => {
            setTimeout(() => {
              const firstError = this.$el.querySelector('.is-invalid')
              if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }, 100)
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: this.$t('Error'),
            text: error.response?.data?.message || this.$t('Please check your input and try again.')
          })
        }
      }
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
        costCenter: this.form.costCenter,
        cost_center_id: this.form.cost_center_id,
        branch: this.form.branch,
        branch_id: this.form.branch_id,
        reference: this.form.reference,
        orderTax: this.form.orderTax,
        taxValue: this.form.taxValue,
        attachments: this.form.attachments.map(f => ({ name: f.name, size: f.size })),
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
          this.form.costCenter = data.costCenter || null
          this.form.cost_center_id = data.cost_center_id || null
          this.form.branch = data.branch || null
          this.form.branch_id = data.branch_id || null
          this.form.reference = data.reference || ''
          this.form.orderTax = data.orderTax || null
          this.form.taxValue = data.taxValue || 0
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
