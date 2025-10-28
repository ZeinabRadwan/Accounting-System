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
                <button type="submit" class="btn btn-success" :form="'quotationCreateForm'" title="Save">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form id="quotationCreateForm" role="form" @submit.prevent="saveQuotation" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <!-- Date Field - Standalone Row -->
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="date">{{ $t("Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
              </div>
              <div class="row" v-if="items">
                <div class="form-group col-md-6">
                  <label for="client">{{ $t("Client") }}
                    <span class="required">*</span></label>
                  <div class="row">
                    <div class="col">
                      <div class="d-flex w-100">
                        <v-select class="flex-grow-1" v-model="form.client" :options="items" label="name"
                          :class="{ 
                            'is-invalid': form.errors.has('client'),
                            'rtl-select': isRTL
                          }" 
                          name="client"
                          :placeholder="$t('Select a client')" />
                        <!-- Show create button when no client selected -->
                        <ClientCreateModal v-if="!form.client" @reloadClients="getClients('latest')">
                          <div class="input-group-text create-btn">
                            <i class="fas fa-solid fa-plus-circle"></i>
                          </div>
                        </ClientCreateModal>
                        
                        <!-- Show edit button when client is selected -->
                        <div v-if="form.client" class="input-group-text create-btn edit-btn" @click="editSelectedClient">
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
                        }" name="product" :placeholder="$t('Search Items')"
                          @input="storeProduct(form.product)" />
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
                        <div v-for="(item, index) in form.selectedProducts" :key="index" class="debug-item mb-3 p-3 border rounded">
                          <div class="font-weight-bold text-dark mb-2">{{ item.name }}</div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="debug-step">
                                <strong>Subtotal:</strong> {{ formatToTwoDecimals(item.unitPrice) }} × {{ item.qty }} = {{ formatToTwoDecimals(item.unitPrice * item.qty) }}
                              </div>
                              <div class="debug-step">
                                <strong>Discount:</strong> {{ formatToTwoDecimals(item.discountAmount || 0) }}
                              </div>
                              <div class="debug-step">
                                <strong>After Discount:</strong> {{ formatToTwoDecimals((item.unitPrice * item.qty) - (item.discountAmount || 0)) }}
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
                                  <span :class="totalProductDiscount === form.totalDiscount ? 'text-success' : 'text-danger'">
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
                                  <span :class="totalAfterDiscount === (form.subTotal - form.totalDiscount) ? 'text-success' : 'text-danger'">
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
                      <tr v-for="(item, i) in form.selectedProducts" :key="i">
                        <td style="min-width: 50px;">{{ ++i }}</td>
                        <td style="min-width: 100px;">{{ item.code | withPrefix(prefix) }}</td>
                        <td style="min-width: 200px;">
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
                        <td style="min-width: 200px;">
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

                            <input type="number" step="any" :id="`Qty-${i}`" v-model="item.qty" name="quantity"
                              class="quantity-field border-0 incrementor" required min="1" :max="item.itemType == 'product' ? item.inventoryCount : null"
                              :class="{ 
                                'is-invalid': form.errors.has(`selectedProducts.${i-1}.qty`),
                                'insufficient-stock-input': Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
                              }"
                              @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'qty',
                                  i - 1,
                                  ''
                                )
                                "
                              :placeholder="$t('Quantity')" />

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
                        </td>
                        <td style="min-width: 200px;">
                          <div class="input-group custom-qty-input">
                            <input type="number" step="any" min="0" :id="`unitPrice-${i}`" v-model="item.unitPrice"
                              name="unitPrice" class="quantity-field border-0" required @change="
                                generateItemTotal(
                                  $event.target.value,
                                  'price',
                                  i - 1,
                                  ''
                                )
                                " />
                          </div>
                        </td>
                        <td class="no-currency" style="min-width: 120px;">{{ formatToTwoDecimals(item.unitPrice * item.qty) }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 180px;">
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
                              @change="calculateProductDiscount(i - 1)" />
                          </div>
                          <div v-if="form.errors.has(`selectedProducts.${i-1}.discount`) || form.errors.has(`selectedProducts.${i-1}.discountType`)" class="invalid-feedback d-block">
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discount`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discount`) }}</span>
                            <span v-if="form.errors.has(`selectedProducts.${i-1}.discountType`)" class="d-block">{{ form.errors.get(`selectedProducts.${i-1}.discountType`) }}</span>
                          </div>
                        </td>
                        <td class="no-currency" style="min-width: 120px;">{{ formatToTwoDecimals((item.unitPrice * item.qty) - (item.discountAmount || 0)) }} <span class="saudi-riyal">ê</span></td>
                        <td style="min-width: 150px;">
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
                        <td class="no-currency" style="min-width: 100px;">
                          <span class="form-control-plaintext form-control-sm text-center no-currency">
                            {{ formatToTwoDecimals(item.productTax) }}
                          </span>
                          <span class="saudi-riyal">ê</span>
                        </td>
                        <td class="no-currency" style="min-width: 120px;">{{ formatToTwoDecimals(item.totalPrice) }} <span class="saudi-riyal">ê</span></td>
                        <td class="text-right" style="min-width: 80px;">
                          <button type="button" class="btn btn-danger" @click="removeItem(item)">
                            <i class="fas fa-times"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="5" class="text-right">
                          <strong> {{ $t("Total") }} : {{ toWord() }} </strong>
                        </td>
                        <td class="no-currency">
                          <strong>{{ formatToTwoDecimals(totalUnitPrice) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td class="no-currency">
                          <strong>{{ formatToTwoDecimals(totalProductDiscount) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td class="no-currency">
                          <strong>{{ formatToTwoDecimals(totalAfterDiscount) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td>
                          <strong></strong>
                        </td>
                        <td class="no-currency">
                          <strong>{{ formatToTwoDecimals(totalProductTax) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td class="no-currency">
                          <strong>{{ formatToTwoDecimals(subtotal) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="row" v-if="!isSaudiArabia">
                <div class="form-group col-md-4">
                  <label for="discountType">{{
                    $t("Discount Type")
                  }}</label>
                  <select id="discountType" v-model="form.discountType" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discountType') }" name="discountType" @change="calculateSum">
                    <option value="0">{{ $t("Fixed") }}</option>
                    <option value="1">{{ $t("Percentage") }}(%)</option>
                  </select>
                  <has-error :form="form" field="discountType" />
                </div>
                <div class="form-group" :class="form.discountType == 1 ? 'col-md-2' : 'col-md-4'">
                  <label for="discount">{{ $t("Discount") }}
                    <span v-if="form.discountType == 1">(%)</span></label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1"
                    :max="form.discountType == 1 ? 100 : form.netTotal" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')" @change="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div v-if="form.discountType == 1" class="form-group col-md-2">
                  <label for="totalDiscount">{{
                    $t("Total discount")
                  }}</label>
                  <input id="totalDiscount" v-model="form.totalDiscount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalDiscount') }" name="totalDiscount" readonly />
                  <has-error :form="form" field="totalDiscount" />
                </div>
                <div class="form-group col-md-4">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="1"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" />
                    :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                  <span class="saudi-riyal">ê</span>
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>

              <div class="row">
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="orderTax">{{ $t("Quotation Tax") }}
                    <span class="required">*</span></label>
                  <v-select v-model="form.orderTax" :options="taxes" label="code"
                    :class="{ 
                      'is-invalid': form.errors.has('orderTax'),
                      'rtl-select': isRTL
                    }" 
                    name="orderTax"
                    :placeholder="$t('Select a tax type')" @input="calculateSum" />
                  <has-error :form="form" field="orderTax" />
                </div>
                <div v-if="taxes && !isSaudiArabia" class="form-group col-md-4">
                  <label for="totalTax">{{ $t("Total Tax") }}</label>
                  <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                  <span class="saudi-riyal">ê</span>
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group" :class="'col-md-4'">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                  <span class="saudi-riyal">ê</span>
                  <has-error :form="form" field="netTotal" />
                </div> 
                <div class="form-group col-md-4">
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
    <ClientEditModal 
      ref="clientEditModal"
      @reloadClients="getClients"
    />
    
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
import RTLMixin from '~/mixins/RTLMixin'

import { ToWords } from 'to-words';

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Quotation") };
  },
  mixins: [RTLMixin],
  components: {
    ToggleButton,
    ClientCreateModal,
    ClientEditModal,
    ProductCreateModal,
    ProductEditModal,
    StockAdjustmentModal
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Quotation",
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
        name: "Create",
        url: "",
      },
    ],
    form: new Form({
      client: "",
      reference: "",
      selectedProducts: [],
      subTotal: 0,
      netTotal: 0,
      discountType: 0,
      discount: "",
      totalDiscount: 0,
      orderTax: "",
      totalTax: 0,
      invoiceTax: 0,
      productTotalTax: 0,
      transportCost: "",
      date: new Date().toISOString().slice(0, 10),
      deliveryPlace: "",
      note: "",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
    }),
    products: "",
    taxes: "",
    prefix: "",
    
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
    ...mapGetters("operations", ["items", "appInfo"]),
    
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
    
    // Calculate subtotal (reactive) - WITH VAT for quotations
    subtotal() {
      return this.roundToTwoDecimals(this.totalAfterDiscount + this.totalProductTax);
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
      return this.$t("Create Quotation");
    }
  },
  
  watch: {
    // Watch for any changes and ensure title stays correct
    '$route'() {
      this.setCorrectTitle();
    }
  },
  
  created() {
    this.getClients();
    this.getProducts();
    this.getTaxes();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
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
      const correctTitle = this.$t("Create Quotation");
      if (document.title !== correctTitle) {
        console.log('Title changed, fixing it. Current:', document.title, 'Setting to:', correctTitle);
        document.title = correctTitle;
      }
    },
    
    // get all clients
    async getClients(selectedClient = 'default') {
      await this.$store.dispatch("operations/allData", { path: "/api/all-clients" });

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
      let defaultClientSlug = this.appInfo.defaultClientSlug;
      const defaultClient = this.items.find((item) => item.slug === defaultClientSlug);
      if (defaultClient) {
        this.form.client = defaultClient;
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
            ? product.regularPrice * (product.taxRate / 100)
            : product.regularPrice -
            product.regularPrice / (1 + product.taxRate / 100);
        let totalTax = productTax * qunatity;

        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.regularPrice,
          unitCost:
            product.taxType == "Exclusive"
              ? product.regularPrice + productTax
              : product.regularPrice,
          totalPrice:
            product.taxType == "Exclusive"
              ? 1 * (product.regularPrice + totalTax)
              : 1 * product.regularPrice,
          productTax: productTax,
          totalTax: totalTax,
          itemType: product.itemType,
          inventoryCount: product.inventoryCount,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.taxRate) || this.form.orderTax || this.taxes?.[0],
        });
      }
      this.generateItemTotal(qunatity, "qty", index, "");
      return;
    },

    // update array
    generateItemTotal(value, type, index, action) {
      let item = this.form.selectedProducts[index];
      if (item) {
        if (type == "qty") {
          let newQty = value;
          if (action == "increment") {
            newQty = Number(item.qty) + 1;
          } else if (action == "decrement") {
            if (item.qty > 0) {
              newQty = Number(item.qty) - 1;
            }
          }
          this.$set(item, 'qty', newQty);
        } else if (type == "price") {
          let newPrice = value;
          if (action == "increment") {
            newPrice = Number(item.unitPrice) + 1;
          } else if (action == "decrement") {
            if (item.unitPrice > 0) {
              newPrice = Number(item.unitPrice) - 1;
            }
          }
          this.$set(item, 'unitPrice', newPrice);
        }
        
        // Recalculate discount amount when quantity or price changes
        if (item.discount > 0) {
          if (item.discountType === "percentage") {
            this.$set(item, 'discountAmount', this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100));
          } else {
            this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
          }
        }
        
        // Use the new method to calculate totals with discount and VAT
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
      let item = this.form.selectedProducts[index];
      if (item) {
        if (item.discountType === "percentage") {
          this.$set(item, 'discountAmount', this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100));
        } else {
          this.$set(item, 'discountAmount', this.roundToTwoDecimals(Number(item.discount || 0)));
        }
        
        // Recalculate totals
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },

    // Calculate product VAT
    calculateProductVat(index) {
      let item = this.form.selectedProducts[index];
      if (item) {
        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          if (item.taxRate) {
            item.selectedVatRate = this.findMatchingVatRate(item.taxRate);
          }
          
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
          }
        }
        
        // Recalculate totals with new VAT rate
        this.generateItemTotalPrice(index);
        this.calculateSum();
      }
    },

    // Generate item total price with discount and VAT (aligned with invoice logic)
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

        // Set totalAfterDiscount for subtotal calculation (without VAT)
        item.totalAfterDiscount = this.roundToTwoDecimals(priceAfterDiscount);

        if (item.taxType == "Exclusive") {
          // VAT on discounted amount
          item.productTax = this.roundToTwoDecimals(priceAfterDiscount * (vatRate / 100));
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(priceAfterDiscount + item.totalTax);
        } else {
          // Inclusive: VAT is included in unit price; derive VAT from discounted price
          let discountedUnitPrice = this.roundToTwoDecimals(priceAfterDiscount / item.qty);
          item.unitPrice = discountedUnitPrice;
          item.productTax = this.roundToTwoDecimals(discountedUnitPrice - (discountedUnitPrice / (1 + vatRate / 100)));
          item.totalTax = this.roundToTwoDecimals(item.productTax * item.qty);
          item.totalPrice = this.roundToTwoDecimals(priceAfterDiscount);
        }

        this.form.selectedProducts[index] = item;
      }
    },

    // calculate sum (aligned with invoice logic)
    calculateSum() {
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

      // Quotation-level tax computed on (subTotal - globalDiscount)
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(
          (this.form.orderTax.rate / 100) * (this.form.subTotal - globalDiscount)
        ));
      }

      // Total tax = product VAT + quotation-level tax
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

    // save quotation
    async saveQuotation() {
      await this.form
        .post(window.location.origin + "/api/quotations")
        .then(({ data }) => {
          toast.fire({
            type: "success",
            title: this.$t("Quotation added successfully"),
          });
          this.clearTemporaryData()
          this.$router.push({
            name: "quotations.show",
            params: { slug: data.data.slug },
          });
        })
        .catch((error) => {
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
        transportCost: this.$t("Transport Cost"),
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
  },
  mounted() {
    this.loadTemporaryData();
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
  display: none; /* Hide debug panel by default */
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
</style>