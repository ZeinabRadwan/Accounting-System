<template>
  <form :id="formId" role="form" @keydown="form.onKeydown($event)">
    <!-- Item Type Selection Section -->
    <div class="form-card">
      <div class="card-header">
        <h5 class="section-title">
          <i class="fas fa-cube mr-2"></i>
          {{ $t("Item Type") }}
        </h5>
      </div>
      <div class="card-body">
        <div class="item-type-selector">
          <label class="item-type-option" :class="{ 'active': form.itemType === 'product' }">
            <input type="radio" id="product" name="itemType" v-model="form.itemType" value="product" autocomplete="off">
            <div class="option-content">
              <i class="fas fa-cube"></i>
              <span>{{ $t("Product") }}</span>
            </div>
          </label>
          <label class="item-type-option" :class="{ 'active': form.itemType === 'service' }">
            <input type="radio" id="service" name="itemType" v-model="form.itemType" value="service" autocomplete="off">
            <div class="option-content">
              <i class="fas fa-cogs"></i>
              <span>{{ $t("Service") }}</span>
            </div>
          </label>
        </div>
        <has-error :form="form" field="itemType" />
      </div>
    </div>

    <!-- Main Form Section -->
    <div class="form-card">
      <div class="card-header">
        <h5 class="section-title">
          <i class="fas fa-info-circle mr-2"></i>
          {{ $t("Product Details") }}
        </h5>
      </div>
      <div class="card-body">
        <div class="row">
          <!-- Left Column -->
          <div class="col-md-6">
            <div class="form-group">
              <label for="itemName">{{ $t("Item Name") }} <span class="required">*</span></label>
              <input id="itemName" v-model="form.itemName" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('itemName') }" name="itemName"
                :placeholder="$t('Enter a name')" />
              <has-error :form="form" field="itemName" />
            </div>

            <div class="form-group">
              <label for="itemCode">{{ $t("Item Code") }} <span class="required">*</span></label>
              <div class="input-group">
                <span v-if="prefix" class="input-group-text">{{ prefix }}</span>
                <input v-model="form.itemCode" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('itemCode') }" name="itemCode"
                  :placeholder="$t('Enter item code')" readonly />
              </div>
              <has-error :form="form" field="itemCode" />
            </div>

            <div class="form-group">
              <label for="barcodeSymbology">{{ $t("Barcode Symbology") }} <span class="required">*</span></label>
              <select id="barcodeSymbology" v-model="form.barcodeSymbology" class="form-control"
                :class="{ 'is-invalid': form.errors.has('barcodeSymbology') }" name="barcodeSymbology">
                <option v-for="opt in barcodeSymbologyOptions" :key="opt" :value="opt">{{ opt }}</option>
              </select>
              <has-error :form="form" field="barcodeSymbology" />
            </div>

            <div class="form-group">
              <label for="subCategory">{{ $t("Category") }} <span class="required">*</span></label>
              <v-select v-model="form.subCategory" :options="categories" label="name"
                :class="{ 'is-invalid': form.errors.has('subCategory') }" name="subCategory"
                :placeholder="$t('Select a category')" />
              <has-error :form="form" field="subCategory" />
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="itemUnit">{{ $t("Unit") }} <span class="required">*</span></label>
                  <v-select v-model="form.itemUnit" :options="units" label="name"
                    :class="{ 'is-invalid': form.errors.has('itemUnit') }" name="itemUnit"
                    :placeholder="$t('Select a unit')" />
                  <small class="form-text text-muted">{{ $t("Base unit (conversion factor = 1)") }}</small>
                  <has-error :form="form" field="itemUnit" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="productTax">{{ $t("Tax Rate") }} <span class="required">*</span></label>
                  <v-select v-model="form.productTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('productTax') }" name="productTax"
                    :placeholder="$t('Select a tax')" @input="calculatePrice" />
                  <has-error :form="form" field="productTax" />
                </div>
              </div>
            </div>

            <!-- Unit of Measurement conversions -->
            <div class="form-group mt-3">
              <label class="d-block">{{ $t("Unit conversions") }}</label>
              <small class="form-text text-muted mb-2">{{ $t("Link additional units with conversion factor relative to base unit (e.g. 1 Carton = 12 Pieces)") }}</small>
              <div class="table-responsive">
                <table class="table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th>{{ $t("Unit") }}</th>
                      <th style="width: 180px;">{{ $t("Conversion factor") }}</th>
                      <th style="width: 80px;"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span v-if="form.itemUnit">{{ (form.itemUnit && form.itemUnit.name) ? form.itemUnit.name : form.itemUnit }}</span>
                        <span v-else class="text-muted">—</span>
                      </td>
                      <td>1 <span class="text-muted">({{ $t("base") }})</span></td>
                      <td></td>
                    </tr>
                    <tr v-for="(row, index) in form.unitConversions" :key="'uc-'+index">
                      <td>
                        <v-select v-model="row.unit" :options="additionalUnitOptions(index)" label="name"
                          :class="{ 'is-invalid': form.errors.has('unitConversions.'+index+'.conversion_factor') || (row.unit && !isValidConversionFactor(row.conversion_factor)) }"
                          :placeholder="$t('Select a unit')" />
                      </td>
                      <td>
                        <input v-model.number="row.conversion_factor" type="number" step="any" min="0.0001" class="form-control form-control-sm"
                          :class="{ 'is-invalid': !isValidConversionFactor(row.conversion_factor) && row.conversion_factor !== '' }"
                          :placeholder="$t('e.g. 12')" />
                        <small v-if="row.unit" class="form-text text-muted">1 {{ row.unit.name }} = {{ row.conversion_factor || '?' }} {{ baseUnitName }}</small>
                      </td>
                      <td>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="removeUnitConversion(index)" :title="$t('Remove')">
                          <i class="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button type="button" class="btn btn-sm btn-outline-primary" @click="addUnitConversion">
                <i class="fas fa-plus mr-1"></i>{{ $t("Add unit") }}
              </button>
              <has-error :form="form" field="unitConversions" />
            </div>
          </div>

          <!-- Right Column -->
          <div class="col-md-6">
            <div class="form-group">
              <label for="itemModel">{{ $t("Model") }}</label>
              <input id="itemModel" v-model="form.itemModel" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('itemModel') }" name="itemModel"
                :placeholder="$t('Enter a model')" />
              <has-error :form="form" field="itemModel" />
            </div>

            <div class="form-group">
              <label for="regularPrice">{{ $t("Price") }} <span class="required">*</span></label>
              <input id="regularPrice" v-model="form.regularPrice" type="number" step="any" min="0" class="form-control"
                :class="{ 'is-invalid': form.errors.has('regularPrice') }" name="regularPrice"
                :placeholder="$t('Enter price')" @change="calculatePrice" @keyup="calculatePrice" />
              <has-error :form="form" field="regularPrice" />
            </div>

            <div class="form-group">
              <label for="discount">{{ $t("Discount (%)") }}</label>
              <input v-model="form.discount" type="number" min="0" max="100" class="form-control"
                :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                :placeholder="$t('Enter discount')" @change="calculatePrice" @keyup="calculatePrice" />
              <has-error :form="form" field="discount" />
            </div>

            <div class="form-group" style="display: none;">
              <label for="sellingPrice">{{ $t("Final Price") }}</label>
              <input id="sellingPrice" v-model="form.sellingPrice" type="number" class="form-control" readonly
                :class="{ 'is-invalid': form.errors.has('sellingPrice') }" name="sellingPrice"
                :placeholder="$t('Calculated automatically')" />
              <has-error :form="form" field="sellingPrice" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conditional Fields Section -->
    <div class="form-card" v-if="form.itemType === 'product'">
      <div class="card-header">
        <h5 class="section-title">
          <i class="fas fa-warehouse mr-2"></i>
          {{ $t("Stock Information") }}
        </h5>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="openingStockEntryUnit">{{ $t("Opening Stock") }}</label>
              <div class="row no-gutters">
                <div class="col-5 pr-1">
                  <v-select
                    id="openingStockEntryUnit"
                    v-model="form.openingStockEntryUnit"
                    :options="openingStockUnitOptions"
                    label="name"
                    :class="{ 'is-invalid': form.errors.has('openingStockCount') || openingStockEntryUnitError }"
                    :placeholder="$t('Select unit')"
                    @input="updateOpeningStockFromEntry"
                  />
                </div>
                <div class="col-7 pl-1">
                  <input
                    id="openingStockEntryQuantity"
                    v-model="form.openingStockEntryQuantity"
                    type="number"
                    step="any"
                    min="0"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('openingStockCount') || openingStockEntryUnitError }"
                    :placeholder="$t('Quantity')"
                    @input="updateOpeningStockFromEntry"
                    @change="updateOpeningStockFromEntry"
                  />
                </div>
              </div>
              <small v-if="form.openingStockCount !== '' && form.openingStockCount !== null && baseUnitName" class="form-text text-muted">
                {{ $t("Stored as") }} {{ form.openingStockCount }} {{ baseUnitName }}
              </small>
              <has-error :form="form" field="openingStockCount" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="alertQuantity">{{ $t("Alert Quantity") }}</label>
              <input id="alertQuantity" v-model="form.alertQuantity" type="number" min="0" max="1000"
                class="form-control" :class="{ 'is-invalid': form.errors.has('alertQuantity') }" name="alertQuantity"
                :placeholder="$t('Enter alert quantity')" />
              <has-error :form="form" field="alertQuantity" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="openingStockUnitPrice">{{ $t("Purchase Price") }}</label>
              <input id="openingStockUnitPrice" v-model="form.openingStockUnitPrice" type="number" step="any" min="0"
                class="form-control" :class="{ 'is-invalid': form.errors.has('openingStockUnitPrice') }"
                name="openingStockUnitPrice" :placeholder="$t('Enter purchase price')" />
              <has-error :form="form" field="openingStockUnitPrice" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Chart of Accounts Section - Hidden, auto-assigned -->
    <div class="form-card" style="display: none;">
      <div class="card-header">
        <h5 class="section-title">
          <i class="fas fa-chart-line mr-2"></i>
          {{ $t("Chart of Accounts") }}
        </h5>
      </div>
      <div class="card-body">
        <!-- Create Mode: Show toggle switches for override -->
        <div v-if="!isEditMode">
          <!-- Override Automatic Routing Toggle Switches -->
          <div v-if="isSalesAccountAutomatic || isPurchaseAccountAutomatic" class="row mb-3">
            <div class="col-12">
              <div class="alert alert-info d-flex align-items-center">
                <i class="fas fa-info-circle mr-2"></i>
                <span>{{ $t("Automatic account assignment is enabled") }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <!-- Sales Account -->
              <div class="form-group">
                <div class="account-label-row">
                  <label for="salesAccountId" class="account-label">
                    {{ $t("Sales Account") }}
                    <span v-if="!isSalesAccountAutomatic || form.overrideSalesAccount" class="required">*</span>
                  </label>

                  <!-- Toggle Switch (shown when automatic routing is enabled) -->
                  <div v-if="isSalesAccountAutomatic" class="toggle-switch-container">
                    <label class="toggle-switch-label">
                      <span class="toggle-switch-wrapper">
                        <input type="checkbox" v-model="form.overrideSalesAccount" class="toggle-switch-input"
                          @change="onOverrideSalesAccountChange" />
                        <span class="toggle-switch-slider"></span>
                      </span>
                      <span class="toggle-switch-text">
                        {{ form.overrideSalesAccount ? $t("Manual") : $t("Automatic") }}
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Manual Selection (shown when override is checked or not automatic) -->
                <div v-if="!isSalesAccountAutomatic || form.overrideSalesAccount" class="form-group">
                  <div class="d-flex align-items-center">
                    <v-select v-model="form.salesAccountId" :options="chartOfAccounts" label="name"
                      :reduce="option => option.id" :class="{ 'is-invalid': form.errors.has('salesAccountId') }"
                      name="salesAccountId" :placeholder="$t('Select sales account')" class="flex-grow-1 mr-2"
                      required />
                  </div>
                  <has-error :form="form" field="salesAccountId" />
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <!-- Purchase Account -->
              <div class="form-group">
                <div class="account-label-row">
                  <label for="purchaseAccountId" class="account-label">
                    {{ $t("Purchase Account") }}
                    <span v-if="!isPurchaseAccountAutomatic || form.overridePurchaseAccount" class="required">*</span>
                  </label>

                  <!-- Toggle Switch (shown when automatic routing is enabled) -->
                  <div v-if="isPurchaseAccountAutomatic" class="toggle-switch-container">
                    <label class="toggle-switch-label">
                      <span class="toggle-switch-wrapper">
                        <input type="checkbox" v-model="form.overridePurchaseAccount" class="toggle-switch-input"
                          @change="onOverridePurchaseAccountChange" />
                        <span class="toggle-switch-slider"></span>
                      </span>
                      <span class="toggle-switch-text">
                        {{ form.overridePurchaseAccount ? $t("Manual") : $t("Automatic") }}
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Manual Selection (shown when override is checked or not automatic) -->
                <div v-if="!isPurchaseAccountAutomatic || form.overridePurchaseAccount" class="form-group">
                  <div class="d-flex align-items-center">
                    <v-select v-model="form.purchaseAccountId" :options="chartOfAccounts" label="name"
                      :reduce="option => option.id" :class="{ 'is-invalid': form.errors.has('purchaseAccountId') }"
                      name="purchaseAccountId" :placeholder="$t('Select purchase account')" class="flex-grow-1 mr-2"
                      required />
                  </div>
                  <has-error :form="form" field="purchaseAccountId" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Edit Mode: Direct account selection -->
        <div v-else>
          <!-- Info about automatic assignment -->
          <div v-if="isSalesAccountAutomatic || isPurchaseAccountAutomatic" class="row mb-3">
            <div class="col-12">
              <div class="alert alert-info d-flex align-items-center">
                <i class="fas fa-info-circle mr-2"></i>
                <span>{{ $t("Accounts are set automatically, but you can adjust them below.") }}</span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <!-- Sales Account -->
              <div class="form-group">
                <label for="salesAccountId">{{ $t("Sales Account") }} <span class="required">*</span></label>
                <v-select v-model="form.salesAccountId" :options="chartOfAccounts" label="name"
                  :reduce="option => option.id" :class="{ 'is-invalid': form.errors.has('salesAccountId') }"
                  name="salesAccountId" :placeholder="$t('Select sales account')" required>
                  <template #option="{ name, code, type }">
                    <div>
                      <strong>{{ name }}</strong>
                      <br>
                      <small class="text-muted">{{ code }} - {{ type }}</small>
                    </div>
                  </template>
                </v-select>
                <has-error :form="form" field="salesAccountId" />
                <div v-if="isSalesAccountAutomatic" class="form-text text-info">
                  <i class="fas fa-info-circle"></i> {{ $t("Pre-assigned from settings, but you can change it") }}
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <!-- Purchase Account -->
              <div class="form-group">
                <label for="purchaseAccountId">{{ $t("Purchase Account") }} <span class="required">*</span></label>
                <v-select v-model="form.purchaseAccountId" :options="chartOfAccounts" label="name"
                  :reduce="option => option.id" :class="{ 'is-invalid': form.errors.has('purchaseAccountId') }"
                  name="purchaseAccountId" :placeholder="$t('Select purchase account')" required>
                  <template #option="{ name, code, type }">
                    <div>
                      <strong>{{ name }}</strong>
                      <br>
                      <small class="text-muted">{{ code }} - {{ type }}</small>
                    </div>
                  </template>
                </v-select>
                <has-error :form="form" field="purchaseAccountId" />
                <div v-if="isPurchaseAccountAutomatic" class="form-text text-info">
                  <i class="fas fa-info-circle"></i> {{ $t("Pre-assigned from settings, but you can change it") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Details Section -->
    <div class="form-card">
      <div class="card-header">
        <h5 class="section-title">
          <i class="fas fa-plus-circle mr-2"></i>
          {{ $t("Additional Details") }}
        </h5>
      </div>
      <div class="card-body">
        <!-- Status and Image in one row -->
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="status">{{ $t("Status") }}</label>
              <select id="status" v-model="form.status" class="form-control"
                :class="{ 'is-invalid': form.errors.has('status') }">
                <option value="1">{{ $t("Active") }}</option>
                <option value="0">{{ $t("Inactive") }}</option>
              </select>
              <has-error :form="form" field="status" />
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="image">{{ $t("Image") }}</label>
              <div class="custom-file">
                <input id="image" type="file" class="custom-file-input" name="image"
                  :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                <label class="custom-file-label" for="image">
                  <i class="fas fa-upload"></i> {{ $t("Upload") }}
                </label>
              </div>
              <has-error :form="form" field="image" />

              <!-- Image preview -->
              <div class="image-preview mt-2" v-if="url">
                <img :src="url" class="img-fluid rounded" :alt="$t('Product Image')" style="max-height: 80px;" />
              </div>
            </div>
          </div>
        </div>

        <!-- Notes take full row -->
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="note">{{ $t("Notes") }}</label>
              <textarea id="note" v-model="form.note" class="form-control" rows="3"
                :class="{ 'is-invalid': form.errors.has('note') }" name="note"
                :placeholder="$t('Add any additional notes...')"></textarea>
              <has-error :form="form" field="note" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Action Buttons -->
    <div class="form-card">
      <div class="card-footer">
        <div class="dtable-footer">
          <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
            <button type="button" :disabled="form.busy" class="btn btn-success" @click.prevent="handleSaveClick">
              <i :class="form.busy ? 'fas fa-spinner fa-spin' : 'fas fa-save'" />
              {{ form.busy ? $t("Saving...") : $t("Save") }}
            </button>
            <button type="reset" class="btn btn-info ml-2" @click="resetForm">
              <i class="fas fa-power-off" /> {{ $t("Reset") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ProductFormTemplate",
  props: {
    form: {
      type: Object,
      required: true
    },
    formId: {
      type: String,
      default: 'productForm'
    },
    product: {
      type: Object,
      default: null
    },
    categories: {
      type: Array,
      default: () => []
    },
    units: {
      type: Array,
      default: () => []
    },
    taxes: {
      type: Array,
      default: () => []
    },
    chartOfAccounts: {
      type: Array,
      default: () => []
    },
    prefix: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    isSalesAccountAutomatic: {
      type: Boolean,
      default: false
    },
    isPurchaseAccountAutomatic: {
      type: Boolean,
      default: false
    },
    isEditMode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      barcodeSymbologyOptions: ['CODE128', 'EAN13', 'EAN8', 'UPC', 'CODE39', 'ITF-14']
    }
  },
  computed: {
    baseUnitName() {
      const u = this.form.itemUnit
      return (u && u.name) ? u.name : (u ? String(u) : '')
    },
    openingStockUnitOptions() {
      const base = this.form.itemUnit
      if (!base) return []
      return [base, ...(this.form.unitConversions || []).filter(r => r.unit).map(r => r.unit)]
    },
    openingStockEntryUnitError() {
      if (this.form.itemType !== 'product') return false
      const q = parseFloat(this.form.openingStockEntryQuantity)
      if (isNaN(q) || q <= 0) return false
      const factor = this.getConversionFactor(this.form.openingStockEntryUnit)
      return factor <= 0
    }
  },
  methods: {
    getConversionFactor(unit) {
      if (!unit) return 0
      const baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit)
      const id = unit.id || unit
      if (id == baseId) return 1
      const row = (this.form.unitConversions || []).find(r => (r.unit && (r.unit.id || r.unit)) == id)
      return row ? (parseFloat(row.conversion_factor) || 0) : 0
    },
    updateOpeningStockFromEntry() {
      const q = parseFloat(this.form.openingStockEntryQuantity)
      const factor = this.getConversionFactor(this.form.openingStockEntryUnit)
      if (isNaN(q) || q < 0) {
        this.form.openingStockCount = ''
        return
      }
      if (!this.form.openingStockEntryUnit || factor <= 0) {
        this.form.openingStockCount = ''
        return
      }
      this.form.openingStockCount = q * factor
    },
    addUnitConversion() {
      if (!Array.isArray(this.form.unitConversions)) {
        this.$set(this.form, 'unitConversions', [])
      }
      this.form.unitConversions.push({ unit: null, conversion_factor: '' })
    },
    removeUnitConversion(index) {
      this.form.unitConversions.splice(index, 1)
    },
    additionalUnitOptions(excludeIndex) {
      const baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit)
      const selectedIds = (this.form.unitConversions || [])
        .map((row, i) => i === excludeIndex ? null : (row.unit && (row.unit.id || row.unit)))
        .filter(Boolean)
      return (this.units || []).filter(u => {
        const id = u.id || u
        return id != baseId && !selectedIds.includes(id)
      })
    },
    isValidConversionFactor(value) {
      const n = parseFloat(value)
      return !isNaN(n) && n > 0
    },
    calculatePrice() {
      this.$emit('calculate-price')
    },
    onFileChange(e) {
      this.$emit('on-file-change', e)
    },
    onOverrideSalesAccountChange() {
      this.$emit('on-override-sales-account-change')
    },
    onOverridePurchaseAccountChange() {
      this.$emit('on-override-purchase-account-change')
    },
    handleSaveClick() {
      console.log('ProductFormTemplate: Save button clicked', {
        formBusy: this.form.busy,
        formErrors: this.form.errors.any(),
        formData: this.form.data()
      })

      if (this.form.busy) {
        console.log('ProductFormTemplate: Form is busy, ignoring click')
        return
      }

      this.submitForm()
    },
    submitForm() {
      console.log('ProductFormTemplate: submitForm called')
      this.$emit('submit-form')
    },
    saveTemporary() {
      this.$emit('save-temporary')
    },
    resetForm() {
      this.$emit('reset-form')
    }
  }
}
</script>

<style scoped>
/* Form Card Styling - Match Modal Style */
.form-card {
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  background: #fff;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease;
}

.form-card:hover {
  box-shadow: 0 0.1rem 0.5rem 0 rgba(58, 59, 69, 0.15);
}

.form-card .card-header {
  background-color: #33a0d9;
  color: #ffffff;
  border-radius: 20px 20px 0 0;
  padding: 12px 16px;
  border-bottom: none;
}

.form-card .card-header .section-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  padding: 0;
}

