<template>
  <div id="pos">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->


    <div class="row sm-col-reverse">
      <!-- pos left area start -->
      <div class="col-12 col-md-7">
        <div class="card pos-main-card">
          <div class="card-body-l p-0">
            <div class="form-group pl-3 pt-3 pr-3 pos-client-section">
              <label class="pos-section-label">{{ $t("Client") }}</label>
              <div class="d-flex w-100">
                <v-select class="flex-grow-1" v-model="form.client" :options="clients" label="name"
                  :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                  :placeholder="$t('Select a client')" />
                <ClientCreateModal @reloadClients="getClients('latest')">
                  <div class="input-group-text create-btn">
                    <i class="fas fa-solid fa-plus-circle"></i>
                  </div>
                </ClientCreateModal>
              </div>
              <!-- Client Chart of Account Status -->
              <div class="client-status mt-2" v-if="form.client">
                <div v-if="!form.client.chart_of_account_id" class="client-warning">
                  <i class="fas fa-exclamation-triangle text-warning"></i>
                  <span class="ml-2">{{ $t('Client needs Chart of Account') }}</span>
                  <button type="button" class="btn btn-sm btn-outline-warning ml-2"
                    @click="autoAssignClientChartOfAccount" :disabled="isAutoAssigningClient">
                    <i :class="isAutoAssigningClient ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                    {{ isAutoAssigningClient ? $t('Assigning...') : $t('Auto-Assign') }}
                  </button>
                </div>
              </div>
              <has-error :form="form" field="client" />
            </div>

            <div class="table-wrap">
              <GeneralTable
                :columns="tableColumns"
                :rows="form.selectedProducts || []"
                :show-actions="true"
                action-header-icon="fas fa-trash"
                :empty-message="$t('Your shopping cart is empty')"
                empty-image="/images/cart.png"
                wrapper-class="table-wrap"
              >
                <!-- Product Name -->
                <template #cell-name="{ row }">
                  <span class="table-product-title" v-tooltip="row.name">
                    {{ row.name }}
                  </span>
                </template>

                <!-- Base Price (Read-only) -->
                <template #cell-basePrice="{ row }">
                  <span class="table-price-display">
                    {{ (row.unitPrice || 0).toFixed(2) }}
                    <span class="saudi-riyal">ê</span>
                  </span>
                </template>

                <!-- Quantity -->
                <template #cell-qty="{ row }">
                  <div class="d-flex custom-qty-input">
                    <input
                      type="button"
                      value="-"
                      class="pos-qty-btn-minus"
                      data-field="quantity"
                      @click="generateItemTotal(row.qty, 'qty', getProductIndex(row), 'decrement')"
                    />
                    <input
                      type="number"
                      step="any"
                      :id="`Qty-${getProductIndex(row)}`"
                      :value="row.qty"
                      name="quantity"
                      class="quantity-field border-0 incrementor"
                      required
                      min="1"
                      :max="row.inventoryCount"
                      @change="generateItemTotal($event.target.value, 'qty', getProductIndex(row), '')"
                      @keyup="generateItemTotal($event.target.value, 'qty', getProductIndex(row), '')"
                      :placeholder="$t('Quantity')"
                    />
                    <input
                      type="button"
                      value="+"
                      class="pos-qty-btn-plus"
                      data-field="quantity"
                      @click="generateItemTotal(row.qty, 'qty', getProductIndex(row), 'increment')"
                    />
                  </div>
                </template>

                <!-- Subtotal -->
                <template #cell-subtotal="{ row }">
                  {{ row.unitPrice * row.qty }}
                  <span class="saudi-riyal">ê</span>
                </template>

                <!-- Discount -->
                <template #cell-discount="{ row }">
                  <div class="d-flex align-items-center gap-1">
                    <select
                      v-model="row.discountType"
                      class="form-control form-control-sm"
                      style="width: 85px; flex-shrink: 0"
                      :class="{
                        'is-invalid': form.errors.has(`selectedProducts.${getProductIndex(row)}.discountType`),
                      }"
                      @change="calculateProductDiscount(getProductIndex(row))"
                    >
                      <option value="fixed">{{ $t("Fixed") }}</option>
                      <option value="percentage">{{ $t("%") }}</option>
                    </select>
                    <input
                      type="number"
                      v-model="row.discount"
                      class="form-control form-control-sm"
                      style="width: 90px; flex-shrink: 0"
                      step="any"
                      min="0"
                      :max="row.discountType == 'percentage' ? 100 : row.unitPrice * row.qty"
                      :class="{
                        'is-invalid': form.errors.has(`selectedProducts.${getProductIndex(row)}.discount`),
                      }"
                      :placeholder="$t('0')"
                      @change="calculateProductDiscount(getProductIndex(row))"
                      @keyup="calculateProductDiscount(getProductIndex(row))"
                    />
                  </div>
                  <div
                    v-if="
                      form.errors.has(`selectedProducts.${getProductIndex(row)}.discount`) ||
                      form.errors.has(`selectedProducts.${getProductIndex(row)}.discountType`)
                    "
                    class="invalid-feedback d-block"
                  >
                    <span
                      v-if="form.errors.has(`selectedProducts.${getProductIndex(row)}.discount`)"
                      class="d-block"
                    >
                      {{ form.errors.get(`selectedProducts.${getProductIndex(row)}.discount`) }}
                    </span>
                    <span
                      v-if="form.errors.has(`selectedProducts.${getProductIndex(row)}.discountType`)"
                      class="d-block"
                    >
                      {{ form.errors.get(`selectedProducts.${getProductIndex(row)}.discountType`) }}
                    </span>
                  </div>
                </template>

                <!-- Total After Discount -->
                <template #cell-totalAfterDiscount="{ row }">
                  {{ row.unitPrice * row.qty - (row.discountAmount || 0) }}
                  <span class="saudi-riyal">ê</span>
                </template>

                <!-- VAT Type -->
                <template #cell-vatType="{ row }">
                  <select
                    v-model="row.selectedVatRate"
                    class="form-control form-control-sm"
                    :class="{
                      'is-invalid': form.errors.has(`selectedProducts.${getProductIndex(row)}.selectedVatRate`),
                    }"
                    @change="calculateProductVat(getProductIndex(row))"
                    style="min-width: 120px"
                  >
                    <option value="">{{ $t("Select VAT") }}</option>
                    <option v-for="tax in taxes" :key="tax.id" :value="tax">
                      {{ tax.code }} ({{ tax.rate }}%)
                    </option>
                  </select>
                  <div
                    v-if="form.errors.has(`selectedProducts.${getProductIndex(row)}.selectedVatRate`)"
                    class="invalid-feedback d-block"
                  >
                    {{ form.errors.get(`selectedProducts.${getProductIndex(row)}.selectedVatRate`) }}
                  </div>
                </template>

                <!-- VAT -->
                <template #cell-vat="{ row }">
                  <span class="form-control-plaintext form-control-sm text-center">
                    {{ row.productTax }}
                    <span class="saudi-riyal">ê</span>
                  </span>
                </template>

                <!-- Total with VAT -->
                <template #cell-totalPrice="{ row }">
                  {{ row.totalPrice }}
                  <span class="saudi-riyal">ê</span>
                </template>

                <!-- Actions -->
                <template #actions="{ row }">
                  <button type="button" class="btn btn-danger" @click="removeItem(row)">
                    <i class="fas fa-times"></i>
                  </button>
                </template>
              </GeneralTable>
            </div>
          </div>
        </div>

        <div class="pos-card-footer bg-white">
          <div>
            <div class="row pt-3 pl-3 pr-3 pos-footer-inputs">
              <div class="form-group col-md-4">
                <label for="discountType" class="pos-input-label">{{ $t("Discount Type") }}</label>
                <select id="discountType" v-model="form.discountType" class="form-control pos-input"
                  :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType"
                  @change="calculateSum" @keyup="calculateSum">
                  <option value="0">{{ $t("Fixed") }}</option>
                  <option value="1">{{ $t("Percentage") }}(%)</option>
                </select>
                <has-error :form="form" field="discountType" />
              </div>
              <div class="form-group col-md-4">
                <label for="discount" class="pos-input-label">{{ $t("Discount") }}
                  <span v-if="form.discountType == 1">(%)</span></label>
                <div class="input-group">
                  <input id="discount" v-model="form.discount" type="number" step="any" min="0"
                    :max="form.discountType == 1 ? 100 : totalSubtotalSummary" class="form-control pos-input"
                    :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')" @change="calculateSum" @keyup="calculateSum" />
                  <div v-if="form.discountType == 1" class="input-group-append">
                    <span class="input-group-text pos-input-append">{{
                      form.totalDiscount }}<span class="saudi-riyal">ê</span></span>
                  </div>
                </div>
                <has-error :form="form" field="discount" />
              </div>
              <div class="form-group col-md-4">
                <label for="transportCost" class="pos-input-label">{{ $t("Transport Cost") }}</label>
                <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                  class="form-control pos-input" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                  :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                <has-error :form="form" field="transportCost" />
              </div>

              <!-- Summary Values -->
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="col-12">
                <div class="pos-summary-values">
                  <div class="pos-summary-items-inline">
                    <div class="summary-item">
                      <label class="summary-label">الإجمالي:</label>
                      <div class="summary-value">
                        {{ totalSubtotalSummary.toFixed(2) }}
                        <span class="saudi-riyal">ê</span>
                      </div>
                    </div>
                    <div class="summary-item">
                      <label class="summary-label">{{ $t("Quantity") }}:</label>
                      <div class="summary-value">
                        {{ totalQuantitySummary }}
                      </div>
                    </div>
                    <div class="summary-item">
                      <label class="summary-label">{{ $t("Total Discount") }}:</label>
                      <div class="summary-value">
                        {{ totalProportionalDiscount.toFixed(2) }}
                        <span class="saudi-riyal">ê</span>
                      </div>
                    </div>
                    <div class="summary-item">
                      <label class="summary-label">{{ $t("Total Shipping Cost") }}:</label>
                      <div class="summary-value">
                        {{ totalProportionalTransport.toFixed(2) }}
                        <span class="saudi-riyal">ê</span>
                      </div>
                    </div>
                    <div class="summary-item">
                      <label class="summary-label">{{ $t("Net Amount") }}:</label>
                      <div class="summary-value">
                        {{ netAmountSummary.toFixed(2) }}
                        <span class="saudi-riyal">ê</span>
                      </div>
                    </div>
                    <div class="summary-item">
                      <label class="summary-label">{{ $t("Tax") }}:</label>
                      <div class="summary-value">
                        {{ form.totalTax.toFixed(2) }}
                        <span class="saudi-riyal">ê</span>
                      </div>
                    </div>
                    <div class="summary-item">
                      <label class="summary-label">{{ $t("Grand Total") }}:</label>
                      <div class="summary-value">
                        {{ form.netTotal.toFixed(2) }}
                        <span class="saudi-riyal">ê</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="taxes && !isSaudiArabia" class="form-group col-md-6 col-lg-6">
                <label for="orderTax">{{ $t("Invoice Tax") }} </label>
                <div class="input-group select-input-group">
                  <v-select class="w-85" v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax"
                    :placeholder="$t('Select a tax type')" @input="calculateSum" />
                  <div class="input-group-prepend input-c-margin">
                    <div class="input-group-text">
                      <span v-if="form.orderTax">{{
                        form.totalTax }}<span class="saudi-riyal">ê</span></span>
                      <span v-else>{{ 0 }} <span class="saudi-riyal">ê</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pos-net-total noi-print">
              {{ $t("Net Total") }}: <span class="net-total-value">{{ form.netTotal }}</span>
              <span class="saudi-riyal">ê</span>
            </div>
          </div>
        </div>

        <div class="row no-print pos-action-buttons">
          <div class="col-12 col-lg-3 mb-2">
            <button class="btn btn-primary btn-block pos-btn" @click="saveInvoice" @keydown="form.onKeydown($event)">
              <i class="fas fa-save" /> {{ $t("Save") }}
            </button>
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <button class="btn btn-primary btn-block pos-btn" @click="completeOrderAndAddPayment">
              <i class="fas fa-credit-card" />
              {{ $t("Save & Payment") }}
            </button>
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <button
              @click="openInvoicesPage"
              :title="$t('Open Invoices Page')"
              class="btn btn-info btn-block pos-btn">
              <i class="fas fa-file-invoice" />
              {{ $t('Invoices') }}
            </button>
          </div>
          <div class="col-12 col-lg-3 mb-2">
            <button type="reset" class="btn btn-info btn-block pos-btn" @click="form.reset()">
              <i class="fas fa-power-off" /> {{ $t("Reset") }}
            </button>
          </div>
        </div>
      </div>
      <!-- pos left area end -->

      <!-- POS Right area start -->
      <div class="col-12 col-md-5">
        <div class="card bg-transparent">
          <div class="bg-white">
            <div v-if="products" class="pos-r-head-search">
              <search class="flex-grow-1" :isPosSearch="true" v-model="query" @reset-pagination="resetPagination()"
                @reload="reload" />
              <button 
                type="button" 
                class="btn pos-filter-toggle-btn"
                :class="{ 'pos-filter-toggle-btn-active': showFilters }"
                @click="toggleFilters"
                :title="showFilters ? $t('Hide Filters') : $t('Show Filters')">
                <i class="fas fa-filter"></i>
              </button>
              <ProductCreateModal @reloadProducts="getProducts">
              </ProductCreateModal>
              <has-error :form="form" field="selectedProducts" />
            </div>
            <div v-show="showFilters">
              <div v-if="categories && categories.length > 0" class="pos-filter-categories">
                <label class="pos-filter-label">{{ $t('Categories') }}</label>
                <ul class="pos-filter-card-list">
                  <li v-for="category in categories" :key="category.id" 
                      class="pos-filter-card"
                      :class="{ 'pos-filter-card-active': form.category && form.category.id === category.id }"
                      @click="selectCategory(category)">
                    <div class="pos-filter-card-content">
                      <i class="fas fa-folder pos-filter-card-icon"></i>
                      <span class="pos-filter-card-name">{{ category.name }}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div v-if="subCategories && subCategories.length > 0" class="pos-filter-subcategories">
                <label class="pos-filter-label">{{ $t('Sub Categories') }}</label>
                <ul class="pos-filter-card-list">
                  <li v-for="subCategory in subCategories" :key="subCategory.id" 
                      class="pos-filter-card"
                      :class="{ 'pos-filter-card-active': form.subCategory && form.subCategory.id === subCategory.id }"
                      @click="selectSubCategory(subCategory)">
                    <div class="pos-filter-card-content">
                      <i class="fas fa-folder-open pos-filter-card-icon"></i>
                      <span class="pos-filter-card-name">{{ subCategory.name }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card-body bg-white mt-3 pos-body">
            <div class="pos-item-grid">
              <div v-for="product in products" :key="product.id" @click="storeProduct(product)" :class="Number(product.inventoryCount || 0) < 1 ? 'pos-item-grid-red' : ''
                ">
                <div class="pos-box">
                  <div class="relative">
                    <div class="pos-box-hover-icon">
                      <i class="fas fa-plus"></i>
                    </div>
                    <div class="pos-box-img">
                      <div v-if="hasValidImage(product)" class="pos-box-image-wrapper">
                        <img class="pos-box-icon" :src="product.image" :data-product-id="product.id" alt="product image" @error="handleImageError($event)" />
                      </div>
                      <div v-else class="pos-box-no-preview">{{ $t("No Preview") }}</div>
                    </div>
                    <span class="box-qty" :class="Number(product.inventoryCount || 0) < 1 ? 'qty-red' : ''
                      ">{{ product.inventoryCount || 0 }}</span>
                    <span v-if="Number(product.inventoryCount || 0) < 1 && product.itemType !== 'service'"
                      class="stock-warning-icon-pos" v-tooltip="$t('Click to manage stock')"
                      @click.stop="openStockAdjustmentModal(product)">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                  <div class="pos-box-content">
                    <span>{{ product.code | withPrefix(productPrefix) }}</span>
                    <div class="pos-box-name-price">
                      <p class="pos-box-text">{{ product.name }}</p>
                      <p class="pos-box-price">
                        {{ (product.regularPrice || 0).toFixed(2) }}
                        <span class="saudi-riyal">ê</span>
                      </p>
                    </div>
                  </div>
                  <!-- Product Chart of Account Status -->
                  <div v-if="product && !product.sales_account_id && product.itemType !== 'service'"
                    class="product-warning-pos">
                    <i class="fas fa-exclamation-triangle text-warning"></i>
                    <span>{{ $t('Product') }} "{{ product.name }}" {{ $t('needs Sales Account') }}</span>
                    <button type="button" class="btn btn-xs btn-outline-warning"
                      @click.stop="autoAssignProductChartOfAccount(product, 'sales')"
                      :disabled="isAutoAssigningProduct === product.id">
                      <i :class="isAutoAssigningProduct === product.id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                      {{ isAutoAssigningProduct === product.id ? $t('Assigning...') : $t('Auto-Assign') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <!-- POS Right area end -->
    </div>

    <!-- use the modal component, pass in the prop -->
    <Modal class="pay-modal" v-if="showModal" :form="form">
      <h5 slot="header">{{ $t("Add Payment") }}</h5>
      <div class="w-100" slot="body">
        <div>
          <div class="row" v-if="
            accounts &&
            form.selectedProducts &&
            form.selectedProducts.length > 0
          ">
            <div class="form-group col-md-8">
              <label for="account">{{ $t("Account") }} <span class="required">*</span></label>
              <v-select v-model="form.account" :options="accounts" label="label"
                :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                :placeholder="$t('Select an account')">
                <template slot="option" slot-scope="option">
                  <img :src="option.image" style="width: 30px; height: 30px" />
                  {{ option.label }}
                </template>
              </v-select>
              <has-error :form="form" field="account" />
            </div>
            <div class="form-group col-md-4">
              <label for="paidAmount">{{ $t("Amount") }}<span class="required">*</span></label>
              <input ref="paidAmountInput" id="paidAmount" v-model="form.paidAmount" type="number" step="any"
                class="form-control" :class="{ 'is-invalid': form.errors.has('paidAmount') }" name="paidAmount" min="1"
                :max="form.netTotal" :placeholder="$t('Enter an amount')" />
              <has-error :form="form" field="paidAmount" />
            </div>
          </div>
          <div class="row">
            <!-- <div class="form-group col-md-6">
              <label for="chequeNo">{{ $t("Cheque No") }}</label>
              <input
                id="chequeNo"
                v-model="form.chequeNo"
                type="text"
                step="any"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('chequeNo') }"
                name="chequeNo"
                :placeholder="$t('Enter a cheque number')"
              />
              <has-error :form="form" field="chequeNo" />
            </div> -->
            <div class="form-group col-md-6">
              <label for="receiptNo">{{ $t("Receipt No") }}</label>
              <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                :placeholder="$t('Enter a receipt no')" />
              <has-error :form="form" field="receiptNo" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="poReference">{{ $t("PO Reference") }}</label>
              <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference"
                :placeholder="$t('Enter PO reference')" />
              <has-error :form="form" field="poReference" />
            </div>
            <div class="form-group col-md-6">
              <label for="paymentTerms">{{ $t("Payment Terms") }}</label>
              <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms"
                :placeholder="$t('Enter payment terms')" />
              <has-error :form="form" field="paymentTerms" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="reference">{{ $t("Reference") }}</label>
              <input id="reference" v-model="form.reference" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('reference') }" name="reference"
                :placeholder="$t('Enter reference')" />
              <has-error :form="form" field="reference" />
            </div>
            <div class="form-group col-md-6" style="display: none;">
              <label for="deliveryPlace">{{ $t("Delivery Place") }}</label>
              <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                :placeholder="$t('Enter a delivery place')" />
              <has-error :form="form" field="deliveryPlace" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="date">{{ $t("Date") }}</label>
              <input id="date" v-model="form.date" type="date" class="form-control"
                :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
              <has-error :form="form" field="date" />
            </div>
            <div class="form-group col-md-6">
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
          <div class="form-group">
            <label for="attachment">{{ $t("Payment Attachment") }}</label>
            <input id="attachment" ref="attachmentInput" type="file" class="form-control"
              :class="{ 'is-invalid': form.errors.has('attachment') }" name="attachment"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" @change="handleAttachmentChange" />
            <small class="form-text text-muted">
              {{ $t("Supported formats: PDF, JPG, PNG, DOC, DOCX") }}
            </small>
            <has-error :form="form" field="attachment" />
            <div v-if="form.attachment" class="mt-2">
              <span class="badge badge-info">
                <i class="fas fa-paperclip"></i> {{ getAttachmentName() }}
              </span>
              <button type="button" class="btn btn-sm btn-outline-danger ml-2" @click="removeAttachment">
                <i class="fas fa-times"></i> {{ $t("Remove") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="payment-modal-footer" slot="modal-footer">
        <div class="pos-modal-footer no-print">
          <button class="btn btn-primary" @click="addPayment" @keydown="form.onKeydown($event)">
            <i class="fas fa-save" /> {{ $t("Save") }}
          </button>
          <button class="modal-default-button btn btn-danger" @click="closeModalAndClearFormData">
            {{ $t("Close") }}
          </button>
        </div>
      </div>
    </Modal>

    <Modal v-if="showSmallInvoiceModal" :allData="allData">
      <h5 slot="header" class="no-print">{{ $t("Invoice Receipt") }}</h5>
      <div class="w-100" slot="body">
        <div id="invoice-POS">
          <div style="max-width: 400px; margin: 0px auto">
            <div class="info">
              <div v-if="appInfo.blackLogo" class="pos-logo">
                <img :src="appInfo.blackLogo" width="100px" />
              </div>
              <h2 v-else class="text-center">{{ appInfo.companyName }}</h2>
              <p>
                <span>{{ $t("Date") }} : {{ allData.invoiceDate }} <br /></span>
                <span v-show="appInfo.address">{{ $t("Address") }} : {{ appInfo.address }} <br /></span>
                <span v-show="appInfo.email">{{ $t("Email") }} : {{ appInfo.email }} <br /></span>
                <span v-show="appInfo.phone">{{ $t("Phone") }} : {{ appInfo.phone }} <br /></span>
                <span v-show="allData.client.name">{{ $t("Client") }} : {{ allData.client.name }} <br /></span>
                <span v-show="allData.createdBy">{{ $t("Sold By") }} : {{ allData.createdBy }} <br /></span>
              </p>
            </div>

            <table class="table_data">
              <tbody>
                <tr v-for="(data, i) in invoiceProducts" :key="i">
                  <td colspan="3">
                    <span>
                      {{ data.productName }}<br />
                      <span class="pqty">{{ data.quantity }} {{ data.productUnit }} x
                        {{ data.salePrice }}
                        <span class="saudi-riyal">ê</span></span>
                    </span>
                  </td>
                  <td style="text-align: right; vertical-align: bottom">
                    {{ data.salePrice * data.quantity }}
                    <span class="saudi-riyal">ê</span>
                  </td>
                </tr>

                <tr style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Subtotal") }}</td>
                  <td style="text-align: right" class="total">
                    {{ formatNumber(calculatedSubtotal) }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr v-if="(totalProductDiscount > 0 || globalDiscount > 0)" style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Discount") }}</td>
                  <td style="text-align: right" class="total">
                    {{ formatNumber(totalProductDiscount + globalDiscount) }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Total After Discount") }}</td>
                  <td style="text-align: right" class="total">
                    {{ formatNumber(totalAfterDiscount) }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr v-if="(totalProductTax > 0 || invoiceLevelTax > 0)" style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Tax") }}(%)</td>
                  <td style="text-align: right" class="total">
                    {{ formatNumber(totalProductTax + invoiceLevelTax) }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr v-if="allData.transport && Number(allData.transport) > 0" style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Transport Cost") }}</td>
                  <td style="text-align: right" class="total">
                    {{ formatNumber(allData.transport) }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Total After Tax") }}</td>
                  <td style="text-align: right" class="total">
                    {{ formatNumber(totalAfterTax) }}
                    <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="total">{{ $t("Paid") }}</td>
                  <td style="text-align: right" class="total">
                    {{ allData.totalPaid }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="total">{{ $t("Due") }}</td>
                  <td style="text-align: right" class="total">
                    {{ formatNumber(calculatedDue) }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="legalcopy" class="ml-2 mb-4">
              <p class="legal">
                <strong>{{ appInfo.invoiceThankYouMessage }}</strong>
              </p>
              <div id="bar">
                <barcode width="2" height="25" fontSize="15" :value="allData.invoiceNo | withPrefix(invoicePrefix)">
                  {{ $t("Rendering fails.") }}
                </barcode>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pos-modal-footer no-print" slot="modal-footer">
        <div>
          <button @click="printInvoice()" class="modal-default-button btn btn-info">
            {{ $t("Print") }}
          </button>
        </div>
        <button class="modal-default-button btn btn-danger" @click="closeReceiptModal">
          {{ $t("Close") }}
        </button>
      </div>
    </Modal>

    <!-- Stock Adjustment Modal -->
    <StockAdjustmentModal :is-open="showStockAdjustmentModal" :product="selectedProductForStockAdjustment"
      @close="closeStockAdjustmentModal" @adjust-quantity="adjustProductQuantity" @persist="saveTemporary"
      @stock-updated="handleStockUpdated" />
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import VueBarcode from "vue-barcode";
import sound from "../../../audio/beep.wav";
import ClientCreateModal from "~/components/ClientCreateModal";
import ProductCreateModal from "~/components/ProductCreateModal";
import StockAdjustmentModal from "~/components/StockAdjustmentModal";
import GeneralTable from "~/components/GeneralTable";
import html2canvas from "html2canvas";

export default {
  middleware: ["auth"],
  metaInfo() {
    return { title: this.$t("POS") };
  },
  components: {
    barcode: VueBarcode,
    ClientCreateModal,
    ProductCreateModal,
    StockAdjustmentModal,
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: "Create Sale",
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
        name: "POS",
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
      discountType: 0,
      discount: "",
      totalDiscount: "",
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
      category: "",
      invoice_id: null,
      invoice_slug: null,
      attachment: null,
    }),
    taxes: [],
    audio: "",
    products: "",
    accounts: "",
    categories: [],
    subCategories: [],
    productPrefix: "",
    invoicePrefix: "",
    showModal: false,
    allData: {},
    showSmallInvoiceModal: false,
    showFilters: false,
    printMe: false,
    perPage: 10,
    pagination: "",
    query: "",
    generateOrder: false,
    clickCount: 0,
    clients: [],
    // Stock adjustment modal
    showStockAdjustmentModal: false,
    selectedProductForStockAdjustment: null,
    // Chart of account auto-assign
    isAutoAssigningClient: false,
    isAutoAssigningProduct: null,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),

    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },

    // Calculate subtotal from products (sum of salePrice × quantity) - this is the base subtotal before any discounts or taxes
    calculatedSubtotal() {
      if (!this.invoiceProducts || this.invoiceProducts.length === 0) return 0;
      return this.invoiceProducts.reduce((sum, product) => {
        return sum + (Number(product.salePrice || 0) * Number(product.quantity || 0));
      }, 0);
    },

    // Calculate total product discount (sum of all product-level discounts)
    totalProductDiscount() {
      if (!this.invoiceProducts || this.invoiceProducts.length === 0) return 0;
      return this.invoiceProducts.reduce((sum, product) => {
        // productDiscount/discount_amount is the total discount for the line item
        const discount = Number(product.productDiscount || product.discount_amount || 0);
        return sum + discount;
      }, 0);
    },

    // Calculate total product tax/VAT (sum of all product-level taxes)
    // tax_amount in InvoiceProduct is per unit, so we need to multiply by quantity
    // But taxTotal already does this, so use it if available
    totalProductTax() {
      if (!this.invoiceProducts || this.invoiceProducts.length === 0) return 0;
      return this.invoiceProducts.reduce((sum, product) => {
        // taxTotal = quantity * tax_amount (already calculated in backend)
        const taxTotal = Number(product.taxTotal || 0);
        if (taxTotal > 0) {
          return sum + taxTotal;
        }
        // Fallback: calculate from unit tax * quantity
        // productTax or tax_amount is per unit, so multiply by quantity
        const unitTax = Number(product.productTax || product.tax_amount || product.unitTax || 0);
        const quantity = Number(product.quantity || 0);
        return sum + (unitTax * quantity);
      }, 0);
    },

    // Calculate global discount from invoice (invoice-level discount)
    globalDiscount() {
      if (!this.allData) return 0;
      // If discountType is 1 (percentage), discount is already calculated amount from backend
      // If discountType is 0 (fixed), discount is the fixed amount
      return Number(this.allData.discount || 0);
    },

    // Calculate invoice-level tax (tax applied at invoice level, not product level)
    invoiceLevelTax() {
      if (!this.allData) return 0;
      const totalTax = Number(this.allData.tax || 0);
      const productTax = this.totalProductTax;
      // Invoice-level tax = total tax - product tax
      // This handles cases where there's both product VAT and invoice-level tax
      return Math.max(0, totalTax - productTax);
    },

    // Calculate total after discount for receipt
    // This should be: Subtotal - Product Discounts - Global Discount
    totalAfterDiscount() {
      const subtotal = this.calculatedSubtotal;
      const productDiscount = this.totalProductDiscount;
      const globalDiscount = this.globalDiscount;
      const result = subtotal - productDiscount - globalDiscount;
      return result >= 0 ? result : 0;
    },

    // Calculate total after tax for receipt  
    // Following the same logic as print template: totalAfterDiscount + totalProductTax
    // This matches how invoice print template calculates it
    totalAfterTax() {
      const afterDiscount = this.totalAfterDiscount;
      const productTax = this.totalProductTax;
      // Match print template calculation: totalAfterDiscount + totalProductTax
      return afterDiscount + productTax;
    },

    // Calculate due amount (Total After Tax - Paid)
    calculatedDue() {
      const totalAfterTax = this.totalAfterTax;
      const totalPaid = Number(this.allData?.totalPaid || 0);
      const result = totalAfterTax - totalPaid;
      return result >= 0 ? result : 0;
    },

    // Table columns for GeneralTable
    tableColumns() {
      return [
        { key: "name", label: this.$t("Product") },
        { key: "basePrice", label: this.$t("Price") },
        { key: "qty", label: this.$t("Quantity"), align: "text-center" },
        { key: "subtotal", label: this.$t("Subtotal"), align: "text-center" },
        { key: "discount", label: this.$t("Discount") },
        { key: "totalAfterDiscount", label: this.$t("Total After Discount") },
        { key: "vatType", label: this.$t("VAT Type") },
        { key: "vat", label: this.$t("VAT") },
        { key: "totalPrice", label: this.$t("Total with VAT") },
      ];
    },

    // Summary totals for table footer
    totalSubtotalSummary() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((sum, product) => {
        return sum + (Number(product.unitPrice || 0) * Number(product.qty || 0));
      }, 0);
    },

    totalQuantitySummary() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((sum, product) => {
        return sum + Number(product.qty || 0);
      }, 0);
    },

    totalDiscountSummary() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((sum, product) => {
        return sum + Number(product.discountAmount || 0);
      }, 0);
    },

    totalTaxSummary() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((sum, product) => {
        return sum + Number(product.productTax || 0);
      }, 0);
    },

    totalInvoiceDiscount() {
      if (!this.form.discount || Number(this.form.discount) <= 0) return 0;
      const discountValue = Number(this.form.discount);
      if (this.form.discountType == 1) {
        // Percentage discount
        return this.roundToTwoDecimals((this.totalSubtotalSummary * discountValue) / 100);
      } else {
        // Fixed discount
        return this.roundToTwoDecimals(Math.min(discountValue, this.totalSubtotalSummary));
      }
    },

    // Sum of all discounts (product-level + invoice-level proportional discounts)
    totalProportionalDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((sum, product) => {
        // Sum the final discountAmount which includes both product-level and invoice-level discounts
        return sum + Number(product.discountAmount || 0);
      }, 0);
    },

    // Sum of all proportional transport costs allocated to products
    totalProportionalTransport() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return 0;
      return this.form.selectedProducts.reduce((sum, product) => {
        return sum + Number(product.proportionalTransportAmount || 0);
      }, 0);
    },

    netAmountSummary() {
      // المبلغ الصافي = المجموع الفرعي - إجمالي الخصم + إجمالي تكلفة الشحن
      const subtotal = this.totalSubtotalSummary;
      const totalDiscount = this.totalProportionalDiscount;
      const totalTransport = this.totalProportionalTransport;
      return this.roundToTwoDecimals(subtotal - totalDiscount + totalTransport);
    },
  },
  mounted() {
    window.addEventListener("keypress", (e) => {
      if (
        this.form.netTotal > 0 &&
        this.showModal == false &&
        this.generateOrder == false
      ) {
        if (e.key === "Enter") {
          this.generateOrder = true;
          this.completeOrderAndAddPayment();
        }
      }
      if (
        this.form.netTotal > 0 &&
        this.form.paidAmount > 0 &&
        this.generateOrder == true
      ) {
        if (e.key === "Enter") {
          this.clickCount++;
          this.showModal = false;
          console.log("from second click", this.clickCount);
          if (this.clickCount == 1) {
            this.addPayment();
          } else {
            // intentionally do not auto-print; user will click Print in the receipt modal
          }
        }
      }
    });
  },
  async created() {
    this.getClients();
    this.getAccounts();
    await this.getTaxes(); // Wait for taxes to load first
    this.getProducts();
    this.getCategories();
    this.getSubCategories();
    this.audio = new Audio(sound);

    // Only set prefixes if appInfo is available
    if (this.appInfo) {
      this.productPrefix = this.appInfo.productPrefix;
      this.invoicePrefix = this.appInfo.invoicePrefix;
    }

    document.body.classList.add("sidebar-collapse");
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ == "") {
        this.getProducts();
      } else {
        this.searchProducts();
      }
    },

    // watch appInfo changes
    appInfo: {
      handler(newVal) {
        if (newVal && newVal.country) {
          // Update prefixes when appInfo is loaded
          this.productPrefix = newVal.productPrefix;
          this.invoicePrefix = newVal.invoicePrefix;
        }
      },
      immediate: true,
      deep: true
    },

    // watch selectedProducts changes to ensure calculations are always up to date
    selectedProducts: {
      handler() {
        // Recalculate all totals when products change
        this.calculateSum();
      },
      deep: true
    },

    // watch taxes changes to update selected products VAT rates
    taxes: {
      handler(newTaxes) {
        if (newTaxes && newTaxes.length > 0 && this.form.selectedProducts.length > 0) {
          // Update VAT rates for existing selected products
          this.form.selectedProducts.forEach((product, index) => {
            if (!product.selectedVatRate) {
              const vat15 = newTaxes.find((tax) => tax.rate === 15);
              product.selectedVatRate = vat15 || newTaxes[0];
              this.generateItemTotalPrice(index);
            }
          });
          this.calculateSum();
        }
      },
      deep: true
    },
  },
  methods: {
    // Toggle filter visibility
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    
    // Check if product has a valid image (not empty, null, undefined, or default avatar)
    hasValidImage(product) {
      if (!product || !product.image) {
        return false;
      }
      const imageUrl = product.image.trim();
      if (!imageUrl || imageUrl === '') {
        return false;
      }
      // Check if it's a default avatar URL
      if (imageUrl.includes('default-avatar') || imageUrl.includes('default_avatar')) {
        return false;
      }
      return true;
    },
    
    // Handle image loading errors
    handleImageError(event) {
      const imgElement = event.target;
      // Set the product's image to null to trigger Vue's reactivity and show "No Preview"
      const productId = imgElement.getAttribute('data-product-id');
      if (productId) {
        const product = this.products.find(p => p.id == productId);
        if (product) {
          // Use Vue.set or direct assignment to ensure reactivity
          this.$set(product, 'image', null);
        }
      } else {
        // Fallback: hide image and show no preview
        imgElement.style.display = 'none';
        const parentDiv = imgElement.closest('.pos-box-img');
        if (parentDiv) {
          const noPreviewDiv = parentDiv.querySelector('.pos-box-no-preview');
          if (!noPreviewDiv) {
            const noPreview = document.createElement('div');
            noPreview.className = 'pos-box-no-preview';
            noPreview.textContent = this.$t("No Preview");
            parentDiv.appendChild(noPreview);
          } else {
            noPreviewDiv.style.display = 'block';
          }
        }
      }
    },
    
    // get all clients
    async getClients(selectedClient = "default") {
      await axios
        .get("/api/all-clients")
        .then(({ data }) => {
          this.clients = data.data;
          // assign default client
          if (this.clients && this.clients.length > 0) {
            let defaultClientSlug = this.appInfo.defaultClientSlug;
            this.form.client = this.clients.find(
              (item) => item.slug === defaultClientSlug
            );
          }
        })
        .catch((error) => console.log(error));
      if (selectedClient == "latest") {
        this.form.client = this.clients[0];
      }
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
          (account) => account.slug == defaultAccountSlug
        );
      }
    },

    // get taxes
    async getTaxes() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-vat-rates"
      );
      this.taxes = data.data;

      // assign default
      if (this.taxes && this.taxes.length > 0) {
        let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
        this.form.orderTax = this.taxes.find(
          (item) => item.slug === defaultVatRateSlug
        );
      }
    },

    // get categories
    async getCategories() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-product-categories"
      );
      this.categories = data.data;
    },

    // get sub categories
    async getSubCategories() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-product-sub-categories"
      );
      this.subCategories = data.data;
    },

    // get the invoice info by invoice slug
    async getInvoice(invoice_slug) {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/invoices/" + invoice_slug
      );
      this.allData = data.data;
      this.invoiceProducts = this.allData.invoiceProducts;
      this.invoiceProducts.sort(this.sortProducts);

      // Debug: Log the data to understand the structure
      this.$nextTick(() => {
        console.log('POS Receipt - allData:', this.allData);
        console.log('POS Receipt - invoiceProducts:', this.invoiceProducts);
        console.log('POS Receipt - calculatedSubtotal:', this.calculatedSubtotal);
        console.log('POS Receipt - totalProductDiscount:', this.totalProductDiscount);
        console.log('POS Receipt - totalProductTax:', this.totalProductTax);
        console.log('POS Receipt - globalDiscount:', this.globalDiscount);
        console.log('POS Receipt - invoiceLevelTax:', this.invoiceLevelTax);
        console.log('POS Receipt - totalAfterDiscount:', this.totalAfterDiscount);
        console.log('POS Receipt - totalAfterTax:', this.totalAfterTax);
        console.log('POS Receipt - allData.invoiceTotal:', this.allData.invoiceTotal);
      });

      this.loading = false;
    },

    // get products
    async getProducts() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      const { data } = await axios.get(
        window.location.origin +
        "/api/all-products-paginated?page=" +
        currentPage
      );
      this.products = data.data;
      this.products.sort(this.sortProducts);
      this.pagination = data.meta;

      // Ensure all products have proper VAT rate information
      this.processProductsVatRates();
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

    // Select category from card
    selectCategory(category) {
      // Toggle selection: if same category clicked, deselect it
      if (this.form.category && this.form.category.id === category.id) {
        this.form.category = null;
        // Filter products based on remaining filters (subcategory if selected)
        this.filterProducts();
      } else {
        this.form.category = category;
        // Filter products by category only (subcategories remain visible)
        this.filterProducts();
      }
    },

    // Select subcategory from card
    selectSubCategory(subCategory) {
      // Toggle selection: if same subcategory clicked, deselect it
      if (this.form.subCategory && this.form.subCategory.id === subCategory.id) {
        this.form.subCategory = null;
        // Filter products based on remaining filters (category if selected)
        this.filterProducts();
      } else {
        this.form.subCategory = subCategory;
        // Filter products by subcategory (can combine with category if selected)
        this.filterProducts();
      }
    },

    // Filter products based on selected category and/or subcategory
    async filterProducts() {
      this.products = [];
      this.form.itemName = "";
      this.pagination = null;

      const catSlug = this.form.category?.slug;
      const subCatSlug = this.form.subCategory?.slug;

      if (catSlug && subCatSlug) {
        // Both category and subcategory selected - filter by both
        const { data } = await axios.get(
          window.location.origin +
          "/api/all-products-by-sub-categories/" +
          catSlug +
          "/" +
          subCatSlug +
          "?perPage=10000"
        );
        this.products = data.data || [];
      } else if (catSlug) {
        // Only category selected - filter by category
        const { data } = await axios.get(
          window.location.origin +
          "/api/all-pro-sub-categories-by-category/" +
          catSlug +
          "?perPage=10000"
        );
        this.products = data.products || [];
      } else if (subCatSlug) {
        // Only subcategory selected - find its parent category from subcategories list
        const subCat = this.subCategories.find(sc => sc.slug === subCatSlug || sc.id === this.form.subCategory?.id);
        if (subCat && subCat.category_slug) {
          // Use the parent category slug to filter
          const { data } = await axios.get(
            window.location.origin +
            "/api/all-products-by-sub-categories/" +
            subCat.category_slug +
            "/" +
            subCatSlug +
            "?perPage=10000"
          );
          this.products = data.data || [];
        } else {
          // If we can't find the category, show all products
          // User can select a category to narrow down
          await this.getProducts();
        }
      } else {
        // No filters selected - show all products
        await this.getProducts();
        return;
      }

      // Ensure all products have proper VAT rate information
      this.processProductsVatRates();
    },


    // pagination
    async paginate() {
      if (this.query === "") {
        await this.filterProducts();
      } else {
        await this.searchProducts();
      }
    },

    // Reset pagination
    async resetPagination() {
      this.pagination ? (this.pagination.current_page = 1) : "";
      await this.searchProducts();
    },

    // search data
    async searchProducts() {
      let catSlug = this.form.category ? this.form.category.slug : "";
      let subCatSlug = this.form.subCategory ? this.form.subCategory.slug : "";
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      const { data } = await axios.get(
        window.location.origin +
        "/api/products/search-from-pos" +
        "?term=" +
        this.query +
        "&page=" +
        currentPage +
        "&perPage=" +
        this.perPage +
        "&catSlug=" +
        catSlug +
        "&SubCatSlug=" +
        subCatSlug
      );
      this.products = data.data;
      this.products.sort(this.sortProducts);
      this.pagination = data.meta;

      // Ensure all products have proper VAT rate information
      this.processProductsVatRates();
      console.log(this.pagination);
    },

    // Reload after search
    async reload() {
      this.query = "";
      await this.searchProducts();
    },

    // store item in array
    async storeProduct(product) {
      // If product has zero stock and is not a service, open stock adjustment modal
      if (product.itemType !== "service" && Number(product.inventoryCount) < 1) {
        this.openStockAdjustmentModal(product);
        return;
      }

      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let quantity = 1;
      if (product.itemType == "service" || product.inventoryCount >= quantity) {
        if (index === -1) {
          // Ensure taxes are loaded before assigning VAT rate
          if (!this.taxes || this.taxes.length === 0) {
            console.warn('Taxes not loaded yet, loading now...');
            await this.getTaxes();
          }

          // Find the appropriate VAT rate
          let selectedVatRate = this.findMatchingVatRate(product.productTax) ||
            this.form.orderTax ||
            this.taxes?.[0];

          // Ensure we use the exact object reference from taxes array
          if (selectedVatRate && this.taxes) {
            const exactTaxObject = this.taxes.find(tax =>
              tax.id === selectedVatRate.id ||
              (tax.rate === selectedVatRate.rate && tax.code === selectedVatRate.code)
            );
            if (exactTaxObject) {
              selectedVatRate = exactTaxObject;
            }
          }


          this.form.selectedProducts.unshift({
            id: product.id,
            itemType: product.itemType,
            slug: product.slug,
            name: product.name,
            code: product.code,
            taxType: product.taxType,
            taxRate: product.taxRate,
            qty: quantity,
            inventoryCount: product.inventoryCount,
            avgPurchasePrice: product.avgPurchasePrice,
            unitPrice: product.regularPrice,
            unitCost: product.regularPrice, // Will be recalculated
            totalPrice: product.regularPrice, // Will be recalculated
            productTax: 0, // Will be recalculated
            totalTax: 0, // Will be recalculated
            discount: 0,
            discountType: "fixed",
            discountAmount: 0,
            selectedVatRate: selectedVatRate,
            sales_account_id: product.sales_account_id, // Include sales account ID
          });

          // Recalculate all totals for the new product
          this.generateItemTotalPrice(0); // Index 0 because we used unshift


          // play sound if added
          this.audio.play();
        } else {
          quantity = this.form.selectedProducts[index].qty;
          // play sound if added
          this.audio.play();
          this.generateItemTotal(quantity, "qty", index, "increment");
          let unitPrice = this.form.selectedProducts[index].unitPrice;
          this.generateItemTotal(unitPrice, "price", index, "noIncrement");
          return;
        }
      } else {
        toast.fire({
          type: "error",
          title: this.$t("Insufficient Stock"),
        });
      }
      this.calculateSum();
      return;
    },

    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          item.qty = value;
          if (item.itemType == "service" || item.inventoryCount >= value) {
            if (action == "increment") {
              item.qty = Number(item.qty) + 1;
            } else if (action == "decrement") {
              item.qty = Number(item.qty) - 1;
            }
          } else {
            item.qty = 1;
            toast.fire({
              type: "error",
              title: this.$t("Not enough items!"),
            });
          }
        } else if (type == "price" && action == "noIncrement") {
          item.unitPrice = value;
          item.unitPrice = Number(item.unitPrice);
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

        // Use the new calculation method that handles discount and VAT
        this.generateItemTotalPrice(index);
      }
      this.calculateSum();
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

    // get product index in selectedProducts array
    getProductIndex(product) {
      return this.form.selectedProducts.indexOf(product);
    },

    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          item.discountAmount = this.roundToTwoDecimals(
            (item.unitPrice * item.qty * item.discount) / 100
          );
        } else {
          item.discountAmount = this.roundToTwoDecimals(
            Number(item.discount || 0)
          );
        }

        // Recalculate totals
        this.generateItemTotalPrice(index);
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
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },

    // find matching VAT rate
    findMatchingVatRate(productTax) {
      if (!this.taxes || this.taxes.length === 0) return null;

      // If productTax is a number, find matching rate
      if (typeof productTax === "number" && productTax > 0) {
        const matchingTax = this.taxes.find((tax) => tax.rate === productTax);
        if (matchingTax) return matchingTax;
      }

      // If productTax is an object, return it directly
      if (typeof productTax === "object" && productTax !== null) {
        return productTax;
      }

      // If no match found or productTax is invalid, return VAT@15 (15%) as default
      const vat15 = this.taxes.find((tax) => tax.rate === 15);
      if (vat15) return vat15;

      // Fallback to first available VAT rate if 15% not found
      return this.taxes[0];
    },

    // round to two decimals
    roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },

    // process products to ensure they have proper VAT rate information
    processProductsVatRates() {
      if (!this.products || !this.taxes || this.taxes.length === 0) return;

      this.products.forEach(product => {
        // If product doesn't have a proper VAT rate, assign VAT@15 (15%) as default
        if (!product.vatRate || !product.vatRate.rate) {
          const vat15 = this.taxes.find((tax) => tax.rate === 15);
          product.vatRate = vat15 || this.taxes[0];
        }

        // Ensure productTax is properly set
        if (!product.productTax && product.vatRate && product.vatRate.rate > 0) {
          product.productTax = product.vatRate.rate;
        }
      });
    },

    // generate item total price with discount and VAT
    generateItemTotalPrice(index) {
      let item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }

      // Normalize numeric inputs
      const unitPriceNumber = Number(item.unitPrice) || 0;
      const qtyNumber = Number(item.qty) || 0;

      // Calculate total before discount (unit price × quantity)
      const totalBeforeDiscount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber);

      // Calculate product-level discount amount based on type
      let productDiscountAmount = 0;
      if (item.discountType === "percentage") {
        productDiscountAmount = this.roundToTwoDecimals((totalBeforeDiscount * (item.discount || 0)) / 100);
      } else {
        productDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
      }

      // Ensure product discount amount doesn't exceed the total before discount
      if (productDiscountAmount > totalBeforeDiscount) {
        productDiscountAmount = this.roundToTwoDecimals(totalBeforeDiscount);
      }

      // Get proportional invoice-level discount allocation (if any)
      const proportionalDiscount = item.proportionalDiscountAmount || 0;

      // Total discount = product discount + proportional invoice-level discount
      const discountAmount = this.roundToTwoDecimals(productDiscountAmount + proportionalDiscount);

      // Ensure total discount doesn't exceed the total before discount
      const finalDiscountAmount = discountAmount > totalBeforeDiscount 
        ? this.roundToTwoDecimals(totalBeforeDiscount) 
        : discountAmount;

      // Calculate net total after discount (this is what VAT is calculated on)
      const netTotal = this.roundToTwoDecimals(totalBeforeDiscount - finalDiscountAmount);

      // Get proportional transport cost allocation (if any)
      const proportionalTransport = item.proportionalTransportAmount || 0;

      // Calculate VAT on (netTotal + proportionalTransport)
      let productTax = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate > 0) {
        const vatBase = this.roundToTwoDecimals(netTotal + proportionalTransport);
        productTax = this.roundToTwoDecimals(vatBase * (item.selectedVatRate.rate / 100));
      }

      const totalTax = productTax;

      // Calculate final total: netTotal + proportionalTransport + VAT
      const totalPrice = this.roundToTwoDecimals(netTotal + proportionalTransport + totalTax);

      // Update item with all calculated values using $set for reactivity
      this.$set(this.form.selectedProducts[index], 'discountAmount', finalDiscountAmount);
      this.$set(this.form.selectedProducts[index], 'productDiscountAmount', productDiscountAmount);
      this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalDiscount);
      this.$set(this.form.selectedProducts[index], 'proportionalTransportAmount', proportionalTransport);
      this.$set(this.form.selectedProducts[index], 'totalBeforeDiscount', totalBeforeDiscount);
      this.$set(this.form.selectedProducts[index], 'totalAfterDiscount', netTotal);
      this.$set(this.form.selectedProducts[index], 'netTotal', netTotal);
      this.$set(this.form.selectedProducts[index], 'productTax', productTax);
      this.$set(this.form.selectedProducts[index], 'totalTax', totalTax);
      this.$set(this.form.selectedProducts[index], 'totalPrice', totalPrice);

      // Update unit cost
      if (qtyNumber > 0) {
        this.$set(this.form.selectedProducts[index], 'unitCost', this.roundToTwoDecimals(totalPrice / qtyNumber));
      }
    },

    // calculate sum
    calculateSum() {
      // Calculate base subtotal (sum of all item subtotals: qty × unit_price)
      let invoiceSubtotal = 0;
      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber = Number(item.unitPrice) || 0;
        const qtyNumber = Number(item.qty) || 0;
        invoiceSubtotal += unitPriceNumber * qtyNumber;
      });
      this.form.subTotal = this.roundToTwoDecimals(invoiceSubtotal);

      // Calculate full invoice discount based on discountType and discount
      let invoiceLevelDiscount = 0;
      if (this.form.discount && Number(this.form.discount) > 0 && this.form.subTotal > 0) {
        const discountValue = Number(this.form.discount);
        if (this.form.discountType == 1) {
          // Percentage discount on invoice subtotal
          invoiceLevelDiscount = this.roundToTwoDecimals((this.form.subTotal * discountValue) / 100);
          // Ensure discount doesn't exceed 100%
          if (discountValue > 100) {
            invoiceLevelDiscount = this.roundToTwoDecimals(this.form.subTotal);
          }
          this.form.totalDiscount = invoiceLevelDiscount;
        } else {
          // Fixed discount amount
          invoiceLevelDiscount = this.roundToTwoDecimals(discountValue);
          // Ensure discount doesn't exceed subtotal
          if (invoiceLevelDiscount > this.form.subTotal) {
            invoiceLevelDiscount = this.roundToTwoDecimals(this.form.subTotal);
          }
          this.form.totalDiscount = invoiceLevelDiscount;
        }
      } else {
        this.form.totalDiscount = 0;
      }

      // Get transport cost
      const transportCost = Number(this.form.transportCost || 0);

      // Allocate invoice-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(invoiceLevelDiscount);

      // Allocate transport costs proportionally to items
      this.allocateTransportCostProportionally(transportCost);

      // Recalculate all items with proportional discount and transport allocation
      this.recalculateAllItemsWithProportionalDiscount();

      // Calculate totals directly from products array
      let totalProportionalDiscount = 0;
      let totalProportionalTransport = 0;
      let totalProductTax = 0;

      this.form.selectedProducts.forEach((item) => {
        // Sum discountAmount which includes both product-level and invoice-level discounts
        totalProportionalDiscount += Number(item.discountAmount || 0);
        totalProportionalTransport += Number(item.proportionalTransportAmount || 0);
        totalProductTax += Number(item.totalTax || 0);
      });

      // Round the totals
      totalProportionalDiscount = this.roundToTwoDecimals(totalProportionalDiscount);
      totalProportionalTransport = this.roundToTwoDecimals(totalProportionalTransport);
      this.form.productTotalTax = this.roundToTwoDecimals(totalProductTax);

      // Calculate invoice-level tax on net amount (skip for Saudi Arabia)
      // Net amount = subtotal - total proportional discount + total proportional transport
      const netAmount = this.roundToTwoDecimals(
        this.form.subTotal - totalProportionalDiscount + totalProportionalTransport
      );
      
      let invoiceTax = 0;
      if (!this.isSaudiArabia && this.form.orderTax) {
        invoiceTax = this.roundToTwoDecimals(
          (this.form.orderTax.rate / 100) * netAmount
        );
      }

      // Total tax = product VAT + invoice-level tax
      this.form.totalTax = Number(
        (this.form.productTotalTax + invoiceTax).toFixed(2)
      );

      // Calculate final total: المبلغ الصافي + الضريبة
      // المبلغ الصافي = المجموع الفرعي - إجمالي الخصم + إجمالي تكلفة الشحن
      this.form.netTotal = Number((netAmount + this.form.totalTax).toFixed(2));
      return;
    },

    // Allocate invoice-level discount proportionally across all items based on item subtotals (qty × unit_price)
    // For fixed discount: ProductDiscount = ProductShare × InvoiceDiscount (proportional)
    // For percentage discount: ProductDiscount = ProductSubtotal × (InvoiceDiscount / 100) (direct application)
    allocateInvoiceDiscountProportionally(invoiceLevelDiscount) {
      if (!this.form.discount || Number(this.form.discount) <= 0 || this.form.subTotal <= 0) {
        // Clear proportional discounts if no invoice-level discount
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalDiscountAmount) {
            this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: qty × unit_price)
      let invoiceSubtotal = 0;
      const itemSubtotals = [];

      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber = Number(item.unitPrice) || 0;
        const qtyNumber = Number(item.qty) || 0;
        const itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = qty × unit_price

        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      const discountValue = Number(this.form.discount);
      let allocatedTotal = 0;

      this.form.selectedProducts.forEach((item, index) => {
        const itemSubtotal = itemSubtotals[index] || 0;
        let proportionalAmount = 0;

        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          if (this.form.discountType == 1) {
            // Percentage discount: ProductDiscount = ProductSubtotal × (InvoiceDiscount / 100)
            proportionalAmount = this.roundToTwoDecimals(itemSubtotal * (discountValue / 100));
          } else {
            // Fixed discount: ProductDiscount = ProductShare × InvoiceDiscount
            const proportion = itemSubtotal / invoiceSubtotal;
            proportionalAmount = this.roundToTwoDecimals(invoiceLevelDiscount * proportion);
          }
          allocatedTotal += proportionalAmount;
        }

        // Store proportional discount amount
        this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item (only for fixed discount)
      if (this.form.discountType == 0) {
        const roundingDifference = this.roundToTwoDecimals(invoiceLevelDiscount - allocatedTotal);
        if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
          const lastIndex = this.form.selectedProducts.length - 1;
          const lastItem = this.form.selectedProducts[lastIndex];
          const currentProportional = lastItem.proportionalDiscountAmount || 0;
          const adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
          this.$set(this.form.selectedProducts[lastIndex], 'proportionalDiscountAmount', Math.max(0, adjusted));
        }
      }
    },

    // Allocate transport costs proportionally across all items based on item subtotals (qty × unit_price)
    // Formula: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
    allocateTransportCostProportionally(transportCost) {
      if (!transportCost || transportCost <= 0) {
        // Clear proportional transport if no transport cost
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalTransportAmount) {
            this.$set(this.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: qty × unit_price)
      let invoiceSubtotal = 0;
      const itemSubtotals = [];

      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber = Number(item.unitPrice) || 0;
        const qtyNumber = Number(item.qty) || 0;
        const itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = qty × unit_price
        
        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      // Allocate transport proportionally based on item subtotals
      let allocatedTotal = 0;
      this.form.selectedProducts.forEach((item, index) => {
        const itemSubtotal = itemSubtotals[index] || 0;
        let proportionalAmount = 0;

        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
          const proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = this.roundToTwoDecimals(transportCost * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional transport amount
        this.$set(this.form.selectedProducts[index], 'proportionalTransportAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      const roundingDifference = this.roundToTwoDecimals(transportCost - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        const lastIndex = this.form.selectedProducts.length - 1;
        const lastItem = this.form.selectedProducts[lastIndex];
        const currentProportional = lastItem.proportionalTransportAmount || 0;
        const adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalTransportAmount', Math.max(0, adjusted));
      }
    },

    // Recalculate all items with proportional discount and transport allocation
    recalculateAllItemsWithProportionalDiscount() {
      this.form.selectedProducts.forEach((item, index) => {
        // Recalculate this item to include proportional discount and transport
        this.generateItemTotalPrice(index);
      });
      // Force Vue to update the reactive properties
      this.$forceUpdate();
    },

    // save invoice
    async saveInvoice(isDirect = true) {
      // Ensure appInfo is loaded before proceeding
      await this.ensureAppInfoLoaded();

      // Ensure all calculations are up to date before saving
      this.calculateSum();

      // Prepare product data with calculated values for backend
      const preparedProducts = this.form.selectedProducts.map((product) => {
        return {
          ...product,
          // Ensure all calculated values are included
          discountAmount: product.discountAmount || 0,
          productDiscountAmount: product.productDiscountAmount || 0,
          proportionalDiscountAmount: product.proportionalDiscountAmount || 0,
          proportionalTransportAmount: product.proportionalTransportAmount || 0,
          totalBeforeDiscount: product.totalBeforeDiscount || (product.unitPrice * product.qty),
          totalAfterDiscount: product.totalAfterDiscount || 0,
          productTax: product.productTax || 0,
          totalTax: product.totalTax || 0,
          totalPrice: product.totalPrice || 0,
          unitCost: product.unitCost || product.unitPrice,
        };
      });

      // Calculate totals from prepared products (use already calculated values)
      const totalProportionalDiscount = this.totalProportionalDiscount;
      const totalProportionalTransport = this.totalProportionalTransport;
      const totalProductTax = this.form.productTotalTax;

      // Update form with prepared data and calculated totals
      this.form.selectedProducts = preparedProducts;
      this.form.subTotal = this.roundToTwoDecimals(this.totalSubtotalSummary);
      this.form.totalDiscount = this.roundToTwoDecimals(totalProportionalDiscount);
      this.form.productTotalTax = this.roundToTwoDecimals(totalProductTax);
      
      // Calculate invoice-level tax if applicable
      const netAmount = this.roundToTwoDecimals(
        this.form.subTotal - totalProportionalDiscount + totalProportionalTransport
      );
      let invoiceTax = 0;
      if (!this.isSaudiArabia && this.form.orderTax) {
        invoiceTax = this.roundToTwoDecimals(
          (this.form.orderTax.rate / 100) * netAmount
        );
      }
      
      this.form.totalTax = this.roundToTwoDecimals(totalProductTax + invoiceTax);
      // Net total = net amount + invoice tax (product tax is already included in product totals)
      this.form.netTotal = this.roundToTwoDecimals(netAmount + invoiceTax);
      
      // Ensure transportCost is set
      this.form.transportCost = this.form.transportCost || 0;

      await this.form
        .post(window.location.origin + "/api/invoices")
        .then(async ({ data }) => {
          this.form.invoice_id = data.data.invoice_id;
          this.form.invoice_slug = data.data.invoice_slug;
          this.clearTemporaryData();

          if (isDirect) {
            // Send to ZATCA if in Saudi Arabia and this is a direct save
            if (this.isSaudiArabia) {
              try {
                await this.sendInvoiceToZatca(this.form.invoice_slug);
              } catch (error) {
                console.error('Failed to send invoice to ZATCA:', error);
                // Show error but don't block the flow
                this.$toast.error(
                  this.$t("ZATCA Error"),
                  this.$t("Invoice created but failed to send to ZATCA. Please try sending manually.")
                );
              }
            }
            this.showInvoiceAndPrint();
          }
        })
        .catch((error) => {
          const ErrorHandler = require("~/utils/errorHandler").default;
          ErrorHandler.handleApiError(error, {
            showValidationErrors: false,
          });
        });
    },

    // save payment
    async addPayment() {
      if (this.form.invoice_id != null) {
        // Create FormData for file upload
        const formData = new FormData();

        // Add basic form fields manually to avoid nested object issues
        formData.append('account', JSON.stringify(this.form.account));
        formData.append('paidAmount', this.form.paidAmount);
        formData.append('chequeNo', this.form.chequeNo || '');
        formData.append('receiptNo', this.form.receiptNo || '');
        formData.append('date', this.form.date);
        formData.append('note', this.form.note || '');
        formData.append('reference', this.form.reference || '');
        formData.append('poReference', this.form.poReference || '');
        formData.append('paymentTerms', this.form.paymentTerms || '');
        formData.append('deliveryPlace', this.form.deliveryPlace || '');
        formData.append('status', this.form.status);
        formData.append('netTotal', this.form.netTotal);

        // Add the invoice_id
        formData.append('invoice_id', this.form.invoice_id);

        // Handle file attachment
        if (this.form.attachment) {
          formData.append('attachment', this.form.attachment);
        }

        await axios
          .post(window.location.origin + "/api/invoices-pay", formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(async () => {
            this.showModal = false;
            await this.showInvoiceAndPrint();
            this.form.reset();
            this.againDefaultSettings();
          })
          .catch((error) => {
            const ErrorHandler = require("~/utils/errorHandler").default;
            ErrorHandler.handleApiError(error, {
              showValidationErrors: false,
            });
          });
      } else {
        const ErrorHandler = require("~/utils/errorHandler").default;
        ErrorHandler.showError(this.$t("Error"), this.$t("Please try again"));
      }
    },

    // close add payment modal and clear form data
    closeModalAndClearFormData() {
      this.showModal = false;
      this.generateOrder = false;
      this.form.reset();
      this.againDefaultSettings();
    },

    // handle attachment file change
    handleAttachmentChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
          this.$toast.error(
            this.$t("File too large"),
            this.$t("File size must be less than 10MB")
          );
          this.$refs.attachmentInput.value = '';
          return;
        }

        // Validate file type
        const allowedTypes = [
          'application/pdf',
          'image/jpeg',
          'image/jpg',
          'image/png',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (!allowedTypes.includes(file.type)) {
          this.$toast.error(
            this.$t("Invalid file type"),
            this.$t("Please select a PDF, JPG, PNG, DOC, or DOCX file")
          );
          this.$refs.attachmentInput.value = '';
          return;
        }

        this.form.attachment = file;
      }
    },

    // get attachment file name
    getAttachmentName() {
      if (this.form.attachment && this.form.attachment.name) {
        return this.form.attachment.name;
      }
      return '';
    },

    // remove attachment
    removeAttachment() {
      this.form.attachment = null;
      this.$refs.attachmentInput.value = '';
    },

    // close receipt modal
    closeReceiptModal() {
      this.showSmallInvoiceModal = false;
      this.form.reset();
      this.againDefaultSettings();
      this.clickCount = 0; // reset click count
      console.log("from close" + this.clickCount);
    },

    // complete order and add payment
    async completeOrderAndAddPayment() {
      await this.saveInvoice(false);
      if (this.form.invoice_id != null) {
        // Send to ZATCA before showing payment modal if in Saudi Arabia
        if (this.isSaudiArabia) {
          try {
            await this.sendInvoiceToZatca(this.form.invoice_slug);
          } catch (error) {
            console.error('Failed to send invoice to ZATCA:', error);
            // Show error but don't block the flow
            this.$toast.error(
              this.$t("ZATCA Error"),
              this.$t("Invoice created but failed to send to ZATCA. Please try sending manually.")
            );
          }
        }

        this.showModal = true;
        this.form.paidAmount = this.form.netTotal.toFixed(2);

        this.$nextTick(() => this.$refs.paidAmountInput.focus());
      }
    },

    // show invoice and print
    async showInvoiceAndPrint() {
      await this.getInvoice(this.form.invoice_slug);
      this.form.reset();
      this.againDefaultSettings();
      this.getProducts();

      this.showSmallInvoiceModal = true;
    },

    // print invoice
    async printInvoice() {
      try {
        const element = document.getElementById("invoice-POS");
        if (!element) return;

        // Ensure fonts/images are rendered before snapshot
        await new Promise((resolve) => setTimeout(resolve, 50));

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
          logging: false,
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight,
        });
        const imgData = canvas.toDataURL("image/png");

        const printWindow = window.open("", "_blank");
        if (!printWindow) return;

        // Minimal document with only the snapshot image
        printWindow.document.write(
          `<!DOCTYPE html><html><head><meta charset="utf-8"/>
            <title>Receipt</title>
            <style>
              html, body { margin: 0; padding: 0; background: #fff; }
              img { display: block; margin: 0 auto; max-width: 100%; }
              @page { size: auto; margin: 10mm; }
            </style>
          </head><body>
            <img id="receipt-img" src="${imgData}"/>
            <script>
              const img = document.getElementById('receipt-img');
              img.onload = function(){
                window.focus();
                window.print();
                setTimeout(() => window.close(), 200);
              };
            <\/script>
          </body></html>`
        );
        printWindow.document.close();
      } catch (err) {
        console.error("Print failed", err);
      }
    },
    // again default settings
    againDefaultSettings() {
      this.getAccounts();
      this.getClients();
      this.getTaxes();
      this.showModal = false;
      this.generateOrder = false;
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        client: this.form.client,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.productTotalTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        discountType: this.form.discountType,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        addPayment: this.form.addPayment,
        account: this.form.account,
        totalPaid: this.form.totalPaid,
        deliveryPlace: this.form.deliveryPlace,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem("posTempData", JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem("posTempData");
      if (tempData) {
        try {
          const data = JSON.parse(tempData);
          this.form.client = data.client || this.form.client;
          this.form.selectedProducts =
            data.selectedProducts || this.form.selectedProducts;
          this.form.subTotal = data.subTotal || this.form.subTotal;
          this.form.netTotal = data.netTotal || this.form.netTotal;
          this.form.transportCost =
            data.transportCost || this.form.transportCost;
          this.form.orderTax = data.orderTax || this.form.orderTax;
          this.form.productTotalTax =
            data.totalProductTax || this.form.productTotalTax;
          this.form.totalTax = data.totalTax || this.form.totalTax;
          this.form.discount = data.discount || this.form.discount;
          this.form.discountType = data.discountType || this.form.discountType;
          this.form.poReference = data.poReference || this.form.poReference;
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms;
          this.form.addPayment = data.addPayment || this.form.addPayment;
          this.form.account = data.account || this.form.account;
          this.form.totalPaid = data.totalPaid || this.form.totalPaid;
          this.form.deliveryPlace =
            data.deliveryPlace || this.form.deliveryPlace;
          this.form.date = data.date || this.form.date;
          this.form.note = data.note || this.form.note;
          this.form.status =
            data.status !== undefined ? data.status : this.form.status;
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail;
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS;
        } catch (e) {
          console.error("Error loading temporary data:", e);
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem("posTempData");
    },

    // open invoices page in new tab
    openInvoicesPage() {
      const routeData = this.$router.resolve({ name: 'invoices.index' });
      window.open(routeData.href, '_blank');
    },

    // send invoice to ZATCA
    async sendInvoiceToZatca(invoiceSlug) {
      try {
        const response = await axios.post(`/api/invoices/${invoiceSlug}/send-to-zatca`);

        if (response.data.success) {
          this.$toast.success(
            this.$t("Sent to ZATCA Successfully!"),
            this.$t("Invoice has been sent to ZATCA and journal entries have been created.")
          );
          return response.data;
        } else {
          throw new Error(response.data.message || 'Failed to send invoice to ZATCA');
        }
      } catch (error) {
        console.error('ZATCA sending error:', error);
        throw error;
      }
    },

    // ensure appInfo is loaded
    async ensureAppInfoLoaded() {
      if (!this.appInfo) {
        await this.$store.dispatch('operations/fetchSettingData');
      }
    },

    // Stock adjustment modal methods
    openStockAdjustmentModal(product) {
      this.selectedProductForStockAdjustment = product;
      this.showStockAdjustmentModal = true;
    },

    closeStockAdjustmentModal() {
      this.showStockAdjustmentModal = false;
      this.selectedProductForStockAdjustment = null;
    },

    adjustProductQuantity(product) {
      // In POS, we don't need to adjust quantity in selected products
      // Just close the modal and refresh products
      this.closeStockAdjustmentModal();
      this.getProducts();
    },

    handleStockUpdated(eventData) {
      // Refresh products to get updated stock levels
      this.getProducts();

      // If the product was in selectedProducts, update its inventory count
      const { product, newQuantity } = eventData;
      const index = this.form.selectedProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'inventoryCount', newQuantity);
      }

      this.closeStockAdjustmentModal();
    },

    // Format number to 2 decimal places
    formatNumber(value) {
      if (!value && value !== 0) return '0.00';
      const num = Number(value);
      return isNaN(num) ? '0.00' : num.toFixed(2);
    },

    // Auto-assign client chart of account
    async autoAssignClientChartOfAccount() {
      if (!this.form.client || this.isAutoAssigningClient) {
        return;
      }

      this.isAutoAssigningClient = true;

      try {
        const currentClientSlug = this.form.client.slug;

        const response = await axios.post(`/api/clients/${this.form.client.slug}/auto-assign-chart-of-account`);

        if (response.data.success) {
          const newAccountId = response.data.chart_of_account_id || (response.data.data && response.data.data.chart_of_account_id) || null;
          if (newAccountId) {
            this.form.client.chart_of_account_id = newAccountId;
            // Also update the option in clients list
            const idx = this.clients.findIndex(i => i.slug === currentClientSlug);
            if (idx !== -1) {
              this.$set(this.clients[idx], 'chart_of_account_id', newAccountId);
            }
          }

          this.$nextTick(() => {
            this.$forceUpdate();
          });

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

        if (error.response?.status === 400) {
          toast.fire({
            type: "error",
            title: this.$t("Assignment Failed"),
            text: error.response.data.message || this.$t("Bad request error"),
            timer: 6000,
            timerProgressBar: true,
          });
        } else if (error.response?.data?.message) {
          toast.fire({
            type: "error",
            title: this.$t("Assignment Failed"),
            text: error.response.data.message,
            timer: 6000,
            timerProgressBar: true,
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: this.$t("Please try again or assign manually"),
            timer: 5000,
            timerProgressBar: true,
          });
        }
      } finally {
        this.isAutoAssigningClient = false;
      }
    },

    // Auto-assign product chart of account
    async autoAssignProductChartOfAccount(product, type = 'sales') {
      if (!product || this.isAutoAssigningProduct === product.id) {
        return;
      }

      this.isAutoAssigningProduct = product.id;

      try {
        const response = await axios.post(`/api/products/${product.slug}/${type}/auto-assign-chart-of-account`);

        if (response.data.success) {
          // Update the product in selectedProducts array
          const index = this.form.selectedProducts.findIndex(p => p.id === product.id);
          if (index !== -1) {
            if (type === 'sales') {
              this.$set(this.form.selectedProducts[index], 'sales_account_id', response.data.sales_account_id);
            }
          }

          // Also update in products list if it exists
          const productIndex = this.products.findIndex(p => p.id === product.id);
          if (productIndex !== -1) {
            if (type === 'sales') {
              this.$set(this.products[productIndex], 'sales_account_id', response.data.sales_account_id);
            }
          }

          this.$nextTick(() => {
            this.$forceUpdate();
          });

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
        console.error('Error auto-assigning chart of account for product:', error);

        if (error.response?.status === 400) {
          toast.fire({
            type: "error",
            title: this.$t("Assignment Failed"),
            text: error.response.data.message || this.$t("Bad request error"),
            timer: 6000,
            timerProgressBar: true,
          });
        } else if (error.response?.data?.message) {
          toast.fire({
            type: "error",
            title: this.$t("Assignment Failed"),
            text: error.response.data.message,
            timer: 6000,
            timerProgressBar: true,
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: this.$t("Please try again or assign manually"),
            timer: 5000,
            timerProgressBar: true,
          });
        }
      } finally {
        this.isAutoAssigningProduct = null;
      }
    },
  },
  mounted() {
    this.loadTemporaryData();
  },
};
</script>

<style lang="scss" scoped>
/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

.table-price-counter-nowrap {
  display: flex;
  flex-wrap: nowrap;
}

.table-product-title {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.pos-r-head-search {
  width: 100%;
  flex: 0 0 100%;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0 20px;
}

.pos-r-head-search > .search,
.pos-r-head-search > search {
  flex: 1 1 auto;
  min-width: 0;
}

.pos-filter-toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  color: #6c757d;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.pos-filter-toggle-btn:hover {
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  border-color: #33a0d9;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.25);
  transform: translateY(-1px);
}

.pos-filter-toggle-btn-active {
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  border-color: #33a0d9;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(51, 160, 217, 0.3);
}

.pos-filter-toggle-btn-active:hover {
  background: linear-gradient(135deg, #2a8bc7 0%, #2280b3 100%);
  box-shadow: 0 6px 16px rgba(51, 160, 217, 0.35);
}

@media only screen and (max-width: 767px) {
  .pos-r-head-search {
    padding: 0 15px;
  }

  .pos-filter-toggle-btn {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
}

/* Category and Subcategory Filter Cards */
.pos-filter-categories,
.pos-filter-subcategories {
  width: 100%;
  margin: 0px 20px;
}

.pos-filter-categories:first-of-type {
  margin-top: 15px;
}

.pos-filter-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #2f3541;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.pos-filter-card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #33a0d9 #f8f9fa;
}

.pos-filter-card-list::-webkit-scrollbar {
  height: 6px;
}

.pos-filter-card-list::-webkit-scrollbar-track {
  background: #f8f9fa;
  border-radius: 3px;
}

.pos-filter-card-list::-webkit-scrollbar-thumb {
  background: #33a0d9;
  border-radius: 3px;
}

.pos-filter-card-list::-webkit-scrollbar-thumb:hover {
  background: #2a8bc7;
}

.pos-filter-card {
  flex: 0 0 auto;
  min-width: 120px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.pos-filter-card-content {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.pos-filter-card:hover .pos-filter-card-content {
  border-color: #33a0d9;
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.15);
  transform: translateY(-2px);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
}

.pos-filter-card-active .pos-filter-card-content {
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  border-color: #33a0d9;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(51, 160, 217, 0.3);
}

.pos-filter-card-active .pos-filter-card-icon,
.pos-filter-card-active .pos-filter-card-name {
  color: #ffffff;
}

.pos-filter-card-icon {
  font-size: 16px;
  color: #33a0d9;
  flex-shrink: 0;
  transition: color 0.3s ease;
}

.pos-filter-card-name {
  font-size: 13px;
  font-weight: 500;
  color: #2f3541;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.3s ease;
}

@media only screen and (max-width: 767px) {
  .pos-filter-card {
    min-width: 100px;
    flex: 1 1 calc(50% - 5px);
  }
  
  .pos-filter-card-content {
    padding: 8px 12px;
  }
  
  .pos-filter-card-name {
    font-size: 12px;
  }
}

.pos-logo {
  text-align: center;
}

.pos-item-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

.pos-item-grid>div {
  border: 0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #e9ecef;
  position: relative;
  background: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.pos-item-grid>div:hover {
  border-color: #33a0d9;
  box-shadow: 0 4px 16px rgba(51, 160, 217, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.pos-item-grid>div .box-qty {
  position: absolute;
  width: 50px;
  height: 30px;
  display: block;
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  top: 0;
  left: 0px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border-bottom-right-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.qty-red {
  background: red !important;
}

.pos-body {
  border-radius: 5px;
  min-height: 240px;
}

.pos-box-hover-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(51, 160, 217, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(51, 160, 217, 0.4);
  pointer-events: none;
}

.pos-box-hover-icon i {
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
}

.pos-item-grid>div:hover .pos-box-hover-icon {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}

.pos-item-grid>div .pos-box-hover-icon {
  transform: translate(-50%, -50%) scale(0.8);
}

.pos-box-img {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #e9ecef;
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  line-height: 200px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: #6c757d;
  transition: background 0.3s ease;
  position: relative;
}

.pos-box-image-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.pos-box-img img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.pos-box-no-preview {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  color: #6c757d;
  text-align: center;
  line-height: 1.4;
}

.pos-box-content {
  padding: 10px 12px;
  background: #ffffff;
}

.pos-box-content span {
  color: #0775af;
  display: block;
}

.pos-box-name-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 6px;
}

.pos-box-text {
  flex: 1;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #2f3541;
  line-height: 1.4;
  text-align: left;
}

.pos-box-price {
  font-size: 16px;
  font-weight: 700;
  color: #33a0d9;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  white-space: nowrap;
  flex-direction: row-reverse;
}

.pos-item-grid-red {
  border-color: red !important;
}

.card-client-search {
  padding: 20px;
  border-bottom: 1px solid #e9ecef;
  background: #ffffff;
}

.pos-main-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e9ecef;
  overflow: hidden;
}

.table-wrap {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
}

.table-wrap .general-table tbody tr {
  transition: background-color 0.2s ease;
}

.table-wrap .general-table tbody tr:hover {
  background-color: #f8f9fa;
}

.table-responsive.table-wrap>table {
  border: 1px solid #ddd;
}

/* GeneralTable integration with POS styles */
.table-wrap .table-custom {
  border: 1px solid #ddd;
}

.table-wrap .general-table {
  border: 1px solid #ddd;
}

.table-wrap .general-table thead tr {
  border-bottom: 0;
  background: linear-gradient(to bottom, rgba(51, 160, 217, 0.12), rgba(51, 160, 217, 0.08)) !important;
}

.table-wrap .general-table thead th {
  font-weight: 600;
  color: #2f3541;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  padding: 12px 8px;
  border-bottom: 2px solid #33a0d9;
}

.table-wrap .table thead tr {
  border-bottom: 0;
  background: #33a0d91f !important;
}

/* POS Summary Values in Footer */
.pos-summary-values {
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  border: 1px solid #e9ecef;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.pos-summary-items-inline {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  transition: all 0.2s ease;
  flex: 0 0 auto;
  min-width: 120px;
}

.summary-item:hover {
  border-color: #33a0d9;
  box-shadow: 0 2px 8px rgba(51, 160, 217, 0.1);
}

.summary-label {
  font-size: 13px;
  font-weight: 600;
  color: #6c757d;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.summary-value {
  font-size: 18px;
  font-weight: 700;
  color: #2f3541;
  display: flex;
  align-items: center;
  gap: 4px;
}

@media only screen and (max-width: 767px) {
  .pos-summary-values {
    padding: 12px;
  }

  .pos-summary-items-inline {
    gap: 10px;
  }

  .summary-item {
    min-width: 100px;
    padding: 8px;
  }

  .summary-label {
    font-size: 12px;
  }

  .summary-value {
    font-size: 14px;
  }
}

.table-wrap .incrementor {
  width: 80px;
}

.table-wrap .custom-qty-input {
  display: inline-flex !important;
  justify-content: center;
  border: 1px solid #ececfdb8;
  padding: 0;
  border-radius: 18px;
  /* background: #ddd; */
}

.pos-qty-btn-minus {
  border: none;
  border-radius: 0 16px 16px 0;
  padding: 10px;
  background: #c82333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pos-qty-btn-minus:hover {
  background: #a01e2a;
}

.pos-qty-btn-plus {
  border: none;
  border-radius: 16px 0 0 16px;
  padding: 10px;
  background: #2ab930;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pos-qty-btn-plus:hover {
  background: #229a26;
}

.pos-card-footer {
  border: 1px solid #e9ecef;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.pos-net-total {
  background: linear-gradient(135deg, rgba(51, 160, 217, 0.15) 0%, rgba(42, 139, 199, 0.15) 100%);
  width: 100%;
  padding: 15px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #2f3541;
  border-top: 2px solid #33a0d9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.pos-net-total .net-total-value {
  font-size: 32px;
  font-weight: 700;
  color: #33a0d9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

@media only screen and (max-width: 767px) {
  .pos-net-total {
    font-size: 16px;
  }

  .pos-net-total .net-total-value {
    font-size: 24px;
  }
}

.product {
  cursor: pointer;

  .info-box {
    &:hover {
      background: #e0e0e0;
    }
  }
}

.dark-mode .pos-body,
.dark-mode .pos-r-head {
  background: #111827 !important;
  border-color: #000;
}

.dark-mode .pos-item-grid>div {
  border-color: #6c757d !important;
}

.dark-mode .pos-box-content {
  padding: 5px 10px;
  color: #fff;
}

.dark-mode .pos-item-grid>div.pos-item-grid-red {
  border-color: red !important;
}

.dark-mode .card-client-search {
  border-color: #6c757d;
}

.dark-mode .table-striped tbody tr:nth-of-type(odd) {
  background-color: #1f2937;
}

.dark-mode .table-responsive.table-wrap>table {
  border: 1px solid #6c757d;
}

.dark-mode .table-wrap .incrementor {
  border: none !important;
}

.dark-mode .pos-card-footer.bg-white {
  background: #111827 !important;
  border-color: #6c757d;
}

.dark-mode .pos-card-footer label {
  color: #fff;
}

.dark-mode .pos-net-total {
  background: rgb(99 169 241);
  color: #fff;
}

#invoice-POS td,
#invoice-POS th,
#invoice-POS tr,
#invoice-POS table {
  border-collapse: collapse;
}

#invoice-POS tr {
  border-bottom: 2px dotted #05070b;
}

#invoice-POS table {
  width: 100%;
}

#invoice-POS tfoot tr th:first-child {
  text-align: left;
}

#invoice-POS .info {
  margin-bottom: 20px;
}

#invoice-POS .info>p {
  margin-top: 20px;
}

#legalcopy {
  margin-top: 5mm;
}

