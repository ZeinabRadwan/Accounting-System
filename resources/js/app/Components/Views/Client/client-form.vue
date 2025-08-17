<template>
  <div class="mb-primary col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">
          {{ isEditing ? $t('edit_client') : $t('create_client') }}
        </h4>
      </div>
      
      <div class="card-body">
        <form @submit.prevent="saveClient" ref="clientForm">
          
          <!-- Section 1: Basic Information -->
          <div class="form-section">
            <h5 class="section-title">Basic Information</h5>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('name') }} *</label>
                  <input 
                    v-model="clientForm.name" 
                    type="text" 
                    class="form-control" 
                    :class="{ 'is-invalid': errors.name }"
                    required
                  />
                  <div class="invalid-feedback" v-if="errors.name">
                    {{ errors.name }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('type') }} *</label>
                  <select v-model="clientForm.type" class="custom-select" required>
                    <option value="1">{{ $t('individual') }}</option>
                    <option value="2">{{ $t('company') }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('cr_number') }}</label>
                  <input 
                    v-model="clientForm.cr_number" 
                    type="text" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.cr_number }"
                  />
                  <div class="invalid-feedback" v-if="errors.cr_number">
                    {{ errors.cr_number }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('vat_number') }}</label>
                  <input 
                    v-model="clientForm.vat_number" 
                    type="text" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.vat_number }"
                  />
                  <div class="invalid-feedback" v-if="errors.vat_number">
                    {{ errors.vat_number }}
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>{{ $t('id_type') }}</label>
                  <select v-model="clientForm.id_type_id" class="custom-select">
                    <option value="">{{ $t('select_id_type') }}</option>
                    <option v-for="option in idTypeOptions" :key="option.id" :value="option.id" v-if="option && option.id">
                      {{ option.name || option.value }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>{{ $t('id_number') }}</label>
                  <input 
                    v-model="clientForm.id_no" 
                    type="text" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.id_no }"
                  />
                  <div class="invalid-feedback" v-if="errors.id_no">
                    {{ errors.id_no }}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>{{ $t('id_date') }}</label>
                  <input 
                    v-model="clientForm.id_date" 
                    type="date" 
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>{{ $t('date_of_birth') }}</label>
                  <input 
                    v-model="clientForm.dob" 
                    type="date" 
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>{{ $t('phone_number') }}</label>
                  <input 
                    v-model="clientForm.phone_no" 
                    type="tel" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.phone_no }"
                  />
                  <div class="invalid-feedback" v-if="errors.phone_no">
                    {{ errors.phone_no }}
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>{{ $t('nationality') }}</label>
                  <select v-model="clientForm.nationality_id" class="custom-select">
                    <option value="">{{ $t('select_nationality') }}</option>
                    <option v-for="option in nationalityOptions" :key="option.id" :value="option.id" v-if="option && option.id">
                      {{ option.name || option.value }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('job') }}</label>
                  <input 
                    v-model="clientForm.job" 
                    type="text" 
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('job_place') }}</label>
                  <input 
                    v-model="clientForm.job_place" 
                    type="text" 
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('bank') }}</label>
                  <select v-model="clientForm.bank_id" class="custom-select">
                    <option value="">{{ $t('select_bank') }}</option>
                    <option v-for="option in bankOptions" :key="option.id" :value="option.id" v-if="option && option.id">
                      {{ option.name || option.value }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('iban') }}</label>
                  <input 
                    v-model="clientForm.iban" 
                    type="text" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.iban }"
                  />
                  <div class="invalid-feedback" v-if="errors.iban">
                    {{ errors.iban }}
                  </div>
                </div>
              </div>
            </div>

            <div class="row" v-if="clientForm.type == 2">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('parent_company') }}</label>
                  <select v-model="clientForm.client_id" class="custom-select">
                    <option value="">{{ $t('select_parent_company') }}</option>
                    <option v-for="option in parentClientOptions" :key="option.id" :value="option.id" v-if="option && option.id">
                      {{ option.name || option.value }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('status') }}</label>
                  <select v-model="clientForm.is_active" class="custom-select">
                    <option :value="true">{{ $t('active') }}</option>
                    <option :value="false">{{ $t('inactive') }}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: Contact Information -->
          <div class="form-section">
            <h5 class="section-title">Contact Information</h5>
            
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('primary_email') }}</label>
                  <input 
                    v-model="clientForm.primary_email" 
                    type="email" 
                    class="form-control"
                    :class="{ 'is-invalid': errors.primary_email }"
                    @input="clearPrimaryEmailError"
                  />
                  <div class="invalid-feedback" v-if="errors.primary_email">
                    {{ errors.primary_email }}
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>{{ $t('primary_mobile') }}</label>
                  <tel-input
                    :data="{
                      id: 'primary_mobile',
                      required: false,
                      disabled: false,
                      placeholder: $t('enter_mobile_number'),
                      inputClass: 'form-control '
                    }"
                    v-model="clientForm.primary_mobile"
                    @input="handlePrimaryMobileInput"
                  />
                  <div class="invalid-feedback" v-if="errors.primary_mobile">
                    {{ errors.primary_mobile }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Emails -->
            <div class="form-group">
              <label class="form-label">
                {{ $t('additional_emails') }}
                <button 
                  type="button" 
                  class="btn btn-sm btn-primary ml-2" 
                  @click="addEmail"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </label>
              
              <div v-if="clientForm.additional_emails.length === 0" class="empty-state">
                <span class="text-muted">{{ $t('no_additional_emails') }}</span>
              </div>
              
              <div v-else>
                <div v-for="(email, index) in clientForm.additional_emails" :key="'email-' + index" class="item-row">
                  <div class="input-group">
                    <input 
                      v-model="email.email" 
                      type="email" 
                      class="form-control"
                      :class="{ 'is-invalid': errors[`additional_emails_${index}_email`] }"
                      :placeholder="$t('additional_email_placeholder')"
                      @input="clearEmailError(index)"
                    />
                    <div class="input-group-append">
                      <button 
                        type="button" 
                        class="btn btn-outline-danger" 
                        @click="removeEmail(index)"
                        :title="$t('remove_email')"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div v-if="errors[`additional_emails_${index}_email`]" class="invalid-feedback d-block">
                    {{ errors[`additional_emails_${index}_email`] }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Mobiles -->
            <div class="form-group">
              <label class="form-label">
                {{ $t('additional_mobiles') }}
                <button 
                  type="button" 
                  class="btn btn-sm btn-primary ml-2" 
                  @click="addMobile"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </label>
              
              <div v-if="clientForm.additional_mobiles.length === 0" class="empty-state">
                <span class="text-muted">{{ $t('no_additional_mobiles') }}</span>
              </div>
              
              <div v-else>
                <div v-for="(mobile, index) in clientForm.additional_mobiles" :key="'mobile-' + index" class="item-row">
                  <div class="input-group">
                    <tel-input
                      :data="{
                        id: `additional_mobile_${index}`,
                        required: false,
                        disabled: false,
                        placeholder: $t('enter_mobile_number'),
                        inputClass: 'form-control'
                      }"
                      v-model="mobile.mobile_number"
                      @input="handleAdditionalMobileInput(index, $event)"
                    />
                    <div class="input-group-append">
                      <button 
                        type="button" 
                        class="btn btn-outline-danger" 
                        @click="removeMobile(index)"
                        :title="$t('remove_mobile')"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <div v-if="errors[`additional_mobiles_${index}_mobile_number`]" class="invalid-feedback d-block">
                    {{ errors[`additional_mobiles_${index}_mobile_number`] }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Translations -->
          <div class="form-section">
            <h5 class="section-title">Translations</h5>
            <div class="row">
              <div class="col-md-4">
                <h6>{{ $t('available_languages') }}</h6>
                <div class="list-group">
                  <div 
                    v-for="locale in availableLocales" 
                    :key="locale.code"
                    class="list-group-item list-group-item-action"
                    :class="{ 'active': locale.code === otherLocale }"
                    @click="selectLocale(locale.code)"
                  >
                    {{ locale.name }}
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div v-if="otherLocale">
                  <h6>{{ $t('translation_for') }} {{ getLocaleName(otherLocale) }}</h6>
                  <div class="form-group">
                    <label>{{ $t('name') }}</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="clientTranslations[otherLocale].name"
                      :placeholder="$t('enter_name_in') + ' ' + getLocaleName(otherLocale)"
                    >
                  </div>
                  <div class="form-group">
                    <label>{{ $t('job') }}</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="clientTranslations[otherLocale].job"
                      :placeholder="$t('enter_job_in') + ' ' + getLocaleName(otherLocale)"
                    >
                  </div>
                  <div class="form-group">
                    <label>{{ $t('job_place') }}</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="clientTranslations[otherLocale].job_place"
                      :placeholder="$t('enter_job_place_in') + ' ' + getLocaleName(otherLocale)"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="form-actions">
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              <span v-if="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
              {{ isEditing ? $t('update_client') : $t('create_client') }}
            </button>
            <button type="button" class="btn btn-secondary ml-2" @click="goBack">{{ $t('cancel') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CoreLibrary from "../../../../core/helpers/CoreLibrary";
import TelInput from "../../../../core/components/input/TelInput.vue";

export default {
  name: "ClientForm",
  extends: CoreLibrary,
  components: {
    TelInput,
  },
  props: {
    clientId: {
      type: [Number, String],
      default: null
    }
  },
  data() {
    return {
      isSubmitting: false,
      isTranslationSubmitting: false,
      errors: {},
      translationErrors: {},
      selectedLocale: null,
      clientTranslations: {
        en: { name: '', job: '', job_place: '' },
        ar: { name: '', job: '', job_place: '' }
      },
      clientForm: {
        name: '',
        type: 1,
        cr_number: '',
        vat_number: '',
        id_type_id: '',
        id_no: '',
        id_date: '',
        phone_no: '',
        dob: '',
        nationality_id: '',
        job: '',
        job_place: '',
        client_id: '',
        bank_id: '',
        iban: '',
        is_active: true,
        // New email and mobile fields
        primary_email: '',
        primary_mobile: '', // This will now store the full international number
        additional_emails: [],
        additional_mobiles: []
      },
      translationForm: {
        name: '',
        job: '',
        job_place: ''
      },
      // Options for dropdowns
      idTypeOptions: [],
      nationalityOptions: [],
      bankOptions: [],
      parentClientOptions: [],
      availableLocales: [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' }
      ],
      selectedTranslationLocale: null
    };
  },
  computed: {
    isEditing() {
      return !!this.clientId;
    },
    currentLocale() {
      // Get current locale from localStorage or default to 'en'
      return window.localStorage.getItem('app-language') || 'en';
    },
    // Get the locale that is NOT currently selected
    otherLocale() {
      const currentLocale = this.getCurrentLocale();
      return currentLocale === 'en' ? 'ar' : 'en';
    }
  },
  created() {
    this.loadOptions();
    if (this.clientId) {
      this.loadClient();
      this.loadClientTranslations();
    }
  },
  methods: {
    // Add this helper method to get tenant-based URLs (same as in client-list.vue)
    getTenantUrl(path) {
      const currentPath = window.location.pathname;
      const tenantMatch = currentPath.match(/^\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
      
      if (tenantMatch) {
        const tenantId = tenantMatch[1];
        return `/${tenantId}${path}`;
      }
      return path; // Fallback
    },

    async loadOptions() {
      try {
        // Load all the dropdown options using tenant-based URLs
        const [idTypes, nationalities, banks, parentClients] = await Promise.all([
          this.axiosGet(this.getTenantUrl('/clients/filters/id-types')),
          this.axiosGet(this.getTenantUrl('/clients/filters/nationalities')),
          this.axiosGet(this.getTenantUrl('/clients/filters/banks')),
          this.axiosGet(this.getTenantUrl('/clients/filters/parent-clients'))
        ]);

        this.idTypeOptions = idTypes.data || [];
        this.nationalityOptions = nationalities.data || [];
        this.bankOptions = banks.data || [];
        this.parentClientOptions = parentClients.data || [];
      } catch (error) {
        console.error('Error loading options:', error);
      }
    },

    async loadClient() {
      try {
        const response = await this.axiosGet(this.getTenantUrl(`/clients/${this.clientId}`));
        
        // Check if response has data and handle both structures
        if (response.data && response.data.data) {
          // If response is wrapped in data property
          this.clientForm = { ...response.data.data };
        } else if (response.data) {
          // If response is direct
          this.clientForm = { ...response.data };
        } else {
          throw new Error('Invalid response structure');
        }

        // Load client emails and mobiles
        await this.loadClientEmailsAndMobiles();
        
      } catch (error) {
        console.error('Error loading client:', error);
        this.$toastr.e(this.$t('error_loading_client'));
      }
    },

    async loadClientTranslations() {
      try {
        const response = await this.axiosGet(this.getTenantUrl(`/clients/translations/${this.clientId}`));
        this.clientTranslations = response.data.translations || {};
        // Set a default selected locale if none is selected
        if (!this.selectedTranslationLocale && Object.keys(this.clientTranslations).length > 0) {
          this.selectTranslationLocale(Object.keys(this.clientTranslations)[0]);
        }
      } catch (error) {
        console.error('Error loading translations:', error);
        this.clientTranslations = {};
      }
    },

    selectLocale(locale) {
      this.selectedLocale = locale;
      this.translationErrors = {};
      this.translationForm = {
        name: this.clientTranslations[locale]?.name || '',
        job: this.clientTranslations[locale]?.job || '',
        job_place: this.clientTranslations[locale]?.job_place || ''
      };
    },

    selectTranslationLocale(locale) {
      this.selectedTranslationLocale = locale;
      this.translationErrors = {};
      this.translationForm = {
        name: this.clientTranslations[locale]?.name || '',
        job: this.clientTranslations[locale]?.job || '',
        job_place: this.clientTranslations[locale]?.job_place || ''
      };
    },

    // Remove this method - no longer needed
    // async saveTranslation() { ... },

    // Keep the deleteTranslation method for editing existing translations
    async deleteTranslation() {
      if (!this.selectedLocale || !this.clientId) return;
      
      if (confirm(this.$t('are_you_sure_delete_translation'))) {
        try {
          await this.axiosDelete(this.getTenantUrl(`/clients/translations/${this.clientId}`), {
            data: { locale: this.selectedLocale }
          });
          
          this.$toastr.s(this.$t('translation_deleted_successfully'));
          this.loadClientTranslations();
          this.selectedLocale = null;
          this.translationForm = { name: '', job: '', job_place: '' };
        } catch (error) {
          this.$toastr.e(this.$t('error_deleting_translation'));
        }
      }
    },

    hasTranslation(locale) {
      return this.clientTranslations && this.clientTranslations[locale];
    },

    getTranslationStatusClass(locale) {
      if (this.clientTranslations && this.clientTranslations[locale]) {
        return 'badge-success';
      }
      return 'badge-secondary';
    },

    getTranslationStatusText(locale) {
      if (this.clientTranslations && this.clientTranslations[locale]) {
        return this.$t('translated');
      }
      return this.$t('not_translated');
    },

    getLocaleName(localeCode) {
      const locale = this.availableLocales.find(l => l.code === localeCode);
      return locale ? locale.name : localeCode;
    },

    async saveClient() {
      if (!this.validateClientForm()) {
        return;
      }

      this.isSubmitting = true;
      
      try {
        // Prepare the complete data including translation
        const requestData = { ...this.clientForm };
        
        // Add translation data if available
        if (this.clientTranslations && this.clientTranslations[this.otherLocale]) {
          const translation = this.clientTranslations[this.otherLocale];
          
          if (translation.name || translation.job || translation.job_place) {
            requestData.translation_name = translation.name || '';
            requestData.translation_job = translation.job || '';
            requestData.translation_job_place = translation.job_place || '';
            requestData.translation_locale = this.otherLocale;
          }
        }
        
        // Prepare emails and mobiles data
        const emailsData = [];
        const mobilesData = [];
        
        // Add primary email if provided
        if (requestData.primary_email) {
          emailsData.push({
            email: requestData.primary_email,
            is_primary: true,
            is_verified: false,
            notes: 'Primary email'
          });
        }
        
        // Add additional emails
        if (requestData.additional_emails && requestData.additional_emails.length > 0) {
          requestData.additional_emails.forEach(email => {
            if (email.email && email.email.trim()) {
              emailsData.push({
                email: email.email.trim(),
                is_primary: false,
                is_verified: false,
                notes: 'Additional email'
              });
            }
          });
        }
        
        // Add primary mobile if provided
        if (requestData.primary_mobile) {
          // Extract country code and number from the full international number
          const phoneData = this.parsePhoneNumber(requestData.primary_mobile);
          mobilesData.push({
            mobile_number: phoneData.number,
            country_code: phoneData.countryCode,
            is_primary: true,
            is_verified: false,
            notes: 'Primary mobile'
          });
        }
        
        // Add additional mobiles
        if (requestData.additional_mobiles && requestData.additional_mobiles.length > 0) {
          requestData.additional_mobiles.forEach(mobile => {
            if (mobile.mobile_number && mobile.mobile_number.trim()) {
              // Extract country code and number from the full international number
              const phoneData = this.parsePhoneNumber(mobile.mobile_number);
              mobilesData.push({
                mobile_number: phoneData.number,
                country_code: phoneData.countryCode,
                is_primary: false,
                is_verified: false,
                notes: 'Additional mobile'
              });
            }
          });
        }
        
        // Add emails and mobiles to request data
        if (emailsData.length > 0) {
          requestData.emails = emailsData;
        }
        if (mobilesData.length > 0) {
          requestData.mobiles = mobilesData;
        }
        
        let finalRequestData;
        // Remove avatar handling since we're not using it anymore
        finalRequestData = requestData;
        
        let response;
        if (this.isEditing) {
          // Update existing client
          response = await this.axiosPut({
            url: this.getTenantUrl(`/clients/${this.clientId}`),
            data: finalRequestData
          });
          this.$toastr.s(this.$t('client_updated_successfully'));
        } else {
          // Create new client
          response = await this.axiosPost({
            url: this.getTenantUrl('/clients'),
            data: finalRequestData
          });
          this.$toastr.s(this.$t('client_created_successfully'));
        }
        
        // Redirect to client list
        setTimeout(() => {
          window.location.href = this.getTenantUrl('/clients');
        }, 1000);
        
      } catch (error) {
        console.error('Save client error:', error);
        this.$toastr.e(this.$t('error_saving_client'));
      } finally {
        this.isSubmitting = false;
      }
    },

    validateClientForm() {
      this.errors = {};
      console.log('Validating form:', this.clientForm);
      
      if (!this.clientForm.name || this.clientForm.name.trim().length < 2) {
        this.errors.name = this.$t('name_required_min_2_chars');
      }
      
      if (this.clientForm.cr_number && this.clientForm.cr_number.trim().length < 3) {
        this.errors.cr_number = this.$t('cr_number_min_3_chars');
      }
      
      if (this.clientForm.vat_number && this.clientForm.vat_number.trim().length < 3) {
        this.errors.vat_number = this.$t('vat_number_min_3_chars');
      }

      if (this.clientForm.id_no && this.clientForm.id_no.trim().length < 3) {
        this.errors.id_no = this.$t('id_number_min_3_chars');
      }

      if (this.clientForm.iban && this.clientForm.iban.trim().length < 10) {
        this.errors.iban = this.$t('iban_min_10_chars');
      }

      // Convert numeric fields to proper types
      if (this.clientForm.type) {
        this.clientForm.type = parseInt(this.clientForm.type);
      }
      if (this.clientForm.id_type_id) {
        this.clientForm.id_type_id = parseInt(this.clientForm.id_type_id);
      }
      if (this.clientForm.nationality_id) {
        this.clientForm.nationality_id = parseInt(this.clientForm.nationality_id);
      }
      if (this.clientForm.bank_id) {
        this.clientForm.bank_id = parseInt(this.clientForm.bank_id);
      }
      if (this.clientForm.client_id) {
        this.clientForm.client_id = parseInt(this.clientForm.client_id);
      }
      
      console.log('Validation result:', this.errors);
      console.log('Form after validation:', this.clientForm);
      
      return Object.keys(this.errors).length === 0;
    },

    // Helper methods for emails and mobiles
    addEmail() {
      this.clientForm.additional_emails.push({
        email: '',
        is_primary: false
      });
    },

    removeEmail(index) {
      this.clientForm.additional_emails.splice(index, 1);
    },

    addMobile() {
      this.clientForm.additional_mobiles.push({
        mobile_number: '', // This will store the full international number from TelInput
        is_primary: false
      });
    },

    removeMobile(index) {
      this.clientForm.additional_mobiles.splice(index, 1);
    },

    // Clear validation errors when user types
    clearEmailError(index) {
      delete this.errors[`additional_emails_${index}_email`];
    },

    clearMobileError(index) {
      delete this.errors[`additional_mobiles_${index}_mobile_number`];
    },

    clearPrimaryEmailError() {
      delete this.errors.primary_email;
    },

    clearPrimaryMobileError() {
      delete this.errors.primary_mobile;
    },

    async loadClientEmailsAndMobiles() {
      try {
        // Load emails
        const emailsResponse = await this.axiosGet(this.getTenantUrl(`/clients/${this.clientId}/emails`));
        const emails = emailsResponse.data.emails || [];
        
        // Load mobiles
        const mobilesResponse = await this.axiosGet(this.getTenantUrl(`/clients/${this.clientId}/mobiles`));
        const mobiles = mobilesResponse.data.mobiles || [];
        
        // Set primary email and mobile
        const primaryEmail = emails.find(email => email.is_primary);
        const primaryMobile = mobiles.find(mobile => mobile.is_primary);
        
        if (primaryEmail) {
          this.clientForm.primary_email = primaryEmail.email;
        }
        
        if (primaryMobile) {
          this.clientForm.primary_mobile = primaryMobile.mobile_number;
          // The TelInput component provides the full international number,
          // so we don't need to set mobile_country_code here.
        }
        
        // Set additional emails and mobiles
        this.clientForm.additional_emails = emails
          .filter(email => !email.is_primary)
          .map(email => ({
            email: email.email,
            is_primary: false
          }));
        
        this.clientForm.additional_mobiles = mobiles
          .filter(mobile => !mobile.is_primary)
          .map(mobile => ({
            mobile_number: `${mobile.country_code} ${mobile.mobile_number}`, // Combine for TelInput
            is_primary: false
          }));
        
      } catch (error) {
        console.error('Error loading client emails and mobiles:', error);
        // Initialize empty arrays if loading fails
        this.clientForm.additional_emails = [];
        this.clientForm.additional_mobiles = [];
      }
    },

    goBack() {
      // Get current tenant ID from URL
      const currentPath = window.location.pathname;
      const tenantMatch = currentPath.match(/^\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
      
      if (tenantMatch) {
        const tenantId = tenantMatch[1];
        // Go back to client list with tenant prefix
        window.location.href = `/${tenantId}/clients`;
      } else {
        // Fallback to /clients
        window.location.href = '/clients';
      }
    },

    // Helper method to get current locale
    getCurrentLocale() {
      // Get locale from URL or default to 'en'
      const path = window.location.pathname;
      if (path.includes('/ar/')) return 'ar';
      if (path.includes('/en/')) return 'en';
      return 'en'; // Default
    },

    handlePrimaryMobileInput(value) {
      // The TelInput component provides the full international number
      this.clientForm.primary_mobile = value;
      this.clearPrimaryMobileError();
    },

    handleAdditionalMobileInput(index, value) {
      // Update the mobile number with the full international number from TelInput
      this.clientForm.additional_mobiles[index].mobile_number = value;
      this.clearMobileError(index);
    },

    parsePhoneNumber(fullNumber) {
      // Simple parsing - you might want to use a library like libphonenumber-js
      if (fullNumber.startsWith('+')) {
        // Extract country code (first 1-4 digits after +)
        const countryCodeMatch = fullNumber.match(/^\+(\d{1,4})/);
        if (countryCodeMatch) {
          const countryCode = '+' + countryCodeMatch[1];
          const number = fullNumber.substring(countryCode.length);
          return { countryCode, number };
        }
      }
      // Fallback
      return { countryCode: '+966', number: fullNumber };
    }
  }
};
</script>

<style scoped>
.form-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: #fff;
}

.section-title {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e9ecef;
  color: #333;
  font-weight: 600;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.list-group-item {
  cursor: pointer;
  border: 1px solid #e9ecef;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

.list-group-item.active {
  background-color: #007bff;
  border-color: #007bff;
}

.form-actions {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #e9ecef;
  margin-top: 20px;
}

.btn {
  padding: 8px 20px;
  border-radius: 4px;
}

.invalid-feedback {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 5px;
}

/* Clean additional items styling */
.form-label {
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.form-label .btn {
  padding: 4px 8px;
  font-size: 12px;
}

.empty-state {
  padding: 15px;
  text-align: center;
  background: #f8f9fa;
  border: 1px dashed #dee2e6;
  border-radius: 4px;
  color: #6c757d;
}

.item-row {
  margin-bottom: 15px;
}

.item-row:last-child {
  margin-bottom: 0;
}

.country-select {
  max-width: 100px;
}

.input-group .btn-outline-danger {
  border-color: #dc3545;
  color: #dc3545;
}

.input-group .btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}
</style>
