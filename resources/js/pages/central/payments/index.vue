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
                {{ $t("Payments") }}
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
              :columns="paymentColumns"
              :rows="paymentsWithIndex"
              :loading="loading"
              table-id="printMe"
              wrapper-class="mt-3"
              :show-actions="true"
            >
              <template #cell-plan="{ row }">
                {{ row.plan.name }}
              </template>
              <template #cell-amount="{ row }">
                {{ row.default_amount_rate * row.quantity }} <span class="saudi-riyal">ê</span><br>
                (${{ row.amount * row.quantity }})
              </template>
              <template #cell-createdAt="{ row }">
                {{ row.created_at | moment("Do MMM, YYYY HH:mm:A") }}
              </template>
              <template #actions="{ row }">
                <div v-if="row.status == 'success'" class="btn-group">
                  <button type="button" v-tooltip="$t('Download')" class="btn btn-info btn-sm"
                    @click="download(row.id)">
                    <i class="fas fa-file-download" />
                  </button>
                </div>
                <div v-else class="text-center">
                  <p>N/A</p>
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
import { mapGetters } from 'vuex';
import GeneralTable from '../../../components/GeneralTable.vue';

export default {
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  components: {
    GeneralTable,
  },
  metaInfo() {
    return { title: this.$t('Payments') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Payments',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Payments',
        url: '',
      },
    ],
    query: '',
    perPage: 10,
    billingHistory: [],
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['items', 'loading', 'pagination', 'appInfo', 'tenant']),
    paymentColumns() {
      return [
        { key: "id", label: this.$t("ID"), sortable: false },
        { key: "plan", label: this.$t("Plan") },
        { key: "quantity", label: this.$t("Month") },
        { key: "method", label: this.$t("Transaction Type") },
        { key: "system_trx_id", label: this.$t("Trx ID") },
        { key: "amount", label: this.$t("Amount") },
        { key: "status", label: this.$t("Payment Status") },
        { key: "createdAt", label: this.$t("Created At") },
      ];
    },
    paymentsWithIndex() {
      return this.items.map((item) => ({
        ...item,
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
        path: '/api/payments?page=',
        currentPage: currentPage + '&perPage=' + this.perPage,
      })
    },

    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1
      this.query === '' ? this.getData() : this.searchData()
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

    // download invoice
    async download(id) {
      await this.$axios.post(
        window.location.origin + "/api/payments/download", {
        payment_id: id,
      }, {
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
