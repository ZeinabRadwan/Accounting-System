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
          <!-- form start -->
          <SupplierForm 
            ref="supplierForm"
            :showCardBody="true"
            @submit="saveSupplier"
          />
          
          <!-- /.card-body -->
          <div class="card-footer d-flex justify-content-between">
            <router-link :to="{ name: 'suppliers.index' }" class="btn btn-secondary">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
            <div>
              <button type="reset" class="btn btn-secondary" @click="resetForm">
                <i class="fas fa-power-off" /> {{ $t("Reset") }}
              </button>
              <button @click="submitForm" :disabled="isSubmitting" class="btn btn-primary">
                <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fas fa-save"></i> 
                {{ isSubmitting ? $t("Saving...") : $t("Save") }}
              </button>
            </div>
          </div>
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
    form: null,
    isSubmitting: false,
  }),
  methods: {
    // Submit form by calling SupplierForm's submitForm method
    submitForm() {
      if (this.$refs.supplierForm) {
        this.$refs.supplierForm.submitForm();
      }
    },
    
    // save supplier
    async saveSupplier(formData) {
      if (this.isSubmitting) return;
      
      this.isSubmitting = true;
      
      try {
        // Use the submitted form data directly
        const response = await this.$http.post("/api/suppliers", formData);
        
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier added successfully"),
          });
          this.$router.push({ name: "suppliers.index" });
        } else {
          throw new Error(response.data.message || 'Failed to create supplier');
        }
      } catch (error) {
        console.error("Error creating supplier:", error);
        toast.fire({ 
          type: "error", 
          title: this.$t("Opps...something went wrong") 
        });
      } finally {
        this.isSubmitting = false;
      }
    },

    // Reset form
    resetForm() {
      this.$refs.supplierForm.resetForm();
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.card {
  margin-top: 30px;
  border-radius: 20px;
}

.vue-tel-input {
  padding: 3px;
}
</style>
