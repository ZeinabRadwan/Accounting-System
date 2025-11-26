<template>
  <div class="phone-number-input">
    <label v-if="label" class="form-label">
      {{ label }} 
      <span v-if="required" class="text-danger">*</span>
      <span v-else class="text-muted">({{ $t('optional') }})</span>
    </label>
    
    <div class="phone-input-container">
      <div class="phone-input-wrapper" :class="{ 'is-invalid': hasError, 'has-value': phoneNumber }">
        <!-- Country Selector -->
        <div class="country-selector" @click="toggleCountryDropdown">
          <img
            class="country-flag"
            :src="selectedCountry.flagImage"
            :alt="selectedCountry.code"
            width="18"
            height="12"
          />
          <span class="country-code">+{{ selectedCountry.dialCode }}</span>
          <i class="fas fa-chevron-down dropdown-icon"></i>
        </div>
        
        <!-- Phone Number Input -->
        <input
          id="phone_number"
          name="phone_number"
          v-model="phoneNumber"
          type="tel"
          class="phone-input"
          :class="{ 'is-invalid': hasError }"
          :placeholder="placeholder || $t('enter_phone_number')"
          @input="onInput"
          @blur="validatePhone"
          @focus="onFocus"
        />
      </div>
      
      <!-- Country Dropdown -->
      <div v-if="showCountryDropdown" class="country-dropdown" @click.stop>
        <div class="country-search">
          <input
            id="country_search"
            name="country_search"
            v-model="countrySearch"
            type="text"
            class="form-control"
            :placeholder="$t('search_country')"
            @input="filterCountries"
          />
        </div>
        <div class="country-list">
          <div
            v-for="country in filteredCountries"
            :key="country.code"
            class="country-item"
            :class="{ active: selectedCountry.code === country.code }"
            @click="selectCountry(country)"
          >
            <img
              class="country-flag"
              :src="country.flagImage"
              :alt="country.code"
              width="18"
              height="12"
            />
            <span class="country-name">{{ country.name }}</span>
            <span class="country-dial-code">+{{ country.dialCode }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Error Message -->
    <div v-if="hasError && errorMessage" class="invalid-feedback d-block mt-2">
      {{ errorMessage }}
    </div>
    
    <!-- Format Hint -->
    <small v-if="showFormatHint && phoneFormat" class="form-text text-muted mt-1">
      {{ $t('Format') }}: {{ phoneFormat }}
    </small>
  </div>
</template>

<script>
export default {
  name: 'PhoneNumberInput',
  
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    defaultCountry: {
      type: String,
      default: 'SA'
    },
    country: {
      type: String,
      default: null
    },
    showFormatHint: {
      type: Boolean,
      default: true
    },
    validateOnInput: {
      type: Boolean,
      default: true
    }
  },
  
  data() {
    return {
      phoneNumber: '',
      selectedCountryCode: this.country || this.defaultCountry,
      showCountryDropdown: false,
      countrySearch: '',
      errorMessage: '',
      phoneFormat: '',
      countriesData: [
        { code: 'SA', nameKey: 'Saudi Arabia', flag: '🇸🇦', dialCode: '966' },
        { code: 'AE', nameKey: 'United Arab Emirates', flag: '🇦🇪', dialCode: '971' },
        { code: 'EG', nameKey: 'Egypt', flag: '🇪🇬', dialCode: '20' },
        { code: 'JO', nameKey: 'Jordan', flag: '🇯🇴', dialCode: '962' },
        { code: 'LB', nameKey: 'Lebanon', flag: '🇱🇧', dialCode: '961' },
        { code: 'MA', nameKey: 'Morocco', flag: '🇲🇦', dialCode: '212' },
        { code: 'TN', nameKey: 'Tunisia', flag: '🇹🇳', dialCode: '216' },
        { code: 'DZ', nameKey: 'Algeria', flag: '🇩🇿', dialCode: '213' },
        { code: 'KW', nameKey: 'Kuwait', flag: '🇰🇼', dialCode: '965' },
        { code: 'QA', nameKey: 'Qatar', flag: '🇶🇦', dialCode: '974' },
        { code: 'BH', nameKey: 'Bahrain', flag: '🇧🇭', dialCode: '973' },
        { code: 'OM', nameKey: 'Oman', flag: '🇴🇲', dialCode: '968' },
        { code: 'YE', nameKey: 'Yemen', flag: '🇾🇪', dialCode: '967' },
        { code: 'IQ', nameKey: 'Iraq', flag: '🇮🇶', dialCode: '964' },
        { code: 'US', nameKey: 'United States', flag: '🇺🇸', dialCode: '1' },
        { code: 'GB', nameKey: 'United Kingdom', flag: '🇬🇧', dialCode: '44' },
        { code: 'CA', nameKey: 'Canada', flag: '🇨🇦', dialCode: '1' },
        { code: 'AU', nameKey: 'Australia', flag: '🇦🇺', dialCode: '61' },
        { code: 'DE', nameKey: 'Germany', flag: '🇩🇪', dialCode: '49' },
        { code: 'FR', nameKey: 'France', flag: '🇫🇷', dialCode: '33' },
        { code: 'ES', nameKey: 'Spain', flag: '🇪🇸', dialCode: '34' },
        { code: 'IT', nameKey: 'Italy', flag: '🇮🇹', dialCode: '39' },
        { code: 'NL', nameKey: 'Netherlands', flag: '🇳🇱', dialCode: '31' },
        { code: 'BE', nameKey: 'Belgium', flag: '🇧🇪', dialCode: '32' },
        { code: 'CH', nameKey: 'Switzerland', flag: '🇨🇭', dialCode: '41' },
        { code: 'AT', nameKey: 'Austria', flag: '🇦🇹', dialCode: '43' },
        { code: 'SE', nameKey: 'Sweden', flag: '🇸🇪', dialCode: '46' },
        { code: 'NO', nameKey: 'Norway', flag: '🇳🇴', dialCode: '47' },
        { code: 'DK', nameKey: 'Denmark', flag: '🇩🇰', dialCode: '45' },
        { code: 'FI', nameKey: 'Finland', flag: '🇫🇮', dialCode: '358' },
        { code: 'PL', nameKey: 'Poland', flag: '🇵🇱', dialCode: '48' },
        { code: 'IE', nameKey: 'Ireland', flag: '🇮🇪', dialCode: '353' },
        { code: 'PT', nameKey: 'Portugal', flag: '🇵🇹', dialCode: '351' },
        { code: 'GR', nameKey: 'Greece', flag: '🇬🇷', dialCode: '30' },
        { code: 'LU', nameKey: 'Luxembourg', flag: '🇱🇺', dialCode: '352' },
        { code: 'TR', nameKey: 'Turkey', flag: '🇹🇷', dialCode: '90' },
        { code: 'IN', nameKey: 'India', flag: '🇮🇳', dialCode: '91' },
        { code: 'CN', nameKey: 'China', flag: '🇨🇳', dialCode: '86' },
        { code: 'JP', nameKey: 'Japan', flag: '🇯🇵', dialCode: '81' },
        { code: 'KR', nameKey: 'South Korea', flag: '🇰🇷', dialCode: '82' },
        { code: 'BR', nameKey: 'Brazil', flag: '🇧🇷', dialCode: '55' },
        { code: 'MX', nameKey: 'Mexico', flag: '🇲🇽', dialCode: '52' },
        { code: 'AR', nameKey: 'Argentina', flag: '🇦🇷', dialCode: '54' },
        { code: 'ZA', nameKey: 'South Africa', flag: '🇿🇦', dialCode: '27' },
        { code: 'NG', nameKey: 'Nigeria', flag: '🇳🇬', dialCode: '234' },
        { code: 'KE', nameKey: 'Kenya', flag: '🇰🇪', dialCode: '254' },
        { code: 'PK', nameKey: 'Pakistan', flag: '🇵🇰', dialCode: '92' },
        { code: 'BD', nameKey: 'Bangladesh', flag: '🇧🇩', dialCode: '880' },
        { code: 'ID', nameKey: 'Indonesia', flag: '🇮🇩', dialCode: '62' },
        { code: 'PH', nameKey: 'Philippines', flag: '🇵🇭', dialCode: '63' },
        { code: 'VN', nameKey: 'Vietnam', flag: '🇻🇳', dialCode: '84' },
        { code: 'TH', nameKey: 'Thailand', flag: '🇹🇭', dialCode: '66' },
        { code: 'MY', nameKey: 'Malaysia', flag: '🇲🇾', dialCode: '60' },
        { code: 'SG', nameKey: 'Singapore', flag: '🇸🇬', dialCode: '65' },
        { code: 'NZ', nameKey: 'New Zealand', flag: '🇳🇿', dialCode: '64' },
        { code: 'RU', nameKey: 'Russia', flag: '🇷🇺', dialCode: '7' },
        { code: 'UA', nameKey: 'Ukraine', flag: '🇺🇦', dialCode: '380' },
        { code: 'CZ', nameKey: 'Czech Republic', flag: '🇨🇿', dialCode: '420' },
        { code: 'HU', nameKey: 'Hungary', flag: '🇭🇺', dialCode: '36' },
        { code: 'RO', nameKey: 'Romania', flag: '🇷🇴', dialCode: '40' },
        { code: 'BG', nameKey: 'Bulgaria', flag: '🇧🇬', dialCode: '359' },
        { code: 'HR', nameKey: 'Croatia', flag: '🇭🇷', dialCode: '385' },
        { code: 'SI', nameKey: 'Slovenia', flag: '🇸🇮', dialCode: '386' },
        { code: 'SK', nameKey: 'Slovakia', flag: '🇸🇰', dialCode: '421' },
        { code: 'EE', nameKey: 'Estonia', flag: '🇪🇪', dialCode: '372' },
        { code: 'LV', nameKey: 'Latvia', flag: '🇱🇻', dialCode: '371' },
        { code: 'LT', nameKey: 'Lithuania', flag: '🇱🇹', dialCode: '370' },
        { code: 'IS', nameKey: 'Iceland', flag: '🇮🇸', dialCode: '354' }
      ]
    }
  },
  
  computed: {
    // Countries with translated names
    countries() {
      return this.countriesData.map(country => {
        const codeLower = (country.code || '').toLowerCase()

        return {
          ...country,
          name: this.$t(country.nameKey) || country.nameKey,
          flagImage: country.flagImage || (codeLower ? `https://flagcdn.com/w40/${codeLower}.png` : '')
        }
      })
    },
    
    selectedCountry() {
      return this.countries.find(c => c.code === this.selectedCountryCode) || this.countries[0]
    },
    
    filteredCountries() {
      if (!this.countrySearch) {
        return this.countries
      }
      const search = this.countrySearch.toLowerCase()
      return this.countries.filter(country => 
        country.name.toLowerCase().includes(search) ||
        country.dialCode.includes(search) ||
        country.code.toLowerCase().includes(search) ||
        (country.nameKey && country.nameKey.toLowerCase().includes(search))
      )
    },
    
    hasError() {
      return !!this.errorMessage
    },
    
    phoneValidationRules() {
      return {
        'SA': {
          pattern: /^5\d{8}$/,
          format: '5XXXXXXXX (9 digits starting with 5)',
          formatKey: 'phone_format_sa',
          message: this.$t('Invalid Saudi phone number. Must be 9 digits starting with 5')
        },
        'AE': {
          pattern: /^5\d{8}$/,
          format: '5XXXXXXXX (9 digits starting with 5)',
          formatKey: 'phone_format_ae',
          message: this.$t('Invalid UAE phone number. Must be 9 digits starting with 5')
        },
        'EG': {
          pattern: /^1\d{9}$/,
          format: '1XXXXXXXXX (10 digits starting with 1)',
          formatKey: 'phone_format_eg',
          message: this.$t('Invalid Egyptian phone number. Must be 10 digits starting with 1')
        },
        'JO': {
          pattern: /^7\d{8}$/,
          format: '7XXXXXXXX (9 digits starting with 7)',
          formatKey: 'phone_format_jo',
          message: this.$t('Invalid Jordanian phone number. Must be 9 digits starting with 7')
        },
        'LB': {
          pattern: /^[37]\d{7}$/,
          format: '3XXXXXXX or 7XXXXXXX (8 digits)',
          formatKey: 'phone_format_lb',
          message: this.$t('Invalid Lebanese phone number. Must be 8 digits starting with 3 or 7')
        },
        'KW': {
          pattern: /^[569]\d{7}$/,
          format: '5XXXXXXX, 6XXXXXXX, or 9XXXXXXX (8 digits)',
          formatKey: 'phone_format_kw',
          message: this.$t('Invalid Kuwait phone number. Must be 8 digits starting with 5, 6, or 9')
        },
        'QA': {
          pattern: /^[37]\d{7}$/,
          format: '3XXXXXXX or 7XXXXXXX (8 digits)',
          formatKey: 'phone_format_qa',
          message: this.$t('Invalid Qatari phone number. Must be 8 digits starting with 3 or 7')
        },
        'BH': {
          pattern: /^[367]\d{7}$/,
          format: '3XXXXXXX, 6XXXXXXX, or 7XXXXXXX (8 digits)',
          formatKey: 'phone_format_bh',
          message: this.$t('Invalid Bahrain phone number. Must be 8 digits starting with 3, 6, or 7')
        },
        'OM': {
          pattern: /^[79]\d{7}$/,
          format: '7XXXXXXX or 9XXXXXXX (8 digits)',
          formatKey: 'phone_format_om',
          message: this.$t('Invalid Omani phone number. Must be 8 digits starting with 7 or 9')
        },
        'US': {
          pattern: /^\d{10}$/,
          format: 'XXXXXXXXXX (10 digits)',
          formatKey: 'phone_format_us',
          message: this.$t('Invalid US phone number. Must be 10 digits')
        },
        'GB': {
          pattern: /^[1-9]\d{9,10}$/,
          format: 'XXXXXXXXXX or XXXXXXXXXXX (10-11 digits)',
          formatKey: 'phone_format_gb',
          message: this.$t('Invalid UK phone number. Must be 10-11 digits')
        },
        'CA': {
          pattern: /^\d{10}$/,
          format: 'XXXXXXXXXX (10 digits)',
          formatKey: 'phone_format_ca',
          message: this.$t('Invalid Canadian phone number. Must be 10 digits')
        },
        'AU': {
          pattern: /^[23478]\d{8}$/,
          format: '2XXXXXXXX, 3XXXXXXXX, 4XXXXXXXX, 7XXXXXXXX, or 8XXXXXXXX (9 digits)',
          formatKey: 'phone_format_au',
          message: this.$t('Invalid Australian phone number. Must be 9 digits starting with 2, 3, 4, 7, or 8')
        },
        'DE': {
          pattern: /^[1-9]\d{9,10}$/,
          format: 'XXXXXXXXXX or XXXXXXXXXXX (10-11 digits)',
          formatKey: 'phone_format_de',
          message: this.$t('Invalid German phone number. Must be 10-11 digits')
        },
        'FR': {
          pattern: /^[1-9]\d{8}$/,
          format: 'XXXXXXXXX (9 digits)',
          formatKey: 'phone_format_fr',
          message: this.$t('Invalid French phone number. Must be 9 digits')
        },
        'ES': {
          pattern: /^[6-9]\d{8}$/,
          format: '6XXXXXXXX, 7XXXXXXXX, 8XXXXXXXX, or 9XXXXXXXX (9 digits)',
          formatKey: 'phone_format_es',
          message: this.$t('Invalid Spanish phone number. Must be 9 digits starting with 6, 7, 8, or 9')
        },
        'IT': {
          pattern: /^3\d{9}$/,
          format: '3XXXXXXXXX (10 digits starting with 3)',
          formatKey: 'phone_format_it',
          message: this.$t('Invalid Italian phone number. Must be 10 digits starting with 3')
        },
        'TR': {
          pattern: /^5\d{9}$/,
          format: '5XXXXXXXXX (10 digits starting with 5)',
          formatKey: 'phone_format_tr',
          message: this.$t('Invalid Turkish phone number. Must be 10 digits starting with 5')
        },
        'IN': {
          pattern: /^[6-9]\d{9}$/,
          format: '6XXXXXXXXX, 7XXXXXXXXX, 8XXXXXXXXX, or 9XXXXXXXXX (10 digits)',
          formatKey: 'phone_format_in',
          message: this.$t('Invalid Indian phone number. Must be 10 digits starting with 6, 7, 8, or 9')
        }
      }
    }
  },
  
  watch: {
    value(newVal) {
      if (newVal !== this.getFullPhoneNumber()) {
        this.parsePhoneNumber(newVal)
      }
    },
    
    country(newCountry) {
      if (newCountry && newCountry !== this.selectedCountryCode) {
        this.selectedCountryCode = newCountry
        this.validatePhone()
      }
    },
    
    selectedCountryCode() {
      this.validatePhone()
      this.updatePhoneFormat()
    }
  },
  
  mounted() {
    // Parse initial value if provided
    if (this.value) {
      this.parsePhoneNumber(this.value)
    }
    
    // Set initial country from prop
    if (this.country) {
      this.selectedCountryCode = this.country
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside)
    
    // Update phone format
    this.updatePhoneFormat()
    
    // Validate phone number after component is mounted
    this.$nextTick(() => {
      this.validatePhone()
    })
  },
  
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  
  methods: {
    parsePhoneNumber(phone) {
      // Try to extract country code and number
      if (phone.startsWith('+')) {
        const withoutPlus = phone.substring(1)
        // Try to match country by dial code
        for (const country of this.countries) {
          if (withoutPlus.startsWith(country.dialCode)) {
            this.selectedCountryCode = country.code
            this.phoneNumber = withoutPlus.substring(country.dialCode.length)
            // Validate after parsing
            this.$nextTick(() => {
              this.validatePhone()
            })
            return
          }
        }
      }
      // If no country code found, use as is
      this.phoneNumber = phone.replace(/^\+/, '')
      // Validate after parsing
      this.$nextTick(() => {
        this.validatePhone()
      })
    },
    
    getFullPhoneNumber() {
      if (!this.phoneNumber) return ''
      return `+${this.selectedCountry.dialCode}${this.phoneNumber}`
    },
    
    onInput() {
      // Remove non-digit characters
      this.phoneNumber = this.phoneNumber.replace(/\D/g, '')
      
      // Emit the full phone number
      this.$emit('input', this.getFullPhoneNumber())
      
      // Validate while typing if enabled
      if (this.validateOnInput) {
        this.validatePhone()
      }
    },
    
    onFocus() {
      // Validate on focus
      this.validatePhone()
    },
    
    validatePhone() {
      // Clear previous error
      this.errorMessage = ''
      
      // If not required and empty, it's valid
      if (!this.required && !this.phoneNumber) {
        this.$emit('validated', true)
        return true
      }
      
      // If required and empty, show error
      if (this.required && !this.phoneNumber) {
        this.errorMessage = this.$t('phone_required')
        this.$emit('validated', false)
        return false
      }
      
      // Get validation rule for selected country
      const rule = this.phoneValidationRules[this.selectedCountryCode]
      
      // If no rule exists for this country, allow any format
      if (!rule) {
        this.$emit('validated', true)
        return true
      }
      
      // Test against pattern
      if (rule.pattern.test(this.phoneNumber)) {
        this.errorMessage = ''
        this.$emit('validated', true)
        return true
      } else {
        this.errorMessage = rule.message
        this.$emit('validated', false)
        return false
      }
    },
    
    updatePhoneFormat() {
      const rule = this.phoneValidationRules[this.selectedCountryCode]
      if (rule && rule.formatKey) {
        this.phoneFormat = this.$t(rule.formatKey) || rule.format
      } else {
        this.phoneFormat = rule ? rule.format : ''
      }
    },
    
    toggleCountryDropdown() {
      this.showCountryDropdown = !this.showCountryDropdown
      if (this.showCountryDropdown) {
        this.countrySearch = ''
      }
    },
    
    selectCountry(country) {
      this.selectedCountryCode = country.code
      this.showCountryDropdown = false
      this.countrySearch = ''
      this.validatePhone()
      this.$emit('country-changed', country.code)
    },
    
    filterCountries() {
      // Filtering is handled by computed property
    },
    
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showCountryDropdown = false
      }
    }
  }
}
</script>

