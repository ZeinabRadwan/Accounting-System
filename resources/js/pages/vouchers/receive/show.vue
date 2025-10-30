<template>
  <div>
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />

    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between" v-if="voucher">
          <div class="btn-group">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#details" data-toggle="tab">
                  <i class="fa fa-info" /> {{ $t('Details') }}
                </a>
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a @click="generatePDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t('download') }}
            </a>
            <a @click="printWindow" href="#" class="btn btn-secondary">
              <i class="fas fa-print"></i> {{ $t('Print') }}
            </a>
            <router-link
              :to="{ name: 'receiveVouchers.edit', params: { slug: voucher.slug } }"
              class="btn btn-info"
              v-if="$can('payment-voucher-edit')"
            >
              <i class="fas fa-edit" /> {{ $t('Edit') }}
            </router-link>
            <router-link :to="{ name: 'receiveVouchers.index' }" class="btn btn-info">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
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
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import html2pdf from 'html2pdf.js'

export default {
  name: 'show-receive-voucher',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Receive Voucher Details') }
  },
  data() {
    return {
      breadcrumbsCurrent: this.$t('Details'),
      breadcrumbs: [
        { name: this.$t('Dashboard'), url: 'home' },
        { name: this.$t('Vouchers'), url: '' },
        { name: this.$t('Receive Vouchers'), url: 'receiveVouchers.index' },
        { name: this.$t('Details'), active: true },
      ],
      voucher: null,
    }
  },
  computed: {
    ...mapGetters('operations', ['appInfo']),
    readablePaymentMethod() {
      if (!this.voucher) return ''
      if (this.voucher.paymentMethod === 'direct') return this.$t('Direct Payment')
      if (this.voucher.paymentMethod === 'invoice') return this.$t('Invoice Payment')
      if (this.voucher.paymentMethod === 'purchase') return this.$t('Purchase Payment')
      return this.voucher.paymentMethod
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
    printWindow() {
      const printUrl = `/print/voucher/${this.$route.params.slug}`
      window.open(printUrl, '_blank')
    },
    generatePDF() {
      const printUrl = `/print/voucher/${this.$route.params.slug}`
      window.open(printUrl, '_blank')
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

