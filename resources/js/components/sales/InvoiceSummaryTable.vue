<template>
  <div class="table-responsive table-custom table-border-y-0">
    <table class="table invoices-table">
      <tbody>
        <tr class="text-bold">
          <th>الإجمالي الفرعي:</th>
          <td>{{ formatNumber(subtotal) }} <span class="saudi-riyal">ê</span></td>
        </tr>
        <tr class="text-bold">
          <th>بعد الخصم:</th>
          <td>{{ formatNumber(afterDiscount) }} <span class="saudi-riyal">ê</span></td>
        </tr>
        <tr>
          <th>إجمالي الضريبة:</th>
          <td>{{ formatNumber(totalTax) }} <span class="saudi-riyal">ê</span></td>
        </tr>
        <tr v-if="transport > 0">
          <th>النقل:</th>
          <td>{{ formatNumber(transport) }} <span class="saudi-riyal">ê</span></td>
        </tr>
        <tr class="text-bold">
          <th>الإجمالي الكلي:</th>
          <td>
             
            {{ formatNumber(grandTotal) }} <span class="saudi-riyal">ê</span>
          </td>
        </tr>
        <tr>
          <th>إجمالي المدفوع:</th>
          <td>{{ formatNumber(paidAmount) }} <span class="saudi-riyal">ê</span></td>
        </tr>
        <tr class="text-bold">
          <th>المستحق:</th>
          <td>{{ formatNumber(dueAmount) }} <span class="saudi-riyal">ê</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  subtotal: {
    type: Number,
    default: 0,
  },
  afterDiscount: {
    type: Number,
    default: 0,
  },
  totalTax: {
    type: Number,
    default: 0,
  },
  transport: {
    type: Number,
    default: 0,
  },
  grandTotal: {
    type: Number,
    default: 0,
  },
  paidAmount: {
    type: Number,
    default: 0,
  },
  dueAmount: {
    type: Number,
    default: 0,
  },
});

/**
 * Format number to 2 decimal places
 */
const formatNumber = (value) => {
  if (value === null || value === undefined || isNaN(value)) {
    return '0.00';
  }
  return parseFloat(value).toFixed(2);
};
</script>

<style scoped>
.table-responsive {
  background-color: white;
}

.invoices-table {
  border: 1px solid #CBD0DD;
  border-radius: 8px;
  padding: 10px 15px;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  font-size: 0.9rem;
}

.invoices-table tbody th {
  text-align: right;
  padding: 6px 10px;
  font-weight: 500;
  border: none;
  font-size: 0.9rem;
}

.invoices-table tbody td {
  text-align: left;
  padding: 6px 10px;
  border: none;
  font-size: 0.9rem;
}

.invoices-table tbody tr {
  border-bottom: 1px solid #e5e7eb;
  background-color: white;
}

.invoices-table tbody tr:last-child {
  border-bottom: none;
}

.text-bold {
  font-weight: 700;
}

.equal-sign {
  margin-left: 4px;
  margin-right: 4px;
  font-weight: 600;
}

.saudi-riyal {
  font-family: Arial, sans-serif;
}

/* RTL support */
[dir="rtl"] .invoices-table tbody th {
  text-align: right;
}

[dir="rtl"] .invoices-table tbody td {
  text-align: left;
}

[dir="ltr"] .invoices-table tbody th {
  text-align: right;
}

[dir="ltr"] .invoices-table tbody td {
  text-align: left;
}

/* Spacing between rows */
.invoices-table tbody tr {
  margin-bottom: 2px;
}

.table-custom {
  border: none !important;
}

.table-border-y-0 {
  border-top: none !important;
  border-bottom: none !important;
}
</style>

