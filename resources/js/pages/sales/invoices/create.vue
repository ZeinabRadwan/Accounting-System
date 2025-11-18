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
                <router-link :to="{ name: 'invoices.index' }" class="btn btn-info">
                  <template v-if="isRTL">
                    {{ $t("Back") }} <i class="fas fa-long-arrow-alt-left" />
                  </template>
                  <template v-else>
                    <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                      {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

                    </template>

                    <template v-else>

                      <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                        {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                      </template>


                      <template v-else>


                        <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                      </template>

                    </template>
                  </template>
                </router-link>
                <button type="submit" class="btn btn-success" :form="'invoiceCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          
          <div class="card-body">
            <!-- Add the missing form element with submit handler -->
            <form id="invoiceCreateForm" @submit.prevent="handleFormSubmit">
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
                      :placeholder="$t('Enter reference')" @input="clearFieldError('reference')" />
                    <has-error :form="form" field="reference" />
                  </div>
                </div>

              <div class="row" v-if="products">
                <div class="form-group col-md-6">
                  <label for="product">{{ $t("Select Items") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.product" :options="products" label="label" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }" name="product" :placeholder="$t('Search Items')"
                          @input="storeProduct(form.product)" />
                        <ProductCreateModal @reloadProducts="getProducts" @productCreated="handleProductCreated">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </div>
                      
                      <!-- Product Chart of Account Status - Similar to client validation -->
                      <div class="product-status mt-2" v-if="form.product">
                        <div v-if="!form.product.sales_account_id" class="product-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.product.name }}" {{ $t('needs Sales Account') }}</span>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-outline-warning ml-2"
                            @click="autoAssignProductChartOfAccount(form.product, 'sales')"
                            :disabled="isAutoAssigningProduct === form.product.id"
                          >
                            <i :class="isAutoAssigningProduct === form.product.id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                            {{ isAutoAssigningProduct === form.product.id ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                        </div>
                        <div v-else-if="!form.product.productTax || !form.product.productTax.id" class="product-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.product.name }}" {{ $t('needs VAT Rate') }}</span>
                        </div>
                        <div v-else-if="form.selectedProducts && form.selectedProducts.length > 0 && form.selectedProducts[0].sales_account_id" class="product-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('Sales Account ready') }}</span>
                        </div>
                      </div>
                      
                      <has-error :form="form" field="selectedProducts" />
                      <div v-if="!form.selectedProducts || form.selectedProducts.length === 0" class="text-warning mt-1">
                        <small><i class="fas fa-exclamation-triangle"></i> {{ $t('At least one product must be selected') }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ItemsTable
                :items="form.selectedProducts"
                :prefix="prefix"
                :taxes="taxes"
                :form-errors="form.errors"
                :total-unit-price="totalUnitPrice"
                :total-product-discount="totalProductDiscount"
                :total-after-discount="totalAfterDiscount"
                :total-product-tax="totalProductTax"
                :subtotal="subtotal"
                :amount-in-words="toWord()"
                table-class="invoices-create-table"
                @item-change="handleItemChange"
                @discount-change="calculateProductDiscount"
                @vat-change="calculateProductVat"
                @remove-item="removeItem"
                @open-stock-modal="openStockAdjustmentModal"
                @edit-product="editProductFromTable"
              />
                              
              <!-- Insufficient Stock Warning -->
              <div v-if="hasInsufficientStock" class="row mt-3 mb-3">
                <div class="col-12">
                  <div class="alert alert-warning d-flex align-items-center" role="alert">
                    <i class="fas fa-exclamation-triangle mr-3" style="font-size: 1.5rem;"></i>
                    <div class="flex-grow-1">
                      <h6 class="mb-1">{{ $t("Insufficient Stock Alert") }}</h6>
                      <p class="mb-0">
                        {{ $t("Some products have insufficient stock. Click on the red badges to manage stock levels.") }}
                        <button type="button" class="btn btn-sm btn-outline-warning ml-2" @click="showAllInsufficientStock">
                          <i class="fas fa-list mr-1"></i>
                          {{ $t("View All") }}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Discount and Tax Section -->
              <div class="row">
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="discountType">{{ $t("Discount Type") }}</label>
                  <select id="discountType" v-model="form.discountType" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType"
                    @change="calculateSum; clearFieldError('discountType')" @keyup="calculateSum">
                    <option value="0">{{ $t("Fixed") }}</option>
                    <option value="1">{{ $t("Percentage") }}(%)</option>
                  </select>
                  <has-error :form="form" field="discountType" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="discount">{{ $t("Discount") }}
                    <span v-if="form.discountType == 1">(%)</span></label>
                  <div class="input-group">
                    <input id="discount" v-model="form.discount" type="number" step="any" min="0"
                      :max="form.discountType == 1 ? 100 : form.subTotal" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                      :placeholder="$t('Enter discount')" @change="calculateSum" @keyup="calculateSum" @input="clearFieldError('discount')" />
                    <div v-if="form.discountType == 1" class="input-group-append">
                      <span class="input-group-text">{{
                        form.totalDiscount }}<span class="saudi-riyal">ê</span></span>
                    </div>
                  </div>
                  <has-error :form="form" field="discount" />
                </div>
                                 <div class="form-group col-md-4" v-if="!isSaudiArabia">
                   <label for="transportCost">{{
                     $t("Transport Cost")
                   }}</label>
                   <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="0"
                     class="form-control" name="transportCost"
                     :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" @input="clearFieldError('transportCost')" />
                 </div>
              </div>

              <div class="row">
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-2">
                  <label for="orderTax">{{ $t("Invoice Tax") }}
                    <span class="required">*</span></label>
                                     <v-select v-model="form.orderTax" :options="taxes" label="code"
                     :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax" placeholder="Select a tax type"
                     @input="calculateSum(); clearFieldError('orderTax')" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div class="form-group col-md-2" v-if="!isSaudiArabia">
                  <label for="totalDiscount">{{ $t("Product Discounts") }}</label>
                  <input id="totalDiscount" v-model="form.totalDiscount" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalDiscount') }" name="totalDiscount" readonly />
                  <has-error :form="form" field="totalDiscount" />
                </div>
                <div class="form-group col-md-2" v-if="!isSaudiArabia">
                  <label for="globalDiscount">{{ $t("Global Discount") }}</label>
                  <input id="globalDiscount" v-model="globalDiscountDisplay" type="text" class="form-control" readonly />
                </div>
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-3">
                  <label for="totalTax">{{ $t("Total Tax") }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group col-md-3" v-if="!isSaudiArabia">
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
                    :placeholder="$t('Enter PO reference')" @input="clearFieldError('poReference')" />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-4">
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
                  <select id="addPayment" 
                          v-model="form.addPayment" 
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('addPayment') }"
                          @change="onAddPaymentChange">
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
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="goToBankAccounts"
                      >
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
                  <label for="paidAmount">{{ $t("Paid Amount")
                  }}<span class="required">*</span></label>
                  <input id="paidAmount" v-model="form.paidAmount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paidAmount') }" name="paidAmount" min="1"
                    :max="form.netTotal" :placeholder="$t('Enter an amount')" @input="onPaidAmountChange" />
                  <has-error :form="form" field="paidAmount" />
                  
                  <!-- Payment validation hint -->
                  <div v-if="form.addPayment == 1 && (!form.paidAmount || Number(form.paidAmount) <= 0)" class="text-warning mt-1">
                    <small><i class="fas fa-exclamation-triangle"></i> {{ $t("Paid amount must be greater than 0") }}</small>
                  </div>
                  
                  <!-- Due Amount Display -->
                  <div class="mt-2" v-if="form.addPayment == 1 && form.paidAmount">
                    <small class="text-muted">
                      {{ $t("Due Amount") }}: <strong>{{ dueAmount  }} <span class="saudi-riyal">ê</span></strong>
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
                <div class="form-group col-md-4">
                  <label for="deliveryPlace">{{
                    $t("Delivery Place")
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" @input="clearFieldError('deliveryPlace')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-md-4">
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

              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" @input="clearFieldError('note')" />
                <has-error :form="form" field="note" />
              </div>

              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5 d-flex align-items-center">
                  <toggle-button 
                    v-model="form.isSendEmail" 
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
                  <toggle-button 
                    v-model="form.isSendSMS" 
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
                      {{ form.busy ? $t("Saving...") : $t("Save") }}
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
    <ProductEditModal 
      ref="productEditModal"
      @reloadProducts="getProducts"
      @productUpdated="handleProductUpdated"
    />
    
    <!-- Stock Adjustment Modal -->
    <StockAdjustmentModal 
      :is-open="showStockAdjustmentModal"
      :product="selectedProductForStockAdjustment"
      @close="closeStockAdjustmentModal"
      @adjust-quantity="adjustProductQuantity"
      @persist="saveTemporary"
      @stock-updated="handleStockUpdated"
    />
    
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
              <div v-for="(item, index) in form.selectedProducts" :key="index" class="debug-item mb-3 p-3 border rounded">
                <div class="font-weight-bold text-dark mb-2">{{ item.name }}</div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="debug-step">
                      <strong>Subtotal:</strong> {{ formatToTwoDecimals(item.unitPrice) }} × {{ item.qty }} = {{ formatToTwoDecimals((Number(item.unitPrice)||0) * (Number(item.qty)||0)) }}
                    </div>
                    <div class="debug-step">
                      <strong>Discount:</strong> {{ formatToTwoDecimals(item.discountAmount || 0) }}
                    </div>
                    <div class="debug-step">
                      <strong>After Discount:</strong> {{ formatToTwoDecimals(((Number(item.unitPrice)||0) * (Number(item.qty)||0)) - (item.discountAmount || 0)) }}
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
                  <span :class="formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.netTotal) ? 'text-success' : 'text-danger'">
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
                        <span :class="formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.subTotal) ? 'text-success' : 'text-danger'">
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
                      <td>After Discount</td>
                      <td>{{ formatToTwoDecimals(totalAfterDiscount) }}</td>
                      <td>{{ formatToTwoDecimals(form.subTotal - (form.productTotalTax + (form.invoiceTax || 0))) }}</td>
                      <td>{{ formatToTwoDecimals(totalAfterDiscount) }}</td>
                      <td>
                        <span :class="formatToTwoDecimals(totalAfterDiscount) === formatToTwoDecimals(form.subTotal - (form.productTotalTax + (form.invoiceTax || 0))) ? 'text-success' : 'text-danger'">
                          {{ formatToTwoDecimals(totalAfterDiscount) === formatToTwoDecimals(form.subTotal - (form.productTotalTax + (form.invoiceTax || 0))) ? '✅' : '❌' }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td>{{ formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) }}</td>
                      <td>{{ formatToTwoDecimals(form.totalTax) }}</td>
                      <td>{{ formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) }}</td>
                      <td>
                        <span :class="formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) === formatToTwoDecimals(form.totalTax) ? 'text-success' : 'text-danger'">
                          {{ formatToTwoDecimals(totalProductTax + (form.invoiceTax || 0)) === formatToTwoDecimals(form.totalTax) ? '✅' : '❌' }}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Final Total</td>
                      <td>{{ formatToTwoDecimals(subtotal) }}</td>
                      <td>{{ formatToTwoDecimals(form.netTotal) }}</td>
                      <td>{{ formatToTwoDecimals(subtotal) }}</td>
                      <td>
                        <span :class="formatToTwoDecimals(subtotal) === formatToTwoDecimals(form.netTotal) ? 'text-success' : 'text-danger'">
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
         orderTax: "",
         totalTax: 0,
         productTotalTax: 0,
         invoiceTax: 0, // Add this field for Invoice Tax calculation
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
       }),
      products: [],
      accounts: [],
      taxes: [],
      prefix: "",
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
    
    // Calculate subtotal (reactive) - WITH VAT for invoices (matching quotation logic)
    subtotal() {
      return this.roundToTwoDecimals(this.totalAfterDiscount + this.totalProductTax);
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
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  mounted() {
    // Set up global error handling
    this.setupGlobalErrorHandling();
    // Load temporary data
    this.loadTemporaryData();
    
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
      } catch (e) {}
    },
    debugBreak() {
      try {
        if (typeof window !== 'undefined' && window.__INVOICE_DEBUGGER) {
          debugger; // eslint-disable-line no-debugger
        }
      } catch (e) {}
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
        await this.$store.dispatch("operations/allData", {
          path: "/api/all-clients",
        });

        // Wait for store to update
        await this.$nextTick();

        // Verify that items are actually clients (not categories or other data)
        // Clients should have properties like 'name', 'slug', and typically 'clientTotalAdvance' or 'email'
        // Categories would have different structure (e.g., 'sub_categories', 'note' as category-specific)
        const items = this.items || [];
        
        // Check if items look like clients
        // Clients typically have: name, slug, and may have clientTotalAdvance, email, phone
        // Categories typically have: name, slug, but may have sub_categories or different structure
        const areClients = items.length === 0 || items.some(item => {
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

        if (!areClients && items.length > 0) {
          // If items don't look like clients, force reload
          console.warn('Items do not appear to be clients, force reloading clients...');
          // Clear the store first
          this.$store.commit('operations/FETCH_DATA', { items: { data: [] }, loading: false });
          // Then reload
          await this.$store.dispatch("operations/allData", {
            path: "/api/all-clients",
          });
          await this.$nextTick();
        }

        if (!this.items || this.items.length === 0) return;

        // If explicitly requesting latest (e.g., after creating a client)
        if (selectedClient === 'latest') {
          this.form.client = this.items[0];
          return;
        }

        // If a client was restored from temp or already selected, normalize to an option from items
        if (this.form.client && (this.form.client.id || this.form.client.slug)) {
          this.normalizeClientSelection();
          return;
        }

        // Otherwise, assign default client
        if (this.items && this.items.length > 0) {
          let defaultClientSlug = this.appInfo.defaultClientSlug;
          const defaultClient = this.items.find(
            (item) => item.slug === defaultClientSlug
          );
          if (defaultClient) {
            this.form.client = defaultClient;
          }
        }
      } catch (error) {
        console.error('Error getting clients:', error);
        
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
        
        // Ensure discount amount doesn't exceed the new total before discount
        if (updatedItem.discountAmount > (updatedItem.unitPrice * updatedItem.qty)) {
          updatedItem.discountAmount = this.roundToTwoDecimals(updatedItem.unitPrice * updatedItem.qty);
        }
        
        this.logDebug('generateItemTotal:after-mutate', { index, item: JSON.parse(JSON.stringify(updatedItem)) });
        
        // Recalculate totals
        // persist row change so Vue updates the row immediately
        this.$set(this.form.selectedProducts, index, updatedItem);
        this.generateItemTotalPrice(index);
        this.calculateSum();
        
        // Update reactive totals
        this.updateReactiveTotals();
        
        // Force update to ensure template re-renders
        this.$forceUpdate();
        
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

    // calculate product discount
    calculateProductDiscount(index) {
      this.debugBreak();
      let item = this.form.selectedProducts[index];
      if (item) {
        this.logDebug('calculateProductDiscount:start', { index, before: JSON.parse(JSON.stringify(item)) });
        // Clear discount validation errors when values change
        this.clearProductErrors(index);
        
        // Calculate discount amount based on type
        let discountAmount;
        if (item.discountType === "percentage") {
          discountAmount = this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100);
        } else {
          discountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
        }
        
        // Ensure discount amount doesn't exceed the total before discount
        if (discountAmount > (item.unitPrice * item.qty)) {
          discountAmount = this.roundToTwoDecimals(item.unitPrice * item.qty);
        }
        
        // Create updated item with new discount amount
        const updatedItem = {
          ...item,
          discountAmount
        };
        
        // Persist reactive change and recalc
        this.$set(this.form.selectedProducts, index, updatedItem);
        this.generateItemTotalPrice(index);
        this.calculateSum();
        
        // Update reactive totals
        this.updateReactiveTotals();
        
        // Force update to ensure template re-renders
        this.$forceUpdate();
        
        this.logDebug('calculateProductDiscount:end', { index, row: JSON.parse(JSON.stringify(this.form.selectedProducts[index])) });
      }
    },

    // calculate product VAT
    calculateProductVat(index) {
      this.debugBreak();
      let item = this.form.selectedProducts[index];
      if (item) {
        this.logDebug('calculateProductVat:start', { index, before: JSON.parse(JSON.stringify(item)) });
        // Clear VAT validation errors when values change
        this.clearProductErrors(index);
        
        let updatedItem = { ...item };
        
        // Ensure the selectedVatRate is properly set
        if (!updatedItem.selectedVatRate) {
          // First try to use the product's default VAT rate, then fall back to available taxes
          if (updatedItem.productTax) {
            updatedItem.selectedVatRate = this.findMatchingVatRate(updatedItem.productTax);
          }
          
          // If no match found or no productTax, fall back to available taxes
          if (!updatedItem.selectedVatRate && this.taxes && this.taxes.length > 0) {
            updatedItem.selectedVatRate = this.taxes[0];
          }
        }
        
        // Persist reactive change and recalc
        this.$set(this.form.selectedProducts, index, updatedItem);
        this.generateItemTotalPrice(index);
        this.calculateSum();
        
        // Update reactive totals
        this.updateReactiveTotals();
        
        // Force update to ensure template re-renders
        this.$forceUpdate();
        
        this.logDebug('calculateProductVat:end', { index, row: JSON.parse(JSON.stringify(this.form.selectedProducts[index])) });
      }
    },



    // generate item total price
    generateItemTotalPrice(index) {
      this.debugBreak();
      let item = this.form.selectedProducts[index];
      if (item) {
        this.logDebug('generateItemTotalPrice:start', { index, before: JSON.parse(JSON.stringify(item)) });

        // Normalize numeric inputs
        const unitPriceNumber = Number(item.unitPrice) || 0;
        const qtyNumber = Number(item.qty) || 0;

        // Calculate total before discount (unit price × quantity)
        const totalBeforeDiscount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber);

        // Calculate price after discount
        let priceAfterDiscount = this.roundToTwoDecimals((unitPriceNumber * qtyNumber) - (item.discountAmount || 0));

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

        // Set totals used by summary/subtotal
        item.totalBeforeDiscount = totalBeforeDiscount;
        item.totalAfterDiscount = this.roundToTwoDecimals(priceAfterDiscount);

        let productTax, totalTax, totalPrice;
        
        if (item.taxType == "Exclusive") {
          // VAT on discounted amount
          productTax = this.roundToTwoDecimals(priceAfterDiscount * (vatRate / 100));
          totalTax = this.roundToTwoDecimals(productTax);
          totalPrice = this.roundToTwoDecimals(priceAfterDiscount + totalTax);
        } else {
          // Inclusive: VAT is included in unit price; derive VAT from discounted price
          let discountedUnitPrice = this.roundToTwoDecimals(qtyNumber > 0 ? (priceAfterDiscount / qtyNumber) : 0);
          item.unitPrice = discountedUnitPrice;
          productTax = this.roundToTwoDecimals(discountedUnitPrice - (discountedUnitPrice / (1 + vatRate / 100)));
          totalTax = this.roundToTwoDecimals(productTax * qtyNumber);
          totalPrice = this.roundToTwoDecimals(priceAfterDiscount);
        }
        
        // Create a new object with all the calculated values to ensure reactivity
        const updatedItem = {
          ...item,
          totalBeforeDiscount: item.totalBeforeDiscount,
          totalAfterDiscount: item.totalAfterDiscount,
          productTax,
          totalTax,
          totalPrice
        };
        
        // Use Vue.set to ensure reactivity
        this.$set(this.form.selectedProducts, index, updatedItem);
        
        // Force update to ensure template re-renders
        this.$forceUpdate();
        
        this.logDebug('generateItemTotalPrice:end', {
          index,
          row: JSON.parse(JSON.stringify(this.form.selectedProducts[index]))
        });
      }
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

         // calculate sum
    calculateSum() {
      this.debugBreak();
       // Update products with default VAT rate if needed
       this.updateProductsWithDefaultVatRate();
       
       // Update form values for consistency with computed properties
       this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.subtotal));
       this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
       this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));

       // Global discount
       let globalDiscount = 0;
       if (!this.isSaudiArabia && this.form.discount > 0) {
         if (this.form.discountType == 1) {
           globalDiscount = this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal);
         } else {
           globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
         }
       }

       // Invoice-level tax computed on (subTotal - globalDiscount)
       this.$set(this.form, 'invoiceTax', 0);
       if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
         this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(
           (this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)
         ));
       }

       // Total tax = product VAT + invoice-level tax
       this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));

       // Net total
       if (this.isSaudiArabia) {
         // For Saudi Arabia, include VAT in the final total
         this.$set(this.form, 'netTotal', this.roundToTwoDecimals(this.subtotal));
       } else {
         this.$set(this.form, 'netTotal', this.roundToTwoDecimals(
           this.form.subTotal -
           globalDiscount +
           this.form.invoiceTax +
           Number(this.form.transportCost || 0)
         ));
       }
       
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

    // return number to word with language support
    toWord(){
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

    // save invoice
    async saveInvoice() {
      try {
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
          this.clearTemporaryData();
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
       this.form.transportCost = this.roundToTwoDecimals(Number(this.form.transportCost || 0));
       this.form.discount = this.roundToTwoDecimals(Number(this.form.discount || 0));
       
       // Only format payment-related fields if addPayment is 1
       if (this.form.addPayment == 1) {
         this.form.paidAmount = this.roundToTwoDecimals(Number(this.form.paidAmount || 0));
         this.form.account = this.form.account || "";
         this.form.chequeNo = this.form.chequeNo || "";
         this.form.receiptNo = this.form.receiptNo || "";
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

    // Validate payment fields when "Add Payment" is set to "Yes"
    validatePaymentFields() {
      if (this.form.addPayment != 1) {
        return { isValid: true, errors: [] };
      }
      
      const errors = [];
      
      // Check if bank account is selected
      if (!this.form.account) {
        errors.push({
          type: "warning",
          title: this.$t("Bank Account Required"),
          message: this.$t("Please choose a bank account for the payment."),
          field: "account"
        });
      }
      
      // Check if paid amount is entered and greater than 0
      if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
        errors.push({
          type: "warning",
          title: this.$t("Paid Amount Required"),
          message: this.$t("Paid amount must be greater than 0."),
          field: "paidAmount"
        });
      }
      
      // Validate bank account chart of account if account is selected
      if (this.form.account && !this.form.account.chartOfAccountId) {
        errors.push({
          type: "warning",
          title: this.$t("Bank Account Chart of Account Required"),
          message: this.$t("Bank Account must have a Chart of Account assigned for journal entries."),
          field: "account",
          timer: 8000,
          timerProgressBar: true
        });
      }
      
      return {
        isValid: errors.length === 0,
        errors: errors
      };
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
      
      // Reset payment fields when client changes
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
        if (!this.form.client || !this.items || this.items.length === 0) return;
        const current = this.form.client;
        let matched = null;
        if (current.id) {
          matched = this.items.find(i => i.id === current.id);
        }
        if (!matched && current.slug) {
          matched = this.items.find(i => i.slug === current.slug);
        }
        if (matched) {
          this.form.client = matched;
        }
      } catch (e) {
        // silent
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
          console.error('Error loading temporary data:', error)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('invoiceTempData')
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
.form-control{
  background: #fff !important;
}

/* Quantity Field Styling */
.quantity-field {
  border-radius: 0 !important;
  min-height: 50px !important;
  margin: 0 !important;
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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

.custom-qty-input input.button-plus,
.custom-qty-input input.button-minus {
  margin: 0 5px;
}
</style>