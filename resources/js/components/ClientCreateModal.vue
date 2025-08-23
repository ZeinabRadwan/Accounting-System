<template>
  <div>
    <VModal v-model="showClientCreateModal" @close="showClientCreateModal = false">
      <template v-slot:title>{{ $t("Create Client") }}</template>
      <template>
        <form id="myForm" class="w-100" role="form" @keydown="form.onKeydown($event)">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="name">{{ $t("Name") }} <span class="required">*</span></label>
              <input id="name" v-model="form.name" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                :placeholder="$t('Enter a name')" />
              <has-error :form="form" field="name" />
            </div>
            <div class="form-group col-md-6">
              <label for="email">{{ $t("Email") }}</label>
              <input id="email" v-model="form.email" type="email" class="form-control"
                :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                :placeholder="$t('Enter your email address')" />
              <has-error :form="form" field="email" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="phoneNumber">{{ $t("Contact Number") }}
                <span class="required">*</span></label>
              <vue-tel-input :class="{ 'is-invalid': form.errors.has('phoneNumber') }" v-model="form.phoneNumber"
                :inputOptions="{
                  showDialCode: true,
                }"></vue-tel-input>
              <has-error :form="form" field="phoneNumber" />
            </div>
            <div class="form-group col-md-6">
              <label for="companyName">{{ $t("Company Name") }}</label>
              <input id="companyName" v-model="form.companyName" type="companyName" class="form-control"
                :class="{ 'is-invalid': form.errors.has('companyName') }" name="companyName"
                :placeholder="$t('Enter a company name')" />
              <has-error :form="form" field="companyName" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="type">{{ $t("Type") }}</label>
              <select id="type" v-model="form.type" class="form-control"
                :class="{ 'is-invalid': form.errors.has('type') }">
                <option value="Company">{{ $t("Company") }}</option>
                <option value="Individual">{{ $t("Individual") }}</option>
              </select>
              <has-error :form="form" field="type" />
            </div>
            <div class="form-group col-md-6">
              <label for="chartOfAccountId">{{ $t("Chart of Account") }} <span class="required">*</span></label>
              <div class="d-flex align-items-center gap-2">
                <v-select
                  v-model="form.chartOfAccountId"
                  :options="chartOfAccounts"
                  label="name"
                  :reduce="option => option.id"
                  :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                  name="chartOfAccountId"
                  :placeholder="$t('Select a chart of account')"
                  class="flex-grow-1"
                >
                  <template #option="{ name, code, type }">
                    <div>
                      <strong>{{ name }}</strong>
                      <br>
                      <small class="text-muted">{{ code }} - {{ type }}</small>
                    </div>
                  </template>
                </v-select>
                <button 
                  type="button" 
                  @click="autoAssignChartOfAccount" 
                  :disabled="isAutoAssigning"
                  class="btn btn-outline-primary btn-sm auto-assign-btn"
                  :title="$t('Auto-assign chart of account')"
                  style="flex-shrink: 0;"
                >
                  <i v-if="isAutoAssigning" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-magic"></i>
                  {{ $t("Auto") }}
                </button>
              </div>
              <has-error :form="form" field="chartOfAccountId" />
              <small class="form-text text-muted">
                {{ $t("Select a chart of account or use auto-assign to automatically assign one based on client type") }}
              </small>
            </div>
          </div>
          <div class="form-group">
            <label for="address">{{ $t("Address") }}</label>
            <textarea id="address" v-model="form.address" class="form-control"
              :class="{ 'is-invalid': form.errors.has('address') }" :placeholder="$t('Enter an address')" />
            <has-error :form="form" field="address" />
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="image">{{ $t("Image") }}</label>
              <div class="custom-file">
                <input id="image" type="file" class="custom-file-input" name="image"
                  :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                <label class="custom-file-label" for="image">{{
                  $t("Choose file")
                }}</label>
              </div>
              <has-error :form="form" field="image" />
              <div class="bg-light mt-4 w-25">
                <img v-if="url" :src="url" class="img-fluid" :alt="$t('Attached Image')" />
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="status">{{ $t("Status") }}</label>
              <select id="status" v-model="form.status" class="form-control"
                :class="{ 'is-invalid': form.errors.has('status') }">
                <option value="1">{{ $t("Active") }}</option>
                <option value="0">{{ $t("Inactive") }}</option>
              </select>
              <has-error :form="form" field="status" />
            </div>
            <div class="form-group col-12 d-flex flex-wrap">
              <div class="pr-5">
                <toggle-button v-model="form.isSendEmail"  :disabled="isDemoMode" />
                {{ $t("Send Welcome Email") }}
              </div>
            </div>
            <div class="form-group col-12 d-flex flex-wrap">
              <div class="pr-5">
                <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode" />
                {{ $t("Send Welcome SMS") }}
              </div>
            </div>
          </div>
        </form>
        <div slot="modal-footer">
          <button @click="submitItem($event)" :loading="form.busy" class="btn btn-primary">
            <i class="fas fa-save" /> {{ $t("Save") }}
          </button>
        </div>
      </template>
    </VModal>
    <a @click="toggleModal" class="create-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import Form from "vform";