<style scoped>
.phone-number-input {
  position: relative;
}

.phone-input-container {
  position: relative;
}

.phone-input-wrapper {
  display: flex;
  align-items: center;
  background: white;
  border: 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  min-height: 3rem;
  position: relative;
  z-index: 1;
}

[dir="rtl"] .phone-input-wrapper {
  flex-direction: row-reverse;
}

.phone-input-wrapper:focus-within {
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

.phone-input-wrapper.is-invalid {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.country-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.5rem 1rem;
  border-right: 1px solid #dee2e6;
  cursor: pointer;
  user-select: none;
  transition: background 0.2s;
  min-width: 100px;
}

[dir="rtl"] .country-selector {
  flex-direction: row-reverse;
  border-right: 1px solid #dee2e6;
  border-left: none;
}

.country-flag {
  font-size: 1.25rem;
  line-height: 1;
}

.country-code {
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
}

.dropdown-icon {
  font-size: 0.75rem;
  color: #6c757d;
  transition: transform 0.2s;
}

.country-selector:hover .dropdown-icon {
  transform: translateY(2px);
}

.phone-input {
  flex: 1;
  border: 0;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #33a0d9;
  background: transparent;
  text-align: left;
  direction: ltr;
}

.phone-input::placeholder {
  color: #adb5bd;
  text-align: left;
}

[dir="rtl"] .phone-input {
  text-align: right;
}

[dir="rtl"] .phone-input::placeholder {
  text-align: right;
}

.country-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: white;
  border-radius: 15px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.country-search {
  padding: 0.75rem;
  border-bottom: 1px solid #dee2e6;
}

.country-search input {
  border-radius: 10px;
  border: 1px solid #dee2e6;
  padding: 0.5rem 0.75rem;
}

.country-list {
  overflow-y: auto;
  max-height: 250px;
}

.country-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #f8f9fa;
}

.country-item:hover {
  background: #f8f9fa;
}

.country-item.active {
  background: #e7f3ff;
  color: #33a0d9;
}

.country-item .country-flag {
  font-size: 1.25rem;
  line-height: 1;
  width: 24px;
  text-align: center;
}

.country-item .country-name {
  flex: 1;
  font-size: 0.95rem;
}

.country-item .country-dial-code {
  font-size: 0.85rem;
  color: #6c757d;
  font-weight: 500;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875rem;
}

[dir="rtl"] .country-dropdown {
  left: auto;
  right: 0;
}

@media (max-width: 768px) {
  .country-selector {
    min-width: 80px;
    padding: 0.5rem 0.75rem;
  }
  
  .country-code {
    font-size: 0.8rem;
  }
  
  .country-dropdown {
    max-height: 250px;
  }
  
  .country-list {
    max-height: 200px;
  }
}
</style>

