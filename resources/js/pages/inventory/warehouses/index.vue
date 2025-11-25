<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
          </div>
          <!-- /.card-header -->
          <div class="card-body position-relative">
            <div class="row">
              <div class="col-12">
                <p class="text-center text-muted">{{ $t("This page is under development") }}</p>
              </div>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Warehouses") };
  },
  data: () => ({
    breadcrumbsCurrent: "Warehouses",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Inventory Management",
        url: "",
      },
      {
        name: "Warehouses",
        url: "",
      },
    ],
  }),
};
</script>




