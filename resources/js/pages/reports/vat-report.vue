<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <!-- Filters Section -->
            <div class="row no-print mb-3">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h5 class="card-title mb-0">
                      <button
                        class="btn btn-link p-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#filtersCollapse"
                        aria-expanded="true"
                        aria-controls="filtersCollapse"
                      >
                        <i class="fas fa-filter"></i> {{ $t("Filters") }}
                      </button>
                    </h5>
                  </div>
                  <div class="collapse show" id="filtersCollapse">
                    <div class="card-body">
                      <div class="row">
                        <!-- Fiscal Year Filter -->
                        <div class="col-md-3">
                          <div class="form-group">
                            <label for="fiscal_year_id">{{ $t("Fiscal Year") }}</label>
                            <v-select
                              v-model="filters.fiscalYearId"
                              :options="fiscalYears"
                              :reduce="year => year.id"
                              label="name"
                              :placeholder="$t('Select Fiscal Year')"
                              :searchable="true"
                              :clearable="true"
                              :loading="loadingFiscalYears"
                              @search="searchFiscalYears"
                              @input="onFiscalYearChange"
                            />
                          </div>
                        </div>

                        <!-- Accounting Period Filter -->
                        <div class="col-md-3">
                          <div class="form-group">
                            <label for="accounting_period_id">{{ $t("Accounting Period") }}</label>
                            <v-select
                              v-model="filters.accountingPeriodId"
                              :options="accountingPeriods"
                              :reduce="period => period.id"
                              label="name"
                              :placeholder="$t('Select Accounting Period')"
                              :searchable="true"
                              :clearable="true"
                              :loading="loadingAccountingPeriods"
                              :disabled="!filters.fiscalYearId"
                              @search="searchAccountingPeriods"
                              @input="onAccountingPeriodChange"
                            />
                          </div>
                        </div>

                        <!-- Date Range Filter -->
                        <div class="col-md-3">
                          <div class="form-group">
                            <label for="from_date">{{ $t("From Date") }}</label>
                            <input
                              type="date"
                              v-model="filters.fromDate"
                              class="form-control"
                              :placeholder="$t('From Date')"
                              :disabled="filters.fiscalYearId || filters.accountingPeriodId"
                            />
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="form-group">
                            <label for="to_date">{{ $t("To Date") }}</label>
                            <input
                              type="date"
                              v-model="filters.toDate"
                              class="form-control"
                              :placeholder="$t('To Date')"
                              :disabled="filters.fiscalYearId || filters.accountingPeriodId"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-12">
                          <button
                            @click="generateReport"
                            class="btn btn-primary"
                            :disabled="loading"
                          >
                            <i v-if="loading" class="fas fa-spinner fa-spin"></i>
                            <i v-else class="fas fa-search"></i>
                            {{ $t('Generate Report') }}
                          </button>
                          <button type="button" class="btn btn-secondary ml-2" @click="clearFilters">
                            <i class="fas fa-times"></i>
                            {{ $t('Clear') }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search
                  v-model="query"
                  @reset-pagination="resetPagination()"
                  @reload="reload"
                />
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <div class="btn-group c-w-100">
                  <a
                    @click="refreshTable()"
                    href="#"
                    v-tooltip="'Refresh'"
                    class="btn btn-success refresh-btn"
                  >
                    <i class="fas fa-sync"></i>
                  </a>
                  <a
                    :href="exportExcelUrl"
                    v-tooltip="$t('Export to Excel')"
                    class="btn export-excel-btn"
                    title="Export to Excel"
                  >
                    <svg
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.625 17.5001C11.625 17.699 11.546 17.8898 11.4053 18.0305C11.2647 18.1711 11.0739 18.2501 10.875 18.2501H8.24998C8.05107 18.2501 7.86031 18.1711 7.71966 18.0305C7.579 17.8898 7.49998 17.699 7.49998 17.5001V12.2501C7.49998 12.0512 7.579 11.8604 7.71966 11.7198C7.86031 11.5791 8.05107 11.5001 8.24998 11.5001C8.4489 11.5001 8.63966 11.5791 8.78031 11.7198C8.92097 11.8604 8.99998 12.0512 8.99998 12.2501V16.7501H10.875C11.0739 16.7501 11.2647 16.8291 11.4053 16.9698C11.546 17.1104 11.625 17.3012 11.625 17.5001ZM5.68592 11.6398C5.60578 11.5826 5.51514 11.5417 5.41918 11.5194C5.32323 11.4972 5.22384 11.4941 5.12668 11.5103C5.02953 11.5265 4.93651 11.5617 4.85295 11.6138C4.76939 11.6659 4.69692 11.734 4.63967 11.8142L3.37498 13.5851L2.1103 11.8142C2.05509 11.7292 1.98324 11.6564 1.89909 11.5999C1.81495 11.5435 1.72024 11.5047 1.62069 11.4859C1.52114 11.4671 1.41882 11.4687 1.31988 11.4905C1.22095 11.5123 1.12747 11.554 1.04507 11.6129C0.962677 11.6719 0.893077 11.7469 0.840473 11.8335C0.787869 11.9201 0.753352 12.0164 0.739005 12.1167C0.724657 12.217 0.730776 12.3191 0.756994 12.417C0.783211 12.5148 0.828983 12.6064 0.891547 12.6861L2.45342 14.8751L0.889672 17.0642C0.784434 17.2261 0.74571 17.4224 0.781564 17.6121C0.817419 17.8019 0.925088 17.9705 1.08215 18.0829C1.23922 18.1952 1.43357 18.2427 1.62474 18.2153C1.81591 18.188 1.98916 18.088 2.10842 17.9361L3.37498 16.1651L4.63967 17.9361C4.75893 18.088 4.93219 18.188 5.12336 18.2153C5.31453 18.188 5.50888 18.1952 5.66594 18.0829C5.82301 17.9705 5.93068 17.8019 5.96653 17.6121C6.00239 17.4224 5.96366 17.2261 5.85842 17.0642L4.29655 14.8751L5.8603 12.6861C5.91755 12.6059 5.95845 12.5153 5.98067 12.4193C6.00289 12.3234 6.00599 12.224 5.9898 12.1268C5.97361 12.0297 5.93844 11.9367 5.8863 11.8531C5.83416 11.7695 5.76607 11.6971 5.68592 11.6398ZM14.9615 14.0604C14.5865 13.9517 14.1984 13.8401 13.9819 13.7004C13.8647 13.6236 13.8665 13.6067 13.8769 13.5223C13.8783 13.4541 13.896 13.3873 13.9287 13.3274C13.9613 13.2675 14.0078 13.2164 14.0644 13.1782C14.4956 12.8857 15.5025 13.017 15.9225 13.1257C16.1149 13.1763 16.3196 13.1484 16.4915 13.0481C16.6633 12.9478 16.7883 12.7834 16.8389 12.5909C16.8895 12.3985 16.8616 12.1938 16.7613 12.0219C16.661 11.8501 16.4965 11.7251 16.304 11.6745C16.1062 11.6229 14.3353 11.1851 13.2262 11.9332C12.9924 12.0913 12.796 12.2987 12.6511 12.5408C12.5061 12.783 12.416 13.054 12.3872 13.3348C12.1997 14.8236 13.6669 15.2482 14.5434 15.5014C15.674 15.8286 15.7734 15.9626 15.7415 16.2129C15.7125 16.4389 15.6234 16.5251 15.54 16.5814C15.1087 16.8682 14.1187 16.7267 13.7081 16.6142C13.516 16.5609 13.3106 16.586 13.1371 16.6841C13.0512 16.7327 12.9757 16.7977 12.9149 16.8755C12.8541 16.9532 12.8092 17.0422 12.7828 17.1373C12.7564 17.2324 12.749 17.3318 12.761 17.4298C12.773 17.5277 12.8041 17.6224 12.8527 17.7083C12.9508 17.8818 13.1138 18.0093 13.3059 18.0626C13.7708 18.1851 14.2493 18.2481 14.73 18.2501C15.2756 18.2501 15.8831 18.1564 16.3697 17.832C16.6097 17.6724 16.8114 17.4615 16.9602 17.2146C17.109 16.9678 17.2012 16.691 17.2303 16.4042C17.4375 14.7814 15.8887 14.3286 14.9615 14.0604ZM0.749985 8.50012V1.75012C0.749985 1.3523 0.90802 0.970767 1.18932 0.689462C1.47063 0.408157 1.85216 0.250122 2.24998 0.250122H11.25C11.3485 0.250045 11.4461 0.269379 11.5371 0.30702C11.6282 0.344661 11.7109 0.399872 11.7806 0.469497L17.0306 5.7195C17.1002 5.7892 17.1554 5.87194 17.1931 5.96299C17.2307 6.05403 17.2501 6.1516 17.25 6.25012V8.50012C17.25 8.69903 17.171 8.8898 17.0303 9.03045C16.8897 9.1711 16.6989 9.25012 16.5 9.25012C16.3011 9.25012 16.1103 9.1711 15.9697 9.03045C15.829 8.8898 15.75 8.69903 15.75 8.50012V7.00012H11.25C11.0511 7.00012 10.8603 6.9211 10.7197 6.78045C10.579 6.6398 10.5 6.44903 10.5 6.25012V1.75012H2.24998V8.50012C2.24998 8.69903 2.17097 8.8898 2.03031 9.03045C1.88966 9.1711 1.6989 9.25012 1.49998 9.25012C1.30107 9.25012 1.11031 9.1711 0.969655 9.03045C0.829003 8.8898 0.749985 8.69903 0.749985 8.50012ZM12 5.50012H14.6887L12 2.81043V5.50012Z"
                        fill="#2AB930"
                      />
                    </svg>
                  </a>
                  <a
                    :href="exportPdfUrl"
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
                    @click="printReport"
                    v-tooltip="$t('Print Table')"
                    class="btn print-btn"
                  >
                    <i class="fas fa-print"></i>
                  </a>
                </div>
              </div>
            </div>

            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <!-- VAT Summary - Sales -->
              <div v-if="reportData && reportData.summary && Array.isArray(reportData.summary) && reportData.summary.length > 0" class="mb-4">
                <h5>{{ $t('Sales VAT Summary') }}</h5>
                <table class="table vat-report-table">
                  <thead>
                    <th>{{ $t('VAT Rate') }}</th>
                    <th>{{ $t('Rate %') }}</th>
                    <th>{{ $t('Total Sales') }}</th>
                    <th>{{ $t('Sales VAT') }}</th>
                    <th>{{ $t('Journal VAT') }}</th>
                    <th>{{ $t('Total Sales VAT') }}</th>
                  </thead>
                  <tbody>
                    <tr v-for="summary in reportData.summary" :key="'sales-' + summary.vat_rate_id">
                      <td>
                        <strong>{{ summary.vat_rate_name }}</strong><br>
                        <small class="text-muted">{{ summary.vat_rate_code }}</small>
                      </td>
                      <td class="text-center">{{ summary.vat_rate_percentage }}%</td>
                      <td class="text-right">{{ calculateAmountBeforeVat(summary.sales_vat, summary.vat_rate_percentage) | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ summary.sales_vat | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ summary.journal_vat | withAbsoluteCurrency }}</td>
                      <td class="text-right">
                        <span class="text-success">
                          {{ (summary.sales_vat + summary.journal_vat) | withAbsoluteCurrency }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="table-success">
                      <th colspan="2">{{ $t('Total') }}</th>
                      <th class="text-right">{{ totalSalesAmount | withAbsoluteCurrency }}</th>
                      <th class="text-right">{{ totalSalesVat | withAbsoluteCurrency }}</th>
                      <th class="text-right">{{ totalJournalVat | withAbsoluteCurrency }}</th>
                      <th class="text-right">
                        <span class="text-success">
                          {{ (totalSalesVat + totalJournalVat) | withAbsoluteCurrency }}
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <!-- VAT Summary - Purchase -->
              <div v-if="reportData && reportData.summary && Array.isArray(reportData.summary) && reportData.summary.length > 0" class="mb-4">
                <h5>{{ $t('Purchase VAT Summary') }}</h5>
                <table class="table vat-report-table">
                  <thead>
                    <th>{{ $t('VAT Rate') }}</th>
                    <th>{{ $t('Rate %') }}</th>
                    <th>{{ $t('Total Purchases') }}</th>
                    <th>{{ $t('Purchase VAT') }}</th>
                    <th>{{ $t('Journal VAT') }}</th>
                    <th>{{ $t('Total Purchase VAT') }}</th>
                  </thead>
                  <tbody>
                    <tr v-for="summary in reportData.summary" :key="'purchase-' + summary.vat_rate_id">
                      <td>
                        <strong>{{ summary.vat_rate_name }}</strong><br>
                        <small class="text-muted">{{ summary.vat_rate_code }}</small>
                      </td>
                      <td class="text-center">{{ summary.vat_rate_percentage }}%</td>
                      <td class="text-right">{{ calculateAmountBeforeVat(summary.purchase_vat, summary.vat_rate_percentage) | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ summary.purchase_vat | withAbsoluteCurrency }}</td>
                      <td class="text-right">{{ summary.journal_vat | withAbsoluteCurrency }}</td>
                      <td class="text-right">
                        <span class="text-danger">
                          {{ (summary.purchase_vat + summary.journal_vat) | withAbsoluteCurrency }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="table-danger">
                      <th colspan="2">{{ $t('Total') }}</th>
                      <th class="text-right">{{ totalPurchaseAmount | withAbsoluteCurrency }}</th>
                      <th class="text-right">{{ totalPurchaseVat | withAbsoluteCurrency }}</th>
                      <th class="text-right">{{ totalJournalVat | withAbsoluteCurrency }}</th>
                      <th class="text-right">
                        <span class="text-danger">
                          {{ (totalPurchaseVat + totalJournalVat) | withAbsoluteCurrency }}
                        </span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <!-- VAT Transactions -->
              <div v-if="reportData && reportData.transactions && reportData.transactions.length > 0">
                <h5>{{ $t('VAT Transactions') }}</h5>
                <table class="table vat-report-table">
                  <thead>
                    <th>{{ $t('Date') }}</th>
                    <th>{{ $t('Reference') }}</th>
                    <th>{{ $t('Client/Supplier') }}</th>
                    <th>{{ $t('Type') }}</th>
                    <th>{{ $t('Source') }}</th>
                    <th>{{ $t('VAT Amount') }}</th>
                  </thead>
                  <tbody>
                    <tr v-if="loadingTransactions">
                      <td colspan="6" class="text-center">
                        <i class="fas fa-spinner fa-spin"></i> {{ $t('Loading transactions...') }}
                      </td>
                    </tr>
                    <tr v-else-if="!loadingTransactions && transactionsCount === 0">
                      <td colspan="6" class="text-center text-muted">
                        {{ $t('No transactions found for the selected criteria') }}
                      </td>
                    </tr>
                    <template v-else-if="!loadingTransactions">
                      <tr v-for="(transaction, index) in safeTransactions" :key="`${transaction.reference}-${transaction.date}-${transaction.type}-${index}`">
                        <td>{{ formatDate(transaction.date) }}</td>
                        <td>{{ transaction.reference }}</td>
                        <td>{{ transaction.client_supplier }}</td>
                        <td>
                          <span :class="transaction.type === 'Sales' ? 'badge bg-success' : 'badge bg-info'">
                            {{ transaction.type }}
                          </span>
                        </td>
                        <td>
                          <span class="badge bg-secondary">{{ transaction.source }}</span>
                        </td>
                        <td class="text-right">{{ transaction.vat_amount | withAbsoluteCurrency }}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>

                <!-- Pagination -->
                <div v-if="totalPages > 1" class="d-flex justify-content-between align-items-center mt-3">
                  <div class="dataTables_info">
                    {{ $t('Showing') }} {{ ((currentPage - 1) * pageSize) + 1 }} 
                    {{ $t('to') }} {{ Math.min(currentPage * pageSize, totalTransactions) }} 
                    {{ $t('of') }} {{ totalTransactions }} {{ $t('transactions') }}
                  </div>
                  <nav>
                    <ul class="pagination pagination-sm mb-0">
                      <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                        <button class="page-link" @click="goToPage(1)" :disabled="currentPage <= 1">
                          <i class="fas fa-angle-double-left"></i>
                        </button>
                      </li>
                      <li class="page-item" :class="{ disabled: currentPage <= 1 }">
                        <button class="page-link" @click="goToPage(currentPage - 1)" :disabled="currentPage <= 1">
                          <i class="fas fa-angle-left"></i>
                        </button>
                      </li>
                      <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
                        <button class="page-link" @click="goToPage(currentPage + 1)" :disabled="currentPage >= totalPages">
                          <i class="fas fa-angle-right"></i>
                        </button>
                      </li>
                      <li class="page-item" :class="{ disabled: currentPage >= totalPages }">
                        <button class="page-link" @click="goToPage(totalPages)" :disabled="currentPage >= totalPages">
                          <i class="fas fa-angle-double-right"></i>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <!-- No Data Message -->
              <div v-if="!reportData || (!reportData.summary && transactionsCount === 0)" class="text-center py-4">
                <EmptyTable />
              </div>
            </div>
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t("per_page") }} </label>
                <div>
                  <select
                    @change="updatePerPager"
                    v-model="pageSize"
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
                v-if="totalPages > 1"
                :pagination="{ current_page: currentPage, last_page: totalPages, per_page: pageSize }"
                :offset="5"
                class="justify-flex-end"
                @paginate="goToPage"
              />
              <!-- pagination-end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VatReport",
  data() {
    return {
      loading: false,
      loadingFiscalYears: false,
      loadingAccountingPeriods: false,
      loadingTransactions: false,
      reportData: null,
      allTransactions: [], // Store all loaded transactions
      errors: {},
      query: "",
      
      // Breadcrumbs
      breadcrumbs: [
        {
          name: 'Dashboard',
          url: 'home'
        },
        {
          name: 'VAT Report',
          url: ''
        }
      ],
      breadcrumbsCurrent: 'VAT Report',
      
      // Filters
      filters: {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null,
      },
      
      // Options
      fiscalYears: [],
      accountingPeriods: [],
      
      // Pagination
      currentPage: 1,
      pageSize: 10,
      totalPages: 0,
      totalTransactions: 0,
    };
  },
  
  computed: {
    // Safe access to transactions with fallback
    safeTransactions() {
      return this.reportData?.transactions || [];
    },
    
    // Safe access to transactions count
    transactionsCount() {
      return this.safeTransactions.length;
    },
    
    // Calculate visible pages for pagination
    visiblePages() {
      const pages = [];
      const startPage = Math.max(1, this.currentPage - 2);
      const endPage = Math.min(this.totalPages, this.currentPage + 2);
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      return pages;
    },
    
    totalSalesVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.sales_vat, 0);
    },
    
    totalPurchaseVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.purchase_vat, 0);
    },
    
    totalJournalVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.journal_vat, 0);
    },
    
    totalNetVat() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => sum + item.net_vat, 0);
    },
    
    // Calculate total sales amount (before VAT)
    totalSalesAmount() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => {
        return sum + this.calculateAmountBeforeVat(item.sales_vat, item.vat_rate_percentage);
      }, 0);
    },
    
    // Calculate total purchase amount (before VAT)
    totalPurchaseAmount() {
      if (!this.reportData || !this.reportData.summary) return 0;
      return this.reportData.summary.reduce((sum, item) => {
        return sum + this.calculateAmountBeforeVat(item.purchase_vat, item.vat_rate_percentage);
      }, 0);
    },
    
    // Export URLs
    exportExcelUrl() {
      const params = new URLSearchParams();
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return `/vat-report/export?${params.toString()}`;
    },
    
    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      return `/vat-report/pdf?${params.toString()}`;
    },
    
    printTemplateUrl() {
      // Create a dynamic print template URL for VAT report with current filters
      const params = new URLSearchParams();
      
      if (this.filters.fiscalYearId) {
        params.append('fiscal_year_id', this.filters.fiscalYearId);
      }
      if (this.filters.accountingPeriodId) {
        params.append('accounting_period_id', this.filters.accountingPeriodId);
      }
      if (this.filters.fromDate) {
        params.append('from_date', this.filters.fromDate);
      }
      if (this.filters.toDate) {
        params.append('to_date', this.filters.toDate);
      }
      
      return `/print/reports/vat-report?${params.toString()}`;
    },
  },
  
  mounted() {
    this.loadInitialData();
  },

  watch: {
    'filters.fiscalYearId'(newValue) {
      if (newValue) {
        this.filters.accountingPeriodId = null;
        this.loadAccountingPeriods();
      } else {
        this.accountingPeriods = [];
      }
    },
  },
  
  methods: {
    async loadInitialData() {
      await Promise.all([
        this.loadFiscalYears(),
      ]);
    },

    async loadFiscalYears(search = '') {
      this.loadingFiscalYears = true;
      try {
        const { data } = await axios.get(`/api/fiscal-years?search=${search}`);
        this.fiscalYears = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load fiscal years"));
      } finally {
        this.loadingFiscalYears = false;
      }
    },

    async searchFiscalYears(search) {
      await this.loadFiscalYears(search);
    },

    async loadAccountingPeriods(search = '') {
      if (!this.filters.fiscalYearId) return;
      
      this.loadingAccountingPeriods = true;
      try {
        const { data } = await axios.get(`/api/accounting-periods?fiscal_year_id=${this.filters.fiscalYearId}&search=${search}`);
        this.accountingPeriods = data.data;
      } catch (error) {
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to load accounting periods"));
      } finally {
        this.loadingAccountingPeriods = false;
      }
    },

    async searchAccountingPeriods(search) {
      await this.loadAccountingPeriods(search);
    },

    onFiscalYearChange() {
      this.filters.accountingPeriodId = null;
      this.accountingPeriods = [];
      if (this.filters.fiscalYearId) {
        this.loadAccountingPeriods();
      }
    },

    onAccountingPeriodChange() {
      // Reset date filters when accounting period is selected
      if (this.filters.accountingPeriodId) {
        this.filters.fromDate = null;
        this.filters.toDate = null;
      }
    },
    
    async generateReport() {
      this.loading = true;
      this.loadingTransactions = false; // Reset this to false initially
      this.errors = {};
      this.currentPage = 1;
      
      try {
        // Load first page
        await this.loadPage(1);
        this.$toast.success('', this.$t("VAT report generated successfully"));
      } catch (error) {
        console.error('VAT Report Error:', error);
        if (error.response && error.response.data && error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
        this.$toast.error('', error.response?.data?.message || this.$t("Failed to generate VAT report"));
      } finally {
        this.loading = false;
        this.loadingTransactions = false;
      }
    },

    async loadPage(page) {
      if (this.loadingTransactions) {
        return;
      }
      
      this.loadingTransactions = true;
      
      try {
        const params = new URLSearchParams();
        params.append('page', page);
        params.append('per_page', this.pageSize);
        
        if (this.filters.fiscalYearId) {
          params.append('fiscal_year_id', this.filters.fiscalYearId);
        }
        if (this.filters.accountingPeriodId) {
          params.append('accounting_period_id', this.filters.accountingPeriodId);
        }
        if (this.filters.fromDate) {
          params.append('from_date', this.filters.fromDate);
        }
        if (this.filters.toDate) {
          params.append('to_date', this.filters.toDate);
        }
        
        const response = await axios.post(`/api/reports/vat-report?${params.toString()}`);
        
        if (response.data && response.data.success === true) {
          const data = response.data.data;
          
          // Store summary and VAT rates info on first page
          if (page === 1) {
            this.reportData = {
              filters: data.filters,
              vat_rates: data.vat_rates,
              summary: data.summary,
              transactions: data.transactions,
            };
          } else {
            // Update transactions for subsequent pages
            if (this.reportData) {
              this.reportData.transactions = data.transactions;
            }
          }
          
          // Update pagination info
          if (data.pagination) {
            this.currentPage = data.pagination.current_page;
            this.totalPages = data.pagination.total_pages;
            this.totalTransactions = data.pagination.total_count;
          }
          
        } else if (response.data && response.data.error) {
          throw new Error(response.data.message || this.$t('Failed to load page'));
        } else {
          throw new Error(this.$t('Failed to load page'));
        }
        
      } catch (error) {
        console.error(`Page ${page} failed:`, error);
        this.$toast.error('', error.message || this.$t('Failed to load page'));
        throw error;
      } finally {
        this.loadingTransactions = false;
      }
    },
    
    async goToPage(page) {
      if (page < 1 || page > this.totalPages || page === this.currentPage) {
        return;
      }
      
      await this.loadPage(page);
    },

    clearFilters() {
      this.filters = {
        fiscalYearId: null,
        accountingPeriodId: null,
        fromDate: null,
        toDate: null,
      };
      this.reportData = null;
      this.errors = {};
      this.accountingPeriods = [];
      this.currentPage = 1;
      this.totalPages = 0;
      this.totalTransactions = 0;
    },
    
    // Safe calculation for amount before VAT
    calculateAmountBeforeVat(vatAmount, vatRatePercentage) {
      const vatAmountNum = parseFloat(vatAmount || 0);
      const vatRate = parseFloat(vatRatePercentage || 0);
      
      // Handle edge cases
      if (vatAmountNum === 0) return 0;
      if (vatRate === 0) return vatAmountNum; // If no VAT rate, return the amount as-is
      if (isNaN(vatAmountNum) || isNaN(vatRate)) return 0;
      
      const result = vatAmountNum / (vatRate / 100);
      return isNaN(result) ? 0 : result;
    },
    
    
    
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },

    printReport() {
      window.print();
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.generateReport();
    },

    // update per page count
    updatePerPager() {
      this.currentPage = 1;
      this.generateReport();
    },

    // Reset pagination
    async resetPagination() {
      this.currentPage = 1;
    },

    // reload after search
    async reload() {
      this.query = "";
      await this.generateReport();
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}
.table-custom {
  border: none !important;
}

.vat-report-table {
  border-collapse: separate;
  border-spacing: 0;
}

.vat-report-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.vat-report-table thead tr {
  border: none !important;
}

.vat-report-table thead th:first-child {
  border-top-left-radius: 10px;
}

.vat-report-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .vat-report-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .vat-report-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
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

.export-excel-btn {
  background: #f6fef4 !important;
  color: #2ab930 !important;
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
.vat-report-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.vat-report-table .badge.bg-info {
  background: #E3F2FD !important;
  color: #1976D2 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.vat-report-table .badge.bg-secondary {
  background: #F5F5F5 !important;
  color: #616161 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.text-success {
  color: #28a745 !important;
}

.text-danger {
  color: #dc3545 !important;
}

@media print {
  .card-tools {
    display: none !important;
  }
  
  .btn {
    display: none !important;
  }
}
</style>