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
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
                </router-link>
                <button type="submit" class="btn btn-success" :form="'quotationToInvoiceForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          
          <div class="card-body">
              <!-- Chart of Account Validation -->
              <ChartOfAccountValidation
                :client="form.client"
                :products="form.selectedProducts"
                type="invoice"
                @chart-of-account-assigned="handleChartOfAccountAssigned"
              />
              <!-- Add the missing form element with submit handler -->
              <form id="quotationToInvoiceForm" @submit.prevent="createInvoice">
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
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-100 m-auto" style="max-width: 100%;">
                  <table class="table table-hover table-sm text-center invoices-create-table">
                    <thead>
                      <th>{{ $t("#") }}</th>
                      <th>{{ $t("Code") }}</th>
                      <th>{{ $t("Item Name") }}</th>
                      <th>{{ $t("Qty") }}</th>
                      <th>{{ $t("Price") }}</th>
                      <th>{{ $t("Total") }}</th>
                      <th>{{ $t("Discount") }}</th>
                      <th>{{ $t("Total After Discount") }}</th>
                      <th>{{ $t("VAT Type") }}</th>
                      <th>{{ $t("VAT") }}</th>
                      <th>{{ $t("Total with VAT") }}</th>
                      <th class="text-right">{{ $t("Action") }}</th>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in form.selectedProducts" :key="`item-${index}-${item.totalPrice}-${item.totalAfterDiscount}`">
                        <td style="min-width: 30px;">{{ index + 1 }}</td>
                        <td style="min-width: 60px;">
                          {{ item.code | withPrefix(prefix) }}
                        </td>
                        <td style="min-width: 120px;">
                          <div class="d-flex align-items-center">
                            <span v-if="Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
                              " v-tooltip="$t('Click to manage stock')" 
                              class="badge badge-danger p-2 mr-2 clickable-badge" 
                              @click="openStockAdjustmentModal(item)">
                              <i class="fas fa-exclamation"></i>
                            </span>
                            <div class="flex-grow-1">
                              <router-link v-if="$can('product-view')" :to="{
                                name: 'products.show',
                                params: { slug: item.slug },
                              }">
                                {{ item.name }}
                              </router-link>
                              <span v-else>{{ item.name }}</span>
                            </div>
                            <button 
                              type="button" 
                              class="btn btn-sm btn-outline-primary ml-2" 
                              @click="editProductFromTable(item)"
                              v-tooltip="$t('Edit Product')"
                            >
                              <i class="fas fa-edit"></i>
                            </button>
                          </div>
                        </td>
                        <td style="min-width: 120px;">
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  index,
                                  'decrement'
                                )
                                " />

                            <input type="number" step="any" :id="`Qty-${index+1}`" v-model.number="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required min="1" :max="item.itemType == 'product' ? item.inventoryCount : null"
                              :class="{ 
                                'is-invalid': form.errors.has(`selectedProducts.${index}.qty`),
                                'insufficient-stock-input': Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
                              }"
                              @input="generateItemTotal(item.qty, 'qty', index, '')"
                              placeholder="Quantity" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  index,
                                  'increment'
                                )
                                " />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${index}.qty`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${index}.qty`) }}
                          </div>
                        </td>
                        <td style="min-width: 120px;">
                          <div class="input-group custom-qty-input">
                            <input type="number" step="any" :id="`unitPrice-${index+1}`" v-model.number="item.unitPrice"
                              name="unitPrice" class="quantity-field border-0" required min="0" 
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${index}.unitPrice`) }"
                              @input="generateItemTotal(item.unitPrice, 'price', index, '')" />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${index}.unitPrice`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${index}.unitPrice`) }}
                          </div>
                        </td>
                        <td style="min-width: 80px;">{{ item.totalBeforeDiscount }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 120px;">
                          <div class="input-group">
                            <select 
                              v-model="item.discountType" 
                              class="form-control form-control-sm" 
                              style="width: 60px;"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${index}.discountType`) }"
                              @change="calculateProductDiscount(index)">
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
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${index}.discount`) }"
                              placeholder="0"
                              @change="calculateProductDiscount(index)"
                              @keyup="calculateProductDiscount(index)" />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${index}.discount`) || form.errors.has(`selectedProducts.${index}.discountType`)" class="invalid-feedback d-block">
                            <span v-if="form.errors.has(`selectedProducts.${index}.discount`)" class="d-block">{{ form.errors.get(`selectedProducts.${index}.discount`) }}</span>
                            <span v-if="form.errors.has(`selectedProducts.${index}.discountType`)" class="d-block">{{ form.errors.get(`selectedProducts.${index}.discountType`) }}</span>
                          </div>
                        </td>
                        <td style="min-width: 80px;">{{ item.totalAfterDiscount }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 100px;">
                          <div class="d-flex align-items-center">
                            <select 
                              v-model="item.selectedVatRate" 
                              class="form-control form-control-sm flex-grow-1"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${index}.selectedVatRate`) }"
                              @change="calculateProductVat(index)"
                              style="min-width: 80px;">
                              <option value="">{{ $t('Select VAT') }}</option>
                              <option 
                                v-for="tax in taxes" 
                                :key="tax.id" 
                                :value="tax">
                                {{ tax.code }} ({{ tax.rate }}%)
                              </option>
                            </select>
                            <i v-if="!item.productTax || !item.productTax.id" 
                               class="fas fa-exclamation-triangle text-warning ml-1" 
                               v-tooltip="$t('Product needs VAT rate assigned')"
                               style="font-size: 14px;"></i>
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${index}.selectedVatRate`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${index}.selectedVatRate`) }}
                          </div>
                        </td>
                        <td style="min-width: 60px;">
                          <span class="form-control-plaintext form-control-sm text-center">
                            {{ item.productTax }} <span class="saudi-riyal">ê</span>
                          </span>
                        </td>
                        <td style="min-width: 80px;">{{ item.totalPrice }} <span class="saudi-riyal">ê</span></td>
                        <td class="text-right" style="min-width: 50px;">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <!-- Totals Row -->
                      <tr :key="`totals-${getSubTotal()}-${getTotalUnitPrice()}`">
                        <td colspan="5" class="text-right">
                          <strong> {{ $t("Total") }} : {{ toWord() }} </strong>
                        </td>
                        <td>
                          <strong>{{ getTotalUnitPrice() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ getTotalDiscount() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ getTotalAfterDiscount() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong></strong>
                        </td>
                        <td>
                          <strong>{{ getProductTotalTax() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td>
                          <strong>{{ getSubTotal() }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
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
                <div class="form-group col-md-4">
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
              <div class="row" v-if="paymentFieldsVisible">
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
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'
import ChartOfAccountValidation from '~/components/ChartOfAccountValidation'
import Swal from 'sweetalert2'
import { ToggleButton } from "vue-js-toggle-button"
import ClientCreateModal from '~/components/ClientCreateModal'
import ProductCreateModal from '~/components/ProductCreateModal'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Quotation To Invoice') }
  },
  components: {
    ChartOfAccountValidation,
    ClientCreateModal,
    ProductCreateModal,
    ToggleButton,
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
      isSendEmail: false,
      isSendSMS: false,
    }),
    products: '',
    accounts: '',
    taxes: '',
    prefix: '',
    isAutoAssigningClient: false,
    isAutoAssigningProduct: false,
    isAutoAssigningAccount: false,
    isRTL: false,
    currentLocale: 'en',
    communicationConfig: {
      loading: false,
      email_configured: false,
      sms_configured: false,
    },
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

    // Check if all products have VAT rates assigned
    allProductsHaveVatRates() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true; // No products selected, so no validation needed
      }
      return this.form.selectedProducts.every(product => product.selectedVatRate && product.selectedVatRate.id);
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
                               this.allProductsHaveVatRates &&
                               this.hasBankAccountChartOfAccount &&
                               this.form.selectedProducts && 
                               this.form.selectedProducts.length > 0;
      
      // Debug logging
      console.log('Form validation debug:', {
        hasChartOfAccount: this.hasChartOfAccount,
        allProductsHaveSalesAccounts: this.allProductsHaveSalesAccounts,
        allProductsHaveVatRates: this.allProductsHaveVatRates,
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

    // Check if there are products with insufficient stock
    hasInsufficientStock() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return false;
      }
      return this.form.selectedProducts.some(product => 
        product.itemType === 'product' && 
        Number(product.inventoryCount) < Number(product.qty)
      );
    },

    // Check if payment fields should be visible
    paymentFieldsVisible() {
      return this.form.addPayment == 1;
    },

    // Check if app is in demo mode
    isDemoMode() {
      return this.appInfo?.is_demo || false;
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
      
      // Set default tax if needed (for Saudi Arabia or if quotation has no tax)
      this.setDefaultTax()
      
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
      
      // Set default tax for Saudi Arabia if no tax is selected
      this.setDefaultTax()
    },

    // set default tax for Saudi Arabia or when no tax is assigned
    setDefaultTax() {
      if (this.taxes && this.taxes.length > 0 && !this.form.orderTax) {
        // Find a 0% tax rate or the first available tax
        const zeroTax = this.taxes.find(tax => tax.rate === 0)
        const defaultTax = zeroTax || this.taxes[0]
        this.form.orderTax = defaultTax
        console.log('Default tax set:', defaultTax)
      }
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
          itemType: product.itemType || 'product',
          discountType: 'fixed',
          discount: 0,
          discountAmount: 0,
          totalBeforeDiscount: product.priceWithDiscount * qunatity,
          totalAfterDiscount: product.priceWithDiscount * qunatity,
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
        } else if (type == 'price') {
          item.unitPrice = value
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1
            }
          }
        }
        
        // Update calculated fields
        item.totalBeforeDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty)
        item.totalAfterDiscount = this.roundToTwoDecimals(item.totalBeforeDiscount - (item.discountAmount || 0))
        
        // Calculate VAT based on selected VAT rate
        if (item.selectedVatRate && item.selectedVatRate.rate) {
          const vatRate = item.selectedVatRate.rate
          item.productTax = this.roundToTwoDecimals((item.totalAfterDiscount * vatRate) / 100)
          item.totalTax = this.roundToTwoDecimals(item.productTax * item.qty)
          item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax)
        } else {
          // No VAT rate selected
          item.productTax = 0
          item.totalTax = 0
          item.totalPrice = item.totalAfterDiscount
        }
        
        item.unitCost = this.roundToTwoDecimals(item.unitPrice)
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
      // calculate subtotal (without VAT for quotations)
      this.form.subTotal = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + (cur.totalAfterDiscount || 0)).toFixed(2))
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
          itemType: quotationProduct.itemType || 'product',
          discountType: 'fixed',
          discount: 0,
          discountAmount: 0,
          totalBeforeDiscount: quotationProduct.salePrice * quotationProduct.quantity,
          totalAfterDiscount: quotationProduct.salePrice * quotationProduct.quantity,
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
        window.toast.fire({
          type: errors[0].type,
          title: errors[0].title,
          text: errors[0].message,
          timer: errors[0].timer || 5000,
          timerProgressBar: errors[0].timerProgressBar || false
        });
      } else {
        // Multiple errors - show as alert with list
        const errorList = errors.map(err => `• ${err.message}`).join('\n');
        window.toast.fire({
          type: 'warning',
          title: this.$t('Validation Errors'),
          text: this.$t('Please fix the following issues:') + '\n' + errorList
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

        // Validate that all products have VAT rates assigned
        const productsWithoutVatRate = this.form.selectedProducts.filter(product => !product.selectedVatRate || !product.selectedVatRate.id);
        if (productsWithoutVatRate.length > 0) {
          const productNames = productsWithoutVatRate.map(p => p.name || 'Unknown').join(', ');
          validationErrors.push({
            type: "warning",
            title: this.$t("Product VAT Rate Required"),
            message: this.$t("The following products must have a VAT rate assigned: ") + productNames,
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
        window.toast.fire({
          type: 'success',
          title: this.$t('Invoice created successfully'),
        })
            this.$router.push({ name: 'invoices.index' })
          })
          .catch((error) => {
            console.error('Invoice creation error:', error);
            window.toast.fire({
              type: 'error',
              title: this.$t('Please check your input and try again.'),
            })
          })
      } catch (error) {
        console.error('Unexpected error:', error);
        window.toast.fire({
          type: 'error',
          title: this.$t('Please check your input and try again.'),
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

    // Auto-assign client chart of account
    async autoAssignClientChartOfAccount() {
      if (!this.form.client) return;
      
      if (!this.form.client.slug) {
        window.toast.fire({
          type: 'error',
          title: this.$t('Error'),
          text: this.$t('Client missing required information. Please refresh and try again.'),
        });
        return;
      }
      
      this.isAutoAssigningClient = true;
      try {
        const response = await axios.post(
          window.location.origin + '/api/clients/' + this.form.client.slug + '/auto-assign-chart-of-account'
        );
        
        if (response && response.data && response.data.success) {
          // Update the client data with new chart of account
          const newAccountId = response.data.chart_of_account_id || (response.data.data && response.data.data.chart_of_account_id) || null;
          if (newAccountId) {
            this.form.client.chart_of_account_id = newAccountId;
            // Also update the option in items list to keep state consistent when switching clients
            const idx = this.items.findIndex(i => i.slug === this.form.client.slug);
            if (idx !== -1) {
              this.$set(this.items[idx], 'chart_of_account_id', newAccountId);
            }
          }
          
          window.toast.fire({
            type: 'success',
            title: this.$t('Chart of Account assigned successfully'),
          });
        } else {
          window.toast.fire({
            type: 'error',
            title: this.$t('Failed to assign Chart of Account'),
            text: (response && response.data && response.data.message) || this.$t('Please try again'),
          });
        }
      } catch (error) {
        console.error('Error assigning client chart of account:', error);
        let errorMessage = this.$t('Failed to assign Chart of Account. Please try again.');
        
        if (error && error.response) {
          errorMessage = error.response.data?.message || error.message || errorMessage;
        } else if (error && error.message) {
          errorMessage = error.message;
        }
        
        window.toast.fire({
          type: 'error',
          title: this.$t('Error'),
          text: errorMessage,
        });
      } finally {
        this.isAutoAssigningClient = false;
      }
    },

    // Auto-assign all products chart of account
    async autoAssignAllProductsChartOfAccount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) return;
      
      this.isAutoAssigningProduct = true;
      try {
        const productsWithoutSalesAccount = this.form.selectedProducts.filter(product => !product.sales_account_id);
        
        if (productsWithoutSalesAccount.length === 0) {
          window.toast.fire({
            type: 'info',
            title: this.$t('All products already have sales accounts assigned'),
          });
          return;
        }
        
        for (const product of productsWithoutSalesAccount) {
          if (!product.slug) {
            console.warn('Product missing slug:', product);
            continue;
          }
          
          const response = await axios.post(
            window.location.origin + '/api/products/' + product.slug + '/sales/auto-assign-chart-of-account'
          );
          
          if (response.data && response.data.success) {
            // Update the product data with new chart of account
            product.sales_account_id = response.data.sales_account_id;
            
            // Update the product in the products list
            const productIndex = this.products.findIndex(p => p.id === product.id);
            if (productIndex !== -1) {
              this.$set(this.products[productIndex], 'sales_account_id', response.data.sales_account_id);
            }
          }
        }
        
        window.toast.fire({
          type: 'success',
          title: this.$t('Chart of Accounts assigned successfully'),
        });
      } catch (error) {
        console.error('Error assigning product chart of accounts:', error);
        let errorMessage = this.$t('Failed to assign Chart of Accounts. Please try again.');
        
        if (error && error.response) {
          errorMessage = error.response.data?.message || error.message || errorMessage;
        } else if (error && error.message) {
          errorMessage = error.message;
        }
        
        window.toast.fire({
          type: 'error',
          title: this.$t('Error'),
          text: errorMessage,
        });
      } finally {
        this.isAutoAssigningProduct = false;
      }
    },

    // Auto-assign bank account chart of account
    async autoAssignBankAccountChartOfAccount() {
      if (!this.form.account) return;
      
      // For now, show a message that this feature is not available
      toast.fire({
        type: 'info',
        title: this.$t('Feature Not Available'),
        text: this.$t('Auto-assign for bank accounts is not yet available. Please assign Chart of Account manually.'),
      });
    },

    // Edit product from table
    editProductFromTable(item) {
      // Open product edit modal or navigate to product edit page
      this.$router.push({
        name: 'products.edit',
        params: { slug: item.slug }
      });
    },

    // Open stock adjustment modal
    openStockAdjustmentModal(item) {
      // This would open a stock adjustment modal
      // For now, we'll show an alert with instructions
      Swal.fire({
        title: this.$t('Insufficient Stock'),
        text: `Product "${item.name}" has insufficient stock. Current: ${item.inventoryCount}, Required: ${item.qty}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Adjust Stock'),
        cancelButtonText: this.$t('Cancel')
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to stock adjustment or open modal
          this.$router.push({
            name: 'products.stock-adjustment',
            params: { slug: item.slug }
          });
        }
      });
    },

    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Calculate discount amount based on type
        let discountAmount;
        if (item.discountType === "percentage") {
          discountAmount = this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100);
        } else {
          discountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
        }
        
        // Update item properties
        item.discountAmount = discountAmount;
        item.totalBeforeDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = this.roundToTwoDecimals(item.totalBeforeDiscount - discountAmount);
        
        // Recalculate VAT on the discounted amount
        this.calculateProductVat(index);
      }
    },

    // calculate product VAT
    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let updatedItem = { ...item };
        
        // Ensure the selectedVatRate is properly set
        if (!updatedItem.selectedVatRate) {
          // First try to use the product's default VAT rate, then fall back to available taxes
          if (updatedItem.productTax) {
            updatedItem.selectedVatRate = this.findMatchingVatRate(updatedItem.productTax);
          } else if (this.taxes && this.taxes.length > 0) {
            updatedItem.selectedVatRate = this.taxes[0];
          }
        }
        
        if (updatedItem.selectedVatRate) {
          // Calculate VAT based on the total after discount
          const vatRate = updatedItem.selectedVatRate.rate || 0;
          updatedItem.productTax = this.roundToTwoDecimals((updatedItem.totalAfterDiscount * vatRate) / 100);
          updatedItem.totalTax = this.roundToTwoDecimals(updatedItem.productTax * updatedItem.qty);
          updatedItem.totalPrice = this.roundToTwoDecimals(updatedItem.totalAfterDiscount + updatedItem.totalTax);
        } else {
          // No VAT rate selected
          updatedItem.productTax = 0;
          updatedItem.totalTax = 0;
          updatedItem.totalPrice = updatedItem.totalAfterDiscount;
        }
        
        // Update the item in the array
        this.$set(this.form.selectedProducts, index, updatedItem);
        this.calculateSum();
      }
    },

    // find matching VAT rate
    findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(tax => tax.rate === productTax.rate) || null;
    },

    // round to two decimals
    roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
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
        return total + (item.totalAfterDiscount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // return number to word with language support
    toWord() {
      const amount = this.form.subTotal || 0;
      
      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }
      
      // For now, return a simple representation
      return `${amount.toFixed(2)} SAR`;
    },

    // Handle add payment change
    onAddPaymentChange() {
      // Reset payment fields when changing add payment option
      if (this.form.addPayment != 1) {
        this.form.account = '';
        this.form.paidAmount = '';
        this.form.receiptNo = '';
      }
    },

    // Handle client change
    onClientChange() {
      // Clear any previous client-related errors
      this.clearFieldError('client');
    },

    // Handle account change
    onAccountChange() {
      // Clear any previous account-related errors
      this.clearFieldError('account');
    },

    // Handle paid amount change
    onPaidAmountChange() {
      // Clear any previous paid amount errors
      this.clearFieldError('paidAmount');
    },

    // Navigate to bank accounts
    goToBankAccounts() {
      this.$router.push({ name: 'bank-accounts.index' });
    },

    // Reset form
    resetForm() {
      this.form.reset();
      this.form.selectedProducts = [];
      this.form.date = new Date().toISOString().slice(0, 10);
      this.form.status = this.isSaudiArabia ? 0 : 1;
      this.form.addPayment = 0;
      this.form.isSendEmail = false;
      this.form.isSendSMS = false;
    },

    // Show all insufficient stock items
    showAllInsufficientStock() {
      const insufficientItems = this.form.selectedProducts.filter(product => 
        product.itemType === 'product' && 
        Number(product.inventoryCount) < Number(product.qty)
      );
      
      if (insufficientItems.length === 0) {
        return;
      }
      
      const itemList = insufficientItems.map(item => 
        `• ${item.name}: Required ${item.qty}, Available ${item.inventoryCount}`
      ).join('\n');
      
      Swal.fire({
        title: this.$t('Insufficient Stock Items'),
        text: this.$t('The following items have insufficient stock:') + '\n\n' + itemList,
        icon: 'warning',
        confirmButtonText: this.$t('OK')
      });
    },

    // Clear field error
    clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },

    // Handle product created
    handleProductCreated(product) {
      // Add the new product to the products list
      if (this.products && Array.isArray(this.products)) {
        this.products.unshift(product);
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

.clickable-badge {
  cursor: pointer;
  transition: all 0.2s ease;
}

.clickable-badge:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Match quotations create table styling */
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

.insufficient-stock-input {
  border-color: #dc3545 !important;
  background-color: #fff5f5 !important;
}

.custom-qty-input {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}

.custom-qty-input .button-minus,
.custom-qty-input .button-plus {
  width: 30px;
  height: 30px;
  border: 1px solid #ced4da;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
}

.custom-qty-input .button-minus {
  border-radius: 0.25rem 0 0 0.25rem;
  border-right: none;
}

.custom-qty-input .button-plus {
  border-radius: 0 0.25rem 0.25rem 0;
  border-left: none;
}

.custom-qty-input .quantity-field {
  flex: 1;
  text-align: center;
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.custom-qty-input .quantity-field:focus {
  box-shadow: none;
  border-color: #80bdff;
}

.saudi-riyal {
  font-weight: bold;
  color: #28a745;
}
</style>
