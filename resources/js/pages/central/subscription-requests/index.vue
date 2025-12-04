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
              :columns="subscriptionRequestColumns"
              :rows="subscriptionRequestsWithIndex"
              :loading="loading"
              table-id="printMe"
              wrapper-class="mt-3"
              :show-actions="true"
            >
              <template #cell-tenant="{ row }">
                <a v-if="row.tenant" :href="row.tenant.domain_url">
                  {{ row.tenant.name }}
                </a>
              </template>
              <template #cell-transactionId="{ row }">
                {{ row.transaction_id ?? $t('Not Available') }}
              </template>
              <template #cell-documentPath="{ row }">
                <a v-if="row.document_path" :href="row.document_url" target="_blank">
                  {{ $t('Download') }}
                </a>
                <div v-else>
                  {{ $t('Not Available') }}
                </div>
              </template>
              <template #cell-planName="{ row }">
                {{ row.plan.name }}
              </template>
              <template #cell-planPrice="{ row }">
                {{ row.plan.amount }} <span class="saudi-riyal">ê</span>
              </template>
              <template #cell-status="{ row }">
                <span v-html="row.status_html" class="text-center"></span>
              </template>
              <template #cell-updatedBy="{ row }">
                <span v-if="row.status_updated_by" v-tooltip="row.status_updated_by.email">
                  {{ row.status_updated_by.name }}
                </span>
                <span v-else>
                  {{ $t('Not updated yet!') }}
                </span>
              </template>
              <template #cell-createdAt="{ row }">
                {{ row.created_at | moment('Do MMM, YYYY') }}
              </template>
              <template #actions="{ row }">
                <div v-if="row.id" class="btn-group">
                  <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle" href="!#" role="button" id="dropdownMenuLink"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {{ $t("Action") }}
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <button :disabled="row.status === STATUS_ACCEPTED"
                        v-tooltip="$t('Accepted')" href="#" class="btn btn-success btn-sm dropdown-item"
                        @click.prevent="update(row.id, STATUS_ACCEPTED)">
                        <i class="fas fa-link" />
                        {{ $t("Accepted") }}
                      </button>

                      <button
                        :disabled="row.status === STATUS_REJECTED || row.status === STATUS_ACCEPTED"
                        v-tooltip="$t('Rejected')" href="#" class="btn btn-danger btn-sm dropdown-item"
                        @click.prevent="update(row.id, STATUS_REJECTED)">
                        <i class="fas fa-times" />
                        {{ $t("Rejected") }}
                      </button>

                      <button :disabled="row.status !== STATUS_PENDING" v-tooltip="$t('Delete')"
                        href="#" class="btn btn-danger btn-sm dropdown-item"
                        @click.prevent="deleteData(row.id)">
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
  middleware: ["auth"],
  components: {
    GeneralTable,
  },
  metaInfo() {
    return { title: this.$t("All Subscription Requests") };
  },
  data: () => ({
    STATUS_PENDING: 0,
    STATUS_ACCEPTED: 1,
    STATUS_REJECTED: 2,

    breadcrumbsCurrent: "All Subscription Requests",
    breadcrumbs: [
      {
        name: "Subscriptions",
        url: "home",
      },
      {
        name: "All Subscription Requests",
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
    subscriptionRequestColumns() {
      return [
        { key: "id", label: this.$t("ID"), sortable: false },
        { key: "tenant", label: this.$t("Tenant") },
        { key: "transactionId", label: this.$t("Transaction ID") },
        { key: "documentPath", label: this.$t("Document Path") },
        { key: "planName", label: this.$t("Plan Name") },
        { key: "planPrice", label: this.$t("Plan Price") },
        { key: "quantity", label: this.$t("Month") },
        { key: "status", label: this.$t("Status") },
        { key: "updatedBy", label: this.$t("Updated By") },
        { key: "createdAt", label: this.$t("Created At") },
      ];
    },
    subscriptionRequestsWithIndex() {
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
        path: "/api/subscription-requests?page=",
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

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
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
            .patch("/api/subscription-requests/" + slug, {
              status: status,
            })
            .then(() => {
              this.$toast.success(
                this.$t("Updated successfully!"),
                this.$t("Updated successfully.")
              );
              this.getData();
              location.reload();
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
        text: this.$t("subscription-requests.index.delete_warning"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"), cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/subscription-requests/",
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
                  this.$t("subscription-requests.index.delete_failed")
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