#legalcopy p {
  text-align: center;
}

#bar {
  text-align: center;
}

.total {
  font-weight: bold;
  font-size: 12px;
}

span.pqty {
  display: block;
  line-height: 15px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
}

@media only screen and (max-width: 991px) {
  .pos-item-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 767px) {
  .sm-col-reverse {
    flex-direction: column-reverse;
  }

  .pos-item-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 480px) {
  .pos-item-grid {
    grid-template-columns: 1fr;
  }
}

.create-btn {
  padding: 11px;
  background: #33a0d9;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.create-btn:hover {
  background: #2a8bc7;
  transform: scale(1.05);
}

.pos-section-label {
  font-size: 14px;
  font-weight: 700;
  color: #2f3541;
  display: block;
}

.pos-client-section {
  margin: 0px 20px;
}

.pos-client-section .d-flex {
  gap: 10px;
  align-items: stretch;
}

.pos-client-section .v-select {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.pos-client-section .create-btn {
  border-radius: 8px;
  transition: all 0.3s ease;
}

.pos-client-section .create-btn:hover {
  transform: translateY(-1px);
}

.create-btn-2 {
  padding: 10px;
}

.btn-primary {
  background: #2ab930 !important;
  border: none;
  box-shadow: 0 2px 4px rgba(42, 185, 48, 0.2);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #229a26 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(42, 185, 48, 0.4);
}

.pos-btn {
  padding: 12px 20px;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pos-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pos-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.pos-action-buttons {
  margin-top: 15px;
}

.pos-input-label {
  font-size: 13px;
  font-weight: 600;
  color: #495057;
  margin-bottom: 6px;
  display: block;
}

.pos-input {
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 8px 12px;
  transition: all 0.3s ease;
}

.pos-input:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.15);
  outline: none;
}

