<template>
  <div class="content-wrapper">
    <app-breadcrumb
      :page-title="$t('clients')"
      :directory="$t('datatables')"
      :icon="'grid'"
    />
  
    <div class="row">
      <!-- Pagination section -->
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "./client-list";

export default {
  name: "ClientDatatable",
  components: {
    Pagination,
  },
  data() {
    return {
      paginationInstruction: [this.$t("datatable_paginate_note")],
    };
  },
};
</script>