<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card">
          <div class="card-header">
            <router-link :to="{ name: 'quotations.index' }" class="btn btn-info float-right">
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
            </router-link>
          </div>
          <!-- /.card-header -->
            <div class="card-body">
              <!-- Chart of Account Validation -->
              <ChartOfAccountValidation
                :client="form.client"
                :products="form.selectedProducts"
                type="invoice"
                @chart-of-account-assigned="handleChartOfAccountAssigned"
              />
              <!-- form start -->
              <form role="form" @submit.prevent="createInvoice" @keydown="form.onKeydown($event)">
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t('Client') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.client" :options="items" label="name"
                    :class="{ 'is-invalid': form.errors.has('client') }" name="client"
                    :placeholder="$t('Select a client')" />
                  
                  <!-- Client Chart of Account Status -->
                  <div class="client-status mt-2" v-if="form.client">
                    <div v-if="!form.client.chart_of_account_id" class="client-warning">
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
                <div class="form-group col-md-6">
                  <label for="reference">{{ $t('Reference') }}</label>
                  <input id="reference" v-model="form.reference" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reference') }" name="reference"
                    :placeholder="$t('Enter reference')" />
                  <has-error :form="form" field="reference" />
                </div>
              </div>
              <div class="row" v-if="products">
                <div class="form-group col-md-12">
                  <label for="product">{{ $t('Select Items') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.product" :options="products" label="label" :class="{
                    'is-invalid': form.errors.has('selectedProducts'),
                  }" name="product" :placeholder="$t('Search Items')"
                    @input="storeProduct(form.product)" />
                  
                  <!-- Product Chart of Account Status -->
                  <div class="product-status mt-2" v-if="form.selectedProducts && form.selectedProducts.length > 0">
                    <div v-if="!allProductsHaveSalesAccounts" class="product-warning">
                      <span class="ml-2">{{ $t('Some products need Sales Accounts assigned') }}</span>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="autoAssignAllProductsChartOfAccount"
                        :disabled="isAutoAssigningProduct"
                      >
                        <i :class="isAutoAssigningProduct ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                        {{ isAutoAssigningProduct ? $t('Assigning...') : $t('Auto-Assign All') }}
                      </button>
                    </div>
                  </div>
                  
                  <has-error :form="form" field="selectedProducts" />
                </div>
              </div>
              <div v-if="form.selectedProducts && form.selectedProducts.length > 0" class="row mt-3 mb-4">
                <div class="table-responsive table-custom w-95 m-auto">
                  <table class="table table-hover table-sm text-center quotations-create-table">
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
                              data-field="quantity" 
                              :disabled="item.isFromQuotation"
                              @click="
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
                              :readonly="item.isFromQuotation"
                              @input="generateItemTotal(item.qty, 'qty', index, '')"
                              placeholder="Quantity" />

                            <input type="button" value="+" class="button-plus icon-shape icon-sm btn-primary"
                              data-field="quantity" 
                              :disabled="item.isFromQuotation"
                              @click="
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
                              :readonly="item.isFromQuotation"
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
                              :disabled="item.isFromQuotation"
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
                              :readonly="item.isFromQuotation"
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
                              v-model="item.vat_rate_id" 
                              class="form-control form-control-sm flex-grow-1"
                              :class="{ 'is-invalid': form.errors.has(`selectedProducts.${index}.vat_rate_id`) }"
                              :disabled="item.isFromQuotation"
                              @change="onVatRateChange(index)"
                              style="min-width: 80px;">
                              <option value="">{{ $t('Select VAT') }}</option>
                              <option 
                                v-for="tax in taxes" 
                                :key="tax.id" 
                                :value="tax.id">
                                {{ tax.code }} ({{ tax.rate }}%)
                              </option>
                            </select>
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${index}.vat_rate_id`)" class="invalid-feedback d-block">
                            {{ form.errors.get(`selectedProducts.${index}.vat_rate_id`) }}
                          </div>
                        </td>
                        <td style="min-width: 60px;">
                          <span class="form-control-plaintext form-control-sm text-center">
                            {{ formatToTwoDecimals(item.taxType === 'Inclusive' ? (item.totalTax || 0) : (item.productTax || 0)) }} <span class="saudi-riyal">ê</span>
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

              <div class="row">
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="discountType">{{
                    $t('Discount Type')
                  }}</label>
                  <select id="discountType" v-model="form.discountType" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType" @change="calculateSum"
                    @keyup="calculateSum">
                    <option value="0">{{ $t('Fixed') }}</option>
                    <option value="1">{{ $t('Percentage') }}(%)</option>
                  </select>
                  <has-error :form="form" field="discountType" />
                </div>
                <div class="form-group" :class="form.discountType == 1 ? 'col-md-2' : 'col-md-4'" v-if="!isSaudiArabia">
                  <label for="discount">{{ $t('Discount') }}
                    <span v-if="form.discountType == 1">(%)</span></label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1"
                    :max="form.discountType == 1 ? 100 : form.netTotal" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div v-if="form.discountType == 1 && !isSaudiArabia" class="form-group col-md-2">
                  <label for="totalDiscount">{{
                    $t('Total discount')
                  }}</label>
                  <input id="totalDiscount" v-model="form.totalDiscount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalDiscount') }" name="totalDiscount" readonly />
                  <has-error :form="form" field="totalDiscount" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="transportCost">{{
                    $t('Transport Cost')
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="1"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>

              <div class="row">
                <div v-if="taxes" class="form-group col-md-4" style="display: none;">
                  <label for="orderTax">{{ $t('Invoice Tax') }}
                    <span v-if="!isSaudiArabia" class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }" name="orderTax"
                    :placeholder="$t('Select a tax type')" @input="calculateSum" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes" class="form-group col-md-4">
                  <label for="totalTax">{{ $t('Total Tax') }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group col-md-4">
                  <label for="netTotal">{{ $t('Net Total') }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <has-error :form="form" field="netTotal" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="poReference">{{
                    $t('PO Reference')
                  }}</label>
                  <input id="poReference" v-model="form.poReference" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('poReference') }" name="poReference"
                    :placeholder="$t('Enter PO reference')" />
                  <has-error :form="form" field="poReference" />
                </div>
                <div class="form-group col-md-4">
                  <label for="paymentTerms">{{
                    $t('Payment Terms')
                  }}</label>
                  <input id="paymentTerms" v-model="form.paymentTerms" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paymentTerms') }" name="paymentTerms"
                    :placeholder="$t('Enter payment terms')" />
                  <has-error :form="form" field="paymentTerms" />
                </div>
                <div class="form-group col-md-4">
                  <label for="addPayment">{{ $t('Add Payment?') }}</label>
                  <select id="addPayment" v-model="form.addPayment" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('addPayment') }" name="addPayment">
                    <option value="" selected disabled>
                      {{ $t('Select an option') }}
                    </option>
                    <option value="1">{{ $t('Yes') }}</option>
                    <option value="0">{{ $t('No') }}</option>
                  </select>
                  <has-error :form="form" field="addPayment" />
                </div>
              </div>
              <div class="row" v-if="form.addPayment == 1 &&
                accounts &&
                form.selectedProducts &&
                form.selectedProducts.length > 0
                ">
                <div class="form-group col-md-6">
                  <label for="account">{{ $t('Account') }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.account" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('account') }" name="account"
                    :placeholder="$t('Select an account')">
                     <template slot="option" slot-scope="option">
                        <img :src="option.image" style="width: 30px; height: 30px;" />
                        {{ option.label }}
                    </template>
                  </v-select>
                  
                  <!-- Account Chart of Account Status -->
                  <div class="account-status mt-2" v-if="form.account">
                    <div v-if="!form.account.chartOfAccountId" class="account-warning">
                      <span class="ml-2">{{ $t('Bank Account needs Chart of Account') }}</span>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-warning ml-2"
                        @click="autoAssignBankAccountChartOfAccount"
                        :disabled="isAutoAssigningAccount"
                      >
                        <i :class="isAutoAssigningAccount ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                        {{ isAutoAssigningAccount ? $t('Assigning...') : $t('Auto-Assign') }}
                      </button>
                    </div>
                    <div v-else class="account-success">
                      <i class="fas fa-check-circle text-success"></i>
                      <span class="ml-2">{{ $t('Bank Account Chart of Account ready') }}</span>
                    </div>
                  </div>
                  
                  <has-error :form="form" field="account" />
                  
                  <!-- Payment validation hint -->
                  <div v-if="form.addPayment == 1 && !form.account" class="text-warning mt-1">
                    <small>{{ $t("Please choose a bank account") }}</small>
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="paidAmount">{{ $t('Paid Amount')
                  }}<span class="required">*</span></label>
                  <input id="paidAmount" v-model="form.paidAmount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('paidAmount') }" name="paidAmount" min="1"
                    :max="form.netTotal" :placeholder="$t('Enter an amount')" />
                  <has-error :form="form" field="paidAmount" />
                  
                  <!-- Payment validation hint -->
                  <div v-if="form.addPayment == 1 && (!form.paidAmount || Number(form.paidAmount) <= 0)" class="text-warning mt-1">
                    <small>{{ $t("Paid amount must be greater than 0") }}</small>
                  </div>
                  
                  <!-- Due Amount Display -->
                  <div class="mt-2" v-if="form.addPayment == 1 && form.paidAmount">
                    <small class="text-muted">
                      {{ $t("Due Amount") }}: <strong>{{ dueAmount  }} <span class="saudi-riyal">ê</span></strong>
                    </small>
                  </div>
                </div>
                <!-- <div class="form-group col-md-6">
                  <label for="chequeNo">{{ $t('Cheque No') }}</label>
                  <input id="chequeNo" v-model="form.chequeNo" type="text" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('chequeNo') }" name="chequeNo"
                    :placeholder="$t('Enter a cheque number')" />
                  <has-error :form="form" field="chequeNo" />
                </div> -->
                <div class="form-group col-md-6">
                  <label for="receiptNo">{{ $t('Receipt No') }}</label>
                  <input id="receiptNo" v-model="form.receiptNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('receiptNo') }" name="receiptNo"
                    :placeholder="$t('Enter a receipt no')" />
                  <has-error :form="form" field="receiptNo" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="deliveryPlace">{{
                    $t('Delivery Place')
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-md-4">
                  <label for="date">{{ $t('Date') }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
                <div class="form-group col-md-4" v-if="!isSaudiArabia">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
              
              <!-- Form buttons inside the form -->
              <div class="form-group text-right">
                <button 
                  type="submit"
                  :disabled="!isFormReady || form.busy"
                  class="btn btn-primary"
                  :class="{ 'btn-warning': !isFormReady }"
                >
                  <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
                  <i v-else :class="isFormReady ? 'fas fa-save' : 'fas fa-times'" /> 
                  {{ form.busy ? $t('Saving...') : (isFormReady ? $t('Save') : $t('Complete Required Fields')) }}
                </button>
                <button type="reset" class="btn btn-info ml-2" @click="form.reset()">
                  <i class="fas fa-power-off" /> {{ $t('Reset') }}
                </button>
              </div>
            </form>
            <!-- /.card-body -->
        </div>
      </div>
    </div>

    <!-- Debug Panel - Always Visible -->
    <div class="row mt-4 debug-panel">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-info text-white">
            <h4 class="card-title mb-0">
              🔍 Debug Panel - Calculation Steps
              <span class="badge badge-light ml-2">DEBUG MODE ACTIVE</span>
            </h4>
          </div>
          <div class="card-body">
            <!-- Individual Item Calculations -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-primary">Individual Item Calculations:</h5>
                <div v-if="form.selectedProducts && form.selectedProducts.length > 0">
                  <div v-for="(item, index) in form.selectedProducts" :key="`debug-item-${index}`" 
                       class="alert alert-light border-left-primary">
                    <h6 class="mb-2">{{ item.name }}</h6>
                    <div class="row">
                      <div class="col-md-2">
                        <strong>Subtotal:</strong> {{ item.unitPrice }} × {{ item.qty }} = {{ item.totalBeforeDiscount }}
                      </div>
                      <div class="col-md-2">
                        <strong>Discount Type:</strong> {{ item.discountType || 'fixed' }}
                      </div>
                      <div class="col-md-2">
                        <strong>Discount Amount:</strong> {{ item.discountAmount || 0 }}
                      </div>
                      <div class="col-md-2">
                        <strong>After Discount:</strong> {{ item.totalAfterDiscount }}
                      </div>
                      <div class="col-md-2">
                        <strong>VAT Rate ID:</strong> 
                        <span :class="item.vat_rate_id ? 'badge badge-success' : 'badge badge-warning'">
                          {{ item.vat_rate_id || 'Not Set' }}
                        </span>
                      </div>
                      <div class="col-md-2">
                        <strong>VAT:</strong> {{ item.totalTax }}
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-md-3">
                        <strong>VAT Code:</strong> {{ item.selectedVatRate ? item.selectedVatRate.code : 'Not Set' }}
                      </div>
                      <div class="col-md-3">
                        <strong>VAT %:</strong> {{ item.selectedVatRate ? item.selectedVatRate.rate : 0 }}%
                      </div>
                      <div class="col-md-3">
                        <strong>Product Tax:</strong> {{ item.productTax }}
                      </div>
                      <div class="col-md-3">
                        <strong>Total with VAT:</strong> {{ item.totalPrice }}
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-12">
                        <strong>VAT Type Calculation:</strong> 
                        <span class="badge badge-info">{{ getVatTypeInfo(item).formula }}</span>
                        <small class="text-muted ml-2">(VAT Amount ÷ Total After Discount = VAT Type %)</small>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-12">
                        <strong>Total with VAT:</strong> {{ item.totalPrice }}
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="alert alert-warning">
                  No products selected
                </div>
              </div>
            </div>

            <!-- Summary Totals -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-success">Summary Totals:</h5>
                <div class="row">
                  <div class="col-md-3">
                    <div class="card bg-light">
                      <div class="card-body text-center">
                        <h6>Total Unit Price</h6>
                        <h4 class="text-primary">{{ getTotalUnitPrice() }}</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card bg-light">
                      <div class="card-body text-center">
                        <h6>Total Discount</h6>
                        <h4 class="text-warning">{{ getTotalDiscount() }}</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card bg-light">
                      <div class="card-body text-center">
                        <h6>Total After Discount</h6>
                        <h4 class="text-info">{{ getTotalAfterDiscount() }}</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card bg-light">
                      <div class="card-body text-center">
                        <h6>Total Tax</h6>
                        <h4 class="text-danger">{{ getProductTotalTax() }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form Values -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-info">Form Values:</h5>
                <div class="row">
                  <div class="col-md-3">
                    <strong>form.subTotal:</strong> {{ form.subTotal }}
                  </div>
                  <div class="col-md-3">
                    <strong>form.totalDiscount:</strong> {{ form.totalDiscount }}
                  </div>
                  <div class="col-md-3">
                    <strong>form.totalTax:</strong> {{ form.totalTax }}
                  </div>
                  <div class="col-md-3">
                    <strong>form.netTotal:</strong> {{ form.netTotal }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Template Display -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-warning">Template Display:</h5>
                <div class="row">
                  <div class="col-md-6">
                    <strong>Summary Final Total:</strong> {{ getSubTotal() }}.00
                  </div>
                  <div class="col-md-6">
                    <strong>Amount in Words:</strong> {{ toWord() }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Calculation Steps -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-dark">Calculation Steps:</h5>
                <ol>
                  <li>Sum of all item totals = {{ getSubTotal() }}</li>
                  <li>form.netTotal = {{ form.netTotal }}</li>
                  <li>Are they equal? 
                    <span :class="getSubTotal() === form.netTotal ? 'text-success' : 'text-danger'">
                      {{ getSubTotal() === form.netTotal ? '✅ YES' : '❌ NO' }}
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <!-- VAT Information from Quotation Products -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-danger">VAT Information from Quotation Products:</h5>
                <div v-if="form.selectedProducts && form.selectedProducts.length > 0">
                  <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                      <thead class="thead-light">
                        <tr>
                          <th>Product</th>
                          <th>Code</th>
                          <th>VAT Rate ID</th>
                          <th>VAT Code</th>
                          <th>VAT %</th>
                          <th>VAT Type %</th>
                          <th>Product Tax</th>
                          <th>Total Tax</th>
                          <th>After Discount</th>
                          <th>Total with VAT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="vat in getQuotationProductVatRates()" :key="`vat-${vat.index}`">
                          <td>{{ vat.productName }}</td>
                          <td>{{ vat.productCode }}</td>
                          <td>
                            <span :class="vat.vatRateId ? 'badge badge-success' : 'badge badge-warning'">
                              {{ vat.vatRateId || 'Not Set' }}
                            </span>
                          </td>
                          <td>{{ vat.vatRateCode }}</td>
                          <td>{{ vat.vatRatePercentage }}%</td>
                          <td>
                            <span class="badge badge-info">
                              {{ calculateVatTypePercentage(form.selectedProducts[vat.index]) }}%
                            </span>
                          </td>
                          <td>{{ vat.productTax }}</td>
                          <td>{{ vat.totalTax }}</td>
                          <td>{{ vat.totalAfterDiscount }}</td>
                          <td>{{ vat.totalPrice }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <!-- VAT Summary -->
                  <div class="row mt-3">
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>Total VAT</h6>
                          <h4 class="text-danger">{{ getVatSummary().totalVat }}</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>Items with VAT</h6>
                          <h4 class="text-success">{{ getVatSummary().itemsWithVat }} / {{ getVatSummary().totalItems }}</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>Items without VAT</h6>
                          <h4 class="text-warning">{{ getVatSummary().itemsWithoutVat }}</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>VAT Rate Groups</h6>
                          <h4 class="text-info">{{ getVatSummary().vatRateGroups.length }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- VAT Rate Groups Breakdown -->
                  <div class="row mt-3" v-if="getVatSummary().vatRateGroups.length > 0">
                    <div class="col-12">
                      <h6 class="text-primary">VAT Rate Groups Breakdown:</h6>
                      <div class="row">
                        <div v-for="group in getVatSummary().vatRateGroups" :key="`group-${group.vatRateId}`" class="col-md-4 mb-2">
                          <div class="card bg-light">
                            <div class="card-body text-center">
                              <h6>{{ group.vatRateCode }} ({{ group.vatRatePercentage }}%)</h6>
                              <p class="mb-1">Items: {{ group.count }}</p>
                              <p class="mb-0">Total Tax: {{ group.totalTax }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="alert alert-warning">
                  No products selected
                </div>
              </div>
            </div>

            <!-- Discount Information from Quotation Products -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-warning">Discount Information from Quotation Products:</h5>
                <div v-if="form.selectedProducts && form.selectedProducts.length > 0">
                  <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                      <thead class="thead-light">
                        <tr>
                          <th>Product</th>
                          <th>Code</th>
                          <th>Discount Type</th>
                          <th>Discount Amount</th>
                          <th>Before Discount</th>
                          <th>After Discount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="discount in getQuotationProductDiscounts()" :key="`discount-${discount.index}`">
                          <td>{{ discount.productName }}</td>
                          <td>{{ discount.productCode }}</td>
                          <td>
                            <span :class="discount.discountType === 'percentage' ? 'badge badge-info' : 'badge badge-primary'">
                              {{ discount.discountType }}
                            </span>
                          </td>
                          <td>{{ discount.discountAmount }}</td>
                          <td>{{ discount.totalBeforeDiscount }}</td>
                          <td>{{ discount.totalAfterDiscount }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <!-- Discount Summary -->
                  <div class="row mt-3">
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>Total Discount</h6>
                          <h4 class="text-warning">{{ getDiscountSummary().totalDiscount }}</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>Items with Discount</h6>
                          <h4 class="text-info">{{ getDiscountSummary().itemsWithDiscount }} / {{ getDiscountSummary().totalItems }}</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>Fixed Discounts</h6>
                          <h4 class="text-primary">{{ getDiscountSummary().fixedDiscounts.length }}</h4>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="card bg-light">
                        <div class="card-body text-center">
                          <h6>Percentage Discounts</h6>
                          <h4 class="text-success">{{ getDiscountSummary().percentageDiscounts.length }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="alert alert-warning">
                  No products selected
                </div>
              </div>
            </div>

            <!-- Current State -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-secondary">Current State:</h5>
                <div class="row">
                  <div class="col-md-4">
                    <strong>Selected Products Count:</strong> {{ form.selectedProducts ? form.selectedProducts.length : 0 }}
                  </div>
                  <div class="col-md-4">
                    <strong>Is Saudi Arabia:</strong> {{ isSaudiArabia ? 'true' : 'false' }}
                  </div>
                  <div class="col-md-4">
                    <strong>Debug Panel Visible:</strong> ✅ YES
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary Table Comparison -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-primary">Summary Table Comparison:</h5>
                <div class="table-responsive">
                  <table class="table table-bordered table-sm">
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
                        <td><strong>Subtotal</strong></td>
                        <td>{{ getTotalUnitPrice() }}</td>
                        <td>{{ form.subTotal }}</td>
                        <td>{{ getTotalUnitPrice() }}.00</td>
                        <td>
                          <span :class="getTotalUnitPrice() === form.subTotal ? 'text-success' : 'text-danger'">
                            {{ getTotalUnitPrice() === form.subTotal ? '✅' : '❌' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Discount</strong></td>
                        <td>{{ getTotalDiscount() }}</td>
                        <td>{{ form.totalDiscount }}</td>
                        <td>{{ getTotalDiscount() }}.00</td>
                        <td>
                          <span :class="getTotalDiscount() === form.totalDiscount ? 'text-success' : 'text-danger'">
                            {{ getTotalDiscount() === form.totalDiscount ? '✅' : '❌' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>After Discount</strong></td>
                        <td>{{ getTotalAfterDiscount() }}</td>
                        <td>{{ form.subTotal - form.totalDiscount }}</td>
                        <td>{{ getTotalAfterDiscount() }}.00</td>
                        <td>
                          <span :class="getTotalAfterDiscount() === (form.subTotal - form.totalDiscount) ? 'text-success' : 'text-danger'">
                            {{ getTotalAfterDiscount() === (form.subTotal - form.totalDiscount) ? '✅' : '❌' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Tax</strong></td>
                        <td>{{ getProductTotalTax() }}</td>
                        <td>{{ form.totalTax }}</td>
                        <td>{{ getProductTotalTax() }}.00</td>
                        <td>
                          <span :class="getProductTotalTax() === form.totalTax ? 'text-success' : 'text-danger'">
                            {{ getProductTotalTax() === form.totalTax ? '✅' : '❌' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>Final Total</strong></td>
                        <td>{{ getSubTotal() }}</td>
                        <td>{{ form.netTotal }}</td>
                        <td>{{ getSubTotal() }}.00</td>
                        <td>
                          <span :class="getSubTotal() === form.netTotal ? 'text-success' : 'text-danger'">
                            {{ getSubTotal() === form.netTotal ? '✅' : '❌' }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Quotation Totals Storage -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-success">📊 Quotation Totals (Stored Values):</h5>
                <div class="alert alert-info">
                  <div class="row">
                    <div class="col-md-4">
                      <strong>isQuotationLoaded:</strong> 
                      <span :class="isQuotationLoaded ? 'badge badge-success' : 'badge badge-warning'">
                        {{ isQuotationLoaded ? '✅ TRUE' : '❌ FALSE' }}
                      </span>
                    </div>
                    <div class="col-md-4">
                      <strong>Using Quotation Totals:</strong> 
                      <span :class="isQuotationLoaded ? 'badge badge-success' : 'badge badge-secondary'">
                        {{ isQuotationLoaded ? 'YES' : 'NO' }}
                      </span>
                    </div>
                    <div class="col-md-4">
                      <strong>Products from Quotation:</strong> 
                      <span class="badge badge-info">
                        {{ form.selectedProducts.filter(p => p.isFromQuotation).length }} / {{ form.selectedProducts.length }}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-sm">
                    <thead class="thead-light">
                      <tr>
                        <th>Field</th>
                        <th>Quotation Total (Stored)</th>
                        <th>Current Form Value</th>
                        <th>Computed Value</th>
                        <th>Match Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>subTotal</strong></td>
                        <td>{{ quotationTotals.subTotal }}</td>
                        <td>{{ form.subTotal }}</td>
                        <td>{{ getTotalUnitPrice() }}</td>
                        <td>
                          <span :class="quotationTotals.subTotal === form.subTotal ? 'badge badge-success' : 'badge badge-danger'">
                            {{ quotationTotals.subTotal === form.subTotal ? '✅ MATCH' : '❌ MISMATCH' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>totalDiscount</strong></td>
                        <td>{{ quotationTotals.totalDiscount }}</td>
                        <td>{{ form.totalDiscount }}</td>
                        <td>{{ getTotalDiscount() }}</td>
                        <td>
                          <span :class="quotationTotals.totalDiscount === form.totalDiscount ? 'badge badge-success' : 'badge badge-danger'">
                            {{ quotationTotals.totalDiscount === form.totalDiscount ? '✅ MATCH' : '❌ MISMATCH' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>totalAfterDiscount</strong></td>
                        <td>{{ quotationTotals.totalAfterDiscount }}</td>
                        <td>{{ form.subTotal - form.totalDiscount }}</td>
                        <td>{{ getTotalAfterDiscount() }}</td>
                        <td>
                          <span :class="quotationTotals.totalAfterDiscount === (form.subTotal - form.totalDiscount) ? 'badge badge-success' : 'badge badge-danger'">
                            {{ quotationTotals.totalAfterDiscount === (form.subTotal - form.totalDiscount) ? '✅ MATCH' : '❌ MISMATCH' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>totalTax</strong></td>
                        <td>{{ quotationTotals.totalTax }}</td>
                        <td>{{ form.productTotalTax }}</td>
                        <td>{{ getProductTotalTax() }}</td>
                        <td>
                          <span :class="quotationTotals.totalTax === form.productTotalTax ? 'badge badge-success' : 'badge badge-danger'">
                            {{ quotationTotals.totalTax === form.productTotalTax ? '✅ MATCH' : '❌ MISMATCH' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>totalAfterTax</strong></td>
                        <td>{{ quotationTotals.totalAfterTax }}</td>
                        <td>{{ quotationTotals.totalAfterDiscount + quotationTotals.totalTax }}</td>
                        <td>{{ getSubTotal() }}</td>
                        <td>
                          <span :class="quotationTotals.totalAfterTax === getSubTotal() ? 'badge badge-success' : 'badge badge-danger'">
                            {{ quotationTotals.totalAfterTax === getSubTotal() ? '✅ MATCH' : '❌ MISMATCH' }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>netTotal</strong></td>
                        <td>{{ quotationTotals.netTotal }}</td>
                        <td>{{ form.netTotal }}</td>
                        <td>{{ getSubTotal() }}</td>
                        <td>
                          <span :class="quotationTotals.netTotal === form.netTotal ? 'badge badge-success' : 'badge badge-danger'">
                            {{ quotationTotals.netTotal === form.netTotal ? '✅ MATCH' : '❌ MISMATCH' }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Detailed Calculation Breakdown -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-danger">🔢 Detailed Calculation Breakdown:</h5>
                <div class="card bg-light">
                  <div class="card-body">
                    <h6 class="text-primary mb-3">Step-by-Step Calculation Formulas:</h6>
                    <div class="debug-steps">
                      <div class="step">
                        <strong>1. Subtotal (Total Unit Price):</strong><br>
                        <code v-if="isQuotationLoaded">
                          Using Quotation: {{ quotationTotals.subTotal }}<br>
                          Formula: Sum of (salePrice × quantity) for all products
                        </code>
                        <code v-else>
                          Formula: Sum of (unitPrice × qty) for all products<br>
                          Calculation: {{ getCalculationBreakdown().subtotalFormula }}
                        </code>
                      </div>
                      <div class="step">
                        <strong>2. Total Discount:</strong><br>
                        <code v-if="isQuotationLoaded">
                          Using Quotation: {{ quotationTotals.totalDiscount }}<br>
                          Formula: Sum of discount_amount for all products
                        </code>
                        <code v-else>
                          Formula: Sum of discountAmount for all products<br>
                          Calculation: {{ getCalculationBreakdown().discountFormula }}
                        </code>
                      </div>
                      <div class="step">
                        <strong>3. Total After Discount:</strong><br>
                        <code v-if="isQuotationLoaded">
                          Using Quotation: {{ quotationTotals.totalAfterDiscount }}<br>
                          Formula: subTotal - totalDiscount
                        </code>
                        <code v-else>
                          Formula: subTotal - totalDiscount<br>
                          Calculation: {{ getCalculationBreakdown().afterDiscountFormula }}
                        </code>
                      </div>
                      <div class="step">
                        <strong>4. Total VAT/Tax:</strong><br>
                        <code v-if="isQuotationLoaded">
                          Using Quotation: {{ quotationTotals.totalTax }}<br>
                          Formula: Sum of taxAmount for all products
                        </code>
                        <code v-else>
                          Formula: Sum of (taxType === 'Inclusive' ? totalTax : productTax) for all products<br>
                          Calculation: {{ getCalculationBreakdown().taxFormula }}
                        </code>
                      </div>
                      <div class="step">
                        <strong>5. Total After Tax:</strong><br>
                        <code v-if="isQuotationLoaded">
                          Using Quotation: {{ quotationTotals.totalAfterTax }}<br>
                          Formula: totalAfterDiscount + totalTax
                        </code>
                        <code v-else>
                          Formula: totalAfterDiscount + totalTax<br>
                          Calculation: {{ getCalculationBreakdown().afterTaxFormula }}
                        </code>
                      </div>
                      <div class="step">
                        <strong>6. Net Total (Final):</strong><br>
                        <code v-if="isQuotationLoaded">
                          Using Quotation: {{ quotationTotals.netTotal }}<br>
                          Formula: totalAfterTax (or quotation total if available)
                        </code>
                        <code v-else>
                          Formula: totalAfterTax + transportCost - globalDiscount<br>
                          Calculation: {{ getCalculationBreakdown().netTotalFormula }}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Product-Level Calculation Breakdown -->
            <div class="row mb-4">
              <div class="col-12">
                <h5 class="text-warning">📦 Product-Level Calculation Breakdown:</h5>
                <div v-if="form.selectedProducts && form.selectedProducts.length > 0">
                  <div v-for="(item, index) in form.selectedProducts" :key="`calc-${index}`" class="card mb-3">
                    <div class="card-header bg-light">
                      <strong>{{ item.name }} ({{ item.code }})</strong>
                      <span v-if="item.isFromQuotation" class="badge badge-success ml-2">From Quotation</span>
                      <span v-else class="badge badge-info ml-2">Manual Entry</span>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="debug-step">
                            <strong>Unit Price:</strong> {{ item.unitPrice }}<br>
                            <strong>Quantity:</strong> {{ item.qty }}<br>
                            <strong>Total Before Discount:</strong> {{ item.totalBeforeDiscount || (item.unitPrice * item.qty) }}<br>
                            <small class="text-muted">Formula: unitPrice × qty</small>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="debug-step">
                            <strong>Discount Type:</strong> {{ item.discountType || 'fixed' }}<br>
                            <strong>Discount Value:</strong> {{ item.discount || 0 }}<br>
                            <strong>Discount Amount:</strong> {{ item.discountAmount || 0 }}<br>
                            <small class="text-muted" v-if="item.discountType === 'percentage'">
                              Formula: (totalBeforeDiscount × discount) / 100
                            </small>
                            <small class="text-muted" v-else>
                              Formula: discount (fixed amount)
                            </small>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-6">
                          <div class="debug-step">
                            <strong>Total After Discount:</strong> {{ item.totalAfterDiscount || 0 }}<br>
                            <small class="text-muted">Formula: totalBeforeDiscount - discountAmount</small>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="debug-step">
                            <strong>Tax Type:</strong> {{ item.taxType || 'N/A' }}<br>
                            <strong>VAT Rate ID:</strong> {{ item.vat_rate_id || 'Not Set' }}<br>
                            <strong>VAT Code:</strong> {{ item.selectedVatRate ? item.selectedVatRate.code : 'N/A' }}<br>
                            <strong>VAT %:</strong> {{ item.selectedVatRate ? item.selectedVatRate.rate : 0 }}%
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-6">
                          <div class="debug-step">
                            <strong>Product Tax (per unit):</strong> {{ item.productTax || 0 }}<br>
                            <strong>Total Tax:</strong> {{ item.totalTax || 0 }}<br>
                            <small class="text-muted" v-if="item.taxType === 'Inclusive'">
                              Formula: totalTax = productTax × qty (tax included in price)
                            </small>
                            <small class="text-muted" v-else>
                              Formula: productTax = tax amount, totalTax = productTax (tax added to price)
                            </small>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="debug-step">
                            <strong>Total Price (with VAT):</strong> {{ item.totalPrice || 0 }}<br>
                            <small class="text-muted" v-if="item.taxType === 'Inclusive'">
                              Formula: totalPrice = totalAfterDiscount (tax already included)
                            </small>
                            <small class="text-muted" v-else>
                              Formula: totalPrice = totalAfterDiscount + totalTax
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="alert alert-warning">
                  No products selected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Stock Adjustment Modal -->
  <StockAdjustmentModal 
    :is-open="showStockAdjustmentModal"
    :product="selectedProductForStockAdjustment"
    @close="closeStockAdjustmentModal"
    @adjust-quantity="adjustProductQuantity"
    @stock-updated="handleStockUpdated"
  />
  
  <!-- Product Edit Modal -->
  <ProductEditModal 
    ref="productEditModal"
    @reloadProducts="getProducts"
    @productUpdated="handleProductUpdated"
  />
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'
import ChartOfAccountValidation from '~/components/ChartOfAccountValidation'
import StockAdjustmentModal from '~/components/StockAdjustmentModal'
import ProductEditModal from '~/components/ProductEditModal'
import Swal from 'sweetalert2'

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
})

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Quotation To Invoice') }
  },
  components: {
    ChartOfAccountValidation,
    StockAdjustmentModal,
    ProductEditModal
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
    showStockAdjustmentModal: false,
    selectedProductForStockAdjustment: null,
    quotationTotals: {
      subTotal: 0,
      totalTax: 0,
      totalDiscount: 0,
      totalAfterDiscount: 0,
      totalAfterTax: 0,
      netTotal: 0,
    },
    isQuotationLoaded: false,
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
      return this.form.selectedProducts.every(product => product.vat_rate_id);
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
      // Note: data.data.discount is the global discount, not product discount total
      // We'll set form.totalDiscount to product discount total later after calculating quotationTotals
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
      
      // Store quotation totals for exact matching
      const totalUnitPrice = data.data.products.reduce((sum, p) => sum + (p.salePrice * p.quantity), 0)
      
      // Calculate total discount - recalculate if discount_amount is 0 but discount value exists
      const totalProductDiscount = data.data.products.reduce((sum, p) => {
        let discountAmount = p.discount_amount || 0
        const discountType = p.discountType || p.discount_type || 'fixed'
        const discountValue = p.discount || 0
        const totalBeforeDiscount = p.salePrice * p.quantity
        
        // If discount value exists but discount_amount is 0, recalculate discount_amount
        if (discountValue > 0 && discountAmount === 0 && totalBeforeDiscount > 0) {
          if (discountType === 'percentage') {
            discountAmount = this.roundToTwoDecimals((totalBeforeDiscount * discountValue) / 100)
          } else {
            discountAmount = this.roundToTwoDecimals(discountValue)
          }
        }
        
        return sum + discountAmount
      }, 0)
      
      const totalAfterDiscount = totalUnitPrice - totalProductDiscount
      const totalProductTax = data.data.products.reduce((sum, p) => sum + (p.taxAmount || 0), 0)
      const totalAfterTax = totalAfterDiscount + totalProductTax
      
      this.quotationTotals = {
        subTotal: totalUnitPrice,
        totalTax: totalProductTax,
        totalDiscount: totalProductDiscount,
        totalAfterDiscount: totalAfterDiscount,
        totalAfterTax: totalAfterTax,
        netTotal: data.data.total || data.data.quotationTotal || totalAfterTax,
      }
      
      this.form.selectedProducts = this.assignProducts(data.data.products)
      this.isQuotationLoaded = true
      
      // Set default tax if needed (for Saudi Arabia or if quotation has no tax)
      this.setDefaultTax()
      
      // Use quotation totals directly instead of recalculating
      // Note: form.totalDiscount is set to product discount total, not global discount
      this.form.subTotal = this.quotationTotals.subTotal
      this.form.productTotalTax = this.quotationTotals.totalTax
      this.form.totalDiscount = this.quotationTotals.totalDiscount
      // Set netTotal to totalAfterTax (sum of Total After Tax column) instead of netTotal from quotation
      this.form.netTotal = Number(this.quotationTotals.totalAfterTax.toFixed(2))
      
      // Debug logging
      console.log('Quotation data loaded:', {
        client: this.form.client,
        selectedProducts: this.form.selectedProducts,
        quotationTotals: this.quotationTotals,
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
      
      // Only recalculate if quotation is not loaded (for new products added manually)
      if (!this.isQuotationLoaded) {
        // Recalculate VAT for all products after taxes are loaded
        this.recalculateAllProductsVat()
        
        // Force update VAT rate selection for all products
        this.forceUpdateVatRateSelection()
      }
      
      // Debug: Log VAT rate matching
      console.log('VAT Rate Matching Debug:', {
        taxes: this.taxes,
        selectedProducts: this.form.selectedProducts.map(item => ({
          name: item.name,
          vat_rate_id: item.vat_rate_id,
          selectedVatRate: item.selectedVatRate
        }))
      })
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
          vat_rate_id: product.vat_rate_id || null,
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
      // Skip recalculation if product is from quotation
      if (item && item.isFromQuotation) {
        return
      }
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
          item.totalTax = this.roundToTwoDecimals(item.productTax)
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
      // If quotation is loaded, use quotation totals directly instead of recalculating
      if (this.isQuotationLoaded && this.quotationTotals) {
        this.form.subTotal = this.quotationTotals.subTotal
        this.form.productTotalTax = this.quotationTotals.totalTax
        this.form.totalDiscount = this.quotationTotals.totalDiscount
        // Continue with global discount and invoice tax calculations
      } else {
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
      }

      // calculate global discount (skip for Saudi Arabia)
      let globalDiscount = 0
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) { // Percentage
          globalDiscount = Number(((this.form.discount / 100) * this.form.subTotal).toFixed(2))
        } else { // Fixed
          globalDiscount = Number(this.form.discount)
        }
      }

      // calculate invoice tax
      if (this.isSaudiArabia) {
        // For Saudi Arabia: Use product VAT as total tax
        this.form.totalTax = this.form.productTotalTax
      } else {
        // For other countries: Calculate invoice tax
        this.form.totalTax = 0
        if (this.form.orderTax) {
          this.form.totalTax = Number(((this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)).toFixed(2))
        }
      }

      // calculate final total
      if (this.isQuotationLoaded && this.quotationTotals) {
        // Use quotation totalAfterTax (sum of Total After Tax column) instead of netTotal
        this.form.netTotal = Number(this.quotationTotals.totalAfterTax.toFixed(2))
      } else if (this.isSaudiArabia) {
        // For Saudi Arabia: Net Total = SubTotal + Product VAT (no global discount, no invoice tax, no transport cost)
        this.form.netTotal = Number((this.form.subTotal + this.form.productTotalTax).toFixed(2))
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

    // get quotation products - use exact values from quotation without recalculating
    assignProducts(quotationProducts) {
      for (var key in quotationProducts) {
        let quotationProduct = quotationProducts[key]
        
        // Find the VAT rate object based on vat_rate_id
        let vatRate = this.taxes ? this.taxes.find(tax => tax.id === quotationProduct.vat_rate_id) : null;
        
        // Use exact values from quotation - do not recalculate
        const totalBeforeDiscount = quotationProduct.salePrice * quotationProduct.quantity
        let discountAmount = quotationProduct.discount_amount || 0
        const discountType = quotationProduct.discountType || quotationProduct.discount_type || 'fixed'
        let discountValue = quotationProduct.discount || 0
        
        // If discount value exists but discount_amount is 0, recalculate discount_amount for consistency
        if (discountValue > 0 && discountAmount === 0 && totalBeforeDiscount > 0) {
          if (discountType === 'percentage') {
            discountAmount = this.roundToTwoDecimals((totalBeforeDiscount * discountValue) / 100)
          } else {
            discountAmount = this.roundToTwoDecimals(discountValue)
          }
        }
        
        const totalAfterDiscount = totalBeforeDiscount - discountAmount
        const taxAmount = quotationProduct.taxAmount || 0
        
        // For VAT display: use taxAmount directly (for Inclusive, it's already total; for Exclusive, it's per unit * qty)
        // The taxAmount from API is the total tax amount for the product
        let productTax = 0
        let totalTax = taxAmount
        
        // For Inclusive tax, productTax is per unit, for Exclusive it's total
        if (quotationProduct.taxType === 'Inclusive' && quotationProduct.quantity > 0) {
          productTax = this.roundToTwoDecimals(taxAmount / quotationProduct.quantity)
        } else {
          productTax = taxAmount
        }
        
        // Calculate totalPrice correctly based on tax type
        // For Exclusive: totalPrice = totalAfterDiscount + totalTax
        // For Inclusive: totalPrice = totalAfterDiscount (tax already included)
        let totalPrice = 0
        if (quotationProduct.taxType === 'Inclusive') {
          // Tax is already included in the price
          totalPrice = totalAfterDiscount
        } else {
          // Tax is added to the price
          totalPrice = totalAfterDiscount + totalTax
        }
        
        // Round to 2 decimals
        totalPrice = this.roundToTwoDecimals(totalPrice)
        
        // Use discount value from quotation, or calculate from discountAmount if not provided
        if (discountValue === 0 && discountAmount > 0 && totalBeforeDiscount > 0) {
          // Calculate discount value if not provided but discountAmount exists
          if (discountType === 'percentage') {
            discountValue = this.roundToTwoDecimals((discountAmount / totalBeforeDiscount) * 100)
          } else {
            discountValue = discountAmount
          }
        }
        
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
          totalPrice: totalPrice,
          productTax: productTax,
          totalTax: totalTax,
          sales_account_id: quotationProduct.sales_account_id || null,
          selectedVatRate: vatRate,
          vat_rate_id: quotationProduct.vat_rate_id || (vatRate ? vatRate.id : null),
          itemType: quotationProduct.itemType || 'product',
          discountType: discountType,
          discount: discountValue,
          discountAmount: discountAmount,
          totalBeforeDiscount: totalBeforeDiscount,
          totalAfterDiscount: totalAfterDiscount,
          // Flag to prevent recalculation
          isFromQuotation: true,
        })
      }
      // Don't call calculateSum - use quotation totals directly
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
        toast.fire({
          type: errors[0].type,
          title: errors[0].title,
          text: errors[0].message,
          timer: errors[0].timer || 5000,
          timerProgressBar: errors[0].timerProgressBar || false
        });
      } else {
        // Multiple errors - show as alert with list
        const errorList = errors.map(err => `• ${err.message}`).join('\n');
        this.$toast.warning(
          this.$t('Validation Errors'),
          this.$t('Please fix the following issues:') + '\n' + errorList
        );
      }
    },

    // Format form values before submission
    formatFormValues() {
      // Calculate sub_total as: subTotal - totalDiscount + totalTax
      const calculatedSubTotal = Number((this.form.subTotal - (this.form.totalDiscount || 0) + (this.form.totalTax || this.form.productTotalTax || 0)).toFixed(2));
      this.form.subTotal = calculatedSubTotal;
      
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
        const productsWithoutVatRate = this.form.selectedProducts.filter(product => !product.vat_rate_id);
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
            toast.fire({
              type: 'success',
              title: this.$t('Invoice created successfully'),
            })
            this.$router.push({ name: 'invoices.index' })
          })
          .catch((error) => {
            console.error('Invoice creation error:', error);
            toast.fire({
              type: 'error',
              title: this.$t('Please check your input and try again.'),
            })
          })
      } catch (error) {
        console.error('Unexpected error:', error);
        toast.fire({
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
        toast.fire({
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
          
          toast.fire({
            type: 'success',
            title: this.$t('Chart of Account assigned successfully'),
          });
        } else {
          toast.fire({
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
        
        toast.fire({
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
          toast.fire({
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
        
        toast.fire({
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
        
        toast.fire({
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
      this.$refs.productEditModal.openModal(item);
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
        updatedProduct.unitPrice = updatedData.regularPrice || updatedProduct.unitPrice;
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
        
        // Recalculate totals for the updated product
        this.generateItemTotal(updatedProduct.unitPrice, 'price', productIndex, '');
        this.calculateSum();
      } else {
        console.warn('Could not find product to update in selectedProducts array');
      }
    },

    // Open stock adjustment modal
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
        
        Swal.fire({
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

    // calculate product discount
    calculateProductDiscount(index) {
      let item = this.form.selectedProducts[index];
      // Skip recalculation if product is from quotation
      if (item && item.isFromQuotation) {
        return
      }
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

    // Handle VAT rate change
    onVatRateChange(index) {
      let item = this.form.selectedProducts[index];
      // Skip recalculation if product is from quotation
      if (item && item.isFromQuotation) {
        return
      }
      if (item) {
        // Find the selected VAT rate object
        const selectedVatRate = this.taxes ? this.taxes.find(tax => tax.id === item.vat_rate_id) : null;
        
        if (selectedVatRate) {
          // Calculate VAT based on the total after discount
          const vatRate = selectedVatRate.rate || 0;
          item.productTax = this.roundToTwoDecimals((item.totalAfterDiscount * vatRate) / 100);
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);
          
          // Store the full VAT rate object for reference
          item.selectedVatRate = selectedVatRate;
        } else {
          // No VAT rate selected
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
          item.selectedVatRate = null;
        }
        
        // Update the item in the array
        this.$set(this.form.selectedProducts, index, item);
        this.calculateSum();
      }
    },

    // calculate product VAT (legacy method for backward compatibility)
    calculateProductVat(index) {
      this.onVatRateChange(index);
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
    // format to two decimals for display
    formatToTwoDecimals(value) {
      if (value === null || value === undefined || value === '') return '0.00';
      const num = Number(value);
      if (isNaN(num)) return '0.00';
      return num.toFixed(2);
    },

    // Methods to get totals on-demand (forces reactivity)
    getTotalUnitPrice() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.subTotal);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.unitPrice * item.qty);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getTotalAfterDiscount() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalAfterDiscount);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getTotalDiscount() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalDiscount);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getProductTotalTax() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalTax);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      // Sum VAT column values (totalTax for Inclusive, productTax for Exclusive)
      const total = this.form.selectedProducts.reduce((total, item) => {
        const vatValue = item.taxType === 'Inclusive' ? (item.totalTax || 0) : (item.productTax || 0);
        return total + vatValue;
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    getSubTotal() {
      // Use quotation totals if available
      if (this.isQuotationLoaded && this.quotationTotals) {
        return this.roundToTwoDecimals(this.quotationTotals.totalAfterTax);
      }
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      const total = this.form.selectedProducts.reduce((total, item) => {
        return total + (item.totalPrice || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // return number to word with language support
    toWord() {
      const amount = this.form.netTotal || 0;
      
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

    // Get discount information from quotation products
    getQuotationProductDiscounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      
      return this.form.selectedProducts.map((product, index) => ({
        productName: product.name,
        productCode: product.code,
        discountType: product.discountType || 'fixed',
        discountAmount: product.discountAmount || 0,
        discountPercentage: product.discountType === 'percentage' ? product.discount : 0,
        totalBeforeDiscount: product.totalBeforeDiscount || 0,
        totalAfterDiscount: product.totalAfterDiscount || 0,
        index: index
      }));
    },

    // Display discount summary
    getDiscountSummary() {
      const discounts = this.getQuotationProductDiscounts();
      const totalDiscount = discounts.reduce((sum, item) => sum + item.discountAmount, 0);
      const fixedDiscounts = discounts.filter(item => item.discountType === 'fixed');
      const percentageDiscounts = discounts.filter(item => item.discountType === 'percentage');
      
      return {
        totalDiscount,
        fixedDiscounts,
        percentageDiscounts,
        totalItems: discounts.length,
        itemsWithDiscount: discounts.filter(item => item.discountAmount > 0).length
      };
    },

    // Get VAT information from quotation products
    getQuotationProductVatRates() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      
      return this.form.selectedProducts.map((product, index) => {
        const vatRate = this.taxes ? this.taxes.find(tax => tax.id === product.vat_rate_id) : null;
        
        return {
          productName: product.name,
          productCode: product.code,
          vatRateId: product.vat_rate_id || null,
          vatRateCode: vatRate ? vatRate.code : 'Not Set',
          vatRatePercentage: vatRate ? vatRate.rate : 0,
          productTax: product.productTax || 0,
          totalTax: product.totalTax || 0,
          totalAfterDiscount: product.totalAfterDiscount || 0,
          totalPrice: product.totalPrice || 0,
          index: index
        };
      });
    },

    // Display VAT summary
    getVatSummary() {
      const vatRates = this.getQuotationProductVatRates();
      const totalVat = vatRates.reduce((sum, item) => sum + item.totalTax, 0);
      const itemsWithVat = vatRates.filter(item => item.vatRateId && item.totalTax > 0);
      const itemsWithoutVat = vatRates.filter(item => !item.vatRateId || item.totalTax === 0);
      
      // Group by VAT rate
      const vatRateGroups = {};
      vatRates.forEach(item => {
        const key = item.vatRateId || 'no-vat';
        if (!vatRateGroups[key]) {
          vatRateGroups[key] = {
            vatRateId: item.vatRateId,
            vatRateCode: item.vatRateCode,
            vatRatePercentage: item.vatRatePercentage,
            count: 0,
            totalTax: 0
          };
        }
        vatRateGroups[key].count++;
        vatRateGroups[key].totalTax += item.totalTax;
      });
      
      return {
        totalVat,
        itemsWithVat: itemsWithVat.length,
        itemsWithoutVat: itemsWithoutVat.length,
        totalItems: vatRates.length,
        vatRateGroups: Object.values(vatRateGroups)
      };
    },

    // Recalculate VAT for all products to ensure consistency
    recalculateAllProductsVat() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return;
      }
      
      this.form.selectedProducts.forEach((item, index) => {
        // Skip recalculation if product is from quotation
        if (item.isFromQuotation) {
          return;
        }
        
        // Recalculate totalBeforeDiscount and totalAfterDiscount
        item.totalBeforeDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = this.roundToTwoDecimals(item.totalBeforeDiscount - (item.discountAmount || 0));
        
        // Find the VAT rate object based on vat_rate_id
        const selectedVatRate = this.taxes ? this.taxes.find(tax => tax.id === item.vat_rate_id) : null;
        
        // Recalculate VAT if VAT rate is selected
        if (selectedVatRate && selectedVatRate.rate) {
          const vatRate = selectedVatRate.rate;
          item.productTax = this.roundToTwoDecimals((item.totalAfterDiscount * vatRate) / 100);
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);
          
          // Store the full VAT rate object for reference
          item.selectedVatRate = selectedVatRate;
        } else {
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
          item.selectedVatRate = null;
        }
        
        // Update the item in the array
        this.$set(this.form.selectedProducts, index, item);
      });
      
      // Recalculate totals
      this.calculateSum();
    },

    // Calculate VAT type percentage: vat / Total After Discount
    calculateVatTypePercentage(item) {
      if (!item || !item.totalAfterDiscount || item.totalAfterDiscount <= 0) {
        return 0;
      }
      
      const vatAmount = item.totalTax || item.productTax || 0;
      const percentage = this.roundToTwoDecimals((vatAmount / item.totalAfterDiscount) * 100);
      return percentage;
    },

    // Get VAT type information for debug display
    getVatTypeInfo(item) {
      const percentage = this.calculateVatTypePercentage(item);
      const vatAmount = item.totalTax || item.productTax || 0;
      const totalAfterDiscount = item.totalAfterDiscount || 0;
      
      return {
        percentage: percentage,
        vatAmount: vatAmount,
        totalAfterDiscount: totalAfterDiscount,
        formula: `${vatAmount} / ${totalAfterDiscount} = ${percentage}%`
      };
    },

    // Get detailed calculation breakdown for debug display
    getCalculationBreakdown() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return {
          subtotalFormula: 'No products',
          discountFormula: 'No products',
          afterDiscountFormula: 'No products',
          taxFormula: 'No products',
          afterTaxFormula: 'No products',
          netTotalFormula: 'No products'
        };
      }

      // Build subtotal formula
      const subtotalParts = this.form.selectedProducts.map((item) => {
        return `${item.unitPrice || 0} × ${item.qty || 0}`;
      });
      const subtotalFormula = subtotalParts.join(' + ') + ` = ${this.getTotalUnitPrice()}`;

      // Build discount formula
      const discountParts = this.form.selectedProducts
        .filter(item => item.discountAmount && item.discountAmount > 0)
        .map((item) => {
          return `${item.discountAmount || 0}`;
        });
      const discountFormula = discountParts.length > 0 
        ? discountParts.join(' + ') + ` = ${this.getTotalDiscount()}`
        : `0 (no discounts) = ${this.getTotalDiscount()}`;

      // Build after discount formula
      const afterDiscountFormula = `${this.getTotalUnitPrice()} - ${this.getTotalDiscount()} = ${this.getTotalAfterDiscount()}`;

      // Build tax formula
      const taxParts = this.form.selectedProducts
        .filter(item => {
          const vatValue = item.taxType === 'Inclusive' ? (item.totalTax || 0) : (item.productTax || 0);
          return vatValue > 0;
        })
        .map((item) => {
          const vatValue = item.taxType === 'Inclusive' ? (item.totalTax || 0) : (item.productTax || 0);
          return `${vatValue}`;
        });
      const taxFormula = taxParts.length > 0
        ? taxParts.join(' + ') + ` = ${this.getProductTotalTax()}`
        : `0 (no tax) = ${this.getProductTotalTax()}`;

      // Build after tax formula
      const afterTaxFormula = `${this.getTotalAfterDiscount()} + ${this.getProductTotalTax()} = ${this.getSubTotal()}`;

      // Build net total formula
      const transportCost = Number(this.form.transportCost || 0);
      const globalDiscount = this.form.discountType == 1 
        ? (this.getTotalAfterDiscount() * Number(this.form.discount || 0)) / 100
        : Number(this.form.discount || 0);
      const netTotalFormula = `${this.getSubTotal()} + ${transportCost} - ${globalDiscount} = ${this.form.netTotal}`;

      return {
        subtotalFormula: subtotalFormula,
        discountFormula: discountFormula,
        afterDiscountFormula: afterDiscountFormula,
        taxFormula: taxFormula,
        afterTaxFormula: afterTaxFormula,
        netTotalFormula: netTotalFormula
      };
    },

    // Force update VAT rate selection for all products
    forceUpdateVatRateSelection() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0 || !this.taxes) {
        return;
      }
      
      this.form.selectedProducts.forEach((item, index) => {
        // Skip recalculation if product is from quotation
        if (item.isFromQuotation) {
          // Only update selectedVatRate object if vat_rate_id exists, but don't recalculate values
          if (item.vat_rate_id) {
            const matchingVatRate = this.taxes.find(tax => tax.id === item.vat_rate_id);
            if (matchingVatRate) {
              this.$set(this.form.selectedProducts[index], 'selectedVatRate', matchingVatRate);
            }
          }
          return;
        }
        
        if (item.vat_rate_id) {
          // Find the matching VAT rate
          const matchingVatRate = this.taxes.find(tax => tax.id === item.vat_rate_id);
          if (matchingVatRate) {
            // Update the selectedVatRate object
            this.$set(this.form.selectedProducts[index], 'selectedVatRate', matchingVatRate);
            
            // Recalculate VAT with the correct rate
            const vatRate = matchingVatRate.rate;
            item.productTax = this.roundToTwoDecimals((item.totalAfterDiscount * vatRate) / 100);
            item.totalTax = this.roundToTwoDecimals(item.productTax);
            item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);
            
            // Update the item
            this.$set(this.form.selectedProducts, index, item);
          }
        }
      });
      
      // Recalculate totals
      this.calculateSum();
    },
  },
}
</script>

<style lang="scss" scoped>
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
.form-control{
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
  display: none !important; /* Hide debug panel by default */
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

.saudi-riyal {
  font-weight: bold;
  color: #28a745;
}
</style>