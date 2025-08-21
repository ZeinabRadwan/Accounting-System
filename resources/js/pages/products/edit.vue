<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 v-if="form.itemName" class="card-title">
              {{ $t('Edit Item') }}
            </h3>
            <router-link :to="{ name: 'products.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="updateProduct" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-12 col-xl-12">
                  <div class="btn-group btn-group-toggle w-25" data-toggle="buttons">
                    <label 
                      class="btn btn-outline-custom"
                      :class="{ 'btn-custom-active': form.itemType === 'product' }">
                      <input type="radio" id="product" name="itemType" v-model="form.itemType" value="product" autocomplete="off">
                      {{ $t('Product') }}
                    </label>

                    <label 
                      class="btn btn-outline-custom"
                      :class="{ 'btn-custom-active': form.itemType === 'service' }">
                      <input type="radio" id="service" name="itemType" v-model="form.itemType" value="service" autocomplete="off">
                      {{ $t('Service') }}
                    </label>
                  </div>
                </div>

                <div class="form-group col-md-6 col-xl-6">
                  <label for="itemName">{{ $t('Item Name') }}
                    <span class="required">*</span></label>
                  <input id="itemName" v-model="form.itemName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('itemName') }" name="itemName"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="itemName" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <label for="itemModel">{{ $t('Item Model') }}</label>
                  <input id="itemModel" v-model="form.itemModel" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('itemModel') }" name="itemModel"
                    :placeholder="$t('Enter a model')" />
                  <has-error :form="form" field="itemModel" />
                </div>
                <div class="form-group col-md-6 col-xl-3">
                  <div class="input-group">
                    <label for="itemCode" class="col-md-12">{{ $t('Item code') }}
                      <span class="required">*</span></label>
                    <div class="input-group-prepend">
                      <span v-if="prefix" class="input-group-text" id="basic-addon1">{{ prefix }}</span>
                    </div>
                    <input v-model="form.itemCode" type="text" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('itemCode') }" name="itemCode"
                      :placeholder="$t('Enter item code')" aria-label="itemCode"
                      aria-describedby="basic-addon1" />
                    <has-error :form="form" field="itemCode" />
                  </div>
                </div>

                <div class="form-group col-md-6 col-xl-4">
                  <label for="barcodeSymbology">{{ $t('Barcode Symbology') }}
                    <span class="required">*</span></label>
                  <select id="barcodeSymbology" v-model="form.barcodeSymbology" class="form-control" :class="{
                    'is-invalid': form.errors.has('barcodeSymbology'),
                  }">
                    <option value="CODE128">CODE128</option>
                    <option value="CODE39">CODE39</option>
                    <option value="EAN8">EAN8</option>
                    <option value="EAN13">EAN13</option>
                    <option value="UPC">UPC</option>
                  </select>
                  <has-error :form="form" field="barcodeSymbology" />
                </div>

                <div v-if="items" class="form-group col-md-6 col-xl-4">
                  <label for="subCategory">{{ $t('Sub Category') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.subCategory" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                    :placeholder="$t('Select a category')" />
                  <has-error :form="form" field="subCategory" />
                </div>
                <div v-if="brands" class="form-group col-md-6 col-xl-4">
                  <label for="brand">{{ $t('Brand') }}</label>
                  <v-select v-model="form.brand" :options="brands" label="name"
                    :class="{ 'is-invalid': form.errors.has('brand') }" name="brand"
                    :placeholder="$t('Select a brand')" />
                  <has-error :form="form" field="brand" />
                </div>
                <div v-if="units" class="form-group col-md-6 col-xl-4">
                  <label for="itemUnit">{{ $t('Unit') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.itemUnit" :options="units" label="name"
                    :class="{ 'is-invalid': form.errors.has('itemUnit') }" name="itemUnit"
                    :placeholder="$t('Select a unit')" />
                  <has-error :form="form" field="itemUnit" />
                </div>
                <div v-if="taxes" class="form-group col-md-6 col-xl-4">
                  <label for="productTax">{{ $t('Product Tax') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.productTax" :options="taxes" label="name"
                    :class="{ 'is-invalid': form.errors.has('productTax') }" name="productTax"
                    :placeholder="$t('Select a tax')" @input="calculatePrice" />
                  <has-error :form="form" field="productTax" />
                </div>
                <div class="form-group col-md-6 col-xl-4">
                  <label for="taxType">{{ $t('Tax Type') }}
                    <span class="required">*</span></label>
                  <select id="taxType" v-model="form.taxType" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('taxType') }" @change="calculatePrice">
                    <option value="Exclusive">
                      {{ $t('Exclusive') }}
                    </option>
                    <option value="Inclusive">
                      {{ $t('Inclusive') }}
                    </option>
                  </select>
                  <has-error :form="form" field="taxType" />
                </div>
                <div class="form-group col-md-6" :class="form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'">
                  <label for="regularPrice">{{ $t('Regular Price') }}
                    <span class="required">*</span></label>
                  <input id="regularPrice" v-model="form.regularPrice" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('regularPrice') }" name="regularPrice"
                    :placeholder="$t('Enter regular price')
                      " @change="calculatePrice" @keyup="calculatePrice" />
                  <has-error :form="form" field="regularPrice" />
                </div>
                <div class="form-group col-md-6" :class="form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'">
                  <div class="input-group">
                    <label for="discount" class="col-md-12">{{
                      $t('Discount')
                    }}</label>
                    <input v-model="form.discount" type="number" min="0" max="100" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                      :placeholder="$t('Enter discount')" aria-label="discount"
                      aria-describedby="basic-addon1" @change="calculatePrice" @keyup="calculatePrice" />
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">%</span>
                    </div>
                    <has-error :form="form" field="discount" />
                  </div>
                </div>
                <div class="form-group col-md-6" :class="form.itemType === 'service' ? 'col-xl-3' : 'col-xl-4'">
                  <label for="sellingPrice">{{
                    $t('Selling Price')
                  }}</label>
                  <input id="sellingPrice" v-model="form.sellingPrice" type="number" class="form-control" readonly
                    :class="{ 'is-invalid': form.errors.has('sellingPrice') }" name="sellingPrice" :placeholder="$t('Enter sale price')
                        " />
                  <has-error :form="form" field="sellingPrice" />
                </div>
                <div v-if="form.itemType == 'service'" class="form-group col-md-6 col-xl-3">
                  <label for="servicePurchasePrice">{{ $t('Service Cost') }}
                    <span class="required">*</span></label>
                  <input id="servicePurchasePrice" v-model="form.servicePurchasePrice" type="number" step="any" min="0"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('servicePurchasePrice') }" name="servicePurchasePrice"
                    :placeholder="$t('Enter Service Cost')"/>
                  <has-error :form="form" field="servicePurchasePrice" />
                </div>

                <div v-if="form.itemType == 'product'" class="form-group col-md-12">
                  <div class="form-check">
                    <input v-model="form.isOpeningStock" type="checkbox" class="form-check-input" id="isOpeningStock" />
                    <label for="isOpeningStock">{{
                      $t('Add Opening Stock?')
                    }}</label>
                  </div>
                </div>

                <div v-if="form.isOpeningStock" class="row col-md-12">
                  <div class="form-group col-md-6 col-xl-6">
                    <label for="openingStockCount">{{ $t('Opening Stock Quantity') }}
                      <span class="required">*</span></label>
                    <input id="openingStockCount" v-model="form.openingStockCount" type="number" step="any" min="0"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('openingStockCount') }" name="openingStockCount"
                      :placeholder="$t('Enter opening stock quantity')" />
                    <has-error :form="form" field="openingStockCount" />
                  </div>
                  <div class="form-group col-md-6 col-xl-6">
                    <label for="openingStockUnitPrice">{{ $t('Opening Stock Unit Price') }}
                      <span class="required">*</span></label>
                    <input id="openingStockUnitPrice" v-model="form.openingStockUnitPrice" type="number" step="any" min="0"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('openingStockUnitPrice') }" name="openingStockUnitPrice"
                      :placeholder="$t('Enter opening stock unit price')" />
                    <has-error :form="form" field="openingStockUnitPrice" />
                  </div>
                </div>


                <div class="form-group col-md-12">
                  <label for="note">{{ $t('Note') }}</label>
                  <textarea id="note" v-model="form.note" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('note') }" name="companyName"
                    :placeholder="$t('Write your note here!')"></textarea>
                  <has-error :form="form" field="note" />
                </div>

                <div v-if="form.itemType == 'product'" class="form-group col-md-6 col-xl-4">
                  <label for="alertQuantity">{{
                    $t('Alert Quantity')
                  }}</label>
                  <input id="alertQuantity" v-model="form.alertQuantity" type="number" min="0" max="1000"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('alertQuantity') }" name="alertQuantity"
                    :placeholder="$t('Enter alert quantity')
                        " />
                  <has-error :form="form" field="alertQuantity" />
                </div>
                <div class="form-group col-md-6 col-xl-4">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">
                      {{ $t('Active') }}
                    </option>
                    <option value="0">
                      {{ $t('Inactive') }}
                    </option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
                
                <div class="form-group col-md-6 col-xl-4">
                  <label for="salesAccount">{{ $t('Sales Account') }}
                    <span class="required">*</span></label>
                  <v-select 
                    v-model="form.salesAccount" 
                    :options="salesAccounts" 
                    label="displayName"
                    :class="{ 'is-invalid': form.errors.has('salesAccount') }" 
                    name="salesAccount"
                    :placeholder="$t('Select sales account')"
                    :filterable="true"
                    :searchable="true"
                    :clearable="true"
                    @search="searchSalesAccounts"
                    :loading="salesAccountsLoading" />
                  <has-error :form="form" field="salesAccount" />
                  <small class="form-text text-muted">{{ $t('Select the account for recording sales revenue') }}</small>
                </div>

                <div class="form-group col-md-6 col-xl-4">
                  <label for="purchaseAccount">{{ $t('Purchase Account') }}
                    <span class="required">*</span></label>
                  <v-select 
                    v-model="form.purchaseAccount" 
                    :options="purchaseAccounts" 
                    label="displayName"
                    :class="{ 'is-invalid': form.errors.has('purchaseAccount') }" 
                    name="purchaseAccount"
                    :placeholder="$t('Select purchase account')"
                    :filterable="true"
                    :searchable="true"
                    :clearable="true"
                    @search="searchPurchaseAccounts"
                    :loading="purchaseAccountsLoading" />
                  <has-error :form="form" field="purchaseAccount" />
                  <small class="form-text text-muted">{{ $t('Select the account for recording purchase costs') }}</small>
                </div>
                
                <div class="form-group col-md-4">
                  <label for="image">{{ $t('Image') }}</label>
                  <div class="custom-file">
                    <input id="image" type="file" class="custom-file-input" name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                    <label class="custom-file-label" for="image">{{
                      $t('Choose file')
                    }}</label>
                  </div>
                  <has-error :form="form" field="image" />
                  <div class="bg-light mt-4 w-25">
                    <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
                  </div>
                </div>
              </div>
            </div>
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
    return { title: this.$t('Edit Item') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Edit Item',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Items',
        url: 'products.index',
      },
      {
        name: 'Edit',
        url: '',
      },
    ],
    url: null,
    urls: [],
    form: new Form({
      itemType: 'product',
      itemName: '',
      itemCode: '',
      itemModel: '',
      barcodeSymbology: 'code128',
      brand: '',
      productTax: '',
      taxType: 'percentage',
      subCategory: '',
      itemUnit: '',
      regularPrice: '',
      servicePurchasePrice: '',
      sellingPrice: '',
      isOpeningStock: false,
      openingStockCount: '',
      openingStockUnitPrice: '',
      discount: '',
      note: '',
      status: 'active',
      alertQuantity: '',
      image: null,
      salesAccount: null, // Will be populated from database in edit mode
      purchaseAccount: null, // Will be populated from database in edit mode
    }),
    options: [],
    prefix: '',
    units: [],
    brands: [],
    taxes: [],
    salesAccounts: [],
    purchaseAccounts: [],
    salesAccountsLoading: false,
    purchaseAccountsLoading: false,
  }),
  computed: {
    ...mapGetters('operations', ['items', 'appInfo']),
  },
  created() {
    this.getSubCategories()
    this.getUnits()
    this.getProduct()
    this.getBrands()
    this.getTaxes()
    this.getSalesAccounts()
    this.getPurchaseAccounts()
    this.prefix = this.appInfo.productPrefix
  },
  watch: {
    salesAccounts: {
      handler(newAccounts) {
        // If we have a selected sales account from DB, make sure it's properly set
        if (this.form.salesAccount && newAccounts.length > 0) {
          const foundAccount = newAccounts.find(acc => acc.id === this.form.salesAccount.id)
          if (foundAccount) {
            this.form.salesAccount = foundAccount
          }
        }
      },
      immediate: true
    },
    purchaseAccounts: {
      handler(newAccounts) {
        // If we have a selected purchase account from DB, make sure it's properly set
        if (this.form.purchaseAccount && newAccounts.length > 0) {
          const foundAccount = newAccounts.find(acc => acc.id === this.form.purchaseAccount.id)
          if (foundAccount) {
            this.form.purchaseAccount = foundAccount
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    // get all product categories
    async getSubCategories() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-product-sub-categories',
      })
    },

    // get all brands
    async getBrands() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-brands'
      )
      this.brands = data.data
    },

    // get all units
    async getUnits() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-units'
      )
      this.units = data.data
    },

    // get all taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + '/api/all-vat-rates'
      )
      this.taxes = data.data
    },

    // get sales accounts (Revenue accounts)
    async getSalesAccounts() {
      this.salesAccountsLoading = true
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/chart-of-accounts/for-products'
        )
        
        if (!data.data || data.data.length === 0) {
          // Fallback data for testing
          this.salesAccounts = [
            { id: 1, code: '4000', name: 'Revenue', displayName: '4000 - Revenue' },
            { id: 2, code: '4100', name: 'Product Sales', displayName: '4100 - Product Sales' },
            { id: 3, code: '4200', name: 'Service Revenue', displayName: '4200 - Service Revenue' }
          ]
          return
        }
        
        // Filter for Revenue accounts (type_id = 4 based on seeder)
        const revenueAccounts = data.data.filter(account => account.type_id === 4)
        
        if (revenueAccounts.length === 0) {
          this.salesAccounts = data.data.map(account => ({
            ...account,
            displayName: `${account.code} - ${account.name}`
          }))
        } else {
          this.salesAccounts = revenueAccounts.map(account => ({
            ...account,
            displayName: `${account.code} - ${account.name}`
          }))
        }
        
      } catch (error) {
        console.error('Error loading sales accounts:', error)
        // Fallback data for testing
        this.salesAccounts = [
          { id: 1, code: '4000', name: 'Revenue', displayName: '4000 - Revenue' },
          { id: 2, code: '4100', name: 'Product Sales', displayName: '4100 - Product Sales' },
          { id: 3, code: '4200', name: 'Service Revenue', displayName: '4200 - Service Revenue' }
        ]
      } finally {
        this.salesAccountsLoading = false
      }
    },

    // get purchase accounts (Expense accounts)
    async getPurchaseAccounts() {
      this.purchaseAccountsLoading = true
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/chart-of-accounts/for-products'
        )
        
        if (!data.data || data.data.length === 0) {
          // Fallback data for testing
          this.purchaseAccounts = [
            { id: 4, code: '5000', name: 'Expenses', displayName: '5000 - Expenses' },
            { id: 5, code: '5100', name: 'Cost of Goods Sold', displayName: '5100 - Cost of Goods Sold' },
            { id: 6, code: '5200', name: 'Operating Expenses', displayName: '5200 - Operating Expenses' }
          ]
          return
        }
        
        // Filter for Expense accounts (type_id = 5 based on seeder)
        const expenseAccounts = data.data.filter(account => account.type_id === 5)
        
        if (expenseAccounts.length === 0) {
          this.purchaseAccounts = data.data.map(account => ({
            ...account,
            displayName: `${account.code} - ${account.name}`
          }))
        } else {
          this.purchaseAccounts = expenseAccounts.map(account => ({
            ...account,
            displayName: `${account.code} - ${account.name}`
          }))
        }
        
      } catch (error) {
        console.error('Error loading purchase accounts:', error)
        // Fallback data for testing
        this.purchaseAccounts = [
          { id: 4, code: '5000', name: 'Expenses', displayName: '5000 - Expenses' },
          { id: 5, code: '5100', name: 'Cost of Goods Sold', displayName: '5100 - Cost of Goods Sold' },
          { id: 6, code: '5200', name: 'Operating Expenses', displayName: '5200 - Operating Expenses' }
        ]
      } finally {
        this.purchaseAccountsLoading = false
      }
    },

    // search sales accounts
    async searchSalesAccounts(searchTerm) {
      if (!searchTerm) return
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/chart-of-accounts/for-products'
        )
        // Filter for Revenue accounts and search term
        this.salesAccounts = data.data
          .filter(account => {
            return account.type_id === 4 && 
                   (account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    account.code.toLowerCase().includes(searchTerm.toLowerCase()))
          })
          .map(account => ({
            ...account,
            displayName: `${account.code} - ${account.name}`
          }))
      } catch (error) {
        console.error('Error searching sales accounts:', error)
      }
    },

    // search purchase accounts
    async searchPurchaseAccounts(searchTerm) {
      if (!searchTerm) return
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/chart-of-accounts/for-products'
        )
        // Filter for Expense accounts and search term
        this.purchaseAccounts = data.data
          .filter(account => {
            return account.type_id === 5 && 
                   (account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    account.code.toLowerCase().includes(searchTerm.toLowerCase()))
          })
          .map(account => ({
            ...account,
            displayName: `${account.code} - ${account.name}`
          }))
      } catch (error) {
        console.error('Error searching purchase accounts:', error)
      }
    },

    // get product by slug
    async getProduct() {
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/products/' + this.$route.params.slug
        )
        
        this.form.fill(data.data)
        
        // Set the selected accounts from the database
        if (data.data.salesAccount) {
          this.form.salesAccount = data.data.salesAccount
        }
        
        if (data.data.purchaseAccount) {
          this.form.purchaseAccount = data.data.purchaseAccount
        }
        
      } catch (error) {
        console.error('Error loading product:', error)
        this.$toastr.e('Error loading product')
      }
    },

    // calculate selling price
    calculatePrice() {
      if (this.form.sellingPrice && this.form.productTax && this.form.taxType) {
        let discount = 0
        if (this.form.discount && this.form.discount > 0) {
          discount = (this.form.discount / 100) * this.form.regularPrice
        }
        let currentPrice = this.form.regularPrice - discount

        let taxAmount = 0
        let totalTax = 0
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100
        }
        if (this.form.taxType == 'Exclusive') {
          totalTax = currentPrice * taxAmount
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount)
        }

        if (this.form.taxType == 'Exclusive') {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax
        } else {
          this.form.sellingPrice =
            (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax
        }
        return
      }
      return (this.form.sellingPrice = this.form.regularPrice)
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      if (
        file.size < 2111775 &&
        (file.type === 'image/jpeg' ||
          file.type === 'image/png' ||
          file.type === 'image/gif')
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result
        }
        reader.readAsDataURL(file)
        this.url = URL.createObjectURL(file)
      } else {
        Swal.fire(
          'error!',
          'Please select a valid thumbnail with size less than 2 MB',
          'error'
        )
      }
    },

    // update product
    async updateProduct() {
      // Validate that accounts are selected
      if (!this.form.salesAccount) {
        Swal.fire(
          this.$t('Error!'),
          this.$t('Please select a sales account'),
          'error'
        )
        return
      }
      
      if (!this.form.purchaseAccount) {
        Swal.fire(
          this.$t('Error!'),
          this.$t('Please select a purchase account'),
          'error'
        )
        return
      }

      await this.form
        .patch(
          window.location.origin + '/api/products/' + this.$route.params.slug
        )
        .then(() => {
          toast.fire({
            type: 'success',
            title: 'Product updated successfully 👍',
          })
          this.$router.push({ name: 'products.index' })
        })
        .catch(() => {
          toast.fire({
            type: 'error',
            title: 'Opps...something is wrong 😔',
          })
        })
    },
  },
}
</script>

<style>
.btn-outline-custom {
  color: #6366f1;
  border-color: #6366f1;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.btn-outline-custom:hover,
.btn-custom-active {
  background-color: #6366f1;
  color: #fff;
  border-color: #6366f1;
}

h1, h2 {
  font-weight: normal;
}
 
ul {
  list-style-type: none;
  padding: 0;
}
 
li {
  display: inline-block;
  margin: 0 10px;
}
 
a {
  color: #42b983;
}

/* Account selection styling */
.account-selection {
  border: 2px solid #e3e8ef;
  border-radius: 8px;
  padding: 15px;
  background-color: #f8fafc;
  margin-bottom: 20px;
}

.account-selection .form-group {
  margin-bottom: 15px;
}

.account-selection label {
  font-weight: 600;
  color: #374151;
}

.account-selection .form-text {
  color: #6b7280;
  font-size: 0.875rem;
}

/* Highlight required fields */
.required-field {
  border-left: 4px solid #ef4444;
  padding-left: 10px;
}

.required-field label {
  color: #dc2626;
}
</style> 