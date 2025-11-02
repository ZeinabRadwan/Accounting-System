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
                <router-link :to="{ name: 'cost-centers.create' }" class="btn btn-primary">
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
                  <th>{{ $t("Code") }}</th>
                  <th>{{ $t("Name") }}</th>
                  <th>{{ $t("Parent") }}</th>
                  <th>{{ $t("Status") }}</th>
                  <th class="text-right">{{ $t("Action") }}</th>
                </thead>
                <tbody>
                  <tr v-show="!loading && items.length <= 0">
                    <td colspan="6">
                      <EmptyTable />
                    </td>
                  </tr>
                  <tr v-for="(item, index) in items" :key="item.id">
                    <td>{{ index + slOffset + 1 }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.parent ? item.parent.name : '-' }}</td>
                    <td>
                      <span :class="['badge', item.is_active ? 'badge-success' : 'badge-danger']">
                        {{ item.is_active ? $t('Active') : $t('Inactive') }}
                      </span>
                    </td>
                    <td class="text-right">
                      <router-link :to="{ name: 'cost-centers.show', params: { slug: item.id } }" class="btn btn-info btn-sm">
                        <i class="fas fa-eye" />
                      </router-link>
                      <router-link :to="{ name: 'cost-centers.edit', params: { slug: item.id } }" class="btn btn-primary btn-sm">
                        <i class="fas fa-edit" />
                      </router-link>
                      <button @click="deleteItem(item.id)" class="btn btn-danger btn-sm" :disabled="!item.can_delete">
                        <i class="fas fa-trash" />
                      </button>
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
import Form from 'vform'

export default {
  name: 'CostCenters',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Cost Centers') }
  },
  data() {
    return {
      breadcrumbsCurrent: 'cost_centers',
      breadcrumbs: [
        { name: 'Dashboard', url: '/' },
        { name: 'Cost Centers', url: '/cost-centers' }
      ],
      query: '',
      perPage: 10,
      costCenters: [],
      pagination: {
        current_page: 1
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters({
      currencySymbol: 'operations/currencySymbol'
    }),
    items() {
      return this.costCenters
    },
    slOffset() {
      if (!this.pagination || !this.pagination.current_page) {
        return 0
      }
      return (this.pagination.current_page - 1) * this.perPage
    }
  },
  watch: {
    query: {
      handler(val) {
        if (val === '') {
          this.getCostCenters()
        } else {
          this.searchCostCenters()
        }
      },
      deep: true
    }
  },
  created() {
    this.getCostCenters()
  },
  methods: {
    async getCostCenters() {
      this.loading = true
      const currentPage = this.pagination?.current_page || 1
      await this.$http
        .get(`/api/cost-centers?page=${currentPage}&perPage=${this.perPage}`)
        .then(response => {
          this.costCenters = response.data.data || []
          this.pagination = response.data.meta || response.data || { current_page: 1, last_page: 1 }
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    },
    async searchCostCenters() {
      this.loading = true
      const currentPage = this.pagination?.current_page || 1
      await this.$http
        .get(`/api/cost-centers/search?term=${this.query}&page=${currentPage}&perPage=${this.perPage}`)
        .then(response => {
          this.costCenters = response.data.data || []
          this.pagination = response.data.meta || response.data || { current_page: 1, last_page: 1 }
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
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
          .delete(`/api/cost-centers/${id}`)
          .then(() => {
            this.getCostCenters()
            this.$toastr.s(this.$t('Cost center deleted successfully'))
          })
          .catch(() => {
            this.$toastr.e(this.$t('Failed to delete cost center'))
          })
      }
    },
    async refreshTable() {
      this.query = ''
      await this.getCostCenters()
    },
    async reload() {
      this.query = ''
      this.getCostCenters()
    },
    async paginate() {
      this.getCostCenters()
    },
    async resetPagination() {
      if (this.pagination) {
        this.pagination.current_page = 1
      }
    },
    updatePerPager() {
      if (this.pagination) {
        this.pagination.current_page = 1
      }
      this.getCostCenters()
    }
  }
}
</script>

