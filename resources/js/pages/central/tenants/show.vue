<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row" v-if="data">
      <div class="col-md-12 col-lg-4 tenant-details">
        <div class="card card-primary card-outline">
          <div class="card-body">
            <div class="text-center">
              <img class="profile-user-img img-fluid img-circle" v-bind="getAvatarProps(data.photo_url, '', 'default-avatar.jpeg')" :alt="$t('Attached Image')" />
            </div>
            <h3 class="profile-username text-center text-capitalize">
              {{ data.name }}
            </h3>
            <a href="#" class="profile-username text-center d-block">{{
      data.email
    }}</a>
            <table>
              <tr>
                <td width="100">{{ $t("Tenant ID") }}</td>
                <td>{{ data.id }}</td>
              </tr>
              <tr>
                <td width="100">{{ $t("name") }}</td>
                <td>{{ data.name }}</td>
              </tr>
              <tr>
                <td width="100">{{ $t("email") }}</td>
                <td>{{ data.email }}</td>
              </tr>
              <tr>
                <td width="100">{{ $t("Company") }}</td>
                <td>{{ data.company }}</td>
              </tr>
              <tr>
                <td width="100">{{ $t("domain") }}</td>
                <td>{{ data.domain }}</td>
              </tr>
              <tr>
                <td width="100">{{ $t("Current Plan") }}</td>
                <td>{{ data.plan && data.plan.name }}</td>
              </tr>
              <tr>
                <td width="100">{{ $t("Trial Started At") }}</td>
                <td>{{ data.created_at | moment("Do MMM, YYYY") }}</td>
              </tr>
              <tr v-if="data.trial_ends_at">
                <td width="100">{{ $t("Trial Ends At") }}</td>
                <td>{{ data.trial_ends_at | moment("Do MMM, YYYY") }}</td>
              </tr>
              <tr v-if="data.created_at">
                <td width="100">{{ $t("Created At") }}</td>
                <td>{{ data.created_at | moment("Do MMM, YYYY") }}</td>
              </tr>
              <tr>
                <td width="100">{{ $t("Banned") }}</td>
                <td>{{ data.is_banned ? "True" : "False" }}</td>
              </tr>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- CARD DETAILS TABLE -->

        <div class="domain-twrapper card mt-0">
          <div class="card-header">
            <h3>{{ $t("domain") }}</h3>
          </div>
          <div class="card-body">
            <table class="mt-0">
              <tr>
                <td width="100">{{ $t("primary_domain") }}</td>
                <td>
                  <a :href="data.domain_url" target="_blank">{{
      data.domain_url
    }}</a>
                </td>
              </tr>
              <tr v-for="(domain, i) in data.domains" :key="domain.id">
                <td width="100">{{ $t("domain") }} {{ i + 1 }}</td>
                <td>
                  <a :href="domain" target="_blank">{{ data.domain }}</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <!-- DOMAIN TABLE-->
      </div>
      <!-- /.col -->

      <div class="col-md-12 col-lg-8">
        <div class="row">
          <div v-for="(limitation, i) in data.limitations && data.limitations" :key="i"
            class="col-lg-4 col-md-2 col-sm-6 col-12">
            <div class="small-box" :class="limitation.bgColor">
              <div class="inner">
                <h3 class="text-wrap">
                  {{ $t(limitation.name) }}: {{ limitation.limit }}
                </h3>
                <p class="mb-0">
                  {{ $t("Used") }}: {{ limitation.current }}
                </p>
                <p>{{ $t("Remaining") }}: {{ limitation.remaining }}</p>
              </div>
              <div class="icon">
                <i :class="limitation.icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header setings-header">
            <h3 class="card-title">{{ $t("Invoice") }}</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="card-body p-0 position-relative">
                  <table-loading v-show="loading" />
                  <div class="table-responsive table-custom mt-3" id="printMe">
                    <GeneralTable
                      v-if="data && data.tenant_invoices && data.tenant_invoices.length > 0"
                      :columns="tenantInvoiceColumns"
                      :rows="tenantInvoiceRows"
                      :loading="loading"
                      wrapper-class="table-responsive"
                    >
                      <template #amount="{ row }">
                        {{ row.default_amount_rate * row.quantity }} <span class="saudi-riyal">ê</span>
                        <br>
                        (${{ row.amount * row.quantity }})
                      </template>
                      <template #status="{ row }">
                        {{ row.status }}
                      </template>
                      <template #created_at="{ row }">
                        {{ row.created_at | moment("Do MMM, YYYY HH:mm:A") }}
                      </template>
                      <template #action="{ row }">
                        <div v-if="row.status == 'success'" class="btn-group">
                          <button type="button" v-tooltip="$t('Download')" class="btn btn-info btn-sm"
                            @click="download(row.id)">
                            <i class="fas fa-file-download" />
                          </button>
                        </div>
                        <div v-else class="text-center">
                          <p>N/A</p>
                        </div>
                      </template>
                    </GeneralTable>
                    <div v-else class="text-center">
                      <EmptyTable />
                    </div>
                  </div>
                </div>
                <!-- /.card-body -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import avatarMixin from "~/mixins/avatarMixin";
