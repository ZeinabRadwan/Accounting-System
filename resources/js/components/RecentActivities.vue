<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {{ $t("Recent Activities") }}
      </h3>
    </div>
    <div class="card-body mb-3">
      <ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="invoices-tab"
            data-toggle="pill"
            href="#invoices"
            role="tab"
            aria-controls="invoices-tab"
            aria-selected="true"
            >{{ $t("Invoices") }}</a
          >
        </li>
        <li class="nav-item">
          <a
            @click="getPurchases()"
            class="nav-link"
            id="purchases-tab"
            data-toggle="pill"
            href="#purchases"
            role="tab"
            aria-controls="purchases-tab"
            aria-selected="false"
            >{{ $t("Purchases") }}</a
          >
        </li>
        <li class="nav-item">
          <a
            @click="getExpenses()"
            class="nav-link"
            id="expenses-tab"
            data-toggle="pill"
            href="#expenses"
            role="tab"
            aria-controls="expenses-tab"
            aria-selected="false"
            >{{ $t("Expenses") }}</a
          >
        </li>
        <li class="nav-item">
          <a
            @click="getTransactions()"
            class="nav-link"
            id="transactions-tab"
            data-toggle="pill"
            href="#transactions"
            role="tab"
            aria-controls="transactions-tab"
            aria-selected="false"
            >{{ $t("Transactions") }}</a
          >
        </li>
      </ul>
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
                <tr v-if="invoices && invoices.length" v-for="(data, i) in invoices" :key="i">
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
                  <td>{{ data.subTotal  }} <span class="saudi-riyal">ê</span></td>
                  <td>{{ data.invoiceTotal  }} <span class="saudi-riyal">ê</span></td>
                  <td>{{ data.due  }} <span class="saudi-riyal">ê</span></td>
                  <td>
                    <span v-if="data.status === 1" class="badge bg-success">{{
                      $t("Active")
                    }}</span>
                    <span v-else class="badge bg-danger">{{
                      $t("Inactive")
                    }}</span>
                  </td>
                </tr>
                <tr v-if="!invoices || !invoices.length">
                  <td colspan="8" class="text-center no-data-message">
                    <div class="no-data-content">
                      <i class="fas fa-inbox fa-3x text-muted mb-3"></i>
                      <h5 class="text-muted">{{ $t("No Invoices Found") }}</h5>
                      <p class="text-muted">{{ $t("There are no recent invoices to display.") }}</p>
                    </div>
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
                <tr v-if="purchases && purchases.length" v-for="(data, i) in purchases" :key="i">
                  <td>{{ ++i }}</td>
                  <td>
                    <router-link
                      :to="{
                        name: 'purchases.show',
                        params: { slug: data.slug },
                      }"
                    >
                      {{ data.code | withPrefix(prefix) }} </router-link
                    ><br />
                  </td>
                  <td>
                    <span v-if="data.purchaseDate">{{
                      data.purchaseDate | moment("Do MMM, YYYY")
                    }}</span>
                  </td>
                  <td>{{ data.supplierName }}</td>
                  <td>{{ data.subTotal  }} <span class="saudi-riyal">ê</span></td>
                  <td>{{ data.purchaseTotal  }} <span class="saudi-riyal">ê</span></td>
                  <td>{{ data.due  }} <span class="saudi-riyal">ê</span></td>
                  <td>
                    <span v-if="data.status === 1" class="badge bg-success">{{
                      $t("Active")
                    }}</span>
                    <span v-else class="badge bg-danger">{{
                      $t("Inactive")
                    }}</span>
                  </td>
                </tr>
                <tr v-if="!purchases || !purchases.length">
                  <td colspan="8" class="text-center no-data-message">
                    <div class="no-data-content">
                      <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                      <h5 class="text-muted">{{ $t("No Purchases Found") }}</h5>
                      <p class="text-muted">{{ $t("There are no recent purchases to display.") }}</p>
                    </div>
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
                <tr v-if="expenses && expenses.length" v-for="(data, i) in expenses" :key="i">
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
                    <span v-if="data.transaction">{{
                      data.transaction.amount | withCurrency
                    }}</span>
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
                <tr v-if="!expenses || !expenses.length">
                  <td colspan="7" class="text-center no-data-message">
                    <div class="no-data-content">
                      <i class="fas fa-receipt fa-3x text-muted mb-3"></i>
                      <h5 class="text-muted">{{ $t("No Expenses Found") }}</h5>
                      <p class="text-muted">{{ $t("There are no recent expenses to display.") }}</p>
                    </div>
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
                <tr v-if="transactions && transactions.length" v-for="(data, i) in transactions" :key="i">
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
                  <td>{{ data.amount  }} <span class="saudi-riyal">ê</span></td>
                  <td class="text-right">
                    <span v-if="data.status === 1" class="badge bg-success">{{
                      $t("Active")
                    }}</span>
                    <span v-else class="badge bg-danger">{{
                      $t("Inactive")
                    }}</span>
                  </td>
                </tr>
                <tr v-if="!transactions || !transactions.length">
                  <td colspan="7" class="text-center no-data-message">
                    <div class="no-data-content">
                      <i class="fas fa-exchange-alt fa-3x text-muted mb-3"></i>
                      <h5 class="text-muted">{{ $t("No Transactions Found") }}</h5>
                      <p class="text-muted">{{ $t("There are no recent transactions to display.") }}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "RecentActivities",
  data: () => ({
    invoices: "",
    purchases: "",
    expenses: "",
    transactions: "",
    prefix: "",
    subCatPrefix: "",
    loading: false,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo"]),
  },
  created() {
    this.getInvoices();
    this.prefix = this.appInfo ? this.appInfo.productPrefix : "";
    this.subCatPrefix = this.appInfo.expSubCatPrefix;
  },
  methods: {
    // get invoices
    async getInvoices() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/recent-invoices"
      );
      this.invoices = data.data;
      this.loading = false;
    },
    // get purchases
    async getPurchases() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/recent-purchases"
      );
      this.purchases = data.data;
      this.loading = false;
    },
    // get expenses
    async getExpenses() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/recent-expenses"
      );
      this.expenses = data.data;
      this.loading = false;
    },
    // get transactions
    async getTransactions() {
      this.loading = true;
      const { data } = await axios.get(
        window.location.origin + "/api/dashboard/recent-transactions"
      );
      this.transactions = data.data;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* Card styling to match dashboard */
.card {
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 0 0 20px 20px;
  position: relative;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #33A0D9, transparent);
  opacity: 0.3;
}

/* SVG Icon styling in card header */
.card-header h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 1.25rem;
  color: #023033;
  margin: 0;
}

