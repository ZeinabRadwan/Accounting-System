<template>
  <div class="tenant-initialization">
    <!-- Language Switcher -->
    <div class="language-switcher-container">
      <LocaleDropdown />
    </div>

    <div class="auth-wrapper" v-if="!initialized">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-7">
            <!-- Header -->
            <div class="text-center mb-4">
              <router-link to="/">
                <img v-if="appInfo" :src="appInfo.blackLogo" :alt="appInfo.companyName"
                  class="lg-logo img-fluid mb-3" style="max-width: 200px;" />
              </router-link>
              <h3 class="text-primary mb-2">{{ $t('setup_wizard_title') }}</h3>
              <p class="text-muted">{{ $t('setup_wizard_subtitle') }}</p>
            </div>

            <!-- Progress Steps -->
            <div class="wizard-progress mb-4">
              <div class="progress-container">
                <div 
                  v-for="(step, index) in steps" 
                  :key="index"
                  class="progress-item"
                  :class="{ active: currentStep === (index + 1), completed: currentStep > (index + 1) }"
                >
                  <div class="step-indicator">
                    <span class="step-number" v-if="currentStep <= (index + 1)">{{ index + 1 }}</span>
                    <i v-if="currentStep > (index + 1)" class="fas fa-check step-check"></i>
                  </div>
                  <div class="step-title">{{ step.title }}</div>
                </div>
              </div>
            </div>

            <!-- Form Card -->
            <div class="card shadow-sm border-0">
              <div class="card-body p-4">
                <form @submit.prevent="nextStep">
                  <!-- Step 1: Country Selection -->
                  <div v-if="currentStep === 1" class="wizard-step">
                    <div class="form-group">
                      <label class="form-label">{{ $t('country') }} <span class="text-danger">*</span></label>
                      <v-select
                        v-model="form.country"
                        :options="countries"
                        label="name"
                        :reduce="option => option.code"
                        :getOptionLabel="option => option.name"
                        :placeholder="$t('select_country')"
                        :searchable="true"
                        :clearable="false"
                        class="country-select"
                        :class="{ 'is-invalid': errors.country }"
                        @input="onCountryChange"
                      >
                        <template #option="{ flag, name }">
                          <div class="country-option">
                            <span class="country-flag">{{ flag }}</span>
                            <span class="country-name">{{ name }}</span>
                          </div>
                        </template>
                        <template #selected-option="{ flag, name }">
                          <div class="country-selected">
                            <span class="country-flag">{{ flag }}</span>
                            <span class="country-name">{{ name }}</span>
                          </div>
                        </template>
                        <template #no-options>
                          <div class="text-center text-muted p-2">
                            {{ $t('No countries found') }}
                          </div>
                        </template>
                      </v-select>
                      <div v-if="errors.country" class="invalid-feedback d-block mt-2">{{ errors.country }}</div>
                    </div>
                  </div>

                  <!-- Step 2: Company Information -->
                  <div v-if="currentStep === 2" class="wizard-step">
                    <div class="form-group mb-4">
                      <label class="form-label">{{ $t('company_name') }} <span class="text-danger">*</span></label>
                      <input 
                        v-model="form.company_name" 
                        type="text" 
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                        :class="{ 'is-invalid': errors.company_name }"
                        :placeholder="$t('enter_company_name')"
                        required
                      />
                      <div v-if="errors.company_name" class="invalid-feedback d-block mt-2">{{ errors.company_name }}</div>
                    </div>

                    <div class="form-group mb-4">
                      <label class="form-label">{{ $t('company_logo') || 'شعار الشركة' }} <span class="text-muted">({{ $t('optional') }})</span></label>
                      <div class="logo-upload-container">
                        <div class="logo-preview mb-3" v-if="logoPreview">
                          <img :src="logoPreview" alt="Company Logo" class="logo-preview-image" />
                          <button type="button" class="btn btn-sm btn-danger mt-2" @click="removeLogo">
                            <i class="fas fa-times"></i> {{ $t('Remove') }}
                          </button>
                        </div>
                        <div class="file-upload-wrapper">
                          <input 
                            type="file" 
                            ref="logoInput"
                            @change="onLogoChange"
                            accept="image/jpeg,image/png,image/gif,image/svg+xml"
                            class="d-none"
                            id="company-logo-upload"
                          />
                          <label 
                            for="company-logo-upload" 
                            class="btn btn-outline-primary btn-lg rounded-pill px-4 cursor-pointer"
                          >
                            <i class="fas fa-upload mr-2"></i>
                            {{ logoPreview ? $t('Change Logo') : $t('Upload Logo') }}
                          </label>
                          <small class="d-block text-muted mt-2">{{ $t('Maximum file size: 2MB. Supported formats: JPG, PNG, GIF, SVG') }}</small>
                        </div>
                      </div>
                      <div v-if="errors.company_logo" class="invalid-feedback d-block mt-2">{{ errors.company_logo }}</div>
                    </div>

                    <div class="form-group mb-4">
                      <label class="form-label">
                        {{ $t('tax_number') }} 
                        <span class="text-muted">({{ $t('optional') }})</span>
                      </label>
                      <input 
                        v-model="form.tax_number" 
                        type="text" 
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                        :class="{ 'is-invalid': errors.tax_number || taxNumberInvalid }"
                        :placeholder="getTaxNumberPlaceholder()"
                        @input="validateTaxNumber"
                        @blur="validateTaxNumber"
                      />
                      <div v-if="errors.tax_number" class="invalid-feedback d-block mt-2">{{ errors.tax_number }}</div>
                      <div v-else-if="taxNumberInvalid && form.tax_number" class="invalid-feedback d-block mt-2">
                        {{ taxNumberErrorMessage }}
                      </div>
                      <small v-if="form.country && taxNumberFormat" class="form-text text-muted mt-1">
                        {{ $t('Format') }}: {{ taxNumberFormat }}
                      </small>
                    </div> 
                  </div>

                  <!-- Step 3: Contact Details -->
                  <div v-if="currentStep === 3" class="wizard-step">
                    <div class="form-group mb-4">
                      <label class="form-label">{{ $t('Main Eamil for the company') }} <span class="text-danger">*</span></label>
                      <input 
                        v-model="form.email_address" 
                        type="email" 
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                        :class="{ 'is-invalid': errors.email_address }"
                        :placeholder="$t('enter_email_address')"
                        required
                      />
                      <div v-if="errors.email_address" class="invalid-feedback d-block mt-2">{{ errors.email_address }}</div>
                    </div>

                    <div class="form-group mb-4">
                      <label class="form-label">{{ $t('phone_number') }} <span class="text-danger">*</span></label>
                      <input 
                        v-model="form.phone_number" 
                        type="text" 
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                        :class="{ 'is-invalid': errors.phone_number }"
                        :placeholder="$t('enter_phone_number')"
                        required
                      />
                      <div v-if="errors.phone_number" class="invalid-feedback d-block mt-2">{{ errors.phone_number }}</div>
                    </div>

                    <div class="form-group">
                      <label class="form-label">
                        {{ $t('address') }} 
                        <span class="text-muted">({{ $t('optional') }})</span>
                      </label>
                      <textarea 
                        v-model="form.address" 
                        class="form-control form-control-lg border-0 shadow-sm px-4 py-3 text-primary" 
                        rows="3"
                        :placeholder="$t('enter_address')"
                        style="border-radius: 15px; resize: none;"
                      ></textarea>
                    </div>
                  </div>

                  <!-- Step 4: Document & Currency Settings -->
                  <div v-if="currentStep === 4" class="wizard-step">
                    <div class="form-group mb-4">
                      <label class="form-label">{{ $t('default_currency') }} <span class="text-danger">*</span></label>
                      <select 
                        v-model="form.default_currency" 
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                        :class="{ 'is-invalid': errors.default_currency }" 
                        required
                      >
                        <option value="">{{ $t('select_currency') }}</option>
                        <option v-for="currency in currencies" :key="currency.id" :value="currency.id">
                          {{ currency.code }} - {{ currency.name }}  
                        </option>
                      </select>
                      <div v-if="errors.default_currency" class="invalid-feedback d-block mt-2">{{ errors.default_currency }}</div>
                    </div>

                    <h6 class="mb-3 mt-4">{{ $t('document_prefixes') }}</h6>
                    <p class="text-muted small mb-4">{{ $t('document_prefixes_description') }}</p>

                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label">{{ $t('invoice_prefix') }} <span class="text-danger">*</span></label>
                        <input 
                          v-model="form.invoice_prefix" 
                          type="text" 
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                          :class="{ 'is-invalid': errors.invoice_prefix }"
                          placeholder="INV-"
                          required
                        />
                        <div v-if="errors.invoice_prefix" class="invalid-feedback d-block mt-2">{{ errors.invoice_prefix }}</div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label">{{ $t('purchase_prefix') }} <span class="text-danger">*</span></label>
                        <input 
                          v-model="form.purchase_prefix" 
                          type="text" 
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                          :class="{ 'is-invalid': errors.purchase_prefix }"
                          placeholder="PUR-"
                          required
                        />
                        <div v-if="errors.purchase_prefix" class="invalid-feedback d-block mt-2">{{ errors.purchase_prefix }}</div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label">{{ $t('quotation_prefix') }} <span class="text-danger">*</span></label>
                        <input 
                          v-model="form.quotation_prefix" 
                          type="text" 
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                          :class="{ 'is-invalid': errors.quotation_prefix }"
                          placeholder="QUO-"
                          required
                        />
                        <div v-if="errors.quotation_prefix" class="invalid-feedback d-block mt-2">{{ errors.quotation_prefix }}</div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label">{{ $t('invoice_return_prefix') }} <span class="text-danger">*</span></label>
                        <input 
                          v-model="form.invoice_return_prefix" 
                          type="text" 
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                          :class="{ 'is-invalid': errors.invoice_return_prefix }"
                          placeholder="INVR-"
                          required
                        />
                        <div v-if="errors.invoice_return_prefix" class="invalid-feedback d-block mt-2">{{ errors.invoice_return_prefix }}</div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label">{{ $t('purchase_return_prefix') }} <span class="text-danger">*</span></label>
                        <input 
                          v-model="form.purchase_return_prefix" 
                          type="text" 
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" 
                          :class="{ 'is-invalid': errors.purchase_return_prefix }"
                          placeholder="PURR-"
                          required
                        />
                        <div v-if="errors.purchase_return_prefix" class="invalid-feedback d-block mt-2">{{ errors.purchase_return_prefix }}</div>
                      </div>
                    </div>
                  </div>

                  <!-- Step 5: System Type Selection -->
                  <div v-if="currentStep === 5" class="wizard-step">
                    <div class="system-type-selection">
                      <h5 class="mb-3">{{ $t('what_system_type') }}</h5>
                      <p class="text-muted mb-4">{{ $t('select_system_type_description') }}</p>
                      
                      <div class="row g-3">
                        <div class="col-md-4 mb-3">
                          <div 
                            class="system-type-card" 
                            :class="{ active: form.system_type === 'accounting' }"
                            @click="form.system_type = 'accounting'"
                          >
                            <div class="card-icon">
                              <i class="fas fa-calculator"></i>
                            </div>
                            <h6 class="mt-3 mb-2">{{ $t('accounting_system') }}</h6>
                            <p class="text-muted small">{{ $t('accounting_system_description') }}</p>
                          </div>
                        </div>

                        <div class="col-md-4 mb-3">
                          <div 
                            class="system-type-card" 
                            :class="{ active: form.system_type === 'pos' }"
                            @click="form.system_type = 'pos'"
                          >
                            <div class="card-icon">
                              <i class="fas fa-cash-register"></i>
                            </div>
                            <h6 class="mt-3 mb-2">{{ $t('point_of_sale') }}</h6>
                            <p class="text-muted small">{{ $t('pos_system_description') }}</p>
                          </div>
                        </div>

                        <div class="col-md-4 mb-3">
                          <div 
                            class="system-type-card" 
                            :class="{ active: form.system_type === 'both' }"
                            @click="form.system_type = 'both'"
                          >
                            <div class="card-icon">
                              <i class="fas fa-store"></i>
                            </div>
                            <h6 class="mt-3 mb-2">{{ $t('both_systems') }}</h6>
                            <p class="text-muted small">{{ $t('both_systems_description') }}</p>
                          </div>
                        </div>
                      </div>

                      <input type="hidden" v-model="form.system_type" required />
                      <div v-if="errors.system_type" class="invalid-feedback d-block text-center mt-3">{{ errors.system_type }}</div>
                    </div>
                  </div>
                </form>
              </div>

              <!-- Footer Actions -->
              <div class="card-footer bg-white border-0 px-4 py-3">
                <div class="d-flex justify-content-between">
                  <button 
                    type="button" 
                    class="btn btn-outline-secondary btn-lg rounded-pill px-4" 
                    @click="previousStep"
                    :disabled="currentStep === 1 || loading"
                    v-if="currentStep > 1"
                  >
                    <i class="fas fa-arrow-right mr-2"></i>
                    {{ $t('previous') }}
                  </button>
                  <div v-else></div>
                  
                  <button 
                    type="button" 
                    class="btn btn-primary btn-lg rounded-pill px-4 shadow-sm" 
                    @click="currentStep === totalSteps ? submitForm() : nextStep()"
                    :disabled="loading"
                  >
                    <span v-if="loading" class="spinner-border spinner-border-sm mr-2"></span>
                    <template v-else>
                      <i class="fas mr-2" :class="currentStep === totalSteps ? 'fa-check' : 'fa-arrow-left'"></i>
                      {{ currentStep === totalSteps ? $t('complete_setup') : $t('next') }}
                    </template>
                  </button>
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
import Form from 'vform'
import axios from 'axios'
import LocaleDropdown from '../components/LocaleDropdown.vue'

