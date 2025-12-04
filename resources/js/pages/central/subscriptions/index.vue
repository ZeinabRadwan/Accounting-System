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
                {{ $t("All Subscriptions") }}
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
              :columns="subscriptionColumns"
              :rows="subscriptionsWithIndex"
              :loading="loading"
              table-id="printMe"
              wrapper-class="mt-3"
              :show-actions="false"
            >
              <template #cell-tenant="{ row }">
                <a v-if="row.tenant" :href="row.tenant.domain_url">
                  {{ row.tenant.name }}
                </a>
              </template>
              <template #cell-plan="{ row }">
                {{ row.plan?.name }}
              </template>
              <template #cell-approvedBy="{ row }">
                <span v-tooltip="row.approved_by?.email">
                  {{ row.approved_by?.name }}
                </span>
              </template>
              <template #cell-createdAt="{ row }">
                {{ row.created_at | moment('Do MMM, YYYY') }}
              </template>
              <template #cell-endsAt="{ row }">
                {{ row.ends_at | moment('Do MMM, YYYY') }}
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
  middleware: ["auth"],
  components: {
    GeneralTable,
  },
  metaInfo() {
    return { title: this.$t("All Subscriptions") };
  },
  data: () => ({
    STATUS_PENDING: 0,
    STATUS_ACCEPTED: 1,
    STATUS_REJECTED: 2,

    breadcrumbsCurrent: "All Subscriptions",
    breadcrumbs: [
      {
        name: "Subscriptions",
        url: "home",
      },
      {
        name: "All Subscriptions",
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
    subscriptionColumns() {
      return [
        { key: "id", label: this.$t("ID"), sortable: false },
        { key: "tenant", label: this.$t("Tenant") },
        { key: "plan", label: this.$t("Plan") },
        { key: "quantity", label: this.$t("Month") },
        { key: "approvedBy", label: this.$t("Approved By") },
        { key: "createdAt", label: this.$t("Created At") },
        { key: "endsAt", label: this.$t("Ends At") },
      ];
    },
    subscriptionsWithIndex() {
      return this.items.map((item) => ({
        ...item,
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
        path: "/api/subscriptions?page=",
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
            .patch("/api/subscriptions/" + slug, {
              status: status,
            })
            .then(() => {
              this.$toast.success(
                this.$t("Updated successfully!"),
                this.$t("Updated successfully.")
              );
              this.getData();
            })
            .catch((e) => {
              this.$toast.warning(
                this.$t("Failed!"),
                this.$t("There was something wrong.")
              );

              console.log(e)
            });
        }
      });
    },

    // delete data
    async deleteData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("subscriptions.index.delete_warning"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"), cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/subscriptions/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully.")
                );
                this.getData();
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.$t("subscriptions.index.delete_failed")
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
