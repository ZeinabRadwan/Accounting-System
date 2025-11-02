<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row" style="justify-content: flex-end">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <div class="btn-group c-w-100">
                  <a
                    @click="refreshTable()"
                    href="#"
                    v-tooltip="$t('Refresh')"
                    class="btn btn-success refresh-btn"
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                  <router-link v-if="$can('payment-voucher-create')" :to="{ name: 'sendVouchers.create' }"
                    class="btn btn-primary">
                    <i class="fa fa-plus"></i> {{ $t("Create") }}
                  </router-link>
                </div>
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <table class="table vouchers-table">
                <thead>
                  <th>{{ $t("#") }}</th>
                  <th>{{ $t("Entity Type") }}</th>
                  <th>{{ $t("Entity Name") }}</th>
                  <th>{{ $t("Payment Method") }}</th>
                  <th>{{ $t("Amount") }}</th>
                  <th>{{ $t("Account") }}</th>
                  <th>{{ $t("Date") }}</th>
                  <th>{{ $t("Status") }}</th>
                  <th v-if="$can('payment-voucher-edit') ||
                    $can('payment-voucher-view') ||
                    $can('payment-voucher-delete')
                    " class="text-right no-print">
                    {{ $t("Action") }}
                  </th>
                </thead>
                <tbody>
                  <tr v-show="items.length" v-for="(data, i) in items" :key="i">
                    <td>
                      <span v-if="pagination && pagination.current_page > 1">
                        {{
                          pagination.per_page * (pagination.current_page - 1) +
                          (i + 1)
                        }}
                      </span>
                      <span v-else>{{ i + 1 }}</span>
                    </td>
                    <td>{{ getEntityTypeLabel(data.entityType) }}</td>
                    <td>{{ getEntityName(data) }}</td>
                    <td>{{ getPaymentMethodLabel(data.paymentMethod) }}</td>
                    <td>{{ data.amount }} <span class="saudi-riyal">ê</span></td>
                    <td>
                      <span v-if="data.account">{{ data.account.label }}</span>
                    </td>
                    <td>
                      <span v-if="data.date">{{
                        data.date | moment("Do MMM, YYYY")
                      }}</span>
                    </td>
                    <td>
                      <span v-if="data.status === 1" class="badge bg-success">{{
                        $t("Active")
                      }}</span>
                      <span v-else-if="data.status === 2" class="badge bg-danger">{{
                        $t("Cancelled")
                      }}</span>
                      <span v-else class="badge bg-danger">{{
                        $t("Inactive")
                      }}</span>
                    </td>
                    <td v-if="$can('payment-voucher-edit') ||
                        $can('payment-voucher-view') ||
                        $can('payment-voucher-delete')
                        " class="text-right no-print">
                      <div class="action-dropdown">
                        <router-link
                          v-if="$can('payment-voucher-view')"
                          :to="{ name: 'sendVouchers.show', params: { slug: data.slug } }"
                          class="btn btn-sm btn-primary mr-1"
                          :title="$t('View')"
                        >
                          <i class="fas fa-eye"></i>
                        </router-link>
                        <router-link
                          v-if="$can('payment-voucher-edit')"
                          :to="{ name: 'sendVouchers.edit', params: { slug: data.slug } }"
                          class="btn btn-sm btn-success mr-1"
                          :title="$t('Edit')"
                        >
                          <i class="fas fa-edit"></i>
                        </router-link>
                        <button
                          v-if="$can('payment-voucher-delete')"
                          @click="deleteItem(data.slug)"
                          class="btn btn-sm btn-danger"
                          :title="$t('Delete')"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <pagination
              v-if="pagination && pagination.last_page > 1"
              :pagination="pagination"
              :offset="5"
              class="justify-content-end"
              @paginate="query === '' ? getAllItem() : searchData()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
  name: "send-vouchers",
  data() {
    return {
      breadcrumbsCurrent: this.$t("Send Vouchers"),
      breadcrumbs: [
        {
          name: this.$t("Dashboard"),
          url: "home",
        },
        {
          name: this.$t("Vouchers"),
          url: "",
        },
        {
          name: this.$t("Send Vouchers"),
          url: "",
        },
      ],
      query: "",
      items: [],
      pagination: {},
      loading: false,
      currentRoute: "",
    };
  },
  computed: {
    ...mapGetters({
      appInfo: "operations/appInfo",
    }),
  },
  created() {
    this.currentRoute = this.$route.path;
    this.getAllItem();
  },
  methods: {
    async getAllItem() {
      this.loading = true;
      let { data } = await this.$http.get(
        window.location.origin +
          "/api/vouchers/send?page=" +
          this.$route.params.page
      );
      this.items = data.data;
      this.pagination = data.meta;
      this.loading = false;
    },
    async searchData() {
      if (this.query.length > 0) {
        this.loading = true;
        try {
          const response = await this.$http.get(
            window.location.origin +
              "/api/vouchers/search?term=" +
              this.query +
              "&voucherType=0&page=" +
              this.$route.params.page
          );
          this.items = response.data.data;
          this.pagination = response.data.meta;
          this.loading = false;
        } catch (err) {
          this.loading = false;
        }
      } else {
        this.getAllItem();
      }
    },
    async reload() {
      this.query = "";
      this.resetPagination();
      this.getAllItem();
    },
    async refreshTable() {
      this.query = "";
      this.resetPagination();
      this.getAllItem();
    },
    resetPagination() {
      this.$route.params.page = 1;
    },
    getEntityTypeLabel(type) {
      const labels = {
        client: this.$t("Client"),
        supplier: this.$t("Supplier"),
        chart_of_account: this.$t("Chart of Account"),
      };
      return labels[type] || type;
    },
    getEntityName(data) {
      if (data.client) return data.client.name;
      if (data.supplier) return data.supplier.name;
      if (data.chartOfAccount) return data.chartOfAccount.name;
      return "-";
    },
    getPaymentMethodLabel(method) {
      const labels = {
        direct: this.$t("Direct"),
        invoice: this.$t("Invoice"),
        purchase: this.$t("Purchase"),
      };
      return labels[method] || method;
    },
    async deleteItem(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this! This will delete the voucher permanently."),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),
        cancelButtonText: this.$t("Cancel"),
      }).then(async (result) => {
        if (result.value) {
          try {
            const response = await this.$http.delete(window.location.origin + "/api/vouchers/" + slug);
            
            if (response.data.statusCode === 200) {
              // Success - translate message if available
              const successMessage = response.data.message || this.$t('Voucher deleted successfully');
              const translatedMessage = this.$t(successMessage);
              this.$toastr.s(translatedMessage !== successMessage ? translatedMessage : successMessage);
              this.getAllItem();
            } else {
              // Handle non-200 status codes
              const errorMessage = response.data.message || this.$t('Error deleting voucher');
              const translatedMessage = this.$t(errorMessage);
              this.$toastr.e(translatedMessage !== errorMessage ? translatedMessage : errorMessage);
            }
          } catch (error) {
            console.error('Error deleting voucher:', error);
            
            // Extract error message from response
            let errorMessage = null;
            
            if (error?.response?.data) {
              const errorData = error.response.data;
              
              // Check for message field
              if (errorData.message && typeof errorData.message === 'string') {
                errorMessage = errorData.message;
              } else if (errorData.error && typeof errorData.error === 'string') {
                errorMessage = errorData.error;
              } else if (errorData.errors && typeof errorData.errors === 'object') {
                // If there are validation errors, try to get the first one
                const firstErrorKey = Object.keys(errorData.errors)[0];
                if (firstErrorKey && Array.isArray(errorData.errors[firstErrorKey])) {
                  const firstError = errorData.errors[firstErrorKey][0];
                  if (typeof firstError === 'string') {
                    errorMessage = firstError;
                  }
                } else if (firstErrorKey && typeof errorData.errors[firstErrorKey] === 'string') {
                  errorMessage = errorData.errors[firstErrorKey];
                }
              }
            } else if (error?.message && typeof error.message === 'string') {
              errorMessage = error.message;
            }
            
            // Translate and show error
            if (errorMessage) {
              const translatedMessage = this.$t(errorMessage);
              this.$toastr.e(translatedMessage !== errorMessage ? translatedMessage : errorMessage);
            } else {
              this.$toastr.e(this.$t('Error deleting voucher'));
            }
          }
        }
      });
    },
  },
};
</script>

