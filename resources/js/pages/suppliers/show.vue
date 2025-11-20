<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row no-print mb-2">
      <div class="w-100 text-right float-right">
        <div class="d-flex justify-content-between" v-if="allData">
          <div class="btn-group">
            <ul class="nav nav-tabs" id="supplier-main-tabs" role="tablist">
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

    <div class="tab-content" id="supplier-main-tabContent">
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
                    <strong>{{ $t("Supplier ID") }}</strong>
                    <span class="float-right">{{
                      allData.supplierID | withPrefix(supplierPrefix)
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
                  <li class="list-group-item">
                    <strong>{{ $t("Type") }}</strong>
                    <span class="float-right">{{ $t(allData.type || 'Company') }}</span>
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
                </ul>
                <span
                  v-if="allData.status === 1"
                  class="btn-block btn bg-success"
                  >{{ $t("Active") }}</span
                >
                <span v-else class="badge bg-danger">{{
                  $t("Inactive")
                }}</span>
              </div>
            </div>
          </div>
          <!-- /.col -->

          <div class="col-md-12 col-lg-9">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-12">
                <div class="bg-info card-gradient-1">
                  <div class="card-content">
                    <div class="card-body pb-1">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="text-white">
                            {{ $t("Purchase Total") }}
                          </h6>
                          <h6 class="text-white">
                            {{ $t("Non Purchase Total") }}
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{ $t("Total") }}
                          </h4>
                        </div>
                        <div class="col-6 text-right">
                          <h6 class="text-white">
                            {{ parseFloat(allData.purchaseTotal || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <h6 class="text-white">
                            {{ parseFloat(allData.nonPurchaseTotalDue || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{ parseFloat((allData.purchaseTotal || 0) + (allData.nonPurchaseTotalDue || 0)).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-12">
                <div class="bg-danger card-gradient-2">
                  <div class="card-content">
                    <div class="card-body pb-1">
                      <div class="row">
                        <div class="col-6">
                          <h6 class="text-white">
                            {{ $t("Purchase Due") }}
                          </h6>
                          <h6 class="text-white">
                            {{ $t("Non Purchase Due") }}
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{ $t("Total Due") }}
                          </h4>
                        </div>
                        <div class="col-6 text-right">
                          <h6 class="text-white">
                            {{ parseFloat(allData.purchaseTotalDue || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <h6 class="text-white">
                            {{ parseFloat(allData.nonPurchaseCurrentDue || 0).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
                          </h6>
                          <hr />
                          <h4 class="text-white mb-1">
                            {{ parseFloat((allData.purchaseTotalDue || 0) + (allData.nonPurchaseCurrentDue || 0)).toFixed(2) }} <span class="saudi-riyal" dir="rtl">ê</span>
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
                $can('purchase-list') ||
                $can('purchase-return-list') ||
                $can('purchase-payment-list') ||
                $can('non-purchase-payment-list')
              "
            >
              <div class="card-header p-2">
                <div class="row">
                  <div class="col-md-10">
                    <ul class="nav nav-tabs" id="supplier-content-below-tab" role="tablist">
                      <li v-if="$can('purchase-list')" class="nav-item">
                        <a
                          class="nav-link active"
                          id="purchases-tab"
                          data-toggle="pill"
                          href="#purchases"
                          role="tab"
                          aria-controls="purchases-tab"
                          aria-selected="true"
                          @click="activeTab = 'purchases'"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          {{ $t("Purchases") }}
                          <span v-if="pagination" class="badge badge-dark">{{
                            pagination.total
                          }}</span></a
                        >
                      </li>
                      <li v-if="$can('purchase-return-list')" class="nav-item">
                        <a
                          @click="getSupplierReturns"
                          class="nav-link"
                          id="purchase-returns-tab"
                          data-toggle="pill"
                          href="#purchase-returns"
                          role="tab"
                          aria-controls="purchase-returns-tab"
                          aria-selected="false"
                        >
                          <i class="fas fa-undo-alt"></i>
                          {{ $t("Purchase Returns") }}
                          <span
                            v-if="returnPagination"
                            class="badge badge-dark"
                            >{{ returnPagination.total }}</span
                          ></a
                        >
                      </li>
                      <li v-if="$can('purchase-payment-list')" class="nav-item">
                        <a
                          @click="getSupplierPayments"
                          class="nav-link"
                          id="purchase-payments-tab"
                          data-toggle="pill"
                          href="#purchase-payments"
                          role="tab"
                          aria-controls="purchase-payments-tab"
                          aria-selected="false"
                        >
                          <i class="fas fa-receipt"></i>
                          {{
                            $t("Purchase Payments")
                          }}
                          <span
                            v-if="paymentPagination"
                            class="badge badge-dark"
                            >{{ paymentPagination.total }}</span
                          ></a
                        >
                      </li>
                      <li
                        v-if="$can('non-purchase-payment-list')"
                        class="nav-item"
                      >
                        <a
                          @click="getNonPurchaseTransactions"
                          class="nav-link"
                          id="non-purchase-transactions-tab"
                          data-toggle="pill"
                          href="#non-purchase-transactions"
                          role="tab"
                          aria-controls="non-purchase-transactions-tab"
                          aria-selected="false"
                        >
                          <i class="fas fa-money-bill"></i>
                          {{ $t("Non Purchase Transactions") }}
                          <span
                            v-if="transactionPagination"
                            class="badge badge-dark"
                            >{{ transactionPagination.total }}</span
                          ></a
                        >
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
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content" id="supplier-content-below-tabContent">
                  <div class="col-md-12" v-if="headerShow">
                    <h4 class="text-capitalize">
                      {{ activeTab.replace(/-/g, " ") }}
                    </h4>
                    <strong> {{ $t("Date") }}</strong> :
                    {{ date | moment("Do MMM, YYYY") }}<br />
                    <strong>{{ $t("Name") }}</strong> : {{ allData.name
                    }}<br />
                    <strong>{{ $t("Contact Number") }}</strong> :
                    {{ allData.phoneNumber }}<br />
                    <strong>{{ $t("Email") }}</strong> :
                    {{ allData.email }}<br />
                    <hr />
                  </div>
                  <!-- Purchases -->
                  <div
                    v-if="$can('purchase-list')"
                    class="tab-pane fade active show"
                    id="purchases"
                    role="tabpanel"
                    aria-labelledby="purchases-tab"
                  >
                    <div>
                      <div class="card-body p-0 position-relative">
                          <div class="row">
                            <div class="col-6 col-xl-8 mb-2 text-right">
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
                                @update="updateValues('purchases')"
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
                          <div class="row">
                            <div class="col-6 col-xl-4 mb-2">
                              <search
                                v-model="query"
                                @reset-pagination="resetPagination"
                                @reload="reload"
                              />
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
                                  @click="generatePDF()"
                                  href="#"
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
                                <router-link
                                  :to="{ name: 'suppliers.index' }"
                                  class="btn btn-primary"
                                  title="Back"
                                  v-tooltip="$t('Back')"
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
                        <table-loading v-show="loading" />
                        <div class="table-responsive table-custom mt-3">
                          <table class="table invoices-table">
                            <thead>
                                <th>{{ $t("#") }}</th>
                                <th>
                                  {{ $t("Purchase No") }}
                                </th>
                                <th>{{ $t("Date") }}</th>
                                <th>{{ $t("Subtotal") }}</th>
                                <th>{{ $t("Transport") }}</th>
                                <th>{{ $t("Discount") }}</th>
                                <th>{{ $t("Net Total") }}</th>
                                <th>{{ $t("Total Paid") }}</th>
                                <th>{{ $t("Total Due") }}</th>
                                <th>{{ $t("Status") }}</th>
                                <th
                                  v-if="
                                    $can('purchase-edit') ||
                                    $can('purchase-view') ||
                                    $can('purchase-delete')
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
                                    v-if="
                                      pagination && pagination.current_page > 1
                                    "
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
                                    v-if="$can('purchase-view')"
                                    :to="{
                                      name: 'purchases.show',
                                      params: { slug: data.slug },
                                    }"
                                  >
                                    {{ data.code | withPrefix(purchasePrefix) }}
                                  </router-link>
                                  <span v-else
                                    >{{
                                      data.code | withPrefix(purchasePrefix)
                                    }}
                                  </span>
                                </td>
                                <td>
                                  <span v-if="data.purchaseDate">{{
                                    data.purchaseDate | moment("Do MMM, YYYY")
                                  }}</span>
                                </td>
                                <td>{{ data.subTotal  }} <span class="saudi-riyal">ê</span></td>
                                <td>{{ data.transport  }} <span class="saudi-riyal">ê</span></td>
                                <td>{{ data.totalDiscount  }} <span class="saudi-riyal">ê</span></td>
                                <td>{{ data.purchaseTotal  }} <span class="saudi-riyal">ê</span></td>
                                <td>{{ data.totalPaid  }} <span class="saudi-riyal">ê</span></td>
                                <td>{{ data.due  }} <span class="saudi-riyal">ê</span></td>
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
                                    $can('purchase-edit') ||
                                    $can('purchase-view') ||
                                    $can('purchase-delete')
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
                                        <li v-if="$can('purchase-view')">
                                          <router-link :to="{ name: 'purchases.show', params: { slug: data.slug } }">
                                            <i class="fas fa-eye"></i>
                                            {{ $t('View') }}
                                    </router-link>
                                        </li>
                                        <li v-if="$can('purchase-edit')">
                                          <router-link :to="{ name: 'purchases.edit', params: { slug: data.slug } }">
                                            <i class="fas fa-edit"></i>
                                            {{ $t('Edit') }}
                                    </router-link>
                                        </li>
                                        <li v-if="$can('purchase-delete')">
                                          <a href="#" @click.prevent="deletePurchaseData(data.slug)">
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
                                <td colspan="11">
                                  <EmptyTable />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <!-- /.card-body -->
                      <div class="card-footer">
                        <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('purchases')"
                              v-model="perPage"
                              class="form-control form-control-sm ml-1"
                            >
                              <!-- options component -->
                              <option
                                v-for="(option, i) in options"
                                :value="option.value"
                                :key="i"
                              >
                                {{ option.text }}
                              </option>
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

                  <!-- purchase-returns -->
                  <div
                    v-if="$can('purchase-return-list')"
                    class="tab-pane fade"
                    id="purchase-returns"
                    role="tabpanel"
                    aria-labelledby="purchase-returns-tab"
                  >
                    <div>
                      <div class="card-body p-0 position-relative">
                        <div
                          class="row no-print"
                          id="element-to-hide"
                          data-html2canvas-ignore="true"
                        >
                          <div class="col-12 col-md-9 mb-2">
                            <search
                              v-model="returnsQuery"
                              @reset-pagination="resetReturnPagination"
                              @reload="returnsReload"
                            />
                          </div>
                          <div class="col-12 col-md-3 pull-right text-right">
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
                              @update="updateValues('purchase-returns')"
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
                        <table-loading v-show="returnLoading" />
                        <div class="table-responsive table-custom mt-3">
                          <table class="table invoices-table">
                            <thead>
                                <th>{{ $t("#") }}</th>
                                <th>
                                  {{ $t("Return No") }}
                                </th>
                                <th>
                                  {{ $t("Purchase No") }}
                                </th>
                                <th>
                                  {{
                                    $t("Return Reason")
                                  }}
                                </th>
                                <th>{{ $t("Cost of Return Products") }}</th>
                                <th>{{ $t("Date") }}</th>
                                <th>{{ $t("Status") }}</th>
                                <th
                                  v-if="
                                    $can('purchase-return-edit') ||
                                    $can('purchase-return-view') ||
                                    $can('purchase-return-delete')
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
                                v-show="allReturns && allReturns.length"
                                v-for="(data, i) in allReturns"
                                :key="i"
                              >
                                <td>
                                  <span
                                    v-if="
                                      returnPagination &&
                                      returnPagination.current_page > 1
                                    "
                                  >
                                    {{
                                      returnPagination.per_page *
                                        (returnPagination.current_page - 1) +
                                      (i + 1)
                                    }}
                                  </span>
                                  <span v-else>{{ i + 1 }}</span>
                                </td>
                                <td>
                                  <router-link
                                    v-if="$can('purchase-return-view')"
                                    :to="{
                                      name: 'purchaseReturns.show',
                                      params: { slug: data.slug },
                                    }"
                                  >
                                    {{
                                      data.purReturnNo
                                        | withPrefix(purchaseReturnPrefix)
                                    }}
                                  </router-link>
                                  <span v-else>{{
                                    data.purReturnNo
                                      | withPrefix(purchaseReturnPrefix)
                                  }}</span>
                                </td>
                                <td>
                                  {{
                                    data.purchaseNo | withPrefix(purchasePrefix)
                                  }}
                                </td>
                                <td>{{ data.reason }}</td>
                                <td>{{ data.totalReturn  }} <span class="saudi-riyal">ê</span></td>
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
                                    $can('purchase-return-edit') ||
                                    $can('purchase-return-view') ||
                                    $can('purchase-return-delete')
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
                                        <li v-if="$can('purchase-return-view')">
                                          <router-link :to="{ name: 'purchaseReturns.show', params: { slug: data.slug } }">
                                            <i class="fas fa-eye"></i>
                                            {{ $t('View') }}
                                    </router-link>
                                        </li>
                                        <li v-if="$can('purchase-return-edit')">
                                          <router-link :to="{ name: 'purchaseReturns.edit', params: { slug: data.slug } }">
                                            <i class="fas fa-edit"></i>
                                            {{ $t('Edit') }}
                                    </router-link>
                                        </li>
                                        <li v-if="$can('purchase-return-delete')">
                                          <a href="#" @click.prevent="deletePurchaseReturnData(data.slug)">
                                            <i class="fas fa-trash"></i>
                                            {{ $t('Delete') }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr v-show="!loading && !allReturns.length">
                                <td colspan="8">
                                  <EmptyTable />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <!-- /.card-body -->
                      <div class="card-footer">
                        <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('purchase-returns')"
                              v-model="perPage"
                              class="form-control form-control-sm ml-1"
                            >
                              <!-- options component -->
                              <option
                                v-for="(option, i) in options"
                                :value="option.value"
                                :key="i"
                              >
                                {{ option.text }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <!-- pagination-start -->
                        <pagination
                          v-if="
                            returnPagination && returnPagination.last_page > 1
                          "
                          :pagination="returnPagination"
                          :offset="5"
                          class="justify-flex-end"
                          @paginate="returnsPaginate"
                        />
                        <!-- pagination-end -->
                      </div>
                      </div>
                    </div>
                  </div>

                  <!-- purchase-payments -->
                  <div
                    v-if="$can('purchase-payment-list')"
                    class="tab-pane fade"
                    id="purchase-payments"
                    role="tabpanel"
                    aria-labelledby="purchase-payments-tab"
                  >
                    <div>
                      <div class="card-body p-0 position-relative">
                        <div
                          class="row no-print"
                          id="element-to-hide"
                          data-html2canvas-ignore="true"
                        >
                          <div class="col-12 col-md-9 mb-2">
                            <search
                              v-model="paymentsQuery"
                              @reset-pagination="resetPaymetnsPagination"
                              @reload="paymentsReload"
                            />
                          </div>
                          <div class="col-12 col-md-3 pull-right text-right">
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
                              @update="updateValues('purchase-payments')"
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
                                <th>
                                  {{ $t("Purchase No") }}
                                </th>
                                <th>{{ $t("Total") }}</th>
                                <th>{{ $t("Paid Amount") }}</th>
                                <th>{{ $t("Account") }}</th>
                                <th>{{ $t("Payment Date") }}</th>
                                <th>{{ $t("Status") }}</th>
                                <th
                                  v-if="
                                    $can('purchase-payment-edit') ||
                                    $can('purchase-payment-view') ||
                                    $can('purchase-payment-delete')
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
                                v-show="allPayments && allPayments.length"
                                v-for="(data, i) in allPayments"
                                :key="i"
                              >
                                <td>
                                  <span
                                    v-if="
                                      paymentPagination &&
                                      paymentPagination.current_page > 1
                                    "
                                  >
                                    {{
                                      paymentPagination.per_page *
                                        (paymentPagination.current_page - 1) +
                                      (i + 1)
                                    }}
                                  </span>
                                  <span v-else>{{ i + 1 }}</span>
                                </td>
                                <td v-if="data.purchase">
                                  <router-link
                                    v-if="$can('purchase-view')"
                                    :to="{
                                      name: 'purchases.show',
                                      params: { slug: data.purchase.slug },
                                    }"
                                  >
                                    {{ data.purchase.purchaseNo }}
                                  </router-link>
                                  <span v-else>{{
                                    data.purchase.purchaseNo
                                  }}</span>
                                </td>

                                <td v-if="data.purchase">
                                  {{
                                    data.purchase.purchaseTotal 
                                  }} <span class="saudi-riyal">ê</span>
                                </td>
                                <td>{{ data.amount  }} <span class="saudi-riyal">ê</span></td>
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
                                    $can('purchase-payment-edit') ||
                                    $can('purchase-payment-view') ||
                                    $can('purchase-payment-delete')
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
                                        <li v-if="$can('purchase-payment-view')">
                                          <router-link :to="{ name: 'purchasePayments.show', params: { slug: data.slug } }">
                                            <i class="fas fa-eye"></i>
                                            {{ $t('View') }}
                                    </router-link>
                                        </li>
                                        <li v-if="$can('purchase-payment-edit')">
                                          <router-link :to="{ name: 'purchasePayments.edit', params: { slug: data.slug } }">
                                            <i class="fas fa-edit"></i>
                                            {{ $t('Edit') }}
                                    </router-link>
                                        </li>
                                        <li v-if="$can('purchase-payment-delete')">
                                          <a href="#" @click.prevent="deletePaymentData(data.slug)">
                                            <i class="fas fa-trash"></i>
                                            {{ $t('Delete') }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr v-show="!loading && !allPayments.length">
                                <td colspan="8">
                                  <EmptyTable />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <!-- /.card-body -->
                      <div class="card-footer">
                        <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="updatePerPager('purchases-payments')"
                              v-model="perPage"
                              class="form-control form-control-sm ml-1"
                            >
                              <!-- options component -->
                              <option
                                v-for="(option, i) in options"
                                :value="option.value"
                                :key="i"
                              >
                                {{ option.text }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <!-- pagination-start -->
                        <pagination
                          v-if="
                            paymentPagination && paymentPagination.last_page > 1
                          "
                          :pagination="
                            allPayments
                              ? paymentPagination
                              : { current_page: 1 }
                          "
                          :offset="5"
                          class="justify-flex-end"
                          @paginate="paymentsPaginate"
                        />
                        <!-- pagination-end -->
                      </div>
                      </div>
                    </div>
                  </div>

                  <!-- non-purchase-transactions -->
                  <div
                    v-if="$can('non-purchase-payment-list')"
                    class="tab-pane fade"
                    id="non-purchase-transactions"
                    role="tabpanel"
                    aria-labelledby="non-purchase-transactions-tab"
                  >
                    <div>
                      <div class="card-body p-0 position-relative">
                        <div
                          class="row no-print"
                          id="element-to-hide"
                          data-html2canvas-ignore="true"
                        >
                          <div class="col-12 col-md-9 mb-2">
                            <search
                              v-model="transactionsQuery"
                              @reset-pagination="resetTransactionsPagination"
                              @reload="transactionsReload"
                            />
                          </div>
                          <div class="col-12 col-md-3 pull-right text-right">
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
                              @update="
                                updateValues('non-purchase-transactions')
                              "
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
                        <table-loading v-show="transactionLoading" />
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
                                    $can('non-purchase-payment-view') ||
                                    $can('non-purchase-payment-edit') ||
                                    $can('non-purchase-payment-delete')
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
                                v-show="
                                  allTransactions && allTransactions.length
                                "
                                v-for="(data, i) in allTransactions"
                                :key="i"
                              >
                                <td>
                                  <span
                                    v-if="
                                      transactionPagination &&
                                      transactionPagination.current_page > 1
                                    "
                                  >
                                    {{
                                      transactionPagination.per_page *
                                        (transactionPagination.current_page -
                                          1) +
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
                                <td>{{ data.amount  }} <span class="saudi-riyal">ê</span></td>
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
                                    $can('non-purchase-payment-view') ||
                                    $can('non-purchase-payment-edit') ||
                                    $can('non-purchase-payment-delete')
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
                                        <li v-if="$can('non-purchase-payment-edit')">
                                          <router-link :to="{ name: 'nonPurchasePayments.edit', params: { slug: data.slug } }">
                                            <i class="fas fa-edit"></i>
                                            {{ $t('Edit') }}
                                    </router-link>
                                        </li>
                                        <li v-if="$can('non-purchase-payment-delete')">
                                          <a href="#" @click.prevent="deleteTransactionData(data.slug)">
                                            <i class="fas fa-trash"></i>
                                            {{ $t('Delete') }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr v-show="!loading && !allTransactions.length">
                                <td colspan="7">
                                  <EmptyTable />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <!-- /.card-body -->
                      <div class="card-footer">
                        <div class="dtable-footer">
                        <div class="form-group row display-per-page">
                          <label>{{ $t("per_page") }} </label>
                          <div>
                            <select
                              @change="
                                updatePerPager('non-purchase-transactions')
                              "
                              v-model="perPage"
                              class="form-control form-control-sm ml-1"
                            >
                              <!-- options component -->
                              <option
                                v-for="(option, i) in options"
                                :value="option.value"
                                :key="i"
                              >
                                {{ option.text }}
                              </option>
                            </select>
                          </div>
                        </div>
                        <!-- pagination-start -->
                        <pagination
                          v-if="
                            transactionPagination &&
                            transactionPagination.last_page > 1
                          "
                          :pagination="transactionPagination"
                          :offset="5"
                          class="justify-flex-end"
                          @paginate="transactionsPaginate"
                        />
                        <!-- pagination-end -->
                      </div>
                      </div>
                    </div>
                  </div>

                  <!--ledger-->
                  <div class="tab-pane fade print-area" id="ledger" role="tabpanel" aria-labelledby="ledger-tab">
                    <div class="row no-print">
                      <div class="col-6 col-xl-4 mb-2">
                        <search
                          v-model="ledgerSearchQuery"
                          @reset-pagination="resetLedgerPagination()"
                          @reload="ledgerReload"
                        />
                      </div>
                    </div>
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
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(data, i) in filteredLedgerItems" :key="i">
                            <td>{{ i + 1 }}</td>
                            <td>
                              {{ data.original_date | moment("Do MMM, YYYY") }}
                            </td>
                            <td>
                              <router-link
                                v-if="
                                  $can('purchase-view') &&
                                  data.action_type == 'purchase'
                                "
                                :to="{
                                  name: 'purchases.show',
                                  params: { slug: data.slug },
                                }"
                              >
                                {{ data.particulars }}
                              </router-link>
                              <router-link
                                v-if="data.action_type == 'purchase-payment'"
                                :to="{
                                  name: 'purchasePayments.show',
                                  params: { slug: data.slug },
                                }"
                              >
                                {{ data.particulars }}
                              </router-link>
                              <router-link
                                v-if="
                                  $can('purchase-return-view') &&
                                  data.action_type == 'purchase-return'
                                "
                                :to="{
                                  name: 'purchaseReturns.show',
                                  params: { slug: data.slug },
                                }"
                              >
                                {{ data.particulars }}
                              </router-link>
                            </td>
                            <td>{{ data.credit  }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ data.debit  }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ data.discount  }} <span class="saudi-riyal">ê</span></td>
                            <td>{{ data.balance  }} <span class="saudi-riyal">ê</span></td>
                          </tr>
                          <tr v-if="filteredLedgerItems.length > 0 && filteredLedgerItems[filteredLedgerItems.length - 1]">
                            <td>{{ filteredLedgerItems.length + 1 }}</td>
                            <td>{{ date | moment("Do MMM, YYYY") }}</td>
                            <td>
                              {{ $t("Non Purchase Due") }}
                            </td>
                            <td>{{ 0  }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{ allData.nonPurchaseCurrentDue  }} <span class="saudi-riyal">ê</span>
                            </td>
                            <td>{{ 0  }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{
                                (filteredLedgerItems[filteredLedgerItems.length - 1].balance +
                                  allData.nonPurchaseCurrentDue)
                              }}<span class="saudi-riyal">ê</span>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr v-if="filteredLedgerItems.length > 0 && filteredLedgerItems[filteredLedgerItems.length - 1]">
                            <td colspan="3">{{ $t("Summery") }}</td>
                            <td>{{ ledgerTotalCredit  }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{
                                (ledgerTotalDebit +
                                  allData.nonPurchaseCurrentDue)
                              }}<span class="saudi-riyal">ê</span>
                            </td>
                            <td>{{ ledgerTotalDiscount  }} <span class="saudi-riyal">ê</span></td>
                            <td>
                              {{
                                filteredLedgerItems.length > 0
                                  ? (filteredLedgerItems[filteredLedgerItems.length - 1].balance +
                                      allData.nonPurchaseCurrentDue)
                                  : allData.nonPurchaseCurrentDue
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
                    <td>{{ $t(data.description) }}</td>
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

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Supplier Details") };
  },
  mixins: [avatarMixin],
  components: {
    DateRangePicker,
  },
  data: () => ({
    breadcrumbsCurrent: "Supplier Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Suppliers",
        url: "suppliers.index",
      },
      {
        name: "Details",
        url: "",
      },
    ],
    url: null,
    query: "",
    allData: "",
    showModal: false,
    allReturns: "",
    returnsQuery: "",
    returnPagination: "",
    returnLoading: false,
    allPayments: "",
    paymentsQuery: "",
    paymentPagination: "",
    paymentsLoading: false,
    allTransactions: "",
    transactionsQuery: "",
    transactionPagination: "",
    transactionLoading: false,
    supplierPrefix: "",
    purchasePrefix: "",
    purchaseReturnPrefix: "",
    activitySearchQuery: "",
    allActivityLog: "",
    allActivityLogPagination: "",
    activityLoading: false,
    perPage: 10,
    options: [
      { value: "10", text: "10" },
      { value: "25", text: "25" },
      { value: "50", text: "50" },
      { value: "100", text: "100" },
    ],
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
    ledgerSearchQuery: "",
    ledgerTotalDiscount: 0,
    ledgerTotalDebit: 0,
    ledgerTotalCredit: 0,
    finalBalance: 0,
    headerShow: false,
    date: new Date().toISOString().slice(0, 10),
    activeTab: "purchases",
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
    // Filter ledger items based on search query
    filteredLedgerItems() {
      if (!this.ledgerSearchQuery || this.ledgerSearchQuery.trim() === "") {
        return this.ledgerItems;
      }
      
      const query = this.ledgerSearchQuery.toLowerCase().trim();
      
      return this.ledgerItems.filter((item) => {
        // Search in date (formatted)
        const formattedDate = moment(item.original_date).format("Do MMM, YYYY").toLowerCase();
        if (formattedDate.includes(query)) return true;
        
        // Search in particulars (transaction info)
        const particulars = (item.particulars || "").toLowerCase();
        if (particulars.includes(query)) return true;
        
        // Search in action type
        const actionType = (item.action_type || "").toLowerCase();
        if (actionType.includes(query)) return true;
        
        // Search in credit amount
        const credit = String(item.credit || "").toLowerCase();
        if (credit.includes(query)) return true;
        
        // Search in debit amount
        const debit = String(item.debit || "").toLowerCase();
        if (debit.includes(query)) return true;
        
        // Search in discount amount
        const discount = String(item.discount || "").toLowerCase();
        if (discount.includes(query)) return true;
        
        // Search in balance amount
        const balance = String(item.balance || "").toLowerCase();
        if (balance.includes(query)) return true;
        
        return false;
      });
    },
  },
  watch: {
    // watch purchase search data
    query: function (newQ, oldQ) {
      if (newQ === "") {
        if (this.dateRange.startDate && this.dateRange.endDate) {
          this.searchPurchaseData();
        } else {
          this.getSupplierPurchases();
        }
      } else {
        this.searchPurchaseData();
      }
    },
    // watch return search data
    returnsQuery: function (newQ, oldQ) {
      if (newQ === "") {
        this.getSupplierReturns();
      } else {
        this.searchReturnData();
      }
    },
    // watch payment search data
    paymentsQuery: function (newQ, oldQ) {
      if (newQ === "") {
        this.getSupplierPayments();
      } else {
        this.searchPaymentData();
      }
    },
    // watch non purchase search data
    transactionsQuery: function (newQ, oldQ) {
      if (newQ === "") {
        this.getNonPurchaseTransactions();
      } else {
        this.searchNonPurchaseTransactionData();
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
    this.getSupplier();
    this.getSupplierPurchases();
    this.supplierPrefix = this.appInfo.supplierPrefix;
    this.purchasePrefix = this.appInfo.purchasePrefix;
    this.purchaseReturnPrefix = this.appInfo.purchaseReturnPrefix;
    Fire.$on("AfterDelete", () => {
      this.getSupplierPurchases();
      this.getSupplierReturns();
      this.getSupplierPayments();
      this.getNonPurchaseTransactions();
    });
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    switchTab(tabName) {
      switch (tabName) {
        case "purchases":
          this.searchPurchaseData();
          break;
        case "purchase-returns":
          this.searchReturnData();
          break;
        case "purchase-payments":
          this.searchPaymentData();
          break;
        case "non-purchase-transactions":
          this.searchNonPurchaseTransactionData();
          break;
      }
    },

    async loadInitialData() {
      this.getSupplier();
      this.getSupplierPurchases();
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
    async refreshTable(tabName) {
      this.query = "";
      this.dateRange.startDate = null;
      this.dateRange.endDate = null;
      if (tabName === "activity-log") {
        if (this.allActivityLogPagination) {
          this.allActivityLogPagination.current_page = 1;
        }
        await this.getActivity();
        this.$toast.success(
          this.$t("Refreshed"),
          this.$t("Activity log has been refreshed successfully")
        );
      } else {
        setTimeout(
          function () {
            this.dateRange.startDate = "";
            this.dateRange.endDate = "";
            this.switchTab(tabName);
          }.bind(this),
          1000
        );
      }
    },

    // get the supplier
    async getSupplier() {
      const { data } = await axios.get(
        window.location.origin + "/api/suppliers/" + this.$route.params.slug
      );
      this.allData = data.data;
    },

    // update per page count
    updatePerPager(tabName) {
      this.pagination.current_page = 1;
      this.returnPagination.hasOwnProperty("current_page")
        ? (this.returnPagination.current_page = 1)
        : "";
      this.paymentPagination.hasOwnProperty("current_page")
        ? (this.paymentPagination.current_page = 1)
        : "";
      this.transactionPagination.hasOwnProperty("current_page")
        ? (this.transactionPagination.current_page = 1)
        : "";

      this.switchTab(tabName);
    },

    // get the supplier purchases
    async getSupplierPurchases() {
      this.activeTab = "purchases";
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      this.$store.state.operations.loading = true;
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/purchases/supplier/" + this.$route.params.slug + "?page=",
        currentPage: currentPage + "&perPage=" + this.perPage,
      });
    },

    // search purchases
    async searchPurchaseData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      await this.$store.dispatch("operations/searchData", {
        path: "/api/purchases/supplier/" + this.$route.params.slug + "/search",
        term: this.query,
        currentPage: currentPage + "&perPage=" + this.perPage,
        startDate: this.dateRange.startDate,
        endDate: this.dateRange.endDate,
      });
    },

    // Pagination
    async paginate() {
      this.query === ""
        ? this.getSupplierPurchases()
        : this.searchPurchaseData();
    },

    // Reset purchase pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    //Reload purchases after search
    async reload() {
      this.query = "";
    },

    // Get the supplier returns
    async getSupplierReturns() {
      this.activeTab = "purchase-returns";
      this.returnLoading = true;
      let currentPage = this.allReturns
        ? this.returnPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/purchase-returns/supplier/" +
          this.$route.params.slug +
          "?page=" +
          currentPage +
          "&perPage=" +
          this.perPage
      );
      this.allReturns = data.data;
      this.returnPagination = data.meta;
      this.returnLoading = false;
    },

    // search returns
    async searchReturnData() {
      this.returnLoading = true;
      let currentPage = this.allReturns
        ? this.returnPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/purchase-returns/supplier/" +
          this.$route.params.slug +
          "/search" +
          "?term=" +
          this.returnsQuery +
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
      this.returnPagination = data.meta;
      this.returnLoading = false;
    },

    // Returns pagination
    async returnsPaginate() {
      this.returnsQuery === ""
        ? this.getSupplierReturns()
        : this.searchReturnData();
    },

    // Reset return pagination
    async resetReturnPagination() {
      this.returnPagination.current_page = 1;
    },

    // Reload returns after search
    async returnsReload() {
      this.returnsQuery = "";
      await this.searchReturnData();
    },

    // Get the supplier payments
    async getSupplierPayments() {
      this.activeTab = "purchase-payments";
      this.paymentsLoading = true;
      let currentPage = this.allPayments
        ? this.paymentPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/payments/supplier/" +
          this.$route.params.slug +
          "?page=" +
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
          "/api/payments/supplier/" +
          this.$route.params.slug +
          "/search" +
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
      this.paymentsQuery === ""
        ? this.getSupplierPayments()
        : this.searchPaymentData();
    },

    // Reset payments pagination
    async resetPaymetnsPagination() {
      this.paymentPagination.current_page = 1;
    },

    // Reload payments after search
    async paymentsReload() {
      this.paymentsQuery = "";
      await this.searchPaymentData();
    },

    // Get the supplier non purchase transactions
    async getNonPurchaseTransactions() {
      this.activeTab = "non-purchase-transactions";
      this.transactionLoading = true;
      let currentPage = this.allTransactions
        ? this.transactionPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/non-purchases/supplier/" +
          this.$route.params.slug +
          "?page=" +
          currentPage +
          "&perPage=" +
          this.perPage
      );
      this.allTransactions = data.data;
      this.transactionPagination = data.meta;
      this.transactionLoading = false;
    },

    // search non purchase transactions
    async searchNonPurchaseTransactionData() {
      this.transactionLoading = true;
      let currentPage = this.allTransactions
        ? this.transactionPagination.current_page
        : 1;
      const { data } = await axios.get(
        window.location.origin +
          "/api/non-purchases/supplier/" +
          this.$route.params.slug +
          "/search" +
          "?term=" +
          this.transactionsQuery +
          "&page=" +
          currentPage +
          "&perPage=" +
          this.perPage +
          "&startDate=" +
          this.dateRange.startDate +
          "&endDate=" +
          this.dateRange.endDate
      );
      this.allTransactions = data.data;
      this.transactionPagination = data.meta;
      this.transactionLoading = false;
    },

    // Non purchase transactions pagination
    async transactionsPaginate() {
      this.query === ""
        ? this.getNonPurchaseTransactions()
        : this.searchNonPurchaseTransactionData();
    },

    // Reset non purchase transactions pagination
    async resetTransactionsPagination() {
      this.transactionPagination.current_page = 1;
    },

    // Reload on purchase transactions after search
    async transactionsReload() {
      this.transactionsQuery = "";
      await this.searchNonPurchaseTransactionData();
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
          "/api/supplier/" +
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

    // Reset ledger pagination
    resetLedgerPagination() {
      // Ledger doesn't use pagination, but method is needed for search component compatibility
    },

    // Reload ledger after search
    async ledgerReload() {
      this.ledgerSearchQuery = "";
    },

    // generate pdf
    async generatePDF() {
      // Get the HTML content to be converted
      this.headerShow = true;
      const element = document.getElementById("content-to-pdf");
      setTimeout(async () => {
        // Options for PDF generation
        const options = {
          margin: 5,
          filename: this.activeTab + ".pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
        };

        // Generate PDF from HTML content
        html2pdf().from(element).set(options).save();
        this.headerShow = false;
      }, 2000);
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
      let modelName = "Supplier";

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
      let modelName = "Supplier";

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

    // delete purchase data
    async deletePurchaseData(slug) {
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
              path: "/api/purchases/",
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

    // delete purchase return data
    async deletePurchaseReturnData(slug) {
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
              path: "/api/purchase-returns/",
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

    // delete purchase payment data
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
              path: "/api/payments/purchase/",
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

    // delete non purchase payment data
    async deleteTransactionData(slug) {
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
              path: "/api/payments/non-purchase/",
              slug: slug,
            })
            .then((response) => {
              if (response === true) {
                Swal.fire(
                  this.$t("Deleted!"),
                  this.$t("Deleted successfully."),
                  "success"
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

    // Format phone number
    formatPhoneNumber(phoneNumber) {
      return phoneNumber;
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

    // Toggle action menu
    toggleAction(index) {
      this.openActionIndex = this.openActionIndex === index ? null : index;
      if (this.openActionIndex === index) {
        this.$nextTick(() => {
          this.positionDropdown(index);
        });
      }
    },

    // Position dropdown similar to purchases (bills) index
    positionDropdown(index) {
      const button = document.querySelector(`[data-action-index="${index}"]`);
      if (button) {
        const rect = button.getBoundingClientRect();
        const menu = document.querySelector('.action-menu');
        if (menu) {
          const isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
          if (isRTL) {
            menu.style.left = '45px';
            menu.style.right = 'auto';
          } else {
            menu.style.left = `${rect.right - 200}px`; // 200px is min-width
            menu.style.right = 'auto';
          }
          menu.style.top = `${rect.bottom + 8}px`;
        }
      }
    },

    handleScroll() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },

    handleResize() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
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
  },
};
</script>

<style scoped>
tfoot {
  font-weight: 700;
}

/* Box Profile Styling */
.card-body.box-profile {
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

/* Action dropdown styles */
.action-dropdown {
  position: relative;
  display: inline-block;
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
  position: fixed;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 8px 20px 0px #00000014;
  border-radius: 12px;
  min-width: 200px;
  z-index: 99999;
  max-height: 80vh;
  overflow: hidden;
  animation: slideInDown 0.3s ease-out;
  margin-top: 4px;
  /* Floating approach - no layout impact */
  pointer-events: auto;
  transform: translateZ(0); /* Hardware acceleration */
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

/* Table action menu positioning - Floating approach */
.invoices-table td {
  position: relative;
  overflow: visible;
}

.invoices-table .action-dropdown {
  position: static;
}

.invoices-table .action-menu {
  position: fixed;
  top: auto;
  right: auto;
  left: auto;
  z-index: 1000;
  /* Floating approach - positioned dynamically via JavaScript */
  transform: translateZ(0); /* Hardware acceleration for smooth rendering */
  will-change: transform, opacity; /* Optimize for animations */
}

/* RTL support for table action menu - Floating approach */
[dir="rtl"] .invoices-table .action-menu {
  right: auto;
  left: auto;
  /* RTL positioning handled by JavaScript */
}

/* Card Gradient Styling */
.card-gradient-1 {
  background: linear-gradient(135deg, #449eae 0%, #3a8a98 100%) !important;
}

.card-gradient-2 {
  background: linear-gradient(135deg, #377578 0%, #2d5f61 100%) !important;
}

/* Professional Tab Styling - Main Tabs */
#supplier-main-tabs {
  border-bottom: 2px solid #e2e8f0;
  margin-bottom: 1.5rem;
  background: transparent;
}

#supplier-main-tabs .nav-link {
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

#supplier-main-tabs .nav-link:hover {
  color: #33A0D9;
  background: rgba(51, 160, 217, 0.08);
  border: none;
}

#supplier-main-tabs .nav-link.active {
  color: #33A0D9;
  background: #ffffff;
  border: none;
  font-weight: 700;
  box-shadow: 0 -2px 8px rgba(51, 160, 217, 0.15);
}

#supplier-main-tabs .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #33A0D9, #2AB930);
  border-radius: 2px;
}

/* Supplier Main Tab Content */
#supplier-main-tabContent {
  background: #ffffff;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
}

#supplier-main-tabContent .tab-pane {
  padding: 0;
}

/* Professional Tab Styling - Sub Tabs */
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
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

/* Table Styling */
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

/* Button Styling */
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

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
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
  
  #supplier-main-tabs .nav-link {
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
  
  #supplier-main-tabs {
    margin-bottom: 1rem;
  }

  #supplier-main-tabs .nav-link {
    padding: 8px 12px;
    font-size: 0.85rem;
    margin-right: 2px;
  }
}
</style>
