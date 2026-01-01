<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row no-print tabs-header-row">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between align-items-center" v-if="allData">
          <div class="btn-group">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a
                  class="nav-link"
                  :class="{ active: activeTab === 'details' }"
                  href="#details"
                  data-toggle="tab"
                  @click="handleTabClick('details')"
                >
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click="handleTabClick('activity-log')"
                  class="nav-link"
                  :class="{ active: activeTab === 'activity-log' }"
                  href="#activity-log"
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a
                >
              </li>
              <li class="nav-item">
                <a 
                  @click="handleTabClick('journal-entry')"
                  class="nav-link" 
                  :class="{ active: activeTab === 'journal-entry' }"
                  href="#journal-entry" 
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-book" aria-hidden="true"></i>
                  {{ $t("Journal Entry") }}</a
                >
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a v-if="isSaudiArabia && allData.status === 0" @click="sendCreditNote(allData)" href="#" class="btn btn-success">
              <i class="fas fa-paper-plane"></i> {{ $t("Send Credit Note") }}
            </a>
            <!-- New preview and download PDF buttons -->
            <a @click="previewPDF" href="#" class="btn btn-info">
              <i class="fas fa-eye"></i> {{ $t("Preview PDF") }}
            </a>
            <a @click="downloadPDF" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <router-link
              v-if="$can('invoice-return-edit') && !(isSaudiArabia && allData.status === 1)"
              :to="{
                name: 'invoiceReturns.edit',
                params: { slug: allData.slug },
              }"
              class="btn btn-info"
            >
              <i class="fas fa-edit" /> {{ $t("Edit") }}
            </router-link>
            <router-link
              :to="{ name: 'invoiceReturns.index' }"
              class="btn btn-info float-right"
            >
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
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div class="tab-pane" :class="{ active: activeTab === 'details' }" id="details">
        <div class="row">
          <!-- Main content -->
          <div class="invoice p-3 mb-3 w-100" id="content-to-pdf">
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                <CompanyInfo />
              </div>
              <!-- /.col -->
              <div
                class="col-sm-8 invoice-col float-right text-md-right"
              >
                <h5>{{ $t("Client Details") }}</h5>
                <div v-if="allData.client">
                  <span v-if="allData.client.companyName"
                    ><strong>{{ $t("Client ID") }}:</strong>
                    {{ allData.client.clientID | withPrefix(clientPrefix) }}<br
                  /></span>
                  <strong>{{ $t("Client Name") }}:</strong>
                  {{ allData.client.name }}<br />
                  <span v-if="allData.client.companyName"
                    ><strong>{{ $t("Company Name") }}:</strong>
                    {{ allData.client.companyName }}<br
                  /></span>
                  <span v-if="allData.client.email"
                    ><strong>{{ $t("Email") }}:</strong>
                    {{ allData.client.email }}<br
                  /></span>
                  <span v-if="allData.client.contactNumber"
                    ><strong>{{ $t("Contact Number") }}:</strong>
                    {{ allData.client.contactNumber }}<br
                  /></span>
                  <span v-if="allData.client.address"
                    ><strong>{{ $t("Address") }}:</strong>
                    {{ allData.client.address }}<br
                  /></span>
                </div>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->

            <div class="row mt-3">
              <div class="col-12">
                <div class="table-custom table-responsive">
                  <table v-if="allData.invoice" class="table table-bordered">
                    <thead>
                      <tr>
                        <th v-if="allData.invoice.invoiceNo">
                          {{ $t("Invoice No") }}
                        </th>
                        <th v-if="allData.returnNo">
                          {{ $t("Return No") }}
                        </th>
                        <th v-if="allData.invoice.invoiceDate">
                          {{ $t("Invoice Date") }}
                        </th>
                        <th v-if="allData.returnDate">
                          {{ $t("Return Date") }}
                        </th>
                        <th v-if="allData.reason">
                          {{ $t("Return Reason") }}
                        </th>
                        <th v-if="allData.note">{{ $t("Note") }}</th>
                        <th>{{ $t("Status") }}</th>
                        <th v-if="allData.journalEntry || (allData.journalEntries && allData.journalEntries.length > 0)">{{ $t("Journal Entries") }}</th>
                        <th v-if="allData.createdBy" class="text-right">
                          {{ $t("Created By") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td v-if="allData.invoice.invoiceNo">
                          {{
                            allData.invoice.invoiceNo
                              | withPrefix(invoicePrefix)
                          }}
                        </td>
                        <td v-if="allData.returnNo">
                          {{ allData.returnNo | withPrefix(returnPrefix) }}
                        </td>
                        <td v-if="allData.invoice.invoiceDate">
                          {{
                            allData.invoice.invoiceDate | moment("Do MMM, YYYY")
                          }}
                        </td>
                        <td v-if="allData.returnDate">
                          {{ allData.returnDate | moment("Do MMM, YYYY") }}
                        </td>
                        <td v-if="allData.reason">{{ allData.reason }}</td>
                        <td v-if="allData.note">{{ allData.note }}</td>
                        <td>
                          <span
                            v-if="allData.status === 1"
                            class="badge bg-success"
                            >{{ $t("Active") }}</span
                          >
                          <span v-else class="badge bg-danger">{{
                            $t("Inactive")
                          }}</span>
                        </td>
                        <td v-if="allData.journalEntry || (allData.journalEntries && allData.journalEntries.length > 0)">
                          <div v-if="computedJournalEntries && computedJournalEntries.length > 0" class="d-flex flex-wrap justify-content-center" style="gap: 4px;">
                            <router-link
                              v-for="(entry, idx) in computedJournalEntries"
                              :key="entry.id"
                              :to="{ name: 'journal-entries.show', params: { id: entry.id } }"
                              class="badge bg-info text-white"
                              style="text-decoration: none; margin: 2px;">
                              {{ entry.entry_number || `#${entry.id}` }}
                              <span v-if="entry.type === 'cogs_reversal'" class="ml-1">(COGS)</span>
                            </router-link>
                          </div>
                          <span v-else class="text-muted">-</span>
                        </td>
                        <td v-if="allData.createdBy" class="text-right">
                          {{ allData.createdBy }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Table row -->
            <div class="row position-relative mt-4 mb-4">
              <table-loading v-show="loading" />
              <div class="col-12">
                <strong class="mt-3">{{ $t("Return Products") }}:</strong>
                <div v-if="allData.invoice" class="table-custom table-responsive text-center">
                  <GeneralTable
                    :columns="returnProductsColumns"
                    :rows="returnProductsRows"
                    :loading="loading"
                    wrapper-class=""
                  >
                    <template #cell-code="{ value }">
                      {{ value | withPrefix(productPrefix) }}
                    </template>
                    <template #cell-price="{ value }">
                      {{ formatToTwoDecimals(value) }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-total="{ value }">
                      {{ formatToTwoDecimals(value) }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-discount="{ row }">
                      {{ formatToTwoDecimals(calculateReturnDiscount(row._raw)) }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-totalAfterDiscount="{ value }">
                      {{ formatToTwoDecimals(value) }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-vat="{ row }">
                      {{ formatToTwoDecimals(calculateReturnVat(row._raw)) }} <span class="saudi-riyal">ê</span>
                    </template>
                    <template #cell-totalWithVat="{ value }">
                      {{ formatToTwoDecimals(value) }} <span class="saudi-riyal">ê</span>
                    </template>
                  </GeneralTable>
                  <!-- Summary Row -->
                  <div v-if="returnProducts && returnProducts.length > 0" class="table-responsive">
                    <table class="table table-sm invoices-create-table">
                      <tbody>
                        <tr>
                          <td colspan="5" class="text-right">
                            <strong>{{ $t("Subtotal") }}</strong>
                          </td>
                          <td>
                            <strong>{{ formatToTwoDecimals(calculateTotalReturnedProductCost()) }} <span class="saudi-riyal">ê</span></strong>
                          </td>
                          <td>
                            <strong>{{ formatToTwoDecimals(calculateTotalReturnDiscount()) }} <span class="saudi-riyal">ê</span></strong>
                          </td>
                          <td>
                            <strong>{{ formatToTwoDecimals(calculateTotalReturnedProductCost() - calculateTotalReturnDiscount()) }} <span class="saudi-riyal">ê</span></strong>
                          </td>
                          <td></td>
                          <td>
                            <strong>{{ formatToTwoDecimals(calculateTotalReturnTax()) }} <span class="saudi-riyal">ê</span></strong>
                          </td>
                          <td>
                            <strong>{{ formatToTwoDecimals(calculateTotalReturnedProductCost() - calculateTotalReturnDiscount() + calculateTotalReturnTax()) }} <span class="saudi-riyal">ê</span></strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- Return Invoice Calculation Summary -->
            <!-- <div v-if="allData.invoice && returnProducts && returnProducts.length > 0" class="row mt-4">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title">{{ $t('Return Invoice Calculation Summary') }}</h5>
                  </div>
                  <div class="card-body">
                    <div v-for="(product, index) in productsWithReturns" :key="index" class="mb-4">
                      <h6 class="text-primary">{{ product.productName }} ({{ product.productCode }})</h6>
                      <div class="row">
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-info"><i class="fas fa-boxes"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Returned Quantity') }}</span>
                              <span class="info-box-number">{{ product.returnQty }} {{ product.productUnit }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-secondary"><i class="fas fa-tag"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Subtotal') }}</span>
                              <span class="info-box-number">{{ calculateReturnSubtotal(product)  }} <span class="saudi-riyal">ê</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-warning"><i class="fas fa-percentage"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Discount') }}</span>
                              <span class="info-box-number">{{ calculateReturnDiscount(product)  }} <span class="saudi-riyal">ê</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-success"><i class="fas fa-calculator"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Net Sale') }}</span>
                              <span class="info-box-number">{{ calculateReturnNet(product)  }} <span class="saudi-riyal">ê</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-primary"><i class="fas fa-receipt"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('VAT') }} ({{ getVatRate(product) }}%)</span>
                              <span class="info-box-number">{{ calculateReturnVat(product)  }} <span class="saudi-riyal">ê</span></span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="info-box">
                            <span class="info-box-icon bg-danger"><i class="fas fa-undo"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('Total Refund') }}</span>
                              <span class="info-box-number">{{ calculateReturnTotal(product)  }} <span class="saudi-riyal">ê</span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-md-12">
                          <div class="info-box">
                            <span class="info-box-icon bg-dark"><i class="fas fa-file-invoice"></i></span>
                            <div class="info-box-content">
                              <span class="info-box-text">{{ $t('From Invoice ID') }}</span>
                              <span class="info-box-number">#{{ allData.invoice.invoiceNo | withPrefix(invoicePrefix) }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Tax Information Summary -->
            <!-- <div v-if="allData.invoice && returnProducts && returnProducts.length > 0" class="row mt-4">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title">{{ $t('Tax (VAT) Information Summary') }}</h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <h6 class="text-primary">{{ $t('Invoice Tax Information') }}</h6>
                        <div class="table-responsive">
                          <table class="table table-sm table-bordered">
                            <thead>
                              <tr>
                                <th>{{ $t('Product') }}</th>
                                <th>{{ $t('VAT Rate') }}</th>
                                <th>{{ $t('Tax Amount') }}</th>
                                <th>{{ $t('Return Tax') }}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="product in productsWithReturns" :key="product.id">
                                <td>{{ product.productName }}</td>
                                <td>{{ getVatRate(product) }}%</td>
                                <td>{{ product.taxAmount  }} <span class="saudi-riyal">ê</span></td>
                                <td>{{ calculateReturnVat(product)  }} <span class="saudi-riyal">ê</span></td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr class="bg-light">
                                <th colspan="2">{{ $t('Total') }}</th>
                                <th>{{ calculateTotalInvoiceTax()  }} <span class="saudi-riyal">ê</span></th>
                                <th>{{ calculateTotalReturnTax()  }} <span class="saudi-riyal">ê</span></th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <h6 class="text-success">{{ $t('Tax Calculation Details') }}</h6>
                        <div class="alert alert-info">
                          <h6>{{ $t('Database Query Information') }}:</h6>
                          <p class="mb-1"><strong>{{ $t('Invoice Tax') }}:</strong> {{ $t('Sum of tax_amount from invoice_products table') }}</p>
                          <p class="mb-1"><strong>{{ $t('Return Tax') }}:</strong> {{ $t('Calculated based on returned quantity, sale price, and VAT rate') }}</p>
                          <p class="mb-0"><strong>{{ $t('VAT Rate Source') }}:</strong> {{ $t('From vat_rates table via invoice_products.vat_rate_id') }}</p>
                        </div>
                        <div class="card bg-light">
                          <div class="card-body">
                            <h6>{{ $t('Calculation Formula') }}:</h6>
                            <ul class="mb-0">
                              <li>{{ $t('Unit Discount') }} = {{ $t('discount_amount / quantity') }}</li>
                              <li>{{ $t('Unit Net') }} = {{ $t('sale_price - unit_discount') }}</li>
                              <li>{{ $t('Unit VAT') }} = {{ $t('unit_net × vat_rate / 100') }}</li>
                              <li>{{ $t('Return VAT') }} = {{ $t('unit_vat × return_qty') }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <!-- Invoice Calculation Summary Table -->
            <div class="row mt-4" id="page-break">
              <div class="col-lg-12 col-xl-8">
                <!-- Empty space for left side content if needed -->
              </div>
              <div class="col-lg-12 col-xl-4 text-lg-right mt-4">
                <InvoiceSummaryTable
                  :subtotal="calculateTotalReturnedProductCost()"
                  :after-discount="calculateTotalReturnedProductCost() - calculateTotalReturnDiscount()"
                  :total-tax="calculateTotalReturnTax()"
                  :transport="0"
                  :grand-total="calculateTotalReturnedProductCost() - calculateTotalReturnDiscount() + calculateTotalReturnTax()"
                  :paid-amount="0"
                  :due-amount="0"
                />
              </div>
            </div>
            <!-- /.row -->

           
          </div>
          <!-- /.invoice -->
        </div>
      </div>

      <!--  activity logs -->
      <div class="tab-pane" :class="{ active: activeTab === 'activity-log' }" id="activity-log">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <a
                  @click.prevent="!loading && refreshTable()"
                  href="#"
                  v-tooltip="$t('Refresh')"
                  :class="['btn', 'btn-success', loading ? 'disabled' : '']"
                  :aria-busy="loading ? 'true' : 'false'"
                >
                  <i v-if="!loading" class="fas fa-sync"></i>
                  <i v-else class="fas fa-spinner fa-spin"></i>
                </a>
              </div>
            </div>
          </div>
          <table-loading v-show="loading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search
                  v-model="query"
                  @reset-pagination="resetPagination()"
                  @reload="reload"
                />
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <div
                v-show="items.length > 0"
                v-for="(data, i) in items"
                :key="i"
              >
                <div class="card mb-0 border border-gray">
                  <div class="card-body py-1">
                    <div class="row">
                      <div
                        class="col-1 d-flex justify-content-center align-items-center"
                      >
                        <i
                          v-if="data.event == 'Update'"
                          class="fa fa-magic"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Create'"
                          class="fa fa-plus-circle"
                          aria-hidden="true"
                        ></i>
                        <i
                          v-if="data.event == 'Delete'"
                          class="fa fa-trash"
                          aria-hidden="true"
                        ></i>
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
                  <select
                    @change="updatePerPager"
                    v-model="perPage"
                    class="form-control form-control-sm ml-1"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <!-- pagination-start -->
              <pagination
                v-if="pagination && pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                class="justify-flex-end"
                @paginate="paginate"
              />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>

      <!-- Journal Entry Section -->
      <div class="tab-pane" :class="{ active: activeTab === 'journal-entry' }" id="journal-entry">
        <div class="card custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-4 col-4">
              <h3 class="card-title">
                {{ $t("Journal Entry Information") }}
              </h3>
            </div>
          </div>
          <div class="card-body">
            <div
              v-if="allData.journalEntries && allData.journalEntries.length > 0"
            >
              <div
                v-for="(journalEntry, index) in sortedJournalEntries"
                :key="index"
                class="mb-4"
              >
                <div class="row mb-3">
                  <div class="col-md-3">
                    <strong>{{ $t("Entry Number") }}:</strong>
                    <span class="ml-2">{{
                      journalEntry.formatted_entry_number
                    }}</span>
                  </div>
                  <div class="col-md-3">
                    <strong>{{ $t("Entry Date") }}:</strong>
                    <span class="ml-2">{{
                      journalEntry.entry_date | formatDate
                    }}</span>
                  </div>
                  <div class="col-md-3">
                    <strong>{{ $t("Status") }}:</strong>
                    <span
                      class="ml-2 badge"
                      :class="
                        journalEntry.status === 'posted'
                          ? 'badge-success'
                          : 'badge-warning'
                      "
                    >
                      {{ journalEntry.formatted_status }}
                    </span>
                  </div>
                  <div class="col-md-3">
                    <strong>{{ $t("Total Amount") }}:</strong>
                    <span class="ml-2">
                      <CurrencyDisplay :amount="journalEntry.total_debit" />
                    </span>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-12">
                    <strong>{{ $t("Description") }}:</strong>
                    <span class="ml-2">{{ journalEntry.description }}</span>
                  </div>
                </div>

                <div class="table-responsive">
                  <table class="table table-bordered table-sm">
                    <thead class="bg-light">
                      <tr>
                        <th>{{ $t("Line") }}</th>
                        <th>{{ $t("Chart of Account") }}</th>
                        <th>{{ $t("Description") }}</th>
                        <th class="text-right">{{ $t("Debit") }}</th>
                        <th class="text-right">{{ $t("Credit") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(line, lineIndex) in journalEntry.lines"
                        :key="lineIndex"
                      >
                        <td>{{ line.line_number }}</td>
                        <td>
                          <strong>{{ line.chart_of_account.name }}</strong>
                          <br />
                          <small class="text-muted">{{
                            line.chart_of_account.type.name
                          }}</small>
                        </td>
                        <td>{{ line.description }}</td>
                        <td class="text-right">
                          <span v-if="line.debit_amount > 0">{{
                            line.debit_amount
                          }}<span class="saudi-riyal">ê</span>
                          </span>
                          <span v-else class="text-muted">-</span>
                        </td>
                        <td class="text-right">
                          <span v-if="line.credit_amount > 0">{{
                            line.credit_amount 
                          }} <span class="saudi-riyal">ê</span>
                          </span>
                          <span v-else class="text-muted">-</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot class="bg-light">
                      <tr>
                        <th colspan="3" class="text-right">
                          {{ $t("Total") }}:
                        </th>
                        <th class="text-right">
                          {{ journalEntry.total_debit  }} <span class="saudi-riyal">ê</span>
                        </th>
                        <th class="text-right">
                          {{ journalEntry.total_credit  }} <span class="saudi-riyal">ê</span>
                        </th>
                      </tr>
                      <tr>
                        <th colspan="3" class="text-right">
                          {{ $t("Balance") }}:
                        </th>
                        <th colspan="2" class="text-center">
                          <span
                            class="badge"
                            :class="
                              journalEntry.is_balanced
                                ? 'badge-success'
                                : 'badge-danger'
                            "
                          >
                            {{
                              journalEntry.is_balanced
                                ? $t("Balanced")
                                : $t("Unbalanced")
                            }}
                          </span>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <div v-else>
              <InfoAlert :message="$t('No journal entries found for this invoice return.')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import html2pdf from "html2pdf.js";
import SwalOriginal from "sweetalert2/dist/sweetalert2";
import iziToast from "izitoast";
import GeneralTable from "~/components/GeneralTable";
import InvoiceSummaryTable from "~/components/sales/InvoiceSummaryTable";
import InfoAlert from "~/components/shared/InfoAlert";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return {
      title: this.isSaudiArabia
        ? this.$t("Credit Note Details")
        : this.$t("Invoice Return Details")
    };
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
    GeneralTable,
    InvoiceSummaryTable,
    InfoAlert,
  },
  data: () => ({
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Invoice Returns",
        url: "invoiceReturns.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    allData: "",
    invoiceSubTotal: 0,
    invoiceReturn: 0,
    returnProducts: [],
    productPrefix: "",
    invoicePrefix: "",
    returnPrefix: "",
    clientPrefix: "",
    loading: false,
    query: "",
    perPage: 10,
    activeTab: "details",
  }),

  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),

    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
    },

    // Dynamic breadcrumb current page title
    breadcrumbsCurrent() {
      return this.isSaudiArabia
        ? this.$t("Credit Note Details")
        : this.$t("Invoice Return Details");
    },

    // Computed journal entries - converts singular to array and handles both formats
    computedJournalEntries() {
      if (this.allData.journalEntries && this.allData.journalEntries.length > 0) {
        return this.allData.journalEntries;
      }
      if (this.allData.journalEntry) {
        return [{
          id: this.allData.journalEntry.id,
          entry_number: this.allData.journalEntry.entry_number,
          type: 'sale_return',
        }];
      }
      return [];
    },

    // Filter products that have return quantities > 0
    productsWithReturns() {
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return [];
      }
      return this.returnProducts.filter((product) => product.returnQty > 0);
    },

    // Sort journal entry lines with debits first, then credits
    sortedJournalEntries() {
      if (!this.allData || !this.allData.journalEntries) {
        return [];
      }
      
      return this.allData.journalEntries.map(journalEntry => ({
        ...journalEntry,
        lines: this.sortJournalEntryLines(journalEntry.lines || [])
      }));
    },

    // Return products columns
    returnProductsColumns() {
      return [
        { key: "index", label: this.$t("#"), align: "text-center" },
        { key: "code", label: this.$t("Code"), align: "text-center" },
        { key: "name", label: this.$t("Item Name"), align: "text-center" },
        { key: "quantity", label: this.$t("Qty"), align: "text-center" },
        { key: "price", label: this.$t("Price"), align: "text-center" },
        { key: "total", label: this.$t("Total"), align: "text-center" },
        { key: "discount", label: this.$t("Discount"), align: "text-center" },
        { key: "totalAfterDiscount", label: this.$t("Total After Discount"), align: "text-center" },
        { key: "vatType", label: this.$t("VAT Type"), align: "text-center" },
        { key: "vat", label: this.$t("VAT"), align: "text-center" },
        { key: "totalWithVat", label: this.$t("Total with VAT"), align: "text-center" },
      ];
    },

    // Return products rows
    returnProductsRows() {
      if (!this.returnProducts || this.returnProducts.length === 0) return [];
      return this.returnProducts.map((product, index) => ({
        index: index + 1,
        code: product.productCode,
        name: product.productName,
        quantity: `${product.returnQty} ${product.productUnit}`,
        price: product.salePrice,
        total: product.salePrice * product.returnQty,
        discount: product,
        totalAfterDiscount: this.calculateReturnNet(product),
        vatType: `${this.getVatRate(product)}%`,
        vat: product,
        totalWithVat: this.calculateReturnTotal(product),
        _raw: product,
      }));
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
    this.getInvoiceReturn();
    this.productPrefix = this.appInfo.productPrefix;
    this.invoicePrefix = this.appInfo.invoicePrefix;
    this.returnPrefix = this.appInfo.invoiceReturnPrefix;
    this.clientPrefix = this.appInfo.clientPrefix;
  },
  methods: {
    // Handle tab click
    handleTabClick(tab) {
      this.activeTab = tab;
      if (tab === "details") {
        this.getInvoiceReturn();
      } else if (tab === "activity-log") {
        this.getActivity();
      } else if (tab === "journal-entry") {
        this.getJournalEntries();
      }
    },
    // Format number to two decimal places
    formatToTwoDecimals(value) {
      // Handle null, undefined, or non-numeric values
      if (value === null || value === undefined || isNaN(value)) {
        return '0.00'
      }
      const numValue = Number(value)
      if (isNaN(numValue)) {
        return '0.00'
      }
      return numValue.toFixed(2)
    },

    // get the invoice
    async getInvoiceReturn() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin +
          "/api/invoice-returns/" +
          this.$route.params.slug
      );
      this.allData = data.data;
      this.returnProducts = this.allData.invoiceReturnProducts;
      this.returnProducts.sort(this.sortProducts);
      this.calculateTotalAmount();
      this.loading = false;
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

    // Sort journal entry lines: debits first, then credits
    sortJournalEntryLines(lines) {
      if (!lines || lines.length === 0) {
        return [];
      }
      
      return [...lines].sort((a, b) => {
        // If both are debits or both are credits, maintain original order
        const aIsDebit = a.debit_amount > 0;
        const bIsDebit = b.debit_amount > 0;
        
        if (aIsDebit && !bIsDebit) return -1; // a is debit, b is credit - a comes first
        if (!aIsDebit && bIsDebit) return 1;  // a is credit, b is debit - b comes first
        
        // If both are same type, maintain original order by line number
        return a.line_number - b.line_number;
      });
    },

    // Return Invoice Calculation Summary Methods (Based on Updated Formula)

    // Get VAT rate for a product from database
    getVatRate(product = null) {
      if (product && product.vatRate) {
        return product.vatRate;
      }
      // Fallback to first product's VAT rate or default 20%
      if (this.returnProducts && this.returnProducts.length > 0) {
        return this.returnProducts[0].vatRate || 20;
      }
      return 20; // Default VAT rate
    },

    // 1. Calculate Subtotal (Original Quantity × Price per Unit)
    calculateSubtotal(invoiceProduct) {
      const originalQty = parseFloat(invoiceProduct.invoiceQty) || 0;
      const unitPrice = parseFloat(invoiceProduct.salePrice) || 0;

      return Number((originalQty * unitPrice).toFixed(2));
    },

    // Calculate Subtotal with VAT (Subtotal - Discount + VAT)
    calculateSubtotalWithVat(invoiceProduct) {
      const subtotal = this.calculateSubtotal(invoiceProduct);
      const discountAmount = parseFloat(invoiceProduct.discountAmount) || 0;
      const taxAmount = parseFloat(invoiceProduct.taxAmount) || 0;

      return Number((subtotal - discountAmount + taxAmount).toFixed(2));
    },

    // 2. Calculate Cost of Returned Products
    // Returned Product Cost = Returned Units × Unit Price
    calculateReturnedProductCost(invoiceProduct) {
      const returnedUnits = parseFloat(invoiceProduct.returnQty) || 0;
      const unitPrice = parseFloat(invoiceProduct.salePrice) || 0;

      return Number((returnedUnits * unitPrice).toFixed(2));
    },

    // Returned Product Cost including VAT = (Total Invoice Amount / Original Quantity) × Returned Units
    calculateReturnedProductCostWithVat(invoiceProduct) {
      const originalQty = parseFloat(invoiceProduct.invoiceQty) || 1;
      const returnedUnits = parseFloat(invoiceProduct.returnQty) || 0;
      const totalInvoiceAmount = this.calculateSubtotalWithVat(invoiceProduct);

      return originalQty > 0
        ? Number(
            ((totalInvoiceAmount / originalQty) * returnedUnits).toFixed(2)
          )
        : 0;
    },

    // 3. Calculate Return Discount
    // Per Unit Discount = Total Discount / Original Quantity
    calculatePerUnitDiscount(invoiceProduct) {
      const originalQty = parseFloat(invoiceProduct.invoiceQty) || 1;
      const totalDiscount = parseFloat(invoiceProduct.discountAmount) || 0;

      return originalQty > 0
        ? Number((totalDiscount / originalQty).toFixed(2))
        : 0;
    },

    // Return Discount = Per Unit Discount × Returned Units
    calculateReturnDiscount(invoiceProduct) {
      const perUnitDiscount = this.calculatePerUnitDiscount(invoiceProduct);
      const returnedUnits = parseFloat(invoiceProduct.returnQty) || 0;

      return Number((perUnitDiscount * returnedUnits).toFixed(2));
    },

    // 4. Calculate Return VAT
    // Per Unit VAT = Total VAT / Original Quantity
    calculatePerUnitVat(invoiceProduct) {
      const originalQty = parseFloat(invoiceProduct.invoiceQty) || 1;
      const totalVat = parseFloat(invoiceProduct.taxAmount) || 0;

      return originalQty > 0 ? Number((totalVat / originalQty).toFixed(2)) : 0;
    },

    // Return VAT = Per Unit VAT × Returned Units
    calculateReturnVat(invoiceProduct) {
      const perUnitVat = this.calculatePerUnitVat(invoiceProduct);
      const returnedUnits = parseFloat(invoiceProduct.returnQty) || 0;

      return Number((perUnitVat * returnedUnits).toFixed(2));
    },

    // 5. Calculate Remaining Discount
    // Remaining Units = Invoice Qty - Return Qty
    calculateRemainingUnits(invoiceProduct) {
      const invoiceQty = parseFloat(invoiceProduct.invoiceQty) || 0;
      const returnQty = parseFloat(invoiceProduct.returnQty) || 0;

      return Number((invoiceQty - returnQty).toFixed(2));
    },

    // Remaining Discount = Per Unit Discount × Remaining Units
    calculateRemainingDiscount(invoiceProduct) {
      const perUnitDiscount = this.calculatePerUnitDiscount(invoiceProduct);
      const remainingUnits = this.calculateRemainingUnits(invoiceProduct);

      return Number((perUnitDiscount * remainingUnits).toFixed(2));
    },

    // 6. Calculate Remaining Tax
    // Tax = TotalVAT - ReturnVAT
    calculateRemainingTax(invoiceProduct) {
      const totalVat = parseFloat(invoiceProduct.taxAmount) || 0;
      const returnVat = this.calculateReturnVat(invoiceProduct);

      return Number((totalVat - returnVat).toFixed(2));
    },

    // Legacy methods for backward compatibility
    calculateUnitDiscount(invoiceProduct) {
      return this.calculatePerUnitDiscount(invoiceProduct);
    },

    calculateUnitNet(invoiceProduct) {
      const salePrice = parseFloat(invoiceProduct.salePrice) || 0;
      const unitDiscount = this.calculatePerUnitDiscount(invoiceProduct);

      return Number((salePrice - unitDiscount).toFixed(2));
    },

    calculateUnitVat(invoiceProduct) {
      return this.calculatePerUnitVat(invoiceProduct);
    },

    calculateUnitTotal(invoiceProduct) {
      const unitNet = this.calculateUnitNet(invoiceProduct);
      const unitVat = this.calculatePerUnitVat(invoiceProduct);

      return Number((unitNet + unitVat).toFixed(2));
    },

    calculateReturnTotal(invoiceProduct) {
      const unitTotal = this.calculateUnitTotal(invoiceProduct);
      const returnQty = parseFloat(invoiceProduct.returnQty) || 0;

      return Number((unitTotal * returnQty).toFixed(2));
    },

    calculateReturnSubtotal(invoiceProduct) {
      return this.calculateReturnedProductCost(invoiceProduct);
    },

    calculateReturnNet(invoiceProduct) {
      const unitNet = this.calculateUnitNet(invoiceProduct);
      const returnQty = parseFloat(invoiceProduct.returnQty) || 0;

      return Number((unitNet * returnQty).toFixed(2));
    },

    // Calculate total invoice tax (sum of tax_amount from invoice_products)
    calculateTotalInvoiceTax() {
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return 0;
      }
      return this.returnProducts.reduce((total, product) => {
        return total + (parseFloat(product.taxAmount) || 0);
      }, 0);
    },

    // Calculate total return tax (sum of return VAT for all products)
    calculateTotalReturnTax() {
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce((total, product) => {
        return total + this.calculateReturnVat(product);
      }, 0);
    },

    // Calculate total return discount (sum of return discount for all products)
    calculateTotalReturnDiscount() {
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce((total, product) => {
        return total + this.calculateReturnDiscount(product);
      }, 0);
    },

    // Calculate total remaining discount (sum of remaining discount for all products)
    calculateTotalRemainingDiscount() {
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return 0;
      }
      return this.returnProducts.reduce((total, product) => {
        return total + this.calculateRemainingDiscount(product);
      }, 0);
    },

    // Calculate total remaining tax (sum of remaining tax for all products)
    calculateTotalRemainingTax() {
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return 0;
      }
      return this.returnProducts.reduce((total, product) => {
        return total + this.calculateRemainingTax(product);
      }, 0);
    },

    // Calculate total cost of returned products
    calculateTotalReturnedProductCost() {
      if (!this.productsWithReturns || this.productsWithReturns.length === 0) {
        return 0;
      }
      return this.productsWithReturns.reduce((total, product) => {
        return total + this.calculateReturnedProductCost(product);
      }, 0);
    },

    // Calculate total subtotal with VAT for all products
    calculateTotalSubtotalWithVat() {
      if (!this.returnProducts || this.returnProducts.length === 0) {
        return 0;
      }
      return this.returnProducts.reduce((total, product) => {
        return total + this.calculateSubtotalWithVat(product);
      }, 0);
    },

    // Calculate final total using the new formula
    calculateFinalTotal() {
      const subtotal = parseFloat(this.allData.invoice.subTotal) || 0;
      const returnedProductCost = this.calculateTotalReturnedProductCost();
      const returnDiscount = this.calculateTotalReturnDiscount();
      const returnVat = this.calculateTotalReturnTax();
      const remainingDiscount = this.calculateTotalRemainingDiscount();
      const remainingTax = this.calculateTotalRemainingTax();
      const transport = parseFloat(this.allData.invoice.transport) || 0;

      // Final Total = Subtotal - Cost of Returned Products - Return Discount - Return VAT - Remaining Discount + Remaining Tax + Transport
      return Number(
        (
          (subtotal + returnVat) -
          // returnedProductCost -
          returnDiscount - 
          remainingDiscount +
          remainingTax +
          transport
        ).toFixed(2)
      );
    },

    // calculate total return using the correct formula
    calculateTotalAmount() {
      let invoiceSubTotal = 0;
      let invoiceReturn = 0;

      if (this.allData.invoiceReturnProducts) {
        // Calculate invoice subtotal (original calculation)
        invoiceSubTotal = this.allData.invoiceReturnProducts.reduce(function (
          prev,
          next
        ) {
          return prev + Number(next.invoiceQty) * Number(next.salePrice);
        },
        0);

        // Calculate return total using the correct formula
        invoiceReturn = this.allData.invoiceReturnProducts.reduce(
          (prev, next) => {
            if (next.returnQty > 0) {
              // Parse quantities safely and ensure they're numbers
              const quantity = parseFloat(next.quantity) || 1; // fallback to 1 to avoid division by zero
              const returnQty = parseFloat(next.returnQty) || 0;
              const discountAmount = parseFloat(next.discountAmount) || 0;
              const salePrice = parseFloat(next.salePrice) || 0;

              // unit_discount = round(discount_amount / quantity, 2)
              const unitDiscount =
                quantity > 0
                  ? Number((discountAmount / quantity).toFixed(2))
                  : 0;

              // unit_net = sale_price - unit_discount
              const unitNet = Number((salePrice - unitDiscount).toFixed(2));

              // unit_vat = round(unit_net * vat_rate / 100, 2)
              const vatRate = this.getVatRate(next);
              const unitVat = Number(((unitNet * vatRate) / 100).toFixed(2));

              // unit_total = unit_net + unit_vat
              const unitTotal = Number((unitNet + unitVat).toFixed(2));

              // return_total = round(unit_total * return_qty, 2)
              const returnTotal = Number((unitTotal * returnQty).toFixed(2));

              return prev + returnTotal;
            }
            return prev;
          },
          0
        );
      }

      this.invoiceSubTotal = invoiceSubTotal;
      this.invoiceReturn = invoiceReturn;
      return;
    },

    // print
    // Commented out - replaced with downloadPDF and previewPDF methods
    // printWindow() {
    //   // Open print page in new window
    //   const printUrl = `/print/invoice-return/${this.$route.params.slug}`;
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
      const pdfUrl = `/print/invoice-return/${this.$route.params.slug}/pdf?${params.toString()}`;
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
      const pdfUrl = `/print/invoice-return/${this.$route.params.slug}/preview?${params.toString()}`;
      window.location.href = pdfUrl;
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    // send credit note
    async sendCreditNote(data) {
      SwalOriginal.fire({
        title: this.$t("Send Credit Note to ZATCA"),
        text: this.$t("Do you want to send this credit note to ZATCA?"),
        type: "question",
        showCancelButton: true,
        confirmButtonText: this.$t("Yes"),
        cancelButtonText: this.$t("No"),
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#dc3545",
      }).then(async (result) => {
        if (result.value) {
          try {
            SwalOriginal.fire({
              title: this.$t("Sending..."),
              text: this.$t("Please wait while we send the credit note to ZATCA"),
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                SwalOriginal.showLoading();
              },
            });

            const response = await axios.post(`/api/invoice-returns/${data.slug}/send-to-zatca`);

            SwalOriginal.close();

            if (response.data.success) {
              this.$toast.success(
                this.$t("Sent Successfully!"),
                this.$t("Credit note has been sent to ZATCA and journal entries have been created.")
              );
              // Refresh current page data to reflect updated status
              this.getInvoiceReturn();
            } else {
              this.$toast.error(
                this.$t("Failed!"),
                response.data.message || this.$t("Failed to send credit note to ZATCA")
              );
            }
          } catch (error) {
            SwalOriginal.close();
            this.$toast.error(
              this.$t("Error!"),
              error.response?.data?.message || this.$t("An error occurred while sending the credit note")
            );
          }
        }
      });
    },

    // get activity logs
    async getActivity() {
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.$store.state.operations.loading = true;
      let slug = this.$route.params.slug;
      let modelName = "InvoiceReturn";
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
      let modelName = "InvoiceReturn";
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
      await this.getActivity();
      this.$toast.success(
        this.$t("Refreshed"),
        this.$t("Activity log has been refreshed successfully")
      );
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // get journal entries
    async getJournalEntries() {
      // Refresh the main data to ensure journal entries are loaded
      await this.getInvoiceReturn();
      
      // Debug: Log the journal entries data
      console.log('Journal Entries:', this.allData.journalEntries);
      console.log('All Data:', this.allData);
    },
  },
};
</script>

