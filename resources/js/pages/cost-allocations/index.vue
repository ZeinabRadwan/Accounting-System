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
            <GeneralTable
              :columns="costAllocationColumns"
              :rows="costAllocationsWithIndex"
              :loading="loading"
              wrapper-class="mt-3"
              :show-actions="true"
            >
              <template #cell-sourceCostCenter="{ row }">
                {{ row.source_cost_center ? row.source_cost_center.name : '-' }}
              </template>
              <template #cell-basisType="{ row }">
                <span class="badge badge-info">{{ getBasisTypeLabel(row.basis_type) }}</span>
              </template>
              <template #cell-targetCenters="{ row }">
                {{ row.details ? row.details.length : 0 }}
              </template>
              <template #cell-status="{ row }">
                <span :class="['badge', row.is_active ? 'badge-success' : 'badge-danger']">
                  {{ row.is_active ? $t('Active') : $t('Inactive') }}
                </span>
              </template>
              <template #actions="{ row }">
                <div class="action-buttons">
                  <router-link :to="{ name: 'cost-allocations.show', params: { id: row.id } }" class="btn btn-info btn-sm">
                    <i class="fas fa-eye" />
                  </router-link>
                  <router-link :to="{ name: 'cost-allocations.edit', params: { id: row.id } }" class="btn btn-primary btn-sm">
                    <i class="fas fa-edit" />
                  </router-link>
                  <button @click="deleteItem(row.id)" class="btn btn-danger btn-sm">
                    <i class="fas fa-trash" />
                  </button>
                  <router-link :to="{ name: 'cost-allocations.execute', params: { id: row.id } }" class="btn btn-success btn-sm">
                    <i class="fas fa-play" />
                  </router-link>
                </div>
              </template>
            </GeneralTable>
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
import GeneralTable from '../../components/GeneralTable.vue'

export default {
  name: 'CostAllocations',
  middleware: ['auth', 'check-permissions'],
  components: {
    GeneralTable,
  },
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
    }),
    costAllocationColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "name", label: this.$t("Name") },
        { key: "sourceCostCenter", label: this.$t("Source Cost Center") },
        { key: "basisType", label: this.$t("Basis Type") },
        { key: "targetCenters", label: this.$t("Target Centers") },
        { key: "status", label: this.$t("Status") },
      ];
    },
    costAllocationsWithIndex() {
      return this.items.map((item, index) => ({
        ...item,
        index: index + (this.pagination.slOffset || 0),
      }));
    },
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

