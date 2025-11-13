<template>
  <div>
    <VModal v-model="showModal" @close="closeModal">
      <template v-slot:title>{{ $t("Create Bank Account") }}</template>
      <div class="w-100" @click.stop>
        <form role="form" @keydown="form.onKeydown($event)" @submit.prevent.stop>
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
              <label for="branchName">{{ $t('Branch Name') }}</label>
              <input id="branchName" v-model="form.branchName" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('branchName') }" name="branchName"
                :placeholder="$t('Enter a branch name')" />
              <has-error :form="form" field="branchName" />
            </div>
            <div class="form-group col-md-6">
              <label for="accountNumber">{{ $t('Account Number') }}
                <span class="required">*</span></label>
              <input id="accountNumber" v-model="form.accountNumber" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('accountNumber') }" name="accountNumber"
                :placeholder="$t('Enter an account number')" />
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
                track-by="id"
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
              :class="{ 'is-invalid': form.errors.has('note') }" 
              :placeholder="$t('Write your note here!')" rows="3"></textarea>
            <has-error :form="form" field="note" />
          </div>
        </form>
      </div>
      <div slot="modal-footer">
        <button @click.stop="saveAccount" :loading="form.busy" class="btn btn-success">
          <i class="fas fa-save" /> {{ $t("Save") }}
        </button>
        <button @click.stop="closeModal" class="btn btn-secondary ml-2">
          {{ $t("Cancel") }}
        </button>
      </div>
    </VModal>
    <a @click="toggleModal" class="create-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'

export default {
  middleware: ["auth", "check-permissions"],
  data: () => ({
    showModal: false,
    form: new Form({
      bankName: '',
      branchName: '',
      accountNumber: '',
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      chartOfAccountId: '',
    }),
    chartOfAccounts: [],
  }),
  created() {
    this.loadChartOfAccounts()
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
      if (this.showModal) {
        // Reset form when opening modal
        this.resetForm()
        // Refresh chart of accounts list
        this.loadChartOfAccounts()
      }
    },

    closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation()
        event.preventDefault()
      }
      this.showModal = false
      this.resetForm()
    },

    resetForm() {
      this.form.reset()
      this.form.status = 1
      this.form.date = new Date().toISOString().slice(0, 10)
      this.form.chartOfAccountId = ''
    },

    // Load chart of accounts
    async loadChartOfAccounts() {
      try {
        const response = await axios.get('/api/accounts/chart-of-accounts')
        this.chartOfAccounts = response.data.data || []
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
      }
    },

    // Save account
    async saveAccount(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation()
        event.preventDefault()
      }
      
      await this.form
        .post(window.location.origin + '/api/accounts')
        .then((response) => {
          toast.fire({
            type: 'success',
            title: this.$t('Account added successfully'),
          })
          
          // Get the created account data from response
          // AccountResource returns data in response.data.data
          const accountData = response.data.data || response.data
          
          // Format account for the select dropdown (matching the format used in getAccounts)
          // AccountResource already provides bankName, accountNumber, label, etc.
          const newAccount = {
            id: accountData.id,
            slug: accountData.slug,
            label: accountData.label || `${accountData.bankName} [${accountData.accountNumber}]`,
            bankName: accountData.bankName,
            accountNumber: accountData.accountNumber,
            availableBalance: accountData.availableBalance || 0,
            image: accountData.image || null,
          }
          
          // Emit event with created account data to refresh and select in parent
          this.$emit('accountCreated', newAccount)
          
          // Reset form
          this.resetForm()
          // Close only this modal, not parent modals
          this.showModal = false
        })
        .catch((error) => {
          if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors
            if (this.form && this.form.errors && typeof this.form.errors.set === 'function') {
              this.form.errors.set(errors)
            }
            const messages = Object.values(errors).flat()
            const firstMessage = messages && messages.length ? messages[0] : this.$t('Validation Error')
            toast.fire({ type: 'error', title: firstMessage })
          } else {
            toast.fire({ 
              type: 'error', 
              title: error.response?.data?.message || this.$t('Please check your input and try again.') 
            })
          }
        })
    },
  },
}
</script>

<style scoped>
/* Form Styling */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.required {
  color: #dc3545;
  font-weight: bold;
}

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

.is-invalid {
  border-color: #DC3545 !important;
}

textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* V-Select Styling */
.v-select {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  padding: 10px 16px;
}

/* Button Styling */
.btn-success {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
}

.btn-success:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #6c757d !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
}

.btn-secondary:hover {
  background: #5a6268 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);
}

/* Create button styling */
.create-button {
  text-decoration: none;
  cursor: pointer;
}

/* Row spacing */
.row {
  margin-bottom: 1rem;
}

.row:last-child {
  margin-bottom: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-control {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
}
</style>

