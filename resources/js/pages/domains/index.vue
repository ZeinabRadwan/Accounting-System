<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Domain Management") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
              </div>
            </div>
          </div>
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
              <template #cell-type="{ row }">
                <span v-if="row.is_domain">Domain</span>
                <span v-else>Sub Domain</span>
              </template>
              <template #cell-fallback="{ row }">
                <span class="badge badge-success" v-if="row.is_fallback">True</span>
                <span class="badge badge-danger" v-else>False</span>
              </template>
              <template #cell-primary="{ row }">
                <span class="badge badge-success" v-if="row.is_primary">True</span>
                <span class="badge badge-danger" v-else>False</span>
              </template>
              <template #actions="{ row }">
                <div v-if="row.id" class="btn-group">
                  <span v-if="row.is_fallback && row.is_primary">
                    {{ $t('No action available') }}
                  </span>
                  <a v-if="!row.is_primary" v-tooltip="$t('Make Primary')" href="#"
                    class="btn btn-success btn-sm" @click="makePrimary(row.id)">
                    <i class="fas fa-check-circle"></i>
                  </a>
                  <a v-if="!row.is_fallback && !row.is_primary" v-tooltip="$t('Delete')" href="#"
                    class="btn btn-danger btn-sm" @click="deleteData(row.id)">
                    <i class="fas fa-trash" />
                  </a>
                </div>
              </template>
            </GeneralTable>
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
  middleware: ['auth', 'check-permissions'],
  components: {
    GeneralTable,
  },
  metaInfo() {
    return { title: this.$t('Domain Management') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Domain Management',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Domain Management',
        url: '',
      },
    ],
    query: '',
    perPage: 10,

  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['items', 'loading', 'pagination', 'appInfo', 'tenant']),
    domainColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "domain", label: this.$t("Domain") },
        { key: "type", label: this.$t("Type") },
        { key: "fallback", label: this.$t("Fallback") },
        { key: "primary", label: this.$t("Primary") },
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
    this.employeePrefix = this.appInfo.employeePrefix
  },
  methods: {
    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1
      this.query === '' ? this.getData() : this.searchData()
    },
    async paginate() {
      this.query === '' ? this.getData() : this.searchData()
    },
    // get data
    async getData() {
      this.$store.state.operations.loading = true
      let currentPage = this.pagination ? this.pagination.current_page : 1
      await this.$store.dispatch('operations/fetchData', {
        path: '/api/domains?page=',
        currentPage: currentPage + '&perPage=' + this.perPage,
      })
    },

    // print table
    async print() {
      await this.$htmlToPaper('printMe')
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
                Swal.fire(
                  this.$t('Deleted!'),
                  this.$t('Deleted successfully.'),
                  'success'
                )
                this.getData()
              } else {
                Swal.fire(
                  this.$t('Failed!'),
                  this.$t('Delete failed'),
                  'warning'
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
