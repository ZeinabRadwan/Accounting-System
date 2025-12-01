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
                <router-link :to="{ name: 'journal-entries.index' }" class="btn btn-info">
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
                <button type="button" class="btn btn-success" @click="saveJournalEntry" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveJournalEntry">
              <!-- Basic Information -->
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group">
                    <label>{{ $t('Entry Date') }} <span class="text-danger">*</span></label>
                    <input v-model="form.entry_date" type="date" class="form-control"
                      :class="{ 'is-invalid': errors.entry_date }" required />
                    <div v-if="errors.entry_date" class="invalid-feedback">
                      {{ errors.entry_date[0] }}
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label>{{ $t('Reference') }}</label>
                    <input v-model="form.reference" type="text" class="form-control"
                      :placeholder="$t('Optional reference number')" />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label>{{ $t('Branch') }}</label>
                    <select v-model="form.branch_id" class="form-control" required>
                      <option value="">{{ $t('Select Branch') }}</option>
                      <option v-for="branch in branches" :key="branch.id" :value="branch.id">
                        {{ branch.name }}
                      </option>
                    </select>
                    <div v-if="errors.branch_id" class="invalid-feedback">
                      {{ errors.branch_id[0] }}
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label>{{ $t('Entry Number') }}</label>
                    <input :value="nextEntryNumber" type="text" class="form-control" readonly
                      :placeholder="$t('Auto-generated')" />
                    <small class="form-text text-muted">{{ $t('Auto-generated entry number') }}</small>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>{{ $t('Description') }} <span class="text-danger">*</span></label>
                    <textarea v-model="form.description" class="form-control" rows="3"
                      :placeholder="$t('Enter description for this journal entry')"
                      :class="{ 'is-invalid': errors.description }" required></textarea>
                    <div v-if="errors.description" class="invalid-feedback">
                      {{ errors.description[0] }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Journal Entry Lines -->
              <div class="row">
                <div class="col-md-12">


                  <!-- <h5 class="mb-0">{{ $t('Journal Entry Lines') }}</h5> -->
                  <!-- <button type="button" @click="addLine" class="btn btn-primary add-line-btn header-add-line" :class="isRTL ? 'ml-2' : 'mr-2'">
                        <i class="fa fa-plus"></i> {{ $t('Add Line') }}
                      </button> -->


                  <div class="table-responsive">
                    <table class="table je-lines-table mb-0">
                      <thead>
                        <tr>
                          <th style="width: 30%">{{ $t('Account Code & Name') }}</th>
                          <th style="width: 15%" class="text-right">{{ $t('Debit') }}</th>
                          <th style="width: 15%" class="text-right">{{ $t('Credit') }}</th>
                          <th style="width: 20%">{{ $t('Cost Center') }}</th>
                          <th style="width: 15%">{{ $t('Statement') }}</th>
                          <th style="width: 5%" class="text-center">{{ $t('Actions') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(line, index) in form.lines" :key="index">
                          <td>
                            <v-select v-model="line.chart_of_account_id" :options="chartOfAccounts" label="name"
                              :reduce="option => option.id"
                              :class="{ 'is-invalid': errors[`lines.${index}.chart_of_account_id`] }"
                              :placeholder="$t('Select a Chart of Account')" required
                              @input="(value) => onChartOfAccountChange(index, value)">
                              <template #option="{ name, code, type }">
                                <div>
                                  <strong>{{ code }} - {{ name }}</strong>
                                  <br>
                                  <small class="text-muted">{{ type }}</small>
                                </div>
                              </template>
                              <template #selected-option="{ name, code }">
                                <div>
                                  <strong>{{ code }} - {{ name }}</strong>
                                </div>
                              </template>
                            </v-select>
                            <div v-if="errors[`lines.${index}.chart_of_account_id`]" class="invalid-feedback">
                              {{ errors[`lines.${index}.chart_of_account_id`][0] }}
                            </div>
                          </td>
                          <td class="align-middle text-right">
                            <input v-model="line.debit_amount" type="number" step="0.01" min="0"
                              class="form-control text-right" :placeholder="$t('0.00')"
                              @input="calculateLineAmount(index)" style="text-align: right;" />
                          </td>
                          <td class="align-middle text-right">
                            <input v-model="line.credit_amount" type="number" step="0.01" min="0"
                              class="form-control text-right" :placeholder="$t('0.00')"
                              @input="calculateLineAmount(index)" style="text-align: right;" />
                          </td>
                          <td class="align-middle">
                            <CostCenterSelect v-model="line.cost_center_id" :clearable="true"
                              :placeholder="$t('Select Cost Center')"
                              :class="{ 'is-invalid': errors[`lines.${index}.cost_center_id`] }" />
                            <div v-if="errors[`lines.${index}.cost_center_id`]" class="invalid-feedback">
                              {{ errors[`lines.${index}.cost_center_id`][0] }}
                            </div>
                          </td>
                          <td class="align-middle">
                            <input v-model="line.description" type="text" class="form-control" />
                          </td>
                          <td class="text-center align-middle">
                            <button v-if="form.lines.length > 2" type="button" @click="removeLine(index)"
                              class="btn btn-outline-danger btn-sm">
                              <i class="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr class="je-summary-row">
                          <td class="text-right"><strong>: {{ $t('Totals') }}</strong></td>
                          <td class="text-right">
                            <CurrencyDisplay :amount="totalDebit" />
                          </td>
                          <td class="text-right">
                            <CurrencyDisplay :amount="totalCredit" />
                          </td>
                          <td colspan="3">
                            <div :class="['badge', isBalanced ? 'badge-success' : 'badge-warning']">
                              {{ isBalanced ? $t('Balanced') : $t('Unbalanced') }}
                              <span v-if="!isBalanced"> - {{ $t('Diff') }}:
                                <CurrencyDisplay :amount="balanceDifference" />
                              </span>
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

              <!-- Attachment and Notes -->
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{ $t('Attachment') }}</label>
                    <input type="file" class="form-control" @change="onAttachmentChange"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.gif" ref="attachmentInput" />
                    <small class="form-text text-muted" v-if="attachmentFile">
                      {{ attachmentFile.name }} ({{ formatFileSize(attachmentFile.size) }})
                    </small>
                    <small class="form-text text-muted" v-else>
                      {{ $t('Optional attachment file') }}
                    </small>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{ $t('Notes') }}</label>
                    <textarea v-model="form.notes" class="form-control" rows="3"
                      :placeholder="$t('Additional notes')"></textarea>
                  </div>
                </div>
              </div>

              <!-- Form Actions -->
              <div class="card-footer">
                <div class="dtable-footer">
                  <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                    <button type="submit" class="btn btn-success" :disabled="!isBalanced || loading">
                      <i v-if="loading" class="fa fa-spinner fa-spin"></i>
                      <i v-else class="fa fa-plus"></i>
                      {{ loading ? $t('Saving...') : $t('Add') }}
                    </button>
                    <button type="button" class="btn btn-secondary" @click="resetForm">
                      <i class="fas fa-times"></i> {{ $t('Cancel') }}
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
    CostCenterSelect: () => import('~/components/CostCenterSelect'),
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
        branch_id: null,
        notes: '',
        attachment: '',
        status: 'draft',
        lines: [
          {
            chart_of_account_id: '',
            cost_center_id: null,
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 1
          },
          {
            chart_of_account_id: '',
            cost_center_id: null,
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 2
          }
        ]
      },
      chartOfAccounts: [],
      branches: [],
      currentBranch: null,
      nextEntryNumber: '',
      attachmentFile: null,
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
    },
    isRTL() {
      return document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl'
    }
  },
  async created() {
    await this.loadChartOfAccounts()
    await this.loadBranches()
    await this.loadCurrentBranch()
    await this.loadNextEntryNumber()
  },
  mounted() {
    this.loadTemporaryData()
  },
  methods: {
    async loadChartOfAccounts() {
      try {
        // Get current locale from i18n
        const locale = this.$i18n?.locale || this.$store?.getters?.['lang/locale'] || 'en'
        const response = await this.$axios.get('/api/journal-entries/chart-of-accounts', {
          params: { locale }
        })
        this.chartOfAccounts = response.data.data || []
        console.log('Loaded chart of accounts:', this.chartOfAccounts)
        console.log('First account structure:', this.chartOfAccounts[0])
      } catch (error) {
        console.error('Error loading chart of accounts:', error)
        window.toast.error('Error loading chart of accounts')
      }
    },

    async loadBranches() {
      try {
        const user = this.$store.getters['auth/user']
        const isSuperAdmin = user && Number(user.account_role) === 1

        if (isSuperAdmin) {
          // Load all branches for superadmin
          const response = await this.$axios.get('/api/branches', {
            params: { perPage: 1000 }
          })
          this.branches = Array.isArray(response.data?.data) ? response.data.data : []
        } else if (user && user.id) {
          // Load user's assigned branches
          const response = await this.$axios.get(`/api/users/${user.id}/branches`)
          this.branches = Array.isArray(response.data) ? response.data : (response.data?.data || [])
        } else {
          this.branches = []
        }
      } catch (error) {
        console.error('Error loading branches:', error)
        this.branches = []
      }
    },

    async loadCurrentBranch() {
      try {
        const response = await this.$axios.get('/api/branches/current')
        if (response.data && response.data.branch) {
          this.currentBranch = response.data.branch
          this.form.branch_id = response.data.branch.id
        }
      } catch (error) {
        console.error('Error loading current branch:', error)
        // Try to get from user
        const user = this.$store.getters['auth/user']
        if (user && user.default_branch_id) {
          // Find branch in loaded branches
          const defaultBranch = this.branches.find(b => b.id === user.default_branch_id)
          if (defaultBranch) {
            this.currentBranch = defaultBranch
            this.form.branch_id = defaultBranch.id
          }
        } else if (this.branches.length > 0) {
          // Use first branch if no default
          this.currentBranch = this.branches[0]
          this.form.branch_id = this.branches[0].id
        }
      }
    },

    async loadNextEntryNumber() {
      try {
        const response = await this.$axios.get('/api/journal-entries/next-entry-number')
        if (response.data && response.data.formatted_entry_number) {
          this.nextEntryNumber = response.data.formatted_entry_number
        }
      } catch (error) {
        console.error('Error loading next entry number:', error)
        this.nextEntryNumber = 'JE-1'
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
        cost_center_id: null,
        description: '',
        reference: '',
        debit_amount: '',
        credit_amount: '',
        line_number: lineNumber
      })
      // Scroll to the new line
      this.$nextTick(() => {
        const table = document.querySelector('.je-lines-table')
        if (table) {
          table.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
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
          window.toast.warning(this.$t('Journal entry must be balanced'))
          this.loading = false
          return
        }

        // Validate description
        if (!this.form.description || this.form.description.trim() === '') {
          window.toast.error(this.$t('Description is required'))
          this.errors.description = [this.$t('Description is required')]
          this.loading = false
          return
        }

        // Validate branch
        if (!this.form.branch_id) {
          window.toast.error(this.$t('Branch is required'))
          this.errors.branch_id = [this.$t('Branch is required')]
          this.loading = false
          return
        }

        // Validate chart of account selections
        const invalidLines = this.form.lines.filter(line => !line.chart_of_account_id)
        if (invalidLines.length > 0) {
          window.toast.error(this.$t('Please select chart of accounts for all lines'))
          this.loading = false
          return
        }

        // Validate that each line has either debit or credit
        const invalidAmountLines = this.form.lines.filter(line => {
          const debit = parseFloat(line.debit_amount) || 0
          const credit = parseFloat(line.credit_amount) || 0
          return debit === 0 && credit === 0
        })
        if (invalidAmountLines.length > 0) {
          window.toast.error(this.$t('Each line must have either a debit or credit amount.'))
          this.loading = false
          return
        }

        // Prepare data using FormData to support file upload
        const formData = new FormData()

        // Add form fields
        formData.append('entry_date', this.form.entry_date)
        formData.append('reference', this.form.reference || '')
        formData.append('description', this.form.description || '')
        formData.append('branch_id', this.form.branch_id)
        formData.append('notes', this.form.notes || '')
        formData.append('status', this.form.status || 'draft')

        // Add attachment file if exists
        if (this.attachmentFile) {
          formData.append('attachment', this.attachmentFile)
        }

        // Add lines as JSON string
        formData.append('lines', JSON.stringify(this.form.lines.map(line => ({
          chart_of_account_id: line.chart_of_account_id,
          cost_center_id: line.cost_center_id || null,
          description: line.description || '',
          reference: line.reference || '',
          debit_amount: parseFloat(line.debit_amount) || 0,
          credit_amount: parseFloat(line.credit_amount) || 0,
          line_number: line.line_number || 1
        }))))

        // Debug: Log the form data being sent
        console.log('Form data being sent:')
        for (let [key, value] of formData.entries()) {
          console.log(key, ':', value)
        }

        const response = await this.$axios.post('/api/journal-entries', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

        // Clear temporary data after successful save
        this.clearTemporaryData()

        // Redirect to journal entries list with success parameter
        // Success message will be shown in index page
        this.$router.push({ path: '/journal-entries', query: { created: 'success' } })
      } catch (error) {
        console.error('Error creating journal entry:', error)
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors
          // Prefer backend 'error' string if present
          const backendError = error.response.data.error || error.response.data.message
          if (backendError) {
            // Translate the error message if it exists as a translation key
            const translatedError = this.$t(backendError)
            window.toast.error(translatedError !== backendError ? translatedError : backendError)
          }
        } else {
          const backendError = error?.response?.data?.error || error?.response?.data?.message || 'Error creating journal entry'
          // Translate the error message if it exists as a translation key
          const translatedError = this.$t(backendError)
          window.toast.error(translatedError !== backendError ? translatedError : backendError)
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

    onAttachmentChange(event) {
      const file = event.target.files[0]
      if (!file) {
        this.attachmentFile = null
        return
      }

      // Validate file size (10MB = 10485760 bytes)
      const maxSize = 10 * 1024 * 1024 // 10MB
      if (file.size > maxSize) {
        window.toast.error(this.$t('File size must be less than 10 MB'))
        event.target.value = '' // Clear the input
        this.attachmentFile = null
        return
      }

      this.attachmentFile = file
    },

    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
    },

    resetForm() {
      this.form = {
        entry_date: new Date().toISOString().split('T')[0],
        reference: '',
        description: '',
        branch_id: this.currentBranch?.id || null,
        notes: '',
        attachment: '',
        status: 'draft',
        lines: [
          {
            chart_of_account_id: '',
            cost_center_id: null,
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 1
          },
          {
            chart_of_account_id: '',
            cost_center_id: null,
            description: '',
            reference: '',
            debit_amount: '',
            credit_amount: '',
            line_number: 2
          }
        ]
      }
      this.attachmentFile = null
      if (this.$refs.attachmentInput) {
        this.$refs.attachmentInput.value = ''
      }
      this.errors = {}
      this.loadNextEntryNumber()
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
  line-height: 1.5;
}

input.form-control,
select.form-control {
  height: 42px !important;
  padding: 10px 16px !important;
  box-sizing: border-box;
}

input[type="date"].form-control,
input[type="text"].form-control,
input[type="number"].form-control,
select.form-control {
  height: 42px !important;
  padding: 10px 16px !important;
  line-height: 1.5 !important;
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

/* Journal Entry Lines - Table Layout */
.je-lines-table {
  width: 100%;
  border-collapse: collapse;
}

.je-lines-table thead th {
  background-color: #f8f9fa;
  font-weight: 600;
  border-bottom: 2px solid #E5E7EB;
  padding: 12px 16px;
}

/* Default text alignment - will be overridden by RTL */
.je-lines-table thead th {
  text-align: left;
}

[dir="rtl"] .je-lines-table thead th {
  text-align: right;
}

.je-lines-table thead th.text-right {
  text-align: right !important;
}

[dir="rtl"] .je-lines-table thead th.text-right {
  text-align: right !important;
}

.je-lines-table thead th.text-center {
  text-align: center !important;
}

.je-lines-table td {
  vertical-align: middle;
  padding: 12px 16px;
}

/* Default text alignment for cells */
.je-lines-table td {
  text-align: left;
}

[dir="rtl"] .je-lines-table td {
  text-align: right;
}

.je-lines-table td.text-right {
  text-align: right !important;
  direction: ltr;
  /* Force LTR for numbers */
}

[dir="rtl"] .je-lines-table td.text-right {
  text-align: right !important;
  direction: ltr;
  /* Force LTR for numbers in RTL */
}

.je-lines-table td.text-center {
  text-align: center !important;
}

.je-lines-table .form-control {
  text-align: left;
}

[dir="rtl"] .je-lines-table .form-control {
  text-align: right;
}

.je-lines-table .form-control.text-right {
  text-align: right !important;
  direction: ltr !important;
  /* Force LTR for number inputs */
}

[dir="rtl"] .je-lines-table .form-control.text-right {
  text-align: right !important;
  direction: ltr !important;
  /* Force LTR for number inputs in RTL */
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
