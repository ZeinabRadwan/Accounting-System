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


                      <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                    </template>

                  </template>
                </router-link>
                <router-link v-if="branch && $can('branches-edit')" :to="{ name: 'branches.edit', params: { slug: branch.slug } }" class="btn btn-primary">
                  <i class="fas fa-edit" /> {{ $t('Edit') }}
                </router-link>
              </div>
            </div>
          </div>
          <div class="card-body" v-if="branch">
            <div class="row">
              <div class="col-md-6">
                <h5>{{ $t("Branch Information") }}</h5>
                <table class="table table-bordered">
                  <tr>
                    <th width="40%">{{ $t("Name") }}</th>
                    <td>{{ branch.name }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t("Code") }}</th>
                    <td>{{ branch.code || '-' }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t("Phone") }}</th>
                    <td>{{ branch.phone || '-' }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t("Email") }}</th>
                    <td>{{ branch.email || '-' }}</td>
                  </tr>
                  <tr>
                    <th>{{ $t("Main Branch") }}</th>
                    <td>
                      <span v-if="branch.is_main" class="badge badge-success">{{ $t("Yes") }}</span>
                      <span v-else class="badge badge-secondary">{{ $t("No") }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>{{ $t("Status") }}</th>
                    <td>
                      <span v-if="branch.is_active" class="badge badge-success">{{ $t("Active") }}</span>
                      <span v-else class="badge badge-danger">{{ $t("Inactive") }}</span>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-md-6" v-if="branch.address || branch.description">
                <h5>{{ $t("Additional Information") }}</h5>
                <table class="table table-bordered">
                  <tr v-if="branch.address">
                    <th width="40%">{{ $t("Address") }}</th>
                    <td>{{ branch.address }}</td>
                  </tr>
                  <tr v-if="branch.description">
                    <th>{{ $t("Description") }}</th>
                    <td>{{ branch.description }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="card-body" v-else>
            <p class="text-center">{{ $t('Branch not found') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GeneralTable from "~/components/GeneralTable";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("View Branch") };
  },
  components: {
    GeneralTable,
  },
  data() {
    return {
      branch: null,
      breadcrumbsCurrent: "",
      breadcrumbs: []
    };
  },
  async mounted() {
    this.breadcrumbsCurrent = this.$t("View Branch");
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
        name: this.$t("View Branch"),
        url: ""
      }
    ];
    await this.getBranch();
  },
  methods: {
    async getBranch() {
      try {
        const slug = this.$route.params.slug;
        const { data } = await this.$axios.get(`/api/branches/${slug}`);
        this.branch = data.branch || data;
        
        if (!this.branch) {
          this.$toast.error(this.$t("Error"), this.$t("Branch not found"));
        }
      } catch (error) {
        this.$toast.error(this.$t("Error"), this.$t("Failed to load branch"));
      }
    }
  }
};
</script>
