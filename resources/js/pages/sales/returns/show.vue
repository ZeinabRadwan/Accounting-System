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
                <a
                  class="nav-link active"
                  href="#details"
                  data-toggle="tab"
                  @click="getInvoiceReturn"
                >
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click="getActivity"
                  class="nav-link"
                  href="#activity-log"
                  data-toggle="tab"
                >
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#journal-entry" data-toggle="tab">
                  <i class="nav-icon fa fa-book" aria-hidden="true"></i>
                  {{ $t("Journal Entry") }}</a
                >
              </li>
            </ul>
          </div>
          <div class="btn-group">
            <a @click="generatePDF()" href="#" class="btn btn-info">
              <i class="fas fa-download"></i> {{ $t("download") }}
            </a>
            <a @click="printWindow()" href="#" class="btn btn-secondary">
              <i class="fas fa-print"></i> {{ $t("Print") }}
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
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
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
            <!-- info row -->
            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                <CompanyInfo />
              </div>
              <!-- /.col -->
              <div
                class="col-sm-6 offset-sm-2 invoice-col float-right text-md-right"
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
                <div
                  v-if="allData.invoice"
                  class="table-custom table-responsive text-center"
                >
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>{{ $t("#") }}</th>
                        <th>{{ $t("Code") }}</th>
                        <th>{{ $t("Item Name") }}</th>
                        <th>{{ $t("Invoice Qty") }}</th>
                        <th>{{ $t("Return Qty") }}</th>
                        <th>{{ $t("Unit Price") }}</th>
                        <th>{{ $t("Unit Discount") }}</th>
                        <th>{{ $t("Unit Net") }}</th>
                        <th>{{ $t("Unit VAT") }}</th>
                        <th>{{ $t("Unit Total") }}</th>
                        <th class="text-right">
                          {{ $t("Total Return") }}
                        </th>
                      </tr>
                    </thead>
                    <tbody v-if="returnProducts">
                      <tr v-for="(data, i) in returnProducts" :key="i">
                        <td>{{ ++i }}</td>
                        <td>
                          {{ data.productCode | withPrefix(productPrefix) }}
                        </td>
                        <td>{{ data.productName }}</td>
                        <td>{{ data.invoiceQty }} {{ data.productUnit }}</td>
                        <td>{{ data.returnQty }} {{ data.productUnit }}</td>
                        <td>{{ data.salePrice  }} <span class="saudi-riyal">ê</span></td>
                        <td>
                          {{ calculateUnitDiscount(data)  }} <span class="saudi-riyal">ê</span>
                        </td>
                        <td>{{ calculateUnitNet(data)  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ calculateUnitVat(data)  }} <span class="saudi-riyal">ê</span></td>
                        <td>{{ calculateUnitTotal(data)  }} <span class="saudi-riyal">ê</span></td>
                        <td class="text-right">
                          {{ calculateReturnTotal(data)  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="9" class="text-right">
                          <strong>{{ $t("Subtotal") }}</strong>
                        </td>
                        <td>
                          <strong>{{
                            allData.invoice.subTotal | withCurrency
                          }}</strong>
                        </td>
                        <td class="text-right">
                          <strong>{{ invoiceReturn  }} <span class="saudi-riyal">ê</span></strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                <div class="table-responsive table-custom table-border-y-0">
                  <table class="table">
                    <tbody>
                      <tr class="bg-sub-light text-bold">
                        <th>{{ $t("Subtotal") }}:</th>
                        <td>
                          {{ allData.invoice.subTotal  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Cost of Returned Products") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{
                            calculateTotalReturnedProductCost()
                              | withCurrency
                          }}
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Return Discount") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{
                            calculateTotalReturnDiscount() | withCurrency
                          }}
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Return VAT") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ calculateTotalReturnTax()  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Remaining Discount") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{
                            calculateTotalRemainingDiscount() | withCurrency
                          }}
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Remaining Tax") }}:</th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ calculateTotalRemainingTax()  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Transport") }}:</th>
                        <td>
                          <span class="plus-sign">+</span>
                          {{ allData.invoice.transport  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-indigo-light">
                        <th>{{ $t("Total") }}:</th>
                        <td>
                          <span class="equal-sign">=</span>
                          {{ calculateFinalTotal()  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr>
                        <th>{{ $t("Total Paid") }}:</th>
                        <td>
                          <span class="minus-sign">-</span>
                          {{ allData.invoice.totalPaid  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                      <tr class="bg-red-light">
                        <th>{{ $t("Due") }}:</th>
                        <td>{{ allData.invoice.due  }} <span class="saudi-riyal">ê</span></td>
                      </tr>
                      <tr
                        v-if="allData.accountPayable"
                        class="bg-green-light"
                      >
                        <th>{{ $t("Account Payable") }}:</th>
                        <td>
                          {{ allData.accountPayable.amount  }} <span class="saudi-riyal">ê</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.row -->

            <!-- this row will not appear when printing -->
            <div class="row no-print mt-5">
              <div class="col-12">
                <router-link
                  :to="{ name: 'invoiceReturns.index' }"
                  class="btn btn-info float-right"
                >
                  <i class="fas fa-long-arrow-alt-left" />
                  {{ $t("Back") }}
                </router-link>
                <a href="#" @click="printWindow" class="btn btn-default"
                  ><i class="fas fa-print"></i> {{ $t("Print") }}</a
                >
              </div>
            </div>
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
                <a
                  @click="refreshTable()"
                  href="#"
                  v-tooltip="'Refresh'"
                  class="btn btn-success"
                >
                  <i class="fas fa-sync"></i>
                </a>
                <a
                  @click="print"
                  v-tooltip="$t('Print Table')"
                  class="btn btn-info"
                >
                  <i class="fas fa-print"></i>
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
                            <p class="mb-0">{{ data.description }}</p>
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
      <div class="tab-pane" id="journal-entry">
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
                            line.debit_amount | withCurrency
                          }}</span>
                          <span v-else class="text-muted">-</span>
                        </td>
                        <td class="text-right">
                          <span v-if="line.credit_amount > 0">{{
                            line.credit_amount | withCurrency
                          }}</span>
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
            <div v-else class="text-center text-muted">
              <p>
                {{ $t("No journal entries found for this invoice return.") }}
              </p>
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

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Invoice Return Details") };
  },
  components: {
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
  },
  data: () => ({
    breadcrumbsCurrent: "Invoice Return Details",
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
  }),

  computed: {
    ...mapGetters("operations", ["appInfo", "items", "loading", "pagination"]),

    // Check if the country is Saudi Arabia
    isSaudiArabia() {
      return this.appInfo && this.appInfo.country === 'SA';
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
          subtotal -
          returnedProductCost -
          returnDiscount -
          returnVat -
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
    printWindow() {
      window.print();
    },

    // download pdf
    generatePDF() {
      // Get the HTML content to be converted
      const element = document.getElementById("content-to-pdf");
      // Options for PDF generation
      const options = {
        margin: 5,
        filename: "Invoice Return -" + this.$route.params.slug + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        pagebreak: { mode: "avoid-all", before: "#page-break" },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };
      // Generate PDF from HTML content
      html2pdf().from(element).set(options).save();
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
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
    refreshTable() {
      this.query = "";
      this.query === "" ? this.getActivity() : this.searchData();
    },

    // reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
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
.minus-sign {
  color: #dc3545;
  font-weight: bold;
  margin-right: 5px;
}

.plus-sign {
  color: #28a745;
  font-weight: bold;
  margin-right: 5px;
}

.equal-sign {
  color: #007bff;
  font-weight: bold;
  margin-right: 5px;
}

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
</style>
