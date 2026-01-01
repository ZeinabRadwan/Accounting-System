<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between" v-if="allData">
          <div class="btn-group">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" href="#details" data-toggle="tab" @click="getInvoice">
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a>
              </li>
              <li class="nav-item">
                <a @click="getActivity" class="nav-link" href="#activity-log" data-toggle="tab">
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a>
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a @click="communicationConfig.sms_configured ? notify((form.isSendSMS = true)) : null" href="#" :class="[
              'btn',
              communicationConfig.sms_configured ? 'btn-secondary' : 'btn-secondary disabled'
            ]" :disabled="!communicationConfig.sms_configured"
              :title="!communicationConfig.sms_configured ? $t('SMS settings not configured') : ''"
              v-tooltip="!communicationConfig.sms_configured ? $t('SMS settings not configured') : ''">
              <i class="fas fa-sms"></i> {{ $t("SMS") }}
            </a>
            <a @click="notify((form.isSendEmail = true))" href="#" class="btn btn-success"><i
                class="fas fa-paper-plane"></i> {{ $t("email") }}</a>
            <!-- Commented out old download and print buttons -->
            <!-- <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <!-- New preview and download PDF buttons -->
            <a @click="previewPDF" href="#" class="btn btn-info">
              <i class="fas fa-eye"></i> {{ $t("Preview PDF") }}
            </a>
            <a @click="downloadPDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <a v-if="isSaudiArabia && allData && allData.status === 0" @click="sendInvoice(allData)" href="#"
              class="btn btn-success">
              <i class="fas fa-paper-plane"></i> {{ $t("Send Invoice to ZATCA") }}
            </a>

            <router-link v-if="$can('invoice-edit') && !(isSaudiArabia && allData && allData.status === 1)" :to="{
              name: 'invoices.edit',
              params: { slug: allData.slug },
            }" class="btn btn-info">
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <a v-if="allData && allData.status === 1 && calculateDueAmount > 0" @click.prevent="addPayment()" href="#"
              class="btn btn-primary">
              <i class="fas fa-money-bill" /> {{ $t("Add Payment") }}
            </a>
            <a v-if="$can('invoice-return-create') && allData && allData.status === 1"
              @click.prevent="returnInvoice(allData)" href="#" class="btn btn-warning">
              <i class="fas fa-undo" /> {{ $t("Return Invoice") }}
            </a>
            <router-link :to="{ name: 'invoices.index' }" class="btn btn-info float-right">
              <template
                v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">
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
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane active" id="details">
        <div class="row">
          <!-- Main content -->
          <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
            <table-loading v-show="loading" />
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                <CompanyInfo />
              </div>
              <!-- /.col -->
              <div class="col-sm-8  invoice-col float-right text-md-right">
                <h5>{{ $t("Client Details") }}</h5>
                <div v-if="allData.client">
                  <span v-if="allData.client.companyName"><strong>{{ $t("Client ID") }}:</strong>
                    {{ allData.client.clientID | withPrefix(clientPrefix) }}<br /></span>
                  <strong>{{ $t("Client Name") }}:</strong>
                  {{ allData.client.name }}<br />
                  <span v-if="allData.client.companyName"><strong>{{ $t("Company Name") }}:</strong>
                    {{ allData.client.companyName }}<br /></span>
                  <span v-if="allData.client.email"><strong>{{ $t("Email") }}:</strong>
                    {{ allData.client.email }}<br /></span>
                  <span v-if="allData.client.phoneNumber"><strong>{{ $t("Contact Number") }}:</strong>
                    {{ allData.client.phoneNumber }}<br /></span>
                  <span v-if="allData.client.address"><strong>{{ $t("Address") }}:</strong>
                    {{ allData.client.address }}<br /></span>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <!-- Invoice Header Information Table -->
            <div class="row mt-3">
              <div class="col-12">
                <GeneralTable :columns="invoiceHeaderColumns" :rows="invoiceHeaderRows" :loading="loading"
                  wrapper-class="">
                  <template #cell-invoiceNo="{ value }">
                    {{ value | withPrefix(invoicePrefix) }}
                  </template>
                  <template #cell-invoiceDate="{ value }">
                    {{ value | moment("Do MMM, YYYY") }}
                  </template>
                  <template #cell-status="{ value }">
                    <span v-if="value === 1" class="badge bg-success">{{ $t("Active") }}</span>
                    <span v-else class="badge bg-danger">{{ $t("Inactive") }}</span>
                  </template>
                  <template #cell-saleStatus="{ value }">
                    <span v-if="value === 'مكتملة'" class="badge bg-success">
                      {{ $t("Completed") }} (مكتملة)
                    </span>
                    <span v-else-if="value === 'معلقة'" class="badge bg-warning">
                      {{ $t("Pending") }} (معلقة)
                    </span>
                    <span v-else>{{ value || '-' }}</span>
                  </template>
                  <template #cell-date="{ value }">
                    {{ value | moment("Do MMM, YYYY") }}
                  </template>
                  <template #cell-journalEntry="{ value }">
                    <div v-if="value && value.length > 0" class="d-flex flex-wrap justify-content-center" style="gap: 4px;">
                      <router-link
                        v-for="(entry, index) in value"
                        :key="entry.id"
                        :to="{ name: 'journal-entries.show', params: { id: entry.id } }"
                        class="badge bg-info text-white"
                        style="text-decoration: none; margin: 2px;">
                        {{ entry.entry_number || `#${entry.id}` }}
                        <span v-if="entry.type === 'sale_cogs'" class="ml-1">(COGS)</span>
                      </router-link>
                    </div>
                    <span v-else class="text-muted">-</span>
                  </template>
                </GeneralTable>
              </div>
            </div>

            <!-- Invoice-Level Discount Section -->
            <div class="row mt-3" v-if="hasInvoiceDiscount">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table class="table invoices-table">
                    <thead>
                      <tr>
                        <th>{{ $t("Invoice Discount") }}</th>
                        <th>{{ $t("Discount Type") }}</th>
                        <th>{{ $t("Discount Value") }}</th>
                        <th>{{ $t("Discount Amount") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{{ $t("Invoice Discount") }}</td>
                        <td>
                          <span v-if="invoiceDiscountType === 'percentage'">{{ $t("%") }}</span>
                          <span v-else-if="invoiceDiscountType === 'fixed'">{{ $t("Fixed") }}</span>
                          <span v-else>{{ invoiceDiscountType }}</span>
                        </td>
                        <td>
                          {{ formatNumber(invoiceDiscountValue) }}
                          <span v-if="invoiceDiscountType === 'percentage'">%</span>
                          <span v-else class="saudi-riyal">ê</span>
                        </td>
                        <td>
                          {{ formatNumber(globalDiscountAmount) }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Attachments Section -->
            <div class="row mt-3" v-if="allData.attachments && allData.attachments.length > 0">
              <div class="col-12">
                <div class="table-responsive table-custom">
                  <table class="table invoices-table">
                    <thead>
                      <tr>
                        <th>{{ $t("Attachments") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <ul class="list-unstyled mb-0">
                            <li v-for="(attachment, index) in allData.attachments" :key="index" class="mb-2">
                              <a :href="attachment.url || attachment.path" target="_blank"
                                class="d-flex align-items-center">
                                <i class="fas fa-file mr-2"></i>
                                <span>{{ attachment.name || attachment.file_name || `Attachment ${index + 1}` }}</span>
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Table row -->
            <div class="row mt-4">
              <div class="col-12">
                <strong class="mb-2 d-block">{{ $t("Invoice Products") }}:</strong>
                <GeneralTable :columns="invoiceProductsColumns" :rows="invoiceProductsRows" :loading="loading"
                  wrapper-class="">
                  <template #cell-code="{ value }">
                    {{ value | withPrefix(productPrefix) }}
                  </template>
                  <template #cell-price="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                  <template #cell-total="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                  <template #cell-discount="{ row }">
                    <span v-if="row._raw.discountType === 'percentage'">
                      {{ row._raw.discountPercentage }}% ({{ formatNumber(calculateProductDiscountAmount(row._raw)) }}
                      <span class="saudi-riyal">ê</span>)
                    </span>
                    <span v-else-if="row._raw.productDiscount > 0">
                      {{ formatNumber(calculateProductDiscountAmount(row._raw)) }} <span class="saudi-riyal">ê</span>
                    </span>
                    <span v-else class="text-muted">
                      {{ $t('No Discount') }}
                    </span>
                  </template>
                  <template #cell-totalAfterDiscount="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                  <template #cell-vat="{ row }">
                    <span v-if="row._raw.productTax > 0">
                      {{ formatNumber(row._raw.productTax) }} <span class="saudi-riyal">ê</span>
                      <small v-if="row._raw.vatRate" class="text-muted d-block">
                        ({{ row._raw.vatRate.rate }}%)
                      </small>
                    </span>
                    <span v-else class="text-muted">
                      {{ $t('No VAT') }}
                    </span>
                  </template>
                  <template #cell-totalWithVat="{ value }">
                    {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                  </template>
                </GeneralTable>
                <div class="mt-2 text-center">
                  <strong>{{ $t("Subtotal") }}: {{ formatNumber(subtotal) }} <span
                      class="saudi-riyal">ê</span></strong>
                </div>
              </div>
            </div>

            <!-- Product-level VAT and Discount Notice -->
            <!-- <div class="row mt-3">
               <div class="col-12">
                 <div class="alert alert-info">
                   <i class="fas fa-info-circle"></i>
                   <strong>{{ $t('Note') }}:</strong> 
                   {{ $t('Product-level VAT and discount are shown in the table above. The table displays the calculation flow: Price → Total → Discount → Total After Discount → VAT → Total with VAT.') }}
                 </div>
               </div>
             </div> -->

            <!-- Product Summary -->
            <!-- <div class="row mt-3">
               <div class="col-12">
                 <div class="table-responsive table-custom">
                   <table class="table table-sm">
                     <tbody>
                       <tr class="bg-light">
                         <th>{{ $t('Total Product VAT') }}:</th>
                         <td>{{ totalProductVat  }} <span class="saudi-riyal">ê</span></td>
                         <th>{{ $t('Total Product Discount') }}:</th>
                         <td>{{ totalProductDiscount  }} <span class="saudi-riyal">ê</span></td>
                       </tr>
                       <tr class="bg-light">
                         <th>{{ $t('Products with VAT') }}:</th>
                         <td>{{ productsWithVat }}</td>
                         <th>{{ $t('Products with Discount') }}:</th>
                         <td>{{ productsWithDiscount }}</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
             </div> -->

            <!-- Debug Information (remove in production) -->
            <div class="row mt-3" v-if="false">
              <div class="col-12">
                <div class="alert alert-warning">
                  <strong>Debug Info:</strong><br>
                  Country: {{ appInfo?.country || 'Not set' }}<br>
                  Is Saudi Arabia: {{ isSaudiArabia }}<br>
                  Subtotal: {{ allData?.subTotal }}<br>
                  Discount: {{ allData?.discount }} (Type: {{ allData?.discountType }})<br>
                  Transport: {{ allData?.transport }}<br>
                  Tax: {{ allData?.tax }}<br>
                  Calculated Total: {{ calculatedTotal }}<br>
                  Total Product VAT: {{ totalProductVat }}<br>
                  Total Product Discount: {{ totalProductDiscount }}<br>
                  Products with VAT: {{ productsWithVat }}<br>
                  Products with Discount: {{ productsWithDiscount }}
                </div>
              </div>
            </div>

            <!-- /.row -->
            <div class="row mt-4" id="page-break">
              <div class="col-lg-12 col-xl-8">
                <div v-if="
                  allData.invoicePayments &&
                  allData.invoicePayments.length > 0
                ">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <strong>{{ $t("Payment History") }}:</strong>
                    <div v-if="allData.paymentType !== undefined || allData.is_paid !== undefined">
                      <strong>{{ $t("Payment Type") }}:</strong>
                      <span v-if="allData.paymentType === 'paid' || allData.is_paid" class="badge bg-success ml-2">
                        {{ $t("Paid") }} (مدفوع)
                      </span>
                      <span v-else class="badge bg-warning ml-2">
                        {{ $t("On Credit") }} (بيع آجل)
                      </span>
                      <span
                        v-if="(allData.paymentType === 'paid' || allData.is_paid) && (allData.paymentMethod || allData.payment_method_id)"
                        class="ml-2">
                        - {{ allData.paymentMethod ? allData.paymentMethod.name : '-' }}
                      </span>
                    </div>
                  </div>
                  <GeneralTable :columns="paymentHistoryColumns" :rows="paymentHistoryRows" :loading="loading"
                    wrapper-class="">
                    <template #cell-amount="{ value }">
                      {{ formatNumber(value) }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-status="{ value }">
                      <span v-if="value === 1" class="badge bg-success">{{ $t("Active") }}</span>
                      <span v-else class="badge bg-danger">{{ $t("Inactive") }}</span>
                    </template>
                  </GeneralTable>
                  <div class="mt-2 text-right">
                    <strong>{{ $t("Total Paid") }}: {{ formatNumber(allData.totalPaid) }} <span
                        class="saudi-riyal">ê</span></strong>
                  </div>
                </div>
                <div class="no-print callout callout-danger mt-4 w-100" v-else>
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">{{ $t("No payments available yet!") }}</h5>
                    <div v-if="allData.paymentType !== undefined || allData.is_paid !== undefined" class="ml-3">
                      <strong>{{ $t("Payment Type") }}:</strong>
                      <span v-if="allData.paymentType === 'paid' || allData.is_paid" class="badge bg-success ml-2">
                        {{ $t("Paid") }} (مدفوع)
                      </span>
                      <span v-else class="badge bg-warning ml-2">
                        {{ $t("On Credit") }} (بيع آجل)
                      </span>
                      <span
                        v-if="(allData.paymentType === 'paid' || allData.is_paid) && (allData.paymentMethod || allData.payment_method_id)"
                        class="ml-2">
                        - {{ allData.paymentMethod ? allData.paymentMethod.name : '-' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4">
                <InvoiceSummaryTable
                  :subtotal="subtotal"
                  :after-discount="subtotal"
                  :total-tax="totalTax"
                  :transport="allData.transport || 0"
                  :grand-total="grandTotal"
                  :paid-amount="allData.totalPaid || 0"
                  :due-amount="calculateDueAmount"
                />
              </div>
            </div>
            <!-- /.row -->
          </div>
          <!-- /.invoice -->
        </div>
      </div>

      <!--  activity logs -->
      <div class="tab-pane" id="activity-log">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success">
                  <i class="fas fa-sync"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="loading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div v-show="items.length > 0" v-for="(data, i) in items" :key="i">
                <div class="card mb-0 border border-gray">
                  <div class="card-body py-1">
                    <div class="row">
                      <div class="col-1 d-flex justify-content-center align-items-center">
                        <i v-if="data.event == 'Update'" class="fa fa-magic" aria-hidden="true"></i>
                        <i v-if="data.event == 'Create'" class="fa fa-plus-circle" aria-hidden="true"></i>
                        <i v-if="data.event == 'Delete'" class="fa fa-trash" aria-hidden="true"></i>
                      </div>
                      <div class="col-11">
                        <div class="row">
                          <div class="col-12">
                            <p class="text-bold mb-0">{{ data.causer_name }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ $t(data.description) }}</p>
                          </div>
                          <div class="col-12">
                            <p class="mb-0">{{ data.performedAt }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center" v-show="!loading && !items.length">
                <EmptyTable />
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t("per_page") }} </label>
                <div>
                  <select @change="updatePerPager" v-model="perPage" class="form-control form-control-sm ml-1">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <!-- pagination-start -->
              <pagination v-if="pagination && pagination.last_page > 1" :pagination="pagination" :offset="5"
                class="justify-flex-end" @paginate="paginate" />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="showPaymentModal" @close="showPaymentModal = false">
      <h5 slot="header">
        {{ $t("Create invoice payment") }} :
        {{ allData.invoiceNo | withPrefix(invoicePrefix) }}
      </h5>
      <div slot="body" class="row">
        <form role="form" @submit.prevent="savePayment" @keydown="paymentForm.onKeydown($event)" class="w-100">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="clientInvoiceTotal">{{
                $t("Invoice Total")
              }}</label>
              <input type="text" class="form-control" readonly :value="formatNumber(calculatedTotal)" />
            </div>
            <div class="form-group col-md-6">
              <label for="clientInvoiceDue">{{
                $t("Invoice Due")
              }}</label>
              <input type="text" class="form-control" readonly :value="formatNumber(calculateDueAmount)" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-4">
              <label for="paidAmount">{{ $t("Paid Amount") }}</label>
              <input type="number" step="any" class="form-control" :placeholder="$t('Enter an amount')" required min="1"
                v-model="paymentForm.paidAmount" :max="calculateDueAmount" />
            </div>
            <div class="form-group col-md-8">
              <label for="account">{{ $t("Account") }}
                <span class="required">*</span></label>
              <div class="d-flex w-100">
                <v-select v-model="paymentForm.account" :options="accounts" label="label"
                  :class="{ 'is-invalid': paymentForm.errors.has('account') }" name="account"
                  :placeholder="$t('Select an account')" class="flex-grow-1">
                  <template slot="option" slot-scope="option">
                    <img :src="option.image" style="width: 30px; height: 30px;" />
                    {{ option.label }}
                  </template>
                </v-select>
                <AccountCreateModal @accountCreated="handleAccountCreated">
                  <div class="input-group-text create-btn">
                    <i class="fas fa-solid fa-plus-circle"></i>
                  </div>
                </AccountCreateModal>
              </div>
              <has-error :form="paymentForm" field="account" />
            </div>
          </div>

          <div class="row">
            <div class="form-group col-md-6">
              <label for="receiptNo">{{ $t("Receipt No") }}</label>
              <input type="text" v-model="paymentForm.receiptNo" class="form-control"
                :class="{ 'is-invalid': paymentForm.errors.has('receiptNo') }" id="receiptNo"
                :placeholder="$t('Enter a receipt no')" />
              <has-error :form="paymentForm" field="receiptNo" />
            </div>
            <div class="form-group col-md-6">
              <label for="paymentDate">{{ $t("Payment Date") }}</label>
              <input id="paymentDate" v-model="paymentForm.paymentDate" type="date" class="form-control"
                :class="{ 'is-invalid': paymentForm.errors.has('paymentDate') }" name="paymentDate" />
              <has-error :form="paymentForm" field="paymentDate" />
            </div>

            <div class="form-group col-md-6">
              <label for="status">{{ $t("Status") }}</label>
              <select id="status" v-model="paymentForm.status" class="form-control"
                :class="{ 'is-invalid': paymentForm.errors.has('status') }" :disabled="allData && allData.status === 0">
                <option v-if="!allData || allData.status === 1" value="1">{{ $t("Active") }}</option>
                <option value="0">{{ $t("Inactive") }}</option>
              </select>
              <has-error :form="paymentForm" field="status" />
            </div>
          </div>

          <div class="form-group">
            <label for="note">{{ $t("Note") }}</label>
            <textarea id="note" v-model="paymentForm.note" class="form-control"
              :class="{ 'is-invalid': paymentForm.errors.has('note') }" :placeholder="$t('Write your note here!')" />
            <has-error :form="paymentForm" field="note" />
          </div>
          <div class="form-group col-12 d-flex flex-wrap">
            <div class="pr-5 d-flex align-items-center">
              <toggle-button v-model="paymentForm.isSendEmail"
                :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
              <span class="ml-3">{{ $t("Send Email Notification") }}</span>
              <span v-if="!communicationConfig.loading && !communicationConfig.email_configured"
                class="ml-2 text-muted small">
                ({{ $t("Email not configured") }})
              </span>
            </div>
          </div>
          <div class="form-group col-12 d-flex flex-wrap">
            <div class="pr-5 d-flex align-items-center">
              <toggle-button v-model="paymentForm.isSendSMS"
                :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
              <span class="ml-3">{{ $t("Send SMS Notification") }}</span>
              <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured"
                class="ml-2 text-muted small">
                ({{ $t("SMS not configured") }})
              </span>
            </div>
          </div>
        </form>
      </div>
      <div slot="modal-footer" class="d-flex justify-content-end w-100">
        <v-button :loading="paymentForm.busy" class="btn btn-success mr-2" @click="savePayment">
          <i class="fas fa-save" /> {{ $t("Save") }}
        </v-button>
        <button type="button" class="btn btn-secondary" @click="showPaymentModal = false">
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
import html2pdf from "html2pdf.js";
import Swal from "sweetalert2";
import SwalOriginal from "sweetalert2/dist/sweetalert2";
import { ToggleButton } from "vue-js-toggle-button";
import AccountCreateModal from "~/components/AccountCreateModal";
import GeneralTable from "~/components/GeneralTable";
import InvoiceSummaryTable from "~/components/sales/InvoiceSummaryTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Invoice Details") };
  },
  components: {
    ToggleButton,
    AccountCreateModal,
    GeneralTable,
    InvoiceSummaryTable,
  },
  data: () => ({
    allData: "",
    breadcrumbsCurrent: "Invoice Details",
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
        name: "Details",
        url: "",
      },
    ],
    invoiceProducts: [],
    productPrefix: "",
    clientPrefix: "",
    invoicePrefix: "",
    loading: false,
    form: new Form({
      isSendEmail: false,
      isSendSMS: false,
    }),
    isDemoMode: window.config.isDemoMode,
    query: "",
    perPage: 10,
    // Communication configuration status
    communicationConfig: {
      email_configured: false,
      sms_configured: false,
      loading: true,
    },
    showPaymentModal: false,
    accounts: [],
    paymentForm: new Form({
      invoice_id: "",
      paidAmount: 1,
      paymentDate: new Date().toISOString().slice(0, 10),
      account: "",
      receiptNo: "",
      note: "",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
    }),
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo", "items", "pagination"]),

    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      const result = !this.appInfo?.country || this.appInfo.country === 'SA';
      console.log('[InvoiceDetails] isSaudiArabia:', result, 'appInfo.country:', this.appInfo?.country);
      return result;
    },


    // Calculate correct total based on Saudi Arabia rules
    calculatedTotal() {
      if (!this.allData) return 0;

      if (this.isSaudiArabia) {
        // For Saudi Arabia: subTotal already includes discount and VAT
        return this.allData.subTotal;
      } else {
        // For other countries: Subtotal - Returns - Global Discount + Transport + Tax
        return this.allData.subTotal -
          (this.allData.totalInvoiceReturn || 0) -
          this.globalDiscountAmount +
          (this.allData.transport || 0) +
          (this.allData.tax || 0);
      }
    },

    // Calculate total product VAT
    totalProductVat() {
      if (!this.invoiceProducts) return 0;
      return this.invoiceProducts.reduce((total, product) => {
        return total + (product.productTax || 0);
      }, 0);
    },

    // Calculate total product discount
    totalProductDiscount() {
      if (!this.invoiceProducts) return 0;
      return this.invoiceProducts.reduce((total, product) => {
        return total + this.calculateProductDiscountAmount(product);
      }, 0);
    },

    // Calculate total price (sum of Total column in items table)
    totalPrice() {
      if (!this.invoiceProducts) return 0;
      return this.invoiceProducts.reduce((total, product) => {
        return total + (product.salePrice * product.quantity);
      }, 0);
    },

    // Count products with VAT
    productsWithVat() {
      if (!this.invoiceProducts) return 0;
      return this.invoiceProducts.filter(product => product.productTax && product.productTax > 0).length;
    },

    // Count products with discount
    productsWithDiscount() {
      if (!this.invoiceProducts) return 0;
      return this.invoiceProducts.filter(product => product.productDiscount && product.productDiscount > 0).length;
    },



    // Check if invoice has discount (supports both old and new format)
    hasInvoiceDiscount() {
      if (!this.allData) return false;
      // Check new format first (discountOnTotalType/discountOnTotalValue)
      if (this.allData.discountOnTotalType && this.allData.discountOnTotalValue && this.allData.discountOnTotalValue > 0) {
        return true;
      }
      // Check old format (discount/discountType)
      if (this.allData.discount && this.allData.discount > 0) {
        return true;
      }
      return false;
    },

    // Get invoice discount type (supports both old and new format)
    invoiceDiscountType() {
      if (!this.allData) return null;
      // New format: discountOnTotalType is already "percentage" or "fixed"
      if (this.allData.discountOnTotalType) {
        return this.allData.discountOnTotalType;
      }
      // Old format: discountType is 0 (fixed) or 1 (percentage)
      if (this.allData.discountType !== null && this.allData.discountType !== undefined) {
        return this.allData.discountType == 1 ? 'percentage' : 'fixed';
      }
      return null;
    },

    // Get invoice discount value (supports both old and new format)
    invoiceDiscountValue() {
      if (!this.allData) return 0;
      // New format: discountOnTotalValue
      if (this.allData.discountOnTotalValue !== null && this.allData.discountOnTotalValue !== undefined) {
        return this.allData.discountOnTotalValue;
      }
      // Old format: discount
      if (this.allData.discount !== null && this.allData.discount !== undefined) {
        return this.allData.discount;
      }
      return 0;
    },

    // Calculate global discount amount (handles both percentage and fixed)
    globalDiscountAmount() {
      if (!this.allData) return 0;
      
      const discountType = this.invoiceDiscountType;
      const discountValue = this.invoiceDiscountValue;
      
      if (!discountType || !discountValue || discountValue <= 0) return 0;

      // Calculate discount amount based on type
      if (discountType === 'percentage') {
        // For percentage, calculate from subtotal after product discounts
        const baseAmount = this.totalPrice - this.totalProductDiscount;
        return (baseAmount * discountValue) / 100;
      } else {
        // For fixed, return the discount value directly
        return discountValue;
      }
    },

    // Subtotal = sum of item net prices (after all discounts) - use stored values only
    // Net price = (quantity × sale_price) - discount_amount (stored in database)
    subtotal() {
      if (!this.invoiceProducts || this.invoiceProducts.length === 0) return 0;
      
      let subtotal = 0;
      this.invoiceProducts.forEach((product) => {
        // Use stored values: line_total - discount_amount = net_price
        const lineTotal = product.salePrice * product.quantity;
        const discountAmount = product.productDiscount || 0; // Stored discount_amount
        const netPrice = lineTotal - discountAmount;
        subtotal += netPrice;
      });
      
      return this.roundToTwoDecimals(subtotal);
    },

    // Total discount = sum of stored discount_amount values (display-only, not applied again)
    totalDiscount() {
      if (!this.invoiceProducts) return 0;
      const total = this.invoiceProducts.reduce((sum, product) => {
        return sum + (product.productDiscount || 0); // Stored discount_amount
      }, 0);
      return this.roundToTwoDecimals(total);
    },

    // Total tax = sum of stored tax_amount values + invoice-level tax (if any)
    totalTax() {
      if (!this.invoiceProducts) return 0;
      
      // Sum of stored VAT values (already calculated on net prices after discount)
      let totalVat = this.invoiceProducts.reduce((sum, product) => {
        return sum + (product.productTax || 0); // Stored tax_amount
      }, 0);
      
      // Add invoice-level tax if any (for non-Saudi Arabia)
      if (!this.isSaudiArabia && this.allData && this.allData.tax) {
        totalVat += this.allData.tax;
      }
      
      return this.roundToTwoDecimals(totalVat);
    },

    // Grand total = subtotal + VAT + transport (simple addition of stored values)
    // Always use: subtotal_after_discount + vat_total + transport_cost
    grandTotal() {
      if (!this.allData) return 0;
      
      // Always calculate: subtotal + VAT + transport
      // This matches the create page exactly
      const transportCost = Number(this.allData.transport || 0);
      const grandTotal = this.subtotal + this.totalTax + transportCost;
      
      return this.roundToTwoDecimals(Math.max(0, grandTotal));
    },

    // Net total (for backward compatibility - same as grandTotal)
    netTotal() {
      return this.grandTotal;
    },

    // Calculate due amount
    calculateDueAmount() {
      if (!this.allData) return 0;
      const total = this.netTotal;
      const paid = this.allData.totalPaid || 0;
      return total - paid;
    },

    // Invoice header columns
    invoiceHeaderColumns() {
      const columns = [
        { key: "invoiceNo", label: this.$t("Invoice No"), align: "text-center" },
        { key: "invoiceDate", label: this.$t("Invoice Date"), align: "text-center" },
        { key: "status", label: this.$t("Status"), align: "text-center" },
        { key: "createdBy", label: this.$t("Created By"), align: "text-center" },
        { key: "costCenter", label: this.$t("Cost Center"), align: "text-center" },
        { key: "branch", label: this.$t("Branch"), align: "text-center" },
        { key: "representative", label: this.$t("Sales Representative"), align: "text-center" },
        { key: "cashier", label: this.$t("Cashier"), align: "text-center" },
        { key: "saleStatus", label: this.$t("Sale Status"), align: "text-center" },
        { key: "date", label: this.$t("Date"), align: "text-center" },
      ];

      // Add journal entry column if journal entries exist
      if (this.allData && this.allData.journalEntries && this.allData.journalEntries.length > 0) {
        columns.push({ key: "journalEntry", label: this.$t("Journal Entries"), align: "text-center" });
      }

      return columns;
    },

    // Invoice header rows
    invoiceHeaderRows() {
      if (!this.allData) return [];

      return [{
        invoiceNo: this.allData.invoiceNo || '',
        invoiceDate: this.allData.invoiceDate || '',
        status: this.allData.status !== undefined ? this.allData.status : null,
        createdBy: this.allData.createdBy || '-',
        costCenter: this.allData.costCenter ? this.allData.costCenter.name : (this.allData.cost_center_id ? '-' : '-'),
        branch: this.allData.branch ? this.allData.branch.name : (this.allData.branch_id ? '-' : '-'),
        representative: this.allData.representative ? this.allData.representative.name : (this.allData.representative_id ? '-' : '-'),
        cashier: this.allData.cashier ? this.allData.cashier.name : (this.allData.cashier_id ? '-' : '-'),
        saleStatus: this.allData.saleStatus || this.allData.sale_status || '-',
        date: this.allData.current_date || this.allData.invoiceDate || '',
        journalEntry: this.allData.journalEntries || [],
      }];
    },

    // Payment history columns
    paymentHistoryColumns() {
      return [
        { key: "index", label: this.$t("#"), align: "" },
        { key: "date", label: this.$t("Payment Date"), align: "" },
        { key: "amount", label: this.$t("Paid Amount"), align: "" },
        { key: "account", label: this.$t("Account"), align: "" },
        { key: "chequeNo", label: this.$t("Cheque No"), align: "" },
        { key: "receiptNo", label: this.$t("Receipt No"), align: "" },
        { key: "status", label: this.$t("Status"), align: "text-right" },
      ];
    },

    // Payment history rows
    paymentHistoryRows() {
      if (!this.allData || !this.allData.invoicePayments) return [];
      return this.allData.invoicePayments.map((payment, index) => ({
        index: index + 1,
        date: payment.date || "",
        amount: payment.amount,
        account: payment.account ? payment.account.label : "",
        chequeNo: payment.transaction?.cheque_no || payment.chequeNo || "-",
        receiptNo: payment.transaction?.receipt_no || payment.receiptNo || "-",
        status: payment.status,
        _raw: payment,
      }));
    },

    // Invoice products columns
    invoiceProductsColumns() {
      const columns = [
        { key: "index", label: this.$t("#"), align: "text-center" },
        { key: "code", label: this.$t("Code"), align: "text-center" },
        { key: "name", label: this.$t("Item Name"), align: "text-center" },
        { key: "quantity", label: this.$t("Qty"), align: "text-center" },
      ];
      if (this.allData && this.allData.totalInvoiceReturn) {
        columns.push({ key: "returnQty", label: this.$t("Return Qty"), align: "text-center" });
      }
      columns.push(
        { key: "price", label: this.$t("Price"), align: "text-center" },
        { key: "total", label: this.$t("Total"), align: "text-center" },
        { key: "discount", label: this.$t("Discount"), align: "text-center" },
        { key: "totalAfterDiscount", label: this.$t("Total After Discount"), align: "text-center" },
        { key: "vat", label: this.$t("VAT"), align: "text-center" },
        { key: "totalWithVat", label: this.$t("Total with VAT"), align: "text-center" }
      );
      return columns;
    },

    // Note: Transport allocation removed - show page displays stored values only
    // Transport is shown at invoice level only, not allocated to items

    // Invoice products rows - Display stored values only (no recalculation)
    invoiceProductsRows() {
      if (!this.invoiceProducts) return [];
      
      return this.invoiceProducts.map((product, index) => {
        // Use stored values from database - these are the source of truth
        // Line total = quantity × unit_price (from stored values)
        const lineTotal = product.salePrice * product.quantity;
        
        // Discount amount (stored in database, includes product-level + proportional invoice-level discount)
        const discountAmount = product.productDiscount || 0;
        
        // Net price after discount (stored calculation: line_total - discount_amount)
        // This is what VAT was calculated on
        const netPrice = lineTotal - discountAmount;
        
        // VAT amount (stored in database, already calculated on net price after discount)
        const productTax = product.productTax || 0;
        
        // Line total after VAT (stored calculation: net_price + VAT)
        const lineTotalAfterVat = netPrice + productTax;
        
        return {
        index: index + 1,
        code: product.productCode,
        name: product.productName,
        quantity: `${product.quantity} ${product.productUnit}`,
        returnQty: this.allData && this.allData.totalInvoiceReturn ? `${product.returnQty} ${product.productUnit}` : null,
        price: product.salePrice,
          total: lineTotal, // Line Total = quantity × unit_price
        discount: product,
          totalAfterDiscount: netPrice, // Net Price After Discount (stored value)
        vat: product,
          totalWithVat: lineTotalAfterVat, // Line Total After VAT (stored calculation)
        _raw: product,
        };
      });
    },
  },

  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchData();
      }
    },
  },

  created() {
    this.getInvoice();
    this.loadCommunicationConfigStatus();
    this.getAccounts();
    this.productPrefix = this.appInfo.productPrefix;
    this.clientPrefix = this.appInfo.clientPrefix;
    this.invoicePrefix = this.appInfo.invoicePrefix;
  },
  methods: {
    // Format number to 2 decimal places
    formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return parseFloat(value).toFixed(2);
    },

    // Round to 2 decimal places (matches create.vue logic)
    roundToTwoDecimals(value) {
      if (value === null || value === undefined || isNaN(value)) return 0;
      return Math.round(parseFloat(value) * 100) / 100;
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

    // Get discount amount from stored value (no calculation needed)
    // discount_amount in database already includes product-level + proportional invoice-level discount
    calculateProductDiscountAmount(product) {
      // Return stored discount_amount - this is the source of truth
      return product.productDiscount || 0;
    },

    // get the invoice
    async getInvoice() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/invoices/" + this.$route.params.slug
      );
      this.allData = data.data;
      this.invoiceProducts = this.allData.invoiceProducts;
      this.invoiceProducts.sort(this.sortProducts);

      // Convert journalEntry (singular) to journalEntries (array) if needed
      if (this.allData.journalEntry && !this.allData.journalEntries) {
        this.allData.journalEntries = [{
          id: this.allData.journalEntry.id,
          entry_number: this.allData.journalEntry.entry_number,
          slug: this.allData.journalEntry.slug || null,
          type: 'sale',
        }];
      }

      // Load journal entries for this invoice if not already loaded
      if ((!this.allData.journalEntries || this.allData.journalEntries.length === 0) && this.allData.invoiceNo) {
        await this.loadJournalEntryForInvoice(this.allData.invoiceNo);
      }

      // Debug: Check what we're getting
      console.log('[InvoiceDetails] allData.subTotal:', this.allData.subTotal);
      console.log('[InvoiceDetails] totalProductVat:', this.totalProductVat);
      console.log('[InvoiceDetails] totalProductDiscount:', this.totalProductDiscount);
      console.log('[InvoiceDetails] calculatedTotal:', this.calculatedTotal);
      console.log('[InvoiceDetails] isSaudiArabia:', this.isSaudiArabia);
      console.log('[InvoiceDetails] appInfo:', this.appInfo);

      this.loading = false;
    },

    // Load journal entries for a specific invoice by invoice number
    async loadJournalEntryForInvoice(invoiceNo) {
      try {
        // Search for journal entries with reference matching invoice number
        const response = await axios.get('/api/journal-entries', {
          params: {
            reference: invoiceNo, // Search by reference field
            perPage: 100, // Get more entries to find both Invoice JE and COGS JE
          }
        });

        if (response.data && response.data.data && response.data.data.length > 0) {
          const journalEntries = [];
          
          // Find Invoice JE (exact match)
          const invoiceJE = response.data.data.find(entry => {
            const ref = entry.reference || '';
            return ref === invoiceNo;
          });

          // Find COGS JE (invoice number with -COGS suffix)
          const cogsJE = response.data.data.find(entry => {
            const ref = entry.reference || '';
            return ref === invoiceNo + '-COGS';
          });

          // Add Invoice JE if found
          if (invoiceJE) {
            journalEntries.push({
              id: invoiceJE.id,
              entry_number: invoiceJE.entry_number,
              slug: invoiceJE.slug || null,
              type: 'sale',
            });
          }

          // Add COGS JE if found
          if (cogsJE) {
            journalEntries.push({
              id: cogsJE.id,
              entry_number: cogsJE.entry_number,
              slug: cogsJE.slug || null,
              type: 'sale_cogs',
            });
          }

          if (journalEntries.length > 0) {
            // Update allData with journal entries array
            this.allData = {
              ...this.allData,
              journalEntries: journalEntries,
            };
          }
        }
      } catch (error) {
        console.error('Error loading journal entries for invoice:', error);
        // Don't show error to user, just log it
      }
    },
    sortProducts(a, b) {
      if (a.productCode < b.productCode) {
        return -1;
      }
      if (a.productCode > b.productCode) {
        return 1;
      }
      return 0;
    },
    // download pdf - now opens print page
    // Commented out - replaced with downloadPDF method
    // generatePDF() {
    //   // Open the print page in a new window
    //   const printUrl = `/print/invoice/${this.$route.params.slug}`;
    //   window.open(printUrl, '_blank');
    // },

    // download PDF
    downloadPDF() {
      const params = new URLSearchParams();
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      const pdfUrl = `/print/invoice/${this.$route.params.slug}/pdf?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    // preview PDF
    previewPDF() {
      const params = new URLSearchParams();
      // Add token to URL
      const token = this.$store.getters['auth/token'];
      if (token) {
        params.append('token', token);
      }
      const pdfUrl = `/print/invoice/${this.$route.params.slug}/preview?${params.toString()}`;
      window.location.href = pdfUrl;
    },
    // notify
    async notify() {
      if (!this.isDemoMode) {
        this.loading = true;
        await this.form
          .post(
            window.location.origin +
            "/api/invoice/notify/" +
            this.$route.params.slug
          )
          .then(() => {
            toast.fire({
              type: "success",
              title: this.$t("Notification sent successfully"),
            });
          })
          .catch(() => {
            toast.fire({ type: "error", title: this.$t("Please check your input and try again.") });
          });
        this.loading = false;
      } else {
        toast.fire({
          type: "warning",
          title: this.$t("You are not allowed to do this in demo version."),
        });
      }
    },
    // print - now opens print page
    // Commented out - replaced with printTemplateUrl link
    // printWindow() {
    //   // Open the print page in a new window
    //   const printUrl = `/print/invoice/${this.$route.params.slug}`;
    //   window.open(printUrl, '_blank');
    // },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // get activity logs
    async getActivity() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "Invoice";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
        slug: slug,
        modelName: modelName,
      });
    },

    // search data
    async searchData() {
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "Invoice";
      await this.$store.dispatch("operations/fetchSpecificLogs", {
        path: "/api/activity-log-specific?page=",
        currentPage: this.pagination.current_page + "&perPage=" + this.perPage,
        term: this.query,
        slug: slug,
        modelName: modelName,
      });
    },

    // pagination
    async paginate() {
      this.getActivity();
    },

    updatePerPager() {
      this.pagination.current_page = 1;
      this.query === "" ? this.getActivity() : this.searchData();
    },

    // reload after search
    async reload() {
      this.query = "";
    },

    // refresh table
    async refreshTable() {
      this.query = "";
      if (this.pagination) {
        this.pagination.current_page = 1;
      }
      this.query === "" ? await this.getActivity() : await this.searchData();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // Send invoice to ZATCA
    async sendInvoice(data) {
      console.log('Send invoice clicked for:', data);
      console.log('isSaudiArabia:', this.isSaudiArabia);
      console.log('data.status:', data.status);

      SwalOriginal.fire({
        title: this.$t("Send Invoice to ZATCA"),
        text: this.$t("Do you want to send this invoice to ZATCA?"),
        type: "question",
        showCancelButton: true,
        confirmButtonText: this.$t("Yes"),
        cancelButtonText: this.$t("No"),
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
      }).then(async (result) => {
        if (result.value) {
          try {
            // Show loading
            SwalOriginal.fire({
              title: this.$t("Sending..."),
              text: this.$t("Please wait while we send the invoice to ZATCA"),
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                SwalOriginal.showLoading();
              }
            });

            // Send invoice to ZATCA and create journal entries
            const response = await axios.post(`/api/invoices/${data.slug}/send-to-zatca`);

            // Close the loading dialog
            SwalOriginal.close();

            if (response.data.success) {
              this.$toast.success(
                this.$t("Sent Successfully!"),
                this.$t("Invoice has been sent to ZATCA and journal entries have been created.")
              );

              // Update the invoice data immediately with journal entry data from response
              if (response.data.data && response.data.data.journalEntry) {
                // If we already have journal entries, add the new one, otherwise create array
                const existingEntries = this.allData.journalEntries || [];
                const newEntry = {
                  id: response.data.data.journalEntry.id,
                  entry_number: response.data.data.journalEntry.entry_number,
                  slug: response.data.data.journalEntry.slug || null,
                  type: 'sale',
                };
                
                // Check if entry already exists
                const entryExists = existingEntries.some(e => e.id === newEntry.id);
                if (!entryExists) {
                  existingEntries.push(newEntry);
                }
                
                this.allData = {
                  ...this.allData,
                  journalEntries: existingEntries,
                  status: 1, // Update status to sent
                };
              }

              // Refresh the invoice data to update the status and ensure data is in sync
              await this.getInvoice();
            } else {
              this.$toast.error(
                this.$t("Failed!"),
                response.data.message || this.$t("Failed to send invoice to ZATCA")
              );
            }
          } catch (error) {
            console.error('Error sending invoice to ZATCA:', error);
            // Close the loading dialog
            SwalOriginal.close();
            this.$toast.error(
              this.$t("Error!"),
              error.response?.data?.message || this.$t("An error occurred while sending the invoice to ZATCA")
            );
          }
        }
      });
    },

    // Return invoice
    returnInvoice(data) {
      // Navigate to invoice return create page with pre-selected invoice
      // We'll fetch the client info from the invoice on the create page
      console.log('Full invoice data:', JSON.stringify(data, null, 2))
      console.log('Invoice slug:', data.slug)

      this.$router.push({
        name: 'invoiceReturns.create',
        query: {
          invoice: data.slug
        }
      });
    },

    // Add payment to invoice
    addPayment() {
      // Open payment modal instead of navigating
      this.handlePaymentModal();
    },

    // Handle payment modal
    handlePaymentModal() {
      if (!this.allData) {
        return;
      }

      // Set invoice data
      this.paymentForm.invoice_id = this.allData.id;
      const dueAmount = this.calculateDueAmount;
      // Set paid amount to total due amount as default
      this.paymentForm.paidAmount = dueAmount > 0 ? dueAmount : 1;
      this.paymentForm.status = this.allData.status === 0 ? 0 : 1;

      // Set default account if available
      if (this.accounts && this.accounts.length > 0 && !this.paymentForm.account) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.paymentForm.account = this.accounts.find(
          (account) => account.slug == defaultAccountSlug
        ) || this.accounts[0];
      }

      this.showPaymentModal = true;
    },

    // Get accounts
    async getAccounts() {
      const { data } = await axios.get(
        window.location.origin + "/api/all-accounts"
      );
      this.accounts = data.data;

      // assign default account
      if (this.accounts && this.accounts.length > 0) {
        let defaultAccountSlug = this.appInfo.defaultAccountSlug;
        this.paymentForm.account = this.accounts.find(
          (account) => account.slug == defaultAccountSlug
        );
      }
    },

    // Handle account created event
    async handleAccountCreated(newAccount) {
      // Refresh accounts list
      await this.getAccounts();

      // Find and select the newly created account
      if (newAccount && newAccount.id) {
        // Wait for accounts to be updated
        await this.$nextTick();

        // Find the account by id, slug, or label
        const account = this.accounts.find(
          (acc) =>
            acc.id === newAccount.id ||
            acc.slug === newAccount.slug ||
            acc.label === newAccount.label ||
            (acc.bankName === newAccount.bankName && acc.accountNumber === newAccount.accountNumber)
        );

        if (account) {
          this.paymentForm.account = account;
        } else if (newAccount.id) {
          // If not found by matching, try to find by id directly
          const accountById = this.accounts.find(acc => acc.id === newAccount.id);
          if (accountById) {
            this.paymentForm.account = accountById;
          }
        }
      }
    },

    // Save payment
    async savePayment() {
      if (!this.paymentForm.account || !this.paymentForm.account.id) {
        this.$toast.error(
          this.$t("Error"),
          this.$t("Please select an account")
        );
        return;
      }

      // Prepare form data matching API expectations
      const formData = {
        invoice_id: this.paymentForm.invoice_id,
        paidAmount: parseFloat(this.paymentForm.paidAmount),
        account: this.paymentForm.account,
        receiptNo: this.paymentForm.receiptNo || '',
        date: this.paymentForm.paymentDate || new Date().toISOString().slice(0, 10),
        note: this.paymentForm.note || '',
        netTotal: this.calculateDueAmount,
        isSendEmail: this.paymentForm.isSendEmail || false,
        isSendSMS: this.paymentForm.isSendSMS || false,
      };

      await axios
        .post(window.location.origin + "/api/invoices-pay", formData)
        .then(() => {
          this.$toast.success(
            this.$t("Success!"),
            this.$t("Invoice payment added successfully")
          );
          this.showPaymentModal = false;
          this.paymentForm.reset();
          this.paymentForm.paymentDate = new Date().toISOString().slice(0, 10);
          this.paymentForm.status = 1;
          // Refresh invoice data to show updated payment
          this.getInvoice();
        })
        .catch((error) => {
          if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            this.paymentForm.errors.set(errors);
            const messages = Object.values(errors).flat();
            this.$toast.error(
              this.$t('Validation Error'),
              messages.join('\n')
            );
          } else {
            this.$toast.error(
              this.$t("Error"),
              error.response?.data?.message || this.$t("Please check your input and try again.")
            );
          }
        });
    },
  },
};
</script>
<style scoped>
.nav-pills .nav-item {
  background: #ddd;
  margin: 2px;
  border-radius: 0.25rem;
}

/* Create button styling for account field */
.create-btn {
  padding: 11px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: #f8f9fa;
  border: 1px solid #E5E7EB;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.create-btn:hover {
  background-color: #e9ecef;
}

.create-btn i {
  color: #33a0d9;
  font-size: 18px;
}

[dir="rtl"] .create-btn {
  border-left: 1px solid #E5E7EB;
  border-right: none;
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .create-btn {
  border-left: none;
  border-right: 1px solid #E5E7EB;
  border-radius: 0 0.25rem 0.25rem 0;
}

/* Ensure v-select and create button align properly */
.d-flex.w-100 .v-select {
  flex: 1;
}

.d-flex.w-100 .v-select .vs__dropdown-toggle {
  border-right: none;
}

[dir="rtl"] .d-flex.w-100 .v-select .vs__dropdown-toggle {
  border-left: none;
  border-right: 1px solid #E5E7EB;
}

/* Table styling from index.vue */
.table-custom {
  border: none !important;
}

.invoices-table {
  border-collapse: separate;
  border-spacing: 0;
}

.invoices-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.invoices-table thead tr {
  border: none !important;
}

.invoices-table thead th:first-child {
  border-top-left-radius: 10px;
}

.invoices-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .invoices-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}
</style>