<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <div class="card-body position-relative">
            <!-- Filters Card -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">{{ $t('Filters') }}</h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <form @submit.prevent="loadSessions" class="row">
                  <!-- Search -->
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>{{ $t('Search') }}</label>
                      <input
                        type="text"
                        v-model="filters.search"
                        class="form-control"
                        :placeholder="$t('Session Number')"
                        @input="debounceSearch"
                      />
                    </div>
                  </div>

                  <!-- Status Filter -->
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>{{ $t('Status') }}</label>
                      <select v-model="filters.status" class="form-control">
                        <option value="">{{ $t('All Statuses') }}</option>
                        <option value="active">{{ $t('Open') }}</option>
                        <option value="suspended">{{ $t('Suspended') }}</option>
                        <option value="closed">{{ $t('Closed') }}</option>
                      </select>
                    </div>
                  </div>

                  <!-- User Filter -->
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>{{ $t('Employee') }}</label>
                      <v-select
                        v-model="filters.user_id"
                        :options="availableUsers"
                        :reduce="user => user.id"
                        label="name"
                        :placeholder="$t('Select Employee')"
                        :clearable="true"
                      />
                    </div>
                  </div>

                  <!-- Opened Date From -->
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>{{ $t('Opened From') }}</label>
                      <input
                        type="date"
                        v-model="filters.opened_from"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <!-- Opened Date To -->
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>{{ $t('Opened To') }}</label>
                      <input
                        type="date"
                        v-model="filters.opened_to"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <!-- Closed Date From -->
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>{{ $t('Closed From') }}</label>
                      <input
                        type="date"
                        v-model="filters.closed_from"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <!-- Closed Date To -->
                  <div class="col-md-3">
                    <div class="form-group">
                      <label>{{ $t('Closed To') }}</label>
                      <input
                        type="date"
                        v-model="filters.closed_to"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="col-12">
                    <div class="form-group">
                      <button
                        type="submit"
                        class="btn btn-primary"
                        :disabled="loading"
                      >
                        <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                        <i v-else class="fas fa-search"></i>
                        {{ $t('Search') }}
                      </button>
                      <button
                        type="button"
                        @click="resetFilters"
                        class="btn btn-secondary ml-2"
                      >
                        <i class="fas fa-undo"></i>
                        {{ $t('Reset') }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <!-- Sessions Table -->
            <div class="card mt-3">
              <div class="card-body">
                <table-loading v-show="loading" />
                <GeneralTable
                  :columns="tableColumns"
                  :rows="sessionsWithIndex"
                  :loading="loading"
                  :show-actions="true"
                  action-header-icon="fas fa-cog"
                  :empty-message="$t('No sessions found')"
                  wrapper-class="mt-3"
                >
                  <!-- Status Badge -->
                  <template #cell-status="{ row }">
                    <span
                      class="badge"
                      :class="{
                        'badge-success': row.status === 'active',
                        'badge-warning': row.status === 'suspended',
                        'badge-secondary': row.status === 'closed',
                      }"
                    >
                      {{ getStatusLabel(row.status) }}
                    </span>
                  </template>

                  <!-- Total Sales -->
                  <template #cell-total_sales="{ row }">
                    {{ formatCurrency(row.total_sales) }}
                  </template>

                  <!-- Actions -->
                  <template #cell-actions="{ row }">
                    <div class="btn-group" role="group">
                      <!-- View Details -->
                      <button
                        type="button"
                        @click="viewSessionDetails(row)"
                        class="btn btn-sm btn-info"
                        v-tooltip="$t('View Details')"
                      >
                        <i class="fas fa-eye"></i>
                      </button>

                      <!-- Resume Session (if open) -->
                      <button
                        v-if="row.status === 'active' || row.status === 'suspended'"
                        type="button"
                        @click="resumeSession(row)"
                        class="btn btn-sm btn-primary"
                        v-tooltip="$t('Go to POS')"
                      >
                        <i class="fas fa-cash-register"></i>
                      </button>

                      <!-- Close Session (if open/suspended) -->
                      <button
                        v-if="row.status === 'active' || row.status === 'suspended'"
                        type="button"
                        @click="closeSession(row)"
                        class="btn btn-sm btn-warning"
                        v-tooltip="$t('Close Session')"
                      >
                        <i class="fas fa-times-circle"></i>
                      </button>

                      <!-- Delete Session -->
                      <button
                        type="button"
                        @click="deleteSession(row)"
                        class="btn btn-sm btn-danger"
                        v-tooltip="$t('Delete')"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </template>
                </GeneralTable>

                <!-- Pagination -->
                <div v-if="pagination && pagination.last_page > 1" class="card-footer">
                  <div class="dtable-footer">
                    <div class="form-group row display-per-page">
                      <label>{{ $t('per_page') }}</label>
                      <div>
                        <select
                          @change="updatePerPage"
                          v-model="perPage"
                          class="form-control form-control-sm ml-1"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </div>
                    </div>
                    <pagination
                      v-if="pagination && pagination.last_page > 1"
                      :pagination="pagination"
                      :offset="5"
                      class="justify-flex-end"
                      @paginate="paginate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Session Details Modal -->
    <div
      class="modal fade"
      id="sessionDetailsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="sessionDetailsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="sessionDetailsModalLabel">
              {{ $t('Session Details') }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="selectedSession">
            <div class="row">
              <div class="col-md-6">
                <p><strong>{{ $t('Session Number') }}:</strong> {{ selectedSession.session_number }}</p>
                <p><strong>{{ $t('Employee') }}:</strong> {{ selectedSession.user_name }}</p>
                <p><strong>{{ $t('Status') }}:</strong>
                  <span
                    class="badge"
                    :class="{
                      'badge-success': selectedSession.status === 'active',
                      'badge-warning': selectedSession.status === 'suspended',
                      'badge-secondary': selectedSession.status === 'closed',
                    }"
                  >
                    {{ getStatusLabel(selectedSession.status) }}
                  </span>
                </p>
              </div>
              <div class="col-md-6">
                <p><strong>{{ $t('Opened At') }}:</strong> {{ selectedSession.opened_at_formatted }}</p>
                <p v-if="selectedSession.closed_at_formatted">
                  <strong>{{ $t('Closed At') }}:</strong> {{ selectedSession.closed_at_formatted }}
                </p>
                <p><strong>{{ $t('Total Sales') }}:</strong> {{ formatCurrency(selectedSession.total_sales) }}</p>
                <p><strong>{{ $t('Invoice Count') }}:</strong> {{ selectedSession.invoice_count }}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              {{ $t('Close') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GeneralTable from '../../components/GeneralTable.vue';

export default {
  middleware: ['auth', 'check-permissions'],
  components: {
    GeneralTable,
  },
  metaInfo() {
    return { title: this.$t('POS Sessions Report') };
  },
  data() {
    return {
      breadcrumbsCurrent: 'POS Sessions Report',
      breadcrumbs: [
        {
          name: 'Dashboard',
          url: 'home',
        },
        {
          name: 'POS Sessions Report',
          url: '',
        },
      ],
      filters: {
        search: '',
        status: '',
        user_id: null,
        opened_from: '',
        opened_to: '',
        closed_from: '',
        closed_to: '',
      },
      sessions: [],
      availableUsers: [],
      loading: false,
      pagination: null,
      perPage: 25,
      selectedSession: null,
      searchTimeout: null,
    };
  },
  computed: {
    tableColumns() {
      return [
        { key: 'index', label: this.$t('#') },
        { key: 'session_number', label: this.$t('Session Number') },
        { key: 'user_name', label: this.$t('Employee') },
        { key: 'status', label: this.$t('Status') },
        { key: 'opened_at_formatted', label: this.$t('Opened At') },
        { key: 'closed_at_formatted', label: this.$t('Closed At') },
        { key: 'total_sales', label: this.$t('Total Sales') },
        { key: 'invoice_count', label: this.$t('Invoices') },
        { key: 'actions', label: this.$t('Actions') },
      ];
    },
    sessionsWithIndex() {
      if (!this.pagination) {
        return [];
      }
      return this.sessions.map((session, index) => ({
        ...session,
        index:
          this.pagination.current_page > 1
            ? this.pagination.per_page * (this.pagination.current_page - 1) + (index + 1)
            : index + 1,
      }));
    },
  },
  created() {
    this.loadSessions();
  },
  methods: {
    async loadSessions(page = 1) {
      this.loading = true;
      try {
        const params = {
          page,
          per_page: this.perPage,
          ...this.filters,
        };

        // Remove empty filters
        Object.keys(params).forEach((key) => {
          if (params[key] === '' || params[key] === null) {
            delete params[key];
          }
        });

        const response = await axios.get('/api/reports/pos-sessions', { params });

        if (response.data.success) {
          this.sessions = response.data.data;
          this.pagination = response.data.pagination;
          if (response.data.filters && response.data.filters.users) {
            this.availableUsers = response.data.filters.users;
          }
        }
      } catch (error) {
        console.error('Error loading sessions:', error);
        this.$toast.error(
          this.$t('Error'),
          this.$t('Failed to load POS sessions. Please try again.')
        );
      } finally {
        this.loading = false;
      }
    },
    debounceSearch() {
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.loadSessions(1);
      }, 500);
    },
    resetFilters() {
      this.filters = {
        search: '',
        status: '',
        user_id: null,
        opened_from: '',
        opened_to: '',
        closed_from: '',
        closed_to: '',
      };
      this.loadSessions(1);
    },
    updatePerPage() {
      this.pagination.current_page = 1;
      this.loadSessions(1);
    },
    async paginate() {
      await this.loadSessions(this.pagination.current_page);
    },
    getStatusLabel(status) {
      const labels = {
        active: this.$t('Open'),
        suspended: this.$t('Suspended'),
        closed: this.$t('Closed'),
      };
      return labels[status] || status;
    },
    formatCurrency(amount) {
      return `${parseFloat(amount || 0).toFixed(2)} <span class="saudi-riyal">ê</span>`;
    },
    viewSessionDetails(session) {
      this.selectedSession = session;
      $('#sessionDetailsModal').modal('show');
    },
    async resumeSession(session) {
      // Navigate to POS page
      this.$router.push({ name: 'pos.create' });
    },
    async closeSession(session) {
      const confirmed = await this.$swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('Do you want to close this session?'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Close Session'),
        cancelButtonText: this.$t('Cancel'),
      });

      if (confirmed.isConfirmed) {
        try {
          await axios.post(`/api/pos/sessions/${session.id}/close`);
          this.$toast.success(
            this.$t('Success'),
            this.$t('Session closed successfully')
          );
          await this.loadSessions(this.pagination.current_page);
        } catch (error) {
          console.error('Error closing session:', error);
          this.$toast.error(
            this.$t('Error'),
            this.$t('Failed to close session. Please try again.')
          );
        }
      }
    },
    async deleteSession(session) {
      const confirmed = await this.$swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('This action cannot be undone.'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Delete'),
        cancelButtonText: this.$t('Cancel'),
        confirmButtonColor: '#dc3545',
      });

      if (confirmed.isConfirmed) {
        try {
          await axios.delete(`/api/pos/sessions/${session.id}`);
          this.$toast.success(
            this.$t('Success'),
            this.$t('Session deleted successfully')
          );
          await this.loadSessions(this.pagination.current_page);
        } catch (error) {
          console.error('Error deleting session:', error);
          this.$toast.error(
            this.$t('Error'),
            this.$t('Failed to delete session. Please try again.')
          );
        }
      }
    },
  },
};
</script>

