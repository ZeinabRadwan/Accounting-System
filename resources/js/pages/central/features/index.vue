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
                {{ $t("Features") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success">
                  <i class="fas fa-sync"></i>
                </a>
                <router-link :to="{ name: 'features.create' }" class="btn btn-primary">
                  {{ $t("Create") }}
                  <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
            </div>
            <table-loading v-show="loading" />
            <GeneralTable
              :columns="featureColumns"
              :rows="featuresWithIndex"
              :loading="loading"
              table-id="printMe"
              wrapper-class="mt-3"
              :show-actions="true"
            >
              <template #actions="{ row }">
                <div class="btn-group">
                  <router-link v-tooltip="$t('Edit')" :to="{
                    name: 'features.edit',
                    params: { id: row.id },
                  }" class="btn btn-info btn-sm">
                    <i class="fas fa-edit" />
                  </router-link>
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
    return { title: this.$t('Features') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Features',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Features',
        url: '',
      },
    ],
    imagePath: '',
    query: '',
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['items', 'loading', 'pagination']),
    featureColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "name", label: this.$t("Name") },
      ];
    },
    featuresWithIndex() {
      return this.items.map((item, index) => ({
        ...item,
        index: this.pagination && this.pagination.current_page > 1
          ? this.pagination.per_page * (this.pagination.current_page - 1) + (index + 1)
          : index + 1,
      }));
    },
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === '') {
        this.getData()
      } else {
        this.searchData()
      }
    },
  },
  created() {
    this.getData()
  },
  methods: {
    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1
      this.query === '' ? this.getData() : this.searchData()
    },
    // get data
    async getData() {
      this.$store.state.operations.loading = true
      let currentPage = this.pagination ? this.pagination.current_page : 1
      await this.$store.dispatch('operations/fetchData', {
        path: '/api/features?page=',
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

    // search data
    async searchData() {
      this.$store.state.operations.loading = true
      let currentPage = this.pagination ? this.pagination.current_page : 1
      await this.$store.dispatch('operations/searchData', {
        term: this.query,
        path: '/api/features/search/',
        currentPage: currentPage + '&perPage=' + this.perPage,
      })
    },

    // Reload after search
    async reload() {
      this.query = ''
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.query === "" ? this.getData() : this.searchData();
    },


    // print table
    async print() {
      await this.$htmlToPaper('printMe')
    },

    // delete data
    async deleteData(id) {
      Swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('You will not be able to return to this!'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Confirm'),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch('operations/deleteData', {
              path: '/api/features/',
              slug: id,
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
                  this.$t('There was something wrong.'),
                  'warning'
                )
              }
            })
        }
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