.form-card .card-header .section-title::after {
  display: none;
}

.form-card .card-header .section-title i {
  color: rgba(255, 255, 255, 0.8);
}

.form-card .card-body {
  padding: 16px;
}

/* Enhanced Section Title Styling */
.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e9ecef;
}

/* Form Groups - Balanced */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

/* Required field styling */
.required {
  color: #dc3545;
  font-weight: bold;
}

/* Better spacing between sections */
.row {
  margin-bottom: 1rem;
}

.row:last-child {
  margin-bottom: 0;
}

/* Image preview styling */
.image-preview {
  text-align: center;
}

.image-preview img {
  border: 1px solid #dee2e6;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Custom file input styling */
.custom-file-label {
  border: 1px dashed #dee2e6;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
}

.custom-file-label:hover {
  border-color: #007bff;
  background-color: #e3f2fd;
}

.custom-file-label i {
  color: #6c757d;
}

/* Beautiful Item Type Selector - Balanced */
.item-type-selector {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.item-type-option {
  flex: 1;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.item-type-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.option-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.75rem;
  background: #ffffff;
  border: 2px solid #e3e6f0;
  border-radius: 8px;
  text-align: center;
  transition: all 0.2s ease;
  min-height: 70px;
}

.item-type-option:hover .option-content {
  border-color: #33a0d9;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(51, 160, 217, 0.15);
}

.item-type-option.active .option-content {
  border-color: #33a0d9;
  background: #33a0d9;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(51, 160, 217, 0.25);
}

.option-content i {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #6c757d;
  transition: all 0.2s ease;
}

.item-type-option.active .option-content i {
  color: rgba(255, 255, 255, 0.9);
}

.option-content span {
  font-weight: 600;
  font-size: 0.9rem;
  color: #495057;
  transition: all 0.2s ease;
}

.item-type-option.active .option-content span {
  color: white;
}

/* Override checkbox styling */
.form-check-input {
  margin-right: 0.75rem;
  margin-top: 0.1rem;
  width: 18px;
  height: 18px;
  border: 2px solid #ced4da;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.form-check-input:checked {
  background-color: #33a0d9;
  border-color: #33a0d9;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 12px;
}

.form-check-input:hover {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

.form-check-input:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
  outline: none;
}

.form-check-label {
  font-weight: 600;
  color: #495057;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  margin-bottom: 0;
}

.form-check-label:hover {
  color: #33a0d9;
  background-color: #e3f2fd;
  border-color: #33a0d9;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(51, 160, 217, 0.1);
}

.form-check-label:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(51, 160, 217, 0.1);
}

/* Override checkbox container */
.override-checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: #495057;
  margin-left: 0.5rem;
  padding: 0 26px;
}

