<template>
  <div>
    <!-- Card Body Wrapper (for create page) -->
    <div v-if="showCardBody" class="card-body">
      <form role="form" @submit.prevent="submitForm" @keydown="form.onKeydown($event)">
        <div class="row">
          <!-- Account Details Section -->
          <div class="col-md-6">
            <h5 class="section-title">{{ $t("Account Details") }}</h5>
            
            <div class="form-group">
              <label for="codeNumber">
                {{ $t("Code Number") }}
                <i class="fas fa-question-circle text-muted ml-1" :title="$t('Auto-generated unique identifier for the supplier')"></i>
              </label>
              <input id="codeNumber" v-model="form.codeNumber" type="text" class="form-control" 
                :class="{ 'is-invalid': form.errors.has('codeNumber') }" name="codeNumber"
                :placeholder="$t('Loading...')" disabled />
              <small class="form-text text-muted">
                {{ $t("This code number is automatically generated and cannot be changed") }}
              </small>
              <has-error :form="form" field="codeNumber" />
            </div>

            <div class="form-group">
              <label for="notes">{{ $t("Notes") }}</label>
              <textarea id="notes" v-model="form.notes" class="form-control"
                :class="{ 'is-invalid': form.errors.has('notes') }" :placeholder="$t('Enter additional notes')" rows="3" />
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

          <!-- Supplier Details Section -->
          <div class="col-md-6">
            <h5 class="section-title">{{ $t("Supplier Details") }}</h5>
            
            <div class="form-group">
              <label>{{ $t("Supplier Type") }}</label>
              <div class="radio-group">
                <label class="radio-inline">
                  <input type="radio" v-model="form.type" value="Individual" />
                  {{ $t("Individual") }}
                </label>
                <label class="radio-inline">
                  <input type="radio" v-model="form.type" value="Company" />
                  {{ $t("Business") }}
                </label>
              </div>
              <has-error :form="form" field="type" />
            </div>

            <!-- Individual Supplier Fields -->
            <div v-if="form.type === 'Individual'">
              <div class="form-group">
                <label for="fullName">
                  {{ $t("Full Name") }} <span class="required">*</span>
                </label>
                <input id="fullName" v-model="form.fullName" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('fullName') }" name="fullName"
                  :placeholder="$t('Enter full name')" />
                <has-error :form="form" field="fullName" />
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
            </div>

            <!-- Company Supplier Fields -->
            <div v-if="form.type === 'Company'">
              <div class="form-group">
                <label for="businessName">
                  {{ $t("Business Name") }} <span class="required">*</span>
                </label>
                <input id="businessName" v-model="form.businessName" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('businessName') }" name="businessName"
                  :placeholder="$t('Enter business name')" />
                <has-error :form="form" field="businessName" />
              </div>
            </div>

            <div class="form-group">
              <label for="phoneNumber">
                {{ $t("Phone") }} <span class="required">*</span>
              </label>
              <vue-tel-input
                v-model="form.phoneNumber"
                :class="{ 'is-invalid': form.errors.has('phoneNumber') }"
                :inputOptions="{
                  showDialCode: true,
                  placeholder: $t('Enter phone number')
                }"
                name="phoneNumber"
              />
              <has-error :form="form" field="phoneNumber" />
            </div>

            <div class="form-group">
              <label for="email">{{ $t("Email") }}</label>
              <input id="email" v-model="form.email" type="email" class="form-control"
                :class="{ 'is-invalid': form.errors.has('email') }" name="email"
                :placeholder="$t('Enter email address')" />
              <has-error :form="form" field="email" />
            </div>

            <!-- Representatives Section - Only for Company type -->
            <div v-if="form.type === 'Company'" class="mt-4">
              <h6 class="section-subtitle">{{ $t("Representatives") }}</h6>
              
              <RepresentativesList 
                :representatives="form.representatives || []"
                @representatives-changed="handleRepresentativesChanged"
              />
            </div>
          </div>
        </div>

        <!-- Address Information Section -->
        <div class="row">
          <div class="col-12">
            <h5 class="section-title">{{ $t("Address Information") }}</h5>
            
            <div class="row">
              

            <div class="row">
              <div class="form-group col-md-3">
                <label for="country">{{ $t("Country") }}</label>
                <select id="country" v-model="form.country" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('country') }">
                  <option value="">{{ $t("Select Country") }}</option>
                  <option value="SA">{{ $t("Saudi Arabia (SA)") }}</option>
                  <option value="EG">{{ $t("Egypt (EG)") }}</option>
                  <option value="US">{{ $t("United States (US)") }}</option>
                  <option value="GB">{{ $t("United Kingdom (GB)") }}</option>
                </select>
                <has-error :form="form" field="country" />
              </div>
              <div class="form-group col-md-3">
                <label for="state">{{ $t("State") }}</label>
                <input id="state" v-model="form.state" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('state') }" name="state"
                  :placeholder="$t('Enter state')" />
                <has-error :form="form" field="state" />
              </div>
              <div class="form-group col-md-3">
                <label for="city">{{ $t("City") }}</label>
                <input id="city" v-model="form.city" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('city') }" name="city"
                  :placeholder="$t('Enter city')" />
                <has-error :form="form" field="city" />
              </div>
              <div class="form-group col-md-3">
                <label for="neighbourhood">{{ $t("Neighbourhood") }}</label>
                <input id="neighbourhood" v-model="form.neighbourhood" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('neighbourhood') }" name="neighbourhood"
                  :placeholder="$t('Enter neighbourhood')" />
                <has-error :form="form" field="neighbourhood" />
              </div>
            </div>
            <div class="form-group col-md-6">
                <label for="streetAddress1">{{ $t("Street Address 1") }}</label>
                <input id="streetAddress1" v-model="form.streetAddress1" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('streetAddress1') }" name="streetAddress1"
                  :placeholder="$t('Enter street address')" />
                <has-error :form="form" field="streetAddress1" />
              </div>
              <div class="form-group col-md-6">
                <label for="streetAddress2">{{ $t("Street Address 2") }}</label>
                <input id="streetAddress2" v-model="form.streetAddress2" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('streetAddress2') }" name="streetAddress2"
                  :placeholder="$t('Enter additional address info')" />
                <has-error :form="form" field="streetAddress2" />
              </div>
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="postalCode">{{ $t("Postal Code") }}</label>
                <input id="postalCode" v-model="form.postalCode" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('postalCode') }" name="postalCode"
                  :placeholder="$t('Enter postal code')" />
                <has-error :form="form" field="postalCode" />
              </div>
            </div>

            <div class="row">
              <div class="form-group col-md-6">
                <label for="commercialRegister">{{ $t("CR") }} <span class="text-muted">({{ $t("Optional") }})</span></label>
                <input id="commercialRegister" v-model="form.commercialRegister" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('commercialRegister') }" name="commercialRegister"
                  :placeholder="$t('Enter commercial register number')" />
                <has-error :form="form" field="commercialRegister" />
              </div>
              <div class="form-group col-md-6">
                <label for="taxCard">{{ $t("Tax ID (Optional)") }}</label>
                <input id="taxCard" v-model="form.taxCard" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('taxCard') }" name="taxCard"
                  :placeholder="$t('Enter tax ID number')" />
                <has-error :form="form" field="taxCard" />
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Information Section -->
        <div class="row">
          <div class="col-12">
            <h5 class="section-title">{{ $t("Additional Information") }}</h5>
          </div>
        </div>

        <!-- Documents & Settings Section -->
        <div class="row">
          <div class="col-12">
            <h5 class="section-title">{{ $t("Documents & Settings") }}</h5>
            
            <div class="row">
              <div class="form-group col-md-6">
                <label for="image">{{ $t("Profile Image") }}</label>
                <div class="custom-file">
                  <input id="image" type="file" class="custom-file-input" name="image"
                    :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" />
                  <label class="custom-file-label" for="image">{{ $t("Choose file") }}</label>
                </div>
                <has-error :form="form" field="image" />
                <div v-if="url" class="image-preview mt-2">
                  <img :src="url" class="img-fluid rounded" :alt="$t('Attached Image')" />
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="attachments">{{ $t("Attachments") }}</label>
                <div class="file-upload-area" @click="$refs.attachmentInput.click()">
                  <div class="upload-content">
                    <i class="fas fa-cloud-upload-alt fa-2x text-muted mb-2"></i>
                    <p class="mb-1">{{ $t("Drop files here or click to browse") }}</p>
                    <small class="text-muted">{{ $t("Supported formats: PDF, DOC, XLS, TXT, Images") }}</small>
                  </div>
                  <input
                    ref="attachmentInput"
                    type="file"
                    multiple
                    @change="onAttachmentChange"
                    style="display: none"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png,.gif"
                  />
                </div>
                <has-error :form="form" field="attachments" />
                
                <!-- Selected Files Display -->
                <div v-if="form.attachments.length > 0" class="selected-files mt-2">
                  <div v-for="(file, index) in form.attachments" :key="index" class="selected-file-item">
                    <span class="file-name">{{ file.name || file }}</span>
                    <button type="button" @click="removeFile(index)" class="btn btn-sm btn-danger ml-2">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Communication Preferences Section -->
        <div class="row">
          <div class="col-12">
            <h5 class="section-title">{{ $t("Communication Preferences") }}</h5>
            
            <div class="form-group">
              <div class="d-flex flex-wrap">
                <div class="pr-5">
                  <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode" />
                  {{ $t("Send Welcome Email") }}
                </div>
                <div class="pr-5">
                  <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode" />
                  {{ $t("Send Welcome SMS") }}
                </div>
              </div>
            </div>
          </div>
        </div>

                <!-- Form Actions -->
        <div v-if="showCardBody" class="card-footer">
          <button :disabled="form.busy" class="btn btn-primary">
            <i class="fas fa-save" /> {{ $t("Save") }}
          </button>
          <button type="reset" class="btn btn-secondary float-right" @click="resetForm">
            <i class="fas fa-power-off" /> {{ $t("Reset") }}
          </button>
        </div>
      </form>
    </div>

    <!-- Modal Form (for modals) -->
    <div v-else>
      <form role="form" @submit.prevent="submitForm" @keydown="form.onKeydown($event)">
        <div class="row">
          <!-- Simplified form for modals -->
          <div class="form-group col-md-6">
            <label for="modalName">{{ $t("Name") }} <span class="required">*</span></label>
            <input id="modalName" v-model="form.name" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('name') }" name="name"
              :placeholder="$t('Enter name')" />
            <has-error :form="form" field="name" />
          </div>
          <div class="form-group col-md-6">
            <label for="modalType">{{ $t("Type") }} <span class="required">*</span></label>
            <select id="modalType" v-model="form.type" class="form-control"
              :class="{ 'is-invalid': form.errors.has('type') }">
              <option value="">{{ $t("Select Type") }}</option>
              <option value="Company">{{ $t("Company") }}</option>
              <option value="Individual">{{ $t("Individual") }}</option>
            </select>
            <has-error :form="form" field="type" />
          </div>
          <div class="form-group col-md-6">
            <label for="modalPhone">{{ $t("Phone") }} <span class="required">*</span></label>
            <vue-tel-input
              v-model="form.phoneNumber"
              :class="{ 'is-invalid': form.errors.has('phoneNumber') }"
              :inputOptions="{
                showDialCode: true,
                placeholder: $t('Enter phone number')
              }"
              name="phoneNumber"
            />
            <has-error :form="form" field="phoneNumber" />
          </div>
          <div class="form-group col-md-6">
            <label for="modalEmail">{{ $t("Email") }}</label>
            <input id="modalEmail" v-model="form.email" type="email" class="form-control"
              :class="{ 'is-invalid': form.errors.has('email') }" name="email"
              :placeholder="$t('Enter email address')" />
            <has-error :form="form" field="email" />
          </div>
          <div class="form-group col-md-6">
            <label for="modalStatus">{{ $t("Status") }}</label>
            <select id="modalStatus" v-model="form.status" class="form-control"
              :class="{ 'is-invalid': form.errors.has('status') }">
              <option value="1">{{ $t("Active") }}</option>
              <option value="0">{{ $t("Inactive") }}</option>
            </select>
            <has-error :form="form" field="status" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from "vform";
