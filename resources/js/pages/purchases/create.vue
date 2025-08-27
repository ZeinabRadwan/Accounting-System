<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
              {{ $t("Create Purchase") }}
            </h3>
            <router-link :to="{ name: 'purchases.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
          <!-- /.card-header -->
            <div class="card-body">
              <!-- form start -->
              <form role="form" @submit.prevent="savePurchase" @keydown="form.onKeydown($event)">
              <div class="row" v-if="items && products">
                <div class="form-group col-md-12 col-xl-3">
                  <label for="supplier">{{ $t("Supplier") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.supplier" :options="items" label="name"
                          :class="{ 'is-invalid': form.errors.has('supplier') }" name="supplier"
                          :placeholder="$t('Select a supplier')" @input="onSupplierChange" />
                        <SupplierCreateModal @reloadSuppliers="getSuppliers">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </SupplierCreateModal>
                      </div>
                      
                      <!-- Supplier Chart of Account Status -->
                      <div class="supplier-status mt-2" v-if="form.supplier">
                        <div v-if="!form.supplier.chart_of_account_id" class="supplier-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Supplier needs Chart of Account') }}</span>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-outline-warning ml-2"
                            @click="autoAssignSupplierChartOfAccount"
                            :disabled="isAutoAssigningSupplier"
                          >
                            <i :class="isAutoAssigningSupplier ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                            {{ isAutoAssigningSupplier ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                        </div>
                        <div v-else class="supplier-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Supplier Chart of Account ready') }}</span>
                        </div>
                      </div>
                      
                      <!-- Debug info (remove in production) -->
                      <div v-if="form.supplier" class="mt-1 text-muted small">
                        Debug: chart_of_account_id = {{ form.supplier.chart_of_account_id || 'null' }}
                      </div>
                      
                      <has-error :form="form" field="supplier" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-12 col-xl-6">
                  <label for="product">{{ $t("Select Products") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select v-model="form.product" :options="products" label="label" class="flex-grow-1" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }" name="product" :placeholder="$t('Search products')"
                          @input="storeProduct(form.product)" />
                        <ProductCreateModal @reloadProducts="getProducts">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </div>
                      
                      <!-- Product Chart of Account Status -->
                      <div class="product-status mt-2" v-if="form.selectedProducts && form.selectedProducts.length > 0">
                        <div v-if="!form.selectedProducts[0].purchase_account_id" class="product-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('needs Purchase Account') }}</span>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-outline-warning ml-2"
                            @click="autoAssignProductChartOfAccount(form.selectedProducts[0])"
                            :disabled="isAutoAssigningProduct === form.selectedProducts[0].id"
                          >
                            <i :class="isAutoAssigningProduct === form.selectedProducts[0].id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                            {{ isAutoAssigningProduct === form.selectedProducts[0].id ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                        </div>
                        <div v-else class="product-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('Purchase Account ready') }}</span>
                        </div>
                      </div>
                      
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-100 m-auto">
                  <table class="table table-hover table-sm text-center">
                    <thead>
                      <tr>
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>{{ item.code | withPrefix(prefix) }}</td>
                        <td>
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

                            <input type="number" step="any" :id="`purchaseQty-${i}`" :value="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required min="1" 
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.qty`) }"
                              @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'qty',
                                  i - 1,
                                  ''
                                )
                                " @keyup="generateItemTotal($event.target.value, 'qty', i - 1, '')" />

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
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.qty`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.qty`) }}
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

                            <input type="number" step="any" :id="`unitPrice-${i}`" :value="item.unitPrice"
                              name="unitPrice" class="quantity-field border-0 incrementor" required min="0" 
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.unitPrice`) }"
                              @change="
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
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.unitPrice`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.unitPrice`) }}
                          </div>
                        </td>
                        <td>{{ (item.unitPrice * item.qty) | withCurrency }}</td>
                        <td>
                          <div class="input-group">
                            <select 
                              v-model="item.discountType" 
                              class="form-control form-control-sm" 
                              style="width: 60px;"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.discountType`) }"
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
                              :max="item.discountType == 'percentage' ? 100 : (item.unitPrice * item.qty)"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.discount`) }"
                              placeholder="0"
                              @change="calculateProductDiscount(i - 1)"
                              @keyup="calculateProductDiscount(i - 1)" />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.discount`) || form.errors.has(`selectedProducts.${i-1}.discountType`)" class="invalid-feedback d-block">
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discount`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discount`) }}</span>
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discountType`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discountType`) }}</span>
                          </div>
                        </td>
                        <td>{{ ((item.unitPrice * item.qty) - (item.discountAmount || 0)) | withCurrency }}</td>
                        <td>
                          <select 
                            v-model="item.selectedVatRate" 
                            class="form-control form-control-sm"
                            :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.selectedVatRate`) }"
                            @change="calculateProductVat(i - 1)"
                            style="min-width: 120px;">
                            <option value="">{{ $t('Select VAT') }}</option>
                            <option 
                              v-for="tax in taxes" 
                              :key="tax.id" 
                              :value="tax">
                              {{ tax.code }} ({{ tax.rate }}%)
                            </option>
                          </select>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.selectedVatRate`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.selectedVatRate`) }}
                          </div>
                        </td>
                        <td>
                          <span class="form-control-plaintext form-control-sm text-center">
                            {{ item.productTax | withCurrency }}
                          </span>
                        </td>
                        <td>{{ item.totalPrice | withCurrency }}</td>
                        <td class="text-right">
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
                          <strong>{{ totalUnitPrice | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong>{{ form.totalDiscount | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong>{{ (totalUnitPrice - form.totalDiscount) | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong></strong>
                        </td>
                        <td>
                          <strong>{{ form.totalProductTax | withCurrency }}</strong>
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
                <div class="form-group col-md-6 col-xl-3">
                  <label for="poReference">{{
                    $t("PO Reference")
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference" :placeholder="$t('Enter PO reference')
                      " />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="paymentTerms">{{
                    $t("Payment Terms")
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms" :placeholder="$t('Enter payment terms')
                      " />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-3">
                  <label for="orderTax">{{ $t("Purchase Tax") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" :placeholder="$t('Select a tax type')
                      " @input="updateTax" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-3">
                  <label for="totalTax">{{
                    $t("Total Tax")
                  }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row">
                <div class="form-group col-md-6 col-xl-3">
                  <label for="discount">{{
                    $t("Discount")
                  }}</label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1" :max="form.subTotal"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')
                      " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')
                        " @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="addPayment">{{ $t("Add Payment?") }}</label>
                  <select id="addPayment" v-model="form.addPayment" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('addPayment') }" name="addPayment">
                    <option value="" selected disabled>
                      {{ $t("Select an option") }}
                    </option>
                    <option value="1">{{ $t("Yes") }}</option>
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
                <div class="form-group col-md-6">
                  <label for="account">{{ $t("Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')" @input="updateBalance">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-6">
                  <label for="availableBalance">{{
                    $t("Available Balance")
                  }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" :class="{
                      'is-invalid': form.errors.has('availableBalance'),
                    }" name="availableBalance" readonly />
                  <has-error :form="form" field="availableBalance" />
                </div>
                <div class="form-group col-md-4">
                  <label for="totalPaid">{{ $t("Total Paid") }}
                    <span class="required">*</span></label>
                  <input id="totalPaid" v-model="form.totalPaid" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalPaid') }" name="totalPaid" min="1" :max="form.netTotal"
                    :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="totalPaid" />
                </div>
                <div class="form-group col-md-4">
                  <label for="chequeNo">{{ $t("Cheque No") }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div>
                <div class="form-group col-md-4">
                  <label for="receiptNo">{{ $t("Receipt No") }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="purchaseDate">{{
                    $t("Purchase Date")
                  }}</label>
                  <input id="purchaseDate" v-model="form.purchaseDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('purchaseDate') }" name="purchaseDate" />
                  <has-error :form="form" field="purchaseDate" />
                </div>
                <div class="form-group col-md-4">
                  <label for="poDate">{{
                    $t("PO Date")
                  }}</label>
                  <input id="poDate" v-model="form.poDate" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poDate') }" name="poDate" />
                  <has-error :form="form" field="poDate" />
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
import ProductCreateModal from '~/components/ProductCreateModal'
import SupplierCreateModal from '~/components/SupplierCreateModal'

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Purchase") };
  },
  components: {
    ToggleButton,
    ProductCreateModal,
    SupplierCreateModal
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Purchase",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Purchases",
        url: "purchases.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    isAutoAssigningSupplier: false,
    isAutoAssigningProduct: null,
    form: new Form({
      supplier: "",
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discount: "",
      transportCost: "",
      account: "",
      availableBalance: "",
      totalProductTax: 0,
      orderTax: "",
      totalTax: 0,
      totalPaid: "",
      poReference: "",
      paymentTerms: "",
      addPayment: "",
      chequeNo: "",
      receiptNo: "",
      poDate: new Date().toISOString().slice(0, 10),
      purchaseDate: new Date().toISOString().slice(0, 10),
      note: "",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
      totalDiscount: 0,
    }),
    products: "",
    accounts: "",
    taxes: "",
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0);
    },
  },
  created() {
    this.getSuppliers();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.prefix = this.appInfo.productPrefix;
  },
  methods: {
    // get all local suppliers
    async getSuppliers() {
      // Store the current supplier ID if one is selected
      const currentSupplierId = this.form.supplier ? this.form.supplier.id : null;
      
      await this.$store.dispatch("operations/allData", {
        path: "/api/all-suppliers",
      });
      
      // If we had a supplier selected, find and restore it
      if (currentSupplierId && this.items && this.items.length > 0) {
        const currentSupplier = this.items.find(s => s.id === currentSupplierId);
        if (currentSupplier) {
          this.form.supplier = currentSupplier;
        } else {
          // Fallback to first supplier if current one not found
          this.form.supplier = this.items[0];
        }
      } else {
        // No supplier was selected, use first one
        this.form.supplier = this.items[0];
      }
    },
    // get products
    async getProducts() {
      // Store the current selected products IDs
      const currentProductIds = this.form.selectedProducts ? this.form.selectedProducts.map(p => p.id) : [];
      
      const { data } = await axios.get(
        window.location.origin + "/api/all-products-not-service"
      );
      this.products = data.data;
      this.products.sort(this.sortProducts);
      
      // Update selected products with fresh data if they exist
      if (currentProductIds.length > 0 && this.form.selectedProducts) {
        this.form.selectedProducts.forEach(selectedProduct => {
          const freshProduct = this.products.find(p => p.id === selectedProduct.id);
          if (freshProduct) {
            // Update the product with fresh data while preserving user input
            Object.assign(selectedProduct, freshProduct);
          }
        });
      }
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
      this.updateTax();
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
          (account) => account.slug === defaultAccountSlug
        );
      }
      this.updateBalance();
    },
    // update available balance
    updateBalance() {
      this.form.availableBalance = 0;
      if (this.form.account) {
        this.form.availableBalance = this.form.account.availableBalance;
      }
      return;
    },
    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let quantity = 1;
      if (index === -1) {
        let purchasePrice =
          product.avgPurchasePrice > 0 ? product.avgPurchasePrice : 1;
        let productTax =
          product.taxType == "Exclusive"
            ? purchasePrice * (product.taxRate / 100)
            : purchasePrice - purchasePrice / (1 + product.taxRate / 100);
        let totalTax = productTax * quantity;
        // store product
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          qty: quantity,
          taxType: product.taxType,
          taxRate: product.taxRate,
          productTax: productTax,
          totalTax: productTax * quantity,
          unitPrice: purchasePrice,
          unitCost:
            product.taxType == "Exclusive"
              ? purchasePrice + totalTax
              : purchasePrice,
          totalPrice:
            product.taxType == "Exclusive"
              ? 1 * (purchasePrice + totalTax)
              : 1 * purchasePrice,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: null,
        });
      }
      this.generateItemTotal(quantity, "qty", index, "");
      this.updateTax();
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
      }
      this.updateTax();
      return;
    },
    
    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          item.discountAmount = Number(((item.unitPrice * item.qty * item.discount) / 100).toFixed(2));
        } else {
          item.discountAmount = Number(item.discount || 0);
        }
        
        // Recalculate totals
        this.generateItemTotal(index);
        this.calculateSum();
      }
    },

    // calculate product VAT
    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          // First try to use the product's default VAT rate, then fall back to available taxes
          if (item.productTax) {
            item.selectedVatRate = this.findMatchingVatRate(item.productTax);
          }
          
          // If no match found or no productTax, fall back to available taxes
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
          }
        }
        
        // Recalculate totals with new VAT rate
        this.generateItemTotal(index);
        this.calculateSum();
      }
    },

    // Helper method to find matching VAT rate
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(tax => tax.rate === productTax);
    },

    // return number to word
    toWord(){
      const toWords = new ToWords();
      let words = toWords.convert(this.form.subTotal);
      return words + ' Only';
    },
    
    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.updateTax();
      return;
    },
    // update tax
    updateTax() {
      this.form.totalTax = 0;
      if (
        this.form.orderTax &&
        this.form.orderTax.rate > 0 &&
        this.form.netTotal > 0
      ) {
        this.form.totalTax = Number(
          ((this.form.orderTax.rate / 100) * this.form.subTotal).toFixed(2)
        );
      }
      this.calculateSum();
      return;
    },
    // calculate sum
    calculateSum() {
      // Calculate total discount from all products
      this.form.totalDiscount = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + (cur.discountAmount || 0)).toFixed(2));
      }, 0);
      
      this.form.subTotal = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalPrice).toFixed(2));
      },
        0);
      this.form.totalProductTax = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalTax).toFixed(2));
      },
        0);
      if (this.form.subTotal > 0) {
        this.form.netTotal = Number(
          (
            this.form.subTotal +
            Number(this.form.totalTax) +
            Number(this.form.transportCost) -
            Number(this.form.discount)
          ).toFixed(2)
        );
      }
      return;
    },
    // save purchase
    async savePurchase() {
      await this.form
        .post(window.location.origin + "/api/purchases")
        .then(({ data }) => {
          toast.fire({
            type: "success",
            title: this.$t("Purchase added successfully"),
          });
          this.$router.push({
            name: "purchases.show",
            params: { slug: data.data.slug },
          });
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
        });
    },

    // Auto-assign Chart of Account for supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form.supplier || this.isAutoAssigningSupplier) {
        return;
      }
      
      this.isAutoAssigningSupplier = true;
      
      try {
        const response = await this.$http.post(`/api/suppliers/${this.form.supplier.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          console.log('Auto-assign response:', response.data);
          console.log('Current supplier before update:', this.form.supplier);
          
          // Update the supplier data with new chart of account
          this.form.supplier.chart_of_account_id = response.data.chart_of_account_id;
          
          console.log('Supplier after updating chart_of_account_id:', this.form.supplier);
          
          // Add a small delay to ensure the backend has processed the update
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Refresh suppliers list to get updated data
          await this.getSuppliers();
          
          // Find and update the current supplier with the refreshed data
          if (this.items && this.items.length > 0) {
            const updatedSupplier = this.items.find(s => s.id === this.form.supplier.id);
            if (updatedSupplier) {
              console.log('Found updated supplier in items:', updatedSupplier);
              // Update the form supplier with all the latest data
              this.form.supplier = { ...updatedSupplier };
              console.log('Form supplier after refresh:', this.form.supplier);
            }
          }
          
          // Force Vue to re-render the component
          this.$nextTick(() => {
            this.$forceUpdate();
          });
          
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: response.data.message || this.$t("Please try again or assign manually")
          });
        }
        
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningSupplier = false;
      }
    },

    // Auto-assign Chart of Account for a specific product
    async autoAssignProductChartOfAccount(product) {
      if (!product || this.isAutoAssigningProduct === product.id) {
        return;
      }
      
      this.isAutoAssigningProduct = product.id;
      
      try {
        const response = await this.$http.post(`/api/products/${product.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          // Update the product data with new chart of account
          product.purchase_account_id = response.data.purchase_account_id;
          
          // Add a small delay to ensure the backend has processed the update
          await new Promise(resolve => setTimeout(resolve, 500));
          
          // Refresh products list to get updated data
          await this.getProducts();
          
          // Find and update the current product with the refreshed data
          if (this.products && this.products.length > 0) {
            const updatedProduct = this.products.find(p => p.id === product.id);
            if (updatedProduct) {
              // Update the product with all the latest data
              Object.assign(product, updatedProduct);
            }
          }
          
          // Force Vue to re-render the component
          this.$nextTick(() => {
            this.$forceUpdate();
          });
          
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: response.data.message || this.$t("Please try again or assign manually")
          });
        }
        
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningProduct = false;
      }
    },

    // Handle supplier change
    onSupplierChange() {
      // Clear any previous errors
      this.form.errors.clear('supplier');
    },
  },
};
</script>

<style scoped>
.create-btn {
  padding: 11px;
}

/* Supplier status styles */
.supplier-status {
  font-size: 13px;
}

.supplier-warning,
.supplier-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.supplier-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.supplier-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Product status styles */
.product-status {
  font-size: 13px;
}

.product-warning,
.product-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.product-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.product-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.btn-outline-warning {
  border-color: #ffc107;
  color: #856404;
  font-size: 12px;
  padding: 4px 8px;
}

.btn-outline-warning:hover {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}

.btn-outline-warning:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
