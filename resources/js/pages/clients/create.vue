<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    
    <!-- Chart of Account Warning Alert - Same as edit form -->
    <div class="chart-account-warning" v-if="showWarning">
      <div class="warning-content">
        <div class="warning-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="warning-text">
          <h6 class="warning-title">{{ $t('Chart of Account Required') }}</h6>
          <p class="warning-description">{{ $t('Client must have a Chart of Account assigned for journal entries') }}</p>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t("Create Client") }}</h3>
            <router-link :to="{ name: 'clients.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <ClientForm 
            ref="clientForm"
            :showCardBody="true"
            @submit="saveClient"
          />
          
          <!-- /.card-body -->
          <div class="card-footer">
            <button @click="saveClient" :disabled="isSubmitting" class="btn btn-primary">
              <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
              <i v-else class="fas fa-save"></i> 
              {{ isSubmitting ? $t("Saving...") : $t("Save") }}
            </button>
            <button type="reset" class="btn btn-secondary float-right" @click="resetForm">
              <i class="fas fa-power-off" /> {{ $t("Reset") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientForm from "../../components/ClientForm.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Client") };
  },
  components: {
    ClientForm,
  },
  data: () => ({
    breadcrumbsCurrent: "Create Client",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Clients",
        url: "clients.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: null,
    isSubmitting: false,
  }),
  computed: {
    showWarning() {
      return false; // Temporarily disable warning to test component rendering
    }
  },
  mounted() {
    console.log('Create page mounted');
    console.log('ClientForm ref:', this.$refs.clientForm);
  },
  methods: {
    // save client
    async saveClient() {
      if (this.isSubmitting) return;
      
      // Get the form from the ClientForm component
      if (!this.$refs.clientForm) {
        console.error('ClientForm reference not found');
        toast.fire({ type: "error", title: this.$t("Form not ready") });
        return;
      }
      
      this.form = this.$refs.clientForm.getFormData();
      
      // Validate the form
      if (!this.$refs.clientForm.validateForm()) {
        return;
      }
      
      this.isSubmitting = true;
      await this.form
        .post(window.location.origin + "/api/clients")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Client added successfully"),
          });
          this.$router.push({ name: "clients.index" });
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },

    // Reset form
    resetForm() {
      this.$refs.clientForm.resetForm();
    },
  },
};
</script>

<style scoped>
/* Chart of Account Warning Alert Styles - Same as edit form */
.chart-account-warning {
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 1px solid #ffc107;
}

.warning-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.warning-icon {
  font-size: 24px;
  flex-shrink: 0;
  color: #856404;
}

.warning-text {
  flex-grow: 1;
}

.warning-title {
  margin: 0 0 4px 0;
  font-weight: 600;
  font-size: 14px;
  color: #856404;
}

.warning-description {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
  color: #856404;
}

/* Responsive design */
@media (max-width: 768px) {
  .warning-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
}
</style>
