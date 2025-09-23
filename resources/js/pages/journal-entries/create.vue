<template>
  <div class="mb-50">
    <!-- Journal Entry Form -->
    <div class="row">
      <div class="col-md-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'journal-entries.index' }" class="btn btn-primary">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-primary" @click="saveTemporary" title="Save Temporarily">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveJournalEntry">
              <!-- Basic Information -->
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>{{ $t('Entry Date') }} <span class="text-danger">*</span></label>
                    <input
                      v-model="form.entry_date"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.entry_date }"
                      required
                    />
                    <div v-if="errors.entry_date" class="invalid-feedback">
                      {{ errors.entry_date[0] }}
                    </div>
                  </div>
                </div>
                                 <div class="col-md-4">
                   <div class="form-group">
                     <label>{{ $t('Reference') }}</label>
                     <input
                       v-model="form.reference"
                       type="text"
                       class="form-control"
                       :placeholder="$t('Optional reference number')"
                     />
                     <small class="form-text text-muted">{{ $t('Leave blank if no reference is needed') }}</small>
                   </div>
                 </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>{{ $t('Status') }}</label>
                    <select v-model="form.status" class="form-control">
                      <option value="draft">{{ $t('Draft') }}</option>
                      <option value="posted">{{ $t('Posted') }}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>{{ $t('Description') }} <span class="text-danger">*</span></label>
                    <textarea
                      v-model="form.description"
                      class="form-control"
                      rows="3"
                      :placeholder="$t('Enter description for this journal entry')"
                      :class="{ 'is-invalid': errors.description }"
                      required
                    ></textarea>
                    <div v-if="errors.description" class="invalid-feedback">
                      {{ errors.description[0] }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Journal Entry Lines -->
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="mb-0">{{ $t('Journal Entry Lines') }}</h5>
                      <button
                        type="button"
                        @click="addLine"
                        class="btn btn-sm btn-primary"
                      >
                        <i class="fa fa-plus"></i> {{ $t('Add Line') }}
                      </button>
                    </div>
                    <div class="card-body">
                      <div v-for="(line, index) in form.lines" :key="index" class="row mb-3">
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>{{ $t('Chart of Account') }} <span class="text-danger">*</span></label>
                            <v-select
                              v-model="line.chart_of_account_id"
                              :options="chartOfAccounts"
                              label="name"
                              :reduce="option => option.id"
                              :class="{ 'is-invalid': errors[`lines.${index}.chart_of_account_id`] }"
                              :placeholder="$t('Select a Chart of Account')"
                              required
                              @input="(value) => onChartOfAccountChange(index, value)"
                            >
                              <template #option="{ name, code, type }">
                                <div>
                                  <strong>{{ name }}</strong>
                                  <br>
                                  <small class="text-muted">{{ code }} - {{ type }}</small>
                                </div>
                              </template>
                            </v-select>
                            <div v-if="errors[`lines.${index}.chart_of_account_id`]" class="invalid-feedback">
                              {{ errors[`lines.${index}.chart_of_account_id`][0] }}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>{{ $t('Debit Amount') }}</label>
                            <input
                              v-model="line.debit_amount"
                              type="number"
                              step="0.01"
                              min="0"
                              class="form-control"
                              :placeholder="$t('Enter an amount')"
                              @input="calculateLineAmount(index)"
                            />
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="form-group">
                            <label>{{ $t('Credit Amount') }}</label>
                            <input
                              v-model="line.credit_amount"
                              type="number"
                              step="0.01"
                              min="0"
                              class="form-control"
                              :placeholder="$t('Enter an amount')"
                              @input="calculateLineAmount(index)"
                            />
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="form-group">
                            <label>{{ $t('Description') }}</label>
                            <input
                              v-model="line.description"
                              type="text"
                              class="form-control"
                              :placeholder="$t('Line description')"
                            />
                          </div>
                        </div>
                        <div class="col-md-1">
                          <div class="form-group">
                            <label>&nbsp;</label>
                            <button
                              v-if="form.lines.length > 2"
                              type="button"
                              @click="removeLine(index)"
                              class="btn btn-danger btn-sm"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Balance Summary -->
                      <div class="row">
                        <div class="col-md-12">
                          <div class="alert" :class="getBalanceAlertClass()">
                            <strong>{{ $t('Balance Status') }}:</strong>
                            <span v-if="isBalanced" class="text-success">{{ $t('Balanced') }}</span>
                            <span v-else class="text-danger">{{ $t('Unbalanced') }}</span>
                            <br>
                            <strong>{{ $t('Total Debit') }}:</strong> <CurrencyDisplay :amount="totalDebit" /> |
                            <strong>{{ $t('Total Credit') }}:</strong> <CurrencyDisplay :amount="totalCredit" />
                            <span v-if="!isBalanced">
                              <br>
                              <strong>{{ $t('Balance Difference') }}:</strong> <CurrencyDisplay :amount="balanceDifference" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form Actions -->
              <div class="card-footer">
                <div class="dtable-footer">
                  <div class="form-group row display-per-page footer-buttons">
                    <button type="submit" class="btn btn-success" :disabled="!isBalanced || loading">
                      <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                      <i v-else class="fa fa-save"></i>
                      {{ loading ? $t('Saving...') : $t('Save') }}
                    </button>
                    <button type="button" class="btn btn-secondary" @click="resetForm">
                      <i class="fas fa-power-off"></i> {{ $t('Reset') }}
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
export default {
  name: 'CreateJournalEntry',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Journal Entry') }
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
  },
  data() {
    return {
      breadcrumbsCurrent: 'Create Journal Entry',
      breadcrumbs: [
        {
          name: 'Dashboard',
          url: 'home',
        },
        {
          name: 'Journal Entries',
          url: 'journal-entries.index',
        },
        {
          name: 'Create',
          url: '',
        },
      ],
      form: {
        entry_date: new Date().toISOString().split('T')[0],
        reference: '',
        description: '',
        status: 'draft',
        lines: [
          {
            chart_of_account_id: '',
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 1
          },
          {
            chart_of_account_id: '',
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 2
          }
        ]
      },
      chartOfAccounts: [],
      errors: {},
      loading: false
    }
  },
  computed: {
    totalDebit() {
      return this.form.lines.reduce((sum, line) => {
        return sum + (parseFloat(line.debit_amount) || 0)
      }, 0)
    },
    totalCredit() {
      return this.form.lines.reduce((sum, line) => {
        return sum + (parseFloat(line.credit_amount) || 0)
      }, 0)
    },
    balanceDifference() {
      return Math.abs(this.totalDebit - this.totalCredit)
    },
    isBalanced() {
      return this.balanceDifference === 0
    }
  },
  async created() {
    await this.loadChartOfAccounts()
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    async loadChartOfAccounts() {
      try {
        const response = await this.$axios.get('/api/journal-entries/chart-of-accounts')
        this.chartOfAccounts = response.data.data || []
        console.log('Loaded chart of accounts:', this.chartOfAccounts)
        console.log('First account structure:', this.chartOfAccounts[0])
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        window.toast.error('Error loading chart of accounts')
      }
    },

    onChartOfAccountChange(index, value) {
      console.log(`Chart of account changed for line ${index}:`, value)
      console.log(`Line ${index} data:`, this.form.lines[index])
    },

    addLine() {
      const lineNumber = this.form.lines.length + 1
      this.form.lines.push({
        chart_of_account_id: '',
        description: '',
        reference: '',
        debit_amount: '',
        credit_amount: '',
        line_number: lineNumber
      })
    },

    removeLine(index) {
      if (this.form.lines.length > 2) {
        this.form.lines.splice(index, 1)
        // Update line numbers
        this.form.lines.forEach((line, idx) => {
          line.line_number = idx + 1
        })
      }
    },

    calculateLineAmount(index) {
      const line = this.form.lines[index]
      if (parseFloat(line.debit_amount) > 0) {
        line.credit_amount = ''
      } else if (parseFloat(line.credit_amount) > 0) {
        line.debit_amount = ''
      }
    },

    getLineError(index, field) {
      if (this.errors.lines && this.errors.lines[index] && this.errors.lines[index][field]) {
        return this.errors.lines[index][field][0]
      }
      return null
    },

    getBalanceAlertClass() {
      if (this.balanceDifference === 0) {
        return 'alert-success'
      } else {
        return 'alert-warning'
      }
    },

    async saveJournalEntry() {
      try {
        this.loading = true
        this.errors = {}

        // Validate balance
        if (!this.isBalanced) {
          window.toast.warning('Journal entry must be balanced')
          return
        }

        // Validate chart of account selections
        const invalidLines = this.form.lines.filter(line => !line.chart_of_account_id)
        if (invalidLines.length > 0) {
          window.toast.error('Please select chart of accounts for all lines')
          return
        }

        // Prepare data
        const data = {
          ...this.form,
          lines: this.form.lines.map(line => ({
            ...line,
            debit_amount: parseFloat(line.debit_amount) || 0,
            credit_amount: parseFloat(line.credit_amount) || 0
          }))
        }

        // Debug: Log the data being sent
        console.log('Form data being sent:', data)
        console.log('Reference value:', data.reference)
        console.log('Reference type:', typeof data.reference)
        console.log('Chart of account IDs:', data.lines.map(line => line.chart_of_account_id))
        console.log('Original form lines:', this.form.lines)
        console.log('Chart of accounts array:', this.chartOfAccounts)

        const response = await this.$axios.post('/api/journal-entries', data)
        
        // Clear temporary data after successful save
        this.clearTemporaryData()
        
        // Show success message
        window.toast.success('Journal entry created successfully!')
        
        // Redirect to journal entries list
        this.$router.push('/journal-entries')
      } catch (error) {
        console.error('Error creating journal entry:', error)
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors
        } else {
          window.toast.error('Error creating journal entry')
        }
      } finally {
        this.loading = false
      }
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        entry_date: this.form.entry_date,
        reference: this.form.reference,
        description: this.form.description,
        status: this.form.status,
        lines: this.form.lines,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('journalEntryTempData', JSON.stringify(tempData))
      window.toast.success('Form saved temporarily')
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('journalEntryTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.entry_date = data.entry_date || this.form.entry_date
          this.form.reference = data.reference || this.form.reference
          this.form.description = data.description || this.form.description
          this.form.status = data.status || this.form.status
          this.form.lines = data.lines || this.form.lines
        } catch (error) {
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('journalEntryTempData')
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)
    },

    resetForm() {
      this.form = {
        entry_date: new Date().toISOString().split('T')[0],
        reference: '',
        description: '',
        status: 'draft',
        lines: [
          {
            chart_of_account_id: '',
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 1
          },
          {
            chart_of_account_id: '',
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 2
          }
        ]
      }
      this.errors = {}
    }
  }
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

.text-danger {
  color: #DC3545 !important;
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

.btn-primary:disabled {
  background: #6C757D !important;
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
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

.btn-danger {
  background: #DC3545 !important;
  color: white !important;
  padding: 8px 12px !important;
  border-radius: 8px !important;
  border: none !important;
  font-weight: 500;
}

.btn-danger:hover {
  background: #C82333 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
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

/* Alert Styling */
.alert {
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 16px;
  border: 1px solid transparent;
}

.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}

.alert-warning {
  background-color: #fff3cd;
  border-color: #ffeaa7;
  color: #856404;
}

/* Table Styling */
.table th {
  background-color: #f8f9fa;
  font-weight: 600;
  border-bottom: 2px solid #E5E7EB;
  color: #374151;
  padding: 12px 16px;
}

.table td {
  padding: 12px 16px;
  border-bottom: 1px solid #E5E7EB;
  vertical-align: middle;
}

.table tbody tr:hover {
  background-color: #F8F9FA;
}

/* Invalid Feedback */
.invalid-feedback {
  display: block;
  color: #DC3545;
  font-size: 12px;
  margin-top: 5px;
}

/* Form Text */
.form-text {
  font-size: 12px;
  color: #6C757D;
  margin-top: 5px;
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
