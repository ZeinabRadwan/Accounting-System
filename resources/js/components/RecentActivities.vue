<template>
  <div class="card">
    <CardHeader>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </template>
      <template #title>
        {{ $t("Recent Activities") }}
      </template>
    </CardHeader>
    <div class="card-body mb-3">
      <RecentActivitiesTabs @show-purchases="getPurchases" @show-expenses="getExpenses"
        @show-transactions="getTransactions" />
      <RecentActivitiesTables :loading="loading" :invoices="invoices" :purchases="purchases" :expenses="expenses"
        :transactions="transactions" :prefix="prefix" :sub-cat-prefix="subCatPrefix" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import RecentActivitiesTabs from "./RecentActivitiesTabs.vue";
import RecentActivitiesTables from "./RecentActivitiesTables.vue";
import CardHeader from "./CardHeader.vue";

export default {
  name: "RecentActivities",
  components: {
    RecentActivitiesTabs,
    RecentActivitiesTables,
    CardHeader,
  },
  data: () => ({
    invoices: [],
    purchases: [],
    expenses: [],
    transactions: [],
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
  border-radius: 10px;
  border: 1px solid #CED4DA;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-body {
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
@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 576px) {
  .card-body {
    padding: 1rem 0.75rem;
  }
}
</style>
