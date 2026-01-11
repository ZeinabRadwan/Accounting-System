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
            <div class="row">
              <div class="col-6 col-xl-4 mb-2">
                <search v-model="query" @reset-pagination="resetPagination()" @reload="reload" />
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <div class="btn-group c-w-100">
                  <a @click="refreshTable()" href="#" v-tooltip="$t('Refresh')" class="btn btn-success refresh-btn">
                    <i class="fas fa-sync"></i>
                  </a>
                  <a :href="exportExcelUrl" v-tooltip="$t('Export to Excel')" class="btn export-excel-btn"
                    title="Export to Excel">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.625 17.5001C11.625 17.699 11.546 17.8898 11.4053 18.0305C11.2647 18.1711 11.0739 18.2501 10.875 18.2501H8.24998C8.05107 18.2501 7.86031 18.1711 7.71966 18.0305C7.579 17.8898 7.49998 17.699 7.49998 17.5001V12.2501C7.49998 12.0512 7.579 11.8604 7.71966 11.7198C7.86031 11.5791 8.05107 11.5001 8.24998 11.5001C8.4489 11.5001 8.63966 11.5791 8.78031 11.7198C8.92097 11.8604 8.99998 12.0512 8.99998 12.2501V16.7501H10.875C11.0739 16.7501 11.2647 16.8291 11.4053 16.9698C11.546 17.1104 11.625 17.3012 11.625 17.5001ZM5.68592 11.6398C5.60578 11.5826 5.51514 11.5417 5.41918 11.5194C5.32323 11.4972 5.22384 11.4941 5.12668 11.5103C5.02953 11.5265 4.93651 11.5617 4.85295 11.6138C4.76939 11.6659 4.69692 11.734 4.63967 11.8142L3.37498 13.5851L2.1103 11.8142C2.05509 11.7292 1.98324 11.6564 1.89909 11.5999C1.81495 11.5435 1.72024 11.5047 1.62069 11.4859C1.52114 11.4671 1.41882 11.4687 1.31988 11.4905C1.22095 11.5123 1.12747 11.554 1.04507 11.6129C0.962677 11.6719 0.893077 11.7469 0.840473 11.8335C0.787869 11.9201 0.753352 12.0164 0.739005 12.1167C0.724657 12.217 0.730776 12.3191 0.756994 12.417C0.783211 12.5148 0.828983 12.6064 0.891547 12.6861L2.45342 14.8751L0.889672 17.0642C0.784434 17.2261 0.74571 17.4224 0.781564 17.6121C0.817419 17.8019 0.925088 17.9705 1.08215 18.0829C1.23922 18.1952 1.43357 18.2427 1.62474 18.2153C1.81591 18.188 1.98916 18.088 2.10842 17.9361L3.37498 16.1651L4.63967 17.9361C4.75893 18.088 4.93219 18.188 5.12336 18.2153C5.31453 18.188 5.50888 18.1952 5.66594 18.0829C5.82301 17.9705 5.93068 17.8019 5.96653 17.6121C6.00239 17.4224 5.96366 17.2261 5.85842 17.0642L4.29655 14.8751L5.8603 12.6861C5.91755 12.6059 5.95845 12.5153 5.98067 12.4193C6.00289 12.3234 6.00599 12.224 5.9898 12.1268C5.97361 12.0297 5.93844 11.9367 5.8863 11.8531C5.83416 11.7695 5.76607 11.6971 5.68592 11.6398ZM14.9615 14.0604C14.5865 13.9517 14.1984 13.8401 13.9819 13.7004C13.8647 13.6236 13.8665 13.6067 13.8769 13.5223C13.8783 13.4541 13.896 13.3873 13.9287 13.3274C13.9613 13.2675 14.0078 13.2164 14.0644 13.1782C14.4956 12.8857 15.5025 13.017 15.9225 13.1257C16.1149 13.1763 16.3196 13.1484 16.4915 13.0481C16.6633 12.9478 16.7883 12.7834 16.8389 12.5909C16.8895 12.3985 16.8616 12.1938 16.7613 12.0219C16.661 11.8501 16.4965 11.7251 16.304 11.6745C16.1062 11.6229 14.3353 11.1851 13.2262 11.9332C12.9924 12.0913 12.796 12.2987 12.6511 12.5408C12.5061 12.783 12.416 13.054 12.3872 13.3348C12.1997 14.8236 13.6669 15.2482 14.5434 15.5014C15.674 15.8286 15.7734 15.9626 15.7415 16.2129C15.7125 16.4389 15.6234 16.5251 15.54 16.5814C15.1087 16.8682 14.1187 16.7267 13.7081 16.6142C13.516 16.5609 13.3106 16.586 13.1371 16.6841C13.0512 16.7327 12.9757 16.7977 12.9149 16.8755C12.8541 16.9532 12.8092 17.0422 12.7828 17.1373C12.7564 17.2324 12.749 17.3318 12.761 17.4298C12.773 17.5277 12.8041 17.6224 12.8527 17.7083C12.9508 17.8818 13.1138 18.0093 13.3059 18.0626C13.7708 18.1851 14.2493 18.2481 14.73 18.2501C15.2756 18.2501 15.8831 18.1564 16.3697 17.832C16.6097 17.6724 16.8114 17.4615 16.9602 17.2146C17.109 16.9678 17.2012 16.691 17.2303 16.4042C17.4375 14.7814 15.8887 14.3286 14.9615 14.0604ZM0.749985 8.50012V1.75012C0.749985 1.3523 0.90802 0.970767 1.18932 0.689462C1.47063 0.408157 1.85216 0.250122 2.24998 0.250122H11.25C11.3485 0.250045 11.4461 0.269379 11.5371 0.30702C11.6282 0.344661 11.7109 0.399872 11.7806 0.469497L17.0306 5.7195C17.1002 5.7892 17.1554 5.87194 17.1931 5.96299C17.2307 6.05403 17.2501 6.1516 17.25 6.25012V8.50012C17.25 8.69903 17.171 8.8898 17.0303 9.03045C16.8897 9.1711 16.6989 9.25012 16.5 9.25012C16.3011 9.25012 16.1103 9.1711 15.9697 9.03045C15.829 8.8898 15.75 8.69903 15.75 8.50012V7.00012H11.25C11.0511 7.00012 10.8603 6.9211 10.7197 6.78045C10.579 6.6398 10.5 6.44903 10.5 6.25012V1.75012H2.24998V8.50012C2.24998 8.69903 2.17097 8.8898 2.03031 9.03045C1.88966 9.1711 1.6989 9.25012 1.49998 9.25012C1.30107 9.25012 1.11031 9.1711 0.969655 9.03045C0.829003 8.8898 0.749985 8.69903 0.749985 8.50012ZM12 5.50012H14.6887L12 2.81043V5.50012Z"
                        fill="#2AB930" />
                    </svg>
                  </a>
                  <a @click="exportToPDF" href="#" v-tooltip="$t('Export to PDF')" class="btn export-pdf-btn"
                    title="Export to PDF">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 14.2501C21 14.449 20.921 14.6398 20.7803 14.7805C20.6397 14.9211 20.4489 15.0001 20.25 15.0001H18V16.5001H19.5C19.6989 16.5001 19.8897 16.5791 20.0303 16.7198C20.171 16.8604 20.25 17.0512 20.25 17.2501C20.25 17.449 20.171 17.6398 20.0303 17.7805C19.8897 17.9211 19.6989 18.0001 19.5 18.0001H18V19.5001C18 19.699 17.921 19.8898 17.7803 20.0305C17.6397 20.1711 17.4489 20.2501 17.25 20.2501C17.0511 20.2501 16.8603 20.1711 16.7197 20.0305C16.579 19.8898 16.5 19.699 16.5 19.5001V14.2501C16.5 14.0512 16.579 13.8604 16.7197 13.7198C16.8603 13.5791 17.0511 13.5001 17.25 13.5001H20.25C20.4489 13.5001 20.6397 13.5791 20.7803 13.7198C20.921 13.8604 21 14.0512 21 14.2501ZM8.625 16.1251C8.625 16.8213 8.34844 17.489 7.85616 17.9813C7.36387 18.4736 6.69619 18.7501 6 18.7501H5.25V19.5001C5.25 19.699 5.17098 19.8898 5.03033 20.0305C4.88968 20.1711 4.69891 20.2501 4.5 20.2501C4.30109 20.2501 4.11032 20.1711 3.96967 20.0305C3.82902 19.8898 3.75 19.699 3.75 19.5001V14.2501C3.75 14.0512 3.82902 13.8604 3.96967 13.7198C4.11032 13.5791 4.30109 13.5001 4.5 13.5001H6C6.69619 13.5001 7.36387 13.7767 7.85616 14.269C8.34844 14.7612 8.625 15.4289 8.625 16.1251ZM7.125 16.1251C7.125 15.8268 7.00647 15.5406 6.7955 15.3296C6.58452 15.1186 6.29837 15.0001 6 15.0001H5.25V17.2501H6C6.29837 17.2501 6.58452 17.1316 6.7955 16.9206C7.00647 16.7096 7.125 16.4235 7.125 16.1251ZM15.375 16.8751C15.375 17.7702 15.0194 18.6287 14.3865 19.2616C13.7535 19.8945 12.8951 20.2501 12 20.2501H10.5C10.3011 20.2501 10.1103 20.1711 9.96967 20.0305C9.82902 19.8898 9.75 19.699 9.75 19.5001V14.2501C9.75 14.0512 9.82902 13.8604 9.96967 13.7198C10.1103 13.5791 10.3011 13.5001 10.5 13.5001H12C12.8951 13.5001 13.7535 13.8557 14.3865 14.4886C15.0194 15.1216 15.375 15.98 15.375 16.8751ZM13.875 16.8751C13.875 16.3778 13.6775 15.9009 13.3258 15.5493C12.9742 15.1977 12.4973 15.0001 12 15.0001H11.25V18.7501H12C12.4973 18.7501 12.9742 18.5526 13.3258 18.2009C13.6775 17.8493 13.875 17.3724 13.875 16.8751ZM3.75 10.5001V3.75012C3.75 3.3523 3.90804 2.97077 4.18934 2.68946C4.47064 2.40816 4.85218 2.25012 5.25 2.25012H14.25C14.3485 2.25004 14.4461 2.26938 14.5371 2.30702C14.6282 2.34466 14.7109 2.39987 14.7806 2.4695L20.0306 7.7195C20.1003 7.7892 20.1555 7.87194 20.1931 7.96299C20.2307 8.05403 20.2501 8.1516 20.25 8.25012V10.5001C20.25 10.699 20.171 10.8898 20.0303 11.0305C19.8897 11.1711 19.6989 11.2501 19.5 11.2501C19.3011 11.2501 19.1103 11.1711 18.9697 11.0305C18.829 10.8898 18.75 10.699 18.75 10.5001V9.00012H14.25C14.0511 9.00012 13.8603 8.9211 13.7197 8.78045C13.579 8.6398 13.5 8.44903 13.5 8.25012V3.75012H5.25V10.5001C5.25 10.699 5.17098 10.8898 5.03033 11.0305C4.88968 11.1711 4.69891 11.2501 4.5 11.2501C4.30109 11.2501 4.11032 11.1711 3.96967 11.0305C3.82902 10.8898 3.75 10.699 3.75 10.5001ZM15 7.50012H17.6897L15 4.81043V7.50012Z"
                        fill="#2AB930" />
                    </svg>
                  </a>
                  <router-link to="/journal-entries/create" class="btn btn-primary">
                    <i class="fa fa-plus"></i> {{ $t('New Journal Entry') }}
                  </router-link>
                </div>
              </div>
            </div>
            <table-loading v-show="loading" />
            <div class="table-responsive table-custom mt-3" id="printMe">
              <table class="table journal-entries-table">
                <thead>
                  <tr>
                    <th>{{ $t('Entry #') }}</th>
                    <th>{{ $t('Date') }}</th>
                    <th>{{ $t('Branch') }}</th>
                    <th>{{ $t('Type') }}</th>
                    <th>{{ $t('Reference') }}</th>
                    <th>{{ $t('Invoice') }}</th>
                    <th>{{ $t('Account') }}</th>
                    <th>{{ $t('Analytical Account') }}</th>
                    <th class="text-center">{{ $t('Debit') }}</th>
                    <th class="text-center">{{ $t('Credit') }}</th>
                    <th>{{ $t('Cost Center') }}</th>
                    <th>{{ $t('Description') }}</th>
                    <th>{{ $t('Notes') }}</th>
                    <th>{{ $t('Attachment') }}</th>
                    <th>{{ $t('Created By') }}</th>
                    <th>{{ $t('Status') }}</th>
                    <th>{{ $t('Actions') }}</th>
                  </tr>
                  <tr class="filter-row">
                    <th>
                      <input 
                        v-model="columnFilters.entry_number" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <div class="date-range-filter">
                        <input 
                          v-model="columnFilters.date_from" 
                          type="date" 
                          class="form-control form-control-sm column-filter date-input" 
                          :placeholder="$t('From')"
                          @change="applyFilters"
                        />
                        <span class="date-separator">-</span>
                        <input 
                          v-model="columnFilters.date_to" 
                          type="date" 
                          class="form-control form-control-sm column-filter date-input" 
                          :placeholder="$t('To')"
                          @change="applyFilters"
                        />
                      </div>
                    </th>
                    <th>
                      <select 
                        v-model="columnFilters.branch" 
                        class="form-control form-control-sm column-filter"
                        @change="applyFilters"
                      >
                        <option value="">{{ $t('All') }}</option>
                        <option v-for="branch in branches" :key="branch.id" :value="branch.id">
                          {{ branch.name }}
                        </option>
                      </select>
                    </th>
                    <th>
                      <select 
                        v-model="columnFilters.type" 
                        class="form-control form-control-sm column-filter"
                        @change="applyFilters"
                      >
                        <option value="">{{ $t('All') }}</option>
                        <option value="manual">{{ $t('Manual') }}</option>
                        <option value="opening_entry">{{ $t('Opening Entry') }}</option>
                        <option value="payment_voucher">{{ $t('Payment Voucher') }}</option>
                        <option value="receipt_voucher">{{ $t('Receipt Voucher') }}</option>
                        <option value="transfer_voucher">{{ $t('Transfer Voucher') }}</option>
                        <option value="pos_sales">{{ $t('POS Sales') }}</option>
                        <option value="sales">{{ $t('Sales') }}</option>
                        <option value="sales_returns">{{ $t('Sales Returns') }}</option>
                        <option value="purchases">{{ $t('Purchases') }}</option>
                        <option value="purchase_returns">{{ $t('Purchase Returns') }}</option>
                        <option value="credit_note">{{ $t('Credit Note') }}</option>
                        <option value="debit_note">{{ $t('Debit Note') }}</option>
                        <option value="inventory_transfer">{{ $t('Inventory Transfer') }}</option>
                        <option value="inventory_adjustment">{{ $t('Inventory Adjustment') }}</option>
                      </select>
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.reference" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.invoice" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Invoice Number')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <v-select
                        v-model="columnFilters.account"
                        :options="chartOfAccounts"
                        :reduce="account => account.id"
                        label="display_name"
                        :placeholder="$t('All')"
                        :searchable="true"
                        :clearable="true"
                        :loading="loadingAccounts"
                        @search="searchAccounts"
                        @input="applyFilters"
                        class="vue-select-sm"
                      />
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.analytical_account" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th class="text-center">
                      <input 
                        v-model="columnFilters.debit" 
                        type="number" 
                        step="0.01"
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th class="text-center">
                      <input 
                        v-model="columnFilters.credit" 
                        type="number" 
                        step="0.01"
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.cost_center" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.description" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.notes" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.attachment" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <input 
                        v-model="columnFilters.created_by" 
                        type="text" 
                        class="form-control form-control-sm column-filter" 
                        :placeholder="$t('Filter')"
                        @input="applyFilters"
                      />
                    </th>
                    <th>
                      <select 
                        v-model="columnFilters.status" 
                        class="form-control form-control-sm column-filter"
                        @change="applyFilters"
                      >
                        <option value="">{{ $t('All') }}</option>
                        <option value="draft">{{ $t('Draft') }}</option>
                        <option value="posted">{{ $t('Posted') }}</option>
                        <option value="void">{{ $t('Void') }}</option>
                      </select>
                    </th>
                    <th>
                      <button 
                        @click="clearColumnFilters" 
                        class="btn btn-sm btn-link clear-filters-btn p-0"
                        :title="$t('Clear Filters')"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(entry, entryIndex) in displayItems">
                    <template v-if="entry.lines && entry.lines.length > 0">
                      <tr v-for="(line, lineIndex) in entry.lines" :key="`${entry.id}-${line.id}`"
                        :class="{ 
                          'entry-first-line': lineIndex === 0,
                          'invoice-group': getInvoiceNumber(entry),
                          'invoice-group-first': lineIndex === 0 && getInvoiceNumber(entry) && isFirstEntryForInvoice(entry, entryIndex)
                        }">
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          <strong>{{ entry.formatted_entry_number }}</strong>
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          {{ formatDate(entry.entry_date) }}
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          {{ entry.branch ? entry.branch.name : '-' }}
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          {{ getEntryTypeLabel(entry.entry_type) || '-' }}
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          {{ entry.reference || '-' }}
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          {{ getInvoiceNumber(entry) || '-' }}
                        </td>
                        <td class="account-cell">
                          <span v-if="line.chart_of_account" class="account-info">
                            <strong class="account-code">{{ line.chart_of_account.code }}</strong>
                            <span class="account-name">{{ line.chart_of_account.name }}</span>
                          </span>
                          <span v-else>-</span>
                        </td>
                        <td class="analytical-account-cell">
                          <span v-if="line.analytical_account" class="analytical-account-info">
                            <small class="text-muted">
                              <span v-if="line.analytical_account.code" class="analytical-account-code">{{ line.analytical_account.code }} - </span>
                              <span class="analytical-account-name">{{ line.analytical_account.name }}</span>
                            </small>
                          </span>
                          <span v-else class="text-muted">-</span>
                        </td>
                        <td class="text-center">
                          <span v-if="line.debit_amount > 0" class="text-success">
                            <CurrencyDisplay :amount="line.debit_amount" />
                          </span>
                          <span v-else>-</span>
                        </td>
                        <td class="text-center">
                          <span v-if="line.credit_amount > 0" class="text-danger">
                            <CurrencyDisplay :amount="line.credit_amount" />
                          </span>
                          <span v-else>-</span>
                        </td>
                        <td>
                          <span v-if="line.cost_center">
                            {{ line.cost_center.code }} - {{ line.cost_center.name }}
                          </span>
                          <span v-else>-</span>
                        </td>
                        <td class="description-cell">
                          <span 
                            v-if="line.description || entry.description"
                            @click="toggleDescription(`${entry.id}-${line.id}`)"
                            :class="['description-text', { 'expanded': expandedDescriptions[`${entry.id}-${line.id}`] }]"
                            :title="expandedDescriptions[`${entry.id}-${line.id}`] ? '' : (line.description || entry.description)"
                          >
                            {{ line.description || entry.description }}
                          </span>
                          <span v-else>-</span>
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          {{ entry.notes || '-' }}
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          <a v-if="entry.attachment" :href="entry.attachment" target="_blank" class="btn btn-sm btn-link">
                            <i class="fa fa-paperclip"></i> {{ $t('View') }}
                          </a>
                          <span v-else>-</span>
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          {{ entry.creator ? entry.creator.name : '-' }}
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          <span :class="getStatusBadgeClass(entry.status)">
                            {{ entry.formatted_status }}
                          </span>
                        </td>
                        <td v-if="lineIndex === 0" :rowspan="entry.lines.length">
                          <div class="action-dropdown" :class="{ open: openActionIndex === entryIndex }">
                            <button type="button" class="action-icon-btn" :data-action-index="entryIndex"
                              @click.stop="toggleAction(entryIndex)">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                                fill="none">
                                <path
                                  d="M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z"
                                  fill="#023033" />
                              </svg>
                            </button>
                            <div class="action-menu" v-if="openActionIndex === entryIndex">
                              <div class="action-menu-header">
                                <h6 class="action-menu-title">{{ $t('Actions') }}</h6>
                                <button type="button" class="action-menu-close" @click.stop="toggleAction(entryIndex)">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="#6B7280" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                </button>
                              </div>
                              <ul>
                                <li>
                                  <router-link :to="{ name: 'journal-entries.show', params: { id: entry.id } }">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                      fill="none">
                                      <path
                                        d="M8 1C4.5 1 1.73 3.77 1.73 7C1.73 10.23 4.5 13 8 13C11.5 13 14.27 10.23 14.27 7C14.27 3.77 11.5 1 8 1ZM8 9.5C6.62 9.5 5.5 8.38 5.5 7C5.5 5.62 6.62 4.5 8 4.5C9.38 4.5 10.5 5.62 10.5 7C10.5 8.38 9.38 9.5 8 9.5Z"
                                        fill="#6B7280" />
                                    </svg>
                                    {{ $t('View') }}
                                  </router-link>
                                </li>
                                <li v-if="entry.status === 'draft'">
                                  <router-link :to="{ name: 'journal-entries.edit', params: { id: entry.id } }">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                      fill="none">
                                      <path d="M11.5 1.5L14.5 4.5L5.5 13.5H2.5V10.5L11.5 1.5Z" stroke="#6B7280"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {{ $t('Edit') }}
                                  </router-link>
                                </li>
                                <li v-if="entry.status === 'draft'">
                                  <a href="#" @click.prevent="postEntry(entry.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                      fill="none">
                                      <path d="M13.5 4.5L7.5 10.5L4.5 7.5" stroke="#10B981" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {{ $t('Post') }}
                                  </a>
                                </li>
                                <li v-if="entry.status === 'posted'">
                                  <a href="#" @click.prevent="voidEntry(entry.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                      fill="none">
                                      <path d="M12 4L4 12M4 4L12 12" stroke="#F59E0B" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    {{ $t('Void') }}
                                  </a>
                                </li>
                                <li v-if="entry.status === 'draft'">
                                  <a href="#" @click.prevent="deleteEntry(entry.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                      fill="none">
                                      <path
                                        d="M2 4H14M5.5 4V2.5C5.5 2.2 5.7 2 6 2H10C10.3 2 10.5 2.2 10.5 2.5V4M12.5 4V13.5C12.5 13.8 12.3 14 12 14H4C3.7 14 3.5 13.8 3.5 13.5V4H12.5Z"
                                        stroke="#EF4444" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    </svg>
                                    {{ $t('Delete') }}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </template>
                    <tr v-else :key="`entry-${entry.id}`"
                        :class="{
                          'invoice-group': getInvoiceNumber(entry),
                          'invoice-group-first': getInvoiceNumber(entry) && isFirstEntryForInvoice(entry, entryIndex)
                        }">
                      <td>
                        <strong>{{ entry.formatted_entry_number }}</strong>
                      </td>
                      <td>{{ formatDate(entry.entry_date) }}</td>
                      <td>{{ entry.branch ? entry.branch.name : '-' }}</td>
                      <td>{{ getEntryTypeLabel(entry.entry_type) || '-' }}</td>
                      <td>{{ entry.reference || '-' }}</td>
                      <td>{{ getInvoiceNumber(entry) || '-' }}</td>
                        <td>-</td>
                        <td>-</td>
                        <td class="text-center">-</td>
                        <td class="text-center">-</td>
                        <td>-</td>
                        <td class="description-cell">
                          <span 
                            v-if="entry.description"
                            @click="toggleDescription(`entry-${entry.id}`)"
                            :class="['description-text', { 'expanded': expandedDescriptions[`entry-${entry.id}`] }]"
                            :title="expandedDescriptions[`entry-${entry.id}`] ? '' : entry.description"
                          >
                            {{ entry.description }}
                          </span>
                          <span v-else>-</span>
                        </td>
                      <td>{{ entry.notes || '-' }}</td>
                      <td>
                        <a v-if="entry.attachment" :href="entry.attachment" target="_blank" class="btn btn-sm btn-link">
                          <i class="fa fa-paperclip"></i> {{ $t('View') }}
                        </a>
                        <span v-else>-</span>
                      </td>
                      <td>{{ entry.creator ? entry.creator.name : '-' }}</td>
                      <td>
                        <span :class="getStatusBadgeClass(entry.status)">
                          {{ entry.formatted_status }}
                        </span>
                      </td>
                      <td>
                        <div class="action-dropdown" :class="{ open: openActionIndex === entryIndex }">
                          <button type="button" class="action-icon-btn" :data-action-index="entryIndex"
                            @click.stop="toggleAction(entryIndex)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25"
                              fill="none">
                              <path
                                d="M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z"
                                fill="#023033" />
                            </svg>
                          </button>
                          <div class="action-menu" v-if="openActionIndex === entryIndex">
                            <div class="action-menu-header">
                              <h6 class="action-menu-title">{{ $t('Actions') }}</h6>
                              <button type="button" class="action-menu-close" @click.stop="toggleAction(entryIndex)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                  fill="none">
                                  <path d="M12 4L4 12M4 4L12 12" stroke="#6B7280" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                </svg>
                              </button>
                            </div>
                            <ul>
                              <li>
                                <router-link :to="{ name: 'journal-entries.show', params: { id: entry.id } }">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                      d="M8 1C4.5 1 1.73 3.77 1.73 7C1.73 10.23 4.5 13 8 13C11.5 13 14.27 10.23 14.27 7C14.27 3.77 11.5 1 8 1ZM8 9.5C6.62 9.5 5.5 8.38 5.5 7C5.5 5.62 6.62 4.5 8 4.5C9.38 4.5 10.5 5.62 10.5 7C10.5 8.38 9.38 9.5 8 9.5Z"
                                      fill="#6B7280" />
                                  </svg>
                                  {{ $t('View') }}
                                </router-link>
                              </li>
                              <li v-if="entry.status === 'draft'">
                                <router-link :to="{ name: 'journal-entries.edit', params: { id: entry.id } }">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path d="M11.5 1.5L14.5 4.5L5.5 13.5H2.5V10.5L11.5 1.5Z" stroke="#6B7280"
                                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  {{ $t('Edit') }}
                                </router-link>
                              </li>
                              <li v-if="entry.status === 'draft'">
                                <a href="#" @click.prevent="postEntry(entry.id)">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path d="M13.5 4.5L7.5 10.5L4.5 7.5" stroke="#10B981" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  {{ $t('Post') }}
                                </a>
                              </li>
                              <li v-if="entry.status === 'posted'">
                                <a href="#" @click.prevent="voidEntry(entry.id)">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="#F59E0B" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  {{ $t('Void') }}
                                </a>
                              </li>
                              <li v-if="entry.status === 'draft'">
                                <a href="#" @click.prevent="deleteEntry(entry.id)">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                      d="M2 4H14M5.5 4V2.5C5.5 2.2 5.7 2 6 2H10C10.3 2 10.5 2.2 10.5 2.5V4M12.5 4V13.5C12.5 13.8 12.3 14 12 14H4C3.7 14 3.5 13.8 3.5 13.5V4H12.5Z"
                                      stroke="#EF4444" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                  {{ $t('Delete') }}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <tr v-show="!loading && !displayItems.length">
                    <td colspan="17" class="text-center">
                      <EmptyTable />
                    </td>
                  </tr>
                </tbody>
                <tfoot v-if="displayItems.length > 0">
                  <tr class="table-footer">
                    <td colspan="7" class="text-right font-weight-bold">
                      {{ $t('Total') }}:
                    </td>
                    <td></td>
                    <td class="text-center font-weight-bold">
                      <span class="text-success">
                        <CurrencyDisplay :amount="totalDebit" />
                      </span>
                    </td>
                    <td class="text-center font-weight-bold">
                      <span class="text-danger">
                        <CurrencyDisplay :amount="totalCredit" />
                      </span>
                    </td>
                    <td colspan="7"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page">
                <label>{{ $t('per_page') }} </label>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'
