<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="float-right text-right">
              <div
                class="btn-group c-w-100 header-buttons d-flex flex-column flex-sm-row"
              >
                <router-link
                  :to="{ name: 'invoices.index' }"
                  class="btn btn-sm btn-info mb-2 mb-sm-0"
                >
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
                <button
                  type="submit"
                  class="btn btn-sm btn-success"
                  :form="'invoiceCreateForm'"
                  title="Save"
                >
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>

          <div class="card-body">
            <!-- Add the missing form element with submit handler -->
            <form id="invoiceCreateForm" @submit.prevent="handleFormSubmit">
              <!-- Basic Information Section -->
              <div class="row">
                <div class="form-group col-12 col-sm-6 col-md-3">
                  <label for="costCenter">{{ $t("Cost Center") }}</label>
                  <v-select
                    class="flex-grow-1"
                    v-model="form.costCenter"
                    :options="costCenters"
                    label="name"
                    :class="{ 'is-invalid': form.errors.has('cost_center_id') }"
                    name="costCenter"
                    :placeholder="$t('Select a cost center')"
                    @input="onCostCenterChange"
                  />
                  <has-error :form="form" field="cost_center_id" />
                </div>
                <div class="form-group col-12 col-sm-6 col-md-3">
                  <label for="branch">{{ $t("Branch") }}</label>
                  <v-select
                    class="flex-grow-1"
                    v-model="form.branch"
                    :options="branches"
                    label="name"
                    :class="{ 'is-invalid': form.errors.has('branch_id') }"
                    name="branch"
                    :placeholder="$t('Select a branch')"
                    @input="onBranchChange"
                  />
                  <has-error :form="form" field="branch_id" />
                </div>
                <div class="form-group col-12 col-sm-6 col-md-3">
                  <label for="representative">{{ $t("Sales Representative") }}</label>
                  <v-select
                    class="flex-grow-1"
                    v-model="form.representative"
                    :options="representatives"
                    label="name"
                    :class="{ 'is-invalid': form.errors.has('representative_id') }"
                    name="representative"
                    :placeholder="$t('اختر مندوب مبيعات')"
                    @input="onRepresentativeChange"
                  />
                  <has-error :form="form" field="representative_id" />
                </div>
                <div class="form-group col-12 col-sm-6 col-md-3">
                  <label for="cashier">{{ $t("Cashier") }}</label>
                  <v-select
                    class="flex-grow-1"
                    v-model="form.cashier"
                    :options="cashiers"
                    label="name"
                    :class="{ 'is-invalid': form.errors.has('cashier_id') }"
                    name="cashier"
                    :placeholder="$t('اختر كاشير')"
                    @input="onCashierChange"
                  />
                  <has-error :form="form" field="cashier_id" />
                </div>
              </div>

              <!-- Client Information Section -->
              <div>
                <div class="row">
                  <div class="form-group col-12 col-md-6">
                    <label for="client"
                      >{{ $t("Client") }}
                      <span class="required">*</span></label
                    >
                    <div class="d-flex w-100">
                      <v-select
                        class="flex-grow-1"
                        v-model="form.client"
                        :options="items || []"
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

                    <!-- Client Chart of Account Status -->
                    <div class="client-status mt-2" v-if="form.client">
                      <div
                        v-if="!form.client.chart_of_account_id"
                        class="client-warning"
                      >
                        <i class="fas fa-exclamation-triangle text-warning"></i>
                        <span class="ml-2">{{
                          $t("Client needs Chart of Account")
                        }}</span>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-warning ml-2"
                          @click="autoAssignClientChartOfAccount"
                          :disabled="isAutoAssigningClient"
                        >
                          <i
                            :class="
                              isAutoAssigningClient
                                ? 'fas fa-spinner fa-spin'
                                : 'fas fa-magic'
                            "
                          ></i>
                          {{
                            isAutoAssigningClient
                              ? $t("Assigning...")
                              : $t("Auto-Assign")
                          }}
                        </button>
                      </div>
                    </div>

                    <has-error :form="form" field="client" />
                  </div>
                  <div class="form-group col-12 col-md-3">
                    <label for="saleStatus">{{ $t("Sale Status") }}</label>
                    <select
                      id="saleStatus"
                      v-model="form.saleStatus"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('sale_status') }"
                      name="saleStatus"
                      @change="onSaleStatusChange"
                    >
                      <option value="">{{ $t("Select") }}</option>
                      <option value="مكتملة">{{ $t("Completed") }}</option>
                      <option value="معلقة">{{ $t("Pending") }}</option>
                    </select>
                    <has-error :form="form" field="sale_status" />
                  </div>
                  <div class="form-group col-12 col-md-3">
                    <label for="current_date">{{ $t("Date") }}</label>
                    <input
                      id="current_date"
                      v-model="form.current_date"
                      type="date"
                      class="form-control readonly-field"
                      :class="{ 'is-invalid': form.errors.has('current_date') }"
                      name="current_date"
                      readonly
                    />
                    <has-error :form="form" field="current_date" />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-12 col-md-6">
                    <label for="reference">{{ $t("Reference Number") }}</label>
                    <input
                      id="reference"
                      v-model="form.reference"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('reference') }"
                      name="reference"
                      :placeholder="$t('Enter reference number')"
                      @input="clearFieldError('reference')"
                    />
                    <has-error :form="form" field="reference" />
                  </div>
                </div>
              </div>

              <!-- Products Section -->
              <div v-if="products">
                <div class="row">
                  <div class="form-group col-12">
                    <label for="product"
                      >{{ $t("Select Items") }}
                      <span class="required">*</span></label
                    >
                    <div class="d-flex w-100">
                      <v-select
                        v-model="form.product"
                        :options="products"
                        label="label"
                        class="flex-grow-1"
                        :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }"
                        name="product"
                        :placeholder="$t('Search Items')"
                        @input="storeProduct(form.product)"
                      >
                          <template #option="{ name, code, unitName, unitCode, inventoryCount, avgPurchasePrice, regularPrice, isLowStock }">
                            <div class="product-option">
                              <div class="product-option-header">
                                <strong>{{ name }}</strong>
                                <span class="product-code">[{{ code }}]</span>
                                <span v-if="isLowStock" class="badge badge-warning badge-sm ml-2">
                                  <i class="fas fa-exclamation-triangle"></i> {{ $t('Low Stock') }}
                                </span>
                              </div>
                              <div class="product-option-details">
                                <span class="product-detail-item">
                                  <i class="fas fa-ruler"></i> {{ unitName || unitCode || $t('N/A') }}
                                </span>
                                <span class="product-detail-item">
                                  <i class="fas fa-boxes"></i> {{ $t('Stock') }}: {{ inventoryCount || 0 }}
                                </span>
                                <span class="product-detail-item">
                                  <i class="fas fa-dollar-sign"></i> {{ $t('Cost') }}: {{ formatToTwoDecimals(avgPurchasePrice || 0) }} <span class="saudi-riyal">ê</span>
                                </span>
                                <span class="product-detail-item">
                                  <i class="fas fa-tag"></i> {{ $t('Price') }}: {{ formatToTwoDecimals(regularPrice || 0) }} <span class="saudi-riyal">ê</span>
                                </span>
                              </div>
                            </div>
                          </template>
                          <template #selected-option="{ name, code }">
                            <span>{{ name }} [{{ code }}]</span>
                          </template>
                        </v-select>
                        <ProductCreateModal @reloadProducts="getProducts" @productCreated="handleProductCreated">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </v-select>
                      <ProductCreateModal
                        @reloadProducts="getProducts"
                        @productCreated="handleProductCreated"
                      >
                        <div class="input-group-text create-btn">
                          <i class="fas fa-solid fa-plus-circle"></i>
                        </div>
                      </ProductCreateModal>
                    </div>

                    <!-- Product Chart of Account Status -->
                    <div
                      class="product-status mt-2"
                      v-if="
                        form.selectedProducts && form.selectedProducts.length > 0
                      "
                    >
                      <div
                        v-if="!form.selectedProducts[0].sales_account_id"
                        class="product-warning"
                      >
                        <i class="fas fa-exclamation-triangle text-warning"></i>
                        <span class="ml-2">
                          {{ $t("Product") }}
                          "{{ form.selectedProducts[0].name }}"
                          {{ $t("needs Sales Account") }}
                        </span>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-warning ml-2"
                          @click="
                            autoAssignProductChartOfAccount(
                              form.selectedProducts[0],
                              'sales'
                            )
                          "
                          :disabled="
                            isAutoAssigningProduct === form.selectedProducts[0].id
                          "
                        >
                          <i
                            :class="
                              isAutoAssigningProduct === form.selectedProducts[0].id
                                ? 'fas fa-spinner fa-spin'
                                : 'fas fa-magic'
                            "
                          ></i>
                          {{
                            isAutoAssigningProduct === form.selectedProducts[0].id
                              ? $t("Assigning...")
                              : $t("Auto-Assign")
                          }}
                        </button>
                      </div>
                    </div>

                    <has-error :form="form" field="selectedProducts" />
                  </div>
                </div>
              </div>
              <ItemsTable :items="form.selectedProducts" :prefix="prefix" :taxes="taxes" :form-errors="form.errors"
                :total-unit-price="totalUnitPrice" :total-product-discount="totalProductDiscount"
                :total-after-discount="totalAfterDiscount" :total-product-tax="totalProductTax" :subtotal="subtotal"
                :amount-in-words="toWord()" table-class="invoices-create-table" @item-change="handleItemChange"
                @discount-change="calculateProductDiscount" @vat-change="calculateProductVat" @remove-item="removeItem"
                @open-stock-modal="openStockAdjustmentModal" @edit-product="editProductFromTable" />

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
                      >{{ $t("Invoice Tax") }}
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
                      class="form-control readonly-field"
                      :class="{ 'is-invalid': form.errors.has('totalTax') }"
                      name="totalTax"
                      readonly
                    />
                    <has-error :form="form" field="totalTax" />
                  </div>
                </div>

                <!-- Discount, Shipping Cost, and Amount Section -->
                <div class="row mb-3">
                  <div class="form-group col-12 col-md-4">
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
                        :class="{ 
                          'is-invalid': form.errors.has('discount') || isDiscountExceedingTotal
                        }"
                        name="discount"
                        :placeholder="$t('Enter discount')"
                        @change="calculateSum"
                        @keyup="calculateSum"
                        @input="onDiscountInput"
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
                    <!-- Discount Exceeds Total Error Alert -->
                    <div
                      v-if="isDiscountExceedingTotal"
                      class="alert alert-danger mt-2"
                      role="alert"
                    >
                      <i class="fas fa-exclamation-triangle mr-2"></i>
                      <strong>{{ $t("Error") }}:</strong>
                      {{ $t("Discount amount cannot exceed the invoice total amount") }}
                    </div>
                  </div>
                  <div class="form-group col-12 col-md-4">
                    <label for="transportCost">{{
                      $t("Transport Cost")
                    }}</label>
                    <input
                      id="transportCost"
                      v-model="form.transportCost"
                      type="number"
                      step="any"
                      min="0"
                      class="form-control"
                      name="transportCost"
                      :placeholder="$t('Enter transport cost')"
                      @change="calculateSum"
                      @keyup="calculateSum"
                      @input="clearFieldError('transportCost')"
                    />
                  </div>
                  <div class="form-group col-12 col-md-4">
                    <label for="total_amount">{{ $t("Amount") }}</label>
                    <input
                      id="total_amount"
                      :value="grandTotal"
                      type="number"
                      step="any"
                      class="form-control form-control-sm readonly-field"
                      name="total_amount"
                      readonly
                    />
                  </div>
                </div>

                <!-- Transport Taxability Control -->
                <div class="row mb-3" v-if="Number(form.transportCost || 0) > 0">
                  <div class="form-group col-12 col-md-4">
                    <div class="transport-taxability-card">
                      <div class="transport-taxability-header">
                        <i
                          class="fas"
                          :class="
                            form.transportIsTaxable
                              ? 'fa-check-circle text-success'
                              : 'fa-times-circle text-secondary'
                          "
                        ></i>
                        <span class="transport-taxability-title">
                          {{ $t("Transport Taxability") }}
                        </span>
                      </div>
                      <div class="transport-taxability-body">
                        <div class="custom-checkbox-wrapper">
                          <input
                            id="transportIsTaxable"
                            v-model="form.transportIsTaxable"
                            type="checkbox"
                            class="custom-checkbox-input"
                            @change="calculateSum"
                          />
                          <label
                            class="custom-checkbox-label"
                            for="transportIsTaxable"
                          >
                            <span class="checkbox-indicator"></span>
                            <span class="checkbox-text">
                              {{
                                form.transportIsTaxable
                                  ? $t("Transport is Taxable")
                                  : $t("Transport is Non-Taxable")
                              }}
                            </span>
                          </label>
                        </div>
                        <div
                          class="transport-taxability-description"
                          :class="{
                            'description-taxable': form.transportIsTaxable,
                            'description-non-taxable': !form.transportIsTaxable,
                          }"
                        >
                          <i
                            class="fas mr-2"
                            :class="
                              form.transportIsTaxable
                                ? 'fa-info-circle'
                                : 'fa-exclamation-circle'
                            "
                          ></i>
                          <span>
                            {{
                              form.transportIsTaxable
                                ? $t("VAT will be calculated on transport cost")
                                : $t(
                                    "Transport will be added after VAT calculation"
                                  )
                            }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-4" style="display: none;">
                  <label for="poReference">{{
                    $t("PO Reference")
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference"
                    :placeholder="$t('Enter PO reference')" @input="clearFieldError('poReference')" />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-4" style="display: none;">
                  <label for="paymentTerms">{{
                    $t("Payment Terms")
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms"
                    :placeholder="$t('Enter payment terms')" @input="clearFieldError('paymentTerms')" />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div class="form-group col-md-4" v-if="false">
                  <label for="addPayment">{{ $t("Add Payment?") }}</label>
                  <select id="addPayment" v-model="form.addPayment" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('addPayment') }" @change="onAddPaymentChange">
                    <option value="">{{ $t("Select") }}</option>
                    <option value="1">{{ $t("Yes") }}</option>
                    <option value="0">{{ $t("No") }}</option>
                  </select>
                  <has-error :form="form" field="addPayment" />
                </div>
              </div>
              <div class="row" v-if="false">
                <div class="form-group col-md-4">
                  <label for="account">{{ $t("Account") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')" @input="onAccountChange">
                    <template slot="option" slot-scope="option">
                      <img :src="option.image" style="width: 30px; height: 30px;" />
                      {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="account" />

                  <!-- Payment validation hint -->
                  <div v-if="form.addPayment == 1 && !form.account" class="text-warning mt-1">
                    <small><i class="fas fa-exclamation-triangle"></i> {{ $t("Please choose a bank account") }}</small>
                  </div>

                  <!-- Bank Account Chart of Account Status -->
                  <div class="account-status mt-2" v-if="form.account">
                    <div v-if="!form.account.chartOfAccountId" class="account-warning">
                      <i class="fas fa-exclamation-triangle text-warning"></i>
                      <span class="ml-2">{{ $t('Bank Account needs Chart of Account') }}</span>
                      <button type="button" class="btn btn-sm btn-outline-warning ml-2" @click="goToBankAccounts">
                        <i class="fas fa-external-link-alt"></i>
                        {{ $t('Go to Bank Accounts') }}
                      </button>
                    </div>
                    <div v-else class="account-success">
                      <i class="fas fa-check-circle text-success"></i>
                      <span class="ml-2">{{ $t('Bank Account Chart of Account ready') }}</span>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-2">
                  <label for="paidAmount">{{ $t("Paid Amount") }}<span class="required">*</span></label>
                  <input id="paidAmount" v-model="form.paidAmount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paidAmount') }" name="paidAmount" min="1"
                    :max="form.netTotal" :placeholder="$t('Enter an amount')" @input="onPaidAmountChange" />
                  <has-error :form="form" field="paidAmount" />

                  <!-- Payment validation hint -->
                  <div v-if="form.addPayment == 1 && (!form.paidAmount || Number(form.paidAmount) <= 0)"
                    class="text-warning mt-1">
                    <small><i class="fas fa-exclamation-triangle"></i> {{ $t("Paid amount must be greater than 0")
                    }}</small>
                  </div>

                  <!-- Due Amount Display -->
                  <div class="mt-2" v-if="form.addPayment == 1 && form.paidAmount">
                    <small class="text-muted">
                      {{ $t("Due Amount") }}: <strong>{{ dueAmount }} <span class="saudi-riyal">ê</span></strong>
                    </small>
                  </div>
                </div>
                <!-- <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t("Cheque No") }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" @input="clearFieldError('chequeNo')" />
                  <has-error :form="form" field="chequeNo" />
                </div> -->
                <div class="form-group col-md-3">
                  <label for="receiptNo">{{ $t("Receipt No") }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" @input="clearFieldError('receiptNo')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4" style="display: none;">
                  <label for="deliveryPlace">{{
                    $t("Delivery Place")
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" @input="clearFieldError('deliveryPlace')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-md-4" style="display: none;">
                  <label for="date">{{ $t("Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" @change="clearFieldError('date')" />
                  <has-error :form="form" field="date" />
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

              <!-- Row 5: Payment Type Toggle -->
              <div class="row">
                <div class="form-group col-md-6">
                  <label>{{ $t("Payment Type") }} ({{ $t("نوع الدفع") }})</label>
                  <div class="d-flex align-items-center">
                    <toggle-button v-model="form.isPaid" :labels="{ checked: $t('Paid'), unchecked: $t('On Credit') }"
                      :color="{ checked: '#2AB930', unchecked: '#dc3545' }" :sync="true" @change="onPaymentTypeChange"
                      class="mr-2" />
                    <span class="ml-2">{{ form.isPaid ? $t("Paid") : $t("On Credit") }}</span>
                  </div>
                  <small class="form-text text-muted">
                    {{ form.isPaid ? $t("Payment will be added after invoice creation") : $t("Invoice will be created on credit") }}
                  </small>
                </div>
              </div>

              <!-- Row 7: Notes -->
              <div class="form-group">
                <label for="note">{{ $t("Notes") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')"
                  @input="clearFieldError('note')" />
                <has-error :form="form" field="note" />
              </div>

              <!-- Row 8: Attachments -->
              <div class="form-group">
                <label for="attachments" class="mb-2">{{ $t("Attachments") }}</label>
                <input id="attachments" type="file" multiple class="form-control form-control-sm"
                  :class="{ 'is-invalid': form.errors.has('attachments') }" name="attachments"
                  @change="onAttachmentChange" />
                <has-error :form="form" field="attachments" />
                <div v-if="form.attachments && form.attachments.length > 0" class="mt-2">
                  <small class="text-muted d-block mb-1">{{ $t("Selected files") }}:</small>
                  <ul class="list-unstyled mb-0">
                    <li v-for="(file, index) in form.attachments" :key="index"
                      class="d-flex justify-content-between align-items-center mb-1 py-1 px-2 bg-light rounded">
                      <span class="text-truncate small" style="max-width: 70%;">
                        <i class="fas fa-file mr-1"></i>{{ file.name }}
                      </span>
                      <button type="button" class="btn btn-sm btn-danger p-1" style="min-width: 28px;" @click="removeAttachment(index)">
                        <i class="fas fa-times"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Financial Summary Section - Single Row -->
              <div
                v-if="form.selectedProducts && form.selectedProducts.length > 0"
                class="summary-footer-wrapper mt-3 mb-3"
              >
                <div class="summary-card summary-card-horizontal">
                  <div class="summary-row-horizontal">
                    <div class="summary-item">
                      <span class="summary-item-label">{{ $t("Items") }}</span>
                      <span class="summary-item-value">{{ numberOfItems }}</span>
                    </div>
                    <div class="summary-divider"></div>
                    <div class="summary-item">
                      <span class="summary-item-label">{{ $t("Subtotal") }}</span>
                      <span class="summary-item-value">
                        {{ formatToTwoDecimals(invoiceSubtotal) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>
                    <div
                      v-if="invoiceLevelDiscountTotal > 0"
                      class="summary-divider"
                    ></div>
                    <div
                      v-if="invoiceLevelDiscountTotal > 0"
                      class="summary-item summary-item-discount"
                    >
                      <span class="summary-item-label">{{ $t("Discount") }}</span>
                      <span class="summary-item-value text-danger">
                        -{{ formatToTwoDecimals(invoiceLevelDiscountTotal) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>
                    <div
                      v-if="shippingCostTotal > 0"
                      class="summary-divider"
                    ></div>
                    <div
                      v-if="shippingCostTotal > 0"
                      class="summary-item"
                    >
                      <span class="summary-item-label">{{ $t("Shipping") }}</span>
                      <span class="summary-item-value">
                        {{ formatToTwoDecimals(shippingCostTotal) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>
                    <div class="summary-divider"></div>
                    <div class="summary-item">
                      <span class="summary-item-label">{{ $t("VAT") }}</span>
                      <span class="summary-item-value">
                        {{ formatToTwoDecimals(vatAmount) }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </div>
                    <div class="summary-divider summary-divider-bold"></div>
                    <div class="summary-item summary-item-total">
                      <span class="summary-item-label"><strong>{{ $t("Grand Total") }}</strong></span>
                      <span class="summary-item-value summary-total">
                        <strong>
                          {{ formatToTwoDecimals(grandTotal) }}
                          <span class="saudi-riyal">ê</span>
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
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

              <!-- Form Actions -->
              <div class="card-footer">
                <div class="dtable-footer">
                  <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                    <button :disabled="form.busy || !isFormReady" class="btn btn-success" type="submit">
                      <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
                      <i v-else class="fas fa-save"></i>
                      {{ form.busy ? $t("Saving...") : $t("Complete Process") }}
                    </button>
                    <button type="button" class="btn btn-secondary ml-2" @click="resetForm">
                      <i class="fas fa-power-off" /> {{ $t("Reset") }}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <!-- /.card-body -->
          </div>
        </div>
      </div>
    </div>
    <!-- Product Edit Modal -->
    <ProductEditModal ref="productEditModal" @reloadProducts="getProducts" @productUpdated="handleProductUpdated" />

    <!-- Stock Adjustment Modal -->
    <StockAdjustmentModal :is-open="showStockAdjustmentModal" :product="selectedProductForStockAdjustment"
      @close="closeStockAdjustmentModal" @adjust-quantity="adjustProductQuantity" @persist="saveTemporary"
      @stock-updated="handleStockUpdated" />

    <!-- Debug Panel -->
    <div class="row mt-3 mb-3">
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
                      <strong>Subtotal:</strong> {{ formatToTwoDecimals(item.unitPrice) }} × {{ item.qty }} = {{
                        formatToTwoDecimals((Number(item.unitPrice) || 0) * (Number(item.qty) || 0)) }}
                    </div>
                    <div class="debug-step">
                      <strong>Discount:</strong> {{ formatToTwoDecimals(item.discountAmount || 0) }}
                    </div>
                    <div class="debug-step">
                      <strong>{{ $t("After Discount") }}:</strong> {{ formatToTwoDecimals(((Number(item.unitPrice) || 0) *
                        (Number(item.qty) || 0)) - (item.discountAmount || 0)) }}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="debug-step">
                      <strong>VAT:</strong> {{ formatToTwoDecimals(item.totalTax || 0) }}
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
                      <li>Total Product Tax: {{ formatToTwoDecimals(totalProductTax) }}</li>
                      <li>Subtotal (After Discount + VAT): {{ formatToTwoDecimals(subtotal) }}</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="debug-summary">
                    <strong>Form Values:</strong>
                    <ul class="list-unstyled mt-2">
                      <li>form.subTotal: {{ formatToTwoDecimals(form.subTotal) }}</li>
                      <li>form.totalDiscount: {{ formatToTwoDecimals(form.totalDiscount) }}</li>
                      <li>form.productTotalTax: {{ formatToTwoDecimals(form.productTotalTax) }}</li>
                      <li>form.invoiceTax: {{ formatToTwoDecimals(form.invoiceTax || 0) }}</li>
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
                  <span
                    :class="formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.netTotal) ? 'text-success' : 'text-danger'">
                    {{ formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.netTotal) ? '✅ YES' : '❌ NO' }}
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
                      <td>{{ formatToTwoDecimals(subtotal) }}</td>
                      <td>{{ formatToTwoDecimals(form.subTotal) }}</td>
                      <td>{{ formatToTwoDecimals(subtotal) }}</td>
                      <td>
                        <span
                          :class="formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.subTotal) ? 'text-success' : 'text-danger'">
                          {{ formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.subTotal) ? '✅' : '❌' }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>{{ formatToTwoDecimals(totalProductDiscount) }}</td>
                      <td>{{ formatToTwoDecimals(form.totalDiscount) }}</td>
                      <td>{{ formatToTwoDecimals(totalProductDiscount) }}</td>
                      <td>
                        <span :class="totalProductDiscount === form.totalDiscount ? 'text-success' : 'text-danger'">
                          {{ totalProductDiscount === form.totalDiscount ? '✅' : '❌' }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>{{ $t("After Discount") }}</td>
                      <td>{{ formatToTwoDecimals(totalAfterDiscount) }}</td>
                      <td>{{ formatToTwoDecimals(form.subTotal - (form.productTotalTax + (form.invoiceTax || 0))) }}
                      </td>
                      <td>{{ formatToTwoDecimals(totalAfterDiscount) }}</td>
                      <td>
                        <span
                          :class="formatToTwoDecimals(totalAfterDiscount) === formatToTwoDecimals(form.subTotal - (form.productTotalTax + (form.invoiceTax || 0))) ? 'text-success' : 'text-danger'">
                          {{ formatToTwoDecimals(totalAfterDiscount) === formatToTwoDecimals(form.subTotal -
                            (form.productTotalTax + (form.invoiceTax || 0))) ? '✅' : '❌' }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td>{{ formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) }}</td>
                      <td>{{ formatToTwoDecimals(form.totalTax) }}</td>
                      <td>{{ formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) }}</td>
                      <td>
                        <span
                          :class="formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) === formatToTwoDecimals(form.totalTax) ? 'text-success' : 'text-danger'">
                          {{ formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) ===
                            formatToTwoDecimals(form.totalTax) ? '✅' : '❌' }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Final Total</td>
                      <td>{{ formatToTwoDecimals(subtotal) }}</td>
                      <td>{{ formatToTwoDecimals(form.netTotal) }}</td>
                      <td>{{ formatToTwoDecimals(subtotal) }}</td>
                      <td>
                        <span
                          :class="formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.netTotal) ? 'text-success' : 'text-danger'">
                          {{ formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.netTotal) ? '✅' : '❌' }}
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
    <InvoicePaymentModal
      v-if="createdInvoiceData"
      :show="showPaymentModal"
      :invoice-id="createdInvoiceData.id"
      :invoice-no="createdInvoiceData.invoiceNo"
      :invoice-prefix="prefix"
      :invoice-total="createdInvoiceData.subTotal || createdInvoiceData.netTotal || form.netTotal"
      :due-amount="createdInvoiceData.subTotal || createdInvoiceData.netTotal || form.netTotal"
      :invoice-status="createdInvoiceData.status || 1"
      @close="handlePaymentModalClose"
      @payment-saved="handlePaymentSaved"
    />
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import { ToggleButton } from "vue-js-toggle-button";
import ClientCreateModal from '~/components/ClientCreateModal'
import ProductCreateModal from '~/components/ProductCreateModal'
import ProductEditModal from '~/components/ProductEditModal'
import StockAdjustmentModal from '~/components/StockAdjustmentModal'
import ItemsTable from '~/components/ItemsTable'
import InvoicePaymentModal from '~/components/InvoicePaymentModal'
import RTLMixin from '~/mixins/RTLMixin'

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Invoice") };
  },
  mixins: [RTLMixin],
  components: {
    ToggleButton,
    ClientCreateModal,
    ProductCreateModal,
    ProductEditModal,
    StockAdjustmentModal,
    ItemsTable,
    InvoicePaymentModal,
  },
  data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: "Create Invoice",
      isSubmitting: false, // Flag to track form submission state
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
        transportIsTaxable: true, // Default to true to maintain existing behavior (transport is taxable)
        orderTax: "",
        totalTax: 0,
        productTotalTax: 0,
        invoiceTax: 0, // Add this field for Invoice Tax calculation
        total_amount: 0,
        account: "",
        totalPaid: "",
        dueAmount: "",
        poReference: "",
        paymentTerms: "",
        deliveryPlace: "",
        addPayment: 0, // Initialize to 0 (No) by default
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
        costCenter: null,
        cost_center_id: null,
        saleStatus: "",
        sale_status: "",
        representative: null,
        representative_id: null,
        cashier: null,
        cashier_id: null,
        branch: null,
        branch_id: null,
        current_date: new Date().toISOString().slice(0, 10),
        attachments: [],
        isPaid: true, // Default to Paid (مدفوع)
        discount_type: "percentage", // "percentage" or "fixed"
        discount_value: 0,
      }),
      products: [],
      accounts: [],
      taxes: [],
      costCenters: [],
      employees: [],
      representatives: [],
      cashiers: [],
      branches: [],
      prefix: "",
      showPaymentModal: false,
      createdInvoiceData: null,
      isUpdatingChartOfAccount: false, // Flag to prevent form submission during chart of account updates

      isAutoAssigningClient: false, // Add this back for the auto-assign button
      isAutoAssigningProduct: null, // Track which product is being auto-assigned

      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true,
      },

      // Stock adjustment modal
      showStockAdjustmentModal: false,
      selectedProductForStockAdjustment: null,

      // Reactive totals for the table
      reactiveTotals: {
        totalUnitPrice: 0,
        totalAfterDiscount: 0,
        totalDiscount: 0,
        productTotalTax: 0,
        subTotal: 0
      },

    }
  },
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),

    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },

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

    // Calculate total after discount (sum of all totalAfterDiscount values)
    totalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
    },

    // Calculate total discount from all products (reactive)
    totalProductDiscount() {
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
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
    // This is calculated from invoice-level discount inputs (discount_type and discount_value)
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

    // Check if discount exceeds invoice total (before capping)
    isDiscountExceedingTotal() {
      const subtotal = this.invoiceSubtotal;
      if (!this.form.discount || this.form.discount <= 0 || subtotal <= 0) {
        return false;
      }

      let discountAmount = 0;
      if (this.form.discountType == 1) {
        // Percentage discount
        discountAmount = this.roundToTwoDecimals(
          (subtotal * this.form.discount) / 100
        );
      } else {
        // Fixed discount
        discountAmount = this.roundToTwoDecimals(
          Number(this.form.discount)
        );
      }

      return discountAmount > subtotal;
    },

    // Gets transport amount
    shippingCostTotal() {
      const transportCost = Number(this.form.transportCost || 0);
      return this.roundToTwoDecimals(transportCost);
    },

    // Calculate subtotal (reactive) - sum of line net_totals (line_total - discount)
    // Note: This is the sum of net amounts after discount, before VAT
    subtotal() {
      return this.roundToTwoDecimals(this.totalAfterDiscount);
    },

    // Net Amount Before VAT: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of item net totals to avoid discount issues
    //
    // If transport is taxable:
    //   Net Amount = Invoice Subtotal - Invoice Discount + Transport
    //   Transport is included in VAT base
    //
    // If transport is non-taxable:
    //   Net Amount = Sum of Item Net Totals (after item-level discounts)
    //   This ensures item-level discounts are correctly included without double-counting
    //   Transport is NOT included in VAT base and is added after VAT calculation
    netAmountBeforeVAT() {
      const subtotal = this.invoiceSubtotal;
      const invoiceDiscount = this.invoiceLevelDiscountTotal;
      const shipping = this.shippingCostTotal;

      if (this.form.transportIsTaxable) {
        // Transport is taxable: include it in Net Amount (part of VAT base)
        // Net Amount = Invoice Subtotal - Invoice Discount + Transport
        return this.roundToTwoDecimals(subtotal - invoiceDiscount + shipping);
      } else {
        // Transport is non-taxable: use sum of item net totals (after item-level discounts)
        // This ensures item-level discounts are correctly included
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

        // Net Amount = Taxable Base = Sum of Item Net Totals (transport excluded)
        // Transport will be added after VAT calculation in grandTotal()
        return this.roundToTwoDecimals(sumOfItemNetTotals);
      }
    },

    // VAT Amount: Calculated based on transport taxability
    // CRITICAL: VAT calculation differs based on whether transport is taxable or not
    //
    // Transport Taxability Behavior:
    // - If transport is taxable:
    //   VAT base = Subtotal - Discount + Transport
    //   VAT = VAT base × Weighted Average VAT Rate
    // - If transport is non-taxable:
    //   VAT base = Subtotal - Discount (transport EXCLUDED from VAT base)
    //   VAT = Sum of item VATs (totalProductTax) - ensures consistency with item-level calculations
    //   Transport is NOT included in VAT calculation and is added after VAT
    //
    // Why this approach:
    // - When transport is taxable: It's part of the transaction value, so included in VAT base
    // - When transport is non-taxable: Item-level VAT already correctly excludes transport,
    //   so we use the sum of item VATs to ensure consistency and avoid double-counting
    // - This matches standard accounting practices for non-taxable shipping
    vatAmount() {
      if (
        !this.form.selectedProducts ||
        this.form.selectedProducts.length === 0
      ) {
        return 0;
      }

      // When transport is non-taxable, use sum of item VATs directly
      // This ensures VAT equals the sum of item VATs and transport is NOT included in VAT base
      if (!this.form.transportIsTaxable) {
        // Transport is non-taxable: VAT = Sum of item VATs (transport excluded from VAT base)
        // Item-level calculations already correctly exclude transport from VAT when non-taxable
        const itemVatSum = this.form.selectedProducts.reduce((total, item) => {
          return total + (item.totalTax || 0);
        }, 0);
        return this.roundToTwoDecimals(itemVatSum);
      }

      // When transport is taxable, calculate VAT on Net Amount (includes transport)
      const netAmount = this.netAmountBeforeVAT;
      if (netAmount <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate from all items
      // We use items' net amounts (after discount) as weights
      let totalNetAmountForWeighting = 0;
      let weightedVatRateSum = 0;

      this.form.selectedProducts.forEach((item) => {
        const itemNetAmount = item.netTotal || item.totalAfterDiscount || 0;

        if (itemNetAmount > 0) {
          // Get item's VAT rate
          let vatRate = 0;
          if (
            item.selectedVatRate &&
            item.selectedVatRate.rate !== undefined &&
            item.selectedVatRate.rate !== null
          ) {
            vatRate = Number(item.selectedVatRate.rate);
          } else if (item.taxRate !== undefined && item.taxRate !== null) {
            vatRate = Number(item.taxRate);
          }

          // Ensure vatRate is valid
          if (!isNaN(vatRate) && vatRate >= 0) {
            totalNetAmountForWeighting += itemNetAmount;
            // Weighted contribution: itemNetAmount × (vatRate / 100)
            weightedVatRateSum += itemNetAmount * (vatRate / 100);
          }
        }
      });

      // If no valid net amount for weighting, return 0
      if (totalNetAmountForWeighting <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate as percentage
      // Formula: weightedAverageRate = (sum(itemNetAmount × itemVatRate) / sum(itemNetAmount)) × 100
      const weightedAverageVatRate =
        (weightedVatRateSum / totalNetAmountForWeighting) * 100;

      // Calculate VAT on the Net Amount using weighted average rate
      // Net Amount includes transport when transport is taxable
      const vat = this.roundToTwoDecimals(
        netAmount * (weightedAverageVatRate / 100)
      );

      return vat;
    },
    
    // Grand Total: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of item totals to avoid discount double-counting
    //
    // If transport is taxable:
    //   Grand Total = Net Amount + VAT
    //   Where: Net Amount = Subtotal - Discount + Transport (transport included in VAT base)
    //
    // If transport is non-taxable:
    //   Grand Total = Sum of Item Totals After VAT + Transport
    //   This ensures:
    //   - Item-level discounts are correctly included (no double-counting)
    //   - VAT is calculated correctly on items only (transport excluded)
    //   - Transport is added only once at invoice level
    //
    // Why use sum of item totals when non-taxable:
    // - Item totals already include item-level discounts and VAT
    // - Avoids issues with invoice-level vs item-level discount calculations
    // - Ensures accuracy: Grand Total = sum(item totals) + transport
    grandTotal() {
      const shipping = this.shippingCostTotal;

      if (this.form.transportIsTaxable) {
        // Transport is taxable: use Net Amount + VAT calculation
        const netAmount = this.netAmountBeforeVAT;
        const vat = this.vatAmount;
        // Grand Total = Net Amount + VAT (transport already included in Net Amount)
        return this.roundToTwoDecimals(netAmount + vat);
      } else {
        // Transport is non-taxable: use sum of item totals after VAT
        // This ensures item-level discounts are correctly included without double-counting
        if (
          !this.form.selectedProducts ||
          this.form.selectedProducts.length === 0
        ) {
          return this.roundToTwoDecimals(shipping);
        }

        // Calculate sum of all item totals after VAT (includes item-level discounts and VAT)
        const sumOfItemTotals = this.form.selectedProducts.reduce(
          (total, item) => {
            // Item total after VAT = itemAfterDiscount + itemVAT (transport excluded)
            const itemTotal = item.totalPrice || 0;
            return total + itemTotal;
          },
          0
        );

        // Grand Total = Sum of Item Totals + Transport
        // Transport is added only at invoice level, not distributed to items
        return this.roundToTwoDecimals(sumOfItemTotals + shipping);
      }
    },

    // Calculate number of items
    numberOfItems() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.length;
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
      // Block form submission if discount exceeds total
      if (this.isDiscountExceedingTotal) {
        return false;
      }
      const basicRequirements = this.hasChartOfAccount &&
        this.allProductsHaveSalesAccounts &&
        this.hasBankAccountChartOfAccount &&
        this.form.selectedProducts &&
        this.form.selectedProducts.length > 0;

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

    // Check payment fields visibility conditions
    paymentFieldsVisible() {
      return this.form.addPayment == 1;
    },

    // Check if there are any products with insufficient stock
    hasInsufficientStock() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return false;
      }
      return this.form.selectedProducts.some(item =>
        item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty)
      );
    },

    // Get products with insufficient stock
    insufficientStockProducts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      return this.form.selectedProducts.filter(item =>
        item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty)
      );
    },


  },
  watch: {

    // Watch for changes in addPayment to reset account when payment is disabled
    'form.addPayment': {
      handler(newVal, oldVal) {
        if (newVal != 1 && oldVal == 1) {
          // Payment was disabled, reset account selection
          this.form.account = "";
          this.clearFieldError('account');
          this.clearFieldError('paidAmount');
          this.clearFieldError('chequeNo');
          this.clearFieldError('receiptNo');
        }
      }
    },

    // Watch for changes in discount to reset payment fields when discount changes
    'form.discount': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
      }
    },

    // Watch for changes in transport cost to reset payment fields when transport cost changes
    'form.transportCost': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
        // Recalculate totals when transport cost changes
        if (newVal !== oldVal) {
          this.calculateSum();
        }
      }
    },

    // Watch for changes in transport taxability to recalculate totals
    'form.transportIsTaxable': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          // Recalculate all items and totals when transport taxability changes
          this.calculateSum();
        }
      }
    },

    // Watch for changes in order tax to reset payment fields when order tax changes
    'form.orderTax': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
        else if (newVal !== oldVal && this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          // Update all products that don't have a specific VAT rate selected
          this.form.selectedProducts.forEach((item, index) => {
            if (!item.selectedVatRate || item.selectedVatRate.id === oldVal?.id) {
              item.selectedVatRate = newVal;
              this.generateItemTotalPrice(index);
            }
          });
          this.calculateSum();
        }
      },
      deep: true
    },

    // Watch for changes in discount type to reset payment fields when discount type changes
    'form.discountType': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
      }
    },

    // Watch for changes in discountType to sync with discount_type (for backend compatibility)
    'form.discountType': {
      handler(newVal) {
        if (newVal !== null && newVal !== undefined) {
          // Sync discountType to discount_type (0 = fixed, 1 = percentage)
          const newDiscountType = newVal == 1 ? 'percentage' : 'fixed';
          if (this.form.discount_type !== newDiscountType) {
            this.form.discount_type = newDiscountType;
          }
        }
      },
      immediate: true
    },

    // Watch for changes in discount to sync with discount_value (for backend compatibility)
    'form.discount': {
      handler(newVal) {
        if (newVal !== null && newVal !== undefined) {
          // Sync discount to discount_value
          const newDiscountValue = parseFloat(newVal) || 0;
          if (this.form.discount_value !== newDiscountValue) {
            this.form.discount_value = newDiscountValue;
          }
        }
      },
      immediate: true
    },

    // Watch for changes in selectedProducts to reset payment fields when products change
    'form.selectedProducts': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }

        // Update reactive totals when products change
        this.updateReactiveTotals();
      },
      deep: true
    },

    // Watch for changes in client to reset payment fields when client changes
    'form.client': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
      },
      deep: true
    },

    // Watch for changes in payment fields to clear errors when they become valid
    'form.account': {
      handler(newVal, oldVal) {
        if (newVal && this.form.addPayment == 1) {
          this.clearFieldError('account');
        }
      }
    },

    'form.paidAmount': {
      handler(newVal, oldVal) {
        if (newVal && Number(newVal) > 0 && this.form.addPayment == 1) {
          this.clearFieldError('paidAmount');
        }
      }
    },

    // Watch for items changes to ensure they are clients, not categories
    items: {
      handler(newItems, oldItems) {
        if (!newItems || newItems.length === 0) return;

        // Skip if items haven't actually changed (prevent infinite loop)
        if (oldItems && newItems.length === oldItems.length &&
          newItems[0]?.id === oldItems[0]?.id) {
          return;
        }

        // Check if items are actually clients
        const firstItem = newItems[0];
        if (firstItem && typeof firstItem === 'object') {
          const hasClientProperties = firstItem.hasOwnProperty('clientTotalAdvance') ||
            firstItem.hasOwnProperty('email') ||
            firstItem.hasOwnProperty('phone');
          const hasCategoryProperties = firstItem.hasOwnProperty('sub_categories');

          // If items look like categories instead of clients, reload clients
          if (hasCategoryProperties && !hasClientProperties) {
            console.warn('Detected categories in items instead of clients, reloading clients...');
            // Use a flag to prevent infinite loop
            if (!this._reloadingClients) {
              this._reloadingClients = true;
              this.getClients().finally(() => {
                this._reloadingClients = false;
              });
            }
          } else if (hasClientProperties && !this.form.client) {
            // If items are clients and no client is selected, select default client
            this.$nextTick(() => {
              const items = this.items || [];
              if (items.length > 0) {
                this.selectDefaultClient();
              }
            });
          }
        }
      },
      immediate: false
    },






  },
  created() {
    this.getClients();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.getCostCenters();
    this.getEmployees();
    this.getBranches();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  mounted() {
    // Set up global error handling
    this.setupGlobalErrorHandling();
    // Load temporary data
    this.loadTemporaryData();

    // Initialize current date with today's date (if not loaded from temporary data)
    if (!this.form.current_date) {
      this.form.current_date = new Date().toISOString().slice(0, 10);
    }

    // Set default cashier after temporary data is loaded (if not already set)
    this.$nextTick(() => {
      this.setDefaultCashier();
    });

    // Ensure default client is selected after everything is loaded
    this.$nextTick(() => {
      const items = this.items || [];
      if (!this.form.client && items.length > 0) {
        this.selectDefaultClient();
      } else if (items.length === 0) {
        // If items are not loaded yet, try again after a short delay
        setTimeout(() => {
          const retryItems = this.items || [];
          if (!this.form.client && retryItems.length > 0) {
            this.selectDefaultClient();
          }
        }, 500);
      }
    });

    // Ensure VAT calculations are up to date after component is mounted
    this.$nextTick(() => {
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.form.selectedProducts.forEach((item, index) => {
          this.generateItemTotalPrice(index);
        });
        this.calculateSum();
      }

      // Initialize reactive totals
      this.updateReactiveTotals();
    });
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
  beforeDestroy() {
    // Clean up global error handlers
    this.cleanupGlobalErrorHandling();
  },
  methods: {
    // Debug helpers
    logDebug(label, payload) {
      try {
        // Toggle with window.__INVOICE_DEBUG (true by default)
        if (typeof window === 'undefined' || window.__INVOICE_DEBUG === false) return;
        console.log(`[InvoiceCreate] ${label}`, payload);
      } catch (e) { }
    },
    debugBreak() {
      try {
        if (typeof window !== 'undefined' && window.__INVOICE_DEBUGGER) {
          debugger; // eslint-disable-line no-debugger
        }
      } catch (e) { }
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

    // get all clients
    async getClients(selectedClient = 'default') {
      try {
        console.log('[Invoice] Fetching clients from API...');
        
        await this.$store.dispatch("operations/allData", {
          path: "/api/all-clients",
        });

        // Wait for store to update
        await this.$nextTick();

        // Verify that items are actually clients (not categories or other data)
        // Clients should have properties like 'name', 'slug', and typically 'clientTotalAdvance' or 'email'
        // Categories would have different structure (e.g., 'sub_categories', 'note' as category-specific)
        const currentItems = this.items || [];
        console.log(`[Invoice] Loaded ${currentItems.length} items from store`);

        // Check if items look like clients
        // Clients typically have: name, slug, and may have clientTotalAdvance, email, phone
        // Categories typically have: name, slug, but may have sub_categories or different structure
        const areClients = currentItems.length === 0 || currentItems.some(item => {
          if (!item || typeof item !== 'object') return false;

          // Check for client-specific properties
          const hasClientProperties = item.hasOwnProperty('clientTotalAdvance') ||
            item.hasOwnProperty('email') ||
            item.hasOwnProperty('phone') ||
            item.hasOwnProperty('address');

          // Check that it doesn't have category-specific properties
          const hasCategoryProperties = item.hasOwnProperty('sub_categories') ||
            (item.note && typeof item.note === 'string' && item.note.length > 100);

          // If it has client properties and not category properties, it's likely a client
          return item.name && item.slug && (hasClientProperties || !hasCategoryProperties);
        });

        if (!areClients && currentItems.length > 0) {
          // If items don't look like clients, force reload
          console.warn('[Invoice] Items do not appear to be clients, force reloading clients...');
          // Clear the store first
          this.$store.commit('operations/FETCH_DATA', { items: { data: [] }, loading: false });
          // Then reload
          await this.$store.dispatch("operations/allData", {
            path: "/api/all-clients",
          });
          await this.$nextTick();
        }

        // Don't return early - allow the dropdown to show even if empty
        // The default selection will happen below if items exist

        // Get fresh items after potential reload
        const finalItems = this.items || [];
        console.log(`[Invoice] Final items count: ${finalItems.length}`);

        // Check if Walking Customer exists in the list
        const walkingCustomerExists = finalItems.some(item => item.slug === 'walking-customer');
        if (!walkingCustomerExists && finalItems.length > 0) {
          console.warn('[Invoice] ⚠️ Walking Customer not found in clients list!');
          console.warn('[Invoice] Available client slugs:', finalItems.map(c => c.slug).join(', '));
        } else if (walkingCustomerExists) {
          console.log('[Invoice] ✅ Walking Customer found in clients list');
        }

        // If explicitly requesting latest (e.g., after creating a client)
        if (selectedClient === 'latest') {
          if (finalItems.length > 0) {
            this.form.client = finalItems[0];
            console.log('[Invoice] Selected latest client:', finalItems[0].name);
          }
          return;
        }

        // If a client was restored from temp or already selected, normalize to an option from items
        if (this.form.client && (this.form.client.id || this.form.client.slug)) {
          console.log('[Invoice] Client already selected, normalizing selection');
          this.normalizeClientSelection();
          return;
        }

        // Otherwise, assign default client
        // Ensure we have items before trying to select
        if (finalItems.length > 0) {
          // Wait for appInfo to be available
          let retryCount = 0;
          const maxRetries = 10;
          while (!this.appInfo && retryCount < maxRetries) {
            await this.$nextTick();
            await new Promise(resolve => setTimeout(resolve, 100));
            retryCount++;
          }

          // Try to get default client slug from appInfo, fallback to 'walking-customer'
          let defaultClientSlug = (this.appInfo && this.appInfo.defaultClientSlug) 
            ? this.appInfo.defaultClientSlug 
            : 'walking-customer';
          
          console.log(`[Invoice] Looking for default client with slug: ${defaultClientSlug}`);
          
          const defaultClient = finalItems.find(
            (item) => item.slug === defaultClientSlug
          );
          
          if (defaultClient) {
            this.form.client = defaultClient;
            console.log(`[Invoice] ✅ Selected default client: ${defaultClient.name} (${defaultClient.slug})`);
          } else {
            // Fallback to Walking Customer if default client not found
            console.warn(`[Invoice] Default client (${defaultClientSlug}) not found, trying Walking Customer...`);
            const walkingCustomer = finalItems.find(
              (item) => item.slug === 'walking-customer'
            );
            if (walkingCustomer) {
              this.form.client = walkingCustomer;
              console.log(`[Invoice] ✅ Selected Walking Customer as fallback: ${walkingCustomer.name}`);
            } else {
              // Last resort: select first available client
              console.warn('[Invoice] ⚠️ Walking Customer not found! Selecting first available client.');
              if (finalItems.length > 0) {
                this.form.client = finalItems[0];
                console.log(`[Invoice] Selected first available client: ${finalItems[0].name}`);
              } else {
                console.error('[Invoice] ❌ No clients available in the list!');
              }
            }
          }
        } else {
          console.error('[Invoice] ❌ No clients loaded from API!');
        }
      } catch (error) {
        console.error('[Invoice] ❌ Error getting clients:', error);
        console.error('[Invoice] Error details:', {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          url: error.config?.url
        });

        // Show error toast for client loading failures
        if (error.response?.status === 401) {
          toast.fire({
            type: "error",
            title: this.$t("Authentication Error"),
            text: this.$t("You are not authorized to view clients. Please log in again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 403) {
          toast.fire({
            type: "error",
            title: this.$t("Permission Error"),
            text: this.$t("You don't have permission to view clients."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status >= 500) {
          toast.fire({
            type: "error",
            title: this.$t("Server Error"),
            text: this.$t("Unable to load clients. Please try again later."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.message) {
          toast.fire({
            type: "error",
            title: this.$t("Client Loading Error"),
            text: error.message,
            timer: 5000,
            timerProgressBar: true,
          });
        }

        // Set empty array to prevent errors
        this.$store.commit('operations/FETCH_DATA', { items: { data: [] }, loading: false });
      } finally {
        // Ensure default client is selected after clients are loaded
        this.$nextTick(() => {
          const items = this.items || [];
          if (!this.form.client && items.length > 0) {
            console.log('[Invoice] Finally block: Selecting default client...');
            this.selectDefaultClient();
          } else if (items.length === 0) {
            console.warn('[Invoice] Finally block: No clients available to select');
          } else if (this.form.client) {
            console.log(`[Invoice] Finally block: Client already selected: ${this.form.client.name}`);
          }
        });
      }
    },

    // get products
    async getProducts() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-products"
        );
        this.products = data.data;
        this.products.sort(this.sortProducts);
        // After products are loaded/refreshed, sync inventory for selected items
        if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          this.refreshSelectedProductsInventory();
        }

      } catch (error) {
        console.error('Error getting products:', error);

        // Show error toast for product loading failures
        if (error.response?.status === 401) {
          toast.fire({
            type: "error",
            title: this.$t("Authentication Error"),
            text: this.$t("You are not authorized to view products. Please log in again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 403) {
          toast.fire({
            type: "error",
            title: this.$t("Permission Error"),
            text: this.$t("You don't have permission to view products."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status >= 500) {
          toast.fire({
            type: "error",
            title: this.$t("Server Error"),
            text: this.$t("Unable to load products. Please try again later."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.message) {
          toast.fire({
            type: "error",
            title: this.$t("Product Loading Error"),
            text: error.message,
            timer: 5000,
            timerProgressBar: true,
          });
        }
      }
    },

    // Select default client (Walking Customer)
    selectDefaultClient() {
      const items = this.items || [];
      if (items.length === 0) {
        console.warn('[Invoice] selectDefaultClient: No clients available');
        return;
      }

      // Skip if client is already selected
      if (this.form.client && (this.form.client.id || this.form.client.slug)) {
        console.log(`[Invoice] selectDefaultClient: Client already selected: ${this.form.client.name || this.form.client.slug}`);
        return;
      }

      // Wait for appInfo to be available (with timeout)
      let appInfoReady = false;
      let retryCount = 0;
      const maxRetries = 10;
      
      while (!this.appInfo && retryCount < maxRetries) {
        this.$nextTick();
        retryCount++;
        if (retryCount >= maxRetries) {
          console.warn('[Invoice] selectDefaultClient: appInfo not available after retries, using fallback');
          break;
        }
      }

      // Try to get default client slug from appInfo, fallback to 'walking-customer'
      let defaultClientSlug = (this.appInfo && this.appInfo.defaultClientSlug) 
        ? this.appInfo.defaultClientSlug 
        : 'walking-customer';
      
      console.log(`[Invoice] selectDefaultClient: Looking for client with slug: ${defaultClientSlug}`);
      console.log(`[Invoice] selectDefaultClient: Available slugs: ${items.map(c => c.slug).join(', ')}`);
      
      const defaultClient = items.find(
        (item) => item.slug === defaultClientSlug
      );
      
      if (defaultClient) {
        this.form.client = defaultClient;
        console.log(`[Invoice] selectDefaultClient: ✅ Selected default client: ${defaultClient.name} (${defaultClient.slug})`);
        return;
      }

      // Fallback to Walking Customer if default client not found
      console.warn(`[Invoice] selectDefaultClient: Default client (${defaultClientSlug}) not found, trying Walking Customer...`);
      const walkingCustomer = items.find(
        (item) => item.slug === 'walking-customer'
      );
      
      if (walkingCustomer) {
        this.form.client = walkingCustomer;
        console.log(`[Invoice] selectDefaultClient: ✅ Selected Walking Customer: ${walkingCustomer.name}`);
        return;
      }

      // Last resort: select first available client
      console.warn('[Invoice] selectDefaultClient: ⚠️ Walking Customer not found! Selecting first available client.');
      if (items.length > 0) {
        this.form.client = items[0];
        console.log(`[Invoice] selectDefaultClient: Selected first client: ${items[0].name} (${items[0].slug})`);
      } else {
        console.error('[Invoice] selectDefaultClient: ❌ No clients available!');
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
      // this.$toast.success(this.$t("Product created and added to invoice successfully!"));
    },

    // edit product
    editProduct() {
      // Check if any product is selected
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        // Show message that no product is selected
        toast.fire({
          type: "warning",
          title: this.$t("No Product Selected"),
          text: this.$t("Please select a product first to edit"),
        });
        return;
      }

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

      // Open the product edit modal with the first selected product
      this.$refs.productEditModal.openModal(this.form.selectedProducts[0]);
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

      // Also update the product in the main products array if it exists
      const mainProductIndex = this.products.findIndex(p =>
        p.id === originalProduct.id || p.slug === originalProduct.slug
      );

      if (mainProductIndex !== -1) {
        const updatedMainProduct = { ...this.products[mainProductIndex] };

        // Update relevant fields from the form data
        updatedMainProduct.name = updatedData.itemName || updatedMainProduct.name;
        updatedMainProduct.regular_price = updatedData.regularPrice || updatedMainProduct.regular_price;
        updatedMainProduct.discount = updatedData.discount || updatedMainProduct.discount;
        updatedMainProduct.selling_price = updatedData.sellingPrice || updatedMainProduct.selling_price;

        // Replace the product in the main products array
        this.$set(this.products, mainProductIndex, updatedMainProduct);

        console.log('Updated product in main products array:', updatedMainProduct);
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

    // get accounts
    async getAccounts() {
      try {
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
      } catch (error) {
        console.error('Error getting accounts:', error);

        // Show error toast for account loading failures
        if (error.response?.status === 401) {
          toast.fire({
            type: "error",
            title: this.$t("Authentication Error"),
            text: this.$t("You are not authorized to view accounts. Please log in again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 403) {
          toast.fire({
            type: "error",
            title: this.$t("Permission Error"),
            text: this.$t("You don't have permission to view accounts."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status >= 500) {
          toast.fire({
            type: "error",
            title: this.$t("Server Error"),
            text: this.$t("Unable to load accounts. Please try again later."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.message) {
          toast.fire({
            type: "error",
            title: this.$t("Account Loading Error"),
            text: error.message,
            timer: 5000,
            timerProgressBar: true,
          });
        }
      }
    },

    // get taxes
    // get all cost centers
    async getCostCenters() {
      try {
        // Fetch all cost centers for dropdown (backend handles pagination/limits)
        const { data } = await axios.get(
          window.location.origin + "/api/cost-centers"
        );
        // Handle paginated response
        if (data.data && Array.isArray(data.data)) {
          this.costCenters = data.data;
        } else if (Array.isArray(data)) {
          this.costCenters = data;
        } else {
          this.costCenters = [];
        }
      } catch (error) {
        console.error('Error getting cost centers:', error);
        this.costCenters = [];
      }
    },

    // handle cost center change
    onCostCenterChange(costCenter) {
      if (costCenter && costCenter.id) {
        this.form.cost_center_id = costCenter.id;
      } else {
        this.form.cost_center_id = null;
      }
      this.clearFieldError('cost_center_id');
    },

    // handle sale status change
    onSaleStatusChange() {
      this.form.sale_status = this.form.saleStatus;
      this.clearFieldError('sale_status');
    },

    // get all employees
    async getEmployees() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-employees"
        );
        // Handle response
        if (data.data && Array.isArray(data.data)) {
          this.employees = data.data;
        } else if (Array.isArray(data)) {
          this.employees = data;
        } else {
          this.employees = [];
        }

        // Load all employees in both dropdowns regardless of roles or permissions
        this.representatives = this.employees;
        this.cashiers = this.employees;

        // Set default cashier to currently logged-in user
        this.setDefaultCashier();
      } catch (error) {
        console.error('Error getting employees:', error);
        this.employees = [];
        this.representatives = [];
        this.cashiers = [];
      }
    },

    // Set default cashier to currently logged-in user
    setDefaultCashier() {
      // Only set default if cashier is not already set
      if (this.form.cashier && this.form.cashier.id) {
        return;
      }

      const user = this.$store.getters['auth/user'];
      if (!user || !user.id) {
        return;
      }

      // Find employee that matches the logged-in user
      const currentUserEmployee = this.employees.find(emp => {
        return emp.user && emp.user.id === user.id;
      });

      if (currentUserEmployee) {
        this.form.cashier = currentUserEmployee;
        this.form.cashier_id = currentUserEmployee.id;
      }
    },

    // handle representative change
    onRepresentativeChange(representative) {
      if (representative && representative.id) {
        this.form.representative_id = representative.id;
      } else {
        this.form.representative_id = null;
      }
      this.clearFieldError('representative_id');
    },

    // handle cashier change
    onCashierChange(cashier) {
      if (cashier && cashier.id) {
        this.form.cashier_id = cashier.id;
      } else {
        this.form.cashier_id = null;
      }
      this.clearFieldError('cashier_id');
    },

    async getBranches() {
      try {
        const user = this.$store.getters['auth/user'];
        const isSuperAdmin = user && Number(user.account_role) === 1;
        let branchesData = [];

        if (isSuperAdmin) {
          // For superadmin, get all branches
          const { data } = await axios.get('/api/branches');
          if (data && data.data && Array.isArray(data.data)) {
            branchesData = data.data;
          } else if (Array.isArray(data)) {
            branchesData = data;
          }
        } else if (user && user.id) {
          // For normal users, get their assigned branches
          try {
            const { data } = await axios.get(`/api/users/${user.id}/branches`);
            if (Array.isArray(data)) {
              branchesData = data;
            } else if (data && Array.isArray(data.data)) {
              branchesData = data.data;
            }
          } catch (error) {
            // Fallback to all branches if user branches fail
            const { data } = await axios.get('/api/branches');
            if (data && data.data && Array.isArray(data.data)) {
              branchesData = data.data;
            }
          }
        }

        // Ensure branches have name property for display
        this.branches = branchesData.map(branch => ({
          id: branch.id,
          name: branch.name || branch.label || `Branch ${branch.id}`,
          slug: branch.slug,
          code: branch.code,
          ...branch
        }));
      } catch (error) {
        console.error('Error getting branches:', error);
        this.branches = [];
      }
    },

    // handle branch change
    onBranchChange(branch) {
      if (branch && branch.id) {
        this.form.branch_id = branch.id;
      } else {
        this.form.branch_id = null;
      }
      this.clearFieldError('branch_id');
    },

    // handle attachment file change
    onAttachmentChange(e) {
      const files = Array.from(e.target.files);
      const validFiles = [];

      files.forEach(file => {
        // Check file size (2MB limit)
        if (file.size < 2 * 1024 * 1024) {
          validFiles.push(file);
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error!"),
            text: this.$t("Please select a file with size less than 2 MB")
          });
        }
      });

      if (validFiles.length > 0) {
        // Add valid files to attachments array
        this.form.attachments = [...this.form.attachments, ...validFiles];
      }

      // Reset the input to allow selecting the same file again
      e.target.value = '';
    },

    // remove attachment
    removeAttachment(index) {
      this.form.attachments.splice(index, 1);
    },

    // handle payment type change
    onPaymentTypeChange(value) {
      // The v-model already updates form.isPaid
      // Payment will be handled through modal after invoice creation
    },

    // Handle payment modal close
    handlePaymentModalClose() {
      this.showPaymentModal = false;
      // Redirect to invoice show page
      if (this.createdInvoiceData && this.createdInvoiceData.slug) {
        const slug = this.createdInvoiceData.slug;
        this.createdInvoiceData = null;
        this.$router.push({ name: "invoices.show", params: { slug } });
      } else {
        this.createdInvoiceData = null;
      }
    },

    // Handle payment saved
    handlePaymentSaved() {
      // Redirect to invoice show page after payment is saved
      if (this.createdInvoiceData && this.createdInvoiceData.slug) {
        this.$router.push({ name: "invoices.show", params: { slug: this.createdInvoiceData.slug } });
      }
    },

    async getTaxes() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-vat-rates"
        );
        this.taxes = data.data;

        // assign default vat rate
        if (this.taxes && this.taxes.length > 0) {
          let defaultVatRateSlug = this.appInfo.defaultVatRateSlug;
          this.form.orderTax = this.taxes.find(
            (tax) => tax.slug === defaultVatRateSlug
          ) || this.taxes[0]; // Fallback to first available tax if default not found

          // Update any existing products with the default VAT rate if they don't have one
          if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
            this.form.selectedProducts.forEach((item, index) => {
              if (!item.selectedVatRate) {
                // First try to use the product's default VAT rate, then fall back to invoice default
                if (item.productTax) {
                  item.selectedVatRate = this.findMatchingVatRate(item.productTax);
                }

                // If no match found or no productTax, fall back to invoice default
                if (!item.selectedVatRate) {
                  item.selectedVatRate = this.form.orderTax;
                }
                this.generateItemTotalPrice(index);
              }
            });
          }
        }

        this.calculateSum();
      } catch (error) {
        console.error('Error getting taxes:', error);

        // Show error toast for tax loading failures
        if (error.response?.status === 401) {
          toast.fire({
            type: "error",
            title: this.$t("Authentication Error"),
            text: this.$t("You are not authorized to view tax rates. Please log in again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 403) {
          toast.fire({
            type: "error",
            title: this.$t("Permission Error"),
            text: this.$t("You don't have permission to view tax rates."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status >= 500) {
          toast.fire({
            type: "error",
            title: this.$t("Server Error"),
            text: this.$t("Unable to load tax rates. Please try again later."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.message) {
          toast.fire({
            type: "error",
            title: this.$t("Tax Loading Error"),
            text: error.message,
            timer: 5000,
            timerProgressBar: true,
          });
        }
      }
    },

    // ensure all products have discount and VAT properties
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
          // First try to use the product's default VAT rate, then fall back to invoice default
          if (item.productTax) {
            item.selectedVatRate = this.findMatchingVatRate(item.productTax);
          }

          // If no match found or no productTax, fall back to invoice default
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

    // store product
    storeProduct(product) {
      if (product) {
        // Skip adding items without a Sales Account
        if (!product.sales_account_id) {
          // Keep it selected in dropdown and show auto-assign UI below
          return;
        }
        // Clear selectedProducts validation errors when adding a product
        this.clearFieldError('selectedProducts');

        // Clear payment field errors when products change (but don't reset addPayment selection)
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');

        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: 1,
          inventoryCount: product.inventoryCount,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.regularPrice,
          unitCost: product.regularPrice,
          totalPrice: product.regularPrice,
          productTax: product.productTax, // Store the product's default VAT rate object
          totalTax: 0, // Will be calculated below
          totalBeforeDiscount: product.regularPrice, // Will be calculated below
          totalAfterDiscount: product.regularPrice, // Will be calculated below
          itemType: product.itemType,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.productTax) || this.form.orderTax || this.taxes?.[0], // Use product's default VAT rate, fallback to invoice VAT rate or first available tax
          // Add chart of account information for validation
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id,
        });

        // Calculate initial VAT and totals for the newly added product
        const index = 0; // Since we're adding to the beginning of the array
        this.generateItemTotalPrice(index);

        this.form.product = "";
        this.calculateSum();

        // Update reactive totals
        this.updateReactiveTotals();
      }
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
      this.debugBreak();
      let item = this.form.selectedProducts[index];
      this.logDebug('generateItemTotal:start', {
        value,
        field,
        index,
        type,
        before: item ? JSON.parse(JSON.stringify(item)) : null,
      });
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

        this.logDebug('generateItemTotal:after-mutate', { index, item: JSON.parse(JSON.stringify(updatedItem)) });

        // Persist row change so Vue updates the row immediately
        this.$set(this.form.selectedProducts, index, updatedItem);

        // Recalculate all amounts (discount, price, tax, total) using unified function
        this.calculateItemAmounts(index);

        // Force update totals row specifically
        this.forceUpdateTotals();

        this.logDebug('generateItemTotal:end', {
          index,
          row: JSON.parse(JSON.stringify(this.form.selectedProducts[index]))
        });
      }
    },

    // Helper method to round to 2 decimal places
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

    // Calculate all item amounts (discount, price, tax, total) - single function for all calculations
    // Optional second parameter skipRecalculate controls whether to trigger global recalculation (calculateSum)
    // Use skipRecalculate = true when we are already inside a global recomputation to avoid recursive re-entry.
    calculateItemAmounts(index, skipRecalculate = false) {
      this.debugBreak();
      let item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }

      this.logDebug('calculateItemAmounts:start', { index, before: JSON.parse(JSON.stringify(item)) });

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

      // Ensure the selectedVatRate is properly set for VAT calculations
      let updatedItem = { ...item };
      if (!updatedItem.selectedVatRate && vatRate > 0) {
        // First try to use the product's default VAT rate, then fall back to available taxes
        if (updatedItem.productTax) {
          updatedItem.selectedVatRate = this.findMatchingVatRate(updatedItem.productTax);
        }

        // If no match found or no productTax, fall back to available taxes
        if (!updatedItem.selectedVatRate && this.taxes && this.taxes.length > 0) {
          updatedItem.selectedVatRate = this.taxes[0];
        }
      }

      // Calculate VAT base depending on transport taxability
      // CRITICAL: When transport is non-taxable, it must NOT affect item-level calculations
      // If transport is taxable: VAT base = netTotal + proportionalTransport
      // If transport is non-taxable: VAT base = netTotal (transport EXCLUDED from item calculations)
      // Use form.transportIsTaxable to respect user's choice (defaults to true for backward compatibility)
      const isTransportTaxable = this.form.transportIsTaxable !== false; // Default to true if not set

      // When transport is non-taxable, proportionalTransport should be 0 (not distributed)
      // But we explicitly exclude it to ensure clean calculation
      const transportForVatBase = isTransportTaxable
        ? proportionalTransport
        : 0;
      const vatBase = this.roundToTwoDecimals(netTotal + transportForVatBase);

      // Calculate tax and total based on tax type
      let productTax, totalTax, totalPrice;

      if (item.taxType == "Exclusive") {
        // VAT on vatBase (which includes transport only if transport is taxable)
        productTax = this.roundToTwoDecimals(vatBase * (vatRate / 100));
        totalTax = this.roundToTwoDecimals(productTax);
        // Total after VAT = vatBase + VAT
        totalPrice = this.roundToTwoDecimals(vatBase + totalTax);
      } else {
        // Inclusive: VAT is included in unit price; derive VAT from net_total
        let netUnitPrice = this.roundToTwoDecimals(qtyNumber > 0 ? (netTotal / qtyNumber) : 0);
        productTax = this.roundToTwoDecimals(netUnitPrice - (netUnitPrice / (1 + vatRate / 100)));
        totalTax = this.roundToTwoDecimals(productTax * qtyNumber);
        // Total after VAT = net_total (VAT already included, transport added at invoice level only if non-taxable)
        totalPrice = this.roundToTwoDecimals(netTotal);
      }

      // CRITICAL: When transport is non-taxable, it must NOT be included in item totals
      // Transport is only added at the invoice level (grand total) when non-taxable
      // If transport is taxable: Total = vatBase + VAT (transport already included in vatBase)
      // If transport is non-taxable: Total = vatBase + VAT (transport NOT included, added at invoice level only)
      if (!isTransportTaxable) {
        // Transport is non-taxable: EXCLUDE it from item total
        // Item total = itemAfterDiscount + itemVAT (transport added only at invoice grand total)
        // Note: vatBase already excludes transport when non-taxable, so totalPrice is correct
      }

      // Create updated item with all calculated values
      updatedItem = {
        ...updatedItem,
        discountAmount: finalDiscountAmount,
        productDiscountAmount: productDiscountAmount, // Store product-level discount separately
        proportionalDiscountAmount: proportionalDiscount, // Store proportional discount separately
        proportionalTransportAmount: proportionalTransport, // Store proportional transport separately (for reporting only)
        totalBeforeDiscount,
        // Net total after discount (before VAT, before transport)
        // Note: shipping share is stored separately in proportionalTransportAmount
        totalAfterDiscount: netTotal,
        // Net total after discount (this is what VAT is calculated on, together with shipping share)
        netTotal: netTotal,
        productTax,
        totalTax,
        totalPrice // Total after VAT (transport added at invoice level)
      };

      // Use Vue.set to ensure reactivity
      this.$set(this.form.selectedProducts, index, updatedItem);

      // Recalculate sum and update reactive totals (unless we are already in a global recomputation)
      if (!skipRecalculate) {
        this.calculateSum();
        this.updateReactiveTotals();
      }

      // Force update to ensure template re-renders
      this.$forceUpdate();

      this.logDebug('calculateItemAmounts:end', {
        index,
        row: JSON.parse(JSON.stringify(this.form.selectedProducts[index]))
      });
    },

    // calculate product discount
    calculateProductDiscount(index) {
      this.calculateItemAmounts(index);
    },

    // calculate product VAT
    calculateProductVat(index) {
      this.calculateItemAmounts(index);
    },

    // generate item total price (kept for backward compatibility, now calls calculateItemAmounts)
    generateItemTotalPrice(index) {
      this.calculateItemAmounts(index);
    },

    // remove item from array
    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }

      // Reset payment fields when products are removed
      if (this.form.selectedProducts.length === 0) {
        this.form.addPayment = 0; // Reset to 0 (No) by default
        this.form.account = "";
        this.form.paidAmount = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
        this.clearFieldError('addPayment');
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');
      }

      // Recalculate totals after removing item
      this.calculateSum();

      // Update reactive totals
      this.updateReactiveTotals();

      return;
    },

    // Handle discount input for real-time validation
    onDiscountInput() {
      // Clear any existing discount errors
      this.clearFieldError('discount');
      // Trigger calculation to update totals and validation
      this.calculateSum();
      // Force Vue to update the computed property
      this.$forceUpdate();
    },

    // calculate sum
    calculateSum() {
      this.debugBreak();
      // Update products with default VAT rate if needed
      this.updateProductsWithDefaultVatRate();

      // Update form values for consistency with computed properties
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));

      // Sync discount fields before calculations
      this.syncDiscountFields();
      
      // Global discount used ONLY for legacy invoice-level tax (orderTax)
      // NOTE: This is separate from the commercial invoice-level discount that we allocate proportionally.
      let globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          globalDiscount = this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal);
        } else {
          globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
        }
      }

      // Invoice-level tax (orderTax) computed on (subTotal - globalDiscount)
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(
          (this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)
        ));
      }

      // Total tax = product VAT + invoice-level tax
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));

      // Apply commercial invoice-level discount (for allocation only)
      // Business rule: invoice-level discount is applied on the INVOICE SUBTOTAL (sum of qty × unit_price),
      // not on a single line or on net/after-tax amounts.
      // Use the computed invoiceLevelDiscountTotal which already handles the calculation correctly
      const invoiceLevelDiscount = this.invoiceLevelDiscountTotal;

      // Update netTotal to match the computed grandTotal
      // Grand total calculation is handled by the computed property which respects transport taxability
      this.$set(this.form, 'netTotal', this.grandTotal);

      // Allocate invoice-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(invoiceLevelDiscount);

      // Allocate transport costs proportionally to items (only when transport is taxable)
      // When transport is non-taxable, it should NOT be distributed to items
      const transportCost = Number(this.form.transportCost || 0);
      this.allocateTransportCostProportionally(transportCost);

      // Recalculate all items with proportional discount and transport allocation
      this.recalculateAllItemsWithProportionalDiscount();

      // Update reactive totals for the table
      this.updateReactiveTotals();

      this.logDebug('calculateSum', {
        subTotal: this.form.subTotal,
        productTotalTax: this.form.productTotalTax,
        invoiceTax: this.form.invoiceTax,
        totalTax: this.form.totalTax,
        netTotal: this.form.netTotal,
        totalDiscount: this.form.totalDiscount,
        reactiveTotals: this.reactiveTotals,
        selectedProducts: this.form.selectedProducts.map((p, i) => ({
          i,
          qty: p.qty,
          unitPrice: p.unitPrice,
          discountAmount: p.discountAmount || 0,
          productTax: p.productTax,
          totalTax: p.totalTax,
          totalPrice: p.totalPrice,
        })),
      });
      return;
    },

    // Allocate invoice-level discount proportionally across all items based on item subtotals (qty × unit_price)
    // Business rule: invoice-level discount is NOT a line-level discount.
    // Formula: itemDiscount = (itemSubtotal / invoiceSubtotal) * invoiceDiscount
    allocateInvoiceDiscountProportionally(invoiceLevelDiscount) {
      if (!invoiceLevelDiscount || invoiceLevelDiscount <= 0) {
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

      // Allocate discount proportionally based on item subtotals
      let allocatedTotal = 0;
      this.form.selectedProducts.forEach((item, index) => {
        const itemSubtotal = itemSubtotals[index] || 0;
        let proportionalAmount = 0;

        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemDiscount = (itemSubtotal / invoiceSubtotal) * invoiceDiscount
          const proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = this.roundToTwoDecimals(invoiceLevelDiscount * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional discount amount
        this.$set(this.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      const roundingDifference = this.roundToTwoDecimals(invoiceLevelDiscount - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        const lastIndex = this.form.selectedProducts.length - 1;
        const lastItem = this.form.selectedProducts[lastIndex];
        const currentProportional = lastItem.proportionalDiscountAmount || 0;
        const adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalDiscountAmount', Math.max(0, adjusted));
      }
    },

    // Allocate transport costs proportionally across all items based on item subtotals (qty × unit_price)
    // CRITICAL: This function should ONLY be called when transport is taxable
    // When transport is non-taxable, it must NOT be distributed to items
    // Formula: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
    // Note: Transport is allocated for reporting/display purposes and included in VAT calculation (when taxable)
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

      // CRITICAL: Only allocate transport when it is taxable
      // When transport is non-taxable, it should NOT be distributed to items
      if (!this.form.transportIsTaxable) {
        // Clear all proportional transport amounts when transport is non-taxable
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

        // Store proportional transport amount (for reporting/display and VAT calculation)
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

    // Recalculate all items with proportional discount allocation (without re-entering calculateSum)
    recalculateAllItemsWithProportionalDiscount() {
      this.form.selectedProducts.forEach((item, index) => {
        // Recalculate this item to include proportional discount and transport
        // Pass skipRecalculate = true to avoid recursive global recalculation
        this.calculateItemAmounts(index, true);
      });
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

    // Update reactive totals for the table
    updateReactiveTotals() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        this.reactiveTotals.totalUnitPrice = 0;
        this.reactiveTotals.totalAfterDiscount = 0;
        this.reactiveTotals.totalDiscount = 0;
        this.reactiveTotals.productTotalTax = 0;
        this.reactiveTotals.subTotal = 0;
        return;
      }

      // Calculate totals
      this.reactiveTotals.totalUnitPrice = this.roundToTwoDecimals(this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0));

      this.reactiveTotals.totalAfterDiscount = this.roundToTwoDecimals(this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalAfterDiscount || 0);
      }, 0));

      this.reactiveTotals.totalDiscount = this.roundToTwoDecimals(this.form.selectedProducts.reduce((total, item) => {
        return total + (item.discountAmount || 0);
      }, 0));

      this.reactiveTotals.productTotalTax = this.roundToTwoDecimals(this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalTax || 0);
      }, 0));

      this.reactiveTotals.subTotal = this.roundToTwoDecimals(this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalAfterDiscount || 0) + (item.totalTax || 0);
      }, 0));

      console.log('[InvoiceCreate] updateReactiveTotals called:', this.reactiveTotals);

      // Force update to ensure template re-renders
      this.$forceUpdate();
    },

    // Methods to get totals on-demand (forces reactivity)
    getTotalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getTotalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getTotalDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getProductTotalTax() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getSubTotal() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalAfterDiscount || 0) + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Force update totals row
    forceUpdateTotals() {
      this.$forceUpdate();
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
        this.$toast.error(
          this.$t("Error!"),
          this.$t("Please select a valid thumbnail with size less than 2 MB")
        );
      }
    },

    // Sync discountType and discount to discount_type and discount_value for backend compatibility
    syncDiscountFields() {
      // Map discountType (0/1) to discount_type ("fixed"/"percentage")
      if (this.form.discountType !== null && this.form.discountType !== undefined) {
        this.form.discount_type = this.form.discountType == 1 ? 'percentage' : 'fixed';
      }
      // Map discount to discount_value
      if (this.form.discount !== null && this.form.discount !== undefined) {
        this.form.discount_value = parseFloat(this.form.discount) || 0;
      }
    },

    // save invoice
    async saveInvoice() {
      try {
        // Sync discount fields before submission
        this.syncDiscountFields();
        
        // Ensure all monetary values are properly formatted to 2 decimal places before submission
        this.formatFormValues();

        // Don't clear payment fields here - let the backend handle validation
        // The backend will ignore payment fields if addPayment is 0

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

        // VAT rate validation removed per business request

        // Payment validation removed - payment is handled through modal after invoice creation

        // NOTE: Calculation validation disabled because invoice-level discount logic
        // now differs from the original net total calculation and was blocking save.
        // If needed later, this can be re-enabled after aligning the formulas.

        // If there are validation errors, show them all and return
        if (validationErrors.length > 0) {
          this.showMultipleValidationErrors(validationErrors);
          return;
        }

        this.loading = true;

        // If attachments exist, use FormData; otherwise use regular form.post()
        if (this.form.attachments && this.form.attachments.length > 0) {
          // Create FormData for file uploads
          const formDataObj = this.form.data();
          const formData = new FormData();

          // Helper function to append values
          const appendIfDefined = (key, value) => {
            if (value !== null && value !== undefined && value !== '') {
              formData.append(key, value);
            }
          };

          // Append all form fields manually to ensure proper formatting
          appendIfDefined('reference', formDataObj.reference);
          appendIfDefined('client[id]', formDataObj.client?.id);
          appendIfDefined('transportCost', formDataObj.transportCost);
          appendIfDefined('transportIsTaxable', formDataObj.transportIsTaxable ? 1 : 0);
          appendIfDefined('subTotal', formDataObj.subTotal);
          // Sync discount fields before appending
          this.syncDiscountFields();
          
          appendIfDefined('discountType', this.form.discountType);
          appendIfDefined('discount', this.form.discount);
          appendIfDefined('poReference', formDataObj.poReference);
          appendIfDefined('paymentTerms', formDataObj.paymentTerms);
          appendIfDefined('deliveryPlace', formDataObj.deliveryPlace);
          appendIfDefined('orderTax[id]', formDataObj.orderTax?.id);
          appendIfDefined('date', formDataObj.date);
          appendIfDefined('note', formDataObj.note);
          appendIfDefined('status', formDataObj.status);
          appendIfDefined('isSendEmail', formDataObj.isSendEmail ? 1 : 0);
          appendIfDefined('isSendSMS', formDataObj.isSendSMS ? 1 : 0);
          appendIfDefined('netTotal', formDataObj.netTotal);
          appendIfDefined('cost_center_id', formDataObj.cost_center_id);
          appendIfDefined('sale_status', formDataObj.sale_status);
          appendIfDefined('representative_id', formDataObj.representative_id);
          appendIfDefined('cashier_id', formDataObj.cashier_id);
          appendIfDefined('branch_id', formDataObj.branch_id);
          appendIfDefined('current_date', formDataObj.current_date);
          appendIfDefined('isPaid', formDataObj.isPaid ? 1 : 0);

          // Append selectedProducts array
          if (Array.isArray(formDataObj.selectedProducts)) {
            formDataObj.selectedProducts.forEach((product, index) => {
              Object.keys(product).forEach(prodKey => {
                const prodValue = product[prodKey];
                if (prodValue !== null && prodValue !== undefined && prodValue !== '') {
                  // Handle nested objects in products
                  if (typeof prodValue === 'object' && !Array.isArray(prodValue) && prodValue.id) {
                    formData.append(`selectedProducts[${index}][${prodKey}][id]`, prodValue.id);
                  } else {
                    formData.append(`selectedProducts[${index}][${prodKey}]`, prodValue);
                  }
                }
              });
            });
          }

          // Append attachments using attachments[] format
          this.form.attachments.forEach((file) => {
            if (file instanceof File) {
              formData.append('attachments[]', file);
            }
          });

          // Submit using axios with FormData
          try {
            const { data } = await axios.post(
              window.location.origin + "/api/invoices",
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            );
            this.loading = false;

            if (data.success) {
              toast.fire({
                type: "success",
                title: this.$t("Success"),
                text: this.$t("Invoice created successfully"),
              });
              
              // Show journal entries creation confirmation if entries were created
              if (data.data.journal_entries_created) {
                setTimeout(() => {
                  toast.fire({
                    type: "success",
                    title: this.$t("Journal Entries Created"),
                    text: this.$t("Journal entries have been automatically created for this invoice"),
                    timer: 4000,
                    timerProgressBar: true,
                  });
                }, 500);
              }
              
              this.clearTemporaryData();
              
              // If payment type is Paid, open payment modal instead of redirecting
              if (this.form.isPaid) {
                this.createdInvoiceData = data.data;
                this.showPaymentModal = true;
              } else {
                this.$router.push({ name: "invoices.show", params: { slug: data.data.slug } });
              }
            } else {
              toast.fire({
                type: "error",
                title: this.$t("Error"),
                text: data.message,
              });
            }
          } catch (error) {
            this.loading = false;
            throw error; // Let the error handler catch it
          }
        } else {
          // No attachments, use regular form.post()
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
            
            // Show journal entries creation confirmation if entries were created
            if (data.data.journal_entries_created) {
              setTimeout(() => {
                toast.fire({
                  type: "success",
                  title: this.$t("Journal Entries Created"),
                  text: this.$t("Journal entries have been automatically created for this invoice"),
                  timer: 4000,
                  timerProgressBar: true,
                });
              }, 500);
            }
            
            this.clearTemporaryData();
            
            // If payment type is Paid, open payment modal instead of redirecting
            if (this.form.isPaid) {
              this.createdInvoiceData = data.data;
              this.showPaymentModal = true;
            } else {
              this.$router.push({ name: "invoices.show", params: { slug: data.data.slug } });
            }
          } else {
            toast.fire({
              type: "error",
              title: this.$t("Error"),
              text: data.message,
            });
          }
        }
      } catch (error) {
        this.loading = false;

        console.error('Invoice creation error:', error);

        // Handle validation errors specifically
        if (error.response?.status === 422 && error.response?.data?.errors) {
          const validationErrors = error.response.data.errors;

          // Show validation errors in toast
          Object.keys(validationErrors).forEach(field => {
            const fieldErrors = validationErrors[field];
            if (Array.isArray(fieldErrors) && fieldErrors.length > 0) {
              // Show first error for each field
              toast.fire({
                type: "error",
                title: this.$t("Validation Error"),
                text: `${this.getFieldLabel(field)}: ${fieldErrors[0]}`,
                timer: 5000,
                timerProgressBar: true,
              });
            }
          });

          // Also set form errors for inline validation display
          this.form.errors.set(validationErrors);

        } else if (error.response?.status === 400) {
          // Handle bad request errors (business logic errors)
          const errorMessage = error.response.data.message || error.response.data.error || this.$t("Bad Request Error");
          const validationErrors = error.response.data.validation_errors;
          const errorCount = error.response.data.error_count;

          // If we have multiple validation errors from the backend, show them all
          if (validationErrors && Array.isArray(validationErrors) && validationErrors.length > 0) {
            this.showBackendValidationErrors(validationErrors, errorMessage);
            return;
          }

          // Try to handle as business logic error first
          if (!this.handleBusinessLogicError(error.response.data)) {
            // If not handled by business logic handler, show generic bad request error
            toast.fire({
              type: "error",
              title: this.$t("Business Logic Error"),
              text: errorMessage,
              timer: 6000,
              timerProgressBar: true,
            });
          }

        } else if (error.response?.status === 401) {
          // Handle unauthorized errors
          toast.fire({
            type: "error",
            title: this.$t("Authentication Error"),
            text: this.$t("You are not authorized to perform this action. Please log in again."),
            timer: 5000,
            timerProgressBar: true,
          });

        } else if (error.response?.status === 403) {
          // Handle forbidden errors
          toast.fire({
            type: "error",
            title: this.$t("Permission Error"),
            text: this.$t("You don't have permission to perform this action."),
            timer: 5000,
            timerProgressBar: true,
          });

        } else if (error.response?.status === 404) {
          // Handle not found errors
          toast.fire({
            type: "error",
            title: this.$t("Resource Not Found"),
            text: this.$t("The requested resource was not found. Please check your data and try again."),
            timer: 5000,
            timerProgressBar: true,
          });

        } else if (error.response?.status === 409) {
          // Handle conflict errors
          const errorMessage = error.response.data.message || this.$t("Data Conflict Error");
          toast.fire({
            type: "error",
            title: this.$t("Data Conflict"),
            text: errorMessage,
            timer: 6000,
            timerProgressBar: true,
          });

        } else if (error.response?.status === 422) {
          // Handle other unprocessable entity errors
          const errorMessage = error.response.data.message || this.$t("Please check your input and try again.");
          toast.fire({
            type: "error",
            title: this.$t("Validation Error"),
            text: errorMessage,
            timer: 6000,
            timerProgressBar: true,
          });

        } else if (error.response?.status >= 500) {
          // Handle server errors
          const errorMessage = error.response.data.message || this.$t("Server Error");
          toast.fire({
            type: "error",
            title: this.$t("Server Error"),
            text: `${errorMessage} (${this.$t("Please try again later or contact support")})`,
            timer: 8000,
            timerProgressBar: true,
          });

        } else if (error.response?.data?.message) {
          // Handle other API error messages
          toast.fire({
            type: "error",
            title: this.$t("API Error"),
            text: error.response.data.message,
            timer: 6000,
            timerProgressBar: true,
          });

        } else if (error.message) {
          // Handle JavaScript errors
          toast.fire({
            type: "error",
            title: this.$t("JavaScript Error"),
            text: error.message,
            timer: 6000,
            timerProgressBar: true,
          });

        } else if (error.code === 'NETWORK_ERROR' || error.code === 'ECONNABORTED') {
          // Handle network errors
          toast.fire({
            type: "error",
            title: this.$t("Network Error"),
            text: this.$t("Unable to connect to the server. Please check your internet connection and try again."),
            timer: 8000,
            timerProgressBar: true,
          });

        } else {
          // Use centralized error handler for any remaining errors
          const ErrorHandler = require('~/utils/errorHandler').default;
          ErrorHandler.handleApiError(error, {
            showValidationErrors: false
          });
        }

        // Log detailed error information for debugging
        console.group('Detailed Error Information');
        console.error('Error object:', error);
        console.error('Error response:', error.response);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        console.groupEnd();
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
      this.form.invoiceTax = this.roundToTwoDecimals(Number(this.form.invoiceTax || 0));
      this.form.totalDiscount = this.roundToTwoDecimals(Number(this.form.totalDiscount));
      this.form.totalTax = this.roundToTwoDecimals(Number(this.form.totalTax));
      this.form.netTotal = this.roundToTwoDecimals(Number(this.form.netTotal));
      this.form.total_amount = this.roundToTwoDecimals(Number(this.form.netTotal));
      this.form.transportCost = this.roundToTwoDecimals(Number(this.form.transportCost || 0));
      this.form.discount = this.roundToTwoDecimals(Number(this.form.discount || 0));

      // Only format payment-related fields if addPayment is 1
      if (this.form.addPayment == 1) {
        this.form.paidAmount = this.roundToTwoDecimals(Number(this.form.paidAmount || 0));
        this.form.account = this.form.account || "";
        this.form.chequeNo = this.form.chequeNo || "";
        this.form.receiptNo = this.form.receiptNo || "";
      }

      // Ensure cost center and sale status are set
      if (this.form.costCenter && this.form.costCenter.id) {
        this.form.cost_center_id = this.form.costCenter.id;
      } else {
        this.form.cost_center_id = this.form.cost_center_id || null;
      }

      if (this.form.saleStatus) {
        this.form.sale_status = this.form.saleStatus;
      } else {
        this.form.sale_status = this.form.sale_status || null;
      }

      // Ensure representative and cashier IDs are set
      if (this.form.representative && this.form.representative.id) {
        this.form.representative_id = this.form.representative.id;
      } else {
        this.form.representative_id = this.form.representative_id || null;
      }

      if (this.form.cashier && this.form.cashier.id) {
        this.form.cashier_id = this.form.cashier.id;
      } else {
        this.form.cashier_id = this.form.cashier_id || null;
      }

      // Ensure branch ID is set
      if (this.form.branch && this.form.branch.id) {
        this.form.branch_id = this.form.branch.id;
      } else {
        this.form.branch_id = this.form.branch_id || null;
      }

      // Don't clear payment fields here - let the backend handle validation
    },

    // Validate that all calculations are mathematically correct
    validateCalculations() {
      try {
        // Validate subtotal (should match the computed subtotal which includes VAT)
        const calculatedSubTotal = this.form.selectedProducts.reduce((total, item) => {
          return total + Number(item.totalAfterDiscount || 0) + Number(item.totalTax || 0);
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

        // Validate invoice tax (skip for Saudi Arabia)
        if (!this.isSaudiArabia) {
          const calculatedInvoiceTax = this.form.orderTax && this.form.orderTax.rate
            ? this.roundToTwoDecimals((this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount))
            : 0;

          if (Math.abs(calculatedInvoiceTax - this.form.invoiceTax) > 0.01) {
            console.error('Invoice tax validation failed:', calculatedInvoiceTax, 'vs', this.form.invoiceTax);
            return false;
          }
        }

        // Validate net total
        const globalDiscount = this.form.discount > 0
          ? (this.form.discountType == 1
            ? this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal)
            : this.roundToTwoDecimals(Number(this.form.discount)))
          : 0;

        // For Saudi Arabia, skip global discount and invoice tax in net total calculation
        const calculatedNetTotal = this.isSaudiArabia
          ? this.roundToTwoDecimals(this.form.subTotal)
          : this.roundToTwoDecimals(
            this.form.subTotal - globalDiscount + this.form.invoiceTax + Number(this.form.transportCost || 0)
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

    // Validate payment fields - payment is handled through modal after invoice creation
    validatePaymentFields() {
      // Payment validation removed - payment is handled through modal after invoice creation
      return { isValid: true, errors: [] };
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
        .catch((error) => {
          const ErrorHandler = require('~/utils/errorHandler').default;
          ErrorHandler.handleApiError(error, {
            showValidationErrors: false
          });
        });
    },

    // on client change
    onClientChange() {
      // Don't process client changes during form submission
      if (this.isSubmitting) {
        return;
      }

      // Clear client validation errors when client changes
      this.clearFieldError('client');

      // Do not override user selection; keep current client even if missing chart_of_account_id
      // Validation UI will prompt auto-assign if needed

      // Payment fields are no longer used - payment is handled through modal after invoice creation
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
          const newAccountId = response.data.chart_of_account_id || (response.data.data && response.data.data.chart_of_account_id) || null;
          if (newAccountId) {
            this.form.client.chart_of_account_id = newAccountId;
            // Also update the option in items list to keep state consistent when switching clients
            const idx = this.items.findIndex(i => i.slug === currentClientSlug);
            if (idx !== -1) {
              this.$set(this.items[idx], 'chart_of_account_id', newAccountId);
            }
          }

          // Force Vue to re-render the component to update the UI
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

        // Handle different types of errors
        if (error.response?.status === 400) {
          const errorMessage = error.response.data.message || this.$t("Bad request error");
          toast.fire({
            type: "error",
            title: this.$t("Assignment Failed"),
            text: errorMessage,
            timer: 6000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 401) {
          toast.fire({
            type: "error",
            title: this.$t("Authentication Error"),
            text: this.$t("You are not authorized to perform this action. Please log in again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 403) {
          toast.fire({
            type: "error",
            title: this.$t("Permission Error"),
            text: this.$t("You don't have permission to assign Chart of Accounts."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 404) {
          toast.fire({
            type: "error",
            title: this.$t("Client Not Found"),
            text: this.$t("The client was not found. Please refresh the page and try again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status >= 500) {
          const errorMessage = error.response.data.message || this.$t("Server error");
          toast.fire({
            type: "error",
            title: this.$t("Server Error"),
            text: `${errorMessage} (${this.$t("Please try again later")})`,
            timer: 8000,
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
        } else if (error.message) {
          toast.fire({
            type: "error",
            title: this.$t("Assignment Failed"),
            text: error.message,
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



    // Helper method to get human-readable field labels
    getFieldLabel(field) {
      const fieldLabels = {
        'client': this.$t('Client'),
        'selectedProducts': this.$t('Products'),
        'orderTax': this.$t('Order Tax'),
        'netTotal': this.$t('Net Total'),
        'poReference': this.$t('PO Reference'),
        'paymentTerms': this.$t('Payment Terms'),
        'deliveryPlace': this.$t('Delivery Place'),
        'account': this.$t('Account'),
        'paidAmount': this.$t('Paid Amount'),
        'chequeNo': this.$t('Cheque Number'),
        'receiptNo': this.$t('Receipt Number'),
        'date': this.$t('Date'),
        'note': this.$t('Note'),
        'status': this.$t('Status'),
        'addPayment': this.$t('Add Payment'),
        'isSendEmail': this.$t('Send Email'),
        'isSendSMS': this.$t('Send SMS'),
        'discountType': this.$t('Discount Type'),
        'discount': this.$t('Discount'),
        'transportCost': this.$t('Transport Cost'),
        'reference': this.$t('Reference'),
      };

      return fieldLabels[field] || this.$t(field.charAt(0).toUpperCase() + field.slice(1));
    },

    // Helper method to handle specific business logic errors
    handleBusinessLogicError(errorData) {
      const { message, errors, details } = errorData;

      // Handle specific error types with more detailed matching
      if (message && message.includes('Bank Account must have a Chart of Account assigned for journal entries')) {
        toast.fire({
          type: "warning",
          title: this.$t("Bank Account Chart of Account Required"),
          text: this.$t("The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account."),
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t("Go to Bank Accounts"),
          showCancelButton: true,
          cancelButtonText: this.$t("Close"),
        }).then((result) => {
          if (result.isConfirmed) {
            // Navigate to bank accounts page
            this.$router.push({ name: 'accounts.index' });
          }
        });
        return true;
      }

      if (message && message.includes('Chart of Account')) {
        toast.fire({
          type: "warning",
          title: this.$t("Chart of Account Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true,
        });
        return true;
      }

      if (message && message.includes('Sales Account')) {
        toast.fire({
          type: "warning",
          title: this.$t("Sales Account Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true,
        });
        return true;
      }

      if (message && message.includes('VAT Account')) {
        toast.fire({
          type: "warning",
          title: this.$t("VAT Account Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true,
        });
        return true;
      }

      if (message && message.includes('Discount Allowed account')) {
        toast.fire({
          type: "warning",
          title: this.$t("Account Configuration Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true,
        });
        return true;
      }

      // Handle other business logic errors
      if (message) {
        toast.fire({
          type: "error",
          title: this.$t("Business Rule Violation"),
          text: message,
          timer: 8000,
          timerProgressBar: true,
        });
        return true;
      }

      return false;
    },

    // Reset form
    resetForm() {
      this.form.reset();
      this.form.errors.clear();
      this.form.selectedProducts = [];
      this.form.subTotal = 0;
      this.form.netTotal = 0;
      this.form.totalTax = 0;
      this.form.productTotalTax = 0;
      this.form.invoiceTax = 0;
      this.form.totalDiscount = 0;
      this.form.discount = 0;
      this.form.transportCost = "";
      this.form.orderTax = "";
      this.form.account = "";
      this.form.totalPaid = "";
      this.form.dueAmount = "";
      this.form.poReference = "";
      this.form.paymentTerms = "";
      this.form.deliveryPlace = "";
      this.form.addPayment = 0; // Reset to 0 (No) by default
      this.form.chequeNo = "";
      this.form.receiptNo = "";
      this.form.date = new Date().toISOString().slice(0, 10);
      this.form.note = "";
      this.form.status = 1;
      this.form.isSendEmail = false;
      this.form.isSendSMS = false;
      this.form.discountType = 0;
      this.form.reference = "";

      // Ensure calculations are reset
      this.calculateSum();
    },

    // Clear validation errors for a specific field
    clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },

    // Clear all payment-related validation errors
    clearPaymentErrors() {
      this.clearFieldError('account');
      this.clearFieldError('paidAmount');
      this.clearFieldError('chequeNo');
      this.clearFieldError('receiptNo');
    },

    // Clear validation errors for product fields
    clearProductErrors(index) {
      const fields = ['qty', 'unitPrice', 'discount', 'discountType', 'productTax'];
      fields.forEach(field => {
        const errorKey = `selectedProducts.${index}.${field}`;
        if (this.form.errors.has(errorKey)) {
          this.form.errors.clear(errorKey);
        }
      });
    },

    // Global error handler for any unhandled errors
    handleGlobalError(error, context = 'Unknown operation') {
      console.error(`Global error in ${context}:`, error);

      // Show a generic error toast
      toast.fire({
        type: "error",
        title: this.$t("Unexpected Error"),
        text: this.$t("Please check your input and try again."),
        timer: 6000,
        timerProgressBar: true,
      });
    },

    // Set up global error handling
    setupGlobalErrorHandling() {
      // Handle unhandled promise rejections
      this.unhandledRejectionHandler = (event) => {
        console.error('Unhandled promise rejection:', event.reason);
        this.handleGlobalError(event.reason, 'Promise rejection');
      };

      // Handle unhandled errors
      this.unhandledErrorHandler = (event) => {
        console.error('Unhandled error:', event.error);
        this.handleGlobalError(event.error, 'JavaScript error');
      };

      // Add event listeners
      window.addEventListener('unhandledrejection', this.unhandledRejectionHandler);
      window.addEventListener('error', this.unhandledErrorHandler);
    },

    // Clean up global error handlers
    cleanupGlobalErrorHandling() {
      if (this.unhandledRejectionHandler) {
        window.removeEventListener('unhandledrejection', this.unhandledRejectionHandler);
      }
      if (this.unhandledErrorHandler) {
        window.removeEventListener('error', this.unhandledErrorHandler);
      }
    },

    // Auto-assign Chart of Account for a specific product
    async autoAssignProductChartOfAccount(product, type = 'sales') {
      if (!product || this.isAutoAssigningProduct === product.id) {
        return;
      }

      this.isAutoAssigningProduct = product.id;

      try {
        const response = await this.$http.post(`/api/products/${product.slug}/${type}/auto-assign-chart-of-account`);

        if (response.data.success) {
          // Update the product data with new chart of account
          product.sales_account_id = response.data.sales_account_id;

          // If item not yet in table, add it now
          const exists = this.form.selectedProducts && this.form.selectedProducts.some(p => p.id === product.id);
          if (!exists) {
            this.storeProduct(product);
          }

          // Force Vue to re-render the component to update the UI
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
        console.error('Error auto-assigning chart of account for product:', error);

        // Handle different types of errors
        if (error.response?.status === 400) {
          const errorMessage = error.response.data.message || this.$t("Bad request error");
          toast.fire({
            type: "error",
            title: this.$t("Assignment Failed"),
            text: errorMessage,
            timer: 6000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 401) {
          toast.fire({
            type: "error",
            title: this.$t("Authentication Error"),
            text: this.$t("You are not authorized to perform this action. Please log in again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 403) {
          toast.fire({
            type: "error",
            title: this.$t("Permission Error"),
            text: this.$t("You don't have permission to assign Chart of Accounts."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status === 404) {
          toast.fire({
            type: "error",
            title: this.$t("Product Not Found"),
            text: this.$t("The product was not found. Please refresh the page and try again."),
            timer: 5000,
            timerProgressBar: true,
          });
        } else if (error.response?.status >= 500) {
          const errorMessage = error.response.data.message || this.$t("Server error");
          toast.fire({
            type: "error",
            title: this.$t("Server Error"),
            text: `${errorMessage} (${this.$t("Please try again later")})`,
            timer: 8000,
            timerProgressBar: true,
          });
        } else if (error.response?.data?.message) {
          toast.fire({
            type: "error",
            title: this.$t("Please try again or assign manually"),
            text: error.response.data.message,
            timer: 6000,
            timerProgressBar: true,
          });
        } else if (error.message) {
          toast.fire({
            type: "error",
            title: this.$t("Please try again or assign manually"),
            text: error.message,
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

    // Normalize form.client to an object from items by id/slug so v-select shows it
    normalizeClientSelection() {
      try {
        const items = this.items || [];
        if (!this.form.client || items.length === 0) {
          console.warn('[Invoice] normalizeClientSelection: No client or items list available');
          return;
        }
        const current = this.form.client;
        let matched = null;
        if (current.id) {
          matched = items.find(i => i.id === current.id);
          if (matched) {
            console.log(`[Invoice] normalizeClientSelection: Found client by ID: ${matched.name}`);
          }
        }
        if (!matched && current.slug) {
          matched = items.find(i => i.slug === current.slug);
          if (matched) {
            console.log(`[Invoice] normalizeClientSelection: Found client by slug: ${matched.name}`);
          }
        }
        if (matched) {
          this.form.client = matched;
        } else {
          console.warn(`[Invoice] normalizeClientSelection: Could not find matching client for:`, current);
        }
      } catch (e) {
        console.error('[Invoice] normalizeClientSelection error:', e);
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

    // Update all products with default VAT rate if they don't have one selected
    updateProductsWithDefaultVatRate() {
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.form.selectedProducts.forEach((item, index) => {
          if (!item.selectedVatRate) {
            // First try to use the product's default VAT rate, then fall back to invoice default
            if (item.productTax) {
              item.selectedVatRate = item.productTax;
            } else if (this.form.orderTax) {
              item.selectedVatRate = this.form.orderTax;
            } else if (this.taxes && this.taxes.length > 0) {
              item.selectedVatRate = this.taxes[0];
            }
            this.generateItemTotalPrice(index);
          }
        });
      }
    },

    // Recalculate all VAT amounts for all products
    recalculateAllVatAmounts() {
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.form.selectedProducts.forEach((item, index) => {
          this.generateItemTotalPrice(index);
        });
        this.calculateSum();
      }
    },

    // Find matching VAT rate from taxes array
    findMatchingVatRate(productTax) {
      if (!productTax || !this.taxes || this.taxes.length === 0) {
        return null;
      }

      // Try to find by ID first (most reliable)
      if (productTax.id) {
        const matchById = this.taxes.find(tax => tax.id === productTax.id);
        if (matchById) {
          return matchById;
        }
      }

      // Try to find by slug
      if (productTax.slug) {
        const matchBySlug = this.taxes.find(tax => tax.slug === productTax.slug);
        if (matchBySlug) {
          return matchBySlug;
        }
      }

      // Try to find by code
      if (productTax.code) {
        const matchByCode = this.taxes.find(tax => tax.code === productTax.code);
        if (matchByCode) {
          return matchByCode;
        }
      }

      // Try to find by rate (least reliable but fallback)
      if (productTax.rate !== undefined) {
        const matchByRate = this.taxes.find(tax => tax.rate === productTax.rate);
        if (matchByRate) {
          return matchByRate;
        }
      }

      return null;
    },

    // Show multiple validation errors in a comprehensive way
    showMultipleValidationErrors(validationErrors) {
      if (validationErrors.length === 0) return;

      // If there's only one error, show it normally
      if (validationErrors.length === 1) {
        const error = validationErrors[0];
        toast.fire({
          type: error.type,
          title: error.title,
          text: error.message,
          timer: error.timer || 6000,
          timerProgressBar: error.timerProgressBar || false,
        });
        return;
      }

      // For multiple errors, show the comprehensive summary
      this.showValidationSummary(validationErrors.map(error => error.message));
    },

    // Show detailed validation errors one by one
    showDetailedValidationErrors(validationErrors) {
      validationErrors.forEach((error, index) => {
        setTimeout(() => {
          toast.fire({
            type: error.type,
            title: error.title,
            text: error.message,
            timer: error.timer || 6000,
            timerProgressBar: error.timerProgressBar || false,
          });
        }, index * 1000); // Show each error with 1 second delay
      });
    },

    // Show backend validation errors
    showBackendValidationErrors(validationErrors, mainMessage) {
      if (validationErrors.length === 0) return;

      // If there's only one error, show it normally
      if (validationErrors.length === 1) {
        toast.fire({
          type: "warning",
          title: this.$t("Validation Error"),
          text: validationErrors[0],
          timer: 8000,
          timerProgressBar: true,
        });
        return;
      }

      // For multiple errors, show the comprehensive summary
      this.showValidationSummary(validationErrors);
    },

    // Show comprehensive validation summary
    showValidationSummary(validationErrors) {
      if (validationErrors.length === 0) return;

      // Create a formatted error list
      const errorList = validationErrors.map((error, index) => `${index + 1}. ${error}`).join('\n');

      // Show a comprehensive error message
      toast.fire({
        type: "warning",
        title: this.$t("Validation Summary"),
        html: `
          <div style="text-align: left;">
            <p><strong>${this.$t("Please fix the following issues:")}</strong></p>
            <div style="max-height: 200px; overflow-y: auto; background: #f8f9fa; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 12px; white-space: pre-line;">
              ${errorList}
            </div>
          </div>
        `,
        timer: 15000,
        timerProgressBar: true,
        showConfirmButton: true,
        confirmButtonText: this.$t("Got it"),
        showCancelButton: false,
        width: '500px',
      });
    },

    // Show payment-specific validation errors
    showPaymentValidationErrors() {
      if (this.form.addPayment != 1) {
        return;
      }

      const errors = [];

      if (!this.form.account) {
        errors.push(this.$t("Please choose a bank account for the payment."));
      }

      if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
        errors.push(this.$t("Paid amount must be greater than 0."));
      }

      if (errors.length > 0) {
        toast.fire({
          type: "warning",
          title: this.$t("Payment Information Required"),
          html: `
            <div style="text-align: left;">
              <p><strong>${this.$t("Please provide the following payment information:")}</strong></p>
              <ul style="margin: 10px 0; padding-left: 20px;">
                ${errors.map(error => `<li>${error}</li>`).join('')}
              </ul>
            </div>
          `,
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t("Got it"),
          showCancelButton: false,
          width: '450px',
        });
      }
    },

    // Validate form before submission to show payment errors in toast
    validateFormBeforeSubmit(event) {
      // If payment is enabled, validate payment fields first
      if (this.form.addPayment == 1) {
        const paymentValidation = this.validatePaymentFields();
        if (!paymentValidation.isValid) {
          event.preventDefault();
          this.showPaymentValidationErrors();
          return false;
        }
      }

      // If all validations pass, allow form submission
      return true;
    },

    // Handle form submission with payment validation
    async handleFormSubmit(event) {
      // Set submitting flag to prevent field resets
      this.isSubmitting = true;

      try {
        // Validate discount doesn't exceed invoice total
        if (this.isDiscountExceedingTotal) {
          event.preventDefault();
          toast.fire({
            type: "error",
            title: this.$t("Validation Error"),
            text: this.$t("Discount amount cannot exceed the invoice total amount"),
            timer: 5000,
            timerProgressBar: true,
          });
          return;
        }

        // Validate payment fields first if payment is enabled
        if (this.form.addPayment == 1) {
          const paymentValidation = this.validatePaymentFields();
          if (!paymentValidation.isValid) {
            event.preventDefault();
            this.showPaymentValidationErrors();
            return;
          }
        }

        // If payment validation passes, proceed with invoice creation
        await this.saveInvoice();
      } finally {
        // Reset submitting flag
        this.isSubmitting = false;
      }
    },



    // on account change
    onAccountChange() {
      // Don't process account changes during form submission
      if (this.isSubmitting) {
        return;
      }

      // Clear any previous validation errors
      this.clearFieldError('account');

      // If an account is selected, clear any existing errors
      if (this.form.account) {
        this.form.errors.clear('account');
      }

      // Only reset payment fields if this is a genuine account change (not during form submission)
      // Check if the account actually changed to a different one
      if (this.form.account && this.form.addPayment == 1) {
        // Validate that the selected bank account has a chart of account assigned
        if (!this.form.account.chartOfAccountId) {
          toast.fire({
            type: "warning",
            title: this.$t("Bank Account Chart of Account Required"),
            text: this.$t("The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account."),
            timer: 8000,
            timerProgressBar: true,
            showConfirmButton: true,
            confirmButtonText: this.$t("Go to Bank Accounts"),
            showCancelButton: true,
            cancelButtonText: this.$t("Close"),
          }).then((result) => {
            if (result.isConfirmed) {
              // Navigate to bank accounts page
              this.$router.push({ name: 'accounts.index' });
            }
          });
        }
      }

      this.calculateSum();
    },

    // Navigate to bank accounts page
    goToBankAccounts() {
      this.$router.push({ name: 'accounts.index' });
    },

    // Handle add payment change
    onAddPaymentChange() {
      this.clearFieldError('addPayment');

      if (this.form.addPayment != 1) {
        // Payment was disabled, clear related field errors and reset payment fields
        this.form.paidAmount = "";
        this.form.account = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');
      } else {
        // Payment was enabled, clear any previous payment field errors
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');
      }
    },

    // Handle paid amount change
    onPaidAmountChange() {
      // Clear any previous validation errors immediately
      this.clearFieldError('paidAmount');

      // If user is typing and the amount is valid, clear any errors
      if (this.form.paidAmount && Number(this.form.paidAmount) > 0) {
        // Clear any existing errors since the field is now valid
        this.form.errors.clear('paidAmount');
      }

      // Validate that paid amount is greater than 0
      if (this.form.paidAmount && Number(this.form.paidAmount) <= 0) {
        this.form.errors.set('paidAmount', this.$t('Paid amount must be greater than 0'));
        return;
      }

      // Validate that paid amount doesn't exceed net total
      if (this.form.paidAmount && Number(this.form.paidAmount) > Number(this.form.netTotal)) {
        this.form.errors.set('paidAmount', this.$t('Paid amount cannot exceed the net total'));
      }
    },

    // save form data temporarily
    saveTemporary() {
      const tempData = {
        invoiceNo: this.form.invoiceNo,
        client: this.form.client,
        reference: this.form.reference,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        transportIsTaxable: this.form.transportIsTaxable,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        discountType: this.form.discountType,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        addPayment: this.form.addPayment,
        account: this.form.account,
        paidAmount: this.form.paidAmount,
        paymentMethod: this.form.paymentMethod,
        chequeNo: this.form.chequeNo,
        receiptNo: this.form.receiptNo,
        deliveryPlace: this.form.deliveryPlace,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        costCenter: this.form.costCenter,
        cost_center_id: this.form.cost_center_id,
        saleStatus: this.form.saleStatus,
        sale_status: this.form.sale_status,
        representative: this.form.representative,
        representative_id: this.form.representative_id,
        cashier: this.form.cashier,
        cashier_id: this.form.cashier_id,
        branch: this.form.branch,
        branch_id: this.form.branch_id,
        current_date: this.form.current_date,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('invoiceTempData', JSON.stringify(tempData))

    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('invoiceTempData')
      if (tempData) {
        try {
          const data = JSON.parse(tempData)
          this.form.invoiceNo = data.invoiceNo || ''
          this.form.client = data.client || this.form.client
          this.form.reference = data.reference || this.form.reference
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts
          this.form.subTotal = data.subTotal || this.form.subTotal
          this.form.netTotal = data.netTotal || this.form.netTotal
          this.form.transportCost = data.transportCost || this.form.transportCost
          this.form.transportIsTaxable = data.transportIsTaxable !== undefined ? data.transportIsTaxable : this.form.transportIsTaxable
          this.form.orderTax = data.orderTax || this.form.orderTax
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax
          this.form.totalTax = data.totalTax || this.form.totalTax
          this.form.discount = data.discount || this.form.discount
          this.form.discountType = data.discountType || this.form.discountType
          this.form.poReference = data.poReference || this.form.poReference
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms
          this.form.addPayment = data.addPayment || this.form.addPayment
          this.form.account = data.account || this.form.account
          this.form.paidAmount = data.paidAmount || this.form.paidAmount
          this.form.paymentMethod = data.paymentMethod || this.form.paymentMethod
          this.form.chequeNo = data.chequeNo || this.form.chequeNo
          this.form.receiptNo = data.receiptNo || this.form.receiptNo
          this.form.deliveryPlace = data.deliveryPlace || this.form.deliveryPlace
          this.form.date = data.date || this.form.date
          this.form.note = data.note || this.form.note
          this.form.status = data.status !== undefined ? data.status : this.form.status
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS
          this.form.costCenter = data.costCenter || this.form.costCenter
          this.form.cost_center_id = data.cost_center_id || this.form.cost_center_id
          this.form.saleStatus = data.saleStatus || this.form.saleStatus
          this.form.sale_status = data.sale_status || this.form.sale_status
          this.form.representative = data.representative || this.form.representative
          this.form.representative_id = data.representative_id || this.form.representative_id
          this.form.cashier = data.cashier || this.form.cashier
          this.form.cashier_id = data.cashier_id || this.form.cashier_id
          this.form.branch = data.branch || this.form.branch
          this.form.branch_id = data.branch_id || this.form.branch_id
          this.form.current_date = data.current_date || new Date().toISOString().slice(0, 10)

          // Sync sale status
          if (this.form.saleStatus) {
            this.form.sale_status = this.form.saleStatus;
          }

          // Sync representative, cashier, and branch IDs
          if (this.form.representative && this.form.representative.id) {
            this.form.representative_id = this.form.representative.id;
          }
          if (this.form.cashier && this.form.cashier.id) {
            this.form.cashier_id = this.form.cashier.id;
          }
          if (this.form.branch && this.form.branch.id) {
            this.form.branch_id = this.form.branch.id;
          }

          // One-time restore: clear after successful load so a refresh doesn't restore again
          this.clearTemporaryData();

          // Ensure product fields exist and recalculate totals after restore
          this.ensureDiscountProperties();
          this.calculateSum();

          // Attempt to refresh inventory counts in case stock changed while away
          this.refreshSelectedProductsInventory();

          // Normalize client selection to list option so v-select shows it
          this.normalizeClientSelection();
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('invoiceTempData');
    },
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
}

/* Improved warning and success styles */
.chart-account-warning,
.chart-account-success {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

/* Remove padding for button-plus icon-shape icon-sm btn-primary elements */
.button-plus.icon-shape.icon-sm.btn-primary {
  padding: 0;
}

.btn-primary {
  background: #2AB930 !important;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
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

/* Debug Panel Styles */
.debug-panel {
  border: 2px solid #ffc107;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 193, 7, 0.2);
  display: none;
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
  border: 1px solid #dee2e6;
  border-radius: 4px;
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

.btn-outline-warning:hover {
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
}

.btn-outline-warning:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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

/* Account status styles */
.account-status {
  font-size: 13px;
}

.account-warning,
.account-success {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: 500;
}

.account-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.account-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

/* Horizontal radio button group */
.radio-group-horizontal {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.radio-group-horizontal .form-check {
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.radio-group-horizontal .form-check-input {
  margin-right: 8px;
}

.radio-group-horizontal .form-check-label {
  margin-bottom: 0;
  cursor: pointer;
}

/* Payment validation warning styles */
.text-warning {
  color: #856404 !important;
}

.text-warning small {
  font-size: 12px;
  font-weight: 500;
}

.text-warning i {
  margin-right: 4px;
}

.table-custom {
  border: none !important;
}

.invoices-create-table {
  border-collapse: separate;
  border-spacing: 0;
}

.invoices-create-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.invoices-create-table thead tr {
  border: none !important;
}

.invoices-create-table thead th:first-child {
  border-top-left-radius: 10px;
}

.invoices-create-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .invoices-create-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-create-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

/* Summary Footer Styles */
.summary-footer-wrapper {
  margin-top: 10px;
}

/* Horizontal Summary Card Styles - Matching Quotation Page */
.summary-card-horizontal {
  padding: 12px 15px;
}

.summary-row-horizontal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  flex: 1;
  min-width: 100px;
}

.summary-item-label {
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.summary-item-value {
  font-size: 14px;
  color: #111827;
  font-weight: 600;
  text-align: center;
}

.summary-item-discount .summary-item-value {
  color: #dc2626;
}

.summary-item-total {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 6px;
  padding: 8px 15px;
  margin: 0 -5px;
}

.summary-item-total .summary-item-label {
  color: #1e40af;
  font-weight: 600;
  font-size: 12px;
}

.summary-item-total .summary-item-value {
  color: #33a0d9;
  font-size: 16px;
  font-weight: 700;
}

.summary-divider {
  width: 1px;
  height: 40px;
  background-color: #e5e7eb;
  flex-shrink: 0;
}

.summary-divider-bold {
  width: 2px;
  background-color: #33a0d9;
  height: 50px;
}

/* RTL Support for Horizontal Summary */
[dir="rtl"] .summary-item {
  direction: rtl;
}

/* Responsive Horizontal Summary */
@media (max-width: 992px) {
  .summary-row-horizontal {
    flex-wrap: wrap;
    justify-content: center;
  }

  .summary-item {
    min-width: 80px;
    padding: 0 8px;
  }

  .summary-divider {
    display: none;
  }
}

@media (max-width: 768px) {
  .summary-card-horizontal {
    padding: 10px 12px;
  }

  .summary-item {
    min-width: 70px;
    padding: 0 6px;
  }

  .summary-item-label {
    font-size: 10px;
  }

  .summary-item-value {
    font-size: 13px;
  }

  .summary-item-total {
    width: 100%;
    margin: 8px 0 0 0;
    padding: 10px;
  }

  .summary-item-total .summary-item-value {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .summary-card-horizontal {
    border-radius: 6px;
  }

  .summary-item {
    min-width: 60px;
    padding: 0 4px;
  }

  .summary-item-label {
    font-size: 9px;
  }

  .summary-item-value {
    font-size: 12px;
  }
}

.summary-footer-row {
  background-color: #f8f9fa;
  border-top: 2px solid #dee2e6;
}

.summary-footer-row:last-child {
  border-bottom: 2px solid #dee2e6;
}

.summary-label {
  padding: 12px 16px;
  font-size: 14px;
  color: #495057;
}

.summary-value {
  padding: 12px 16px;
  font-size: 14px;
  color: #212529;
  text-align: left;
}

.grand-total-row {
  background-color: #e9ecef;
  border-top: 3px solid #33a0d9;
}

.grand-total-value {
  font-size: 16px;
  color: #33a0d9;
}

/* RTL Support for Summary Footer */
[dir="rtl"] .summary-label {
  text-align: left;
}

[dir="rtl"] .summary-value {
  text-align: right;
}

/* Responsive Summary Footer */
@media (max-width: 768px) {
  .summary-label,
  .summary-value {
    padding: 8px 12px;
    font-size: 12px;
  }

  .grand-total-value {
    font-size: 14px;
  }
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
.invoices-create-table .badge.badge-danger {
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

/* Quantity Field Styling */
.quantity-field {
  border-radius: 0 !important;
  min-height: 50px !important;
  margin: 0 !important;
  text-align: center;
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

/* Stock Warning Alert Styling */
.stock-warning-alert {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.stock-warning-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.stock-warning-icon {
  font-size: 24px;
  color: #856404;
  flex-shrink: 0;
  margin-top: 2px;
}

.stock-warning-text {
  flex-grow: 1;
}

.stock-warning-title {
  margin: 0 0 8px 0;
  font-weight: 600;
  font-size: 16px;
  color: #856404;
}

.stock-warning-description {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #856404;
  opacity: 0.9;
}

.stock-warning-list {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}

.stock-warning-item {
  margin-bottom: 8px;
  padding: 8px 12px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  border-left: 3px solid #ffc107;
  font-size: 14px;
  color: #856404;
}

.stock-warning-item:last-child {
  margin-bottom: 0;
}

.product-name {
  font-weight: 600;
  color: #856404;
  margin-right: 8px;
}

.stock-details {
  color: #856404;
  opacity: 0.8;
}

.stock-details strong {
  color: #856404;
  font-weight: 600;
}

/* RTL Support for Arabic */
[dir="rtl"] .stock-warning-list {
  padding-left: 0;
  padding-right: 20px;
}

[dir="rtl"] .stock-warning-item {
  border-left: none;
  border-right: 3px solid #ffc107;
}

[dir="rtl"] .product-name {
  margin-right: 0;
  margin-left: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .stock-warning-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .stock-warning-icon {
    align-self: center;
  }

  .stock-warning-list {
    padding-left: 0;
    text-align: left;
  }

  [dir="rtl"] .stock-warning-list {
    text-align: right;
  }
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
  margin: 0 5px;
}

.insufficient-stock-input:focus {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
}

.custom-qty-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-qty-input input.button-plus,
.custom-qty-input input.button-minus {
  margin: 0 5px;
}

.fixed-qty-column {
  text-align: center;
}

/* Enhanced Product Option Display */
.product-option {
  padding: 8px 12px;
  border-bottom: 1px solid #e9ecef;
}

.product-option:last-child {
  border-bottom: none;
}

.product-option-header {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  flex-wrap: wrap;
  gap: 6px;
}

.product-option-header strong {
  color: #333;
  font-size: 14px;
  font-weight: 600;
}

.product-code {
  color: #6c757d;
  font-size: 12px;
  font-weight: 500;
}

.product-option-details {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12px;
  color: #6c757d;
  margin-top: 4px;
}

.product-detail-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.product-detail-item i {
  color: #33a0d9;
  font-size: 11px;
}

.badge-sm {
  font-size: 10px;
  padding: 2px 6px;
  font-weight: 500;
}

.badge-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

/* Hover effect for product options */
.v-select .vs__dropdown-option:hover .product-option {
  background-color: #f8f9fa;
}

/* Selected option styling */
.v-select .vs__dropdown-option--selected .product-option {
  background-color: #e3f2fd;
}

/* Summary Card Styles */
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

/* Transport Taxability Card Styles */
.transport-taxability-card {
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.transport-taxability-card:hover {
  border-color: #33a0d9;
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.1);
}

.transport-taxability-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f3f4f6;
}

.transport-taxability-header i {
  font-size: 20px;
  margin-right: 8px;
}

.transport-taxability-title {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.transport-taxability-body {
  padding-top: 8px;
}

/* Custom Checkbox Styling */
.custom-checkbox-wrapper {
  position: relative;
  margin-bottom: 12px;
}

.custom-checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.custom-checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 8px 0;
  transition: all 0.2s ease;
}

.custom-checkbox-label:hover {
  color: #33a0d9;
}

.checkbox-indicator {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 2px solid #d1d5db;
  border-radius: 6px;
  background-color: #ffffff;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.custom-checkbox-input:checked ~ .custom-checkbox-label .checkbox-indicator {
  background-color: #33a0d9;
  border-color: #33a0d9;
}

.custom-checkbox-input:checked
  ~ .custom-checkbox-label
  .checkbox-indicator::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox-input:focus ~ .custom-checkbox-label .checkbox-indicator {
  box-shadow: 0 0 0 3px rgba(51, 160, 217, 0.1);
}

.checkbox-text {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  line-height: 1.5;
}

.custom-checkbox-input:checked ~ .custom-checkbox-label .checkbox-text {
  color: #33a0d9;
  font-weight: 600;
}

.transport-taxability-description {
  display: flex;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
  margin-top: 8px;
  transition: all 0.2s ease;
}

.transport-taxability-description i {
  margin-top: 2px;
  flex-shrink: 0;
}

.description-taxable {
  background-color: #ecfdf5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.description-taxable i {
  color: #10b981;
}

.description-non-taxable {
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #fde68a;
}

.description-non-taxable i {
  color: #f59e0b;
}

/* RTL Support for Transport Taxability */
[dir="rtl"] .transport-taxability-header i {
  margin-right: 0;
  margin-left: 8px;
}

[dir="rtl"] .checkbox-indicator {
  margin-right: 0;
  margin-left: 12px;
}

[dir="rtl"] .transport-taxability-description i {
  margin-right: 0;
  margin-left: 8px;
}

/* Responsive Transport Taxability */
@media (max-width: 768px) {
  .transport-taxability-card {
    padding: 12px;
    margin-top: 0.5rem;
  }

  .transport-taxability-header {
    margin-bottom: 10px;
    padding-bottom: 8px;
  }

  .transport-taxability-title {
    font-size: 13px;
  }

  .checkbox-indicator {
    width: 22px;
    height: 22px;
  }

  .custom-checkbox-input:checked
    ~ .custom-checkbox-label
    .checkbox-indicator::after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
  }

  .checkbox-text {
    font-size: 13px;
  }

  .transport-taxability-description {
    font-size: 12px;
    padding: 8px 10px;
  }
}

/* Read-only Field Styling */
.readonly-field {
  background-color: #f8f9fa !important;
  border-color: #dee2e6 !important;
  color: #6c757d !important;
  cursor: not-allowed !important;
  font-weight: 500;
}

.readonly-field:focus {
  background-color: #f8f9fa !important;
  border-color: #dee2e6 !important;
  box-shadow: none !important;
  outline: none !important;
}

/* Amount Field Size Reduction */
#total_amount {
  max-width: 200px;
}

@media (max-width: 768px) {
  #total_amount {
    max-width: 100%;
  }
}

/* Discount, Shipping Cost, and Amount Row Styling */
.form-group.col-md-4 {
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .form-group.col-md-4 {
    margin-bottom: 0;
  }
  
  /* Ensure proper alignment in the three-column layout */
  .form-group.col-md-4:first-child {
    padding-right: 15px;
  }
  
  .form-group.col-md-4:nth-child(2) {
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
  
  .form-group.col-md-4:last-child {
    padding-left: 15px;
  }
}

/* Responsive adjustments for the three-column layout */
@media (max-width: 991px) {
  .form-group.col-md-4 {
    margin-bottom: 1rem;
  }
  
  .form-group.col-md-4:first-child,
  .form-group.col-md-4:nth-child(2),
  .form-group.col-md-4:last-child {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>