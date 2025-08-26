<template>
  <form role="form" @submit.prevent="submitForm" @keydown="form.onKeydown($event)">
    <div :class="{ 'card-body': showCardBody }">
      <!-- Account Details Section -->
      <div class="row">
        <div class="col-md-6">
          <h5 class="section-title">{{ $t("Account Details") }}</h5>
          
          <div class="form-group">
            <label for="codeNumber">
              {{ $t("Code Number") }}
              <i class="fas fa-question-circle text-muted ml-1" :title="$t('Auto-generated unique identifier for the client')"></i>
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

          <!-- Representatives Section - Only for Company type -->
          <div v-if="form.type === 'Company'" class="mt-4">
            <h6 class="section-subtitle">{{ $t("Representatives") }}</h6>
            <p class="text-muted small">Debug: Client type is "{{ form.type }}"</p>
            <p class="text-muted small">Debug: Representatives count: {{ (form.representatives || []).length }}</p>
            <p class="text-muted small">Debug: Representatives data: {{ JSON.stringify(form.representatives) }}</p>
            
            <RepresentativesList 
              :representatives="form.representatives || []"
              @representatives-changed="handleRepresentativesChanged"
            />
          </div>
          
          <!-- Debug info for non-Company types -->
          <div v-else class="mt-4">
            <p class="text-muted small">Debug: Representatives section hidden because client type is "{{ form.type }}" (not "Company")</p>
            <p class="text-muted small">Debug: Representatives count: {{ (form.representatives || []).length }}</p>
          </div>
        </div>
      </div>

      <!-- Address Section -->
      <div class="row mt-4">
        <div class="col-md-12">
          <h5 class="section-title">{{ $t("Address Information") }}</h5>
          
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

      <!-- Additional Fields Section -->
      <div class="row mt-4">
        <div class="col-md-6">
          <h5 class="section-title">{{ $t("Additional Information") }}</h5>
          
          <div class="form-group">
            <label for="notes">{{ $t("Notes") }}</label>
            <textarea id="notes" v-model="form.notes" class="form-control"
              :class="{ 'is-invalid': form.errors.has('notes') }" rows="3"
              :placeholder="$t('Enter additional notes')" />
            <has-error :form="form" field="notes" />
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

        <div class="col-md-6">
          <h5 class="section-title">{{ $t("Documents & Settings") }}</h5>
          
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

      <!-- Chart of Account Section -->
      <div class="row mt-4">
        <div class="col-md-12">
          <h5 class="section-title">{{ $t("Chart of Account") }}</h5>
          

          
                     <!-- Routing Type Info -->
           <div v-if="routingSetting" class="alert alert-info">
             <i class="fas fa-info-circle mr-2"></i>
             <strong>{{ $t("Current Routing Type") }}:</strong> {{ routingSetting.routing_type_display }}
             <span v-if="routingSetting.description" class="ml-2">- {{ routingSetting.description }}</span>
           </div>

           <!-- Auto-creation note for new clients -->
           <div v-if="isNewClient && routingSetting && routingSetting.routing_type !== 'automatic'" class="alert alert-warning">
             <i class="fas fa-lightbulb mr-2"></i>
             <strong>{{ $t("Note for New Clients") }}:</strong> 
             {{ $t("If you don't select a chart of account, one will be automatically created with the client name when you save the client.") }}
           </div>

          <!-- Automatic Account Routing - No dropdown needed -->
          <div v-if="routingSetting && routingSetting.routing_type === 'automatic'" class="alert alert-success">
            <i class="fas fa-check-circle mr-2"></i>
            {{ $t("Chart of account will be automatically assigned based on your accounting configuration.") }}
          </div>

                                                                    <!-- Specify Per Each - Show dropdown and create button -->
              <div v-if="routingSetting && routingSetting.routing_type === 'per_each'" class="chart-of-account-field">
                <div class="form-group">
                  <label for="chartOfAccountId">
                    {{ $t("Select Chart of Account") }} <span class="required">*</span>
                  </label>
                  <VSelect 
                    v-model="form.chartOfAccountId" 
                    :options="chartOfAccounts" 
                    :reduce="option => option.id"
                    :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                    :placeholder="$t('Select an account')"
                    :searchable="true"
                    :clearable="true"
                  >
                    <template #option="{ name, code, type }">
                      <div class="account-option">
                        <span class="account-name">{{ name }}</span>
                        <span class="account-code">{{ code }}</span>
                        <span class="account-type">{{ type }}</span>
                      </div>
                    </template>
                    <template #selected-option="{ name }">
                      <span class="selected-account-name">{{ name }}</span>
                    </template>
                  </VSelect>
                  <has-error :form="form" field="chartOfAccountId" />
                  <small class="form-text text-muted">
                    {{ $t("Select a chart of account for this client. The account will be created without any parent.") }}
                  </small>
                  
                  <!-- Create New Account Button - Positioned below the select -->
                  <div class="mt-3" v-if="!isNewClient">
                    <button type="button" @click="createNewAccount" class="btn btn-outline-primary create-account-btn" :disabled="isCreatingAccount">
                      <i v-if="isCreatingAccount" class="fas fa-spinner fa-spin mr-2"></i>
                      <i v-else class="fas fa-plus mr-2"></i>
                      {{ isCreatingAccount ? $t("Creating...") : $t("Create New Account") }}
                    </button>
                  </div>
                </div>
              </div>

                                           <!-- Specify Main Account Per Each - Show dropdown and create button -->
            <div v-if="routingSetting && routingSetting.routing_type === 'main_account_per_each'" class="chart-of-account-field">
              <div class="form-group">
                <label for="chartOfAccountId">
                  {{ $t("Select Chart of Account") }} <span class="required">*</span>
                </label>
                <VSelect 
                  v-model="form.chartOfAccountId" 
                  :options="chartOfAccounts" 
                  :reduce="option => option.id"
                  :class="{ 'is-invalid': form.errors.has('chartOfAccountId') }"
                  :placeholder="$t('Select an account')"
                  :searchable="true"
                  :clearable="true"
                >
                  <template #option="{ name, code, type }">
                    <div class="account-option">
                      <span class="account-name">{{ name }}</span>
                      <span class="account-code">{{ code }}</span>
                      <span class="account-type">{{ type }}</span>
                    </div>
                  </template>
                  <template #selected-option="{ name }">
                    <span class="selected-account-name">{{ name }}</span>
                  </template>
                </VSelect>
                <has-error :form="form" field="chartOfAccountId" />
                <small class="form-text text-muted">
                  {{ $t("Select a chart of account for this client. The account will be created under the main client account.") }}
                </small>
                
                <!-- Create New Account Button - Positioned below the select -->
                <div class="mt-3" v-if="!isNewClient">
                  <button type="button" @click="createNewAccount" class="btn btn-outline-primary create-account-btn" :disabled="isCreatingAccount">
                    <i v-if="isCreatingAccount" class="fas fa-spinner fa-spin mr-2"></i>
                    <i v-else class="fas fa-plus mr-2"></i>
                    {{ isCreatingAccount ? $t("Creating...") : $t("Create New Account") }}
                  </button>
                </div>
              </div>
            </div>

          <!-- Loading state -->
          <div v-if="loadingChartOfAccounts" class="text-center py-3">
            <div class="spinner-border text-primary" role="status">
              <span class="sr-only">{{ $t("Loading...") }}</span>
            </div>
            <p class="mt-2">{{ $t("Loading chart of accounts...") }}</p>
          </div>

          <!-- Error state -->
          <div v-if="chartOfAccountsError" class="alert alert-danger">
            <i class="fas fa-exclamation-triangle mr-2"></i>
            {{ chartOfAccountsError }}
          </div>
        </div>
      </div>

      <!-- Toggle Buttons Section -->
      <div class="row mt-4">
        <div class="col-md-12">
          <h5 class="section-title">{{ $t("Communication Preferences") }}</h5>
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
  </form>
