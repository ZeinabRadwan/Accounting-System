<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success refresh-btn">
                  <i class="fas fa-sync"></i>
                </a>
                <router-link :to="{ name: 'cost-allocations.create' }" class="btn btn-primary">
                  {{ $t("Create") }} <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                </router-link>
              </div>
            </div>
          </div>
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3">
              <table class="table">
                <thead>
                  <th>{{ $t("#") }}</th>
                  <th>{{ $t("Name") }}</th>
                  <th>{{ $t("Source Cost Center") }}</th>
                  <th>{{ $t("Basis Type") }}</th>
                  <th>{{ $t("Target Centers") }}</th>
                  <th>{{ $t("Status") }}</th>
                  <th class="text-right">{{ $t("Action") }}</th>
                </thead>
                <tbody>
                  <tr v-show="!loading && items.length <= 0">
                    <td colspan="7">
                      <EmptyTable />
                    </td>
                  </tr>
                  <tr v-for="(item, index) in items" :key="item.id">
                    <td>{{ index + pagination.slOffset }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.source_cost_center ? item.source_cost_center.name : '-' }}</td>
                    <td>
                      <span class="badge badge-info">{{ getBasisTypeLabel(item.basis_type) }}</span>
                    </td>
                    <td>{{ item.details ? item.details.length : 0 }}</td>
                    <td>
                      <span :class="['badge', item.is_active ? 'badge-success' : 'badge-danger']">
                        {{ item.is_active ? $t('Active') : $t('Inactive') }}
                      </span>
                    </td>
                    <td class="text-right">
                      <router-link :to="{ name: 'cost-allocations.show', params: { id: item.id } }" class="btn btn-info btn-sm">
                        <i class="fas fa-eye" />
                      </router-link>
                      <router-link :to="{ name: 'cost-allocations.edit', params: { id: item.id } }" class="btn btn-primary btn-sm">
                        <i class="fas fa-edit" />
                      </router-link>
                      <button @click="deleteItem(item.id)" class="btn btn-danger btn-sm">
                        <i class="fas fa-trash" />
                      </button>
                      <router-link :to="{ name: 'cost-allocations.execute', params: { id: item.id } }" class="btn btn-success btn-sm">
                        <i class="fas fa-play" />
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t("Per Page") }}</label>
                <div>
                  <select @change="updatePerPager" v-model="perPage" class="form-control form-control-sm ml-2">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination" :offset="5" class="justify-content-end" @paginate="paginate" />
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
  name: 'CostAllocations',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Cost Allocation Rules') }
  },
  data: () => ({
    breadcrumbsCurrent: 'cost_allocations',
    breadcrumbs: [
      { name: this.$t('Dashboard'), url: '/' },
      { name: this.$t('Cost Allocations'), url: '/cost-allocations' }
    ],
    query: '',
    perPage: 10,
    items: [],
    pagination: {
      current_page: 1
    },
    loading: false,
    basisTypes: {
      percentage: this.$t('Percentage'),
      employees: this.$t('Employees'),
      revenue: this.$t('Revenue'),
      area: this.$t('Area'),
      consumption: this.$t('Consumption')
    }
  }),
  computed: {
    ...mapGetters({
      currencySymbol: 'operations/currencySymbol'
    })
  },
  watch: {
    query: {
      handler(val) {
        if (val === '') {
          this.getRules()
        }
      },
      deep: true
    }
  },
  created() {
    this.getRules()
  },
  methods: {
    async getRules() {
      this.loading = true
      await this.$http
        .get(`/api/cost-allocation-rules?page=${this.pagination.current_page}&perPage=${this.perPage}`)
        .then(response => {
          this.items = response.data.data || []
          this.pagination = response.data.meta || response.data
          this.loading = false
        })
    },
    getBasisTypeLabel(type) {
      return this.basisTypes[type] || type
    },
    async deleteItem(id) {
      const result = await this.$swal({
        title: this.$t('Are you sure?'),
        text: this.$t('You won\'t be able to revert this!'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.$t('Delete')
      })

      if (result.value) {
        await this.$http
          .delete(`/api/cost-allocation-rules/${id}`)
          .then(() => {
            this.getRules()
            this.$toastr.s(this.$t('Rule deleted successfully'))
          })
          .catch(() => {
            this.$toastr.e(this.$t('Failed to delete rule'))
          })
      }
    },
    async refreshTable() {
      this.query = ''
      await this.getRules()
    },
    async reload() {
      this.query = ''
      this.getRules()
    },
    async paginate() {
      this.getRules()
    },
    async resetPagination() {
      this.pagination.current_page = 1
    },
    updatePerPager() {
      this.pagination.current_page = 1
      this.getRules()
    }
  }
}
</script>

