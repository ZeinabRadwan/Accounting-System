<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Edit Supplier') }}</h3>
            <router-link :to="{ name: 'suppliers.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <SupplierForm :initialData="supplierData" @submit="updateSupplier" />
          </div>
          <!-- /.card-body -->
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
    return { title: this.$t("Edit Supplier") };
  },
  components: {
    SupplierForm,
  },
  data: () => ({
    breadcrumbsCurrent: "Edit Supplier",
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
        name: "Edit",
        url: "",
      },
    ],
    supplierData: {},
  }),
  created() {
    this.getSupplier();
  },
  methods: {
    // get supplier
    async getSupplier() {
      try {
        const response = await this.$http.get(`/api/suppliers/${this.$route.params.slug}`);
        if (response.data.success) {
          const supplier = response.data.data;
          this.supplierData = {
            // Account Details
            codeNumber: supplier.supplier_id ? supplier.supplier_id.toString().padStart(6, '0') : "000001",
            notes: supplier.notes || "",
            displayLanguage: supplier.display_language || "",
            
            // Supplier Details
            type: supplier.type || "Company",
            fullName: supplier.full_name || "",
            businessName: supplier.business_name || "",
            firstName: supplier.first_name || "",
            lastName: supplier.last_name || "",
            phone: supplier.phone || "",
            phoneNumber: supplier.phone || "",
            email: supplier.email || "",
            streetAddress1: supplier.street_address1 || "",
            streetAddress2: supplier.street_address2 || "",
            city: supplier.city || "",
            state: supplier.state || "",
            postalCode: supplier.postal_code || "",
            country: supplier.country || "SA",
            neighbourhood: supplier.neighbourhood || "",
            commercialRegister: supplier.commercial_register || "",
            taxCard: supplier.tax_card || "",
            
            // Additional Fields
            image: supplier.image || "",
            attachments: supplier.attachments ? JSON.parse(supplier.attachments) : [],
            status: supplier.status !== undefined ? supplier.status : 1,
            isSendEmail: supplier.is_send_email || false,
            isSendSMS: supplier.is_send_sms || false,
            
            // Legacy fields for backward compatibility
            name: supplier.name || "",
            companyName: supplier.company_name || "",
            taxRegistrationNumber: supplier.tax_registration_number || "",
          };
        }
      } catch (error) {
        console.error("Error getting supplier:", error);
      }
    },

    // update supplier
    async updateSupplier(formData) {
      try {
        // Make API call to update supplier
        const response = await this.$http.put(`/api/suppliers/${this.$route.params.slug}`, formData);
        
        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier updated successfully"),
          });
          this.$router.push({ name: "suppliers.index" });
        } else {
          throw new Error(response.data.message || "Failed to update supplier");
        }
      } catch (error) {
        console.error("Error updating supplier:", error);
        toast.fire({
          type: "error",
          title: this.$t("Opps...something went wrong"),
        });
      }
    },
  },
};
</script>
