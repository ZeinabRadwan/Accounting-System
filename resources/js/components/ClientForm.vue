<template>
  <div :class="{ 'card-body': showCardBody }">
    <!-- Tab Navigation -->
    <div class="client-form-tabs">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button 
            class="nav-link" 
            :class="{ active: activeTab === 'required' }" 
            @click="switchTab('required')"
            type="button"
            role="tab">
            <i class="fas fa-check-circle mr-2"></i>
            {{ form.taxStatus === 'taxable' ? $t('ZATCA Required Information') : $t('Required Information') }}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button 
            class="nav-link" 
            :class="{ active: activeTab === 'additional' }" 
            @click="switchTab('additional')"
            type="button"
            role="tab">
            <i class="fas fa-info-circle mr-2"></i>
            {{ $t('Additional Information') }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Required Information Tab -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'required' }" role="tabpanel">
        <!-- Client Details Section -->
        <div class="form-card-enhanced">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-user-circle mr-2"></i>
              {{ $t("Client Details") }}
            </h5>
            <p class="card-header-subtitle" style="font-size: 13px; opacity: 0.9; margin-top: 6px; margin-bottom: 0;">
              {{ $t("Basic information about the client") }}
            </p>
          </div>
          <div class="card-body">
            <!-- Client Number, Type, and Tax Status in Single Row -->
            <div class="form-row-modern form-row-three">
              <!-- Client Number -->
              <div class="form-group form-col-third">
                <label for="codeNumber" class="form-label">
                  {{ $t("Client Number") }}
                </label>
                <input id="codeNumber" v-model="form.codeNumber" type="text" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('codeNumber') }" name="codeNumber"
                  :placeholder="$t('Auto-generated...')" readonly aria-readonly="true" />
                <small class="form-text form-helper-text">
                  <i class="fas fa-info-circle mr-1"></i>
                  {{ $t("Auto-generated") }}
                </small>
                <has-error :form="form" field="codeNumber" />
              </div>

              <!-- Client Type -->
              <div class="form-group form-col-third">
                <label class="form-label">{{ $t("Client Type") }}</label>
                <div class="radio-group-modern">
                  <label class="radio-option-modern" :class="{ 'active': form.type === 'Individual' }">
                    <input type="radio" v-model="form.type" value="Individual" />
                    <span class="radio-label-text">{{ $t("Individual") }}</span>
                  </label>
                  <label class="radio-option-modern" :class="{ 'active': form.type === 'Company' }">
                    <input type="radio" v-model="form.type" value="Company" />
                    <span class="radio-label-text">{{ $t("Business") }}</span>
                  </label>
                </div>
                <has-error :form="form" field="type" />
              </div>

              <!-- Tax Status -->
              <div class="form-group form-col-third">
                <label class="form-label">
                  {{ $t("Tax Status") }}
                </label>
                <div class="tax-status-options">
                  <div class="tax-status-row">
                    <label class="tax-status-card-compact"
                      :class="{ 'active': form.taxStatus === 'taxable', 'border-primary': form.taxStatus === 'taxable' }"
                      @click="form.taxStatus = 'taxable'">
                      <div class="tax-status-header-compact">
                        <input type="radio" v-model="form.taxStatus" value="taxable" class="tax-status-radio" />
                        <span class="tax-status-title-compact">{{ $t("Taxable") }}</span>
                      </div>
                    </label>
                    <label class="tax-status-card-compact"
                      :class="{ 'active': form.taxStatus === 'non_taxable', 'border-success': form.taxStatus === 'non_taxable' }"
                      @click="form.taxStatus = 'non_taxable'">
                      <div class="tax-status-header-compact">
                        <input type="radio" v-model="form.taxStatus" value="non_taxable" class="tax-status-radio" />
                        <span class="tax-status-title-compact">{{ $t("Non-Taxable") }}</span>
                      </div>
                    </label>
                  </div>
                </div>
                <has-error :form="form" field="taxStatus" />
              </div>
            </div>

            <!-- Individual Client Fields -->
            <div v-if="form.type === 'Individual'" class="client-type-fields">
              <div class="form-group">
                <label for="fullName" class="form-label">
                  {{ $t("Full Name") }}
                </label>
                <input id="fullName" v-model="form.fullName" type="text" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('fullName'), 'is-valid': form.fullName && !form.errors.has('fullName') }" 
                  name="fullName" :placeholder="$t('Enter full name')" />
                <has-error :form="form" field="fullName" />
              </div>

              <div class="form-row-modern">
                <div class="form-group form-col-half">
                  <label for="firstName" class="form-label">{{ $t("First Name") }}</label>
                  <input id="firstName" v-model="form.firstName" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('firstName'), 'is-valid': form.firstName && !form.errors.has('firstName') }" 
                    name="firstName" :placeholder="$t('Enter first name')" />
                  <has-error :form="form" field="firstName" />
                </div>
                <div class="form-group form-col-half">
                  <label for="lastName" class="form-label">{{ $t("Last Name") }}</label>
                  <input id="lastName" v-model="form.lastName" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('lastName'), 'is-valid': form.lastName && !form.errors.has('lastName') }" 
                    name="lastName" :placeholder="$t('Enter last name')" />
                  <has-error :form="form" field="lastName" />
                </div>
              </div>
            </div>

            <!-- Business Client Fields -->
            <div v-if="form.type === 'Company'" class="client-type-fields">
              <div class="form-group">
                <label for="businessName" class="form-label">
                  {{ $t("Business Name") }}
                </label>
                <input id="businessName" v-model="form.businessName" type="text" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('businessName'), 'is-valid': form.businessName && !form.errors.has('businessName') }" 
                  name="businessName" :placeholder="$t('Enter business name')" />
                <has-error :form="form" field="businessName" />
              </div>
            </div>

            <!-- Contact Information Section -->
            <div class="form-section-header" style="margin-top: 16px;">
              <h6 class="section-subtitle">
                <i class="fas fa-phone-alt mr-2"></i>
                {{ $t("Contact Information") }}
              </h6>
            </div>

            <div class="form-row-modern form-row-three">
              <div class="form-group form-col-third">
                <label for="phone" class="form-label">
                  {{ $t("Telephone") }}
                </label>
                <input id="phone" v-model="form.phone" type="text" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('phone'), 'is-valid': form.phone && !form.errors.has('phone') }" 
                  name="phone" :placeholder="$t('Enter telephone number')" />
                <has-error :form="form" field="phone" />
              </div>

              <div class="form-group form-col-third">
                <label class="form-label">
                  {{ $t("Mobile") }}
                  <span class="required-indicator">*</span>
                </label>
                <PhoneNumberInput v-model="form.phoneNumber" :required="true"
                  :country="form.country" :default-country="form.country || 'SA'" @validated="onPhoneValidated" />
                <has-error :form="form" field="phoneNumber" />
              </div>

              <div class="form-group form-col-third">
                <label for="email" class="form-label">
                  {{ $t("Email") }}
                </label>
                <input id="email" v-model="form.email" type="email" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('email'), 'is-valid': form.email && !form.errors.has('email') }" 
                  name="email" :placeholder="$t('Enter your email address')" />
                <small class="form-text form-helper-text">
                  {{ $t("Optional - Used for communications and notifications") }}
                </small>
                <has-error :form="form" field="email" />
              </div>
            </div>
          </div>
        </div>

        <!-- National Address Section -->
        <div class="form-card-enhanced">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-map-marked-alt mr-2"></i>
              {{ $t("National Address") }}
              <span v-if="form.taxStatus === 'taxable'" class="badge badge-warning ml-2" style="font-size: 11px; padding: 4px 8px; background: #F59E0B; color: #fff;">
                {{ $t("ZATCA Required") }}
              </span>
            </h5>
            <p class="card-header-subtitle" style="font-size: 13px; opacity: 0.9; margin-top: 6px; margin-bottom: 0;">
              {{ $t("Complete address information") }} <span v-if="form.taxStatus === 'taxable'">- {{ $t("All fields required for ZATCA compliance") }}</span>
            </p>
          </div>
          <div class="card-body">
            <div v-if="form.taxStatus === 'taxable'" class="alert alert-info" style="background: #E6F4FF; border-color: #33a0d9; color: #1E40AF; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 13px;">
              <i class="fas fa-exclamation-circle mr-2"></i>
              <strong>{{ $t("ZATCA Requirement:") }}</strong> {{ $t("For taxable clients, all address fields are mandatory. Please ensure all information is accurate.") }}
            </div>
            
            <!-- Country -->
            <div class="form-group">
              <label for="country" class="form-label">
                {{ $t("Country") }}
                <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
              </label>
              <v-select v-model="form.country" :options="countries" label="name" :reduce="option => option.code"
                :placeholder="$t('Select Country')" :searchable="true" :clearable="false" class="country-select country-select-modern"
                :class="{ 'is-invalid': form.errors.has('country'), 'is-valid': form.country && !form.errors.has('country') }" 
                @input="onCountryChange">
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
                <has-error :form="form" field="country" />
            </div>

            <!-- State/Region -->
            <div v-if="form.country !== 'SA'" class="form-group">
              <label for="state" class="form-label">{{ $t("State") }}</label>
              <input id="state" v-model="form.state" type="text" class="form-control form-control-modern"
                :class="{ 'is-invalid': form.errors.has('state'), 'is-valid': form.state && !form.errors.has('state') }" 
                name="state" :placeholder="$t('Enter state')" />
              <has-error :form="form" field="state" />
            </div>

            <!-- Region and Neighbourhood in Single Row (for Saudi Arabia) -->
            <template v-if="form.country === 'SA'">
              <div class="form-row-modern">
                <div class="form-group form-col-half">
                  <label for="saudi_region" class="form-label">
                    {{ $t("Region") }}
                    <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                  </label>
                  <v-select v-model="form.saudi_region" :options="saudiRegions" label="name"
                    :reduce="option => option.id" :placeholder="$t('Select Region')" :searchable="true"
                    :clearable="false" class="saudi-location-select saudi-location-select-modern"
                    :class="{ 'is-invalid': form.errors.has('saudi_region'), 'is-valid': form.saudi_region && !form.errors.has('saudi_region') }" 
                    @input="onSaudiRegionChange">
                      <template #option="{ name_ar, name_en }">
                        <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                      </template>
                      <template #selected-option="{ name_ar, name_en }">
                        <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                      </template>
                    </v-select>
                    <has-error :form="form" field="saudi_region" />
                </div>
                <div class="form-group form-col-half">
                  <label for="neighbourhood" class="form-label">
                    {{ $t("Neighbourhood") }}
                    <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                  </label>
                  <input id="neighbourhood" v-model="form.neighbourhood" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('neighbourhood'), 'is-valid': form.neighbourhood && !form.errors.has('neighbourhood') }" 
                    name="neighbourhood" :placeholder="$t('Enter neighbourhood')" />
                  <has-error :form="form" field="neighbourhood" />
                </div>
              </div>
            </template>

            <!-- City -->
            <transition name="fade">
              <div v-show="shouldShowCity" class="form-group city-field">
                <label for="city" class="form-label">
                  {{ $t("City") }}
                  <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                </label>
                <!-- Saudi Arabia City -->
                <template v-if="form.country === 'SA'">
                  <v-select v-if="saudiCities.length > 0" v-model="form.city" :options="saudiCities" label="name"
                    :reduce="option => option.name" :placeholder="$t('Select City')" :searchable="true"
                    :clearable="false" class="saudi-location-select saudi-location-select-modern"
                    :class="{ 'is-invalid': form.errors.has('city'), 'is-valid': form.city && !form.errors.has('city') }"
                    :disabled="!form.country || !form.saudi_region">
                    <template #option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                    <template #selected-option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                  </v-select>
                  <input v-else id="city" v-model="form.city" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('city'), 'is-valid': form.city && !form.errors.has('city') }" 
                    name="city" :placeholder="$t('Enter city name')" :disabled="!form.country || !form.saudi_region" />
                </template>
                <!-- Non-Saudi City -->
                <input v-else id="city" v-model="form.city" type="text" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('city'), 'is-valid': form.city && !form.errors.has('city') }" 
                  name="city" :placeholder="$t('Enter city')" :disabled="!form.country" />
                <has-error :form="form" field="city" />
              </div>
            </transition>

            <!-- Neighbourhood for non-Saudi countries -->
            <div v-if="form.country !== 'SA'" class="form-group">
              <label for="neighbourhood" class="form-label">
                {{ $t("Neighbourhood") }}
                <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
              </label>
              <input id="neighbourhood" v-model="form.neighbourhood" type="text" class="form-control form-control-modern"
                :class="{ 'is-invalid': form.errors.has('neighbourhood'), 'is-valid': form.neighbourhood && !form.errors.has('neighbourhood') }" 
                name="neighbourhood" :placeholder="$t('Enter neighbourhood')" />
              <has-error :form="form" field="neighbourhood" />
            </div>

            <!-- Street Name and Postal Code -->
            <div class="form-row-modern">
              <div class="form-group form-col-half">
                <label for="streetAddress1" class="form-label">
                  {{ $t("Street Name") }}
                  <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                </label>
                <input id="streetAddress1" v-model="form.streetAddress1" type="text" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('streetAddress1'), 'is-valid': form.streetAddress1 && !form.errors.has('streetAddress1') }" 
                  name="streetAddress1" :placeholder="$t('Enter street name')" />
                <has-error :form="form" field="streetAddress1" />
              </div>
              <div class="form-group form-col-half">
                <label for="postalCode" class="form-label">
                  {{ $t("Postal Code") }}
                  <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                </label>
                <input id="postalCode" v-model="form.postalCode" type="text" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('postalCode'), 'is-valid': form.postalCode && !form.errors.has('postalCode') }" 
                  name="postalCode" :placeholder="$t('Enter postal code')" />
                <has-error :form="form" field="postalCode" />
              </div>
            </div>

            <!-- Saudi National Address Fields - Building Number -->
            <div v-if="form.country === 'SA'">
              <div class="form-section-header">
                <h6 class="section-subtitle">
                  <i class="fas fa-building mr-2"></i>
                  {{ $t("Saudi National Address Details") }}
                  <span v-if="form.taxStatus === 'taxable'" class="badge badge-primary ml-2" style="font-size: 11px; padding: 4px 8px;">{{ $t("ZATCA Required") }}</span>
                </h6>
                <p v-if="form.taxStatus === 'taxable'" class="section-description" style="font-size: 13px; color: #6B7280; margin-top: 8px; margin-bottom: 0;">
                  <i class="fas fa-info-circle mr-1"></i>
                  {{ $t("All fields below are required by ZATCA for taxable clients") }}
                </p>
              </div>
              
              <div class="form-row-modern">
                <div class="form-group form-col-half">
                  <label for="buildingNumber" class="form-label">
                    {{ $t("Building Number") }}
                    <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                    <span v-else class="text-muted" style="font-weight: normal; font-size: 12px;">({{ $t("Optional") }})</span>
                  </label>
                  <input id="buildingNumber" v-model="form.buildingNumber" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('buildingNumber'), 'is-valid': form.buildingNumber && !form.errors.has('buildingNumber') }" 
                    name="buildingNumber" :placeholder="$t('Enter building number')" maxlength="5" />
                  <has-error :form="form" field="buildingNumber" />
                </div>
                <div class="form-group form-col-half">
                  <label for="streetNumber" class="form-label">
                    {{ $t("Street Number") }}
                    <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                    <span v-else class="text-muted" style="font-weight: normal; font-size: 12px;">({{ $t("Optional") }})</span>
                  </label>
                  <input id="streetNumber" v-model="form.streetNumber" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('streetNumber'), 'is-valid': form.streetNumber && !form.errors.has('streetNumber') }" 
                    name="streetNumber" :placeholder="$t('Enter street number')" maxlength="5" />
                  <has-error :form="form" field="streetNumber" />
                </div>
              </div>

              <!-- Saudi National Address Fields - Additional Numbers -->
              <div class="form-row-modern">
                <div class="form-group form-col-half">
                  <label for="districtNumber" class="form-label">
                    {{ $t("District Number") }}
                    <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                    <span v-else class="text-muted" style="font-weight: normal; font-size: 12px;">({{ $t("Optional") }})</span>
                  </label>
                  <input id="districtNumber" v-model="form.districtNumber" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('districtNumber'), 'is-valid': form.districtNumber && !form.errors.has('districtNumber') }" 
                    name="districtNumber" :placeholder="$t('Enter district number')" maxlength="5" />
                  <has-error :form="form" field="districtNumber" />
                </div>
                <div class="form-group form-col-half">
                  <label for="unitNumber" class="form-label">
                    {{ $t("Unit Number") }}
                    <span v-if="form.taxStatus === 'taxable'" class="required-indicator">*</span>
                    <span v-else class="text-muted" style="font-weight: normal; font-size: 12px;">({{ $t("Optional") }})</span>
                  </label>
                  <input id="unitNumber" v-model="form.unitNumber" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('unitNumber'), 'is-valid': form.unitNumber && !form.errors.has('unitNumber') }" 
                    name="unitNumber" :placeholder="$t('Enter unit number')" maxlength="5" />
                  <has-error :form="form" field="unitNumber" />
                </div>
              </div>
              
              <div class="form-group">
                <label for="additionalNumber" class="form-label">
                  {{ $t("Additional Number") }}
                  <span class="text-muted" style="font-weight: normal; font-size: 12px;">({{ $t("Optional") }})</span>
                </label>
                <input id="additionalNumber" v-model="form.additionalNumber" type="text" class="form-control form-control-modern"
                  :class="{ 
                    'is-invalid': form.errors.has('additionalNumber') || (form.additionalNumber && !isAdditionalNumberValid), 
                    'is-valid': form.additionalNumber && !form.errors.has('additionalNumber') && isAdditionalNumberValid 
                  }" 
                  name="additionalNumber" :placeholder="$t('Enter additional number')" maxlength="5" 
                  @input="validateAdditionalNumber" />
                <has-error :form="form" field="additionalNumber" />
                <!-- Inline validation alert -->
                <div v-if="form.additionalNumber && !isAdditionalNumberValid" class="alert alert-danger mt-2" role="alert">
                  <i class="fas fa-exclamation-triangle mr-2"></i>
                  <strong>{{ $t("Error") }}:</strong>
                  {{ $t("Additional Number must be numeric") }}
                </div>
              </div>
            </div>

            <!-- ZATCA Tax Information Fields (Required for Taxable Clients) -->
            <div v-if="form.taxStatus === 'taxable'">
              <div class="form-section-header">
                <h6 class="section-subtitle">
                  <i class="fas fa-file-invoice-dollar mr-2"></i>
                  {{ $t("ZATCA Tax Information") }}
                  <span class="badge badge-primary ml-2" style="font-size: 11px; padding: 4px 8px; background: #33a0d9;">{{ $t("Required") }}</span>
                </h6>
                <p class="section-description">
                  <i class="fas fa-info-circle mr-1"></i>
                  {{ $t("The following fields are required by ZATCA for taxable clients") }}
                </p>
              </div>
              <div class="form-row-modern">
                <div class="form-group form-col-half">
                  <label for="commercialRegister" class="form-label">
                    <i class="fas fa-building mr-1"></i>
                    {{ $t("Commercial Register") }}
                    <span class="required-indicator">*</span>
                  </label>
                  <input id="commercialRegister" v-model="form.commercialRegister" type="text" class="form-control form-control-modern"
                    :class="{ 
                      'is-invalid': form.errors.has('commercialRegister') || (form.commercialRegister && !isCommercialRegisterValid), 
                      'is-valid': form.commercialRegister && !form.errors.has('commercialRegister') && isCommercialRegisterValid 
                    }" 
                    name="commercialRegister" :placeholder="$t('Enter commercial register number')" 
                    @input="validateCommercialRegister" />
                  <small class="form-text form-helper-text" v-if="form.country === 'SA'">
                    <i class="fas fa-info-circle mr-1"></i>
                    {{ $t("Required for Saudi taxable companies (ZATCA)") }}
                  </small>
                  <has-error :form="form" field="commercialRegister" />
                  <!-- Inline validation alert -->
                  <div v-if="form.commercialRegister && !isCommercialRegisterValid" class="alert alert-danger mt-2" role="alert">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>{{ $t("Error") }}:</strong>
                    {{ $t("Commercial Register must be numeric") }}
                  </div>
                </div>
                <div class="form-group form-col-half">
                  <label for="taxRegistrationNumber" class="form-label">
                    <i class="fas fa-hashtag mr-1"></i>
                    {{ $t("Tax Registration Number (VAT)") }}
                    <span class="required-indicator">*</span>
                  </label>
                  <input id="taxRegistrationNumber" v-model="form.taxRegistrationNumber" type="text" class="form-control form-control-modern"
                    :class="{ 
                      'is-invalid': form.errors.has('taxRegistrationNumber') || (form.taxRegistrationNumber && !isTaxRegistrationNumberValid), 
                      'is-valid': form.taxRegistrationNumber && !form.errors.has('taxRegistrationNumber') && isTaxRegistrationNumberValid 
                    }" 
                    name="taxRegistrationNumber" :placeholder="$t('Enter 15-digit tax registration number')" maxlength="15" 
                    pattern="[0-9]{15}" 
                    @input="validateTaxRegistrationNumber" />
                  <small class="form-text form-helper-text">
                    <i class="fas fa-info-circle mr-1"></i>
                    {{ $t("Must be exactly 15 digits (ZATCA requirement)") }}
                  </small>
                  <has-error :form="form" field="taxRegistrationNumber" />
                  <!-- Inline validation alert -->
                  <div v-if="form.taxRegistrationNumber && !isTaxRegistrationNumberValid" class="alert alert-danger mt-2" role="alert">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>{{ $t("Error") }}:</strong>
                    {{ $t("Tax Number must be numeric") }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Business-specific fields (for non-taxable companies) -->
            <div v-if="form.type === 'Company' && form.taxStatus !== 'taxable'">
              <div class="form-section-header" style="margin-top: 16px;">
                <h6 class="section-subtitle">
                  <i class="fas fa-file-contract mr-2"></i>
                  {{ $t("Optional Business Information") }}
                </h6>
              </div>
              <div class="form-row-modern">
                <div class="form-group form-col-half">
                  <label for="commercialRegister" class="form-label">
                    {{ $t("CR") }} <span class="text-muted">({{ $t("Optional") }})</span>
                  </label>
                  <input id="commercialRegister" v-model="form.commercialRegister" type="text" class="form-control form-control-modern"
                    :class="{ 'is-invalid': form.errors.has('commercialRegister'), 'is-valid': form.commercialRegister && !form.errors.has('commercialRegister') }" 
                    name="commercialRegister" :placeholder="$t('Enter commercial register number')" />
                  <has-error :form="form" field="commercialRegister" />
                </div>
                <div class="form-group form-col-half">
                  <label for="taxCard" class="form-label">
                    {{ $t("Tax ID (Optional)") }}
                  </label>
                  <input id="taxCard" v-model="form.taxCard" type="text" class="form-control form-control-modern"
                    :class="{ 
                      'is-invalid': form.errors.has('taxCard') || (form.taxCard && !isTaxCardValid), 
                      'is-valid': form.taxCard && !form.errors.has('taxCard') && isTaxCardValid 
                    }" 
                    name="taxCard" :placeholder="$t('Enter tax ID number')" 
                    @input="validateTaxCard" />
                  <has-error :form="form" field="taxCard" />
                  <!-- Inline validation alert -->
                  <div v-if="form.taxCard && !isTaxCardValid" class="alert alert-danger mt-2" role="alert">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <strong>{{ $t("Error") }}:</strong>
                    {{ $t("Tax Number must be numeric") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Information Tab -->
      <div class="tab-pane fade" :class="{ 'show active': activeTab === 'additional' }" role="tabpanel">
        <!-- Account Details Section -->
        <div class="form-card-enhanced">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-cog mr-2"></i>
              {{ $t("Account Details") }}
            </h5>
            <p class="card-header-subtitle" style="font-size: 13px; opacity: 0.9; margin-top: 6px; margin-bottom: 0;">
              {{ $t("Account settings and preferences") }}
            </p>
          </div>
          <div class="card-body">
            <div class="form-row-modern">
              <div class="form-group form-col-half">
                <label for="displayLanguage" class="form-label">{{ $t("Display Language") }}</label>
                <select id="displayLanguage" v-model="form.displayLanguage" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('displayLanguage'), 'is-valid': form.displayLanguage && !form.errors.has('displayLanguage') }">
                  <option value="">{{ $t("Select Language") }}</option>
                  <option value="en">{{ $t("English") }}</option>
                  <option value="ar">{{ $t("Arabic") }}</option>
                </select>
                <has-error :form="form" field="displayLanguage" />
              </div>

              <div class="form-group form-col-half">
                <label for="status" class="form-label">{{ $t("Status") }}</label>
                <select id="status" v-model="form.status" class="form-control form-control-modern"
                  :class="{ 'is-invalid': form.errors.has('status'), 'is-valid': form.status && !form.errors.has('status') }">
                  <option value="1">{{ $t("Active") }}</option>
                  <option value="0">{{ $t("Inactive") }}</option>
                </select>
                <has-error :form="form" field="status" />
              </div>
            </div>

            <div class="form-group">
              <label for="image" class="form-label">{{ $t("Profile Image") }}</label>
              <div class="custom-file-enhanced">
                <input id="image" type="file" class="custom-file-input-enhanced" name="image"
                  :class="{ 'is-invalid': form.errors.has('image') }" @change="onFileChange" accept="image/*" />
                <label class="custom-file-label-enhanced" for="image">
                  <i class="fas fa-image mr-2"></i>
                  <span>{{ $t("Choose file") }}</span>
                </label>
              </div>
              <has-error :form="form" field="image" />
              <div class="image-preview-enhanced mt-3" v-if="url">
                <img :src="url" class="img-fluid rounded" :alt="$t('Profile Image')" />
              </div>
            </div>
          </div>
        </div>

        <!-- Client Representative Info Section -->
        <div v-if="form.type === 'Company'" class="form-card-enhanced">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-users mr-2"></i>
              {{ $t("Client Representative Info") }}
            </h5>
            <p class="card-header-subtitle" style="font-size: 13px; opacity: 0.9; margin-top: 6px; margin-bottom: 0;">
              {{ $t("Manage company representatives and authorized persons") }}
            </p>
          </div>
          <div class="card-body">
            <RepresentativesList :representatives="form.representatives || []"
              @representatives-changed="handleRepresentativesChanged" />
          </div>
        </div>

        <!-- Additional Fields Section -->
        <div class="form-card-enhanced">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-info-circle mr-2"></i>
              {{ $t("Additional Information") }}
            </h5>
            <p class="card-header-subtitle" style="font-size: 13px; opacity: 0.9; margin-top: 6px; margin-bottom: 0;">
              {{ $t("Optional notes and additional details") }}
            </p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="notes" class="form-label">{{ $t("Notes") }}</label>
              <textarea id="notes" v-model="form.notes" class="form-control form-control-modern"
                :class="{ 'is-invalid': form.errors.has('notes'), 'is-valid': form.notes && !form.errors.has('notes') }" 
                rows="4" :placeholder="$t('Enter additional notes')" />
              <has-error :form="form" field="notes" />
            </div>
          </div>
        </div>

        <!-- Documents & Settings Section -->
        <div class="form-card-enhanced">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-file-alt mr-2"></i>
              {{ $t("Documents & Settings") }}
            </h5>
            <p class="card-header-subtitle" style="font-size: 13px; opacity: 0.9; margin-top: 6px; margin-bottom: 0;">
              {{ $t("Upload attachments and manage document settings") }}
            </p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="attachments" class="form-label">{{ $t("Attachments") }}</label>
              <div class="file-upload-area-enhanced">
                <input id="attachments" type="file" class="file-input-enhanced" name="attachments"
                  :class="{ 'is-invalid': form.errors.has('attachments') }" @change="onFileChange" multiple
                  accept="image/jpeg,image/png,image/gif" />
                <div class="file-upload-content-enhanced">
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

        <!-- Chart of Account Section -->
    <div class="row mt-4" style="display: none;">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-chart-line mr-2"></i>
              {{ $t("Chart of Account") }}
            </h5>
          </div>
          <div class="card-body">




            <!-- Specify Per Each - Show dropdown and create button -->

          </div>
        </div>
      </div>
    </div>

    <!-- Automatic Routing Info Section -->
    <div class="row mt-4" style="display: none;">
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

        <!-- Communication Preferences Section -->
        <div class="form-card-enhanced">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-bell mr-2"></i>
              {{ $t("Communication Preferences") }}
            </h5>
            <p class="card-header-subtitle" style="font-size: 13px; opacity: 0.9; margin-top: 6px; margin-bottom: 0;">
              {{ $t("Configure welcome messages and notifications") }}
            </p>
          </div>
          <div class="card-body">
            <div class="form-row-modern">
              <div class="form-group form-col-half">
                <div class="d-flex align-items-center communication-toggle">
                  <toggle-button v-model="form.isSendEmail"
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.email_configured" />
                  <div class="toggle-label-group">
                    <span class="toggle-label">{{ $t("Send Welcome Email") }}</span>
                    <span v-if="!communicationConfig.loading && !communicationConfig.email_configured"
                      class="toggle-helper">
                      ({{ $t("Email not configured") }})
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group form-col-half">
                <div class="d-flex align-items-center communication-toggle">
                  <toggle-button v-model="form.isSendSMS"
                    :disabled="isDemoMode || communicationConfig.loading || !communicationConfig.sms_configured" />
                  <div class="toggle-label-group">
                    <span class="toggle-label">{{ $t("Send Welcome SMS") }}</span>
                    <span v-if="!communicationConfig.loading && !communicationConfig.sms_configured"
                      class="toggle-helper">
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
  </div>
</template>

<script>
import Form from "vform";
import { ToggleButton } from "vue-js-toggle-button";
import RepresentativesList from "./RepresentativesList.vue";
import PhoneNumberInput from "./PhoneNumberInput.vue";

import axios from 'axios';

export default {
  name: "ClientForm",
  components: {
    ToggleButton,
    RepresentativesList,
    PhoneNumberInput,
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
      activeTab: 'required', // Tab navigation state

      // Add missing properties
      routingSetting: null,
      loadingChartOfAccounts: false,
      chartOfAccountsError: null,
      chartOfAccounts: [],
      isCreatingAccount: false,

      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true,
      },

      // Phone number validation
      phoneNumberValid: false,
      // Numeric field validation flags
      isAdditionalNumberValid: true,
      isCommercialRegisterValid: true,
      isTaxCardValid: true,
      isTaxRegistrationNumberValid: true,

      // Saudi Arabia location data
      saudiRegions: [],
      saudiCities: [],
      loadingRegions: false,
      loadingCities: false,

      // Countries data with flags (same as tenant-initialization)
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
        if (newValue && newValue.main_account_id !== oldValue?.main_account_id) {
          console.log('Main account changed, reloading chart of accounts');
          this.loadChartOfAccounts();
        }
      },
      deep: true
    },

    // Watch for country changes - clear state when Saudi Arabia is selected
    'form.country': {
      handler(newValue) {
        if (newValue === 'SA') {
          // Clear state field when Saudi Arabia is selected
          this.form.state = '';
          // Load Saudi regions
          this.loadSaudiRegions();
        } else {
          // Clear Saudi-specific fields when switching away from SA
          this.form.saudi_region = null;
          this.saudiCities = [];
        }
      },
      immediate: true
    },

    // Watch for Saudi region changes - load cities
    'form.saudi_region': {
      handler(newValue) {
        if (newValue && this.form.country === 'SA') {
          this.loadSaudiCities(newValue);
        } else {
          this.saudiCities = [];
          this.form.city = '';
        }
      }
    },
    
    // Watch for numeric field changes to validate
    'form.additionalNumber': {
      handler() {
        this.validateAdditionalNumber();
      }
    },
    'form.commercialRegister': {
      handler() {
        this.validateCommercialRegister();
      }
    },
    'form.taxCard': {
      handler() {
        this.validateTaxCard();
      }
    },
    'form.taxRegistrationNumber': {
      handler() {
        this.validateTaxRegistrationNumber();
      }
    }
  },
  computed: {
    // Check if this is a new client
    isNewClient() {
      return !this.initialData || Object.keys(this.initialData).length === 0 ||
        (this.initialData.slug && this.initialData.slug === 'new');
    },
    // Countries with translated names
    countries() {
      return this.countriesData.map(country => ({
        ...country,
        name: this.$t(country.nameKey) || country.nameKey
      }));
    },
    // Determine if City field should be shown
    shouldShowCity() {
      if (this.form.country === 'SA') {
        // For Saudi Arabia, show City only when Region is selected
        return !!this.form.saudi_region;
      } else {
        // For non-Saudi countries, show City when Country is selected
        return !!this.form.country;
      }
    },
    
    // Check if form has numeric validation errors
    hasNumericValidationErrors() {
      return !this.isAdditionalNumberValid || 
             !this.isCommercialRegisterValid || 
             !this.isTaxCardValid || 
             !this.isTaxRegistrationNumberValid;
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
    
    // Validate numeric fields if they have initial values
    this.$nextTick(() => {
      this.validateAdditionalNumber();
      this.validateCommercialRegister();
      this.validateTaxCard();
      this.validateTaxRegistrationNumber();
    });

    // Load communication configuration status
    this.loadCommunicationConfigStatus();

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
    // Switch between tabs
    switchTab(tab) {
      this.activeTab = tab;
    },
    
    // Initialize the form
    initializeForm() {
      console.log('=== INITIALIZING FORM ===');
      console.log('Initial data:', this.initialData);

      this.form = new Form({
        // Account Details
        codeNumber: "", // Will be loaded from API
        notes: "",
        displayLanguage: "",

        // Client Details
        type: "Company",
        taxStatus: "non_taxable",
        fullName: "",
        businessName: "",
        firstName: "",
        lastName: "",
        phone: "",
        phoneNumber: "",
        email: "",
        streetAddress1: "",
        city: "",
        state: "",
        postalCode: "",
        country: "SA",
        saudi_region: null,
        neighbourhood: "",
        commercialRegister: "",
        taxCard: "",
        // Saudi National Address Fields
        buildingNumber: "",
        streetNumber: "",
        districtNumber: "",
        unitNumber: "",
        additionalNumber: "",

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
      // Skip if this is not a new client (editing existing client)
      if (this.initialData && this.initialData.slug && this.initialData.slug !== 'new') {
        console.log('Skipping next code number load - editing existing client');
        return;
      }

      try {
        console.log('=== LOADING NEXT CODE NUMBER ===');
        console.log('Current form codeNumber before API call:', this.form.codeNumber);

        const response = await axios.get('/clients/next-code');
        console.log('Next code API response:', response.data);

        // Check if we have formatted_code in the response (successful response)
        if (response.data && response.data.formatted_code) {
          this.form.codeNumber = response.data.formatted_code;
          console.log('Code number successfully loaded:', this.form.codeNumber);
          console.log('Debug info from API:', response.data.debug);
        } else if (response.data && response.data.success === false) {
          console.error('API returned error:', response.data.message);
          // Fallback to a default code for first client
          this.form.codeNumber = 'AC001';
          console.log('Using fallback code number:', this.form.codeNumber);
        } else {
          // Response structure might be different, try to extract formatted_code
          if (response.data && response.data.formatted_code) {
            this.form.codeNumber = response.data.formatted_code;
          } else {
            // Last resort fallback
            this.form.codeNumber = 'AC001';
            console.log('Using default fallback code number:', this.form.codeNumber);
          }
        }
      } catch (error) {
        console.error('Error loading next code number:', error);
        console.error('Error details:', error.response?.data || error.message);
        // Fallback to a default code instead of 'Loading...'
        // This ensures the form doesn't get stuck in loading state
        this.form.codeNumber = 'AC001';
        console.log('Using fallback code number due to error:', this.form.codeNumber);
      }
    },

    // Load communication configuration status
    async loadCommunicationConfigStatus() {
      try {
        console.log('=== LOADING COMMUNICATION CONFIG STATUS ===');
        this.communicationConfig.loading = true;

        const response = await axios.get('/api/communication-config-status');
        console.log('Communication config response:', response.data);

        this.communicationConfig.email_configured = response.data.email_configured;
        this.communicationConfig.sms_configured = response.data.sms_configured;
        this.communicationConfig.loading = false;

        console.log('Communication config loaded:', this.communicationConfig);
      } catch (error) {
        console.error('Error loading communication config status:', error);
        // Default to false if there's an error
        this.communicationConfig.email_configured = false;
        this.communicationConfig.sms_configured = false;
        this.communicationConfig.loading = false;
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
                this.$t("Error!"),
                this.$t("Please select a valid image file")
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
              this.$toast.error(
                this.$t("Error!"),
                this.$t("Only JPEG, PNG, and GIF files are allowed.")
              );
            }
          }
        } else {
          this.$toast.error(
            this.$t("Error!"),
            this.$t("Please select a file with size less than 2 MB")
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
      this.form.city = "";
      this.form.state = "";
      this.form.postalCode = "";
      this.form.neighbourhood = "";
      this.form.commercialRegister = "";
      this.form.taxCard = "";
      // Clear Saudi National Address Fields
      this.form.buildingNumber = "";
      this.form.unitNumber = "";
      this.form.additionalNumber = "";
      this.form.attachments = []; // Clear attachments
      this.form.image = null; // Clear image
      this.form.chartOfAccountId = null; // Clear chart of account

      // Clear image preview
      this.url = null;

      // Clear validation errors
      this.form.errors.clear();

      // Reset phone number validation
      this.phoneNumberValid = false;
      
      // Reset numeric field validation flags
      this.isAdditionalNumberValid = true;
      this.isCommercialRegisterValid = true;
      this.isTaxCardValid = true;
      this.isTaxRegistrationNumberValid = true;
    },

    // Handle country change
    onCountryChange() {
      // Clear state field when Saudi Arabia is selected (handled by watcher)
      // This method can be used for additional country-specific logic
    },

    // Load Saudi Arabia regions
    async loadSaudiRegions() {
      if (this.loadingRegions) return;

      this.loadingRegions = true;
      try {
        const response = await axios.get('/api/locations/saudi/regions');
        if (response.data.success) {
          this.saudiRegions = response.data.data.map(region => ({
            id: region.id,
            name: this.$i18n.locale === 'ar' ? region.name_ar : region.name_en,
            name_ar: region.name_ar,
            name_en: region.name_en,
            code: region.code
          }));
        }
      } catch (error) {
        console.error('Error loading Saudi regions:', error);
        this.$toast.error(this.$t('Error loading regions'));
      } finally {
        this.loadingRegions = false;
      }
    },

    // Load Saudi Arabia cities by region
    async loadSaudiCities(regionId) {
      if (!regionId) {
        this.saudiCities = [];
        return;
      }

      if (this.loadingCities) return;

      this.loadingCities = true;
      try {
        const response = await axios.get('/api/locations/saudi/cities-by-region', {
          params: { region_id: regionId }
        });
        if (response.data.success) {
          const cities = response.data.data || [];
          this.saudiCities = cities.map(city => ({
            id: city.id,
            name: this.$i18n.locale === 'ar' ? city.name_ar : city.name_en,
            name_ar: city.name_ar,
            name_en: city.name_en,
            region_id: city.region_id
          }));

          // If no cities found, add the region name as a city option
          if (this.saudiCities.length === 0) {
            const selectedRegion = this.saudiRegions.find(region => region.id === regionId);
            if (selectedRegion) {
              this.saudiCities = [{
                id: `region_${regionId}`,
                name: selectedRegion.name,
                name_ar: selectedRegion.name_ar,
                name_en: selectedRegion.name_en,
                region_id: regionId,
                is_region: true
              }];
            }
          }
        } else {
          // If API call failed, add region name as fallback
          const selectedRegion = this.saudiRegions.find(region => region.id === regionId);
          if (selectedRegion) {
            this.saudiCities = [{
              id: `region_${regionId}`,
              name: selectedRegion.name,
              name_ar: selectedRegion.name_ar,
              name_en: selectedRegion.name_en,
              region_id: regionId,
              is_region: true
            }];
          } else {
            this.saudiCities = [];
          }
        }
      } catch (error) {
        console.error('Error loading Saudi cities:', error);
        // If error occurred, add region name as fallback
        const selectedRegion = this.saudiRegions.find(region => region.id === regionId);
        if (selectedRegion) {
          this.saudiCities = [{
            id: `region_${regionId}`,
            name: selectedRegion.name,
            name_ar: selectedRegion.name_ar,
            name_en: selectedRegion.name_en,
            region_id: regionId,
            is_region: true
          }];
        } else {
          this.saudiCities = [];
        }
        // Don't show error toast for empty cities - it's normal for some regions
        if (error.response && error.response.status !== 404) {
          this.$toast.error(this.$t('Error loading cities'));
        }
      } finally {
        this.loadingCities = false;
      }
    },

    // Handle Saudi region change
    onSaudiRegionChange() {
      // Clear city when region changes
      this.form.city = '';
      this.saudiCities = [];
      // Cities will be loaded by watcher
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

      // Check if phone number is valid
      if (!this.phoneNumberValid) {
        console.log('Phone number validation failed - phoneNumberValid:', this.phoneNumberValid);
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Invalid phone number format"),
          });
        } else {
          alert(this.$t("Invalid phone number format"));
        }
        return false;
      }

      // Note: Business name and full name are optional now
      // Only ZATCA-required fields are validated (handled by backend)

      // Validate numeric fields
      if (this.hasNumericValidationErrors) {
        // Set errors on form for invalid numeric fields
        if (this.form.additionalNumber && !this.isAdditionalNumberValid) {
          this.form.errors.set('additionalNumber', [this.$t('Additional Number must be numeric')]);
        }
        if (this.form.commercialRegister && !this.isCommercialRegisterValid) {
          this.form.errors.set('commercialRegister', [this.$t('Commercial Register must be numeric')]);
        }
        if (this.form.taxCard && !this.isTaxCardValid) {
          this.form.errors.set('taxCard', [this.$t('Tax Number must be numeric')]);
        }
        if (this.form.taxRegistrationNumber && !this.isTaxRegistrationNumberValid) {
          this.form.errors.set('taxRegistrationNumber', [this.$t('Tax Number must be numeric')]);
        }
        
        // Show toast notification
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Validation Error"),
            text: this.$t("Please correct the numeric field errors"),
            timer: 5000,
            timerProgressBar: true,
          });
        }
        return false;
      }

      // For new clients, use the main account from routing setting if none selected
      if (this.isNewClient && this.routingSetting && this.routingSetting.main_account_id) {
        if (!this.form.chartOfAccountId) {
          // Use the main account from routing setting
          this.form.chartOfAccountId = this.routingSetting.main_account_id;
        }
      }

      return true;
    },
    
    // Validate Additional Number - must be numeric only
    validateAdditionalNumber() {
      const value = this.form.additionalNumber;
      if (!value || value.trim() === '') {
        this.isAdditionalNumberValid = true;
        this.form.errors.clear('additionalNumber');
        return;
      }
      // Remove any non-numeric characters
      const numericOnly = value.replace(/\D/g, '');
      if (numericOnly !== value) {
        this.form.additionalNumber = numericOnly;
      }
      // Check if value contains only digits
      const isNumeric = /^\d+$/.test(numericOnly.trim());
      this.isAdditionalNumberValid = isNumeric;
      if (!isNumeric) {
        this.form.errors.set('additionalNumber', [this.$t('Additional Number must be numeric')]);
      } else {
        this.form.errors.clear('additionalNumber');
      }
    },
    
    // Validate Commercial Register - must be numeric only
    validateCommercialRegister() {
      const value = this.form.commercialRegister;
      if (!value || value.trim() === '') {
        this.isCommercialRegisterValid = true;
        this.form.errors.clear('commercialRegister');
        return;
      }
      // Remove any non-numeric characters
      const numericOnly = value.replace(/\D/g, '');
      if (numericOnly !== value) {
        this.form.commercialRegister = numericOnly;
      }
      // Check if value contains only digits
      const isNumeric = /^\d+$/.test(numericOnly.trim());
      this.isCommercialRegisterValid = isNumeric;
      if (!isNumeric) {
        this.form.errors.set('commercialRegister', [this.$t('Commercial Register must be numeric')]);
      } else {
        this.form.errors.clear('commercialRegister');
      }
    },
    
    // Validate Tax Card - must be numeric only
    validateTaxCard() {
      const value = this.form.taxCard;
      if (!value || value.trim() === '') {
        this.isTaxCardValid = true;
        this.form.errors.clear('taxCard');
        return;
      }
      // Remove any non-numeric characters
      const numericOnly = value.replace(/\D/g, '');
      if (numericOnly !== value) {
        this.form.taxCard = numericOnly;
      }
      // Check if value contains only digits
      const isNumeric = /^\d+$/.test(numericOnly.trim());
      this.isTaxCardValid = isNumeric;
      if (!isNumeric) {
        this.form.errors.set('taxCard', [this.$t('Tax Number must be numeric')]);
      } else {
        this.form.errors.clear('taxCard');
      }
    },
    
    // Validate Tax Registration Number - must be numeric only
    validateTaxRegistrationNumber() {
      const value = this.form.taxRegistrationNumber;
      if (!value || value.trim() === '') {
        this.isTaxRegistrationNumberValid = true;
        this.form.errors.clear('taxRegistrationNumber');
        return;
      }
      // Remove any non-numeric characters
      const numericOnly = value.replace(/\D/g, '');
      if (numericOnly !== value) {
        this.form.taxRegistrationNumber = numericOnly;
      }
      // Check if value contains only digits
      const isNumeric = /^\d+$/.test(numericOnly.trim());
      this.isTaxRegistrationNumberValid = isNumeric;
      if (!isNumeric) {
        this.form.errors.set('taxRegistrationNumber', [this.$t('Tax Number must be numeric')]);
      } else {
        this.form.errors.clear('taxRegistrationNumber');
      }
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

    // Handle phone number validation
    onPhoneValidated(isValid) {
      this.phoneNumberValid = isValid;
      if (!isValid && this.form.phoneNumber) {
        // Clear the error if validation passes
        if (this.form.errors.has('phoneNumber') && this.form.errors.get('phoneNumber') === this.$t('phone_invalid')) {
          this.form.errors.clear('phoneNumber');
        }
      }
    },

    // Load routing settings
    async loadRoutingSettings() {
      try {
        console.log('Loading routing settings...');
        // Get current branch ID
        const user = this.$store.getters['auth/user'] || {}
        const branchId = user.default_branch_id || null

        if (!branchId) {
          console.error('Branch ID is required')
          this.routingSetting = { main_account_id: null }
          return
        }

        // Get the specific clients_account routing setting
        const response = await this.$http.get('/api/account-routing-settings', {
          params: { branch_id: branchId }
        })
        console.log('Routing settings response:', response)

        if (response.data && response.data.success) {
          console.log('Routing settings data:', response.data.data);
          // Find the clients_account setting
          this.routingSetting = response.data.data.find(setting => setting.setting_key === 'clients_account');
          console.log('Found clients_account setting:', this.routingSetting);

          if (this.routingSetting) {
            console.log('Routing setting loaded:', this.routingSetting);
          } else {
            console.log('No clients_account setting found in:', response.data.data);
            // Set a default routing setting if none found
            this.routingSetting = {
              main_account_id: null
            };
            console.log('Using default routing setting:', this.routingSetting);
          }
        } else {
          console.log('Routing settings response not successful:', response.data);
          // Set a default routing setting if API fails
          this.routingSetting = {
            main_account_id: null
          };
          console.log('Using default routing setting due to API failure:', this.routingSetting);
        }
      } catch (error) {
        console.error('Error loading routing settings:', error);
        // Set a default routing setting if error occurs
        this.routingSetting = {
          main_account_id: null
        };
        console.log('Using default routing setting due to error:', this.routingSetting);
      }
    },


    // Load chart of accounts with search functionality
    async loadChartOfAccounts() {
      try {
        console.log('Loading chart of accounts...');
        console.log('Current routing setting:', this.routingSetting);

        this.loadingChartOfAccounts = true;
        this.chartOfAccountsError = null;

        // Load accounts based on routing setting if available

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
          taxStatus: this.form.taxStatus || 'non_taxable',
          tax_status: this.form.taxStatus || 'non_taxable', // Also send as snake_case
          fullName: this.form.fullName,
          businessName: this.form.businessName,
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          phone: this.form.phone,
          phoneNumber: this.form.phoneNumber || '', // Explicitly include phone number, default to empty string
          email: this.form.email,
          streetAddress1: this.form.streetAddress1,
          streetAddress2: this.form.streetAddress2,
          city: this.form.city,
          state: this.form.state,
          postalCode: this.form.postalCode,
          country: this.form.country,
          neighbourhood: this.form.neighbourhood,
          saudi_region: this.form.saudi_region,
          commercialRegister: this.form.commercialRegister,
          taxCard: this.form.taxCard,

          // Saudi National Address Fields
          buildingNumber: this.form.buildingNumber,
          streetNumber: this.form.streetNumber,
          districtNumber: this.form.districtNumber,
          unitNumber: this.form.unitNumber,
          additionalNumber: this.form.additionalNumber,

          // Additional Fields
          image: this.form.image,
          attachments: this.form.attachments,
          isSendEmail: this.form.isSendEmail,
          isSendSMS: this.form.isSendSMS,

          // Map legacy fields for backward compatibility
          name: this.form.type === 'Individual' ? this.form.fullName : this.form.businessName,
          companyName: this.form.businessName,
          taxRegistrationNumber: this.form.taxRegistrationNumber || this.form.taxCard,
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
/* ============================================
   TAB NAVIGATION
   ============================================ */
.client-form-tabs {
  margin-bottom: 2rem;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 12px;
}

.client-form-tabs .nav-tabs {
  display: flex;
  gap: 0.5rem;
  border: none;
  margin: 0;
  padding: 0;
}

.client-form-tabs .nav-item {
  flex: 1;
}

.client-form-tabs .nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #6b7280;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.client-form-tabs .nav-link:hover {
  background: #e5e7eb;
  color: #374151;
}

.client-form-tabs .nav-link.active {
  background: #0775AF;
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(7, 117, 175, 0.2);
}

.client-form-tabs .nav-link i {
  margin-right: 8px;
  font-size: 16px;
}

[dir="rtl"] .client-form-tabs .nav-link i {
  margin-right: 0;
  margin-left: 8px;
}

/* ============================================
   TAB CONTENT
   ============================================ */
.tab-content {
  margin-top: 0;
}

.tab-pane {
  display: none;
}

.tab-pane.show.active {
  display: block;
  animation: fadeIn 0.3s ease;
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

/* ============================================
   FORM CARDS
   ============================================ */
.form-card-enhanced {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.form-card-enhanced:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}

.form-card-enhanced .card-header {
  background: #eceff3;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.form-card-enhanced .section-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.form-card-enhanced .section-title i {
  color: #0775AF;
  font-size: 20px;
}

.form-card-enhanced .card-header-subtitle {
  font-size: 13px;
  color: #6b7280;
  margin-top: 6px;
  margin-bottom: 0;
  font-weight: 400;
  line-height: 1.5;
}

.form-card-enhanced .card-body {
  padding: 24px;
}

/* ============================================
   FORM CONTROLS
   ============================================ */
.form-group {
  margin-bottom: 24px;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
}

.form-label i {
  color: #0775AF;
  margin-right: 6px;
}

[dir="rtl"] .form-label i {
  margin-right: 0;
  margin-left: 6px;
}

.required-indicator {
  color: #dc2626;
  font-weight: 600;
  margin-left: 4px;
}

.form-control-modern,
.form-control {
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #111827;
  background-color: #ffffff;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  transition: all 0.2s ease;
  height: 44px;
}

.form-control-modern:focus,
.form-control:focus {
  outline: none;
  border-color: #0775AF;
  box-shadow: 0 0 0 3px rgba(7, 117, 175, 0.1);
  background-color: #ffffff;
}

.form-control-modern::placeholder,
.form-control::placeholder {
  color: #9ca3af;
}

.form-control-modern[readonly] {
  background-color: #f9fafb;
  color: #6b7280;
  cursor: not-allowed;
}

/* Validation States */
.form-control-modern.is-valid,
.form-control.is-valid {
  border-color: #10b981;
  padding-right: 40px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2310b981' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
}

.form-control-modern.is-invalid,
.form-control.is-invalid {
  border-color: #ef4444;
  padding-right: 40px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23ef4444'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath d='m5.8 3.6.4.4.4-.4'/%3e%3cpath d='m6.2 8.4-.4-.4-.4.4'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;
}

/* Textarea */
textarea.form-control-modern,
textarea.form-control {
  min-height: 100px;
  resize: vertical;
  padding: 12px 16px;
  line-height: 1.6;
}

/* Select */
select.form-control-modern,
select.form-control {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23374151' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 12px;
  padding-right: 40px;
  appearance: none;
  cursor: pointer;
}

select.form-control-modern:focus,
select.form-control:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%230775AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
}

/* ============================================
   FORM LAYOUT
   ============================================ */
.form-row-modern {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 0;
}

.form-row-three {
  grid-template-columns: repeat(3, 1fr);
}

.form-col-half {
  width: 100%;
}

.form-col-third {
  width: 100%;
}

@media (max-width: 1200px) {
  .form-row-three {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .form-row-three .form-col-third:last-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .form-row-modern,
  .form-row-three {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .form-row-three .form-col-third:last-child {
    grid-column: 1;
  }
}

/* ============================================
   RADIO GROUPS
   ============================================ */
.radio-group-modern {
  display: flex;
  gap: 12px;
}

.radio-option-modern {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  height: 44px;
}

.radio-option-modern:hover {
  border-color: #0775AF;
  background: #f0f9ff;
}

.radio-option-modern.active {
  border-color: #0775AF;
  background: #e6f4ff;
  box-shadow: 0 0 0 3px rgba(7, 117, 175, 0.1);
}

.radio-option-modern input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.radio-label-text {
  font-weight: 500;
  color: #374151;
  font-size: 14px;
}

.radio-option-modern.active .radio-label-text {
  color: #0775AF;
  font-weight: 600;
}

/* ============================================
   TAX STATUS CARDS
   ============================================ */
.tax-status-options {
  margin-top: 8px;
}

.tax-status-row {
  display: flex;
  gap: 8px;
}

.tax-status-row .tax-status-card-compact {
  flex: 1;
  min-width: 0;
}

.tax-status-card-compact {
  display: flex;
  align-items: center;
  padding: 0;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 44px;
}

.tax-status-card-compact:hover {
  border-color: #0775AF;
  box-shadow: 0 2px 8px rgba(7, 117, 175, 0.15);
}

.tax-status-card-compact.active {
  border-color: #0775AF;
  background: #f0f9ff;
  box-shadow: 0 0 0 3px rgba(7, 117, 175, 0.1);
}

.tax-status-card-compact.border-success.active {
  border-color: #10b981;
  background: #f0fdf4;
}

.tax-status-card-compact.border-success.active .tax-status-title-compact {
  color: #10b981;
  font-weight: 600;
}

.tax-status-header-compact {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 12px;
}

.tax-status-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}


.tax-status-title-compact {
  font-weight: 500;
  font-size: 14px;
  color: #374151;
  text-align: center;
}

.tax-status-card-compact.active .tax-status-title-compact {
  color: #0775AF;
}

.tax-status-card-compact.border-success.active .tax-status-title-compact {
  color: #10b981;
}

/* ============================================
   SECTION DIVIDERS & HEADERS
   ============================================ */
.form-section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%);
  margin: 28px 0;
  border: none;
}

.form-section-header {
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 13px;
  font-weight: 700;
  color: #4b5563;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-subtitle i {
  color: #0775AF;
  font-size: 14px;
  background: #e6f4ff;
  padding: 6px;
  border-radius: 6px;
}

.section-description {
  font-size: 13px;
  color: #6b7280;
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 1.5;
}

.section-description i {
  color: #0775AF;
  margin-right: 6px;
}

/* ============================================
   HELPER TEXT & ERRORS
   ============================================ */
.form-helper-text {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
}

.form-helper-text i {
  color: #0775AF;
  font-size: 11px;
  margin-right: 6px;
}

.invalid-feedback {
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-size: 13px;
  color: #ef4444;
  font-weight: 500;
}

/* ============================================
   V-SELECT STYLING
   ============================================ */
.country-select-modern .vs__dropdown-toggle,
.saudi-location-select-modern .vs__dropdown-toggle {
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  padding: 10px 14px;
  min-height: 44px;
  background: #ffffff;
  transition: all 0.2s ease;
}

.country-select-modern.is-valid .vs__dropdown-toggle,
.saudi-location-select-modern.is-valid .vs__dropdown-toggle {
  border-color: #10b981;
}

.country-select-modern.is-invalid .vs__dropdown-toggle,
.saudi-location-select-modern.is-invalid .vs__dropdown-toggle {
  border-color: #ef4444;
}

.country-select-modern .vs__dropdown-toggle:focus,
.country-select-modern .vs__dropdown-toggle.vs__open,
.saudi-location-select-modern .vs__dropdown-toggle:focus,
.saudi-location-select-modern .vs__dropdown-toggle.vs__open {
  border-color: #0775AF;
  box-shadow: 0 0 0 3px rgba(7, 117, 175, 0.1);
  outline: none;
}

/* ============================================
   FILE UPLOAD
   ============================================ */
.custom-file-enhanced {
  position: relative;
  display: block;
}

.custom-file-input-enhanced {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
}

.custom-file-label-enhanced {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  background: #f9fafb;
  color: #374151;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 50px;
}

.custom-file-label-enhanced:hover {
  border-color: #0775AF;
  background: #f0f9ff;
}

.custom-file-label-enhanced i {
  color: #0775AF;
  margin-right: 8px;
}

.image-preview-enhanced {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 12px;
  background: #f9fafb;
  display: inline-block;
  margin-top: 12px;
}

.image-preview-enhanced img {
  max-height: 120px;
  border-radius: 6px;
}

.file-upload-area-enhanced {
  position: relative;
  border: 2px dashed #0775AF;
  border-radius: 10px;
  padding: 32px 24px;
  text-align: center;
  background: #f0f9ff;
  transition: all 0.2s ease;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-upload-area-enhanced:hover {
  border-color: #065a8a;
  background: #e6f4ff;
}

.file-upload-area-enhanced .file-input-enhanced {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
}

.file-upload-content-enhanced {
  color: #0775AF;
  pointer-events: none;
}

.file-upload-content-enhanced i {
  font-size: 32px;
  margin-bottom: 12px;
  display: block;
  opacity: 0.8;
}

.file-upload-content-enhanced p {
  font-size: 15px;
  font-weight: 500;
  margin: 8px 0;
  color: #111827;
}

.file-upload-content-enhanced small {
  font-size: 13px;
  color: #6b7280;
}

.selected-files {
  margin-top: 12px;
}

.selected-file-item {
  display: inline-flex;
  align-items: center;
  background: #f0f9ff;
  border: 1px solid #0775AF;
  border-radius: 6px;
  padding: 8px 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 13px;
}

.selected-file-item i {
  color: #0775AF;
  margin-right: 8px;
}

/* ============================================
   COMMUNICATION TOGGLES
   ============================================ */
.communication-toggle {
  padding: 16px;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.toggle-label-group {
  display: flex;
  flex-direction: column;
  margin-left: 12px;
}

.toggle-label {
  font-weight: 600;
  color: #111827;
  font-size: 14px;
}

.toggle-helper {
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
}

/* ============================================
   ALERTS & BADGES
   ============================================ */
.alert {
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 13px;
  border: 1px solid;
}

.alert-info {
  background: #e6f4ff;
  border-color: #0775AF;
  color: #065a8a;
}

.badge {
  display: inline-block;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
}

.badge-primary {
  background: #0775AF;
  color: #ffffff;
}

.badge-warning {
  background: #f59e0b;
  color: #ffffff;
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
  .form-card-enhanced .card-header {
    padding: 16px 20px;
  }

  .form-card-enhanced .card-body {
    padding: 20px;
  }

  .form-row-modern {
    grid-template-columns: 1fr;
  }

  .radio-group-modern {
    flex-direction: column;
  }

  .col-form-6 {
    width: 100%;
  }
}

/* ============================================
   RTL SUPPORT
   ============================================ */

[dir="rtl"] .section-description i {
  margin-right: 0;
  margin-left: 6px;
}

[dir="rtl"] .form-helper-text i {
  margin-right: 0;
  margin-left: 6px;
}

[dir="rtl"] .form-control-modern.is-valid,
[dir="rtl"] .form-control.is-valid {
  padding-right: 16px;
  padding-left: 40px;
  background-position: left 12px center;
}

[dir="rtl"] .form-control-modern.is-invalid,
[dir="rtl"] .form-control.is-invalid {
  padding-right: 16px;
  padding-left: 40px;
  background-position: left 12px center;
}

[dir="rtl"] select.form-control-modern,
[dir="rtl"] select.form-control {
  padding-left: 40px;
  padding-right: 16px;
  background-position: left 12px center;
}

/* ============================================
   UTILITIES
   ============================================ */
.col-form-6 {
  width: 50%;
}

@media (max-width: 1300px) {
  .col-form-6 {
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>