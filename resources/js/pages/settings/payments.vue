<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
          </div>
          <div class="card-body position-relative">
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <table class="table invoices-table">
                <thead>
                    <th>{{ $t('ID') }}</th>
                    <th>{{ $t('Plan') }}</th>
                    <th>{{ $t('Month') }}</th>
                    <th>{{ $t('Trx ID') }}</th>
                    <th>{{ $t('Trx Type') }}</th>
                    <th>{{ $t('Payment Status') }}</th>
                    <th>{{ $t('Subscription Till') }}</th>
                    <th>{{ $t('Total') }}
                      <span class="badge badge-info"
                        v-tooltip="'Central Panel Base Currency  <br/><small>(Converted USD)</small>'">
                        <i class="fas fa-info"></i>
                      </span>
                    </th>
                    <th>{{ $t('Action') }}</th>
                </thead>
                <tbody>
                  <tr v-show="items.length" v-for="(payment, i) in items" :key="i">
                    <td><span v-if="pagination && pagination.current_page > 1">
                        {{
                          pagination.per_page * (pagination.current_page - 1) +
                          (i + 1)
                        }}
                      </span>
                      <span v-else>{{ i + 1 }}</span>
                    </td>
                    <td>{{ payment.plan.name }}</td>
                    <td>{{ payment.quantity }}</td>
                    <td>{{ payment.system_trx_id }}</td>
                    <td>{{ payment.method }}</td>
                    <td>{{ payment.status }}</td>
                    <td>
                      <span v-if="payment.subscription && payment.subscription.ends_at">{{
                        payment.subscription ? payment.subscription.ends_at : moment("Do MMM, YYYY")
                      }}</span>
                    </td>
                    <td>
                      {{ (payment.default_amount_rate * payment.quantity) | withCentralAdminCurrency }}<br>
                      (${{ payment.amount * payment.quantity }})
                    </td>
                    <td class="text-center no-print">
                      <div v-if="payment.status == 'success'" class="btn-group">
                        <button type="button" v-tooltip="$t('Download')" class="btn btn-info btn-sm"
                          @click="download(payment.id)">
                          <i class="fas fa-file-download" />
                        </button>
                      </div>
                      <div v-else class="text-center">
                        <p>N/A</p>
                      </div>
                    </td>
                  </tr>
                  <tr v-show="!loading && !items.length">
                    <td colspan="12">
                      <EmptyTable />
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Subscription Invoices") };
  },
  data: () => ({
    breadcrumbsCurrent: 'Subscription Invoices',
    breadcrumbs: [
      { name: 'Dashboard', url: 'home' },
      { name: 'Settings', url: '' },
      { name: 'Subscription Invoices', url: '' },
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
        path: "/api/payments?page=",
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