import html2pdf from 'html2pdf.js'
import vSelect from 'vue-select'

export default {
  name: 'JournalEntriesIndex',
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Journal Entries') }
  },
  components: {
    Pagination: () => import('~/components/Pagination'),
    TableLoading: () => import('~/components/TableLoading'),
    CurrencyDisplay: () => import('~/components/CurrencyDisplay'),
    EmptyTable: () => import('~/components/EmptyTable'),
    vSelect
  },
  data() {
    return {
      breadcrumbsCurrent: "Journal Entries",
      breadcrumbs: [
        {
          name: "Dashboard",
          url: "home",
        },
        {
          name: "Journal Entries",
          url: "",
        },
      ],
      query: '',
      filters: {
        status: '',
        from_date: '',
        to_date: ''
      },
      columnFilters: {
        entry_number: '',
        date_from: '',
        date_to: '',
        branch: '',
        type: '',
        reference: '',
        invoice: '',
        account: '',
        analytical_account: '',
        debit: '',
        credit: '',
        cost_center: '',
        description: '',
        notes: '',
        attachment: '',
        created_by: '',
        status: ''
      },
      branches: [],
      chartOfAccounts: [],
      loadingAccounts: false,
      accountSearchTerm: '',
      searchAccountsTimeout: null,
      perPage: 10,
      openActionIndex: null,
      expandedDescriptions: {}
    }
  },
  // Map Getters
  computed: {
    ...mapGetters('operations', ['items', 'loading', 'pagination']),
    displayItems() {
      // Return items directly - filtering is now done server-side
      return this.items || [];
    },
    groupedByInvoice() {
      // Group entries by invoice number for visual grouping
      const groups = {};
      const ungrouped = [];
      
      (this.items || []).forEach(entry => {
        const invoiceNumber = this.getInvoiceNumber(entry);
        if (invoiceNumber) {
          if (!groups[invoiceNumber]) {
            groups[invoiceNumber] = [];
          }
          groups[invoiceNumber].push(entry);
        } else {
          ungrouped.push(entry);
        }
      });
      
      // Convert groups to array format for display
      const result = [];
      Object.keys(groups).forEach(invoiceNumber => {
        result.push({
          isGroup: true,
          invoiceNumber: invoiceNumber,
          entries: groups[invoiceNumber]
        });
      });
      
      // Add ungrouped entries at the end
      ungrouped.forEach(entry => {
        result.push({
          isGroup: false,
          entry: entry
        });
      });
      
      return result;
    },
    totalDebit() {
      if (!this.displayItems || this.displayItems.length === 0) {
        return 0;
      }
      return this.displayItems.reduce((total, entry) => {
        if (entry.lines && entry.lines.length > 0) {
          const entryDebit = entry.lines.reduce((lineTotal, line) => {
            return lineTotal + (parseFloat(line.debit_amount) || 0);
          }, 0);
          return total + entryDebit;
        }
        return total;
      }, 0);
    },
    totalCredit() {
      if (!this.displayItems || this.displayItems.length === 0) {
        return 0;
      }
      return this.displayItems.reduce((total, entry) => {
        if (entry.lines && entry.lines.length > 0) {
          const entryCredit = entry.lines.reduce((lineTotal, line) => {
            return lineTotal + (parseFloat(line.credit_amount) || 0);
          }, 0);
          return total + entryCredit;
        }
        return total;
      }, 0);
    },
    exportExcelUrl() {
      const params = new URLSearchParams();
      if (this.filters.status) params.append('status', this.filters.status);
      if (this.filters.from_date) params.append('from_date', this.filters.from_date);
      if (this.filters.to_date) params.append('to_date', this.filters.to_date);
      params.append('locale', this.$i18n.locale);
      return `/journal-entries/export/excel?${params.toString()}`;
    },
    exportPdfUrl() {
      const params = new URLSearchParams();
      if (this.filters.status) params.append('status', this.filters.status);
      if (this.filters.from_date) params.append('from_date', this.filters.from_date);
      if (this.filters.to_date) params.append('to_date', this.filters.to_date);
      return `/journal-entries/export/pdf?${params.toString()}`;
    },
  },
  watch: {
    // watch search data
    query: function (newQ) {
      if (newQ === '') {
        if (this.filters.status || this.filters.from_date || this.filters.to_date) {
          this.searchData();
        } else {
          this.getData();
        }
      } else {
        this.searchData();
      }
    },
    // watch filters
    filters: {
      handler(newVal, oldVal) {
        // Only trigger search if filters actually changed and we're not in the initial load
        if (oldVal && (oldVal.status !== newVal.status || oldVal.from_date !== newVal.from_date || oldVal.to_date !== newVal.to_date)) {
          this.pagination.current_page = 1;
          if (this.query || this.filters.status || this.filters.from_date || this.filters.to_date) {
            this.searchData();
          } else {
            this.getData();
          }
        }
      },
      deep: true
    }
  },
  created() {
    this.getData();
    this.loadBranches();
    this.loadChartOfAccounts('');
  },
  mounted() {
    document.addEventListener("click", this.onClickOutside);
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);

    // Check for success message from redirect
    if (this.$route.query.created === 'success') {
      window.toast.success(this.$t('Journal entry created successfully'));
      // Remove query parameter from URL
      this.$router.replace({ query: {} });
    }
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // Action dropdown methods
    toggleAction(index) {
      this.openActionIndex = this.openActionIndex === index ? null : index;

      if (this.openActionIndex === index) {
        this.$nextTick(() => {
          this.positionDropdown(index);
        });
      }
    },
    positionDropdown(index) {
      const button = document.querySelector(`[data-action-index="${index}"]`);
      if (button) {
        const rect = button.getBoundingClientRect();
        const menu = document.querySelector('.action-menu');
        if (menu) {
          // Check if page direction is RTL
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
    onClickOutside() {
      this.openActionIndex = null;
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
    // update per page count
    updatePerPager() {
      this.pagination.current_page = 1;
      // Check if any filters are active
      const hasFilters = this.query || 
        this.filters.status || 
        this.filters.from_date || 
        this.filters.to_date ||
        Object.values(this.columnFilters).some(val => val !== '');
      
      if (hasFilters) {
        this.searchData();
      } else {
        this.getData();
      }
    },
    // get data
    async getData() {
      this.$store.state.operations.loading = true;
      let currentPage = this.pagination ? this.pagination.current_page : 1;
      
      // Build query parameters with column filters
      const params = new URLSearchParams();
      params.append('page', currentPage);
      params.append('perPage', this.perPage);
      
      // Add all column filters
      Object.keys(this.columnFilters).forEach(key => {
        if (this.columnFilters[key]) {
          params.append(key, this.columnFilters[key]);
        }
      });
      
      await this.$store.dispatch("operations/fetchData", {
        path: "/api/journal-entries?" + params.toString(),
        currentPage: "",
      });
    },

    // Pagination
    async paginate() {
      // Check if any filters are active
      const hasFilters = this.query || 
        this.filters.status || 
        this.filters.from_date || 
        this.filters.to_date ||
        Object.values(this.columnFilters).some(val => val !== '');
      
      if (hasFilters) {
        this.searchData();
      } else {
        this.getData();
      }
    },

    // Reset pagination
    async resetPagination() {
      this.pagination.current_page = 1;
    },

    // search data
    async searchData() {
      try {
        this.$store.state.operations.loading = true;
        let currentPage = this.pagination ? this.pagination.current_page : 1;

        const params = {
          page: currentPage,
          perPage: this.perPage
        };

        // Add query term if exists
        if (this.query) {
          params.term = this.query;
        }

        // Add legacy filters
        if (this.filters.from_date) {
          params.startDate = this.filters.from_date;
        }

        if (this.filters.to_date) {
          params.endDate = this.filters.to_date;
        }

        if (this.filters.status) {
          params.status = this.filters.status;
        }

        // Add all column filters
        Object.keys(this.columnFilters).forEach(key => {
          if (this.columnFilters[key]) {
            params[key] = this.columnFilters[key];
          }
        });

        const response = await this.$axios.get('/api/journal-entries/search', { params });

        if (response.data.data) {
          this.$store.commit('operations/FETCH_DATA', {
            items: response.data,
            loading: false
          });
        }
      } catch (error) {
        console.error('Error searching journal entries:', error);
        window.toast.error('Error searching journal entries');
        this.$store.state.operations.loading = false;
      }
    },

    // Reload after search
    async reload() {
      this.query = "";
      this.filters.status = "";
      this.filters.from_date = "";
      this.filters.to_date = "";
    },

    // refresh table
    refreshTable() {
      this.query = "";
      this.filters.status = "";
      this.filters.from_date = "";
      this.filters.to_date = "";
      this.query === "" ? this.getData() : this.searchData();
    },

    clearFilters() {
      this.filters = {
        status: '',
        from_date: '',
        to_date: ''
      }
      this.query = ''
      this.clearColumnFilters()
      this.getData()
    },

    async postEntry(id) {
      Swal.fire({
        title: this.$t('Are you sure?'),
        text: this.$t('Are you sure you want to post this journal entry?'),
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('Confirm'),
        cancelButtonText: this.$t('Cancel'),
      }).then(async (result) => {
        if (result.value) {
          try {
            const response = await this.$axios.post(`/api/journal-entries/${id}/post`)
            if (response.data.success) {
              window.toast.success(this.$t('Journal entry posted successfully'))
              this.getData()
            } else {
              window.toast.error(response.data.message || this.$t('Error posting journal entry'))
            }
          } catch (error) {
            console.error('Error posting journal entry:', error)
            window.toast.error(this.$t('Error posting journal entry'))
          }
        }
      })
    },

    async voidEntry(id) {
      Swal.fire({
        title: this.$t("Are you sure?"),
        text: this.$t("You will not be able to return to this! This will void the journal entry permanently."),
        type: "warning",
        showCancelButton: true,
        confirmButtonText: this.$t("Confirm"),
        cancelButtonText: this.$t("Cancel"),
      }).then((result) => {
        if (result.value) {
          this.$axios
            .post(`/api/journal-entries/${id}/void`)
            .then((response) => {
              if (response.data.success) {
                this.$toast.success(
                  this.$t("Voided!"),
                  this.$t("Journal entry voided successfully.")
                );
                this.getData();
              } else {
                this.$toast.warning(
                  this.$t("Failed!"),
                  response.data.message || this.$t("Sorry you can't void this journal entry!")
                );
              }
            })
            .catch((error) => {
              console.error('Error voiding journal entry:', error);
              this.$toast.error(
                this.$t("Error!"),
                this.$t("Error voiding journal entry")
              );
            });
        }
      });
    },

    async deleteEntry(id) {
      if (!confirm('Are you sure you want to delete this journal entry?')) return

      try {
        const response = await this.$axios.delete(`/api/journal-entries/${id}`)
        if (response.data.success) {
          window.toast.success('Journal entry deleted successfully')
          this.getData()
        } else {
          window.toast.error(response.data.message || 'Error deleting journal entry')
        }
      } catch (error) {
        console.error('Error deleting journal entry:', error)
        window.toast.error('Error deleting journal entry')
      }
    },

    formatDate(date) {
      if (!date) return '-'
      return new Date(date).toLocaleDateString()
    },

    formatCurrency(amount) {
      if (!amount) return '0.00'
      return Number(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    },

    getStatusBadgeClass(status) {
      const classes = {
        'draft': 'badge badge-warning',
        'posted': 'badge badge-success',
        'void': 'badge badge-danger'
      }
      return classes[status] || 'badge badge-secondary'
    },

    toggleDescription(key) {
      this.$set(this.expandedDescriptions, key, !this.expandedDescriptions[key])
    },

    async loadBranches() {
      try {
        const response = await this.$axios.get('/api/branches');
        if (response.data && response.data.data) {
          this.branches = response.data.data;
        }
      } catch (error) {
        console.error('Error loading branches:', error);
      }
    },

    async loadChartOfAccounts(searchTerm = '') {
      try {
        this.loadingAccounts = true;
        let response;
        
        if (searchTerm && searchTerm.length >= 2) {
          // Use search endpoint for server-side search
          response = await this.$axios.get('/api/chart-of-accounts/search', {
            params: { term: searchTerm, perPage: 100 }
          });
        } else {
          // Load initial accounts from dropdown (limit to 50 for performance)
          response = await this.$axios.get('/api/chart-of-accounts/dropdown', {
            params: { perPage: 50 }
          });
        }
        
        if (response.data) {
          // Handle both paginated and non-paginated responses
          let accounts = [];
          if (response.data.data) {
            // Check if it's paginated response
            if (Array.isArray(response.data.data)) {
              accounts = response.data.data;
            } else if (response.data.data.data) {
              // Paginated response
              accounts = response.data.data.data;
            }
          }
          
          if (accounts.length > 0) {
            // Build hierarchical structure and format for vue-select
            const tree = this.buildAccountTree(accounts);
            this.chartOfAccounts = tree.map(account => ({
              ...account,
              display_name: this.getAccountDisplayName(account)
            }));
          } else if (!searchTerm) {
            // If no accounts loaded initially, load empty array
            this.chartOfAccounts = [];
          }
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        this.chartOfAccounts = [];
      } finally {
        this.loadingAccounts = false;
      }
    },

    searchAccounts(search, loading) {
      // Debounce search to avoid too many API calls
      if (this.searchAccountsTimeout) {
        clearTimeout(this.searchAccountsTimeout);
      }

      this.searchAccountsTimeout = setTimeout(() => {
        if (search && search.length >= 2) {
          loading(true);
          this.accountSearchTerm = search;
          this.loadChartOfAccounts(search).then(() => {
            loading(false);
          }).catch(() => {
            loading(false);
          });
        } else if (!search) {
          // Load all accounts when search is cleared
          loading(true);
          this.loadChartOfAccounts('').then(() => {
            loading(false);
          }).catch(() => {
            loading(false);
          });
        } else {
          loading(false);
        }
      }, 300);
    },

    buildAccountTree(accounts) {
      if (!accounts || accounts.length === 0) {
        return [];
      }

      // Create a map for quick lookup
      const accountMap = new Map();
      const rootAccounts = [];

      // First pass: create all account objects
      accounts.forEach(account => {
        const accountId = account.id;
        const parentId = account.parent_id;
        accountMap.set(accountId, {
          id: accountId,
          name: account.name,
          code: account.code,
          parent_id: parentId,
          level: account.level || 0,
          children: []
        });
      });

      // Second pass: build tree structure
      accounts.forEach(account => {
        const accountId = account.id;
        const parentId = account.parent_id;
        const accountNode = accountMap.get(accountId);
        if (parentId && accountMap.has(parentId)) {
          const parent = accountMap.get(parentId);
          parent.children.push(accountNode);
        } else {
          rootAccounts.push(accountNode);
        }
      });

      // Flatten tree for select options with indentation
      const flattened = [];
      const flatten = (nodes, level = 0) => {
        nodes.forEach(node => {
          flattened.push({
            ...node,
            level: level
          });
          if (node.children && node.children.length > 0) {
            flatten(node.children, level + 1);
          }
        });
      };
      flatten(rootAccounts);
      
      return flattened;
    },

    getAccountDisplayName(account) {
      if (!account) return '';
      const indent = '  '.repeat(account.level || 0);
      const code = account.code || '';
      const name = account.name || '';
      return `${indent}${code} - ${name}`;
    },

    getEntryTypeLabel(entryType) {
      if (!entryType) return '';
      
      const typeMap = {
        'manual': this.$t('Manual'),
        'opening_entry': this.$t('Opening Entry'),
        'payment_voucher': this.$t('Payment Voucher'),
        'receipt_voucher': this.$t('Receipt Voucher'),
        'transfer_voucher': this.$t('Transfer Voucher'),
        'pos_sales': this.$t('POS Sales'),
        'sales': this.$t('Sales'),
        'sales_returns': this.$t('Sales Returns'),
        'purchases': this.$t('Purchases'),
        'purchase_returns': this.$t('Purchase Returns'),
        'credit_note': this.$t('Credit Note'),
        'debit_note': this.$t('Debit Note'),
        'inventory_transfer': this.$t('Inventory Transfer'),
        'inventory_adjustment': this.$t('Inventory Adjustment'),
      };
      
      return typeMap[entryType] || entryType;
    },

    getInvoiceNumber(entry) {
      if (!entry) return null;
      
      // If source_type is Invoice, try to get invoice number from reference
      // Reference format: invoice_no or invoice_no-COGS
      if (entry.source_type && entry.source_type.includes('Invoice')) {
        if (entry.reference) {
          // Remove -COGS suffix if present
          return entry.reference.replace(/-COGS$/, '');
        }
      }
      
      // Also check if reference looks like an invoice number
      if (entry.reference && !entry.reference.includes('-COGS')) {
        // Check if entry type is sales-related
        const salesTypes = ['sales', 'pos_sales', 'sales_returns'];
        if (salesTypes.includes(entry.entry_type)) {
          return entry.reference;
        }
      }
      
      return null;
    },

    isFirstEntryForInvoice(entry, currentIndex) {
      if (!entry || currentIndex === 0) return true;
      
      const currentInvoiceNumber = this.getInvoiceNumber(entry);
      if (!currentInvoiceNumber) return false;
      
      // Check if previous entry has a different invoice number
      const previousEntry = this.displayItems[currentIndex - 1];
      if (!previousEntry) return true;
      
      const previousInvoiceNumber = this.getInvoiceNumber(previousEntry);
      return previousInvoiceNumber !== currentInvoiceNumber;
    },

    applyFilters() {
      // Reset to first page when filters change
      this.pagination.current_page = 1;
      // Reload data with new filters
      this.getData();
    },

    clearColumnFilters() {
      this.columnFilters = {
        entry_number: '',
        date_from: '',
        date_to: '',
        branch: '',
        type: '',
        reference: '',
        invoice: '',
        account: '',
        debit: '',
        credit: '',
        cost_center: '',
        description: '',
        notes: '',
        attachment: '',
        created_by: '',
        status: ''
      };
      // Reload data after clearing filters
      this.pagination.current_page = 1;
      this.getData();
    },

    // print table
    async print() {
      await this.$htmlToPaper("printMe");
    },

    async exportToPDF() {
      try {
        const element = document.getElementById('printMe');
        if (!element) {
          this.$toast.error(this.$t('Error!'), this.$t('Table not found'));
          return;
        }

        const style = document.createElement('style');
        style.setAttribute('data-pdf-export', 'true');
        style.textContent = `.no-print, .no-print * { display: none !important; }`;
        document.head.appendChild(style);

        const opt = {
          margin: [10, 10, 10, 10],
          filename: `journal-entries-${(new Date()).toISOString().slice(0, 10)}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        await html2pdf().set(opt).from(element).save();
        document.head.removeChild(style);
        this.$toast.success(this.$t('Success!'), this.$t('PDF exported successfully'));
      } catch (e) {
        const pdfStyle = document.querySelector('style[data-pdf-export]');
        if (pdfStyle) document.head.removeChild(pdfStyle);
        this.$toast.error(this.$t('Error!'), this.$t('Failed to export PDF'));
      }
    },
  }
}
</script>

<style scoped>
.table-custom {
  border: none !important;
}

.journal-entries-table {
  border-collapse: separate;
  border-spacing: 0;
}

.journal-entries-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.journal-entries-table thead .filter-row th {
  background-color: transparent !important;
  color: inherit;
}

.journal-entries-table thead tr {
  border: none !important;
}

.journal-entries-table thead th:first-child {
  border-top-left-radius: 10px;
}

.journal-entries-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .journal-entries-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .journal-entries-table thead th:last-child {
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
  border: 1px solid #CED4DA;
  overflow: visible;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
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
  transition: all 0.2s ease;
}

.action-icon-btn:hover {
  background-color: #f8fafc;
  border-radius: 4px;
}

.action-menu {
  position: fixed;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 8px 20px 0px #00000014;
  border-radius: 12px;
  min-width: 200px;
  z-index: 9999;
  max-height: 80vh;
  overflow: hidden;
  animation: slideInDown 0.3s ease-out;
}

/* RTL Support for Action Menu */
[dir="rtl"] .action-menu {
  left: 45px !important;
  right: auto !important;
}

.action-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 12px 20px;
  border-bottom: 1px solid #f1f5f9;
  background: #fafbfc;
  border-radius: 12px 12px 0 0;
}

.action-menu-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.action-menu-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.action-menu-close:hover {
  background-color: #e5e7eb;
}

.action-menu ul {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.action-menu li {
  margin: 0;
}

.action-menu li a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  color: #374151;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.action-menu li a:hover {
  background: #f8fafc;
  color: #1f2937;
  border-left-color: #3b82f6;
  transform: translateX(2px);
}

.action-menu li a svg {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
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

/* Custom Status Badge Styling */
.journal-entries-table .badge.badge-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.journal-entries-table .badge.badge-warning {
  background: #FEF9E7 !important;
  color: #F59E0B !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.journal-entries-table .badge.badge-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}


.journal-entries-table tr.entry-first-line {
  border-top: 2px solid #e5e7eb;
}

.journal-entries-table tr.invoice-group-first {
  border-top: 3px solid #33a0d9;
  background-color: #f8f9fa;
}

.journal-entries-table tr.invoice-group {
  border-left: 3px solid #33a0d9;
}

.journal-entries-table tr.invoice-group:hover {
  background-color: #f0f7fa;
}

.journal-entries-table td {
  vertical-align: middle;
}

.account-cell {
  max-width: 200px;
  min-width: 150px;
}

.account-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.account-code {
  font-size: 13px;
  color: #374151;
}

.account-name {
  font-size: 12px;
  color: #6B7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
}

.analytical-account-cell {
  max-width: 180px;
  min-width: 130px;
}

.analytical-account-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.analytical-account-code {
  font-size: 11px;
  color: #6B7280;
  font-weight: 500;
}

.analytical-account-name {
  font-size: 11px;
  color: #9CA3AF;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 160px;
}

.description-cell {
  max-width: 200px;
  min-width: 150px;
}

.description-text {
  display: block;
  font-size: 13px;
  color: #374151;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 180px;
  transition: all 0.2s ease;
}

.description-text:hover {
  color: #2563EB;
  text-decoration: underline;
}

.description-text.expanded {
  white-space: normal;
  word-wrap: break-word;
  max-width: 300px;
  text-overflow: initial;
}

.table-footer {
  background-color: #f8f9fa;
  border-top: 2px solid #dee2e6;
}

.table-footer td {
  padding: 12px 8px;
  font-size: 14px;
}

.filter-row {
  border-top: 2px solid #e5e7eb;
}

.filter-row th {
  padding: 10px 6px !important;
  vertical-align: middle;
  border-bottom: 1px solid #e5e7eb;
  height: 50px;
  position: relative;
}

.column-filter {
  width: 100%;
  min-width: 120px;
  max-width: 200px;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 12px;
  background-color: #ffffff;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.column-filter:hover {
  border-color: #9ca3af;
}

.column-filter:focus {
  outline: none;
  border-color: #33a0d9;
  box-shadow: 0 0 0 3px rgba(51, 160, 217, 0.1);
  background-color: #ffffff;
}

.column-filter::placeholder {
  color: #9ca3af;
  font-size: 11px;
  opacity: 0.7;
}

.column-filter option {
  padding: 8px;
  font-size: 13px;
}

.journal-entries-table thead tr:first-child th {
  border-bottom: 2px solid #e5e7eb;
  padding: 12px 8px;
  font-weight: 600;
}

.journal-entries-table thead .filter-row th {
  background-color: transparent !important;
  color: #374151;
}

/* Ensure consistent column widths */
.journal-entries-table th,
.journal-entries-table td {
  white-space: nowrap;
}

.journal-entries-table th:nth-child(1),
.journal-entries-table td:nth-child(1) {
  min-width: 120px;
  width: 120px;
}

.journal-entries-table th:nth-child(2),
.journal-entries-table td:nth-child(2) {
  min-width: 110px;
  width: 110px;
}

.journal-entries-table th:nth-child(3),
.journal-entries-table td:nth-child(3) {
  min-width: 130px;
  width: 130px;
}

.journal-entries-table th:nth-child(4),
.journal-entries-table td:nth-child(4) {
  min-width: 150px;
  width: 150px;
}

.journal-entries-table th:nth-child(5),
.journal-entries-table td:nth-child(5) {
  min-width: 120px;
  width: 120px;
}

.journal-entries-table th:nth-child(6),
.journal-entries-table td:nth-child(6) {
  min-width: 180px;
  width: 180px;
}

.journal-entries-table th:nth-child(7),
.journal-entries-table td:nth-child(7),
.journal-entries-table th:nth-child(8),
.journal-entries-table td:nth-child(8) {
  min-width: 100px;
  width: 100px;
}

.journal-entries-table th:nth-child(9),
.journal-entries-table td:nth-child(9) {
  min-width: 150px;
  width: 150px;
}

.journal-entries-table th:nth-child(10),
.journal-entries-table td:nth-child(10) {
  min-width: 180px;
  width: 180px;
}

.journal-entries-table th:nth-child(11),
.journal-entries-table td:nth-child(11) {
  min-width: 150px;
  width: 150px;
}

.journal-entries-table th:nth-child(12),
.journal-entries-table td:nth-child(12) {
  min-width: 100px;
  width: 100px;
}

.journal-entries-table th:nth-child(13),
.journal-entries-table td:nth-child(13) {
  min-width: 130px;
  width: 130px;
}

.journal-entries-table th:nth-child(14),
.journal-entries-table td:nth-child(14) {
  min-width: 120px;
  width: 120px;
}

.journal-entries-table th:nth-child(15),
.journal-entries-table td:nth-child(15) {
  min-width: 100px;
  width: 100px;
}

.clear-filters-btn {
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  color: #6b7280;
  transition: all 0.2s ease;
  cursor: pointer;
}

.clear-filters-btn:hover {
  background-color: #f3f4f6;
  border-color: #9ca3af;
  color: #374151;
}

.clear-filters-btn i {
  font-size: 14px;
}

/* Better styling for select filters */
.column-filter[type="date"] {
  cursor: pointer;
}

.column-filter select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 30px;
}

.vue-select-sm {
  font-size: 12px;
}

.vue-select-sm .vs__dropdown-toggle {
  min-height: 32px;
  padding: 0;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.vue-select-sm .vs__search {
  font-size: 12px;
  padding: 6px 10px;
}

.vue-select-sm .vs__selected {
  font-size: 12px;
  padding: 4px 8px;
}

.vue-select-sm .vs__actions {
  padding: 4px 6px;
}

.vue-select-sm .vs__clear {
  width: 16px;
  height: 16px;
}

.vue-select-sm .vs__open-indicator {
  width: 12px;
  height: 12px;
}

.date-range-filter {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: nowrap;
}

.date-input {
  flex: 1;
  min-width: 0;
}

.date-separator {
  color: #6b7280;
  font-size: 12px;
  font-weight: 500;
  flex-shrink: 0;
  padding: 0 2px;
}

/* Search Input Background Override */
.form-control {
  background: #fff !important;
}

/* Align labels left for English (LTR) */
.form-group label {
  text-align: left;
}

/* RTL: align form-group text to right for Arabic */
[dir="rtl"] .form-group {
  text-align: right;
}

[dir="rtl"] .form-group label {
  text-align: right;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
}
</style>

<style>
.dtable-footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 0 0 10px;
  flex-direction: column;
}

.card-footer .form-group.row.display-per-page {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
}
</style>
