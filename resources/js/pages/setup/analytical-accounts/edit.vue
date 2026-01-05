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
        <form role="form" @submit.prevent="updateAnalyticalAccount" @keydown="form.onKeydown($event)">
          <div class="card">
            <div class="card-header setings-header">
              <div class="col-xl-4 col-4">
                <h3 class="card-title">
                  {{ $t("Edit Analytical Account") }}
                </h3>
              </div>
              <div class="col-xl-8 col-8 float-right text-right">
                <router-link :to="{ name: 'analyticalAccounts.index' }" class="btn btn-info float-right">
                  <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">
                    {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />
                  </template>
                  <template v-else>
                    <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
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
                <label for="code">{{ $t("Code") }}</label>
                <input id="code" v-model="form.code" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('code') }" name="code"
                  :placeholder="$t('Enter a code (optional)')" />
                <has-error :form="form" field="code" />
              </div>
              <div class="form-group">
                <label for="type">{{ $t("Type") }}</label>
                <select id="type" v-model="form.type" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('type') }">
                  <option value="">{{ $t("Select") }}</option>
                  <option value="payment">{{ $t("Payment") }}</option>
                  <option value="channel">{{ $t("Channel") }}</option>
                  <option value="platform">{{ $t("Platform") }}</option>
                </select>
                <has-error :form="form" field="type" />
              </div>
              <div class="form-group">
                <label for="branch">{{ $t("Branch") }}
                  <span class="required">*</span></label>
                <v-select
                  v-model="form.branchId"
                  :options="branches"
                  label="name"
                  :reduce="option => option.id"
                  :class="{ 'is-invalid': form.errors.has('branch_id') }"
                  name="branchId"
                  :placeholder="$t('Select a branch')"
                >
                  <template #option="{ name }">
                    <div>
                      <strong>{{ name }}</strong>
                    </div>
                  </template>
                </v-select>
                <has-error :form="form" field="branch_id" />
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
            </div>
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-success">
                <i class="fas fa-edit" /> {{ $t("Save changes") }}
              </v-button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import axios from "axios";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Edit Analytical Account") };
  },
  data: () => ({
    breadcrumbsCurrent: "Edit Analytical Account",
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
        name: "Analytical Accounts",
        url: "analyticalAccounts.index",
      },
      {
        name: "Edit",
        url: "",
      },
    ],
    form: new Form({
      name: "",
      code: "",
      type: "",
      branch_id: null,
      status: 1,
    }),
    branches: [],
  }),
  mounted() {
    this.loadBranches();
    this.getAnalyticalAccount();
  },
  methods: {
    // load branches
    async loadBranches() {
      try {
        const user = this.$store.getters['auth/user'];
        const isSuperAdmin = user && Number(user.account_role) === 1;
        let branchesData = [];

        if (isSuperAdmin) {
          // Load all branches for superadmin
          const response = await axios.get('/api/branches', {
            params: { perPage: 1000 }
          });
          if (response.data && response.data.data && Array.isArray(response.data.data)) {
            branchesData = response.data.data;
          } else if (Array.isArray(response.data)) {
            branchesData = response.data;
          } else if (Array.isArray(response.data.data)) {
            branchesData = response.data.data;
          }
        } else if (user && user.id) {
          // Load user's assigned branches
          try {
            const response = await axios.get(`/api/users/${user.id}/branches`);
            if (Array.isArray(response.data)) {
              branchesData = response.data;
            } else if (response.data && Array.isArray(response.data.data)) {
              branchesData = response.data.data;
            }
          } catch (userBranchesError) {
            // Fallback to all branches if user branches fail
            const fallbackResponse = await axios.get('/api/branches', {
              params: { perPage: 1000 }
            });
            if (fallbackResponse.data && fallbackResponse.data.data && Array.isArray(fallbackResponse.data.data)) {
              branchesData = fallbackResponse.data.data;
            } else if (Array.isArray(fallbackResponse.data)) {
              branchesData = fallbackResponse.data;
            }
          }
        }

        this.branches = branchesData;
      } catch (error) {
        console.error('Error loading branches:', error);
        this.branches = [];
        toast.fire({
          type: 'error',
          title: this.$t('Error'),
          text: this.$t('Failed to load branches')
        });
      }
    },
    // get analytical account
    async getAnalyticalAccount() {
      try {
        const { data } = await axios.get(
          window.location.origin +
          "/api/analytical-accounts/" +
          this.$route.params.id
        );
        // Handle both wrapped response and direct resource response
        const accountData = data.success && data.data ? data.data : data;
        if (accountData) {
          this.form.name = accountData.name || "";
          this.form.code = accountData.code || "";
          this.form.type = accountData.type || "";
          this.form.branchId = accountData.branch_id || null;
          // Convert status to string for select element (handles both boolean and integer)
          const statusValue = accountData.status !== undefined ? accountData.status : 1;
          this.form.status = statusValue === true || statusValue === 1 || statusValue === '1' ? '1' : '0';
        }
      } catch (error) {
        toast.fire({
          type: "error",
          title: this.$t("Error!"),
          text: error.response?.data?.message || this.$t("Failed to load analytical account."),
        });
        this.$router.push({ name: "analyticalAccounts.index" });
      }
    },

    // update analytical account
    async updateAnalyticalAccount() {
      // Set branch_id in form (required)
      this.form.branch_id = this.form.branchId;

      await this.form
        .patch(
          window.location.origin +
          "/api/analytical-accounts/" +
          this.$route.params.id
        )
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Analytical Account updated successfully"),
          });
          this.$router.push({ name: "analyticalAccounts.index" });
        })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            toast.fire({
              type: "error",
              title: this.$t("Validation Error"),
              text: error.response.data.message || this.$t("Please check your input and try again."),
            });
          } else {
            toast.fire({
              type: "error",
              title: this.$t("Error!"),
              text: error.response?.data?.message || this.$t("Failed to update analytical account."),
            });
          }
        });
    },
  },
};
</script>


