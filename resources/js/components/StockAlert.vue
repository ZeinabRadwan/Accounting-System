<template>
  <div v-if="products && products.length > 0" class="card">
    <CardHeader>
      <template #icon>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </template>
      <template #title>
        {{ $t('Stock Alert') }}
      </template>
    </CardHeader>
    <div class="card-body">
      <table-loading v-show="loading" />
      <div v-if="products" class="table-responsive table-custom">
        <table class="table invoices-table">
          <thead>
            <tr>
              <th>{{ $t('#') }}</th>
              <th>{{ $t('Code') }}</th>
              <th>{{ $t('Name') }}</th>
              <th>{{ $t('Quantity') }}</th>
              <th class="text-right">
                {{ $t('Alert Quantity') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, i) in products" :key="i">
              <td>{{ ++i }}</td>
              <td>{{ data.code | withPrefix(prefix) }}</td>
              <td>
                <router-link :to="{
                  name: 'products.show',
                  params: { slug: data.slug },
                }">
                  {{ data.name }}
                </router-link>
              </td>
              <td>
                <span v-if="data.availableQty < data.alertQty" v-tooltip="$t('Stock is less than alert qty!')"
                  class="badge badge-danger p-2">
                  <i class="fas fa-exclamation"></i>
                </span>
                <span v-if="data.itemUnit">
                  {{ data.availableQty }} {{ data.itemUnit.code }}
                </span>
              </td>
              <td v-if="data.itemUnit" class="text-right">
                {{ data.alertQty }} {{ data.itemUnit.code }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import CardHeader from './CardHeader.vue'

export default {
  name: 'StockAlert',
  components: {
    CardHeader,
  },
  data: () => ({
    products: '',
    prefix: '',
    loading: false,
  }),
  // Map Getters
  computed: {
    ...mapGetters('operations', ['appInfo']),
  },
  created() {
    this.getData()
    this.prefix = this.appInfo ? this.appInfo.productPrefix : ''
  },
  methods: {
    // get products with lower stock
    async getData() {
      this.loading = true
      const { data } = await axios.get(
        window.location.origin + '/api/dashboard/stock-alert'
      )
      this.products = data.data
      this.loading = false
    },
  },
}
</script>

<style scoped>
/* Card styling to match dashboard */
.card {
  border-radius: 10px;
  border: 1px solid #ced4da;
  height: 100%;
  display: flex;
  flex-direction: column;
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

/* Table styling to match invoices page */
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
  content: 'No stock alerts available';
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

  .table-custom {
    border-radius: 8px;
  }

  .invoices-table thead th {
    padding: 6px;
    font-size: 0.85rem;
  }
}

@media (max-width: 576px) {
  .card-body {
    padding: 1rem 0.75rem;
  }

  .invoices-table thead th:first-child {
    border-top-left-radius: 8px;
  }

  .invoices-table thead th:last-child {
    border-top-right-radius: 8px;
  }
}
</style>
