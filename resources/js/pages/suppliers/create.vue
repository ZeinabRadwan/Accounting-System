<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t("Create a supplier") }}</h3>
            <router-link :to="{ name: 'suppliers.index' }" class="btn btn-dark float-right">
              <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
            </router-link>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveSupplier" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t("Name") }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name" :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="companyName">{{
                    $t("Company Name")
                  }}</label>
                  <input id="companyName" v-model="form.companyName" type="companyName" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('companyName') }" name="companyName"
                    :placeholder="$t('Enter a company name')" />
                  <has-error :form="form" field="companyName" />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="type">{{ $t("Type") }} <span class="required">*</span></label>
                  <select id="type" v-model="form.type" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('type') }">
                    <option value="">{{ $t("Select Type") }}</option>
                    <option value="Company">{{ $t("Company") }}</option>
                    <option value="Individual">{{ $t("Individual") }}</option>
                  </select>
                  <has-error :form="form" field="type" />
                </div>
                <div class="form-group col-md-4">
                  <label for="phoneNumber">{{ $t("Contact Number") }}
                    <span class="required">*</span></label>
                  <vue-tel-input :class="{ 'is-invalid': form.errors.has('phoneNumber') }" v-model="form.phoneNumber"
                    :inputOptions="{
                      showDialCode: true,
                    }"></vue-tel-input>
                  <has-error :form="form" field="phoneNumber" />
                </div>
                <div class="form-group col-md-4">
                  <label for="email">{{ $t("Email") }}</label>
                  <input id="email" v-model="form.email" type="email" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                    :placeholder="$t('Enter your email address')" />
                  <has-error :form="form" field="email" />
                </div>
              </div>

              <!-- Multiple Phone Numbers -->
              <div class="form-group">
                <label>{{ $t("Additional Phone Numbers") }}</label>
                <div v-for="(phone, index) in form.phoneNumbers" :key="index" class="row mb-2">
                  <div class="col-md-10">
                    <vue-tel-input v-model="form.phoneNumbers[index]" 
                      :class="{ 'is-invalid': form.errors.has('phoneNumbers.' + index) }"
                      :inputOptions="{ showDialCode: true }"
                      :placeholder="$t('Enter phone number')" />
                    <has-error :form="form" field="'phoneNumbers.' + index" />
                  </div>
                  <div class="col-md-2">
                    <button type="button" @click="removePhoneNumber(index)" class="btn btn-danger btn-sm">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
                <button type="button" @click="addPhoneNumber" class="btn btn-secondary btn-sm">
                  <i class="fas fa-plus"></i> {{ $t("Add Phone Number") }}
                </button>
              </div>

              <!-- Multiple Email Addresses -->
              <div class="form-group">
                <label>{{ $t("Additional Email Addresses") }}</label>
                <div v-for="(email, index) in form.emailAddresses" :key="index" class="row mb-2">
                  <div class="col-md-10">
                    <input type="email" v-model="form.emailAddresses[index]" class="form-control"
                      :class="{ 'is-invalid': form.errors.has('emailAddresses.' + index) }"
                      :placeholder="$t('Enter email address')" />
                    <has-error :form="form" field="'emailAddresses.' + index" />
                  </div>
                  <div class="col-md-2">
                    <button type="button" @click="removeEmailAddress(index)" class="btn btn-danger btn-sm">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
                <button type="button" @click="addEmailAddress" class="btn btn-secondary btn-sm">
                  <i class="fas fa-plus"></i> {{ $t("Add Email Address") }}
                </button>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="taxRegistrationNumber">{{
                    $t("VAT Number")
                  }}</label>
                  <input id="taxRegistrationNumber" v-model="form.taxRegistrationNumber" type="text"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('taxRegistrationNumber') }"
                    name="taxRegistrationNumber" :placeholder="$t('Enter VAT number')" />
                  <has-error :form="form" field="taxRegistrationNumber" />
                </div>
                <div class="form-group col-md-6">
                  <label for="crNumber">{{ $t("CR Number") }}</label>
                  <input id="crNumber" v-model="form.crNumber" type="text"
                    class="form-control" :class="{ 'is-invalid': form.errors.has('crNumber') }"
                    name="crNumber" :placeholder="$t('Enter CR number')" />
                  <has-error :form="form" field="crNumber" />
                </div>
              </div>
              
              <!-- New Address Fields -->
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="nationalityId">{{ $t("Nationality") }}</label>
                  <select id="nationalityId" v-model="form.nationalityId" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('nationalityId') }" 
                    :disabled="form.type !== 'Individual'">
                    <option value="">{{ $t("Select Nationality") }}</option>
                    <option v-for="nationality in nationalities" :key="nationality.id" :value="nationality.id">
                      {{ nationality.name }}
                    </option>
                  </select>
                  <has-error :form="form" field="nationalityId" />
                  <small class="form-text text-muted" v-if="form.type !== 'Individual'">
                    {{ $t("Nationality is only available for Individual type") }}
                  </small>
                </div>
                
                <div class="form-group col-md-4">
                  <label for="cityName">{{ $t("City") }}</label>
                  <input id="cityName" v-model="form.cityName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('cityName') }" 
                    :placeholder="$t('Enter city name')" />
                  <has-error :form="form" field="cityName" />
                </div>
                
                <div class="form-group col-md-4">
                  <label for="district">{{ $t("District") }}</label>
                  <input id="district" v-model="form.district" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('district') }" 
                    :placeholder="$t('Enter district name')" />
                  <has-error :form="form" field="district" />
                </div>
              </div>
              
              <div class="row">
                <div class="form-group col-md-4">
                  <label for="streetName">{{ $t("Street Name") }}</label>
                  <input id="streetName" v-model="form.streetName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('streetName') }" 
                    :placeholder="$t('Enter street name')" />
                  <has-error :form="form" field="streetName" />
                </div>
                
                <div class="form-group col-md-4">
                  <label for="buildingNumber">{{ $t("Building Number") }}</label>
                  <input id="buildingNumber" v-model="form.buildingNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('buildingNumber') }" 
                    :placeholder="$t('Enter building number')" />
                  <has-error :form="form" field="buildingNumber" />
                </div>
                
                <div class="form-group col-md-4">
                  <label for="zipCode">{{ $t("Zip Code") }}</label>
                  <input id="zipCode" v-model="form.zipCode" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('zipCode') }" 
                    :placeholder="$t('Enter 5-digit zip code')" maxlength="5" />
                  <has-error :form="form" field="zipCode" />
                </div>
              </div>
              
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="additionalNumber">{{ $t("Additional Number") }}</label>
                  <input id="additionalNumber" v-model="form.additionalNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('additionalNumber') }" 
                    :placeholder="$t('Enter additional reference number')" />
                  <has-error :form="form" field="additionalNumber" />
                </div>
                
                <div class="form-group col-md-6">
                  <label for="unitNo">{{ $t("Unit No") }}</label>
                  <input id="unitNo" v-model="form.unitNo" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('unitNo') }" 
                    :placeholder="$t('Enter unit number')" />
                  <has-error :form="form" field="unitNo" />
                </div>
              </div>
              <div class="form-group col-md-12">
                  <label for="address">{{ $t("Address") }}</label>
                  <textarea id="address" v-model="form.address" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('address') }" :placeholder="$t('Enter an address')" />
                  <has-error :form="form" field="address" />
                </div>

              <!-- Account Management Section -->
              <div class="form-group">
                <label class="d-block">{{ $t("Account Management") }}</label>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="accountOption" id="selectExistingAccount" 
                    value="existing" v-model="form.accountOption" @change="onAccountOptionChange">
                  <label class="form-check-label" for="selectExistingAccount">
                    {{ $t("Select Existing Account") }}
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="accountOption" id="createNewAccount" 
                    value="new" v-model="form.accountOption" @change="onAccountOptionChange">
                  <label class="form-check-label" for="createNewAccount">
                    {{ $t("Create New Account") }}
                  </label>
                </div>
              </div>

              <!-- Existing Account Selection -->
              <div v-if="form.accountOption === 'existing'" class="row">
                <div class="form-group col-md-6">
                  <label for="existingAccount">{{ $t("Select Account") }}</label>
                  <v-select v-model="form.existingAccount" :options="accounts" label="label"
                    :class="{ 'is-invalid': form.errors.has('existingAccount') }" name="existingAccount"
                    :placeholder="$t('Select an account')" @input="onExistingAccountChange">
                    <template slot="option" slot-scope="option">
                      <img :src="option.image" style="width: 30px; height: 30px;" />
                      {{ option.label }}
                    </template>
                  </v-select>
                  <has-error :form="form" field="existingAccount" />
                </div>
                <div class="form-group col-md-6">
                  <label for="availableBalance">{{ $t("Available Balance") }}</label>
                  <input id="availableBalance" v-model="form.availableBalance" type="number" step="any"
                    class="form-control" readonly />
                </div>
              </div>

              <!-- New Account Creation Fields -->
              <div v-if="form.accountOption === 'new'" class="row">
                <div class="form-group col-md-6">
                  <label for="bankName">{{ $t("Bank Name") }}
                    <span class="required">*</span></label>
                  <input id="bankName" v-model="form.bankName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('bankName') }" name="bankName"
                    :placeholder="$t('Enter bank name')" />
                  <has-error :form="form" field="bankName" />
                </div>
                <div class="form-group col-md-6">
                  <label for="branchName">{{ $t("Branch Name") }}</label>
                  <input id="branchName" v-model="form.branchName" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('branchName') }" name="branchName"
                    :placeholder="$t('Enter branch name')" />
                  <has-error :form="form" field="branchName" />
                </div>
              </div>
              <div v-if="form.accountOption === 'new'" class="row">
                <div class="form-group col-md-6">
                  <label for="accountNumber">{{ $t("Account Number") }}
                    <span class="required">*</span></label>
                  <input id="accountNumber" v-model="form.accountNumber" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('accountNumber') }" name="accountNumber"
                    :placeholder="$t('Enter account number')" />
                  <has-error :form="form" field="accountNumber" />
                </div>
                <div class="form-group col-md-6">
                  <label for="accountNote">{{ $t("Note") }}</label>
                  <input id="accountNote" v-model="form.accountNote" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('accountNote') }" name="accountNote"
                    :placeholder="$t('Enter account note')" />
                  <has-error :form="form" field="accountNote" />
                </div>
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
            <!-- /.card-body -->
            <div class="card-footer">
              <v-button :loading="form.busy" class="btn btn-primary">
                <i class="fas fa-save" /> {{ $t("Save") }}
              </v-button>
              <button type="reset" class="btn btn-secondary float-right" @click="form.reset()">
                <i class="fas fa-power-off" /> {{ $t("Reset") }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import { VueTelInput } from "vue-tel-input";
import { ToggleButton } from "vue-js-toggle-button";
import vSelect from "vue-select";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Supplier") };
  },
  components: {
    VueTelInput,
    ToggleButton,
    vSelect,
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
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
    form: new Form({
      name: "",
      email: "",
      phoneNumber: "",
      phoneNumbers: [],
      emailAddresses: [],
      companyName: "",
      taxRegistrationNumber: "",
      crNumber: "",
      address: "",
      image: "",
      status: 1,
      type: "Company",
             nationalityId: "",
       cityName: "",
       district: "",
      streetName: "",
      buildingNumber: "",
      zipCode: "",
      additionalNumber: "",
      unitNo: "",
      isSendEmail: false,
      isSendSMS: false,
      accountOption: "existing",
      existingAccount: null,
      bankName: "",
      branchName: "",
      accountNumber: "",
      accountNote: "",
    }),

    loading: true,
    url: null,
    nationalities: [],
    accounts: [],
    availableBalance: 0,
    
  }),
  methods: {
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

    // save supplier
    async saveSupplier() {
      await this.form
        .post(window.location.origin + "/api/suppliers")
        .then(() => {
          toast.fire({
            type: "success",
            title: this.$t("Supplier added successfully"),
          });
          this.$router.push({ name: "suppliers.index" });
        })
        .catch(() => {
          toast.fire({ type: "error", title: this.$t("Opps...something went wrong") });
        });
    },

    // fetch nationalities
    async fetchNationalities() {
      try {
        const response = await this.$axios.get('/api/nationalities');
        if (response.data.success) {
          this.nationalities = response.data.data;
        }
      } catch (error) {
        console.error('Error fetching nationalities:', error);
      }
    },

    // Add phone number
    addPhoneNumber() {
      this.form.phoneNumbers.push('');
    },

    // Remove phone number
    removePhoneNumber(index) {
      this.form.phoneNumbers.splice(index, 1);
    },

    // Add email address
    addEmailAddress() {
      this.form.emailAddresses.push('');
    },

    // Remove email address
    removeEmailAddress(index) {
      this.form.emailAddresses.splice(index, 1);
    },

    // Account management methods
    async fetchAccounts() {
      try {
        const response = await this.$axios.get('/api/all-accounts');
        if (response.data.success) {
          this.accounts = response.data.data;
        }
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    },

    onAccountOptionChange() {
      // Reset account-related fields when option changes
      this.form.existingAccount = null;
      this.form.bankName = "";
      this.form.branchName = "";
      this.form.accountNumber = "";
      this.form.accountNote = "";
      this.availableBalance = 0;
    },

    onExistingAccountChange(account) {
      if (account) {
        this.availableBalance = account.available_balance || 0;
      } else {
        this.availableBalance = 0;
      }
    },


  },

  async created() {
    await this.fetchNationalities();
    await this.fetchAccounts();
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style src="vue-select/dist/vue-select.css"></style>
<style scoped>
.vue-tel-input {
  padding: 3px;
}
</style>
