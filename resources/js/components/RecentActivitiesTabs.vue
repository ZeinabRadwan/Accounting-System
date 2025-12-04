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
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: none;
  margin-bottom: 1.5rem;
  background: transparent;
  Background: #0775AF1A;
  padding: 10px;
  border-radius: 10px;
}

.nav-item {
  flex: 1 1 0;
}

.nav-link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  color: #000000;
  font-family: DINNextLTArabic;
  font-weight: 400;
  font-size: 0.95rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-link.active {
  background: #0775AF;
  color: #FFFFFF !important;
}

.nav-link:hover {
  filter: brightness(0.96);
}

@media (max-width: 576px) {
  .nav-tabs {
    gap: 6px;
  }

  .nav-link {
    padding: 8px 10px;
    font-size: 0.85rem;
  }
}
</style>
