<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-12 col-xl-3">
        <SettingsSidebar />
      </div>
      <div class="col-12 col-xl-9">
        <form role="form" @submit.prevent="savePaymentMethod" @keydown="form.onKeydown($event)">
          <div class="card">
            <div class="card-header setings-header">
              <div class="col-xl-4 col-4">
                <h3 class="card-title">
                  {{ $t("Create a payment method") }}
                </h3>
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <router-link :to="{ name: 'paymentMethods.index' }" class="btn btn-info float-right">
                  <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                    {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

                  </template>

                  <template v-else>

                    <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                      {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                    </template>


                    <template v-else>


                      <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                    </template>

                  </template>
                </router-link>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="name">{{ $t("Name") }}
                  <span class="required">*</span></label>
                <input id="name" v-model="form.name" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                  :placeholder="$t('Enter a name')" />
                <has-error :form="form" field="name" />
              </div>
              <div class="form-group">
                <label for="shortCode">{{ $t("Short Code") }}
                  <span class="required">*</span></label>
                <input id="shortCode" v-model="form.shortCode" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('shortCode') }" name="shortCode"
                  :placeholder="$t('Enter a short code')" />
                <has-error :form="form" field="shortCode" />
              </div>
              <div class="form-group">
                <label for="status">{{ $t("Status") }}</label>
                <select id="status" v-model="form.status" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('status') }">
                  <option value="1">{{ $t("Active") }}</option>
                  <option value="0">{{ $t("Inactive") }}</option>
                </select>
                <has-error :form="form" field="status" />
              </div>

              <div class="form-group">
                <label for="note">{{ $t("Note") }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>

              <div class="form-group">
                <label for="analyticalAccountId">{{ $t("Analytical Account") }}
                  <span class="required">*</span></label>
                <v-select
                  v-model="form.analyticalAccountId"
                  :options="analyticalAccounts"
                  label="name"
                  :reduce="option => option.id"
                  :class="{ 'is-invalid': form.errors.has('analyticalAccountId') }"
                  name="analyticalAccountId"
                  :placeholder="$t('Select an Analytical Account')"
                >
                  <template #option="{ name, code, type }">
                    <div>
                      <strong>{{ name }}</strong>
                      <br>
                      <small class="text-muted">{{ code || '-' }} - {{ type || '-' }}</small>
                    </div>
                  </template>
                </v-select>
                <has-error :form="form" field="analyticalAccountId" />
                <small class="form-text text-muted">
                  {{ $t("Used for analytical reporting and payment method tracking") }}
                </small>
              </div>
            </div>

            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-success">
                <i class="fas fa-save" /> {{ $t("Save") }}
              </v-button>
              <button type="reset" class="btn btn-info float-right" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t("Reset") }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Payment Method") };
  },
  data: () => ({
    breadcrumbsCurrent: "Create Payment Method",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Setup",
        url: "setup.index",
      },
      {
        name: "Payment Methods",
        url: "paymentMethods.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: new Form({
      name: "",
      note: "",
      status: 1,
      shortCode: "",
      analyticalAccountId: null,
    }),
    loading: true,
    analyticalAccounts: [],
  }),
  mounted() {
    this.loadAnalyticalAccounts();
  },
  methods: {
    // load analytical accounts
    async loadAnalyticalAccounts() {
      try {
        const response = await this.$axios.get('/api/analytical-accounts', {
          params: { perPage: 1000, status: 1 } // Get all active analytical accounts
        });
        if (response.data && response.data.success) {
          this.analyticalAccounts = response.data.data || [];
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
          this.analyticalAccounts = response.data.data;
        } else {
          this.analyticalAccounts = [];
        }
      } catch (error) {
        console.error('Error loading analytical accounts:', error);
        this.analyticalAccounts = [];
        toast.fire({
          type: 'error',
          title: this.$t('Failed to load analytical accounts')
        });
      }
    },
    // save payment method
    async savePaymentMethod() {
      // Set analytical_account_id in form
      this.form.analytical_account_id = this.form.analyticalAccountId || null;

      await this.form
        .post(window.location.origin + "/api/payment-methods")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Payment Method added successfully"),
          });
          this.$router.push({ name: "paymentMethods.index" });
        })
        .catch(() => {
          toast.fire({
            type: "error",
            title: this.$t("Error!"),
          });
        });
    },
  },
};
</script>
