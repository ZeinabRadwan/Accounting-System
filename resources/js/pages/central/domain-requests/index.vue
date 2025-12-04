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
                {{ $t("Domain Requests") }}
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
              :columns="domainRequestColumns"
              :rows="domainRequestsWithIndex"
              :loading="loading"
              table-id="printMe"
              wrapper-class="mt-3"
              :show-actions="true"
            >
              <template #cell-tenantName="{ row }">
                {{ row.tenant && row.tenant.name }}
              </template>
              <template #cell-tenantEmail="{ row }">
                {{ row.tenant && row.tenant.email }}
              </template>
              <template #cell-status="{ row }">
                <span v-html="row.status_html"></span>
              </template>
              <template #actions="{ row }">
                <div v-if="row.id" class="btn-group">
                  <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle" href="!#" role="button" id="dropdownMenuLink"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {{ $t("Action") }}
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <button :disabled="row.status == 0" v-tooltip="$t('Pending')" href="#"
                        class="btn btn-info btn-sm dropdown-item" @click.prevent="update(row.id, 0)">
                        <i class="fas fa-clock" />
                        {{ $t("Pending") }}
                      </button>

                      <button :disabled="row.status == 1" v-tooltip="$t('Connected')" href="#"
                        class="btn btn-success btn-sm dropdown-item" @click.prevent="update(row.id, 1)">
                        <i class="fas fa-link" />
                        {{ $t("Connected") }}
                      </button>

                      <button :disabled="row.status == 2" v-tooltip="$t('Rejected')" href="#"
                        class="btn btn-danger btn-sm dropdown-item" @click.prevent="update(row.id, 2)">
                        <i class="fas fa-times" />
                        {{ $t("Rejected") }}
                      </button>

                      <button :disabled="row.status == 3" v-tooltip="$t('Removed')" href="#"
                        class="btn btn-warning btn-sm dropdown-item" @click.prevent="update(row.id, 3)">
                        <i class="fas fa-minus-circle" />
                        {{ $t("Removed") }}
                      </button>

                      <button :disabled="row.status != 0" v-tooltip="$t('Delete')" href="#"
                        class="btn btn-danger btn-sm dropdown-item" @click.prevent="deleteData(row.id)">
                        <i class="fas fa-trash" /> {{ $t("Delete") }}
                      </button>
                    </div>
                  </div>
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
import { mapGetters } from "vuex";
import GeneralTable from "../../../components/GeneralTable.vue";

export default {
  layout: "central",
  middleware: ["auth", "check-permissions"],
  components: {
    GeneralTable,
  },
  metaInfo() {
    return { title: this.$t("Domain Requests") };
  },
  data: () => ({
    breadcrumbsCurrent: "Domain Requests",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Domain Requests",
        url: "",
      },
    ],
    query: "",
    perPage: 10,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", [
      "items",
      "loading",
      "pagination",
      "appInfo",
      "tenant",
    ]),
    domainRequestColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "requested_domain", label: this.$t("Requested Domain") },
        { key: "tenantName", label: this.$t("Tenant Name") },
        { key: "tenantEmail", label: this.$t("Tenant Email") },
        { key: "status", label: this.$t("Status") },
      ];
    },
    domainRequestsWithIndex() {
      return this.items.map((item, index) => ({
        ...item,
        index: this.pagination && this.pagination.current_page > 1
          ? this.pagination.per_page * (this.pagination.current_page - 1) + (index + 1)
          : index + 1,
      }));
    },
  },
  created() {
    this.getData();
  },
  methods: {
    // get data
    async getData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/domain-requests?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
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


    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getData() : this.searchData();
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.query === "" ? this.getData() : this.searchData();
    },

    // delete data
    async update(slug, status) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"), cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$axios
            .patch("/api/domain-requests/" + slug, {
              status: status,
            })
            .then(() => {
              Swal.fire(
                this.$t("Updated successfully!"),
                this.$t("Updated successfully."),
                "success"
              );
              this.getData();
            })
            .catch(() => {
              Swal.fire(
                this.$t("Failed!"),
                this.$t("There was something wrong."),
                "warning"
              );
            });
        }
      });
    },

    // delete data
    async deleteData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("Do you really want to delete this Domain Request?"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"), cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/domain-requests/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                Swal.fire(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully."),
                  "success"
                );
                this.getData();
              } else {
                Swal.fire(
                  this.$t("Failed!"),
                  this.$t("Delete failed"),
                  "warning"
                );
              }
            });
        }
      });
    },
  },
};
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
