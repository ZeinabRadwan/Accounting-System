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
                <router-link :to="{ name: 'accounts.index' }" class="btn btn-info">
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
                <button type="submit" class="btn btn-success" :title="$t('Save Temporarily')" form="accountEditForm">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="accountEditForm" role="form" @submit.prevent="updateAccount" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="bankName">{{ $t('Bank Name') }}
                    <span class="required">*</span></label>
                  <input id="bankName" v-model="form.bankName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('bankName') }" name="bankName"
                    :placeholder="$t('Enter a bank name')" />
                  <has-error :form="form" field="bankName" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="branchName">{{ $t('Branch Name') }}
                  </label>
                  <input id="branchName" v-model="form.branchName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('branchName') }" name="branchName"
                    :placeholder="$t('Enter a branch name')" />
                  <has-error :form="form" field="branchName" />
                </div>
                <div class="form-group col-md-6">
                  <label for="accountNumber">{{ $t('Account Number') }}
                    <span class="required">*</span></label>
                  <input id="accountNumber" v-model="form.accountNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('accountNumber') }" name="accountNumber" :placeholder="$t('Enter an account number')
                      " />
                  <has-error :form="form" field="accountNumber" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="chartOfAccountId">{{ $t('Chart of Account') }}
                    <span class="required">*</span></label>
                  <v-select
                    v-model="form.chartOfAccountId"
                    :options="filteredChartOfAccounts"
                    label="name"
                    :reduce="option => option.id"
                    :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                    name="chartOfAccountId"
                    :placeholder="$t('Select a Chart of Account')"
                    :disabled="loadingChartOfAccounts"
                  >
                    <template #option="{ name, code, type }">
                      <div>
                        <strong>{{ name }}</strong>
                        <br>
                        <small class="text-muted">
                          {{ code }} - {{ type }}
                        </small>
                      </div>
                    </template>
                  </v-select>
                  <div class="mt-2">
                    <button 
                      v-if="$can('chart-of-account-create')" 
                      type="button"
                      class="btn btn-sm btn-outline-primary"
                      @click="createNewChartOfAccount"
                      :disabled="!form.bankName || form.bankName.trim() === '' || creatingChartOfAccount">
                      <i class="fas fa-plus"></i>
                      <span v-if="creatingChartOfAccount">{{ $t('Creating...') }}</span>
                      <span v-else>{{ $t('Create New Chart of Account') }}</span>
                    </button>
                    <small v-if="!form.bankName || form.bankName.trim() === ''" class="text-muted d-block mt-1">
                      <i class="fas fa-info-circle"></i>
                      {{ $t('Enter bank name to create a new chart of account') }}
                    </small>
                  </div>
                  <has-error :form="form" field="chartOfAccountId" />
                </div>
                <div class="form-group col-md-6">
                  <label for="image">{{ $t("Image") }}</label>
                  <div class="custom-file">
                    <input
                      id="image"
                      type="file"
                      class="custom-file-input"
                      name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }"
                      @change="onFileChange"
                    />
                    <label class="custom-file-label" for="image">{{
                      $t("Choose file")
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img
                      v-if="url"
                      :src="url"
                      class="img-fluid"
                      :alt="$t('Attached Image')"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6">
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

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Account') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Account',
    breadcrumbs: [
      {
        name: 'Edit Account',
        url: 'home',
      },
      {
        name: 'Cashbook',
        url: '',
      },
      {
        name: 'Accounts',
        url: 'accounts.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    form: new Form({
      accountLabel: '',
      bankName: '',
      branchName: '',
      accountNumber: '',
      date: '',
      image: '',
      note: '',
      status: 1,
      chartOfAccountId: null,
    }),
    url: null,
    loading: true,
    chartOfAccounts: [],
    loadingChartOfAccounts: false,
    creatingChartOfAccount: false,
    accountType: null, // 'bank' or 'cash'
  }),

  computed: {
    filteredChartOfAccounts() {
      return this.chartOfAccounts || []
    },
  },

  mounted() {
    this.loadTemporaryData()
    // Load account first to determine account type
    this.getAccount()
  },

  

  methods: {
    // load chart of accounts based on account type
    async loadChartOfAccounts(accountType) {
      if (!accountType) {
        return
      }
      
      this.loadingChartOfAccounts = true
      try {
        // Load child accounts based on account type (bank or cash)
        const response = await this.$axios.get('/api/accounts/child-chart-of-accounts', {
          params: {
            account_type: accountType
          }
        })
        if (response.data && response.data.success) {
          this.chartOfAccounts = response.data.data || []
        } else {
          this.chartOfAccounts = []
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        toast.fire({
          type: 'error',
          title: this.$t('Failed to load chart of accounts')
        })
        this.chartOfAccounts = []
      } finally {
        this.loadingChartOfAccounts = false
      }
    },
    // determine account type from chart of account's parent
    async determineAccountType(chartOfAccount) {
      if (!chartOfAccount || !chartOfAccount.parent_id) {
        // Default to bank if no chart of account or no parent
        return 'bank'
      }
      
      try {
        const parentId = chartOfAccount.parent_id
        const branchId = this.$store.getters['auth/currentUser']?.default_branch_id
          
        // Check if parent is main_bank_account
        const bankSettingResponse = await this.$axios.get('/api/account-routing-settings', {
          params: {
            module: 'banking',
            setting_key: 'main_bank_account',
            branch_id: branchId
          }
        })
        
        if (bankSettingResponse.data && bankSettingResponse.data.success) {
          const settings = bankSettingResponse.data.data || []
          const bankSetting = settings.find(s => s.main_account_id === parentId)
          if (bankSetting) {
            return 'bank'
          }
        }
        
        // Check if parent is main_cash_account
        const cashSettingResponse = await this.$axios.get('/api/account-routing-settings', {
          params: {
            module: 'banking',
            setting_key: 'main_cash_account',
            branch_id: branchId
          }
        })
        
        if (cashSettingResponse.data && cashSettingResponse.data.success) {
          const settings = cashSettingResponse.data.data || []
          const cashSetting = settings.find(s => s.main_account_id === parentId)
          if (cashSetting) {
            return 'cash'
          }
        }
      } catch (error) {
        console.error('Error determining account type:', error)
      }
      
      // Default to bank if we can't determine
      return 'bank'
    },
    // get account
    async getAccount() {
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/accounts/' + this.$route.params.slug
        )
        this.form.accountLabel = data.data.accountLabel
        this.form.bankName = data.data.bankName
        this.form.branchName = data.data.branchName
        this.form.accountNumber = data.data.accountNumber
        this.form.date = data.data.date
        this.url = data.data.image
        this.form.note = data.data.note
        this.form.status = data.data.status
        
        // Determine account type from chart of account
        if (data.data.chartOfAccount && data.data.chartOfAccount.id) {
          this.form.chartOfAccountId = data.data.chartOfAccount.id
          // Determine account type and load appropriate chart of accounts
          this.accountType = await this.determineAccountType(data.data.chartOfAccount)
          await this.loadChartOfAccounts(this.accountType)
        } else {
          this.form.chartOfAccountId = null
          // Default to bank if no chart of account
          this.accountType = 'bank'
          await this.loadChartOfAccounts('bank')
        }
      } catch (error) {
        console.error('Error loading account:', error)
        toast.fire({
          type: 'error',
          title: this.$t('Failed to load account')
        })
        // Default to bank on error
        this.accountType = 'bank'
        await this.loadChartOfAccounts('bank')
      }
    },
    // create new chart of account
    async createNewChartOfAccount() {
      // Validate bank name
      if (!this.form.bankName || this.form.bankName.trim() === '') {
        toast.fire({
          type: 'error',
          title: this.$t('Bank name is required to create a chart of account')
        })
        return
      }

      // Use determined account type or default to bank
      const accountType = this.accountType || 'bank'

      this.creatingChartOfAccount = true
      try {
        const response = await this.$axios.post('/api/accounts/create-child-chart-of-account', {
          account_type: accountType,
          bank_name: this.form.bankName.trim()
        })

        if (response.data && response.data.success) {
          const newAccount = response.data.data
          // Add the new account to the list
          this.chartOfAccounts.push(newAccount)
          // Select the newly created account
          this.form.chartOfAccountId = newAccount.id
          
          toast.fire({
            type: 'success',
            title: this.$t('Chart of account created successfully')
          })
        } else {
          toast.fire({
            type: 'error',
            title: response.data?.message || this.$t('Failed to create chart of account')
          })
        }
      } catch (error) {
        console.error('Error creating chart of account:', error)
        const errorMessage = error.response?.data?.message || this.$t('Failed to create chart of account')
        toast.fire({
          type: 'error',
          title: errorMessage
        })
      } finally {
        this.creatingChartOfAccount = false
      }
    },
    // update account
    async updateAccount() {
      await this.form
        .patch(
          window.location.origin + '/api/accounts/' + this.$route.params.slug
        )
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: 'success',
            title: this.$t('Account updated successfully'),
          })
          this.$router.push({ name: 'accounts.index' })
        })
        .catch((error) => {
          if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors
            if (this.form && this.form.errors && typeof this.form.errors.set === 'function') {
              this.form.errors.set(errors)
            }
            const messages = Object.values(errors).flat()
            const firstMessage = messages && messages.length ? messages[0] : this.$t('Validation Error')
            const backendMessage = (error.response.data.message && error.response.data.message !== 'Validation Error')
              ? error.response.data.message
              : firstMessage
            toast.fire({ type: 'error', title: backendMessage })
          } else if (error.response && (error.response.data?.message || error.response.data?.error)) {
            const msg = error.response.data.message || error.response.data.error
            toast.fire({ type: 'error', title: msg })
          } else {
            toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
          }
        })
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        bankName: this.form.bankName,
        branchName: this.form.branchName,
        accountNumber: this.form.accountNumber,
        accountName: this.form.accountName,
        openingBalance: this.form.openingBalance,
        bankPhone: this.form.bankPhone,
        bankAddress: this.form.bankAddress,
        enabled: this.form.enabled,
        note: this.form.note,
        chartOfAccountId: this.form.chartOfAccountId,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('accountEditTempData', JSON.stringify(tempData))
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('accountEditTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.bankName = data.bankName || this.form.bankName
          this.form.branchName = data.branchName || this.form.branchName
          this.form.accountNumber = data.accountNumber || this.form.accountNumber
          this.form.accountName = data.accountName || this.form.accountName
          this.form.openingBalance = data.openingBalance || this.form.openingBalance
          this.form.bankPhone = data.bankPhone || this.form.bankPhone
          this.form.bankAddress = data.bankAddress || this.form.bankAddress
          this.form.enabled = data.enabled !== undefined ? data.enabled : this.form.enabled
          this.form.note = data.note || this.form.note
          this.form.chartOfAccountId = data.chartOfAccountId || this.form.chartOfAccountId
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('accountEditTempData')
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
</style>
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
</style>
