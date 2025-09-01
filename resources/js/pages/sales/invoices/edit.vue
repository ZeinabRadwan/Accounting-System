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
              {{ $t("Edit Invoice") }}
            </h3>
            <router-link :to="{ name: 'invoices.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
          
          <div class="card-body">
            <!-- Add the missing form element with submit handler -->
            <form @submit.prevent="handleFormSubmit">
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
                        <div v-else class="client-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Client Chart of Account ready') }}</span>
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
                <div class="form-group col-md-12">
                  <label for="product">{{ $t("Select Items") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.product" :options="products" label="label" :class="{
                          'is-invalid': form.errors.has('selectedProducts'),
                        }" name="product" :placeholder="$t('Search Items')"
                          @input="storeProduct(form.product)" />
                        <ProductCreateModal @reloadProducts="getProducts">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ProductCreateModal>
                      </div>
                      
                      <!-- Product Chart of Account Status - Similar to client validation -->
                      <div class="product-status mt-2" v-if="form.selectedProducts && form.selectedProducts.length > 0">
                        <div v-if="!form.selectedProducts[0].sales_account_id" class="product-warning">
                          <i class="fas fa-exclamation-triangle text-warning"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('needs Sales Account') }}</span>
                          <button 
                            type="button" 
                            class="btn btn-sm btn-outline-warning ml-2"
                            @click="autoAssignProductChartOfAccount(form.selectedProducts[0])"
                            :disabled="isAutoAssigningProduct === form.selectedProducts[0].id"
                          >
                            <i :class="isAutoAssigningProduct === form.selectedProducts[0].id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                            {{ isAutoAssigningProduct === form.selectedProducts[0].id ? $t('Assigning...') : $t('Auto-Assign') }}
                          </button>
                        </div>
                        <div v-else class="product-success">
                          <i class="fas fa-check-circle text-success"></i>
                          <span class="ml-2">{{ $t('Product') }} "{{ form.selectedProducts[0].name }}" {{ $t('Sales Account ready') }}</span>
                        </div>
                      </div>
                      
                      <has-error :form="form" field="selectedProducts" />
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-100 m-auto">
                  <table class="table table-hover table-sm text-center">
                    <thead>
                      <tr>
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          {{ item.code | withPrefix(prefix) }}
                        </td>
                        <td>
                          <span v-if="Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
                            " v-tooltip="$t('Insufficient Stock')" class="badge badge-danger p-2">
                            <i class="fas fa-exclamation"></i>
                          </span>
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
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  i - 1,
                                  'decrement'
                                )
                                " />

                            <input type="number" step="any" :id="`Qty-${i}`" :value="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required min="1" :max="item.itemType == 'product' ? item.inventoryCount : null"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.qty`) }"
                              @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'qty',
                                  i - 1,
                                  ''
                                )
                                " @keyup="generateItemTotal($event.target.value, 'qty', i - 1, '')"
                              placeholder="Quantity" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" @click="
                                generateItemTotal(
                                  item.qty,
                                  'qty',
                                  i - 1,
                                  'increment'
                                )
                                " />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.qty`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.qty`) }}
                          </div>
                        </td>
                        <td>
                          <div class="input-group custom-qty-input">
                            <input type="button" value="-" class="button-minus icon-shape icon-sm btn-danger"
                              data-field="unitPrice" @click="
                                generateItemTotal(
                                  item.unitPrice,
                                  'price',
                                  i - 1,
                                  'decrement'
                                )
                                " />
                            <input type="unitPrice" step="any" :id="`unitPrice-${i}`" :value="item.unitPrice"
                              name="unitPrice" class="quantity-field border-0 incrementor" required min="0" 
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.unitPrice`) }"
                              @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'price',
                                  i - 1,
                                  ''
                                )
                                " @keyup="generateItemTotal($event.target.value, 'price', i - 1, '')" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="unitPrice" @click="
                                generateItemTotal(
                                  item.unitPrice,
                                  'price',
                                  i - 1,
                                  'increment'
                                )
                                " />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.unitPrice`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.unitPrice`) }}
                          </div>
                        </td>
                        <td>{{ (item.unitPrice * item.qty) | withCurrency }}</td>
                        <td>
                          <div class="input-group">
                            <select 
                              v-model="item.discountType" 
                              class="form-control form-control-sm" 
                              style="width: 60px;"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.discountType`) }"
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
                              :max="item.discountType == 'percentage' ? 100 : (item.unitPrice * item.qty)"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.discount`) }"
                              placeholder="0"
                              @change="calculateProductDiscount(i - 1)"
                              @keyup="calculateProductDiscount(i - 1)" />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.discount`) || form.errors.has(`selectedProducts.${i-1}.discountType`)" class="invalid-feedback d-block">
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discount`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discount`) }}</span>
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discountType`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discountType`) }}</span>
                          </div>
                        </td>
                        <td>{{ ((item.unitPrice * item.qty) - (item.discountAmount || 0)) | withCurrency }}</td>
                        <td>
                          <select 
                            v-model="item.selectedVatRate" 
                            class="form-control form-control-sm"
                            :class="{ 'is-invalid': form.errors.has(`selectedProducts.${i-1}.selectedVatRate`) }"
                            @change="calculateProductVat(i - 1)"
                            style="min-width: 120px;">
                            <option value="">{{ $t('Select VAT') }}</option>
                            <option 
                              v-for="tax in taxes" 
                              :key="tax.id" 
                              :value="tax">
                              {{ tax.code }} ({{ tax.rate }}%)
                            </option>
                          </select>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.selectedVatRate`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${i-1}.selectedVatRate`) }}
                          </div>
                        </td>
                        <td>
                          <span class="form-control-plaintext form-control-sm text-center">
                            {{ item.productTax | withCurrency }}
                          </span>
                        </td>
                        <td>{{ item.totalPrice | withCurrency }}</td>
                        <td class="text-right">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <!-- Totals Row -->
                      <tr>
                        <td colspan="5" class="text-right">
                          <strong> {{ $t("Total") }} : {{ toWord() }} </strong>
                        </td>
                        <td>
                          <strong>{{ totalUnitPrice | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong>{{ form.totalDiscount | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong>{{ (totalUnitPrice - form.totalDiscount) | withCurrency }}</strong>
                        </td>
                        <td>
                          <strong></strong>
                        </td>
                        <td>
                          <strong>{{ form.productTotalTax | withCurrency }}</strong>
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
                        form.totalDiscount | withCurrency
                      }}</span>
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
                   <div class="radio-group-horizontal">
                     <div class="form-check">
                       <input class="form-check-input" type="radio" name="addPayment" id="addPaymentYes" 
                              value="1" v-model="form.addPayment" 
                              @change="onAddPaymentChange"
                              :class="{ 'is-invalid': form.errors.has('addPayment') }">
                       <label class="form-check-label" for="addPaymentYes">
                         {{ $t("Yes") }}
                       </label>
                     </div>
                     <div class="form-check">
                       <input class="form-check-input" type="radio" name="addPayment" id="addPaymentNo" 
                              value="0" v-model="form.addPayment" 
                              @change="onAddPaymentChange"
                              :class="{ 'is-invalid': form.errors.has('addPayment') }">
                       <label class="form-check-label" for="addPaymentNo">
                         {{ $t("No") }}
                       </label>
                     </div>
                   </div>

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
                      {{ $t("Due Amount") }}: <strong>{{ dueAmount | withCurrency }}</strong>
                    </small>
                  </div>
                </div>
                <div class="form-group col-md-3">
                  <label for="chequeNo">{{ $t("Cheque No") }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" @input="clearFieldError('chequeNo')" />
                  <has-error :form="form" field="chequeNo" />
                </div>
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
                <div class="form-group col-md-4">
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
                <div class="pr-5">
                  <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode"/>
                  {{ $t("Send To Email") }}
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-5">
                  <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode"/>
                  {{ $t("Send To SMS") }}
                </div>
              </div>
              
              <!-- Form Actions -->
              <div class="card-footer">
                <button :disabled="form.busy || !isFormReady" class="btn btn-primary" type="submit">
                  <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i>
                  {{ form.busy ? $t("Updating...") : $t("Update") }}
                </button>
                <button type="button" class="btn btn-secondary float-right" @click="resetForm">
                  <i class="fas fa-power-off" /> {{ $t("Reset") }}
                </button>
                
                <!-- Form readiness indicator -->
                <div v-if="!isFormReady" class="mt-3">
                  <div class="alert alert-warning mb-0">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>{{ $t("Form Not Ready") }}:</strong>
                    <ul class="mb-0 mt-2">
                      <li v-if="!hasChartOfAccount">
                        {{ $t("Client must have a Chart of Account assigned") }}
                      </li>
                      <li v-if="!allProductsHaveSalesAccounts">
                        {{ $t("All products must have Sales Accounts assigned") }}
                      </li>
                      <li v-if="!form.selectedProducts || form.selectedProducts.length === 0">
                        {{ $t("At least one product must be selected") }}
                      </li>
                      <li v-if="!hasBankAccountChartOfAccount">
                        {{ $t("Bank Account must have a Chart of Account assigned for journal entries") }}
                      </li>
                      <li v-if="form.addPayment == 1 && !form.account">
                        {{ $t("Please choose a bank account for the payment") }}
                      </li>
                      <li v-if="form.addPayment == 1 && (!form.paidAmount || Number(form.paidAmount) <= 0)">
                        {{ $t("Paid amount must be greater than 0") }}
                      </li>
                    </ul>
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
import Form from "vform";
import axios from "axios";
import { mapGetters } from "vuex";
import { ToggleButton } from "vue-js-toggle-button";
import ClientCreateModal from '~/components/ClientCreateModal'
import ProductCreateModal from '~/components/ProductCreateModal'
import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Invoice") };
  },
  components: {
    ToggleButton,
    ClientCreateModal,
    ProductCreateModal,
  },
  data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: "Edit Invoice",
      isSubmitting: false,
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
          name: "Edit",
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
        invoiceTax: 0,
        account: "",
        totalPaid: "",
        dueAmount: "",
        poReference: "",
        paymentTerms: "",
        deliveryPlace: "",
        addPayment: 0,
        chequeNo: "",
        receiptNo: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        discountType: 0,
        discount: 0,
        totalDiscount: 0,
        paidAmount: "",
      }),
      products: [],
      accounts: [],
      taxes: [],
      prefix: "",
      isUpdatingChartOfAccount: false,
      isAutoAssigningClient: false,
      isAutoAssigningProduct: null,
    }
  },
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },
    
    globalDiscountDisplay() {
      if (this.form.discount > 0) {
        if (this.form.discountType == 1) {
          return ((this.form.discount / 100) * this.form.subTotal).toFixed(2);
        } else {
          return this.form.discount.toFixed(2);
        }
      }
      return '0.00';
    },
    
    totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0);
    },

    hasChartOfAccount() {
      return !!this.form.client && !!this.form.client.chart_of_account_id;
    },

    allProductsHaveSalesAccounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true;
      }
      return this.form.selectedProducts.every(product => product.sales_account_id);
    },

    hasBankAccountChartOfAccount() {
      if (this.form.addPayment != 1) {
        return true;
      }
      return this.form.account && this.form.account.chartOfAccountId;
    },

    dueAmount() {
      if (this.form.addPayment != 1 || !this.form.paidAmount) {
        return this.form.netTotal;
      }
      return Math.max(0, this.form.netTotal - Number(this.form.paidAmount));
    },

    isFormReady() {
      const basicRequirements = this.hasChartOfAccount && 
                               this.allProductsHaveSalesAccounts && 
                               this.hasBankAccountChartOfAccount &&
                               this.form.selectedProducts && 
                               this.form.selectedProducts.length > 0;
      
      if (!basicRequirements) {
        return false;
      }
      
      if (this.form.addPayment == 1) {
        return this.isPaymentValid;
      }
      
      return true;
    },

    isPaymentValid() {
      if (this.form.addPayment != 1) {
        return true;
      }
      
      return this.form.account && 
             this.form.paidAmount && 
             Number(this.form.paidAmount) > 0;
    },

    arePaymentFieldsFilled() {
      if (this.form.addPayment != 1) {
        return true;
      }
      
      return this.form.account && this.form.paidAmount;
    },

    paymentFieldsVisible() {
      return this.form.addPayment == 1 && 
             this.accounts && 
             this.form.selectedProducts && 
             this.form.selectedProducts.length > 0;
    },
  },
  watch: {
    'form.addPayment': {
      handler(newVal, oldVal) {
        if (newVal != 1 && oldVal == 1) {
          this.form.account = "";
          this.clearFieldError('account');
          this.clearFieldError('paidAmount');
          this.clearFieldError('chequeNo');
          this.clearFieldError('receiptNo');
        }
      }
    },

    'form.discount': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      }
    },

    'form.transportCost': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      }
    },

    'form.orderTax': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
        else if (newVal !== oldVal && this.form.selectedProducts && this.form.selectedProducts.length > 0) {
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

    'form.discountType': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      }
    },

    'form.selectedProducts': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      },
      deep: true
    },

    'form.client': {
      handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          this.clearFieldError('paidAmount');
        }
      },
      deep: true
    },

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
  },
  created() {
    this.getClients();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.getInvoice();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  mounted() {
    this.setupGlobalErrorHandling();
    
    this.$nextTick(() => {
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.form.selectedProducts.forEach((item, index) => {
          this.generateItemTotalPrice(index);
        });
        this.calculateSum();
      }
    });
  },
  beforeDestroy() {
    this.cleanupGlobalErrorHandling();
  },
  methods: {
    // Basic methods will be added here
    async getClients(selectedClient = 'default') {
      try {
        await this.$store.dispatch("operations/allData", {
          path: "/api/all-clients",
        });
        if (this.items && this.items.length > 0) {
          let defaultClientSlug = this.appInfo.defaultClientSlug;
          this.form.client = this.items.find(
            (item) => item.slug === defaultClientSlug
          );
        }
        if (selectedClient == 'latest') {
          this.form.client = this.items[0];
        }
      } catch (error) {
        console.error('Error getting clients:', error);
      }
    },

    async getProducts() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-products"
        );
        this.products = data.data;
        this.products.sort(this.sortProducts);
      } catch (error) {
        console.error('Error getting products:', error);
      }
    },

    sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1;
      }
      if (Number(a.code) > Number(b.code)) {
        return 1;
      }
      return 0;
    },

    async getAccounts() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-accounts"
        );
        this.accounts = data.data;

        if (this.accounts && this.accounts.length > 0) {
          let defaultAccountSlug = this.appInfo.defaultAccountSlug;
          this.form.account = this.accounts.find(
            (account) => account.slug == defaultAccountSlug
          );
        }
      } catch (error) {
        console.error('Error getting accounts:', error);
      }
    },

    async getTaxes() {
      try {
        const { data } = await axios.get(
          window.location.origin + "/api/all-vat-rates"
        );
        this.taxes = data.data;
      } catch (error) {
        console.error('Error getting taxes:', error);
      }
    },

    async getInvoice() {
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/invoices/' + this.$route.params.slug
        );
        
        this.form.invoiceNo = data.data.invoiceNo;
        this.form.client = data.data.client;
        this.form.reference = data.data.reference;
        this.form.poReference = data.data.poReference;
        this.form.paymentTerms = data.data.paymentTerms;
        this.form.deliveryPlace = data.data.deliveryPlace;
        this.form.date = data.data.invoiceDate;
        this.form.note = data.data.note;
        this.form.status = data.data.status;
        this.form.transportCost = data.data.transport;
        this.form.totalTax = data.data.tax;
        this.form.orderTax = data.data.taxRate;
        this.form.netTotal = Number(data.data.invoiceTotal);
        this.form.subTotal = Number(data.data.subTotal);
        this.form.totalPaid = Number(data.data.totalPaid);
        this.form.dueAmount = Number(data.data.due);
        this.form.selectedProducts = this.assignProducts(data.data.invoiceProducts);
        
        if (data.data.payment) {
          this.form.addPayment = 1;
          this.form.account = data.data.payment.account;
          this.form.paidAmount = data.data.payment.amount;
          this.form.chequeNo = data.data.payment.chequeNo;
          this.form.receiptNo = data.data.payment.receiptNo;
        }
        
        this.form.isSendEmail = data.data.isSendEmail || false;
        this.form.isSendSMS = data.data.isSendSMS || false;
        this.form.discountType = data.data.discountType || 0;
        this.form.discount = data.data.discount || 0;
        this.form.totalDiscount = data.data.totalDiscount || 0;
        
      } catch (error) {
        console.error('Error getting invoice:', error);
      }
    },

    assignProducts(products) {
      this.form.selectedProducts = [];
      for (var key in products) {
        let invoiceItem = products[key];
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
          selectedVatRate: invoiceItem.vat_rate_id ? this.taxes.find(tax => tax.id === invoiceItem.vat_rate_id) : this.form.orderTax,
          sales_account_id: invoiceItem.sales_account_id,
        });
      }
      this.calculateSum();
      return this.form.selectedProducts;
    },

    storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(
        (x) => x.id == product.id
      );
      let qunatity = 1;
      if (index === -1) {
        let productTax =
          product.taxType == 'Exclusive'
            ? product.priceWithDiscount * (product.taxRate / 100)
            : product.priceWithDiscount -
            product.priceWithDiscount / (1 + product.taxRate / 100);
        let totalTax = productTax * qunatity;

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
          sales_account_id: product.sales_account_id,
        });
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      return;
    },

    ensureDiscountProperties() {
      this.form.selectedProducts.forEach(item => {
        if (typeof item.discount === 'undefined') {
          item.discount = 0;
        }
        if (typeof item.discountType === 'undefined') {
          item.discountType = 'fixed';
        }
      });
    },

    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == 'qty') {
          item.qty = value;
          if (action == 'increment') {
            item.qty = Number(item.qty) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else {
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }
        item.productTax =
          item.taxType == 'Exclusive'
            ? item.unitPrice * (item.taxRate / 100)
            : item.unitPrice - item.unitPrice / (1 + item.taxRate / 100);

        item.totalTax = item.productTax * item.qty;

        item.totalPrice =
          item.taxType == 'Exclusive'
            ? item.qty * item.unitPrice + item.totalTax
            : item.qty * item.unitPrice;
        item.unitCost =
          item.taxType == 'Exclusive'
            ? Number(item.unitPrice) + Number(item.productTax)
            : item.unitPrice;
        this.form.selectedProducts[index] = item;
        
        this.calculateProductDiscount(index);
      }
      this.calculateSum();
      return;
    },

    generateItemTotalPrice(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let discountAmount = 0;
        if (item.discount > 0) {
          if (item.discountType == 'percentage') {
            discountAmount = (item.unitPrice * item.qty * item.discount) / 100;
          } else {
            discountAmount = Number(item.discount);
          }
        }
        
        let priceAfterDiscount = (item.unitPrice * item.qty) - discountAmount;
        
        let vatRate = 0;
        if (item.selectedVatRate && item.selectedVatRate.rate) {
          vatRate = item.selectedVatRate.rate;
        } else if (item.taxRate) {
          vatRate = item.taxRate;
        }
        
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on the discounted amount
          item.productTax = priceAfterDiscount * (vatRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount + item.totalTax;
        } else {
          // For inclusive tax: VAT is already included in the price
          // Calculate VAT amount from the discounted price
          item.productTax = priceAfterDiscount - (priceAfterDiscount / (1 + vatRate / 100));
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount;
        }
        
        this.form.selectedProducts[index] = item;
      }
    },

    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let discountAmount = 0;
        
        if (item.discount > 0) {
          if (item.discountType == 'percentage') {
            discountAmount = (item.unitPrice * item.qty * item.discount) / 100;
          } else {
            discountAmount = Number(item.discount);
          }
        }
        
        let priceAfterDiscount = (item.unitPrice * item.qty) - discountAmount;
        
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on the discounted amount
          item.productTax = priceAfterDiscount * (item.taxRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount + item.totalTax;
        } else {
          // For inclusive tax: VAT is already included in the price
          // Calculate VAT amount from the discounted price
          item.productTax = priceAfterDiscount - (priceAfterDiscount / (1 + item.taxRate / 100));
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount;
        }
        
        this.form.selectedProducts[index] = item;
        this.calculateSum();
      }
      return;
    },

    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        let vatRate = 0;
        if (item.selectedVatRate && item.selectedVatRate.rate) {
          vatRate = item.selectedVatRate.rate;
        } else if (item.taxRate) {
          vatRate = item.taxRate;
        }
        
        let discountAmount = 0;
        if (item.discount > 0) {
          if (item.discountType == 'percentage') {
            discountAmount = (item.unitPrice * item.qty * item.discount) / 100;
          } else {
            discountAmount = Number(item.discount);
          }
        }
        let priceAfterDiscount = (item.unitPrice * item.qty) - discountAmount;
        
        if (item.taxType == 'Exclusive') {
          // For exclusive tax: calculate VAT on the discounted amount
          item.productTax = priceAfterDiscount * (vatRate / 100);
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount + item.totalTax;
        } else {
          // For inclusive tax: VAT is already included in the price
          // Calculate VAT amount from the discounted price
          item.productTax = priceAfterDiscount - (priceAfterDiscount / (1 + vatRate / 100));
          item.totalTax = item.productTax;
          item.totalPrice = priceAfterDiscount;
        }
        
        this.form.selectedProducts[index] = item;
        this.calculateSum();
      }
      return;
    },

    removeItem(item) {
      let index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.calculateSum();
      return;
    },

    calculateSum() {
      this.form.subTotal = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalPrice).toFixed(2));
      },
        0);

      this.form.productTotalTax = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalTax).toFixed(2));
      },
        0);

      this.form.netTotal = this.form.subTotal;

      this.form.totalTax = 0;
      if (this.form.orderTax) {
        this.form.totalTax =
          (this.form.orderTax.rate / 100) * this.form.subTotal;
      }

      this.form.netTotal =
        this.form.subTotal +
        Number(this.form.transportCost || 0) +
        this.form.totalTax;

      let paid = Number(this.form.totalPaid);
      if (paid <= this.form.netTotal) {
        this.form.dueAmount = (this.form.netTotal - paid).toFixed(2);
      } else {
        this.form.dueAmount = 0;
      }
      return;
    },

    async handleFormSubmit() {
      if (this.isSubmitting) {
        return;
      }
      
      this.isSubmitting = true;
      
      try {
        await this.updateInvoice();
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        this.isSubmitting = false;
      }
    },

    async updateInvoice() {
      try {
        this.formatFormValues();
        
        const validationErrors = [];
        
        if (!this.form.client || !this.form.client.chart_of_account_id) {
          validationErrors.push({
            type: "warning",
            title: this.$t("Chart of Account Required"),
            message: this.$t("Client must have a Chart of Account assigned before updating an invoice."),
            field: "client"
          });
        }

        if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
          validationErrors.push({
            type: "warning",
            title: this.$t("No Products Selected"),
            message: this.$t("Please select at least one product to update an invoice."),
            field: "selectedProducts"
          });
        }

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

        const paymentValidation = this.validatePaymentFields();
        if (!paymentValidation.isValid) {
          validationErrors.push(...paymentValidation.errors);
        }

        if (!this.validateCalculations()) {
          validationErrors.push({
            type: "error",
            title: this.$t("Calculation Error"),
            message: this.$t("There was an error in the calculations. Please refresh the page and try again."),
            field: "calculations"
          });
        }

        if (validationErrors.length > 0) {
          this.showMultipleValidationErrors(validationErrors);
          return;
        }

        this.loading = true;
        const { data } = await this.form.patch(
          window.location.origin + "/api/invoices/" + this.$route.params.slug
        );
        this.loading = false;

        if (data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Success"),
            text: this.$t("Invoice updated successfully"),
          });
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
        
        if (error.response?.status === 422) {
          const errors = error.response.data.errors;
          Object.keys(errors).forEach(field => {
            this.form.errors.set(field, errors[field][0]);
          });
          
          toast.fire({
            type: "error",
            title: this.$t("Validation Error"),
            text: this.$t("Please check the form for errors."),
          });
        } else if (error.response?.status === 404) {
          toast.fire({
            type: "error",
            title: this.$t("Not Found"),
            text: this.$t("Invoice not found."),
          });
        } else if (error.response?.status === 403) {
          toast.fire({
            type: "error",
            title: this.$t("Permission Denied"),
            text: this.$t("You don't have permission to update this invoice."),
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("An error occurred while updating the invoice. Please try again."),
          });
        }
      }
    },

    validatePaymentFields() {
      const errors = [];
      
      if (this.form.addPayment == 1) {
        if (!this.form.account) {
          errors.push({
            type: "error",
            title: this.$t("Account Required"),
            message: this.$t("Please select a bank account for the payment."),
            field: "account"
          });
        }
        
        if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
          errors.push({
            type: "error",
            title: this.$t("Paid Amount Required"),
            message: this.$t("Paid amount must be greater than 0."),
            field: "paidAmount"
          });
        }
        
        if (Number(this.form.paidAmount) > this.form.netTotal) {
          errors.push({
            type: "warning",
            title: this.$t("Payment Amount Warning"),
            message: this.$t("Paid amount exceeds invoice total. This will create a credit balance."),
            field: "paidAmount"
          });
        }
      }
      
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    },

    validateCalculations() {
      try {
        if (isNaN(this.form.subTotal) || isNaN(this.form.netTotal) || isNaN(this.form.totalTax)) {
          return false;
        }
        
        const calculatedNetTotal = this.form.subTotal + Number(this.form.transportCost || 0) + this.form.totalTax;
        if (Math.abs(calculatedNetTotal - this.form.netTotal) > 0.01) {
          return false;
        }
        
        return true;
      } catch (error) {
        return false;
      }
    },

    showMultipleValidationErrors(errors) {
      const firstError = errors[0];
      toast.fire({
        type: firstError.type,
        title: firstError.title,
        text: firstError.message,
        timer: firstError.timer || 5000,
        timerProgressBar: firstError.timerProgressBar || false,
      });
      
      console.group('Validation Errors');
      errors.forEach(error => {
        console.log(`${error.type.toUpperCase()}: ${error.title} - ${error.message}`);
      });
      console.groupEnd();
    },

    formatFormValues() {
      this.form.subTotal = Number(this.form.subTotal).toFixed(2);
      this.form.netTotal = Number(this.form.netTotal).toFixed(2);
      this.form.totalTax = Number(this.form.totalTax).toFixed(2);
      this.form.transportCost = this.form.transportCost ? Number(this.form.transportCost).toFixed(2) : '';
      this.form.discount = this.form.discount ? Number(this.form.discount).toFixed(2) : '';
      this.form.paidAmount = this.form.paidAmount ? Number(this.form.paidAmount).toFixed(2) : '';
      
      this.form.selectedProducts.forEach(item => {
        item.unitPrice = Number(item.unitPrice).toFixed(2);
        item.totalPrice = Number(item.totalPrice).toFixed(2);
        item.productTax = Number(item.productTax).toFixed(2);
        item.totalTax = Number(item.totalTax).toFixed(2);
        item.discount = item.discount ? Number(item.discount).toFixed(2) : 0;
      });
    },

    resetForm() {
      this.form.reset();
      this.getInvoice();
    },

    clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },

    onClientChange() {
      this.clearFieldError('client');
      if (this.form.addPayment == 1) {
        this.form.account = "";
        this.form.paidAmount = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
      }
    },

    onAddPaymentChange() {
      this.clearFieldError('addPayment');
      if (this.form.addPayment != 1) {
        this.form.account = "";
        this.form.paidAmount = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
      }
    },

    onAccountChange() {
      this.clearFieldError('account');
    },

    onPaidAmountChange() {
      this.clearFieldError('paidAmount');
    },

    async autoAssignClientChartOfAccount() {
      if (!this.form.client) {
        toast.fire({
          type: "error",
          title: this.$t("No Client Selected"),
          text: this.$t("Please select a client first."),
        });
        return;
      }

      this.isAutoAssigningClient = true;
      
      try {
        const { data } = await axios.post(
          window.location.origin + "/api/clients/" + this.form.client.slug + "/auto-assign-chart-of-account"
        );
        
        if (data.success) {
          this.form.client.chart_of_account_id = data.data.chart_of_account_id;
          
          toast.fire({
            type: "success",
            title: this.$t("Success"),
            text: this.$t("Chart of Account assigned successfully to client."),
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: data.message || this.$t("Failed to assign Chart of Account."),
          });
        }
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        
        let errorMessage = this.$t("An error occurred while assigning Chart of Account.");
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
        
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: errorMessage,
        });
      } finally {
        this.isAutoAssigningClient = false;
      }
    },

    async autoAssignProductChartOfAccount(product) {
      if (!product) {
        toast.fire({
          type: "error",
          title: this.$t("No Product Selected"),
          text: this.$t("Please select a product first."),
        });
        return;
      }

      this.isAutoAssigningProduct = product.id;
      
      try {
        const { data } = await axios.post(
          window.location.origin + "/api/products/" + product.slug + "/auto-assign-sales-account"
        );
        
        if (data.success) {
          product.sales_account_id = data.data.sales_account_id;
          
          toast.fire({
            type: "success",
            title: this.$t("Success"),
            text: this.$t("Sales Account assigned successfully to product."),
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: data.message || this.$t("Failed to assign Sales Account."),
          });
        }
      } catch (error) {
        console.error('Error auto-assigning sales account:', error);
        
        let errorMessage = this.$t("An error occurred while assigning Sales Account.");
        if (error.response?.data?.message) {
          errorMessage = error.response.data.message;
        }
        
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: errorMessage,
        });
      } finally {
        this.isAutoAssigningProduct = null;
      }
    },

    goToBankAccounts() {
      this.$router.push({ name: 'bank-accounts.index' });
    },

    setupGlobalErrorHandling() {
      this.axiosInterceptor = axios.interceptors.response.use(
        response => response,
        error => {
          if (error.response?.status === 401) {
            this.$router.push({ name: 'login' });
          }
          return Promise.reject(error);
        }
      );
    },

    cleanupGlobalErrorHandling() {
      if (this.axiosInterceptor) {
        axios.interceptors.response.eject(this.axiosInterceptor);
      }
    },

    toWord() {
      if (this.form.netTotal) {
        const toWords = new ToWords({
          localeCode: 'en-US',
          converterOptions: {
            currency: true,
            ignoreDecimal: false,
            ignoreZeroCurrency: false,
          }
        });
        return toWords.convert(this.form.netTotal);
      }
      return '';
    },
  },
}
</script>

<style lang="scss" scoped>
.client-status, .product-status, .account-status {
  .client-warning, .product-warning, .account-warning {
    color: #856404;
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 0.875rem;
  }
  
  .client-success, .product-success, .account-success {
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 0.875rem;
  }
}

.create-btn {
  cursor: pointer;
  border-left: none;
  background-color: #007bff;
  color: white;
  border-color: #007bff;
  
  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
}

.radio-group-horizontal {
  display: flex;
  gap: 20px;
  
  .form-check {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.custom-qty-input {
  .button-minus, .button-plus {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 0;
  }
  
  .quantity-field {
    width: 60px;
    text-align: center;
    border-left: none;
    border-right: none;
  }
}

.table-custom {
  th, td {
    vertical-align: middle;
  }
}

.invalid-feedback {
  display: block;
  margin-top: 5px;
}
</style>
