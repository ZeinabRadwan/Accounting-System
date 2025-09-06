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
          <div class="btn-group">
            <a @click="refreshTable()" href="#" v-tooltip="'Refresh'" class="btn btn-success">
              <i class="fas fa-sync"></i>
            </a>
            <router-link to="/journal-entries/create" class="btn btn-primary">
              <i class="fa fa-plus"></i> {{ $t('New Journal Entry') }}
            </router-link>
          </div>
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
                    v-model="query"
                    type="text"
                    class="form-control"
                    :placeholder="$t('Search entries')"
                  />
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <label>{{ $t('Status') }}</label>
                  <select v-model="filters.status" class="form-control">
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
                  />
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <label>&nbsp;</label>
                  <div>
                    <button @click="searchData" class="btn btn-primary">
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
            <table-loading v-show="loading" />
            <div class="table-responsive">
              <table class="table table-striped custom-table">
                <thead>
                  <tr>
                    <th>{{ $t('Entry #') }}</th>
                    <th>{{ $t('Date') }}</th>
                    <th>{{ $t('Description') }}</th>
                    <th>{{ $t('Reference') }}</th>
                    <th class="text-center">{{ $t('Total Debit') }}</th>
                    <th class="text-center">{{ $t('Total Credit') }}</th>
                    <th>{{ $t('Status') }}</th>
                    <th>{{ $t('Created By') }}</th>
                    <th>{{ $t('Actions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-show="items.length" v-for="(entry, i) in items" :key="entry.id">
                    <td>
                      <strong>{{ entry.formatted_entry_number }}</strong>
                    </td>
                    <td>{{ formatDate(entry.entry_date) }}</td>
                    <td>{{ entry.description }}</td>
                    <td>{{ entry.reference || '-' }}</td>
                    <td class="text-center">
                      <span class="text-success">
                        <CurrencyDisplay :amount="entry.total_debit" />
                      </span>
                    </td>
                    <td class="text-center">
                      <span class="text-danger">
                        <CurrencyDisplay :amount="entry.total_credit" />
                      </span>
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
                        <div class="dropdown-menu dropdown-menu-right">
                          <router-link
                            :to="{ name: 'journal-entries.show', params: { id: entry.id } }"
                            class="dropdown-item"
                          >
                            <i class="fa fa-eye"></i> {{ $t('View') }}
                          </router-link>
                          <router-link
                            v-if="entry.status === 'draft'"
                            :to="{ name: 'journal-entries.edit', params: { id: entry.id } }"
                            class="dropdown-item"
                          >
                            <i class="fa fa-edit"></i> {{ $t('Edit') }}
                          </router-link>
                          <a
                            v-if="entry.status === 'draft'"
                            href="#"
                            @click.prevent="postEntry(entry.id)"
                            class="dropdown-item text-success"
                          >
                            <i class="fa fa-check"></i> {{ $t('Post') }}
                          </a>
                          <a
                            v-if="entry.status === 'posted'"
                            href="#"
                            @click.prevent="voidEntry(entry.id)"
                            class="dropdown-item text-warning"
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
                  <tr v-show="!loading && !items.length">
                    <td colspan="9" class="text-center">{{ $t('No journal entries found') }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t('per_page') }} </label>
                <div>
                  <select @change="updatePerPager" v-model="perPage" class="form-control form-control-sm ml-1">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <!-- pagination-start -->
              <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination" :offset="5"
                class="justify-flex-end" @paginate="paginate" />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'JournalEntriesIndex',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Journal Entries') }
  },
  components: {
    Pagination: () => import('~/components/Pagination'),
    TableLoading: () => import('~/components/TableLoading'),
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
  },
  data() {
    return {
      query: '',
      filters: {
        status: '',
        from_date: '',
        to_date: ''
      },
      perPage: 10
    }
  },
  // Map Getters
  computed: {
    ...mapGetters('operations', ['items', 'loading', 'pagination']),
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === '') {
        if (this.filters.status || this.filters.from_date || this.filters.to_date) {
          this.searchData();
        } else {
          this.getData();
        }
      } else {
        this.searchData();
      }
    },
    // watch filters
    filters: {
      handler(newVal, oldVal) {
        // Only trigger search if filters actually changed and we're not in the initial load
        if (oldVal && (oldVal.status !== newVal.status || oldVal.from_date !== newVal.from_date || oldVal.to_date !== newVal.to_date)) {
          this.pagination.current_page = 1;
          if (this.query || this.filters.status || this.filters.from_date || this.filters.to_date) {
            this.searchData();
          } else {
            this.getData();
          }
        }
      },
      deep: true
    }
  },
  created() {
    this.getData();
  },
  methods: {
    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      if (this.query || this.filters.status || this.filters.from_date || this.filters.to_date) {
        this.searchData();
      } else {
        this.getData();
      }
    },
    // get data
    async getData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/journal-entries?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
    },

    // Pagination
    async paginate() {
      if (this.query || this.filters.status || this.filters.from_date || this.filters.to_date) {
        this.searchData();
      } else {
        this.getData();
      }
    },

    // Reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // search data
    async searchData() {
      try {
        this.$store.state.operations.loading = true;
        let currentPage = this.pagination ? this.pagination.current_page : 1;
        
        const params = {
          page: currentPage,
          perPage: this.perPage
        };
        
        if (this.query) {
          params.term = this.query;
        }
        
        if (this.filters.from_date) {
          params.startDate = this.filters.from_date;
        }
        
        if (this.filters.to_date) {
          params.endDate = this.filters.to_date;
        }
        
        if (this.filters.status) {
          params.status = this.filters.status;
        }
        
        const response = await this.$axios.get('/api/journal-entries/search', { params });
        
        if (response.data.data) {
          this.$store.commit('operations/FETCH_DATA', { 
            items: response.data, 
            loading: false 
          });
        }
      } catch (error) {
        console.error('Error searching journal entries:', error);
        window.toast.error('Error searching journal entries');
        this.$store.state.operations.loading = false;
      }
    },

    // Reload after search
    async reload() {
      this.query = "";
      this.filters.status = "";
      this.filters.from_date = "";
      this.filters.to_date = "";
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.filters.status = "";
      this.filters.from_date = "";
      this.filters.to_date = "";
      this.query === "" ? this.getData() : this.searchData();
    },

    clearFilters() {
      this.filters = {
        status: '',
        from_date: '',
        to_date: ''
      }
      this.query = ''
      this.getData()
    },

    async postEntry(id) {
      if (!confirm('Are you sure you want to post this journal entry?')) return
      
      try {
        const response = await this.$axios.post(`/api/journal-entries/${id}/post`)
        if (response.data.success) {
          window.toast.success('Journal entry posted successfully')
          this.getData()
        } else {
          window.toast.error(response.data.message || 'Error posting journal entry')
        }
      } catch (error) {
        console.error('Error posting journal entry:', error)
        window.toast.error('Error posting journal entry')
      }
    },

    async voidEntry(id) {
      if (!confirm('Are you sure you want to void this journal entry?')) return
      
      try {
        const response = await this.$axios.post(`/api/journal-entries/${id}/void`)
        if (response.data.success) {
          window.toast.success('Journal entry voided successfully')
          this.getData()
        } else {
          window.toast.error(response.data.message || 'Error voiding journal entry')
        }
      } catch (error) {
        console.error('Error voiding journal entry:', error)
        window.toast.error('Error voiding journal entry')
      }
    },

    async deleteEntry(id) {
      if (!confirm('Are you sure you want to delete this journal entry?')) return
      
      try {
        const response = await this.$axios.delete(`/api/journal-entries/${id}`)
        if (response.data.success) {
          window.toast.success('Journal entry deleted successfully')
          this.getData()
        } else {
          window.toast.error(response.data.message || 'Error deleting journal entry')
        }
      } catch (error) {
        console.error('Error deleting journal entry:', error)
        window.toast.error('Error deleting journal entry')
      }
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString()
    },

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return parseFloat(amount).toFixed(2)
    },

    getStatusBadgeClass(status) {
      const classes = {
        'draft': 'badge badge-warning',
        'posted': 'badge badge-success',
        'void': 'badge badge-danger'
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