/* Enhanced checkbox styling for better visual hierarchy */
.override-checkbox-container .form-check-label {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 2px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  min-height: 48px;
  padding: 0.75rem 1rem;
}

.override-checkbox-container .form-check-label:hover {
  background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%);
  border-color: #33a0d9;
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.15);
}

.override-checkbox-container .form-check-label:has(.form-check-input:checked) {
  background: linear-gradient(135deg, #e8f5e8 0%, #f0fff0 100%);
  border-color: #28a745;
  color: #155724;
}

.override-checkbox-container .form-check-label:has(.form-check-input:checked) .checkbox-text {
  color: #155724;
  font-weight: 700;
}

/* Account Label Styling */
.account-label-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  gap: 1rem;
  flex-direction: column;
}

.account-label {
  font-weight: 500;
  color: #495057;
  font-size: 0.95rem;
  margin-bottom: 0;
  flex: 1;
}

/* Toggle Switch Styling */
.toggle-switch-container {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.toggle-switch-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 0.75rem;
}

.toggle-switch-wrapper {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  flex-shrink: 0;
}

.toggle-switch-input {
  position: absolute;
  width: 50px;
  height: 26px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #ced4da;
  border-radius: 26px;
  outline: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
}

.toggle-switch-input:checked {
  background-color: #33a0d9;
}

