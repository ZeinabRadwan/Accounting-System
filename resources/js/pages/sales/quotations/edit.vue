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
                <router-link :to="{ name: 'quotations.index' }" class="btn btn-info">
                  <template v-if="isRTL">
                    {{ $t("Back") }} <i class="fas fa-long-arrow-alt-left" />
                  </template>
                  <template v-else>
                    <template
                      v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                      {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

                    </template>

                    <template v-else>

                      <template
                        v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                        {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                      </template>


                      <template v-else>


                        <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                      </template>

                    </template>
                  </template>
                </router-link>
                <button type="submit" class="btn btn-success" :form="'quotationEditForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="quotationEditForm" role="form" @submit.prevent="updateQuotation" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <!-- Date Field - Standalone Row -->
              <div class="row" style="display: none;">
                <div class="form-group col-md-4">
                  <label for="date">{{ $t("Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
              </div>
              <div class="row" v-if="clients">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t("Client") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.client" :options="clients" label="name" :class="{
                          'is-invalid': form.errors.has('client'),
                          'rtl-select': isRTL
                        }" name="client" :placeholder="$t('Select a client')" />
                        <!-- Show create button when no client selected -->
                        <ClientCreateModal v-if="!form.client" @reloadClients="getClients('latest')">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ClientCreateModal>

                        <!-- Show edit button when client is selected -->
                        <div v-if="form.client" class="input-group-text create-btn edit-btn"
                          @click="editSelectedClient">
                          <i class="fas fa-edit"></i>
                        </div>
                      </div>
                      <has-error :form="form" field="client" />
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="reference">{{ $t("Reference") }}</label>
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
                        <v-select v-model="form.product" :options="products" label="label" class="flex-grow-1" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                          'rtl-select': isRTL
                        }" name="product" :placeholder="$t('Search Items')" @input="storeProduct(form.product)" />
                        <ProductCreateModal @reloadProducts="getProducts" @productCreated="handleProductCreated">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </div>
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                  <has-error :form="form" field="selectedProducts" />
                </div>
              </div>
              <!-- Insufficient Stock Warning -->
              <div v-if="hasInsufficientStock" class="row mt-3 mb-3">
                <div class="col-12">
                  <div class="alert alert-warning d-flex align-items-center" role="alert">
                    <i class="fas fa-exclamation-triangle mr-3" style="font-size: 1.5rem;"></i>
                    <div class="flex-grow-1">
                      <h6 class="mb-1">{{ $t("Insufficient Stock Alert") }}</h6>
                      <p class="mb-0">
                        {{ $t("Some products have insufficient stock. Click on the red badges to manage stock levels.")
                        }}
                        <button type="button" class="btn btn-sm btn-outline-warning ml-2"
                          @click="showAllInsufficientStock">
                          <i class="fas fa-list mr-1"></i>
                          {{ $t("View All") }}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Debug Panel -->
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-3">
                <div class="col-12">
                  <div class="card debug-panel">
                    <div class="card-header bg-warning text-dark">
                      <h6 class="mb-0">
                        <i class="fas fa-bug mr-2"></i>
                        🔍 Debug Panel - Calculation Steps
                        <span class="badge badge-success ml-2">DEBUG MODE ACTIVE</span>
                      </h6>
                    </div>
                    <div class="card-body">
                      <!-- Individual Item Calculations -->
                      <div class="mb-4">
                        <h6 class="text-primary">
                          <i class="fas fa-calculator mr-1"></i>
                          Individual Item Calculations:
                        </h6>
                        <div v-for="(item, index) in form.selectedProducts" :key="index"
                          class="debug-item mb-3 p-3 border rounded">
                          <div class="font-weight-bold text-dark mb-2">{{ item.name }}</div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="debug-step">
                                <strong>Subtotal:</strong> {{ formatToTwoDecimals(item.unitPrice) }} × {{ item.qty }} =
                                {{
                                  formatToTwoDecimals(item.unitPrice * item.qty) }}
                              </div>
                              <div class="debug-step">
                                <strong>Discount:</strong> {{ formatToTwoDecimals(item.discountAmount || 0) }}
                              </div>
                              <div class="debug-step">
                                <strong>After Discount:</strong> {{ formatToTwoDecimals((item.unitPrice * item.qty) -
                                  (item.discountAmount || 0)) }}
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="debug-step">
                                <strong>VAT:</strong> {{ formatToTwoDecimals(item.productTax || 0) }}
                              </div>
                              <div class="debug-step">
                                <strong>Total with VAT:</strong> {{ formatToTwoDecimals(item.totalPrice || 0) }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Summary Totals -->
                      <div class="mb-4">
                        <h6 class="text-success">
                          <i class="fas fa-chart-line mr-1"></i>
                          Summary Totals:
                        </h6>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="debug-summary">
                              <strong>Computed Values:</strong>
                              <ul class="list-unstyled mt-2">
                                <li>Total Unit Price: {{ formatToTwoDecimals(totalUnitPrice) }}</li>
                                <li>Total Discount: {{ formatToTwoDecimals(totalProductDiscount) }}</li>
                                <li>Total After Discount: {{ formatToTwoDecimals(totalAfterDiscount) }}</li>
                                <li>Total Tax: {{ formatToTwoDecimals(totalProductTax) }}</li>
                              </ul>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="debug-summary">
                              <strong>Form Values:</strong>
                              <ul class="list-unstyled mt-2">
                                <li>form.subTotal: {{ formatToTwoDecimals(form.subTotal) }}</li>
                                <li>form.totalDiscount: {{ formatToTwoDecimals(form.totalDiscount) }}</li>
                                <li>form.totalTax: {{ formatToTwoDecimals(form.totalTax) }}</li>
                                <li>form.netTotal: {{ formatToTwoDecimals(form.netTotal) }}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Template Display -->
                      <div class="mb-4">
                        <h6 class="text-info">
                          <i class="fas fa-eye mr-1"></i>
                          Template Display:
                        </h6>
                        <div class="debug-display p-3 bg-light rounded">
                          <div><strong>Summary Final Total:</strong> {{ formatToTwoDecimals(subtotal) }}</div>
                          <div><strong>Amount in Words:</strong> {{ toWord() }}</div>
                        </div>
                      </div>

                      <!-- Calculation Steps -->
                      <div class="mb-4">
                        <h6 class="text-warning">
                          <i class="fas fa-list-ol mr-1"></i>
                          Calculation Steps:
                        </h6>
                        <div class="debug-steps">
                          <div class="step">Step 1: Sum of all item totals = {{ formatToTwoDecimals(subtotal) }}</div>
                          <div class="step">Step 2: form.netTotal = {{ formatToTwoDecimals(form.netTotal) }}</div>
                          <div class="step">Step 3: Are they equal?
                            <span :class="subtotal === form.netTotal ? 'text-success' : 'text-danger'">
                              {{ subtotal === form.netTotal ? '✅ YES' : '❌ NO' }}
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Current State -->
                      <div class="mb-4">
                        <h6 class="text-secondary">
                          <i class="fas fa-info-circle mr-1"></i>
                          Current State:
                        </h6>
                        <div class="debug-state">
                          <div>Selected Products Count: {{ form.selectedProducts.length }}</div>
                          <div>Is Saudi Arabia: {{ isSaudiArabia }}</div>
                          <div>Debug Panel Visible: ✅ YES</div>
                        </div>
                      </div>

                      <!-- Summary Table Comparison -->
                      <div class="mb-0">
                        <h6 class="text-danger">
                          <i class="fas fa-table mr-1"></i>
                          Summary Table Comparison:
                        </h6>
                        <div class="table-responsive">
                          <table class="table table-sm table-bordered">
                            <thead class="thead-light">
                              <tr>
                                <th>Value</th>
                                <th>Computed Property</th>
                                <th>Form Value</th>
                                <th>Template Display</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Subtotal</td>
                                <td>{{ formatToTwoDecimals(totalUnitPrice) }}</td>
                                <td>{{ formatToTwoDecimals(form.subTotal) }}</td>
                                <td>{{ formatToTwoDecimals(totalUnitPrice) }}</td>
                                <td>
                                  <span :class="totalUnitPrice === form.subTotal ? 'text-success' : 'text-danger'">
                                    {{ totalUnitPrice === form.subTotal ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Discount</td>
                                <td>{{ formatToTwoDecimals(totalProductDiscount) }}</td>
                                <td>{{ formatToTwoDecimals(form.totalDiscount) }}</td>
                                <td>{{ formatToTwoDecimals(totalProductDiscount) }}</td>
                                <td>
                                  <span
                                    :class="totalProductDiscount === form.totalDiscount ? 'text-success' : 'text-danger'">
                                    {{ totalProductDiscount === form.totalDiscount ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>After Discount</td>
                                <td>{{ formatToTwoDecimals(totalAfterDiscount) }}</td>
                                <td>{{ formatToTwoDecimals(form.subTotal - form.totalDiscount) }}</td>
                                <td>{{ formatToTwoDecimals(totalAfterDiscount) }}</td>
                                <td>
                                  <span
                                    :class="totalAfterDiscount === (form.subTotal - form.totalDiscount) ? 'text-success' : 'text-danger'">
                                    {{ totalAfterDiscount === (form.subTotal - form.totalDiscount) ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Tax</td>
                                <td>{{ formatToTwoDecimals(totalProductTax) }}</td>
                                <td>{{ formatToTwoDecimals(form.totalTax) }}</td>
                                <td>{{ formatToTwoDecimals(totalProductTax) }}</td>
                                <td>
                                  <span :class="totalProductTax === form.totalTax ? 'text-success' : 'text-danger'">
                                    {{ totalProductTax === form.totalTax ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Final Total</td>
                                <td>{{ formatToTwoDecimals(subtotal) }}</td>
                                <td>{{ formatToTwoDecimals(form.netTotal) }}</td>
                                <td>{{ formatToTwoDecimals(subtotal) }}</td>
                                <td>
                                  <span :class="subtotal === form.netTotal ? 'text-success' : 'text-danger'">
                                    {{ subtotal === form.netTotal ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ItemsTable :items="form.selectedProducts" :prefix="prefix" :taxes="taxes" :form-errors="form.errors"
                :total-unit-price="totalUnitPrice" :total-product-discount="totalProductDiscount"
                :total-after-discount="totalAfterDiscount" :total-product-tax="totalProductTax" :subtotal="subtotal"
                :amount-in-words="toWord()" table-class="quotations-create-table" @item-change="handleItemChange"
                @discount-change="calculateProductDiscount" @vat-change="calculateProductVat" @remove-item="removeItem"
                @open-stock-modal="openStockAdjustmentModal" @edit-product="editProductFromTable" />

              <!-- Financial Summary Section -->
              <div
                v-if="form.selectedProducts && form.selectedProducts.length > 0"
                class="summary-footer-wrapper mt-4 mb-4"
              >
                <div class="summary-card">
                  <div class="summary-header">
                    <h6 class="summary-title">
                      <i class="fas fa-calculator mr-2"></i>
                      {{ $t("Summary") }}
                    </h6>
                  </div>
                  <div class="summary-body">
                    <div class="summary-row">
                      <span class="summary-label">
                        <i class="fas fa-boxes mr-2"></i>
                        {{ $t("Number of Items") }}
                      </span>
                      <span class="summary-value">{{ numberOfItems }}</span>
                    </div>
                    
                    <div class="summary-row">
                      <span class="summary-label">
                        <i class="fas fa-list-alt mr-2"></i>
                        {{ $t("Subtotal") }}
                      </span>
                      <span class="summary-value">
                        {{ formatToTwoDecimals(invoiceSubtotal) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>

                    <div
                      v-if="invoiceLevelDiscountTotal > 0"
                      class="summary-row summary-row-discount"
                    >
                      <span class="summary-label">
                        <i class="fas fa-tag mr-2"></i>
                        {{ $t("Total Discount") }}
                      </span>
                      <span class="summary-value text-danger">
                        -{{ formatToTwoDecimals(invoiceLevelDiscountTotal) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>

                    <div class="summary-row summary-row-net">
                      <span class="summary-label">
                        <i class="fas fa-coins mr-2"></i>
                        {{ $t("Net Amount") }}
                      </span>
                      <span class="summary-value">
                        {{ formatToTwoDecimals(netAmountBeforeVAT) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>

                    <div class="summary-row">
                      <span class="summary-label">
                        <i class="fas fa-percentage mr-2"></i>
                        {{ $t("VAT") }}
                      </span>
                      <span class="summary-value">
                        {{ formatToTwoDecimals(vatAmount) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>

                    <div class="summary-row summary-row-total">
                      <span class="summary-label">
                        <i class="fas fa-money-bill-wave mr-2"></i>
                        <strong>{{ $t("Grand Total") }}</strong>
                      </span>
                      <span class="summary-value summary-total">
                        <strong>
                          {{ formatToTwoDecimals(grandTotal) }}
                          <span class="saudi-riyal">ê</span>
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Insufficient Stock Warning -->
              <div v-if="hasInsufficientStock" class="row mt-3 mb-3">
                <div class="col-12">
                  <div class="alert alert-warning d-flex align-items-center" role="alert">
                    <i class="fas fa-exclamation-triangle mr-3" style="font-size: 1.5rem;"></i>
                    <div class="flex-grow-1">
                      <h6 class="mb-1">{{ $t("Insufficient Stock Alert") }}</h6>
                      <p class="mb-0">
                        {{ $t("Some products have insufficient stock. Click on the red badges to manage stock levels.")
                        }}
                        <button type="button" class="btn btn-sm btn-outline-warning ml-2"
                          @click="showAllInsufficientStock">
                          <i class="fas fa-list mr-1"></i>
                          {{ $t("View All") }}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Financial Details Section -->
              <div
                v-if="form.selectedProducts && form.selectedProducts.length > 0"
              >
                <!-- Tax Fields (Non-Saudi Arabia) -->
                <div class="row mb-3" v-if="taxes && !isSaudiArabia">
                  <div class="form-group col-12 col-sm-6 col-md-4">
                    <label for="orderTax"
                      >{{ $t("Quotation Tax") }}
                      <span class="required">*</span></label
                    >
                    <v-select
                      v-model="form.orderTax"
                      :options="taxes"
                      label="code"
                      :class="{ 'is-invalid': form.errors.has('orderTax') }"
                      name="orderTax"
                      :placeholder="$t('Select a tax type')"
                      @input="calculateSum(); clearFieldError('orderTax')"
                    />
                    <has-error :form="form" field="orderTax" />
                  </div>
                  <div class="form-group col-12 col-sm-6 col-md-4">
                    <label for="totalTax">{{ $t("Total Tax") }}</label>
                    <input
                      id="totalTax"
                      v-model="form.totalTax"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('totalTax') }"
                      name="totalTax"
                      readonly
                    />
                    <has-error :form="form" field="totalTax" />
                  </div>
                </div>

                <!-- Discount Section -->
                <div class="row mb-3">
                  <div class="form-group col-12 col-md-6">
                    <label for="discount_type">{{ $t("Discount Type") }}</label>
                    <div class="input-group">
                      <select
                        id="discount_type"
                        v-model="form.discountType"
                        class="form-control"
                        :class="{
                          'is-invalid': form.errors.has('discountType'),
                        }"
                        name="discountType"
                        @change="
                          calculateSum();
                          clearFieldError('discountType');
                        "
                      >
                        <option value="0">{{ $t("Fixed") }}</option>
                        <option value="1">{{ $t("Percentage") }}(%)</option>
                      </select>
                      <input
                        id="discount"
                        v-model="form.discount"
                        type="number"
                        step="any"
                        min="0"
                        :max="form.discountType == 1 ? 100 : form.subTotal"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('discount') }"
                        name="discount"
                        :placeholder="$t('Enter discount')"
                        @change="calculateSum"
                        @keyup="calculateSum"
                        @input="clearFieldError('discount')"
                      />
                    </div>
                    <div
                      v-if="
                        form.errors.has('discountType') ||
                        form.errors.has('discount')
                      "
                      class="invalid-feedback d-block"
                    >
                      <span
                        v-if="form.errors.has('discountType')"
                        class="d-block"
                        >{{ form.errors.get("discountType") }}</span
                      >
                      <span
                        v-if="form.errors.has('discount')"
                        class="d-block"
                        >{{ form.errors.get("discount") }}</span
                      >
                    </div>
                  </div>
                  <div class="form-group col-12 col-md-6">
                    <label for="total_amount">{{ $t("Amount") }}</label>
                    <input
                      id="total_amount"
                      :value="grandTotal"
                      type="number"
                      step="any"
                      class="form-control"
                      name="total_amount"
                      readonly
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-4" style="display: none;">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
                <div class="form-group col-md-4" style="display: none;">
                  <label for="deliveryPlace">{{
                    $t("Delivery Place")
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="status">{{ $t("Status") }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }" @change="clearFieldError('status')">
                    <option value="1">{{ $t("Active") }}</option>
                    <option value="0">{{ $t("Inactive") }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>

              <!-- Row 5: Discount Type + Total Amount (read-only) -->
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="discount_type">{{ $t("Discount Type") }}</label>
                  <div class="input-group">
                    <select id="discount_type" v-model="form.discount_type" class="form-control form-control-sm"
                      style="width: 85px;" :class="{ 'is-invalid': form.errors.has('discount_type') }"
                      name="discount_type" @change="calculateSum(); clearFieldError('discount_type')">
                      <option value="fixed">{{ $t("Fixed") }}</option>
                      <option value="percentage">{{ $t("%") }}</option>
                    </select>
                    <input id="discount_value" v-model="form.discount_value" type="number" step="any" min="0"
                      :max="form.discount_type === 'percentage' ? 100 : form.netTotal"
                      class="form-control form-control-sm" style="width: 80px;"
                      :class="{ 'is-invalid': form.errors.has('discount_value') }" name="discount_value" placeholder="0"
                      @change="calculateSum" @keyup="calculateSum" @input="clearFieldError('discount_value')" />
                  </div>
                  <div v-if="form.errors.has('discount_type') || form.errors.has('discount_value')"
                    class="invalid-feedback d-block">
                    <span v-if="form.errors.has('discount_type')" class="d-block">{{ form.errors.get('discount_type')
                    }}</span>
                    <span v-if="form.errors.has('discount_value')" class="d-block">{{ form.errors.get('discount_value')
                    }}</span>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="total_amount">{{ $t("Amount") }}</label>
                  <input id="total_amount" v-model="form.netTotal" type="number" step="any" class="form-control"
                    name="total_amount" readonly />
                </div>
              </div>

              <!-- Row 8: Notes -->
              <div class="form-group">
                <label for="note">{{ $t("Notes") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')"
                  @input="clearFieldError('note')" />
                <has-error :form="form" field="note" />
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button v-model="form.isSendEmail"
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
                  <span class="ml-3">{{ $t("Send To Email") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.email_configured"
                    class="ml-2 text-muted small">
                    ({{ $t("Email not configured") }})
                  </span>
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button v-model="form.isSendSMS"
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
                  <span class="ml-3">{{ $t("Send To SMS") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured"
                    class="ml-2 text-muted small">
                    ({{ $t("SMS not configured") }})
                  </span>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                  <v-button :loading="form.busy" type="success">
                    <i class="fas fa-save" /> {{ $t("Save") }}
                  </v-button>
                  <button type="reset" class="btn btn-info ml-2" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t("Reset") }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Client Edit Modal -->
    <ClientEditModal ref="clientEditModal" @reloadClients="getClients" />

    <!-- Product Edit Modal -->
    <ProductEditModal ref="productEditModal" @reloadProducts="getProducts" @productUpdated="handleProductUpdated" />

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
import { ToggleButton } from "vue-js-toggle-button";
import ClientCreateModal from '~/components/ClientCreateModal'
import ClientEditModal from '~/components/ClientEditModal'
import ProductCreateModal from '~/components/ProductCreateModal'
import ProductEditModal from '~/components/ProductEditModal'
import StockAdjustmentModal from '~/components/StockAdjustmentModal'
import ItemsTable from '~/components/ItemsTable'
import RTLMixin from '~/mixins/RTLMixin'

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Quotation") };
  },
  mixins: [RTLMixin],
  components: {
    ToggleButton,
    ClientCreateModal,
    ClientEditModal,
    ProductCreateModal,
    ProductEditModal,
    StockAdjustmentModal,
    ItemsTable
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Edit Quotation",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Quotations",
        url: "quotations.index",
      },
      {
        name: "Edit",
        url: "",
      },
    ],
    loading: false,
    form: new Form({
      client: "",
      reference: "",
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discountType: 0,
      discount: 0,
      totalDiscount: 0,
      orderTax: "",
      totalTax: 0,
      invoiceTax: 0,
      productTotalTax: 0,
      date: new Date().toISOString().slice(0, 10),
      deliveryPlace: "",
      note: "",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
      discount_type: "percentage",
      discount_value: 0,
    }),
    products: "",
    taxes: "",
    prefix: "",
    clients: [],

    // Communication configuration status
    communicationConfig: {
      email_configured: false,
      sms_configured: false,
      loading: true,
    },

    // Stock adjustment modal
    showStockAdjustmentModal: false,
    selectedProductForStockAdjustment: null,
    restoredFromTemp: false,
  }),
  computed: {
    ...mapGetters("operations", ["appInfo"]),

    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },

    // Calculate total unit price (sum of all unit prices * quantities)
    totalUnitPrice() {
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Calculate total discount from all products (reactive)
    totalProductDiscount() {
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Calculate total after discount (reactive)
    totalAfterDiscount() {
      return this.roundToTwoDecimals(this.totalUnitPrice - this.totalProductDiscount);
    },

    // Calculate total product tax (reactive)
    totalProductTax() {
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Invoice Subtotal: Sum of all item subtotals before discount (qty × unit_price)
    invoiceSubtotal() {
      return this.roundToTwoDecimals(this.totalUnitPrice);
    },

    // Invoice-Level Discount Total: Total discount applied at invoice level and distributed across items
    // This is calculated from invoice-level discount inputs (discountType and discount)
    invoiceLevelDiscountTotal() {
      const subtotal = this.invoiceSubtotal;
      if (
        !this.form.discount ||
        this.form.discount <= 0
      ) {
        return 0;
      }

      let discountAmount = 0;
      if (this.form.discountType == 1) {
        discountAmount = this.roundToTwoDecimals(
          (subtotal * this.form.discount) / 100
        );
      } else {
        discountAmount = this.roundToTwoDecimals(
          Number(this.form.discount)
        );
      }

      // Ensure discount doesn't exceed the subtotal
      return discountAmount > subtotal
        ? this.roundToTwoDecimals(subtotal)
        : discountAmount;
    },

    // Calculate subtotal (reactive) - sum of line net_totals (line_total - discount)
    // Note: This is the sum of net amounts after discount, before VAT
    subtotal() {
      return this.roundToTwoDecimals(this.totalAfterDiscount);
    },

    // Net Amount Before VAT: Without transport, this is simply the sum of item net totals
    netAmountBeforeVAT() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }

      // Sum of item net totals after discount (transport excluded)
      const sumOfItemNetTotals = this.form.selectedProducts.reduce(
        (total, item) => {
          const itemNetTotal = item.netTotal || item.totalAfterDiscount || 0;
          return total + itemNetTotal;
        },
        0
      );

      // Net Amount = Taxable Base = Sum of Item Net Totals
      return this.roundToTwoDecimals(sumOfItemNetTotals);
    },

    // VAT Amount: Calculated without transport
    vatAmount() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }

      // Use sum of item VATs directly (no transport to consider)
      const itemVatSum = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(itemVatSum);
    },
    
    // Grand Total: Calculated without transport
    grandTotal() {
      // Without transport, use sum of item totals after VAT
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }

      // Calculate sum of all item totals after VAT (includes item-level discounts and VAT)
      const sumOfItemTotals = this.form.selectedProducts.reduce(
        (total, item) => {
          // Item total after VAT = itemAfterDiscount + itemVAT
          const itemTotal = item.totalPrice || 0;
          return total + itemTotal;
        },
        0
      );

      // Grand Total = Sum of Item Totals (no transport to add)
      return this.roundToTwoDecimals(sumOfItemTotals);
    },

    // Calculate number of items
    numberOfItems() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.length;
    },

    // Check if there are any products with insufficient stock
    hasInsufficientStock() {
      return this.form.selectedProducts.some(item =>
        item.itemType === 'product' &&
        Number(item.inventoryCount) < Number(item.qty)
      );
    },

    // Get all products with insufficient stock
    insufficientStockProducts() {
      return this.form.selectedProducts.filter(item =>
        item.itemType === 'product' &&
        Number(item.inventoryCount) < Number(item.qty)
      );
    },

    // Page title computed property - static to prevent reactive updates
    pageTitle() {
      console.log('pageTitle computed property called');
      return this.$t("Edit Quotation");
    }
  },

  watch: {
    // Watch for any changes and ensure title stays correct
    '$route'() {
      this.setCorrectTitle();
    }
  },

  async created() {
    this.getClients();
    this.getProducts();
    this.getTaxes();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
    // Fetch quotation data after dependencies are loaded
    await this.$nextTick();
    await this.fetchQuotation();
  },
  // Persist form state when navigating away (e.g., to adjustments page) so it's restored on return
  beforeRouteLeave(to, from, next) {
    try {
      // Only persist when going to inventory adjustments create page
      if (to && to.name === 'adjustments.create') {
        this.saveTemporary();
      } else {
        // For any other navigation, ensure temp is cleared so data doesn't persist
        this.clearTemporaryData();
      }
    } catch (e) {
      // no-op
    }
    next();
  },
  methods: {
    // Set the correct title and prevent it from changing
    setCorrectTitle() {
      const correctTitle = this.$t("Edit Quotation");
      if (document.title !== correctTitle) {
        console.log('Title changed, fixing it. Current:', document.title, 'Setting to:', correctTitle);
        document.title = correctTitle;
      }
    },

    // get all clients
    async getClients(selectedClient = 'default') {
      try {
        const { data } = await axios.get(window.location.origin + "/api/all-clients");
        this.clients = data.data || [];

        if (!this.clients || this.clients.length === 0) return;

        // If explicitly requesting latest (e.g., after creating a client)
        if (selectedClient === 'latest') {
          this.form.client = this.clients[0];
          return;
        }

        // If a client was restored from temp or already selected, normalize to an option from clients
        if (this.form.client && (this.form.client.id || this.form.client.slug)) {
          this.normalizeClientSelection();
          return;
        }

        // Otherwise, assign default client
        let defaultClientSlug = this.appInfo.defaultClientSlug;
        const defaultClient = this.clients.find((item) => item.slug === defaultClientSlug);
        if (defaultClient) {
          this.form.client = defaultClient;
        }
      } catch (error) {
        console.error('Error loading clients:', error);
        this.clients = [];
      }
    },

    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-products"
      );
      this.products = data.data;
      this.products.sort(this.sortProducts);
      // After products are loaded/refreshed, sync inventory for selected items
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.refreshSelectedProductsInventory();
      }
    },

    // handle newly created product
    handleProductCreated(newProduct) {
      // Add the new product to the products list
      this.products.unshift(newProduct);
      this.products.sort(this.sortProducts);

      // Automatically select the newly created product
      this.form.product = newProduct;

      // Automatically add it to the selected products list
      this.storeProduct(newProduct);

      // Show success message
      // this.$toast.success(this.$t("Product created and added to quotation successfully!"));
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
      this.calculateSum();
    },

    // Load communication configuration status
    async loadCommunicationConfigStatus() {
      try {
        this.communicationConfig.loading = true;

        const response = await axios.get('/api/communication-config-status');

        this.communicationConfig.email_configured = response.data.email_configured;
        this.communicationConfig.sms_configured = response.data.sms_configured;
        this.communicationConfig.loading = false;
      } catch (error) {
        console.error('Error loading communication config status:', error);
        // Default to false if there's an error
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
        this.communicationConfig.loading = false;
      }
    },

    // store item in array
    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let qunatity = 1;
      if (index === -1) {
        let productTax =
          product.taxType == "Exclusive"
            ? Number(product.regularPrice) * (Number(product.taxRate) / 100)
            : Number(product.regularPrice) -
            Number(product.regularPrice) / (1 + Number(product.taxRate) / 100);
        let totalTax = productTax * qunatity;

        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: Number(product.taxRate) || 0,
          qty: Number(qunatity),
          avgPurchasePrice: Number(product.avgPurchasePrice) || 0,
          unitPrice: Number(product.regularPrice) || 0,
          unitCost:
            product.taxType == "Exclusive"
              ? Number(product.regularPrice) + Number(productTax)
              : Number(product.regularPrice),
          totalPrice:
            product.taxType == "Exclusive"
              ? Number(product.regularPrice) + Number(totalTax)
              : Number(product.regularPrice),
          productTax: Number(productTax),
          totalTax: Number(totalTax),
          itemType: product.itemType,
          inventoryCount: Number(product.inventoryCount) || 0,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.taxRate) || this.form.orderTax || this.taxes?.[0],
        });

        // Calculate initial VAT and totals for the newly added product
        const index = 0; // Since we're adding to the beginning of the array
        this.calculateItemAmounts(index);
      } else {
        // If product already exists, just update quantity
        this.generateItemTotal(qunatity, "qty", index, "");
      }
      return;
    },

    // Handle item change from ItemsTable component
    handleItemChange({ value, type, index, action }) {
      // Map ItemsTable event format to generateItemTotal method signature
      // ItemsTable: { value, type, index, action }
      // generateItemTotal: (value, field, index, type)
      this.generateItemTotal(value, type, index, action);
    },

    // update array
    generateItemTotal(value, field, index, type) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let updatedItem = { ...item };

        if (type === "increment") {
          if (field === "qty") {
            updatedItem.qty = item.qty + 1;
          } else if (field === "price") {
            updatedItem.unitPrice = this.roundToTwoDecimals(item.unitPrice + 1);
          }
        } else if (type === "decrement") {
          if (field === "qty" && item.qty > 1) {
            updatedItem.qty = item.qty - 1;
          } else if (field === "price" && item.unitPrice > 0) {
            updatedItem.unitPrice = this.roundToTwoDecimals(item.unitPrice - 1);
          }
        } else {
          if (field === "qty") {
            updatedItem.qty = Number(value);
            // Clear quantity validation error when value changes
            this.clearProductErrors(index);
          } else if (field === "price") {
            updatedItem.unitPrice = this.roundToTwoDecimals(Number(value));
            // Clear unit price validation error when value changes
            this.clearProductErrors(index);
          }
        }

        // Persist row change so Vue updates the row immediately
        this.$set(this.form.selectedProducts, index, updatedItem);

        // Recalculate all amounts (discount, price, tax, total) using unified function
        this.calculateItemAmounts(index);
      }
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

    // Helper function to round to two decimals
    roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },

    // Format number to display with exactly 2 decimal places
    formatToTwoDecimals(value) {
      if (value === null || value === undefined || value === '') {
        return '0.00';
      }
      const numValue = Number(value);
      if (isNaN(numValue)) {
        return '0.00';
      }
      return numValue.toFixed(2);
    },

    // Find matching VAT rate based on product tax
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(tax => Math.abs(tax.rate - productTax) < 0.01);
    },

    // Ensure all products have discount and VAT properties
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
        if (typeof item.selectedVatRate === 'undefined') {
          // First try to use the product's default VAT rate, then fall back to quotation default
          if (item.taxRate) {
            item.selectedVatRate = this.findMatchingVatRate(item.taxRate);
          }

          // If no match found or no taxRate, fall back to quotation default
          if (!item.selectedVatRate) {
            if (this.form.orderTax) {
              item.selectedVatRate = this.form.orderTax;
            } else if (this.taxes && this.taxes.length > 0) {
              item.selectedVatRate = this.taxes[0];
            }
          }
        }
      });
    },

    // Calculate product discount
    calculateProductDiscount(index) {
      this.calculateItemAmounts(index);
    },

    // Calculate product VAT
    calculateProductVat(index) {
      this.calculateItemAmounts(index);
    },

    // Calculate all item amounts (discount, price, tax, total) - single function for all calculations
    // Optional second parameter skipRecalculate controls whether to trigger global recalculation (calculateSum)
    // Use skipRecalculate = true when we are already inside a global recomputation to avoid recursive re-entry.
    calculateItemAmounts(index, skipRecalculate = false) {
      let item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }

      // Clear validation errors when values change
      this.clearProductErrors(index);

      // Normalize numeric inputs
      const unitPriceNumber = Number(item.unitPrice) || 0;
      const qtyNumber = Number(item.qty) || 0;

      // Calculate total before discount (unit price × quantity)
      const totalBeforeDiscount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber);

      // Calculate product-level discount amount based on type
      let productDiscountAmount = 0;
      if (item.discountType === "percentage") {
        productDiscountAmount = this.roundToTwoDecimals((unitPriceNumber * qtyNumber * (item.discount || 0)) / 100);
      } else {
        productDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
      }

      // Ensure product discount amount doesn't exceed the total before discount
      if (productDiscountAmount > totalBeforeDiscount) {
        productDiscountAmount = this.roundToTwoDecimals(totalBeforeDiscount);
      }

      // Get proportional quotation-level discount allocation (if any)
      const proportionalDiscount = item.proportionalDiscountAmount || 0;

      // Total discount = product discount + proportional quotation-level discount
      const discountAmount = this.roundToTwoDecimals(productDiscountAmount + proportionalDiscount);

      // Ensure total discount doesn't exceed the total before discount
      const finalDiscountAmount = discountAmount > totalBeforeDiscount 
        ? this.roundToTwoDecimals(totalBeforeDiscount) 
        : discountAmount;

      // Calculate net total after discount (this is what VAT is calculated on)
      const netTotal = this.roundToTwoDecimals(totalBeforeDiscount - finalDiscountAmount);

      // Use selected VAT rate if available, otherwise fall back to product's default tax rate
      let vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
        vatRate = Number(item.selectedVatRate.rate);
      } else if (item.taxRate !== undefined && item.taxRate !== null) {
        vatRate = Number(item.taxRate);
      }

      // Ensure vatRate is a valid number
      if (isNaN(vatRate) || vatRate < 0) {
        vatRate = 0;
      }

      // Calculate VAT base (no transport to consider)
      const vatBase = this.roundToTwoDecimals(netTotal);

      // Calculate tax and total based on tax type
      let productTax, totalTax, totalPrice;

      if (item.taxType == "Exclusive") {
        // VAT on vatBase
        productTax = this.roundToTwoDecimals(vatBase * (vatRate / 100));
        totalTax = this.roundToTwoDecimals(productTax);
        // Total after VAT = vatBase + VAT
        totalPrice = this.roundToTwoDecimals(vatBase + totalTax);
      } else {
        // Inclusive: VAT is included in unit price; derive VAT from net_total
        let netUnitPrice = this.roundToTwoDecimals(qtyNumber > 0 ? (netTotal / qtyNumber) : 0);
        productTax = this.roundToTwoDecimals(netUnitPrice - (netUnitPrice / (1 + vatRate / 100)));
        totalTax = this.roundToTwoDecimals(productTax * qtyNumber);
        // Total after VAT = net_total (VAT already included)
        totalPrice = this.roundToTwoDecimals(netTotal);
      }

      // Create updated item with all calculated values
      let updatedItem = {
        ...item,
        discountAmount: finalDiscountAmount,
        productDiscountAmount: productDiscountAmount, // Store product-level discount separately
        proportionalDiscountAmount: proportionalDiscount, // Store proportional discount separately
        totalBeforeDiscount,
        // Net total after discount (before VAT)
        totalAfterDiscount: netTotal,
        // Net total after discount (this is what VAT is calculated on)
        netTotal: netTotal,
        productTax,
        totalTax,
        totalPrice // Total after VAT
      };

      // Use Vue.set to ensure reactivity
      this.$set(this.form.selectedProducts, index, updatedItem);

      // Recalculate sum and update reactive totals (unless we are already in a global recomputation)
      if (!skipRecalculate) {
        this.calculateSum();
      }

      // Force update to ensure template re-renders
      this.$forceUpdate();
    },

    // Generate item total price (kept for backward compatibility, now calls calculateItemAmounts)
    generateItemTotalPrice(index) {
      this.calculateItemAmounts(index);
    },

    // Sync discount_type and discount_value to discountType and discount for backend compatibility
    syncDiscountFields() {
      // Map discount_type ("fixed"/"percentage") to discountType (0/1)
      if (this.form.discount_type) {
        this.form.discountType = this.form.discount_type === 'percentage' ? 1 : 0;
      }
      // Map discount_value to discount
      if (this.form.discount_value !== null && this.form.discount_value !== undefined) {
        this.form.discount = parseFloat(this.form.discount_value) || 0;
      }
    },

    // Allocate quotation-level discount proportionally across all items based on item subtotals (qty × unit_price)
    // Business rule: quotation-level discount is NOT a line-level discount.
    // Formula: itemDiscount = (itemSubtotal / quotationSubtotal) * quotationDiscount
    allocateInvoiceDiscountProportionally(quotationLevelDiscount) {
      if (!quotationLevelDiscount || quotationLevelDiscount <= 0) {
        // Clear proportional discounts if no quotation-level discount
        this.form.selectedProducts.forEach((item, index) => {
          if (item.proportionalDiscountAmount) {
            this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', 0);
          }
        });
        return;
      }

      // Calculate total quotation subtotal (sum of all item subtotals: qty × unit_price)
      let quotationSubtotal = 0;
      const itemSubtotals = [];

      this.form.selectedProducts.forEach((item) => {
        const unitPriceNumber = Number(item.unitPrice) || 0;
        const qtyNumber = Number(item.qty) || 0;
        const itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = qty × unit_price

        itemSubtotals.push(itemSubtotal);
        quotationSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (quotationSubtotal <= 0) {
        return;
      }

      // Allocate discount proportionally based on item subtotals
      let allocatedTotal = 0;
      this.form.selectedProducts.forEach((item, index) => {
        const itemSubtotal = itemSubtotals[index] || 0;
        let proportionalAmount = 0;

        if (quotationSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemDiscount = (itemSubtotal / quotationSubtotal) * quotationDiscount
          const proportion = itemSubtotal / quotationSubtotal;
          proportionalAmount = this.roundToTwoDecimals(quotationLevelDiscount * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional discount amount
        this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      const roundingDifference = this.roundToTwoDecimals(quotationLevelDiscount - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        const lastIndex = this.form.selectedProducts.length - 1;
        const lastItem = this.form.selectedProducts[lastIndex];
        const currentProportional = lastItem.proportionalDiscountAmount || 0;
        const adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalDiscountAmount', Math.max(0, adjusted));
      }
    },

    // Recalculate all items with proportional discount allocation (without re-entering calculateSum)
    recalculateAllItemsWithProportionalDiscount() {
      this.form.selectedProducts.forEach((item, index) => {
        // Recalculate this item to include proportional discount
        // Pass skipRecalculate = true to avoid recursive global recalculation
        this.calculateItemAmounts(index, true);
      });
    },

    // Helper method to clear product errors
    clearProductErrors(index) {
      // Clear any validation errors for this product
      if (this.form.errors && this.form.errors.has(`selectedProducts.${index}`)) {
        this.form.errors.clear(`selectedProducts.${index}`);
      }
    },

    // calculate sum (aligned with invoice logic, without transport)
    calculateSum() {
      // Update form values for consistency with computed properties
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));

      // Sync discount fields before calculations
      this.syncDiscountFields();
      
      // Global discount used ONLY for legacy quotation-level tax (orderTax)
      // NOTE: This is separate from the commercial quotation-level discount that we allocate proportionally.
      let globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          globalDiscount = this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal);
        } else {
          globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
        }
      }

      // Quotation-level tax (orderTax) computed on (subTotal - globalDiscount)
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(
          (this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)
        ));
      }

      // Total tax = product VAT + quotation-level tax
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));

      // Apply commercial quotation-level discount (for allocation only)
      // Business rule: quotation-level discount is applied on the QUOTATION SUBTOTAL (sum of qty × unit_price),
      // not on a single line or on net/after-tax amounts.
      // Use the computed invoiceLevelDiscountTotal which already handles the calculation correctly
      const quotationLevelDiscount = this.invoiceLevelDiscountTotal;

      // Update netTotal to match the computed grandTotal
      // Grand total calculation is handled by the computed property (without transport)
      this.$set(this.form, 'netTotal', this.grandTotal);

      // Allocate quotation-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(quotationLevelDiscount);

      // Recalculate all items with proportional discount allocation
      this.recalculateAllItemsWithProportionalDiscount();

      return;
    },

    // edit selected client
    editSelectedClient() {
      // Check if a client is selected
      if (!this.form.client) {
        toast.fire({
          type: "warning",
          title: this.$t("Warning"),
          text: this.$t("Please select a client first."),
        });
        return;
      }

      // Check if the modal component is available
      if (!this.$refs.clientEditModal) {
        console.error('ClientEditModal component not found');
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page."),
        });
        return;
      }

      // Open the client edit modal with the selected client
      this.$refs.clientEditModal.openModal(this.form.client);
    },

    // edit product from table row
    editProductFromTable(product) {
      // Check if the modal component is available
      if (!this.$refs.productEditModal) {
        console.error('ProductEditModal component not found');
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page."),
        });
        return;
      }

      // Open the product edit modal with the specific product from the table
      this.$refs.productEditModal.openModal(product);
    },

    // handle product updated event
    handleProductUpdated(eventData) {
      const { originalProduct, updatedData } = eventData;

      console.log('Product updated event received:', eventData);

      // Find and update the product in selectedProducts array
      const productIndex = this.form.selectedProducts.findIndex(p =>
        p.id === originalProduct.id || p.slug === originalProduct.slug
      );

      if (productIndex !== -1) {
        // Update the product data in the selected products array
        const updatedProduct = { ...this.form.selectedProducts[productIndex] };

        // Update relevant fields from the form data
        updatedProduct.name = updatedData.itemName || updatedProduct.name;
        updatedProduct.item_name = updatedData.itemName || updatedProduct.item_name;
        updatedProduct.regular_price = updatedData.regularPrice || updatedProduct.regular_price;
        updatedProduct.price = updatedData.regularPrice || updatedProduct.price;
        updatedProduct.discount = updatedData.discount || updatedProduct.discount;
        updatedProduct.selling_price = updatedData.sellingPrice || updatedProduct.selling_price;

        // Update related objects if they have IDs
        if (updatedData.subCategory) {
          updatedProduct.sub_category_id = updatedData.subCategory;
        }
        if (updatedData.itemUnit) {
          updatedProduct.unit_id = updatedData.itemUnit;
        }
        if (updatedData.productTax) {
          updatedProduct.tax_id = updatedData.productTax;
          updatedProduct.vat_rate_id = updatedData.productTax;
        }
        if (updatedData.brand) {
          updatedProduct.brand_id = updatedData.brand;
        }

        // Replace the product in the array
        this.$set(this.form.selectedProducts, productIndex, updatedProduct);

        console.log('Updated product in selectedProducts array:', updatedProduct);

        // Recalculate totals
        this.calculateTotal();
      } else {
        console.warn('Could not find product to update in selectedProducts array');
      }
    },

    // return number to word with language support
    toWord() {
      const amount = this.subtotal || 0;

      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }

      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }

      if (this.isRTL && this.currentLocale === 'ar') {
        return this.convertToArabicWords(amount);
      } else {
        return this.convertToEnglishWords(amount);
      }
    },

    // Convert number to Arabic words
    convertToArabicWords(amount) {
      const currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return `صفر ${currencyInfo.main} فقط`;

      const integerPart = Math.floor(amount);
      const decimalPart = Math.round((amount - integerPart) * 100);

      let result = '';

      if (integerPart > 0) {
        const arabicNumber = this.convertIntegerToArabic(integerPart);
        result += arabicNumber + ' ' + currencyInfo.main;

        // Add proper pluralization for main currency
        if (integerPart === 1) {
          // Keep singular form
        } else if (integerPart === 2) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ان');
        } else if (integerPart >= 3 && integerPart <= 10) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }

      if (decimalPart > 0) {
        if (result) result += ' و ';
        const arabicDecimal = this.convertIntegerToArabic(decimalPart);
        result += arabicDecimal + ' ' + currencyInfo.sub;

        // Add proper pluralization for sub currency
        if (decimalPart === 1) {
          // Keep singular form
        } else if (decimalPart === 2) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان');
        } else if (decimalPart >= 3 && decimalPart <= 10) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }

      return result + ' فقط';
    },

    // Get currency information based on locale and app settings
    getCurrencyInfo() {
      const currency = this.appInfo?.currency || 'SAR';
      const isArabic = this.isRTL && this.currentLocale === 'ar';

      const currencyMap = {
        'SAR': {
          en: { main: 'Riyal', sub: 'Halala', symbol: 'ê' },
          ar: { main: 'ريال', sub: 'هللة', symbol: 'ê' }
        },
        'USD': {
          en: { main: 'Dollar', sub: 'Cent', symbol: '$' },
          ar: { main: 'دولار', sub: 'سنت', symbol: '$' }
        },
        'EUR': {
          en: { main: 'Euro', sub: 'Cent', symbol: '€' },
          ar: { main: 'يورو', sub: 'سنت', symbol: '€' }
        },
        'EGP': {
          en: { main: 'Pound', sub: 'Piastre', symbol: '£' },
          ar: { main: 'جنيه', sub: 'قرش', symbol: '£' }
        }
      };

      return currencyMap[currency]?.[isArabic ? 'ar' : 'en'] || currencyMap['SAR'][isArabic ? 'ar' : 'en'];
    },

    // Convert number to English words
    convertToEnglishWords(amount) {
      const currencyInfo = this.getCurrencyInfo();
      const toWords = new ToWords();
      let words = toWords.convert(amount);

      // Add currency information
      const integerPart = Math.floor(amount);
      const decimalPart = Math.round((amount - integerPart) * 100);

      let result = words;

      if (integerPart > 0) {
        result += ' ' + currencyInfo.main;
        if (integerPart !== 1) result += 's';
      }

      if (decimalPart > 0) {
        if (result) result += ' and ';
        result += this.convertIntegerToEnglish(decimalPart) + ' ' + currencyInfo.sub;
        if (decimalPart !== 1) result += 's';
      }

      return result + ' Only';
    },

    // Convert integer to English words (for decimal parts)
    convertIntegerToEnglish(num) {
      if (num === 0) return 'zero';

      const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        const ten = Math.floor(num / 10);
        const one = num % 10;
        if (one === 0) return tens[ten];
        return tens[ten] + '-' + ones[one];
      }

      return 'number';
    },

    // Convert integer to Arabic words
    convertIntegerToArabic(num) {
      if (num === 0) return 'صفر';

      const ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
      const tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
      const teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
      const hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];

      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        const ten = Math.floor(num / 10);
        const one = num % 10;
        if (one === 0) return tens[ten];
        return ones[one] + ' و ' + tens[ten];
      }
      if (num < 1000) {
        const hundred = Math.floor(num / 100);
        const remainder = num % 100;
        if (remainder === 0) return hundreds[hundred];
        return hundreds[hundred] + ' و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000) {
        const thousand = Math.floor(num / 1000);
        const remainder = num % 1000;
        if (remainder === 0) {
          if (thousand === 1) return 'ألف';
          if (thousand === 2) return 'ألفان';
          if (thousand >= 3 && thousand <= 10) return this.convertIntegerToArabic(thousand) + ' آلاف';
          return this.convertIntegerToArabic(thousand) + ' ألف';
        }
        return this.convertIntegerToArabic(thousand) + ' ألف و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000000) {
        const million = Math.floor(num / 1000000);
        const remainder = num % 1000000;
        if (remainder === 0) {
          if (million === 1) return 'مليون';
          if (million === 2) return 'مليونان';
          if (million >= 3 && million <= 10) return this.convertIntegerToArabic(million) + ' ملايين';
          return this.convertIntegerToArabic(million) + ' مليون';
        }
        return this.convertIntegerToArabic(million) + ' مليون و ' + this.convertIntegerToArabic(remainder);
      }

      return 'رقم كبير جداً';
    },

    // fetch quotation data
    async fetchQuotation() {
      try {
        this.loading = true;
        const slug = this.$route.params.slug;
        if (!slug) {
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("Quotation slug is missing"),
          });
          this.$router.push({ name: "quotations.index" });
          return;
        }

        // Wait for taxes to be loaded before fetching quotation (needed for assignProducts)
        if (!this.taxes || this.taxes.length === 0) {
          await this.getTaxes();
        }

        const { data } = await axios.get(
          window.location.origin + "/api/quotations/" + slug
        );

        const quotationData = data.data;

        // Populate form fields
        if (quotationData.client) {
          // Normalize client selection
          const client = this.clients.find(c => c.id === quotationData.client.id || c.slug === quotationData.client.slug);
          this.form.client = client || quotationData.client;
        }
        this.form.reference = quotationData.reference || "";
        this.form.date = quotationData.date || new Date().toISOString().slice(0, 10);
        this.form.note = quotationData.note || "";
        this.form.status = quotationData.status !== undefined ? quotationData.status : 1;
        this.form.isSendEmail = quotationData.isSendEmail || false;
        this.form.isSendSMS = quotationData.isSendSMS || false;
        this.form.deliveryPlace = quotationData.deliveryPlace || "";

        // Set order tax
        if (quotationData.quotationTax) {
          const tax = this.taxes.find(t => t.id === quotationData.quotationTax.id || t.slug === quotationData.quotationTax.slug);
          this.form.orderTax = tax || quotationData.quotationTax;
        }

        // Set discount fields
        if (quotationData.discountType !== undefined) {
          this.form.discountType = quotationData.discountType;
        }
        if (quotationData.discount !== undefined) {
          this.form.discount = quotationData.discountType == 0 ? quotationData.discount : (quotationData.discountPercentage || 0);
          this.form.discount_value = quotationData.discountType == 0 ? quotationData.discount : (quotationData.discountPercentage || 0);
          this.form.discount_type = quotationData.discountType == 1 ? "percentage" : "fixed";
        }

        // Assign products after taxes are loaded
        if (quotationData.products && quotationData.products.length > 0) {
          this.form.selectedProducts = this.assignProducts(quotationData.products);
        }

        // Recalculate totals after data is loaded
        await this.$nextTick();
        this.calculateSum();
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error('Failed to load quotation', error);
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: error.response?.data?.message || this.$t("Failed to load quotation data"),
        });
        this.$router.push({ name: "quotations.index" });
      }
    },

    // Assign products from API response to form format
    assignProducts(quotationProducts) {
      if (!quotationProducts || !Array.isArray(quotationProducts)) return [];
      
      const mapped = quotationProducts.map((qp) => {
        const qty = Number(qp.quantity || qp.qty || 1);
        const unitPrice = Number(qp.salePrice ?? qp.unitPrice ?? 0);
        const taxType = qp.taxType;
        const taxRate = Number(qp.taxRate ?? 0);
        const productTax = Number(qp.taxAmount ?? 0);
        const totalTax = productTax * qty;
        const totalBeforeDiscount = unitPrice * qty;
        const discountAmount = Number(qp.discountAmount || 0);
        const totalAfterDiscount = totalBeforeDiscount - discountAmount;
        const totalPrice = Number(qp.unitCostTotal ?? (taxType === 'Exclusive' ? totalAfterDiscount + totalTax : totalAfterDiscount));

        // Find VAT rate
        let selectedVatRate = null;
        if (qp.vat_rate_id && this.taxes) {
          selectedVatRate = this.taxes.find(tax => tax.id === qp.vat_rate_id);
        }
        if (!selectedVatRate && qp.vatRate) {
          if (qp.vatRate.id && this.taxes) {
            selectedVatRate = this.taxes.find(tax => tax.id === qp.vatRate.id);
          }
          if (!selectedVatRate && this.taxes) {
            selectedVatRate = this.findMatchingVatRate(qp.vatRate.rate || taxRate);
          }
        }
        if (!selectedVatRate && this.taxes && this.taxes.length > 0) {
          selectedVatRate = this.form.orderTax || this.taxes[0];
        }

        return {
          id: qp.productID ?? qp.product?.id ?? qp.id,
          slug: qp.productSlug ?? qp.product?.slug ?? qp.slug,
          name: qp.productName ?? qp.product?.name ?? qp.name,
          code: qp.productCode ?? qp.product?.code ?? qp.code,
          taxType,
          taxRate,
          qty,
          avgPurchasePrice: qp.avgPurchasePrice || qp.product?.avgPurchasePrice || 0,
          unitPrice,
          unitCost: unitPrice,
          totalPrice,
          productTax,
          totalTax,
          totalBeforeDiscount,
          totalAfterDiscount,
          itemType: qp.itemType || qp.product?.itemType || 'product',
          inventoryCount: qp.inventoryCount ?? qp.product?.inventoryCount ?? 0,
          discount: qp.discount ?? 0,
          discountType: qp.discountType ?? 'fixed',
          discountAmount: discountAmount,
          selectedVatRate: selectedVatRate,
          sales_account_id: qp.product?.sales_account_id || null,
          purchase_account_id: qp.product?.purchase_account_id || null,
        };
      });

      // Ensure discount properties are set
      this.ensureDiscountProperties();
      
      return mapped;
    },

    // update quotation
    async updateQuotation() {
      try {
        // Sync discount fields before submission
        this.syncDiscountFields();
        
        this.loading = true;
        const slug = this.$route.params.slug;
        
        await this.form
          .patch(window.location.origin + "/api/quotations/" + slug)
          .then(({ data }) => {
            toast.fire({
              type: "success",
              title: this.$t("Quotation updated successfully"),
            });
            this.$router.push({
              name: "quotations.show",
              params: { slug: data.data.slug || slug },
            });
          })
          .catch((error) => {
            this.loading = false;
            if (error?.response?.status === 422 && error.response?.data?.errors) {
              const serverErrors = error.response.data.errors || {};
              const translatedErrors = {};
              Object.keys(serverErrors).forEach((field) => {
                const fieldErrors = serverErrors[field] || [];
                translatedErrors[field] = fieldErrors.map((message) => this.translateValidationMessage(message, field));
              });
              this.form.errors.set(translatedErrors);
              toast.fire({ type: "error", title: this.$t("Please check your input and try again.") });
            } else {
              const message = error?.response?.data?.message || this.$t("Please check your input and try again.");
              toast.fire({ type: "error", title: message });
            }
          });
      } catch (error) {
        this.loading = false;
        console.error('Quotation update error:', error);
        toast.fire({ type: "error", title: this.$t("Error"), text: error.message || this.$t("Please check your input and try again.") });
      }
    },

    // Clear field error helper
    clearFieldError(field) {
      if (this.form.errors && this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },
    // translate common validation messages coming from backend to localized messages
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      const currentLocale = this.$i18n.locale || 'en';
      const isArabic = currentLocale === 'ar';

      // Normalize field label (try to use translated field names)
      const fieldLabelMap = {
        client: this.$t("Client"),
        reference: this.$t("Reference"),
        selectedProducts: this.$t("Select Items"),
        date: this.$t("Date"),
        deliveryPlace: this.$t("Delivery Place"),
        note: this.$t("Note"),
        status: this.$t("Status"),
        discount: this.$t("Discount"),
        discountType: this.$t("Discount Type"),
        totalDiscount: this.$t("Total discount"),
        orderTax: this.$t("Quotation Tax"),
        totalTax: this.$t("Total Tax"),
        netTotal: this.$t("Net Total"),
      };
      const fieldLabel = fieldLabelMap[field] || field;

      // Common Laravel validation patterns with localized messages
      const patterns = [
        {
          re: /The\s+.+?\s+field\s+is\s+required\.?/i,
          en: `This field is required`,
          ar: `هذا الحقل مطلوب`
        },
        {
          re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i,
          en: `The selected value is invalid`,
          ar: `القيمة المحددة غير صالحة`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i,
          en: `Must be a number`,
          ar: `يجب أن يكون رقماً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i,
          en: `Must be an integer`,
          ar: `يجب أن يكون عدداً صحيحاً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i,
          en: (_, n) => `Must be at least ${n}`,
          ar: (_, n) => `يجب ألا يقل عن ${n}`
        },
        {
          re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i,
          en: (_, n) => `May not be greater than ${n}`,
          ar: (_, n) => `يجب ألا يزيد عن ${n}`
        },
        {
          re: /The\s+.+?\s+format\s+is\s+invalid\.?/i,
          en: `Invalid format`,
          ar: `تنسيق غير صالح`
        },
        {
          re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i,
          en: `This value has already been taken`,
          ar: `هذه القيمة مستخدمة بالفعل`
        },
      ];

      for (const { re, en, ar } of patterns) {
        const match = message.match(re);
        if (match) {
          const text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en)(...match) : (isArabic ? ar : en);
          // Prefix with field label where useful
          return `${fieldLabel}: ${text}`;
        }
      }

      // Fallback: return original message if nothing matched
      return message;
    },
    // save form data temporarily
    saveTemporary() {
      const tempData = {
        client: this.form.client,
        reference: this.form.reference,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        discountType: this.form.discountType,
        discount_type: this.form.discount_type,
        discount_value: this.form.discount_value,
        deliveryPlace: this.form.deliveryPlace,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('quotationTempData', JSON.stringify(tempData))
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('quotationTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.client = data.client || this.form.client
          this.form.reference = data.reference || this.form.reference
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts
        this.form.subTotal = data.subTotal || this.form.subTotal
        this.form.netTotal = data.netTotal || this.form.netTotal
        this.form.orderTax = data.orderTax || this.form.orderTax
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax
          this.form.totalTax = data.totalTax || this.form.totalTax
        this.form.discount = data.discount || this.form.discount
        this.form.discountType = data.discountType || this.form.discountType
        this.form.discount_type = data.discount_type || this.form.discount_type
        this.form.discount_value = data.discount_value || this.form.discount_value
          this.form.deliveryPlace = data.deliveryPlace || this.form.deliveryPlace
          this.form.date = data.date || this.form.date
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS
          // One-time restore: clear after successful load so a refresh doesn't restore again
          this.clearTemporaryData()
          // Ensure product fields exist and recalculate totals after restore
          this.ensureDiscountProperties();
          this.calculateSum();
          // Attempt to refresh inventory counts in case stock changed while away
          this.refreshSelectedProductsInventory();
          // Mark that we restored and normalize client to match current items list
          this.restoredFromTemp = true;
          this.normalizeClientSelection();
        } catch (e) {
          console.error('Error loading temporary data:', e)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('quotationTempData')
    },

    // Stock adjustment modal methods
    openStockAdjustmentModal(product) {
      try {
        console.log("Opening stock adjustment modal for product:", product);

        // Validate product object
        if (!product || !product.id) {
          console.error("Invalid product object:", product);
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("Product information is missing. Please try again.")
          });
          return;
        }

        this.selectedProductForStockAdjustment = product;
        this.showStockAdjustmentModal = true;
        console.log("Modal should be open now");
      } catch (error) {
        console.error("Error opening stock adjustment modal:", error);
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Failed to open stock adjustment modal. Please try again.")
        });
      }
    },

    closeStockAdjustmentModal() {
      this.showStockAdjustmentModal = false;
      this.selectedProductForStockAdjustment = null;
    },

    adjustProductQuantity(product) {
      // Find the product in the selected products array and adjust its quantity
      const index = this.form.selectedProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        // Set quantity to available stock
        this.$set(this.form.selectedProducts[index], 'qty', product.inventoryCount);
        this.generateItemTotal(product.inventoryCount, "qty", index, "");

        toast.fire({
          type: "info",
          title: this.$t("Quantity Adjusted"),
          text: this.$t("Product quantity has been adjusted to available stock.")
        });
      }
      this.closeStockAdjustmentModal();
    },

    handleStockUpdated(eventData) {
      // Refresh products to get updated stock levels
      this.getProducts();

      // Update the specific product in selectedProducts if it exists
      const { product, newQuantity } = eventData;
      const index = this.form.selectedProducts.findIndex(p => p.id === product.id);
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'inventoryCount',
          (this.form.selectedProducts[index].inventoryCount || 0) + newQuantity);

        // Recalculate totals
        this.calculateSum();
      }
    },

    showAllInsufficientStock() {
      // Show a summary of all insufficient stock products
      const insufficientProducts = this.insufficientStockProducts;
      if (insufficientProducts.length === 0) return;

      let message = this.$t("Products with insufficient stock:") + "\n\n";
      insufficientProducts.forEach((product, index) => {
        const shortage = Number(product.qty) - Number(product.inventoryCount);
        message += `${index + 1}. ${product.name}\n`;
        message += `   ${this.$t("Required")}: ${product.qty}, ${this.$t("Available")}: ${product.inventoryCount}, ${this.$t("Shortage")}: ${shortage}\n\n`;
      });

      message += this.$t("Click on the red badges next to each product to manage stock levels.");

      toast.fire({
        type: "warning",
        title: this.$t("Insufficient Stock Summary"),
        text: message,
        timer: 10000,
        showConfirmButton: true
      });
    },
    // Sync selected products' inventoryCount with latest products list
    refreshSelectedProductsInventory() {
      try {
        if (!Array.isArray(this.products) || !Array.isArray(this.form.selectedProducts)) return;
        const productById = new Map(this.products.map(p => [p.id, p]));
        this.form.selectedProducts = this.form.selectedProducts.map(item => {
          const latest = productById.get(item.id);
          if (latest) {
            const updated = { ...item };
            updated.inventoryCount = latest.inventoryCount;
            // Optionally update name/code/taxRate to reflect latest
            updated.name = latest.name || updated.name;
            updated.code = latest.code || updated.code;
            updated.taxRate = (latest.taxRate !== undefined && latest.taxRate !== null) ? latest.taxRate : updated.taxRate;
            return updated;
          }
          return item;
        });
        // Recalculate to update any dependent totals
        this.calculateSum();
      } catch (e) {
        // silent fail
      }
    },
    // Normalize form.client to an object from clients by id/slug so v-select shows it
    normalizeClientSelection() {
      try {
        if (!this.form.client || !this.clients || this.clients.length === 0) return;
        const current = this.form.client;
        let matched = null;
        if (current.id) {
          matched = this.clients.find(i => i.id === current.id);
        }
        if (!matched && current.slug) {
          matched = this.clients.find(i => i.slug === current.slug);
        }
        if (matched) {
          this.form.client = matched;
        }
      } catch (e) {
        // silent
      }
    },
  },
  mounted() {
    this.setCorrectTitle();

    // Set up a periodic check to ensure title stays correct
    this.titleCheckInterval = setInterval(() => {
      this.setCorrectTitle();
    }, 1000); // Check every second

    // Set up a MutationObserver to watch for title changes
    this.titleObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.target.tagName === 'TITLE') {
          console.log('Title element changed, fixing it');
          this.setCorrectTitle();
        }
      });
    });

    // Observe the head element for title changes
    const head = document.querySelector('head');
    if (head) {
      this.titleObserver.observe(head, { childList: true, subtree: true });
    }
  },

  beforeDestroy() {
    // Clean up the interval
    if (this.titleCheckInterval) {
      clearInterval(this.titleCheckInterval);
    }

    // Clean up the observer
    if (this.titleObserver) {
      this.titleObserver.disconnect();
    }
  },
};
</script>

