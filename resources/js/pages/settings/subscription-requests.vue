<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <h3 class="card-title">{{ $t("Subscription Requests") }}</h3>
          </div>
          <div class="card-body position-relative">
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <GeneralTable
                v-if="items && items.length > 0"
                :columns="subscriptionRequestColumns"
                :rows="subscriptionRequestRows"
                :loading="loading"
                wrapper-class="table-responsive"
              >
                <template #document_path="{ row }">
                  <a v-if="row._raw.document_path" :href="row._raw.document_url" target="_blank">
                    {{ $t('Download') }}
                  </a>
                  <div v-else>
                    {{ $t('Not Available') }}
                  </div>
                </template>
                <template #plan_price="{ row }">
                  {{ row._raw.plan?.amount }} <span class="saudi-riyal">ê</span>
                </template>
                <template #status="{ row }">
                  <span v-html="row._raw.status_html"></span>
                </template>
                <template #created_at="{ row }">
                  {{ row._raw.created_at | moment('Do MMM, YYYY') }}
                </template>
              </GeneralTable>
              <div v-else class="text-center">
                <EmptyTable />
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t("per_page") }} </label>
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
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Subscription Invoices") };
  },
  components: {
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: 'Subscription Requests',
    breadcrumbs: [
      { name: 'Dashboard', url: 'home' },
      { name: 'Settings', url: '' },
      { name: 'Subscription Requests', url: '' },
    ],
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
        { key: "index", label: this.$t("ID") },
        { key: "transaction_id", label: this.$t("Transaction ID") },
        { key: "document_path", label: this.$t("Document Path") },
        { key: "plan_name", label: this.$t("Plan Name") },
        { key: "plan_price", label: this.$t("Plan Price") },
        { key: "month", label: this.$t("Month") },
        { key: "status", label: this.$t("Status") },
        { key: "created_at", label: this.$t("Created At") },
      ];
    },
    subscriptionRequestRows() {
      if (!this.items) return [];
      return this.items.map((item, index) => {
        const rowIndex = this.pagination && this.pagination.current_page > 1
          ? this.pagination.per_page * (this.pagination.current_page - 1) + (index + 1)
          : index + 1;
        return {
          index: rowIndex,
          transaction_id: item.transaction_id ?? this.$t('Not Available'),
          document_path: item.document_path,
          plan_name: item.plan?.name || "",
          plan_price: item.plan?.amount || 0,
          month: item.quantity,
          status: item.status_html,
          created_at: item.created_at,
          _raw: item,
        };
      });
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

    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      this.getData()
    },

    // pagination
    async paginate() {
      this.getData()
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // download invoice
    async download(id, account_name) {
      await this.$axios
        .post(
          window.location.origin + "/api/subscription-invoices",
          {
            invoice_id: id,
            product_name: this.appInfo.companyName + " - Subscription",
            vendor_name: account_name,
          },
          {
            responseType: "blob",
          }
        )
        .then((response) => {
          toast.fire({
            type: "success",
            title: this.$t("Successfully created"),
          });
          window.open(URL.createObjectURL(response.data));
        })
        .catch(() => {
          toast.fire({
            type: "error",
            title: this.$t("Please check your input and try again."),
          });
        });
    },
  },
};
</script>

<style scoped>
.table-custom {
  border: none !important;
  overflow: visible !important;
}

.invoices-table {
  border-collapse: separate;
  border-spacing: 0;
}

.invoices-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.invoices-table thead tr {
  border: none !important;
}

.invoices-table thead th:first-child {
  border-top-left-radius: 10px;
}

.invoices-table thead th:last-child {
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  overflow: visible;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Button styles to match invoices page */
.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-excel-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-pdf-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.print-btn {
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
</style>
