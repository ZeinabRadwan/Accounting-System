<template>
  <div :class="{ 'card-body': showCardBody }">
    <!-- Supplier Details Section - Now First -->
    <div class="row">
      <div class="col-md-6">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-user-circle mr-2"></i>
              {{ $t("Supplier Details") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="codeNumber">
                {{ $t("Supplier Number") }}
              </label>
              <input id="codeNumber" v-model="form.codeNumber" type="text" class="form-control" 
                :class="{ 'is-invalid': form.errors.has('codeNumber') }" name="codeNumber"
                :placeholder="$t('Loading...')" readonly aria-readonly="true" />
              <small class="form-text text-muted">
                {{ $t("This supplier number is automatically generated and cannot be changed") }}
              </small>
              <has-error :form="form" field="codeNumber" />
            </div>

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
            </div>

            <!-- Business Supplier Fields -->
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

            <div class="row">
              <div class="form-group col-md-6">
                <label for="phone">{{ $t("Telephone") }}</label>
                <input id="phone" v-model="form.phone" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('phone') }" name="phone"
                  :placeholder="$t('Enter telephone number')" />
                <has-error :form="form" field="phone" />
              </div>
              <div class="form-group col-md-6">
                <label for="phoneNumber" class="required-field">
                  {{ $t("Mobile") }} <span class="required">*</span>
                </label>
                <input 
                  id="phoneNumber"
                  v-model="form.phoneNumber"
                  type="tel"
                  class="form-control required-input"
                  :class="{ 'is-invalid': form.errors.has('phoneNumber') }"
                  name="phoneNumber"
                  :placeholder="$t('Enter mobile number (required)')" />
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
          </div>
        </div>
      </div>

      <!-- Account Details Section - Now Second -->
      <div class="col-md-6">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-cog mr-2"></i>
              {{ $t("Account Details") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="displayLanguage">{{ $t("Display Language") }}</label>
              <select id="displayLanguage" v-model="form.displayLanguage" class="form-control"
                :class="{ 'is-invalid': form.errors.has('displayLanguage') }">
                <option value="">{{ $t("Select Language") }}</option>
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

            <div class="form-group">
              <label for="image">{{ $t("Profile Image") }}</label>
              <div class="custom-file">
                <input id="image" type="file" class="custom-file-input" name="image"
                  :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" accept="image/*" />
                <label class="custom-file-label" for="image">
                  <i class="fas fa-image mr-2"></i>
                  {{ $t("Choose file") }}
                </label>
              </div>
              <has-error :form="form" field="image" />
              <div class="image-preview mt-2" v-if="url">
                <img :src="url" class="img-fluid rounded" :alt="$t('Profile Image')" style="max-height: 100px;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Supplier Representative Info Section -->
    <div class="row mt-4" v-if="form.type === 'Company'">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-users mr-2"></i>
              {{ $t("Supplier Representative Info") }}
            </h5>
          </div>
          <div class="card-body">
            <RepresentativesList 
              :representatives="form.representatives || []"
              @representatives-changed="handleRepresentativesChanged"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Address Section -->
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-map-marker-alt mr-2"></i>
              {{ $t("Address Information") }}
            </h5>
          </div>
          <div class="card-body">
        
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
          <div class="form-group col-md-6">
            <label for="postalCode">{{ $t("Postal Code") }}</label>
            <input id="postalCode" v-model="form.postalCode" type="text" class="form-control"
              :class="{ 'is-invalid': form.errors.has('postalCode') }" name="postalCode"
              :placeholder="$t('Enter postal code')" />
            <has-error :form="form" field="postalCode" />
          </div>
        </div>

        <!-- Business-specific fields -->
        <div v-if="form.type === 'Company'" class="row">
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
      </div>
    </div>

    <!-- Additional Fields Section -->
    <div class="row mt-4 equal-height">
      <div class="col-md-6">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-info-circle mr-2"></i>
              {{ $t("Additional Information") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="notes">{{ $t("Notes") }}</label>
              <textarea id="notes" v-model="form.notes" class="form-control"
                :class="{ 'is-invalid': form.errors.has('notes') }" rows="3"
                :placeholder="$t('Enter additional notes')" />
              <has-error :form="form" field="notes" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-file-alt mr-2"></i>
              {{ $t("Documents & Settings") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="attachments">{{ $t("Attachments") }}</label>
              <div class="file-upload-area">
                <input id="attachments" type="file" class="file-input" name="attachments"
                  :class="{ 'is-invalid': form.errors.has('attachments') }" @change="onFileChange" multiple 
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.txt,.jpg,.jpeg,.png,.gif" />
                <div class="file-upload-content">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <p>{{ $t("Drop files here or click to browse") }}</p>
                  <small class="text-muted">{{ $t("Supported formats: PDF, DOC, XLS, TXT, Images") }}</small>
                </div>
              </div>
              <has-error :form="form" field="attachments" />
              
              <!-- Show selected files -->
              <div class="selected-files mt-2" v-if="form.attachments && form.attachments.length > 0">
                <div class="selected-file-item" v-for="(file, index) in form.attachments" :key="index">
                  <i class="fas fa-file mr-2"></i>
                  <span>{{ file.name }}</span>
                  <button type="button" @click="removeFile(index)" class="btn btn-sm btn-outline-danger ml-2">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chart of Account Section -->
    <div v-if="routingSetting && routingSetting.routing_type !== 'automatic'" class="row mt-4" style="display: none;">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-chart-line mr-2"></i>
              {{ $t("Chart of Account") }}
            </h5>
          </div>
          <div class="card-body">

         <!-- Routing Type Info -->
         <div class="alert alert-info">
           <i class="fas fa-info-circle mr-2"></i>
           <strong>{{ $t("Current Routing Type") }}:</strong> {{ routingSetting.routing_type_display }}
           <!-- <span v-if="routingSetting.description" class="ml-2">- {{ routingSetting.description }}</span> -->
         </div>

         <!-- Specify Per Each - Placeholder like ClientForm (no dropdown rendered here) -->
          </div>
        </div>
      </div>
    </div>

    <!-- Automatic Routing Info Section -->
    <div v-if="routingSetting && routingSetting.routing_type === 'automatic'" class="row mt-4" style="display: none;">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-chart-line mr-2"></i>
              {{ $t("Chart of Account") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="alert alert-success">
              <i class="fas fa-check-circle mr-2"></i>
              {{ $t("Chart of account will be automatically assigned based on your accounting configuration.") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toggle Buttons Section -->
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-bell mr-2"></i>
              {{ $t("Communication Preferences") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
          <div class="form-group col-md-6">
            <div class="d-flex align-items-center">
              <toggle-button 
                v-model="form.isSendEmail" 
                :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
              <span class="ml-3">{{ $t("Send Welcome Email") }}</span>
              <span v-if="!communicationConfig.loading && !communicationConfig.email_configured" 
                    class="ml-2 text-muted small">
                ({{ $t("Email not configured") }})
              </span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <div class="d-flex align-items-center">
              <toggle-button 
                v-model="form.isSendSMS" 
                :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
              <span class="ml-3">{{ $t("Send Welcome SMS") }}</span>
              <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured" 
                    class="ml-2 text-muted small">
                ({{ $t("SMS not configured") }})
              </span>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Form from "vform";

import { ToggleButton } from "vue-js-toggle-button";
import RepresentativesList from "./RepresentativesList.vue";
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: "SupplierForm",
  components: {
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
      form: null, // Will be initialized in created()
      
      // Add missing properties for chart of accounts
      routingSetting: null,
      loadingChartOfAccounts: false,
      chartOfAccountsError: null,
      chartOfAccounts: [],
      isCreatingAccount: false,
      isAutoAssigningSupplier: false,
      
      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true,
      },
    };
  },
  computed: {
    // Check if this is edit mode (has initial data with slug)
    isEditMode() {
      return this.initialData && this.initialData.slug && this.initialData.slug !== 'new';
    }
  },
  watch: {
    // Watch for changes in initialData prop
    initialData: {
      handler(newData) {
        console.log('InitialData watcher triggered:', newData);
        if (newData && Object.keys(newData).length > 0) {
          console.log('Form before setting values:', this.form);
          
          // Set form values from initial data
          Object.keys(newData).forEach(key => {
            if (this.form && Object.prototype.hasOwnProperty.call(this.form, key)) {
              console.log(`Setting form.${key} =`, newData[key]);
              this.form[key] = newData[key];
            } else {
              console.log(`Form field ${key} not found or form not initialized`);
            }
          });
          
          // Handle special cases
          if (newData.image_path) {
            this.url = newData.image_path;
          }
          
          if (newData.attachments !== undefined) {
            this.form.attachments = Array.isArray(newData.attachments) ? newData.attachments : [];
          } else {
            // Ensure attachments is always an array
            this.form.attachments = [];
          }
          
          console.log('Form after setting values:', this.form);
          
          // Load representatives if this is an existing supplier
          if (newData.slug && newData.slug !== 'new') {
            this.loadRepresentatives();
          } else {
            // Load next code number only for new suppliers
            console.log('Loading next code number for new supplier');
            this.loadNextCodeNumber();
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    console.log('SupplierForm component created');
    this.initializeForm();
  },
  mounted() {
    console.log('SupplierForm component mounted, form:', this.form);
    console.log('Form data in mounted:', this.form ? Object.keys(this.form) : 'No form');
    
    // Test if form is working
    if (this.form) {
      console.log('Form codeNumber:', this.form.codeNumber);
      console.log('Form type:', this.form.type);
      console.log('Form email:', this.form.email);
    }
    
    // Load routing settings first, then chart of accounts
    this.loadRoutingSettings().then(() => {
      this.loadChartOfAccounts();
    });
    
    // Load communication configuration status
    this.loadCommunicationConfigStatus();
  },
  methods: {
    // Load communication configuration status
    async loadCommunicationConfigStatus() {
      try {
        this.communicationConfig.loading = true;
        
        const response = await axios.get('/api/communication-config-status');
        
        this.communicationConfig.email_configured = response.data.email_configured;
        this.communicationConfig.sms_configured = response.data.sms_configured;
        this.communicationConfig.loading = false;
      } catch (error) {
        console.error('Error loading communication config status:', error);
        // Default to false if there's an error
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
        this.communicationConfig.loading = false;
      }
    },

    // Initialize the form
    initializeForm() {
      this.form = new Form({
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
        address: "",
        
        // Representatives
        representatives: [],
        
        // Chart of Account
        chartOfAccountId: null,
        
        // Spread initial data if available
        ...(this.initialData || {})
      });
      
      console.log('Form initialized:', this.form);
      console.log('Form type:', typeof this.form);
      console.log('Form methods:', Object.getOwnPropertyNames(this.form));
    },
    
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
      const files = Array.from(e.target.files);
      const validFiles = [];
      
      files.forEach(file => {
        // Check file size (2MB limit)
        if (file.size < 2111775) {
          // For image, only allow image files
          if (e.target.id === 'image') {
            if (file.type.startsWith('image/')) {
              validFiles.push(file);
                          } else {
                this.$toast.error(
                  "Error!",
                  "Please select a valid image file"
                );
              }
          } else {
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
              this.$toast.error(
                "Error!",
                "Please select a valid file type"
              );
            }
          }
        } else {
          this.$toast.error(
            "Error!",
            "Please select a file with size less than 2 MB"
          );
        }
      });

      if (validFiles.length > 0) {
        // Check if this is for image or attachments
        if (e.target.id === 'image') {
          // Single image file
          this.form.image = validFiles[0];
          this.url = URL.createObjectURL(validFiles[0]);
        } else {
          // Multiple attachment files
          this.form.attachments = [...this.form.attachments, ...validFiles];
        }
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
            this.$toast.error(
              this.$t("Error!"),
              this.$t("Please select a valid file type")
            );
          }
        } else {
          this.$toast.error(
            this.$t("Error!"),
            this.$t("Please select a file with size less than 2 MB")
          );
        }
      });
      
      // Add valid files to attachments
      this.form.attachments = [...(this.form.attachments || []), ...validFiles];
    },

    // Remove attachment file
    removeFile(index) {
      if (this.form.attachments && Array.isArray(this.form.attachments)) {
        this.form.attachments.splice(index, 1);
      }
    },

    // Validate form before submission
    validateForm() {
      console.log('=== VALIDATING SUPPLIER FORM ===');
      let isValid = true;
      
      // Basic validation - check if form exists
      if (!this.form) {
        console.error('Form is not initialized');
        return false;
      }
      
      // Clear previous errors
      this.form.errors.clear();
      
      console.log('Form data for validation:', {
        phoneNumber: this.form.phoneNumber,
        phone: this.form.phone,
        type: this.form.type,
        fullName: this.form.fullName,
        businessName: this.form.businessName
      });
      
      // Required field validations
      if (!this.form.phoneNumber || this.form.phoneNumber.trim() === '') {
        console.log('Phone number validation failed');
        this.form.errors.set('phoneNumber', this.$t('Mobile number is required'));
        isValid = false;
      }
      
      if (this.form.type === 'Individual' && (!this.form.fullName || this.form.fullName.trim() === '')) {
        console.log('Full name validation failed for individual');
        this.form.errors.set('fullName', this.$t('Full name is required for individual suppliers'));
        isValid = false;
      }
      
      if (this.form.type === 'Company' && (!this.form.businessName || this.form.businessName.trim() === '')) {
        console.log('Business name validation failed for company');
        this.form.errors.set('businessName', this.$t('Business name is required for company suppliers'));
        isValid = false;
      }
      
      // Chart of account validation removed to match ClientForm behavior
      
      console.log('=== SUPPLIER FORM VALIDATION RESULT:', isValid, '===');
      return isValid;
    },

    // Submit form
    async submitForm() {
      if (!this.validateForm()) {
        // Provide clear feedback if validation fails
        if (this.$toast) {
          this.$toast.fire({
            type: 'error',
            title: this.$t('Please fix the highlighted errors and try again')
          });
        }
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
        // Include representatives data
        representatives: this.form.representatives && Array.isArray(this.form.representatives) ? this.form.representatives : [],
        // Ensure phone field is included
        phone: this.form.phone,
        phoneNumber: this.form.phoneNumber,
      };
      
      // Emit submit event with form data
      this.$emit('submit', submitData);
    },

    // Get form data for parent component
    getFormData() {
      return this.form;
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
      const slug = (this.$route && this.$route.params && this.$route.params.slug) || (this.initialData && this.initialData.slug);
      console.log('Loading representatives for supplier:', slug);
      
      if (slug && slug !== 'new') {
        try {
          const response = await axios.get(`/api/supplier/${slug}/representatives`);
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

    // Load routing settings
    async loadRoutingSettings() {
      try {
        console.log('Loading routing settings...');
        // Get the specific suppliers_account routing setting
        const response = await this.$http.get('/api/account-routing-settings');
        console.log('Routing settings response:', response);
        
        if (response.data && response.data.success) {
          console.log('Routing settings data:', response.data.data);
          // Find the suppliers_account setting
          this.routingSetting = response.data.data.find(setting => setting.setting_key === 'suppliers_account');
          console.log('Found suppliers_account setting:', this.routingSetting);
          
          if (this.routingSetting) {
            // Add routing type display name
            this.routingSetting.routing_type_display = this.getRoutingTypeDisplayName(this.routingSetting.routing_type);
            console.log('Routing setting with display name:', this.routingSetting);
          } else {
            console.log('No suppliers_account setting found in:', response.data.data);
            // Set a default routing setting if none found
            this.routingSetting = {
              routing_type: 'per_each',
              routing_type_display: 'Specify Per Each',
              main_account_id: null
            };
            console.log('Using default routing setting:', this.routingSetting);
          }
        } else {
          console.log('Routing settings response not successful:', response.data);
          // Set a default routing setting if API fails
          this.routingSetting = {
            routing_type: 'per_each',
            routing_type_display: 'Specify Per Each',
            main_account_id: null
          };
          console.log('Using default routing setting due to API failure:', this.routingSetting);
        }
      } catch (error) {
        console.error('Error loading routing settings:', error);
        // Set a default routing setting if error occurs
        this.routingSetting = {
          routing_type: 'per_each',
          routing_type_display: 'Specify Per Each',
          main_account_id: null
        };
        console.log('Using default routing setting due to error:', this.routingSetting);
      }
    },
    
    // Set default routing setting
    setDefaultRoutingSetting() {
      this.routingSetting = {
        routing_type: 'per_each',
        routing_type_display: 'Specify Per Each',
        main_account_id: null
      };
      console.log('Using default routing setting:', this.routingSetting);
    },
    
    // Get routing type display name
    getRoutingTypeDisplayName(routingType) {
      const displays = {
        'automatic': 'Automatic',
        'per_each': 'Specify Per Each',
        'main_account_per_each': 'Specify Main Account Per Each',
        'cancel': 'Cancel'
      };
      return displays[routingType] || routingType;
    },

    // Load chart of accounts
    async loadChartOfAccounts() {
      try {
        console.log('Loading chart of accounts...');
        console.log('Current routing setting:', this.routingSetting);
        
        this.loadingChartOfAccounts = true;
        this.chartOfAccountsError = null;
        
        // If routing is automatic, we don't need to load all accounts
        if (this.routingSetting && this.routingSetting.routing_type === 'automatic') {
          console.log('Routing type is automatic, not loading chart of accounts');
          this.chartOfAccounts = [];
          this.loadingChartOfAccounts = false;
          return;
        }
        
        // For other routing types, load accounts based on routing setting
        if (this.routingSetting && this.routingSetting.main_account_id) {
          console.log('Loading accounts from routing setup...');
          try {
            // Load accounts from the routing setup
            const response = await this.$http.get(`/api/account-routing-settings/${this.routingSetting.setting_key}/accounts`);
            console.log('Routing accounts response:', response);
            
            if (response.data && response.data.success) {
              this.chartOfAccounts = response.data.accounts || [];
              console.log('Loaded accounts from routing setup:', this.chartOfAccounts.length);
            } else {
              throw new Error('Routing accounts response not successful');
            }
          } catch (routingError) {
            console.log('Routing accounts failed, falling back to all accounts:', routingError);
            // Fallback to all accounts
            const fallbackResponse = await this.$http.get('/api/suppliers/chart-of-accounts');
            this.chartOfAccounts = fallbackResponse.data || [];
            console.log('Loaded fallback accounts:', this.chartOfAccounts.length);
          }
        } else {
          console.log('No main account ID, loading all accounts as fallback');
          // Load all active accounts as fallback
          const response = await this.$http.get('/api/suppliers/chart-of-accounts');
          this.chartOfAccounts = response.data || [];
          console.log('Loaded all accounts as fallback:', this.chartOfAccounts.length);
        }
        
        // Ensure we have some accounts loaded
        if (this.chartOfAccounts.length === 0) {
          console.log('No accounts loaded, trying alternative endpoint...');
          try {
            const altResponse = await this.$http.get('/api/chart-of-accounts/dropdown');
            this.chartOfAccounts = altResponse.data.data || altResponse.data || [];
            console.log('Loaded accounts from dropdown endpoint:', this.chartOfAccounts.length);
          } catch (altError) {
            console.error('Alternative endpoint also failed:', altError);
            // Set a minimal fallback to prevent empty dropdown
            this.chartOfAccounts = [{
              id: 'placeholder',
              name: 'No accounts available - Please configure chart of accounts',
              code: 'N/A',
              type: 'Error'
            }];
            this.chartOfAccountsError = 'No chart of accounts available. Please check your configuration.';
          }
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        this.chartOfAccountsError = error.message || 'Failed to load chart of accounts';
        this.chartOfAccounts = [];
      } finally {
        this.loadingChartOfAccounts = false;
      }
    },

    // Search chart of accounts (for v-select search)
    searchChartOfAccounts(search, loading) {
      console.log('Searching for:', search);
      
      if (!search || search.length < 2) {
        console.log('Search too short, returning first 50 accounts');
        const result = this.chartOfAccounts.slice(0, 50);
        loading(false);
        return Promise.resolve(result);
      }
      
      return (async () => {
        try {
          // Filter locally first for better performance
          const filtered = this.chartOfAccounts.filter(account => 
            account.name.toLowerCase().includes(search.toLowerCase()) ||
            account.code.toLowerCase().includes(search.toLowerCase())
          );
          
          console.log('Local filtered results:', filtered.length);
          
          // If we have enough results locally, return them
          if (filtered.length >= 10) {
            console.log('Enough local results, returning filtered');
            return filtered.slice(0, 50);
          }
          
          // Otherwise, search from API
          console.log('Searching from API...');
          const response = await this.$http.get('/api/chart-of-accounts/search', {
            params: { term: search }
          });
          
          console.log('API search response:', response);
          
          if (response.data && (response.data.data || response.data)) {
            console.log('API returned data, returning results');
            const apiData = response.data.data || response.data;
            return apiData.slice(0, 50);
          } else {
            console.log('API returned no data, returning local filtered');
            return filtered.slice(0, 50);
          }
        } catch (error) {
          console.error('Search error:', error);
          // Return local filtered results on error
          const filtered = this.chartOfAccounts.filter(account => 
            account.name.toLowerCase().includes(search.toLowerCase()) ||
            account.code.toLowerCase().includes(search.toLowerCase())
          );
          return filtered.slice(0, 50);
        } finally {
          loading(false);
        }
      })();
    },

    // Create new chart of account
    async createNewAccount() {
      if (this.isCreatingAccount) {
        return;
      }
      this.isCreatingAccount = true;

      try {
        // Get the Asset account type ID (suppliers are typically assets)
        const assetTypeResponse = await axios.get('/api/chart-of-account-types');
        let typeId = 1; // Default fallback
        if (assetTypeResponse.data && assetTypeResponse.data.data) {
          const assetType = assetTypeResponse.data.data.find(type => 
            type.name && type.name.toLowerCase().includes('asset')
          );
          if (assetType) {
            typeId = assetType.id;
          }
        }

        // Determine parent_id based on routing settings
        let parentId = null;
        if (this.routingSetting && this.routingSetting.routing_type === 'main_account_per_each' && this.routingSetting.main_account_id) {
          parentId = this.routingSetting.main_account_id;
        }

        // Generate account code
        const codeResponse = await axios.post('/api/chart-of-accounts/generate-code', {
          parent_id: parentId
        });
        
        const accountCode = codeResponse.data.code || '1000';

        const response = await axios.post('/api/chart-of-accounts', {
          name: this.form.type === 'Individual' ? this.form.fullName : this.form.businessName,
          code: accountCode,
          type_id: typeId,
          parent_id: parentId,
          order: 0,
          is_active: true
        });

        if (response.data && response.data.data) {
          // Add to local chartOfAccounts array
          const newAccount = response.data.data;
          this.chartOfAccounts.push({
            id: newAccount.id,
            name: newAccount.name,
            code: newAccount.code,
            type: newAccount.type?.name || 'Asset'
          });
          
          // Set as selected
          this.form.chartOfAccountId = newAccount.id;
          
          this.$toast.success(
            "Success!",
            "New chart of account created successfully."
          );
        } else {
          throw new Error(response.data.message || "Failed to create new chart of account.");
        }
      } catch (error) {
        console.error('Error creating chart of account:', error);
        let errorMessage = "Failed to create new chart of account.";
        
        if (error.response && error.response.data) {
          if (error.response.data.message) {
            errorMessage = error.response.data.message;
          } else if (error.response.data.error) {
            errorMessage = error.response.data.error;
          }
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        this.$toast.error(
          "Error!",
          errorMessage
        );
      } finally {
        this.isCreatingAccount = false;
      }
    },

    // Auto-assign Chart of Account for supplier
    async autoAssignSupplierChartOfAccount() {
      if (!this.form || this.isAutoAssigningSupplier) {
        return;
      }
      
      this.isAutoAssigningSupplier = true;
      
      try {
        // Get the current supplier slug from the form or route
        const supplierSlug = this.form.slug || (this.$route && this.$route.params && this.$route.params.slug);
        
        if (!supplierSlug || supplierSlug === 'new') {
          console.log('No supplier slug available for auto-assign');
          return;
        }
        
        const response = await this.$http.post(`/api/suppliers/${supplierSlug}/auto-assign-chart-of-account`);
        
        if (response.data.success) {
          console.log('Auto-assign response:', response.data);
          
          // Update the form with new chart of account
          this.form.chartOfAccountId = response.data.chart_of_account_id;
          
          // Force Vue to re-render the component to update the UI
          this.$nextTick(() => {
            this.$forceUpdate();
          });
          
          // Show success message
          this.$toast.fire({
            type: "success",
            title: this.$t("Chart of Account assigned successfully"),
          });
          
        } else {
          this.$toast.fire({
            type: "error",
            title: this.$t("Failed to assign Chart of Account"),
            text: response.data.message || this.$t("Please try again or assign manually")
          });
        }
        
      } catch (error) {
        console.error('Error auto-assigning chart of account:', error);
        this.$toast.fire({
          type: "error",
          title: this.$t("An error occurred while assigning Chart of Account"),
        });
      } finally {
        this.isAutoAssigningSupplier = false;
      }
    }
  },
};
</script>

<style scoped>
/* Section cards */
.form-card {
  margin-top: 20px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  background: #fff;
}

.form-card .card-header {
  background-color: #33a0d9;
  color: #ffffff;
  border-radius: 20px 20px 0 0;
  padding: 22px 16px;
  border-bottom: none;
}

.form-card .section-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.form-card .card-body {
  padding: 16px;
}

/* Inputs (match invoices create look and feel) */
.form-control {
  background: #fff !important;
}

/* Readonly input visual style (match ClientForm) */
input[readonly] {
  background-color: #f8f9fa !important;
  color: #6c757d;
  border-color: #CED4DA;
  cursor: not-allowed;
}

.form-control:focus,
select.form-control:focus,
textarea.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

/* Radio group horizontal styling */
.radio-group {
  display: flex;
  gap: 16px;
  align-items: center;
}

.radio-group .radio-inline {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0;
}

/* v-select tweaks */
.v-select .vs__dropdown-toggle {
  border-radius: 6px;
  border-color: #CED4DA;
}

.v-select .vs__dropdown-toggle:focus,
.v-select .vs__dropdown-toggle.vs__open {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

.v-select .vs__search,
.v-select .vs__selected,
.v-select .vs__dropdown-menu {
  font-size: 0.95rem;
}

/* Custom file input */
.custom-file-input:focus ~ .custom-file-label {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

.custom-file-label {
  border-radius: 6px;
}

/* File upload drop area */
.file-upload-area {
  position: relative;
  border: 2px dashed #33a0d9;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  background: #f8fdfe;
}

.file-upload-area .file-input {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-upload-area .file-upload-content {
  color: #33a0d9;
}

/* Selected files list */
.selected-files .selected-file-item {
  display: inline-flex;
  align-items: center;
  background: #f5faff;
  border: 1px solid #e3f3f7;
  border-radius: 6px;
  padding: 6px 10px;
  margin-right: 8px;
  margin-bottom: 8px;
}

/* Toggle labels spacing */
.d-flex.align-items-center span.ml-3 {
  font-weight: 500;
}

/* Required asterisk */
.required {
  color: #dc3545;
}

/* RTL adjustments */
[dir="rtl"] .form-card .card-header {
  border-radius: 20px 20px 0 0;
}

/* Force file input label to stay on left even in RTL (match ClientForm) */
.custom-file-label {
  text-align: left !important;
}

[dir="rtl"] .custom-file-label {
  text-align: left !important;
}

/* Button brand alignment if used inside the component */
.btn-primary {
  background: #33a0d9 !important;
  border-color: #33a0d9 !important;
}

.btn-primary:hover {
  filter: brightness(0.95);
}

/* Equal height for Additional Information and Documents & Settings */
.equal-height > [class^="col-"],
.equal-height > [class*=" col-"] {
  display: flex;
}

.equal-height .form-card {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.equal-height .form-card .card-body {
  flex: 1 1 auto;
}
</style>