<template>
  <div class="tenant-initialization">
    <!-- Language Switcher - Hidden on tenant initialization page -->
    <!-- <div class="language-switcher-container">
      <LocaleDropdown />
    </div> -->

    <div class="auth-wrapper" v-if="!initialized">
      <div class="container">
        <div class="row justify-content-center">
          <div style="flex: 0 0 71.333333%; max-width: 71.333333%;">
            <!-- Progress Steps -->
            <div class="wizard-progress mb-4">
              <div class="progress-container" :class="{ rtl: isRTL }">
                <div v-for="(step, index) in steps" :key="index" class="progress-item" :class="{
                  active: currentStep === index + 1,
                  completed: currentStep > index + 1,
                }">
                  <div class="step-indicator">
                    <i v-if="currentStep > index + 1" class="fas fa-check step-check"></i>
                  </div>
                  <div class="step-title">{{ step.title }}</div>
                </div>
              </div>
            </div>

            <!-- Header -->
            <div class="text-center mb-4">
              <!-- <router-link to="/">
                <img v-if="appInfo" :src="appInfo.blackLogo" :alt="appInfo.companyName" class="lg-logo img-fluid mb-3"
                  style="max-width: 200px;" />
              </router-link> -->
              <h3 style="color: #191e29; font-weight: 600; font-size: 24px">
                {{ $t('welcome_setup_account') || 'مرحباً! دعنا نجهز حسابك' }}
              </h3>
              <p class="text-muted">{{ $t("setup_wizard_subtitle") }}</p>
            </div>

            <!-- Form Card -->
            <div class="card" style="
                border: 1px solid #cbd0dd;
                border-radius: 10px;
                box-shadow: none;
                background: transparent;
              ">
              <div class="card-body p-4">
                <form @submit.prevent="nextStep">
                  <!-- Step 1: Country Selection -->
                  <div v-if="currentStep === 1" class="wizard-step">
                    <div class="form-group">
                      <label class="form-label">{{ getChooseCountryText() }}
                        <span class="text-danger">*</span></label>
                      <select ref="countrySelect" id="country" name="country" v-model="form.country"
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary country-select"
                        :class="{ 'is-invalid': errors.country }" @change="onCountryChange">
                        <option value="">{{ getChooseCountryText() }}</option>
                        <option v-for="country in countries" :key="country.code" :value="country.code"
                          :data-flag="country.flagImage">
                          {{ country.name }}
                        </option>
                      </select>
                      <div v-if="errors.country" class="invalid-feedback d-block mt-2">
                        {{ errors.country }}
                      </div>
                    </div>
                  </div>

                  <!-- Step 2: Company Information -->
                  <div v-if="currentStep === 2" class="wizard-step">
                    <h4 style="
                        color: #191e29;
                        font-weight: 400;
                        font-size: 22px;
                        margin-bottom: 10px;
                      ">
                      {{ $t("company_info") || "معلومات الشركة" }}
                    </h4>
                    <div class="form-group mb-4">
                      <input id="company_name" name="company_name" v-model="form.company_name" type="text"
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary"
                        :class="{ 'is-invalid': errors.company_name }" :placeholder="$t('enter_company_name')"
                        required />
                      <div v-if="errors.company_name" class="invalid-feedback d-block mt-2">
                        {{ errors.company_name }}
                      </div>
                    </div>

                    <div class="form-group mb-4">
                      <div class="logo-upload-container">
                        <!-- Crop Area (shown when image is selected) -->
                        <div v-if="cropImageSrc" class="logo-crop-wrapper mb-3">
                          <div class="crop-container-inline">
                            <img ref="cropImage" :src="cropImageSrc" alt="Crop" class="crop-image-inline" />
                          </div>
                          <div class="crop-actions mt-3">
                            <button type="button" class="btn btn-secondary btn-sm" @click="cancelCrop">
                              <i class="fas fa-times mr-1"></i>
                              {{ $t("Cancel") }}
                            </button>
                            <button type="button" class="btn btn-primary btn-sm" @click="cropLogo">
                              <i class="fas fa-check mr-1"></i>
                              {{ $t("Crop & Save") }}
                            </button>
                          </div>
                          <small class="d-block text-muted mt-2 text-center">{{
                            $t("Adjust the selection to crop")
                          }}</small>
                        </div>

                        <!-- Preview (shown after crop) -->
                        <div v-else-if="logoPreview" class="logo-preview mb-3">
                          <div class="logo-preview-wrapper">
                            <img :src="logoPreview" alt="Company Logo" class="logo-preview-image" />
                            <div class="logo-preview-overlay">
                              <button type="button" class="btn btn-sm btn-danger" @click="removeLogo">
                                <i class="fas fa-times"></i> {{ $t("Remove") }}
                              </button>
                            </div>
                          </div>
                          <small class="d-block text-muted mt-2 text-center">{{ $t("Logo size") }}: 300x300
                            {{ $t("pixels") }}</small>
                        </div>

                        <!-- Upload Area (hidden when crop is active) -->
                        <div v-if="!cropImageSrc" class="file-upload-area" :class="{ 'has-logo': logoPreview }">
                          <input type="file" ref="logoInput" @change="onLogoChange"
                            accept="image/jpeg,image/png,image/gif" class="d-none" id="company-logo-upload" />
                          <label for="company-logo-upload" class="file-upload-label">
                            <div class="upload-icon-wrapper">
                              <i class="fas fa-cloud-upload-alt"></i>
                            </div>
                            <div class="upload-text">
                              <span class="upload-title">{{
                                logoPreview
                                  ? $t("Change Logo")
                                  : $t("upload_logo") || "إرفع الشعار"
                              }}</span>
                              <span class="upload-subtitle">{{
                                $t("Click to upload or drag and drop")
                              }}</span>
                            </div>
                          </label>
                          <div class="upload-info">
                            <small class="text-muted">
                              <i class="fas fa-info-circle mr-1"></i>
                              {{
                                $t(
                                  "Maximum file size: 2MB. Supported formats: JPG, PNG, GIF"
                                )
                              }}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div v-if="errors.company_logo" class="invalid-feedback d-block mt-2">
                        {{ errors.company_logo }}
                      </div>
                    </div>

                    <div class="form-group mb-4">
                      <input id="tax_number" name="tax_number" v-model="form.tax_number" type="text"
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" :class="{
                          'is-invalid': errors.tax_number || taxNumberInvalid,
                        }" :placeholder="$t('tax_number_optional') || 'الرقم الضريبي ( إختياري )'"
                        @input="validateTaxNumber" @blur="validateTaxNumber" />
                      <div v-if="errors.tax_number" class="invalid-feedback d-block mt-2">
                        {{ errors.tax_number }}
                      </div>
                      <div v-else-if="taxNumberInvalid && form.tax_number" class="invalid-feedback d-block mt-2">
                        {{ taxNumberErrorMessage }}
                      </div>
                      <small v-if="form.country && taxNumberFormat" class="form-text text-muted mt-1">
                        {{ $t("Format") }}: {{ taxNumberFormat }}
                      </small>
                    </div>
                  </div>

                  <!-- Step 3: Contact Details -->
                  <div v-if="currentStep === 3" class="wizard-step">
                    <h4 class="mb-4" style="color: #191E29; font-weight: 600; font-size: 24px;">{{ $t('contact_details')
                      || 'تفاصيل الإتصال' }}</h4>
                    <div class="form-group mb-4">
                      <input id="email_address" name="email_address" v-model="form.email_address" type="email"
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary"
                        :class="{ 'is-invalid': errors.email_address }" :placeholder="$t('Main Eamil for the company')"
                        required />
                      <div v-if="errors.email_address" class="invalid-feedback d-block mt-2">
                        {{ errors.email_address }}
                      </div>
                    </div>

                    <div class="form-group mb-4">
                      <PhoneNumberInput v-model="form.phone_number" :required="true" :country="form.country"
                        :default-country="form.country || 'SA'" @validated="onPhoneValidated" />
                    </div>

                    <div class="form-group">
                      <textarea id="address" name="address" v-model="form.address"
                        class="form-control form-control-lg border-0 shadow-sm px-4 py-3 text-primary" rows="3"
                        :placeholder="$t('address') + ' (' + $t('optional') + ')'"
                        style="border-radius: 15px; resize: none"></textarea>
                    </div>
                  </div>

                  <!-- Step 4: Document & Currency Settings -->
                  <div v-if="currentStep === 4" class="wizard-step">
                    <h4 class="mb-4" style="color: #191E29; font-weight: 600; font-size: 24px;">{{
                      $t('currency_and_symbols') || 'العملة والرموز' }}</h4>
                    <div class="form-group mb-4">
                      <select id="default_currency" name="default_currency" v-model="form.default_currency"
                        class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary"
                        :class="{ 'is-invalid': errors.default_currency }" required>
                        <option value="">{{ $t("select_currency") }}</option>
                        <option v-for="currency in currencies" :key="currency.id" :value="currency.id">
                          {{ currency.code }} - {{ currency.name }}
                        </option>
                      </select>
                      <div v-if="errors.default_currency" class="invalid-feedback d-block mt-2">
                        {{ errors.default_currency }}
                      </div>
                    </div>

                    <h6 class="mb-3 mt-4">{{ $t("document_prefixes") }}</h6>
                    <p class="text-muted small mb-4">
                      {{ $t("document_prefixes_description") }}
                    </p>

                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label class="form-label document-prefix-label">
                          {{ $t("invoice_prefix") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input id="invoice_prefix" name="invoice_prefix" v-model="form.invoice_prefix" type="text"
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary"
                          :class="{ 'is-invalid': errors.invoice_prefix }" placeholder="INV-" required />
                        <div v-if="errors.invoice_prefix" class="invalid-feedback d-block mt-2">
                          {{ errors.invoice_prefix }}
                        </div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label document-prefix-label">
                          {{ $t("purchase_prefix") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input id="purchase_prefix" name="purchase_prefix" v-model="form.purchase_prefix" type="text"
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary"
                          :class="{ 'is-invalid': errors.purchase_prefix }" placeholder="PUR-" required />
                        <div v-if="errors.purchase_prefix" class="invalid-feedback d-block mt-2">
                          {{ errors.purchase_prefix }}
                        </div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label document-prefix-label">
                          {{ $t("quotation_prefix") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input id="quotation_prefix" name="quotation_prefix" v-model="form.quotation_prefix" type="text"
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary"
                          :class="{ 'is-invalid': errors.quotation_prefix }" placeholder="QUO-" required />
                        <div v-if="errors.quotation_prefix" class="invalid-feedback d-block mt-2">
                          {{ errors.quotation_prefix }}
                        </div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label document-prefix-label">
                          {{ $t("invoice_return_prefix") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input id="invoice_return_prefix" name="invoice_return_prefix"
                          v-model="form.invoice_return_prefix" type="text"
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary" :class="{
                            'is-invalid': errors.invoice_return_prefix,
                          }" placeholder="INVR-" required />
                        <div v-if="errors.invoice_return_prefix" class="invalid-feedback d-block mt-2">
                          {{ errors.invoice_return_prefix }}
                        </div>
                      </div>

                      <div class="col-md-6 mb-3">
                        <label class="form-label document-prefix-label">
                          {{ $t("purchase_return_prefix") }}
                          <span class="text-danger">*</span>
                        </label>
                        <input id="purchase_return_prefix" name="purchase_return_prefix"
                          v-model="form.purchase_return_prefix" type="text"
                          class="form-control form-control-lg border-0 shadow-sm rounded-pill px-4 text-primary w-100"
                          :class="{
                            'is-invalid': errors.purchase_return_prefix,
                          }" placeholder="PURR-" required />
                        <div v-if="errors.purchase_return_prefix" class="invalid-feedback d-block mt-2">
                          {{ errors.purchase_return_prefix }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Step 5: System Type Selection -->
                  <div v-if="currentStep === 5" class="wizard-step">
                    <h4 class="mb-4" style="color: #191E29; font-weight: 600; font-size: 24px;">{{ $t('system') ||
                      'النظام' }}</h4>
                    <div class="system-type-selection">
                      <h5 class="mb-3">{{ $t("what_system_type") }}</h5>
                      <p class="text-muted mb-4">
                        {{ $t("select_system_type_description") }}
                      </p>

                      <div class="row g-3">
                        <div class="col-md-4 mb-3">
                          <div class="system-type-card" :class="{
                            active: form.system_type === 'accounting',
                          }" @click.stop.prevent="selectSystemType('accounting')">
                            <div class="card-icon">
                              <i class="fas fa-calculator"></i>
                            </div>
                            <h6 class="mt-3 mb-2">
                              {{ $t("accounting_system") }}
                            </h6>
                            <p class="text-muted small">
                              {{ $t("accounting_system_description") }}
                            </p>
                          </div>
                        </div>

                        <div class="col-md-4 mb-3">
                          <div class="system-type-card" :class="{ active: form.system_type === 'pos' }"
                            @click.stop.prevent="selectSystemType('pos')">
                            <div class="card-icon">
                              <i class="fas fa-cash-register"></i>
                            </div>
                            <h6 class="mt-3 mb-2">{{ $t("point_of_sale") }}</h6>
                            <p class="text-muted small">
                              {{ $t("pos_system_description") }}
                            </p>
                          </div>
                        </div>

                        <div class="col-md-4 mb-3">
                          <div class="system-type-card" :class="{ active: form.system_type === 'both' }"
                            @click.stop.prevent="selectSystemType('both')">
                            <div class="system-badge">
                              <i class="fas fa-star"></i>
                              <span>{{ $t('most_requested') || 'الأكثر طلباً' }}</span>
                            </div>
                            <div class="card-icon">
                              <i class="fas fa-store"></i>
                            </div>
                            <h6 class="mt-3 mb-2">{{ $t("both_systems") }}</h6>
                            <p class="text-muted small">
                              {{ $t("both_systems_description") }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <input type="hidden" id="system_type" name="system_type" v-model="form.system_type" required />
                      <div v-if="errors.system_type" class="invalid-feedback d-block text-center mt-3">
                        {{ errors.system_type }}
                      </div>
                    </div>
                  </div>
                </form>

                <!-- Footer Actions -->
                <div class="mt-4 d-flex" style="gap: 10px;">
                  <button type="button" class="btn tenant-prev-btn" @click="previousStep"
                    :disabled="currentStep === 1 || loading" v-if="currentStep > 1">
                    <i :class="['fas', isRTL ? 'fa-chevron-right' : 'fa-chevron-left']"></i>
                  </button>

                  <button type="button" class="btn btn-lg px-4 tenant-submit-btn"
                    :class="{ 'tenant-submit-btn-full': currentStep === 1 }"
                    @click="currentStep === totalSteps ? submitForm() : nextStep()" :disabled="loading">
                    <span v-if="loading" class="spinner-border spinner-border-sm"
                      :class="isRTL ? 'ml-2' : 'mr-2'"></span>
                    <template v-else>
                      {{
                        currentStep === totalSteps
                          ? $t("complete_setup")
                          : $t("next")
                      }}
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
import Form from "vform";
import axios from "axios";
import PhoneNumberInput from "../components/PhoneNumberInput.vue";
import RTLMixin from "~/mixins/RTLMixin";

export default {
  name: "TenantInitialization",
  layout: "basic",
  middleware: [],

  mixins: [RTLMixin],

  components: {
    PhoneNumberInput,
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
      cropImageSrc: null,
      cropper: null,
      countriesData: [
        {
          code: "SA",
          nameKey: "Saudi Arabia",
          flag: "🇸🇦",
          flagImage: "https://flagcdn.com/w40/sa.png",
        },
        {
          code: "AE",
          nameKey: "United Arab Emirates",
          flag: "🇦🇪",
          flagImage: "https://flagcdn.com/w40/ae.png",
        },
        {
          code: "EG",
          nameKey: "Egypt",
          flag: "🇪🇬",
          flagImage: "https://flagcdn.com/w40/eg.png",
        },
        {
          code: "JO",
          nameKey: "Jordan",
          flag: "🇯🇴",
          flagImage: "https://flagcdn.com/w40/jo.png",
        },
        {
          code: "LB",
          nameKey: "Lebanon",
          flag: "🇱🇧",
          flagImage: "https://flagcdn.com/w40/lb.png",
        },
        {
          code: "MA",
          nameKey: "Morocco",
          flag: "🇲🇦",
          flagImage: "https://flagcdn.com/w40/ma.png",
        },
        {
          code: "TN",
          nameKey: "Tunisia",
          flag: "🇹🇳",
          flagImage: "https://flagcdn.com/w40/tn.png",
        },
        {
          code: "DZ",
          nameKey: "Algeria",
          flag: "🇩🇿",
          flagImage: "https://flagcdn.com/w40/dz.png",
        },
        {
          code: "KW",
          nameKey: "Kuwait",
          flag: "🇰🇼",
          flagImage: "https://flagcdn.com/w40/kw.png",
        },
        {
          code: "QA",
          nameKey: "Qatar",
          flag: "🇶🇦",
          flagImage: "https://flagcdn.com/w40/qa.png",
        },
        {
          code: "BH",
          nameKey: "Bahrain",
          flag: "🇧🇭",
          flagImage: "https://flagcdn.com/w40/bh.png",
        },
        {
          code: "OM",
          nameKey: "Oman",
          flag: "🇴🇲",
          flagImage: "https://flagcdn.com/w40/om.png",
        },
        {
          code: "YE",
          nameKey: "Yemen",
          flag: "🇾🇪",
          flagImage: "https://flagcdn.com/w40/ye.png",
        },
        {
          code: "IQ",
          nameKey: "Iraq",
          flag: "🇮🇶",
          flagImage: "https://flagcdn.com/w40/iq.png",
        },
        {
          code: "US",
          nameKey: "United States",
          flag: "🇺🇸",
          flagImage: "https://flagcdn.com/w40/us.png",
        },
        {
          code: "GB",
          nameKey: "United Kingdom",
          flag: "🇬🇧",
          flagImage: "https://flagcdn.com/w40/gb.png",
        },
        {
          code: "CA",
          nameKey: "Canada",
          flag: "🇨🇦",
          flagImage: "https://flagcdn.com/w40/ca.png",
        },
        {
          code: "AU",
          nameKey: "Australia",
          flag: "🇦🇺",
          flagImage: "https://flagcdn.com/w40/au.png",
        },
        {
          code: "DE",
          nameKey: "Germany",
          flag: "🇩🇪",
          flagImage: "https://flagcdn.com/w40/de.png",
        },
        {
          code: "FR",
          nameKey: "France",
          flag: "🇫🇷",
          flagImage: "https://flagcdn.com/w40/fr.png",
        },
        {
          code: "ES",
          nameKey: "Spain",
          flag: "🇪🇸",
          flagImage: "https://flagcdn.com/w40/es.png",
        },
        {
          code: "IT",
          nameKey: "Italy",
          flag: "🇮🇹",
          flagImage: "https://flagcdn.com/w40/it.png",
        },
        {
          code: "NL",
          nameKey: "Netherlands",
          flag: "🇳🇱",
          flagImage: "https://flagcdn.com/w40/nl.png",
        },
        {
          code: "BE",
          nameKey: "Belgium",
          flag: "🇧🇪",
          flagImage: "https://flagcdn.com/w40/be.png",
        },
        {
          code: "CH",
          nameKey: "Switzerland",
          flag: "🇨🇭",
          flagImage: "https://flagcdn.com/w40/ch.png",
        },
        {
          code: "AT",
          nameKey: "Austria",
          flag: "🇦🇹",
          flagImage: "https://flagcdn.com/w40/at.png",
        },
        {
          code: "SE",
          nameKey: "Sweden",
          flag: "🇸🇪",
          flagImage: "https://flagcdn.com/w40/se.png",
        },
        {
          code: "NO",
          nameKey: "Norway",
          flag: "🇳🇴",
          flagImage: "https://flagcdn.com/w40/no.png",
        },
        {
          code: "DK",
          nameKey: "Denmark",
          flag: "🇩🇰",
          flagImage: "https://flagcdn.com/w40/dk.png",
        },
        {
          code: "FI",
          nameKey: "Finland",
          flag: "🇫🇮",
          flagImage: "https://flagcdn.com/w40/fi.png",
        },
        {
          code: "PL",
          nameKey: "Poland",
          flag: "🇵🇱",
          flagImage: "https://flagcdn.com/w40/pl.png",
        },
        {
          code: "IE",
          nameKey: "Ireland",
          flag: "🇮🇪",
          flagImage: "https://flagcdn.com/w40/ie.png",
        },
        {
          code: "PT",
          nameKey: "Portugal",
          flag: "🇵🇹",
          flagImage: "https://flagcdn.com/w40/pt.png",
        },
        {
          code: "GR",
          nameKey: "Greece",
          flag: "🇬🇷",
          flagImage: "https://flagcdn.com/w40/gr.png",
        },
        {
          code: "LU",
          nameKey: "Luxembourg",
          flag: "🇱🇺",
          flagImage: "https://flagcdn.com/w40/lu.png",
        },
        {
          code: "TR",
          nameKey: "Turkey",
          flag: "🇹🇷",
          flagImage: "https://flagcdn.com/w40/tr.png",
        },
        {
          code: "IN",
          nameKey: "India",
          flag: "🇮🇳",
          flagImage: "https://flagcdn.com/w40/in.png",
        },
        {
          code: "CN",
          nameKey: "China",
          flag: "🇨🇳",
          flagImage: "https://flagcdn.com/w40/cn.png",
        },
        {
          code: "JP",
          nameKey: "Japan",
          flag: "🇯🇵",
          flagImage: "https://flagcdn.com/w40/jp.png",
        },
        {
          code: "KR",
          nameKey: "South Korea",
          flag: "🇰🇷",
          flagImage: "https://flagcdn.com/w40/kr.png",
        },
        {
          code: "BR",
          nameKey: "Brazil",
          flag: "🇧🇷",
          flagImage: "https://flagcdn.com/w40/br.png",
        },
        {
          code: "MX",
          nameKey: "Mexico",
          flag: "🇲🇽",
          flagImage: "https://flagcdn.com/w40/mx.png",
        },
        {
          code: "AR",
          nameKey: "Argentina",
          flag: "🇦🇷",
          flagImage: "https://flagcdn.com/w40/ar.png",
        },
        {
          code: "ZA",
          nameKey: "South Africa",
          flag: "🇿🇦",
          flagImage: "https://flagcdn.com/w40/za.png",
        },
        {
          code: "NG",
          nameKey: "Nigeria",
          flag: "🇳🇬",
          flagImage: "https://flagcdn.com/w40/ng.png",
        },
        {
          code: "KE",
          nameKey: "Kenya",
          flag: "🇰🇪",
          flagImage: "https://flagcdn.com/w40/ke.png",
        },
        {
          code: "PK",
          nameKey: "Pakistan",
          flag: "🇵🇰",
          flagImage: "https://flagcdn.com/w40/pk.png",
        },
        {
          code: "BD",
          nameKey: "Bangladesh",
          flag: "🇧🇩",
          flagImage: "https://flagcdn.com/w40/bd.png",
        },
        {
          code: "ID",
          nameKey: "Indonesia",
          flag: "🇮🇩",
          flagImage: "https://flagcdn.com/w40/id.png",
        },
        {
          code: "PH",
          nameKey: "Philippines",
          flag: "🇵🇭",
          flagImage: "https://flagcdn.com/w40/ph.png",
        },
        {
          code: "VN",
          nameKey: "Vietnam",
          flag: "🇻🇳",
          flagImage: "https://flagcdn.com/w40/vn.png",
        },
        {
          code: "TH",
          nameKey: "Thailand",
          flag: "🇹🇭",
          flagImage: "https://flagcdn.com/w40/th.png",
        },
        {
          code: "MY",
          nameKey: "Malaysia",
          flag: "🇲🇾",
          flagImage: "https://flagcdn.com/w40/my.png",
        },
        {
          code: "SG",
          nameKey: "Singapore",
          flag: "🇸🇬",
          flagImage: "https://flagcdn.com/w40/sg.png",
        },
        {
          code: "NZ",
          nameKey: "New Zealand",
          flag: "🇳🇿",
          flagImage: "https://flagcdn.com/w40/nz.png",
        },
        {
          code: "RU",
          nameKey: "Russia",
          flag: "🇷🇺",
          flagImage: "https://flagcdn.com/w40/ru.png",
        },
        {
          code: "UA",
          nameKey: "Ukraine",
          flag: "🇺🇦",
          flagImage: "https://flagcdn.com/w40/ua.png",
        },
        {
          code: "CZ",
          nameKey: "Czech Republic",
          flag: "🇨🇿",
          flagImage: "https://flagcdn.com/w40/cz.png",
        },
        {
          code: "HU",
          nameKey: "Hungary",
          flag: "🇭🇺",
          flagImage: "https://flagcdn.com/w40/hu.png",
        },
        {
          code: "RO",
          nameKey: "Romania",
          flag: "🇷🇴",
          flagImage: "https://flagcdn.com/w40/ro.png",
        },
        {
          code: "BG",
          nameKey: "Bulgaria",
          flag: "🇧🇬",
          flagImage: "https://flagcdn.com/w40/bg.png",
        },
        {
          code: "HR",
          nameKey: "Croatia",
          flag: "🇭🇷",
          flagImage: "https://flagcdn.com/w40/hr.png",
        },
        {
          code: "SI",
          nameKey: "Slovenia",
          flag: "🇸🇮",
          flagImage: "https://flagcdn.com/w40/si.png",
        },
        {
          code: "SK",
          nameKey: "Slovakia",
          flag: "🇸🇰",
          flagImage: "https://flagcdn.com/w40/sk.png",
        },
        {
          code: "EE",
          nameKey: "Estonia",
          flag: "🇪🇪",
          flagImage: "https://flagcdn.com/w40/ee.png",
        },
        {
          code: "LV",
          nameKey: "Latvia",
          flag: "🇱🇻",
          flagImage: "https://flagcdn.com/w40/lv.png",
        },
        {
          code: "LT",
          nameKey: "Lithuania",
          flag: "🇱🇹",
          flagImage: "https://flagcdn.com/w40/lt.png",
        },
        {
          code: "IS",
          nameKey: "Iceland",
          flag: "🇮🇸",
          flagImage: "https://flagcdn.com/w40/is.png",
        },
      ],
      select2Instance: null,
      form: new Form({
        country: "SA",
        company_name: "",
        company_logo: "",
        tax_number: "",
        company_tagline: "",
        email_address: "",
        phone_number: "",
        address: "",
        default_currency: "",
        invoice_prefix: "INV-",
        purchase_prefix: "PUR-",
        quotation_prefix: "QUO-",
        invoice_return_prefix: "INVR-",
        purchase_return_prefix: "PURR-",
        system_type: "",
      }),
      errors: {},
      taxNumberInvalid: false,
      taxNumberErrorMessage: "",
      taxNumberFormat: "",
      phoneNumberValid: false,
    };
  },

  computed: {
    // Make steps reactive to locale changes
    steps() {
      return [
        { title: this.$t("country") },
        { title: this.$t("company_info") },
        { title: this.$t("contact_details") },
        { title: this.$t("document_currency_settings") },
        { title: this.$t("system_type") },
      ];
    },
    // Countries with translated names
    countries() {
      return this.countriesData.map((country) => ({
        ...country,
        name: this.$t(country.nameKey) || country.nameKey,
        flagImage: country.flagImage,
      }));
    },
    // Tax number validation rules by country
    taxNumberRules() {
      return {
        SA: {
          pattern: /^3\d{14}$/,
          format: "3XXXXXXXXXXXXXX (15 digits)",
          message: this.$t
            ? this.$t(
              "Invalid Saudi VAT number. Must start with 3 and be 15 digits"
            )
            : "Invalid Saudi VAT number. Must start with 3 and be 15 digits",
        },
        AE: {
          pattern: /^\d{15}$/,
          format: "XXXXXXXXXXXXXXX (15 digits)",
          message: this.$t
            ? this.$t("Invalid UAE VAT number. Must be 15 digits")
            : "Invalid UAE VAT number. Must be 15 digits",
        },
        EG: {
          pattern: /^\d{9}$/,
          format: "XXXXXXXXX (9 digits)",
          message: this.$t
            ? this.$t("Invalid Egyptian tax number. Must be 9 digits")
            : "Invalid Egyptian tax number. Must be 9 digits",
        },
        KW: {
          pattern: /^\d{9}$/,
          format: "XXXXXXXXX (9 digits)",
          message: this.$t
            ? this.$t("Invalid Kuwait tax number. Must be 9 digits")
            : "Invalid Kuwait tax number. Must be 9 digits",
        },
        QA: {
          pattern: /^\d{8,9}$/,
          format: "XXXXXXXX or XXXXXXXX (8-9 digits)",
          message: this.$t
            ? this.$t("Invalid Qatari tax number. Must be 8-9 digits")
            : "Invalid Qatari tax number. Must be 8-9 digits",
        },
        BH: {
          pattern: /^\d{9}$/,
          format: "XXXXXXXXX (9 digits)",
          message: this.$t
            ? this.$t("Invalid Bahrain tax number. Must be 9 digits")
            : "Invalid Bahrain tax number. Must be 9 digits",
        },
        OM: {
          pattern: /^\d{9}$/,
          format: "XXXXXXXXX (9 digits)",
          message: this.$t
            ? this.$t("Invalid Omani tax number. Must be 9 digits")
            : "Invalid Omani tax number. Must be 9 digits",
        },
        GB: {
          pattern: /^GB\d{9}(\d{3})?$/,
          format: "GBXXXXXXXXX or GBXXXXXXXXXXXXX",
          message: this.$t
            ? this.$t(
              "Invalid UK VAT number. Must start with GB followed by 9 or 12 digits"
            )
            : "Invalid UK VAT number. Must start with GB followed by 9 or 12 digits",
        },
        US: {
          pattern: /^\d{2}-?\d{7}$/,
          format: "XX-XXXXXXX or XXXXXXXXX (9 digits)",
          message: this.$t
            ? this.$t("Invalid US EIN. Must be 9 digits")
            : "Invalid US EIN. Must be 9 digits",
        },
        CA: {
          pattern: /^\d{9}RT\d{4}$|^\d{15}$/,
          format: "XXXXXXXXXRTXXXX or XXXXXXXXXXXXXXX",
          message: this.$t
            ? this.$t("Invalid Canadian tax number")
            : "Invalid Canadian tax number",
        },
        DE: {
          pattern: /^DE\d{9}$/,
          format: "DEXXXXXXXXX (11 characters)",
          message: this.$t
            ? this.$t(
              "Invalid German VAT number. Must start with DE followed by 9 digits"
            )
            : "Invalid German VAT number. Must start with DE followed by 9 digits",
        },
        FR: {
          pattern: /^FR[A-Z0-9]{2}\d{9}$/,
          format: "FRXXXXXXXXXXX (11 characters)",
          message: this.$t
            ? this.$t("Invalid French VAT number. Must start with FR")
            : "Invalid French VAT number. Must start with FR",
        },
        ES: {
          pattern: /^ES[A-Z0-9]\d{7}[A-Z0-9]$/,
          format: "ESXXXXXXXXX (9 characters)",
          message: this.$t
            ? this.$t("Invalid Spanish VAT number. Must start with ES")
            : "Invalid Spanish VAT number. Must start with ES",
        },
        IT: {
          pattern: /^IT\d{11}$/,
          format: "ITXXXXXXXXXXX (13 characters)",
          message: this.$t
            ? this.$t(
              "Invalid Italian VAT number. Must start with IT followed by 11 digits"
            )
            : "Invalid Italian VAT number. Must start with IT followed by 11 digits",
        },
        TR: {
          pattern: /^\d{10}$/,
          format: "XXXXXXXXXX (10 digits)",
          message: this.$t
            ? this.$t("Invalid Turkish tax number. Must be 10 digits")
            : "Invalid Turkish tax number. Must be 10 digits",
        },
        IN: {
          pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
          format: "XXAAAAA####X#Z# (15 characters)",
          message: this.$t
            ? this.$t("Invalid Indian GST number")
            : "Invalid Indian GST number",
        },
        AU: {
          pattern: /^\d{11}$/,
          format: "XXXXXXXXXXX (11 digits)",
          message: this.$t
            ? this.$t("Invalid Australian ABN. Must be 11 digits")
            : "Invalid Australian ABN. Must be 11 digits",
        },
      };
    },
  },

  watch: {
    "form.country"(newCountry, oldCountry) {
      if (newCountry !== oldCountry) {
        // Sync Select2 value
        if (this.select2Instance && this.$refs.countrySelect) {
          const $ = window.jQuery;
          $(this.$refs.countrySelect).val(newCountry).trigger("change");
        }

        // Update tax number format when country changes
        if (newCountry && this.taxNumberRules[newCountry]) {
          this.taxNumberFormat = this.taxNumberRules[newCountry].format;
        } else {
          this.taxNumberFormat = "";
        }

        // Re-validate tax number if it exists
        if (this.form.tax_number && this.form.tax_number.trim()) {
          this.$nextTick(() => {
            this.validateTaxNumber();
          });
        }
      }
    },
    currentStep(newStep, oldStep) {
      // Destroy Select2 when leaving step 1
      if (oldStep === 1 && newStep !== 1) {
        this.destroySelect2();
      }

      // Initialize Select2 only when step 1 is shown
      if (newStep === 1) {
        this.$nextTick(() => {
          this.initSelect2();
        });
      }
    },
  },

  async mounted() {
    // Prevent multiple mounts from causing issues
    if (this._mounted) {
      return;
    }
    this._mounted = true;

    // Load Cropper.js library
    await this.loadCropperJS();

    // Load Select2 if not already loaded
    await this.loadSelect2();

    // Mark that we're on initialization page
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem("on_initialization_page", "true");
    }

    await this.fetchAppInfo();
    await this.fetchCurrencies();
    await this.fetchTenantCompanyName();
    await this.checkInitializationStatus();

    // Initialize tax number format if country is already selected
    if (this.form.country && this.taxNumberRules[this.form.country]) {
      this.taxNumberFormat = this.taxNumberRules[this.form.country].format;
    }

    // Initialize Select2 only if we're on step 1
    if (this.currentStep === 1) {
      this.$nextTick(() => {
        this.initSelect2();
      });
    }
  },

  beforeDestroy() {
    // Clear the flag when leaving the page
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem("on_initialization_page");
    }

    // Cleanup cropper
    if (this.cropper) {
      this.cropper.destroy();
      this.cropper = null;
    }

    // Cleanup Select2
    this.destroySelect2();
  },

  methods: {
    loadSelect2() {
      return new Promise((resolve) => {
        // Check if Select2 is already loaded
        if (window.jQuery && window.jQuery.fn && window.jQuery.fn.select2) {
          resolve();
          return;
        }

        // Check if jQuery is loaded
        if (!window.jQuery) {
          // Load jQuery first
          const jqueryScript = document.createElement("script");
          jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
          jqueryScript.onload = () => {
            // Then load Select2 CSS
            const cssLink = document.createElement("link");
            cssLink.rel = "stylesheet";
            cssLink.href =
              "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css";
            document.head.appendChild(cssLink);

            // Then load Select2 JS
            const select2Script = document.createElement("script");
            select2Script.src =
              "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";
            select2Script.onload = () => resolve();
            select2Script.onerror = () => resolve(); // Resolve anyway to not block
            document.body.appendChild(select2Script);
          };
          jqueryScript.onerror = () => resolve(); // Resolve anyway to not block
          document.body.appendChild(jqueryScript);
        } else {
          // jQuery is loaded, just load Select2
          const cssLink = document.createElement("link");
          cssLink.rel = "stylesheet";
          cssLink.href =
            "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css";
          document.head.appendChild(cssLink);

          const select2Script = document.createElement("script");
          select2Script.src =
            "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js";
          select2Script.onload = () => resolve();
          select2Script.onerror = () => resolve(); // Resolve anyway to not block
          document.body.appendChild(select2Script);
        }
      });
    },

    initSelect2() {
      // Only initialize if we're on step 1
      if (this.currentStep !== 1) {
        return;
      }

      if (!this.$refs.countrySelect) {
        return;
      }

      // Destroy existing instance if any
      if (this.select2Instance) {
        this.select2Instance.destroy();
        this.select2Instance = null;
      }

      // Wait for Select2 to be available
      if (!window.jQuery || !window.jQuery.fn.select2) {
        setTimeout(() => this.initSelect2(), 100);
        return;
      }

      const $ = window.jQuery;
      const self = this;

      // Initialize Select2
      this.select2Instance = $(this.$refs.countrySelect).select2({
        placeholder: this.getChooseCountryText(),
        allowClear: false,
        width: "100%",
        escapeMarkup: function (markup) {
          return markup; // Allow HTML rendering
        },
        templateResult: function (data) {
          if (!data.id) {
            return data.text;
          }

          const $option = $(data.element);
          const flagImage = $option.data("flag") || "";
          const countryName = data.text;

          if (flagImage) {
            return $(
              '<span><img src="' +
              flagImage +
              '" width="18" height="12" style="margin-right: 8px; vertical-align: middle;" /> ' +
              countryName +
              "</span>"
            );
          }

          return $("<span>" + countryName + "</span>");
        },
        templateSelection: function (data) {
          if (!data.id) {
            return data.text;
          }

          const $option = $(data.element);
          const flagImage = $option.data("flag") || "";
          const countryName = data.text;

          if (flagImage) {
            return $(
              '<span><img src="' +
              flagImage +
              '" width="18" height="12" style="margin-right: 8px; vertical-align: middle;" /> ' +
              countryName +
              "</span>"
            );
          }

          return $("<span>" + countryName + "</span>");
        },
      });

      // Add inline style to set height to 40px
      $(this.$refs.countrySelect)
        .next(".select2-container")
        .find(".select2-selection--single")
        .css("height", "40px");

      // Handle change event to sync with Vue model
      $(this.$refs.countrySelect).on("change", function () {
        self.form.country = $(this).val();
        self.onCountryChange();
      });

      // Set initial value if form.country is already set
      if (this.form.country) {
        $(this.$refs.countrySelect).val(this.form.country).trigger("change");
      }
    },

    destroySelect2() {
      if (this.select2Instance) {
        try {
          this.select2Instance.destroy();
        } catch (e) {
          // Ignore errors if already destroyed
        }
        this.select2Instance = null;
      }

      // Also remove any Select2 DOM elements that might persist
      if (window.jQuery) {
        const $ = window.jQuery;

        // Remove Select2 container next to country select
        if (this.$refs.countrySelect) {
          const $select = $(this.$refs.countrySelect);
          const $container = $select.next(".select2-container");
          if ($container.length) {
            $container.remove();
          }
        }

        // Remove any orphaned Select2 dropdowns and containers within the wizard
        const $wizard = $(".wizard-step");
        if ($wizard.length) {
          $wizard.find(".select2-container").remove();
          $wizard.find(".select2-dropdown").remove();
        }
      }
    },

    loadCropperJS() {
      return new Promise((resolve, reject) => {
        // Check if Cropper is already loaded
        if (window.Cropper) {
          resolve();
          return;
        }

        // Load CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css";
        document.head.appendChild(link);

        // Load JS
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.js";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Cropper.js"));
        document.body.appendChild(script);
      });
    },

    async fetchTenantCompanyName() {
      try {
        const response = await axios.get("/api/tenant/me");
        if (response.data && response.data.data) {
          // Pre-populate company name
          if (response.data.data.company) {
            this.form.company_name = response.data.data.company;
          }
          // Pre-populate email address
          if (response.data.data.email) {
            this.form.email_address = response.data.data.email;
          }
        }
      } catch (error) {
        // Silently handle 401 errors - user is not authenticated yet, which is fine
        if (error.response && error.response.status === 401) {
          // User is not authenticated, skip pre-populating data
          return;
        }
        // Only log non-401 errors
        console.error("Error fetching tenant data:", error);
      }
    },

    onLogoChange(e) {
      const file = e.target.files[0];
      if (!file) return;

      // Validate file type (exclude SVG as it doesn't need cropping)
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        toast.fire({
          type: "error",
          title: this.$t("Invalid file type"),
          text: this.$t("Please select a valid image file (JPG, PNG, or GIF)"),
        });
        return;
      }

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        toast.fire({
          type: "error",
          title: this.$t("File too large"),
          text: this.$t("Please select a file smaller than 2MB"),
        });
        return;
      }

      // Read file and show crop area
      const reader = new FileReader();
      reader.onloadend = () => {
        this.cropImageSrc = reader.result;
        this.$nextTick(() => {
          this.initCropper();
        });
      };
      reader.readAsDataURL(file);
    },

    initCropper() {
      if (!this.$refs.cropImage) return;

      // Destroy existing cropper if any
      if (this.cropper) {
        this.cropper.destroy();
      }

      // Initialize cropper with fixed aspect ratio (1:1 for square logo)
      this.cropper = new Cropper(this.$refs.cropImage, {
        aspectRatio: 1,
        viewMode: 1,
        dragMode: "move",
        autoCropArea: 0.8,
        restore: false,
        guides: true,
        center: true,
        highlight: false,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: false,
        minCropBoxWidth: 100,
        minCropBoxHeight: 100,
        ready: () => {
          // Set initial crop box size to 300x300
          const containerData = this.cropper.getContainerData();
          const cropBoxData = {
            width: 300,
            height: 300,
            left: (containerData.width - 300) / 2,
            top: (containerData.height - 300) / 2,
          };
          this.cropper.setCropBoxData(cropBoxData);
        },
      });
    },

    cropLogo() {
      if (!this.cropper) return;

      // Get cropped canvas
      const canvas = this.cropper.getCroppedCanvas({
        width: 300,
        height: 300,
        imageSmoothingEnabled: true,
        imageSmoothingQuality: "high",
      });

      // Convert to base64
      const croppedDataUrl = canvas.toDataURL("image/png");

      // Update form and preview
      this.form.company_logo = croppedDataUrl;
      this.logoPreview = croppedDataUrl;

      // Cleanup and reset
      this.cancelCrop();
    },

    cancelCrop() {
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
      }
      this.cropImageSrc = null;

      // Reset file input
      if (this.$refs.logoInput) {
        this.$refs.logoInput.value = "";
      }
    },

    removeLogo() {
      this.form.company_logo = "";
      this.logoPreview = null;
      if (this.$refs.logoInput) {
        this.$refs.logoInput.value = "";
      }
      // Cleanup cropper if exists
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
      }
    },

    onCountryChange() {
      // Auto-set currency to SAR if Saudi Arabia is selected
      if (this.form.country === "SA" && this.currencies.length > 0) {
        const sarCurrency = this.currencies.find((c) => c.code === "SAR");
        if (sarCurrency) {
          this.form.default_currency = sarCurrency.id;
        }
      }

      // Reset tax number validation when country changes
      this.taxNumberInvalid = false;
      this.taxNumberErrorMessage = "";
      this.taxNumberFormat = "";

      // Update tax number format display
      if (this.form.country && this.taxNumberRules[this.form.country]) {
        this.taxNumberFormat = this.taxNumberRules[this.form.country].format;
      }

      // Re-validate tax number if it exists
      if (this.form.tax_number && this.form.tax_number.trim()) {
        this.validateTaxNumber();
      }
    },

    validateTaxNumber() {
      // If tax number is empty, it's valid (optional field)
      if (!this.form.tax_number || !this.form.tax_number.trim()) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = "";
        return true;
      }

      // If no country selected, skip validation
      if (!this.form.country) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = "";
        return true;
      }

      // Get validation rule for selected country
      const rule = this.taxNumberRules[this.form.country];

      // If no rule exists for this country, allow any format
      if (!rule) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = "";
        this.taxNumberFormat = "";
        return true;
      }

      // Update format display
      this.taxNumberFormat = rule.format;

      // Remove spaces and convert to uppercase for validation
      const taxNumber = this.form.tax_number
        .trim()
        .replace(/\s+/g, "")
        .toUpperCase();

      // Test against pattern
      if (rule.pattern.test(taxNumber)) {
        this.taxNumberInvalid = false;
        this.taxNumberErrorMessage = "";
        return true;
      } else {
        this.taxNumberInvalid = true;
        this.taxNumberErrorMessage = rule.message;
        return false;
      }
    },

    getTaxNumberPlaceholder() {
      return this.$t("enter_tax_number");
    },

    getChooseCountryText() {
      const translation = this.$t("choose_country");
      // If translation key doesn't exist, $t returns the key itself
      // So we check if it's different from the key, otherwise use fallback
      return translation !== "choose_country" ? translation : "إختر الدولة";
    },

    onPhoneValidated(isValid) {
      this.phoneNumberValid = isValid;
      if (!isValid && this.form.phone_number) {
        // Clear the error if validation passes
        if (
          this.errors.phone_number &&
          this.errors.phone_number === this.$t("phone_invalid")
        ) {
          delete this.errors.phone_number;
        }
      }
    },

    async fetchCurrencies() {
      try {
        const response = await axios.get("/api/all-currencies");
        console.log("Currencies response:", response);

        // Handle the response structure properly
        if (response.data && response.data.data) {
          this.currencies = response.data.data;
        } else if (response.data) {
          this.currencies = response.data;
        }

        console.log("Currencies loaded:", this.currencies);

        // Auto-set SAR currency for Saudi Arabia
        if (this.form.country === "SA" && this.currencies.length > 0) {
          const sarCurrency = this.currencies.find((c) => c.code === "SAR");
          if (sarCurrency) {
            this.form.default_currency = sarCurrency.id;
          }
        }
      } catch (error) {
        console.error("Error fetching currencies:", error);
        console.error("Error details:", error.response);
      }
    },

    async fetchAppInfo() {
      try {
        const response = await axios.get("/api/general-settings", {
          timeout: 5000,
        });
        if (response.data) {
          const settings = response.data;
          this.appInfo = {
            blackLogo: settings.black_logo || "/images/black_logo.png",
            companyName: settings.company_name || "Arqam",
          };
        }
      } catch (error) {
        console.error("Error fetching app info:", error);
        // Use default values - don't let this block the page
        this.appInfo = {
          blackLogo: "/images/black_logo.png",
          companyName: "Arqam",
        };
      }
    },

    async checkInitializationStatus() {
      // Prevent multiple simultaneous checks
      if (this.statusChecked) {
        return;
      }

      this.statusChecked = true;

      try {
        const response = await axios.get("/api/tenant-initialization/check", {
          timeout: 5000,
        });

        if (
          response.data &&
          response.data.data &&
          response.data.data.is_initialized
        ) {
          this.initialized = true;
          // Clear session flags
          if (typeof sessionStorage !== "undefined") {
            sessionStorage.removeItem("on_initialization_page");
            sessionStorage.removeItem("cross_domain_login_processed");
          }
          // Use hard redirect to prevent middleware loops
          // Small delay to ensure state is set
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 100);
          return;
        }
        // If not initialized, show the form (default state)
        // Reset flag so it can be checked again if needed
        this.statusChecked = false;
      } catch (error) {
        console.error("Error checking initialization status:", error);
        // If there's an error, assume not initialized and show the form
        // Reset flag to allow retry
        this.statusChecked = false;
      }
    },

    nextStep() {
      // Step 1: Country
      if (this.currentStep === 1) {
        if (!this.form.country) {
          this.errors.country = this.$t("country_required");
          return;
        }
        this.errors = {};
      }
      // Step 2: Company Info
      else if (this.currentStep === 2) {
        if (!this.form.company_name) {
          this.errors.company_name = this.$t("company_name_required");
          return;
        }

        // Validate tax number if provided
        if (this.form.tax_number && this.form.tax_number.trim()) {
          if (!this.validateTaxNumber()) {
            this.errors.tax_number = this.taxNumberErrorMessage;
            return;
          }
        }

        this.errors = {};
      }
      // Step 3: Contact Details
      else if (this.currentStep === 3) {
        if (!this.form.email_address) {
          this.errors.email_address = this.$t("email_required");
          return;
        }
        if (!this.form.phone_number) {
          this.errors.phone_number = this.$t("phone_required");
          return;
        }
        if (!this.phoneNumberValid) {
          this.errors.phone_number = this.$t("phone_invalid");
          return;
        }
        this.errors = {};
      }
      // Step 4: Document Settings
      else if (this.currentStep === 4) {
        if (!this.form.default_currency) {
          this.errors.default_currency = this.$t("currency_required");
          return;
        }
        if (!this.form.invoice_prefix) {
          this.errors.invoice_prefix = this.$t("prefix_required");
          return;
        }
        if (!this.form.purchase_prefix) {
          this.errors.purchase_prefix = this.$t("prefix_required");
          return;
        }
        if (!this.form.quotation_prefix) {
          this.errors.quotation_prefix = this.$t("prefix_required");
          return;
        }
        if (!this.form.invoice_return_prefix) {
          this.errors.invoice_return_prefix = this.$t("prefix_required");
          return;
        }
        if (!this.form.purchase_return_prefix) {
          this.errors.purchase_return_prefix = this.$t("prefix_required");
          return;
        }
        this.errors = {};
      }
      // Step 5: System Type
      else if (this.currentStep === 5) {
        if (!this.form.system_type) {
          this.errors.system_type = this.$t("system_type_required");
          return;
        }
        this.errors = {};
      }

      this.currentStep++;
    },

    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    selectSystemType(type) {
      // Prevent any event bubbling that might trigger form submission
      this.form.system_type = type;
      // Clear any errors when selecting
      if (this.errors.system_type) {
        delete this.errors.system_type;
      }
    },

    async submitForm() {
      // Final validation
      let hasErrors = false;

      if (!this.form.country) {
        this.errors.country = this.$t("country_required");
        this.currentStep = 1;
        hasErrors = true;
      }
      if (!this.form.company_name) {
        this.errors.company_name = this.$t("company_name_required");
        if (!hasErrors) this.currentStep = 2;
        hasErrors = true;
      }
      // Validate tax number if provided
      if (this.form.tax_number && this.form.tax_number.trim()) {
        if (!this.validateTaxNumber()) {
          this.errors.tax_number = this.taxNumberErrorMessage;
          if (!hasErrors) this.currentStep = 2;
          hasErrors = true;
        }
      }
      if (!this.form.email_address) {
        this.errors.email_address = this.$t("email_required");
        if (!hasErrors) this.currentStep = 3;
        hasErrors = true;
      }
      if (!this.form.phone_number) {
        this.errors.phone_number = this.$t("phone_required");
        if (!hasErrors) this.currentStep = 3;
        hasErrors = true;
      } else if (!this.phoneNumberValid) {
        this.errors.phone_number = this.$t("phone_invalid");
        if (!hasErrors) this.currentStep = 3;
        hasErrors = true;
      }
      if (!this.form.default_currency) {
        this.errors.default_currency = this.$t("currency_required");
        if (!hasErrors) this.currentStep = 4;
        hasErrors = true;
      }
      if (!this.form.system_type) {
        this.errors.system_type = this.$t("system_type_required");
        if (!hasErrors) this.currentStep = 5;
        hasErrors = true;
      }

      if (hasErrors) {
        return;
      }

      this.loading = true;
      this.errors = {};

      try {
        await this.form.post("/api/tenant-initialization");

        toast.fire({
          type: "success",
          title: this.$t("setup_completed_successfully"),
        });

        this.initialized = true;

        // Clear any session flags that might interfere
        if (typeof sessionStorage !== "undefined") {
          sessionStorage.removeItem("cross_domain_login_processed");
          sessionStorage.removeItem("on_initialization_page");
        }

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // User is not authenticated, redirect to login
          toast.fire({
            type: "warning",
            title: this.$t("please_login_first"),
          });
          setTimeout(() => {
            window.location.href = "/login";
          }, 1000);
        } else if (error.response && error.response.data.errors) {
          this.errors = error.response.data.errors;
        } else {
          toast.fire({
            type: "error",
            title: this.$t("error_occurred"),
          });
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.tenant-initialization {
  min-height: 100vh;
  background: #ffffff;
  padding: 20px;
}

.tenant-initialization .form-label {
  font-family: "Almarai", sans-serif;
  font-weight: 500;
  font-size: 19px;
}

.tenant-initialization .document-prefix-label {
  font-weight: 400;
  font-size: 12px;
  color: #707685;
}

/* Input, Textarea, and Select styling */
.tenant-initialization input.form-control,
.tenant-initialization textarea.form-control,
.tenant-initialization select.form-control {
  border: 1px solid #cbd0dd !important;
  border-radius: 10px !important;
  border-width: 1px !important;
  box-shadow: none !important;
  padding: 3px 16px 10px 16px !important;
  font-size: 14px !important;
}

.tenant-initialization input.form-control::placeholder,
.tenant-initialization textarea.form-control::placeholder {
  color: #707685 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
}

.tenant-initialization select.form-control {
  color: #707685 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
}

.tenant-initialization select.form-control option {
  color: #000;
}

.tenant-initialization select.form-control option:first-child {
  color: #707685;
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

.progress-container::before {
  content: "";
  position: absolute;
  top: 12px;
  height: 2px;
  background: #e7f2f7;
  z-index: 1;
}

/* LTR (English) - line starts after first circle (no left border on first), ends before last circle (no right border on last) */
.progress-container:not(.rtl)::before {
  left: calc(12.5px + 8%);
  right: calc(12.5px + 8%);
}

/* RTL (Arabic) - line starts after first circle (no right border on first), ends before last circle (no left border on last) */
.progress-container.rtl::before {
  left: calc(12.5px + 8%);
  right: calc(12.5px + 8%);
}

.progress-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step-indicator {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #e7f2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
  transition: all 0.3s ease;
  border: none;
  font-size: 16px;
  font-weight: 600;
  z-index: 2;
}

.progress-item.active .step-indicator {
  background: #0775af;
  border: none;
  color: white;
}

.progress-item.completed .step-indicator {
  background: #28a745;
  border: none;
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
  color: #0775af;
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
  position: relative;
}

.system-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0.5px solid #2F8A3A;
  background: #F3FFF5;
  border-radius: 8px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #2F8A3A;
  z-index: 1;
}

.system-badge i {
  font-size: 10px;
}

.system-type-card:hover {
  border-color: #0775af;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(51, 160, 217, 0.1);
}

.system-type-card.active {
  border-color: #0775af;
  background: #f8fbff;
  box-shadow: 0 8px 20px rgba(51, 160, 217, 0.15);
  transform: translateY(-5px);
}

.card-icon {
  font-size: 48px;
  color: #0775af;
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
  color: #0775af !important;
}

.btn-primary {
  background-color: #0775af;
  border-color: #0775af;
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
    width: 25px;
    height: 25px;
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

.tenant-initialization .language-switcher-container {
  right: 20px;
  left: auto;
}

@media (max-width: 768px) {
  .tenant-initialization .language-switcher-container {
    right: 10px;
    left: auto;
  }
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

/* File Upload Area */
.file-upload-area {
  border: 2px dashed #dee2e6;
  border-radius: 15px;
  padding: 40px 20px;
  text-align: center;
  background: #f8f9fa;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.file-upload-area * {
  text-align: center;
}

.file-upload-area:hover {
  border-color: #0775af;
  background: #f0f7ff;
}

.file-upload-area.has-logo {
  padding: 20px;
  border-color: #28a745;
  background: #f0fff4;
}

.file-upload-label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  transition: all 0.3s ease;
}

.file-upload-label:hover {
  transform: translateY(-2px);
}

.upload-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0775af 0%, #2b8bc4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  box-shadow: 0 4px 15px rgba(51, 160, 217, 0.3);
  transition: all 0.3s ease;
}

.file-upload-label:hover .upload-icon-wrapper {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(51, 160, 217, 0.4);
}

.upload-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.upload-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.upload-subtitle {
  font-size: 13px;
  color: #6c757d;
}


.file-upload-area.has-logo .upload-icon-wrapper {
  background: linear-gradient(135deg, #28a745 0%, #218838 100%);
  box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
}

.file-upload-area.has-logo .upload-title {
  color: #28a745;
}

@media (max-width: 768px) {
  .file-upload-area {
    padding: 30px 15px;
  }

  .upload-icon-wrapper {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  .upload-title {
    font-size: 14px;
  }

  .upload-subtitle {
    font-size: 12px;
  }
}

.logo-preview-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo-preview-wrapper:hover .logo-preview-overlay {
  opacity: 1;
}

.logo-preview-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.logo-preview-image {
  width: 300px;
  height: 300px;
  object-fit: contain;
  display: block;
  background: #f8f9fa;
  border-radius: 10px;
}

/* Inline Crop Styles */
.logo-crop-wrapper {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 20px;
  border: 2px dashed #dee2e6;
}

.crop-container-inline {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  max-height: 400px;
  overflow: hidden;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.crop-image-inline {
  max-width: 100%;
  display: block;
}

.crop-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.crop-actions .btn {
  min-width: 120px;
}

/* Cropper.js overrides */
.crop-container-inline .cropper-container {
  max-height: 400px;
}

.crop-container-inline .cropper-view-box {
  outline: 2px solid #0775af;
  outline-offset: -2px;
}

@media (max-width: 768px) {
  .logo-crop-wrapper {
    padding: 15px;
  }

  .crop-container-inline {
    max-height: 300px;
  }

  .crop-actions {
    flex-direction: column;
  }

  .crop-actions .btn {
    width: 100%;
  }

  .logo-preview-image {
    width: 200px;
    height: 200px;
  }
}

.country-select {
  width: 100%;
}

/* Select2 styling for country select */
.country-select+.select2-container {
  width: 100% !important;
}

/* Override all height restrictions from Select2 min.css and app.scss */
.country-select+.select2-container .select2-selection--single,
.country-select+.select2-container--default .select2-selection--single,
.country-select+.select2-container .select2-selection--single {
  border: 1px solid #cbd0dd;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  min-height: 3rem;
  background-color: white;
  height: auto !important;
}

/* Remove height from base Select2 container selection */
.country-select+.select2-container .select2-selection {
  height: auto !important;
}

.country-select+.select2-container .select2-selection--single .select2-selection__rendered {
  padding: 0;
  line-height: 2rem;
  color: #333;
  display: flex;
  align-items: center;
}

.country-select+.select2-container .select2-selection--single .select2-selection__arrow {
  height: auto !important;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
}

.country-select.is-invalid+.select2-container .select2-selection--single {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.country-select+.select2-container .select2-dropdown {
  border-radius: 15px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  border: 1px solid #e9ecef;
}

.country-select+.select2-container .select2-results__option {
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
}

.country-select+.select2-container .select2-results__option:hover {
  background-color: #f8f9fa;
}

.country-select+.select2-container .select2-results__option--highlighted {
  background-color: #0775af;
  color: white;
}

.country-select+.select2-container .select2-results__option img {
  margin-right: 8px;
  vertical-align: middle;
}

.tenant-submit-btn {
  background: #0775af !important;
  border: 1px solid #0775af !important;
  padding: 12px;
  border-radius: 9px;
  color: #ffffff;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 87%;
}

.tenant-submit-btn-full {
  width: 100% !important;
}

.tenant-submit-btn:hover {
  background: #06608a !important;
  color: #ffffff;
}

.tenant-submit-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(7, 117, 175, 0.25);
}

.tenant-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.tenant-prev-btn {
  border: 1px solid #191E29 !important;
  border-radius: 10px !important;
  padding: 0 !important;
  color: #191E29;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 12%;
  background: transparent !important;
  height: auto;
}

.tenant-prev-btn:hover {
  background: #f8f9fa !important;
  color: #191E29;
}

.tenant-prev-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(25, 30, 41, 0.25);
}

.tenant-prev-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
