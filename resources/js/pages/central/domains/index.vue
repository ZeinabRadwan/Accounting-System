<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="card custom-card w-100">
        <div class="card-header setings-header">
          <div class="col-xl-4 col-4">
            <h3 class="card-title">
              {{ $t("All Domains") }}
            </h3>
          </div>
          <div class="col-xl-8 col-8 float-right text-right">
            <div class="btn-group c-w-100">
              <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success">
                <i class="fas fa-sync"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- /.card-header -->
        <div class="card-body position-relative">
          <table-loading v-show="loading" />
          <GeneralTable
            :columns="domainColumns"
            :rows="domainsWithIndex"
            :loading="loading"
            table-id="printMe"
            wrapper-class="mt-3"
            :show-actions="true"
          >
            <template #cell-tenant="{ row }">
              <router-link v-if="row.tenant" :to="{
                name: 'tenants.show',
                params: { id: row.tenant_id },
              }">
                {{ row.tenant.name }}
              </router-link>
            </template>
            <template #actions="{ row }">
              <div v-if="row.id" class="btn-group">
                <a v-tooltip="$t('Delete')" href="#" class="btn btn-danger btn-sm" @click="deleteData(row.id)">
                  <i class="fas fa-trash" />
                </a>
              </div>
            </template>
          </GeneralTable>
        </div>
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
</template>

<script>
import { mapGetters } from 'vuex'
import GeneralTable from '../../../components/GeneralTable.vue'

export default {
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  components: {
    GeneralTable,
  },
  metaInfo() {
    return { title: this.$t('All Domains') }
  },
  data: () => ({
    breadcrumbsCurrent: 'All Domains',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'All Domains',
        url: '',
      },
    ],
    query: '',
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', [
      'items',
      'loading',
      'pagination',
      'appInfo',
      'tenant',
    ]),
    domainColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "domain", label: this.$t("Domain") },
        { key: "tenant", label: this.$t("Tenant") },
      ];
    },
    domainsWithIndex() {
      return this.items.map((item, index) => ({
        ...item,
        index: this.pagination && this.pagination.current_page > 1
          ? this.pagination.per_page * (this.pagination.current_page - 1) + (index + 1)
          : index + 1,
      }));
    },
  },
  created() {
    this.getData()
  },
  methods: {
    // get data
    async getData() {
      this.$store.state.operations.loading = true
      let currentPage = this.pagination ? this.pagination.current_page : 1
      await this.$store.dispatch('operations/fetchData', {
        path: '/api/domains?page=',
        currentPage: currentPage + '&perPage=' + this.perPage,
      })
    },

    // Pagination
    async paginate() {
      this.query === '' ? await this.getData() : await this.searchData()
    },

    // Reset pagination
    async resetPagination() {
      this.pagination.current_page = 1
    },

    // Reload after search
    async reload() {
      this.query = ''
    },

    // print table
    async print() {
      await this.$htmlToPaper('printMe')
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.query === "" ? this.getData() : this.searchData();
    },

    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },

    // delete data
    async deleteData(slug) {
      Swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('Are you sure you want to delete this domain?'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Confirm'),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch('operations/deleteData', {
              path: '/api/domains/',
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t('Deleted!'),
                  this.$t('Deleted successfully.'),
                )
                this.getData()
              } else {
                this.$toast.warning(
                  this.$t('Failed!'),
                  this.$t('Delete failed'),
                )
              }
            })
        }
      })
    },

    // delete data
    async makePrimary(id) {
      await this.$axios
        .post('/api/domains/' + id)
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Successfully made primary'),
          })
          this.getData()
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Error!'),
          })
        })
    },
  },
}
</script>

<style>
.dtable-footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 0 0 10px;
  flex-direction: column;
}

.card-footer .form-group.row.display-per-page {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
}
</style>
