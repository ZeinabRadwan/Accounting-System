<template>
  <div :class="{ 'card-body': showCardBody }">
    <!-- Client Details Section - Now First -->
    <div class="row">
      <div class="col-md-6">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-user-circle mr-2"></i>
              {{ $t("Client Details") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="codeNumber">
                {{ $t("Client Number") }}
              </label>
              <input id="codeNumber" v-model="form.codeNumber" type="text" class="form-control" 
                :class="{ 'is-invalid': form.errors.has('codeNumber') }" name="codeNumber"
                :placeholder="$t('Loading...')" readonly aria-readonly="true" />
              <small class="form-text text-muted">
                {{ $t("This client number is automatically generated and cannot be changed") }}
              </small>
              <has-error :form="form" field="codeNumber" />
            </div>

            <div class="form-group">
              <label>{{ $t("Client Type") }}</label>
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

            <!-- Individual Client Fields -->
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

            <!-- Business Client Fields -->
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

    <!-- Client Representative Info Section -->
    <div class="row mt-4" v-if="form.type === 'Company'">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-users mr-2"></i>
              {{ $t("Client Representative Info") }}
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
    <div class="row mt-4">
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
                  accept="image/jpeg,image/png,image/gif" />
                <div class="file-upload-content">
                  <i class="fas fa-cloud-upload-alt"></i>
                  <p>{{ $t("Drop files here or click to browse") }}</p>
                  <small class="text-muted">{{ $t("Supported formats: JPEG, PNG, GIF") }}</small>
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
    <div v-if="routingSetting && routingSetting.routing_type !== 'automatic'" class="row mt-4">
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
         <div v-if="routingSetting" class="alert alert-info">
           <i class="fas fa-info-circle mr-2"></i>
           <strong>{{ $t("Current Routing Type") }}:</strong> {{ routingSetting.routing_type_display }}
           <!-- <span v-if="routingSetting.description" class="ml-2">- {{ routingSetting.description }}</span> -->
         </div>

       

        <!-- Automatic Account Routing - No dropdown needed -->
        <!-- <div v-if="routingSetting && routingSetting.routing_type === 'automatic'" class="alert alert-success">
          <i class="fas fa-check-circle mr-2"></i>
          {{ $t("Chart of account will be automatically assigned based on your accounting configuration.") }}
        </div> -->

                                                                        <!-- Specify Per Each - Show dropdown and create button -->
       
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
              <toggle-button v-model="form.isSendEmail" :disabled="isDemoMode" />
              <span class="ml-3">{{ $t("Send Welcome Email") }}</span>
            </div>
          </div>
          <div class="form-group col-md-6">
            <div class="d-flex align-items-center">
              <toggle-button v-model="form.isSendSMS" :disabled="isDemoMode" />
              <span class="ml-3">{{ $t("Send Welcome SMS") }}</span>
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

export default {
  name: "ClientForm",
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
      
      // Add missing properties
      routingSetting: null,
      loadingChartOfAccounts: false,
      chartOfAccountsError: null,
      chartOfAccounts: [],
      isCreatingAccount: false,
    };
  },
  watch: {
    // Watch for changes in initialData prop
    initialData: {
      handler(newData) {
        console.log('=== INITIAL DATA WATCHER TRIGGERED ===');
        console.log('New data:', newData);
        console.log('Form exists:', !!this.form);
        
        if (newData && Object.keys(newData).length > 0) {
          // Set form values from initial data
          Object.keys(newData).forEach(key => {
            if (Object.prototype.hasOwnProperty.call(this.form, key)) {
              console.log(`Setting form.${key} = ${newData[key]}`);
              this.form[key] = newData[key];
            } else {
              console.log(`Form does not have property: ${key}`);
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
          console.log('Form after initialization:', this.form);
          
          // Load representatives if this is an existing client
          if (newData.slug && newData.slug !== 'new') {
            console.log('=== WILL LOAD REPRESENTATIVES ===');
            console.log('Will load representatives for slug:', newData.slug);
            console.log('Slug type:', typeof newData.slug);
            console.log('Slug value:', newData.slug);
            console.log('Full newData:', newData);
            // Add a small delay to ensure form is fully initialized
            setTimeout(() => {
              console.log('Calling loadRepresentatives after timeout');
              this.loadRepresentatives();
            }, 100);
          } else {
            console.log('=== NOT LOADING REPRESENTATIVES ===');
            console.log('NOT loading representatives because:');
            console.log('- newData.slug exists:', !!newData.slug);
            console.log('- newData.slug value:', newData.slug);
            console.log('- newData.slug !== new:', newData.slug !== 'new');
            console.log('Full newData:', newData);
            
            // Only load next code number for truly new clients (not when editing)
            if (!newData.slug || newData.slug === 'new') {
              console.log('Loading next code number for new client');
              this.loadNextCodeNumber();
            } else {
              console.log('Skipping next code number load - this appears to be an edit operation');
            }
          }
        }
      },
      immediate: true,
      deep: true
    },
    
    // Watch for changes in phoneNumber field
    'form.phoneNumber': {
      handler(newValue, oldValue) {
        console.log('Phone number changed:', { old: oldValue, new: newValue });
      },
      immediate: true
    },
    
    // Watch for changes in representatives field
    'form.representatives': {
      handler(newValue, oldValue) {
        console.log('Representatives changed:', { old: oldValue, new: newValue });
        console.log('New representatives length:', newValue ? newValue.length : 'undefined');
      },
      immediate: true
    },

    // Watch for routing settings changes
    routingSetting: {
      handler(newValue, oldValue) {
        if (newValue && newValue.routing_type !== oldValue?.routing_type) {
          console.log('Routing type changed, reloading chart of accounts');
          this.loadChartOfAccounts();
        }
      },
      deep: true
    }
  },
  computed: {
    // Check if this is a new client
    isNewClient() {
      return !this.initialData || Object.keys(this.initialData).length === 0 || 
             (this.initialData.slug && this.initialData.slug === 'new');
    }
  },
  created() {
    console.log('ClientForm component created');
    this.initializeForm();
  },
  mounted() {
    console.log('ClientForm component mounted, form:', this.form);
    console.log('Initial data in mounted:', this.initialData);
    // Don't call loadRepresentatives here - let the watcher handle it
    
    // Load next code number for new clients
    this.loadNextCodeNumber();
    
    // Load routing settings first, then chart of accounts
    this.loadRoutingSettings().then(() => {
      console.log('Routing settings loaded, now loading chart of accounts...');
      this.loadChartOfAccounts().then(() => {
        console.log('Chart of accounts loading completed. Total accounts:', this.chartOfAccounts.length);
        console.log('Chart of accounts data:', this.chartOfAccounts);
      });
    }).catch(error => {
      console.error('Error in mounted lifecycle:', error);
    });
  },
  methods: {
    // Initialize the form
    initializeForm() {
      console.log('=== INITIALIZING FORM ===');
      console.log('Initial data:', this.initialData);
      
      this.form = new Form({
        // Account Details
        codeNumber: "AC001",
        notes: "",
        displayLanguage: "",
        
        // Client Details
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
    
    // Load the next available code number for new clients
    async loadNextCodeNumber() {
      try {
        console.log('=== LOADING NEXT CODE NUMBER ===');
        console.log('Current form codeNumber before API call:', this.form.codeNumber);
        
        const response = await axios.get('/clients/next-code');
        console.log('Next code API response:', response.data);
        
        if (response.data.success) {
          this.form.codeNumber = response.data.formatted_code;
          console.log('Code number successfully loaded:', this.form.codeNumber);
          console.log('Debug info from API:', response.data.debug);
        } else {
          console.error('API returned error:', response.data.message);
          // Fallback to default
          this.form.codeNumber = 'AC001';
          console.log('Using fallback code number:', this.form.codeNumber);
        }
      } catch (error) {
        console.error('Error loading next code number:', error);
        console.error('Error details:', error.response?.data || error.message);
        // Fallback to default
        this.form.codeNumber = 'AC001';
        console.log('Using fallback code number due to error:', this.form.codeNumber);
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
              Swal.fire(
                this.$t("Error!"),
                this.$t("Please select a valid image file"),
                "error"
              );
            }
          } else {
            // For attachments, only allow images to match backend validation
            const allowedTypes = [
              'image/jpeg',
              'image/png',
              'image/gif'
            ];
            
            if (allowedTypes.includes(file.type)) {
              validFiles.push(file);
            } else {
              Swal.fire(
                this.$t("Error!"),
                this.$t("Only JPEG, PNG, and GIF files are allowed."),
                "error"
              );
            }
          }
        } else {
          Swal.fire(
            this.$t("Error!"),
            this.$t("Please select a file with size less than 2 MB"),
            "error"
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

    // Remove a file from attachments
    removeFile(index) {
      this.form.attachments.splice(index, 1);
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
      this.form.notes = "";
      this.form.displayLanguage = "";
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
      this.form.attachments = []; // Clear attachments
      this.form.image = null; // Clear image
      this.form.chartOfAccountId = null; // Clear chart of account
      
      // Clear image preview
      this.url = null;
      
      // Clear validation errors
      this.form.errors.clear();
    },

    // Get form data for parent component
    getFormData() {
      return this.form;
    },

    // Validate form
    async validateForm() {
      console.log('=== VALIDATING FORM ===');
      console.log('Form object:', this.form);
      console.log('Form type:', this.form ? this.form.type : 'No form');
      console.log('Form phoneNumber:', this.form ? this.form.phoneNumber : 'No form');
      console.log('Form businessName:', this.form ? this.form.businessName : 'No form');
      console.log('Form fullName:', this.form ? this.form.fullName : 'No form');
      
      // Basic validation - check if form exists
      if (!this.form) {
        console.error('Form is not initialized');
        return false;
      }
      
      // Check if mobile number is provided
      if (!this.form.phoneNumber || this.form.phoneNumber.trim() === '') {
        console.log('Phone number validation failed - phoneNumber:', this.form.phoneNumber);
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Mobile number is required"),
          });
        } else {
          alert(this.$t("Mobile number is required"));
        }
        return false;
      }

       // Check if name is provided based on type
       if (this.form.type === 'Company' && (!this.form.businessName || this.form.businessName.trim() === '')) {
         console.log('Business name validation failed - businessName:', this.form.businessName);
         if (window.toast && typeof window.toast.fire === 'function') {
           window.toast.fire({
             type: "error",
             title: this.$t("Business name is required for company clients"),
           });
         } else {
           alert(this.$t("Business name is required for company clients"));
         }
         return false;
       }

       if (this.form.type === 'Individual' && (!this.form.fullName || this.form.fullName.trim() === '')) {
         console.log('Full name validation failed - fullName:', this.form.fullName);
         if (window.toast && typeof window.toast.fire === 'function') {
           window.toast.fire({
             type: "error",
             title: this.$t("Full name is required for individual clients"),
           });
         } else {
           alert(this.$t("Full name is required for individual clients"));
         }
         return false;
       }

       // For new clients, automatically create chart of account if none selected
       if (this.isNewClient && this.routingSetting && this.routingSetting.routing_type !== 'automatic') {
         if (!this.form.chartOfAccountId) {
           // Auto-create chart of account for new client
           const autoCreatedAccount = await this.autoCreateChartOfAccountForNewClient();
           if (autoCreatedAccount) {
             // Show info message about auto-creation
             if (window.toast && typeof window.toast.fire === 'function') {
               window.toast.fire({
                 type: 'info',
                 title: this.$t('Chart of account automatically created for new client'),
                 text: this.$t('Account will be properly created when you save the client.')
               });
             }
           }
         }
       }

       return true;
     },

    // Load representatives for existing client
    async loadRepresentatives() {
      // Try to get slug from route params first, then from initialData
      const slug = this.$route.params.slug || (this.initialData && this.initialData.slug);
      console.log('=== LOADING REPRESENTATIVES ===');
      console.log('Loading representatives for client:', slug);
      console.log('Route params:', this.$route.params);
      console.log('Initial data:', this.initialData);
      console.log('Form type:', this.form.type);
      console.log('Form representatives before load:', this.form.representatives);
      
      if (slug && slug !== 'new') {
        try {
          const apiUrl = `/api/client/${slug}/representatives`;
          console.log('Making API call to:', apiUrl);
          
          const response = await this.$http.get(apiUrl);
          console.log('Representatives API response received');
          console.log('Response status:', response.status);
          console.log('Response data:', response.data);
          console.log('Response success:', response.data.success);
          console.log('Response data.data:', response.data.data);
          
          if (response.data.success) {
            this.form.representatives = response.data.data;
            console.log('Representatives loaded into form:', this.form.representatives);
            console.log('Form representatives after load:', this.form.representatives);
            console.log('Representatives count after load:', this.form.representatives.length);
          } else {
            console.log('API response indicates failure:', response.data);
          }
        } catch (error) {
          console.error('=== ERROR LOADING REPRESENTATIVES ===');
          console.error('Error:', error);
          console.error('Error message:', error.message);
          console.error('Error response:', error.response);
          if (error.response) {
            console.error('Error status:', error.response.status);
            console.error('Error data:', error.response.data);
          }
        }
      } else {
        console.log('No slug or new client, skipping representatives load');
        console.log('Slug value:', slug);
        console.log('Is new client:', slug === 'new');
      }
      console.log('=== END LOADING REPRESENTATIVES ===');
    },

    // Handle when representatives are changed (added, edited, deleted)
    handleRepresentativesChanged(representatives) {
      this.form.representatives = representatives;
    },

    // Load routing settings
    async loadRoutingSettings() {
      try {
        console.log('Loading routing settings...');
        // Get the specific clients_account routing setting
        const response = await this.$http.get('/api/account-routing-settings');
        console.log('Routing settings response:', response);
        
        if (response.data && response.data.success) {
          console.log('Routing settings data:', response.data.data);
          // Find the clients_account setting
          this.routingSetting = response.data.data.find(setting => setting.setting_key === 'clients_account');
          console.log('Found clients_account setting:', this.routingSetting);
          
          if (this.routingSetting) {
            // Add routing type display name
            this.routingSetting.routing_type_display = this.getRoutingTypeDisplayName(this.routingSetting.routing_type);
            console.log('Routing setting with display name:', this.routingSetting);
          } else {
            console.log('No clients_account setting found in:', response.data.data);
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

    // Get routing type display name
    getRoutingTypeDisplayName(routingType) {
      switch (routingType) {
        case 'automatic':
          return 'Automatic Account Routing';
        case 'per_each':
          return 'Specify Per Each';
        case 'main_account_per_each':
          return 'Specify Main Account Per Each';
        case 'cancel':
          return 'Cancel Account Routing';
        default:
          return 'Unknown';
      }
    },

    // Load chart of accounts with search functionality
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
            const fallbackResponse = await this.$http.get('/api/chart-of-accounts/all');
            this.chartOfAccounts = fallbackResponse.data.data || fallbackResponse.data || [];
            console.log('Loaded fallback accounts:', this.chartOfAccounts.length);
          }
        } else {
          console.log('No main account ID, loading all accounts as fallback');
          // Load all active accounts as fallback
          const response = await this.$http.get('/api/chart-of-accounts/all');
          // The getAll endpoint returns a resource collection, so data is directly in response.data
          this.chartOfAccounts = response.data.data || response.data || [];
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
      } finally {
        this.loadingChartOfAccounts = false;
      }
    },

    // Search chart of accounts (for v-select search)
    async searchChartOfAccounts(search) {
      console.log('Searching for:', search);
      
      if (!search || search.length < 2) {
        console.log('Search too short, returning first 50 accounts');
        return this.chartOfAccounts.slice(0, 50); // Return first 50 for initial display
      }
      
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
          console.log('No API data, returning local filtered');
          return filtered;
        }
      } catch (error) {
        console.error('Error searching chart of accounts:', error);
        // Fallback to local filtering
        const fallbackFiltered = this.chartOfAccounts.filter(account => 
          account.name.toLowerCase().includes(search.toLowerCase()) ||
          account.code.toLowerCase().includes(search.toLowerCase())
        );
        console.log('Fallback filtered results:', fallbackFiltered.length);
        return fallbackFiltered.slice(0, 50);
      }
    },

    // Auto-create chart of account for new client
    async autoCreateChartOfAccountForNewClient() {
      try {
        // This method would implement the logic to automatically create a chart of account
        // For now, we'll return null to indicate no auto-creation
        console.log('Auto-create chart of account method called');
        return null;
      } catch (error) {
        console.error('Error auto-creating chart of account:', error);
        return null;
      }
    },

    // Submit form
    async submitForm() {
      console.log('=== CLIENTFORM SUBMITFORM CALLED ===');
      console.log('Form object:', this.form);
      console.log('Form type:', typeof this.form);
      console.log('Form data method:', this.form ? typeof this.form.data : 'No form');
      console.log('isNewClient:', this.isNewClient);
      console.log('initialData:', this.initialData);
      
      if (!this.form) {
        console.error('Form is not initialized!');
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Form is not ready"),
            text: this.$t("Please wait a moment and try again.")
          });
        } else {
          alert(this.$t("Form is not ready. Please wait a moment and try again."));
        }
        return;
      }
      
      // Check if form has the required methods
      if (!this.form.data || typeof this.form.data !== 'function') {
        console.error('Form data method is not available!');
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Form is not properly initialized"),
            text: this.$t("Please refresh the page and try again.")
          });
        } else {
          alert(this.$t("Form is not properly initialized. Please refresh the page and try again."));
        }
        return;
      }
      
      try {
        console.log('Validating form...');
        const isValid = await this.validateForm();
        console.log('Validation result:', isValid);
        
        if (!isValid) {
          console.log('Form validation failed');
          if (window.toast && typeof window.toast.fire === 'function') {
            window.toast.fire({
              type: "error",
              title: this.$t("Please fill in all required fields correctly."),
            });
          }
          return;
        }
        
        console.log('Form validation passed, preparing submit data...');
        
        // Map form data to API format
        const submitData = {
          // Explicitly include all form fields to ensure they are sent
          codeNumber: this.form.codeNumber,
          notes: this.form.notes,
          displayLanguage: this.form.displayLanguage,
          status: this.form.status,
          
          // Client Details
          type: this.form.type,
          fullName: this.form.fullName,
          businessName: this.form.businessName,
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          phone: this.form.phone,
          phoneNumber: this.form.phoneNumber, // Explicitly include phone number
          email: this.form.email,
          streetAddress1: this.form.streetAddress1,
          streetAddress2: this.form.streetAddress2,
          city: this.form.city,
          state: this.form.state,
          postalCode: this.form.postalCode,
          country: this.form.country,
          neighbourhood: this.form.neighbourhood,
          commercialRegister: this.form.commercialRegister,
          taxCard: this.form.taxCard,
          
          // Additional Fields
          image: this.form.image,
          attachments: this.form.attachments,
          isSendEmail: this.form.isSendEmail,
          isSendSMS: this.form.isSendSMS,
          
          // Map legacy fields for backward compatibility
          name: this.form.type === 'Individual' ? this.form.fullName : this.form.businessName,
          companyName: this.form.businessName,
          taxRegistrationNumber: this.form.taxCard,
          address: this.form.streetAddress1,
          
          // Include representatives data
          representatives: this.form.representatives || [],
          
          // Chart of Account
          chartOfAccountId: this.form.chartOfAccountId,
        };
        
        console.log('Emitting submit event with data...');
        
        // Emit submit event with form data
        this.$emit('submit', submitData);
        
        console.log('Submit event emitted successfully');
      } catch (error) {
        console.error('Error in submitForm:', error);
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Error submitting form"),
            text: error.message || 'Unknown error occurred'
          });
        } else {
          alert(`Error submitting form: ${error.message || 'Unknown error occurred'}`);
        }
      }
    },

    // Create new chart of account
    async createNewAccount() {
      try {
        this.isCreatingAccount = true;
        
        // This method would implement the logic to create a new chart of account
        // For now, we'll just show a message
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: 'info',
            title: this.$t('Create New Account'),
            text: this.$t('This feature is not yet implemented.')
          });
        }
      } catch (error) {
        console.error('Error creating new account:', error);
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: 'error',
            title: this.$t('Error'),
            text: this.$t('Failed to create new account')
          });
        }
      } finally {
        this.isCreatingAccount = false;
      }
    },

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

/* Readonly input visual style */
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

/* Force file input label to stay on left even in RTL */
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
</style>