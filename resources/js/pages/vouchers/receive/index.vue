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
                  <router-link v-if="$can('payment-voucher-create')" :to="{ name: 'receiveVouchers.create' }"
                    class="btn btn-primary">
                    <i class="fa fa-plus"></i> {{ $t("Create") }}
                  </router-link>
                </div>
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
              <table class="table invoices-table">
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
                    <td v-html="formatCurrency(data.amount)"></td>
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
                      <div class="action-dropdown" :class="{ open: openActionIndex === i }">
                        <button type="button" class="action-icon-btn" :data-action-index="i" @click.stop="toggleAction(i)">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z" fill="#023033"/>
                          </svg>
                        </button>
                        <div class="action-menu" v-if="openActionIndex === i">
                          <div class="action-menu-header">
                            <span class="action-menu-title">{{ $t('Actions') }}</span>
                            <button type="button" class="action-menu-close" @click="toggleAction(i)">
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                          <ul>
                            <li v-if="$can('payment-voucher-view')">
                              <router-link :to="{ name: 'receiveVouchers.show', params: { slug: data.slug } }">
                                <i class="fas fa-eye"></i>
                                {{ $t('View') }}
                              </router-link>
                            </li>
                            <li v-if="$can('payment-voucher-edit')">
                              <router-link :to="{ name: 'receiveVouchers.edit', params: { slug: data.slug } }">{{ $t('Edit') }}</router-link>
                            </li>
                            <li v-if="$can('payment-voucher-delete')">
                              <a href="#" @click.prevent="deleteItem(data.slug)">{{ $t('Delete') }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
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
                  <select
                    @change="updatePerPager"
                    v-model="perPage"
                    class="form-control form-control-sm ml-1"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <pagination
                v-if="pagination && pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                class="justify-flex-end"
                @paginate="query === '' ? getAllItem() : searchData()"
              />
            </div>
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
  name: "receive-vouchers",
  data() {
    return {
      breadcrumbsCurrent: this.$t("Receive Vouchers"),
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
          name: this.$t("Receive Vouchers"),
          url: "",
        },
      ],
      query: "",
      items: [],
      pagination: {},
      loading: false,
      currentRoute: "",
      perPage: 10,
      openActionIndex: null,
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
  mounted() {
    document.addEventListener('click', this.onClickOutside);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.onClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    async getAllItem() {
      this.loading = true;
      let { data } = await this.$http.get(
        window.location.origin +
          "/api/vouchers/receive?page=" +
          this.$route.params.page + (this.perPage ? "&perPage=" + this.perPage : "")
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
              "&voucherType=1&page=" +
              this.$route.params.page + (this.perPage ? "&perPage=" + this.perPage : "")
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
    updatePerPager() {
      if (this.pagination) this.pagination.current_page = 1;
      this.query === '' ? this.getAllItem() : this.searchData();
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
    toggleAction(index) {
      this.openActionIndex = this.openActionIndex === index ? null : index;
      if (this.openActionIndex === index) {
        this.$nextTick(() => {
          this.positionDropdown(index);
        });
      }
    },
    positionDropdown(index) {
      const button = document.querySelector(`[data-action-index="${index}"]`);
      if (button) {
        const rect = button.getBoundingClientRect();
        const menu = document.querySelector('.action-menu');
        if (menu) {
          const isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
          if (isRTL) {
            menu.style.left = '45px';
            menu.style.right = 'auto';
          } else {
            menu.style.left = `${rect.right - 200}px`;
            menu.style.right = 'auto';
          }
          menu.style.top = `${rect.bottom + 8}px`;
        }
      }
    },
    onClickOutside() {
      this.openActionIndex = null;
    },
    handleScroll() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },
    handleResize() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
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
    formatCurrency(amount) {
      if (amount === null || amount === undefined) {
        return '0.00';
      }
      const numValue = Number(amount);
      const formatted = numValue.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return formatted + ' <span class="saudi-riyal">ê</span>';
    },
  },
};
</script>

<style scoped>
.table-custom {
  border: none !important;
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

.refresh-btn {
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

.action-dropdown {
  position: relative;
  display: inline-block;
}

.action-icon-btn {
  border: none;
  width: 24px;
  height: 24px;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}

.action-menu {
  position: fixed;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 8px 20px 0px #00000014;
  border-radius: 12px;
  min-width: 200px;
  z-index: 9999;
  max-height: 80vh;
  overflow: hidden;
  animation: slideInDown 0.3s ease-out;
}

[dir="rtl"] .action-menu {
  left: 45px !important;
  right: auto !important;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.action-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5fb;
  background: #f8fafc;
  border-radius: 12px 12px 0 0;
}

.action-menu-title {
  font-size: 14px;
  font-weight: 600;
  color: #023033;
}

.action-menu-close {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.action-menu-close:hover {
  background: #e5e7eb;
  color: #374151;
}

.action-menu ul {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.action-menu li {
  border-bottom: 1px solid #f1f5fb;
}

.action-menu li:last-child {
  border-bottom: none;
}

.action-menu li a {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #023033;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  gap: 10px;
}

.action-menu li a i {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.action-menu li a:hover {
  background: #f8fafc;
  color: #2AB930;
  transform: translateX(2px);
}

.action-menu li a:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #2AB930;
  transform: scaleY(0);
  transition: transform 0.2s ease;
}

.action-menu li a:hover:before {
  transform: scaleY(1);
}

.btn-group.c-w-100 {
  gap: 10px;
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

.invoices-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.invoices-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.form-control{
  background: #fff !important;
}
</style>

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

@media print {
  .no-print,
  .refresh-btn,
  .btn-group,
  .search-wrapper,
  .card-header,
  .card-footer {
    display: none !important;
  }

  body[dir="ltr"] #printMe,
  #printMe[dir="ltr"] {
    direction: ltr;
  }

  body[dir="rtl"] #printMe,
  #printMe[dir="rtl"] {
    direction: rtl;
  }

  #printMe {
    width: 100%;
    page-break-inside: avoid;
    margin: 0;
    padding: 0;
  }

  .table-responsive {
    overflow: visible !important;
  }

  #printMe .invoices-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  #printMe .invoices-table thead th {
    background-color: #33a0d9 !important;
    color: #ffffff !important;
    padding: 12px 8px !important;
    border: none !important;
    font-weight: 500 !important;
    font-size: 13px !important;
  }

  body[dir="rtl"] #printMe .invoices-table thead th,
  #printMe[dir="rtl"] .invoices-table thead th {
    text-align: right;
  }

  body[dir="ltr"] #printMe .invoices-table thead th,
  #printMe[dir="ltr"] .invoices-table thead th {
    text-align: left;
  }

  #printMe .invoices-table tbody tr {
    page-break-inside: avoid;
  }

  #printMe .invoices-table tbody tr:nth-child(even) {
    background-color: #f9fafb !important;
  }

  #printMe .invoices-table tbody td {
    padding: 10px 8px !important;
    border-bottom: 1px solid #e5e7eb !important;
    font-size: 13px !important;
  }

  #printMe .invoices-table tbody td a {
    color: #33a0d9 !important;
    font-weight: 500 !important;
  }

  #printMe .badge.bg-success {
    background: #F6FEF4 !important;
    color: #2AB930 !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding: 6px 12px !important;
    border-radius: 6px !important;
    display: inline-block !important;
  }

  #printMe .badge.bg-danger {
    background: #FEF4F4 !important;
    color: #DC3545 !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    padding: 6px 12px !important;
    border-radius: 6px !important;
    display: inline-block !important;
  }

  #printMe .saudi-riyal {
    color: inherit !important;
    font-weight: 500 !important;
  }

  .card,
  .card-body,
  #printMe {
    border: none !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  @page {
    margin: 1cm;
    size: A4 landscape;
  }

  #printMe .invoices-table thead tr,
  #printMe .invoices-table tbody tr {
    page-break-inside: avoid;
  }

  #printMe a {
    color: #33a0d9 !important;
    text-decoration: none !important;
  }

  body[dir="rtl"] #printMe .invoices-table tbody td,
  #printMe[dir="rtl"] .invoices-table tbody td {
    text-align: right;
  }

  body[dir="ltr"] #printMe .invoices-table tbody td,
  #printMe[dir="ltr"] .invoices-table tbody td {
    text-align: left;
  }
}
</style>

