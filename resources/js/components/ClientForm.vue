<template>
  <form role="form" @keydown="form.onKeydown($event)">
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
              <label for="phoneNumber">
                {{ $t("Mobile") }} <span class="required">*</span>
              </label>
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
      form: new Form({
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
        
        ...this.initialData
      }),
      
      // Chart of Account related data
      chartOfAccounts: [],
      routingSetting: null,
      loadingChartOfAccounts: false,
      isCreatingAccount: false,
      chartOfAccountsError: null,
      pendingAccountData: null, // For new clients, store account data temporarily
    };
  },
  computed: {
    // Check if this is a new client
    isNewClient() {
      return !this.initialData || Object.keys(this.initialData).length === 0 || 
             (this.initialData.slug && this.initialData.slug === 'new');
    }
  },
  mounted() {
    // Load representatives if editing existing client
    this.loadRepresentatives();
    
    // Load chart of accounts and routing settings
    this.loadChartOfAccounts();
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
          
          // Load representatives if this is an existing client
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
    this.loadNextCodeNumber();
  },
  methods: {
    // Load the next available code number for new clients
    async loadNextCodeNumber() {
      try {
        // Only load next code number if this is a new client (no initial data)
        if (!this.initialData || Object.keys(this.initialData).length === 0) {
          const response = await axios.get('/api/clients/next-code');
          
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
    validateForm() {
      // Check if mobile number is provided
      if (!this.form.phoneNumber) {
        toast.fire({
          type: "error",
          title: this.$t("Mobile number is required"),
        });
        return false;
      }

      // Check if name is provided based on type
      if (this.form.type === 'Company' && !this.form.businessName) {
        toast.fire({
          type: "error",
          title: this.$t("Business name is required for company clients"),
        });
        return false;
      }

      if (this.form.type === 'Individual' && !this.form.fullName) {
        toast.fire({
          type: "error",
          title: this.$t("Full name is required for individual clients"),
        });
        return false;
      }

      // Validate chart of account based on routing type
      if (this.routingSetting && this.routingSetting.routing_type !== 'automatic') {
        if (!this.form.chartOfAccountId) {
          const message = this.routingSetting.routing_type === 'per_each' 
            ? this.$t("Please select a chart of account for this client")
            : this.$t("Please select a chart of account under the main client account");
          
          toast.fire({
            type: "error",
            title: message,
          });
          return false;
        }
      }

      return true;
    },

    // Load representatives for existing client
    async loadRepresentatives() {
      // Try to get slug from route params first, then from initialData
      const slug = this.$route.params.slug || (this.initialData && this.initialData.slug);
      
      if (slug && slug !== 'new') {
        try {
          const response = await this.$http.get(`/api/clients/${slug}/representatives`);
          if (response.data.success) {
            this.form.representatives = response.data.data;
          }
        } catch (error) {
          console.error('Error loading representatives:', error);
        }
      }
    },

    // Handle when representatives are changed (added, edited, deleted)
    handleRepresentativesChanged(representatives) {
      this.form.representatives = representatives;
    },

    // Load chart of accounts and routing settings
    async loadChartOfAccounts() {
      this.loadingChartOfAccounts = true;
      this.chartOfAccountsError = null;
      
      try {
        // Load routing settings first
        await this.loadRoutingSettings();
        
        // Load chart of accounts based on routing type
        if (this.routingSetting && this.routingSetting.routing_type !== 'automatic') {
          await this.loadAccountsForRouting();
        }
      } catch (error) {
        console.error('Error loading chart of accounts:', error);
        this.chartOfAccountsError = this.$t('Failed to load chart of accounts. Please try again.');
      } finally {
        this.loadingChartOfAccounts = false;
      }
    },

    // Load routing settings for client account
    async loadRoutingSettings() {
      try {
        const response = await this.$http.get('/api/account-routing-settings/clients_account/accounts');
        
        if (response.data.success) {
          this.routingSetting = response.data.data.setting;
          
          // Add display name for routing type
          this.routingSetting.routing_type_display = this.getRoutingTypeDisplayName(this.routingSetting.routing_type);
        } else {
          throw new Error(response.data.message || 'Failed to load routing settings');
        }
      } catch (error) {
        console.error('Error loading routing settings:', error);
        // Set default routing setting
        this.routingSetting = {
          routing_type: 'automatic',
          routing_type_display: 'Automatic Account Routing',
          description: 'System automatically routes to the selected parent account'
        };
      }
    },

    // Load accounts for routing
    async loadAccountsForRouting() {
      try {
        let response;
        
        if (this.routingSetting.routing_type === 'per_each') {
          // For per_each, get all available accounts
          response = await this.$http.get('/api/chart-of-accounts/all');
          const accounts = response.data.data || [];
          this.chartOfAccounts = accounts.map(account => ({
            ...account,
            type: account.type?.name || account.type || 'Asset',
            display_name: `${account.code} - ${account.name} (${account.type?.name || account.type || 'Asset'})`
          }));
        } else if (this.routingSetting.routing_type === 'main_account_per_each') {
          // For main_account_per_each, get accounts under the main account
          response = await this.$http.get('/api/account-routing-settings/clients_account/accounts');
          if (response.data.success) {
            const accounts = response.data.data.accounts || [];
            this.chartOfAccounts = accounts.map(account => ({
              ...account,
              type: account.type?.name || account.type || 'Asset',
              display_name: `${account.code} - ${account.name} (${account.type?.name || account.type || 'Asset'})`
            }));
          }
        }
      } catch (error) {
        console.error('Error loading accounts for routing:', error);
        this.chartOfAccountsError = this.$t('Failed to load accounts. Please try again.');
      }
    },

    // Get routing type display name
    getRoutingTypeDisplayName(routingType) {
      const displayNames = {
        'automatic': 'Automatic Account Routing',
        'per_each': 'Specify Per Each',
        'main_account_per_each': 'Specify Main Account Per Each',
        'cancel': 'Cancel Account Routing'
      };
      return displayNames[routingType] || routingType;
    },

         // Create new chart of account for client
     async createNewAccount() {
       if (this.isCreatingAccount) return;
       
       this.isCreatingAccount = true;
       
       try {
                             // Check if this is a new client or existing client
          const isNewClient = this.isNewClient;
          
          if (isNewClient) {
            // For new clients, create a temporary account that will be properly linked when saved
            const tempAccount = {
              id: `temp_${Date.now()}`, // Temporary ID
              name: this.getClientDisplayName(),
              code: await this.generateAccountCode(),
              type: 'Asset',
              display_name: `${await this.generateAccountCode()} - ${this.getClientDisplayName()} (Asset)`,
              isTemporary: true
            };
            
            // Add the temporary account to the list
            this.chartOfAccounts.push(tempAccount);
            
            // Set the temporary account as selected
            this.form.chartOfAccountId = tempAccount.id;
            
            // Store the account data for later creation when client is saved
            this.pendingAccountData = {
              name: tempAccount.name,
              routing_type: this.routingSetting.routing_type,
              isTemporary: true
            };
            
            // Show success message
            if (window.toast && typeof window.toast.fire === 'function') {
              window.toast.fire({
                type: 'success',
                title: this.$t('Temporary account created. It will be properly created when you save the client.')
              });
            }
            
            return;
          }
          
          // For existing clients, get the slug and create real account
          const clientSlug = this.$route?.params?.slug || this.initialData?.slug;

         const accountData = {
           name: this.getClientDisplayName(),
           routing_type: this.routingSetting.routing_type
         };

         const response = await this.$http.post(`/api/clients/${clientSlug}/create-chart-of-account`, accountData);
         
         if (response.data.success) {
           const newAccount = response.data.data.account;
           
           // Add the new account to the list
           this.chartOfAccounts.push({
             id: newAccount.id,
             name: newAccount.name,
             code: newAccount.code,
             type: newAccount.type?.name || newAccount.type || 'Asset',
             display_name: `${newAccount.code} - ${newAccount.name} (${newAccount.type?.name || newAccount.type || 'Asset'})`
           });
           
           // Set the new account as selected
           this.form.chartOfAccountId = newAccount.id;
           
           // Show success message
           if (window.toast && typeof window.toast.fire === 'function') {
             window.toast.fire({
               type: 'success',
               title: this.$t('New account created successfully')
             });
           }
         }
       } catch (error) {
         console.error('Error creating new account:', error);
         const errorMessage = error.response?.data?.message || error.message || this.$t('Failed to create new account');
         
         if (window.toast && typeof window.toast.fire === 'function') {
           window.toast.fire({
             type: 'error',
             title: errorMessage
           });
         } else {
           alert(errorMessage);
         }
       } finally {
         this.isCreatingAccount = false;
       }
     },

    // Get client display name for account creation
    getClientDisplayName() {
      if (this.form.type === 'Individual') {
        return this.form.fullName || this.form.name || 'Individual Client';
      } else {
        return this.form.businessName || this.form.companyName || 'Business Client';
      }
    },

    // Generate unique account code
    async generateAccountCode() {
      try {
        // Get the next available code from the routing setting
        if (this.routingSetting && this.routingSetting.main_account_id) {
          const mainAccount = this.chartOfAccounts.find(acc => acc.id === this.routingSetting.main_account_id);
          if (mainAccount) {
            // Generate code based on main account code
            const baseCode = mainAccount.code;
            const existingCodes = this.chartOfAccounts
              .filter(acc => acc.code.startsWith(baseCode))
              .map(acc => acc.code);
            
            let counter = 1;
            let newCode = `${baseCode}-${counter.toString().padStart(3, '0')}`;
            
            while (existingCodes.includes(newCode)) {
              counter++;
              newCode = `${baseCode}-${counter.toString().padStart(3, '0')}`;
            }
            
            return newCode;
          }
        }
        
        // Fallback: generate based on client type
        const prefix = this.form.type === 'Individual' ? 'IND' : 'BUS';
        const timestamp = Date.now().toString().slice(-6);
        return `${prefix}-${timestamp}`;
      } catch (error) {
        console.error('Error generating account code:', error);
        // Fallback code
        const timestamp = Date.now().toString().slice(-6);
        return `CLI-${timestamp}`;
      }
    },

    // Get Asset account type ID
    async getAssetAccountTypeId() {
      try {
        const response = await this.$http.get('/api/chart-of-account-types');
        const assetType = response.data.data.find(type => type.name === 'Asset');
        return assetType ? assetType.id : 1; // Default to first type if Asset not found
      } catch (error) {
        console.error('Error getting Asset account type:', error);
        return 1; // Default fallback
      }
    },

    // Handle chart of account creation for new clients
    async handleChartOfAccountForNewClient() {
      // Only proceed if this is a new client and routing type requires account selection
      if (!this.isNewClient || !this.routingSetting || this.routingSetting.routing_type === 'automatic') {
        return;
      }

      // If no chart of account is selected, create one automatically
      if (!this.form.chartOfAccountId) {
        try {
          // Create account data
          const accountData = {
            name: this.getClientDisplayName(),
            routing_type: this.routingSetting.routing_type
          };

          // For new clients, we'll create the account after the client is saved
          // Store the account data temporarily
          this.pendingAccountData = accountData;
        } catch (error) {
          console.error('Error preparing account data for new client:', error);
        }
      }
    },

         // Get pending account data (for new clients)
     getPendingAccountData() {
       // If we have a temporary account selected, return its data
       if (this.form.chartOfAccountId && typeof this.form.chartOfAccountId === 'string' && this.form.chartOfAccountId.startsWith('temp_')) {
         const tempAccount = this.chartOfAccounts.find(acc => acc.id === this.form.chartOfAccountId);
         if (tempAccount && tempAccount.isTemporary) {
           return {
             name: tempAccount.name,
             routing_type: this.routingSetting.routing_type,
             isTemporary: true
           };
         }
       }
       return this.pendingAccountData || null;
     },

    // Clear pending account data
    clearPendingAccountData() {
      this.pendingAccountData = null;
    },

  },
};
</script>

<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style src="vue-select/dist/vue-select.css"></style>
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