export default {
  name: 'TenantInitialization',
  layout: 'basic',
  middleware: ['auth'],
  
  components: {
    LocaleDropdown
  },

  data() {
    return {
      currentStep: 1,
      totalSteps: 5,
      loading: false,
      initialized: false,
      appInfo: null,
      currencies: [],
      statusChecked: false,
      logoPreview: null,
      countriesData: [
        { code: 'SA', nameKey: 'Saudi Arabia', flag: '🇸🇦' },
        { code: 'AE', nameKey: 'United Arab Emirates', flag: '🇦🇪' },
        { code: 'EG', nameKey: 'Egypt', flag: '🇪🇬' },
        { code: 'JO', nameKey: 'Jordan', flag: '🇯🇴' },
        { code: 'LB', nameKey: 'Lebanon', flag: '🇱🇧' },
        { code: 'MA', nameKey: 'Morocco', flag: '🇲🇦' },
        { code: 'TN', nameKey: 'Tunisia', flag: '🇹🇳' },
        { code: 'DZ', nameKey: 'Algeria', flag: '🇩🇿' },
        { code: 'KW', nameKey: 'Kuwait', flag: '🇰🇼' },
        { code: 'QA', nameKey: 'Qatar', flag: '🇶🇦' },
        { code: 'BH', nameKey: 'Bahrain', flag: '🇧🇭' },
        { code: 'OM', nameKey: 'Oman', flag: '🇴🇲' },
        { code: 'YE', nameKey: 'Yemen', flag: '🇾🇪' },
        { code: 'IQ', nameKey: 'Iraq', flag: '🇮🇶' },
        { code: 'US', nameKey: 'United States', flag: '🇺🇸' },
        { code: 'GB', nameKey: 'United Kingdom', flag: '🇬🇧' },
        { code: 'CA', nameKey: 'Canada', flag: '🇨🇦' },
        { code: 'AU', nameKey: 'Australia', flag: '🇦🇺' },
        { code: 'DE', nameKey: 'Germany', flag: '🇩🇪' },
        { code: 'FR', nameKey: 'France', flag: '🇫🇷' },
        { code: 'ES', nameKey: 'Spain', flag: '🇪🇸' },
        { code: 'IT', nameKey: 'Italy', flag: '🇮🇹' },
        { code: 'NL', nameKey: 'Netherlands', flag: '🇳🇱' },
        { code: 'BE', nameKey: 'Belgium', flag: '🇧🇪' },
        { code: 'CH', nameKey: 'Switzerland', flag: '🇨🇭' },
        { code: 'AT', nameKey: 'Austria', flag: '🇦🇹' },
        { code: 'SE', nameKey: 'Sweden', flag: '🇸🇪' },
        { code: 'NO', nameKey: 'Norway', flag: '🇳🇴' },
        { code: 'DK', nameKey: 'Denmark', flag: '🇩🇰' },
        { code: 'FI', nameKey: 'Finland', flag: '🇫🇮' },
        { code: 'PL', nameKey: 'Poland', flag: '🇵🇱' },
        { code: 'IE', nameKey: 'Ireland', flag: '🇮🇪' },
        { code: 'PT', nameKey: 'Portugal', flag: '🇵🇹' },
        { code: 'GR', nameKey: 'Greece', flag: '🇬🇷' },
        { code: 'LU', nameKey: 'Luxembourg', flag: '🇱🇺' },
        { code: 'TR', nameKey: 'Turkey', flag: '🇹🇷' },
        { code: 'IN', nameKey: 'India', flag: '🇮🇳' },
        { code: 'CN', nameKey: 'China', flag: '🇨🇳' },
        { code: 'JP', nameKey: 'Japan', flag: '🇯🇵' },
        { code: 'KR', nameKey: 'South Korea', flag: '🇰🇷' },
        { code: 'BR', nameKey: 'Brazil', flag: '🇧🇷' },
        { code: 'MX', nameKey: 'Mexico', flag: '🇲🇽' },
        { code: 'AR', nameKey: 'Argentina', flag: '🇦🇷' },
        { code: 'ZA', nameKey: 'South Africa', flag: '🇿🇦' },
        { code: 'NG', nameKey: 'Nigeria', flag: '🇳🇬' },
        { code: 'KE', nameKey: 'Kenya', flag: '🇰🇪' },
        { code: 'PK', nameKey: 'Pakistan', flag: '🇵🇰' },
        { code: 'BD', nameKey: 'Bangladesh', flag: '🇧🇩' },
        { code: 'ID', nameKey: 'Indonesia', flag: '🇮🇩' },
        { code: 'PH', nameKey: 'Philippines', flag: '🇵🇭' },
        { code: 'VN', nameKey: 'Vietnam', flag: '🇻🇳' },
        { code: 'TH', nameKey: 'Thailand', flag: '🇹🇭' },
        { code: 'MY', nameKey: 'Malaysia', flag: '🇲🇾' },
        { code: 'SG', nameKey: 'Singapore', flag: '🇸🇬' },
        { code: 'NZ', nameKey: 'New Zealand', flag: '🇳🇿' },
        { code: 'RU', nameKey: 'Russia', flag: '🇷🇺' },
        { code: 'UA', nameKey: 'Ukraine', flag: '🇺🇦' },
        { code: 'CZ', nameKey: 'Czech Republic', flag: '🇨🇿' },
        { code: 'HU', nameKey: 'Hungary', flag: '🇭🇺' },
        { code: 'RO', nameKey: 'Romania', flag: '🇷🇴' },
        { code: 'BG', nameKey: 'Bulgaria', flag: '🇧🇬' },
        { code: 'HR', nameKey: 'Croatia', flag: '🇭🇷' },
        { code: 'SI', nameKey: 'Slovenia', flag: '🇸🇮' },
        { code: 'SK', nameKey: 'Slovakia', flag: '🇸🇰' },
        { code: 'EE', nameKey: 'Estonia', flag: '🇪🇪' },
        { code: 'LV', nameKey: 'Latvia', flag: '🇱🇻' },
        { code: 'LT', nameKey: 'Lithuania', flag: '🇱🇹' },
        { code: 'IS', nameKey: 'Iceland', flag: '🇮🇸' },
      ],
      form: new Form({
        country: 'SA',
        company_name: '',
        company_logo: '',
        tax_number: '',
        company_tagline: '',
        email_address: '',
        phone_number: '',
        address: '',
        default_currency: '',
        invoice_prefix: 'INV-',
        purchase_prefix: 'PUR-',
        quotation_prefix: 'QUO-',
        invoice_return_prefix: 'INVR-',
        purchase_return_prefix: 'PURR-',
        system_type: '',
      }),
      errors: {},
      taxNumberInvalid: false,
      taxNumberErrorMessage: '',
      taxNumberFormat: '',
    }
  },

  computed: {
    // Make steps reactive to locale changes
    steps() {
      // Safely check if $i18n is available, otherwise use fallback
      let t = (key) => key
      try {
        if (this.$t && typeof this.$t === 'function') {
          t = this.$t
        }
      } catch (e) {
        // $i18n not available yet, use fallback
      }
      return [
        { title: t('country') },
        { title: t('company_info') },
        { title: t('contact_details') },
        { title: t('document_currency_settings') },
        { title: t('system_type') }
      ]
    },
    // Countries with translated names
    countries() {
      // Safely check if $i18n is available, otherwise use fallback
      let t = (key) => key
      try {
        if (this.$t && typeof this.$t === 'function') {
          t = this.$t
        }
      } catch (e) {
        // $i18n not available yet, use fallback
      }
      return this.countriesData.map(country => ({
        ...country,
        name: t(country.nameKey) || country.nameKey
      }))
    },
    // Tax number validation rules by country
    taxNumberRules() {
      // Safely check if $i18n is available, otherwise use fallback
      let t = (key) => key
      try {
        if (this.$t && typeof this.$t === 'function') {
          t = this.$t
        }
      } catch (e) {
        // $i18n not available yet, use fallback
      }
      return {
        'SA': {
          pattern: /^3\d{14}$/,
          format: `3XXXXXXXXXXXXXX (${t('15 digits')})`,
          message: t('Invalid Saudi VAT number. Must start with 3 and be 15 digits')
        },
        'AE': {
          pattern: /^\d{15}$/,
          format: `XXXXXXXXXXXXXXX (${t('15 digits')})`,
          message: t('Invalid UAE VAT number. Must be 15 digits')
        },
        'EG': {
          pattern: /^\d{9}$/,
          format: `XXXXXXXXX (${t('9 digits')})`,
          message: t('Invalid Egyptian tax number. Must be 9 digits')
        },
        'KW': {
          pattern: /^\d{9}$/,
          format: `XXXXXXXXX (${t('9 digits')})`,
          message: t('Invalid Kuwait tax number. Must be 9 digits')
        },
        'QA': {
          pattern: /^\d{8,9}$/,
          format: `XXXXXXXX or XXXXXXXX (${t('8-9 digits')})`,
          message: t('Invalid Qatari tax number. Must be 8-9 digits')
        },
        'BH': {
          pattern: /^\d{9}$/,
          format: `XXXXXXXXX (${t('9 digits')})`,
          message: t('Invalid Bahrain tax number. Must be 9 digits')
        },
        'OM': {
          pattern: /^\d{9}$/,
          format: `XXXXXXXXX (${t('9 digits')})`,
          message: t('Invalid Omani tax number. Must be 9 digits')
        },
        'GB': {
          pattern: /^GB\d{9}(\d{3})?$/,
          format: 'GBXXXXXXXXX or GBXXXXXXXXXXXXX',
          message: t('Invalid UK VAT number. Must start with GB followed by 9 or 12 digits')
        },
        'US': {
          pattern: /^\d{2}-?\d{7}$/,
          format: `XX-XXXXXXX or XXXXXXXXX (${t('9 digits')})`,
          message: t('Invalid US EIN. Must be 9 digits')
        },
        'CA': {
          pattern: /^\d{9}RT\d{4}$|^\d{15}$/,
          format: 'XXXXXXXXXRTXXXX or XXXXXXXXXXXXXXX',
          message: t('Invalid Canadian tax number')
        },
        'DE': {
          pattern: /^DE\d{9}$/,
          format: `DEXXXXXXXXX (${t('11 characters')})`,
          message: t('Invalid German VAT number. Must start with DE followed by 9 digits')
        },
        'FR': {
          pattern: /^FR[A-Z0-9]{2}\d{9}$/,
          format: `FRXXXXXXXXXXX (${t('11 characters')})`,
          message: t('Invalid French VAT number. Must start with FR')
        },
        'ES': {
          pattern: /^ES[A-Z0-9]\d{7}[A-Z0-9]$/,
          format: `ESXXXXXXXXX (${t('9 characters')})`,
          message: t('Invalid Spanish VAT number. Must start with ES')
        },
        'IT': {
          pattern: /^IT\d{11}$/,
          format: `ITXXXXXXXXXXX (${t('13 characters')})`,
          message: t('Invalid Italian VAT number. Must start with IT followed by 11 digits')
        },
        'TR': {
          pattern: /^\d{10}$/,
          format: `XXXXXXXXXX (${t('10 digits')})`,
          message: t('Invalid Turkish tax number. Must be 10 digits')
        },
        'IN': {
          pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
          format: `XXAAAAA####X#Z# (${t('15 characters')})`,
          message: t('Invalid Indian GST number')
        },
        'AU': {
          pattern: /^\d{11}$/,
          format: `XXXXXXXXXXX (${t('11 digits')})`,
          message: t('Invalid Australian ABN. Must be 11 digits')
        },
      }
    }
  },

  watch: {
    'form.country'(newCountry, oldCountry) {
      if (newCountry !== oldCountry) {
        try {
          // Update tax number format when country changes
          if (newCountry && this.taxNumberRules && this.taxNumberRules[newCountry]) {
            this.taxNumberFormat = this.taxNumberRules[newCountry].format
          } else {
            this.taxNumberFormat = ''
          }
          
          // Re-validate tax number if it exists
          if (this.form.tax_number && this.form.tax_number.trim()) {
            this.$nextTick(() => {
              try {
                this.validateTaxNumber()
              } catch (e) {
                // $i18n not ready yet
                console.warn('Could not validate tax number:', e)
              }
            })
          }
        } catch (e) {
          // $i18n not ready yet
          console.warn('Could not update tax number format:', e)
          this.taxNumberFormat = ''
        }
      }
    }
  },

  async mounted() {
    // Prevent multiple mounts from causing issues
    if (this._mounted) {
      return
    }
    this._mounted = true
    
    // Mark that we're on initialization page
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('on_initialization_page', 'true')
    }
    
    await this.fetchAppInfo()
    await this.fetchCurrencies()
    await this.fetchTenantCompanyName()
    await this.checkInitializationStatus()
    this.interceptLocaleChanges()
    
    // Initialize tax number format if country is already selected
    // Use $nextTick to ensure $i18n is ready
    this.$nextTick(() => {
      try {
        if (this.form.country && this.taxNumberRules && this.taxNumberRules[this.form.country]) {
          this.taxNumberFormat = this.taxNumberRules[this.form.country].format
        }
      } catch (e) {
        // $i18n not ready yet, will be set when country changes
        console.warn('Could not initialize tax number format:', e)
      }
    })
  },
  
  beforeDestroy() {
    // Clear the flag when leaving the page
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('on_initialization_page')
    }
    
    // Clean up the event listener
    if (this.localeClickListener) {
      document.removeEventListener('click', this.localeClickListener)
    }
  },


  methods: {
    async fetchTenantCompanyName() {
      try {
        const response = await axios.get('/api/tenant/me')
        if (response.data && response.data.data) {
          // Pre-populate company name
          if (response.data.data.company) {
            this.form.company_name = response.data.data.company
          }
          // Pre-populate email address
          if (response.data.data.email) {
            this.form.email_address = response.data.data.email
          }
        }
      } catch (error) {
        console.error('Error fetching tenant data:', error)
      }
    },

    onLogoChange(e) {
      const file = e.target.files[0]
      if (!file) return

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml']
      if (!validTypes.includes(file.type)) {
        toast.fire({
          type: 'error',
          title: this.$t('Invalid file type'),
          text: this.$t('Please select a valid image file (JPG, PNG, GIF, or SVG)')
        })
        return
      }

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        toast.fire({
          type: 'error',
          title: this.$t('File too large'),
          text: this.$t('Please select a file smaller than 2MB')
        })
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        this.form.company_logo = reader.result
        this.logoPreview = URL.createObjectURL(file)
      }
      reader.readAsDataURL(file)
    },

    removeLogo() {
      this.form.company_logo = ''
      this.logoPreview = null
      if (this.$refs.logoInput) {
        this.$refs.logoInput.value = ''
      }
    },

    onCountryChange() {
      try {
        // Auto-set currency to SAR if Saudi Arabia is selected
        if (this.form.country === 'SA' && this.currencies.length > 0) {
          const sarCurrency = this.currencies.find(c => c.code === 'SAR')
          if (sarCurrency) {
            this.form.default_currency = sarCurrency.id
          }
        }
        
        // Reset tax number validation when country changes
        this.taxNumberInvalid = false
        this.taxNumberErrorMessage = ''
        this.taxNumberFormat = ''
        
        // Update tax number format display
        if (this.form.country && this.taxNumberRules && this.taxNumberRules[this.form.country]) {
          this.taxNumberFormat = this.taxNumberRules[this.form.country].format
        }
        
        // Re-validate tax number if it exists
        if (this.form.tax_number && this.form.tax_number.trim()) {
          this.validateTaxNumber()
        }
      } catch (e) {
        // $i18n not ready yet
        console.warn('Could not update country change:', e)
      }
    },
    
    validateTaxNumber() {
      try {
        // If tax number is empty, it's valid (optional field)
        if (!this.form.tax_number || !this.form.tax_number.trim()) {
          this.taxNumberInvalid = false
          this.taxNumberErrorMessage = ''
          return true
        }
        
        // If no country selected, skip validation
        if (!this.form.country) {
          this.taxNumberInvalid = false
          this.taxNumberErrorMessage = ''
          return true
        }
        
        // Get validation rule for selected country
        if (!this.taxNumberRules) {
          // $i18n not ready yet, skip validation
          this.taxNumberInvalid = false
          this.taxNumberErrorMessage = ''
          return true
        }
        
        const rule = this.taxNumberRules[this.form.country]
        
        // If no rule exists for this country, allow any format
        if (!rule) {
          this.taxNumberInvalid = false
          this.taxNumberErrorMessage = ''
          this.taxNumberFormat = ''
          return true
        }
        
        // Update format display
        this.taxNumberFormat = rule.format
        
        // Remove spaces and convert to uppercase for validation
        const taxNumber = this.form.tax_number.trim().replace(/\s+/g, '').toUpperCase()
        
        // Test against pattern
        if (rule.pattern.test(taxNumber)) {
          this.taxNumberInvalid = false
          this.taxNumberErrorMessage = ''
          return true
        } else {
          this.taxNumberInvalid = true
          this.taxNumberErrorMessage = rule.message
          return false
        }
      } catch (e) {
        // $i18n not ready yet, skip validation
        console.warn('Could not validate tax number:', e)
        this.taxNumberInvalid = false
        this.taxNumberErrorMessage = ''
        return true
      }
    },
    
    getTaxNumberPlaceholder() {
      // Safely check if $i18n is available, otherwise use fallback
      let t = (key) => key
      try {
        if (this.$t && typeof this.$t === 'function') {
          t = this.$t
        }
      } catch (e) {
        // $i18n not available yet, use fallback
      }
      
      if (!this.form.country || !this.taxNumberRules || !this.taxNumberRules[this.form.country]) {
        return t('enter_tax_number')
      }
      
      const format = this.taxNumberRules[this.form.country].format
      return `${t('enter_tax_number')} (${format})`
    },

    async fetchCurrencies() {
      try {
        const response = await axios.get('/api/all-currencies')
        console.log('Currencies response:', response)
        
        // Handle the response structure properly
        if (response.data && response.data.data) {
          this.currencies = response.data.data
        } else if (response.data) {
          this.currencies = response.data
        }
        
        console.log('Currencies loaded:', this.currencies)
        
        // Auto-set SAR currency for Saudi Arabia
        if (this.form.country === 'SA' && this.currencies.length > 0) {
          const sarCurrency = this.currencies.find(c => c.code === 'SAR')
          if (sarCurrency) {
            this.form.default_currency = sarCurrency.id
          }
        }
      } catch (error) {
        console.error('Error fetching currencies:', error)
        console.error('Error details:', error.response)
      }
    },

    interceptLocaleChanges() {
      // Intercept locale changes to prevent page refresh in wizard
      this.localeClickListener = async (e) => {
        const dropdownItem = e.target.closest('.dropdown-item')
        
        if (dropdownItem && e.target.closest('.language-switcher-container')) {
          e.preventDefault()
          e.stopPropagation()
          e.stopImmediatePropagation()
          
          // Get locale from the locale text
          const localeText = dropdownItem.textContent.trim()
          const locales = this.$store.getters['lang/locales']
          
          // Find the locale key
          let newLocale = null
          for (const [key] of Object.entries(locales)) {
            if (this.$t(`languages.${key}`) === localeText) {
              newLocale = key
              break
            }
          }
          
          if (newLocale && this.$i18n.locale !== newLocale) {
            await this.changeLocaleWithoutRefresh(newLocale)
          }
          
          // Close the dropdown
          this.closeLanguageDropdown()
        }
      }
      
      // Add listener with high priority
      document.addEventListener('click', this.localeClickListener, true)
    },

    closeLanguageDropdown() {
      // Close Bootstrap dropdown programmatically
      this.$nextTick(() => {
        const dropdownToggle = document.querySelector('.language-switcher-container .dropdown-toggle')
        const dropdownMenu = document.querySelector('.language-switcher-container .dropdown-menu')
        
        if (dropdownToggle && dropdownMenu) {
          // Remove 'show' class from both toggle and menu
          dropdownToggle.classList.remove('show')
          dropdownMenu.classList.remove('show')
          
          // Remove 'show' attribute if present
          dropdownToggle.removeAttribute('aria-expanded')
          dropdownToggle.setAttribute('aria-expanded', 'false')
        }
      })
    },

    async changeLocaleWithoutRefresh(locale) {
      try {
        const { loadMessages } = await import('~/plugins/i18n')
        await loadMessages(locale)
        await this.$store.dispatch('lang/setLocale', { locale })
        this.$i18n.locale = locale
        
        if (locale === 'ar') {
          document.documentElement.setAttribute('dir', 'rtl')
        } else {
          document.documentElement.setAttribute('dir', 'ltr')
        }
        
        // Force re-render to update all translations including step titles
        this.$forceUpdate()
        
        // Force nextTick to ensure computed properties are updated
        await this.$nextTick()
        this.$forceUpdate()
      } catch (error) {
        console.error('Error changing locale:', error)
      }
    },

    async fetchAppInfo() {
      try {
        const response = await axios.get('/api/general-settings', {
          timeout: 5000
        })
        if (response.data) {
          const settings = response.data
          this.appInfo = {
            blackLogo: settings.black_logo || '/images/black_logo.png',
            companyName: settings.company_name || 'Arqam'
          }
        }
      } catch (error) {
        console.error('Error fetching app info:', error)
        // Use default values - don't let this block the page
        this.appInfo = {
          blackLogo: '/images/black_logo.png',
          companyName: 'Arqam'
        }
      }
    },

    async checkInitializationStatus() {
      // Prevent multiple simultaneous checks
      if (this.statusChecked) {
        return
      }
      
      this.statusChecked = true
      
      try {
        const response = await axios.get('/api/tenant-initialization/check', {
          timeout: 5000
        })
        
        if (response.data && response.data.data && response.data.data.is_initialized) {
          this.initialized = true
          // Clear session flags
          if (typeof sessionStorage !== 'undefined') {
            sessionStorage.removeItem('on_initialization_page')
            sessionStorage.removeItem('cross_domain_login_processed')
          }
          // Use hard redirect to prevent middleware loops
          // Small delay to ensure state is set
          setTimeout(() => {
            window.location.href = '/dashboard'
          }, 100)
          return
        }
        // If not initialized, show the form (default state)
        // Reset flag so it can be checked again if needed
        this.statusChecked = false
      } catch (error) {
        console.error('Error checking initialization status:', error)
        // If there's an error, assume not initialized and show the form
        // Reset flag to allow retry
        this.statusChecked = false
      }
    },

    nextStep() {
      // Step 1: Country
      if (this.currentStep === 1) {
        if (!this.form.country) {
          this.errors.country = this.$t('country_required')
          return
        }
        this.errors = {}
        this.currentStep++
        return
      }
      // Step 2: Company Info
      else if (this.currentStep === 2) {
        if (!this.form.company_name) {
          this.errors.company_name = this.$t('company_name_required')
          return
        }
        
        // Validate tax number if provided
        if (this.form.tax_number && this.form.tax_number.trim()) {
          if (!this.validateTaxNumber()) {
            this.errors.tax_number = this.taxNumberErrorMessage
            return
          }
        }
        
        this.errors = {}
        this.currentStep++
        return
      }
      // Step 3: Contact Details
      else if (this.currentStep === 3) {
        if (!this.form.email_address) {
          this.errors.email_address = this.$t('email_required')
          return
        }
        if (!this.form.phone_number) {
          this.errors.phone_number = this.$t('phone_required')
          return
        }
        this.errors = {}
        this.currentStep++
        return
      }
      // Step 4: Document Settings
      else if (this.currentStep === 4) {
        if (!this.form.default_currency) {
          this.errors.default_currency = this.$t('currency_required')
          return
        }
        if (!this.form.invoice_prefix) {
          this.errors.invoice_prefix = this.$t('prefix_required')
          return
        }
        if (!this.form.purchase_prefix) {
          this.errors.purchase_prefix = this.$t('prefix_required')
          return
        }
        if (!this.form.quotation_prefix) {
          this.errors.quotation_prefix = this.$t('prefix_required')
          return
        }
        if (!this.form.invoice_return_prefix) {
          this.errors.invoice_return_prefix = this.$t('prefix_required')
          return
        }
        if (!this.form.purchase_return_prefix) {
          this.errors.purchase_return_prefix = this.$t('prefix_required')
          return
        }
        this.errors = {}
        this.currentStep++
        return
      }
      // Step 5: System Type
      else if (this.currentStep === 5) {
        if (!this.form.system_type) {
          this.errors.system_type = this.$t('system_type_required')
          return
        }
        this.errors = {}
        // Don't increment on step 5, submitForm will be called
      }
    },

    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },

    async submitForm() {
      // Final validation
      let hasErrors = false

      if (!this.form.country) {
        this.errors.country = this.$t('country_required')
        this.currentStep = 1
        hasErrors = true
      }
      if (!this.form.company_name) {
        this.errors.company_name = this.$t('company_name_required')
        if (!hasErrors) this.currentStep = 2
        hasErrors = true
      }
      // Validate tax number if provided
      if (this.form.tax_number && this.form.tax_number.trim()) {
        if (!this.validateTaxNumber()) {
          this.errors.tax_number = this.taxNumberErrorMessage
          if (!hasErrors) this.currentStep = 2
          hasErrors = true
        }
      }
      if (!this.form.email_address) {
        this.errors.email_address = this.$t('email_required')
        if (!hasErrors) this.currentStep = 3
        hasErrors = true
      }
      if (!this.form.phone_number) {
        this.errors.phone_number = this.$t('phone_required')
        if (!hasErrors) this.currentStep = 3
        hasErrors = true
      }
      if (!this.form.default_currency) {
        this.errors.default_currency = this.$t('currency_required')
        if (!hasErrors) this.currentStep = 4
        hasErrors = true
      }
      if (!this.form.system_type) {
        this.errors.system_type = this.$t('system_type_required')
        if (!hasErrors) this.currentStep = 5
        hasErrors = true
      }

      if (hasErrors) {
        return
      }

      this.loading = true
      this.errors = {}

      try {
        await this.form.post('/api/tenant-initialization')
        
        toast.fire({
          type: 'success',
          title: this.$t('setup_completed_successfully'),
        })

        this.initialized = true
        
        // Clear any session flags that might interfere
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.removeItem('cross_domain_login_processed')
          sessionStorage.removeItem('on_initialization_page')
        }
        
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 1500)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // User is not authenticated, redirect to login
          toast.fire({
            type: 'warning',
            title: this.$t('please_login_first'),
          })
          setTimeout(() => {
            window.location.href = '/login'
          }, 1000)
        } else if (error.response && error.response.data.errors) {
          this.errors = error.response.data.errors
        } else {
          toast.fire({
            type: 'error',
            title: this.$t('error_occurred'),
          })
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style scoped>
.tenant-initialization {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  padding: 20px;
}

.language-switcher-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

.auth-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 60px 20px;
}