.pos-input-append {
  background: #f8f9fa;
  border-color: #ced4da;
  color: #495057;
  font-weight: 600;
}

.pos-footer-inputs {
  background: #f8f9fa;
  border-radius: 6px;
  margin: 15px;
  padding: 20px !important;
}

.pos-footer-inputs .form-group {
  margin-bottom: 0;
}

/* Enhanced RTL support */
[dir="rtl"] .pos-box-price {
  text-align: right;
}

[dir="rtl"] .summary-value {
  text-align: right;
}

[dir="rtl"] .pos-net-total {
  text-align: center;
}

/* Stock warning icon in POS */
.stock-warning-icon-pos {
  position: absolute;
  top: 100px;
  right: 5px;
  background: #dc3545;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 2px solid #fff;
}

.stock-warning-icon-pos:hover {
  background: #c82333;
  transform: scale(1.15);
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.4);
}

.relative {
  position: relative;
}

/* Make quantity more visible when zero */
.box-qty.qty-red {
  font-weight: bold;
  font-size: 13px;
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.7;
  }
}

/* Client and Product Chart of Account Warnings */
.client-warning,
.product-warning {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background: linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%);
  border: 1px solid #ffc107;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(255, 193, 7, 0.15);
  transition: all 0.3s ease;
}

