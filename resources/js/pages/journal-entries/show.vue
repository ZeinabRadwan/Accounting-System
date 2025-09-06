<template>
  <div class="container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">{{ $t('Journal Entry Details') }}</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/home">{{ $t('Dashboard') }}</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/journal-entries">{{ $t('Journal Entries') }}</router-link>
            </li>
            <li class="breadcrumb-item active">{{ $t('View') }}</li>
          </ul>
        </div>
        <div class="col-auto float-right ml-auto">
          <router-link
            v-if="journalEntry && journalEntry.status === 'draft'"
            :to="`/journal-entries/${journalEntry.id}/edit`"
            class="btn btn-primary"
          >
            <i class="fa fa-edit"></i> {{ $t('Edit') }}
          </router-link>
          <button
            v-if="journalEntry && journalEntry.status === 'draft'"
            @click="postEntry"
            class="btn btn-success ml-2"
          >
            <i class="fa fa-check"></i> {{ $t('Post Entry') }}
          </button>
          <button
            v-if="journalEntry && journalEntry.status === 'posted'"
            @click="voidEntry"
            class="btn btn-warning ml-2"
          >
            <i class="fa fa-ban"></i> {{ $t('Void Entry') }}
          </button>
          <router-link to="/journal-entries" class="btn btn-secondary ml-2">
            <i class="fa fa-arrow-left"></i> {{ $t('Back') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body text-center">
            <i class="fa fa-spinner fa-spin fa-3x text-primary"></i>
            <p class="mt-3">{{ $t('Loading journal entry...') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Journal Entry Details -->
    <div v-else-if="journalEntry" class="row">
      <!-- Basic Information -->
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">{{ $t('Entry Information') }}</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Entry Number') }}:</label>
                  <p class="form-control-plaintext">{{ journalEntry.formatted_entry_number }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Status') }}:</label>
                  <p class="form-control-plaintext">
                    <span :class="getStatusBadgeClass(journalEntry.status)">
                      {{ journalEntry.formatted_status }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Entry Date') }}:</label>
                  <p class="form-control-plaintext">{{ formatDate(journalEntry.entry_date) }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Reference') }}:</label>
                  <p class="form-control-plaintext">{{ journalEntry.reference || 'N/A' }}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Description') }}:</label>
                  <p class="form-control-plaintext">{{ journalEntry.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Journal Entry Lines -->
        <div class="card mt-4">
          <div class="card-header">
            <h4 class="card-title">{{ $t('Journal Entry Lines') }}</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>{{ $t('Line Number') }}</th>
                    <th>{{ $t('Chart of Account') }}</th>
                    <th>{{ $t('Description') }}</th>
                    <th class="text-right">{{ $t('Debit Amount') }}</th>
                    <th class="text-right">{{ $t('Credit Amount') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="line in sortedLines" :key="line.id">
                    <td>{{ line.line_number }}</td>
                    <td>
                      <strong>{{ line.chart_of_account.code }}</strong><br>
                      <small>{{ line.chart_of_account.name }}</small>
                    </td>
                    <td>{{ line.description || '-' }}</td>
                    <td class="text-right">
                      <span v-if="line.debit_amount > 0" class="text-success">
                        <CurrencyDisplay :amount="line.debit_amount" />
                      </span>
                      <span v-else>-</span>
                    </td>
                    <td class="text-right">
                      <span v-if="line.credit_amount > 0" class="text-danger">
                        <CurrencyDisplay :amount="line.credit_amount" />
                      </span>
                      <span v-else>-</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Sidebar -->
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">{{ $t('Summary') }}</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Total Debit') }}:</label>
                  <p class="form-control-plaintext text-success">
                    <CurrencyDisplay :amount="journalEntry.total_debit" />
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Total Credit') }}:</label>
                  <p class="form-control-plaintext text-danger">
                    <CurrencyDisplay :amount="journalEntry.total_credit" />
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Balance Status') }}:</label>
                  <p class="form-control-plaintext">
                    <span :class="getBalanceStatusClass()">
                      {{ getBalanceStatusText() }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div v-if="!journalEntry.is_balanced" class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Balance Difference') }}:</label>
                  <p class="form-control-plaintext text-danger">
                    <CurrencyDisplay :amount="journalEntry.balance_difference" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Audit Information -->
        <div class="card mt-4">
          <div class="card-header">
            <h4 class="card-title">{{ $t('Audit Trail') }}</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Created By') }}:</label>
                  <p class="form-control-plaintext">{{ journalEntry.creator ? journalEntry.creator.name : '-' }}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Created At') }}:</label>
                  <p class="form-control-plaintext">{{ formatDateTime(journalEntry.created_at) }}</p>
                </div>
              </div>
            </div>
            <div v-if="journalEntry.posted_by" class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Posted By') }}:</label>
                  <p class="form-control-plaintext">{{ journalEntry.poster ? journalEntry.poster.name : '-' }}</p>
                </div>
              </div>
            </div>
            <div v-if="journalEntry.posted_at" class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Posted At') }}:</label>
                  <p class="form-control-plaintext">{{ formatDateTime(journalEntry.posted_at) }}</p>
                </div>
              </div>
            </div>
            <div v-if="journalEntry.voided_by" class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Voided By') }}:</label>
                  <p class="form-control-plaintext">{{ journalEntry.voider ? journalEntry.voider.name : '-' }}</p>
                </div>
              </div>
            </div>
            <div v-if="journalEntry.voided_at" class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Voided At') }}:</label>
                  <p class="form-control-plaintext">{{ formatDateTime(journalEntry.voided_at) }}</p>
                </div>
              </div>
            </div>
            <div v-if="journalEntry.void_reason" class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Void Reason') }}:</label>
                  <p class="form-control-plaintext">{{ journalEntry.void_reason }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body text-center">
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
  name: 'ShowJournalEntry',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Journal Entry Details') }
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
  },
  data() {
    return {
      journalEntry: null,
      loading: true
    }
  },
  computed: {
    sortedLines() {
      if (!this.journalEntry || !this.journalEntry.lines) {
        return []
      }
      
      // Sort lines: debits first (debit_amount > 0), then credits (credit_amount > 0)
      return [...this.journalEntry.lines].sort((a, b) => {
        // If both are debits or both are credits, maintain original order
        const aIsDebit = a.debit_amount > 0
        const bIsDebit = b.debit_amount > 0
        
        if (aIsDebit && !bIsDebit) return -1 // a is debit, b is credit - a comes first
        if (!aIsDebit && bIsDebit) return 1  // a is credit, b is debit - b comes first
        
        // If both are same type, maintain original order by line number
        return a.line_number - b.line_number
      })
    }
  },
  async created() {
    await this.loadJournalEntry()
  },
  methods: {
    async loadJournalEntry() {
      try {
        this.loading = true
        const response = await this.$axios.get(`/api/journal-entries/${this.$route.params.id}`)
        this.journalEntry = response.data.data
      } catch (error) {
        console.error('Error loading journal entry:', error)
        window.toast.error('Error loading journal entry')
      } finally {
        this.loading = false
      }
    },

    async postEntry() {
      if (!confirm('Are you sure you want to post this journal entry?')) return

      try {
        await this.$axios.post(`/api/journal-entries/${this.journalEntry.id}/post`)
        window.toast.success('Journal entry posted successfully!')
        await this.loadJournalEntry()
      } catch (error) {
        console.error('Error posting journal entry:', error)
        window.toast.error('Error posting journal entry')
      }
    },

    async voidEntry() {
      if (!confirm('Are you sure you want to void this journal entry?')) return

      try {
        await this.$axios.post(`/api/journal-entries/${this.journalEntry.id}/void`)
        window.toast.success('Journal entry voided successfully!')
        await this.loadJournalEntry()
      } catch (error) {
        console.error('Error voiding journal entry:', error)
        window.toast.error('Error voiding journal entry')
      }
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },

    formatDateTime(dateTime) {
      return new Date(dateTime).toLocaleString()
    },

    formatCurrency(amount) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)
    },

    getStatusBadgeClass(status) {
      const classes = {
        draft: 'badge badge-warning',
        posted: 'badge badge-success',
        void: 'badge badge-danger'
      }
      return classes[status] || 'badge badge-secondary'
    },

    getBalanceStatusClass() {
      return this.journalEntry.is_balanced ? 'text-success' : 'text-danger'
    },

    getBalanceStatusText() {
      return this.journalEntry.is_balanced ? 'Balanced' : 'Unbalanced'
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

.form-control-plaintext {
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
}

.table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.badge {
  font-size: 0.875em;
}

.table-active {
  background-color: #e9ecef !important;
}
</style>
