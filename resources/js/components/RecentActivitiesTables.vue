<template>
  <div class="tab-content" id="custom-content-below-tabContent">
    <div
      class="tab-pane fade active show"
      id="invoices"
      role="tabpanel"
      aria-labelledby="invoices-tab"
    >
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
                <router-link
                  :to="{
                    name: 'invoices.show',
                    params: { slug: data.slug },
                  }"
                >
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

    <div
      class="tab-pane fade"
      id="purchases"
      role="tabpanel"
      aria-labelledby="purchases-tab"
    >
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
                <router-link
                  :to="{
                    name: 'purchases.show',
                    params: { slug: data.slug },
                  }"
                >
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

    <div
      class="tab-pane fade"
      id="expenses"
      role="tabpanel"
      aria-labelledby="expenses-tab"
    >
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
                <router-link
                  :to="{
                    name: 'expenses.show',
                    params: { slug: data.slug },
                  }"
                >
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

    <div
      class="tab-pane fade"
      id="transactions"
      role="tabpanel"
      aria-labelledby="transactions-tab"
    >
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
            <tr
              v-show="transactions.length"
              v-for="(data, i) in transactions"
              :key="i"
            >
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
  padding: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
}

.tab-pane {
  padding: 0;
}

.table-custom {
  border: none !important;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-top: 0;
}

.table-loading {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  color: #64748b;
  font-weight: 600;
}

.table-responsive {
  border-radius: 12px;
  background: #ffffff;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #33a0d9 #f1f5f9;
}

.table-responsive::-webkit-scrollbar {
  height: 8px;
}

.table-responsive::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.table-responsive::-webkit-scrollbar-thumb {
  background: #33a0d9;
  border-radius: 4px;
}

.table-responsive::-webkit-scrollbar-thumb:hover {
  background: #2a8bc7;
}

.invoices-table {
  border-collapse: separate;
  border-spacing: 0;
}

.invoices-table thead th {
  background-color: #33a0d9 !important;
  color: #ffffff !important;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.invoices-table thead tr {
  border: none !important;
}

.table-responsive .invoices-table thead th {
  background-color: #33a0d9 !important;
  color: #ffffff !important;
}

.invoices-table thead th:first-child {
  border-top-left-radius: 10px;
}

.invoices-table thead th:last-child {
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .invoices-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
}

.invoices-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.invoices-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.invoices-table tbody tr {
  transition: all 0.2s ease;
}

.invoices-table tbody tr:hover {
  background: rgba(51, 160, 217, 0.04);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.invoices-table a {
  color: #33A0D9;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.invoices-table a:hover {
  color: #2a8bc7;
  text-decoration: underline;
}

.table-custom:empty::before {
  content: 'No data available';
  display: block;
  text-align: center;
  padding: 3rem;
  color: #64748b;
  font-style: italic;
  background: #f8fafc;
  border-radius: 12px;
}

@media (max-width: 1200px) {
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .invoices-table {
    min-width: 800px;
  }

  .invoices-table thead th,
  .invoices-table tbody td {
    white-space: nowrap;
    padding: 8px 6px;
    font-size: 0.9rem;
  }
}

@media (max-width: 992px) {
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .invoices-table {
    min-width: 700px;
  }

  .invoices-table thead th,
  .invoices-table tbody td {
    padding: 6px 4px;
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  .table-custom {
    border-radius: 8px;
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
  }

  .invoices-table {
    min-width: 600px;
  }

  .invoices-table thead th {
    padding: 6px 4px;
    font-size: 0.8rem;
  }

  .invoices-table tbody td {
    padding: 6px 4px;
    font-size: 0.8rem;
  }
}

@media (max-width: 576px) {
  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    margin: 0 -0.75rem;
  }

  .invoices-table {
    min-width: 500px;
  }

  .invoices-table thead th {
    padding: 4px 3px;
    font-size: 0.75rem;
  }

  .invoices-table tbody td {
    padding: 4px 3px;
    font-size: 0.75rem;
  }

  .invoices-table thead th:first-child {
    border-top-left-radius: 6px;
  }

  .invoices-table thead th:last-child {
    border-top-right-radius: 6px;
  }

  .invoices-table .badge {
    font-size: 0.7rem !important;
    padding: 4px 8px !important;
  }
}

@media (max-width: 480px) {
  .invoices-table {
    min-width: 450px;
  }

  .invoices-table thead th,
  .invoices-table tbody td {
    padding: 3px 2px;
    font-size: 0.7rem;
  }

  .invoices-table .badge {
    font-size: 0.65rem !important;
    padding: 3px 6px !important;
  }
}

.no-data-message {
  padding: 3rem 1rem !important;
  background: #f8fafc;
  border: none !important;
}

.no-data-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.no-data-content i {
  opacity: 0.5;
  margin-bottom: 1rem;
}

.no-data-content h5 {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.no-data-content p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .no-data-message {
    padding: 2rem 0.5rem !important;
  }

  .no-data-content {
    padding: 1.5rem;
  }

  .no-data-content i {
    font-size: 2rem !important;
  }

  .no-data-content h5 {
    font-size: 1.1rem;
  }

  .no-data-content p {
    font-size: 0.85rem;
  }
}
</style>
