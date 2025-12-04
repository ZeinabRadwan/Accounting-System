<template>
  <div class="tab-content" id="custom-content-below-tabContent">
    <div class="tab-pane fade active show" id="invoices" role="tabpanel" aria-labelledby="invoices-tab">
      <table-loading v-show="loading" />
      <div class="table-responsive table-custom">
        <table class="table invoices-table">
          <thead>
            <tr>
              <th>{{ $t("#") }}</th>
              <th>{{ $t("Invoice No") }}</th>
              <th>{{ $t("Invoice Date") }}</th>
              <th>{{ $t("Client") }}</th>
              <th>{{ $t("Subtotal") }}</th>
              <th>{{ $t("Net Total") }}</th>
              <th>{{ $t("Total Due") }}</th>
              <th>{{ $t("Status") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-show="invoices.length" v-for="(data, i) in invoices" :key="i">
              <td>{{ ++i }}</td>
              <td>
                <router-link :to="{
                  name: 'invoices.show',
                  params: { slug: data.slug },
                }">
                  {{ data.invoiceNo | withPrefix(prefix) }}
                </router-link>
              </td>
              <td>
                <span v-if="data.invoiceDate">{{
                  data.invoiceDate | moment("Do MMM, YYYY")
                  }}</span>
              </td>
              <td>{{ data.client }}</td>
              <td>{{ data.subTotal }} <span class="saudi-riyal">ê</span></td>
              <td>{{ data.invoiceTotal }} <span class="saudi-riyal">ê</span></td>
              <td>{{ data.due }} <span class="saudi-riyal">ê</span></td>
              <td>
                <span v-if="data.status === 1" class="badge bg-success">{{
                  $t("Active")
                  }}</span>
                <span v-else class="badge bg-danger">{{
                  $t("Inactive")
                  }}</span>
              </td>
            </tr>
            <tr v-show="!loading && !invoices.length">
              <td colspan="8">
                <EmptyTable />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="tab-pane fade" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
      <table-loading v-show="loading" />
      <div class="table-responsive table-custom">
        <table class="table invoices-table">
          <thead>
            <tr>
              <th>{{ $t("#") }}</th>
              <th>{{ $t("Purchase No") }}</th>
              <th>{{ $t("Date") }}</th>
              <th>{{ $t("Supplier") }}</th>
              <th>{{ $t("Subtotal") }}</th>
              <th>{{ $t("Net Total") }}</th>
              <th>{{ $t("Total Due") }}</th>
              <th>{{ $t("Status") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-show="purchases.length" v-for="(data, i) in purchases" :key="i">
              <td>{{ ++i }}</td>
              <td>
                <router-link :to="{
                  name: 'purchases.show',
                  params: { slug: data.slug },
                }">
                  {{ data.code | withPrefix(prefix) }}
                </router-link>
                <br />
              </td>
              <td>
                <span v-if="data.purchaseDate">{{
                  data.purchaseDate | moment("Do MMM, YYYY")
                  }}</span>
              </td>
              <td>{{ data.supplierName }}</td>
              <td>{{ data.subTotal }} <span class="saudi-riyal">ê</span></td>
              <td>{{ data.purchaseTotal }} <span class="saudi-riyal">ê</span></td>
              <td>{{ data.due }} <span class="saudi-riyal">ê</span></td>
              <td>
                <span v-if="data.status === 1" class="badge bg-success">{{
                  $t("Active")
                  }}</span>
                <span v-else class="badge bg-danger">{{
                  $t("Inactive")
                  }}</span>
              </td>
            </tr>
            <tr v-show="!loading && !purchases.length">
              <td colspan="8">
                <EmptyTable />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="tab-pane fade" id="expenses" role="tabpanel" aria-labelledby="expenses-tab">
      <table-loading v-show="loading" />
      <div class="table-responsive table-custom">
        <table class="table invoices-table">
          <thead>
            <tr>
              <th>{{ $t("#") }}</th>
              <th>{{ $t("Sub Category") }}</th>
              <th>{{ $t("Expense Reason") }}</th>
              <th>{{ $t("Amount") }}</th>
              <th>{{ $t("Account") }}</th>
              <th>{{ $t("Date") }}</th>
              <th>{{ $t("Status") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-show="expenses.length" v-for="(data, i) in expenses" :key="i">
              <td>{{ ++i }}</td>
              <td>
                <span v-if="data.subCategory">
                  {{ data.subCategory.name }} [{{
                    data.subCategory.code | withPrefix(subCatPrefix)
                  }}]
                </span>
              </td>
              <td>
                <router-link :to="{
                  name: 'expenses.show',
                  params: { slug: data.slug },
                }">
                  {{ data.reason }}
                </router-link>
              </td>
              <td>
                <span v-if="data.transaction">
                  {{ data.transaction.amount }}
                  <span class="saudi-riyal">ê</span>
                </span>
              </td>
              <td>
                <span v-if="data.account">{{ data.account.label }} </span>
              </td>
              <td>
                <span v-if="data.date">{{
                  data.date | moment("Do MMM, YYYY")
                  }}</span>
              </td>
              <td>
                <span v-if="data.status === 1" class="badge bg-success">{{
                  $t("Active")
                  }}</span>
                <span v-else class="badge bg-danger">{{
                  $t("Inactive")
                  }}</span>
              </td>
            </tr>
            <tr v-show="!loading && !expenses.length">
              <td colspan="7">
                <EmptyTable />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="tab-pane fade" id="transactions" role="tabpanel" aria-labelledby="transactions-tab">
      <table-loading v-show="loading" />
      <div class="table-responsive table-custom">
        <table class="table invoices-table">
          <thead>
            <tr>
              <th>{{ $t("#") }}</th>
              <th>{{ $t("Reason") }}</th>
              <th>{{ $t("Date") }}</th>
              <th>{{ $t("Type") }}</th>
              <th>{{ $t("Account") }}</th>
              <th>{{ $t("Amount") }}</th>
              <th class="text-right">{{ $t("Status") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-show="transactions.length" v-for="(data, i) in transactions" :key="i">
              <td>{{ ++i }}</td>
              <td>{{ data.reason }}</td>
              <td>
                <span v-if="data.transactionDate">{{
                  data.transactionDate | moment("Do MMM, YYYY")
                  }}</span>
              </td>
              <td>
                <span v-if="data.type === 1" class="badge bg-success">{{
                  $t("Credit")
                  }}</span>
                <span v-else class="badge bg-danger">{{
                  $t("Debit")
                  }}</span>
              </td>
              <td v-if="data.account">{{ data.account.label }}</td>
              <td>{{ data.amount }} <span class="saudi-riyal">ê</span></td>
              <td class="text-right">
                <span v-if="data.status === 1" class="badge bg-success">{{
                  $t("Active")
                  }}</span>
                <span v-else class="badge bg-danger">{{
                  $t("Inactive")
                  }}</span>
              </td>
            </tr>
            <tr v-show="!loading && !transactions.length">
              <td colspan="7">
                <EmptyTable />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentActivitiesTables",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    invoices: {
      type: Array,
      default: () => [],
    },
    purchases: {
      type: Array,
      default: () => [],
    },
    expenses: {
      type: Array,
      default: () => [],
    },
    transactions: {
      type: Array,
      default: () => [],
    },
    prefix: {
      type: String,
      default: "",
    },
    subCatPrefix: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.tab-content {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.tab-pane {
  padding: 0;
}

.table-custom {
  border: none;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.invoices-table {
  width: 100%;
  border-collapse: collapse;
  font-family: DINNextLTArabic;
  font-weight: 400;
  color: #000000;
  direction: ltr;
}

[dir="rtl"] .invoices-table {
  direction: rtl;
}

.invoices-table thead th {
  background: #ECEFF3;
  color: #2F3541;
  padding: 10px 12px;
  border: none;
}

.invoices-table thead th:first-child {
  border-top-left-radius: 12px;
}

.invoices-table thead th:last-child {
  border-top-right-radius: 12px;
}

[dir="rtl"] .invoices-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 12px;
}

[dir="rtl"] .invoices-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 12px;
}

.invoices-table tbody td {
  padding: 10px 12px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #E3E7EA;
  color: #000000;
}

.table-custom .table td,
.table-custom .table thead>tr>th {
  border-left: none !important;
  border-right: none !important;
}

.invoices-table tbody tr:last-child td {
  border-bottom: none;
}

.invoices-table tbody tr:hover {
  background: #F7F9FB;
}

.invoices-table .badge.bg-success {
  background: #DAF5CA !important;
  color: #005523 !important;
  border-radius: 8px;
}

.invoices-table .badge.bg-danger {
  background: #ECEFF3 !important;
  color: #545D71 !important;
  border-radius: 8px;
}

.invoices-table a {
  color: inherit;
  text-decoration: none;
}

.invoices-table a:hover {
  text-decoration: underline;
}
</style>
