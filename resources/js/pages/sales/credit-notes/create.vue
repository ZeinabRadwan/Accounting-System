<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'creditNotes.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'creditNoteForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <form id="creditNoteForm" role="form" @submit.prevent="saveCreditNote" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="invoice">{{ $t('Reference Sales Invoice') }} <span class="required">*</span></label>
                  <v-select
                    v-model="form.invoice"
                    :options="invoiceOptions"
                    label="label"
                    :class="{ 'is-invalid': form.errors.has('invoice_id') }"
                    :placeholder="$t('Select an invoice')"
                    @input="onInvoiceSelect"
                  />
                  <has-error :form="form" field="invoice_id" />
                </div>
                <div class="form-group col-md-6">
                  <label for="discount_amount">{{ $t('Discount Amount') }} <span class="required">*</span></label>
                  <input
                    id="discount_amount"
                    v-model.number="form.discount_amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discount_amount') }"
                    :placeholder="$t('Enter discount amount')"
                  />
                  <has-error :form="form" field="discount_amount" />
                </div>
              </div>
              <div class="row" v-if="selectedInvoice">
                <div class="form-group col-md-12">
                  <label>{{ $t('Customer details') }}</label>
                  <div class="form-control-plaintext border rounded p-2 bg-light">
                    <strong>{{ selectedInvoice.clientName || selectedInvoice.client?.name }}</strong>
                    <span v-if="selectedInvoice.client?.email"> &ndash; {{ selectedInvoice.client.email }}</span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label>{{ $t('Tax (15%)') }}</label>
                  <input :value="formattedTax" type="text" class="form-control" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label>{{ $t('Total (Discount + Tax)') }}</label>
                  <input :value="formattedTotal" type="text" class="form-control" readonly />
                </div>
                <div class="form-group col-md-4">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control" :class="{ 'is-invalid': form.errors.has('date') }" />
                  <has-error :form="form" field="date" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Notes') }} ({{ $t('optional') }})</label>
                <textarea id="note" v-model="form.note" class="form-control" rows="2" :placeholder="$t('Notes')"></textarea>
                <has-error :form="form" field="note" />
              </div>
            </div>
            <div class="card-footer">
              <v-button :loading="form.busy" type="success">
                <i class="fas fa-save" /> {{ $t('Save') }}
              </v-button>
              <button type="button" class="btn btn-info ml-2" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t('Reset') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Credit Note') };
  },
  data: () => ({
    breadcrumbsCurrent: '',
    breadcrumbs: [
      { name: 'Dashboard', url: 'home' },
      { name: 'Sales', url: '' },
      { name: 'Credit Note', url: 'creditNotes.index' },
      { name: '', url: '' },
    ],
    form: new Form({
      invoice_id: null,
      discount_amount: '',
      note: '',
      date: new Date().toISOString().slice(0, 10),
    }),
    invoiceOptions: [],
    selectedInvoice: null,
  }),
  computed: {
    ...mapGetters({ appInfo: 'operations/appInfo' }),
    taxAmount() {
      const n = parseFloat(this.form.discount_amount);
      if (isNaN(n) || n <= 0) return 0;
      return Math.round(n * 0.15 * 100) / 100;
    },
    totalAmount() {
      const n = parseFloat(this.form.discount_amount);
      if (isNaN(n) || n <= 0) return 0;
      return this.taxAmount + n;
    },
    formattedTax() {
      return this.formatCurrency(this.taxAmount);
    },
    formattedTotal() {
      return this.formatCurrency(this.totalAmount);
    },
  },
  created() {
    this.breadcrumbsCurrent = this.$t('Create Credit Note');
    this.breadcrumbs[1].name = this.$t('Sales');
    this.breadcrumbs[2].name = this.$t('Credit Note');
    this.breadcrumbs[3].name = this.$t('Create');
    this.loadInvoices();
  },
  methods: {
    async loadInvoices() {
      try {
        const { data } = await axios.get(window.location.origin + '/api/invoices?perPage=9999');
        const list = (data.data || data) || [];
        this.invoiceOptions = list.map((inv) => ({
          id: inv.id,
          invoice_no: inv.invoiceNo || inv.invoice_no,
          label: (inv.invoice_no || inv.invoiceNo || '') + (inv.client && inv.client.name ? ' - ' + inv.client.name : ''),
          client: inv.client,
          clientName: inv.client && inv.client.name ? inv.client.name : null,
        }));
      } catch (e) {
        this.$toast.error(this.$t('Error'), this.$t('Failed to load invoices'));
      }
    },
    onInvoiceSelect(inv) {
      this.selectedInvoice = inv || null;
      this.form.invoice_id = inv ? inv.id : null;
    },
    formatCurrency(amount) {
      const n = Number(amount);
      if (isNaN(n)) return '0.00';
      const sym = this.appInfo && this.appInfo.currencySymbol ? this.appInfo.currencySymbol + ' ' : '';
      return sym + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    async saveCreditNote() {
      if (this.form.invoice && this.form.invoice.id) {
        this.form.invoice_id = this.form.invoice.id;
      }
      if (!this.form.invoice_id) {
        this.form.errors.set('invoice_id', [this.$t('Please select a sales invoice.')]);
        return;
      }
      const discount = parseFloat(this.form.discount_amount);
      if (isNaN(discount) || discount < 0.01) {
        this.form.errors.set('discount_amount', [this.$t('Discount amount must be greater than 0.')]);
        return;
      }
      await this.form
        .post(window.location.origin + '/api/credit-notes')
        .then(({ data }) => {
          this.$toast.success(this.$t('Success'), this.$t('Credit note saved successfully.'));
          const slug = (data.data && data.data.slug) || data.slug;
          if (slug) this.$router.push({ name: 'creditNotes.show', params: { slug } });
          else this.$router.push({ name: 'creditNotes.index' });
        })
        .catch((err) => {
          const msg = err.response && err.response.data && (err.response.data.message || (err.response.data.errors && Object.values(err.response.data.errors).flat().join(' ')));
          this.$toast.error(this.$t('Error'), msg || this.$t('Failed to save credit note.'));
        });
    },
  },
};
</script>