import GeneralTable from "~/components/GeneralTable";

export default {
  layout: "central",
  middleware: ["auth", "check-permissions"],
  mixins: [avatarMixin],
  metaInfo() {
    return { title: this.$t("Tenant Details") };
  },
  components: {
    GeneralTable,
  },
  data: () => ({
    breadcrumbsCurrent: "Tenant Details",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Tenants",
        url: "tenants.index",
      },
      {
        name: "Tenant Details",
        url: "",
      },
    ],
    url: null,
    showModal: false,
    data: {},
    loading: true,
  }),

  computed: {
    ...mapGetters("operations", ["appInfo"]),
    tenantInvoiceColumns() {
      return [
        { key: "id", label: this.$t("ID") },
        { key: "plan", label: this.$t("Plan") },
        { key: "quantity", label: this.$t("Qty") },
        { key: "method", label: this.$t("Transaction Type") },
        { key: "system_trx_id", label: this.$t("Trx ID") },
        { key: "amount", label: this.$t("Amount") },
        { key: "status", label: this.$t("Payment Status") },
        { key: "created_at", label: this.$t("Created At") },
        { key: "action", label: this.$t("Action") },
      ];
    },
    tenantInvoiceRows() {
      if (!this.data || !this.data.tenant_invoices) {
        return [];
      }
      return this.data.tenant_invoices.map((invoice) => ({
        ...invoice,
        plan: invoice.plan?.name || "",
      }));
    },
  },

  created() {
    this.getTenant();
  },
  methods: {
    // get the tenant
    async getTenant() {
      const { data } = await axios.get(
        window.location.origin + "/api/tenants/" + this.$route.params.id
      );
      this.data = data;
      this.loading = false;
    },

    // print
    printWindow() {
      window.print();
    },

    // download invoice
    async download(id) {
      await this.$axios.post(
        window.location.origin + "/api/payments/download", {
        payment_id: id,
      }, {
        responseType: "blob",
      }
      )
        .then((response) => {
          toast.fire({
            type: "success",
            title: this.$t("Successfully created"),
          });
          window.open(URL.createObjectURL(response.data));
        })
        .catch(() => {
          toast.fire({
            type: "error",
            title: this.$t("Please check your input and try again."),
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.tenant-details h3 {
  margin: 15px 0 0 0;
}

.card-body.tenant-details a {
  text-align: center;
  display: block;
  font-size: 16px;
  margin-top: 0;
}

.tenant-details table {
  width: 100%;
  margin-top: 20px;
}

.tenant-details table tr td {
  border: 1px solid #ddd;
  padding: 8px 15px;
}

.tenant-details table tr td:first-child {
  width: 30%;
}

.domain-twrapper .card-header h3 {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

.box-profile .list-group-item {
  padding-left: 20px;
  padding-right: 20px;
}

.box-profile .list-group {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-radius: 0;
}
</style>
