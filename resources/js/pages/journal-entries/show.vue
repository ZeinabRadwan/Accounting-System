<template>
  <div class="container-fluid">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <!-- Page Header -->
    <div class="page-header">
      <div class="row align-items-center">
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
            <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">
              {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />
            </template>
            <template v-else>
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </template>
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
            <GeneralTable
              :columns="journalEntryLinesColumns"
              :rows="journalEntryLinesRows"
              :loading="loading"
              wrapper-class="journal-entry-table"
            >
              <template #cell-chartOfAccount="{ row }">
                <strong>{{ row._raw.chart_of_account.code }}</strong><br>
                <small>{{ row._raw.chart_of_account.name }}</small>
              </template>
              <template #cell-analyticalAccount="{ row }">
                <span v-if="row && row._raw && row._raw.analytical_account" class="text-muted">
                  <small>
                    <span v-if="row._raw.analytical_account.code">{{ row._raw.analytical_account.code }} - </span>
                    {{ row._raw.analytical_account.name }}
                  </small>
                </span>
                <span v-else-if="row && row.analytical_account" class="text-muted">
                  <small>
                    <span v-if="row.analytical_account.code">{{ row.analytical_account.code }} - </span>
                    {{ row.analytical_account.name }}
                  </small>
                </span>
                <span v-else class="text-muted">-</span>
              </template>
              <template #cell-debitAmount="{ row }">
                <span v-if="row._raw.debit_amount > 0" class="text-success">
                  <CurrencyDisplay :amount="row._raw.debit_amount" :disable-rtl="true"/>
                </span>
                <span v-else>-</span>
              </template>
              <template #cell-creditAmount="{ row }">
                <span v-if="row._raw.credit_amount > 0" class="text-danger">
                  <CurrencyDisplay :amount="row._raw.credit_amount" :disable-rtl="true" />
                </span>
                <span v-else>-</span>
              </template>
            </GeneralTable>
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
                    <CurrencyDisplay :amount="journalEntry.total_debit" :disable-rtl="true" />
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">{{ $t('Total Credit') }}:</label>
                  <p class="form-control-plaintext text-danger">
                    <CurrencyDisplay :amount="journalEntry.total_credit" :disable-rtl="true" />
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
                    <CurrencyDisplay :amount="journalEntry.balance_difference" :disable-rtl="true" />
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
import Swal from 'sweetalert2'
import GeneralTable from "~/components/GeneralTable";

export default {
  name: 'ShowJournalEntry',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Journal Entry Details') }
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
    GeneralTable,
  },
  data() {
    return {
      breadcrumbsCurrent: 'Journal Entry Details',
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
          name: 'View',
          url: '',
        },
      ],
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
    },

    // Journal entry lines columns
    journalEntryLinesColumns() {
      return [
        { key: "lineNumber", label: this.$t('Line Number'), align: "text-center" },
        { key: "chartOfAccount", label: this.$t('Chart of Account'), align: "text-left" },
        { key: "analyticalAccount", label: this.$t('Analytical Account'), align: "text-left" },
        { key: "description", label: this.$t('Description'), align: "text-left" },
        { key: "debitAmount", label: this.$t('Debit Amount'), align: "text-right" },
        { key: "creditAmount", label: this.$t('Credit Amount'), align: "text-right" },
      ];
    },

    // Journal entry lines rows
    journalEntryLinesRows() {
      if (!this.sortedLines || this.sortedLines.length === 0) return [];
      return this.sortedLines.map((line) => ({
        lineNumber: line.line_number,
        chartOfAccount: line,
        analyticalAccount: line,
        description: line.description || '-',
        debitAmount: line,
        creditAmount: line,
        _raw: line,
      }));
    },
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
        
        // Debug: Check if analytical account data is present
        if (this.journalEntry && this.journalEntry.lines) {
          console.log('Journal Entry Lines:', this.journalEntry.lines.map(line => ({
            id: line.id,
            analytical_account_id: line.analytical_account_id,
            has_analytical_account: !!line.analytical_account,
            analytical_account: line.analytical_account
          })))
        }
      } catch (error) {
        console.error('Error loading journal entry:', error)
        window.toast.error(this.$t('Error loading journal entry'))
      } finally {
        this.loading = false
      }
    },

    async postEntry() {
      Swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('Are you sure you want to post this journal entry?'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Confirm'),
        cancelButtonText: this.$t('Cancel'),
      }).then(async (result) => {
        if (result.value) {
          try {
            await this.$axios.post(`/api/journal-entries/${this.journalEntry.id}/post`)
            window.toast.success(this.$t('Journal entry posted successfully'))
            await this.loadJournalEntry()
          } catch (error) {
            console.error('Error posting journal entry:', error)
            window.toast.error(this.$t('Error posting journal entry'))
          }
        }
      })
    },

    async voidEntry() {
      Swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('Are you sure you want to void this journal entry?'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Confirm'),
        cancelButtonText: this.$t('Cancel'),
      }).then(async (result) => {
        if (result.value) {
          try {
            await this.$axios.post(`/api/journal-entries/${this.journalEntry.id}/void`)
            window.toast.success(this.$t('Journal entry voided successfully'))
            await this.loadJournalEntry()
          } catch (error) {
            console.error('Error voiding journal entry:', error)
            window.toast.error(this.$t('Error voiding journal entry'))
          }
        }
      })
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
      return this.journalEntry.is_balanced ? this.$t('Balanced') : this.$t('Unbalanced')
    }
  }
}
</script>

<style scoped>
.page-header {
  margin-bottom: 20px;
}

.journal-entry-table ::v-deep table {
  min-width: 900px;
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
