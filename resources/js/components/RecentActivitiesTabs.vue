<template>
  <ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="invoices-tab" data-toggle="pill" href="#invoices" role="tab"
        aria-controls="invoices-tab" aria-selected="true">
        {{ $t("Invoices") }}
      </a>
    </li>
    <li class="nav-item">
      <a @click="$emit('show-purchases')" class="nav-link" id="purchases-tab" data-toggle="pill" href="#purchases"
        role="tab" aria-controls="purchases-tab" aria-selected="false">
        {{ $t("Purchases") }}
      </a>
    </li>
    <li class="nav-item">
      <a @click="$emit('show-expenses')" class="nav-link" id="expenses-tab" data-toggle="pill" href="#expenses"
        role="tab" aria-controls="expenses-tab" aria-selected="false">
        {{ $t("Expenses") }}
      </a>
    </li>
    <li class="nav-item">
      <a @click="$emit('show-transactions')" class="nav-link" id="transactions-tab" data-toggle="pill"
        href="#transactions" role="tab" aria-controls="transactions-tab" aria-selected="false">
        {{ $t("Transactions") }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RecentActivitiesTabs",
};
</script>

<style scoped>
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

@media (max-width: 992px) {
  .nav-tabs .nav-link {
    padding: 10px 14px;
    font-size: 0.9rem;
    margin-right: 4px;
  }
}

@media (max-width: 768px) {
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
}

@media (max-width: 576px) {
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
}

@media (max-width: 480px) {
  .nav-tabs .nav-link {
    padding: 5px 6px;
    font-size: 0.75rem;
  }
}
</style>
