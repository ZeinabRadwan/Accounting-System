<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between" v-if="allData">
          <div class="btn-group">
            <ul class="nav nav-tabs" id="client-main-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="details-tab"
                  data-toggle="pill"
                  href="#details"
                  role="tab"
                  aria-controls="details-tab"
                  aria-selected="true"
                  @click="loadInitialData"
                >
                  <i class="fa fa-info"></i>
                  {{ $t("Details") }}</a
                >
              </li>
              <li class="nav-item">
                <a
                  @click="getActivity"
                  class="nav-link"
                  id="activity-log-tab"
                  data-toggle="pill"
                  href="#activity-log"
                  role="tab"
                  aria-controls="activity-log-tab"
                  aria-selected="false"
                >
                  <i class="nav-icon fa fa-bell" aria-hidden="true"></i>
                  {{ $t("Activity log") }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content" id="client-main-tabContent">
      <div class="tab-pane fade active show" id="details" role="tabpanel" aria-labelledby="details-tab">
        <div class="row">
          <div class="col-md-12 col-lg-3">
            <div>
              <div class="card-body box-profile">
                <div class="text-center mb-2">
                  <a
                    href="#"
                    id="show-modal"
                    @click="previewModal(allData.image || '')"
                  >
                    <img
                      :src="allData.image || 'http://zeinab.localhost:8000/images/default-avatar.jpeg'"
                      class="profile-user-img img-fluid img-circle"
                      loading="lazy"
                    />
                  </a>
                </div>
                <h3 class="profile-username text-center">{{ allData.name }}</h3>
                <ul class="list-group list-group-unbordered mb-3">
                  <li class="list-group-item">
                    <strong>{{ $t("Client ID") }}</strong>
                    <span class="float-right">{{
                      allData.clientID | withPrefix(clientPrefix)
                    }}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>{{ $t("Name") }}</strong>
                    <span class="float-right">{{ allData.name }}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>{{ $t("Email") }}</strong>
                    <span class="float-right">{{ allData.email }}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>{{ $t("Contact Number") }}</strong>
                    <span class="float-right" dir="ltr">{{ formatPhoneNumber(allData.phoneNumber) }}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>{{ $t("Company Name") }}</strong>
                    <span class="float-right">{{ allData.companyName }}</span>
                  </li>
                  <li
                    v-if="allData.taxRegistrationNumber"
                    class="list-group-item"
                  >
                    <strong>{{ $t("Tax Registration Number") }}</strong>
                    <span class="float-right">{{
                      allData.taxRegistrationNumber
                    }}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>{{ $t("Address") }}</strong>
                    <span class="float-right">{{ allData.address }}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>{{ $t("Type") }}</strong>
                    <span class="float-right">
                      <span class="badge bg-info">{{ $t(allData.type || 'Company') }}</span>
                    </span>
                  </li>
                </ul>
                <span
                  v-if="allData.status === 1"
                  class="btn-block btn bg-success"
                  >{{ $t("Active") }}</span
                >
                <span v-else class="btn-block btn bg-danger">{{
                  $t("Inactive")
                }}</span>
              </div>
              <!-- /.card-body -->
            </div>
          </div>
          <!-- /.col -->
          <div class="col-md-12 col-lg-9">
            <div class="row">
              <div class="col-lg-6 col-md-4 col-12">
                <div class="bg-info card-gradient-1">
                  <div class="card-content">
                    <div class="card-body pb-1">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="text-white">
                            {{ $t("Invoice Total") }}
                          </h6>
                          <h6 class="text-white">
                            {{ $t("Non Invoice Total") }}
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{ $t("Total") }}
                          </h4>
                        </div>
                        <div class="col-6 text-right">
                          <h6 class="text-white">
                             {{ parseFloat(allData.clientInvoiceTotal || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <h6 class="text-white">
                             {{ parseFloat(allData.nonInvoiceDue || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{
                               (parseFloat(allData.clientInvoiceTotal || 0) +
                                 parseFloat(allData.nonInvoiceDue || 0)).toFixed(2)
                             }}<span class="saudi-riyal" dir="rtl">ê</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-4 col-12">
                <div class="bg-danger card-gradient-2">
                  <div class="card-content">
                    <div class="card-body pb-1">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="text-white">
                            {{ $t("Invoice Due") }}
                          </h6>
                          <h6 class="text-white">
                            {{ $t("Non Invoice Due") }}
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{ $t("Total Due") }}
                          </h4>
                        </div>
                        <div class="col-6 text-right">
                          <h6 class="text-white">
                             {{ parseFloat(allData.clientDue || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <h6 class="text-white">
                             {{ parseFloat(allData.nonInvoiceCurrentDue || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{
                               (parseFloat(allData.clientDue || 0) + parseFloat(allData.nonInvoiceCurrentDue || 0)).toFixed(2)
                             }}<span class="saudi-riyal" dir="rtl">ê</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="
                $can('invoice-list') ||
                $can('invoice-return-list') ||
                $can('invoice-payment-list') ||
                $can('non-invoice-payment-list')
              "
            >
              <div class="card-header p-2">
                <div class="row">
                   <div class="col-md-12">
                     <ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">
                       <li v-if="$can('invoice-list')" class="nav-item">
                         <a
                           class="nav-link active"
                           id="invoices-tab"
                           data-toggle="pill"
                           href="#invoices"
                           role="tab"
                           aria-controls="invoices-tab"
                           aria-selected="true"
                           @click="activeTab = 'invoices'"
                         >
                           <i class="fas fa-file-invoice"></i>
                           {{ $t("Invoices") }}
                           <span v-if="pagination" class="badge badge-dark">{{
                             pagination.total
                           }}</span>
                         </a>
                       </li>
                      <li v-if="$can('invoice-return-list')" class="nav-item">
                        <a
                          class="nav-link"
                          id="invoice-returns-tab"
                          data-toggle="pill"
                          href="#invoice-returns"
                          role="tab"
                          aria-controls="invoice-returns-tab"
                          aria-selected="false"
                          @click="getInvoiceReturns"
                        >
                          <i class="fas fa-undo-alt"></i>
                          {{ $t("Invoice Returns") }}
                          <span
                            v-if="invoiceReturnPagination"
                            class="badge badge-dark"
                            >{{ invoiceReturnPagination.total }}</span
                          >
                        </a>
                      </li>
                      <li v-if="$can('invoice-payment-list')" class="nav-item">
                        <a
                          class="nav-link"
                          id="invoice-payments-tab"
                          data-toggle="pill"
                          href="#invoice-payments"
                          role="tab"
                          aria-controls="invoice-payments-tab"
                          aria-selected="false"
                          @click="getInvoicePayments"
                        >
                          <i class="fas fa-receipt"></i>
                          {{ $t("Invoice Payments") }}
                          <span
                            v-if="paymentPagination"
                            class="badge badge-dark"
                            >{{ paymentPagination.total }}</span
                          >
                        </a>
                      </li>
                      <li
                        v-if="$can('non-invoice-payment-list')"
                        class="nav-item"
                      >
                        <a
                          class="nav-link"
                          id="non-invoice-transactions-tab"
                          data-toggle="pill"
                          href="#non-invoice-transactions"
                          role="tab"
                          aria-controls="non-invoice-transactions-tab"
                          aria-selected="false"
                          @click="nonInvoiceTransactions"
                        >
                          <i class="fas fa-money-bill"></i>
                          {{ $t("Non Invoice Transactions") }}
                          <span
                            v-if="nonInvoicePagination"
                            class="badge badge-dark"
                            >{{ nonInvoicePagination.total }}</span
                          >
                        </a>
                      </li>
                      <li v-if="$can('invoice-list')" class="nav-item">
                        <a
                          class="nav-link"
                          id="ledger-tab"
                          data-toggle="pill"
                          href="#ledger"
                          role="tab"
                          aria-controls="ledger-tab"
                          aria-selected="false"
                          @click="getLedger"
                        >
                          <i class="fas fa-list-ul"></i>
                          {{ $t("Ledger") }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card-body mb-3">
                <div class="tab-content" id="custom-content-below-tabContent">
                  <div class="col-md-12" v-if="headerShow">
                    <h4 class="text-capitalize">
                      {{ activeTab.replace(/-/g, " ") }}
                    </h4>
                    <strong> {{ $t("Date") }}</strong> :
                    {{ date | moment("Do MMM, YYYY") }}<br />
                    <strong>{{ $t("Name") }}</strong> : {{ allData.name
                    }}<br />
                    <strong>{{ $t("Contact Number") }}</strong> :
                    <span dir="ltr">{{ formatPhoneNumber(allData.phoneNumber) }}</span><br />
                    <strong>{{ $t("Email") }}</strong> :
                    {{ allData.email }}<br />
                    <hr />
                  </div>
                   <!-- Invoices -->
                   <div class="tab-pane fade active show" id="invoices" role="tabpanel" aria-labelledby="invoices-tab">
                     <div class="row">
                       <div class="col-6 col-xl-8 mb-2 text-right">
                         <date-range-picker ref="picker" opens="left" :locale-data="locale" :minDate="minDate" :maxDate="maxDate"
                           :singleDatePicker="false" :showWeekNumbers="false" :showDropdowns="true" :autoApply="true"
                           v-model="dateRange" @update="updateValues('invoice')" :linkedCalendars="true" class="c-w-100" style="display: none;">
                           <template v-slot:input="picker" style="min-width: 350px">
                            {{ picker.startDate | startDate }} -
                            {{ picker.endDate | endDate }}
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                     <div class="row">
                       <div class="col-6 col-xl-4 mb-2">
                         <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
                       </div>
                       <div class="col-xl-8 col-8 float-right text-right">
                         <div class="btn-group c-w-100">
                           <a
                             @click="refreshTable(activeTab)"
                             href="#"
                             v-tooltip="$t('Refresh')"
                             class="btn btn-success refresh-btn"
                           >
                             <i class="fas fa-sync"></i>
                           </a>
                          <a
                            href="/clients/pdf"
                            v-tooltip="$t('Export to PDF')"
                            class="btn export-pdf-btn"
                            title="Export to PDF"
                          >
                             <svg
                               width="24"
                               height="24"
                               viewBox="0 0 24 24"
                               fill="none"
                               xmlns="http://www.w3.org/2000/svg"
                             >
                               <path
                                 d="M21 14.2501C21 14.449 20.921 14.6398 20.7803 14.7805C20.6397 14.9211 20.4489 15.0001 20.25 15.0001H18V16.5001H19.5C19.6989 16.5001 19.8897 16.5791 20.0303 16.7198C20.171 16.8604 20.25 17.0512 20.25 17.2501C20.25 17.449 20.171 17.6398 20.0303 17.7805C19.8897 17.9211 19.6989 18.0001 19.5 18.0001H18V19.5001C18 19.699 17.921 19.8898 17.7803 20.0305C17.6397 20.1711 17.4489 20.2501 17.25 20.2501C17.0511 20.2501 16.8603 20.1711 16.7197 20.0305C16.579 19.8898 16.5 19.699 16.5 19.5001V14.2501C16.5 14.0512 16.579 13.8604 16.7197 13.7198C16.8603 13.5791 17.0511 13.5001 17.25 13.5001H20.25C20.4489 13.5001 20.6397 13.5791 20.7803 13.7198C20.921 13.8604 21 14.0512 21 14.2501ZM8.625 16.1251C8.625 16.8213 8.34844 17.489 7.85616 17.9813C7.36387 18.4736 6.69619 18.7501 6 18.7501H5.25V19.5001C5.25 19.699 5.17098 19.8898 5.03033 20.0305C4.88968 20.1711 4.69891 20.2501 4.5 20.2501C4.30109 20.2501 4.11032 20.1711 3.96967 20.0305C3.82902 19.8898 3.75 19.699 3.75 19.5001V14.2501C3.75 14.0512 3.82902 13.8604 3.96967 13.7198C4.11032 13.5791 4.30109 13.5001 4.5 13.5001H6C6.69619 13.5001 7.36387 13.7767 7.85616 14.269C8.34844 14.7612 8.625 15.4289 8.625 16.1251ZM7.125 16.1251C7.125 15.8268 7.00647 15.5406 6.7955 15.3296C6.58452 15.1186 6.29837 15.0001 6 15.0001H5.25V17.2501H6C6.29837 17.2501 6.58452 17.1316 6.7955 16.9206C7.00647 16.7096 7.125 16.4235 7.125 16.1251ZM15.375 16.8751C15.375 17.7702 15.0194 18.6287 14.3865 19.2616C13.7535 19.8945 12.8951 20.2501 12 20.2501H10.5C10.3011 20.2501 10.1103 20.1711 9.96967 20.0305C9.82902 19.8898 9.75 19.699 9.75 19.5001V14.2501C9.75 14.0512 9.82902 13.8604 9.96967 13.7198C10.1103 13.5791 10.3011 13.5001 10.5 13.5001H12C12.8951 13.5001 13.7535 13.8557 14.3865 14.4886C15.0194 15.1216 15.375 15.98 15.375 16.8751ZM13.875 16.8751C13.875 16.3778 13.6775 15.9009 13.3258 15.5493C12.9742 15.1977 12.4973 15.0001 12 15.0001H11.25V18.7501H12C12.4973 18.7501 12.9742 18.5526 13.3258 18.2009C13.6775 17.8493 13.875 17.3724 13.875 16.8751ZM3.75 10.5001V3.75012C3.75 3.3523 3.90804 2.97077 4.18934 2.68946C4.47064 2.40816 4.85218 2.25012 5.25 2.25012H14.25C14.3485 2.25004 14.4461 2.26938 14.5371 2.30702C14.6282 2.34466 14.7109 2.39987 14.7806 2.4695L20.0306 7.7195C20.1003 7.7892 20.1555 7.87194 20.1931 7.96299C20.2307 8.05403 20.2501 8.1516 20.25 8.25012V10.5001C20.25 10.699 20.171 10.8898 20.0303 11.0305C19.8897 11.1711 19.6989 11.2501 19.5 11.2501C19.3011 11.2501 19.1103 11.1711 18.9697 11.0305C18.829 10.8898 18.75 10.699 18.75 10.5001V9.00012H14.25C14.0511 9.00012 13.8603 8.9211 13.7197 8.78045C13.579 8.6398 13.5 8.44903 13.5 8.25012V3.75012H5.25V10.5001C5.25 10.699 5.17098 10.8898 5.03033 11.0305C4.88968 11.1711 4.69891 11.2501 4.5 11.2501C4.30109 11.2501 4.11032 11.1711 3.96967 11.0305C3.82902 10.8898 3.75 10.699 3.75 10.5001ZM15 7.50012H17.6897L15 4.81043V7.50012Z"
                                 fill="#2AB930"
                               />
                             </svg>
                           </a>
                           <a
                             @click="print()"
                             v-tooltip="$t('Print Table')"
                             class="btn print-btn"
                           >
                             <i class="fas fa-print"></i>
                           </a>
                           <router-link
                             :to="{ name: 'clients.index' }"
                             class="btn btn-primary"
                             title="Back"
                             v-tooltip="$t('Back')"
                           >
                             <i class="fas fa-long-arrow-alt-left" />
                             {{ $t("Back") }}
                           </router-link>
                         </div>
                       </div>
                     </div>
                    <table-loading v-show="loading" />
                    <div class="table-responsive table-custom mt-3">
                       <table class="table invoices-table">
                        <thead>
                            <th>{{ $t("#") }}</th>
                            <th>{{ $t("Invoice No") }}</th>
                            <th>{{ $t("Invoice Date") }}</th>
                            <th>{{ $t("Client") }}</th>
                            <th>{{ $t("Net Total") }}</th>
                            <th>{{ $t("Total Paid") }}</th>
                            <th>{{ $t("Total Due") }}</th>
                            <th>{{ $t("Status") }}</th>
                            <th
                              v-if="
                                $can('invoice-view') ||
                                $can('invoice-edit') ||
                                $can('invoice-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                              {{ $t("Action") }}
                            </th>
                        </thead>
                        <tbody>
                          <tr
                            v-show="items && items.length"
                            v-for="(data, i) in items"
                            :key="i"
                          >
                            <td>
                              <span
                                v-if="pagination && pagination.current_page > 1"
                              >
                                {{
                                  pagination.per_page *
                                    (pagination.current_page - 1) +
                                  (i + 1)
                                }}
                              </span>
                              <span v-else>{{ i + 1 }}</span>
                            </td>
                            <td>
                              <router-link
                                v-if="$can('invoice-view')"
                                :to="{
                                  name: 'invoices.show',
                                  params: { slug: data.slug },
                                }"
                              >
                                {{ data.invoiceNo | withPrefix(invoicePrefix) }}
                              </router-link>
                              <span v-else>{{
                                data.invoiceNo | withPrefix(invoicePrefix)
                              }}</span>
                            </td>
                            <td>
                              <span v-if="data.invoiceDate">{{
                                data.invoiceDate | moment("Do MMM, YYYY")
                              }}</span>
                            </td>
                            <td>{{ data.client }}</td>
                            <td>{{ parseFloat(data.invoiceTotal || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ parseFloat(data.totalPaid || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ parseFloat(data.due || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              <span
                                v-if="data.status === 1"
                                class="badge bg-success"
                                >{{ $t("Active") }}</span
                              >
                              <span v-else class="badge bg-danger">{{
                                $t("Inactive")
                              }}</span>
                            </td>
                            <td
                              v-if="
                                $can('invoice-view') ||
                                $can('invoice-edit') ||
                                $can('invoice-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                               <div class="action-dropdown" :class="{ open: openActionIndex === i }">
                                 <button type="button" class="action-icon-btn" :data-action-index="i" @click.stop="toggleAction(i)">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                     <path d="M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z" fill="#023033"/>
                                   </svg>
                                 </button>
                                 <div class="action-menu" v-if="openActionIndex === i">
                                   <div class="action-menu-header">
                                     <span class="action-menu-title">{{ $t('Actions') }}</span>
                                     <button type="button" class="action-menu-close" @click="toggleAction(i)">
                                       <i class="fas fa-times"></i>
                                     </button>
                                   </div>
                                   <ul>
                                     <li v-if="$can('invoice-view') && data.due > 0">
                                       <a href="#" @click.prevent="handleModal(data)">
                                         <i class="fas fa-credit-card"></i>
                                         {{ $t('Add Payment?') }}
                                       </a>
                                     </li>
                                     <li v-if="isSaudiArabia && data.status === 0">
                                       <a href="#" @click.prevent="sendInvoice(data)">
                                         <i class="fas fa-paper-plane"></i>
                                         {{ $t('Send Invoice') }}
                                       </a>
                                     </li>
                                     <li v-if="$can('invoice-view')">
                                       <router-link :to="{ name: 'invoices.show', params: { slug: data.slug } }">
                                         <i class="fas fa-eye"></i>
                                         {{ $t('View') }}
                                </router-link>
                                     </li>
                                     <li v-if="$can('invoice-edit')">
                                       <router-link :to="{ name: 'invoices.edit', params: { slug: data.slug } }">
                                         <i class="fas fa-edit"></i>
                                         {{ $t('Edit') }}
                                </router-link>
                                     </li>
                                     <li v-if="$can('invoice-delete') && !(isSaudiArabia && data.status === 1)">
                                       <a href="#" @click.prevent="deleteInvoiceData(data.slug)">
                                         <i class="fas fa-trash"></i>
                                         {{ $t('Delete') }}
                                       </a>
                                     </li>
                                   </ul>
                                 </div>
                              </div>
                            </td>
                          </tr>
                          <tr v-show="!loading && items && !items.length">
                            <td colspan="9">
                              <EmptyTable />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                      <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('invoice')"
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
                  <!-- Invoices Returns -->
                  <div class="tab-pane fade" id="invoice-returns" role="tabpanel" aria-labelledby="invoice-returns-tab">
                    <div class="row">
                      <div class="col-6 col-xl-8 mb-2 text-right">
                        <date-range-picker ref="picker" opens="left" :locale-data="locale" :minDate="minDate" :maxDate="maxDate"
                          :singleDatePicker="false" :showWeekNumbers="false" :showDropdowns="true" :autoApply="true"
                          v-model="dateRange" @update="updateValues('invoice-returns')" :linkedCalendars="true" class="c-w-100" style="display: none;">
                          <template v-slot:input="picker" style="min-width: 350px">
                            {{ picker.startDate | startDate }} -
                            {{ picker.endDate | endDate }}
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 col-xl-4 mb-2">
                        <search v-model="invoiceReturnQuery" @reset-pagination="resetReturnPagination()" @reload="returnReload" />
                      </div>
                      <div class="col-xl-8 col-8 float-right text-right">
                        <div class="btn-group c-w-100">
                          <a
                            @click="refreshTable(activeTab)"
                            href="#"
                            v-tooltip="$t('Refresh')"
                            class="btn btn-success refresh-btn"
                          >
                            <i class="fas fa-sync"></i>
                          </a>
                          <a
                            href="/clients/pdf"
                            v-tooltip="$t('Export to PDF')"
                            class="btn export-pdf-btn"
                            title="Export to PDF"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 14.2501C21 14.449 20.921 14.6398 20.7803 14.7805C20.6397 14.9211 20.4489 15.0001 20.25 15.0001H18V16.5001H19.5C19.6989 16.5001 19.8897 16.5791 20.0303 16.7198C20.171 16.8604 20.25 17.0512 20.25 17.2501C20.25 17.449 20.171 17.6398 20.0303 17.7805C19.8897 17.9211 19.6989 18.0001 19.5 18.0001H18V19.5001C18 19.699 17.921 19.8898 17.7803 20.0305C17.6397 20.1711 17.4489 20.2501 17.25 20.2501C17.0511 20.2501 16.8603 20.1711 16.7197 20.0305C16.579 19.8898 16.5 19.699 16.5 19.5001V14.2501C16.5 14.0512 16.579 13.8604 16.7197 13.7198C16.8603 13.5791 17.0511 13.5001 17.25 13.5001H20.25C20.4489 13.5001 20.6397 13.5791 20.7803 13.7198C20.921 13.8604 21 14.0512 21 14.2501ZM8.625 16.1251C8.625 16.8213 8.34844 17.489 7.85616 17.9813C7.36387 18.4736 6.69619 18.7501 6 18.7501H5.25V19.5001C5.25 19.699 5.17098 19.8898 5.03033 20.0305C4.88968 20.1711 4.69891 20.2501 4.5 20.2501C4.30109 20.2501 4.11032 20.1711 3.96967 20.0305C3.82902 19.8898 3.75 19.699 3.75 19.5001V14.2501C3.75 14.0512 3.82902 13.8604 3.96967 13.7198C4.11032 13.5791 4.30109 13.5001 4.5 13.5001H6C6.69619 13.5001 7.36387 13.7767 7.85616 14.269C8.34844 14.7612 8.625 15.4289 8.625 16.1251ZM7.125 16.1251C7.125 15.8268 7.00647 15.5406 6.7955 15.3296C6.58452 15.1186 6.29837 15.0001 6 15.0001H5.25V17.2501H6C6.29837 17.2501 6.58452 17.1316 6.7955 16.9206C7.00647 16.7096 7.125 16.4235 7.125 16.1251ZM15.375 16.8751C15.375 17.7702 15.0194 18.6287 14.3865 19.2616C13.7535 19.8945 12.8951 20.2501 12 20.2501H10.5C10.3011 20.2501 10.1103 20.1711 9.96967 20.0305C9.82902 19.8898 9.75 19.699 9.75 19.5001V14.2501C9.75 14.0512 9.82902 13.8604 9.96967 13.7198C10.1103 13.5791 10.3011 13.5001 10.5 13.5001H12C12.8951 13.5001 13.7535 13.8557 14.3865 14.4886C15.0194 15.1216 15.375 15.98 15.375 16.8751ZM13.875 16.8751C13.875 16.3778 13.6775 15.9009 13.3258 15.5493C12.9742 15.1977 12.4973 15.0001 12 15.0001H11.25V18.7501H12C12.4973 18.7501 12.9742 18.5526 13.3258 18.2009C13.6775 17.8493 13.875 17.3724 13.875 16.8751ZM3.75 10.5001V3.75012C3.75 3.3523 3.90804 2.97077 4.18934 2.68946C4.47064 2.40816 4.85218 2.25012 5.25 2.25012H14.25C14.3485 2.25004 14.4461 2.26938 14.5371 2.30702C14.6282 2.34466 14.7109 2.39987 14.7806 2.4695L20.0306 7.7195C20.1003 7.7892 20.1555 7.87194 20.1931 7.96299C20.2307 8.05403 20.2501 8.1516 20.25 8.25012V10.5001C20.25 10.699 20.171 10.8898 20.0303 11.0305C19.8897 11.1711 19.6989 11.2501 19.5 11.2501C19.3011 11.2501 19.1103 11.1711 18.9697 11.0305C18.829 10.8898 18.75 10.699 18.75 10.5001V9.00012H14.25C14.0511 9.00012 13.8603 8.9211 13.7197 8.78045C13.579 8.6398 13.5 8.44903 13.5 8.25012V3.75012H5.25V10.5001C5.25 10.699 5.17098 10.8898 5.03033 11.0305C4.88968 11.1711 4.69891 11.2501 4.5 11.2501C4.30109 11.2501 4.11032 11.1711 3.96967 11.0305C3.82902 10.8898 3.75 10.699 3.75 10.5001ZM15 7.50012H17.6897L15 4.81043V7.50012Z"
                                fill="#2AB930"
                              />
                            </svg>
                          </a>
                          <a
                            @click="print()"
                            v-tooltip="$t('Print Table')"
                            class="btn print-btn"
                          >
                            <i class="fas fa-print"></i>
                          </a>
                          <router-link
                            :to="{ name: 'clients.index' }"
                            class="btn btn-primary"
                            title="Back"
                            v-tooltip="$t('Back')"
                          >
                            <i class="fas fa-long-arrow-alt-left" />
                            {{ $t("Back") }}
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <table-loading v-show="invoiceReturnLoading" />
                    <div class="table-responsive table-custom mt-3">
                       <table class="table invoices-table">
                        <thead>
                            <th>{{ $t("#") }}</th>
                            <th>{{ $t("Return No") }}</th>
                            <th>{{ $t("Invoice No") }}</th>
                            <th>{{ $t("Client") }}</th>
                            <th>{{ $t("Return Reason") }}</th>
                            <th>{{ $t("Cost of Return Products") }}</th>
                            <th>{{ $t("Date") }}</th>
                            <th>{{ $t("Status") }}</th>
                            <th
                              v-if="
                                $can('invoice-return-edit') ||
                                $can('invoice-return-view') ||
                                $can('invoice-return-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                              {{ $t("Action") }}
                            </th>
                        </thead>
                        <tbody>
                          <tr
                            v-show="allReturns.length"
                            v-for="(data, i) in allReturns"
                            :key="i"
                          >
                            <td>
                              <span
                                v-if="pagination && pagination.current_page > 1"
                              >
                                {{
                                  pagination.per_page *
                                    (pagination.current_page - 1) +
                                  (i + 1)
                                }}
                              </span>
                              <span v-else>{{ i + 1 }}</span>
                            </td>
                            <td>
                              <router-link
                                v-if="$can('invoice-return-view')"
                                :to="{
                                  name: 'invoiceReturns.show',
                                  params: { slug: data.invoiceSlug },
                                }"
                              >
                                {{
                                  data.returnNo
                                    | withPrefix(invoiceReturnPrefix)
                                }}
                              </router-link>
                              <span v-else>{{
                                data.returnNo | withPrefix(invoiceReturnPrefix)
                              }}</span>
                            </td>
                            <td>
                              {{ data.invoiceNo | withPrefix(invoicePrefix) }}
                            </td>
                            <td>{{ data.clientName }}</td>
                            <td>{{ data.reason }}</td>
                            <td>{{ parseFloat(data.totalReturn || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              <span v-if="data.returnDate">{{
                                data.returnDate | moment("Do MMM, YYYY")
                              }}</span>
                            </td>
                            <td>
                              <span
                                v-if="data.status === 1"
                                class="badge bg-success"
                                >{{ $t("Active") }}</span
                              >
                              <span v-else class="badge bg-danger">{{
                                $t("Inactive")
                              }}</span>
                            </td>
                            <td
                              v-if="
                                $can('invoice-return-edit') ||
                                $can('invoice-return-view') ||
                                $can('invoice-return-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                              <div class="btn-group">
                                <a v-if="isSaudiArabia && data.status === 0" v-tooltip="$t('Send Credit Note')"
                                  class="btn btn-success btn-sm" @click="sendCreditNote(data)">
                                  <i class="fas fa-paper-plane" />
                                </a>
                                <router-link v-if="$can('invoice-return-view')" v-tooltip="$t('View')" :to="{
                                  name: 'invoiceReturns.show',
                                  params: { slug: data.slug },
                                }" class="btn btn-primary btn-sm">
                                  <i class="fas fa-eye" />
                                </router-link>
                                <router-link v-if="$can('invoice-return-edit') && !(isSaudiArabia && data.status === 1)" v-tooltip="$t('Edit')" :to="{
                                  name: 'invoiceReturns.edit',
                                  params: { slug: data.slug },
                                }" class="btn btn-info btn-sm">
                                  <i class="fas fa-edit" />
                                </router-link>
                                <a v-if="$can('invoice-return-delete') && !(isSaudiArabia && data.status === 1)" v-tooltip="$t('Delete')" href="#"
                                  class="btn btn-danger btn-sm" @click="deleteInvoiceReturnData(data.slug)">
                                  <i class="fas fa-trash" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr v-show="!loading && !allReturns.length">
                            <td colspan="9">
                              <EmptyTable />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                      <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('invoice-returns')"
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
                          v-if="
                            invoiceReturnPagination &&
                            invoiceReturnPagination.last_page > 1
                          "
                          :pagination="
                            allReturns
                              ? invoiceReturnPagination
                              : { current_page: 1 }
                          "
                          :offset="5"
                          class="justify-flex-end"
                          @paginate="invoiceReturnPaginate"
                        />
                        <!-- pagination-end -->
                      </div>
                    </div>
                  </div>
                  <!-- Invoices Payments -->
                  <div class="tab-pane fade" id="invoice-payments" role="tabpanel" aria-labelledby="invoice-payments-tab">
                    <div
                      class="row no-print"
                      id="element-to-hide"
                      data-html2canvas-ignore="true"
                    >
                      <div class="col-12 col-md-9 mb-2">
                        <search
                          v-model="paymentsQuery"
                          @reset-pagination="resetPaymentsPagination"
                          @reload="paymentsReload"
                        />
                      </div>
                      <div class="col-12 col-md-3 text-right pull-right">
                        <date-range-picker
                          ref="picker"
                          opens="left"
                          :locale-data="locale"
                          :minDate="minDate"
                          :maxDate="maxDate"
                          :singleDatePicker="false"
                          :showWeekNumbers="false"
                          :showDropdowns="true"
                          :autoApply="true"
                          v-model="dateRange"
                          @update="updateValues('invoice-payments')"
                          :linkedCalendars="true"
                          class="c-w-100"
                          style="display: none;"
                        >
                          <template
                            v-slot:input="picker"
                            style="min-width: 350px"
                          >
                            {{ picker.startDate | startDate }} -
                            {{ picker.endDate | endDate }}
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                    <table-loading v-show="paymentsLoading" />
                    <div class="table-responsive table-custom mt-3">
                       <table class="table invoices-table">
                        <thead>
                            <th>{{ $t("#") }}</th>
                            <th>{{ $t("Invoice No") }}</th>
                            <th>{{ $t("Total") }}</th>
                            <th>{{ $t("Paid Amount") }}</th>
                            <th>{{ $t("Account") }}</th>
                            <th>{{ $t("Payment Date") }}</th>
                            <th>{{ $t("Status") }}</th>
                            <th
                              v-if="
                                $can('invoice-payment-edit') ||
                                $can('invoice-payment-view') ||
                                $can('invoice-payment-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                              {{ $t("Action") }}
                            </th>
                        </thead>
                        <tbody>
                          <tr
                            v-show="allPayments.length"
                            v-for="(data, i) in allPayments"
                            :key="i"
                          >
                            <td>
                              <span
                                v-if="pagination && pagination.current_page > 1"
                              >
                                {{
                                  pagination.per_page *
                                    (pagination.current_page - 1) +
                                  (i + 1)
                                }}
                              </span>
                              <span v-else>{{ i + 1 }}</span>
                            </td>
                            <td v-if="data.invoice && invoicePrefix">
                              <router-link
                                v-if="$can('invoice-view')"
                                :to="{
                                  name: 'invoices.show',
                                  params: { slug: data.invoice.slug },
                                }"
                              >
                                {{
                                  data.invoice.invoiceNo
                                    | withPrefix(invoicePrefix)
                                }}
                              </router-link>
                              <span v-else>{{
                                data.invoice.invoiceNo
                                  | withPrefix(invoicePrefix)
                              }}</span>
                            </td>
                            <td v-if="data.invoice">
                              {{ parseFloat(data.invoice.invoiceTotal || 0).toFixed(2) }} <span class="saudi-riyal">ê</span>
                            </td>
                            <td>{{ parseFloat(data.amount || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              <span v-if="data.account">{{
                                data.account.label
                              }}</span>
                            </td>
                            <td>
                              <span v-if="data.date">{{
                                data.date | moment("Do MMM, YYYY")
                              }}</span>
                            </td>
                            <td>
                              <span
                                v-if="data.status === 1"
                                class="badge bg-success"
                                >{{ $t("Active") }}</span
                              >
                              <span v-else class="badge bg-danger">{{
                                $t("Inactive")
                              }}</span>
                            </td>
                            <td
                              v-if="
                                $can('invoice-payment-edit') ||
                                $can('invoice-payment-view') ||
                                $can('invoice-payment-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                              <div class="btn-group">
                                <router-link
                                  v-if="$can('invoice-payment-view')"
                                  v-tooltip="$t('View')"
                                  :to="{
                                    name: 'invoicePayments.show',
                                    params: { slug: data.slug },
                                  }"
                                  class="btn btn-primary btn-sm"
                                >
                                  <i class="fas fa-eye" />
                                </router-link>
                                <router-link
                                  v-if="$can('invoice-payment-edit')"
                                  v-tooltip="$t('Edit')"
                                  :to="{
                                    name: 'invoicePayments.edit',
                                    params: { slug: data.slug },
                                  }"
                                  class="btn btn-info btn-sm"
                                >
                                  <i class="fas fa-edit" />
                                </router-link>
                                <a
                                  v-if="$can('invoice-payment-delete')"
                                  v-tooltip="$t('Delete')"
                                  href="#"
                                  class="btn btn-danger btn-sm"
                                  @click="deletePaymentData(data.slug)"
                                >
                                  <i class="fas fa-trash" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr v-show="!loading && !allPayments.length">
                            <td colspan="9">
                              <EmptyTable />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                      <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('invoice-payments')"
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
                          v-if="
                            paymentPagination && paymentPagination.last_page > 1
                          "
                          :pagination="paymentPagination"
                          :offset="5"
                          class="justify-flex-end"
                          @paginate="paymentsPaginate"
                        />
                        <!-- pagination-end -->
                      </div>
                    </div>
                  </div>
                  <!-- Invoices Transactions -->
                  <div class="tab-pane fade" id="non-invoice-transactions" role="tabpanel" aria-labelledby="non-invoice-transactions-tab">
                    <div
                      class="row no-print"
                      id="element-to-hide"
                      data-html2canvas-ignore="true"
                    >
                      <div class="col-12 col-md-9 mb-2">
                        <search
                          v-model="nonInvoiceQuery"
                          @reset-pagination="resetNonInvoiceTransPagination"
                          @reload="nonInvoiceTransReload"
                        />
                      </div>
                      <div class="col-12 col-md-3 text-right pull-right">
                        <date-range-picker
                          ref="picker"
                          opens="left"
                          :locale-data="locale"
                          :minDate="minDate"
                          :maxDate="maxDate"
                          :singleDatePicker="false"
                          :showWeekNumbers="false"
                          :showDropdowns="true"
                          :autoApply="true"
                          v-model="dateRange"
                          @update="updateValues('non-invoice-transactions')"
                          :linkedCalendars="true"
                          class="c-w-100"
                          style="display: none;"
                        >
                          <template
                            v-slot:input="picker"
                            style="min-width: 350px"
                          >
                            {{ picker.startDate | startDate }} -
                            {{ picker.endDate | endDate }}
                          </template>
                        </date-range-picker>
                      </div>
                    </div>
                    <table-loading v-show="nonInvoiceTransLoading" />
                    <div class="table-responsive table-custom mt-3">
                       <table class="table invoices-table">
                        <thead>
                            <th>{{ $t("#") }}</th>
                            <th>{{ $t("Payment Type") }}</th>
                            <th>{{ $t("Paid Amount") }}</th>
                            <th>{{ $t("Account") }}</th>
                            <th>{{ $t("Payment Date") }}</th>
                            <th>{{ $t("Status") }}</th>
                            <th
                              v-if="
                                $can('non-invoice-payment-edit') ||
                                $can('non-invoice-payment-view') ||
                                $can('non-invoice-payment-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                              {{ $t("Action") }}
                            </th>
                        </thead>
                        <tbody>
                          <tr
                            v-show="allNonInvoiceTrans.length"
                            v-for="(data, i) in allNonInvoiceTrans"
                            :key="i"
                          >
                            <td>
                              <span
                                v-if="pagination && pagination.current_page > 1"
                              >
                                {{
                                  pagination.per_page *
                                    (pagination.current_page - 1) +
                                  (i + 1)
                                }}
                              </span>
                              <span v-else>{{ i + 1 }}</span>
                            </td>
                            <td>
                              <span
                                v-if="data.type === 1"
                                class="badge bg-primary"
                                >{{ $t("Due Paid") }}</span
                              >
                              <span v-else class="badge bg-danger">{{
                                $t("Due Added")
                              }}</span>
                            </td>
                            <td>{{ parseFloat(data.amount || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              <span v-if="data.account">{{
                                data.account.label
                              }}</span>
                            </td>
                            <td>
                              <span v-if="data.date">{{
                                data.date | moment("Do MMM, YYYY")
                              }}</span>
                            </td>
                            <td>
                              <span
                                v-if="data.status === 1"
                                class="badge bg-success"
                                >{{ $t("Active") }}</span
                              >
                              <span v-else class="badge bg-danger">{{
                                $t("Inactive")
                              }}</span>
                            </td>
                            <td
                              v-if="
                                $can('non-invoice-payment-edit') ||
                                $can('non-invoice-payment-view') ||
                                $can('non-invoice-payment-delete')
                              "
                              class="text-right no-print"
                              id="element-to-hide"
                              data-html2canvas-ignore="true"
                            >
                              <div class="btn-group">
                                <router-link
                                  v-if="$can('non-invoice-payment-edit')"
                                  v-tooltip="$t('Edit')"
                                  :to="{
                                    name: 'nonInvoicePayments.edit',
                                    params: { slug: data.slug },
                                  }"
                                  class="btn btn-info btn-sm"
                                >
                                  <i class="fas fa-edit" />
                                </router-link>
                                <a
                                  v-if="$can('non-invoice-payment-delete')"
                                  v-tooltip="$t('Delete')"
                                  href="#"
                                  class="btn btn-danger btn-sm"
                                  @click="deleteNonInvoicePayment(data.slug)"
                                >
                                  <i class="fas fa-trash" />
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr v-show="!loading && !allNonInvoiceTrans.length">
                            <td colspan="7">
                              <EmptyTable />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer">
                      <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('non-invoice-transactions')"
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
                          v-if="
                            nonInvoicePagination &&
                            nonInvoicePagination.last_page > 1
                          "
                          :pagination="nonInvoicePagination"
                          :offset="5"
                          class="justify-flex-end"
                          @paginate="nonInvoiceTransPaginate"
                        />
                        <!-- pagination-end -->
                      </div>
                    </div>
                  </div>
                  <!--ledger-->
                  <div class="tab-pane fade print-area" id="ledger" role="tabpanel" aria-labelledby="ledger-tab">
                    <table-loading v-show="loading" />
                    <div class="table-responsive table-custom mt-3">
                       <table class="table invoices-table">
                        <thead>
                            <th>{{ $t("#") }}</th>
                            <th>{{ $t("Date") }}</th>
                            <th>{{ $t("Info") }}</th>
                            <th>{{ $t("Credit") }}</th>
                            <th>{{ $t("Debit") }}</th>
                            <th>{{ $t("Discount") }}</th>
                            <th>{{ $t("Balance") }}</th>
                        </thead>
                        <tbody>
                          <tr v-for="(data, i) in ledgerItems" :key="i">
                            <td>{{ i + 1 }}</td>
                            <td>
                              {{ data.original_date | moment("Do MMM, YYYY") }}
                            </td>
                            <td>
                              <router-link
                                v-if="
                                  $can('invoice-view') &&
                                  data.action_type == 'invoice'
                                "
                                :to="{
                                  name: 'invoices.show',
                                  params: { slug: data.slug },
                                }"
                              >
                                {{ data.particulars }}
                              </router-link>
                              <router-link
                                v-if="data.action_type == 'invoice-payment'"
                                :to="{
                                  name: 'invoicePayments.show',
                                  params: { slug: data.slug },
                                }"
                              >
                                {{ data.particulars }}
                              </router-link>
                              <router-link
                                v-if="
                                  $can('invoice-return-view') &&
                                  data.action_type == 'invoice-return'
                                "
                                :to="{
                                  name: 'invoiceReturns.show',
                                  params: { slug: data.slug },
                                }"
                              >
                                {{ data.particulars }}
                              </router-link>
                            </td>
                            <td>{{ parseFloat(data.credit || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ parseFloat(data.debit || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ parseFloat(data.discount || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ parseFloat(data.balance || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                          </tr>
                          <tr v-if="ledgerItems[ledgerItems.length - 1]">
                            <td>{{ ledgerItems.length + 1 }}</td>
                            <td>{{ date | moment("Do MMM, YYYY") }}</td>
                            <td>{{ $t("Non Invoice Due") }}</td>
                            <td>{{ (0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{ parseFloat(allData.nonInvoiceCurrentDue || 0).toFixed(2) }} <span class="saudi-riyal">ê</span>
                            </td>
                            <td>{{ (0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{
                                (parseFloat(ledgerItems[ledgerItems.length - 1].balance || 0) +
                                  parseFloat(allData.nonInvoiceCurrentDue || 0)).toFixed(2)
                              }}<span class="saudi-riyal">ê</span>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr v-if="ledgerItems[ledgerItems.length - 1]">
                            <td colspan="3">{{ $t("Summery") }}</td>
                            <td>{{ parseFloat(ledgerTotalCredit || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{
                                (parseFloat(ledgerTotalDebit || 0) +
                                  parseFloat(allData.nonInvoiceCurrentDue || 0)).toFixed(2)
                              }}<span class="saudi-riyal">ê</span>
                            </td>
                            <td>{{ parseFloat(ledgerTotalDiscount || 0).toFixed(2) }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{
                                (parseFloat(ledgerItems[ledgerItems.length - 1].balance || 0) +
                                  parseFloat(allData.nonInvoiceCurrentDue || 0)).toFixed(2)
                              }}<span class="saudi-riyal">ê</span>
                              [{{ $t("Total Due") }}]
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  activity logs -->
      <div class="tab-pane fade" id="activity-log" role="tabpanel" aria-labelledby="activity-log-tab">
        <div class="custom-card w-100 mt-5 no-print">
          <div class="card-header setings-header">
            <div class="col-xl-12">
              <h3 class="card-title">
                {{ $t("Activity log") }}
              </h3>
            </div>
          </div>
          <table-loading v-show="activityLoading" />
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search
                  v-model="activitySearchQuery"
                  @reset-pagination="resetActivityPagination()"
                  @reload="activityReload"
                />
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <div class="btn-group c-w-100">
                  <a
                    @click="refreshActivityTable()"
                    href="#"
                    v-tooltip="$t('Refresh')"
                    class="btn btn-success refresh-btn"
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                  <a
                    @click="printActivityLog"
                    v-tooltip="$t('Print Table')"
                    class="btn print-btn"
                  >
                    <i class="fas fa-print"></i>
                  </a>
                </div>
              </div>
            </div>
            <div id="printMe" class="table-responsive table-custom mt-3">
              <table class="table invoices-table">
                <thead>
                    <th>{{ $t("#") }}</th>
                    <th>{{ $t("Event") }}</th>
                    <th>{{ $t("User") }}</th>
                    <th>{{ $t("Description") }}</th>
                    <th>{{ $t("Date") }}</th>
                </thead>
                <tbody>
                  <tr
                    v-show="allActivityLog.length"
                    v-for="(data, i) in allActivityLog"
                    :key="i"
                  >
                    <td>
                      <span
                        v-if="allActivityLogPagination && allActivityLogPagination.current_page > 1"
                      >
                        {{
                          allActivityLogPagination.per_page *
                            (allActivityLogPagination.current_page - 1) +
                          (i + 1)
                        }}
                      </span>
                      <span v-else>{{ i + 1 }}</span>
                    </td>
                    <td>
                      <span v-if="data.event === 'Update'" class="badge bg-info">
                        <i class="fa fa-magic mr-1"></i>
                        {{ $t("Update") }}
                      </span>
                      <span v-else-if="data.event === 'Create'" class="badge bg-success">
                        <i class="fa fa-plus-circle mr-1"></i>
                        {{ $t("Create") }}
                      </span>
                      <span v-else-if="data.event === 'Delete'" class="badge bg-danger">
                        <i class="fa fa-trash mr-1"></i>
                        {{ $t("Delete") }}
                      </span>
                      <span v-else class="badge bg-secondary">
                        {{ data.event }}
                      </span>
                    </td>
                    <td>{{ data.causer_name }}</td>
                    <td>{{ data.description }}</td>
                    <td>{{ data.performedAt }}</td>
                  </tr>
                  <tr v-show="!activityLoading && !allActivityLog.length">
                    <td colspan="5" class="text-center">
                      <EmptyTable />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t("per_page") }} </label>
                <div>
                  <select
                    @change="updateActivityPerPager"
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
                v-if="
                  allActivityLogPagination &&
                  allActivityLogPagination.last_page > 1
                "
                :pagination="
                  allActivityLog
                    ? allActivityLogPagination
                    : { current_page: 1 }
                "
                :offset="5"
                class="justify-flex-end"
                @paginate="activityPaginate"
              />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="previewModal()">
      <h5 slot="header">{{ $t("Attached Image Preview") }}</h5>
      <div class="w-100" slot="body">
        <img :src="allData.image" class="img-fluid" loading="lazy" />
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import i18n from "~/plugins/i18n";
import { mapGetters } from "vuex";
import html2pdf from "html2pdf.js";
import DateRangePicker from "vue2-daterange-picker";
import avatarMixin from "~/mixins/avatarMixin";
import SwalOriginal from "sweetalert2/dist/sweetalert2";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Client Details") };
  },
  mixins: [avatarMixin],
  components: {
    DateRangePicker,
  },
  data: () => ({
    breadcrumbsCurrent: "Client Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Clients",
        url: "clients.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    paymentsLoading: false,
    invoiceReturnLoading: false,
    creditsLoading: false,
    debitsLoading: false,
    nonInvoiceTransLoading: false,
    url: null,
    showModal: false,
    allData: "",
    allPayments: "",
    allReturns: "",
    allNonInvoiceTrans: "",
    paymentPagination: "",
    invoiceReturnPagination: "",
    nonInvoicePagination: "",
    query: "",
    invoiceReturnQuery: "",
    paymentsQuery: "",
    nonInvoiceQuery: "",
    clientPrefix: "",
    invoicePrefix: "",
    invoiceReturnPrefix: "",
    activitySearchQuery: "",
    allActivityLog: "",
    allActivityLogPagination: "",
    activityLoading: false,
    perPage: 10,
    minDate: moment(new Date("01-01-2021")).format("YYYY-MM-DD"),
    maxDate: moment().add(1, "days").format("YYYY-MM-DD"),
    dateRange: {
      startDate: "",
      endDate: "",
    },
    locale: {
      direction: "ltr",
      format: "YYYY-MM-DD",
      separator: " - ",
      applyLabel: "Apply",
      cancelLabel: "Cancel",
      weekLabel: "W",
      customRangeLabel: "Custom Range",
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: 1,
    },
    ledgerItems: [],
    ledgerTotalDiscount: 0,
    ledgerTotalDebit: 0,
    ledgerTotalCredit: 0,
    finalBalance: 0,
    headerShow: false,
    date: new Date().toISOString().slice(0, 10),
    activeTab: "invoices",
     openActionIndex: null,
  }),
  filters: {
    startDate(val) {
      return val ? moment(val).format("YYYY-MM-DD") : i18n.t("From");
    },
    endDate(val) {
      return val ? moment(val).format("YYYY-MM-DD") : i18n.t("To");
    },
  },
  // Map Getters
  computed: {
    ...mapGetters("operations", ["items", "loading", "pagination", "appInfo"]),
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      const result = !this.appInfo?.country || this.appInfo.country === 'SA';
      return result;
    },
  },
  watch: {
    // watch invoice search data
    query: function (newQ, oldQ) {
      if (newQ === "") {
        if (this.dateRange.startDate && this.dateRange.endDate) {
          this.searchInvoicesData();
        } else {
          this.getInvoices();
        }
      } else {
        this.searchInvoicesData();
      }
    },
    // watch invoice return search data
    invoiceReturnQuery: function (newQ, oldQ) {
      if (newQ === "") {
        if (this.dateRange.startDate && this.dateRange.endDate) {
          this.searchReturnData();
        } else {
          this.getInvoiceReturns();
        }
      } else {
        this.searchReturnData();
      }
    },
    // watch payment search data
    paymentsQuery: function (newQ, oldQ) {
      if (newQ === "") {
        if (this.dateRange.startDate && this.dateRange.endDate) {
          this.searchPaymentData();
        } else {
          this.getInvoicePayments();
        }
      } else {
        this.searchPaymentData();
      }
    },

    // watch non invoice transaction search data
    nonInvoiceQuery: function (newQ, oldQ) {
      if (newQ === "") {
        if (this.dateRange.startDate && this.dateRange.endDate) {
          this.searchNonInvoiceTransactions();
        } else {
          this.nonInvoiceTransactions();
        }
      } else {
        this.searchNonInvoiceTransactions();
      }
    },

    // watch activitySearchQuery data
    activitySearchQuery: function (newQ, oldQ) {
      if (newQ === "") {
        this.getActivity();
      } else {
        this.searchActivity();
      }
    },
  },
  created() {
    this.getClient();
    this.getInvoices();
    this.clientPrefix = this.appInfo.clientPrefix;
    this.invoicePrefix = this.appInfo.invoicePrefix;
    this.invoiceReturnPrefix = this.appInfo.invoiceReturnPrefix;

    // Add click outside listener for action menu
    document.addEventListener('click', this.handleClickOutside);

    Fire.$on("AfterDelete", () => {
      this.getInvoices();
      this.getInvoiceReturns();
      this.getInvoicePayments();
      this.nonInvoiceTransactions();
    });
  },
  methods: {
    switchTab(tabName) {
      switch (tabName) {
        case "invoice":
          this.searchInvoicesData();
          break;
        case "invoice-returns":
          this.searchReturnData();
          break;
        case "invoice-payments":
          this.searchPaymentData();
          break;
        case "non-invoice-transactions":
          this.searchNonInvoiceTransactions();
          break;
      }
    },

    // Format phone number to display properly
    formatPhoneNumber(phoneNumber) {
      if (!phoneNumber) return '';
      
      // Remove all non-digit characters except +
      let cleaned = phoneNumber.replace(/[^\d+]/g, '');
      
      // If it starts with +, keep it
      if (cleaned.startsWith('+')) {
        // Remove the + for processing
        let digits = cleaned.substring(1);
        
        // Format based on country code
        if (digits.startsWith('1') && digits.length === 11) {
          // US/Canada format: +1 (XXX) XXX-XXXX
          return `+1 (${digits.substring(1, 4)}) ${digits.substring(4, 7)}-${digits.substring(7)}`;
        } else if (digits.startsWith('966') && digits.length === 12) {
          // Saudi Arabia format: +966 XX XXX XXXX
          return `+966 ${digits.substring(3, 5)} ${digits.substring(5, 8)} ${digits.substring(8)}`;
        } else if (digits.startsWith('44') && digits.length === 12) {
          // UK format: +44 XXXX XXX XXX
          return `+44 ${digits.substring(2, 6)} ${digits.substring(6, 9)} ${digits.substring(9)}`;
        } else if (digits.startsWith('33') && digits.length === 11) {
          // France format: +33 X XX XX XX XX
          return `+33 ${digits.substring(2, 3)} ${digits.substring(3, 5)} ${digits.substring(5, 7)} ${digits.substring(7, 9)} ${digits.substring(9)}`;
        } else if (digits.length >= 10) {
          // Generic format: +XXX XXX XXX XXXX
          const countryCode = digits.substring(0, digits.length - 10);
          const number = digits.substring(digits.length - 10);
          return `+${countryCode} ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6)}`;
        } else {
          // Return as is with + if it's a reasonable length
          return cleaned;
        }
      } else {
        // No + prefix, add it and format
        if (cleaned.length === 10) {
          // Assume US format: (XXX) XXX-XXXX
          return `+1 (${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
        } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
          // US format with country code: +1 (XXX) XXX-XXXX
          return `+1 (${cleaned.substring(1, 4)}) ${cleaned.substring(4, 7)}-${cleaned.substring(7)}`;
        } else if (cleaned.length === 12 && cleaned.startsWith('966')) {
          // Saudi Arabia format: +966 XX XXX XXXX
          return `+966 ${cleaned.substring(3, 5)} ${cleaned.substring(5, 8)} ${cleaned.substring(8)}`;
        } else if (cleaned.length >= 10) {
          // Generic format: +XXX XXX XXX XXXX
          const countryCode = cleaned.substring(0, cleaned.length - 10);
          const number = cleaned.substring(cleaned.length - 10);
          return `+${countryCode} ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6)}`;
        } else {
          // Return as is
          return phoneNumber;
        }
      }
    },

    // Toggle action dropdown
    toggleAction(index) {
      if (this.openActionIndex === index) {
        this.openActionIndex = null;
      } else {
        this.openActionIndex = index;
        // Position the menu correctly after it's rendered
        this.$nextTick(() => {
          this.positionActionMenu(index);
        });
      }
    },

    // Position action menu to avoid overflow
    positionActionMenu(index) {
      const menu = document.querySelector('.action-menu');
      if (!menu) return;

      const rect = menu.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Reset positioning
      menu.style.left = '';
      menu.style.right = '';
      menu.style.top = '';

      // Check if menu overflows right edge
      if (rect.right > viewportWidth) {
        menu.style.right = '0';
        menu.style.left = 'auto';
      }

      // Check if menu overflows bottom edge
      if (rect.bottom > viewportHeight) {
        menu.style.top = 'auto';
        menu.style.bottom = '100%';
        menu.style.marginTop = '0';
        menu.style.marginBottom = '4px';
      }
    },

    async loadInitialData() {
      this.getClient();
      this.getInvoices();
    },

    // Close action menu when clicking outside
    handleClickOutside(event) {
      if (this.openActionIndex !== null) {
        const actionDropdown = event.target.closest('.action-dropdown');
        if (!actionDropdown) {
          this.openActionIndex = null;
        }
      }
    },

    // filter data for selected date range
    async updateValues(tabName) {
      this.dateRange.startDate = moment(this.dateRange.startDate).format(
        "YYYY-MM-DD"
      );
      this.dateRange.endDate = moment(this.dateRange.endDate).format(
        "YYYY-MM-DD"
      );
      await this.switchTab(tabName);
    },
    // refresh table
    refreshTable(tabName) {
      this.query = "";
      this.dateRange.startDate = null;
      this.dateRange.endDate = null;
      setTimeout(
        function () {
          this.dateRange.startDate = "";
          this.dateRange.endDate = "";
          this.switchTab(tabName);
        }.bind(this),
        1000
      );
    },

    // get the client
    async getClient() {
      const { data } = await axios.get(
        window.location.origin + "/api/clients/" + this.$route.params.slug
      );
      this.allData = data.data;
    },

    // update per page count
    updatePerPager(tabName) {
      this.pagination.current_page = 1;
      this.invoiceReturnPagination.hasOwnProperty("current_page")
        ? (this.invoiceReturnPagination.current_page = 1)
        : "";
      this.paymentPagination.hasOwnProperty("current_page")
        ? (this.paymentPagination.current_page = 1)
        : "";
      this.nonInvoicePagination.hasOwnProperty("current_page")
        ? (this.nonInvoicePagination.current_page = 1)
        : "";

      this.switchTab(tabName);
    },

    // get the client invoices
    async getInvoices() {
      this.activeTab = "invoices";
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/client/" + this.$route.params.slug + "/all-invoices/?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
    },

    // search invoices
    async searchInvoicesData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/searchData", {
        path: "/api/client/" + this.$route.params.slug + "/all-invoices/search",
        term: this.query,
        currentPage: currentPage + "&perPage=" + this.perPage,
        startDate: this.dateRange.startDate,
        endDate: this.dateRange.endDate,
      });
    },

    // pagination
    async paginate() {
      this.query === "" ? this.getInvoices() : this.searchInvoicesData();
    },

    // reset purchase pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // reload purchases after search
    async reload() {
      this.query = "";
      await this.searchInvoicesData();
    },

    // get client invoice returns
    async getInvoiceReturns() {
      this.activeTab = "invoice-returns";
      this.invoiceReturnLoading = true;
      let currentPage = this.allReturns
        ? this.invoiceReturnPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/client/" +
          this.$route.params.slug +
          "/invoice-returns?page=" +
          currentPage +
          "&perPage=" +
          this.perPage
      );
      this.allReturns = data.data;
      this.invoiceReturnPagination = data.meta;
      this.invoiceReturnLoading = false;
    },

    // search invoice returns
    async searchReturnData() {
      this.invoiceReturnLoading = true;
      let currentPage = this.allReturns
        ? this.invoiceReturnPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/client/" +
          this.$route.params.slug +
          "/invoice-returns/search" +
          "?term=" +
          this.invoiceReturnQuery +
          "&page=" +
          currentPage +
          "&perPage=" +
          this.perPage +
          "&startDate=" +
          this.dateRange.startDate +
          "&endDate=" +
          this.dateRange.endDate
      );
      this.allReturns = data.data;
      this.invoiceReturnPagination = data.meta;
      this.invoiceReturnLoading = false;
    },

    // invoice return pagination
    async invoiceReturnPaginate() {
      this.query === "" ? this.getInvoiceReturns() : this.searchReturnData();
    },

    // reset invoice return pagination
    async resetReturnPagination() {
      this.invoiceReturnPagination.current_page = 1;
    },

    // Reload purchases after search
    async returnReload() {
      this.invoiceReturnQuery = "";
      await this.searchReturnData();
    },

    // Get the invoice payments
    async getInvoicePayments() {
      this.activeTab = "invoice-payments";
      this.paymentsLoading = true;
      let currentPage = this.allPayments
        ? this.paymentPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/client/" +
          this.$route.params.slug +
          "/invoice-payments?page=" +
          currentPage +
          "&perPage=" +
          this.perPage
      );
      this.allPayments = data.data;
      this.paymentPagination = data.meta;
      this.paymentsLoading = false;
    },

    // search payments
    async searchPaymentData() {
      this.paymentsLoading = true;
      let currentPage = this.allPayments
        ? this.paymentPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/client/" +
          this.$route.params.slug +
          "/invoice-payments/search" +
          "?term=" +
          this.paymentsQuery +
          "&page=" +
          currentPage +
          "&perPage=" +
          this.perPage +
          "&startDate=" +
          this.dateRange.startDate +
          "&endDate=" +
          this.dateRange.endDate
      );
      this.allPayments = data.data;
      this.paymentPagination = data.meta;
      this.paymentsLoading = false;
    },

    // Payments pagination
    async paymentsPaginate() {
      this.query === this.getInvoicePayments() ? this.searchPaymentData() : "";
    },

    // Reset payments pagination
    async resetPaymentsPagination() {
      this.paymentPagination.current_page = 1;
    },

    // Reload payments after search
    async paymentsReload() {
      this.paymentsQuery = "";
      await this.searchPaymentData();
    },

    // Get the non invoice transactions
    async nonInvoiceTransactions() {
      this.activeTab = "non-invoice-transactions";
      this.nonInvoiceTransLoading = true;
      let currentPage = this.allNonInvoiceTrans
        ? this.nonInvoicePagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/client/" +
          this.$route.params.slug +
          "/non-invoice-payments?page=" +
          currentPage +
          "&perPage=" +
          this.perPage
      );
      this.allNonInvoiceTrans = data.data;
      this.nonInvoicePagination = data.meta;
      this.nonInvoiceTransLoading = false;
    },

    // search non invoice transactions
    async searchNonInvoiceTransactions() {
      this.nonInvoiceTransLoading = true;
      let currentPage = this.allNonInvoiceTrans
        ? this.nonInvoicePagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/client/" +
          this.$route.params.slug +
          "/non-invoice-payments/search" +
          "?term=" +
          this.nonInvoiceQuery +
          "&page=" +
          currentPage +
          "&perPage=" +
          this.perPage +
          "&startDate=" +
          this.dateRange.startDate +
          "&endDate=" +
          this.dateRange.endDate
      );
      this.allNonInvoiceTrans = data.data;
      this.nonInvoicePagination = data.meta;
      this.nonInvoiceTransLoading = false;
    },

    // non invoice transactions pagination
    async nonInvoiceTransPaginate() {
      this.query === this.nonInvoiceTransactions()
        ? this.searchNonInvoiceTransactions()
        : "";
    },

    // Reset non invoice transactions pagination
    async resetNonInvoiceTransPagination() {
      this.nonInvoicePagination.current_page = 1;
    },

    // Reload non invoice transactions after search
    async nonInvoiceTransReload() {
      this.nonInvoiceQuery = "";
      await this.searchNonInvoiceTransactions();
    },

    // display modal
    previewModal(image) {
      this.imagePath = image;
      if (this.showModal) {
        return (this.showModal = false);
      }
      return (this.showModal = true);
    },

    // get ledger
    async getLedger() {
      this.ledgerLoading = true;
      this.activeTab = "ledger";
      const { data } = await axios.get(
        window.location.origin +
          "/api/client/" +
          this.$route.params.slug +
          "/ledger"
      );
      this.ledgerItems = data.items;
      this.ledgerTotalDiscount = data.totalDiscount;
      this.ledgerTotalDebit = data.totalDebit;
      this.ledgerTotalCredit = data.totalCredit;
      this.finalBalance = data.finalBalance;
      this.ledgerLoading = false;
    },


    // print table
    async print() {
      this.headerShow = true;
      await this.$htmlToPaper(this.activeTab);
      setTimeout(async () => {
        this.headerShow = false;
      }, 2000);
    },

    // print table
    async printActivityLog() {
      await this.$htmlToPaper("printMe");
    },

    // get activity logs
    async getActivity() {
      this.activityLoading = true;
      let currentPage = this.allActivityLog
        ? this.allActivityLogPagination.current_page
        : 1;
      let slug = this.$route.params.slug;
      let modelName = "Client";

      const baseUrl = `${window.location.origin}/api/activity-log-specific`;
      const queryParams = `?page=${currentPage}&perPage=${this.perPage}&slug=${slug}&modelName=${modelName}`;
      const url = baseUrl + queryParams;

      const { data } = await axios.get(url);

      this.allActivityLog = data.data;
      this.allActivityLogPagination = data.meta;
      this.activityLoading = false;
    },

    // search data
    async searchActivity() {
      this.activityLoading = true;
      let currentPage = this.allActivityLog
        ? this.allActivityLogPagination.current_page
        : 1;
      let term = this.activitySearchQuery;
      let slug = this.$route.params.slug;
      let modelName = "Client";

      const baseUrl = `${window.location.origin}/api/activity-log-specific`;
      const queryParams = `?page=${currentPage}&perPage=${this.perPage}&term=${term}&slug=${slug}&modelName=${modelName}`;
      const url = baseUrl + queryParams;

      const { data } = await axios.get(url);

      this.allActivityLog = data.data;
      this.allActivityLogPagination = data.meta;
      this.activityLoading = false;
    },

    // activity pagination
    async activityPaginate() {
      this.getActivity();
    },

    // update activity per page count
    updateActivityPerPager() {
      this.allActivityLogPagination.current_page = 1;
      this.activitySearchQuery === ""
        ? this.getActivity()
        : this.searchActivity();
    },

    // reload after search
    async activityReload() {
      this.activitySearchQuery = "";
    },

    // refresh activity table
    refreshActivityTable() {
      this.activitySearchQuery = "";
      this.activitySearchQuery === ""
        ? this.getActivity()
        : this.searchActivity();
    },

    // reset activity pagination
    async resetActivityPagination() {
      this.allActivityLogPagination.current_page = 1;
    },

    // delete invoice data
    async deleteInvoiceData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/invoices/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully.")
                );
                Fire.$emit("AfterDelete");
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.$t("Sorry you can't delete this invoice!")
                );
              }
            });
        }
      });
    },

    // delete invoice return data
    async deleteInvoiceReturnData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/invoice-returns/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully.")
                );
                Fire.$emit("AfterDelete");
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.$t("There was something wrong.")
                );
              }
            });
        }
      });
    },

    // delete invoice payment data
    async deletePaymentData(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/payments/invoice/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully.")
                );
                Fire.$emit("AfterDelete");
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.$t("Sorry you can't delete this payment!")
                );
              }
            });
        }
      });
    },

    // delete non invoice payment data
    async deleteNonInvoicePayment(slug) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this!"),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        // Send request to the server
        if (result.value) {
          this.$store
            .dispatch("operations/deleteData", {
              path: "/api/payments/non-invoice/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                this.$toast.success(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully.")
                );
                Fire.$emit("AfterDelete");
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  this.$t("Sorry you can't delete this payment!")
                );
              }
            });
        }
      });
    },

    // Handle payment modal
    handleModal(data) {
      // This would open a payment modal - you can implement this based on your needs
      console.log('Payment modal for invoice:', data);
      // For now, just show an alert
      this.$toast.info(
        this.$t("Add Payment"),
        this.$t("Payment functionality would be implemented here")
      );
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
              // Refresh the table to update the status
              this.getInvoices();
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
              this.$t("An error occurred while sending the invoice to ZATCA")
            );
          }
        }
      });
    },

    // Send credit note to ZATCA
    async sendCreditNote(data) {
      console.log('Send credit note clicked for:', data);
      console.log('isSaudiArabia:', this.isSaudiArabia);
      console.log('data.status:', data.status);
      
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
            // Show loading
            SwalOriginal.fire({
              title: this.$t("Sending..."),
              text: this.$t("Please wait while we send the credit note to ZATCA"),
              allowOutsideClick: false,
              showConfirmButton: false,
              willOpen: () => {
                SwalOriginal.showLoading();
              }
            });

            // Send credit note to ZATCA and create journal entries
            const response = await axios.post(`/api/invoice-returns/${data.slug}/send-to-zatca`);
            
            // Close the loading dialog
            SwalOriginal.close();
            
            if (response.data.success) {
              this.$toast.success(
                this.$t("Sent Successfully!"),
                this.$t("Credit note has been sent to ZATCA and journal entries have been created.")
              );
              // Refresh the table to update the status
              this.getInvoiceReturns();
            } else {
              this.$toast.error(
                this.$t("Failed!"),
                response.data.message || this.$t("Failed to send credit note to ZATCA")
              );
            }
          } catch (error) {
            console.error('Error sending credit note:', error);
            // Close the loading dialog
            SwalOriginal.close();
            this.$toast.error(
              this.$t("Error!"),
              error.response?.data?.message || this.$t("An error occurred while sending the credit note")
            );
          }
        }
      });
    },
  },
  beforeDestroy() {
    // Remove click outside listener for action menu
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
tfoot {
  font-weight: 700;
}
.nav-pills .nav-item {
  background: #ddd;
  margin: 2px;
  border-radius: 0.25rem;
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

.invoices-table .badge.bg-success {
  background-color: #28a745 !important;
  color: #ffffff !important;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.invoices-table .badge.bg-danger {
  background-color: #dc3545 !important;
  color: #ffffff !important;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
}

.refresh-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.export-pdf-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

.print-btn {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  width: 56px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 16px;
  border: none;
}

/* Action dropdown styles */
.action-dropdown {
  position: relative;
  display: inline-block;
}

.action-dropdown.open .action-menu {
  display: block;
}

.action-icon-btn {
  border: none;
  width: 24px;
  height: 24px;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}

.action-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 8px 20px 0px #00000014;
  border-radius: 12px;
  min-width: 200px;
  z-index: 9999;
  max-height: 80vh;
  overflow: hidden;
  animation: slideInDown 0.3s ease-out;
  margin-top: 4px;
}

/* RTL Support for Action Menu */
[dir="rtl"] .action-menu {
  right: auto !important;
  left: 0 !important;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.action-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5fb;
  background: #f8fafc;
  border-radius: 12px 12px 0 0;
}

.action-menu-title {
  font-size: 14px;
  font-weight: 600;
  color: #023033;
}

.action-menu-close {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.action-menu-close:hover {
  background: #e5e7eb;
  color: #374151;
}

.action-menu ul {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.action-menu li {
  border-bottom: 1px solid #f1f5fb;
}

.action-menu li:last-child {
  border-bottom: none;
}

.action-menu li a {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #023033;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  gap: 10px;
}

.action-menu li a i {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.action-menu li a:hover {
  background: #f8fafc;
  color: #2AB930;
  transform: translateX(2px);
}

.action-menu li a:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #2AB930;
  transform: scaleY(0);
  transition: transform 0.2s ease;
}

.action-menu li a:hover:before {
  transform: scaleY(1);
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Card gradient backgrounds */
.card-gradient-1 {
  background: linear-gradient(135deg, #449eae 0%, #3a8a98 100%) !important;
}

.card-gradient-2 {
  background: linear-gradient(135deg, #377578 0%, #2d5f61 100%) !important;
}

/* Ensure action dropdown works properly in table cells */
.invoices-table td {
  position: relative;
  overflow: visible;
}

.invoices-table .action-dropdown {
  position: static;
}

.invoices-table .action-menu {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
}

/* RTL support for table action menu */
[dir="rtl"] .invoices-table .action-menu {
  right: auto;
  left: 0;
}

/* Professional Tab Styling - Matching Recent Activities */
.nav-tabs {
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 1.5rem;
  background: transparent;
}

.nav-tabs .nav-link {
  border: none;
  color: #64748b;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 12px 20px;
  margin-right: 8px;
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;
  position: relative;
}

.nav-tabs .nav-link:hover {
  color: #33A0D9;
  background: rgba(51, 160, 217, 0.08);
  border: none;
}

.nav-tabs .nav-link.active {
  color: #33A0D9;
  background: #ffffff;
  border: none;
  font-weight: 700;
  box-shadow: 0 -2px 8px rgba(51, 160, 217, 0.15);
}

.nav-tabs .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #33A0D9, #2AB930);
  border-radius: 2px;
}

/* Professional Tab Content */
.tab-content {
  background: #ffffff;
  border-radius: 12px;
  padding: 0;
}

.tab-pane {
  padding: 0;
}

/* Professional Card Body Animations */
.card-body {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Client Main Tabs Styling */
#client-main-tabs {
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 1.5rem;
  background: transparent;
}

#client-main-tabs .nav-link {
  border: none;
  color: #64748b;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 12px 20px;
  margin-right: 8px;
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;
  position: relative;
}

#client-main-tabs .nav-link:hover {
  color: #33A0D9;
  background: rgba(51, 160, 217, 0.08);
  border: none;
}

#client-main-tabs .nav-link.active {
  color: #33A0D9;
  background: #ffffff;
  border: none;
  font-weight: 700;
  box-shadow: 0 -2px 8px rgba(51, 160, 217, 0.15);
}

#client-main-tabs .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #33A0D9, #2AB930);
  border-radius: 2px;
}

/* Client Main Tab Content */
#client-main-tabContent {
  background: #ffffff;
  border-radius: 12px;
  padding: 0;
}

  #client-main-tabContent .tab-pane {
    padding: 0;
  }

/* Box Profile Styling */
.card-body.box-profile {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

/* Activity Log Badge Styling */
.invoices-table .badge.bg-info {
  background: #33a0d91a !important;
  color: #33a0d9 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 8px 12px;
  border-radius: 6px;
}

.invoices-table .badge.bg-success {
  background: #f6fef4 !important;
  color: #2ab930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 8px 12px;
  border-radius: 6px;
}

.invoices-table .badge.bg-danger {
  background: #fef4f4 !important;
  color: #dc3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 8px 12px;
  border-radius: 6px;
}

.invoices-table .badge.bg-secondary {
  background: #f8f9fa !important;
  color: #6c757d !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 8px 12px;
  border-radius: 6px;
}

/* Responsive Design Enhancements */
@media (max-width: 768px) {
  .nav-tabs .nav-link {
    padding: 10px 16px;
    font-size: 0.9rem;
    margin-right: 4px;
  }
  
  #client-main-tabs .nav-link {
    padding: 10px 16px;
    font-size: 0.9rem;
    margin-right: 4px;
  }
}

@media (max-width: 576px) {
  .nav-tabs {
    margin-bottom: 1rem;
  }
  
  .nav-tabs .nav-link {
    padding: 8px 12px;
    font-size: 0.85rem;
    margin-right: 2px;
  }
  
  #client-main-tabs {
    margin-bottom: 1rem;
  }
  
  #client-main-tabs .nav-link {
    padding: 8px 12px;
    font-size: 0.85rem;
    margin-right: 2px;
  }
}
</style>
