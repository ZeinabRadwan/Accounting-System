<template>
  <div class="container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">{{ $t('Create Journal Entry') }}</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/home">{{ $t('Dashboard') }}</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/journal-entries">{{ $t('Journal Entries') }}</router-link>
            </li>
            <li class="breadcrumb-item active">{{ $t('Create') }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Journal Entry Form -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">{{ $t('Journal Entry Details') }}</h4>
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
                            <strong>{{ $t('Total Debit') }}:</strong> {{ formatCurrency(totalDebit) }} |
                            <strong>{{ $t('Total Credit') }}:</strong> {{ formatCurrency(totalCredit) }}
                            <span v-if="!isBalanced">
                              <br>
                              <strong>{{ $t('Balance Difference') }}:</strong> {{ formatCurrency(balanceDifference) }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form Actions -->
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary" :disabled="!isBalanced || loading">
                      <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                      <i v-else class="fa fa-save"></i>
                      {{ loading ? $t('Saving...') : $t('Save') }}
                    </button>
                    <router-link to="/journal-entries" class="btn btn-secondary ml-2">
                      <i class="fa fa-times"></i> {{ $t('Cancel') }}
                    </router-link>
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
  data() {
    return {
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

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)
    }
  }
}
</script>

<style scoped>
.page-header {
  margin-bottom: 20px;
}

.breadcrumb {
  background: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}

.table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.invalid-feedback {
  display: block;
}
</style>
