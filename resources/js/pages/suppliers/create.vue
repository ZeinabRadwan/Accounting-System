<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t("Create a supplier") }}</h3>
            <router-link :to="{ name: 'suppliers.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveSupplier" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <SupplierForm @submit="saveSupplier" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SupplierForm from "../../components/SupplierForm.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Supplier") };
  },
  components: {
    SupplierForm,
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    breadcrumbsCurrent: "Create Supplier",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Suppliers",
        url: "suppliers.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
  }),
  methods: {
    // save supplier
    async saveSupplier(formData) {
      try {
        // Make API call to create supplier
        const response = await this.$http.post("/api/suppliers", formData);
        
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier added successfully"),
          });
          this.$router.push({ name: "suppliers.index" });
        } else {
          throw new Error(response.data.message || "Failed to create supplier");
        }
      } catch (error) {
        console.error("Error creating supplier:", error);
        toast.fire({
          type: "error",
          title: this.$t("Opps...something went wrong"),
        });
      }
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.vue-tel-input {
  padding: 3px;
}
</style>
