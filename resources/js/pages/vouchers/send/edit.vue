<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
          </div>
          <div class="card-body">
            <p>{{ $t('Edit Send Voucher page - Coming Soon') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "edit-send-voucher",
  data() {
    return {
      breadcrumbsCurrent: this.$t("Edit"),
      breadcrumbs: [
        {
          name: this.$t("Dashboard"),
          url: "home",
        },
        {
          name: this.$t("Vouchers"),
          url: "",
        },
        {
          name: this.$t("Send Vouchers"),
          url: "sendVouchers.index",
        },
        {
          name: this.$t("Edit"),
          active: true,
        },
      ],
    };
  },
};
</script>

