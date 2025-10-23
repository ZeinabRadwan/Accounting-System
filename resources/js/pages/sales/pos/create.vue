<template>
  <div id="pos">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <!-- Header with temporary save button -->
    <div class="row mb-3">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div class="float-right header-buttons">
              <button
                type="button"
                class="btn btn-info mr-2"
                @click="openInvoicesPage"
                :title="$t('Open Invoices Page')"
              >
                <i class="fas fa-file-invoice" />
                {{ $t('Invoices') }}
              </button>
              <button
                type="button"
                class="btn btn-success"
                @click="saveTemporary"
                :title="$t('Save Temporarily')"
              >
                <i class="fas fa-save" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row sm-col-reverse">
      <!-- pos left area start -->
      <div class="col-12 col-md-5">
        <div class="card">
          <div class="card-body-l p-0">
            <div class="form-group pl-3 pt-3 pr-3">
              <div class="d-flex w-100">
                <v-select
                  class="flex-grow-1"
                  v-model="form.client"
                  :options="clients"
                  label="name"
                  :class="{ 'is-invalid': form.errors.has('client') }"
                  name="client"
                  :placeholder="$t('Select a client')"
                />
                <ClientCreateModal @reloadClients="getClients('latest')">
                  <div class="input-group-text create-btn">
                    <i class="fas fa-solid fa-plus-circle"></i>
                  </div>
                </ClientCreateModal>
              </div>
              <has-error :form="form" field="client" />
            </div>

            <div class="table-responsive table-wrap">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("Product") }}</th>
                    <th scope="col">{{ $t("Price") }}</th>
                    <th scope="col" class="text-center">
                      {{ $t("Quantity") }}
                    </th>
                    <th scope="col" class="text-center">
                      {{ $t("Subtotal") }}
                    </th>
                    <th scope="col">{{ $t("Discount") }}</th>
                    <th scope="col">{{ $t("Total After Discount") }}</th>
                    <th scope="col">{{ $t("VAT Type") }}</th>
                    <th scope="col">{{ $t("VAT") }}</th>
                    <th scope="col">{{ $t("Total with VAT") }}</th>
                    <th scope="col" class="text-center">
                      {{ $t("Action") }}
                    </th>
                  </tr>
                </thead>
                <tbody
                  v-if="
                    form.selectedProducts && form.selectedProducts.length > 0
                  "
                >
                  <tr v-for="(product, i) in form.selectedProducts" :key="i">
                    <td class="table-product-title" v-tooltip="product.name">
                      {{ product.name }}
                    </td>
                    <td>
                      <div
                        class="input-group custom-qty-input table-price-counter-nowrap"
                      >
                        <input
                          type="unitPrice"
                          step="any"
                          :id="`unitPrice-${i}`"
                          :value="product.unitPrice"
                          name="unitPrice"
                          class="quantity-field border-0"
                          required
                          min="0"
                          @change="
                            generateItemTotal(
                              $event.target.value,
                              'price',
                              i,
                              ''
                            )
                          "
                          @keyup="
                            generateItemTotal(
                              $event.target.value,
                              'price',
                              i,
                              ''
                            )
                          "
                        />
                      </div>
                    </td>
                    <td>
                      <div class="d-flex custom-qty-input">
                        <input
                          type="button"
                          value="-"
                          class="button-minus icon-shape icon-sm btn-danger"
                          data-field="quantity"
                          @click="
                            generateItemTotal(
                              product.qty,
                              'qty',
                              i,
                              'decrement'
                            )
                          "
                        />
                        <input
                          type="number"
                          step="any"
                          :id="`Qty-${i}`"
                          :value="product.qty"
                          name="quantity"
                          class="quantity-field border-0 incrementor"
                          required
                          min="1"
                          :max="product.inventoryCount"
                          @change="
                            generateItemTotal($event.target.value, 'qty', i, '')
                          "
                          @keyup="
                            generateItemTotal($event.target.value, 'qty', i, '')
                          "
                          placeholder="Quantity"
                        />
                        <input
                          type="button"
                          value="+"
                          class="button-plus icon-shape icon-sm btn-primary"
                          data-field="quantity"
                          @click="
                            generateItemTotal(
                              product.qty,
                              'qty',
                              i,
                              'increment'
                            )
                          "
                        />
                      </div>
                    </td>
                    <td>
                      {{ product.unitPrice * product.qty }}
                      <span class="saudi-riyal">ê</span>
                    </td>
                    <td>
                      <div class="d-flex align-items-center gap-1">
                        <select
                          v-model="product.discountType"
                          class="form-control form-control-sm"
                          style="width: 70px; flex-shrink: 0"
                          :class="{
                            'is-invalid': form.errors.has(
                              `selectedProducts.${i}.discountType`
                            ),
                          }"
                          @change="calculateProductDiscount(i)"
                        >
                          <option value="fixed">{{ $t("Fixed") }}</option>
                          <option value="percentage">{{ $t("%") }}</option>
                        </select>
                        <input
                          type="number"
                          v-model="product.discount"
                          class="form-control form-control-sm"
                          style="width: 90px; flex-shrink: 0"
                          step="any"
                          min="0"
                          :max="
                            product.discountType == 'percentage'
                              ? 100
                              : product.unitPrice * product.qty
                          "
                          :class="{
                            'is-invalid': form.errors.has(
                              `selectedProducts.${i}.discount`
                            ),
                          }"
                          placeholder="0"
                          @change="calculateProductDiscount(i)"
                          @keyup="calculateProductDiscount(i)"
                        />
                      </div>
                      <div
                        v-if="
                          form.errors.has(`selectedProducts.${i}.discount`) ||
                          form.errors.has(`selectedProducts.${i}.discountType`)
                        "
                        class="invalid-feedback d-block"
                      >
                        <span
                          v-if="
                            form.errors.has(`selectedProducts.${i}.discount`)
                          "
                          class="d-block"
                          >{{
                            form.errors.get(`selectedProducts.${i}.discount`)
                          }}</span
                        >
                        <span
                          v-if="
                            form.errors.has(
                              `selectedProducts.${i}.discountType`
                            )
                          "
                          class="d-block"
                          >{{
                            form.errors.get(
                              `selectedProducts.${i}.discountType`
                            )
                          }}</span
                        >
                      </div>
                    </td>
                    <td>
                      {{
                        product.unitPrice * product.qty -
                        (product.discountAmount || 0)
                      }}
                      <span class="saudi-riyal">ê</span>
                    </td>
                    <td>
                      <select
                        v-model="product.selectedVatRate"
                        class="form-control form-control-sm"
                        :class="{
                          'is-invalid': form.errors.has(
                            `selectedProducts.${i}.selectedVatRate`
                          ),
                        }"
                        @change="calculateProductVat(i)"
                        style="min-width: 120px"
                      >
                        <option value="">{{ $t("Select VAT") }}</option>
                        <option v-for="tax in taxes" :key="tax.id" :value="tax">
                          {{ tax.code }} ({{ tax.rate }}%)
                        </option>
                      </select>
                      <div
                        v-if="
                          form.errors.has(
                            `selectedProducts.${i}.selectedVatRate`
                          )
                        "
                        class="invalid-feedback d-block"
                      >
                        {{
                          form.errors.get(
                            `selectedProducts.${i}.selectedVatRate`
                          )
                        }}
                      </div>
                    </td>
                    <td>
                      <span
                        class="form-control-plaintext form-control-sm text-center"
                      >
                        {{ product.productTax }}
                        <span class="saudi-riyal">ê</span>
                      </span>
                    </td>
                    <td>
                      {{ product.totalPrice }}
                      <span class="saudi-riyal">ê</span>
                    </td>
                    <td class="text-right">
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="removeItem(product)"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr class="text-center">
                    <td colspan="10">{{ $t("no_data_found") }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="pos-card-footer bg-white">
          <div>
            <div class="row pt-3 pl-3 pr-3">
              <div v-if="!isSaudiArabia" class="form-group col-md-6 col-lg-6">
                <label for="discountType">{{ $t("Discount Type") }}</label>
                <select
                  id="discountType"
                  v-model="form.discountType"
                  step="any"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('discountType') }"
                  name="discountType"
                  @change="calculateSum"
                  @keyup="calculateSum"
                >
                  <option value="0">{{ $t("Fixed") }}</option>
                  <option value="1">{{ $t("Percentage") }}(%)</option>
                </select>
                <has-error :form="form" field="discountType" />
              </div>
              <div v-if="!isSaudiArabia" class="form-group col-md-6 col-lg-6">
                <label for="discount"
                  >{{ $t("Discount") }}
                  <span v-if="form.discountType == 1">(%)</span></label
                >
                <div class="input-group">
                  <input
                    id="discount"
                    v-model="form.discount"
                    type="number"
                    step="any"
                    min="1"
                    :max="form.discountType == 1 ? 100 : form.subTotal"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('discount') }"
                    name="discount"
                    :placeholder="$t('Enter discount')"
                    @change="calculateSum"
                    @keyup="calculateSum"
                  />
                  <div v-if="form.discountType == 1" class="input-group-append">
                    <span class="input-group-text">{{
                      form.totalDiscount 
                    }}
                    <span class="saudi-riyal">ê</span></span>
                  </div>
                </div>
                <has-error :form="form" field="discount" />
              </div>
              <div class="form-group col-md-6 col-lg-6">
                <label for="transportCost">{{ $t("Transport Cost") }}</label>
                <input
                  id="transportCost"
                  v-model="form.transportCost"
                  type="number"
                  step="any"
                  min="1"
                  class="form-control"
                  :class="{ 'is-invalid': form.errors.has('transportCost') }"
                  name="transportCost"
                  :placeholder="$t('Enter transport cost')"
                  @change="calculateSum"
                  @keyup="calculateSum"
                />
                <has-error :form="form" field="transportCost" />
              </div>

              <div v-if="taxes && !isSaudiArabia" class="form-group col-md-6 col-lg-6">
                <label for="orderTax">{{ $t("Invoice Tax") }} </label>
                <div class="input-group select-input-group">
                  <v-select
                    class="w-85"
                    v-model="form.orderTax"
                    :options="taxes"
                    label="code"
                    :class="{ 'is-invalid': form.errors.has('orderTax') }"
                    name="orderTax"
                    :placeholder="$t('Select a tax type')"
                    @input="calculateSum"
                  />
                  <div class="input-group-prepend input-c-margin">
                    <div class="input-group-text">
                      <span v-if="form.orderTax">{{
                        form.totalTax }}<span class="saudi-riyal">ê</span></span>
                      <span v-else
                        >{{ 0 }} <span class="saudi-riyal">ê</span></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="pos-net-total noi-print">
              {{ $t("Net Total") }}: {{ form.netTotal }}
              <span class="saudi-riyal">ê</span>
            </div>
          </div>
        </div>

        <div class="row no-print">
          <div class="col-12 col-lg-5 mb-1">
            <button
              class="btn btn-primary btn-block"
              @click="saveInvoice"
              @keydown="form.onKeydown($event)"
            >
              <i class="fas fa-save" /> {{ $t("Save") }}
            </button>
          </div>
          <div class="col-12 col-lg-5 mb-1">
            <button
              class="btn btn-primary btn-block"
              @click="completeOrderAndAddPayment"
            >
              <i class="fas fa-credit-card" />
              {{ $t("Save & Payment") }}
            </button>
          </div>
          <div class="col-12 col-lg-2">
            <button
              type="reset"
              class="btn btn-info float-right btn-block"
              @click="form.reset()"
            >
              <i class="fas fa-power-off" /> {{ $t("Reset") }}
            </button>
          </div>
        </div>
      </div>
      <!-- pos left area end -->

      <!-- POS Right area start -->
      <div class="col-12 col-md-7">
        <div class="card bg-transparent">
          <div class="pos-r-head bg-white">
            <div class="row">
              <div v-if="categories" class="form-group col-md-6">
                <v-select
                  v-model="form.category"
                  :options="categories"
                  label="name"
                  :class="{ 'is-invalid': form.errors.has('category') }"
                  name="category"
                  :placeholder="$t('Select a category')"
                  @input="getSubCategoriesByCategory"
                />
                <has-error :form="form" field="category" />
              </div>
              <div v-if="subCategories" class="form-group col-md-6">
                <v-select
                  v-model="form.subCategory"
                  :options="subCategories"
                  label="name"
                  :class="{ 'is-invalid': form.errors.has('subCategory') }"
                  name="subCategory"
                  :placeholder="$t('Select a category')"
                  @input="getProductsBySubCategory"
                />
                <has-error :form="form" field="subCategory" />
              </div>
              <div v-if="products" class="col-md-12 form-group">
                <div class="d-flex w-100">
                  <search
                    class="flex-grow-1"
                    :isPosSearch="true"
                    v-model="query"
                    @reset-pagination="resetPagination()"
                    @reload="reload"
                  />
                  <ProductCreateModal @reloadProducts="getProducts">
                    <div class="input-group-text create-btn-2">
                      <i class="fas fa-solid fa-plus-circle"></i>
                    </div>
                  </ProductCreateModal>
                </div>
                <has-error :form="form" field="selectedProducts" />
              </div>
            </div>
          </div>

          <div class="card-body bg-white mt-3 pos-body">
            <div class="pos-item-grid">
              <div
                v-for="product in products"
                :key="product.id"
                @click="storeProduct(product)"
                :class="
                  Number(product.inventoryCount) < 1 ? 'pos-item-grid-red' : ''
                "
              >
                <div class="pos-box">
                  <div class="relative">
                    <div class="pos-box-img">
                      <div v-if="product.image">
                        <img
                          class="pos-box-icon"
                          :src="product.image"
                          alt="product image"
                        />
                      </div>
                      <div v-else>{{ $t("No Preview") }}</div>
                    </div>
                    <span
                      class="box-qty"
                      :class="
                        Number(product.inventoryCount) < 1 ? 'qty-red' : ''
                      "
                      >{{ product.inventoryCount }}</span
                    >
                  </div>
                  <div class="pos-box-content">
                    <span>{{ product.code | withPrefix(productPrefix) }}</span>
                    <p class="pos-box-text">{{ product.name }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 d-flex justify-content-center">
                <!-- pagination-start -->
                <pagination
                  v-if="pagination && pagination.last_page > 1"
                  :pagination="pagination"
                  :offset="5"
                  class="justify-flex-end mt-3"
                  @paginate="paginate"
                />
                <!-- pagination-end -->
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
          <div
            class="row"
            v-if="
              accounts &&
              form.selectedProducts &&
              form.selectedProducts.length > 0
            "
          >
            <div class="form-group col-md-8">
              <label for="account"
                >{{ $t("Account") }} <span class="required">*</span></label
              >
              <v-select
                v-model="form.account"
                :options="accounts"
                label="label"
                :class="{ 'is-invalid': form.errors.has('account') }"
                name="account"
                :placeholder="$t('Select an account')"
              >
                <template slot="option" slot-scope="option">
                  <img :src="option.image" style="width: 30px; height: 30px" />
                  {{ option.label }}
                </template>
              </v-select>
              <has-error :form="form" field="account" />
            </div>
            <div class="form-group col-md-4">
              <label for="paidAmount"
                >{{ $t("Amount") }}<span class="required">*</span></label
              >
              <input
                ref="paidAmountInput"
                id="paidAmount"
                v-model="form.paidAmount"
                type="number"
                step="any"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('paidAmount') }"
                name="paidAmount"
                min="1"
                :max="form.netTotal"
                :placeholder="$t('Enter an amount')"
              />
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
              <input
                id="receiptNo"
                v-model="form.receiptNo"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('receiptNo') }"
                name="receiptNo"
                :placeholder="$t('Enter a receipt no')"
              />
              <has-error :form="form" field="receiptNo" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="poReference">{{ $t("PO Reference") }}</label>
              <input
                id="poReference"
                v-model="form.poReference"
                type="text"
                step="any"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('poReference') }"
                name="poReference"
                :placeholder="$t('Enter PO reference')"
              />
              <has-error :form="form" field="poReference" />
            </div>
            <div class="form-group col-md-6">
              <label for="paymentTerms">{{ $t("Payment Terms") }}</label>
              <input
                id="paymentTerms"
                v-model="form.paymentTerms"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('paymentTerms') }"
                name="paymentTerms"
                :placeholder="$t('Enter payment terms')"
              />
              <has-error :form="form" field="paymentTerms" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="reference">{{ $t("Reference") }}</label>
              <input
                id="reference"
                v-model="form.reference"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('reference') }"
                name="reference"
                :placeholder="$t('Enter reference')"
              />
              <has-error :form="form" field="reference" />
            </div>
            <div class="form-group col-md-6">
              <label for="deliveryPlace">{{ $t("Delivery Place") }}</label>
              <input
                id="deliveryPlace"
                v-model="form.deliveryPlace"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('deliveryPlace') }"
                name="deliveryPlace"
                :placeholder="$t('Enter a delivery place')"
              />
              <has-error :form="form" field="deliveryPlace" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="date">{{ $t("Date") }}</label>
              <input
                id="date"
                v-model="form.date"
                type="date"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('date') }"
                name="date"
              />
              <has-error :form="form" field="date" />
            </div>
            <div class="form-group col-md-6">
              <label for="status">{{ $t("Status") }}</label>
              <select
                id="status"
                v-model="form.status"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('status') }"
              >
                <option value="1">{{ $t("Active") }}</option>
                <option value="0">{{ $t("Inactive") }}</option>
              </select>
              <has-error :form="form" field="status" />
            </div>
          </div>
          <div class="form-group">
            <label for="note">{{ $t("Note") }}</label>
            <textarea
              id="note"
              v-model="form.note"
              class="form-control"
              :class="{ 'is-invalid': form.errors.has('note') }"
              :placeholder="$t('Write your note here!')"
            />
            <has-error :form="form" field="note" />
          </div>
          <div class="form-group">
            <label for="attachment">{{ $t("Payment Attachment") }}</label>
            <input
              id="attachment"
              ref="attachmentInput"
              type="file"
              class="form-control"
              :class="{ 'is-invalid': form.errors.has('attachment') }"
              name="attachment"
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              @change="handleAttachmentChange"
            />
            <small class="form-text text-muted">
              {{ $t("Supported formats: PDF, JPG, PNG, DOC, DOCX") }}
            </small>
            <has-error :form="form" field="attachment" />
            <div v-if="form.attachment" class="mt-2">
              <span class="badge badge-info">
                <i class="fas fa-paperclip"></i> {{ getAttachmentName() }}
              </span>
              <button 
                type="button" 
                class="btn btn-sm btn-outline-danger ml-2"
                @click="removeAttachment"
              >
                <i class="fas fa-times"></i> {{ $t("Remove") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="payment-modal-footer" slot="modal-footer">
        <div class="pos-modal-footer no-print">
          <button
            class="btn btn-primary"
            @click="addPayment"
            @keydown="form.onKeydown($event)"
          >
            <i class="fas fa-save" /> {{ $t("Save") }}
          </button>
          <button
            class="modal-default-button btn btn-danger"
            @click="closeModalAndClearFormData"
          >
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
                <span v-show="appInfo.address"
                  >{{ $t("Address") }} : {{ appInfo.address }} <br
                /></span>
                <span v-show="appInfo.email"
                  >{{ $t("Email") }} : {{ appInfo.email }} <br
                /></span>
                <span v-show="appInfo.phone"
                  >{{ $t("Phone") }} : {{ appInfo.phone }} <br
                /></span>
                <span v-show="allData.client.name"
                  >{{ $t("Client") }} : {{ allData.client.name }} <br
                /></span>
                <span v-show="allData.createdBy"
                  >{{ $t("Sold By") }} : {{ allData.createdBy }} <br
                /></span>
              </p>
            </div>

            <table class="table_data">
              <tbody>
                <tr v-for="(data, i) in invoiceProducts" :key="i">
                  <td colspan="3">
                    <span>
                      {{ data.productName }}<br />
                      <span class="pqty"
                        >{{ data.quantity }} {{ data.productUnit }} x
                        {{ data.salePrice }}
                        <span class="saudi-riyal">ê</span></span
                      >
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
                    {{ allData.subTotal }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr v-if="!isSaudiArabia && allData.discount" style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Discount") }}</td>
                  <td style="text-align: right" class="total">
                    {{ allData.discount }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr v-if="allData.tax" style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Tax") }}(%)</td>
                  <td style="text-align: right" class="total">
                    {{ allData.tax }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
                <tr style="margin-top: 10px">
                  <td colspan="3" class="total">{{ $t("Total") }}</td>
                  <td style="text-align: right" class="total">
                    {{ allData.invoiceTotal }}
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
                    {{ allData.due }} <span class="saudi-riyal">ê</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="legalcopy" class="ml-2 mb-4">
              <p class="legal">
                <strong>{{ appInfo.invoiceThankYouMessage }}</strong>
              </p>
              <div id="bar">
                <barcode
                  width="2"
                  height="25"
                  fontSize="15"
                  :value="allData.invoiceNo | withPrefix(invoicePrefix)"
                >
                  {{ $t("Rendering fails.") }}
                </barcode>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pos-modal-footer no-print" slot="modal-footer">
        <div>
          <button
            @click="printInvoice()"
            class="modal-default-button btn btn-info"
          >
            {{ $t("Print") }}
          </button>
        </div>
        <button
          class="modal-default-button btn btn-danger"
          @click="closeReceiptModal"
        >
          {{ $t("Close") }}
        </button>
      </div>
    </Modal>
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
    accounts: "",
    categories: [],
    subCategories: [],
    productPrefix: "",
    invoicePrefix: "",
    showModal: false,
    allData: {},
    showSmallInvoiceModal: false,
    printMe: false,
    perPage: 10,
    pagination: "",
    query: "",
    generateOrder: false,
    clickCount: 0,
    clients: [],
  }),
  computed: {
    ...mapGetters("operations", ["items", "appInfo"]),
    
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
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
  },
  methods: {
    // get all clients
    async getClients(selectedClient = "default") {
      await axios
        .get("/api/all-clients")
        .then(({ data }) => {
          this.clients = data.data;
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
      this.accounts = data.data;

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
      this.taxes = data.data;

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

    // get the invoice info by invoice slug
    async getInvoice(invoice_slug) {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/invoices/" + invoice_slug
      );
      this.allData = data.data;
      this.invoiceProducts = this.allData.invoiceProducts;
      this.invoiceProducts.sort(this.sortProducts);
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

    // get sub categories for a category
    async getSubCategoriesByCategory() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;

      this.subCategories = [];
      this.form.subCategory = "";

      let slug = this.form.category?.slug;
      if (slug) {
        const { data } = await axios.get(
          window.location.origin +
            "/api/all-pro-sub-categories-by-category/" +
            slug +
            "?page=" +
            currentPage
        );
        this.subCategories = data.cats;
        this.products = data.products;
      } else {
        await this.getSubCategories();
        await this.getProducts();
      }
    },

    // get products for a sub category
    async getProductsBySubCategory() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.products = [];
      this.form.itemName = "";
      let catSlug = this.form.category?.slug;
      let subCatSlug = this.form.subCategory?.slug;
      if (catSlug && subCatSlug) {
        const { data } = await axios.get(
          window.location.origin +
            "/api/all-products-by-sub-categories/" +
            catSlug +
            "/" +
            subCatSlug +
            "?page=" +
            currentPage
        );
        this.products = data.data;
        this.pagination = data.meta;
        
        // Ensure all products have proper VAT rate information
        this.processProductsVatRates();
      } else {
        await this.getProducts();
      }
    },

    // pagination
    async paginate() {
      let catSlug = this.form.category?.slug;
      if (this.query === "") {
        if (catSlug) {
          await this.getSubCategoriesByCategory();
        } else {
          await this.getProducts();
        }
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

    // store item in array
    async storeProduct(product) {
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
            unitPrice: product.priceWithDiscount,
            unitCost: product.priceWithDiscount, // Will be recalculated
            totalPrice: product.priceWithDiscount, // Will be recalculated
            productTax: 0, // Will be recalculated
            totalTax: 0, // Will be recalculated
            discount: 0,
            discountType: "fixed",
            discountAmount: 0,
            selectedVatRate: selectedVatRate,
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
      if (item) {
        // Calculate subtotal after discount
        let subtotalAfterDiscount =
          item.unitPrice * item.qty - (item.discountAmount || 0);

        // Persist VAT-excluded total for summary/subtotal calculations
        item.totalAfterDiscount = this.roundToTwoDecimals(subtotalAfterDiscount);

        // Calculate VAT on the discounted amount
        if (item.selectedVatRate && item.selectedVatRate.rate > 0) {
          item.productTax = this.roundToTwoDecimals(
            subtotalAfterDiscount * (item.selectedVatRate.rate / 100)
          );
        } else {
          item.productTax = 0;
        }

        item.totalTax = item.productTax;

        // Calculate final total with VAT (line total including VAT)
        item.totalPrice = this.roundToTwoDecimals(
          subtotalAfterDiscount + item.productTax
        );

        // Update unit cost (price per unit including VAT if applicable)
        const qtyNumber = Number(item.qty) || 0;
        if (qtyNumber > 0) {
          item.unitCost = this.roundToTwoDecimals(item.totalPrice / qtyNumber);
        }

        this.form.selectedProducts[index] = item;
      }
    },

    // calculate sum
    calculateSum() {
      // calculate subtotal (VAT-excluded, after line discounts)
      this.form.subTotal = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + (cur.totalAfterDiscount || 0)).toFixed(2));
      }, 0);

      // calculate product tax
      this.form.productTotalTax = this.form.selectedProducts.reduce(function (
        prev,
        cur
      ) {
        return Number((prev + cur.totalTax).toFixed(2));
      },
      0);

      this.form.netTotal = this.form.subTotal;

      // calculate discount first (skip for Saudi Arabia)
      let discount = 0;
      if (!this.isSaudiArabia && this.form.subTotal > 0) {
        discount = Number(this.form.discount);
        if (this.form.discountType == 1) {
          discount = (discount / 100) * this.form.subTotal;
          this.form.totalDiscount = Number(discount.toFixed(2));
        } else {
          discount = Number(this.form.discount);
        }
      }

      // calculate net amount (after discount, before VAT, add transport)
      let netAmount =
        this.form.subTotal - discount + Number(this.form.transportCost || 0);

      // Calculate invoice-level tax on netAmount (skip for Saudi Arabia)
      let invoiceTax = 0;
      if (!this.isSaudiArabia && this.form.orderTax) {
        invoiceTax = (this.form.orderTax.rate / 100) * netAmount;
      }

      // Total tax = product VAT + invoice-level tax
      this.form.totalTax = Number(
        (this.form.productTotalTax + invoiceTax).toFixed(2)
      );

      // calculate final total
      this.form.netTotal = Number((netAmount + this.form.totalTax).toFixed(2));
      return;
    },

    // save invoice
    async saveInvoice(isDirect = true) {
      // Ensure appInfo is loaded before proceeding
      await this.ensureAppInfoLoaded();
      
      await this.form
        .post(window.location.origin + "/api/invoices")
        .then(async ({ data }) => {
          this.form.invoice_id = data.data.invoice_id;
          this.form.invoice_slug = data.data.invoice_slug;
          this.clearTemporaryData();
          
          if (isDirect) {
            // Send to ZATCA if in Saudi Arabia and this is a direct save
            if (this.isSaudiArabia) {
              try {
                await this.sendInvoiceToZatca(this.form.invoice_slug);
              } catch (error) {
                console.error('Failed to send invoice to ZATCA:', error);
                // Show error but don't block the flow
                this.$toast.error(
                  this.$t("ZATCA Error"),
                  this.$t("Invoice created but failed to send to ZATCA. Please try sending manually.")
                );
              }
            }
            this.showInvoiceAndPrint();
          }
        })
        .catch((error) => {
          const ErrorHandler = require("~/utils/errorHandler").default;
          ErrorHandler.handleApiError(error, {
            showValidationErrors: false,
          });
        });
    },

    // save payment
    async addPayment() {
      if (this.form.invoice_id != null) {
        // Create FormData for file upload
        const formData = new FormData();
        
        // Add basic form fields manually to avoid nested object issues
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
        
        // Add the invoice_id
        formData.append('invoice_id', this.form.invoice_id);
        
        // Handle file attachment
        if (this.form.attachment) {
          formData.append('attachment', this.form.attachment);
        }
        
        await axios
          .post(window.location.origin + "/api/invoices-pay", formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(async () => {
            this.showModal = false;
            await this.showInvoiceAndPrint();
            this.form.reset();
            this.againDefaultSettings();
          })
          .catch((error) => {
            const ErrorHandler = require("~/utils/errorHandler").default;
            ErrorHandler.handleApiError(error, {
              showValidationErrors: false,
            });
          });
      } else {
        const ErrorHandler = require("~/utils/errorHandler").default;
        ErrorHandler.showError(this.$t("Error"), this.$t("Please try again"));
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
      console.log("from close" + this.clickCount);
    },

    // complete order and add payment
    async completeOrderAndAddPayment() {
      await this.saveInvoice(false);
      if (this.form.invoice_id != null) {
        // Send to ZATCA before showing payment modal if in Saudi Arabia
        if (this.isSaudiArabia) {
          try {
            await this.sendInvoiceToZatca(this.form.invoice_slug);
          } catch (error) {
            console.error('Failed to send invoice to ZATCA:', error);
            // Show error but don't block the flow
            this.$toast.error(
              this.$t("ZATCA Error"),
              this.$t("Invoice created but failed to send to ZATCA. Please try sending manually.")
            );
          }
        }
        
        this.showModal = true;
        this.form.paidAmount = this.form.netTotal.toFixed(2);

        this.$nextTick(() => this.$refs.paidAmountInput.focus());
      }
    },

    // show invoice and print
    async showInvoiceAndPrint() {
      await this.getInvoice(this.form.invoice_slug);
      this.form.reset();
      this.againDefaultSettings();
      this.getProducts();

      this.showSmallInvoiceModal = true;
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
          </body></html>`
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
  },
  mounted() {
    this.loadTemporaryData();
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
.pos-r-head {
  box-shadow: 0px 0px 3px #0003;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border-bottom: 1px solid #f3f3f3;
}

.pos-logo {
  text-align: center;
}

.pos-item-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
}

.pos-item-grid > div {
  border: 0;
  border-radius: 10px;
  box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%), 0 1px 4px rgb(0 0 0 / 8%);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #fff;
  position: relative;
}

.pos-item-grid > div:hover {
  border-color: #33a0d9;
}

.pos-item-grid > div .box-qty {
  position: absolute;
  width: 50px;
  height: 30px;
  display: block;
  background: #33a0d9;
  top: 0;
  left: 0px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border-bottom-right-radius: 10px;
}

.qty-red {
  background: red !important;
}

.pos-body {
  border-radius: 5px;
  min-height: 240px;
}

.pos-box-img {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #f1f1f1;
  background: #ebebeb;
  line-height: 100px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
}

.pos-box-img img {
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.pos-box-content p {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0px;
}

.pos-box-content span {
  font-size: 12px;
  margin-bottom: 2px;
}

.pos-box-content {
  padding: 5px 10px;
}

.pos-item-grid-red {
  border-color: red !important;
}

.card-client-search {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.table-wrap {
  padding: 15px;
}

.table-responsive.table-wrap > table {
  border: 1px solid #ddd;
}

.table-wrap .table thead tr {
  border-bottom: 0;
  background: #33a0d91f !important;
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

.table-wrap .btn-danger {
  width: 25px;
  height: 25px;
  font-size: 10px;
  padding: 0px;
}

.table-wrap .icon-sm {
  width: 25px;
  height: 25px;
  line-height: 23px;
}

.pos-card-footer {
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 15px;
}

.pos-net-total {
  background: #33a0d933;
  width: 100%;
  padding: 10px 10px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
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

.dark-mode .pos-item-grid > div {
  border-color: #6c757d !important;
}

.dark-mode .pos-box-content {
  padding: 5px 10px;
  color: #fff;
}

.dark-mode .pos-item-grid > div.pos-item-grid-red {
  border-color: red !important;
}

.dark-mode .card-client-search {
  border-color: #6c757d;
}

.dark-mode .table-striped tbody tr:nth-of-type(odd) {
  background-color: #1f2937;
}

.dark-mode .table-responsive.table-wrap > table {
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

#invoice-POS .info > p {
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

@media only screen and (max-width: 1250px) {
  .pos-item-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.create-btn {
  padding: 11px;
}

.create-btn-2 {
  padding: 10px;
}

.btn-primary {
  background: #2ab930 !important;
}

.btn-primary:hover {
  background: #229a26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}
</style>
