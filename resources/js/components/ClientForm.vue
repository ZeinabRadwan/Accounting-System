<template>
  <form role="form" @keydown="form.onKeydown($event)">
    <div :class="{ 'card-body': showCardBody }">
      <!-- Account Details Section -->
      <div class="row">
        <div class="col-md-6">
          <h5 class="section-title">{{ $t("Account Details") }}</h5>
          
          <div class="form-group">
            <label for="codeNumber">{{ $t("Code Number") }} <span class="required">*</span></label>
            <input id="codeNumber" v-model="form.codeNumber" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('codeNumber') }" name="codeNumber"
              :placeholder="$t('Enter code number')" />
            <has-error :form="form" field="codeNumber" />
          </div>

          <div class="form-group">
            <label for="billingMethod">{{ $t("Billing Method") }}</label>
            <select id="billingMethod" v-model="form.billingMethod" class="form-control"
              :class="{ 'is-invalid': form.errors.has('billingMethod') }">
              <option value="print">{{ $t("Print") }}</option>
              <option value="email">{{ $t("Email") }}</option>
              <option value="both">{{ $t("Both") }}</option>
            </select>
            <has-error :form="form" field="billingMethod" />
          </div>

          <div class="form-group">
            <label for="currency">{{ $t("Currency") }}</label>
            <select id="currency" v-model="form.currency" class="form-control"
              :class="{ 'is-invalid': form.errors.has('currency') }">
              <option value="EGP">{{ $t("EGP Egyptian Pound") }}</option>
              <option value="USD">{{ $t("USD US Dollar") }}</option>
              <option value="EUR">{{ $t("EUR Euro") }}</option>
            </select>
            <has-error :form="form" field="currency" />
          </div>

          <div class="form-group">
            <label for="classification">{{ $t("Classification") }}</label>
            <select id="classification" v-model="form.classification" class="form-control"
              :class="{ 'is-invalid': form.errors.has('classification') }">
              <option value="">{{ $t("Select Classification") }}</option>
              <option value="vip">{{ $t("VIP") }}</option>
              <option value="regular">{{ $t("Regular") }}</option>
              <option value="wholesale">{{ $t("Wholesale") }}</option>
            </select>
            <has-error :form="form" field="classification" />
          </div>

          <div class="form-group">
            <label for="notes">{{ $t("Notes") }}</label>
            <textarea id="notes" v-model="form.notes" class="form-control"
              :class="{ 'is-invalid': form.errors.has('notes') }" rows="3"
              :placeholder="$t('Enter additional notes')" />
            <has-error :form="form" field="notes" />
          </div>

          <div class="form-group">
            <label for="displayLanguage">{{ $t("Display Language") }}</label>
            <select id="displayLanguage" v-model="form.displayLanguage" class="form-control"
              :class="{ 'is-invalid': form.errors.has('displayLanguage') }">
              <option value="">{{ $t("Choose Language") }}</option>
              <option value="en">{{ $t("English") }}</option>
              <option value="ar">{{ $t("Arabic") }}</option>
            </select>
            <has-error :form="form" field="displayLanguage" />
          </div>
        </div>

        <!-- Client Details Section -->
        <div class="col-md-6">
          <h5 class="section-title">{{ $t("Client Details") }}</h5>
          
          <div class="form-group">
            <label>{{ $t("Client Type") }}</label>
            <div class="radio-group">
              <label class="radio-inline">
                <input type="radio" v-model="form.type" value="Individual" />
                {{ $t("Individual") }}
              </label>
              <label class="radio-inline">
                <input type="radio" v-model="form.type" value="Company" />
                {{ $t("Commercial") }}
              </label>
            </div>
            <has-error :form="form" field="type" />
          </div>

          <div class="form-group">
            <label for="commercialName">{{ $t("Commercial Name") }} <span class="required">*</span></label>
            <input id="commercialName" v-model="form.commercialName" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('commercialName') }" name="commercialName"
              :placeholder="$t('Enter commercial name')" />
            <has-error :form="form" field="commercialName" />
          </div>

          <div class="row">
            <div class="form-group col-md-6">
              <label for="firstName">{{ $t("First Name") }}</label>
              <input id="firstName" v-model="form.firstName" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('firstName') }" name="firstName"
                :placeholder="$t('Enter first name')" />
              <has-error :form="form" field="firstName" />
            </div>
            <div class="form-group col-md-6">
              <label for="lastName">{{ $t("Last Name") }}</label>
              <input id="lastName" v-model="form.lastName" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('lastName') }" name="lastName"
                :placeholder="$t('Enter last name')" />
              <has-error :form="form" field="lastName" />
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
              <label for="phoneNumber">{{ $t("Mobile") }} <span class="required">*</span></label>
              <vue-tel-input :class="{ 'is-invalid': form.errors.has('phoneNumber') }" v-model="form.phoneNumber"
                :inputOptions="{
                  showDialCode: true,
                }"></vue-tel-input>
              <has-error :form="form" field="phoneNumber" />
            </div>
          </div>

          <div class="form-group">
            <label for="email">{{ $t("Email") }}</label>
            <input id="email" v-model="form.email" type="email" class="form-control"
              :class="{ 'is-invalid': form.errors.has('email') }" name="email"
              :placeholder="$t('Enter your email address')" />
            <has-error :form="form" field="email" />
          </div>

          <div class="form-group">
            <label for="streetAddress1">{{ $t("Street Address 1") }}</label>
            <input id="streetAddress1" v-model="form.streetAddress1" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('streetAddress1') }" name="streetAddress1"
              :placeholder="$t('Enter street address')" />
            <has-error :form="form" field="streetAddress1" />
          </div>

          <div class="form-group">
            <label for="streetAddress2">{{ $t("Street Address 2") }}</label>
            <input id="streetAddress2" v-model="form.streetAddress2" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('streetAddress2') }" name="streetAddress2"
              :placeholder="$t('Enter additional address info')" />
            <has-error :form="form" field="streetAddress2" />
          </div>

          <div class="row">
            <div class="form-group col-md-4">
              <label for="city">{{ $t("City") }}</label>
              <input id="city" v-model="form.city" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('city') }" name="city"
                :placeholder="$t('Enter city')" />
              <has-error :form="form" field="city" />
            </div>
            <div class="form-group col-md-4">
              <label for="area">{{ $t("Area") }}</label>
              <input id="area" v-model="form.area" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('area') }" name="area"
                :placeholder="$t('Enter area')" />
              <has-error :form="form" field="area" />
            </div>
            <div class="form-group col-md-4">
              <label for="postalCode">{{ $t("Postal Code") }}</label>
              <input id="postalCode" v-model="form.postalCode" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('postalCode') }" name="postalCode"
                :placeholder="$t('Enter postal code')" />
              <has-error :form="form" field="postalCode" />
            </div>
          </div>

          <div class="form-group">
            <label for="country">{{ $t("Country") }}</label>
            <select id="country" v-model="form.country" class="form-control"
              :class="{ 'is-invalid': form.errors.has('country') }">
              <option value="">{{ $t("Select Country") }}</option>
              <option value="EG">{{ $t("Egypt (EG)") }}</option>
              <option value="US">{{ $t("United States (US)") }}</option>
              <option value="GB">{{ $t("United Kingdom (GB)") }}</option>
            </select>
            <has-error :form="form" field="country" />
          </div>

          <div class="row">
            <div class="form-group col-md-6">
              <label for="commercialRegister">{{ $t("Commercial Register (Optional)") }}</label>
              <input id="commercialRegister" v-model="form.commercialRegister" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('commercialRegister') }" name="commercialRegister"
                :placeholder="$t('Enter commercial register number')" />
              <has-error :form="form" field="commercialRegister" />
            </div>
            <div class="form-group col-md-6">
              <label for="taxCard">{{ $t("Tax Card (Optional)") }}</label>
              <input id="taxCard" v-model="form.taxCard" type="text" class="form-control"
                :class="{ 'is-invalid': form.errors.has('taxCard') }" name="taxCard"
                :placeholder="$t('Enter tax card number')" />
              <has-error :form="form" field="taxCard" />
            </div>
          </div>

          <div class="form-group">
            <label class="checkbox-inline">
              <input type="checkbox" v-model="form.addSecondaryAddress" />
              {{ $t("Add Secondary Address") }}
            </label>
          </div>
        </div>
      </div>

      <!-- Additional Fields Section -->
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="form-group">
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
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="status">{{ $t("Status") }}</label>
            <select id="status" v-model="form.status" class="form-control"
              :class="{ 'is-invalid': form.errors.has('status') }">
              <option value="1">{{ $t("Active") }}</option>
              <option value="0">{{ $t("Inactive") }}</option>
            </select>
            <has-error :form="form" field="status" />
          </div>

          <div class="form-group chart-of-account-field">
            <label for="chartOfAccountId">{{ $t("Chart of Account") }} <span class="required">*</span></label>
            <div class="d-flex align-items-center">
              <VSelect
                v-model="form.chartOfAccountId"
                :options="chartOfAccounts"
                label="name"
                :reduce="option => option.id"
                :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                name="chartOfAccountId"
                :placeholder="$t('Select a Chart of Account')"
                class="flex-grow-1 mr-2"
              >
                <template #option="{ name, code, type }">
                  <div>
                    <strong>{{ name }}</strong>
                    <br>
                    <small class="text-muted">{{ code }} - {{ type }}</small>
                  </div>
                </template>
              </VSelect>
              <button 
                type="button"
                @click="autoAssignChartOfAccount"
                class="btn btn-outline-success auto-assign-btn"
                :disabled="isAutoAssigning"
                title="Auto-assign Chart of Account"
              >
                <i :class="isAutoAssigning ? 'fas fa-spinner fa-spin' : 'fas fa-magic'"></i>
                {{ isAutoAssigning ? $t('Assigning...') : $t('Auto-Assign') }}
              </button>
            </div>
            <small class="form-text text-muted">{{ $t("Chart of Account is required for journal entries. Use Auto-Assign to automatically assign a suitable account.") }}</small>
            <has-error :form="form" field="chartOfAccountId" />
          </div>
        </div>
      </div>

      <!-- Toggle Buttons Section -->
      <div class="row">
        <div class="form-group col-12 d-flex flex-wrap">
          <div class="pr-5">
            <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode" />
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
    </div>
  </form>
