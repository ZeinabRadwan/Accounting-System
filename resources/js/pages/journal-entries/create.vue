<template>
  <div class="container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">Create Journal Entry</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/home">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/journal-entries">Journal Entries</router-link>
            </li>
            <li class="breadcrumb-item active">Create</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Journal Entry Form -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Journal Entry Details</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveJournalEntry">
              <!-- Basic Information -->
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Entry Date <span class="text-danger">*</span></label>
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
                    <label>Reference</label>
                    <input
                      v-model="form.reference"
                      type="text"
                      class="form-control"
                      placeholder="Optional reference number"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Status</label>
                    <select v-model="form.status" class="form-control">
                      <option value="draft">Draft</option>
                      <option value="posted">Posted</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Description <span class="text-danger">*</span></label>
                    <textarea
                      v-model="form.description"
                      class="form-control"
                      rows="3"
                      placeholder="Enter description for this journal entry"
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
                      <h5 class="mb-0">Journal Entry Lines</h5>
                      <button
                        type="button"
                        @click="addLine"
                        class="btn btn-sm btn-primary"
                      >
                        <i class="fa fa-plus"></i> Add Line
                      </button>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th style="width: 5%">#</th>
                              <th style="width: 25%">Account</th>
                              <th style="width: 20%">Description</th>
                              <th style="width: 15%">Reference</th>
                              <th style="width: 15%">Debit Amount</th>
                              <th style="width: 15%">Credit Amount</th>
                              <th style="width: 5%">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(line, index) in form.lines" :key="index">
                              <td>{{ index + 1 }}</td>
                              <td>
                                <select
                                  v-model="line.chart_of_account_id"
                                  class="form-control"
                                  :class="{ 'is-invalid': getLineError(index, 'chart_of_account_id') }"
                                  required
                                >
                                  <option value="">Select Account</option>
                                  <option
                                    v-for="account in chartOfAccounts"
                                    :key="account.id"
                                    :value="account.id"
                                  >
                                    {{ account.code }} - {{ account.name }}
                                  </option>
                                </select>
                                <div v-if="getLineError(index, 'chart_of_account_id')" class="invalid-feedback">
                                  {{ getLineError(index, 'chart_of_account_id') }}
                                </div>
                              </td>
                              <td>
                                <input
                                  v-model="line.description"
                                  type="text"
                                  class="form-control"
                                  placeholder="Line description"
                                />
                              </td>
                              <td>
                                <input
                                  v-model="line.reference"
                                  type="text"
                                  class="form-control"
                                  placeholder="Line reference"
                                />
                              </td>
                              <td>
                                <input
                                  v-model="line.debit_amount"
                                  type="number"
                                  class="form-control"
                                  step="0.01"
                                  min="0"
                                  placeholder="0.00"
                                  @input="updateLineAmounts(index, 'debit')"
                                />
                              </td>
                              <td>
                                <input
                                  v-model="line.credit_amount"
                                  type="number"
                                  class="form-control"
                                  step="0.01"
                                  min="0"
                                  placeholder="0.00"
                                  @input="updateLineAmounts(index, 'credit')"
                                />
                              </td>
                              <td>
                                <button
                                  v-if="form.lines.length > 2"
                                  type="button"
                                  @click="removeLine(index)"
                                  class="btn btn-sm btn-danger"
                                >
                                  <i class="fa fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <!-- Validation Messages -->
                      <div v-if="errors.lines" class="alert alert-danger mt-3">
                        <ul class="mb-0">
                          <li v-for="error in errors.lines" :key="error">{{ error }}</li>
                        </ul>
                      </div>

                      <!-- Totals -->
                      <div class="row mt-3">
                        <div class="col-md-6 offset-md-6">
                          <table class="table table-sm">
                            <tr>
                              <td><strong>Total Debit:</strong></td>
                              <td class="text-right">
                                <span class="text-success">{{ formatCurrency(totalDebit) }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td><strong>Total Credit:</strong></td>
                              <td class="text-right">
                                <span class="text-danger">{{ formatCurrency(totalCredit) }}</span>
                              </td>
                            </tr>
                            <tr>
                              <td><strong>Difference:</strong></td>
                              <td class="text-right">
                                <span :class="balanceDifference === 0 ? 'text-success' : 'text-danger'">
                                  {{ formatCurrency(balanceDifference) }}
                                </span>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>

                      <!-- Balance Warning -->
                      <div v-if="balanceDifference !== 0" class="alert alert-warning mt-3">
                        <i class="fa fa-exclamation-triangle"></i>
                        Journal entry must be balanced. Total debits must equal total credits.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Form Actions -->
              <div class="row mt-4">
                <div class="col-md-12">
                  <div class="form-group">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      :disabled="loading || balanceDifference !== 0"
                    >
                      <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                      <i v-else class="fa fa-save"></i>
                      {{ loading ? 'Saving...' : 'Save Journal Entry' }}
                    </button>
                    <router-link to="/journal-entries" class="btn btn-secondary ml-2">
                      <i class="fa fa-times"></i> Cancel
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
    return { title: 'Create Journal Entry' }
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
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        window.toast.error('Error loading chart of accounts')
      }
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

    updateLineAmounts(index, type) {
      const line = this.form.lines[index]
      if (type === 'debit' && parseFloat(line.debit_amount) > 0) {
        line.credit_amount = ''
      } else if (type === 'credit' && parseFloat(line.credit_amount) > 0) {
        line.debit_amount = ''
      }
    },

    getLineError(index, field) {
      if (this.errors.lines && this.errors.lines[index] && this.errors.lines[index][field]) {
        return this.errors.lines[index][field][0]
      }
      return null
    },

    async saveJournalEntry() {
      try {
        this.loading = true
        this.errors = {}

        // Validate balance
        if (this.balanceDifference !== 0) {
          window.toast.warning('Journal entry must be balanced')
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
