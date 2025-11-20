<template>
  <div :class="{ 'card-body': showCardBody }">
    <!-- Supplier Details Section - Now First -->
    <div class="row">
      <div :class="sectionColumnClass">
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

            <div class="form-group">
              <label class="form-label font-weight-bold text-primary mb-2 d-block">
                <i class="fas fa-receipt mr-2"></i>
                {{ $t("Tax Status") }}
                <span class="required text-danger">*</span>
              </label>
              <div class="tax-status-options">
                <div class="row">
                  <div class="col-md-6">
                    <label 
                      class="tax-status-card-compact" 
                      :class="{ 'active': form.taxStatus === 'taxable', 'border-primary': form.taxStatus === 'taxable' }"
                      @click="setTaxStatus('taxable')"
                    >
                      <div class="tax-status-header-compact">
                        <input 
                          type="radio" 
                          :checked="form.taxStatus === 'taxable'"
                          value="taxable" 
                          class="tax-status-radio"
                          @change="setTaxStatus('taxable')"
                          @click.stop="setTaxStatus('taxable')"
                        />
                        <div class="tax-status-icon-compact taxable-icon">
                          <i class="fas fa-file-invoice-dollar"></i>
                        </div>
                        <span class="tax-status-title-compact">{{ $t("Taxable") }}</span>
                      </div>
                    </label>
                  </div>
                  <div class="col-md-6">
                    <label 
                      class="tax-status-card-compact" 
                      :class="{ 'active': form.taxStatus === 'non_taxable', 'border-success': form.taxStatus === 'non_taxable' }"
                      @click="setTaxStatus('non_taxable')"
                    >
                      <div class="tax-status-header-compact">
                        <input 
                          type="radio" 
                          :checked="form.taxStatus === 'non_taxable'"
                          value="non_taxable" 
                          class="tax-status-radio"
                          @change="setTaxStatus('non_taxable')"
                          @click.stop="setTaxStatus('non_taxable')"
                        />
                        <div class="tax-status-icon-compact non-taxable-icon">
                          <i class="fas fa-file-invoice"></i>
                        </div>
                        <span class="tax-status-title-compact">{{ $t("Non-Taxable") }}</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <has-error :form="form" field="taxStatus" />
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
                <PhoneNumberInput
                  v-model="form.phoneNumber"
                  :label="$t('Mobile')"
                  :required="true"
                  :country="form.country"
                  :default-country="form.country || 'SA'"
                  @validated="onPhoneValidated"
                />
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

      <!-- National Address Section - Now Second, beside Supplier Details -->
      <div :class="sectionColumnClass">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-map-marked-alt mr-2"></i>
              {{ $t("National Address") }}
            </h5>
          </div>
          <div class="card-body">
            <!-- Country and Region -->
            <div class="row">
              <div class="form-group col-md-6">
                <label for="country">
                  {{ $t("Country") }} 
                  <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                </label>
                <v-select
                  v-model="form.country"
                  :options="countries"
                  label="name"
                  :reduce="option => option.code"
                  :placeholder="$t('Select Country')"
                  :searchable="true"
                  :clearable="false"
                  class="country-select"
                  :class="{ 'is-invalid': form.errors.has('country') }"
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
                <has-error :form="form" field="country" />
              </div>
              <div v-if="form.country !== 'SA'" class="form-group col-md-6">
                <label for="state">{{ $t("State") }}</label>
                <input id="state" v-model="form.state" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('state') }" name="state"
                  :placeholder="$t('Enter state')" />
                <has-error :form="form" field="state" />
              </div>
              
              <!-- Saudi Arabia Region -->
              <template v-if="form.country === 'SA'">
                <div class="form-group col-md-6">
                  <label for="saudi_region">{{ $t("Region") }}</label>
                  <v-select
                    v-model="form.saudi_region"
                    :options="saudiRegions"
                    label="name"
                    :reduce="option => option.id"
                    :placeholder="$t('Select Region')"
                    :searchable="true"
                    :clearable="false"
                    class="saudi-location-select"
                    :class="{ 'is-invalid': form.errors.has('saudi_region') }"
                    @input="onSaudiRegionChange"
                  >
                    <template #option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                    <template #selected-option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                  </v-select>
                  <has-error :form="form" field="saudi_region" />
                </div>
              </template>
            </div>

            <!-- City and Neighbourhood -->
            <div class="row">
              <template v-if="form.country === 'SA'">
                <div class="form-group col-md-6">
                  <label for="city">
                    {{ $t("City") }} 
                    <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                  </label>
                  <v-select
                    v-if="saudiCities.length > 0"
                    v-model="form.city"
                    :options="saudiCities"
                    label="name"
                    :reduce="option => option.name"
                    :placeholder="$t('Select City')"
                    :searchable="true"
                    :clearable="false"
                    class="saudi-location-select"
                    :class="{ 'is-invalid': form.errors.has('city') }"
                    :disabled="!form.saudi_region"
                  >
                    <template #option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                    <template #selected-option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                  </v-select>
                  <input
                    v-else-if="form.saudi_region"
                    id="city"
                    v-model="form.city"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('city') }"
                    name="city"
                    :placeholder="$t('Enter city name')"
                    :disabled="!form.saudi_region"
                  />
                  <has-error :form="form" field="city" />
                </div>
                <div class="form-group col-md-6">
                  <label for="neighbourhood">
                    {{ $t("Neighbourhood") }} 
                    <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                  </label>
                  <input id="neighbourhood" v-model="form.neighbourhood" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('neighbourhood') }" name="neighbourhood"
                    :placeholder="$t('Enter neighbourhood')" />
                  <has-error :form="form" field="neighbourhood" />
                </div>
              </template>
              
              <!-- Regular City and Neighbourhood Input for Non-Saudi Countries -->
              <template v-if="form.country !== 'SA'">
                <div class="form-group col-md-6">
                  <label for="city">
                    {{ $t("City") }} 
                    <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                  </label>
                  <input id="city" v-model="form.city" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('city') }" name="city"
                    :placeholder="$t('Enter city')" />
                  <has-error :form="form" field="city" />
                </div>
                <div class="form-group col-md-6">
                  <label for="neighbourhood">
                    {{ $t("Neighbourhood") }} 
                    <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                  </label>
                  <input id="neighbourhood" v-model="form.neighbourhood" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('neighbourhood') }" name="neighbourhood"
                    :placeholder="$t('Enter neighbourhood')" />
                  <has-error :form="form" field="neighbourhood" />
                </div>
              </template>
            </div>

            <!-- Street Name and Postal Code -->
            <div class="row">
              <div class="form-group col-md-6">
                <label for="streetAddress1">
                  {{ $t("Street Name") }} 
                  <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                </label>
                <input id="streetAddress1" v-model="form.streetAddress1" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('streetAddress1') }" name="streetAddress1"
                  :placeholder="$t('Enter street name')" />
                <has-error :form="form" field="streetAddress1" />
              </div>
              <div class="form-group col-md-6">
                <label for="postalCode">
                  {{ $t("Postal Code") }} 
                  <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                </label>
                <input id="postalCode" v-model="form.postalCode" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('postalCode') }" name="postalCode"
                  :placeholder="$t('Enter postal code')" />
                <has-error :form="form" field="postalCode" />
              </div>
            </div>

            <!-- Saudi National Address Fields - Building Number -->
            <div v-if="form.country === 'SA'" class="row">
              <div class="form-group col-md-6">
                <label for="buildingNumber">
                  {{ $t("Building Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="buildingNumber" v-model="form.buildingNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('buildingNumber') }" name="buildingNumber"
                  :placeholder="$t('Enter building number')" maxlength="5" />
                <has-error :form="form" field="buildingNumber" />
              </div>
              <div class="form-group col-md-6">
                <label for="streetNumber">
                  {{ $t("Street Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="streetNumber" v-model="form.streetNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('streetNumber') }" name="streetNumber"
                  :placeholder="$t('Enter street number')" maxlength="5" />
                <has-error :form="form" field="streetNumber" />
              </div>
            </div>

            <!-- Saudi National Address Fields - Additional Numbers -->
            <div v-if="form.country === 'SA'" class="row">
              <div class="form-group col-md-4">
                <label for="districtNumber">
                  {{ $t("District Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="districtNumber" v-model="form.districtNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('districtNumber') }" name="districtNumber"
                  :placeholder="$t('Enter district number')" maxlength="5" />
                <has-error :form="form" field="districtNumber" />
              </div>
              <div class="form-group col-md-4">
                <label for="unitNumber">
                  {{ $t("Unit Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="unitNumber" v-model="form.unitNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('unitNumber') }" name="unitNumber"
                  :placeholder="$t('Enter unit number')" maxlength="5" />
                <has-error :form="form" field="unitNumber" />
              </div>
              <div class="form-group col-md-4">
                <label for="additionalNumber">
                  {{ $t("Additional Number") }} <span class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="additionalNumber" v-model="form.additionalNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('additionalNumber') }" name="additionalNumber"
                  :placeholder="$t('Enter additional number')" maxlength="5" />
                <has-error :form="form" field="additionalNumber" />
              </div>
            </div>

            <!-- Tax Information Fields (shown in National Address section for taxable suppliers) -->
            <div v-if="form.taxStatus === 'taxable'" class="row mt-3">
              <div class="col-md-12">
                <hr style="margin: 15px 0; border-color: #e0e0e0;">
                <h6 class="text-muted mb-3">
                  <i class="fas fa-file-invoice-dollar mr-2"></i>
                  {{ $t("Tax Information (Required for Taxable Suppliers)") }}
                </h6>
              </div>
              <div class="form-group col-md-6">
                <label for="commercialRegister">{{ $t("Commercial Register") }} <span class="required">*</span></label>
                <input id="commercialRegister" v-model="form.commercialRegister" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('commercialRegister') }" name="commercialRegister"
                  :placeholder="$t('Enter commercial register number')" />
                <has-error :form="form" field="commercialRegister" />
              </div>
              <div class="form-group col-md-6">
                <label for="taxRegistrationNumber">{{ $t("Tax Registration Number") }} <span class="required">*</span></label>
                <input id="taxRegistrationNumber" v-model="form.taxRegistrationNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('taxRegistrationNumber') }" name="taxRegistrationNumber"
                  :placeholder="$t('Enter 15-digit tax registration number')" maxlength="15" />
                <small class="form-text text-muted">{{ $t("Must be exactly 15 digits") }}</small>
                <has-error :form="form" field="taxRegistrationNumber" />
              </div>
            </div>

            <!-- Business-specific fields (for non-taxable companies) -->
            <div v-if="form.type === 'Company' && form.taxStatus !== 'taxable'" class="row mt-3">
              <div class="col-md-12">
                <hr style="margin: 15px 0; border-color: #e0e0e0;">
              </div>
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

    <!-- Account Details Section - Now on its own row -->
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-cog mr-2"></i>
              {{ $t("Account Details") }}
            </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="form-group col-md-4">
                <label for="displayLanguage">{{ $t("Display Language") }}</label>
                <select id="displayLanguage" v-model="form.displayLanguage" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('displayLanguage') }">
                  <option value="">{{ $t("Select Language") }}</option>
                  <option value="en">{{ $t("English") }}</option>
                  <option value="ar">{{ $t("Arabic") }}</option>
                </select>
                <has-error :form="form" field="displayLanguage" />
              </div>

              <div class="form-group col-md-4">
                <label for="status">{{ $t("Status") }}</label>
                <select id="status" v-model="form.status" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('status') }">
                  <option value="1">{{ $t("Active") }}</option>
                  <option value="0">{{ $t("Inactive") }}</option>
                </select>
                <has-error :form="form" field="status" />
              </div>

              <div class="form-group col-md-4">
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

    <!-- National Address Section -->
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="form-card">
          <div class="card-header">
            <h5 class="section-title">
              <i class="fas fa-map-marked-alt mr-2"></i>
              {{ $t("National Address") }}
            </h5>
          </div>
          <div class="card-body">
            <!-- Country and Region -->
            <div class="row">
              <div class="form-group col-md-3">
                <label for="country">{{ $t("Country") }}</label>
                <v-select
                  v-model="form.country"
                  :options="countries"
                  label="name"
                  :reduce="option => option.code"
                  :placeholder="$t('Select Country')"
                  :searchable="true"
                  :clearable="false"
                  class="country-select"
                  :class="{ 'is-invalid': form.errors.has('country') }"
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
                <has-error :form="form" field="country" />
              </div>
              <div v-if="form.country !== 'SA'" class="form-group col-md-3">
                <label for="state">{{ $t("State") }}</label>
                <input id="state" v-model="form.state" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('state') }" name="state"
                  :placeholder="$t('Enter state')" />
                <has-error :form="form" field="state" />
              </div>
              
              <!-- Saudi Arabia Region, City and Neighbourhood -->
              <template v-if="form.country === 'SA'">
                <div class="form-group col-md-3">
                  <label for="saudi_region">{{ $t("Region") }}</label>
                  <v-select
                    v-model="form.saudi_region"
                    :options="saudiRegions"
                    label="name"
                    :reduce="option => option.id"
                    :placeholder="$t('Select Region')"
                    :searchable="true"
                    :clearable="false"
                    class="saudi-location-select"
                    :class="{ 'is-invalid': form.errors.has('saudi_region') }"
                    @input="onSaudiRegionChange"
                  >
                    <template #option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                    <template #selected-option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                  </v-select>
                  <has-error :form="form" field="saudi_region" />
                </div>
                <div class="form-group col-md-3">
                  <label for="city">{{ $t("City") }}</label>
                  <v-select
                    v-if="saudiCities.length > 0"
                    v-model="form.city"
                    :options="saudiCities"
                    label="name"
                    :reduce="option => option.name"
                    :placeholder="$t('Select City')"
                    :searchable="true"
                    :clearable="false"
                    class="saudi-location-select"
                    :class="{ 'is-invalid': form.errors.has('city') }"
                    :disabled="!form.saudi_region"
                  >
                    <template #option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                    <template #selected-option="{ name_ar, name_en }">
                      <div>{{ $i18n.locale === 'ar' ? name_ar : name_en }}</div>
                    </template>
                  </v-select>
                  <input
                    v-else-if="form.saudi_region"
                    id="city"
                    v-model="form.city"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('city') }"
                    name="city"
                    :placeholder="$t('Enter city name')"
                    :disabled="!form.saudi_region"
                  />
                  <has-error :form="form" field="city" />
                </div>
                <div class="form-group col-md-3">
                  <label for="neighbourhood">{{ $t("Neighbourhood") }}</label>
                  <input id="neighbourhood" v-model="form.neighbourhood" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('neighbourhood') }" name="neighbourhood"
                    :placeholder="$t('Enter neighbourhood')" />
                  <has-error :form="form" field="neighbourhood" />
                </div>
              </template>
              
              <!-- Regular City and Neighbourhood Input for Non-Saudi Countries -->
              <template v-if="form.country !== 'SA'">
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
              </template>
            </div>

            <!-- Street Name and Postal Code -->
            <div class="row">
              <div class="form-group col-md-6">
                <label for="streetAddress1">
                  {{ $t("Street Name") }} 
                  <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                </label>
                <input id="streetAddress1" v-model="form.streetAddress1" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('streetAddress1') }" name="streetAddress1"
                  :placeholder="$t('Enter street name')" />
                <has-error :form="form" field="streetAddress1" />
              </div>
              <div class="form-group col-md-3">
                <label for="postalCode">
                  {{ $t("Postal Code") }} 
                  <span v-if="form.taxStatus === 'taxable'" class="required">*</span>
                </label>
                <input id="postalCode" v-model="form.postalCode" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('postalCode') }" name="postalCode"
                  :placeholder="$t('Enter postal code')" />
                <has-error :form="form" field="postalCode" />
              </div>
              <div v-if="form.country === 'SA'" class="form-group col-md-3">
                <label for="buildingNumber">
                  {{ $t("Building Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="buildingNumber" v-model="form.buildingNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('buildingNumber') }" name="buildingNumber"
                  :placeholder="$t('Enter building number')" maxlength="5" />
                <has-error :form="form" field="buildingNumber" />
              </div>
            </div>

            <!-- Saudi National Address Fields - Additional Numbers -->
            <div v-if="form.country === 'SA'" class="row">
              <div class="form-group col-md-3">
                <label for="streetNumber">
                  {{ $t("Street Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="streetNumber" v-model="form.streetNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('streetNumber') }" name="streetNumber"
                  :placeholder="$t('Enter street number')" maxlength="5" />
                <has-error :form="form" field="streetNumber" />
              </div>
              <div class="form-group col-md-3">
                <label for="districtNumber">
                  {{ $t("District Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="districtNumber" v-model="form.districtNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('districtNumber') }" name="districtNumber"
                  :placeholder="$t('Enter district number')" maxlength="5" />
                <has-error :form="form" field="districtNumber" />
              </div>
              <div class="form-group col-md-3">
                <label for="unitNumber">
                  {{ $t("Unit Number") }} <span v-if="form.taxStatus === 'taxable'" class="required">*</span><span v-else class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="unitNumber" v-model="form.unitNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('unitNumber') }" name="unitNumber"
                  :placeholder="$t('Enter unit number')" maxlength="5" />
                <has-error :form="form" field="unitNumber" />
              </div>
              <div class="form-group col-md-3">
                <label for="additionalNumber">
                  {{ $t("Additional Number") }} <span class="text-muted">({{ $t("Optional") }})</span>
                </label>
                <input id="additionalNumber" v-model="form.additionalNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('additionalNumber') }" name="additionalNumber"
                  :placeholder="$t('Enter additional number')" maxlength="5" />
                <has-error :form="form" field="additionalNumber" />
              </div>
            </div>

            <!-- Tax-related fields - Conditional based on tax status -->
            <div v-if="form.taxStatus === 'taxable'" class="row mt-4">
              <div class="col-md-12">
                <hr style="margin: 20px 0; border-color: #e0e0e0;">
                <h6 class="text-muted mb-3">{{ $t("Tax Information (Required for Taxable Suppliers)") }}</h6>
              </div>
              <div class="form-group col-md-6">
                <label for="commercialRegister">{{ $t("Commercial Register") }} <span class="required">*</span></label>
                <input id="commercialRegister" v-model="form.commercialRegister" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('commercialRegister') }" name="commercialRegister"
                  :placeholder="$t('Enter commercial register number')" />
                <has-error :form="form" field="commercialRegister" />
              </div>
              <div class="form-group col-md-6">
                <label for="taxRegistrationNumber">{{ $t("Tax Registration Number") }} <span class="required">*</span></label>
                <input id="taxRegistrationNumber" v-model="form.taxRegistrationNumber" type="text" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('taxRegistrationNumber') }" name="taxRegistrationNumber"
                  :placeholder="$t('Enter 15-digit tax registration number')" maxlength="15" />
                <small class="form-text text-muted">{{ $t("Must be exactly 15 digits") }}</small>
                <has-error :form="form" field="taxRegistrationNumber" />
              </div>
            </div>

            <!-- Business-specific fields (for non-taxable or optional) -->
            <div v-if="form.type === 'Company' && form.taxStatus !== 'taxable'" class="row mt-4">
              <div class="col-md-12">
                <hr style="margin: 20px 0; border-color: #e0e0e0;">
              </div>
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
import PhoneNumberInput from "./PhoneNumberInput.vue";
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: "SupplierForm",
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
    // Whether primary sections should span full width (used in modals)
    fullWidthSections: {
      type: Boolean,
      default: false
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
      
      // Phone number validation
      phoneNumberValid: false,
      
      // Saudi Arabia location data
      saudiRegions: [],
      saudiCities: [],
      loadingRegions: false,
      loadingCities: false,
      
      // Countries data with flags (same as ClientForm)
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
  computed: {
    // Countries with translated names
    countries() {
      return this.countriesData.map(country => ({
        ...country,
        name: this.$t(country.nameKey) || country.nameKey
      }));
    },
    sectionColumnClass() {
      return this.fullWidthSections ? 'col-12' : 'col-md-6';
    },
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
    },
    
    // Watch for country changes - clear state when Saudi Arabia is selected
    'form.country': {
      handler(newValue, oldValue) {
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
    
    // Watch for changes in phoneNumber field
    'form.phoneNumber': {
      handler(newValue, oldValue) {
        console.log('Phone number changed:', { old: oldValue, new: newValue });
      },
      immediate: true
    },
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
    
    // Load Saudi regions if country is SA
    if (this.form.country === 'SA') {
      this.loadSaudiRegions();
    }
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
        taxRegistrationNumber: "",
        
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

    // Set tax status explicitly to ensure it's reactive
    setTaxStatus(status) {
      console.log('Setting taxStatus to:', status);
      console.log('form.taxStatus before:', this.form.taxStatus);
      
      // CRITICAL: Use form object's method to set the value if available
      // Otherwise, use Vue.set or direct assignment
      if (this.form && typeof this.form.taxStatus !== 'undefined') {
        // Direct assignment
        this.form.taxStatus = status;
        
        // Also try to update via form's internal data if it exists
        if (this.form.$data && this.form.$data.taxStatus !== undefined) {
          this.form.$data.taxStatus = status;
        }
      } else {
        // Fallback: use Vue.set
        if (this.$set) {
          this.$set(this.form, 'taxStatus', status);
        } else {
          this.form.taxStatus = status;
        }
      }
      
      // Force update
      this.$forceUpdate();
      
      // Verify the value was set
      console.log('taxStatus after setting:', this.form.taxStatus);
      console.log('form object keys:', Object.keys(this.form));
      console.log('form.data() taxStatus:', this.form.data ? this.form.data().taxStatus : 'N/A');
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
        if (window.toast && typeof window.toast.fire === 'function') {
          window.toast.fire({
            type: "error",
            title: this.$t("Mobile number is required"),
          });
        } else {
          alert(this.$t("Mobile number is required"));
        }
        isValid = false;
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
      // Debug: Log form.taxStatus before validation
      console.log('SupplierForm submitForm - form.taxStatus before validation:', this.form.taxStatus);
      console.log('SupplierForm submitForm - form object:', {
        taxStatus: this.form.taxStatus,
        type: this.form.type,
        businessName: this.form.businessName,
        phoneNumber: this.form.phoneNumber
      });
      
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
      
      // CRITICAL: Ensure taxStatus is set on form object before getting data
      if (!this.form.taxStatus) {
        this.form.taxStatus = 'non_taxable';
      }
      
      // Get form data first
      const formDataObj = this.form.data();
      
      // Debug: Log formDataObj.taxStatus
      console.log('SupplierForm submitForm - formDataObj.taxStatus:', formDataObj.taxStatus);
      console.log('SupplierForm submitForm - form.taxStatus after check:', this.form.taxStatus);
      
      // Map form data to API format - explicitly include all fields
      // CRITICAL: Always use this.form.taxStatus directly, not from formDataObj
      const taxStatusValue = this.form.taxStatus || 'non_taxable';
      
      const submitData = {
        // Account Details
        codeNumber: this.form.codeNumber || formDataObj.codeNumber,
        notes: this.form.notes || formDataObj.notes,
        displayLanguage: this.form.displayLanguage || formDataObj.displayLanguage,
        
        // Supplier Details - CRITICAL: taxStatus must be explicitly set from form object
        type: this.form.type || formDataObj.type,
        taxStatus: taxStatusValue, // Always use form.taxStatus directly
        tax_status: taxStatusValue, // Also send as snake_case
        fullName: this.form.fullName || formDataObj.fullName,
        businessName: this.form.businessName || formDataObj.businessName,
        firstName: this.form.firstName || formDataObj.firstName,
        lastName: this.form.lastName || formDataObj.lastName,
        phone: this.form.phone || formDataObj.phone,
        phoneNumber: this.form.phoneNumber || formDataObj.phoneNumber,
        email: this.form.email || formDataObj.email,
        streetAddress1: this.form.streetAddress1 || formDataObj.streetAddress1,
        streetAddress2: this.form.streetAddress2 || formDataObj.streetAddress2,
        city: this.form.city || formDataObj.city,
        state: this.form.state || formDataObj.state,
        postalCode: this.form.postalCode || formDataObj.postalCode,
        country: this.form.country || formDataObj.country,
        neighbourhood: this.form.neighbourhood || formDataObj.neighbourhood,
        commercialRegister: this.form.commercialRegister || formDataObj.commercialRegister,
        taxCard: this.form.taxCard || formDataObj.taxCard,
        
        // Saudi National Address Fields
        buildingNumber: this.form.buildingNumber || formDataObj.buildingNumber,
        streetNumber: this.form.streetNumber || formDataObj.streetNumber,
        districtNumber: this.form.districtNumber || formDataObj.districtNumber,
        unitNumber: this.form.unitNumber || formDataObj.unitNumber,
        additionalNumber: this.form.additionalNumber || formDataObj.additionalNumber,
        taxRegistrationNumber: this.form.taxRegistrationNumber || this.form.taxCard || formDataObj.taxRegistrationNumber,
        
        // Additional Fields
        image: this.form.image || formDataObj.image,
        attachments: this.form.attachments || formDataObj.attachments || [],
        status: this.form.status !== undefined ? this.form.status : (formDataObj.status !== undefined ? formDataObj.status : 1),
        isSendEmail: this.form.isSendEmail !== undefined ? this.form.isSendEmail : (formDataObj.isSendEmail !== undefined ? formDataObj.isSendEmail : false),
        isSendSMS: this.form.isSendSMS !== undefined ? this.form.isSendSMS : (formDataObj.isSendSMS !== undefined ? formDataObj.isSendSMS : false),
        chartOfAccountId: this.form.chartOfAccountId || formDataObj.chartOfAccountId,
        saudi_region: this.form.saudi_region || formDataObj.saudi_region,
        
        // Map legacy fields for backward compatibility
        name: this.form.type === 'Individual' ? (this.form.fullName || formDataObj.fullName) : (this.form.businessName || formDataObj.businessName),
        companyName: this.form.businessName || formDataObj.businessName,
        address: this.form.streetAddress1 || formDataObj.streetAddress1,
        
        // Include representatives data
        representatives: (this.form.representatives && Array.isArray(this.form.representatives)) 
          ? this.form.representatives 
          : (formDataObj.representatives && Array.isArray(formDataObj.representatives) ? formDataObj.representatives : []),
      };
      
      // Debug logging - CRITICAL
      console.log('SupplierForm - Submitting data:', {
        taxStatus: submitData.taxStatus,
        tax_status: submitData.tax_status,
        formTaxStatus: this.form.taxStatus,
        formDataObjTaxStatus: formDataObj.taxStatus,
        taxStatusValue: taxStatusValue,
        allData: submitData
      });
      
      // CRITICAL: Ensure taxStatus is always in submitData
      if (!submitData.taxStatus) {
        console.warn('WARNING: taxStatus is missing in submitData! Setting to:', taxStatusValue);
        submitData.taxStatus = taxStatusValue;
        submitData.tax_status = taxStatusValue;
      }
      
      console.log('SupplierForm - Final submitData with taxStatus:', {
        taxStatus: submitData.taxStatus,
        tax_status: submitData.tax_status,
        hasTaxStatus: 'taxStatus' in submitData,
        hasTax_status: 'tax_status' in submitData
      });
      
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
      this.form.saudi_region = null;
      this.form.notes = "";
      this.form.displayLanguage = "";
      this.form.representatives = [];
      this.form.chartOfAccountId = null; // Clear chart of account
      
      // Clear image preview
      this.url = null;
      
      // Clear validation errors
      this.form.errors.clear();
      
      // Reset phone number validation
      this.phoneNumberValid = false;
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

/* Tax Status Cards - Compact Version */
.tax-status-options {
  margin-top: 0.5rem;
}

.tax-status-card-compact {
  display: block;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.tax-status-card-compact:hover {
  border-color: #007bff;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.12);
  transform: translateY(-1px);
}

.tax-status-card-compact.active {
  border-color: #007bff;
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  box-shadow: 0 2px 10px rgba(0, 123, 255, 0.15);
}

.tax-status-card-compact.border-success.active {
  border-color: #28a745;
  background: linear-gradient(135deg, #f0fff4 0%, #ffffff 100%);
  box-shadow: 0 2px 10px rgba(40, 167, 69, 0.15);
}

.tax-status-card-compact.border-primary.active {
  border-color: #007bff;
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  box-shadow: 0 2px 10px rgba(0, 123, 255, 0.15);
}

.tax-status-header-compact {
  display: flex;
  align-items: center;
  position: relative;
}

.tax-status-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.tax-status-icon-compact {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.tax-status-icon-compact.taxable-icon {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  box-shadow: 0 2px 6px rgba(0, 123, 255, 0.25);
}

.tax-status-icon-compact.non-taxable-icon {
  background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
  color: white;
  box-shadow: 0 2px 6px rgba(40, 167, 69, 0.25);
}

.tax-status-card-compact.active .tax-status-icon-compact.taxable-icon {
  transform: scale(1.05);
  box-shadow: 0 3px 10px rgba(0, 123, 255, 0.35);
}

.tax-status-card-compact.active .tax-status-icon-compact.non-taxable-icon {
  transform: scale(1.05);
  box-shadow: 0 3px 10px rgba(40, 167, 69, 0.35);
}

.tax-status-title-compact {
  font-weight: 600;
  font-size: 0.95rem;
  color: #2c3e50;
  flex: 1;
}

.tax-status-card-compact.active .tax-status-title-compact {
  color: #007bff;
}

.tax-status-card-compact.border-success.active .tax-status-title-compact {
  color: #28a745;
}

/* RTL Support */
[dir="rtl"] .tax-status-icon-compact {
  margin-right: 0;
  margin-left: 0.75rem;
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

/* Country select styles */
.country-select {
  width: 100%;
}

.country-select .vs__dropdown-toggle {
  border: 1px solid #CED4DA;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  min-height: 2.5rem;
  max-width: 100%;
  overflow: hidden;
}

.country-select .vs__search {
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
}

.country-select .vs__selected {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.country-option,
.country-selected {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.country-flag {
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}

.country-name {
  font-size: 0.95rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  flex: 1;
}

.country-select.is-invalid .vs__dropdown-toggle {
  border-color: #dc3545;
}

.country-select .vs__dropdown-menu {
  border-radius: 6px;
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

/* Saudi location select styles - remove double border */
.saudi-location-select {
  width: 100%;
}

.saudi-location-select .vs__dropdown-toggle {
  border: 1px solid #CED4DA;
  border-radius: 6px;
  padding: 0.375rem 0.75rem;
  min-height: 2.5rem;
  background-color: #fff;
}

.saudi-location-select .vs__dropdown-toggle:focus,
.saudi-location-select .vs__dropdown-toggle.vs__open {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
  outline: none;
}

.saudi-location-select.is-invalid .vs__dropdown-toggle {
  border-color: #dc3545;
}

.saudi-location-select .vs__search {
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
}

.saudi-location-select .vs__dropdown-menu {
  border-radius: 6px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
}

.saudi-location-select .vs__dropdown-option {
  padding: 0.75rem 1rem;
}

.saudi-location-select .vs__dropdown-option--highlight {
  background-color: #33a0d9;
  color: white;
}
</style>