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
              {{ $t("Create Invoice") }}
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
                            @click="autoAssignProductChartOfAccount(form.selectedProducts[0], 'sales')"
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
                          <div class="d-flex align-items-center">
                            <span v-if="Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
                              " v-tooltip="$t('Insufficient Stock')" class="badge badge-danger p-2 mr-2">
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
                  {{ form.busy ? $t("Saving...") : $t("Save") }}
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
    <!-- Product Edit Modal -->
    <ProductEditModal 
      ref="productEditModal"
      @reloadProducts="getProducts"
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

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Invoice") };
  },
  components: {
    ToggleButton,
    ClientCreateModal,
    ProductCreateModal,
    ProductEditModal,
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
      return this.form.addPayment == 1 && 
             this.accounts && 
             this.form.selectedProducts && 
             this.form.selectedProducts.length > 0;
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






  },
  created() {
    this.getClients();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  mounted() {
    // Set up global error handling
    this.setupGlobalErrorHandling();
    
    // Ensure VAT calculations are up to date after component is mounted
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
    // Clean up global error handlers
    this.cleanupGlobalErrorHandling();
  },
  methods: {
    // get all clients
    async getClients(selectedClient = 'default') {
      try {
        await this.$store.dispatch("operations/allData", {
          path: "/api/all-clients",
        });
        // assign default client
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
      }
    },

    // update array
    generateItemTotal(value, field, index, type) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type === "increment") {
          if (field === "qty") {
            item.qty = item.qty + 1;
          } else if (field === "price") {
            item.unitPrice = this.roundToTwoDecimals(item.unitPrice + 1);
          }
        } else if (type === "decrement") {
          if (field === "qty" && item.qty > 1) {
            item.qty = item.qty - 1;
          } else if (field === "price" && item.unitPrice > 0) {
            item.unitPrice = this.roundToTwoDecimals(item.unitPrice - 1);
          }
        } else {
          if (field === "qty") {
            item.qty = Number(value);
            // Clear quantity validation error when value changes
            this.clearProductErrors(index);
          } else if (field === "price") {
            item.unitPrice = this.roundToTwoDecimals(Number(value));
            // Clear unit price validation error when value changes
            this.clearProductErrors(index);
          }
        }
        
        // Recalculate totals
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },

    // Helper method to round to 2 decimal places
    roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },

    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Clear discount validation errors when values change
        this.clearProductErrors(index);
        
        if (item.discountType === "percentage") {
          item.discountAmount = this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100);
        } else {
          item.discountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
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
        // Clear VAT validation errors when values change
        this.clearProductErrors(index);
        
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



    // generate item total price
    generateItemTotalPrice(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        
        // Calculate price after discount
        let priceAfterDiscount = this.roundToTwoDecimals((item.unitPrice * item.qty) - (item.discountAmount || 0));
        
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
        
        // Calculate tax based on discounted price
        if (item.taxType == "Exclusive") {
          item.productTax = this.roundToTwoDecimals(priceAfterDiscount * (vatRate / 100));
          item.totalTax = this.roundToTwoDecimals(item.productTax * item.qty);
          item.totalPrice = this.roundToTwoDecimals(priceAfterDiscount + item.totalTax);
        } else {
          // For inclusive tax, recalculate based on discounted unit price
          let discountedUnitPrice = this.roundToTwoDecimals(priceAfterDiscount / item.qty);
          item.unitPrice = discountedUnitPrice;
          item.unitCost = this.roundToTwoDecimals(discountedUnitPrice + (discountedUnitPrice * (vatRate / 100)));
          item.productTax = this.roundToTwoDecimals(item.unitCost - item.unitPrice);
          item.totalTax = this.roundToTwoDecimals(item.productTax * item.qty);
          item.totalPrice = this.roundToTwoDecimals(item.qty * item.unitCost);
        }
        
        this.form.selectedProducts[index] = item;
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
      
      return;
    },

         // calculate sum
     calculateSum() {
       // Update products with default VAT rate if needed
       this.updateProductsWithDefaultVatRate();
       
       // calculate subtotal with proper decimal precision
       this.form.subTotal = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (
         prev,
         cur
       ) {
         return prev + cur.totalPrice;
       }, 0));

       // calculate product tax with proper decimal precision
       this.form.productTotalTax = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (
         prev,
         cur
       ) {
         return prev + cur.totalTax;
       }, 0));
       


       // calculate total product discount with proper decimal precision
       this.form.totalDiscount = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (
         prev,
         cur
       ) {
         return prev + (cur.discountAmount || 0);
       }, 0));
       


       // calculate global discount with proper decimal precision
       let globalDiscount = 0;
       if (!this.isSaudiArabia && this.form.discount > 0) {
         if (this.form.discountType == 1) { // Percentage
           globalDiscount = this.roundToTwoDecimals((this.form.discount / 100) * this.form.subTotal);
         } else { // Fixed
           globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
         }
       }

       // Calculate Invoice Tax based on selected tax rate (skip for Saudi Arabia)
       this.form.invoiceTax = 0;
       if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
         // Calculate invoice tax on the subtotal after global discount
         this.form.invoiceTax = this.roundToTwoDecimals(
           (this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)
         );
       }

       // Total tax is the sum of individual product VATs PLUS invoice tax
       this.form.totalTax = this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax);

       // calculate final total with proper decimal precision
       // For Saudi Arabia: Net Total = SubTotal (no global discount, no invoice tax, no transport cost)
       // For other countries: Net Total = SubTotal - Global Discount + Invoice Tax + Transport Cost
       if (this.isSaudiArabia) {
         this.form.netTotal = this.roundToTwoDecimals(this.form.subTotal);
       } else {
         this.form.netTotal = this.roundToTwoDecimals(
           this.form.subTotal -
           globalDiscount +
           this.form.invoiceTax +
           Number(this.form.transportCost || 0)
         );
       }
       return;
     },

    // return number to word
    toWord(){
      const toWords = new ToWords();
      let words = toWords.convert(this.form.subTotal);
      return words + ' Only';
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
        Swal.fire(
          this.$t("Error!"),
          this.$t("Please select a valid thumbnail with size less than 2 MB"),
          "error"
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
          const errorMessage = error.response.data.message || this.$t("Data Processing Error");
          toast.fire({
            type: "error",
            title: this.$t("Data Error"),
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
          // Generic error fallback
          toast.fire({
            type: "error",
            title: this.$t("Unexpected Error"),
            text: this.$t("Something went wrong. Please try again or contact support if the problem persists."),
            timer: 6000,
            timerProgressBar: true,
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
        // Validate subtotal
        const calculatedSubTotal = this.form.selectedProducts.reduce((total, item) => {
          return total + Number(item.totalPrice);
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
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
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
      
      if (this.form.client) {
        this.form.client = this.items.find(
          (item) => item.id === this.form.client.id
        );
        if (this.form.client && !this.form.client.chart_of_account_id) {
          this.form.client = this.items[0];
        }
      }
      
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
          this.form.client.chart_of_account_id = response.data.chart_of_account_id;
          
          // Refresh clients list to get updated data
          await this.getClients('default'); // Use 'default' instead of 'latest'
          
          // Restore the EXACT same client selection
          if (this.items) {
            const updatedClient = this.items.find(c => c.slug === currentClientSlug);
            if (updatedClient) {
              this.form.client = updatedClient;
            }
          }
          
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
        text: this.$t("An unexpected error occurred. Please try again or contact support."),
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
          
          // Refresh products list to get updated data
          await this.getProducts();
          
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

    // Handle add payment radio button change
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
        
        // Show helpful message about required payment fields
        toast.fire({
          type: "info",
          title: this.$t("Payment Information Required"),
          text: this.$t("Please select a bank account and enter the paid amount."),
          timer: 4000,
          timerProgressBar: true,
        });
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
  },
};
</script>

<style scoped>
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

.btn-primary {
  background: #007bff;
  border-color: #007bff;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s ease;
}

/* Remove padding for button-plus icon-shape icon-sm btn-primary elements */
.button-plus.icon-shape.icon-sm.btn-primary {
  padding: 0;
}

.btn-primary:hover {
  background: #0056b3;
  border-color: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
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
</style>