import { VueTelInput } from "vue-tel-input";
import { ToggleButton } from "vue-js-toggle-button";
import RepresentativesList from "./RepresentativesList.vue";
import axios from 'axios';

export default {
  name: "SupplierForm",
  components: {
    VueTelInput,
    ToggleButton,
    RepresentativesList,
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
      form: new Form({
        // Account Details
        codeNumber: "000001",
        notes: "",
        displayLanguage: "",
        
        // Supplier Details
        type: "Company",
        fullName: "",
        businessName: "",
        firstName: "",
        lastName: "",
        phone: "",
        phoneNumber: "",
        email: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "SA",
        neighbourhood: "",
        commercialRegister: "",
        taxCard: "",
        
        // Additional Fields
        image: "",
        attachments: [],
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        
        // Legacy fields for backward compatibility
        name: "",
        companyName: "",
        taxRegistrationNumber: "",
        
        // Representatives
        representatives: [],
        
        ...this.initialData
      }),
    };
  },
  watch: {
    // Watch for changes in initialData prop
    initialData: {
      handler(newData) {
        if (newData && Object.keys(newData).length > 0) {
          // Set form values from initial data
          Object.keys(newData).forEach(key => {
            if (this.form.hasOwnProperty(key)) {
              this.form[key] = newData[key];
            }
          });
          
          // Handle special cases
          if (newData.image_path) {
            this.url = newData.image_path;
          }
          
          if (newData.attachments) {
            this.form.attachments = Array.isArray(newData.attachments) ? newData.attachments : [];
          }
          
          console.log('Form initialized with data:', newData);
          
          // Load representatives if this is an existing supplier
          if (newData.slug && newData.slug !== 'new') {
            this.loadRepresentatives();
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    console.log('SupplierForm component created');
    this.loadNextCodeNumber();
  },
  mounted() {
    console.log('SupplierForm component mounted, form:', this.form);
    // Load representatives if editing existing supplier
    this.loadRepresentatives();
  },
  methods: {
    // Load the next available code number for new suppliers
    async loadNextCodeNumber() {
      try {
        // Only load next code number if this is a new supplier (no initial data)
        if (!this.initialData || Object.keys(this.initialData).length === 0) {
          const response = await axios.get('/api/suppliers/next-code');
          
          if (response.data.success) {
            this.form.codeNumber = response.data.formatted_code;
          } else {
            console.error('Failed to load next code number:', response.data.message);
            // Fallback to default
            this.form.codeNumber = '000001';
          }
        }
      } catch (error) {
        console.error('Error loading next code number:', error);
        // Fallback to default
        this.form.codeNumber = '000001';
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
          this.$t("Please select a valid image file"),
          "error"
        );
      }
    },

    // Handle attachment file changes
    onAttachmentChange(e) {
      const files = Array.from(e.target.files);
      const validFiles = [];
      
      files.forEach(file => {
        // Check file size (2MB limit)
        if (file.size < 2111775) {
          // For attachments, allow various document types
          const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/plain',
            'image/jpeg',
            'image/png',
            'image/gif'
          ];
          
          if (allowedTypes.includes(file.type)) {
            validFiles.push(file);
          } else {
            Swal.fire(
              this.$t("Error!"),
              this.$t("Please select a valid file type"),
              "error"
            );
          }
        } else {
          Swal.fire(
            this.$t("Error!"),
            this.$t("Please select a file with size less than 2 MB"),
            "error"
          );
        }
      });
      
      // Add valid files to attachments
      this.form.attachments = [...this.form.attachments, ...validFiles];
    },

    // Remove attachment file
    removeFile(index) {
      this.form.attachments.splice(index, 1);
    },

    // Validate form before submission
    validateForm() {
      let isValid = true;
      
      // Clear previous errors
      this.form.clearErrors();
      
      // Required field validations
      if (!this.form.phoneNumber) {
        this.form.errors.set('phoneNumber', this.$t('Phone number is required'));
        isValid = false;
      }
      
      if (this.form.type === 'Individual' && !this.form.fullName) {
        this.form.errors.set('fullName', this.$t('Full name is required for individual suppliers'));
        isValid = false;
      }
      
      if (this.form.type === 'Company' && !this.form.businessName) {
        this.form.errors.set('businessName', this.$t('Business name is required for company suppliers'));
        isValid = false;
      }
      
      return isValid;
    },

    // Submit form
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      
      // Map form data to API format
      const submitData = {
        ...this.form.data(),
        // Map legacy fields for backward compatibility
        name: this.form.type === 'Individual' ? this.form.fullName : this.form.businessName,
        companyName: this.form.businessName,
        taxRegistrationNumber: this.form.taxCard,
        address: this.form.streetAddress1,
      };
      
      // Emit submit event with form data
      this.$emit('submit', submitData);
    },

    // Reset form to default values
    resetForm() {
      this.form.reset();
      
      // Reset to default values for specific fields
      this.form.type = "Company";
      this.form.status = 1;
      this.form.country = "SA";
      this.form.isSendEmail = false;
      this.form.isSendSMS = false;
      
      // Load the next available code number
      this.loadNextCodeNumber();
      
      // Clear all other fields
      this.url = null;
      this.form.attachments = [];
      this.form.image = "";
      this.form.fullName = "";
      this.form.businessName = "";
      this.form.firstName = "";
      this.form.lastName = "";
      this.form.phone = "";
      this.form.phoneNumber = "";
      this.form.email = "";
      this.form.streetAddress1 = "";
      this.form.streetAddress2 = "";
      this.form.city = "";
      this.form.state = "";
      this.form.postalCode = "";
      this.form.neighbourhood = "";
      this.form.commercialRegister = "";
      this.form.taxCard = "";
      this.form.notes = "";
      this.form.displayLanguage = "";
      this.form.representatives = [];
    },

    // Load representatives for existing supplier
    async loadRepresentatives() {
      // Try to get slug from route params first, then from initialData
      const slug = this.$route.params.slug || (this.initialData && this.initialData.slug);
      console.log('Loading representatives for supplier:', slug);
      
      if (slug && slug !== 'new') {
        try {
          const response = await this.$http.get(`/api/suppliers/${slug}/representatives`);
          console.log('Representatives API response:', response.data);
          if (response.data.success) {
            this.form.representatives = response.data.data;
            console.log('Representatives loaded:', this.form.representatives);
          }
        } catch (error) {
          console.error('Error loading representatives:', error);
        }
      } else {
        console.log('No slug or new supplier, skipping representatives load');
      }
    },

    // Handle when representatives are changed (added, edited, deleted)
    handleRepresentativesChanged(representatives) {
      this.form.representatives = representatives;
    },
  },
};
</script>