</template>

<script>
import Form from "vform";
import { VueTelInput } from "vue-tel-input";
import { ToggleButton } from "vue-js-toggle-button";
import RepresentativesList from "./RepresentativesList.vue";

import axios from 'axios';

export default {
  name: "ClientForm",
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
            
            // Load next code number only for new clients
            console.log('Loading next code number for new client');
            this.loadNextCodeNumber();
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
    
    // Load routing settings and chart of accounts
    this.loadRoutingSettings();
    this.loadChartOfAccounts();
  },
  methods: {
    // Initialize the form
    initializeForm() {
      this.form = new Form({
        // Account Details
        codeNumber: "000001",
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
        // Only load next code number if this is a new client (no initial data)
        if (!this.initialData || Object.keys(this.initialData).length === 0) {
          const response = await axios.get('/clients/next-code');
          
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
              Swal.fire(
                this.$t("Error!"),
                this.$t("Please select a valid image file"),
                "error"
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
              Swal.fire(
                this.$t("Error!"),
                this.$t("Please select a valid file type"),
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
      console.log('Phone number in validation:', this.form.phoneNumber);
      console.log('Phone number length:', this.form.phoneNumber ? this.form.phoneNumber.length : 'undefined');
      console.log('Form type:', this.form.type);
      console.log('Business name:', this.form.businessName);
      console.log('Full name:', this.form.fullName);
      console.log('Routing setting:', this.routingSetting);
      console.log('Chart of account ID:', this.form.chartOfAccountId);
      
      // Basic validation - check if form exists
      if (!this.form) {
        console.error('Form is not initialized');
        return false;
      }
      
      // Check if mobile number is provided
      if (!this.form.phoneNumber || this.form.phoneNumber.trim() === '') {
        console.log('Phone number validation failed');
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
         console.log('Business name validation failed');
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
         console.log('Full name validation failed');
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

       // Validate chart of account based on routing type
       // Only validate if routing settings are loaded and not automatic
       if (this.routingSetting && this.routingSetting.routing_type !== 'automatic') {
         if (!this.form.chartOfAccountId) {
           const message = this.routingSetting.routing_type === 'per_each' 
             ? this.$t("Please select a chart of account for this client")
             : this.$t("Please select a chart of account under the main client account");
           console.log('Chart of account validation failed:', message);
           if (window.toast && typeof window.toast.fire === 'function') {
             window.toast.fire({
               type: "error",
               title: message,
             });
           } else {
             alert(message);
           }
           return false;
         }
       } else {
         console.log('Skipping chart of account validation - routing type is automatic or not loaded');
       }

       console.log('=== FORM VALIDATION PASSED ===');
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
          const apiUrl = `/client/${slug}/representatives`;
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

    // Load chart of accounts
    async loadChartOfAccounts() {
      try {
        this.loadingChartOfAccounts = true;
        this.chartOfAccountsError = null;
        
        const response = await this.$http.get('/chart-of-accounts');
        this.chartOfAccounts = response.data || [];
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        this.chartOfAccountsError = error.message || 'Failed to load chart of accounts';
      } finally {
        this.loadingChartOfAccounts = false;
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

    // Load routing settings
    async loadRoutingSettings() {
      try {
        const response = await this.$http.get('/account-routing-settings');
        if (response.data && response.data.success) {
          this.routingSetting = response.data.data;
        }
      } catch (error) {
        console.error('Error loading routing settings:', error);
        this.routingSetting = null;
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

    // Submit form
    async submitForm() {
      console.log('SubmitForm called, form data:', this.form.data());
      console.log('Phone number value:', this.form.phoneNumber);
      console.log('Phone number type:', typeof this.form.phoneNumber);
      
      if (!this.validateForm()) {
        console.log('Form validation failed');
        return;
      }
      
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
      };
      
      console.log('Final submit data:', submitData);
      
      // Emit submit event with form data
      this.$emit('submit', submitData);
    },

  },
};
</script>


<style scoped>


.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
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
  background-color: #6c757d;
  border-color: #6c757d;
}

.auto-assign-btn:disabled:hover {
  background-color: #6c757d;
  border-color: #6c757d;
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

.required-field {
  font-weight: 600;
  color: #495057;
}

.required-input {
  border-left: 3px solid #dc3545;
}

/* Question mark icon styling */
.fa-question-circle {
  cursor: help;
  opacity: 0.7;
}

.fa-question-circle:hover {
  opacity: 1;
}

/* File upload area styling */
.custom-file-label {
  border: 2px dashed #dee2e6;
  background-color: #f8f9fa;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-file-label:hover {
  border-color: #007bff;
  background-color: #e3f2fd;
}

.custom-file-label .text-primary {
  text-decoration: underline;
}

.custom-file-label .fa-cloud-upload-alt {
  font-size: 1.2em;
  color: #6c757d;
}

/* Improved file upload area */
.file-upload-area {
  position: relative;
  border: 2px dashed #dee2e6;
  border-radius: 8px;
  background-color: #f8f9fa;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-upload-area:hover {
  border-color: #007bff;
  background-color: #e3f2fd;
}

.file-upload-area .file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.file-upload-content {
  pointer-events: none;
}

.file-upload-content i {
  font-size: 2.5em;
  color: #6c757d;
  margin-bottom: 10px;
}

.file-upload-content p {
  margin: 10px 0 5px 0;
  font-weight: 500;
  color: #495057;
}

.file-upload-content small {
  color: #6c757d;
}

/* Selected files styling */
.selected-files {
  max-height: 200px;
  overflow-y: auto;
}

.selected-file-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  margin-bottom: 8px;
}

.selected-file-item i {
  color: #6c757d;
  margin-right: 8px;
}

.selected-file-item span {
  flex-grow: 1;
  font-size: 0.9em;
}

/* Image preview styling */
.image-preview {
  text-align: center;
}

.image-preview img {
  border: 1px solid #dee2e6;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Improved form layout */
.section-title {
  color: #495057;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e9ecef;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: #007bff;
}

/* Better spacing between sections */
.row.mt-4 {
  margin-top: 2rem !important;
}

/* Improved form groups */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}

/* Better radio and checkbox styling */
.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 0.5rem;
}

.radio-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.radio-inline:hover {
  background-color: #f8f9fa;
}

.radio-inline input[type="radio"] {
  margin: 0;
}

.checkbox-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.checkbox-inline:hover {
  background-color: #f8f9fa;
}

.checkbox-inline input[type="checkbox"] {
  margin: 0;
}



.form-text {
  font-size: 0.875rem;
  color: #6c757d;
  margin-top: 5px;
}

.required {
  color: #dc3545;
  font-weight: bold;
}

/* Question mark icon styling */
.fa-question-circle {
  cursor: help;
  opacity: 0.7;
}

.fa-question-circle:hover {
  opacity: 1;
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
  
  .file-upload-area {
    padding: 20px;
    min-height: 100px;
  }
  
  .file-upload-content i {
    font-size: 2em;
  }
}

/* Account Option Styling (from account routing page) */
.account-option {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 0;
}

.account-name {
  font-weight: 600;
  color: #2c3e50;
}

.account-code {
  font-size: 0.8rem;
  color: #7f8c8d;
  font-family: monospace;
}

.account-type {
  font-size: 0.8rem;
  color: #3498db;
  text-transform: uppercase;
  font-weight: 500;
}

.selected-account-name {
  font-weight: 600;
  color: #2c3e50;
}

/* Create Account Button Styling */
.create-account-btn {
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 2px solid #007bff;
  background-color: transparent;
  color: #007bff;
}

.create-account-btn:hover {
  background-color: #007bff;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.3);
}

.create-account-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0, 123, 255, 0.3);
}

.create-account-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}

.create-account-btn:disabled:hover {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
  transform: none;
  box-shadow: none;
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
