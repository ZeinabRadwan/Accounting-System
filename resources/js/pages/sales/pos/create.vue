<template>
  <div id="pos">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row sm-col-reverse">
      <!-- pos left area start -->
      <div class="col-12 col-md-7">
        <!-- Invoice Session Controls -->
        <div class="invoice-session-controls-wrapper">
          <div class="invoice-session-controls">
            <!-- Invoice Pagination / Tabs -->
            <div class="invoice-tabs-wrapper">
              <!-- Previous Button -->
              <button
                v-if="totalTabsPages > 1"
                type="button"
                class="invoice-tabs-nav-btn invoice-tabs-nav-prev"
                @click="previousTabsPage"
                :disabled="currentTabsPage === 0"
                :title="$t('Previous')">
                <i class="fas fa-chevron-left"></i>
              </button>

              <!-- Tabs Container -->
              <div class="invoice-tabs-container">
                <div
                  v-for="(invoice, index) in visibleInvoices"
                  :key="invoice.id"
                  class="invoice-tab"
                  :class="{ 
                    'invoice-tab-active': visibleInvoiceIndices[index] === currentInvoiceIndex,
                    'invoice-tab-return': invoice.isReturnInvoice
                  }"
                  @click="switchInvoice(visibleInvoiceIndices[index])"
                  :title="invoice.isReturnInvoice 
                    ? (invoice.returnInvoiceNo ? `${$t('Return')}: ${invoice.returnInvoiceNo}` : `${$t('Invoice Return')} ${visibleInvoiceIndices[index] + 1}`)
                    : (invoice.reference || `Invoice ${visibleInvoiceIndices[index] + 1}`)">
                  <div class="invoice-tab-content">
                    <div class="invoice-tab-header">
                      <i :class="invoice.isReturnInvoice ? 'fas fa-undo invoice-tab-icon' : 'fas fa-file-invoice invoice-tab-icon'"></i>
                      <span class="invoice-tab-number">
                        <span v-if="invoice.isReturnInvoice" class="return-badge">{{ $t('Return') }}</span>
                        {{ invoice.isReturnInvoice && invoice.returnInvoiceNo 
                          ? invoice.returnInvoiceNo 
                          : (invoice.reference || `#${visibleInvoiceIndices[index] + 1}`) }}
                      </span>
                    </div>
                    <div class="invoice-tab-time" v-if="invoice.openedTime">
                      <i class="fas fa-clock"></i>
                      <span>{{ formatInvoiceTime(invoice.openedTime) }}</span>
                    </div>
                  </div>
                  <button
                    v-if="invoices.length > 1"
                    type="button"
                    class="invoice-tab-close"
                    @click.stop.prevent="removeInvoice(visibleInvoiceIndices[index])"
                    :title="$t('Remove Invoice')">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>

              <!-- Next Button -->
              <button
                v-if="totalTabsPages > 1"
                type="button"
                class="invoice-tabs-nav-btn invoice-tabs-nav-next"
                @click="nextTabsPage"
                :disabled="currentTabsPage >= totalTabsPages - 1"
                :title="$t('Next')">
                <i class="fas fa-chevron-right"></i>
              </button>

              <!-- Create New Invoice Button -->
              <button
                type="button"
                class="invoice-create-btn"
                @click="createNewInvoice"
                :title="$t('Create New Invoice')">
                <i class="fas fa-plus"></i>
              </button>

              <!-- Invoice Return Button (Sales Return) -->
              <button
                type="button"
                class="invoice-return-btn"
                @click="openInvoiceReturnModal"
                :title="$t('Sales Return')">
                <i class="fas fa-undo"></i>
                <span class="invoice-return-btn-label">{{ $t('Sales Return') }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card pos-main-card">
          <div class="card-body-l p-0">
            <!-- Client Selection - Hidden in Invoice Return Mode -->
            <div v-if="!isInvoiceReturnMode" class="form-group pl-3 pt-3 pr-3 pos-client-section">
              <label class="pos-section-label">{{ $t("Client") }}</label>
              <div class="d-flex w-100">
                <v-select class="flex-grow-1" v-model="form.client" :options="Array.isArray(clients) ? clients : []" label="name"
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

            <!-- Invoice Return Products Display -->
            <div v-if="isInvoiceReturnMode && selectedInvoiceForReturn" class="pl-3 pt-3 pr-3 pb-3">
              <div class="card bg-light mb-3">
                <div class="card-header">
                  <h6 class="mb-0">
                    {{ $t("Invoice") }}: {{ selectedInvoiceForReturn.invoiceNo | withPrefix(invoicePrefix) }}
                    <span v-if="selectedInvoiceForReturn.client" class="ml-2 text-muted">
                      - {{ selectedInvoiceForReturn.client.name }}
                    </span>
                  </h6>
                </div>
                <div class="card-body">
                  <!-- Return Reason -->
                  <div class="form-group mb-3">
                    <label for="returnReason">{{ $t("Return Reason") }} <span class="required">*</span></label>
                    <input 
                      id="returnReason" 
                      v-model="returnForm.returnReason" 
                      type="text" 
                      class="form-control"
                      :class="{ 'is-invalid': returnForm.errors.has('returnReason') }"
                      :placeholder="$t('Enter return reason')"
                    />
                    <has-error :form="returnForm" field="returnReason" />
                  </div>

                  <!-- Account Selection (if return amount > 0) -->
                  <div v-if="totalReturnAmount > 0 && accounts && accounts.length > 0" class="form-group mb-3">
                    <label for="returnAccount">{{ $t("Account") }} <span class="required">*</span></label>
                    <v-select 
                      v-model="returnForm.account" 
                      :options="Array.isArray(accounts) ? accounts : []" 
                      label="label"
                      :class="{ 'is-invalid': returnForm.errors.has('account') }"
                      :placeholder="$t('Select an account')"
                      @input="updateReturnAccountBalance"
                    >
                      <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px" />
                        {{ option.label }}
                      </template>
                    </v-select>
                    <has-error :form="returnForm" field="account" />
                    <div v-if="returnForm.account" class="mt-2">
                      <small class="text-muted">
                        {{ $t("Available Balance") }}: 
                        {{ formatNumber(returnForm.availableBalance || 0) }}
                        <span class="saudi-riyal">ê</span>
                      </small>
                    </div>
                  </div>

                  <!-- Receipt No (optional) -->
                  <div v-if="totalReturnAmount > 0" class="form-group mb-3">
                    <label for="returnReceiptNo">{{ $t("Receipt No") }}</label>
                    <input 
                      id="returnReceiptNo" 
                      v-model="returnForm.receiptNo" 
                      type="text" 
                      class="form-control"
                      :placeholder="$t('Enter receipt number (optional)')"
                    />
                  </div>
                  <div class="table-responsive">
                    <table class="table table-sm table-bordered">
                      <thead>
                        <tr>
                          <th width="40">
                            <input 
                              type="checkbox" 
                              @change="toggleAllReturnProducts"
                              :checked="allReturnProductsSelected"
                              :indeterminate="someReturnProductsSelected"
                            />
                          </th>
                          <th>{{ $t("Product") }}</th>
                          <th class="text-center">{{ $t("Original Qty") }}</th>
                          <th class="text-center">{{ $t("Unit Price") }}</th>
                          <th class="text-center">{{ $t("Return Qty") }}</th>
                          <th class="text-center">{{ $t("Return Total") }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-if="returnProducts.length === 0">
                          <td colspan="6" class="text-center text-muted">
                            {{ $t("No products found") }}
                          </td>
                        </tr>
                        <tr v-for="(product, index) in returnProducts" :key="product.id" :class="{ 'table-warning': product.isSelected }">
                          <td>
                            <input 
                              type="checkbox" 
                              v-model="product.isSelected"
                              @change="calculateReturnTotals"
                            />
                          </td>
                          <td>{{ product.name }}</td>
                          <td class="text-center">{{ product.originalQuantity }}</td>
                          <td class="text-center">
                            {{ (product.unitPrice || 0).toFixed(2) }}
                            <span class="saudi-riyal">ê</span>
                          </td>
                          <td class="text-center">
                            <input 
                              type="number" 
                              class="form-control form-control-sm text-center"
                              v-model.number="product.returnQty"
                              :min="0"
                              :max="product.originalQuantity"
                              step="any"
                              @input="validateReturnQuantity(index)"
                              @change="calculateReturnTotals"
                              :disabled="!product.isSelected"
                            />
                            <small v-if="product.returnQtyError" class="text-danger d-block">
                              {{ product.returnQtyError }}
                            </small>
                          </td>
                          <td class="text-center">
                            {{ (product.returnTotal || 0).toFixed(2) }}
                            <span class="saudi-riyal">ê</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot v-if="returnProducts.length > 0">
                        <tr>
                          <td colspan="5" class="text-right font-weight-bold">{{ $t("Total Return") }}:</td>
                          <td class="text-center font-weight-bold">
                            {{ (totalReturnAmount || 0).toFixed(2) }}
                            <span class="saudi-riyal">ê</span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="table-wrap" v-if="!isInvoiceReturnMode">
              <GeneralTable :columns="tableColumns" :rows="form.selectedProducts || []" :show-actions="true"
                action-header-icon="fas fa-trash" :empty-message="$t('Your shopping cart is empty')"
                empty-image="/images/cart.png" wrapper-class="table-wrap">
                <!-- Product Name -->
                <template #cell-name="{ row }">
                  <span class="table-product-title" v-tooltip="row.name">
                    {{ row.name }}
                    <span v-if="row.id === lastScannedProductId" class="badge badge-success ml-1 pos-scanned-badge">
                      {{ $t("New") }}
                    </span>
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
                    <input type="button" value="-" class="pos-qty-btn-minus" data-field="quantity"
                      @click="generateItemTotal(row.qty, 'qty', getProductIndex(row), 'decrement')" />
                    <input type="number" step="any" :id="`Qty-${getProductIndex(row)}`" :value="row.qty" name="quantity"
                      class="quantity-field border-0 incrementor" required min="1" :max="row.inventoryCount"
                      @change="generateItemTotal($event.target.value, 'qty', getProductIndex(row), '')"
                      @keyup="generateItemTotal($event.target.value, 'qty', getProductIndex(row), '')"
                      :placeholder="$t('Quantity')" />
                    <input type="button" value="+" class="pos-qty-btn-plus" data-field="quantity"
                      @click="generateItemTotal(row.qty, 'qty', getProductIndex(row), 'increment')" />
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
                    <select v-model="row.discountType" class="form-control form-control-sm"
                      style="width: 85px; flex-shrink: 0" :class="{
                        'is-invalid': form.errors.has(`selectedProducts.${getProductIndex(row)}.discountType`),
                      }" @change="calculateProductDiscount(getProductIndex(row))">
                      <option value="fixed">{{ $t("Fixed") }}</option>
                      <option value="percentage">{{ $t("%") }}</option>
                    </select>
                    <input type="number" v-model="row.discount" class="form-control form-control-sm"
                      style="width: 90px; flex-shrink: 0" step="any" min="0"
                      :max="row.discountType == 'percentage' ? 100 : row.unitPrice * row.qty" :class="{
                        'is-invalid': form.errors.has(`selectedProducts.${getProductIndex(row)}.discount`),
                      }" :placeholder="$t('0')" @change="calculateProductDiscount(getProductIndex(row))"
                      @keyup="calculateProductDiscount(getProductIndex(row))" />
                  </div>
                  <div v-if="
                    form.errors.has(`selectedProducts.${getProductIndex(row)}.discount`) ||
                    form.errors.has(`selectedProducts.${getProductIndex(row)}.discountType`)
                  " class="invalid-feedback d-block">
                    <span v-if="form.errors.has(`selectedProducts.${getProductIndex(row)}.discount`)" class="d-block">
                      {{ form.errors.get(`selectedProducts.${getProductIndex(row)}.discount`) }}
                    </span>
                    <span v-if="form.errors.has(`selectedProducts.${getProductIndex(row)}.discountType`)"
                      class="d-block">
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
                  <select v-model="row.selectedVatRate" class="form-control form-control-sm" :class="{
                    'is-invalid': form.errors.has(`selectedProducts.${getProductIndex(row)}.selectedVatRate`),
                  }" @change="calculateProductVat(getProductIndex(row))" style="min-width: 120px">
                    <option value="">{{ $t("Select VAT") }}</option>
                    <option v-for="tax in taxes" :key="tax.id" :value="tax">
                      {{ tax.code }} ({{ tax.rate }}%)
                    </option>
                  </select>
                  <div v-if="form.errors.has(`selectedProducts.${getProductIndex(row)}.selectedVatRate`)"
                    class="invalid-feedback d-block">
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

        <!-- POS Footer (Discount, Transport, Summary) - Hidden in Invoice Return Mode -->
        <div v-if="!isInvoiceReturnMode" class="pos-card-footer bg-white">
          <div>
            <div class="row pt-3 pl-3 pr-3 pos-footer-inputs">
              <div class="form-group col-md-4">
                <label for="discountType" class="pos-input-label">{{ $t("Discount Type") }}</label>
                <select id="discountType" v-model="form.discountType" class="form-control pos-input"
                  :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType" @change="calculateSum"
                  @keyup="calculateSum">
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
                  class="form-control pos-input" :class="{ 'is-invalid': form.errors.has('transportCost') }"
                  name="transportCost" :placeholder="$t('Enter transport cost')" @change="calculateSum"
                  @keyup="calculateSum" />
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
                  <v-select class="w-85" v-model="form.orderTax" :options="Array.isArray(taxes) ? taxes : []" label="code"
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
          <div v-if="isInvoiceReturnMode" class="col-12 mb-2">
            <button 
              class="btn btn-success btn-block pos-btn" 
              @click="saveInvoiceReturn" 
              :disabled="returnForm.busy || totalReturnAmount <= 0"
            >
              <i :class="returnForm.busy ? 'fas fa-spinner fa-spin' : 'fas fa-undo'" />
              {{ returnForm.busy ? $t("Processing...") : $t("Create Invoice Return") }}
            </button>
          </div>
          <template v-else>
            <div class="col-12 col-lg-4 mb-2">
              <button class="btn btn-primary btn-block pos-btn" @click="saveInvoice(true, false)" @keydown="form.onKeydown($event)">
                <i class="fas fa-save" /> {{ $t("Save") }}
              </button>
            </div>
            <div class="col-12 col-lg-4 mb-2">
              <button class="btn btn-primary btn-block pos-btn" @click="saveInvoice(false, true)" @keydown="form.onKeydown($event)">
                <i class="fas fa-credit-card" />
                {{ $t("Save & Payment") }}
              </button>
            </div>
            <div class="col-12 col-lg-4 mb-2">
              <button type="reset" class="btn btn-info btn-block pos-btn" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t("Reset") }}
              </button>
            </div>
          </template>
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
              <button type="button" class="btn pos-filter-toggle-btn"
                :class="{ 'pos-filter-toggle-btn-active': showFilters }" @click="toggleFilters"
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
                  <li v-for="category in categories" :key="category.id" class="pos-filter-card"
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
                  <li v-for="subCategory in subCategories" :key="subCategory.id" class="pos-filter-card"
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

          <div v-if="!isInvoiceReturnMode && products" class="pos-barcode-row px-3 pt-2 pb-0">
            <label class="pos-section-label mb-1">{{ $t("Barcode") }}</label>
            <div class="input-group">
              <input
                ref="barcodeInputRef"
                v-model="barcodeInput"
                type="text"
                class="form-control"
                :placeholder="$t('Scan or enter barcode')"
                :disabled="barcodeLoading"
                @keyup.enter="onBarcodeSubmit"
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  :disabled="barcodeLoading || !barcodeInputTrimmed"
                  @click="onBarcodeSubmit"
                >
                  <i v-if="barcodeLoading" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-barcode"></i>
                </button>
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
                        <img class="pos-box-icon" :src="product.image" :data-product-id="product.id" alt="product image"
                          @error="handleImageError($event)" />
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
              <v-select v-model="form.account" :options="Array.isArray(accounts) ? accounts : []" label="label"
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
          <button class="btn btn-primary" @click="addPayment" @keydown="form.onKeydown($event)"
            :disabled="paymentSubmitting">
            <i v-if="paymentSubmitting" class="fas fa-spinner fa-spin" /> <i v-else class="fas fa-save" />
            {{ paymentSubmitting ? $t("Processing...") : $t("Save") }}
          </button>
          <button class="modal-default-button btn btn-danger" @click="closeModalAndClearFormData"
            :disabled="paymentSubmitting">
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

    <!-- Invoice Return Search Modal -->
    <Modal class="invoice-return-search-modal" v-if="showInvoiceReturnModal" @close="closeInvoiceReturnModal">
      <h5 slot="header">{{ $t("Invoice Return") }}</h5>
      <div class="w-100" slot="body">
        <div class="invoice-return-search-container">
          <!-- Search Input -->
          <div class="form-group">
            <label for="modalInvoiceSearch">{{ $t("Search Invoice by Invoice No") }}</label>
            <div class="input-group">
              <input
                id="modalInvoiceSearch"
                ref="modalInvoiceSearchInput"
                type="text"
                class="form-control"
                v-model="modalInvoiceSearchQuery"
                :placeholder="$t('Enter invoice number')"
                @keyup.enter="searchInvoiceInModal"
                :disabled="isSearchingInvoiceInModal"
              />
              <div class="input-group-append">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="searchInvoiceInModal"
                  :disabled="isSearchingInvoiceInModal || !modalInvoiceSearchQuery || modalInvoiceSearchQuery.trim() === ''">
                  <i :class="isSearchingInvoiceInModal ? 'fas fa-spinner fa-spin' : 'fas fa-search'"></i>
                  {{ $t("Search") }}
                </button>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="modalInvoiceSearchError" class="alert alert-danger" role="alert">
            <i class="fas fa-exclamation-circle"></i>
            {{ modalInvoiceSearchError }}
          </div>

          <!-- Loading State -->
          <div v-if="isSearchingInvoiceInModal" class="text-center py-3">
            <i class="fas fa-spinner fa-spin fa-2x text-primary"></i>
            <p class="mt-2">{{ $t("Searching...") }}</p>
          </div>

          <!-- Invoice Info (if found) -->
          <div v-if="modalSearchedInvoice && !isSearchingInvoiceInModal && !modalInvoiceSearchError" class="invoice-info-card">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">{{ $t("Invoice Details") }}</h6>
                <div class="invoice-info-item">
                  <strong>{{ $t("Invoice No") }}:</strong>
                  <span>{{ modalSearchedInvoice.invoiceNo | withPrefix(invoicePrefix) }}</span>
                </div>
                <div class="invoice-info-item" v-if="modalSearchedInvoice.client">
                  <strong>{{ $t("Client") }}:</strong>
                  <span>{{ modalSearchedInvoice.client.name || modalSearchedInvoice.client }}</span>
                </div>
                <div class="invoice-info-item" v-if="modalSearchedInvoice.invoiceDate">
                  <strong>{{ $t("Date") }}:</strong>
                  <span>{{ modalSearchedInvoice.invoiceDate | moment("Do MMM, YYYY") }}</span>
                </div>
                <div class="invoice-info-item" v-if="modalSearchedInvoice.invoiceTotal">
                  <strong>{{ $t("Total") }}:</strong>
                  <span>{{ formatNumber(modalSearchedInvoice.invoiceTotal) }} <span class="saudi-riyal">ê</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="modal-footer" class="invoice-return-modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          @click="closeInvoiceReturnModal">
          {{ $t("Cancel") }}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="selectInvoiceForReturn"
          :disabled="!modalSearchedInvoice">
          {{ $t("Select Invoice") }}
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
    accounts: [],
    categories: [],
    subCategories: [],
    productPrefix: "",
    invoicePrefix: "",
    showModal: false,
    paymentSubmitting: false,
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
    // Invoice Return Modal
    showInvoiceReturnModal: false,
    modalInvoiceSearchQuery: '',
    isSearchingInvoiceInModal: false,
    modalInvoiceSearchError: '',
    modalSearchedInvoice: null,
    // Chart of account auto-assign
    isAutoAssigningClient: false,
    isAutoAssigningProduct: null,
    // Invoice session management
    invoices: [],
    currentInvoiceIndex: 0,
    invoiceCounter: 0,
    // Invoice tabs pagination
    tabsPerPage: 6,
    currentTabsPage: 0,
    // Invoice Return mode
    isInvoiceReturnMode: false,
    invoiceSearchQuery: '',
    isSearchingInvoice: false,
    invoiceSearchError: '',
    selectedInvoiceForReturn: null,
    returnProducts: [],
    totalReturnAmount: 0,
    returnForm: new Form({
      returnReason: '',
      invoice: null,
      selectedProducts: [],
      totalReturn: 0,
      date: new Date().toISOString().slice(0, 10),
      note: '',
      status: 1,
      account: '',
      availableBalance: 0,
      receiptNo: '',
    }),
    // Barcode scan / manual entry
    barcodeInput: '',
    barcodeLoading: false,
    lastScannedProductId: null,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),

    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },

    barcodeInputTrimmed() {
      return (this.barcodeInput || '').trim();
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

    // Check if there is an active invoice
    hasActiveInvoice() {
      return this.invoices.length > 0 && this.invoices[this.currentInvoiceIndex]?.invoiceStatus === 'active';
    },

    // Calculate total pages for invoice tabs
    totalTabsPages() {
      return Math.ceil(this.invoices.length / this.tabsPerPage);
    },

    // Get visible invoices for current page
    visibleInvoices() {
      const start = this.currentTabsPage * this.tabsPerPage;
      const end = start + this.tabsPerPage;
      return this.invoices.slice(start, end);
    },

    // Get actual indices for visible invoices
    visibleInvoiceIndices() {
      const start = this.currentTabsPage * this.tabsPerPage;
      return this.visibleInvoices.map((_, i) => start + i);
    },

    // Invoice Return computed properties
    allReturnProductsSelected() {
      if (!this.returnProducts || this.returnProducts.length === 0) return false;
      return this.returnProducts.every(p => p.isSelected && p.returnQty > 0);
    },

    someReturnProductsSelected() {
      if (!this.returnProducts || this.returnProducts.length === 0) return false;
      const selected = this.returnProducts.filter(p => p.isSelected && p.returnQty > 0);
      return selected.length > 0 && selected.length < this.returnProducts.length;
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
    this.loadTemporaryData();
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

    // Try to load suspended invoices from database
    this.loadSuspendedInvoices().then(loaded => {
      // If no suspended invoices were loaded, initialize first invoice
      if (!loaded || this.invoices.length === 0) {
        this.initializeFirstInvoice();
      }
    }).catch(error => {
      console.error('Error loading invoice sessions:', error);
      // Initialize first invoice on error
      this.initializeFirstInvoice();
    });

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

    // Auto-save invoice state when form data changes
    'form.selectedProducts': {
      handler() {
        if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0) {
          // Debounce the save to avoid excessive updates
          clearTimeout(this._saveInvoiceStateTimeout);
          this._saveInvoiceStateTimeout = setTimeout(() => {
            this.saveInvoiceState();
          }, 500);
        }
      },
      deep: true
    },

    // Watch other form fields for auto-save
    'form.client': {
      handler() {
        if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0) {
          this.saveInvoiceState();
        }
      },
      deep: true
    },

    'form.discount': {
      handler() {
        if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0) {
          clearTimeout(this._saveInvoiceStateTimeout);
          this._saveInvoiceStateTimeout = setTimeout(() => {
            this.saveInvoiceState();
          }, 500);
        }
      }
    },

    'form.transportCost': {
      handler() {
        if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0) {
          clearTimeout(this._saveInvoiceStateTimeout);
          this._saveInvoiceStateTimeout = setTimeout(() => {
            this.saveInvoiceState();
          }, 500);
        }
      }
    },

    // Watch current invoice index to update pagination
    currentInvoiceIndex: {
      handler(newIndex) {
        if (newIndex >= 0 && newIndex < this.invoices.length) {
          this.updateTabsPageForInvoice(newIndex);
        }
      },
      immediate: false
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
          // Ensure clients is always an array
          this.clients = Array.isArray(data.data) ? data.data : (data.data ? Object.values(data.data) : []);
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
      // Ensure accounts is always an array
      this.accounts = Array.isArray(data.data) ? data.data : (data.data ? Object.values(data.data) : []);

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
      // Ensure taxes is always an array
      this.taxes = Array.isArray(data.data) ? data.data : (data.data ? Object.values(data.data) : []);

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

    // Return true only when slug is a non-empty string that is not "null" or "undefined"
    isValidInvoiceSlug(slug) {
      if (slug == null) return false;
      const s = String(slug).trim();
      return s.length > 0 && s !== 'null' && s !== 'undefined';
    },

    // get the invoice info by invoice slug
    async getInvoice(invoice_slug) {
      if (!this.isValidInvoiceSlug(invoice_slug)) {
        this.loading = false;
        return;
      }
      const slug = String(invoice_slug).trim();
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/invoices/" + slug
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

    onBarcodeSubmit() {
      const barcode = this.barcodeInputTrimmed;
      if (!barcode) {
        return;
      }
      this.findProductByBarcode(barcode);
    },

    async findProductByBarcode(barcode) {
      const trimmed = (barcode || '').trim();
      if (!trimmed) {
        return;
      }
      this.barcodeLoading = true;
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/products/by-barcode/" + encodeURIComponent(trimmed)
        );
        const product = data.data || data;
        if (product && product.id) {
          await this.storeProduct(product);
          this.lastScannedProductId = product.id;
          this.barcodeInput = "";
          this.$nextTick(() => {
            if (this.$refs.barcodeInputRef) {
              this.$refs.barcodeInputRef.focus();
            }
          });
          const self = this;
          setTimeout(() => {
            self.lastScannedProductId = null;
          }, 2500);
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Product not found"),
            text: this.$t("No product found for this barcode."),
          });
          this.barcodeInput = "";
        }
      } catch (err) {
        const message = err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : this.$t("Product not found");
        toast.fire({
          type: "error",
          title: this.$t("Product not found"),
          text: message,
        });
        this.barcodeInput = "";
      } finally {
        this.barcodeLoading = false;
      }
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
    // print: true = show receipt and print after save; false = don't show print
    // openPayment: true = keep current tab and open Add Payment modal with pre-filled amount/account
    async saveInvoice(print = true, openPayment = false) {
      // Save current invoice state before saving
      this.saveInvoiceState();

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
      // Net total = net amount + total tax (includes both product VAT and invoice tax)
      this.form.netTotal = this.roundToTwoDecimals(netAmount + this.form.totalTax);

      // Ensure transportCost is set
      this.form.transportCost = this.form.transportCost || 0;

      // Saudi Arabia: create invoice as inactive (0) so it can be sent to ZATCA (same as invoices create)
      const previousStatus = this.form.status;
      if (this.isSaudiArabia) {
        this.form.status = 0;
      }

      await this.form
        .post(window.location.origin + "/api/invoices")
        .then(async ({ data }) => {
          this.form.invoice_id = data.data.invoice_id;
          this.form.invoice_slug = data.data.invoice_slug;
          this.clearTemporaryData();

          // Send to ZATCA if in Saudi Arabia (for all save flows)
          if (this.isSaudiArabia) {
            try {
              await this.sendInvoiceToZatca(this.form.invoice_slug);
            } catch (error) {
              this.$toast.error(
                this.$t("ZATCA Error"),
                this.$t("Invoice created but failed to send to ZATCA. Please try sending manually.")
              );
            }
          }

          if (openPayment) {
            // Save & Payment: keep current tab, pre-fill payment modal, open it (no tab switch yet)
            const netTotal = data.data.netTotal != null ? data.data.netTotal : this.form.netTotal;
            this.form.netTotal = this.roundToTwoDecimals(Number(netTotal));
            this.form.paidAmount = this.form.netTotal.toFixed(2);
            if (this.accounts && this.accounts.length > 0 && !this.form.account) {
              this.form.account = this.accounts[0];
            }
            this.showModal = true;
            this.$nextTick(() => {
              if (this.$refs.paidAmountInput) {
                this.$refs.paidAmountInput.focus();
              }
            });
            return;
          }

          // Save & Print or Save Only: remove saved invoice from tabs and switch
          if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0) {
            const savedIndex = this.currentInvoiceIndex;
            const invoiceToSave = this.invoices[savedIndex];

            // Close session via API BEFORE removing from array
            if (invoiceToSave?.session_id) {
              try {
                await axios.post(`/api/pos/sessions/${invoiceToSave.session_id}/save`);
              } catch (error) {
                console.error('Error saving session:', error);
              }
            }

            // Determine which invoice to switch to after removing
            let targetIndex = -1;
            if (this.invoices.length > 1) {
              if (savedIndex > 0) {
                targetIndex = savedIndex - 1;
              } else {
                targetIndex = 0;
              }
            }

            this.invoices.splice(savedIndex, 1);

            if (this.invoices.length > 0 && targetIndex >= 0) {
              if (targetIndex >= this.invoices.length) {
                targetIndex = this.invoices.length - 1;
              }
              this.currentInvoiceIndex = targetIndex;
              this.restoreInvoiceState(this.invoices[targetIndex]);
            } else {
              this.initializeFirstInvoice();
            }
          } else {
            if (this.invoices.length === 0) {
              this.initializeFirstInvoice();
            }
          }

          if (print) {
            this.showInvoiceAndPrint();
          } else {
            this.$toast.success(this.$t("Invoice saved"), this.$t("Invoice saved successfully."));
          }
        })
        .catch((error) => {
          if (this.isSaudiArabia && previousStatus !== undefined) {
            this.form.status = previousStatus;
          }
          const ErrorHandler = require("~/utils/errorHandler").default;
          ErrorHandler.handleApiError(error, {
            showValidationErrors: false,
          });
        });
    },

    // save payment (apply payment to invoice; update inventory and balances via API)
    async addPayment() {
      if (this.form.invoice_id == null) {
        const ErrorHandler = require("~/utils/errorHandler").default;
        ErrorHandler.showError(this.$t("Error"), this.$t("Please try again"));
        return;
      }
      if (this.paymentSubmitting) {
        return;
      }
      this.paymentSubmitting = true;

      const formData = new FormData();
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
      formData.append('invoice_id', this.form.invoice_id);
      if (this.form.attachment) {
        formData.append('attachment', this.form.attachment);
      }

      try {
        await axios.post(window.location.origin + "/api/invoices-pay", formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const slug = this.form.invoice_slug;
        this.showModal = false;

        // Remove the paid invoice tab (Save & Payment flow keeps tab until payment is done)
        if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0) {
          const savedIndex = this.currentInvoiceIndex;
          if (this.invoices[savedIndex]?.session_id) {
            try {
              await axios.post(`/api/pos/sessions/${this.invoices[savedIndex].session_id}/save`);
            } catch (e) {
              // ignore
            }
          }
          this.invoices.splice(savedIndex, 1);
          if (this.invoices.length > 0) {
            const targetIndex = savedIndex > 0 ? savedIndex - 1 : 0;
            this.currentInvoiceIndex = Math.min(targetIndex, this.invoices.length - 1);
            this.restoreInvoiceState(this.invoices[this.currentInvoiceIndex]);
          } else {
            this.initializeFirstInvoice();
          }
        }

        if (this.isValidInvoiceSlug(slug)) {
          await this.getInvoice(slug);
          this.showSmallInvoiceModal = true;
        }
        this.form.reset();
        this.againDefaultSettings();
        this.getProducts();
      } catch (error) {
        const ErrorHandler = require("~/utils/errorHandler").default;
        ErrorHandler.handleApiError(error, { showValidationErrors: false });
      } finally {
        this.paymentSubmitting = false;
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
      
      // Ensure we have at least one invoice after closing receipt
      if (this.invoices.length === 0) {
        this.initializeFirstInvoice();
      } else if (this.currentInvoiceIndex >= 0 && this.currentInvoiceIndex < this.invoices.length) {
        // Restore the current invoice state
        this.restoreInvoiceState(this.invoices[this.currentInvoiceIndex]);
      }
      
      console.log("from close" + this.clickCount);
    },

    // Complete order and open Add Payment modal (save then open modal with pre-filled amount/account)
    async completeOrderAndAddPayment() {
      await this.saveInvoice(false, true);
    },

    // show invoice and print
    async showInvoiceAndPrint() {
      const slug = this.form.invoice_slug;
      if (this.isValidInvoiceSlug(slug)) {
        await this.getInvoice(slug);
        this.showSmallInvoiceModal = true;
      }
      this.form.reset();
      this.againDefaultSettings();
      this.getProducts();
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
          </body><\/html>`
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

    // Format invoice opened time for display
    formatInvoiceTime(timeString) {
      if (!timeString) {
        return '';
      }

      try {
        const date = new Date(timeString);
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const invoiceDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        
        // Check if invoice was opened today
        const isToday = invoiceDate.getTime() === today.getTime();
        
        // Format time (12-hour format with AM/PM)
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        const displayMinutes = minutes.toString().padStart(2, '0');
        
        const timeStr = `${displayHours}:${displayMinutes} ${ampm}`;
        
        // If not today, include date
        if (!isToday) {
          const day = date.getDate();
          const month = date.toLocaleString('default', { month: 'short' });
          return `${day} ${month}, ${timeStr}`;
        }
        
        return timeStr;
      } catch (error) {
        console.error('Error formatting invoice time:', error);
        return '';
      }
    },

    // Persist suspended invoices to database via API
    async persistSuspendedInvoices() {
      try {
        // Update all invoices as sessions
        const updatePromises = this.invoices.map(async (invoice) => {
          const invoiceData = {
            id: invoice.id,
            createdAt: invoice.createdAt,
            openedTime: invoice.openedTime || invoice.createdAt,
            invoiceStatus: invoice.invoiceStatus,
            reference: invoice.reference,
            client: invoice.client,
            selectedProducts: invoice.selectedProducts || [],
            subTotal: invoice.subTotal || 0,
            netTotal: invoice.netTotal || 0,
            transportCost: invoice.transportCost || "",
            orderTax: invoice.orderTax || null,
            productTotalTax: invoice.productTotalTax || 0,
            totalTax: invoice.totalTax || 0,
            discount: invoice.discount || "",
            discountType: invoice.discountType || 0,
            poReference: invoice.poReference || "",
            paymentTerms: invoice.paymentTerms || "",
            deliveryPlace: invoice.deliveryPlace || "",
            date: invoice.date || new Date().toISOString().slice(0, 10),
            note: invoice.note || "",
            status: invoice.status !== undefined ? invoice.status : 1,
            account: invoice.account || "",
            totalPaid: invoice.totalPaid || "",
            dueAmount: invoice.dueAmount || "",
            addPayment: invoice.addPayment || "",
            chequeNo: invoice.chequeNo || "",
            receiptNo: invoice.receiptNo || "",
            category: invoice.category || "",
            invoice_id: invoice.invoice_id || null,
            invoice_slug: invoice.invoice_slug || null,
            // Invoice Return data
            isReturnInvoice: invoice.isReturnInvoice || false,
            returnInvoiceNo: invoice.returnInvoiceNo || null,
            selectedInvoiceForReturn: invoice.selectedInvoiceForReturn || null,
            returnProducts: invoice.returnProducts || [],
            totalReturnAmount: invoice.totalReturnAmount || 0,
            returnForm: invoice.returnForm || {
              returnReason: '',
              invoice: null,
              selectedProducts: [],
              totalReturn: 0,
              date: new Date().toISOString().slice(0, 10),
              note: '',
              status: 1,
              account: '',
              availableBalance: 0,
              receiptNo: '',
            },
          };

          // If invoice has a session_id, update it; otherwise create new
          if (invoice.session_id) {
            await axios.put(`/api/pos/sessions/${invoice.session_id}`, {
              invoice_data: invoiceData,
              status: invoice.invoiceStatus,
            });
          } else {
            // Create new session
            const response = await axios.post('/api/pos/sessions', {
              invoice_data: invoiceData,
              status: invoice.invoiceStatus,
            });
            // Store session_id in invoice object
            this.$set(invoice, 'session_id', response.data.data.id);
          }
        });

        await Promise.all(updatePromises);
      } catch (error) {
        console.error("Error persisting suspended invoices:", error);
      }
    },

    // Load suspended invoices from database via API
    async loadSuspendedInvoices() {
      try {
        const response = await axios.get('/api/pos/sessions');
        
        if (!response.data.success || !response.data.data || !Array.isArray(response.data.data)) {
          return false;
        }

        const sessions = response.data.data;

        if (sessions.length === 0) {
          return false;
        }

        // Restore invoices from sessions
        this.invoices = sessions.map(session => {
          const invoiceData = session.invoice_data;
          return {
            session_id: session.id,
            id: invoiceData.id || `inv_${Date.now()}_${Math.random()}`,
            createdAt: invoiceData.createdAt || session.opened_at,
            openedTime: invoiceData.openedTime || session.opened_at,
            invoiceStatus: session.status,
            reference: invoiceData.reference || `INV-${this.invoiceCounter}`,
            client: invoiceData.client || null,
            selectedProducts: invoiceData.selectedProducts || [],
            subTotal: invoiceData.subTotal || 0,
            netTotal: invoiceData.netTotal || 0,
            transportCost: invoiceData.transportCost || "",
            orderTax: invoiceData.orderTax || null,
            productTotalTax: invoiceData.productTotalTax || 0,
            totalTax: invoiceData.totalTax || 0,
            discount: invoiceData.discount || "",
            discountType: invoiceData.discountType || 0,
            poReference: invoiceData.poReference || "",
            paymentTerms: invoiceData.paymentTerms || "",
            deliveryPlace: invoiceData.deliveryPlace || "",
            date: invoiceData.date || new Date().toISOString().slice(0, 10),
            note: invoiceData.note || "",
            status: invoiceData.status !== undefined ? invoiceData.status : 1,
            account: invoiceData.account || "",
            totalPaid: invoiceData.totalPaid || "",
            dueAmount: invoiceData.dueAmount || "",
            addPayment: invoiceData.addPayment || "",
            chequeNo: invoiceData.chequeNo || "",
            receiptNo: invoiceData.receiptNo || "",
            category: invoiceData.category || "",
            invoice_id: invoiceData.invoice_id || null,
            invoice_slug: invoiceData.invoice_slug || null,
            attachment: null, // Cannot restore file attachments
            // Invoice Return data
            isReturnInvoice: invoiceData.isReturnInvoice || false,
            returnInvoiceNo: invoiceData.returnInvoiceNo || null,
            selectedInvoiceForReturn: invoiceData.selectedInvoiceForReturn || null,
            returnProducts: invoiceData.returnProducts || [],
            totalReturnAmount: invoiceData.totalReturnAmount || 0,
            returnForm: invoiceData.returnForm || {
              returnReason: '',
              invoice: null,
              selectedProducts: [],
              totalReturn: 0,
              date: new Date().toISOString().slice(0, 10),
              note: '',
              status: 1,
              account: '',
              availableBalance: 0,
              receiptNo: '',
            },
          };
        });

        // Update invoice counter based on highest reference number
        const maxCounter = this.invoices.reduce((max, inv) => {
          const match = inv.reference?.match(/INV-(\d+)/);
          if (match) {
            const num = parseInt(match[1]);
            return Math.max(max, num);
          }
          return max;
        }, 0);
        this.invoiceCounter = maxCounter;

        // Find active invoice or default to first
        const activeIndex = this.invoices.findIndex(inv => inv.invoiceStatus === 'active');
        const targetIndex = activeIndex >= 0 ? activeIndex : 0;

        this.currentInvoiceIndex = targetIndex;

        // Update pagination to show the current invoice
        this.updateTabsPageForInvoice(this.currentInvoiceIndex);

        // Restore the current invoice state
        if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0) {
          const currentInvoice = this.invoices[this.currentInvoiceIndex];
          this.restoreInvoiceState(currentInvoice);
        }

        return true;
      } catch (error) {
        console.error("Error loading suspended invoices:", error);
        return false;
      }
    },

    // Clear suspended invoices - no longer needed as sessions are managed via API
    clearSuspendedInvoices() {
      // Sessions are now managed via API, no local cleanup needed
    },

    // Initialize first invoice
    async initializeFirstInvoice() {
      if (this.invoices.length === 0) {
        const firstInvoice = this.createEmptyInvoice();
        
        // Create session via API
        try {
          const invoiceData = this.getInvoiceData(firstInvoice);
          const response = await axios.post('/api/pos/sessions', {
            invoice_data: invoiceData,
            status: 'active',
          });
          firstInvoice.session_id = response.data.data.id;
        } catch (error) {
          console.error('Error creating first invoice session:', error);
          // Continue anyway, session will be created on next save
        }
        
        this.invoices.push(firstInvoice);
        this.currentInvoiceIndex = 0;
        this.currentTabsPage = 0;
        this.restoreInvoiceState(firstInvoice);
      }
    },

    // Create empty invoice object
    createEmptyInvoice() {
      return {
        id: `inv_${Date.now()}_${++this.invoiceCounter}`,
        createdAt: new Date().toISOString(),
        openedTime: new Date().toISOString(), // Track when invoice was opened
        invoiceStatus: 'active',
        reference: `INV-${this.invoiceCounter}`,
        client: null,
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        transportCost: "",
        orderTax: null,
        productTotalTax: 0,
        totalTax: 0,
        discount: "",
        discountType: 0,
        poReference: "",
        paymentTerms: "",
        deliveryPlace: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        account: "",
        totalPaid: "",
        dueAmount: "",
        addPayment: "",
        chequeNo: "",
        receiptNo: "",
        category: "",
        invoice_id: null,
        invoice_slug: null,
        attachment: null,
      };
    },

    // Get invoice data object for API
    getInvoiceData(invoice) {
      return {
        id: invoice.id,
        createdAt: invoice.createdAt,
        openedTime: invoice.openedTime || invoice.createdAt,
        invoiceStatus: invoice.invoiceStatus,
        reference: invoice.reference,
        client: invoice.client,
        selectedProducts: invoice.selectedProducts || [],
        subTotal: invoice.subTotal || 0,
        netTotal: invoice.netTotal || 0,
        transportCost: invoice.transportCost || "",
        orderTax: invoice.orderTax || null,
        productTotalTax: invoice.productTotalTax || 0,
        totalTax: invoice.totalTax || 0,
        discount: invoice.discount || "",
        discountType: invoice.discountType || 0,
        poReference: invoice.poReference || "",
        paymentTerms: invoice.paymentTerms || "",
        deliveryPlace: invoice.deliveryPlace || "",
        date: invoice.date || new Date().toISOString().slice(0, 10),
        note: invoice.note || "",
        status: invoice.status !== undefined ? invoice.status : 1,
        account: invoice.account || "",
        totalPaid: invoice.totalPaid || "",
        dueAmount: invoice.dueAmount || "",
        addPayment: invoice.addPayment || "",
        chequeNo: invoice.chequeNo || "",
        receiptNo: invoice.receiptNo || "",
        category: invoice.category || "",
        invoice_id: invoice.invoice_id || null,
        invoice_slug: invoice.invoice_slug || null,
        // Invoice Return data
        isReturnInvoice: invoice.isReturnInvoice || false,
        returnInvoiceNo: invoice.returnInvoiceNo || null,
        selectedInvoiceForReturn: invoice.selectedInvoiceForReturn || null,
        returnProducts: invoice.returnProducts || [],
        totalReturnAmount: invoice.totalReturnAmount || 0,
        returnForm: invoice.returnForm || {
          returnReason: '',
          invoice: null,
          selectedProducts: [],
          totalReturn: 0,
          date: new Date().toISOString().slice(0, 10),
          note: '',
          status: 1,
          account: '',
          availableBalance: 0,
          receiptNo: '',
        },
      };
    },

    // Save current invoice state
    saveInvoiceState() {
      if (this.invoices.length === 0 || this.currentInvoiceIndex < 0 || this.currentInvoiceIndex >= this.invoices.length) {
        return;
      }

      const currentInvoice = this.invoices[this.currentInvoiceIndex];

      // Deep clone selectedProducts to avoid reference issues
      const clonedProducts = JSON.parse(JSON.stringify(this.form.selectedProducts || []));

      // Update invoice state with current form data
      currentInvoice.client = this.form.client;
      currentInvoice.selectedProducts = clonedProducts;
      currentInvoice.subTotal = this.form.subTotal || 0;
      currentInvoice.netTotal = this.form.netTotal || 0;
      currentInvoice.transportCost = this.form.transportCost || "";
      currentInvoice.orderTax = this.form.orderTax || null;
      currentInvoice.productTotalTax = this.form.productTotalTax || 0;
      currentInvoice.totalTax = this.form.totalTax || 0;
      currentInvoice.discount = this.form.discount || "";
      currentInvoice.discountType = this.form.discountType || 0;
      currentInvoice.poReference = this.form.poReference || "";
      currentInvoice.paymentTerms = this.form.paymentTerms || "";
      currentInvoice.deliveryPlace = this.form.deliveryPlace || "";
      currentInvoice.date = this.form.date || new Date().toISOString().slice(0, 10);
      currentInvoice.note = this.form.note || "";
      currentInvoice.status = this.form.status !== undefined ? this.form.status : 1;
      currentInvoice.account = this.form.account || "";
      currentInvoice.totalPaid = this.form.totalPaid || "";
      currentInvoice.dueAmount = this.form.dueAmount || "";
      currentInvoice.addPayment = this.form.addPayment || "";
      currentInvoice.chequeNo = this.form.chequeNo || "";
      currentInvoice.receiptNo = this.form.receiptNo || "";
      currentInvoice.category = this.form.category || "";
      currentInvoice.invoice_id = this.form.invoice_id || null;
      currentInvoice.invoice_slug = this.form.invoice_slug || null;
      currentInvoice.attachment = this.form.attachment || null;

      // Save Invoice Return data if in return mode
      if (this.isInvoiceReturnMode) {
        currentInvoice.isReturnInvoice = true;
        currentInvoice.returnInvoiceNo = this.selectedInvoiceForReturn 
          ? this.$options.filters.withPrefix(this.selectedInvoiceForReturn.invoiceNo, this.invoicePrefix)
          : null;
        currentInvoice.selectedInvoiceForReturn = this.selectedInvoiceForReturn;
        // Deep clone return products
        currentInvoice.returnProducts = JSON.parse(JSON.stringify(this.returnProducts || []));
        currentInvoice.totalReturnAmount = this.totalReturnAmount || 0;
        currentInvoice.returnForm = {
          returnReason: this.returnForm.returnReason || '',
          invoice: this.returnForm.invoice || null,
          selectedProducts: this.returnForm.selectedProducts || [],
          totalReturn: this.returnForm.totalReturn || 0,
          date: this.returnForm.date || new Date().toISOString().slice(0, 10),
          note: this.returnForm.note || '',
          status: this.returnForm.status !== undefined ? this.returnForm.status : 1,
          account: this.returnForm.account || '',
          availableBalance: this.returnForm.availableBalance || 0,
          receiptNo: this.returnForm.receiptNo || '',
        };
      } else {
        currentInvoice.isReturnInvoice = false;
        currentInvoice.returnInvoiceNo = null;
        currentInvoice.selectedInvoiceForReturn = null;
        currentInvoice.returnProducts = [];
        currentInvoice.totalReturnAmount = 0;
        currentInvoice.returnForm = {
          returnReason: '',
          invoice: null,
          selectedProducts: [],
          totalReturn: 0,
          date: new Date().toISOString().slice(0, 10),
          note: '',
          status: 1,
          account: '',
          availableBalance: 0,
          receiptNo: '',
        };
      }

      // Update session via API (async, but don't wait)
      if (currentInvoice.session_id) {
        axios.put(`/api/pos/sessions/${currentInvoice.session_id}`, {
          invoice_data: this.getInvoiceData(currentInvoice),
          status: currentInvoice.invoiceStatus,
        }).catch(error => {
          console.error('Error updating invoice session:', error);
        });
      }
    },

    // Restore invoice state to form
    restoreInvoiceState(invoice) {
      if (!invoice) {
        return;
      }

      // Deep clone to avoid reference issues
      const clonedProducts = JSON.parse(JSON.stringify(invoice.selectedProducts || []));

      this.form.client = invoice.client || null;
      this.form.selectedProducts = clonedProducts;
      this.form.subTotal = invoice.subTotal || 0;
      this.form.netTotal = invoice.netTotal || 0;
      this.form.transportCost = invoice.transportCost || "";
      this.form.orderTax = invoice.orderTax || null;
      this.form.productTotalTax = invoice.productTotalTax || 0;
      this.form.totalTax = invoice.totalTax || 0;
      this.form.discount = invoice.discount || "";
      this.form.discountType = invoice.discountType || 0;
      this.form.poReference = invoice.poReference || "";
      this.form.paymentTerms = invoice.paymentTerms || "";
      this.form.deliveryPlace = invoice.deliveryPlace || "";
      this.form.date = invoice.date || new Date().toISOString().slice(0, 10);
      this.form.note = invoice.note || "";
      this.form.status = invoice.status !== undefined ? invoice.status : 1;
      this.form.account = invoice.account || "";
      this.form.totalPaid = invoice.totalPaid || "";
      this.form.dueAmount = invoice.dueAmount || "";
      this.form.addPayment = invoice.addPayment || "";
      this.form.chequeNo = invoice.chequeNo || "";
      this.form.receiptNo = invoice.receiptNo || "";
      this.form.category = invoice.category || "";
      this.form.invoice_id = invoice.invoice_id || null;
      this.form.invoice_slug = invoice.invoice_slug || null;
      this.form.attachment = invoice.attachment || null;

      // Restore Invoice Return data if it's a return invoice
      if (invoice.isReturnInvoice) {
        this.isInvoiceReturnMode = true;
        this.selectedInvoiceForReturn = invoice.selectedInvoiceForReturn || null;
        this.returnProducts = JSON.parse(JSON.stringify(invoice.returnProducts || []));
        this.totalReturnAmount = invoice.totalReturnAmount || 0;
        
        // Restore return form
        if (invoice.returnForm) {
          this.returnForm.returnReason = invoice.returnForm.returnReason || '';
          this.returnForm.invoice = invoice.returnForm.invoice || null;
          this.returnForm.selectedProducts = invoice.returnForm.selectedProducts || [];
          this.returnForm.totalReturn = invoice.returnForm.totalReturn || 0;
          this.returnForm.date = invoice.returnForm.date || new Date().toISOString().slice(0, 10);
          this.returnForm.note = invoice.returnForm.note || '';
          this.returnForm.status = invoice.returnForm.status !== undefined ? invoice.returnForm.status : 1;
          this.returnForm.account = invoice.returnForm.account || '';
          this.returnForm.availableBalance = invoice.returnForm.availableBalance || 0;
          this.returnForm.receiptNo = invoice.returnForm.receiptNo || '';
        }
        
        // Recalculate return totals
        this.$nextTick(() => {
          this.calculateReturnTotals();
        });
      } else {
        this.isInvoiceReturnMode = false;
        this.selectedInvoiceForReturn = null;
        this.returnProducts = [];
        this.totalReturnAmount = 0;
        this.returnForm.reset();
      }

      // Recalculate totals after restoring
      this.$nextTick(() => {
        this.recalculateAllItemsWithProportionalDiscount();
        this.calculateSum();
      });
    },

    // Create new invoice
    async createNewInvoice() {
      // Save current invoice state before switching (if there is an active invoice)
      if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0 && this.currentInvoiceIndex < this.invoices.length) {
        // Save current invoice state (products, quantities, discounts, transport, taxes, totals)
        this.saveInvoiceState();
        
        // Automatically suspend the current invoice via API
        const currentInvoice = this.invoices[this.currentInvoiceIndex];
        if (currentInvoice.session_id) {
          try {
            await axios.put(`/api/pos/sessions/${currentInvoice.session_id}`, {
              invoice_data: this.getInvoiceData(currentInvoice),
              status: 'suspended',
            });
            currentInvoice.invoiceStatus = 'suspended';
          } catch (error) {
            console.error('Error suspending current invoice:', error);
          }
        }
      }

      // Create new invoice
      const newInvoice = this.createEmptyInvoice();
      
      // Create session via API
      try {
        const invoiceData = this.getInvoiceData(newInvoice);
        const response = await axios.post('/api/pos/sessions', {
          invoice_data: invoiceData,
          status: 'active',
        });
        newInvoice.session_id = response.data.data.id;
      } catch (error) {
        console.error('Error creating new invoice session:', error);
        this.$toast.error(
          this.$t("Error"),
          this.$t("Failed to create new invoice session. Please try again.")
        );
        return;
      }

      this.invoices.push(newInvoice);
      this.currentInvoiceIndex = this.invoices.length - 1;
      this.restoreInvoiceState(newInvoice);

      // Update pagination to show the new invoice
      this.updateTabsPageForInvoice(this.currentInvoiceIndex);
    },

    // Switch to a different invoice
    async switchInvoice(index) {
      if (index < 0 || index >= this.invoices.length) {
        return;
      }

      // Save current invoice state
      if (this.currentInvoiceIndex >= 0 && this.currentInvoiceIndex < this.invoices.length) {
        this.saveInvoiceState();
        
        // Suspend current invoice via API
        const currentInvoice = this.invoices[this.currentInvoiceIndex];
        if (currentInvoice.session_id) {
          try {
            await axios.put(`/api/pos/sessions/${currentInvoice.session_id}`, {
              invoice_data: this.getInvoiceData(currentInvoice),
              status: 'suspended',
            });
            currentInvoice.invoiceStatus = 'suspended';
          } catch (error) {
            console.error('Error suspending current invoice:', error);
          }
        }
      }

      // Switch to new invoice
      this.currentInvoiceIndex = index;
      const targetInvoice = this.invoices[index];
      
      // Activate target invoice via API
      if (targetInvoice.session_id) {
        try {
          await axios.put(`/api/pos/sessions/${targetInvoice.session_id}`, {
            invoice_data: this.getInvoiceData(targetInvoice),
            status: 'active',
          });
          targetInvoice.invoiceStatus = 'active';
        } catch (error) {
          console.error('Error activating invoice:', error);
        }
      }

      this.restoreInvoiceState(targetInvoice);

      // Update pagination to show the active invoice
      this.updateTabsPageForInvoice(index);
    },

    // Update tabs page to show the specified invoice
    updateTabsPageForInvoice(invoiceIndex) {
      const page = Math.floor(invoiceIndex / this.tabsPerPage);
      if (page !== this.currentTabsPage) {
        this.currentTabsPage = page;
      }
    },

    // Navigate to previous tabs page
    previousTabsPage() {
      if (this.currentTabsPage > 0) {
        this.currentTabsPage--;
      }
    },

    // Navigate to next tabs page
    nextTabsPage() {
      if (this.currentTabsPage < this.totalTabsPages - 1) {
        this.currentTabsPage++;
      }
    },

    // Remove invoice from session
    async removeInvoice(index) {
      // Ensure index is a number
      const invoiceIndex = typeof index === 'number' ? index : parseInt(index);
      
      if (this.invoices.length <= 1) {
        this.$toast.warning(
          this.$t("Cannot Remove"),
          this.$t("You must have at least one invoice in the session")
        );
        return;
      }

      if (invoiceIndex < 0 || invoiceIndex >= this.invoices.length) {
        console.warn('Invalid invoice index:', invoiceIndex, 'Total invoices:', this.invoices.length);
        return;
      }

      try {
        // Show confirmation popup - use type instead of icon
        const result = await this.$swal.fire({
          title: this.$t("Are you sure?"),
          text: this.$t("Do you want to close this invoice? Unsaved changes will be lost."),
          type: "warning",
          showCancelButton: true,
          confirmButtonText: this.$t("Close"),
          cancelButtonText: this.$t("Cancel"),
        });

        // Check if user confirmed - handle both isConfirmed and value properties
        const isConfirmed = result && (result.isConfirmed === true || result.value === true);

        // If user cancelled, do nothing
        if (!isConfirmed) {
          return;
        }

        // Save current invoice state if removing the active invoice
        const isRemovingCurrent = invoiceIndex === this.currentInvoiceIndex;
        const invoiceToRemove = this.invoices[invoiceIndex];
        
        if (isRemovingCurrent) {
          this.saveInvoiceState();
        }

        // Close session via API BEFORE removing from array
        if (invoiceToRemove?.session_id) {
          try {
            await axios.post(`/api/pos/sessions/${invoiceToRemove.session_id}/close`);
          } catch (error) {
            console.error('Error closing session:', error);
          }
        }

        // Determine which invoice to switch to after removing
        let newCurrentIndex = this.currentInvoiceIndex;
        
        if (isRemovingCurrent) {
          // We're removing the current invoice, need to switch to another
          if (this.invoices.length > 1) {
            if (invoiceIndex > 0) {
              // Switch to previous invoice (index - 1)
              newCurrentIndex = invoiceIndex - 1;
            } else {
              // We're removing index 0, switch to what's currently at index 1
              // After removal, index 1 becomes index 0
              newCurrentIndex = 0;
            }
          }
        } else if (invoiceIndex < this.currentInvoiceIndex) {
          // We're removing an invoice before the current one
          // After removal, current index needs to be decremented
          newCurrentIndex = this.currentInvoiceIndex - 1;
        }
        // If removing an invoice after current, no change needed

        // Remove invoice from array (splice is reactive in Vue)
        this.invoices.splice(invoiceIndex, 1);

        // Update current index
        this.currentInvoiceIndex = newCurrentIndex;
        
        // Ensure we have a valid invoices array
        if (!Array.isArray(this.invoices)) {
          console.error('Invoices is not an array after removal!');
          this.invoices = [];
        }

        // Ensure current index is valid
        if (this.currentInvoiceIndex < 0) {
          this.currentInvoiceIndex = 0;
        }
        if (this.currentInvoiceIndex >= this.invoices.length && this.invoices.length > 0) {
          this.currentInvoiceIndex = this.invoices.length - 1;
        }

        // If no invoices remain, create a new empty invoice
        if (this.invoices.length === 0) {
          this.initializeFirstInvoice();
          this.currentTabsPage = 0;
        } else {
          // Restore the current invoice state
          if (this.currentInvoiceIndex >= 0 && this.currentInvoiceIndex < this.invoices.length) {
            this.restoreInvoiceState(this.invoices[this.currentInvoiceIndex]);
            // Update pagination to show the current invoice
            this.updateTabsPageForInvoice(this.currentInvoiceIndex);
          }
          
          // Adjust pagination if needed
          const maxPage = Math.max(0, Math.ceil(this.invoices.length / this.tabsPerPage) - 1);
          if (this.currentTabsPage > maxPage) {
            this.currentTabsPage = maxPage;
          }
        }

        // Force Vue to update the view
        this.$nextTick(() => {
          this.$forceUpdate();
        });
      } catch (error) {
        console.error('Error removing invoice:', error);
        this.$toast.error(
          this.$t("Error"),
          this.$t("Failed to remove invoice. Please try again.")
        );
      }
    },

    // Close POS session
    async closeSession() {
      // Check if there's an active invoice with data
      const hasActiveData = this.invoices.some(inv =>
        inv.invoiceStatus === 'active' &&
        inv.selectedProducts &&
        inv.selectedProducts.length > 0
      );

      if (hasActiveData) {
        const confirmed = await this.$swal({
          title: this.$t("Close Session?"),
          text: this.$t("You have an active invoice with items. What would you like to do?"),
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: this.$t("Save & Close"),
          cancelButtonText: this.$t("Discard & Close"),
          showDenyButton: true,
          denyButtonText: this.$t("Cancel"),
        });

        if (confirmed.isConfirmed) {
          // Save current invoice state
          this.saveInvoiceState();

          // Clear all invoices and reset
          this.invoices = [];
          this.currentInvoiceIndex = 0;
          this.invoiceCounter = 0;
          this.form.reset();
          this.againDefaultSettings();
          this.clearSuspendedInvoices(); // Clear persisted suspended invoices
          this.initializeFirstInvoice();

          this.$toast.success(
            this.$t("Session Closed"),
            this.$t("POS session has been closed successfully")
          );
        } else if (confirmed.isDenied === false) {
          // User clicked "Discard & Close"
          // Clear all invoices and reset
          this.invoices = [];
          this.currentInvoiceIndex = 0;
          this.invoiceCounter = 0;
          this.form.reset();
          this.againDefaultSettings();
          this.clearSuspendedInvoices(); // Clear persisted suspended invoices
          this.initializeFirstInvoice();

          this.$toast.info(
            this.$t("Session Closed"),
            this.$t("POS session has been closed and all data discarded")
          );
        }
        // If user clicked Cancel, do nothing
      } else {
        // No active data, just close
        const confirmed = await this.$swal({
          title: this.$t("Close Session?"),
          text: this.$t("Are you sure you want to close the POS session?"),
          icon: "question",
          showCancelButton: true,
          confirmButtonText: this.$t("Yes, Close"),
          cancelButtonText: this.$t("Cancel"),
        });

        if (confirmed.isConfirmed) {
          this.invoices = [];
          this.currentInvoiceIndex = 0;
          this.invoiceCounter = 0;
          this.form.reset();
          this.againDefaultSettings();
          this.clearSuspendedInvoices(); // Clear persisted suspended invoices
          this.initializeFirstInvoice();

          this.$toast.success(
            this.$t("Session Closed"),
            this.$t("POS session has been closed successfully")
          );
        }
      }
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

    // Invoice Return Modal methods
    openInvoiceReturnModal() {
      this.showInvoiceReturnModal = true;
      this.modalInvoiceSearchQuery = '';
      this.modalInvoiceSearchError = '';
      this.modalSearchedInvoice = null;
      // Focus on search input when modal opens
      this.$nextTick(() => {
        if (this.$refs.modalInvoiceSearchInput) {
          this.$refs.modalInvoiceSearchInput.focus();
        }
      });
    },

    closeInvoiceReturnModal() {
      this.showInvoiceReturnModal = false;
      this.modalInvoiceSearchQuery = '';
      this.modalInvoiceSearchError = '';
      this.modalSearchedInvoice = null;
      this.isSearchingInvoiceInModal = false;
    },

    async searchInvoiceInModal() {
      const searchTerm = this.modalInvoiceSearchQuery ? this.modalInvoiceSearchQuery.trim() : '';

      if (!searchTerm) {
        this.modalInvoiceSearchError = this.$t('Please enter an invoice number');
        this.modalSearchedInvoice = null;
        return;
      }

      this.isSearchingInvoiceInModal = true;
      this.modalInvoiceSearchError = '';
      this.modalSearchedInvoice = null;

      try {
        let invoices = [];

        // Primary: GET /api/invoices?term=...&perPage=9999 (includes all invoices, including returned)
        try {
          const indexResponse = await axios.get('/api/invoices', {
            params: {
              term: searchTerm,
              perPage: 9999,
            },
          });

          if (indexResponse && indexResponse.data) {
            if (Array.isArray(indexResponse.data.data)) {
              invoices = indexResponse.data.data;
            } else if (Array.isArray(indexResponse.data)) {
              invoices = indexResponse.data;
            }
          }
        } catch (indexError) {
          // Continue to search fallback
        }

        if (!Array.isArray(invoices)) {
          invoices = [];
        }

        // Fallback: search endpoint if index returned no results
        if (invoices.length === 0) {
          try {
            const searchResponse = await axios.get('/api/invoices/search', {
              params: {
                term: searchTerm,
                perPage: 9999,
              },
            });

            if (searchResponse && searchResponse.data) {
              if (Array.isArray(searchResponse.data.data)) {
                invoices = searchResponse.data.data;
              } else if (Array.isArray(searchResponse.data)) {
                invoices = searchResponse.data;
              }
            }
          } catch (searchError) {
            // Keep invoices empty and show not-found below
          }
        }

        if (invoices.length > 0) {
          // Normalize search term (case-insensitive, trim)
          const normalizedSearchTerm = searchTerm.toUpperCase().trim();
          
          // Helper function to check if invoice matches search term
          const matchesInvoice = (invoice) => {
            if (!invoice) return false;
            
            const invoiceNo = (invoice.invoiceNo || '').toString().toUpperCase().trim();
            const invoiceLabel = (invoice.invoiceLabel || '').toString().toUpperCase().trim();
            
            // 1. Exact match on invoiceNo
            if (invoiceNo === normalizedSearchTerm) {
              return true;
            }
            
            // 2. Exact match on invoiceLabel
            if (invoiceLabel === normalizedSearchTerm) {
              return true;
            }
            
            // 3. Check if invoiceLabel ends with search term (handles prefix cases)
            if (invoiceLabel.endsWith(normalizedSearchTerm)) {
              return true;
            }
            
            // 4. Check if invoiceNo ends with search term
            if (invoiceNo.endsWith(normalizedSearchTerm)) {
              return true;
            }
            
            // 5. Check if invoiceLabel contains search term
            if (invoiceLabel.includes(normalizedSearchTerm)) {
              return true;
            }
            
            // 6. Check if invoiceNo contains search term
            if (invoiceNo.includes(normalizedSearchTerm)) {
              return true;
            }
            
            return false;
          };

          // Find matching invoice - prioritize exact matches
          let matchedInvoice = invoices.find(inv => {
            const invoiceNo = (inv.invoiceNo || '').toString().toUpperCase().trim();
            const invoiceLabel = (inv.invoiceLabel || '').toString().toUpperCase().trim();
            return invoiceNo === normalizedSearchTerm || invoiceLabel === normalizedSearchTerm;
          });

          // If no exact match, try partial matches
          if (!matchedInvoice) {
            matchedInvoice = invoices.find(matchesInvoice);
          }

          if (matchedInvoice) {
            if (matchedInvoice.slug) {
              try {
                const detailResponse = await axios.get(`/api/invoices/${matchedInvoice.slug}`);
                if (detailResponse.data && detailResponse.data.data) {
                  this.modalSearchedInvoice = detailResponse.data.data;
                  this.modalInvoiceSearchError = '';
                } else {
                  this.modalSearchedInvoice = matchedInvoice;
                }
              } catch (detailError) {
                this.modalSearchedInvoice = matchedInvoice;
              }
            } else {
              this.modalSearchedInvoice = matchedInvoice;
            }
          } else {
            this.modalInvoiceSearchError = this.$t('Invoice not found. Please check the invoice number.');
          }
        } else {
          this.modalInvoiceSearchError = this.$t('Invoice not found. Please check the invoice number.');
        }
      } catch (error) {
        this.modalInvoiceSearchError =
          (error.response && error.response.data && error.response.data.message)
            ? error.response.data.message
            : this.$t('Error searching invoice. Please try again.');
      } finally {
        this.isSearchingInvoiceInModal = false;
      }
    },

    async selectInvoiceForReturn() {
      if (!this.modalSearchedInvoice) {
        return;
      }

      // Save current invoice state if exists
      if (this.invoices.length > 0 && this.currentInvoiceIndex >= 0 && this.currentInvoiceIndex < this.invoices.length) {
        this.saveInvoiceState();
      }

      // Create a new invoice session for the return
      const returnInvoice = this.createEmptyInvoice();
      returnInvoice.isReturnInvoice = true;
      returnInvoice.reference = `${this.$t('Return')}-${this.invoiceCounter}`;
      
      // Store the selected invoice in POS state
      this.selectedInvoiceForReturn = this.modalSearchedInvoice;
      returnInvoice.selectedInvoiceForReturn = this.modalSearchedInvoice;
      returnInvoice.returnInvoiceNo = this.modalSearchedInvoice.invoiceNo 
        ? this.$options.filters.withPrefix(this.modalSearchedInvoice.invoiceNo, this.invoicePrefix)
        : null;
      
      // Enable invoice return mode
      this.isInvoiceReturnMode = true;
      
      // Load invoice products for return
      await this.loadInvoiceDetails(this.modalSearchedInvoice.slug);
      
      // Update return invoice with loaded data
      returnInvoice.returnProducts = JSON.parse(JSON.stringify(this.returnProducts || []));
      returnInvoice.totalReturnAmount = this.totalReturnAmount || 0;
      returnInvoice.returnForm = {
        returnReason: this.returnForm.returnReason || '',
        invoice: this.returnForm.invoice || null,
        selectedProducts: this.returnForm.selectedProducts || [],
        totalReturn: this.returnForm.totalReturn || 0,
        date: this.returnForm.date || new Date().toISOString().slice(0, 10),
        note: this.returnForm.note || '',
        status: this.returnForm.status !== undefined ? this.returnForm.status : 1,
        account: this.returnForm.account || '',
        availableBalance: this.returnForm.availableBalance || 0,
        receiptNo: this.returnForm.receiptNo || '',
      };
      
      // Create session via API
      try {
        const invoiceData = this.getInvoiceData(returnInvoice);
        const response = await axios.post('/api/pos/sessions', {
          invoice_data: invoiceData,
          status: 'active',
        });
        returnInvoice.session_id = response.data.data.id;
      } catch (error) {
        console.error('Error creating return invoice session:', error);
        // Continue anyway, session will be created on next save
      }
      
      // Add to invoices array and switch to it
      this.invoices.push(returnInvoice);
      this.currentInvoiceIndex = this.invoices.length - 1;
      this.updateTabsPageForInvoice(this.currentInvoiceIndex);
      
      // Restore the return invoice state
      this.restoreInvoiceState(returnInvoice);
      
      // Close the modal
      this.closeInvoiceReturnModal();
      
      // Show success message
      this.$toast.success(
        this.$t('Invoice Selected'),
        this.$t('Invoice has been selected for return. Please select products to return.')
      );
    },

    adjustProductQuantity() {
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

    // Invoice Return Methods
    toggleInvoiceReturnMode() {
      if (!this.isInvoiceReturnMode) {
        // Reset invoice return data when disabling
        this.resetInvoiceReturnData();
      }
    },

    resetInvoiceReturnData() {
      this.invoiceSearchQuery = '';
      this.invoiceSearchError = '';
      this.selectedInvoiceForReturn = null;
      this.returnProducts = [];
      this.totalReturnAmount = 0;
      this.returnForm.reset();
    },

    async searchInvoice() {
      // Trim and validate input
      const searchTerm = this.invoiceSearchQuery ? this.invoiceSearchQuery.trim() : '';
      
      if (!searchTerm || searchTerm === '') {
        this.invoiceSearchError = this.$t('Please enter an invoice number');
        return;
      }

      this.isSearchingInvoice = true;
      this.invoiceSearchError = '';
      this.selectedInvoiceForReturn = null;
      this.returnProducts = [];

      try {
        // Use GET /api/invoices?term=...&perPage=9999 to include all matching invoices (including returned)
        let invoices = [];

        // Primary: index endpoint with term (returns all matching invoices regardless of status/returned)
        try {
          const indexResponse = await axios.get('/api/invoices', {
            params: {
              term: searchTerm,
              perPage: 9999,
            },
          });

          if (indexResponse && indexResponse.data) {
            if (Array.isArray(indexResponse.data.data)) {
              invoices = indexResponse.data.data;
            } else if (Array.isArray(indexResponse.data)) {
              invoices = indexResponse.data;
            }
          }
        } catch (indexError) {
          // Continue to search fallback
        }

        // Fallback: search endpoint if index returned no results
        if (invoices.length === 0) {
          const searchResponse = await axios.get('/api/invoices/search', {
            params: {
              term: searchTerm,
              perPage: 9999,
            },
          });

          if (searchResponse && searchResponse.data) {
            if (searchResponse.data.data && Array.isArray(searchResponse.data.data)) {
              invoices = searchResponse.data.data;
            } else if (Array.isArray(searchResponse.data)) {
              invoices = searchResponse.data;
            }
          }
        }

        if (invoices && invoices.length > 0) {
          // Normalize search term (case-insensitive, trim)
          const normalizedSearchTerm = searchTerm.toUpperCase().trim();
          
          // Helper function to check if invoice matches search term
          const matchesInvoice = (invoice) => {
            if (!invoice) return false;
            
            // Get invoice number and label (case-insensitive comparison)
            const invoiceNo = (invoice.invoiceNo || '').toString().toUpperCase().trim();
            const invoiceLabel = (invoice.invoiceLabel || '').toString().toUpperCase().trim();
            
            // 1. Exact match on invoiceNo
            if (invoiceNo === normalizedSearchTerm) {
              return true;
            }
            
            // 2. Exact match on invoiceLabel
            if (invoiceLabel === normalizedSearchTerm) {
              return true;
            }
            
            // 3. Check if invoiceLabel ends with search term (handles prefix cases)
            // e.g., search "API001" matches "APIAPI001"
            if (invoiceLabel.endsWith(normalizedSearchTerm)) {
              return true;
            }
            
            // 4. Check if invoiceNo ends with search term
            if (invoiceNo.endsWith(normalizedSearchTerm)) {
              return true;
            }
            
            // 5. Check if invoiceLabel contains search term
            if (invoiceLabel.includes(normalizedSearchTerm)) {
              return true;
            }
            
            // 6. Check if invoiceNo contains search term
            if (invoiceNo.includes(normalizedSearchTerm)) {
              return true;
            }
            
            return false;
          };

          // Find matching invoice - prioritize exact matches
          let matchedInvoice = invoices.find(inv => {
            const invoiceNo = (inv.invoiceNo || '').toString().toUpperCase().trim();
            const invoiceLabel = (inv.invoiceLabel || '').toString().toUpperCase().trim();
            return invoiceNo === normalizedSearchTerm || invoiceLabel === normalizedSearchTerm;
          });

          // If no exact match, try partial matches
          if (!matchedInvoice) {
            matchedInvoice = invoices.find(matchesInvoice);
          }

          if (matchedInvoice) {
            await this.loadInvoiceDetails(matchedInvoice.slug);
            // Clear any previous errors on success
            this.invoiceSearchError = '';
          } else {
            this.invoiceSearchError = this.$t('Invoice not found. Please check the invoice number.');
          }
        } else {
          // Log for debugging
          console.log('No invoices found in response. Search term:', searchTerm);
          console.log('Invoices array length:', invoices.length);
          this.invoiceSearchError = this.$t('Invoice not found. Please check the invoice number.');
        }
      } catch (error) {
        console.error('Error searching invoice:', error);
        console.error('Error details:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
        });
        this.invoiceSearchError = this.$t('Error searching invoice. Please try again.');
        if (error.response && error.response.data && error.response.data.message) {
          this.invoiceSearchError = error.response.data.message;
        }
      } finally {
        this.isSearchingInvoice = false;
      }
    },

    async loadInvoiceDetails(invoiceSlug) {
      try {
        const response = await axios.get(`/api/invoices/${invoiceSlug}`);
        
        if (response.data && response.data.data) {
          this.selectedInvoiceForReturn = response.data.data;
          
          // Load invoice products
          if (this.selectedInvoiceForReturn.invoiceProducts && this.selectedInvoiceForReturn.invoiceProducts.length > 0) {
            this.returnProducts = this.selectedInvoiceForReturn.invoiceProducts.map(product => {
              // Handle both camelCase (from resource) and snake_case (direct from model) field names
              const salePrice = Number(product.salePrice || product.sale_price || product.unitPrice || 0);
              const purchasePrice = Number(product.purchasePrice || product.purchase_price || product.avgPurchasePrice || 0);
              const discountAmount = Number(product.productDiscount || product.discountAmount || product.discount_amount || 0);
              const taxAmount = Number(product.productTax || product.unitTax || product.tax_amount || 0);
              const quantity = Number(product.quantity || 0);
              
              return {
                id: product.productID || product.product_id || product.id,
                name: product.productName || product.product?.name || product.name || '',
                slug: product.productSlug || product.product?.slug || product.slug || '',
                originalQuantity: quantity,
                unitPrice: salePrice,
                unitCost: salePrice, // Use sale price as unit cost for return calculation
                avgPurchasePrice: purchasePrice,
                returnQty: 0,
                returnTotal: 0,
                isSelected: false,
                returnQtyError: '',
                discountAmount: discountAmount,
                tax_amount: taxAmount,
              };
            });
            
            // Initialize totals calculation
            this.calculateReturnTotals();
          } else {
            this.returnProducts = [];
            this.invoiceSearchError = this.$t('No products found in this invoice.');
          }

          // Set return form data
          this.returnForm.invoice = this.selectedInvoiceForReturn;
          // Ensure client is properly set from invoice
          if (this.selectedInvoiceForReturn.client) {
            this.returnForm.client = this.selectedInvoiceForReturn.client;
          } else if (this.selectedInvoiceForReturn.client_id) {
            // If client object is not loaded, try to find it from clients list
            const clientFromList = this.clients.find(c => c.id === this.selectedInvoiceForReturn.client_id);
            if (clientFromList) {
              this.returnForm.client = clientFromList;
            }
          }
          this.returnForm.date = new Date().toISOString().slice(0, 10);
          
          // Set default status based on country
          if (this.isSaudiArabia) {
            this.returnForm.status = 0; // Inactive for Saudi Arabia
          } else {
            this.returnForm.status = 1; // Active for other countries
          }
        }
      } catch (error) {
        console.error('Error loading invoice details:', error);
        this.invoiceSearchError = this.$t('Error loading invoice details. Please try again.');
        if (error.response && error.response.data && error.response.data.message) {
          this.invoiceSearchError = error.response.data.message;
        }
      }
    },

    validateReturnQuantity(index) {
      const product = this.returnProducts[index];
      if (!product) return;

      if (product.returnQty < 0) {
        product.returnQtyError = this.$t('Return quantity cannot be negative');
        product.returnQty = 0;
      } else if (product.returnQty > product.originalQuantity) {
        product.returnQtyError = this.$t('Return quantity cannot exceed original quantity');
        product.returnQty = product.originalQuantity;
      } else if (product.returnQty > 0 && !product.isSelected) {
        // Auto-select if quantity is entered
        product.isSelected = true;
      } else if (product.returnQty === 0 && product.isSelected) {
        // Auto-deselect if quantity is 0
        product.isSelected = false;
      } else {
        product.returnQtyError = '';
      }

      this.calculateReturnTotals();
    },

    calculateReturnTotals() {
      this.totalReturnAmount = 0;

      this.returnProducts.forEach((product, index) => {
        if (product.isSelected && product.returnQty > 0) {
          // Calculate return total matching backend logic exactly
          // Backend uses: unit_discount = round(discount_amount / quantity, 2)
          const unitDiscount = this.roundToTwoDecimals(
            (product.discountAmount || 0) / (product.originalQuantity || 1)
          );

          // Backend uses: unit_net = sale_price - unit_discount
          const unitNet = (product.unitPrice || 0) - unitDiscount;

          // Backend uses: unit_vat = round(unit_net * 0.20, 2)
          // Fixed 20% VAT rate as per backend implementation
          const unitVat = this.roundToTwoDecimals(unitNet * 0.20);

          // Backend uses: unit_total = unit_net + unit_vat
          const unitTotal = unitNet + unitVat;

          // Backend uses: return_total = round(unit_total * return_qty, 2)
          product.returnTotal = this.roundToTwoDecimals(unitTotal * product.returnQty);
          this.totalReturnAmount += product.returnTotal;
          
          // Debug logging for troubleshooting
          if (product.returnTotal === 0 && product.unitPrice > 0) {
            console.log(`Product ${index} calculation:`, {
              unitPrice: product.unitPrice,
              discountAmount: product.discountAmount,
              originalQuantity: product.originalQuantity,
              returnQty: product.returnQty,
              unitDiscount,
              unitNet,
              unitVat,
              unitTotal,
              returnTotal: product.returnTotal,
            });
          }
        } else {
          product.returnTotal = 0;
        }
      });

      // Round total to 2 decimals to match backend
      this.totalReturnAmount = this.roundToTwoDecimals(this.totalReturnAmount);
      this.returnForm.totalReturn = this.totalReturnAmount;
    },

    toggleAllReturnProducts() {
      const allSelected = this.allReturnProductsSelected;
      this.returnProducts.forEach(product => {
        product.isSelected = !allSelected;
        if (!allSelected && product.returnQty === 0) {
          product.returnQty = 1; // Set default return quantity to 1 when selecting
        } else if (allSelected) {
          product.returnQty = 0;
        }
      });
      this.calculateReturnTotals();
    },

    updateReturnAccountBalance() {
      if (this.returnForm.account && this.returnForm.account.availableBalance !== undefined) {
        this.returnForm.availableBalance = Number(this.returnForm.account.availableBalance || 0);
      } else {
        this.returnForm.availableBalance = 0;
      }
    },

    async saveInvoiceReturn() {
      // Recalculate totals before submission to ensure accuracy
      this.calculateReturnTotals();

      // Validate return reason
      if (!this.returnForm.returnReason || this.returnForm.returnReason.trim() === '') {
        this.$toast.error(
          this.$t('Validation Error'),
          this.$t('Please enter a return reason')
        );
        return;
      }

      // Validate that at least one product is selected with return quantity > 0
      const selectedProducts = this.returnProducts.filter(
        p => p.isSelected && p.returnQty > 0
      );

      if (selectedProducts.length === 0) {
        this.$toast.error(
          this.$t('Validation Error'),
          this.$t('Please select at least one product with return quantity greater than 0')
        );
        return;
      }

      // Validate return quantities
      let hasError = false;
      selectedProducts.forEach(product => {
        if (product.returnQty <= 0) {
          product.returnQtyError = this.$t('Return quantity must be greater than 0');
          hasError = true;
        } else if (product.returnQty > product.originalQuantity) {
          product.returnQtyError = this.$t('Return quantity cannot exceed original quantity');
          hasError = true;
        }
      });

      if (hasError) {
        this.$toast.error(
          this.$t('Validation Error'),
          this.$t('Please fix the return quantity errors')
        );
        return;
      }

      // Ensure totalReturnAmount is calculated and valid
      const calculatedTotalReturn = Number(this.totalReturnAmount || 0);
      if (calculatedTotalReturn <= 0) {
        this.$toast.error(
          this.$t('Validation Error'),
          this.$t('Total return amount must be greater than 0')
        );
        return;
      }

      // Validate account if return amount > 0
      if (calculatedTotalReturn > 0 && !this.returnForm.account) {
        this.$toast.error(
          this.$t('Validation Error'),
          this.$t('Please select an account for the return')
        );
        return;
      }

      // Prepare selected products for API
      const preparedProducts = selectedProducts.map(product => ({
        id: product.id,
        slug: product.slug,
        returnQty: product.returnQty,
        unitCost: product.unitCost,
        avgPurchasePrice: product.avgPurchasePrice,
      }));

      // Prepare form data - ensure totalReturn is a number with at least 2 decimal precision
      // Convert to number to ensure it's not a string
      const totalReturnValue = Number(this.roundToTwoDecimals(calculatedTotalReturn));
      
      // Final validation: ensure totalReturn is at least 1 (as required by backend)
      if (totalReturnValue < 1) {
        this.$toast.error(
          this.$t('Validation Error'),
          this.$t('Total return amount must be at least 1')
        );
        return;
      }

      // Ensure client is set from invoice if not already set
      const client = this.returnForm.client || this.selectedInvoiceForReturn?.client || null;
      
      if (!client) {
        this.$toast.error(
          this.$t('Validation Error'),
          this.$t('Client information is missing. Please try selecting the invoice again.')
        );
        return;
      }

      const formData = {
        returnReason: this.returnForm.returnReason,
        client: client,
        invoice: this.selectedInvoiceForReturn,
        selectedProducts: preparedProducts,
        totalReturn: totalReturnValue, // Ensure it's a number, not a string
        date: this.returnForm.date,
        note: this.returnForm.note || '',
        status: this.returnForm.status,
      };

      // Add account if return amount > 0
      if (this.totalReturnAmount > 0 && this.returnForm.account) {
        formData.account = this.returnForm.account;
        formData.availableBalance = this.returnForm.availableBalance || 0;
        formData.receiptNo = this.returnForm.receiptNo || '';
      }

      try {
        this.returnForm.busy = true;
        
        // Debug: Log form data before submission
        console.log('Submitting invoice return with data:', {
          ...formData,
          totalReturn: formData.totalReturn,
          totalReturnType: typeof formData.totalReturn,
          selectedProductsCount: formData.selectedProducts.length,
        });
        
        const response = await axios.post('/api/invoice-returns', formData);

        if (response.data.success) {
          this.$toast.success(
            this.$t('Success'),
            this.$t('Invoice return created successfully')
          );

          // Reset invoice return data
          this.resetInvoiceReturnData();
          this.isInvoiceReturnMode = false;

          // Optionally redirect to invoice returns page or show success message
          this.$router.push({ name: 'invoiceReturns.index' });
        } else {
          throw new Error(response.data.message || this.$t('Failed to create invoice return'));
        }
      } catch (error) {
        console.error('Error creating invoice return:', error);
        const ErrorHandler = require('~/utils/errorHandler').default;
        ErrorHandler.handleApiError(error, {
          showValidationErrors: true,
        });
      } finally {
        this.returnForm.busy = false;
      }
    },
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

.pos-r-head-search>.search,
.pos-r-head-search>search {
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

.pos-barcode-row .input-group {
  max-width: 100%;
}

.pos-scanned-badge {
  font-size: 0.7rem;
  animation: pos-scanned-fade 2.5s ease-out;
}

@keyframes pos-scanned-fade {
  0% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
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
  line-height: 2;
}

[dir="rtl"] #pos .input-group>.form-control:not(:last-child) {
  border-right: 1px solid #ced4da;
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

/* Invoice Session Controls */
.invoice-session-controls-wrapper {
  margin-bottom: 1.5rem;
}

.invoice-session-controls {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 1px solid #e0e6ed;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.invoice-session-controls:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.08);
}

.invoice-tabs-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  width: 100%;
}

.invoice-tabs-wrapper .invoice-tabs-nav-next {
  margin-right: 4px;
}

.invoice-tabs-container {
  display: flex;
  gap: 8px;
  padding: 4px 0;
  overflow: hidden;
  flex-wrap: nowrap;
  flex: 1;
  min-width: 0;
  scroll-behavior: smooth;
}

.invoice-tabs-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 0;
  background: #ffffff;
  border: 1.5px solid #d1d9e0;
  border-radius: 8px;
  color: #5a6c7d;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.invoice-tabs-nav-btn:hover:not(:disabled) {
  background: #f0f4f8;
  border-color: #33a0d9;
  color: #33a0d9;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(51, 160, 217, 0.15);
}

.invoice-tabs-nav-btn:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.invoice-tabs-nav-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  background: #f5f7fa;
}

.invoice-create-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 19px 19px;
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(51, 160, 217, 0.25);
  white-space: nowrap;
  margin-left: 4px;
}

.invoice-create-btn:hover {
  background: linear-gradient(135deg, #2a8bc7 0%, #2280b3 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(51, 160, 217, 0.35);
}

.invoice-create-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(51, 160, 217, 0.25);
}

.invoice-create-btn i {
  font-size: 14px;
}

.invoice-create-btn-text {
  font-size: 13px;
  font-weight: 600;
}

/* Invoice Return Button */
.invoice-return-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 19px 19px;
  background: linear-gradient(135deg, #28a745 0%, #218838 100%);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(40, 167, 69, 0.2);
  margin-left: 8px;
}

.invoice-return-btn:hover {
  background: linear-gradient(135deg, #218838 0%, #1e7e34 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.35);
}

.invoice-return-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(40, 167, 69, 0.25);
}

.invoice-return-btn i {
  font-size: 14px;
}

.invoice-return-btn-label {
  white-space: nowrap;
}

/* Invoice Return Modal Styles */
.invoice-return-search-container {
  padding: 10px 0;
}

.invoice-info-card {
  margin-top: 20px;
}

.invoice-info-card .card {
  border: 1px solid #dee2e6;
  border-radius: 8px;
}

.invoice-info-card .card-body {
  padding: 15px;
}

.invoice-info-card .card-title {
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.invoice-info-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.invoice-info-item:last-child {
  border-bottom: none;
}

.invoice-info-item strong {
  color: #666;
  font-weight: 600;
}

.invoice-info-item span {
  color: #333;
  text-align: right;
}

.invoice-return-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 15px;
  border-top: 1px solid #dee2e6;
}

.invoice-tab {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0px;
  background: #ffffff;
  border: 1.5px solid #e0e6ed;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 135px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.invoice-tab-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 0;
}

.invoice-tab-header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
}

.invoice-tab-icon {
  font-size: 14px;
  color: #6c757d;
  opacity: 0.7;
  transition: all 0.2s ease;
}

.invoice-tab:hover {
  background: #f8f9fa;
  border-color: #d1d9e0;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.invoice-tab:hover .invoice-tab-icon {
  color: #33a0d9;
  opacity: 1;
}

.invoice-tab-active {
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  border-color: #33a0d9;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(51, 160, 217, 0.35);
  transform: translateY(-1px);
}

.invoice-tab-active .invoice-tab-icon {
  color: #ffffff;
  opacity: 1;
}

.invoice-tab-active:hover {
  background: linear-gradient(135deg, #2a8bc7 0%, #2280b3 100%);
  box-shadow: 0 6px 18px rgba(51, 160, 217, 0.4);
  transform: translateY(-2px);
}

.invoice-tab-number {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.2px;
}

.invoice-tab-close {
  margin-left: auto;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 4px;
  border-radius: 5px;
  opacity: 0.6;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.invoice-tab-close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.08);
  transform: scale(1.15);
}

.invoice-tab-active .invoice-tab-close {
  opacity: 0.8;
}

.invoice-tab-active .invoice-tab-close:hover {
  background: rgba(255, 255, 255, 0.25);
  opacity: 1;
}

.invoice-tab-time {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #6c757d;
  opacity: 0.75;
  margin-top: 1px;
  font-weight: 500;
}

.invoice-tab-active .invoice-tab-time {
  color: rgba(255, 255, 255, 0.95);
  opacity: 0.9;
}

.invoice-tab-time i {
  font-size: 10px;
}

/* Invoice Return Tab Styling */
.invoice-tab-return {
  border-color: #f59e0b;
  background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
}

.invoice-tab-return:hover {
  background: linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%);
  border-color: #f59e0b;
}

.invoice-tab-return .invoice-tab-icon {
  color: #f59e0b;
  opacity: 1;
}

.invoice-tab-return.invoice-tab-active {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-color: #f59e0b;
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
}

.invoice-tab-return.invoice-tab-active:hover {
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.4);
}

.return-badge {
  display: inline-block;
  padding: 2px 6px;
  background: #f59e0b;
  color: #ffffff;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 4px;
  vertical-align: middle;
}

.invoice-tab-return.invoice-tab-active .return-badge {
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

@media only screen and (max-width: 767px) {
  .invoice-session-controls {
    padding: 10px 12px;
    border-radius: 10px;
  }

  .invoice-tabs-wrapper {
    gap: 8px;
  }

  .invoice-tab {
    min-width: 110px;
    padding: 8px 12px;
    gap: 8px;
  }

  .invoice-tab-number {
    font-size: 13px;
  }

  .invoice-tab-time {
    font-size: 10px;
  }

  .invoice-tab-time i {
    font-size: 9px;
  }

  .invoice-tab-icon {
    font-size: 12px;
  }

  .invoice-create-btn {
    padding: 8px 12px;
    font-size: 12px;
  }

  .invoice-create-btn-text {
    display: none;
  }

  .invoice-create-btn i {
    font-size: 14px;
  }

  .invoice-return-btn {
    padding: 8px 12px;
    font-size: 12px;
    margin-left: 4px;
  }

  .invoice-return-btn-label {
    display: none;
  }

  .invoice-return-btn i {
    font-size: 14px;
  }
}

/* RTL Invoice Tab Time */
[dir="rtl"] .invoice-tab-time {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .invoice-tab-header {
  direction: rtl;
}

/* RTL Invoice Tabs Navigation */
[dir="rtl"] .invoice-tabs-nav-prev {
  order: 3;
  margin-left: 8px;
  margin-right: 0;
}

[dir="rtl"] .invoice-tabs-nav-next {
  order: 1;
  margin-right: 8px;
  margin-left: 0;
}

[dir="rtl"] .invoice-create-btn {
  order: 0;
  margin-left: 0;
}

[dir="rtl"] .invoice-return-btn {
  order: -1;
  margin-left: 0;
  margin-right: 8px;
}

[dir="rtl"] .invoice-tabs-wrapper .invoice-tabs-nav-next {
  margin-right: 0;
}

[dir="rtl"] .invoice-tab-close {
  margin-left: 0;
  margin-right: auto;
}

@media only screen and (max-width: 767px) {
  .invoice-tabs-nav-btn {
    width: 52px;
    height: 52px;
    font-size: 12px;
  }

  .invoice-create-btn {
    padding: 19px 19px;
    margin-left: 4px;
  }
}
</style>

