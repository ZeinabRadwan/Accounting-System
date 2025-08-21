<template>
  <div class="container-fluid">
    <!-- Page Header -->
    <div class="page-header">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="page-title">{{ $t('Journal Entries') }}</h3>
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/home">{{ $t('Dashboard') }}</router-link>
            </li>
            <li class="breadcrumb-item active">{{ $t('Journal Entries') }}</li>
          </ul>
        </div>
        <div class="col-auto float-right ml-auto">
          <router-link to="/journal-entries/create" class="btn btn-primary">
            <i class="fa fa-plus"></i> {{ $t('New Journal Entry') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <div class="form-group">
                  <label>{{ $t('Search') }}</label>
                  <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control"
                    :placeholder="$t('Search entries...')"
                    @input="debounceSearch"
                  />
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>{{ $t('Status') }}</label>
                  <select v-model="filters.status" class="form-control" @change="loadJournalEntries">
                    <option value="">{{ $t('All Status') }}</option>
                    <option value="draft">{{ $t('Draft') }}</option>
                    <option value="posted">{{ $t('Posted') }}</option>
                    <option value="void">{{ $t('Void') }}</option>
                  </select>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>{{ $t('From Date') }}</label>
                  <input
                    v-model="filters.from_date"
                    type="date"
                    class="form-control"
                    @change="loadJournalEntries"
                  />
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>{{ $t('To Date') }}</label>
                  <input
                    v-model="filters.to_date"
                    type="date"
                    class="form-control"
                    @change="loadJournalEntries"
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <div>
                    <button @click="loadJournalEntries" class="btn btn-primary">
                      <i class="fa fa-search"></i> {{ $t('Search') }}
                    </button>
                    <button @click="clearFilters" class="btn btn-secondary ml-2">
                      <i class="fa fa-times"></i> {{ $t('Clear') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Journal Entries Table -->
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped custom-table">
                <thead>
                  <tr>
                    <th>{{ $t('Entry #') }}</th>
                    <th>{{ $t('Date') }}</th>
                    <th>{{ $t('Description') }}</th>
                    <th>{{ $t('Reference') }}</th>
                    <th>{{ $t('Total Debit') }}</th>
                    <th>{{ $t('Total Credit') }}</th>
                    <th>{{ $t('Status') }}</th>
                    <th>{{ $t('Created By') }}</th>
                    <th>{{ $t('Actions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="entry in journalEntries" :key="entry.id">
                    <td>
                      <strong>{{ entry.formatted_entry_number }}</strong>
                    </td>
                    <td>{{ formatDate(entry.entry_date) }}</td>
                    <td>{{ entry.description }}</td>
                    <td>{{ entry.reference || '-' }}</td>
                    <td class="text-right">
                      <span class="text-success">{{ formatCurrency(entry.total_debit) }}</span>
                    </td>
                    <td class="text-right">
                      <span class="text-danger">{{ formatCurrency(entry.total_credit) }}</span>
                    </td>
                    <td>
                      <span :class="getStatusBadgeClass(entry.status)">
                        {{ entry.formatted_status }}
                      </span>
                    </td>
                    <td>{{ entry.creator ? entry.creator.name : '-' }}</td>
                    <td>
                      <div class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu">
                          <router-link
                            :to="`/journal-entries/${entry.id}`"
                            class="dropdown-item"
                          >
                            <i class="fa fa-eye"></i> {{ $t('View') }}
                          </router-link>
                          <router-link
                            v-if="entry.status === 'draft'"
                            :to="`/journal-entries/${entry.id}/edit`"
                            class="dropdown-item"
                          >
                            <i class="fa fa-edit"></i> {{ $t('Edit') }}
                          </router-link>
                          <a
                            v-if="entry.status === 'draft'"
                            href="#"
                            @click.prevent="postEntry(entry.id)"
                            class="dropdown-item"
                          >
                            <i class="fa fa-check"></i> {{ $t('Post') }}
                          </a>
                          <a
                            v-if="entry.status === 'posted'"
                            href="#"
                            @click.prevent="voidEntry(entry.id)"
                            class="dropdown-item text-danger"
                          >
                            <i class="fa fa-ban"></i> {{ $t('Void') }}
                          </a>
                          <a
                            v-if="entry.status === 'draft'"
                            href="#"
                            @click.prevent="deleteEntry(entry.id)"
                            class="dropdown-item text-danger"
                          >
                            <i class="fa fa-trash"></i> {{ $t('Delete') }}
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="journalEntries.length === 0">
                    <td colspan="9" class="text-center">{{ $t('No journal entries found') }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div v-if="pagination.last_page > 1" class="row">
              <div class="col-md-12">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li
                      v-for="page in pagination.last_page"
                      :key="page"
                      :class="['page-item', { active: page === pagination.current_page }]"
                    >
                      <a
                        href="#"
                        class="page-link"
                        @click.prevent="loadJournalEntries(page)"
                      >
                        {{ page }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'JournalEntriesIndex',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Journal Entries') }
  },
  data() {
    return {
      journalEntries: [],
      searchQuery: '',
      filters: {
        status: '',
        from_date: '',
        to_date: ''
      },
      pagination: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0
      },
      loading: false
    }
  },
  async created() {
    await this.loadJournalEntries()
  },
  methods: {
    async loadJournalEntries(page = 1) {
      try {
        this.loading = true
        const params = {
          page,
          perPage: this.pagination.per_page,
          ...this.filters
        }

        if (this.searchQuery) {
          params.search = this.searchQuery
        }

        const response = await this.$axios.get('/api/journal-entries', { params })
        
        if (response.data.data) {
          this.journalEntries = response.data.data
          this.pagination = {
            current_page: response.data.current_page || 1,
            last_page: response.data.last_page || 1,
            per_page: response.data.per_page || 10,
            total: response.data.total || 0
          }
        }
      } catch (error) {
        console.error('Error loading journal entries:', error)
        window.toast.error('Error loading journal entries')
      } finally {
        this.loading = false
      }
    },

    debounceSearch: debounce(function() {
      this.loadJournalEntries()
    }, 500),

    clearFilters() {
      this.filters = {
        status: '',
        from_date: '',
        to_date: ''
      }
      this.searchQuery = ''
      this.loadJournalEntries()
    },

    async postEntry(id) {
      if (!confirm('Are you sure you want to post this journal entry?')) return

      try {
        await this.$axios.post(`/api/journal-entries/${id}/post`)
        window.toast.success('Journal entry posted successfully!')
        await this.loadJournalEntries()
      } catch (error) {
        console.error('Error posting journal entry:', error)
        window.toast.error('Error posting journal entry')
      }
    },

    async voidEntry(id) {
      if (!confirm('Are you sure you want to void this journal entry?')) return

      try {
        await this.$axios.post(`/api/journal-entries/${id}/void`)
        window.toast.success('Journal entry voided successfully!')
        await this.loadJournalEntries()
      } catch (error) {
        console.error('Error voiding journal entry:', error)
        window.toast.error('Error voiding journal entry')
      }
    },

    async deleteEntry(id) {
      if (!confirm('Are you sure you want to delete this journal entry?')) return

      try {
        await this.$axios.delete(`/api/journal-entries/${id}`)
        window.toast.success('Journal entry deleted successfully!')
        await this.loadJournalEntries()
      } catch (error) {
        console.error('Error deleting journal entry:', error)
        window.toast.error('Error deleting journal entry')
      }
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString()
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

.custom-table th {
  background-color: #f8f9fa;
  border-top: none;
}

.dropdown-toggle::after {
  display: none;
}

.badge {
  font-size: 0.75em;
}
</style>
