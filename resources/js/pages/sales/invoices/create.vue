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
          
          <div class="card-body">
            <!-- Remove ChartOfAccountValidation component from here -->
            
            <!-- Add the missing form element with submit handler -->
            <form @submit.prevent="saveInvoice">
              <!-- Client Selection with Auto-Assign -->
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t("Client") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select 
                          class="flex-grow-1" 
                          v-model="form.client" 
                          :options="items" 
                          label="name"
                          :class="{ 'is-invalid': form.errors.has('client') }" 
                          name="client"
                          :placeholder="$t('Select a client')"
                          @input="onClientChange"
                        />
                        <ClientCreateModal @reloadClients="getClients('latest')">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ClientCreateModal>
                      </div>
                      
                      <!-- Client Chart of Account Status - Keep this validation -->
                      <div class="client-status mt-2" v-if="form.client">
                        <div v-if="!form.client.chart_of_account_id" class="client-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Client needs Chart of Account') }}</span>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-outline-warning ml-2"
                            @click="autoAssignClientChartOfAccount"
                            :disabled="isAutoAssigningClient"
                          >
                            <i :class="isAutoAssigningClient ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                            {{ isAutoAssigningClient ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                        </div>
                        <div v-else class="client-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Client Chart of Account ready') }}</span>
                        </div>
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
                <!-- Information about columns -->
                <div class="col-12 mb-2">
                  <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i>
                    <strong>{{ $t("Column Information") }}:</strong>
                    <ul class="mb-0 mt-1">
                      <li><strong>{{ $t("Price") }}:</strong> {{ $t("Base price per unit (without tax) - this is what you edit") }}</li>
                      <li><strong>{{ $t("Total") }}:</strong> {{ $t("Price × Quantity (before discount and tax)") }}</li>
                      <li><strong>{{ $t("Total After Discount") }}:</strong> {{ $t("Total amount after applying item discount") }}</li>
                      <li><strong>{{ $t("VAT") }}:</strong> {{ $t("Tax amount calculated on discounted total") }}</li>
                      <li><strong>{{ $t("Total After VAT") }}:</strong> {{ $t("Final amount including tax (this is the subtotal)") }}</li>
                    </ul>
                  </div>
                </div>
                
                <div class="table-responsive table-custom w-95 m-auto">
                  <table class="table table-hover table-sm text-center">
                    <thead>
                      <tr>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Item Name") }}</th>
                        <th>{{ $t("Qty") }}</th>
                        <th>{{ $t("Price") }}</th>
                        <th>{{ $t("Total") }}</th>
                        <th>{{ $t("Discount") }}</th>
                        <th>{{ $t("Total After Discount") }}</th>
                        <th>{{ $t("VAT") }}</th>
                        <th>{{ $t("Total After VAT") }}</th>
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
                        <td>{{ (item.unitPrice * item.qty) | withCurrency }}</td>
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
                              :max="item.discountType == 'percentage' ? 100 : (item.unitPrice * item.qty)"
                              placeholder="0"
                              @change="calculateProductDiscount(i - 1)"
                              @keyup="calculateProductDiscount(i - 1)" />
                          </div>
                        </td>
                        <td>{{ ((item.unitPrice * item.qty) - (item.discountAmount || 0)) | withCurrency }}</td>
                        <td>{{ item.totalTax | withCurrency }}</td>
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
                          <strong>{{ form.productTotalTax | withCurrency }}</strong>
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
              <!-- Discount and Tax Section -->
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="discountType">{{ $t("Discount Type") }}</label>
                  <select id="discountType" v-model="form.discountType" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType"
                    @change="calculateSum" @keyup="calculateSum">
                    <option value="0">{{ $t("Fixed") }}</option>
                    <option value="1">{{ $t("Percentage") }}(%)</option>
                  </select>
                  <has-error :form="form" field="discountType" />
                </div>
                <div class="form-group col-md-4">
                  <label for="discount">{{ $t("Discount") }}
                    <span v-if="form.discountType == 1">(%)</span></label>
                  <div class="input-group">
                    <input id="discount" v-model="form.discount" type="number" step="any" min="0"
                      :max="form.discountType == 1 ? 100 : form.subTotal" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                      :placeholder="$t('Enter discount')" @change="calculateSum" @keyup="calculateSum" />
                    <div v-if="form.discountType == 1" class="input-group-append">
                      <span class="input-group-text">{{
                        form.totalDiscount | withCurrency
                      }}</span>
                    </div>
                  </div>
                  <has-error :form="form" field="discount" />
                </div>
                <div class="form-group col-md-4">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>

              <div class="row">
                <div v-if="taxes" class="form-group col-md-2">
                  <label for="orderTax">{{ $t("Invoice Tax") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" placeholder="Select a tax type"
                    @input="calculateSum" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div class="form-group col-md-2">
                  <label for="totalDiscount">{{ $t("Product Discounts") }}</label>
                  <input id="totalDiscount" v-model="form.totalDiscount" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalDiscount') }" name="totalDiscount" readonly />
                  <has-error :form="form" field="totalDiscount" />
                </div>
                <div class="form-group col-md-2">
                  <label for="globalDiscount">{{ $t("Global Discount") }}</label>
                  <input id="globalDiscount" v-model="globalDiscountDisplay" type="text" class="form-control" readonly />
                </div>
                <div v-if="taxes" class="form-group col-md-3">
                  <label for="totalTax">{{ $t("Total Tax") }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group col-md-3">
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
              
              <!-- Form Actions -->
              <div class="card-footer">
                <button :disabled="form.busy" class="btn btn-primary" type="submit">
                  <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i>
                  {{ form.busy ? $t("Saving...") : $t("Save") }}
                </button>
                <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
                  <i class="fas fa-power-off" /> {{ $t("Reset") }}
                </button>
              </div>
            </form>
            <!-- /.card-body -->
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
  },
  data() {
    return {
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
        discountType: 0, // 0 for fixed, 1 for percentage
        discount: 0,
        totalDiscount: 0,
      }),
      products: "",
      accounts: "",
      taxes: "",
      prefix: "",
      isUpdatingChartOfAccount: false, // Flag to prevent form submission during chart of account updates
      validationKey: 0, // Force re-render of validation component
      isAutoAssigningClient: false, // Add this back for the auto-assign button
    }
  },
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    
    // Display the calculated global discount amount
    globalDiscountDisplay() {
      if (this.form.discount > 0) {
        if (this.form.discountType == 1) { // Percentage
          return ((this.form.discount / 100) * this.form.subTotal).toFixed(2);
        } else { // Fixed
          return this.form.discount.toFixed(2);
        }
      }
      return '0.00';
    },
    
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0);
    },

    // Add computed property to check if chart of account is assigned
    hasChartOfAccount() {
      return !!this.form.client && !!this.form.client.chart_of_account_id;
    }
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
         if (typeof item.discountAmount === 'undefined') {
           item.discountAmount = 0;
         }
       });
     },

    // store item in array
    storeProduct(product) {
      // Check if product has sales account before adding
      if (!product.sales_account_id) {
        toast.fire({
          type: "warning",
          title: this.$t("Sales Account Required"),
          text: this.$t('Item "{{name}}" doesn\'t have a sales account. Please add a sales account to this item first.', { name: product.name }),
          confirmButtonText: this.$t("Edit Item"),
          showCancelButton: true,
          cancelButtonText: this.$t("Cancel"),
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to edit the product
            this.$router.push({ 
              name: 'products.edit', 
              params: { slug: product.slug } 
            });
          }
        });
        // Clear the product selection
        this.form.product = null;
        return;
      }

      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let quantity = 1;
      if (index === -1) {
        // Calculate tax amount
        let productTax =
          product.taxType == "Exclusive"
            ? this.roundToTwoDecimals(product.priceWithDiscount * (product.taxRate / 100))
            : this.roundToTwoDecimals(product.priceWithDiscount - (product.priceWithDiscount / (1 + product.taxRate / 100)));
        let totalTax = this.roundToTwoDecimals(productTax * quantity);

        // unitPrice should be WITHOUT tax (base price)
        // unitCost should be WITH tax (for display purposes)
        let unitPrice = product.taxType == "Exclusive" 
          ? this.roundToTwoDecimals(product.priceWithDiscount)  // Exclusive: base price
          : this.roundToTwoDecimals(product.priceWithDiscount - productTax); // Inclusive: base price

        let unitCost = product.taxType == "Exclusive"
          ? this.roundToTwoDecimals(unitPrice + productTax)  // Exclusive: base + tax
          : this.roundToTwoDecimals(product.priceWithDiscount); // Inclusive: already includes tax

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
          unitPrice: unitPrice,  // Price WITHOUT tax
          unitCost: unitCost,    // Price WITH tax (for display)
          totalPrice:
            product.taxType == "Exclusive"
              ? this.roundToTwoDecimals(quantity * (unitPrice + totalTax))
              : this.roundToTwoDecimals(quantity * unitCost),
          productTax: product.productTax > 0 ? this.roundToTwoDecimals(product.productTax) : 0,
          totalTax: totalTax,
          discount: 0,
          discountType: 'fixed',
          discountAmount: 0,
        });
      } else {
                 // Ensure existing product has discount properties
         if (typeof this.form.selectedProducts[index].discount === 'undefined') {
           this.form.selectedProducts[index].discount = 0;
         }
         if (typeof this.form.selectedProducts[index].discountType === 'undefined') {
           this.form.selectedProducts[index].discountType = 'fixed';
         }
         if (typeof this.form.selectedProducts[index].discountAmount === 'undefined') {
           this.form.selectedProducts[index].discountAmount = 0;
         }
      }
      this.generateItemTotal(quantity, "qty", index, "");
      // Ensure initial discount calculation
      if (index >= 0) {
        this.calculateProductDiscount(index);
      }
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
          // Price change - update unitPrice (price WITHOUT tax)
          item.unitPrice = Number(value);
          if (action == "increment") {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == "decrement") {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
          
          // Recalculate unitCost (price WITH tax) based on new unitPrice
          if (item.taxType == "Exclusive") {
            item.unitCost = this.roundToTwoDecimals(item.unitPrice + (item.unitPrice * (item.taxRate / 100)));
          } else {
            // For inclusive tax, unitCost = unitPrice + tax
            item.unitCost = this.roundToTwoDecimals(item.unitPrice + (item.unitPrice * (item.taxRate / 100)));
          }
        }
        
        // Calculate tax with proper decimal precision
        if (item.taxType == "Exclusive") {
          item.productTax = this.roundToTwoDecimals(item.unitPrice * (item.taxRate / 100));
        } else {
          item.productTax = this.roundToTwoDecimals(item.unitCost - item.unitPrice);
        }

        item.totalTax = this.roundToTwoDecimals(item.productTax * item.qty);

        // Calculate total price with proper decimal precision
        if (item.taxType == "Exclusive") {
          item.totalPrice = this.roundToTwoDecimals(item.qty * item.unitPrice + item.totalTax);
        } else {
          item.totalPrice = this.roundToTwoDecimals(item.qty * item.unitCost);
        }
        
        // Calculate unit cost with proper decimal precision
        if (item.taxType == "Exclusive") {
          item.unitCost = this.roundToTwoDecimals(Number(item.unitPrice) + Number(item.productTax));
        } else {
          item.unitCost = this.roundToTwoDecimals(item.unitPrice);
        }
        
        this.form.selectedProducts[index] = item;
        
        // Recalculate discount after price/quantity changes
        this.calculateProductDiscount(index);
      }
      this.calculateSum();
      return;
    },

    // Helper method to round to 2 decimal places
    roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },

    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let discountAmount = 0;
        
        if (item.discount > 0) {
          if (item.discountType == 'percentage') { // Percentage
            discountAmount = this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100);
          } else { // Fixed
            discountAmount = this.roundToTwoDecimals(Number(item.discount));
          }
        }
        
        // Store the calculated discount amount for this item
        item.discountAmount = discountAmount;
        
        // Calculate price after discount
        let priceAfterDiscount = this.roundToTwoDecimals((item.unitPrice * item.qty) - discountAmount);
        
        // Recalculate tax based on discounted price
        if (item.taxType == "Exclusive") {
          item.productTax = this.roundToTwoDecimals(priceAfterDiscount * (item.taxRate / 100));
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(priceAfterDiscount + item.totalTax);
        } else {
          // For inclusive tax, recalculate based on discounted unit price
          let discountedUnitPrice = this.roundToTwoDecimals(priceAfterDiscount / item.qty);
          item.unitPrice = discountedUnitPrice;
          item.unitCost = this.roundToTwoDecimals(discountedUnitPrice + (discountedUnitPrice * (item.taxRate / 100)));
          item.productTax = this.roundToTwoDecimals(item.unitCost - item.unitPrice);
          item.totalTax = this.roundToTwoDecimals(item.productTax * item.qty);
          item.totalPrice = this.roundToTwoDecimals(item.qty * item.unitCost);
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
      // calculate subtotal with proper decimal precision
      this.form.subTotal = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return prev + cur.totalPrice;
      }, 0));

      // calculate product tax with proper decimal precision
      this.form.productTotalTax = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return prev + cur.totalTax;
      }, 0));

      // calculate total product discount with proper decimal precision
      this.form.totalDiscount = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return prev + (cur.discountAmount || 0);
      }, 0));

      // calculate global discount with proper decimal precision
      let globalDiscount = 0;
      if (this.form.discount > 0) {
        if (this.form.discountType == 1) { // Percentage
          globalDiscount = this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal);
        } else { // Fixed
          globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
        }
      }

      // calculate invoice tax on amount AFTER global discount with proper decimal precision
      this.form.totalTax = 0;
      if (this.form.orderTax) {
        this.form.totalTax = this.roundToTwoDecimals(
          (this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)
        );
      }

      // calculate final total with proper decimal precision
      this.form.netTotal = this.roundToTwoDecimals(
        this.form.subTotal -
        globalDiscount +
        this.form.totalTax +
        Number(this.form.transportCost || 0)
      );
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
      try {
        // Ensure all monetary values are properly formatted to 2 decimal places before submission
        this.formatFormValues();
        
        if (!this.form.client || !this.form.client.chart_of_account_id) {
          toast.fire({
            type: "warning",
            title: this.$t("Chart of Account Required"),
            text: this.$t("Client must have a Chart of Account assigned before creating an invoice."),
          });
          return;
        }

        if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
          toast.fire({
            type: "warning",
            title: this.$t("No Products Selected"),
            text: this.$t("Please select at least one product to create an invoice."),
          });
          return;
        }

        // Validate that all calculations are correct
        if (!this.validateCalculations()) {
          toast.fire({
            type: "error",
            title: this.$t("Calculation Error"),
            text: this.$t("There was an error in the calculations. Please refresh the page and try again."),
          });
          return;
        }

        this.loading = true;
        const { data } = await this.form.post(
          window.location.origin + "/api/invoices"
        );
        this.loading = false;

        if (data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Success"),
            text: this.$t("Invoice created successfully"),
          });
          this.$router.push({ name: "invoices.show", params: { slug: data.data.slug } });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: data.message,
          });
        }
      } catch (error) {
        this.loading = false;
        if (error.response?.data?.message) {
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: error.response.data.message,
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("Something went wrong. Please try again."),
          });
        }
      }
    },

    // Format all form values to ensure proper decimal precision
    formatFormValues() {
      // Format selected products
      this.form.selectedProducts.forEach(item => {
        item.unitPrice = this.roundToTwoDecimals(Number(item.unitPrice));
        item.qty = Number(item.qty);
        item.productTax = this.roundToTwoDecimals(Number(item.productTax));
        item.totalTax = this.roundToTwoDecimals(Number(item.totalTax));
        item.totalPrice = this.roundToTwoDecimals(Number(item.totalPrice));
        item.unitCost = this.roundToTwoDecimals(Number(item.unitCost));
        item.discount = this.roundToTwoDecimals(Number(item.discount || 0));
        item.discountAmount = this.roundToTwoDecimals(Number(item.discountAmount || 0));
      });

      // Format form totals
      this.form.subTotal = this.roundToTwoDecimals(Number(this.form.subTotal));
      this.form.productTotalTax = this.roundToTwoDecimals(Number(this.form.productTotalTax));
      this.form.totalDiscount = this.roundToTwoDecimals(Number(this.form.totalDiscount));
      this.form.totalTax = this.roundToTwoDecimals(Number(this.form.totalTax));
      this.form.netTotal = this.roundToTwoDecimals(Number(this.form.netTotal));
      this.form.transportCost = this.roundToTwoDecimals(Number(this.form.transportCost || 0));
      this.form.discount = this.roundToTwoDecimals(Number(this.form.discount || 0));
    },

    // Validate that all calculations are mathematically correct
    validateCalculations() {
      try {
        // Validate subtotal
        const calculatedSubTotal = this.form.selectedProducts.reduce((total, item) => {
          return total + Number(item.totalPrice);
        }, 0);
        
        if (Math.abs(calculatedSubTotal - this.form.subTotal) > 0.01) {
          console.error('Subtotal validation failed:', calculatedSubTotal, 'vs', this.form.subTotal);
          return false;
        }

        // Validate product tax total
        const calculatedProductTax = this.form.selectedProducts.reduce((total, item) => {
          return total + Number(item.totalTax);
        }, 0);
        
        if (Math.abs(calculatedProductTax - this.form.productTotalTax) > 0.01) {
          console.error('Product tax validation failed:', calculatedProductTax, 'vs', this.form.productTotalTax);
          return false;
        }

        // Validate total discount
        const calculatedTotalDiscount = this.form.selectedProducts.reduce((total, item) => {
          return total + Number(item.discountAmount || 0);
        }, 0);
        
        if (Math.abs(calculatedTotalDiscount - this.form.totalDiscount) > 0.01) {
          console.error('Total discount validation failed:', calculatedTotalDiscount, 'vs', this.form.totalDiscount);
          return false;
        }

        // Validate net total
        const globalDiscount = this.form.discount > 0 
          ? (this.form.discountType == 1 
              ? this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal)
              : this.roundToTwoDecimals(Number(this.form.discount)))
          : 0;
        
        const calculatedNetTotal = this.roundToTwoDecimals(
          this.form.subTotal - globalDiscount + this.form.totalTax + Number(this.form.transportCost || 0)
        );
        
        if (Math.abs(calculatedNetTotal - this.form.netTotal) > 0.01) {
          console.error('Net total validation failed:', calculatedNetTotal, 'vs', this.form.netTotal);
          return false;
        }

        return true;
      } catch (error) {
        console.error('Validation error:', error);
        return false;
      }
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

    // Handle client change - Remove ONLY the automatic assignment
    onClientChange(client) {
      // Remove the automatic assignment logic
      // The auto-assign button will still work when clicked manually
    },

    // Add back the autoAssignClientChartOfAccount method
    async autoAssignClientChartOfAccount() {
      if (!this.form.client || this.isAutoAssigningClient) {
        return;
      }
      
      this.isAutoAssigningClient = true;
      
      try {
        // Store the current client slug before making the API call
        const currentClientSlug = this.form.client.slug;
        
        const response = await this.$http.post(`/api/clients/${this.form.client.slug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          // Update the client data with new chart of account
          this.form.client.chart_of_account_id = response.data.chart_of_account_id;
          
          // Refresh clients list to get updated data
          await this.getClients('default'); // Use 'default' instead of 'latest'
          
          // Restore the EXACT same client selection
          if (this.items) {
            const updatedClient = this.items.find(c => c.slug === currentClientSlug);
            if (updatedClient) {
              this.form.client = updatedClient;
            }
          }
          
          // Show success message
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
          // Force validation component to re-render
          this.validationKey++;
          
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
          title: this.$t("Failed to assign Chart of Account"),
          text: this.$t("Please try again or assign manually")
        });
      } finally {
        this.isAutoAssigningClient = false;
      }
    },
  },
};
</script>

<style scoped>
.create-btn {
  padding: 11px;
}

/* Improved warning and success styles */
.chart-account-warning,
.chart-account-success {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-account-warning {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
}

.chart-account-success {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border: 1px solid #28a745;
}

.warning-content,
.success-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon,
.success-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.warning-icon {
  color: #856404;
}

.success-icon {
  color: #155724;
}

.warning-text,
.success-text {
  flex-grow: 1;
}

.warning-title,
.success-title {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 14px;
}

.warning-title {
  color: #856404;
}

.success-title {
  color: #155724;
}

.warning-description,
.success-description {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
}

.warning-description {
  color: #856404;
}

.success-description {
  color: #155724;
}

.warning-action {
  flex-shrink: 0;
}

.btn-primary {
  background: #007bff;
  border-color: #007bff;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #0056b3;
  border-color: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .warning-content,
  .success-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .warning-action {
    width: 100%;
  }
  
  .btn-primary {
    width: 100%;
  }
}

/* Client status styles */
.client-status {
  font-size: 13px;
}

.client-warning,
.client-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.client-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.client-success {
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