<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
.vue-tel-input {
  padding: 3px;
}

.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.section-subtitle {
  color: #495057;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #dee2e6;
}

.radio-group {
  display: flex;
  gap: 1rem;
}

.radio-inline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.radio-inline input[type="radio"] {
  margin: 0;
}

.checkbox-inline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.checkbox-inline input[type="checkbox"] {
  margin: 0;
}

.file-upload-area {
  border: 2px dashed #dee2e6;
  border-radius: 0.375rem;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.file-upload-area:hover {
  border-color: #007bff;
  background-color: #e7f3ff;
}

.upload-content {
  color: #6c757d;
}

.selected-files {
  max-height: 200px;
  overflow-y: auto;
}

.selected-file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 0.25rem 0;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
}

.file-name {
  flex: 1;
  margin-right: 0.5rem;
  word-break: break-all;
}

.image-preview {
  max-width: 200px;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  overflow: hidden;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}

.required {
  color: #dc3545;
}

.is-invalid {
  border-color: #dc3545;
}

.text-muted {
  color: #6c757d !important;
}

.btn {
  border-radius: 0.375rem;
  font-weight: 500;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #545b62;
  border-color: #545b62;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #c82333;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.custom-file-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.custom-file-input:lang(en)~.custom-file-label::after {
  content: "Browse";
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .radio-group {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .col-md-3 {
    margin-bottom: 1rem;
  }
}
</style>
