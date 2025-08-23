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
              {{ $t('Edit Invoice') }}
            </h3>
            <router-link :to="{ name: 'invoices.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateInvoice" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t('Client') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.client" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                    :placeholder="$t('Select a client')" />
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
                  <has-error :form="form" field="selectedProducts" />
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-95 m-auto">
                  <table class="table table-hover table-sm text-center">
                    <thead>
                      <tr>
                        <th>{{ $t('#') }}</th>
                        <th>{{ $t('Code') }}</th>
                        <th>{{ $t('Item Name') }}</th>
                        <th>{{ $t('Invoice Qty') }}</th>
                        <th v-if="form.totalInvoiceReturn > 0">
                          {{ $t('Return Qty') }}
                        </th>
                        <th>{{ $t('Price') }}</th>
                        <th>{{ $t('Unit Price') }}</th>
                        <th>{{ $t('Tax') }}</th>
                        <th>{{ $t('Discount') }}</th>
                        <th>{{ $t('Subtotal') }}</th>
                        <th class="text-right">{{ $t('Action') }}</th>
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
                              data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'decrement')" />
                            <input type="number" step="any" :id="`Qty-${i}`" :value="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required :min="item.minQty"
                              :max="item.itemType == 'product' ? Number(item.inventoryCount) + Number(item.oldQty) : null"
                              @change="generateItemTotal($event.target.value, 'qty', i - 1, '')"
                              @keyup="generateItemTotal($event.target.value, 'qty', i - 1, '')" placeholder="Quantity" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="generateItemTotal(item.qty, 'qty', i - 1, 'increment')" />
                          </div>
                        </td>
                        <td v-if="form.totalInvoiceReturn > 0">
                          {{ item.returnQty }}
                        </td>
                        <td class="text-center">
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="unitPrice"
                              @click="generateItemTotal(item.unitPrice, 'price', i - 1, 'decrement')" />
                            <input type="number" step="any" :id="`unitPrice-${i}`" :value="item.unitPrice"
                              name="unitPrice" class="quantity-field border-0 incrementor" required min="1"
                              @change="generateItemTotal($event.target.value, 'price', i - 1, '')"
                              @keyup="generateItemTotal($event.target.value, 'price', i - 1, '')" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="unitPrice"
                              @click="generateItemTotal(item.unitPrice, 'price', i - 1, 'increment')" />
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
                      <tr v-if="form.subTotal">
                        <td :colspan="form.totalInvoiceReturn > 0 ? 8 : 7" class="text-right">
                          <strong>{{ $t('Subtotal') }}</strong>
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
                    $t('Transport Cost')
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="1"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>
              <div class="row">
                <div v-if="taxes" class="form-group col-md-6" :class="form.totalInvoiceReturn ? 'col-lg-3' : 'col-lg-4'">
                  <label for="orderTax">{{ $t('Invoice Tax') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax"
                    :placeholder="$t('Invoice Tax')" @input="calculateSum" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes" class="form-group col-md-6" :class="form.totalInvoiceReturn ? 'col-lg-3' : 'col-lg-4'">
                  <label for="totalTax">{{ $t('Total Tax') }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
                <div v-if="form.totalInvoiceReturn" class="form-group col-md-6"
                  :class="form.totalInvoiceReturn ? 'col-lg-3' : 'col-lg-4'">
                  <label for="totalInvoiceReturn">{{
                    $t('Cost of Return Products')
                  }}</label>
                  <input id="totalInvoiceReturn" v-model="form.totalInvoiceReturn" type="number" step="any"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('purchaseReturn') }"
                    name="totalInvoiceReturn" readonly />
                  <has-error :form="form" field="purchaseReturn" />
                </div>
                <div class="form-group col-md-6" :class="form.totalInvoiceReturn ? 'col-lg-3' : 'col-lg-4'">
                  <label for="netTotal">{{ $t('Net Total') }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="text" class="form-control"
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
                  <label for="deliveryPlace">{{
                    $t('Delivery Place')
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-primary">
                <i class="fas fa-edit" /> {{ $t('Save changes') }}
              </v-button>
              <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
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
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Invoice') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Invoice',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Invoices',
        url: 'invoices.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    form: new Form({
      invoiceNo: '',
      client: '',
      reference: '',
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discountType: 0,
      discount: '',
      discountPercentage: '',
      totalDiscount: '',
      transportCost: '',
      orderTax: '',
      totalTax: 0,
      account: '',
      totalPaid: '',
      dueAmount: '',
      clientAdvance: 0,
      poReference: '',
      paymentTerms: '',
      deliveryPlace: '',
      totalInvoiceReturn: 0,
      note: '',
      date: '',
      status: 1,
    }),
    products: '',
    accounts: '',
    taxes: '',
    prefix: '',
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
  },
  created() {
    this.getClients()
    this.getTaxes()
    this.getProducts()
    this.getInvoice()
    this.prefix = this.appInfo.productPrefix
  },
  mounted() {
    // Ensure discount properties after data is loaded
    this.$nextTick(() => {
      this.ensureDiscountProperties()
    })
  },
  methods: {
    // get all clients
    async getClients() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-clients',
      })
    },

    // get taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-vat-rates'
      )
      this.taxes = data.data
    },

    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-products'
      )
      this.products = data.data
      this.products.sort(this.sortProducts)
    },

    // sort products
    sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1
      }
      if (Number(a.code) > Number(b.code)) {
        return 1
      }
      return 0
    },

    // get the invoice
    async getInvoice() {
      const { data } = await axios.get(
        window.location.origin + '/api/invoices/' + this.$route.params.slug
      )
      this.form.invoiceNo = data.data.invoiceNo
      this.form.client = data.data.client
      this.form.reference = data.data.reference
      this.form.poReference = data.data.poReference
      this.form.paymentTerms = data.data.paymentTerms
      this.form.deliveryPlace = data.data.deliveryPlace
      this.form.date = data.data.invoiceDate
      this.form.note = data.data.note
      this.form.status = data.data.status
      this.form.transportCost = data.data.transport
      this.form.totalTax = data.data.tax
      this.form.orderTax = data.data.taxRate
      this.form.netTotal = Number(data.data.invoiceTotal)
      this.form.subTotal = Number(data.data.subTotal)
      this.form.totalPaid = Number(data.data.totalPaid)
      this.form.dueAmount = Number(data.data.due)
      this.form.totalInvoiceReturn = Number(data.data.totalInvoiceReturn)
      this.form.selectedProducts = this.assignProducts(
        data.data.invoiceProducts
      )
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
          itemType: product.itemType,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          oldQty: 0,
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
          productTax: product.productTax > 0 ? product.productTax : 0,
          totalTax: totalTax,
          minQty: 1,
          discount: 0,
          discountType: 'fixed',
        })
      }
      this.generateItemTotal(qunatity, 'qty', index, '')
      return
    },

    // ensure all products have discount properties
    ensureDiscountProperties() {
      this.form.selectedProducts.forEach(item => {
        if (typeof item.discount === 'undefined') {
          item.discount = 0
        }
        if (typeof item.discountType === 'undefined') {
          item.discountType = 'fixed'
        }
      })
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
        item.productTax =
          item.taxType == 'Exclusive'
            ? item.unitPrice * (item.taxRate / 100)
            : item.unitPrice - item.unitPrice / (1 + item.taxRate / 100)

        item.totalTax = item.productTax * item.qty

        item.totalPrice =
          item.taxType == 'Exclusive'
            ? item.qty * item.unitPrice + item.totalTax
            : item.qty * item.unitPrice
        item.unitCost =
          item.taxType == 'Exclusive'
            ? Number(item.unitPrice) + Number(item.productTax)
            : item.unitPrice
        this.form.selectedProducts[index] = item
        
        // Recalculate discount after price/quantity changes
        this.calculateProductDiscount(index)
      }
      this.calculateSum()
      return
    },

    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index]
      if (item) {
        let discountAmount = 0
        
        if (item.discount > 0) {
          if (item.discountType == 'percentage') { // Percentage
            discountAmount = (item.unitPrice * item.qty * item.discount) / 100
          } else { // Fixed
            discountAmount = Number(item.discount)
          }
        }
        
        // Calculate price after discount
        let priceAfterDiscount = (item.unitPrice * item.qty) - discountAmount
        
        // Recalculate tax based on discounted price
        if (item.taxType == 'Exclusive') {
          item.productTax = priceAfterDiscount * (item.taxRate / 100)
          item.totalTax = item.productTax
          item.totalPrice = priceAfterDiscount + item.totalTax
        } else {
          item.productTax = priceAfterDiscount - (priceAfterDiscount / (1 + item.taxRate / 100))
          item.totalTax = item.productTax
          item.totalPrice = priceAfterDiscount
        }
        
        this.form.selectedProducts[index] = item
        this.calculateSum()
      }
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

      this.form.netTotal = this.form.subTotal

      // calculate quatation tax
      this.form.totalTax = 0
      if (this.form.orderTax) {
        this.form.totalTax =
          (this.form.orderTax.rate / 100) * this.form.subTotal
      }

      // calculate total
      this.form.netTotal =
        this.form.subTotal +
        Number(this.form.transportCost || 0) +
        this.form.totalTax

      // calculate due
      let paid = Number(this.form.totalPaid)
      if (paid <= this.form.netTotal) {
        this.form.dueAmount = (this.form.netTotal - paid).toFixed(2)
        this.form.clientAdvance = 0
      } else {
        this.form.clientAdvance = paid - this.form.netTotal
        this.form.dueAmount = 0
      }
      return
    },

    // get order products
    assignProducts(products) {
      this.form.selectedProducts = []
      for (var key in products) {
        let invoiceItem = products[key]
        this.form.selectedProducts.unshift({
          id: invoiceItem.productID,
          itemType: invoiceItem.productType,
          slug: invoiceItem.productSlug,
          name: invoiceItem.productName,
          code: invoiceItem.productCode,
          taxType: invoiceItem.taxType,
          taxRate: invoiceItem.taxRate,
          oldQty: invoiceItem.quantity,
          qty: invoiceItem.quantity,
          returnQty: invoiceItem.returnQty,
          inventoryCount: invoiceItem.inventoryCount,
          avgPurchasePrice: invoiceItem.purchasePrice,
          unitPrice: invoiceItem.salePrice,
          unitCost: invoiceItem.unitCost,
          totalPrice: invoiceItem.unitCostTotal,
          productTax: invoiceItem.unitTax,
          totalTax: invoiceItem.taxTotal,
          minQty: invoiceItem.returnQty,
          discount: invoiceItem.discount || 0,
          discountType: invoiceItem.discountType || 'fixed',
        })
      }
      this.calculateSum()
      return this.form.selectedProducts
    },

    // update invoice
    async updateInvoice() {
      await this.form
        .patch(
          window.location.origin + '/api/invoices/' + this.$route.params.slug
        )
        .then(({ data }) => {
          toast.fire({
            type: 'success',
            title: this.$t('Invoice updated successfully'),
          })
          this.$router.push({ name: 'invoices.show', params: { slug: data.data.slug }, })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: this.$t('Opps...something went wrong'),
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
