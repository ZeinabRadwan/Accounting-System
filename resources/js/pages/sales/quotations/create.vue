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
                <div class="form-group col-12 col-sm-6 col-md-4">
                  <label for="date">{{ $t("Date") }}</label>
                  <input id="date" v-model="form.date" type="date" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('date') }" name="date" />
                  <has-error :form="form" field="date" />
                </div>
              </div>
              <div class="row" v-if="items">
                <div class="form-group col-12 col-md-6">
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
                <div class="form-group col-12 col-md-6">
                  <label for="reference">{{ $t("Reference") }}</label>
                  <input id="reference" v-model="form.reference" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('reference') }" name="reference"
                    :placeholder="$t('Enter reference')" />
                  <has-error :form="form" field="reference" />
                </div>
              </div>
              <div class="row" v-if="products">
                <div class="form-group col-12">
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
              <div v-if="showDebugPanel" class="row mt-3 mb-3">
                <div class="col-12">
                  <div class="card bg-light">
                    <div class="card-header">
                      <h6 class="mb-0">
                        🔍 Debug Panel - Calculation Steps
                        <span class="badge badge-info ml-2">
                          DEBUG MODE ACTIVE
                        </span>
                      </h6>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12 col-lg-6">
                          <h6>Individual Item Calculations:</h6>
                          <div v-if="form.selectedProducts && form.selectedProducts.length > 0">
                            <div v-for="(item, index) in form.selectedProducts" :key="index" class="mb-2 p-2 border rounded">
                              <strong>{{ item.name }}</strong><br>
                              <small>
                                Subtotal: {{ item.unitPrice }} × {{ item.qty }} = {{ formatToTwoDecimals(item.unitPrice * item.qty) }}<br>
                                Discount: {{ item.discountAmount || 0 }}<br>
                                After Discount: {{ item.totalAfterDiscount || 0 }}<br>
                                VAT: {{ item.totalTax || 0 }}<br>
                                <strong>Total with VAT: {{ item.totalPrice || 0 }}</strong>
                              </small>
                            </div>
                          </div>
                          <div v-else class="text-muted">
                            <em>No products added yet. Add a product to see individual calculations.</em>
                          </div>
                        </div>
                        <div class="col-12 col-lg-6">
                          <h6>Summary Totals:</h6>
                          <div class="mb-2">
                            <strong>Computed Values:</strong><br>
                            <small>
                              Total Unit Price: {{ totalUnitPrice }}<br>
                              Total Discount: {{ totalProductDiscount }}<br>
                              Total After Discount: {{ totalAfterDiscount }}<br>
                              Total Tax: {{ totalProductTax }}<br>
                            </small>
                          </div>
                          <div class="mb-2">
                            <strong>Form Values:</strong><br>
                            <small>
                              form.subTotal: {{ form.subTotal }}<br>
                              form.totalDiscount: {{ form.totalDiscount }}<br>
                              form.totalTax: {{ form.totalTax }}<br>
                              <strong>form.netTotal: {{ form.netTotal }}</strong><br>
                            </small>
                          </div>
                          <div class="mb-2">
                            <strong>Template Display:</strong><br>
                            <small>
                              Summary Final Total: {{ formatToTwoDecimals(form.netTotal) }}<br>
                              Amount in Words: {{ toWord() }}
                            </small>
                          </div>
                          <div class="mb-2">
                            <strong>Calculation Steps:</strong><br>
                            <small>
                              Step 1: Subtotal = {{ formatToTwoDecimals(form.subTotal) }}<br>
                              Step 2: Transport = {{ formatToTwoDecimals(form.transportCost || 0) }}<br>
                              Step 3: Discount = {{ formatToTwoDecimals(form.discount || 0) }}<br>
                              Step 4: Tax = {{ formatToTwoDecimals(form.totalTax || 0) }}<br>
                              Step 5: Net Total = {{ formatToTwoDecimals(form.subTotal) }} + {{ formatToTwoDecimals(form.transportCost || 0) }} - {{ formatToTwoDecimals(form.discount || 0) }} + {{ formatToTwoDecimals(form.totalTax || 0) }} = {{ formatToTwoDecimals(form.netTotal) }}<br>
                            </small>
                          </div>
                          <div class="mb-2">
                            <strong>Current State:</strong><br>
                            <small>
                              Selected Products Count: {{ form.selectedProducts ? form.selectedProducts.length : 0 }}<br>
                              Is Saudi Arabia: {{ isSaudiArabia }}<br>
                              Debug Panel Visible: ✅ YES
                            </small>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Summary Comparison Table -->
                      <div class="row mt-3" v-if="form.selectedProducts.length > 0">
                        <div class="col-12">
                          <h6>Summary Table Comparison:</h6>
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
                                <td>{{ totalUnitPrice }}</td>
                                <td>{{ form.subTotal }}</td>
                                <td>{{ formatToTwoDecimals(totalUnitPrice) }}</td>
                                <td>
                                  <span :class="totalUnitPrice === form.subTotal ? 'text-success' : 'text-danger'">
                                    {{ totalUnitPrice === form.subTotal ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Discount</td>
                                <td>{{ totalProductDiscount }}</td>
                                <td>{{ form.totalDiscount }}</td>
                                <td>{{ formatToTwoDecimals(totalProductDiscount) }}</td>
                                <td>
                                  <span :class="totalProductDiscount === form.totalDiscount ? 'text-success' : 'text-danger'">
                                    {{ totalProductDiscount === form.totalDiscount ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>After Discount</td>
                                <td>{{ totalAfterDiscount }}</td>
                                <td>{{ totalAfterDiscount }}</td>
                                <td>{{ formatToTwoDecimals(totalAfterDiscount) }}</td>
                                <td>
                                  <span class="text-success">
                                    ✅
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Tax</td>
                                <td>{{ totalProductTax }}</td>
                                <td>{{ form.totalTax }}</td>
                                <td>{{ formatToTwoDecimals(totalProductTax) }}</td>
                                <td>
                                  <span :class="totalProductTax === form.totalTax ? 'text-success' : 'text-danger'">
                                    {{ totalProductTax === form.totalTax ? '✅' : '❌' }}
                                  </span>
                                </td>
                              </tr>
                              <tr class="table-info">
                                <td><strong>Final Total</strong></td>
                                <td><strong>{{ calculateSumOfItemTotals() }}</strong></td>
                                <td><strong>{{ form.netTotal }}</strong></td>
                                <td><strong>{{ formatToTwoDecimals(form.netTotal) }}</strong></td>
                                <td>
                                  <span :class="calculateSumOfItemTotals() === form.netTotal ? 'text-success' : 'text-danger'">
                                    <strong>{{ calculateSumOfItemTotals() === form.netTotal ? '✅' : '❌' }}</strong>
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
                <div class="col-12">
                  <div class="table-responsive table-custom">
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
                            {{ formatToTwoDecimals(item.productTax) }} <span class="saudi-riyal">ê</span>
                          </span>
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
                          <strong>{{ formatToTwoDecimals(form.netTotal) }}</strong> <span class="saudi-riyal">ê</span>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="row" v-if="!isSaudiArabia">
                <div class="form-group col-12 col-sm-6 col-md-4">
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
                <div class="form-group col-12 col-sm-6" :class="form.discountType == 1 ? 'col-md-2' : 'col-md-4'">
                  <label for="discount">{{ $t("Discount") }}
                    <span v-if="form.discountType == 1">(%)</span></label>
                  <input id="discount" v-model="form.discount" type="number" step="any" min="1"
                    :max="form.discountType == 1 ? 100 : form.netTotal" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discount') }" name="discount"
                    :placeholder="$t('Enter discount')" @change="calculateSum" />
                  <has-error :form="form" field="discount" />
                </div>
                <div v-if="form.discountType == 1" class="form-group col-12 col-sm-6 col-md-2">
                  <label for="totalDiscount">{{
                    $t("Total discount")
                  }}</label>
                  <input id="totalDiscount" v-model="form.totalDiscount" type="number" step="any" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('totalDiscount') }" name="totalDiscount" readonly />
                  <has-error :form="form" field="totalDiscount" />
                </div>
                <div class="form-group col-12 col-sm-6 col-md-4">
                  <label for="transportCost">{{
                    $t("Transport Cost")
                  }}</label>
                  <div class="input-group">
                    <input id="transportCost" v-model="form.transportCost" type="number" step="any" min="1"
                      class="form-control" :class="{ 'is-invalid': form.errors.has('transportCost') }" name="transportCost"
                      :placeholder="$t('Enter transport cost')" @change="calculateSum" @keyup="calculateSum" />
                    <div class="input-group-append">
                      <span class="input-group-text saudi-riyal">ê</span>
                    </div>
                  </div>
                  <has-error :form="form" field="transportCost" />
                </div>
              </div>

              <div class="row">
                <div v-if="taxes && !isSaudiArabia" class="form-group col-12 col-sm-6 col-md-4">
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
                <div v-if="taxes && !isSaudiArabia" class="form-group col-12 col-sm-6 col-md-4">
                  <label for="totalTax">{{ $t("Total Tax") }}</label>
                  <div class="input-group">
                    <input id="totalTax" v-model="form.totalTax" type="text" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('totalTax') }" name="totalTax" readonly />
                    <div class="input-group-append">
                      <span class="input-group-text saudi-riyal">ê</span>
                    </div>
                  </div>
                  <has-error :form="form" field="totalTax" />
                </div>
                <div class="form-group col-12 col-sm-6 col-md-4">
                  <label for="netTotal">{{ $t("Net Total") }}</label>
                  <div class="input-group">
                    <input id="netTotal" v-model="form.netTotal" type="number" step="any" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('netTotal') }" name="netTotal" readonly />
                    <div class="input-group-append">
                      <span class="input-group-text saudi-riyal">ê</span>
                    </div>
                  </div>
                  <has-error :form="form" field="netTotal" />
                </div> 
                <div class="form-group col-12 col-sm-6 col-md-4">
                  <label for="deliveryPlace">{{
                    $t("Delivery Place")
                  }}</label>
                  <input id="deliveryPlace" v-model="form.deliveryPlace" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('deliveryPlace') }" name="deliveryPlace"
                    :placeholder="$t('Enter a delivery place')" />
                  <has-error :form="form" field="deliveryPlace" />
                </div>
                <div class="form-group col-12 col-sm-6 col-md-4" v-if="!isSaudiArabia">
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
                <div class="pr-3 pr-md-5 d-flex align-items-center flex-wrap">
                  <toggle-button 
                    v-model="form.isSendEmail" 
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
                  <span class="ml-2 ml-md-3">{{ $t("Send To Email") }}</span>
                  <span v-if="!communicationConfig.loading && !communicationConfig.email_configured" 
                        class="ml-2 text-muted small">
                    ({{ $t("Email not configured") }})
                  </span>
                </div>
              </div>
              <div class="form-group col-12 d-flex flex-wrap">
                <div class="pr-3 pr-md-5 d-flex align-items-center flex-wrap">
                  <toggle-button 
                    v-model="form.isSendSMS" 
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
                  <span class="ml-2 ml-md-3">{{ $t("Send To SMS") }}</span>
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
    
    // Debug panel visibility
    showDebugPanel: false,
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },
    
    // Calculate total unit price (sum of all unit prices * quantities)
    totalUnitPrice() {
      console.log(`🔍 ===== TOTAL UNIT PRICE COMPUTED =====`);
      const total = this.form.selectedProducts.reduce((total, item) => {
        const itemTotal = item.unitPrice * item.qty;
        console.log(`📊 totalUnitPrice: ${item.name} = ${item.unitPrice} * ${item.qty} = ${itemTotal}`);
        return total + itemTotal;
      }, 0);
      const roundedTotal = this.roundToTwoDecimals(total);
      console.log(`💰 totalUnitPrice calculated: ${roundedTotal}`);
      console.log(`🔍 ===== TOTAL UNIT PRICE COMPUTED END =====`);
      return roundedTotal;
    },
    
    // Calculate total discount from all products (reactive)
    totalProductDiscount() {
      console.log(`🔍 ===== TOTAL PRODUCT DISCOUNT COMPUTED =====`);
      const total = this.form.selectedProducts.reduce((total, item) => {
        const itemDiscount = item.discountAmount || 0;
        console.log(`📊 totalProductDiscount: ${item.name} discount = ${itemDiscount}`);
        return total + itemDiscount;
      }, 0);
      const roundedTotal = this.roundToTwoDecimals(total);
      console.log(`💰 totalProductDiscount calculated: ${roundedTotal}`);
      console.log(`🔍 ===== TOTAL PRODUCT DISCOUNT COMPUTED END =====`);
      return roundedTotal;
    },
    
    // Calculate total after discount (reactive) - use sum of individual item calculations
    totalAfterDiscount() {
      console.log(`🔍 ===== TOTAL AFTER DISCOUNT COMPUTED =====`);
      const total = this.form.selectedProducts.reduce((total, item) => {
        const itemAfterDiscount = item.totalAfterDiscount || 0;
        console.log(`📊 totalAfterDiscount: ${item.name} after discount = ${itemAfterDiscount}`);
        return total + itemAfterDiscount;
      }, 0);
      const roundedTotal = this.roundToTwoDecimals(total);
      console.log(`💰 totalAfterDiscount calculated: ${roundedTotal}`);
      console.log(`🔍 ===== TOTAL AFTER DISCOUNT COMPUTED END =====`);
      return roundedTotal;
    },
    
    // Calculate total product tax (reactive)
    totalProductTax() {
      console.log(`🔍 ===== TOTAL PRODUCT TAX COMPUTED =====`);
      const total = this.form.selectedProducts.reduce((total, item) => {
        const itemTax = item.totalTax || 0;
        console.log(`📊 totalProductTax: ${item.name} tax = ${itemTax}`);
        return total + itemTax;
      }, 0);
      const roundedTotal = this.roundToTwoDecimals(total);
      console.log(`💰 totalProductTax calculated: ${roundedTotal}`);
      console.log(`🔍 ===== TOTAL PRODUCT TAX COMPUTED END =====`);
      return roundedTotal;
    },
    
    // Calculate subtotal (reactive) - sum of all item subtotals (before discount)
    subtotal() {
      const result = this.totalUnitPrice;
      console.log(`💰 subtotal: ${result} (sum of all item subtotals)`);
      return result;
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
    },
    
    // Watch form.netTotal changes for debugging
    'form.netTotal'(newValue, oldValue) {
      console.log(`🔍 form.netTotal changed: ${oldValue} → ${newValue}`);
      this.debugTemplateValues();
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
    },

    // get products
    async getProducts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-products"
      );
      this.products = data.data;
      this.products.sort(this.sortProducts);
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
            ? product.priceWithDiscount * (product.taxRate / 100)
            : product.priceWithDiscount -
            product.priceWithDiscount / (1 + product.taxRate / 100);
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
          unitPrice: product.priceWithDiscount,
          unitCost:
            product.taxType == "Exclusive"
              ? product.priceWithDiscount + productTax
              : product.priceWithDiscount,
          totalPrice:
            product.taxType == "Exclusive"
              ? 1 * (product.priceWithDiscount + totalTax)
              : 1 * product.priceWithDiscount,
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
      console.log(`🔄 generateItemTotal called:`, { value, type, index, action });
      let item = this.form.selectedProducts[index];
      if (item) {
        console.log(`📦 Item before update:`, {
          name: item.name,
          qty: item.qty,
          unitPrice: item.unitPrice,
          discount: item.discount,
          discountType: item.discountType,
          discountAmount: item.discountAmount
        });

        if (type == "qty") {
          let newQty = value;
          if (action == "increment") {
            newQty = Number(item.qty) + 1;
            console.log(`➕ Incrementing quantity: ${item.qty} + 1 = ${newQty}`);
          } else if (action == "decrement") {
            if (item.qty > 0) {
              newQty = Number(item.qty) - 1;
              console.log(`➖ Decrementing quantity: ${item.qty} - 1 = ${newQty}`);
            }
          } else {
            console.log(`📝 Setting quantity directly: ${newQty}`);
          }
          this.$set(item, 'qty', newQty);
        } else if (type == "price") {
          let newPrice = value;
          if (action == "increment") {
            newPrice = Number(item.unitPrice) + 1;
            console.log(`➕ Incrementing price: ${item.unitPrice} + 1 = ${newPrice}`);
          } else if (action == "decrement") {
            if (item.unitPrice > 0) {
              newPrice = Number(item.unitPrice) - 1;
              console.log(`➖ Decrementing price: ${item.unitPrice} - 1 = ${newPrice}`);
            }
          } else {
            console.log(`📝 Setting price directly: ${newPrice}`);
          }
          this.$set(item, 'unitPrice', newPrice);
        }
        
        // Recalculate discount amount when quantity or price changes
        if (item.discount > 0) {
          if (item.discountType === "percentage") {
            const newDiscountAmount = this.roundToTwoDecimals((item.unitPrice * item.qty * item.discount) / 100);
            this.$set(item, 'discountAmount', newDiscountAmount);
            console.log(`💰 Recalculated percentage discount: ${newDiscountAmount} (${item.unitPrice} * ${item.qty} * ${item.discount} / 100)`);
          } else {
            const newDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
            this.$set(item, 'discountAmount', newDiscountAmount);
            console.log(`💰 Recalculated fixed discount: ${newDiscountAmount}`);
          }
        } else {
          this.$set(item, 'discountAmount', 0);
          console.log(`💰 No discount, setting discountAmount to 0`);
        }
        
        console.log(`📦 Item after update:`, {
          name: item.name,
          qty: item.qty,
          unitPrice: item.unitPrice,
          discount: item.discount,
          discountType: item.discountType,
          discountAmount: item.discountAmount
        });
        
        // Use the new method to calculate totals with discount and VAT
        this.generateItemTotalPrice(index);
      } else {
        console.log(`❌ No item found at index ${index}`);
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

    // Calculate product discount (following correct pseudocode)
    calculateProductDiscount(index) {
      console.log(`💰 calculateProductDiscount called for index ${index}`);
      let item = this.form.selectedProducts[index];
      if (item) {
        console.log(`📊 Item discount details:`, {
          name: item.name,
          unitPrice: item.unitPrice,
          qty: item.qty,
          discount: item.discount,
          discountType: item.discountType,
          currentDiscountAmount: item.discountAmount
        });

        // Calculate subtotal first
        const subtotal = this.roundToTwoDecimals(item.unitPrice * item.qty);
        console.log(`💰 Subtotal for discount calculation: ${subtotal}`);

        let newDiscountAmount = 0;
        if (item.discount > 0) {
          if (item.discountType === "percentage") {
            newDiscountAmount = this.roundToTwoDecimals(subtotal * (item.discount / 100));
            console.log(`📈 Percentage discount calculated: ${subtotal} × (${item.discount} / 100) = ${newDiscountAmount}`);
          } else {
            newDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
            console.log(`📈 Fixed discount calculated: ${newDiscountAmount}`);
          }
        }
        
        this.$set(item, 'discountAmount', newDiscountAmount);
        
        console.log(`✅ Updated item discount:`, {
          name: item.name,
          subtotal: subtotal,
          discountAmount: item.discountAmount,
          discountType: item.discountType
        });
        
        // Recalculate totals
        this.generateItemTotalPrice(index);
        this.calculateSum();
      } else {
        console.log(`❌ No item found at index ${index}`);
      }
    },

    // Calculate product VAT
    calculateProductVat(index) {
      console.log(`🧾 calculateProductVat called for index ${index}`);
      let item = this.form.selectedProducts[index];
      if (item) {
        console.log(`📊 Item VAT details before calculation:`, {
          name: item.name,
          selectedVatRate: item.selectedVatRate,
          taxRate: item.taxRate,
          taxType: item.taxType
        });

        // Ensure the selectedVatRate is properly set
        if (!item.selectedVatRate) {
          console.log(`🔍 No selectedVatRate found, trying to find matching rate`);
          if (item.taxRate) {
            item.selectedVatRate = this.findMatchingVatRate(item.taxRate);
            console.log(`🔍 Found matching VAT rate from taxRate:`, item.selectedVatRate);
          }
          
          if (!item.selectedVatRate && this.taxes && this.taxes.length > 0) {
            item.selectedVatRate = this.taxes[0];
            console.log(`🔍 Using first available tax rate:`, item.selectedVatRate);
          }
        } else {
          console.log(`✅ selectedVatRate already set:`, item.selectedVatRate);
        }
        
        console.log(`📊 Item VAT details after setup:`, {
          name: item.name,
          selectedVatRate: item.selectedVatRate,
          taxRate: item.taxRate,
          taxType: item.taxType
        });
        
        // Recalculate totals with new VAT rate
        this.generateItemTotalPrice(index);
        this.calculateSum();
      } else {
        console.log(`❌ No item found at index ${index}`);
      }
    },

    // Generate item total price with discount and VAT (following correct pseudocode)
    generateItemTotalPrice(index) {
      console.log(`🔧 generateItemTotalPrice called for index ${index}`);
      let item = this.form.selectedProducts[index];
      if (item) {
        console.log(`📊 Item before calculation:`, {
          name: item.name,
          unitPrice: item.unitPrice,
          qty: item.qty,
          discount: item.discount,
          discountType: item.discountType,
          discountAmount: item.discountAmount,
          taxType: item.taxType,
          selectedVatRate: item.selectedVatRate,
          taxRate: item.taxRate
        });

        // Step 1: Calculate Subtotal = Quantity × Unit_Price
        const subtotal = this.roundToTwoDecimals(item.unitPrice * item.qty);
        console.log(`💰 Step 1 - Subtotal: ${item.unitPrice} × ${item.qty} = ${subtotal}`);

        // Step 2: Calculate Discount Amount
        let discountAmount = 0;
        if (item.discount > 0) {
          if (item.discountType === "percentage") {
            discountAmount = this.roundToTwoDecimals(subtotal * (item.discount / 100));
            console.log(`💰 Step 2a - Percentage discount: ${subtotal} × (${item.discount} / 100) = ${discountAmount}`);
          } else {
            discountAmount = this.roundToTwoDecimals(Number(item.discount));
            console.log(`💰 Step 2b - Fixed discount: ${discountAmount}`);
          }
        }
        
        // Update the item's discount amount
        this.$set(item, 'discountAmount', discountAmount);

        // Step 3: Calculate Net Amount = Subtotal - Discount Amount
        const netAmount = this.roundToTwoDecimals(subtotal - discountAmount);
        console.log(`💰 Step 3 - Net Amount: ${subtotal} - ${discountAmount} = ${netAmount}`);

        // Set totalAfterDiscount for subtotal calculation (without VAT)
        this.$set(item, 'totalAfterDiscount', netAmount);
        console.log(`📋 totalAfterDiscount set to: ${item.totalAfterDiscount}`);

        // Step 4: Calculate VAT (following exact pseudocode)
        let vatRate = 0;
        if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
          vatRate = Number(item.selectedVatRate.rate);
          console.log(`📈 Using selectedVatRate: ${vatRate}%`);
        } else if (item.taxRate !== undefined && item.taxRate !== null) {
          vatRate = Number(item.taxRate);
          console.log(`📈 Using product taxRate: ${vatRate}%`);
        }

        // Ensure vatRate is a valid number
        if (isNaN(vatRate) || vatRate < 0) {
          vatRate = 0;
          console.log(`⚠️ Invalid vatRate, setting to 0`);
        }

        // Calculate tax on after_discount amount (following pseudocode exactly)
        const tax = this.roundToTwoDecimals(netAmount * (vatRate / 100));
        const totalWithTax = this.roundToTwoDecimals(netAmount + tax);
        
        console.log(`🧾 Step 4 - VAT calculation: ${netAmount} × (${vatRate} / 100) = ${tax}, Total = ${totalWithTax}`);

        // Set the calculated values
        item.productTax = tax;
        item.totalTax = tax; // For individual items, productTax and totalTax are the same
        item.totalPrice = totalWithTax;

        console.log(`✅ Item after calculation:`, {
          name: item.name,
          unitPrice: item.unitPrice,
          qty: item.qty,
          subtotal: subtotal,
          discountAmount: item.discountAmount,
          netAmount: netAmount,
          vatRate: vatRate,
          tax: tax,
          totalPrice: item.totalPrice
        });

        this.form.selectedProducts[index] = item;
      } else {
        console.log(`❌ No item found at index ${index}`);
      }
    },

    // calculate sum (following exact pseudocode)
    // For each item: subtotal = qty × unit_price, discount applied, after_discount = subtotal - discount, tax = after_discount × VAT%, total_with_tax = after_discount + tax
    // After all items: grand_total = total_after_discount + total_tax
    calculateSum() {
      console.log(`🧮 ===== CALCULATE SUM DEBUG START =====`);
      console.log(`🧮 calculateSum called`);
      console.log(`📊 Current form state:`, {
        selectedProducts: this.form.selectedProducts.length,
        isSaudiArabia: this.isSaudiArabia,
        discount: this.form.discount,
        discountType: this.form.discountType,
        orderTax: this.form.orderTax,
        transportCost: this.form.transportCost
      });

      // Following the pseudocode: Sum up all individual item calculations
      let totalSubtotal = 0;
      let totalDiscount = 0;
      let totalNet = 0;
      let totalTax = 0;
      let grandTotal = 0;

      console.log(`📋 Calculating totals from individual items:`);
      this.form.selectedProducts.forEach((item, index) => {
        const itemSubtotal = this.roundToTwoDecimals(item.unitPrice * item.qty);
        const itemDiscount = item.discountAmount || 0;
        const itemNet = item.totalAfterDiscount || 0;
        const itemTax = item.totalTax || 0;
        const itemTotal = item.totalPrice || 0;

        totalSubtotal += itemSubtotal;
        totalDiscount += itemDiscount;
        totalNet += itemNet;
        totalTax += itemTax;
        grandTotal += itemTotal;

        console.log(`📦 Item ${index + 1} (${item.name}):`, {
          unitPrice: item.unitPrice,
          qty: item.qty,
          subtotal: itemSubtotal,
          discount: itemDiscount,
          net: itemNet,
          tax: itemTax,
          total: itemTotal,
          discountAmount: item.discountAmount,
          totalAfterDiscount: item.totalAfterDiscount,
          totalTax: item.totalTax,
          totalPrice: item.totalPrice
        });
      });

      // Round all totals
      totalSubtotal = this.roundToTwoDecimals(totalSubtotal);
      totalDiscount = this.roundToTwoDecimals(totalDiscount);
      totalNet = this.roundToTwoDecimals(totalNet);
      totalTax = this.roundToTwoDecimals(totalTax);
      grandTotal = this.roundToTwoDecimals(grandTotal);

      console.log(`💰 Individual item totals:`, {
        totalSubtotal,
        totalDiscount,
        totalNet,
        totalTax,
        grandTotal
      });

      // Update form values
      console.log(`🔧 Setting form values:`);
      this.$set(this.form, 'subTotal', totalSubtotal);
      console.log(`  - form.subTotal = ${totalSubtotal}`);
      
      this.$set(this.form, 'totalDiscount', totalDiscount);
      console.log(`  - form.totalDiscount = ${totalDiscount}`);
      
      this.$set(this.form, 'productTotalTax', totalTax);
      console.log(`  - form.productTotalTax = ${totalTax}`);

      // Calculate Net Total using the formula: Subtotal + Transport - Discount + Tax
      const transportCost = parseFloat(this.form.transportCost || 0);
      const quotationDiscount = parseFloat(this.form.discount || 0);
      const quotationTax = parseFloat(this.form.totalTax || 0);
      
      // Apply quotation-level discount calculation if needed
      let finalDiscount = quotationDiscount;
      if (this.form.discountType == 1 && quotationDiscount > 0) {
        // Percentage discount
        finalDiscount = (totalSubtotal * quotationDiscount) / 100;
      }
      
      const netTotal = totalSubtotal + transportCost - finalDiscount + quotationTax;
      console.log(`💰 Net Total calculation: ${totalSubtotal} + ${transportCost} - ${finalDiscount} + ${quotationTax} = ${netTotal}`);
      
      // Set the final total using the correct formula
      this.$set(this.form, 'netTotal', this.roundToTwoDecimals(netTotal));
      console.log(`  - form.netTotal = ${this.form.netTotal}`);
      
      // For backward compatibility, set other form values
      this.$set(this.form, 'totalTax', totalTax);
      this.$set(this.form, 'invoiceTax', 0); // No quotation-level tax for now

      console.log(`✅ Final calculation results:`, {
        totalSubtotal,
        totalDiscount,
        totalAfterDiscount: totalNet,
        totalTax,
        grandTotal: grandTotal
      });
      
      console.log(`🔍 Form values after setting:`, {
        'form.subTotal': this.form.subTotal,
        'form.totalDiscount': this.form.totalDiscount,
        'form.productTotalTax': this.form.productTotalTax,
        'form.netTotal': this.form.netTotal,
        'form.totalTax': this.form.totalTax
      });
      
      console.log(`🧮 ===== CALCULATE SUM DEBUG END =====`);
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
        this.calculateSum();
      } else {
        console.warn('Could not find product to update in selectedProducts array');
      }
    },

    // return number to word with language support
    toWord(){
      const amount = this.form.netTotal || 0;
      
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
    // translate common validation messages coming from backend to Arabic (fallback when i18n key missing)
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message);
      if (direct && direct !== message) return direct;

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

      // Common Laravel validation patterns
      const patterns = [
        { re: /The\s+.+?\s+field\s+is\s+required\.?/i, ar: `هذا الحقل مطلوب` },
        { re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i, ar: `القيمة المحددة غير صالحة` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i, ar: `يجب أن يكون رقماً` },
        { re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i, ar: `يجب أن يكون عدداً صحيحاً` },
        { re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i, ar: (_, n) => `يجب ألا يقل عن ${n}` },
        { re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i, ar: (_, n) => `يجب ألا يزيد عن ${n}` },
        { re: /The\s+.+?\s+format\s+is\s+invalid\.?/i, ar: `تنسيق غير صالح` },
        { re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i, ar: `هذه القيمة مستخدمة بالفعل` },
      ];

      for (const { re, ar } of patterns) {
        const match = message.match(re);
        if (match) {
          const text = typeof ar === 'function' ? ar(...match) : ar;
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

    // Debug method - can be called from browser console
    debugCalculations() {
      console.log(`🔍 === QUOTATION CALCULATION DEBUG ===`);
      console.log(`📊 Form state:`, {
        selectedProducts: this.form.selectedProducts.length,
        isSaudiArabia: this.isSaudiArabia,
        discount: this.form.discount,
        discountType: this.form.discountType,
        orderTax: this.form.orderTax,
        transportCost: this.form.transportCost
      });
      
      console.log(`📋 Computed values:`, {
        totalUnitPrice: this.totalUnitPrice,
        totalProductDiscount: this.totalProductDiscount,
        totalAfterDiscount: this.totalAfterDiscount,
        totalProductTax: this.totalProductTax,
        subtotal: this.subtotal
      });
      
      console.log(`💰 Form totals:`, {
        totalSubtotal: this.form.subTotal,
        totalDiscount: this.form.totalDiscount,
        totalAfterDiscount: this.totalAfterDiscount,
        totalTax: this.form.totalTax,
        grandTotal: this.form.netTotal
      });
      
      console.log(`📦 Selected products details:`, this.form.selectedProducts.map((item, index) => {
        const itemSubtotal = this.roundToTwoDecimals(item.unitPrice * item.qty);
        const itemDiscount = item.discountAmount || 0;
        const itemAfterDiscount = item.totalAfterDiscount || 0;
        const itemTax = item.totalTax || 0;
        const itemTotalWithTax = item.totalPrice || 0;
        
        return {
          index,
          name: item.name,
          qty: item.qty,
          unitPrice: item.unitPrice,
          subtotal: itemSubtotal,
          discount: item.discount,
          discountType: item.discountType,
          discountAmount: itemDiscount,
          afterDiscount: itemAfterDiscount,
          vatRate: item.selectedVatRate?.rate || item.taxRate || 0,
          tax: itemTax,
          totalWithTax: itemTotalWithTax
        };
      }));
      
      console.log(`🔍 === END DEBUG ===`);
    },

    // Debug method to check template values
    debugTemplateValues() {
      console.log(`🔍 === TEMPLATE VALUES DEBUG ===`);
      console.log(`📊 Summary table values:`, {
        'totalUnitPrice (computed)': this.totalUnitPrice,
        'totalProductDiscount (computed)': this.totalProductDiscount,
        'totalAfterDiscount (computed)': this.totalAfterDiscount,
        'totalProductTax (computed)': this.totalProductTax,
        'form.netTotal': this.form.netTotal,
        'formatToTwoDecimals(form.netTotal)': this.formatToTwoDecimals(this.form.netTotal)
      });
      console.log(`🔍 === TEMPLATE VALUES DEBUG END ===`);
    },

    // Calculate sum of all item totals for debugging
    calculateSumOfItemTotals() {
      const total = this.form.selectedProducts.reduce((sum, item) => {
        return sum + (item.totalPrice || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Toggle debug panel visibility
    toggleDebugPanel() {
      this.showDebugPanel = !this.showDebugPanel;
      console.log(`🔧 Debug panel ${this.showDebugPanel ? 'shown' : 'hidden'}`);
    },
  },
  mounted() {
    this.loadTemporaryData();
    this.setCorrectTitle();
    
    // Make debug methods available globally for console access
    window.debugQuotationCalculations = () => this.debugCalculations();
    window.debugTemplateValues = () => this.debugTemplateValues();
    window.toggleDebugPanel = () => this.toggleDebugPanel();
    console.log('🔧 Debug methods available:');
    console.log('  - window.debugQuotationCalculations() - Full calculation debug');
    console.log('  - window.debugTemplateValues() - Template values debug');
    console.log('  - window.toggleDebugPanel() - Toggle debug panel visibility');
    
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
    
    // Clean up global debug methods
    if (window.debugQuotationCalculations) {
      delete window.debugQuotationCalculations;
    }
    if (window.debugTemplateValues) {
      delete window.debugTemplateValues;
    }
    if (window.toggleDebugPanel) {
      delete window.toggleDebugPanel;
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

/* Responsive table styles */
@media (max-width: 991.98px) {
  .quotations-create-table {
    font-size: 0.875rem;
  }
  
  .quotations-create-table th,
  .quotations-create-table td {
    padding: 0.5rem 0.25rem;
    white-space: nowrap;
  }
  
  .quotations-create-table th:first-child,
  .quotations-create-table td:first-child {
    min-width: 40px;
  }
  
  .quotations-create-table th:nth-child(2),
  .quotations-create-table td:nth-child(2) {
    min-width: 80px;
  }
  
  .quotations-create-table th:nth-child(3),
  .quotations-create-table td:nth-child(3) {
    min-width: 150px;
  }
}

@media (max-width: 767.98px) {
  .quotations-create-table {
    font-size: 0.8rem;
  }
  
  .quotations-create-table th,
  .quotations-create-table td {
    padding: 0.375rem 0.125rem;
  }
  
  .custom-qty-input {
    flex-direction: column;
    gap: 2px;
  }
  
  .button-minus,
  .button-plus {
    width: 25px;
    height: 25px;
    font-size: 12px;
  }
  
  .quantity-field {
    width: 50px;
    font-size: 0.8rem;
  }
}

/* Responsive form elements */
@media (max-width: 575.98px) {
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-control {
    font-size: 0.875rem;
  }
  
  .btn {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }
  
  .card {
    margin-top: 15px;
    border-radius: 15px;
  }
  
  .card-header {
    padding: 0.75rem 1rem;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .card-footer {
    padding: 0.75rem 1rem;
  }
}

/* Responsive debug panel */
@media (max-width: 767.98px) {
  .debug-panel .card-body {
    padding: 0.75rem;
  }
  
  .debug-panel h6 {
    font-size: 0.875rem;
  }
  
  .debug-panel small {
    font-size: 0.75rem;
  }
  
  .debug-panel .table {
    font-size: 0.75rem;
  }
}

/* Responsive alert */
@media (max-width: 575.98px) {
  .alert {
    padding: 0.75rem;
    font-size: 0.875rem;
  }
  
  .alert .fas {
    font-size: 1.25rem !important;
  }
}
</style>