<style scoped>
.tabs-header-row {
  margin-bottom: 1.5rem;
}

.nav-tabs {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: none;
  margin-bottom: 0;
  background: #0775AF1A;
  padding: 10px;
  border-radius: 10px;
  width: 20%;
  align-self: center;
}

.nav-item {
  flex: 1 1 0;
}

.nav-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  color: #000000;
  font-family: DINNextLTArabic;
  font-weight: 400;
  font-size: 0.95rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-link.active {
  background: #0775AF;
  color: #FFFFFF !important;
}

.nav-link:hover {
  filter: brightness(0.96);
}

@media (max-width: 576px) {
  .nav-tabs {
    gap: 6px;
  }

  .nav-link {
    padding: 8px 10px;
    font-size: 0.85rem;
  }
}

.info-box {
  display: flex;
  min-height: 80px;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.125), 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  margin-bottom: 1rem;
}

.info-box-icon {
  border-radius: 0.25rem 0 0 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.875rem;
  font-weight: 300;
  width: 70px;
  text-align: center;
  color: #fff;
}

.info-box-content {
  padding: 5px 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-box-text {
  display: block;
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.info-box-number {
  display: block;
  font-weight: 700;
  font-size: 1.25rem;
  color: #495057;
}

.bg-secondary {
  background-color: #6c757d !important;
}

.bg-info {
  background-color: #33a0d9 !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

.bg-success {
  background-color: #28a745 !important;
}

.bg-primary {
  background-color: #007bff !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-dark {
  background-color: #343a40 !important;
}

/* Calculation Summary Styles */


.bg-indigo-light {
  background-color: #e3f2fd !important;
}

.bg-red-light {
  background-color: #ffebee !important;
}

.bg-green-light {
  background-color: #e8f5e8 !important;
}

.bg-sub-light {
  background-color: #f8f9fa !important;
}

/* Invoice Create Table Styles */
.invoices-create-table {
  border-collapse: collapse;
  width: 100%;
}

.invoices-create-table th,
.invoices-create-table td {
  border: 1px solid #dee2e6;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
}

.invoices-create-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  font-size: 0.875rem;
}

.invoices-create-table tbody tr:hover {
  background-color: #f8f9fa;
}

.invoices-create-table .quantity-field {
  width: 80px;
  text-align: center;
}

.invoices-create-table .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}
</style>