.card-header h3 svg {
  width: 44px;
  height: 44px;
  background: #33A0D91A;
  color: #33A0D9;
  border-radius: 10px;
  padding: 8px;
  margin-right: 12px;
  font-weight: bold;
  box-sizing: border-box;
}

/* Professional Table Container */
.table-custom {
  border: none !important;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-top: 0;
}

/* Professional Loading State */
.table-loading {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  color: #64748b;
  font-weight: 600;
}

/* Enhanced Table Responsive */
.table-responsive {
  border-radius: 12px;
  background: #ffffff;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #33a0d9 #f1f5f9;
}

/* Custom scrollbar for webkit browsers */
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

/* More specific selectors to override any conflicting styles */
.table-responsive .invoices-table thead th {
  background-color: #33a0d9 !important;
  color: #ffffff !important;
}

.card .invoices-table thead th {
  background-color: #33a0d9 !important;
  color: #ffffff !important;
}

/* Most specific selector to ensure override */
.card-body .table-responsive .invoices-table thead th {
  background-color: #33a0d9 !important;
  color: #ffffff !important;
  background: #33a0d9 !important;
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

/* Professional Tab Styling */
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

/* Custom Status Badge Styling */
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

/* Professional Hover Effects */
.invoices-table tbody tr {
  transition: all 0.2s ease;
}

.invoices-table tbody tr:hover {
  background: rgba(51, 160, 217, 0.04);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Professional Link Styling */
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

/* Professional Empty State */
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

/* Responsive Design Enhancements */
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
  
  .nav-tabs .nav-link {
    padding: 10px 14px;
    font-size: 0.9rem;
    margin-right: 4px;
  }
}

@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem 1rem;
  }
  
  .nav-tabs {
    flex-wrap: wrap;
    gap: 4px;
  }
  
  .nav-tabs .nav-link {
    padding: 8px 12px;
    font-size: 0.85rem;
    margin-right: 2px;
    flex: 1;
    min-width: 0;
    text-align: center;
  }
  
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
  .card-body {
    padding: 1rem 0.75rem;
  }
  
  .nav-tabs {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
  }
  
  .nav-tabs .nav-link {
    padding: 6px 8px;
    font-size: 0.8rem;
    margin-right: 0;
    flex: 1;
    min-width: 0;
    text-align: center;
    border-radius: 6px;
  }
  
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
  
  /* Make badges smaller on mobile */
  .invoices-table .badge {
    font-size: 0.7rem !important;
    padding: 4px 8px !important;
  }
  
  /* Adjust no-data message for mobile */
  .no-data-message {
    padding: 2rem 0.5rem !important;
  }
  
  .no-data-content {
    padding: 1rem;
  }
  
  .no-data-content i {
    font-size: 1.5rem !important;
  }
  
  .no-data-content h5 {
    font-size: 1rem;
  }
  
  .no-data-content p {
    font-size: 0.8rem;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .card-body {
    padding: 0.75rem 0.5rem;
  }
  
  .nav-tabs .nav-link {
    padding: 5px 6px;
    font-size: 0.75rem;
  }
  
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

/* No Data Message Styling */
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

/* Responsive adjustments for no data messages */
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
