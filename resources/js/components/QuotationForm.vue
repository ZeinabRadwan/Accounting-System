<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'quotations.index' }" class="btn btn-info">
                  <template v-if="isRTL">
                    {{ $t("Back") }} <i class="fas fa-long-arrow-alt-left" />
                  </template>
                  <template v-else>
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
                  </template>
                </router-link>
                <button type="submit" class="btn btn-success" :form="formId" :title="$t('Save')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <form :id="formId" role="form" @submit.prevent="handleSubmit" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="date">{{ $t("Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
              </div>

              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t("Client") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.client" :options="items" label="name"
                          :class="{ 'is-invalid': form.errors.has('client'), 'rtl-select': isRTL }"
                          name="client" :placeholder="$t('Select a client')" />
                        <ClientCreateModal v-if="mode === 'create' && !form.client" @reloadClients="getClients('latest')">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ClientCreateModal>
                        <div v-if="mode === 'create' && form.client" class="input-group-text create-btn edit-btn" @click="editSelectedClient">
                          <i class="fas fa-edit"></i>
                        </div>
                      </div>
                      <has-error :form="form" field="client" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="reference">{{ $t("Reference") }}</label>
                  <input id="reference" v-model="form.reference" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reference') }" name="reference"
                    :placeholder="$t('Enter reference')" />
                  <has-error :form="form" field="reference" />
                </div>
              </div>

              <div class="row" v-if="products">
                <div class="form-group col-md-12">
                  <label for="product">{{ $t("Select Items") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select v-model="form.product" :options="products" label="label" class="flex-grow-1" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                          'rtl-select': isRTL
                        }" name="product" :placeholder="$t('Search Items')" @input="storeProduct(form.product)" />
                        <ProductCreateModal v-if="mode === 'create'" @reloadProducts="getProducts" @productCreated="handleProductCreated">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </div>
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                  <has-error :form="form" field="selectedProducts" />
                </div>
              </div>

              <ItemsTable
                :items="form.selectedProducts"
                :prefix="prefix"
                :taxes="taxes"
                :form-errors="form.errors"
                :total-unit-price="totalUnitPrice"
                :total-product-discount="totalProductDiscount"
                :total-after-discount="totalAfterDiscount"
                :total-product-tax="totalProductTax"
                :subtotal="totalAfterTax"
                :amount-in-words="toWord()"
                :show-edit-button="mode === 'create'"
                @item-change="handleItemChange"
                @discount-change="calculateProductDiscount"
                @vat-change="calculateProductVat"
                @remove-item="removeItem"
                @open-stock-modal="openStockAdjustmentModal"
                @edit-product="editProductFromTable"
              />

              <div class="row" v-if="!isSaudiArabia">
                <div class="form-group col-md-4">
                  <label for="discountType">{{ $t("Discount Type") }}</label>
                  <select id="discountType" v-model="form.discountType" step="any" class="form-control" :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType" @change="calculateSum">
                    <option value="0">{{ $t("Fixed") }}</option>
                    <option value="1">{{ $t("Percentage") }}(%)</option>
                  </select>
                  <has-error :form="form" field="discountType" />
                </div>
                <div class="form-group" :class="form.discountType == 1 ? 'col-md-2' : 'col-md-4'">
                  <label for="discount">{{ $t("Discount") }}
                    <span v-if="form.discountType == 1">(%)</span></label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1" :max="form.discountType == 1 ? 100 : form.netTotal" class="form-control" :class="{ 'is-invalid': form.errors.has('discount') }" name="discount" :placeholder="$t('Enter discount')" @change="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div v-if="form.discountType == 1" class="form-group col-md-2">
                  <label for="totalDiscount">{{ $t("Total discount") }}</label>
                  <input id="totalDiscount" v-model="form.totalDiscount" type="number" step="any" class="form-control" :class="{ 'is-invalid': form.errors.has('totalDiscount') }" name="totalDiscount" readonly />
                  <has-error :form="form" field="totalDiscount" />
                </div>
                <div class="form-group col-md-4">
                  <label for="transportCost">{{ $t("Transport Cost") }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="1" class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost" :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <span class="saudi-riyal">ê</span>
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>

              <div class="row">
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="orderTax">{{ $t("Quotation Tax") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code" :class="{ 'is-invalid': form.errors.has('orderTax'), 'rtl-select': isRTL }" name="orderTax" :placeholder="$t('Select a tax type')" @input="calculateSum" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="totalTax">{{ $t("Total Tax") }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <span class="saudi-riyal">ê</span>
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group" :class="'col-md-4'">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control" :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <span class="saudi-riyal">ê</span>
                  <has-error :form="form" field="netTotal" />
                </div>
                <div class="form-group col-md-4" style="display: none;">
                  <label for="deliveryPlace">{{ $t("Delivery Place") }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace" :placeholder="$t('Enter a delivery place')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control" :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>

              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control" :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>

              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
                  <span class="ml-3">{{ $t("Send To Email") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.email_configured" class="ml-2 text-muted small">({{ $t("Email not configured") }})</span>
                </div>
              </div>

              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
                  <span class="ml-3">{{ $t("Send To SMS") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured" class="ml-2 text-muted small">({{ $t("SMS not configured") }})</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t("Save") }}
                  </v-button>
                  <button type="reset" class="btn btn-info ml-2" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("Reset") }}
                  </button>
                </div>
              </div>
            </div>
          </form>

          <ClientEditModal ref="clientEditModal" @reloadClients="getClients" />
          <ProductEditModal ref="productEditModal" @reloadProducts="getProducts" @productUpdated="handleProductUpdated" />
          <StockAdjustmentModal :is-open="showStockAdjustmentModal" :product="selectedProductForStockAdjustment" @close="closeStockAdjustmentModal" @adjust-quantity="adjustProductQuantity" @stock-updated="handleStockUpdated" />
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import { ToggleButton } from "vue-js-toggle-button";
import ClientCreateModal from '~/components/ClientCreateModal'
import ClientEditModal from '~/components/ClientEditModal'
import ProductCreateModal from '~/components/ProductCreateModal'
import ProductEditModal from '~/components/ProductEditModal'
import StockAdjustmentModal from '~/components/StockAdjustmentModal'
import ItemsTable from '~/components/ItemsTable'
import RTLMixin from '~/mixins/RTLMixin'
import { ToWords } from 'to-words';

export default {
  name: 'QuotationForm',
  mixins: [RTLMixin],
  components: { ToggleButton, ClientCreateModal, ClientEditModal, ProductCreateModal, ProductEditModal, StockAdjustmentModal, ItemsTable },
  props: {
    mode: { type: String, default: 'create' }, // 'create' | 'edit'
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Quotation",
    breadcrumbs: [
      { name: "Dashboard", url: "home" },
      { name: "Quotations", url: "quotations.index" },
      { name: "Create", url: "" },
    ],
    form: new Form({
      client: "",
      reference: "",
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discountType: 0,
      discount: "",
      totalDiscount: 0,
      orderTax: "",
      totalTax: 0,
      invoiceTax: 0,
      productTotalTax: 0,
      transportCost: "",
      date: new Date().toISOString().slice(0, 10),
      deliveryPlace: "",
      note: "",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
    }),
    products: "",
    taxes: "",
    prefix: "",
    communicationConfig: { email_configured: false, sms_configured: false, loading: true },
    showStockAdjustmentModal: false,
    selectedProductForStockAdjustment: null,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    formId() { return this.mode === 'edit' ? 'quotationEditForm' : 'quotationCreateForm'; },
    isSaudiArabia() { return !this.appInfo?.country || this.appInfo.country === 'SA'; },
    totalUnitPrice() { return this.roundToTwoDecimals(this.form.selectedProducts.reduce((t, i) => t + (i.unitPrice * i.qty), 0)); },
    totalProductDiscount() { return this.roundToTwoDecimals(this.form.selectedProducts.reduce((t, i) => t + (i.discountAmount || 0), 0)); },
    totalAfterDiscount() { return this.roundToTwoDecimals(this.totalUnitPrice - this.totalProductDiscount); },
    totalProductTax() { return this.roundToTwoDecimals(this.form.selectedProducts.reduce((t, i) => t + (i.taxType === 'Inclusive' ? (i.totalTax || 0) : (i.productTax || 0)), 0)); },
    totalAfterTax() { return this.roundToTwoDecimals(this.totalAfterDiscount + this.totalProductTax); },
    subtotal() { return this.roundToTwoDecimals(this.form.selectedProducts.reduce((t, i) => t + (i.totalPrice || 0), 0)); },
    hasInsufficientStock() { return this.form.selectedProducts.some(i => i.itemType === 'product' && Number(i.inventoryCount) < Number(i.qty)); },
    insufficientStockProducts() { return this.form.selectedProducts.filter(i => i.itemType === 'product' && Number(i.inventoryCount) < Number(i.qty)); },
  },
  created() {
    if (this.mode === 'edit') {
      this.breadcrumbsCurrent = "Edit Quotation";
      this.breadcrumbs = [ { name: "Dashboard", url: "home" }, { name: "Quotations", url: "quotations.index" }, { name: "Edit", url: "" } ];
      this.loadQuotation();
    }
    this.getClients();
    this.getProducts();
    this.getTaxes();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  methods: {
    async loadQuotation() {
      try {
        const { data } = await axios.get(window.location.origin + "/api/quotations/" + this.$route.params.slug);
        this.form.client = data.data.client;
        this.form.reference = data.data.reference;
        this.form.totalTax = data.data.totalTax;
        this.form.orderTax = data.data.quotationTax;
        this.form.discount = data.data.discountType == 0 ? data.data.discount : data.data.discountPercentage;
        this.form.discountType = data.data.discountType;
        this.form.discountPercentage = data.data.discountPercentage;
        this.form.totalDiscount = data.data.discount;
        this.form.transportCost = data.data.transport;
        this.form.subTotal = data.data.subTotal;
        this.form.deliveryPlace = data.data.deliveryPlace;
        this.form.date = data.data.date;
        this.form.note = data.data.note;
        this.form.status = data.data.status;
        this.form.selectedProducts = this.assignProducts(data.data.products);
        this.calculateSum();
      } catch (e) {
        console.error('Failed to load quotation', e);
      }
    },

    async getClients(selectedClient = 'default') {
      await this.$store.dispatch("operations/allData", { path: "/api/all-clients" });
      if (selectedClient === 'latest' && this.items && this.items.length > 0) {
        this.form.client = this.items[0];
      }
    },
    async getProducts() {
      const { data } = await axios.get(window.location.origin + "/api/all-products");
      this.products = data.data;
      if (Array.isArray(this.products)) this.products.sort(this.sortProducts);
    },
    async getTaxes() {
      const { data } = await axios.get(window.location.origin + "/api/all-vat-rates");
      this.taxes = data.data;
      if (this.taxes && this.taxes.length > 0 && !this.form.orderTax) {
        let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
        this.form.orderTax = this.taxes.find(t => t.slug === defaultVatRateSlug) || this.taxes[0];
      }
      // Update vat_rate_code for all products after taxes are loaded
      if (this.taxes && this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.form.selectedProducts.forEach((item, index) => {
          if (item.vat_rate_id) {
            const vatRate = this.findVatRateById(item.vat_rate_id);
            if (vatRate) {
              this.$set(item, 'vat_rate_code', vatRate.code);
              // Also update selectedVatRate if it's not set or doesn't match
              if (!item.selectedVatRate || item.selectedVatRate.id !== vatRate.id) {
                this.$set(item, 'selectedVatRate', vatRate);
              }
            }
          } else if (item.selectedVatRate && item.selectedVatRate.code) {
            // Update vat_rate_code from selectedVatRate if vat_rate_id is not set
            this.$set(item, 'vat_rate_code', item.selectedVatRate.code);
            this.$set(item, 'vat_rate_id', item.selectedVatRate.id);
          } else if (!item.selectedVatRate && item.taxRate) {
            // If no selectedVatRate but taxRate exists, try to find matching VAT rate
            const matchingVatRate = this.findMatchingVatRate(item.taxRate) || this.form.orderTax || (this.taxes && this.taxes[0]);
            if (matchingVatRate) {
              this.$set(item, 'selectedVatRate', matchingVatRate);
              this.$set(item, 'vat_rate_code', matchingVatRate.code);
              this.$set(item, 'vat_rate_id', matchingVatRate.id);
            }
          }
          // Recalculate VAT for this item after updating VAT rate
          this.generateItemTotalPrice(index);
        });
      }
      this.calculateSum();
    },
    async loadCommunicationConfigStatus() {
      try {
        this.communicationConfig.loading = true;
        const response = await axios.get('/api/communication-config-status');
        this.communicationConfig.email_configured = response.data.email_configured;
        this.communicationConfig.sms_configured = response.data.sms_configured;
      } catch (error) {
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
      } finally {
        this.communicationConfig.loading = false;
      }
    },

    sortProducts(a, b) { if (Number(a.code) < Number(b.code)) return -1; if (Number(a.code) > Number(b.code)) return 1; return 0; },
    storeProduct(product) {
      if (!product) return;
      const index = this.form.selectedProducts.findIndex(x => x.id == product.id);
      let qunatity = 1;
      if (index === -1) {
        let productTax = product.taxType == "Exclusive" ? product.regularPrice * (product.taxRate / 100) : product.regularPrice - product.regularPrice / (1 + product.taxRate / 100);
        let totalTax = productTax * qunatity;
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.regularPrice,
          unitCost: product.taxType == "Exclusive" ? product.regularPrice + productTax : product.regularPrice,
          totalPrice: product.taxType == "Exclusive" ? 1 * (product.regularPrice + totalTax) : 1 * product.regularPrice,
          productTax: productTax,
          totalTax: totalTax,
          itemType: product.itemType,
          inventoryCount: product.inventoryCount,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          vat_rate_id: null,
          vat_rate_code: null,
          selectedVatRate: this.findMatchingVatRate(product.taxRate) || this.form.orderTax || this.taxes?.[0],
        });
        // Set vat_rate_code if selectedVatRate is set
        if (this.form.selectedProducts[0] && this.form.selectedProducts[0].selectedVatRate) {
          this.$set(this.form.selectedProducts[0], 'vat_rate_code', this.form.selectedProducts[0].selectedVatRate.code || null);
          this.$set(this.form.selectedProducts[0], 'vat_rate_id', this.form.selectedProducts[0].selectedVatRate.id || null);
        }
      }
      this.generateItemTotal(qunatity, "qty", index === -1 ? 0 : index, "");
    },
    findMatchingVatRate(productTax) { if (!this.taxes || !productTax) return null; return this.taxes.find(tax => Math.abs(tax.rate - productTax) < 0.01); },
    findVatRateById(vatRateId) { if (!this.taxes || !vatRateId) return null; return this.taxes.find(tax => tax.id === vatRateId); },
    ensureDiscountProperties() {
      this.form.selectedProducts.forEach(item => {
        if (typeof item.discount === 'undefined') item.discount = 0;
        if (typeof item.discountType === 'undefined') item.discountType = 'fixed';
        if (typeof item.discountAmount === 'undefined') item.discountAmount = 0;
        if (typeof item.selectedVatRate === 'undefined') {
          if (item.taxRate) item.selectedVatRate = this.findMatchingVatRate(item.taxRate);
          if (!item.selectedVatRate) item.selectedVatRate = this.form.orderTax || (this.taxes && this.taxes[0]);
        }
      });
    },
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (!item) return;
      if (item.discountType === "percentage") {
        this.$set(item, 'discountAmount', this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100));
      } else {
        this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (!item) return;
      if (!item.selectedVatRate) {
        if (item.taxRate) item.selectedVatRate = this.findMatchingVatRate(item.taxRate);
        if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) item.selectedVatRate = this.taxes[0];
      }
      // Update vat_rate_code and vat_rate_id when selectedVatRate changes
      if (item.selectedVatRate) {
        this.$set(item, 'vat_rate_code', item.selectedVatRate.code || null);
        this.$set(item, 'vat_rate_id', item.selectedVatRate.id || null);
      } else {
        this.$set(item, 'vat_rate_code', null);
        this.$set(item, 'vat_rate_id', null);
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    handleItemChange({ value, type, index, action }) {
      this.generateItemTotal(value, type, index, action);
    },
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          let newQty = value;
          if (action == "increment") newQty = Number(item.qty) + 1; else if (action == "decrement") { if (item.qty > 0) newQty = Number(item.qty) - 1; }
          this.$set(item, 'qty', newQty);
        } else if (type == "price") {
          let newPrice = value;
          if (action == "increment") newPrice = Number(item.unitPrice) + 1; else if (action == "decrement") { if (item.unitPrice > 0) newPrice = Number(item.unitPrice) - 1; }
          this.$set(item, 'unitPrice', newPrice);
        }
        if (item.discount > 0) {
          if (item.discountType === "percentage") this.$set(item, 'discountAmount', this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100));
          else this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
        }
        this.generateItemTotalPrice(index);
      }
      this.calculateSum();
    },
    generateItemTotalPrice(index) {
      let item = this.form.selectedProducts[index];
      if (!item) return;
      let priceAfterDiscount = this.roundToTwoDecimals((item.unitPrice * item.qty) - (item.discountAmount || 0));
      let vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) vatRate = Number(item.selectedVatRate.rate);
      else if (item.taxRate !== undefined && item.taxRate !== null) vatRate = Number(item.taxRate);
      if (isNaN(vatRate) || vatRate < 0) vatRate = 0;
      
      // Set totalAfterDiscount for display consistency
      this.$set(item, 'totalAfterDiscount', this.roundToTwoDecimals(priceAfterDiscount));
      
      if (item.taxType == "Exclusive") {
        // VAT on discounted amount
        const productTax = this.roundToTwoDecimals(priceAfterDiscount * (vatRate / 100));
        const totalTax = this.roundToTwoDecimals(productTax);
        const totalPrice = this.roundToTwoDecimals(priceAfterDiscount + totalTax);
        this.$set(item, 'productTax', productTax);
        this.$set(item, 'totalTax', totalTax);
        this.$set(item, 'totalPrice', totalPrice);
      } else {
        // Inclusive: VAT is included in unit price; derive VAT from discounted price
        // Don't modify unitPrice - use a temporary variable for calculation
        let discountedUnitPrice = this.roundToTwoDecimals(priceAfterDiscount / item.qty);
        const productTax = this.roundToTwoDecimals(discountedUnitPrice - (discountedUnitPrice / (1 + vatRate / 100)));
        const totalTax = this.roundToTwoDecimals(productTax * item.qty);
        const totalPrice = this.roundToTwoDecimals(priceAfterDiscount);
        this.$set(item, 'productTax', productTax);
        this.$set(item, 'totalTax', totalTax);
        this.$set(item, 'totalPrice', totalPrice);
      }
    },
    removeItem(item) { let index = this.form.selectedProducts.indexOf(item); if (index > -1) this.form.selectedProducts.splice(index, 1); this.calculateSum(); },
    roundToTwoDecimals(value) { return Math.round((Number(value) + Number.EPSILON) * 100) / 100; },
    formatToTwoDecimals(value) { if (value === null || value === undefined || value === '') return '0.00'; const num = Number(value); if (isNaN(num)) return '0.00'; return num.toFixed(2); },
    calculateSum() {
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));
      let globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) globalDiscount = this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal);
        else globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
      }
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals((this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)));
      }
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));
      if (this.isSaudiArabia) {
        this.$set(this.form, 'netTotal', this.roundToTwoDecimals(this.form.subTotal));
      } else {
        this.$set(this.form, 'netTotal', this.roundToTwoDecimals(this.form.subTotal - globalDiscount + this.form.invoiceTax + Number(this.form.transportCost || 0)));
      }
    },

    editSelectedClient() {
      if (!this.form.client) { toast.fire({ type: "warning", title: this.$t("Warning"), text: this.$t("Please select a client first.") }); return; }
      if (!this.$refs.clientEditModal) { toast.fire({ type: "error", title: this.$t("Error"), text: this.$t("Edit modal not available. Please refresh the page.") }); return; }
      this.$refs.clientEditModal.openModal(this.form.client);
    },
    editProductFromTable(product) {
      if (!this.$refs.productEditModal) { toast.fire({ type: "error", title: this.$t("Error"), text: this.$t("Edit modal not available. Please refresh the page.") }); return; }
      this.$refs.productEditModal.openModal(product);
    },
    handleProductCreated(newProduct) {
      this.products.unshift(newProduct); this.products.sort(this.sortProducts); this.form.product = newProduct; this.storeProduct(newProduct);
    },
    handleProductUpdated(eventData) {
      const { originalProduct, updatedData } = eventData;
      const productIndex = this.form.selectedProducts.findIndex(p => p.id === originalProduct.id || p.slug === originalProduct.slug);
      if (productIndex !== -1) {
        const updatedProduct = { ...this.form.selectedProducts[productIndex] };
        updatedProduct.name = updatedData.itemName || updatedProduct.name;
        updatedProduct.item_name = updatedData.itemName || updatedProduct.item_name;
        updatedProduct.regular_price = updatedData.regularPrice || updatedProduct.regular_price;
        updatedProduct.price = updatedData.regularPrice || updatedProduct.price;
        updatedProduct.discount = updatedData.discount || updatedProduct.discount;
        updatedProduct.selling_price = updatedData.sellingPrice || updatedProduct.selling_price;
        if (updatedData.subCategory) updatedProduct.sub_category_id = updatedData.subCategory;
        if (updatedData.itemUnit) updatedProduct.unit_id = updatedData.itemUnit;
        if (updatedData.productTax) { updatedProduct.tax_id = updatedData.productTax; updatedProduct.vat_rate_id = updatedData.productTax; }
        if (updatedData.brand) updatedProduct.brand_id = updatedData.brand;
        this.$set(this.form.selectedProducts, productIndex, updatedProduct);
        this.calculateSum();
      }
    },

    openStockAdjustmentModal(product) { this.selectedProductForStockAdjustment = product; this.showStockAdjustmentModal = true; },
    closeStockAdjustmentModal() { this.showStockAdjustmentModal = false; this.selectedProductForStockAdjustment = null; },
    adjustProductQuantity(product) {
      const index = this.form.selectedProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'qty', product.inventoryCount);
        this.generateItemTotal(product.inventoryCount, "qty", index, "");
        toast.fire({ type: "info", title: this.$t("Quantity Adjusted"), text: this.$t("Product quantity has been adjusted to available stock.") });
      }
      this.closeStockAdjustmentModal();
    },
    handleStockUpdated(eventData) {
      this.getProducts();
      const { product, newQuantity } = eventData;
      const index = this.form.selectedProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'inventoryCount', (this.form.selectedProducts[index].inventoryCount || 0) + newQuantity);
        this.calculateSum();
      }
    },

    toWord(){
      const amount = this.subtotal || 0;
      if (isNaN(amount) || amount < 0) { return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount'; }
      if (amount === 0) { return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only'; }
      return (this.isRTL && this.currentLocale === 'ar') ? this.convertToArabicWords(amount) : this.convertToEnglishWords(amount);
    },
    convertToArabicWords(amount) {
      const currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return `صفر ${currencyInfo.main} فقط`;
      const integerPart = Math.floor(amount); const decimalPart = Math.round((amount - integerPart) * 100); let result = '';
      if (integerPart > 0) { const arabicNumber = this.convertIntegerToArabic(integerPart); result += arabicNumber + ' ' + currencyInfo.main; if (integerPart === 2) result = result.replace(currencyInfo.main, currencyInfo.main + 'ان'); else if (integerPart >= 3 && integerPart <= 10) result = result.replace(currencyInfo.main, currencyInfo.main + 'ات'); }
      if (decimalPart > 0) { if (result) result += ' و '; const arabicDecimal = this.convertIntegerToArabic(decimalPart); result += arabicDecimal + ' ' + currencyInfo.sub; if (decimalPart === 2) result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان'); else if (decimalPart >= 3 && decimalPart <= 10) result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات'); }
      return result + ' فقط';
    },
    getCurrencyInfo() {
      const currency = this.appInfo?.currency || 'SAR';
      const isArabic = this.isRTL && this.currentLocale === 'ar';
      const currencyMap = { 'SAR': { en: { main: 'Riyal', sub: 'Halala', symbol: 'ê' }, ar: { main: 'ريال', sub: 'هللة', symbol: 'ê' } }, 'USD': { en: { main: 'Dollar', sub: 'Cent', symbol: '$' }, ar: { main: 'دولار', sub: 'سنت', symbol: '$' } }, 'EUR': { en: { main: 'Euro', sub: 'Cent', symbol: '€' }, ar: { main: 'يورو', sub: 'سنت', symbol: '€' } }, 'EGP': { en: { main: 'Pound', sub: 'Piastre', symbol: '£' }, ar: { main: 'جنيه', sub: 'قرش', symbol: '£' } } };
      return currencyMap[currency]?.[isArabic ? 'ar' : 'en'] || currencyMap['SAR'][isArabic ? 'ar' : 'en'];
    },
    convertToEnglishWords(amount) {
      const currencyInfo = this.getCurrencyInfo(); const toWords = new ToWords(); let words = toWords.convert(amount); const integerPart = Math.floor(amount); const decimalPart = Math.round((amount - integerPart) * 100); let result = words; if (integerPart > 0) { result += ' ' + currencyInfo.main; if (integerPart !== 1) result += 's'; } if (decimalPart > 0) { if (result) result += ' and '; result += this.convertIntegerToEnglish(decimalPart) + ' ' + currencyInfo.sub; if (decimalPart !== 1) result += 's'; } return result + ' Only';
    },
    convertIntegerToEnglish(num) { if (num === 0) return 'zero'; const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; if (num < 10) return ones[num]; if (num < 20) return teens[num - 10]; if (num < 100) { const ten = Math.floor(num / 10); const one = num % 10; if (one === 0) return tens[ten]; return tens[ten] + '-' + ones[one]; } return 'number'; },
    convertIntegerToArabic(num) { if (num === 0) return 'صفر'; const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة']; const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون']; const teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر']; const hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة']; if (num < 10) return ones[num]; if (num < 20) return teens[num - 10]; if (num < 100) { const ten = Math.floor(num / 10); const one = num % 10; if (one === 0) return tens[ten]; return ones[one] + ' و ' + tens[ten]; } if (num < 1000) { const hundred = Math.floor(num / 100); const remainder = num % 100; if (remainder === 0) return hundreds[hundred]; return hundreds[hundred] + ' و ' + this.convertIntegerToArabic(remainder); } if (num < 1000000) { const thousand = Math.floor(num / 1000); const remainder = num % 1000; if (remainder === 0) { if (thousand === 1) return 'ألف'; if (thousand === 2) return 'ألفان'; if (thousand >= 3 && thousand <= 10) return this.convertIntegerToArabic(thousand) + ' آلاف'; return this.convertIntegerToArabic(thousand) + ' ألف'; } return this.convertIntegerToArabic(thousand) + ' ألف و ' + this.convertIntegerToArabic(remainder); } if (num < 1000000000) { const million = Math.floor(num / 1000000); const remainder = num % 1000000; if (remainder === 0) { if (million === 1) return 'مليون'; if (million === 2) return 'مليونان'; if (million >= 3 && million <= 10) return this.convertIntegerToArabic(million) + ' ملايين'; return this.convertIntegerToArabic(million) + ' مليون'; } return this.convertIntegerToArabic(million) + ' مليون و ' + this.convertIntegerToArabic(remainder); } return 'رقم كبير جداً'; },

    async handleSubmit() {
      if (this.mode === 'edit') {
        await this.form
          .patch(window.location.origin + "/api/quotations/" + this.$route.params.slug)
          .then(({ data }) => {
            toast.fire({ type: "success", title: this.$t("Quotation updated successfully") });
            this.$router.push({ name: "quotations.show", params: { slug: data.data.slug } });
          })
          .catch((error) => {
            this.handleSubmitError(error);
          });
      } else {
        await this.form
          .post(window.location.origin + "/api/quotations")
          .then(({ data }) => {
            toast.fire({ type: "success", title: this.$t("Quotation added successfully") });
            this.$router.push({ name: "quotations.show", params: { slug: data.data.slug } });
          })
          .catch((error) => {
            this.handleSubmitError(error);
          });
      }
    },
    handleSubmitError(error) {
      if (error?.response?.status === 422 && error.response?.data?.errors) {
        const serverErrors = error.response.data.errors || {};
        const translatedErrors = {};
        Object.keys(serverErrors).forEach((field) => {
          const fieldErrors = serverErrors[field] || [];
          translatedErrors[field] = fieldErrors.map((message) => this.translateValidationMessage(message, field));
        });
        this.form.errors.set(translatedErrors);
        toast.fire({ type: "error", title: this.$t("Please check your input and try again.") });
      } else {
        const message = error?.response?.data?.message || this.$t("Please check your input and try again.");
        toast.fire({ type: "error", title: message });
      }
    },
    translateValidationMessage(message, field) {
      const direct = this.$t(message); 
      if (direct && direct !== message) return direct;
      
      // Get current locale
      const currentLocale = this.$i18n.locale || 'en';
      const isArabic = currentLocale === 'ar';
      
      const fieldLabelMap = { 
        client: this.$t("Client"), 
        reference: this.$t("Reference"), 
        selectedProducts: this.$t("Select Items"), 
        date: this.$t("Date"), 
        deliveryPlace: this.$t("Delivery Place"), 
        note: this.$t("Note"), 
        status: this.$t("Status"), 
        discount: this.$t("Discount"), 
        discountType: this.$t("Discount Type"), 
        totalDiscount: this.$t("Total discount"), 
        orderTax: this.$t("Quotation Tax"), 
        totalTax: this.$t("Total Tax"), 
        netTotal: this.$t("Net Total"), 
        transportCost: this.$t("Transport Cost") 
      };
      const fieldLabel = fieldLabelMap[field] || field;
      
      const patterns = [
        { 
          re: /The\s+.+?\s+field\s+is\s+required\.?/i, 
          en: `This field is required`,
          ar: `هذا الحقل مطلوب` 
        },
        { 
          re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i, 
          en: `The selected value is invalid`,
          ar: `القيمة المحددة غير صالحة` 
        },
        { 
          re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i, 
          en: `Must be a number`,
          ar: `يجب أن يكون رقماً` 
        },
        { 
          re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i, 
          en: `Must be an integer`,
          ar: `يجب أن يكون عدداً صحيحاً` 
        },
        { 
          re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i, 
          en: (_, n) => `Must be at least ${n}`,
          ar: (_, n) => `يجب ألا يقل عن ${n}` 
        },
        { 
          re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i, 
          en: (_, n) => `May not be greater than ${n}`,
          ar: (_, n) => `يجب ألا يزيد عن ${n}` 
        },
        { 
          re: /The\s+.+?\s+format\s+is\s+invalid\.?/i, 
          en: `Invalid format`,
          ar: `تنسيق غير صالح` 
        },
        { 
          re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i, 
          en: `This value has already been taken`,
          ar: `هذه القيمة مستخدمة بالفعل` 
        },
      ];
      
      for (const { re, en, ar } of patterns) { 
        const match = message.match(re); 
        if (match) { 
          const text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en)(...match) : (isArabic ? ar : en); 
          return `${fieldLabel}: ${text}`; 
        } 
      }
      return message;
    },
    assignProducts(quotationProducts) {
      if (!quotationProducts) return [];
      const mapped = [];
      for (const key in quotationProducts) {
        const qp = quotationProducts[key];
        const qty = Number(qp.quantity || qp.qty || 1);
        const unitPrice = Number(qp.salePrice ?? qp.unitPrice ?? 0);
        const taxType = qp.taxType;
        const taxRate = Number(qp.taxRate ?? 0);
        const productTax = Number(qp.taxAmount ?? 0);
        const totalTax = productTax * qty;
        const totalPrice = Number(qp.unitCostTotal ?? (taxType === 'Exclusive' ? qty * unitPrice + totalTax : qty * unitPrice));
        const unitCost = Number(qp.unitCost ?? (taxType === 'Exclusive' ? unitPrice + productTax : unitPrice));

        // Find VAT rate by vat_rate_id from quotation_products, fallback to matching by rate
        let selectedVatRate = null;
        let vatRateCode = null;
        if (qp.vat_rate_id && this.taxes) {
          selectedVatRate = this.findVatRateById(qp.vat_rate_id);
          if (selectedVatRate) {
            vatRateCode = selectedVatRate.code;
          }
        }
        // If not found by ID, try to match by rate or use vatRate from API response
        if (!selectedVatRate) {
          if (qp.vatRate && qp.vatRate.code) {
            vatRateCode = qp.vatRate.code;
            // Try to find matching VAT rate in taxes list
            selectedVatRate = this.findVatRateById(qp.vatRate.id) || this.findMatchingVatRate(qp.vatRate.rate);
          } else {
            selectedVatRate = this.findMatchingVatRate(taxRate) || this.form.orderTax || (this.taxes && this.taxes[0]) || null;
            if (selectedVatRate) {
              vatRateCode = selectedVatRate.code;
            }
          }
        }

        mapped.unshift({
          id: qp.productID ?? qp.id,
          slug: qp.productSlug ?? qp.slug,
          name: qp.productName ?? qp.name,
          code: qp.productCode ?? qp.code,
          taxType,
          taxRate,
          qty,
          avgPurchasePrice: qp.avgPurchasePrice,
          unitPrice,
          unitCost,
          totalPrice,
          productTax,
          totalTax,
          itemType: qp.itemType || 'product',
          inventoryCount: qp.inventoryCount ?? 0,
          discount: qp.discount ?? 0,
          discountType: qp.discountType ?? 'fixed',
          discountAmount: qp.discountAmount ?? 0,
          vat_rate_id: qp.vat_rate_id || null,
          vat_rate_code: vatRateCode,
          selectedVatRate: selectedVatRate,
        });
      }
      this.form.selectedProducts = mapped;
      this.ensureDiscountProperties();
      // Recalculate discountAmount if discount is set but discountAmount is missing or zero
      this.form.selectedProducts.forEach((item, index) => {
        if (item.discount > 0 && (!item.discountAmount || item.discountAmount === 0)) {
          this.calculateProductDiscount(index);
        } else {
          // Recalculate totals to ensure totalAfterDiscount and totalPrice are correct
          this.generateItemTotalPrice(index);
        }
      });
      return mapped;
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* Scoped styles copied from create page for consistent design */
.header-buttons { margin-bottom: 15px; }
.footer-buttons { gap: 10px; display: flex; }
.footer-buttons .btn { margin-right: 10px; }
.footer-buttons .btn:last-child { margin-right: 0; }
.create-btn { padding: 11px; cursor: pointer; transition: background-color 0.2s ease; }
.create-btn:hover { background-color: #e9ecef; }
.edit-btn { background-color: #17a2b8 !important; color: white !important; border-color: #17a2b8 !important; }
.edit-btn:hover { background-color: #138496 !important; border-color: #117a8b !important; }
.table-custom { border: none !important; }
.quotations-create-table { border-collapse: separate; border-spacing: 0; }
.quotations-create-table thead th { background-color: #33a0d9; color: #ffffff; padding: 8px; border: none !important; border-color: inherit !important; font-weight: 400; }
.quotations-create-table thead tr { border: none !important; }
.quotations-create-table thead th:first-child { border-top-left-radius: 10px; }
.quotations-create-table thead th:last-child { border-top-right-radius: 10px; }
[dir="rtl"] .quotations-create-table thead th:first-child { border-top-left-radius: 0; border-top-right-radius: 10px; }
[dir="rtl"] .quotations-create-table thead th:last-child { border-top-right-radius: 0; border-top-left-radius: 10px; }
.btn-group.c-w-100 { gap: 10px; }
.card { margin-top: 30px; border-radius: 20px; box-shadow: 0px 8px 20px 0px #00000014; border: 1px solid #CED4DA }
.card-footer { background-color: white; border-top: 1px solid #CED4DA; padding: 0 1.25rem 0.625rem 1.25rem; border-radius: 0 0 20px 20px; }
.quotations-create-table .badge.badge-danger { background: #FEF4F4 !important; color: #DC3545 !important; font-size: 12px !important; font-weight: 500 !important; padding: 10px 16px; }
.form-control{ background: #fff !important; }
.btn-primary { background: #2AB930 !important; }
.btn-secondary { background: #33a0d9 !important; color: white !important; padding: 10px 20px !important; border: none !important; }
.custom-qty-input { display: flex; align-items: center; width: fit-content; margin: 0 auto; }
.button-minus, .button-plus { width: 30px; height: 30px; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; cursor: pointer; transition: all 0.2s ease; }
.button-minus { background-color: #dc3545; color: white; }
.button-plus { background-color: #007bff; color: white; }
.button-minus:hover { background-color: #c82333; transform: scale(1.05); }
.button-plus:hover { background-color: #0056b3; transform: scale(1.05); }
.quantity-field { width: 60px; text-align: center; margin: 0 5px; border: 1px solid #ced4da; border-radius: 5px; padding: 5px; }
.quantity-field:focus { outline: none; border-color: #007bff; box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }
[dir="rtl"] .d-flex { direction: rtl; }
[dir="rtl"] .create-btn { border-radius: 0.25rem 0 0 0.25rem; }
[dir="ltr"] .create-btn { border-radius: 0 0.25rem 0.25rem 0; }
[dir="rtl"] .rtl-select .vs__dropdown-toggle { border-radius: 0.25rem 0 0 0.25rem; }
[dir="ltr"] .rtl-select .vs__dropdown-toggle { border-radius: 0.25rem; }
[dir="rtl"] .flex-grow-1.rtl-select { border-right: none; }
[dir="ltr"] .flex-grow-1.rtl-select { border-right: 1px solid #ced4da; }
.clickable-badge { cursor: pointer; transition: all 0.3s ease; user-select: none; }
.clickable-badge:hover { background-color: #c82333 !important; transform: scale(1.05); box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3); }
.clickable-badge:active { transform: scale(0.95); }
.insufficient-stock-input { border: 2px solid #dc3545 !important; background-color: #fff5f5 !important; color: #dc3545 !important; }
.insufficient-stock-input:focus { border-color: #dc3545 !important; box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important; }
</style>