.client-warning:hover,
.product-warning:hover {
  box-shadow: 0 4px 8px rgba(255, 193, 7, 0.25);
  transform: translateY(-1px);
}

.client-warning i,
.product-warning i {
  margin-right: 8px;
  font-size: 16px;
}

.client-status,
.product-status {
  margin-top: 12px;
}

/* Badge styling for product warnings in table */
.badge.badge-warning {
  background-color: #ffc107;
  color: #212529;
  font-size: 11px;
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.badge.badge-warning .btn-link {
  color: #212529;
  text-decoration: none;
  padding: 0;
  margin: 0;
  line-height: 1;
}

.badge.badge-warning .btn-link:hover {
  color: #000;
  text-decoration: none;
}

.badge.badge-warning .btn-link:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Product warning in POS product grid */
.product-warning-pos {
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 3px 5px;
  background-color: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 3px;
  font-size: 9px;
  margin-top: 3px;
  width: 100%;
  line-height: 1.1;
  height: auto;
  box-sizing: border-box;
}

.product-warning-pos i.fa-exclamation-triangle {
  margin-right: 3px;
  font-size: 9px;
  flex-shrink: 0;
  line-height: 1;
}

.product-warning-pos span {
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 3px;
  line-height: 1.1;
  display: inline-block;
}

.product-warning-pos .btn {
  font-size: 8px;
  padding: 1px 3px;
  white-space: nowrap;
  flex-shrink: 0;
  line-height: 1.1;
  height: auto;
  min-height: auto;
  margin-left: 3px;
}

.pos-box {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.pos-box-content {
  flex-shrink: 0;
}

/* RTL POS Layout Mirroring */
[dir="rtl"] #pos {
  direction: rtl;
}

[dir="rtl"] #pos .float-right {
  float: left !important;
}