<style scoped>
/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}

.create-btn {
  padding: 11px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.create-btn:hover {
  background-color: #e9ecef;
}

.edit-btn {
  background-color: #17a2b8 !important;
  color: white !important;
  border-color: #17a2b8 !important;
}

.edit-btn:hover {
  background-color: #138496 !important;
  border-color: #117a8b !important;
}

.table-custom {
  border: none !important;
}

.quotations-create-table {
  border-collapse: separate;
  border-spacing: 0;
}

.quotations-create-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.quotations-create-table thead tr {
  border: none !important;
}

.quotations-create-table thead th:first-child {
  border-top-left-radius: 10px;
}

.quotations-create-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .quotations-create-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .quotations-create-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}


.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Custom Status Badge Styling */
.quotations-create-table .badge.badge-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Search Input Background Override */
.form-control {
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

/* Custom Quantity Input Styling */
.custom-qty-input {
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
}

.button-minus,
.button-plus {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button-minus {
  background-color: #dc3545;
  color: white;
}

.button-plus {
  background-color: #007bff;
  color: white;
}

.button-minus:hover {
  background-color: #c82333;
  transform: scale(1.05);
}

.button-plus:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.price-field {
  width: 100%
}

.quantity-field {
  width: 60px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 5px;
}

.quantity-field:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* RTL-specific adjustments for this component */
[dir="rtl"] .d-flex {
  direction: rtl;
}

[dir="rtl"] .create-btn {
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .create-btn {
  border-radius: 0 0.25rem 0.25rem 0;
}

/* RTL adjustments for v-select in this component */
[dir="rtl"] .rtl-select .vs__dropdown-toggle {
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .rtl-select .vs__dropdown-toggle {
  border-radius: 0.25rem;
}

/* Ensure proper RTL layout for the select and button combination */
[dir="rtl"] .flex-grow-1.rtl-select {
  border-right: none;
}

[dir="ltr"] .flex-grow-1.rtl-select {
  border-right: 1px solid #ced4da;
}

/* Clickable badge styling */
.clickable-badge {
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.clickable-badge:hover {
  background-color: #c82333 !important;
  transform: scale(1.05);
  box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);
}

.clickable-badge:active {
  transform: scale(0.95);
}

/* Insufficient stock input styling */
.insufficient-stock-input {
  border: 2px solid #dc3545 !important;
  background-color: #fff5f5 !important;
  color: #dc3545 !important;
}

.insufficient-stock-input:focus {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}

/* Debug Panel Styles */
.debug-panel {
  border: 2px solid #ffc107;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 193, 7, 0.2);
  display: none;
  /* Hide debug panel by default */
}

.debug-panel .card-header {
  background: linear-gradient(45deg, #ffc107, #ffeb3b) !important;
  border-bottom: 2px solid #ffc107;
  border-radius: 8px 8px 0 0 !important;
}

.debug-item {
  background-color: #f8f9fa;
  border-left: 4px solid #007bff !important;
  transition: all 0.3s ease;
}

.debug-item:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.debug-step {
  margin-bottom: 8px;
  padding: 4px 8px;
  background-color: #ffffff;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.debug-summary {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.debug-summary ul li {
  padding: 4px 0;
  border-bottom: 1px solid #e9ecef;
}

.debug-summary ul li:last-child {
  border-bottom: none;
}

.debug-display {
  background: linear-gradient(135deg, #e3f2fd, #f3e5f5) !important;
  border: 1px solid #bbdefb;
  font-family: 'Courier New', monospace;
}

.debug-steps .step {
  padding: 8px 12px;
  margin-bottom: 8px;
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.debug-state {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.debug-state div {
  padding: 4px 0;
  border-bottom: 1px solid #e9ecef;
}

.debug-state div:last-child {
  border-bottom: none;
}

/* Debug table styling */
.debug-panel .table th {
  background-color: #f8f9fa;
  font-weight: 600;
  font-size: 0.85em;
}

.debug-panel .table td {
  font-size: 0.85em;
  vertical-align: middle;
}

.debug-panel .table tbody tr:hover {
  background-color: #f8f9fa;
}

/* Responsive adjustments for debug panel */
@media (max-width: 768px) {
  .debug-panel .card-body {
    padding: 15px;
  }

  .debug-item .row {
    margin: 0;
  }

  .debug-item .col-md-6 {
    padding: 0 5px;
  }

  .debug-step {
    font-size: 0.8em;
    padding: 3px 6px;
  }

  .debug-panel .table {
    font-size: 0.75em;
  }
}

/* Summary Card Styles */
.summary-footer-wrapper {
  margin-top: 10px;
}

.summary-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.summary-header {
  background: linear-gradient(135deg, #33a0d9 0%, #2a8bc7 100%);
  padding: 16px 20px;
  border-bottom: 2px solid #2a8bc7;
}

.summary-title {
  margin: 0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.summary-title i {
  font-size: 18px;
}

.summary-body {
  padding: 16px 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.2s ease;
}

.summary-row:last-child {
  border-bottom: none;
}

.summary-row:hover {
  background-color: #f9fafb;
  margin: 0 -20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
}

.summary-row-net {
  font-weight: 500;
}

.summary-row-discount {
  background-color: #fef2f2;
}

.summary-row-discount:hover {
  background-color: #fee2e2;
}

.summary-row-total {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-bottom: none;
  margin-top: 12px;
  padding: 16px 20px;
  border-radius: 8px;
  font-size: 18px;
}

.summary-row-total:hover {
  background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
  margin: 12px -20px 0;
  padding: 16px 20px;
}

.summary-label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #374151;
  font-weight: 500;
  flex: 1;
}

.summary-label i {
  color: #6b7280;
  font-size: 14px;
  width: 20px;
  text-align: center;
}

.summary-value {
  font-size: 14px;
  color: #111827;
  font-weight: 600;
  text-align: right;
  min-width: 120px;
}

.summary-total {
  font-size: 20px;
  color: #33a0d9;
  font-weight: 700;
}

/* RTL Support for Summary Footer */
[dir="rtl"] .summary-label i {
  margin-left: 8px;
  margin-right: 0;
}

[dir="rtl"] .summary-value {
  text-align: left;
}

/* Responsive Summary Footer */
@media (max-width: 768px) {
  .summary-header {
    padding: 12px 16px;
  }

  .summary-title {
    font-size: 14px;
  }

  .summary-body {
    padding: 12px 16px;
  }

  .summary-row {
    padding: 10px 0;
    flex-wrap: wrap;
  }

  .summary-row:hover {
    margin: 0 -16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .summary-label {
    font-size: 13px;
    margin-bottom: 4px;
    width: 100%;
  }

  .summary-value {
    font-size: 13px;
    width: 100%;
    text-align: left;
    min-width: auto;
  }

  .summary-row-total {
    padding: 12px 16px;
    font-size: 16px;
  }

  .summary-row-total:hover {
    margin: 12px -16px 0;
    padding: 12px 16px;
  }

  .summary-total {
    font-size: 18px;
  }

  [dir="rtl"] .summary-value {
    text-align: right;
  }
}

@media (max-width: 576px) {
  .summary-card {
    border-radius: 8px;
  }

  .summary-header {
    padding: 10px 12px;
  }

  .summary-body {
    padding: 10px 12px;
  }

  .summary-row-total {
    padding: 10px 12px;
  }

  .summary-row-total:hover {
    margin: 12px -12px 0;
    padding: 10px 12px;
  }
}
</style>