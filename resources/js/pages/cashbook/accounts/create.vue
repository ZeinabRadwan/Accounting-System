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
                <button type="submit" class="btn btn-success" :title="$t('Save Temporarily')" form="accountCreateForm">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="accountCreateForm" role="form" @submit.prevent="saveAccount" @keydown="form.onKeydown($event)">
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
                    :options="chartOfAccounts"
                    label="name"
                    :reduce="option => option.id"
                    :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                    name="chartOfAccountId"
                    :placeholder="$t('Select a Chart of Account')"
                  >
                    <template #option="{ name, code, type }">
                      <div>
                        <strong>{{ name }}</strong>
                        <br>
                        <small class="text-muted">{{ code }} - {{ type }}</small>
                      </div>
                    </template>
                  </v-select>
                  <has-error :form="form" field="chartOfAccountId" />
                </div>
                <div class="form-group col-md-6">
                  <label for="image">{{ $t("Image") }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t("Choose file")
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
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
export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Account') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Account',
    breadcrumbs: [
      {
        name: 'Dashboard',
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
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      bankName: '',
      branchName: '',
      accountNumber: '',
      date: new Date().toISOString().slice(0, 10),
      image: '',
      note: '',
      status: 1,
      chartOfAccountId: null,
    }),
    url: null,
    loading: true,
    chartOfAccounts: [],
  }),

  mounted() {
    this.loadChartOfAccounts()
    this.loadTemporaryData()
  },

  methods: {
    // load chart of accounts
    async loadChartOfAccounts() {
      try {
        const response = await this.$axios.get('/api/accounts/chart-of-accounts')
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
      }
    },
    // save account
    async saveAccount() {
      await this.form
        .post(window.location.origin + '/api/accounts')
        .then(() => {
          // Clear temporary data after successful save
          this.clearTemporaryData()
          toast.fire({
            type: 'success',
            title: this.$t('Account added successfully'),
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
      localStorage.setItem('accountTempData', JSON.stringify(tempData))
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('accountTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.bankName = data.bankName || ''
          this.form.branchName = data.branchName || ''
          this.form.accountNumber = data.accountNumber || ''
          this.form.accountName = data.accountName || ''
          this.form.openingBalance = data.openingBalance || ''
          this.form.bankPhone = data.bankPhone || ''
          this.form.bankAddress = data.bankAddress || ''
          this.form.enabled = data.enabled !== undefined ? data.enabled : 1
          this.form.note = data.note || ''
          this.form.chartOfAccountId = data.chartOfAccountId || null
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('accountTempData')
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (
        file.size < 2111775 &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif")
      ) {
        reader.onloadend = (file) => {
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(
          this.$t("Error!"),
          this.$t("Please select a valid thumbnail with size less than 2 MB")
        );
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

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* Custom File Input Styling */
.custom-file-input {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
}

.custom-file-label {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  color: #374151;
  font-weight: 500;
}

.custom-file-label::after {
  background: #33a0d9;
  border-radius: 0 10px 10px 0;
  color: white;
  font-weight: 500;
}

/* Image Preview Styling */
.bg-light {
  background-color: #F8F9FA !important;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #E5E7EB;
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

/* Debug Information Styling */
.text-muted {
  color: #6C757D !important;
  font-size: 12px;
}

.small {
  font-size: 12px;
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