import { VueTelInput } from "vue-tel-input";
import { ToggleButton } from "vue-js-toggle-button";
import axios from 'axios';

export default {
  name: "ClientCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ToggleButton,
    VueTelInput,
  },
  data: () => ({
    showClientCreateModal: false,
    form: new Form({
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      address: "",
      image: "",
      type: "Company",
      status: 1,
      isSendEmail: false,
      isSendSMS: false,
      chartOfAccountId: "",
    }),
    isDemoMode: window.config.isDemoMode,
    loading: true,
    url: null,
    chartOfAccounts: [],
    isAutoAssigning: false,
  }),
  created() {
    this.loadChartOfAccounts();
  },
  methods: {
    // Load chart of accounts
    async loadChartOfAccounts() {
      try {
        const { data } = await axios.get(window.location.origin + '/api/clients/chart-of-accounts');
        this.chartOfAccounts = data || [];
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        this.chartOfAccounts = [];
      }
    },

    // vue file upload
    onFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (
        file.size < 2111775 &&
        (file.type === "image/jpeg" ||
          file.type === "image/png" ||
          file.type === "image/gif")
      ) {
        reader.onloadend = () => {
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        Swal.fire(
          this.$t("Error!"),
          this.$t("Please select a valid thumbnail with size less than 2 MB"),
          "error"
        );
      }
    },

    // save client
    async saveClient() {
      // Validate that Chart of Account is selected
      if (!this.form.chartOfAccountId) {
        toast.fire({
          type: "error",
          title: this.$t("Chart of Account is required"),
        });
        return;
      }

      await this.form
        .post(window.location.origin + "/api/clients")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Client added successfully"),
          });
          this.$emit("reloadClients");
          this.form.reset();
          this.form.type = "Company"; // Reset to default
          this.form.status = 1; // Reset to default
          this.showClientCreateModal = false;
        })
        .catch((error) => {
          console.error("Error creating client:", error);
          const errorMessage = error.response?.data?.message || this.$t("Opps...something went wrong");
          toast.fire({ type: "error", title: errorMessage });
        });
    },

    toggleModal() {
      this.showClientCreateModal = !this.showClientCreateModal;
    },

    submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
    },

    async autoAssignChartOfAccount() {
      if (this.isAutoAssigning) {
        return;
      }
      this.isAutoAssigning = true;
      
      try {
        // For new clients, we need to simulate the auto-assignment logic
        // since the client doesn't exist in the database yet
        const clientData = {
          type: this.form.type || 'Company',
          name: this.form.name,
          email: this.form.email,
          phoneNumber: this.form.phoneNumber,
          companyName: this.form.companyName,
          address: this.form.address,
        };
        
        // Use the same logic as the backend but on the frontend
        let defaultAccount = null;
        
        if (clientData.type === 'Company') {
          // Look for "Accounts Receivable - Companies" or similar
          defaultAccount = this.chartOfAccounts.find(account => 
            account.name.toLowerCase().includes('accounts receivable') && 
            account.name.toLowerCase().includes('company')
          );
        } else if (clientData.type === 'Individual') {
          // Look for "Accounts Receivable - Individuals" or similar
          defaultAccount = this.chartOfAccounts.find(account => 
            account.name.toLowerCase().includes('accounts receivable') && 
            account.name.toLowerCase().includes('individual')
          );
        }
        
        // Fallback to any Accounts Receivable account
        if (!defaultAccount) {
          defaultAccount = this.chartOfAccounts.find(account => 
            account.name.toLowerCase().includes('accounts receivable')
          );
        }
        
        // Final fallback to any active account
        if (!defaultAccount && this.chartOfAccounts.length > 0) {
          defaultAccount = this.chartOfAccounts[0];
        }
        
        if (defaultAccount) {
          this.form.chartOfAccountId = defaultAccount.id;
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account auto-assigned successfully"),
          });
        } else {
          toast.fire({
            type: "error",
            title: this.$t("No suitable Chart of Account found for automatic assignment"),
          });
        }
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        toast.fire({
          type: "error",
          title: this.$t("Failed to auto-assign Chart of Account"),
        });
      } finally {
        this.isAutoAssigning = false;
      }
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.create-button {
  text-decoration: none;
  cursor: pointer;
}

.vue-tel-input {
  padding: 3px;
}

.ti__dropdown-list {
  z-index: 2;
}

.auto-assign-btn {
  min-width: 60px;
  white-space: nowrap;
}

.auto-assign-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-text {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 5px;
}

/* Make modal wider */
.modal-content {
  max-width: 1000px;
  margin: 1.75rem auto;
}
</style>
