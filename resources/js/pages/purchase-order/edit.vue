<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'purchase-order.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'purchaseOrderEditForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <!-- form start -->
            <form id="purchaseOrderEditForm" role="form" @submit.prevent="updatePurchaseOrder" @keydown="form.onKeydown($event)">
              <!-- Dates row -->
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="purchaseDate">{{ $t("Purchase Date") }}</label>
                  <input id="purchaseDate" v-model="form.purchaseDate" type="date" class="form-control" :class="{ 'is-invalid': form.errors.has('purchaseDate') }" name="purchaseDate" />
                  <has-error :form="form" field="purchaseDate" />
                </div>
                <div class="form-group col-md-6">
                  <label for="poDate">{{ $t("PO Date") }}</label>
                  <input id="poDate" v-model="form.poDate" type="date" class="form-control" :class="{ 'is-invalid': form.errors.has('poDate') }" name="poDate" />
                  <has-error :form="form" field="poDate" />
                </div>
              </div>

              <!-- Supplier + PO Reference -->
              <div class="row" v-if="items && products">
                <div class="form-group col-md-6">
                  <label for="supplier">{{ $t("Supplier") }} <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.supplier" :options="items" label="name" :clearable="false" :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier" :placeholder="$t('Select a supplier')" @input="onSupplierChange" />
                      </div>
                      <has-error :form="form" field="supplier" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="poReference">{{ $t("PO Reference") }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control" :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference" :placeholder="$t('Enter PO reference')" />
                  <has-error :form="form" field="poReference" />
                </div>
              </div>

              <!-- Items selector full width -->
              <div class="row" v-if="products">
                <div class="form-group col-12">
                  <label for="product">{{ $t("Select Items") }} <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select v-model="form.product" :options="products" label="label" class="flex-grow-1" :clearable="false" :class="{ 'is-invalid': form.errors.has('selectedProducts') }" name="product" :placeholder="$t('Search products')" @input="storeProduct(form.product)" />
                      </div>
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Items table -->
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-100 m-auto">
                  <table class="table table-hover table-sm text-center invoices-create-table">
                    <thead>
                      <th>{{ $t("#") }}</th>
                      <th>{{ $t("Code") }}</th>
                      <th>{{ $t("Name") }}</th>
                      <th>{{ $t("Quantity") }}</th>
                      <th>{{ $t("Purchase Price") }}</th>
                      <th>{{ $t("Total") }}</th>
                      <th>{{ $t("Discount") }}</th>
                      <th>{{ $t("Total After Discount") }}</th>
                      <th>{{ $t("VAT Type") }}</th>
                      <th>{{ $t("VAT") }}</th>
                      <th>{{ $t("Total with VAT") }}</th>
                      <th class="text-right">{{ $t("Action") }}</th>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td style="min-width: 50px;">{{ ++i }}</td>
                        <td style="min-width: 100px;">{{ item.code | withPrefix(prefix) }}</td>
                        <td style="min-width: 200px;">{{ item.name }}</td>
                        <td style="min-width: 200px;">
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger" data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'decrement')" />
                            <input type="number" step="any" :id="`purchaseQty-${i}`" v-model.number="item.qty" name="quantity" class="quantity-field border-0 incrementor" required min="1" @input="generateItemTotal(item.qty, 'qty', i - 1, '')" />
                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary" data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'increment')" />
                          </div>
                        </td>
                        <td style="min-width: 200px;">
                          <div class="input-group custom-qty-input">
                            <input type="number" step="any" :id="`unitPrice-${i}`" v-model.number="item.unitPrice" name="unitPrice" class="quantity-field border-0" required min="0" @input="generateItemTotal(item.unitPrice, 'price', i - 1, '')" />
                          </div>
                        </td>
                        <td style="min-width: 120px;">{{ ((item.originalPrice || item.unitPrice) * item.qty) }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 180px;">
                          <div class="input-group">
                            <select v-model="item.discountType" class="form-control form-control-sm border-0" style="width: 60px;" @change="calculateProductDiscount(i - 1)">
                              <option value="fixed">{{ $t("Fixed") }}</option>
                              <option value="percentage">{{ $t("%") }}</option>
                            </select>
                            <input type="number" v-model="item.discount" class="form-control form-control-sm border-0" style="width: 80px;" step="any" min="0" :max="item.discountType == 'percentage' ? 100 : ((item.originalPrice || item.unitPrice) * item.qty)" placeholder="0" @change="calculateProductDiscount(i - 1)" @keyup="calculateProductDiscount(i - 1)" />
                          </div>
                        </td>
                        <td style="min-width: 120px;">{{ getTotalAfterDiscount(item) }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 150px;">
                          <select v-model="item.selectedVatRate" class="form-control form-control-sm border-0" @change="calculateProductVat(i - 1)" style="min-width: 120px;">
                            <option value="">{{ $t('Select VAT') }}</option>
                            <option v-for="tax in taxes" :key="tax.id" :value="tax">{{ tax.code }} ({{ tax.rate }}%)</option>
                          </select>
                        </td>
                        <td style="min-width: 100px;">
                          <span class="form-control-plaintext form-control-sm text-center">{{ item.productTax }} <span class="saudi-riyal">ê</span></span>
                        </td>
                        <td style="min-width: 120px;">{{ getTotalWithVAT(item) }} <span class="saudi-riyal">ê</span></td>
                        <td class="text-right" style="min-width: 80px;">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <!-- Totals Row -->
                      <tr>
                        <td colspan="5" class="text-right">
                          <strong> {{ $t("Total") }} : {{ toWord() }} </strong>
                        </td>
                        <td>
                          <strong>{{ totalUnitPrice }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ getTotalDiscountSum() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ getSubTotalAfterDiscount() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td></td>
                        <td>
                          <strong>{{ getTotalVATSum() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ getTotalWithVATSum() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Summary / fields -->
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control" :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
                <div class="form-group col-md-4">
                  <label for="transportCost">{{ $t("Transport Cost") }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0" class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost" :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
                <div class="form-group col-md-4">
                  <label for="paymentTerms">{{ $t("Payment Terms") }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms" :placeholder="$t('Enter payment terms')" />
                  <has-error :form="form" field="paymentTerms" />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-8">
                  <label for="note">{{ $t("Note") }}</label>
                  <textarea id="note" v-model="form.note" class="form-control" :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                  <has-error :form="form" field="note" />
                </div>
                <div class="form-group col-md-4">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control" :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
            </form>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <button type="submit" :disabled="form.busy" class="btn btn-success" @click="updatePurchaseOrder">
                    <i :class="form.busy ? 'fas fa-spinner fa-spin' : 'fas fa-save'" />
                    {{ form.busy ? $t("Saving...") : $t("Save") }}
                  </button>
                  <router-link :to="{ name: 'purchase-order.show', params: { slug: $route.params.slug } }" class="btn btn-info">
                    <i class="fas fa-eye" /> {{ $t("View") }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Purchase Order") };
  },
  data: () => ({
    breadcrumbsCurrent: "Edit Purchase Order",
    breadcrumbs: [
      { name: "Dashboard", url: "home" },
      { name: "Purchase Orders", url: "purchase-order.index" },
      { name: "Edit", url: "" },
    ],
    form: new Form({
      supplier: null,
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discount: 0,
      transportCost: 0,
      totalProductTax: 0,
      orderTax: null,
      totalTax: 0,
      poReference: "",
      paymentTerms: "",
      poDate: new Date().toISOString().slice(0, 10),
      purchaseDate: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
      totalDiscount: 0,
      product: null,
    }),
    products: "",
    taxes: "",
    prefix: "",
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((total, item) => total + ((item.originalPrice || item.unitPrice) * item.qty), 0);
    },
  },
  created() {
    this.prefix = this.appInfo.productPrefix;
    this.getSuppliers();
    this.getProducts();
    this.getTaxes();
    this.loadPurchaseOrder();
  },
  methods: {
    async getSuppliers() {
      await this.$store.dispatch("operations/allData", { path: "/api/all-suppliers" });
    },
    async getProducts() {
      const { data } = await axios.get(window.location.origin + "/api/all-products-not-service");
      this.products = data.data;
    },
    async getTaxes() {
      const { data } = await axios.get(window.location.origin + "/api/all-vat-rates");
      this.taxes = data.data;
    },
    async loadPurchaseOrder() {
      const { data } = await axios.get(window.location.origin + "/api/purchase-order/" + this.$route.params.slug);
      const po = data.data || {};
      // Supplier
      this.form.supplier = po.supplier || null;
      // Map lines
      const lines = po.purchase_order_products || [];
      this.form.selectedProducts = lines.map(l => {
        const product = l.product || {};
        const qty = Number(l.quantity || 1);
        const unit = Number(l.purchase_price || product.avgPurchasePrice || 1);
        const discountAmount = Number(l.discount_amount || 0);
        const discountType = l.discount_type || 'fixed';
        const lineTotal = unit * qty;
        const totalAfterDiscount = discountType === 'percentage' ? (lineTotal - (lineTotal * Number(l.discount || 0) / 100)) : (lineTotal - discountAmount);
        const vatAmount = Number(l.tax_amount || 0);
        return {
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: qty,
          unitPrice: product.regularPrice,
          originalPrice: unit,
          discount: Number(l.discount || 0),
          discountType: discountType,
          discountAmount: discountAmount,
          selectedVatRate: this.findMatchingVatRate(product.productTax) || null,
          productTax: vatAmount,
          totalTax: vatAmount,
          totalPrice: Number((totalAfterDiscount + vatAmount).toFixed(2)),
        };
      });
      // Header fields
      this.form.subTotal = Number(po.sub_total || 0);
      this.form.netTotal = Number(po.net_total || 0);
      this.form.discount = Number(po.discount || 0);
      this.form.transportCost = Number(po.transport || 0);
      this.form.totalProductTax = Number(po.total_tax || 0);
      this.form.poReference = po.po_reference || '';
      this.form.paymentTerms = po.payment_terms || '';
      this.form.poDate = po.po_date || this.form.poDate;
      this.form.purchaseDate = po.purchase_date || this.form.purchaseDate;
      this.form.note = po.note || '';
      this.form.status = po.status !== undefined ? po.status : 1;
      // Recalc
      this.calculateSum();
    },
    storeProduct(product) {
      const index = this.form.selectedProducts.findIndex(x => x.id == product.id);
      const quantity = 1;
      let purchasePrice = Number(product.sellingPrice) > 0 ? Number(product.sellingPrice) : (Number(product.regularPrice) > 0 ? Number(product.regularPrice) : (Number(product.avgPurchasePrice) > 0 ? Number(product.avgPurchasePrice) : 1));
      if (index === -1) {
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: quantity,
          unitPrice: product.regularPrice,
          originalPrice: purchasePrice,
          discount: 0,
          discountType: 'fixed',
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.productTax) || (this.taxes && this.taxes.length > 0 ? this.taxes[0] : null),
          productTax: 0,
          totalTax: 0,
          totalPrice: purchasePrice * quantity,
        });
        this.generateItemTotal(quantity, 'qty', 0, '');
        if (this.taxes && this.taxes.length > 0) this.calculateProductVat(0);
        this.calculateSum();
      }
    },
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (!item) return;
      if (type === 'qty') {
        let newQty = value;
        if (action === 'increment') newQty = Number(item.qty) + 1;
        else if (action === 'decrement') newQty = Math.max(1, Number(item.qty) - 1);
        this.$set(item, 'qty', newQty);
      } else if (type === 'price') {
        let newPrice = value;
        if (action === 'increment') newPrice = Number(item.unitPrice) + 1;
        else if (action === 'decrement') newPrice = Math.max(0, Number(item.unitPrice) - 1);
        this.$set(item, 'unitPrice', newPrice);
        this.$set(item, 'originalPrice', newPrice);
      }
      if (item.discount > 0) {
        if (item.discountType === 'percentage') {
          this.$set(item, 'discountAmount', Number(((item.unitPrice * item.qty * item.discount) / 100).toFixed(2)));
        } else {
          this.$set(item, 'discountAmount', Number(item.discount || 0));
        }
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    calculateProductDiscount(index) {
      const item = this.form.selectedProducts[index];
      if (!item) return;
      const total = (item.originalPrice || item.unitPrice) * item.qty;
      if (item.discountType === 'percentage') {
        item.discountAmount = Number((total * (item.discount || 0) / 100).toFixed(2));
      } else {
        item.discountAmount = Number(item.discount || 0);
      }
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    calculateProductVat(index) {
      this.generateItemTotalPrice(index);
      this.calculateSum();
    },
    generateItemTotalPrice(index) {
      const item = this.form.selectedProducts[index];
      if (!item) return;
      const lineTotal = Number(((item.originalPrice || item.unitPrice) * item.qty).toFixed(2));
      let lineAfterDiscount;
      if (item.discountType === 'percentage') lineAfterDiscount = Number((lineTotal - (lineTotal * (item.discount || 0) / 100)).toFixed(2));
      else lineAfterDiscount = Number((lineTotal - (item.discountAmount || 0)).toFixed(2));
      let vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate != null) vatRate = Number(item.selectedVatRate.rate);
      else if (item.taxRate != null) vatRate = Number(item.taxRate);
      if (isNaN(vatRate) || vatRate < 0) vatRate = 0;
      item.productTax = Number((lineAfterDiscount * vatRate / 100).toFixed(2));
      item.totalTax = item.productTax;
      item.totalPrice = Number((lineAfterDiscount + item.productTax).toFixed(2));
    },
    getTotalAfterDiscount(item) {
      const total = (item.originalPrice || item.unitPrice) * item.qty;
      if (item.discountType === 'percentage') return total - (total * (item.discount || 0) / 100);
      return total - (item.discountAmount || 0);
    },
    getSubTotalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((prev, cur) => {
        const lineTotal = (cur.originalPrice || cur.unitPrice) * cur.qty;
        const lineAfter = cur.discountType === 'percentage' ? (lineTotal - (lineTotal * (cur.discount || 0) / 100)) : (lineTotal - (cur.discountAmount || 0));
        return Number((prev + lineAfter).toFixed(2));
      }, 0);
    },
    getTotalWithVAT(item) {
      const totalAfterDiscount = this.getTotalAfterDiscount(item);
      const vatAmount = item.productTax || 0;
      return Number((totalAfterDiscount + vatAmount).toFixed(2));
    },
    getTotalWithVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((total, item) => Number((total + this.getTotalWithVAT(item)).toFixed(2)), 0);
    },
    getTotalVATSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((total, item) => Number((total + (item.productTax || 0)).toFixed(2)), 0);
    },
    getTotalDiscountSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((total, item) => Number((total + (item.discountAmount || 0)).toFixed(2)), 0);
    },
    updateNetTotal() {
      const totalWithVAT = this.getTotalWithVATSum();
      this.form.netTotal = Number((totalWithVAT + Number(this.form.transportCost || 0)).toFixed(2));
    },
    calculateSum() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        this.form.totalDiscount = 0;
        this.form.subTotal = 0;
        this.form.totalProductTax = 0;
        this.form.netTotal = 0;
        return;
      }
      this.form.totalDiscount = this.getTotalDiscountSum();
      const subTotalAfterDiscount = this.getSubTotalAfterDiscount();
      this.form.totalProductTax = this.getTotalVATSum();
      this.form.subTotal = subTotalAfterDiscount;
      this.updateNetTotal();
    },
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) this.form.selectedProducts.splice(index, 1);
      this.calculateSum();
    },
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      if (typeof productTax === 'object' && productTax.rate !== undefined) return this.taxes.find(tax => tax.rate === productTax.rate);
      if (typeof productTax === 'number') return this.taxes.find(tax => tax.rate === productTax);
      return null;
    },
    toWord() {
      const amount = this.totalUnitPrice || 0;
      if (isNaN(amount) || amount < 0) return 'Invalid Amount';
      if (amount === 0) return 'Zero Only';
      return amount.toFixed(2);
    },
    onSupplierChange() {
      this.form.errors.clear('supplier');
    },
    async updatePurchaseOrder() {
      if (this.form.busy) return;
      // Basic validation
      const validationErrors = [];
      if (!this.form.supplier) validationErrors.push(this.$t("Please select a supplier"));
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) validationErrors.push(this.$t("Please add at least one product"));
      if (validationErrors.length > 0) {
        const errorList = validationErrors.map(e => `• ${e}`).join('\n');
        toast.fire({ type: 'error', title: `${this.$t('Validation Error')}:\n\n${errorList}`, timer: 8000, timerProgressBar: true });
        return;
      }
      try {
        this.form.errors.clear();
        const formData = {
          supplier: this.form.supplier,
          selectedProducts: this.form.selectedProducts.map(product => ({
            id: product.id,
            quantity: product.qty,
            unitPrice: product.unitPrice,
            discount: product.discount || 0,
            discount_type: product.discountType || 'fixed',
            discount_amount: product.discountAmount || 0,
            productTax: product.productTax || 0, // Include VAT amount
            totalTax: product.totalTax || 0, // Include total VAT amount
            selectedVatRate: product.selectedVatRate, // Include VAT rate object
          })),
          subTotal: this.form.subTotal,
          netTotal: this.form.netTotal,
          discount: this.form.discount,
          transport: this.form.transportCost || 0,
          totalProductTax: this.form.totalProductTax,
          poReference: this.form.poReference || '',
          paymentTerms: this.form.paymentTerms || '',
          poDate: this.form.poDate,
          purchaseDate: this.form.purchaseDate,
          note: this.form.note,
          status: this.form.status,
        };
        await this.$axios.put(`/api/purchase-order/${this.$route.params.slug}`, formData);
        toast.fire({ type: 'success', title: this.$t('Purchase order updated successfully') });
        this.$router.push({ name: 'purchase-order.show', params: { slug: this.$route.params.slug } });
      } catch (error) {
        ErrorHandler && ErrorHandler.handleApiError ? ErrorHandler.handleApiError(error, { showValidationErrors: true }) : console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.header-buttons {
  margin-bottom: 15px;
}
.footer-buttons {
  gap: 10px;
  display: flex;
}
.footer-buttons .btn { margin-right: 10px; }
.footer-buttons .btn:last-child { margin-right: 0; }
.create-btn { padding: 11px; }
.button-plus.icon-shape.icon-sm.btn-primary { padding: 0; }
.btn-primary { background: #2AB930 !important; }
.btn-primary:hover { background: #229A26 !important; transform: translateY(-1px); box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3); }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }
.table-custom { border: none !important; }
.invoices-create-table { border-collapse: separate; border-spacing: 0; }
.invoices-create-table thead th { background-color: #33a0d9; color: #ffffff; padding: 8px; border: none !important; border-color: inherit !important; font-weight: 400; }
.btn-group.c-w-100 { gap: 10px; }
.card { margin-top: 30px; border-radius: 20px; box-shadow: 0px 8px 20px 0px #00000014; border: 1px solid #CED4DA }
.card-footer { background-color: white; border-top: 1px solid #CED4DA; padding: 0 1.25rem 0.625rem 1.25rem; border-radius: 0 0 20px 20px; }
.form-control{ background: #fff !important; }
</style>

