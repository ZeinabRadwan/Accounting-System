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
              {{ $t('Create quotation to invoice') }}
            </h3>
            <router-link :to="{ name: 'quotations.index' }" class="btn btn-info float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
            <div class="card-body">
              <!-- Chart of Account Validation -->
              <ChartOfAccountValidation
                :client="form.client"
                :products="form.selectedProducts"
                type="invoice"
                @chart-of-account-assigned="handleChartOfAccountAssigned"
              />
              <!-- form start -->
              <form role="form" @submit.prevent="createInvoice" @keydown="form.onKeydown($event)">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t('Client') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.client" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                    :placeholder="$t('Select a client')" />
                  
                  <!-- Client Chart of Account Status -->
                  <div class="client-status mt-2" v-if="form.client">
                    <div v-if="!form.client.chart_of_account_id" class="client-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Client needs Chart of Account') }}</span>
                    </div>
                    <div v-else class="client-success">
                      <i class="fas fa-check-circle text-success"></i>
                      <span class="ml-2">{{ $t('Client Chart of Account ready') }}</span>
                    </div>
                  </div>
                  
                  <has-error :form="form" field="client" />
                </div>
                <div class="form-group col-md-6">
                  <label for="reference">{{ $t('Reference') }}</label>
                  <input id="reference" v-model="form.reference" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reference') }" name="reference"
                    :placeholder="$t('Enter reference')" />
                  <has-error :form="form" field="reference" />
                </div>
              </div>
              <div class="row" v-if="products">
                <div class="form-group col-md-12">
                  <label for="product">{{ $t('Select Items') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.product" :options="products" label="label" :class="{
                    'is-invalid': form.errors.has('selectedProducts'),
                  }" name="product" :placeholder="$t('Search Items')"
                    @input="storeProduct(form.product)" />
                  
                  <!-- Product Chart of Account Status -->
                  <div class="product-status mt-2" v-if="form.selectedProducts && form.selectedProducts.length > 0">
                    <div v-if="!allProductsHaveSalesAccounts" class="product-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Some products need Sales Accounts assigned') }}</span>
                    </div>
                    <div v-else class="product-success">
                      <i class="fas fa-check-circle text-success"></i>
                      <span class="ml-2">{{ $t('All products have Sales Accounts assigned') }}</span>
                    </div>
                  </div>
                  
                  <has-error :form="form" field="selectedProducts" />
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-95 m-auto">
                  <table class="table table-hover table-sm">
                    <thead class="thead-light">
                      <tr>
                        <th>{{ $t('#') }}</th>
                        <th>{{ $t('Code') }}</th>
                        <th>{{ $t('Item Name') }}</th>
                        <th>{{ $t('Quantity') }}</th>
                        <th>{{ $t('Price') }}</th>
                        <th>{{ $t('Unit Cost') }}</th>
                        <th>{{ $t('Tax') }}</th>
                        <th>{{ $t('Subtotal') }}</th>
                        <th class="text-right">{{ $t('Action') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>{{ item.code | withPrefix(prefix) }}</td>
                        <td>
                          <span v-if="Number(item.inventoryCount) < Number(item.qty)
                            " v-tooltip="'Insufficient Stock'" class="badge badge-danger p-2">
                            <i class="fas fa-exclamation"></i>
                          </span>
                          <router-link :to="{
                            name: 'products.show',
                            params: { slug: item.slug },
                          }">
                            {{ item.name }}
                          </router-link>
                        </td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'decrement')" />
                            <input type="number" step="1" :id="`Qty-${i}`" :value="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required min="1" :max="item.inventoryCount"
                              @change="generateItemTotal($event.target.value, 'qty', i - 1, '')"
                              @keyup="generateItemTotal($event.target.value, 'qty', i - 1, '')"
                              :placeholder="$t('Quantity')" />
                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'increment')" />
                          </div>
                        </td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity"
                              @click="generateItemTotal(item.unitPrice, 'price', i - 1, 'decrement')" />
                            <input type="number" step="1" :id="`unitPrice-${i}`" :value="item.unitPrice" name="unitPrice"
                              class="quantity-field border-0 incrementor" required min="1" @change="
                                generateItemTotal($event.target.value, 'price', i - 1, '')"
                              @keyup="generateItemTotal($event.target.value, 'price', i - 1, '')" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity"
                              @click="generateItemTotal(item.unitPrice, 'price', i - 1, 'increment')" />
                          </div>
                        </td>
                        <td>{{ item.unitCost | withCurrency }}</td>
                        <td>{{ item.totalTax | withCurrency }}</td>
                        <td>{{ item.totalPrice | withCurrency }}</td>
                        <td class="text-right">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="6" class="text-right">
                          <strong> {{ $t('Total') }}: </strong>
                        </td>
                        <td>
                          <strong>{{
                            form.productTotalTax | withCurrency
                          }}</strong>
                        </td>
                        <td colspan="2">
                          <strong>{{ form.subTotal | withCurrency }}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="discountType">{{
                    $t('Discount Type')
                  }}</label>
                  <select id="discountType" v-model="form.discountType" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType" @change="calculateSum"
                    @keyup="calculateSum">
                    <option value="0">{{ $t('Fixed') }}</option>
                    <option value="1">{{ $t('Percentage') }}(%)</option>
                  </select>
                  <has-error :form="form" field="discountType" />
                </div>
                <div class="form-group" :class="form.discountType == 1 ? 'col-md-2' : 'col-md-4'" v-if="!isSaudiArabia">
                  <label for="discount">{{ $t('Discount') }}
                    <span v-if="form.discountType == 1">(%)</span></label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1"
                    :max="form.discountType == 1 ? 100 : form.netTotal" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div v-if="form.discountType == 1 && !isSaudiArabia" class="form-group col-md-2">
                  <label for="totalDiscount">{{
                    $t('Total discount')
                  }}</label>
                  <input id="totalDiscount" v-model="form.totalDiscount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalDiscount') }" name="totalDiscount" readonly />
                  <has-error :form="form" field="totalDiscount" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="transportCost">{{
                    $t('Transport Cost')
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="1"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>

              <div class="row">
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="orderTax">{{ $t('Invoice Tax') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax"
                    :placeholder="$t('Select a tax type')" @input="calculateSum" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="totalTax">{{ $t('Total Tax') }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group" :class="isSaudiArabia ? 'col-md-12' : 'col-md-4'">
                  <label for="netTotal">{{ $t('Net Total') }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="poReference">{{
                    $t('PO Reference')
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference"
                    :placeholder="$t('Enter PO reference')" />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-4">
                  <label for="paymentTerms">{{
                    $t('Payment Terms')
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms"
                    :placeholder="$t('Enter payment terms')" />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div class="form-group col-md-4">
                  <label for="addPayment">{{ $t('Add Payment?') }}</label>
                  <select id="addPayment" v-model="form.addPayment" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('addPayment') }" name="addPayment">
                    <option value="" selected disabled>
                      {{ $t('Select an option') }}
                    </option>
                    <option value="1">{{ $t('Yes') }}</option>
                    <option value="0">{{ $t('No') }}</option>
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
                  <label for="account">{{ $t('Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  
                  <!-- Account Chart of Account Status -->
                  <div class="account-status mt-2" v-if="form.account">
                    <div v-if="!form.account.chartOfAccountId" class="account-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Account needs Chart of Account') }}</span>
                    </div>
                    <div v-else class="account-success">
                      <i class="fas fa-check-circle text-success"></i>
                      <span class="ml-2">{{ $t('Account Chart of Account ready') }}</span>
                    </div>
                  </div>
                  
                  <has-error :form="form" field="account" />
                </div>
                <div class="form-group col-md-6">
                  <label for="paidAmount">{{ $t('Paid Amount')
                  }}<span class="required">*</span></label>
                  <input id="paidAmount" v-model="form.paidAmount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paidAmount') }" name="paidAmount" min="1"
                    :max="form.netTotal" :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="paidAmount" />
                </div>
                <div class="form-group col-md-6">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div>
                <div class="form-group col-md-6">
                  <label for="receiptNo">{{ $t('Receipt No') }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="deliveryPlace">{{
                    $t('Delivery Place')
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-md-4">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              
              <!-- Form buttons inside the form -->
              <div class="form-group text-right">
                <button 
                  type="submit"
                  :disabled="!isFormReady || form.busy"
                  class="btn btn-primary"
                  :class="{ 'btn-warning': !isFormReady }"
                >
                  <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
                  <i v-else :class="isFormReady ? 'fas fa-save' : 'fas fa-exclamation-triangle'" /> 
                  {{ form.busy ? $t('Saving...') : (isFormReady ? $t('Save') : $t('Complete Required Fields')) }}
                </button>
                <button type="reset" class="btn btn-info ml-2" @click="form.reset()">
                  <i class="fas fa-power-off" /> {{ $t('Reset') }}
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
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'
import ChartOfAccountValidation from '~/components/ChartOfAccountValidation'
import Swal from 'sweetalert2'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Quotation To Invoice') }
  },
  components: {
    ChartOfAccountValidation
  },
  data: () => ({
    breadcrumbsCurrent: 'Quotation To Invoice',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Quotations',
        url: 'quotations.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      client: '',
      reference: '',
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discountType: 0,
      discount: '',
      totalDiscount: '',
      orderTax: '',
      totalTax: 0,
      productTotalTax: 0,
      transportCost: '',
      date: new Date().toISOString().slice(0, 10),
      poReference: '',
      paymentTerms: '',
      deliveryPlace: '',
      addPayment: 0,
      account: '',
      paidAmount: '',
      receiptNo: '',
      note: '',
      status: 1,
    }),
    products: '',
    accounts: '',
    taxes: '',
    prefix: '',
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
    
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },
    
    // Add computed property to check if chart of account is assigned
    hasChartOfAccount() {
      return !!this.form.client && !!this.form.client.chart_of_account_id;
    },

    // Check if all products have sales accounts assigned
    allProductsHaveSalesAccounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true; // No products selected, so no validation needed
      }
      return this.form.selectedProducts.every(product => product.sales_account_id);
    },

    // Check if bank account has chart of account assigned (when payment is being added)
    hasBankAccountChartOfAccount() {
      if (this.form.addPayment != 1) {
        return true; // No payment being added, so no validation needed
      }
      return this.form.account && this.form.account.chartOfAccountId;
    },

    // Calculate due amount when payment is being added
    dueAmount() {
      if (this.form.addPayment != 1 || !this.form.paidAmount) {
        return this.form.netTotal;
      }
      return Math.max(0, this.form.netTotal - Number(this.form.paidAmount));
    },

    // Check if form is ready for submission
    isFormReady() {
      const basicRequirements = this.hasChartOfAccount && 
                               this.allProductsHaveSalesAccounts && 
                               this.hasBankAccountChartOfAccount &&
                               this.form.selectedProducts && 
                               this.form.selectedProducts.length > 0;
      
      // Debug logging
      console.log('Form validation debug:', {
        hasChartOfAccount: this.hasChartOfAccount,
        allProductsHaveSalesAccounts: this.allProductsHaveSalesAccounts,
        hasBankAccountChartOfAccount: this.hasBankAccountChartOfAccount,
        selectedProducts: this.form.selectedProducts?.length || 0,
        addPayment: this.form.addPayment,
        isPaymentValid: this.isPaymentValid,
        basicRequirements,
        client: this.form.client,
        products: this.form.selectedProducts
      });
      
      // If basic requirements are not met, form is not ready
      if (!basicRequirements) {
        return false;
      }
      
      // If payment is enabled, check payment fields
      if (this.form.addPayment == 1) {
        return this.isPaymentValid;
      }
      
      // If no payment required, form is ready
      return true;
    },

    // Check if payment fields are valid when payment is enabled
    isPaymentValid() {
      if (this.form.addPayment != 1) {
        return true; // No payment required
      }
      
      // Check if both fields have values and paid amount is greater than 0
      return this.form.account && 
             this.form.paidAmount && 
             Number(this.form.paidAmount) > 0;
    },

    // Check if payment fields are filled (for warning hints)
    arePaymentFieldsFilled() {
      if (this.form.addPayment != 1) {
        return true; // No payment required
      }
      
      // Only check if fields have values, not their validity
      return this.form.account && this.form.paidAmount;
    },
  },
  created() {
    this.getClients()
    this.getProducts()
    this.getTaxes()
    this.getQuotation()
    this.getAccounts()
    this.prefix = this.appInfo.productPrefix
    
    // Set default status based on country
    if (this.isSaudiArabia) {
      this.form.status = 0 // Inactive for Saudi Arabia
    } else {
      this.form.status = 1 // Active for other countries
    }
  },
  methods: {
    // get the quotation
    async getQuotation() {
      const { data } = await axios.get(
        window.location.origin + '/api/quotations/' + this.$route.params.slug
      )
      this.form.client = data.data.client
      this.form.reference = data.data.reference
      this.form.totalTax = data.data.totalTax
      this.form.orderTax = data.data.quotationTax
      this.form.discount =
        data.data.discountType == 0
          ? data.data.discount
          : data.data.discountPercentage
      this.form.discountPercentage = data.data.discountPercentage
      this.form.totalDiscount = data.data.discount
      this.form.transportCost = data.data.transport
      this.form.subTotal = data.data.subTotal
      this.form.deliveryPlace = data.data.deliveryPlace
      this.form.note = data.data.note
      // Set status based on country after loading quotation data
      if (this.isSaudiArabia) {
        this.form.status = 0 // Inactive for Saudi Arabia
      } else {
        this.form.status = data.data.status || 1 // Use quotation status or default to Active
      }
      this.form.selectedProducts = this.assignProducts(data.data.products)
      
      // Recalculate totals after loading data
      this.calculateSum()
      
      // Debug logging
      console.log('Quotation data loaded:', {
        client: this.form.client,
        selectedProducts: this.form.selectedProducts,
        isSaudiArabia: this.isSaudiArabia,
        status: this.form.status,
        hasChartOfAccount: this.hasChartOfAccount,
        allProductsHaveSalesAccounts: this.allProductsHaveSalesAccounts,
        isFormReady: this.isFormReady
      })
    },
    // get all clients
    async getClients() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-clients',
      })
    },

    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-products'
      )
      this.products = data.data
    },

    // get taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-vat-rates'
      )
      this.taxes = data.data
    },

    // get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-accounts'
      )
      this.accounts = data.data
    },

    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      )
      let qunatity = 1
      if (index === -1) {
        let productTax =
          product.taxType == 'Exclusive'
            ? product.priceWithDiscount * (product.taxRate / 100)
            : product.priceWithDiscount -
            product.priceWithDiscount / (1 + product.taxRate / 100)
        let totalTax = productTax * qunatity

        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          inventoryCount: product.inventoryCount,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.priceWithDiscount,
          unitCost:
            product.taxType == 'Exclusive'
              ? product.priceWithDiscount + productTax
              : product.priceWithDiscount,
          totalPrice:
            product.taxType == 'Exclusive'
              ? 1 * (product.priceWithDiscount + totalTax)
              : 1 * product.priceWithDiscount,
          productTax: product.productTax,
          totalTax: totalTax,
          sales_account_id: product.sales_account_id || null,
          selectedVatRate: product.selectedVatRate || null,
        })
      }
      this.generateItemTotal(qunatity, 'qty', index, '')
      return
    },

    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index]
      if (item) {
        if (type == 'qty') {
          item.qty = value
          if (action == 'increment') {
            item.qty = Number(item.qty) + 1
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1
            }
          }
        } else {
          item.unitPrice = value
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1
            }
          }
        }
        // Calculate VAT based on tax type
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on unit price
          item.productTax = item.unitPrice * (item.taxRate / 100)
          item.totalTax = item.productTax * item.qty
          item.totalPrice = item.qty * item.unitPrice + item.totalTax
        } else {
          // For inclusive tax: VAT is already included in unit price
          // Calculate VAT amount from the unit price
          item.productTax = item.unitPrice - item.unitPrice / (1 + item.taxRate / 100)
          item.totalTax = item.productTax * item.qty
          item.totalPrice = item.qty * item.unitPrice
        }
        item.unitCost =
          item.taxType == 'Exclusive'
            ? Number(item.unitPrice) + Number(item.productTax)
            : item.unitPrice
        this.form.selectedProducts[index] = item
      }
      this.calculateSum()
      return
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item)
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1)
      }
      this.calculateSum()
      return
    },

    // calculate sum
    calculateSum() {
      // calculate subtotal
      this.form.subTotal = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalPrice).toFixed(2))
      },
        0)

      // calculate product tax
      this.form.productTotalTax = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalTax).toFixed(2))
      },
        0)

      // calculate total product discount
      this.form.totalDiscount = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + (cur.discountAmount || 0)).toFixed(2))
      },
        0)

      // calculate global discount (skip for Saudi Arabia)
      let globalDiscount = 0
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) { // Percentage
          globalDiscount = Number(((this.form.discount / 100) * this.form.subTotal).toFixed(2))
        } else { // Fixed
          globalDiscount = Number(this.form.discount)
        }
      }

      // calculate invoice tax (skip for Saudi Arabia)
      this.form.totalTax = 0
      if (!this.isSaudiArabia && this.form.orderTax) {
        this.form.totalTax = Number(((this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)).toFixed(2))
      }

      // calculate final total
      if (this.isSaudiArabia) {
        // For Saudi Arabia: Net Total = SubTotal (no global discount, no invoice tax, no transport cost)
        this.form.netTotal = this.form.subTotal
      } else {
        // For other countries: Net Total = SubTotal - Global Discount + Invoice Tax + Transport Cost
        this.form.netTotal = Number((
          this.form.subTotal -
          globalDiscount +
          this.form.totalTax +
          Number(this.form.transportCost || 0)
        ).toFixed(2))
      }
      return
    },

    // get quotation products
    assignProducts(quotationProducts) {
      for (var key in quotationProducts) {
        let quotationProduct = quotationProducts[key]
        this.form.selectedProducts.unshift({
          id: quotationProduct.productID,
          slug: quotationProduct.productSlug,
          name: quotationProduct.productName,
          code: quotationProduct.productCode,
          taxType: quotationProduct.taxType,
          taxRate: quotationProduct.taxRate,
          qty: quotationProduct.quantity,
          inventoryCount: quotationProduct.inventoryCount,
          avgPurchasePrice: quotationProduct.avgPurchasePrice,
          unitPrice: quotationProduct.salePrice,
          unitCost: quotationProduct.unitCost,
          totalPrice: quotationProduct.unitCostTotal,
          productTax: quotationProduct.taxAmount,
          totalTax: quotationProduct.taxAmount * quotationProduct.quantity,
          sales_account_id: quotationProduct.sales_account_id || null,
          selectedVatRate: quotationProduct.selectedVatRate || null,
        })
      }
      this.calculateSum()
      return this.form.selectedProducts
    },

    // Validate payment fields
    validatePaymentFields() {
      const errors = [];
      
      if (this.form.addPayment == 1) {
        if (!this.form.account) {
          errors.push({
            type: "warning",
            title: this.$t("Account Required"),
            message: this.$t("Please select an account for payment."),
            field: "account"
          });
        }
        
        if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
          errors.push({
            type: "warning",
            title: this.$t("Paid Amount Required"),
            message: this.$t("Please enter a valid paid amount."),
            field: "paidAmount"
          });
        }
        
        if (Number(this.form.paidAmount) > this.form.netTotal) {
          errors.push({
            type: "warning",
            title: this.$t("Invalid Paid Amount"),
            message: this.$t("Paid amount cannot exceed the net total."),
            field: "paidAmount"
          });
        }
      }
      
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    },

    // Validate calculations
    validateCalculations() {
      try {
        // Basic validation that calculations are reasonable
        return this.form.netTotal > 0 && 
               this.form.subTotal >= 0 && 
               this.form.totalTax >= 0;
      } catch (error) {
        return false;
      }
    },

    // Show multiple validation errors
    showMultipleValidationErrors(errors) {
      if (errors.length === 1) {
        // Single error - show as regular toast
        toast.fire({
          type: errors[0].type,
          title: errors[0].title,
          text: errors[0].message,
          timer: errors[0].timer || 5000,
          timerProgressBar: errors[0].timerProgressBar || false
        });
      } else {
        // Multiple errors - show as alert with list
        const errorList = errors.map(err => `• ${err.message}`).join('\n');
        Swal.fire({
          type: 'warning',
          title: this.$t('Validation Errors'),
          text: this.$t('Please fix the following issues:'),
          html: `<div style="text-align: left; margin-top: 10px;">${errorList}</div>`,
          confirmButtonText: this.$t('OK'),
          timer: 10000,
          timerProgressBar: true
        });
      }
    },

    // Format form values before submission
    formatFormValues() {
      // Ensure all monetary values are properly formatted to 2 decimal places
      if (this.form.discount) {
        this.form.discount = Number(this.form.discount).toFixed(2);
      }
      if (this.form.transportCost) {
        this.form.transportCost = Number(this.form.transportCost).toFixed(2);
      }
      if (this.form.paidAmount) {
        this.form.paidAmount = Number(this.form.paidAmount).toFixed(2);
      }
      
      // Format product values
      if (this.form.selectedProducts) {
        this.form.selectedProducts.forEach(product => {
          product.unitPrice = Number(product.unitPrice).toFixed(2);
          product.totalPrice = Number(product.totalPrice).toFixed(2);
          product.totalTax = Number(product.totalTax).toFixed(2);
          product.productTax = Number(product.productTax).toFixed(2);
        });
      }
    },

    // create invoice
    async createInvoice() {
      console.log('createInvoice method called');
      try {
        // Ensure all monetary values are properly formatted to 2 decimal places before submission
        this.formatFormValues();
        
        // Collect all validation errors before submission
        const validationErrors = [];
        
        if (!this.form.client || !this.form.client.chart_of_account_id) {
          validationErrors.push({
            type: "warning",
            title: this.$t("Chart of Account Required"),
            message: this.$t("Client must have a Chart of Account assigned before creating an invoice."),
            field: "client"
          });
        }

        if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
          validationErrors.push({
            type: "warning",
            title: this.$t("No Products Selected"),
            message: this.$t("Please select at least one product to create an invoice."),
            field: "selectedProducts"
          });
        }

        // Validate that all products have sales accounts assigned
        const productsWithoutSalesAccount = this.form.selectedProducts.filter(product => !product.sales_account_id);
        if (productsWithoutSalesAccount.length > 0) {
          const productNames = productsWithoutSalesAccount.map(p => p.name || 'Unknown').join(', ');
          validationErrors.push({
            type: "warning",
            title: this.$t("Product Chart of Account Required"),
            message: this.$t("The following products must have Sales Accounts assigned: ") + productNames,
            field: "products",
            timer: 8000,
            timerProgressBar: true
          });
        }

        // Validate payment fields when "Add Payment" is set to "Yes"
        const paymentValidation = this.validatePaymentFields();
        if (!paymentValidation.isValid) {
          validationErrors.push(...paymentValidation.errors);
        }

        // Validate that all calculations are correct
        if (!this.validateCalculations()) {
          validationErrors.push({
            type: "error",
            title: this.$t("Calculation Error"),
            message: this.$t("There was an error in the calculations. Please refresh the page and try again."),
            field: "calculations"
          });
        }

        // If there are validation errors, show them all and return
        if (validationErrors.length > 0) {
          this.showMultipleValidationErrors(validationErrors);
          return;
        }

        await this.form
          .post(window.location.origin + '/api/invoices')
          .then(() => {
            toast.fire({
              type: 'success',
              title: this.$t('Invoice created successfully'),
            })
            this.$router.push({ name: 'invoices.index' })
          })
          .catch((error) => {
            console.error('Invoice creation error:', error);
            toast.fire({
              type: 'error',
              title: this.$t('Opps...something went wrong'),
            })
          })
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.fire({
          type: 'error',
          title: this.$t('Opps...something went wrong'),
        })
      }
    },

    // Handle chart of account assignment
    handleChartOfAccountAssigned(data) {
      if (data.entity === 'client') {
        // Refresh client data
        this.getClients();
      } else if (data.entity === 'product') {
        // Refresh product data
        this.getProducts();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-qty-input{
    display: flex;
    flex-wrap: nowrap;
}

.client-status, .product-status, .account-status {
  font-size: 0.875rem;
  
  .client-warning, .product-warning, .account-warning {
    color: #856404;
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    border-radius: 0.25rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }
  
  .client-success, .product-success, .account-success {
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 0.25rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
  }
}

.btn-warning {
  background-color: #ffc107 !important;
  border-color: #ffc107 !important;
  color: #212529 !important;
}

.btn-warning:hover {
  background-color: #e0a800 !important;
  border-color: #d39e00 !important;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}
</style>
