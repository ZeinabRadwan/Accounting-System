<template>
  <div>
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <div class="row no-print tabs-header-row">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between align-items-center" v-if="allData">
          <div class="btn-group"></div>
          <div class="btn-group">
            <router-link :to="{ name: 'creditNotes.index' }" class="btn btn-info float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="loading">
      <div class="col-12 text-center py-5">
        <i class="fas fa-spinner fa-spin fa-2x"></i>
      </div>
    </div>

    <div class="row" v-else-if="allData">
      <div class="col-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <h5 class="mb-0">{{ $t('Credit Note') }}: {{ allData.creditNoteNo }}</h5>
          </div>
          <div class="card-body">
            <div class="row invoice-info mb-3">
              <div class="col-sm-6">
                <strong>{{ $t('Reference Sales Invoice') }}:</strong>
                <router-link v-if="allData.invoice && allData.invoice.slug" :to="{ name: 'invoices.show', params: { slug: allData.invoice.slug } }">
                  {{ allData.invoiceNo || (allData.invoice && allData.invoice.invoiceNo) }}
                </router-link>
                <span v-else>{{ allData.invoiceNo || (allData.invoice && allData.invoice.invoiceNo) }}</span>
              </div>
              <div class="col-sm-6">
                <strong>{{ $t('Date') }}:</strong>
                {{ allData.date | moment("Do MMM, YYYY") }}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-12">
                <h6>{{ $t('Customer details') }}</h6>
                <p class="mb-0" v-if="allData.client">
                  <strong>{{ allData.clientName || allData.client.name }}</strong>
                  <span v-if="allData.client.email"><br />{{ $t('Email') }}: {{ allData.client.email }}</span>
                  <span v-if="allData.client.phone"><br />{{ $t('Phone') }}: {{ allData.client.phone }}</span>
                </p>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>{{ $t('Discount Amount') }}</th>
                    <th>{{ $t('Tax (15%)') }}</th>
                    <th>{{ $t('Total') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td v-html="formatCurrency(allData.discountAmount)"></td>
                    <td v-html="formatCurrency(allData.taxAmount)"></td>
                    <td v-html="formatCurrency(allData.totalAmount)"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row" v-if="allData.note">
              <div class="col-12">
                <strong>{{ $t('Notes') }}:</strong>
                <p class="mb-0">{{ allData.note }}</p>
              </div>
            </div>
            <div class="row mt-3" v-if="allData.journalEntry">
              <div class="col-12">
                <strong>{{ $t('Journal Entry') }}:</strong>
                <router-link :to="{ name: 'journal-entries.show', params: { id: allData.journalEntry.id } }" class="badge bg-info text-white ml-1">
                  {{ allData.journalEntry.entry_number || '#' + allData.journalEntry.id }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-else-if="!loading && !allData">
      <div class="col-12 text-center py-5">
        <p>{{ $t('Credit note not found.') }}</p>
        <router-link :to="{ name: 'creditNotes.index' }" class="btn btn-info">{{ $t('Back to list') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Credit Note') };
  },
  data: () => ({
    breadcrumbsCurrent: '',
    breadcrumbs: [
      { name: 'Dashboard', url: 'home' },
      { name: 'Sales', url: '' },
      { name: 'Credit Note', url: 'creditNotes.index' },
      { name: '', url: '' },
    ],
    allData: null,
    loading: true,
  }),
  computed: {
    ...mapGetters({ appInfo: 'operations/appInfo' }),
  },
  created() {
    this.breadcrumbsCurrent = this.$t('Credit Note Details');
    this.breadcrumbs[1].name = this.$t('Sales');
    this.breadcrumbs[2].name = this.$t('Credit Note');
    this.breadcrumbs[3].name = this.$t('Details');
    this.loadCreditNote();
  },
  methods: {
    async loadCreditNote() {
      this.loading = true;
      try {
        const slug = this.$route.params.slug;
        const { data } = await axios.get(window.location.origin + '/api/credit-notes/' + encodeURIComponent(slug));
        this.allData = data.data || data;
      } catch (e) {
        this.allData = null;
        this.$toast.error(this.$t('Error'), this.$t('Credit note not found.'));
      } finally {
        this.loading = false;
      }
    },
    formatCurrency(amount) {
      const n = Number(amount);
      if (isNaN(n)) return '0.00';
      const sym = this.appInfo && this.appInfo.currencySymbol ? this.appInfo.currencySymbol + ' ' : '';
      return sym + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
