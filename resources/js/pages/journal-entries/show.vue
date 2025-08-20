<template>
  <div class="container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">Journal Entry Details</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/home">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/journal-entries">Journal Entries</router-link>
            </li>
            <li class="breadcrumb-item active">View</li>
          </ul>
        </div>
        <div class="col-auto float-right ml-auto">
          <router-link
            v-if="journalEntry && journalEntry.status === 'draft'"
            :to="`/journal-entries/${journalEntry.id}/edit`"
            class="btn btn-primary"
          >
            <i class="fa fa-edit"></i> Edit
          </router-link>
          <button
            v-if="journalEntry && journalEntry.status === 'draft'"
            @click="postEntry"
            class="btn btn-success ml-2"
          >
            <i class="fa fa-check"></i> Post Entry
          </button>
          <button
            v-if="journalEntry && journalEntry.status === 'posted'"
            @click="voidEntry"
            class="btn btn-warning ml-2"
          >
            <i class="fa fa-ban"></i> Void Entry
          </button>
          <router-link to="/journal-entries" class="btn btn-secondary ml-2">
            <i class="fa fa-arrow-left"></i> Back
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
            <p class="mt-3">Loading journal entry...</p>
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
            <h4 class="card-title">Entry Information</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Entry Number:</label>
                  <p class="form-control-plaintext">{{ journalEntry.formatted_entry_number }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Status:</label>
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
                  <label class="font-weight-bold">Entry Date:</label>
                  <p class="form-control-plaintext">{{ formatDate(journalEntry.entry_date) }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Reference:</label>
                  <p class="form-control-plaintext">{{ journalEntry.reference || 'N/A' }}</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">Description:</label>
                  <p class="form-control-plaintext">{{ journalEntry.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Information -->
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Summary</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Total Debit:</label>
                  <p class="form-control-plaintext text-success">
                    {{ formatCurrency(journalEntry.total_debit) }}
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Total Credit:</label>
                  <p class="form-control-plaintext text-danger">
                    {{ formatCurrency(journalEntry.total_credit) }}
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="font-weight-bold">Balance:</label>
                  <p class="form-control-plaintext">
                    <span :class="journalEntry.is_balanced ? 'text-success' : 'text-danger'">
                      {{ journalEntry.is_balanced ? 'Balanced' : 'Unbalanced' }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Created By:</label>
                  <p class="form-control-plaintext">{{ journalEntry.creator ? journalEntry.creator.name : 'N/A' }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Created Date:</label>
                  <p class="form-control-plaintext">{{ formatDateTime(journalEntry.created_at) }}</p>
                </div>
              </div>
            </div>
            <div v-if="journalEntry.posted_by" class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Posted By:</label>
                  <p class="form-control-plaintext">{{ journalEntry.poster ? journalEntry.poster.name : 'N/A' }}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="font-weight-bold">Posted Date:</label>
                  <p class="form-control-plaintext">{{ formatDateTime(journalEntry.posted_at) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Journal Entry Lines -->
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Journal Entry Lines</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th style="width: 5%">#</th>
                    <th style="width: 25%">Account</th>
                    <th style="width: 25%">Description</th>
                    <th style="width: 15%">Reference</th>
                    <th style="width: 15%">Debit Amount</th>
                    <th style="width: 15%">Credit Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="line in journalEntry.lines" :key="line.id">
                    <td>{{ line.line_number }}</td>
                    <td>
                      <strong>{{ line.chart_of_account ? line.chart_of_account.code : 'N/A' }}</strong>
                      <br>
                      <small class="text-muted">{{ line.chart_of_account ? line.chart_of_account.name : 'N/A' }}</small>
                    </td>
                    <td>{{ line.description || 'N/A' }}</td>
                    <td>{{ line.reference || 'N/A' }}</td>
                    <td class="text-right">
                      <span v-if="line.debit_amount > 0" class="text-success">
                        {{ formatCurrency(line.debit_amount) }}
                      </span>
                      <span v-else>-</span>
                    </td>
                    <td class="text-right">
                      <span v-if="line.credit_amount > 0" class="text-danger">
                        {{ formatCurrency(line.credit_amount) }}
                      </span>
                      <span v-else>-</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="table-active">
                    <td colspan="4" class="text-right"><strong>Totals:</strong></td>
                    <td class="text-right text-success">
                      <strong>{{ formatCurrency(journalEntry.total_debit) }}</strong>
                    </td>
                    <td class="text-right text-danger">
                      <strong>{{ formatCurrency(journalEntry.total_credit) }}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body text-center">
            <i class="fa fa-exclamation-triangle fa-3x text-warning"></i>
            <p class="mt-3">Journal entry not found</p>
            <router-link to="/journal-entries" class="btn btn-primary">
              Back to Journal Entries
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
    return { title: 'Journal Entry Details' }
  },
  data() {
    return {
      journalEntry: null,
      loading: true
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
        window.toast.fire({
          icon: 'error',
          title: 'Error loading journal entry'
        })
      } finally {
        this.loading = false
      }
    },

    async postEntry() {
      if (!confirm('Are you sure you want to post this journal entry?')) return

      try {
        await this.$axios.post(`/api/journal-entries/${this.journalEntry.id}/post`)
        window.toast.fire({
          icon: 'success',
          title: 'Journal entry posted successfully!'
        })
        await this.loadJournalEntry()
      } catch (error) {
        console.error('Error posting journal entry:', error)
        window.toast.fire({
          icon: 'error',
          title: 'Error posting journal entry'
        })
      }
    },

    async voidEntry() {
      if (!confirm('Are you sure you want to void this journal entry?')) return

      try {
        await this.$axios.post(`/api/journal-entries/${this.journalEntry.id}/void`)
        window.toast.fire({
          icon: 'success',
          title: 'Journal entry voided successfully!'
        })
        await this.loadJournalEntry()
      } catch (error) {
        console.error('Error voiding journal entry:', error)
        window.toast.fire({
          icon: 'error',
          title: 'Error voiding journal entry'
        })
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
