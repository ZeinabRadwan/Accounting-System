<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <router-link :to="{ name: 'nonInvoicePayments.index' }" class="btn btn-info">
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
                <router-link v-if="$can('non-invoice-payment-edit') && payment && payment.status !== 2"
                  :to="{ name: 'nonInvoicePayments.edit', params: { slug: $route.params.slug } }" class="btn btn-success">
                  <i class="fas fa-edit" /> {{ $t('Edit') }}
                </router-link>
              </div>
            </div>
          </div>

          <div class="card-body">
            <table-loading v-show="loading" />

            <div v-if="payment" class="row">
              <div class="col-md-6">
                <div class="table-responsive table-custom">
                  <table class="table table-bordered mb-0">
                    <tbody>
                      <tr>
                        <th>{{ $t('Client') }}</th>
                        <td>{{ payment.client ? payment.client.name : '-' }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('Type') }}</th>
                        <td>
                          <span v-if="parseInt(payment.type) === 1" class="badge bg-primary">{{ $t('Payment Received') }}</span>
                          <span v-else class="badge bg-primary">{{ $t('Payment Sent') }}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t('Amount') }}</th>
                        <td>{{ payment.amount }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr>
                        <th>{{ $t('Account') }}</th>
                        <td>{{ payment.account ? payment.account.label : '-' }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('Payment Date') }}</th>
                        <td>{{ payment.date | moment('Do MMM, YYYY') }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('Status') }}</th>
                        <td>
                          <span v-if="payment.status === 1" class="badge bg-success">{{ $t('Active') }}</span>
                          <span v-else-if="payment.status === 2" class="badge bg-danger">{{ $t('Cancelled') }}</span>
                          <span v-else class="badge bg-danger">{{ $t('Inactive') }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="col-md-6">
                <div class="table-responsive table-custom">
                  <table class="table table-bordered mb-0">
                    <tbody>
                      <tr>
                        <th>{{ $t('Receipt No') }}</th>
                        <td>{{ payment.transaction ? payment.transaction.receipt_no : '-' }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('Cheque No') }}</th>
                        <td>{{ payment.transaction ? payment.transaction.cheque_no : '-' }}</td>
                      </tr>
                      <tr>
                        <th>{{ $t('Note') }}</th>
                        <td>{{ payment.note || '-' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div v-else-if="!loading" class="text-center text-muted">
              {{ $t('No data found') }}
            </div>
          </div>

          <div class="card-footer">
            <div class="dtable-footer">
              <router-link :to="{ name: 'nonInvoicePayments.index' }" class="btn btn-info">
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Non Invoice Payment Details') }
  },
  components: {
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: 'Details',
    breadcrumbs: [
      { name: 'Dashboard', url: 'home' },
      { name: 'Payments', url: '' },
      { name: 'Non Invoice Payments', url: 'nonInvoicePayments.index' },
      { name: 'Details', url: '' },
    ],
    loading: false,
    payment: null,
  }),
  created() {
    this.fetchPayment()
  },
  methods: {
    async fetchPayment() {
      this.loading = true
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/payments/non-invoice/' + this.$route.params.slug
        )
        this.payment = data.data
      } catch (e) {
        this.payment = null
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

.table th {
  width: 35%;
}

.badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
}

.badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
}

.badge.bg-primary {
  background: #E3F2FD !important;
  color: #1976D2 !important;
}
</style>