.toggle-switch-input:focus {
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

.toggle-switch-slider {
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

.toggle-switch-label {
  position: relative;
}

.toggle-switch-label .toggle-switch-input {
  position: relative;
}

.toggle-switch-label .toggle-switch-input:checked+.toggle-switch-slider {
  transform: translate(24px, -50%);
}

.toggle-switch-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.toggle-switch-input:checked~.toggle-switch-text,
.toggle-switch-wrapper:has(.toggle-switch-input:checked)~.toggle-switch-text {
  color: #33a0d9;
  font-weight: 600;
}

.toggle-switch-label:has(.toggle-switch-input:checked) .toggle-switch-text {
  color: #33a0d9;
  font-weight: 600;
}

/* Alert styling for override info */
.alert-info {
  background-color: #d1ecf1;
  border-color: #bee5eb;
  color: #0c5460;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
}

.alert-info i {
  color: #0c5460;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .item-type-selector {
    flex-direction: column;
    gap: 0.5rem;
  }

  .option-content {
    padding: 0.75rem 0.5rem;
    min-height: 60px;
  }

  .option-content i {
    font-size: 1.25rem;
    margin-bottom: 0.4rem;
  }

  .option-content span {
    font-size: 0.85rem;
  }

  /* Mobile checkbox adjustments */
  .override-checkbox-container .form-check-label {
    min-height: 44px;
    padding: 0.6rem 0.8rem;
  }

  .checkbox-text {
    font-size: 0.9rem;
  }

  .form-check-input {
    width: 16px;
    height: 16px;
  }
}
</style>