.wizard-progress {
  margin-bottom: 30px;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.progress-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step-indicator {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
  transition: all 0.3s ease;
  border: 2px solid #e9ecef;
  font-size: 16px;
  font-weight: 600;
}

.progress-item.active .step-indicator {
  background: #33a0d9;
  border-color: #33a0d9;
  color: white;
  transform: scale(1.1);
}

.progress-item.completed .step-indicator {
  background: #28a745;
  border-color: #28a745;
  color: white;
}

.step-number {
  font-weight: 600;
  font-size: 16px;
  transition: opacity 0.3s ease;
}

.step-check {
  color: white;
  font-size: 14px;
  animation: scaleIn 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.step-title {
  font-size: 12px;
  color: #6c757d;
  text-align: center;
  font-weight: 500;
}

.progress-item.active .step-title {
  color: #33a0d9;
  font-weight: 600;
}

.system-type-card {
  border: 2px solid #e9ecef;
  border-radius: 15px;
  padding: 25px 15px;
  cursor: pointer;
  transition: all 0.3s;
  background: white;
  height: 100%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.system-type-card:hover {
  border-color: #33a0d9;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(51, 160, 217, 0.1);
}

.system-type-card.active {
  border-color: #33a0d9;
  background: #f8fbff;
  box-shadow: 0 8px 20px rgba(51, 160, 217, 0.15);
  transform: translateY(-5px);
}

.card-icon {
  font-size: 48px;
  color: #33a0d9;
  margin-bottom: 15px;
}

.system-type-card h6 {
  color: #333;
  font-weight: 600;
  margin-bottom: 8px;
}

.system-type-card p {
  color: #6c757d;
  font-size: 13px;
  margin: 0;
}

.wizard-step {
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lg-logo {
  transition: all 0.3s ease;
}

.lg-logo:hover {
  opacity: 0.9;
}

.text-primary {
  color: #33a0d9 !important;
}

.btn-primary {
  background-color: #33a0d9;
  border-color: #33a0d9;
}

.btn-primary:hover {
  background-color: #2b8bc4;
  border-color: #2b8bc4;
}

@media (max-width: 768px) {
  .language-switcher-container {
    top: 10px;
    right: 10px;
  }

  .auth-wrapper {
    padding: 40px 15px;
  }

  .step-indicator {
    width: 35px;
    height: 35px;
  }

  .step-number {
    font-size: 12px;
  }

  .step-check {
    font-size: 12px;
  }

  .step-title {
    font-size: 10px;
  }

  .progress-container {
    gap: 5px;
    max-width: 100%;
  }

  .card-icon {
    font-size: 36px;
  }

  .system-type-card {
    padding: 20px 12px;
  }
}

[dir="rtl"] .language-switcher-container {
  right: auto;
  left: 20px;
}

[dir="rtl"] .language-switcher-container.mobile {
  left: 10px;
}

.logo-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-preview {
  text-align: center;
}

.logo-preview-image {
  max-width: 200px;
  max-height: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

.file-upload-wrapper {
  text-align: center;
  width: 100%;
}

.file-upload-wrapper label {
  cursor: pointer;
  display: inline-block;
}

.country-select {
  width: 100%;
}

.country-select .vs__dropdown-toggle {
  border: 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  min-height: 3rem;
}

.country-select .vs__search {
  padding: 0;
  margin: 0;
  font-size: 1rem;
}

.country-option,
.country-selected {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.country-flag {
  font-size: 1.25rem;
  line-height: 1;
}

.country-name {
  font-size: 1rem;
}

.country-select.is-invalid .vs__dropdown-toggle {
  border-color: #dc3545;
}

.country-select .vs__dropdown-menu {
  border-radius: 15px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
}

.country-select .vs__dropdown-option {
  padding: 0.75rem 1rem;
}

.country-select .vs__dropdown-option--highlight {
  background-color: #33a0d9;
  color: white;
}
</style>
