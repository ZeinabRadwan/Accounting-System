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
                <router-link :to="{ name: 'journal-entries.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="button" class="btn btn-success" @click="updateJournalEntry" title="Update">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>

          <!-- Loading State -->
          <div v-if="loading" class="card-body text-center">
            <i class="fa fa-spinner fa-spin fa-3x text-primary"></i>
            <p class="mt-3">{{ $t('Loading journal entry...') }}</p>
          </div>

          <!-- Journal Entry Form -->
          <div v-else-if="journalEntry" class="card-body">
            <form @submit.prevent="updateJournalEntry">
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
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>{{ $t('Status') }}</label>
                    <select v-model="form.status" class="form-control" disabled>
                      <option value="draft">{{ $t('Draft') }}</option>
                      <option value="posted">{{ $t('Posted') }}</option>
                    </select>
                    <small class="form-text text-muted">{{ $t('Status cannot be changed after creation') }}</small>
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
                
                      <div class="table-responsive">
                        <table class="table je-lines-table mb-0">
                          <thead>
                            <tr>
                              <th style="width: 35%">{{ $t('Chart of Account') }}</th>
                              <th style="width: 15%" class="text-right">{{ $t('Debit') }}</th>
                              <th style="width: 15%" class="text-right">{{ $t('Credit') }}</th>
                              <th style="width: 25%">{{ $t('Description') }}</th>
                              <th style="width: 10%" class="text-center">{{ $t('Actions') }}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(line, index) in form.lines" :key="index">
                              <td>
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
                              </td>
                              <td class="align-middle">
                                <input
                                  v-model="line.debit_amount"
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  class="form-control text-right"
                                  :placeholder="$t('0.00')"
                                  @input="calculateLineAmount(index)"
                                />
                              </td>
                              <td class="align-middle">
                                <input
                                  v-model="line.credit_amount"
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  class="form-control text-right"
                                  :placeholder="$t('0.00')"
                                  @input="calculateLineAmount(index)"
                                />
                              </td>
                              <td class="align-middle">
                                <input
                                  v-model="line.description"
                                  type="text"
                                  class="form-control"
                                  :placeholder="$t('Line description')"
                                />
                              </td>
                              <td class="text-center align-middle">
                                <button
                                  v-if="form.lines.length > 2"
                                  type="button"
                                  @click="removeLine(index)"
                                  class="btn btn-outline-danger btn-sm"
                                >
                                  <i class="fa fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr class="je-summary-row">
                              <td class="text-right"><strong>{{ $t('Totals') }}:</strong></td>
                              <td class="text-right"><CurrencyDisplay :amount="totalDebit" /></td>
                              <td class="text-right"><CurrencyDisplay :amount="totalCredit" /></td>
                              <td colspan="2">
                                <div :class="['badge', isBalanced ? 'badge-success' : 'badge-warning']">
                                  {{ isBalanced ? $t('Balanced') : $t('Unbalanced') }}
                                  <span v-if="!isBalanced"> - {{ $t('Diff') }}: <CurrencyDisplay :amount="balanceDifference" /></span>
                                </div>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <!-- Bottom actions: Add Line button aligned by direction -->
                      <div class="je-lines-actions d-flex" :class="isRTL ? 'justify-content-start' : 'justify-content-end'">
                        <button type="button" @click="addLine" class="btn btn-primary add-line-btn">
                          <i class="fa fa-plus"></i> {{ $t('Add Line') }}
                        </button>
                      </div>
                  
                </div>
              </div>

              <!-- Form Actions -->
              <div class="card-footer">
                <div class="dtable-footer">
                  <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                    <button type="submit" class="btn btn-success" :disabled="!isBalanced || saving">
                      <i v-if="saving" class="fa fa-spinner fa-spin"></i>
                      <i v-else class="fa fa-save"></i>
                      {{ saving ? $t('Updating...') : $t('Update') }}
                    </button>
                    <router-link to="/journal-entries" class="btn btn-secondary">
                      <i class="fa fa-times"></i> {{ $t('Cancel') }}
                    </router-link>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="card-body text-center">
            <i class="fa fa-exclamation-triangle fa-3x text-danger"></i>
            <p class="mt-3">{{ error }}</p>
            <router-link to="/journal-entries" class="btn btn-primary">
              {{ $t('Back to Journal Entries') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditJournalEntry',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Journal Entry') }
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
  },
  data() {
    return {
      breadcrumbsCurrent: 'Edit Journal Entry',
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
          name: 'Edit',
          url: '',
        },
      ],
      journalEntry: null,
      form: {
        entry_date: '',
        reference: '',
        description: '',
        status: 'draft',
        lines: []
      },
      chartOfAccounts: [],
      errors: {},
      loading: true,
      saving: false
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
    },
    isRTL() {
      return document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl'
    }
  },
  async created() {
    await Promise.all([
      this.loadJournalEntry(),
      this.loadChartOfAccounts()
    ])
  },
  mounted() {
    // Load temporary data after component is mounted
    this.$nextTick(() => {
      this.loadTemporaryData()
    })
  },
  methods: {
    async loadJournalEntry() {
      try {
        this.loading = true
        const response = await this.$axios.get(`/api/journal-entries/${this.$route.params.id}`)
        this.journalEntry = response.data.data
        
        // Populate form with existing data
        this.form = {
          entry_date: this.journalEntry.entry_date,
          reference: this.journalEntry.reference || '',
          description: this.journalEntry.description,
          status: this.journalEntry.status,
          lines: this.journalEntry.lines.map(line => ({
            chart_of_account_id: line.chart_of_account_id,
            description: line.description || '',
            reference: line.reference || '',
            debit_amount: line.debit_amount > 0 ? line.debit_amount : '',
            credit_amount: line.credit_amount > 0 ? line.credit_amount : '',
            line_number: line.line_number
          }))
        }
      } catch (error) {
        console.error('Error loading journal entry:', error)
        window.toast.error('Error loading journal entry')
      } finally {
        this.loading = false
      }
    },

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

    async updateJournalEntry() {
      try {
        this.saving = true
        this.errors = {}

        // Validate balance
        if (!this.isBalanced) {
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

        await this.$axios.put(`/api/journal-entries/${this.journalEntry.id}`, data)
        
        // Clear temporary data after successful save
        this.clearTemporaryData()
        
        window.toast.success('Journal entry updated successfully!')
        this.$router.push(`/journal-entries/${this.journalEntry.id}`)
      } catch (error) {
        console.error('Error updating journal entry:', error)
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors
          const backendError = error.response.data.error || error.response.data.message
          if (backendError) {
            window.toast.error(backendError)
          }
        } else {
          const backendError = error?.response?.data?.error || error?.response?.data?.message || 'Error updating journal entry'
          window.toast.error(backendError)
        }
      } finally {
        this.saving = false
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
      localStorage.setItem('journalEntryEditTempData', JSON.stringify(tempData))
      
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('journalEntryEditTempData')
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
      localStorage.removeItem('journalEntryEditTempData')
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)
    },
    getBalanceAlertClass() {
      return this.isBalanced ? 'alert-success' : 'alert-warning'
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

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

.table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.invalid-feedback {
  display: block;
}

/* Journal Entry Lines - Table Layout */
.je-lines-table thead th {
  background-color: #f8f9fa;
  font-weight: 600;
  border-bottom: 2px solid #E5E7EB;
}

.je-lines-table td {
  vertical-align: middle;
}

.je-summary-row td {
  background: #fafbfc;
  border-top: 2px solid #E5E7EB;
}

.add-line-btn {
  padding: 8px 14px !important;
  border-radius: 8px !important;
}

.je-lines-actions {
  padding: 12px 16px;
}

.table-responsive {
  overflow: visible;
}

/* Ensure v-select dropdown renders above table */
.v-select .vs__dropdown-menu {
  z-index: 1050 !important;
}
</style>