[dir="rtl"] #pos .float-left {
  float: right !important;
}

[dir="rtl"] #pos .text-right {
  text-align: left !important;
}

[dir="rtl"] #pos .text-left {
  text-align: right !important;
}

[dir="rtl"] #pos .ml-2 {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}

[dir="rtl"] #pos .mr-2 {
  margin-right: 0 !important;
  margin-left: 0.5rem !important;
}

[dir="rtl"] #pos .pl-3 {
  padding-left: 0 !important;
  padding-right: 1rem !important;
}

[dir="rtl"] #pos .pr-3 {
  padding-right: 0 !important;
}

/* RTL POS Grid Item positioning */
[dir="rtl"] #pos .pos-item-grid>div .box-qty {
  left: auto;
  right: 0px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 10px;
}

[dir="rtl"] #pos .stock-warning-icon-pos {
  right: auto;
  left: 5px;
}

/* RTL POS Table alignment */
[dir="rtl"] #pos .table th,
[dir="rtl"] #pos .table td {
  text-align: right;
}

[dir="rtl"] #pos .table .text-center {
  text-align: center;
}

/* RTL POS Input groups */
[dir="rtl"] #pos .input-group-text {
  border-left: 1px solid #ced4da;
  border-right: none;
  line-height: 2;
}

