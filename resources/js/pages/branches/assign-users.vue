<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
          </div>
          <div class="card-body position-relative">
            <!-- <div class="row">
              <div class="col-12 float-left text-left">
                <div class="btn-group c-w-100">
                  <a
                    @click="refreshTable()"
                    href="#"
                    v-tooltip="$t('Refresh')"
                    class="btn btn-success refresh-btn"
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                  <button v-if="$can('branches-assign-users')" @click="showAddUserModal = true" class="btn btn-primary">
                    {{ $t("Add User") }}
                    <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                  </button>
                  <router-link :to="{ name: 'branches.index' }" class="btn btn-secondary">
                    <i class="fas fa-arrow-left"></i> {{ $t("Back") }}
                  </router-link>
                </div>
              </div>
            </div> -->
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <table class="table branches-table">
                <thead>
                  <th>{{ $t("#") }}</th>
                  <th>{{ $t("Name") }}</th>
                  <th>{{ $t("Email") }}</th>
                  <!-- <th>{{ $t("User Role") }}</th> -->
                  <th>{{ $t("Assigned Date") }}</th>
                  <!-- <th v-if="$can('branches-assign-users')" class="text-right no-print">{{ $t("Action") }}</th> -->
                </thead>
                <tbody>
                  <tr v-show="branchUsers.length" v-for="(user, i) in branchUsers" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <!-- <td>
                      <span v-if="user.role === 'admin'" class="badge bg-success">{{ $t("Admin") }}</span>
                      <span v-else class="badge bg-secondary">{{ $t("Member") }}</span>
                    </td> -->
                    <td>{{ user.created_at | moment("Do MMM, YYYY") }}</td>
                    <!-- <td v-if="$can('branches-assign-users')" class="text-right no-print">
                      <button @click="removeUser(user)" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                    </td> -->
                  </tr>
                  <tr v-show="!loading && (!branchUsers || !branchUsers.length)">
                    <td colspan="6">
                      <EmptyTable />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add User Modal -->
    <VModal v-model="showAddUserModal" size="md">
      <template v-slot:title>{{ $t('Add User to Branch') }}</template>
      <div class="w-100">
        <form @submit.prevent="assignUser">
          <div class="form-group">
            <label for="user">{{ $t('Select User') }} <span class="required">*</span></label>
            <p v-if="filteredAvailableUsers.length === 0" class="text-muted">{{ $t('No users available to assign') }}</p>
            <v-select
              v-else
              v-model="selectedUser"
              :options="filteredAvailableUsers"
              label="name"
              :placeholder="$t('Select a user')"
              :reduce="user => user"
              :searchable="true"
            />
          </div>
        </form>
      </div>
      <template v-slot:modal-footer>
        <button type="button" class="btn btn-secondary" @click="closeAddUserModal">{{ $t('Cancel') }}</button>
        <button type="button" class="btn btn-primary" @click="assignUser" :disabled="loading || !selectedUser">
          {{ $t('Assign') }}
        </button>
      </template>
    </VModal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    VModal: () => import('~/components/VModal.vue'),
  },
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Assign Users to Branch') };
  },
  data: () => ({
    breadcrumbsCurrent: 'branches.assign-users',
    breadcrumbs: [
      {
        name: 'Branches',
        url: 'branches.index',
      },
      {
        name: 'Assign Users',
        url: '',
      },
    ],
    branchUsers: [],
    availableUsers: [],
    loading: false,
    showAddUserModal: false,
    selectedUser: null,
    role: 'member',
  }),
  computed: {
    ...mapGetters('operations', ['items']),
    filteredAvailableUsers() {
      if (!Array.isArray(this.availableUsers)) {
        return []
      }
      if (!Array.isArray(this.branchUsers)) {
        return this.availableUsers
      }
      const assignedUserIds = this.branchUsers.map(u => u.id)
      return this.availableUsers.filter(u => !assignedUserIds.includes(u.id))
    },
    roleOptions() {
      return [
        { label: this.$t('Member'), value: 'member' },
        { label: this.$t('Admin'), value: 'admin' },
      ]
    },
  },
  mounted() {
    this.getBranchUsers()
    this.getAvailableUsers()
  },
  methods: {
    async getBranchUsers() {
      this.loading = true
      try {
        const branchId = this.$route.params.branchId
        const { data } = await this.$axios.get(`/api/branches/${branchId}/users`)
        this.branchUsers = Array.isArray(data) ? data : []
      } catch (error) {
        this.branchUsers = []
        this.$toast.error(
          this.$t('Error'),
          error.response?.data?.message || this.$t('Failed to load users')
        )
      } finally {
        this.loading = false
      }
    },
    async getAvailableUsers() {
      try {
        const response = await this.$axios.get('/api/all-user')
        let users = response.data
        if (users && users.data && Array.isArray(users.data)) {
          users = users.data
        }
        this.availableUsers = Array.isArray(users) ? users : []
      } catch (error) {
        this.availableUsers = []
        this.$toast.error(
          this.$t('Error'),
          error.response?.data?.message || this.$t('Failed to load available users')
        )
      }
    },
    async assignUser() {
      if (!this.selectedUser) {
        this.$toast.error(this.$t('Error'), this.$t('Please select a user'))
        return
      }

      this.loading = true
      try {
        const branchId = this.$route.params.branchId
        await this.$axios.post('/api/user-branches', {
          user_id: this.selectedUser.id,
          branch_id: branchId,
          role: this.role,
        })
        
        this.$toast.success(
          this.$t('Success'),
          this.$t('User assigned successfully')
        )
        
        this.closeAddUserModal()
        await this.getBranchUsers()
        await this.getAvailableUsers()
      } catch (error) {
        this.$toast.error(
          this.$t('Error'),
          error.response?.data?.message || this.$t('Failed to assign user')
        )
      } finally {
        this.loading = false
      }
    },
    async removeUser(user) {
      if (!confirm(this.$t('Are you sure you want to remove this user from the branch?'))) {
        return
      }

      this.loading = true
      try {
        const branchId = this.$route.params.branchId
        await this.$axios.delete(`/api/user-branches/${user.id}/${branchId}`)
        
        this.$toast.success(
          this.$t('Success'),
          this.$t('User removed successfully')
        )
        
        await this.getBranchUsers()
        await this.getAvailableUsers()
      } catch (error) {
        this.$toast.error(
          this.$t('Error'),
          error.response?.data?.message || this.$t('Failed to remove user')
        )
      } finally {
        this.loading = false
      }
    },
    closeAddUserModal() {
      this.showAddUserModal = false
      this.selectedUser = null
      this.role = 'member'
    },
    refreshTable() {
      this.getBranchUsers()
    },
  },
}
</script>

<style scoped>
.table-custom {
  border: none !important;
}

.branches-table {
  border-collapse: separate;
  border-spacing: 0;
}

.branches-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.branches-table thead tr {
  border: none !important;
}

.branches-table thead th:first-child {
  border-top-left-radius: 10px;
}

.branches-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .branches-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .branches-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Custom Status Badge Styling (match index) */
.branches-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.branches-table .badge.bg-secondary {
  background: #f1f1f1 !important;
  color: #6c757d !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Header buttons styling to match index */
.btn-group.c-w-100 {
  gap: 10px;
}

.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.btn-secondary {
  background: #6c757d !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

/* Modal improvements */
.modal-header {
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.modal-body {
  padding: 20px;
}

.form-group label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
}

.form-group .v-select {
  min-height: 44px;
}
</style>
