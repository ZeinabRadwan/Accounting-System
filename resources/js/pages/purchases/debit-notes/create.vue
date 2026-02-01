<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'debitNotes.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'debitNoteForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <form id="debitNoteForm" role="form" @submit.prevent="saveDebitNote" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="purchase">{{ $t('Reference Purchase Invoice') }} <span class="required">*</span></label>
                  <v-select
                    v-model="form.purchase"
                    :options="purchaseOptions"
                    label="label"
                    :class="{ 'is-invalid': form.errors.has('purchase_id') }"
                    :placeholder="$t('Select a purchase')"
                    @input="onPurchaseSelect"
                  />
                  <has-error :form="form" field="purchase_id" />
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
              <div class="row" v-if="selectedPurchase || fullPurchase">
                <div class="form-group col-md-12">
                  <label>{{ $t('Supplier details') }}</label>
                  <div v-if="loadingPurchase" class="form-control-plaintext border rounded p-2 bg-light">
                    <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading...') }}
                  </div>
                  <div v-else class="form-control-plaintext border rounded p-2 bg-light">
                    <template v-if="fullPurchase && fullPurchase.supplier">
                      <strong>{{ fullPurchase.supplier.name }}</strong>
                      <span v-if="fullPurchase.supplier.companyName"> ({{ fullPurchase.supplier.companyName }})</span>
                      <br v-if="fullPurchase.supplier.email || fullPurchase.supplier.phoneNumber || fullPurchase.supplier.address" />
                      <span v-if="fullPurchase.supplier.email">{{ $t('Email') }}: {{ fullPurchase.supplier.email }}</span>
                      <template v-if="fullPurchase.supplier.email && fullPurchase.supplier.phoneNumber"> &ndash; </template>
                      <span v-if="fullPurchase.supplier.phoneNumber">{{ $t('Phone') }}: {{ fullPurchase.supplier.phoneNumber || fullPurchase.supplier.phone }}</span>
                      <br v-if="fullPurchase.supplier.address" />
                      <span v-if="fullPurchase.supplier.address">{{ $t('Address') }}: {{ fullPurchase.supplier.address }}</span>
                    </template>
                    <template v-else-if="selectedPurchase">
                      <strong>{{ selectedPurchase.supplierName || (typeof selectedPurchase.supplier === 'string' ? selectedPurchase.supplier : selectedPurchase.supplier?.name) }}</strong>
                      <span v-if="selectedPurchase.supplier && typeof selectedPurchase.supplier === 'object' && selectedPurchase.supplier.email"> &ndash; {{ selectedPurchase.supplier.email }}</span>
                    </template>
                  </div>
                </div>
              </div>
              <div class="row" v-if="fullPurchase && !loadingPurchase">
                <div class="form-group col-md-12">
                  <label>{{ $t('Purchase totals') }}</label>
                  <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                      <tbody>
                        <tr>
                          <td><strong>{{ $t('Subtotal') }}</strong></td>
                          <td class="text-right" v-html="formatCurrency(fullPurchase.subTotal ?? fullPurchase.sub_total)"></td>
                        </tr>
                        <tr v-if="(fullPurchase.totalDiscount ?? fullPurchase.discount ?? 0) > 0">
                          <td><strong>{{ $t('Discount') }}</strong></td>
                          <td class="text-right" v-html="formatCurrency(fullPurchase.totalDiscount ?? fullPurchase.discount)"></td>
                        </tr>
                        <tr v-if="(fullPurchase.tax ?? 0) > 0">
                          <td><strong>{{ $t('Tax') }}</strong></td>
                          <td class="text-right" v-html="formatCurrency(fullPurchase.tax)"></td>
                        </tr>
                        <tr v-if="(fullPurchase.transport ?? 0) > 0">
                          <td><strong>{{ $t('Transport') }}</strong></td>
                          <td class="text-right" v-html="formatCurrency(fullPurchase.transport)"></td>
                        </tr>
                        <tr class="table-active">
                          <td><strong>{{ $t('Purchase Total') }}</strong></td>
                          <td class="text-right" v-html="formatCurrency(fullPurchase.purchaseTotal ?? fullPurchase.purchase_total)"></td>
                        </tr>
                        <tr v-if="(fullPurchase.totalPaid ?? 0) > 0">
                          <td><strong>{{ $t('Total Paid') }}</strong></td>
                          <td class="text-right" v-html="formatCurrency(fullPurchase.totalPaid)"></td>
                        </tr>
                        <tr v-if="(fullPurchase.due ?? 0) !== undefined && (fullPurchase.due ?? 0) >= 0">
                          <td><strong>{{ $t('Due') }}</strong></td>
                          <td class="text-right" v-html="formatCurrency(fullPurchase.due)"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="row" v-if="fullPurchase && fullPurchase.products && fullPurchase.products.length && !loadingPurchase">
                <div class="form-group col-md-12">
                  <label>{{ $t('Purchase items') }}</label>
                  <div class="table-responsive">
                    <table class="table table-sm table-bordered mb-0">
                      <thead>
                        <tr>
                          <th>{{ $t('Product') }}</th>
                          <th class="text-center">{{ $t('Qty') }}</th>
                          <th class="text-right">{{ $t('Unit Price') }}</th>
                          <th class="text-right">{{ $t('Discount') }}</th>
                          <th class="text-right">{{ $t('Tax') }}</th>
                          <th class="text-right">{{ $t('Total') }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, idx) in fullPurchase.products" :key="idx">
                          <td>{{ item.productName || item.product?.name }}</td>
                          <td class="text-center">{{ item.quantity }}</td>
                          <td class="text-right" v-html="formatCurrency(item.purchasePrice ?? item.purchase_price)"></td>
                          <td class="text-right" v-html="formatCurrency(item.productDiscount ?? item.product_discount ?? 0)"></td>
                          <td class="text-right" v-html="formatCurrency(lineTax(item))"></td>
                          <td class="text-right" v-html="formatCurrency(lineTotal(item))"></td>
                        </tr>
                      </tbody>
                    </table>
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
    return { title: this.$t('Create Debit Note') };
  },
  data: () => ({
    breadcrumbsCurrent: '',
    breadcrumbs: [
      { name: 'Dashboard', url: 'home' },
      { name: 'Purchases', url: '' },
      { name: 'Debit Note', url: 'debitNotes.index' },
      { name: '', url: '' },
    ],
    form: new Form({
      purchase_id: null,
      discount_amount: '',
      note: '',
      date: new Date().toISOString().slice(0, 10),
    }),
    purchaseOptions: [],
    selectedPurchase: null,
    fullPurchase: null,
    loadingPurchase: false,
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
    this.breadcrumbsCurrent = this.$t('Create Debit Note');
    this.breadcrumbs[1].name = this.$t('Purchases');
    this.breadcrumbs[2].name = this.$t('Debit Note');
    this.breadcrumbs[3].name = this.$t('Create');
    this.loadPurchases();
  },
  methods: {
    async loadPurchases() {
      try {
        const { data } = await axios.get(window.location.origin + '/api/purchases?perPage=9999');
        const list = (data.data || data) || [];
        this.purchaseOptions = list.map((p) => {
          const supplierName = p.supplierName || (p.supplier && (typeof p.supplier === 'string' ? p.supplier : p.supplier.name)) || null;
          const purchaseNo = p.purchaseNo || p.code || p.purchase_no || '';
          return {
            id: p.id,
            slug: p.slug,
            purchase_no: p.purchase_no || p.code,
            label: purchaseNo + (supplierName ? ' - ' + supplierName : ''),
            supplier: p.supplier,
            supplierName: supplierName,
          };
        });
      } catch (e) {
        this.$toast.error(this.$t('Error'), this.$t('Failed to load purchases'));
      }
    },
    async onPurchaseSelect(p) {
      this.selectedPurchase = p || null;
      this.form.purchase_id = p ? p.id : null;
      this.fullPurchase = null;
      if (!p || !p.slug) return;
      this.loadingPurchase = true;
      try {
        const { data } = await axios.get(window.location.origin + '/api/purchases/' + encodeURIComponent(p.slug));
        this.fullPurchase = data.data || data;
      } catch (e) {
        this.$toast.error(this.$t('Error'), this.$t('Failed to load purchase details'));
        this.fullPurchase = null;
      } finally {
        this.loadingPurchase = false;
      }
    },
    formatCurrency(amount) {
      const n = Number(amount);
      if (isNaN(n)) return '0.00';
      const sym = this.appInfo && this.appInfo.currencySymbol ? this.appInfo.currencySymbol + ' ' : '';
      return sym + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    lineTax(item) {
      const taxTotal = item.taxTotal;
      if (taxTotal != null && !isNaN(Number(taxTotal))) return Number(taxTotal);
      const qty = Number(item.quantity) || 0;
      const unitTax = Number(item.unitTax ?? item.tax_amount ?? item.productTax) || 0;
      return qty * unitTax;
    },
    lineTotal(item) {
      const qty = Number(item.quantity) || 0;
      const unitPrice = Number(item.purchasePrice ?? item.purchase_price ?? item.salePrice ?? item.sale_price) || 0;
      const discount = Number(item.productDiscount ?? item.product_discount) || 0;
      const tax = this.lineTax(item);
      return qty * unitPrice - discount + tax;
    },
    async saveDebitNote() {
      if (this.form.purchase && this.form.purchase.id) {
        this.form.purchase_id = this.form.purchase.id;
      }
      if (!this.form.purchase_id) {
        this.form.errors.set('purchase_id', [this.$t('Please select a purchase invoice.')]);
        return;
      }
      const discount = parseFloat(this.form.discount_amount);
      if (isNaN(discount) || discount < 0.01) {
        this.form.errors.set('discount_amount', [this.$t('Discount amount must be greater than 0.')]);
        return;
      }
      await this.form
        .post(window.location.origin + '/api/debit-notes')
        .then(({ data }) => {
          this.$toast.success(this.$t('Success'), this.$t('Debit note saved successfully.'));
          const slug = (data.data && data.data.slug) || data.slug;
          if (slug) this.$router.push({ name: 'debitNotes.show', params: { slug } });
          else this.$router.push({ name: 'debitNotes.index' });
        })
        .catch((err) => {
          const msg = err.response && err.response.data && (err.response.data.message || (err.response.data.errors && Object.values(err.response.data.errors).flat().join(' ')));
          this.$toast.error(this.$t('Error'), msg || this.$t('Failed to save debit note.'));
        });
    },
  },
};
</script>