[dir="rtl"] #pos .input-group>.form-control:not(:last-child) {
  border-right: 1px solid #ced4da;
  border-left: none;
}

/* RTL POS Buttons alignment */
[dir="rtl"] #pos .btn-block {
  text-align: center;
}

/* RTL POS Card header buttons */
[dir="rtl"] #pos .header-buttons {
  float: left !important;
}

/* RTL POS Form groups */
[dir="rtl"] #pos .form-group {
  direction: rtl;
}

/* RTL POS Search and create buttons */
[dir="rtl"] #pos .create-btn,
[dir="rtl"] #pos .create-btn-2 {
  border-left: 1px solid #ced4da;
  border-right: none;
}

/* RTL POS Product grid */
[dir="rtl"] #pos .pos-item-grid {
  direction: rtl;
}

[dir="rtl"] .pos-box-text {
  text-align: right;
}

/* RTL POS Modal footer */
[dir="rtl"] #pos .pos-modal-footer {
  direction: rtl;
}

/* RTL POS Invoice receipt */
[dir="rtl"] #invoice-POS {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] #invoice-POS .table_data td[style*="text-align: right"] {
  text-align: left !important;
}

[dir="rtl"] #invoice-POS .table_data td[style*="text-align: left"] {
  text-align: right !important;
}
</style>
