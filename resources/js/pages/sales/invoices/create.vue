<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              {{ $t("Create Invoice") }}
            </h3>
            <router-link :to="{ name: 'invoices.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
          <!-- /.card-header -->
            <div class="card-body">
                                 <!-- Chart of Account Validation -->
                   <ChartOfAccountValidation
                     :key="validationKey"
                     :client="form.client"
                     :products="form.selectedProducts"
                     :allProducts="products"
                     type="invoice"
                     @chart-of-account-assigned="handleChartOfAccountAssigned"
                   />
              <!-- form start -->
              <form role="form" @submit.prevent="saveInvoice" @keydown="form.onKeydown($event)">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t("Client") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.client" :options="items" label="name"
                          :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                          :placeholder="$t('Select a client')" />
                        <ClientCreateModal @reloadClients="getClients('latest')">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ClientCreateModal>
                      </div>
                      <has-error :form="form" field="client" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="reference">
                    {{ $t("Reference") }}
                  </label>
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
                        <v-select class="flex-grow-1" v-model="form.product" :options="products" label="label" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }" name="product" :placeholder="$t('Search Items')"
                          @input="storeProduct(form.product)" />
                        <ProductCreateModal @reloadProducts="getProducts">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </div>
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-95 m-auto">
                  <table class="table table-hover table-sm text-center">
                    <thead>
                      <tr>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Item Name") }}</th>
                        <th>{{ $t("Quantity") }}</th>
                        <th>{{ $t("Price") }}</th>
                        <th>{{ $t("Unit Price") }}</th>
                        <th>{{ $t("Tax") }}</th>
                        <th>{{ $t("Discount") }}</th>
                        <th>{{ $t("Subtotal") }}</th>
                        <th class="text-right">{{ $t("Action") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          {{ item.code | withPrefix(prefix) }}
                        </td>
                        <td>
                          <span v-if="Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
                            " v-tooltip="$t('Insufficient Stock')" class="badge badge-danger p-2">
                            <i class="fas fa-exclamation"></i>
                          </span>
                          <router-link v-if="$can('product-view')" :to="{
                            name: 'products.show',
                            params: { slug: item.slug },
                          }">
                            {{ item.name }}
                          </router-link>
                          <span v-else>{{ item.name }}</span>
                        </td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  i - 1,
                                  'decrement'
                                )
                                " />

                            <input type="number" step="any" :id="`Qty-${i}`" :value="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required min="1" :max="item.itemType == 'product' ? item.inventoryCount : null"
                              @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'qty',
                                  i - 1,
                                  ''
                                )
                                " @keyup="generateItemTotal($event.target.value, 'qty', i - 1, '')"
                              placeholder="Quantity" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  i - 1,
                                  'increment'
                                )
                                " />
                          </div>
                        </td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="unitPrice" @click="
                                generateItemTotal(
                                  item.unitPrice,
                                  'price',
                                  i - 1,
                                  'decrement'
                                )
                                " />
                            <input type="unitPrice" step="any" :id="`unitPrice-${i}`" :value="item.unitPrice"
                              name="unitPrice" class="quantity-field border-0 incrementor" required min="0" @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'price',
                                  i - 1,
                                  ''
                                )
                                " @keyup="generateItemTotal($event.target.value, 'price', i - 1, '')" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="unitPrice" @click="
                                generateItemTotal(
                                  item.unitPrice,
                                  'price',
                                  i - 1,
                                  'increment'
                                )
                                " />
                          </div>
                        </td>
                        <td>{{ item.unitCost | withCurrency }}</td>
                        <td>{{ item.totalTax | withCurrency }}</td>
                        <td>
                          <div class="input-group">
                            <select 
                              v-model="item.discountType" 
                              class="form-control form-control-sm" 
                              style="width: 60px;"
                              @change="calculateProductDiscount(i - 1)">
                              <option value="fixed">{{ $t("Fixed") }}</option>
                              <option value="percentage">{{ $t("%") }}</option>
                            </select>
                            <input 
                              type="number" 
                              v-model="item.discount" 
                              class="form-control form-control-sm" 
                              style="width: 80px;"
                              step="any" 
                              min="0" 
                              :max="item.discountType == 'percentage' ? 100 : item.totalPrice"
                              placeholder="0"
                              @change="calculateProductDiscount(i - 1)"
                              @keyup="calculateProductDiscount(i - 1)" />
                          </div>
                        </td>
                        <td>{{ item.totalPrice | withCurrency }}</td>
                        <td class="text-right">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="7" class="text-right">
                          <strong> {{ $t("Total") }} : {{ toWord() }} </strong>
                        </td>
                        <td>
                          <strong>{{
                            form.productTotalTax | withCurrency
                          }}</strong>
                        </td>
                        <td>
                          <strong>{{ form.subTotal | withCurrency }}</strong>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="1"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>

              <div class="row">
                <div v-if="taxes" class="form-group col-md-4">
                  <label for="orderTax">{{ $t("Invoice Tax") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" placeholder="Select a tax type"
                    @input="calculateSum" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes" class="form-group col-md-4">
                  <label for="totalTax">{{ $t("Total Tax") }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group col-md-4">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-4">
                  <label for="poReference">{{
                    $t("PO Reference")
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference"
                    :placeholder="$t('Enter PO reference')" />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-4">
                  <label for="paymentTerms">{{
                    $t("Payment Terms")
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms"
                    :placeholder="$t('Enter payment terms')" />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div class="form-group col-md-4">
                  <label for="addPayment">{{ $t("Add Payment?") }}</label>
                  <select id="addPayment" v-model="form.addPayment" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('addPayment') }" name="addPayment">
                    <option value="" selected disabled>
                      {{ $t("Select an option") }}
                    </option>
                    <option :disabled="!form.selectedProducts" value="1">
                      {{ $t("Yes") }}
                    </option>
                    <option value="0">{{ $t("No") }}</option>
                  </select>
                  <has-error :form="form" field="addPayment" />
                </div>
              </div>
              <div class="row" v-if="form.addPayment == 1 &&
                accounts &&
                form.selectedProducts &&
                form.selectedProducts.length > 0
                ">
                <div class="form-group col-md-4">
                  <label for="account">{{ $t("Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-2">
                  <label for="paidAmount">{{ $t("Paid Amount")
                  }}<span class="required">*</span></label>
                  <input id="paidAmount" v-model="form.paidAmount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paidAmount') }" name="paidAmount" min="1"
                    :max="form.netTotal" :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="paidAmount" />
                </div>
                <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t("Cheque No") }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div>
                <div class="form-group col-md-3">
                  <label for="receiptNo">{{ $t("Receipt No") }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="deliveryPlace">{{
                    $t("Delivery Place")
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-md-4">
                  <label for="date">{{ $t("Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-4">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>

              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>

              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5">
                  <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode"/>
                  {{ $t("Send To Email") }}
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5">
                  <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode"/>
                  {{ $t("Send To SMS") }}
                </div>
              </div>
            </form>
            <!-- /.card-body -->
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-primary">
                <i class="fas fa-save" /> {{ $t("Save") }}
              </v-button>
              <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t("Reset") }}
              </button>
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
import { ToggleButton } from "vue-js-toggle-button";
import ClientCreateModal from '~/components/ClientCreateModal'
import ProductCreateModal from '~/components/ProductCreateModal'
import ChartOfAccountValidation from '~/components/ChartOfAccountValidation'
import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Invoice") };
  },
  components: {
    ToggleButton,
    ClientCreateModal,
    ProductCreateModal,
    ChartOfAccountValidation
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Invoice",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Invoices",
        url: "invoices.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: new Form({
      invoiceNo: "",
      client: "",
      reference: "",
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      transportCost: "",
      orderTax: "",
      totalTax: 0,
      productTotalTax: 0,
      account: "",
      totalPaid: "",
      dueAmount: "",
      poReference: "",
      paymentTerms: "",
      deliveryPlace: "",
      addPayment: "",
      chequeNo: "",
      receiptNo: "",
      date: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
    }),
    products: "",
    accounts: "",
    taxes: "",
    prefix: "",
    isUpdatingChartOfAccount: false, // Flag to prevent form submission during chart of account updates
    validationKey: 0, // Force re-render of validation component
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
  },
  created() {
    this.getClients();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  methods: {
    // get all clients
    async getClients(selectedClient = 'default') {
      try {
        await this.$store.dispatch("operations/allData", {
          path: "/api/all-clients",
        });
        // assign default client
        if (this.items && this.items.length > 0) {
          let defaultClientSlug = this.appInfo.defaultClientSlug;
          this.form.client = this.items.find(
            (item) => item.slug === defaultClientSlug
          );
        }
        if (selectedClient == 'latest') {
          this.form.client = this.items[0];
        }
      } catch (error) {
        console.error('Error getting clients:', error)
        // Don't show error toast here, just log for debugging
      }
    },

    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-products"
      );
      this.products = data.data;
      this.products.sort(this.sortProducts);
    },

    // sort products
    sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1;
      }
      if (Number(a.code) > Number(b.code)) {
        return 1;
      }
      return 0;
    },

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-accounts"
      );
      this.accounts = data.data;
      // assign default account
      if (this.accounts && this.accounts.length > 0) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.form.account = this.accounts.find(
          (item) => item.slug === defaultAccountSlug
        );
      }
    },

    // get taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-vat-rates"
      );
      this.taxes = data.data;
      // assign default vat rate
      if (this.taxes && this.taxes.length > 0) {
        let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
        this.form.orderTax = this.taxes.find(
          (tax) => tax.slug === defaultVatRateSlug
        );
      }
      this.calculateSum();
    },

    // ensure all products have discount properties
    ensureDiscountProperties() {
      this.form.selectedProducts.forEach(item => {
        if (typeof item.discount === 'undefined') {
          item.discount = 0;
        }
        if (typeof item.discountType === 'undefined') {
          item.discountType = 'fixed';
        }
      });
    },

    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let quantity = 1;
      if (index === -1) {
        let productTax =
          product.taxType == "Exclusive"
            ? product.priceWithDiscount * (product.taxRate / 100)
            : product.priceWithDiscount -
            product.priceWithDiscount / (1 + product.taxRate / 100);
        let totalTax = productTax * quantity;

        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          itemType: product.itemType,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: quantity,
          inventoryCount: product.inventoryCount,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.priceWithDiscount,
          unitCost:
            product.taxType == "Exclusive"
              ? product.priceWithDiscount + productTax
              : product.priceWithDiscount,
          totalPrice:
            product.taxType == "Exclusive"
              ? 1 * (product.priceWithDiscount + totalTax)
              : 1 * product.priceWithDiscount,
          productTax: product.productTax > 0 ? product.productTax : 0,
          totalTax: totalTax,
          discount: 0,
          discountType: 'fixed',
        });
      } else {
        // Ensure existing product has discount properties
        if (typeof this.form.selectedProducts[index].discount === 'undefined') {
          this.form.selectedProducts[index].discount = 0;
        }
        if (typeof this.form.selectedProducts[index].discountType === 'undefined') {
          this.form.selectedProducts[index].discountType = 'fixed';
        }
      }
      this.generateItemTotal(quantity, "qty", index, "");
      return;
    },

    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          item.qty = value;
          if (action == "increment") {
            item.qty = Number(item.qty) + 1;
          } else if (action == "decrement") {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else {
          item.unitPrice = value;
          if (action == "increment") {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == "decrement") {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }
        item.productTax =
          item.taxType == "Exclusive"
            ? item.unitPrice * (item.taxRate / 100)
            : item.unitPrice - item.unitPrice / (1 + item.taxRate / 100);

        item.totalTax = item.productTax * item.qty;

        item.totalPrice =
          item.taxType == "Exclusive"
            ? item.qty * item.unitPrice + item.totalTax
            : item.qty * item.unitPrice;
        item.unitCost =
          item.taxType == "Exclusive"
            ? Number(item.unitPrice) + Number(item.productTax)
            : item.unitPrice;
        this.form.selectedProducts[index] = item;
        
        // Recalculate discount after price/quantity changes
        this.calculateProductDiscount(index);
      }
      this.calculateSum();
      return;
    },

    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let discountAmount = 0;
        
        if (item.discount > 0) {
          if (item.discountType == 'percentage') { // Percentage
            discountAmount = (item.unitPrice * item.qty * item.discount) / 100;
          } else { // Fixed
            discountAmount = Number(item.discount);
          }
        }
        
        // Calculate price after discount
        let priceAfterDiscount = (item.unitPrice * item.qty) - discountAmount;
        
        // Recalculate tax based on discounted price
        if (item.taxType == "Exclusive") {
          item.productTax = priceAfterDiscount * (item.taxRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount + item.totalTax;
        } else {
          item.productTax = priceAfterDiscount - (priceAfterDiscount / (1 + item.taxRate / 100));
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount;
        }
        
        this.form.selectedProducts[index] = item;
        this.calculateSum();
      }
      return;
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.calculateSum();
      return;
    },

    // calculate sum
    calculateSum() {
      // calculate subtotal
      this.form.subTotal = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalPrice).toFixed(2));
      },
        0);

      // calculate product tax
      this.form.productTotalTax = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalTax).toFixed(2));
      },
        0);

      this.form.netTotal = this.form.subTotal;

      // calculate quotation tax
      this.form.totalTax = 0;
      if (this.form.orderTax) {
        this.form.totalTax =
          (this.form.orderTax.rate / 100) * this.form.subTotal;
      }

      // calculate total
      this.form.netTotal =
        this.form.subTotal +
        Number(this.form.transportCost || 0) +
        this.form.totalTax;
      return;
    },

    // return number to word
    toWord(){
      const toWords = new ToWords();
      let words = toWords.convert(this.form.subTotal);
      return words + ' Only';
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (
        file.size < 2111775 &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif")
      ) {
        reader.onloadend = () => {
          this.formClient.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        Swal.fire(
          this.$t("Error!"),
          this.$t("Please select a valid thumbnail with size less than 2 MB"),
          "error"
        );
      }
    },

    // save invoice
    async saveInvoice() {
      console.log('saveInvoice called - isUpdatingChartOfAccount:', this.isUpdatingChartOfAccount)
      
      // Prevent form submission during chart of account updates
      if (this.isUpdatingChartOfAccount) {
        console.log('Preventing form submission during chart of account update')
        return
      }
      
      console.log('Proceeding with invoice save...')
      
      await this.form
        .post(window.location.origin + "/api/invoices")
        .then(({ data }) => {
          toast.fire({
            type: "success",
            title: this.$t("Invoice added successfully"),
          });
          this.$router.push({
            name: "invoices.show",
            params: { slug: data.data.slug },
          });
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
        });
    },

    // save client
    async saveClient() {
      await this.formClient
        .post(window.location.origin + "/api/clients")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Client added successfully"),
          });
          this.showClientCreateModal = false;
          this.getClients();
          this.formClient.reset();
          this.url = null;
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
        });
    },

    // Handle chart of account assignment
    async handleChartOfAccountAssigned(data) {
      console.log('Chart of account assigned:', data)
      
      // Set flag to prevent form submission during updates
      this.isUpdatingChartOfAccount = true
      
      try {
        if (data.entity === 'client') {
          // Store current client selection
          const currentClientSlug = this.form.client ? this.form.client.slug : null
          
          // Refresh client data
          await this.getClients()
          
          // Restore client selection if it was set
          if (currentClientSlug && this.items) {
            this.form.client = this.items.find(client => client.slug === currentClientSlug)
            console.log('Restored client selection:', this.form.client)
          }
        } else if (data.entity === 'product') {
          // Store current product selections and their data
          const currentProductSelections = this.form.selectedProducts.map(p => ({
            id: p.id,
            qty: p.qty,
            unitPrice: p.unitPrice,
            discount: p.discount,
            discountType: p.discountType
          }))
          
          // Refresh product data
          await this.getProducts()
          
                     // Restore product selections and update with new data
           if (currentProductSelections.length > 0 && this.products) {
             this.form.selectedProducts = currentProductSelections.map(selection => {
               const updatedProduct = this.products.find(p => p.id === selection.id)
               if (updatedProduct) {
                 // Preserve the user's selections (quantity, price, discount) while updating chart of account info
                 const restoredProduct = {
                   ...updatedProduct,
                   qty: selection.qty,
                   unitPrice: selection.unitPrice,
                   discount: selection.discount,
                   discountType: selection.discountType,
                   // Recalculate totals based on preserved values
                   totalPrice: selection.unitPrice * selection.qty,
                   totalTax: (updatedProduct.taxType == "Exclusive" 
                     ? selection.unitPrice * (updatedProduct.taxRate / 100)
                     : selection.unitPrice - selection.unitPrice / (1 + updatedProduct.taxRate / 100)) * selection.qty
                 }
                 
                 console.log(`Restored product ${restoredProduct.name}:`, {
                   id: restoredProduct.id,
                   sales_account_id: restoredProduct.sales_account_id,
                   purchase_account_id: restoredProduct.purchase_account_id
                 })
                 
                 return restoredProduct
               }
               return null
             }).filter(Boolean) // Remove any null entries
             
             console.log('Restored product selections:', this.form.selectedProducts)
             
             // Recalculate totals after updating products
             this.calculateSum()
           }
        }
      } catch (error) {
        console.error('Error in handleChartOfAccountAssigned:', error)
        // Don't show error toast here since the auto-assignment was successful
        // Just log the error for debugging
              } finally {
          // Clear the flag after updates are complete
          this.isUpdatingChartOfAccount = false
          
          // Force validation component to re-render with updated data
          this.validationKey++
          
          // Wait for next tick to ensure validation component updates
          await this.$nextTick()
          
          // Add a small delay to ensure data propagation
          await new Promise(resolve => setTimeout(resolve, 100))
          
          console.log('Chart of account update completed, validation key updated to:', this.validationKey)
        }
    },
  },
};
</script>

<style scoped>
.create-btn {
  padding: 11px;
}
</style>
