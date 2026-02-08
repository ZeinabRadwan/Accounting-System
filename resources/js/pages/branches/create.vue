<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'branches.index' }" class="btn btn-info">
                  <template v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">
                    {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />
                  </template>
                  <template v-else>
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
                  </template>
                </router-link>
                <button type="submit" class="btn btn-success" :form="'branchCreateForm'">
                  <i class="fas fa-save" /> {{ $t('Save') }}
                </button>
              </div>
            </div>
          </div>
          <form role="form" id="branchCreateForm" @submit.prevent="createBranch">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t("Name") }} <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter branch name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="code">{{ $t("Code") }} <span class="required">*</span></label>
                  <input id="code" v-model="form.code" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('code') }" name="code"
                    :placeholder="$t('Enter branch code')" maxlength="50" />
                  <small class="form-text text-muted">{{ $t('Leave empty to auto-generate from branch name') }}</small>
                  <has-error :form="form" field="code" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="phone">{{ $t("Phone") }}</label>
                  <input id="phone" v-model="form.phone" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('phone') }" name="phone"
                    :placeholder="$t('Enter phone number')" />
                  <has-error :form="form" field="phone" />
                </div>
                <div class="form-group col-md-6">
                  <label for="email">{{ $t("Email") }}</label>
                  <input id="email" v-model="form.email" type="email" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                    :placeholder="$t('Enter email address')" />
                  <has-error :form="form" field="email" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="address">{{ $t("Address") }}</label>
                  <textarea id="address" v-model="form.address" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('address') }" name="address"
                    :placeholder="$t('Enter branch address')" rows="3"></textarea>
                  <has-error :form="form" field="address" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-12">
                  <label for="description">{{ $t("Description") }}</label>
                  <textarea id="description" v-model="form.description" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('description') }" name="description"
                    :placeholder="$t('Enter description')" rows="3"></textarea>
                  <has-error :form="form" field="description" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <div class="custom-control custom-switch">
                    <input id="is_active" v-model="form.is_active" type="checkbox" class="custom-control-input"
                      name="is_active" />
                    <label class="custom-control-label" for="is_active">{{ $t("Active") }}</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import { mapGetters } from "vuex";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Branch") };
  },
  data() {
    return {
      breadcrumbsCurrent: "",
      breadcrumbs: [],
      form: new Form({
        name: "",
        code: "",
        phone: "",
        email: "",
        address: "",
        description: "",
        is_active: true
      })
    };
  },
  mounted() {
    this.breadcrumbsCurrent = this.$t("Create Branch");
    this.breadcrumbs = [
      {
        name: this.$t("Dashboard"),
        url: "home"
      },
      {
        name: this.$t("Branches"),
        url: "branches.index"
      },
      {
        name: this.$t("Create Branch"),
        url: "branches.create"
      }
    ];
  },
  methods: {
    /**
     * Generate a default branch code from name (slug) or fallback to BR-timestamp.
     */
    getDefaultBranchCode() {
      if (this.form.name && String(this.form.name).trim()) {
        const slug = String(this.form.name)
          .trim()
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        if (slug) {
          return slug.substring(0, 50);
        }
      }
      return 'BR-' + Date.now();
    },

    async createBranch() {
      this.form.errors.clear();

      const code = this.form.code != null ? String(this.form.code).trim() : '';
      const payload = {
        name: this.form.name,
        code: code || this.getDefaultBranchCode(),
        phone: this.form.phone,
        email: this.form.email,
        address: this.form.address,
        description: this.form.description,
        is_active: this.form.is_active
      };

      try {
        const { data } = await this.$axios.post('/api/branches', payload);

        this.$toast.success(this.$t('Success'), this.$t('Branch created successfully'));
        this.$router.push({ name: 'branches.index' });
      } catch (error) {
        const message = error.response?.data?.message || this.$t('Failed to create branch');
        const errors = error.response?.data?.errors;
        if (errors) {
          this.form.errors.set(errors);
        }
        this.$toast.error(this.$t('Error'), message);
      }
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

/* Improved toggle (switch) styling */
.custom-control.custom-switch {
  display: flex;
  align-items: center;
  height: 44px;
}

.custom-control.custom-switch .custom-control-label {
  padding-left: 3.25rem;
  min-height: 1.5rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

/* Track */
.custom-control.custom-switch .custom-control-label::before {
  left: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
  width: 3.0rem;
  height: 1.6rem;
  border-radius: 1rem;
  background-color: #e5e7eb;
  border: 1px solid #d1d5db;
  box-shadow: none;
}

/* Thumb */
.custom-control.custom-switch .custom-control-label::after {
  top: 50%;
  left: 0.4rem;
  transform: translateY(-50%);
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.12);
}

/* Checked state */
.custom-control-input:checked ~ .custom-control-label::before {
  background-color: #2AB930;
  border-color: #2AB930;
}
.custom-control-input:checked ~ .custom-control-label::after {
  left: 2.05rem;
}

/* Focus ring */
.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(42,185,48,0.15);
}

/* Disabled state */
.custom-control-input:disabled ~ .custom-control-label {
  color: #9ca3af;
  cursor: not-allowed;
}
.custom-control-input:disabled ~ .custom-control-label::before {
  background-color: #f3f4f6;
  border-color: #e5e7eb;
}

/* Reduce extra top padding on small screens */
@media (max-width: 576px) {
  .custom-control.custom-switch .custom-control-label {
    padding-left: 3rem;
  }
}

/* RTL adjustments */
[dir="rtl"] .custom-control.custom-switch .custom-control-label {
  padding-right: 3.25rem;
  padding-left: 0;
}
[dir="rtl"] .custom-control.custom-switch .custom-control-label::before {
  right: 0.25rem;
  left: auto;
}
[dir="rtl"] .custom-control.custom-switch .custom-control-label::after {
  right: 0.4rem;
  left: auto;
}
[dir="rtl"] .custom-control-input:checked ~ .custom-control-label::after {
  right: 2.05rem;
  left: auto;
}
</style>
