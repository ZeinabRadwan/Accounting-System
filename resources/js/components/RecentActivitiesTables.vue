<template>
  <div class="tab-content" id="custom-content-below-tabContent">
    <div class="tab-pane fade active show" id="invoices" role="tabpanel" aria-labelledby="invoices-tab">
      <table-loading v-show="loading" />
      <GeneralTable :columns="invoiceColumns" :rows="invoicesWithIndex" :loading="loading">
        <template #cell-invoiceNo="{ row }">
          <router-link :to="{
            name: 'invoices.show',
            params: { slug: row.slug },
          }">
            {{ row.invoiceNo | withPrefix(prefix) }}
          </router-link>
        </template>
        <template #cell-invoiceDate="{ row }">
          <span v-if="row.invoiceDate">{{
            row.invoiceDate | moment("Do MMM, YYYY")
            }}</span>
        </template>
        <template #cell-subTotal="{ row }">
          {{ row.subTotal }} <span class="saudi-riyal">ê</span>
        </template>
        <template #cell-invoiceTotal="{ row }">
          {{ row.invoiceTotal }} <span class="saudi-riyal">ê</span>
        </template>
        <template #cell-due="{ row }">
          {{ row.due }} <span class="saudi-riyal">ê</span>
        </template>
        <template #cell-status="{ row }">
          <span v-if="row.status === 1" class="badge bg-success">{{
            $t("Active")
            }}</span>
          <span v-else class="badge bg-danger">{{
            $t("Inactive")
            }}</span>
        </template>
      </GeneralTable>
    </div>

    <div class="tab-pane fade" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
      <table-loading v-show="loading" />
      <GeneralTable :columns="purchaseColumns" :rows="purchasesWithIndex" :loading="loading">
        <template #cell-code="{ row }">
          <router-link :to="{
            name: 'purchases.show',
            params: { slug: row.slug },
          }">
            {{ row.code | withPrefix(prefix) }}
          </router-link>
          <br />
        </template>
        <template #cell-purchaseDate="{ row }">
          <span v-if="row.purchaseDate">{{
            row.purchaseDate | moment("Do MMM, YYYY")
            }}</span>
        </template>
        <template #cell-subTotal="{ row }">
          {{ row.subTotal }} <span class="saudi-riyal">ê</span>
        </template>
        <template #cell-purchaseTotal="{ row }">
          {{ row.purchaseTotal }} <span class="saudi-riyal">ê</span>
        </template>
        <template #cell-due="{ row }">
          {{ row.due }} <span class="saudi-riyal">ê</span>
        </template>
        <template #cell-status="{ row }">
          <span v-if="row.status === 1" class="badge bg-success">{{
            $t("Active")
            }}</span>
          <span v-else class="badge bg-danger">{{
            $t("Inactive")
            }}</span>
        </template>
      </GeneralTable>
    </div>

    <div class="tab-pane fade" id="expenses" role="tabpanel" aria-labelledby="expenses-tab">
      <table-loading v-show="loading" />
      <GeneralTable :columns="expenseColumns" :rows="expensesWithIndex" :loading="loading">
        <template #cell-subCategory="{ row }">
          <span v-if="row.subCategory">
            {{ row.subCategory.name }} [{{
              row.subCategory.code | withPrefix(subCatPrefix)
            }}]
          </span>
        </template>
        <template #cell-reason="{ row }">
          <router-link :to="{
            name: 'expenses.show',
            params: { slug: row.slug },
          }">
            {{ row.reason }}
          </router-link>
        </template>
        <template #cell-amount="{ row }">
          <span v-if="row.transaction">
            {{ row.transaction.amount }}
            <span class="saudi-riyal">ê</span>
          </span>
        </template>
        <template #cell-account="{ row }">
          <span v-if="row.account">{{ row.account.label }} </span>
        </template>
        <template #cell-date="{ row }">
          <span v-if="row.date">{{
            row.date | moment("Do MMM, YYYY")
            }}</span>
        </template>
        <template #cell-status="{ row }">
          <span v-if="row.status === 1" class="badge bg-success">{{
            $t("Active")
            }}</span>
          <span v-else class="badge bg-danger">{{
            $t("Inactive")
            }}</span>
        </template>
      </GeneralTable>
    </div>

    <div class="tab-pane fade" id="transactions" role="tabpanel" aria-labelledby="transactions-tab">
      <table-loading v-show="loading" />
      <GeneralTable :columns="transactionColumns" :rows="transactionsWithIndex" :loading="loading">
        <template #cell-transactionDate="{ row }">
          <span v-if="row.transactionDate">{{
            row.transactionDate | moment("Do MMM, YYYY")
            }}</span>
        </template>
        <template #cell-type="{ row }">
          <span v-if="row.type === 1" class="badge bg-success">{{
            $t("Credit")
            }}</span>
          <span v-else class="badge bg-danger">{{
            $t("Debit")
            }}</span>
        </template>
        <template #cell-account="{ row }">
          <span v-if="row.account">{{ row.account.label }}</span>
        </template>
        <template #cell-amount="{ row }">
          {{ row.amount }} <span class="saudi-riyal">ê</span>
        </template>
        <template #cell-status="{ row }">
          <span v-if="row.status === 1" class="badge bg-success">{{
            $t("Active")
            }}</span>
          <span v-else class="badge bg-danger">{{
            $t("Inactive")
            }}</span>
        </template>
      </GeneralTable>
    </div>
  </div>
</template>

<script>
import GeneralTable from "./GeneralTable.vue";

export default {
  name: "RecentActivitiesTables",
  components: {
    GeneralTable,
  },
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
  computed: {
    invoiceColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "invoiceNo", label: this.$t("Invoice No") },
        { key: "invoiceDate", label: this.$t("Invoice Date") },
        { key: "client", label: this.$t("Client") },
        { key: "subTotal", label: this.$t("Subtotal") },
        { key: "invoiceTotal", label: this.$t("Net Total") },
        { key: "due", label: this.$t("Total Due") },
        { key: "status", label: this.$t("Status") },
      ];
    },
    purchaseColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "code", label: this.$t("Purchase No") },
        { key: "purchaseDate", label: this.$t("Date") },
        { key: "supplierName", label: this.$t("Supplier") },
        { key: "subTotal", label: this.$t("Subtotal") },
        { key: "purchaseTotal", label: this.$t("Net Total") },
        { key: "due", label: this.$t("Total Due") },
        { key: "status", label: this.$t("Status") },
      ];
    },
    expenseColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "subCategory", label: this.$t("Sub Category") },
        { key: "reason", label: this.$t("Expense Reason") },
        { key: "amount", label: this.$t("Amount") },
        { key: "account", label: this.$t("Account") },
        { key: "date", label: this.$t("Date") },
        { key: "status", label: this.$t("Status") },
      ];
    },
    transactionColumns() {
      return [
        { key: "index", label: this.$t("#"), sortable: false },
        { key: "reason", label: this.$t("Reason") },
        { key: "transactionDate", label: this.$t("Date") },
        { key: "type", label: this.$t("Type") },
        { key: "account", label: this.$t("Account") },
        { key: "amount", label: this.$t("Amount") },
        { key: "status", label: this.$t("Status"), align: "text-right" },
      ];
    },
    invoicesWithIndex() {
      return this.invoices.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
    purchasesWithIndex() {
      return this.purchases.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
    expensesWithIndex() {
      return this.expenses.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
    transactionsWithIndex() {
      return this.transactions.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
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
</style>
