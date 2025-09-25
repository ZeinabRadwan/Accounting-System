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
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" title="Save Temporarily" form="accountEditForm">
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
                    v-model="formattedChartOfAccountId"
                    :options="chartOfAccounts"
                    label="name"
                    :reduce="option => option.id"
                    track-by="id"
                    :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                    name="chartOfAccountId"
                    :placeholder="$t('Select a Chart of Account')"
                    :key="chartOfAccounts.length"
                  >
                    <template #option="{ name, code, type }">
                      <div>
                        <strong>{{ name }}</strong>
                        <br>
                        <small class="text-muted">{{ code }} - {{ type }}</small>
                      </div>
                    </template>
                  </v-select>
                  <!-- Debug information -->
                  <!-- <div v-if="selectedChartOfAccount" class="mt-2 text-muted small">
                    Selected: {{ selectedChartOfAccount.name }} (ID: {{ selectedChartOfAccount.id }})
                  </div>
                  <div v-else class="mt-2 text-muted small">
                    No chart of account selected. Current value: {{ formattedChartOfAccountId }}
                  </div> -->
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
import Swal from "sweetalert2"

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
      chartOfAccountId: '',
    }),
    url: null,
    loading: true,
    chartOfAccounts: [],
  }),

  mounted() {
    this.loadChartOfAccounts()
    this.loadTemporaryData()
  },

  watch: {
    'formattedChartOfAccountId': {
      handler(newVal, oldVal) {
        console.log('formattedChartOfAccountId changed from', oldVal, 'to', newVal)
      },
      deep: true
    },
    'chartOfAccounts': {
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          // Load account data after chart of accounts are available
          this.getAccount()
        }
      },
      immediate: true
    }
  },

  computed: {
    selectedChartOfAccount() {
      if (!this.form.chartOfAccountId || !this.chartOfAccounts.length) return null
      return this.chartOfAccounts.find(coa => coa.id === this.form.chartOfAccountId)
    },
    
    // Ensure the chartOfAccountId is properly formatted
    formattedChartOfAccountId: {
      get() {
        return this.form.chartOfAccountId
      },
      set(value) {
        this.form.chartOfAccountId = value
      }
    }
  },

  

  methods: {
    // load chart of accounts
    async loadChartOfAccounts() {
      try {
        const response = await this.$axios.get('/api/accounts/chart-of-accounts')
        console.log('Full API response:', response)
        console.log('Response data:', response.data)
        this.chartOfAccounts = response.data.data || []
        console.log('Loaded chart of accounts:', this.chartOfAccounts)
        console.log('First chart of account structure:', this.chartOfAccounts[0])
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
      }
    },
    // get account
    async getAccount() {
      const { data } = await axios.get(
        window.location.origin + '/api/accounts/' + this.$route.params.slug
      )
      console.log('Loaded account data:', data.data)
      this.form.accountLabel = data.data.accountLabel
      this.form.bankName = data.data.bankName
      this.form.branchName = data.data.branchName
      this.form.accountNumber = data.data.accountNumber
      this.form.date = data.data.date
      this.url = data.data.image
      this.form.note = data.data.note
      this.form.status = data.data.status
      
      // Fix: Set the chartOfAccountId to the ID value for proper v-select handling
      if (data.data.chartOfAccount && data.data.chartOfAccount.id) {
        this.form.chartOfAccountId = data.data.chartOfAccount.id
      } else {
        this.form.chartOfAccountId = null
      }
      console.log('Set chartOfAccountId to:', this.form.chartOfAccountId)
      
      // Ensure the v-select is properly updated
      this.$nextTick(() => {
        console.log('After nextTick - chartOfAccountId:', this.form.chartOfAccountId)
      })
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
            toast.fire({ type: 'error', title: this.$t('Opps...something went wrong') })
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
