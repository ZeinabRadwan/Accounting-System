<template>
  <div>
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />

    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between" v-if="voucher">
          <div class="btn-group">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#details" data-toggle="tab" @click="getVoucher">
                  <i class="fa fa-info" /> {{ $t('Details') }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  @click="getActivity"
                  class="nav-link"
                  href="#activity-log"
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a
                >
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a @click="generatePDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t('download') }}
            </a>
            <router-link
              :to="{ name: 'sendVouchers.edit', params: { slug: voucher.slug } }"
              class="btn btn-info"
              v-if="$can('payment-voucher-edit')"
            >
              <i class="fas fa-edit" /> {{ $t('Edit') }}
            </router-link>
            <router-link :to="{ name: 'sendVouchers.index' }" class="btn btn-info">
              <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

              </template>

              <template v-else>

                <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                  {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                </template>


                <template v-else>


                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                </template>

              </template>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane active" id="details">
        <div class="row">
          <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
            <div class="row invoice-info">
              <div class="col-sm-6 invoice-col">
                <h5 class="mb-3">{{ $t('Voucher Details') }}</h5>
                <p class="mb-1"><strong>{{ $t('Type') }}:</strong>
                  <span v-if="voucher.voucherType === 1">{{ $t('Receive Vouchers') }}</span>
                  <span v-else>{{ $t('Send Vouchers') }}</span>
                </p>
                <p class="mb-1"><strong>{{ $t('Payment Method') }}:</strong> {{ readablePaymentMethod }}</p>
                <p class="mb-1" v-if="voucher.account"><strong>{{ $t('Account') }}:</strong> {{ voucher.account.label }}</p>
                <p class="mb-1"><strong>{{ $t('Amount') }}:</strong> {{ voucher.amount }}</p>
                <p class="mb-1" v-if="voucher.date"><strong>{{ $t('Payment Date') }}:</strong> {{ voucher.date | moment('Do MMM, YYYY') }}</p>
                <p class="mb-1" v-if="voucher.chequeNo"><strong>{{ $t('Cheque No') }}:</strong> {{ voucher.chequeNo }}</p>
                <p class="mb-1" v-if="voucher.receiptNo"><strong>{{ $t('Receipt No') }}:</strong> {{ voucher.receiptNo }}</p>
                <p class="mb-1" v-if="voucher.note"><strong>{{ $t('Note') }}:</strong> {{ voucher.note }}</p>
                <p class="mb-1"><strong>{{ $t('Status') }}:</strong>
                  <span v-if="voucher.status === 1" class="badge bg-success">{{ $t('Active') }}</span>
                  <span v-else-if="voucher.status === 2" class="badge bg-secondary">{{ $t('Cancelled') }}</span>
                  <span v-else class="badge bg-danger">{{ $t('Inactive') }}</span>
                </p>
              </div>
              <div class="col-sm-6 invoice-col">
                <h5 class="mb-3">{{ $t('Entity Details') }}</h5>
                <template v-if="voucher.entityType === 'client' && voucher.client">
                  <p class="mb-1"><strong>{{ $t('Client') }}:</strong> {{ voucher.client.name }}</p>
                </template>
                <template v-else-if="voucher.entityType === 'supplier' && voucher.supplier">
                  <p class="mb-1"><strong>{{ $t('Supplier') }}:</strong> {{ voucher.supplier.name }}</p>
                </template>
                <template v-else-if="voucher.entityType === 'chart_of_account' && voucher.chartOfAccount">
                  <p class="mb-1"><strong>{{ $t('Chart of Account') }}:</strong> {{ voucher.chartOfAccount.name }}</p>
                </template>
                <template v-if="voucher.paymentMethod === 'invoice' && voucher.invoice">
                  <p class="mb-1"><strong>{{ $t('Invoice No') }}:</strong> {{ voucher.invoice.invoiceNo }}</p>
                </template>
                <template v-if="voucher.paymentMethod === 'purchase' && voucher.purchase">
                  <p class="mb-1"><strong>{{ $t('Purchase No') }}:</strong> {{ voucher.purchase.purchaseNo }}</p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  activity logs -->
      <div class="tab-pane" id="activity-log">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a
                  @click="refreshTable()"
                  href="#"
                  v-tooltip="$t('Refresh')"
                  class="btn btn-success"
                >
                  <i class="fas fa-sync"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="loading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search
                  v-model="query"
                  @reset-pagination="resetPagination()"
                  @reload="reload"
                />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div
                v-show="items.length > 0"
                v-for="(data, i) in items"
                :key="i"
              >
                <div class="card mb-0 border border-gray">
                  <div class="card-body py-1">
                    <div class="row">
                      <div
                        class="col-1 d-flex justify-content-center align-items-center"
                      >
                        <i
                          v-if="data.event == 'Update'"
                          class="fa fa-magic"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Create'"
                          class="fa fa-plus-circle"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Delete'"
                          class="fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div class="col-11">
                        <div class="row">
                          <div class="col-12">
                            <p class="text-bold mb-0">{{ data.causer_name }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ $t(data.description) }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ data.performedAt }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center" v-show="!loading && !items.length">
                <EmptyTable />
              </div>
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
              <!-- pagination-start -->
              <pagination
                v-if="pagination && pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                class="justify-flex-end"
                @paginate="paginate"
              />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import html2pdf from 'html2pdf.js'
import GeneralTable from "~/components/GeneralTable";

export default {
  name: 'show-send-voucher',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Send Voucher Details') }
  },
  components: {
    GeneralTable,
  },
  data() {
    return {
      breadcrumbsCurrent: this.$t('Details'),
      breadcrumbs: [
        { name: this.$t('Dashboard'), url: 'home' },
        { name: this.$t('Vouchers'), url: '' },
        { name: this.$t('Send Vouchers'), url: 'sendVouchers.index' },
        { name: this.$t('Details'), active: true },
      ],
      voucher: null,
      loading: false,
      query: "",
      perPage: 10,
    }
  },
  computed: {
    ...mapGetters('operations', ['appInfo', 'items', 'pagination']),
    readablePaymentMethod() {
      if (!this.voucher) return ''
      if (this.voucher.paymentMethod === 'direct') return this.$t('Direct Payment')
      if (this.voucher.paymentMethod === 'invoice') return this.$t('Invoice Payment')
      if (this.voucher.paymentMethod === 'purchase') return this.$t('Purchase Payment')
      return this.voucher.paymentMethod
    },
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchData();
      }
    },
  },
  created() {
    this.fetchVoucher()
  },
  methods: {
    async fetchVoucher() {
      const { data } = await axios.get(
        window.location.origin + '/api/vouchers/' + this.$route.params.slug
      )
      this.voucher = data.data
    },
    getVoucher() {
      this.fetchVoucher()
    },
    printWindow() {
      const printUrl = `/print/voucher/${this.$route.params.slug}`
      window.open(printUrl, '_blank')
    },
    generatePDF() {
      const printUrl = `/print/voucher/${this.$route.params.slug}`
      window.open(printUrl, '_blank')
    },
    // get activity logs
    async getActivity() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "PaymentVoucher";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
        slug: slug,
        modelName: modelName,
      });
    },
    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "PaymentVoucher";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: this.pagination.current_page + "&perPage=" + this.perPage,
        term: this.query,
        slug: slug,
        modelName: modelName,
      });
    },
    // pagination
    async paginate() {
      this.getActivity();
    },
    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getActivity() : this.searchData();
    },
    // reload after search
    async reload() {
      this.query = "";
    },
    // refresh table
    async refreshTable() {
      this.query = "";
      if (this.pagination) {
        this.pagination.current_page = 1;
      }
      this.query === "" ? await this.getActivity() : await this.searchData();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },
    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },
    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },
  },
}
</script>

<style scoped>
.nav-pills .nav-item {
  background: #ddd;
  margin: 2px;
  border-radius: 0.25rem;
}
</style>