</template>

<script>
import Form from "vform";
import { VueTelInput } from "vue-tel-input";
import { ToggleButton } from "vue-js-toggle-button";
import axios from 'axios';

export default {
  name: "ClientForm",
  components: {
    VueTelInput,
    ToggleButton,
  },
  props: {
    // Whether to show the card-body wrapper (for create page) or not (for modal)
    showCardBody: {
      type: Boolean,
      default: true
    },
    // Initial form data (optional)
    initialData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isDemoMode: window.config.isDemoMode,
      loading: true,
      url: null,
      chartOfAccounts: [],
      isAutoAssigning: false,
      form: new Form({
        // Account Details
        codeNumber: "",
        billingMethod: "print",
        currency: "EGP",
        classification: "",
        notes: "",
        displayLanguage: "",
        
        // Client Details
        type: "Company",
        commercialName: "",
        firstName: "",
        lastName: "",
        phone: "",
        phoneNumber: "",
        email: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        area: "",
        postalCode: "",
        country: "",
        commercialRegister: "",
        taxCard: "",
        addSecondaryAddress: false,
        
        // Additional Fields
        image: "",
        status: 1,
        chartOfAccountId: "",
        isSendEmail: false,
        isSendSMS: false,
        
        // Legacy fields for backward compatibility
        name: "",
        companyName: "",
        taxRegistrationNumber: "",
        address: "",
        
        ...this.initialData
      }),
    };
  },
  created() {
    console.log('ClientForm component created');
    this.loadChartOfAccounts();
  },
  mounted() {
    console.log('ClientForm component mounted, form:', this.form);
  },
  methods: {
    // Load chart of accounts from routing setup
    async loadChartOfAccounts() {
      try {
        // First try to get accounts from routing setup
        const routingResponse = await axios.get('/api/clients/routing-accounts');
        
        if (routingResponse.data.success && routingResponse.data.accounts.length > 0) {
          this.chartOfAccounts = routingResponse.data.accounts;
          console.log('Loaded accounts from routing setup:', this.chartOfAccounts.length);
        } else {
          // Fallback to the old method if routing is not configured
          const response = await axios.get('/api/clients/chart-of-accounts');
          this.chartOfAccounts = response.data || [];
          console.log('Loaded accounts from fallback method:', this.chartOfAccounts.length);
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        // Try fallback method
        try {
          const response = await axios.get('/api/clients/chart-of-accounts');
          this.chartOfAccounts = response.data || [];
        } catch (fallbackError) {
          console.error('Fallback method also failed:', fallbackError);
          this.chartOfAccounts = [];
        }
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

    // Reset form to default values
    resetForm() {
      this.form.reset();
      
      // Reset to default values for specific fields
      this.form.type = "Company";
      this.form.status = 1;
      this.form.billingMethod = "print";
      this.form.currency = "EGP";
      this.form.addSecondaryAddress = false;
      this.form.isSendEmail = false;
      this.form.isSendSMS = false;
      
      // Clear all other fields
      this.form.codeNumber = "";
      this.form.classification = "";
      this.form.notes = "";
      this.form.displayLanguage = "";
      this.form.commercialName = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.phone = "";
      this.form.phoneNumber = "";
      this.form.email = "";
      this.form.streetAddress1 = "";
      this.form.streetAddress2 = "";
      this.form.city = "";
      this.form.area = "";
      this.form.postalCode = "";
      this.form.country = "";
      this.form.commercialRegister = "";
      this.form.taxCard = "";
      this.form.chartOfAccountId = "";
      
      // Clear image
      this.url = null;
    },

    // Get form data for parent component
    getFormData() {
      return this.form;
    },

    // Validate form
    validateForm() {
      if (!this.form.chartOfAccountId) {
        toast.fire({
          type: "error",
          title: this.$t("Chart of Account is required"),
        });
        return false;
      }
      return true;
    },

    async autoAssignChartOfAccount() {
      if (this.isAutoAssigning) {
        return;
      }
      this.isAutoAssigning = true;
      
      try {
        // Try to get accounts from routing setup first
        const routingResponse = await axios.get('/api/clients/routing-accounts');
        
        if (routingResponse.data.success && routingResponse.data.accounts.length > 0) {
          // Use the first account from routing setup (usually the parent account)
          const defaultAccount = routingResponse.data.accounts[0];
          this.form.chartOfAccountId = defaultAccount.id;
          
          toast.fire({
            type: "success",
            title: this.$t("Chart of Account auto-assigned from routing setup"),
          });
        } else {
          // Fallback to the old logic
          const clientData = {
            type: this.form.type || 'Company',
            commercialName: this.form.commercialName,
            firstName: this.form.firstName,
            lastName: this.form.lastName,
            email: this.form.email,
            phone: this.form.phone,
            phoneNumber: this.form.phoneNumber,
            streetAddress1: this.form.streetAddress1,
            streetAddress2: this.form.streetAddress2,
            city: this.form.city,
            area: this.form.area,
            postalCode: this.form.postalCode,
            country: this.form.country,
            commercialRegister: this.form.commercialRegister,
            taxCard: this.form.taxCard,
          };
          
          let defaultAccount = null;
          
          if (clientData.type === 'Company') {
            defaultAccount = this.chartOfAccounts.find(account => 
              account.name.toLowerCase().includes('accounts receivable') && 
              account.name.toLowerCase().includes('company')
            );
          } else if (clientData.type === 'Individual') {
            defaultAccount = this.chartOfAccounts.find(account => 
              account.name.toLowerCase().includes('accounts receivable') && 
              account.name.toLowerCase().includes('individual')
            );
          }
          
          if (!defaultAccount) {
            defaultAccount = this.chartOfAccounts.find(account => 
              account.name.toLowerCase().includes('accounts receivable')
            );
          }
          
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
.vue-tel-input {
  padding: 3px;
}

.ti__dropdown-list {
  z-index: 2;
}

.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e9ecef;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.radio-inline input[type="radio"] {
  margin: 0;
}

.checkbox-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-inline input[type="checkbox"] {
  margin: 0;
}

.chart-of-account-field {
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 15px;
  background-color: #f8f9fa;
  margin-bottom: 20px;
}

.chart-of-account-field label {
  font-weight: 600;
  color: #495057;
  margin-bottom: 10px;
}

.chart-of-account-field .required {
  color: #dc3545;
  font-weight: bold;
}

.auto-assign-btn {
  min-width: 120px;
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

.form-group {
  margin-bottom: 1rem;
}

.required {
  color: #dc3545;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .radio-group {
    flex-direction: column;
    gap: 10px;
  }
  
  .section-title {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
}
</style>
