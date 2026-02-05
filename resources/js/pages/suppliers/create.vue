<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12 col-xl-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100 header-buttons">
                <router-link :to="{ name: 'suppliers.index' }" class="btn btn-info">
                  <template
                    v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">

                    {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />

                  </template>

                  <template v-else>

                    <template
                      v-if="$i18n.locale === 'ar' || (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl')">


                      {{ $t('Back') }} <i class="fas fa-long-arrow-alt-left" />


                    </template>


                    <template v-else>


                      <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}


                    </template>

                  </template>
                </router-link>
                <button type="button" class="btn btn-success" @click="submitForm" :disabled="isSubmitting"
                  :title="$t('Save')">
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i>
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <!-- form start -->
            <SupplierForm ref="supplierForm" :showCardBody="false" :fullWidthSections="true" @submit="saveSupplier" />
          </div>
          <!-- /.card-body -->
          <div class="card-footer">
            <div class="dtable-footer">
              <div class="form-group row display-per-page footer-buttons d-flex justify-content-between w-100">
                <button @click="submitForm" :disabled="isSubmitting" class="btn btn-success">
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                  <i v-else class="fas fa-save"></i>
                  {{ isSubmitting ? $t("Saving...") : $t("Save") }}
                </button>
                <button type="reset" class="btn btn-info" @click="resetForm">
                  <i class="fas fa-power-off" /> {{ $t("Reset") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SupplierForm from "../../components/SupplierForm.vue";

export default {
  middleware: ["auth", "check-permissions"],
  metaInfo() {
    return { title: this.$t("Create Supplier") };
  },
  components: {
    SupplierForm,
  },
  data: () => ({
    breadcrumbsCurrent: "Create Supplier",
    breadcrumbs: [
      {
        name: "Dashboard",
        url: "home",
      },
      {
        name: "Suppliers",
        url: "suppliers.index",
      },
      {
        name: "Create",
        url: "",
      },
    ],
    form: null,
    isSubmitting: false,
  }),
  mounted() {
    // Load temporary data after child form is mounted
    this.$nextTick(() => {
      this.loadTemporaryData()
    })
  },
  methods: {
    // Submit form by calling SupplierForm's submitForm method
    submitForm() {
      if (this.$refs.supplierForm) {
        this.$refs.supplierForm.submitForm();
      }
    },

    // save supplier
    async saveSupplier(formData) {
      if (this.isSubmitting) return;

      this.isSubmitting = true;

      try {
        // Build FormData to properly send all fields including taxStatus
        const fd = new FormData();

        const appendIfDefined = (key, value) => {
          if (value !== undefined && value !== null && value !== '') {
            fd.append(key, value);
          }
        };

        // Debug: Log formData before building FormData - CRITICAL
        console.log('=== SUPPLIER CREATE - FORM DATA RECEIVED ===');
        console.log('Supplier Create - formData received:', {
          taxStatus: formData.taxStatus,
          tax_status: formData.tax_status,
          allFormData: formData
        });
        console.log('Supplier Create - formData keys:', Object.keys(formData || {}));
        console.log('Supplier Create - formData.taxStatus type:', typeof formData.taxStatus);
        console.log('Supplier Create - formData.taxStatus value:', formData.taxStatus);
        console.log('Supplier Create - formData.tax_status value:', formData.tax_status);
        console.log('Supplier Create - $refs.supplierForm exists:', !!this.$refs.supplierForm);
        console.log('Supplier Create - $refs.supplierForm.form exists:', !!(this.$refs.supplierForm && this.$refs.supplierForm.form));
        if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
          console.log('Supplier Create - form.taxStatus:', this.$refs.supplierForm.form.taxStatus);
          console.log('Supplier Create - form.data() taxStatus:', this.$refs.supplierForm.form.data ? this.$refs.supplierForm.form.data().taxStatus : 'N/A');
        }

        // Explicitly append all fields to ensure taxStatus is sent
        appendIfDefined('codeNumber', formData.codeNumber);
        appendIfDefined('notes', formData.notes);
        appendIfDefined('displayLanguage', formData.displayLanguage);
        appendIfDefined('type', formData.type);

        // CRITICAL: Always append taxStatus - don't use appendIfDefined to ensure it's always sent
        // Get taxStatus from formData, or try to get it from form object if available
        let taxStatusValue = formData.taxStatus || formData.tax_status;

        console.log('Supplier Create - Initial taxStatus check:', {
          formDataTaxStatus: formData.taxStatus,
          formDataTax_status: formData.tax_status,
          currentTaxStatusValue: taxStatusValue
        });

        // If still not found, try to get it from the form component
        if (!taxStatusValue && this.$refs.supplierForm && this.$refs.supplierForm.form) {
          taxStatusValue = this.$refs.supplierForm.form.taxStatus;
          console.log('Supplier Create - Got taxStatus from form object:', taxStatusValue);
        }

        // Default to non_taxable if still not found
        taxStatusValue = taxStatusValue || 'non_taxable';

        console.log('Supplier Create - Final taxStatusValue before appending:', taxStatusValue);

        // Always append taxStatus - never skip it, even if it's the default value
        // CRITICAL: Use explicit string conversion and ensure it's never null/undefined
        const taxStatusToSend = String(taxStatusValue || 'non_taxable');
        fd.append('taxStatus', taxStatusToSend);
        fd.append('tax_status', taxStatusToSend);

        console.log('=== SUPPLIER CREATE - APPENDING TAX STATUS ===');
        console.log('Supplier Create - taxStatusValue:', taxStatusValue);
        console.log('Supplier Create - taxStatusToSend:', taxStatusToSend);
        console.log('Supplier Create - Appended taxStatus to FormData:', taxStatusToSend);
        console.log('Supplier Create - formData.taxStatus:', formData.taxStatus);
        console.log('Supplier Create - formData.tax_status:', formData.tax_status);
        console.log('Supplier Create - form.taxStatus:', this.$refs.supplierForm?.form?.taxStatus);

        // Verify it was added
        console.log('Supplier Create - FormData has taxStatus:', fd.has('taxStatus'));
        console.log('Supplier Create - FormData has tax_status:', fd.has('tax_status'));
        appendIfDefined('fullName', formData.fullName);
        appendIfDefined('businessName', formData.businessName);
        appendIfDefined('companyName', formData.companyName || formData.businessName);
        appendIfDefined('firstName', formData.firstName);
        appendIfDefined('lastName', formData.lastName);
        appendIfDefined('phone', formData.phone);
        appendIfDefined('phoneNumber', formData.phoneNumber);
        appendIfDefined('email', formData.email);
        appendIfDefined('streetAddress1', formData.streetAddress1);
        appendIfDefined('streetAddress2', formData.streetAddress2);
        appendIfDefined('city', formData.city);
        appendIfDefined('state', formData.state);
        appendIfDefined('postalCode', formData.postalCode);
        appendIfDefined('country', formData.country);
        appendIfDefined('neighbourhood', formData.neighbourhood);
        appendIfDefined('commercialRegister', formData.commercialRegister);
        appendIfDefined('taxCard', formData.taxCard);
        appendIfDefined('taxRegistrationNumber', formData.taxRegistrationNumber || formData.taxCard);
        appendIfDefined('buildingNumber', formData.buildingNumber);
        appendIfDefined('streetNumber', formData.streetNumber);
        appendIfDefined('districtNumber', formData.districtNumber);
        appendIfDefined('unitNumber', formData.unitNumber);
        appendIfDefined('additionalNumber', formData.additionalNumber);
        appendIfDefined('status', formData.status);
        appendIfDefined('isSendEmail', formData.isSendEmail ? 1 : 0);
        appendIfDefined('isSendSMS', formData.isSendSMS ? 1 : 0);
        appendIfDefined('chartOfAccountId', formData.chartOfAccountId);
        appendIfDefined('saudi_region', formData.saudi_region);

        // Handle name field - always required when type is Individual
        const name = formData.name || (formData.type === 'Individual' ? formData.fullName : formData.businessName);
        if (name) {
          fd.append('name', name);
        }

        // Handle address field
        appendIfDefined('address', formData.address || formData.streetAddress1);

        // Handle image if it's a File object
        if (formData.image instanceof File) {
          fd.append('image', formData.image);
        } else if (formData.image) {
          // If it's a base64 string, we might need to handle it differently
          // For now, skip it as it's handled in the controller
        }

        // Handle attachments
        if (formData.attachments && Array.isArray(formData.attachments)) {
          formData.attachments.forEach((file, index) => {
            if (file instanceof File) {
              fd.append(`attachments[${index}]`, file);
            }
          });
        }

        // Handle representatives
        if (formData.representatives && Array.isArray(formData.representatives)) {
          formData.representatives.forEach((rep, index) => {
            if (rep && rep.name) {
              appendIfDefined(`representatives[${index}][name]`, rep.name);
              appendIfDefined(`representatives[${index}][email]`, rep.email);
              appendIfDefined(`representatives[${index}][phone]`, rep.phone);
              appendIfDefined(`representatives[${index}][position]`, rep.position);
              appendIfDefined(`representatives[${index}][is_primary]`, rep.is_primary ? 1 : 0);
              appendIfDefined(`representatives[${index}][notes]`, rep.notes);
            }
          });
        }

        // Debug: Log FormData contents - CRITICAL for debugging
        console.log('Supplier Create - FormData contents:');
        const formDataEntries = [];
        for (let pair of fd.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
          formDataEntries.push({ key: pair[0], value: pair[1] });
        }
        console.log('Supplier Create - FormData entries array:', formDataEntries);
        console.log('Supplier Create - taxStatus in FormData:', formDataEntries.find(e => e.key === 'taxStatus'));
        console.log('Supplier Create - tax_status in FormData:', formDataEntries.find(e => e.key === 'tax_status'));

        // Use FormData with proper headers
        const response = await this.$http.post("/api/suppliers", fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

        if (response.data.success) {
          toast.fire({
            type: "success",
            title: this.$t("Supplier added successfully"),
          });
          this.clearTemporaryData()
          this.$router.push({ name: "suppliers.index" });
        } else {
          throw new Error(response.data.message || 'Failed to create supplier');
        }
      } catch (error) {
        this.handleSubmitError(error);
      } finally {
        this.isSubmitting = false;
      }
    },

    // handle form submission errors
    handleSubmitError(error) {
      if (error?.response?.status === 422 && error.response?.data?.errors) {
        const serverErrors = error.response.data.errors || {}
        const translatedErrors = {}
        const errorMessages = []

        Object.keys(serverErrors).forEach((field) => {
          const fieldErrors = serverErrors[field] || []
          const translatedFieldErrors = fieldErrors.map((message) => this.translateValidationMessage(message, field))
          translatedErrors[field] = translatedFieldErrors

          // Collect error messages for toast notification
          translatedFieldErrors.forEach((msg) => {
            errorMessages.push(msg)
          })
        })

        // Set errors on the form if it exists
        if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
          if (typeof this.$refs.supplierForm.form.errors.set === 'function') {
            this.$refs.supplierForm.form.errors.set(translatedErrors);
            console.log('Supplier Create - Set errors on form:', translatedErrors);
          } else if (typeof this.$refs.supplierForm.form.errors.record === 'function') {
            // Fallback to record method if set is not available
            const mapped = {};
            Object.keys(translatedErrors).forEach(key => {
              mapped[key] = Array.isArray(translatedErrors[key]) ? translatedErrors[key][0] : translatedErrors[key];
            });
            this.$refs.supplierForm.form.errors.record(mapped);
            console.log('Supplier Create - Recorded errors on form (fallback):', mapped);
          } else {
            console.warn('Supplier Create - Form errors object not available or invalid');
          }
        }

        // Show detailed error messages in toast
        const errorTitle = errorMessages.length > 0
          ? errorMessages.slice(0, 3).join(' | ') + (errorMessages.length > 3 ? ` (+${errorMessages.length - 3} more)` : '')
          : this.$t('Please fix the highlighted errors and try again')

        console.log('Supplier Create - Error messages for toast:', errorMessages);
        console.log('Supplier Create - Error title:', errorTitle);
        console.log('Supplier Create - Translated errors:', translatedErrors);

        toast.fire({
          type: 'error',
          title: this.$t('Validation Error'),
          text: errorTitle,
          html: errorMessages.length > 0
            ? `<div style="text-align: left; max-height: 200px; overflow-y: auto;">${errorMessages.map(msg => `<div>• ${msg}</div>`).join('')}</div>`
            : undefined
        })
      } else {
        const message = error?.response?.data?.message || error?.message || this.$t('Please check your input and try again.')
        toast.fire({ type: 'error', title: this.$t('Error'), text: message })
      }
    },

    // translate validation messages from backend to localized messages
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message)
      if (direct && direct !== message) return direct

      // Get current locale
      const currentLocale = this.$i18n.locale || 'en'
      const isArabic = currentLocale === 'ar'

      // Field label mapping for supplier form fields
      const fieldLabelMap = {
        codeNumber: this.$t('Code Number'),
        notes: this.$t('Notes'),
        displayLanguage: this.$t('Display Language'),
        type: this.$t('Type'),
        fullName: this.$t('Full Name'),
        businessName: this.$t('Business Name'),
        firstName: this.$t('First Name'),
        lastName: this.$t('Last Name'),
        phone: this.$t('Phone'),
        phoneNumber: this.$t('Mobile Number'),
        email: this.$t('Email'),
        streetAddress1: this.$t('Street Address 1'),
        streetAddress2: this.$t('Street Address 2'),
        city: this.$t('City'),
        state: this.$t('State'),
        postalCode: this.$t('Postal Code'),
        country: this.$t('Country'),
        neighbourhood: this.$t('Neighbourhood'),
        commercialRegister: this.$t('Commercial Register'),
        taxCard: this.$t('Tax Card'),
        buildingNumber: this.$t('Building Number'),
        streetNumber: this.$t('Street Name'),
        districtNumber: this.$t('District Number'),
        unitNumber: this.$t('Unit Number'),
        additionalNumber: this.$t('Additional Number'),
        taxStatus: this.$t('Tax Status'),
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        image: this.$t('Image'),
        attachments: this.$t('Attachments'),
        status: this.$t('Status'),
        isSendEmail: this.$t('Send Email'),
        isSendSMS: this.$t('Send SMS'),
        chartOfAccountId: this.$t('Chart of Account'),
        representatives: this.$t('Representatives'),
        // Legacy field mappings
        name: this.$t('Name'),
        companyName: this.$t('Company Name'),
        address: this.$t('Address'),
      }
      const fieldLabel = fieldLabelMap[field] || field

      // Common Laravel validation patterns with localized messages
      const patterns = [
        // Required field patterns
        {
          re: /The\s+.+?\s+field\s+is\s+required\.?/i,
          en: `This field is required`,
          ar: `هذا الحقل مطلوب`
        },
        {
          re: /Please\s+select\s+an?\s+.+?\.?/i,
          en: `Please select`,
          ar: `يرجى اختيار`
        },
        {
          re: /Please\s+enter\s+a\s+.+?\.?/i,
          en: `Please enter`,
          ar: `يرجى إدخال`
        },
        {
          re: /Please\s+provide\s+a\s+.+?\.?/i,
          en: `Please provide`,
          ar: `يرجى تقديم`
        },

        // Selection and choice patterns
        {
          re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i,
          en: `The selected value is invalid`,
          ar: `القيمة المحددة غير صالحة`
        },
        {
          re: /The\s+selected\s+.+?\s+does\s+not\s+exist\.?/i,
          en: `The selected value does not exist`,
          ar: `القيمة المحددة غير موجودة`
        },
        {
          re: /Please\s+choose\s+a\s+.+?\.?/i,
          en: `Please choose`,
          ar: `يرجى اختيار`
        },
        {
          re: /You\s+must\s+select\s+a\s+.+?\.?/i,
          en: `You must select`,
          ar: `يجب اختيار`
        },

        // Data type patterns
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i,
          en: `Must be a number`,
          ar: `يجب أن يكون رقماً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i,
          en: `Must be an integer`,
          ar: `يجب أن يكون عدداً صحيحاً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+string\.?/i,
          en: `Must be a string`,
          ar: `يجب أن يكون نصاً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+an\s+array\.?/i,
          en: `Must be an array`,
          ar: `يجب أن يكون مصفوفة`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+boolean\.?/i,
          en: `Must be true or false`,
          ar: `يجب أن يكون صحيح أو خطأ`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+email\.?/i,
          en: `Must be a valid email`,
          ar: `يجب أن يكون بريد إلكتروني صحيح`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+url\.?/i,
          en: `Must be a valid URL`,
          ar: `يجب أن يكون رابط صحيح`
        },

        // Numeric validation patterns
        {
          re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i,
          en: (_, n) => `Must be at least ${n}`,
          ar: (_, n) => `يجب ألا يقل عن ${n}`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+greater\s+than\s+(\d+)\.?/i,
          en: (_, n) => `Must be greater than ${n}`,
          ar: (_, n) => `يجب أن يكون أكبر من ${n}`
        },
        {
          re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i,
          en: (_, n) => `May not be greater than ${n}`,
          ar: (_, n) => `يجب ألا يزيد عن ${n}`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\.?/i,
          en: (_, min, max) => `Must be between ${min} and ${max}`,
          ar: (_, min, max) => `يجب أن يكون بين ${min} و ${max}`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+exactly\s+(\d+)\.?/i,
          en: (_, n) => `Must be exactly ${n}`,
          ar: (_, n) => `يجب أن يكون بالضبط ${n}`
        },

        // String length patterns
        {
          re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\s+characters\.?/i,
          en: (_, n) => `May not be greater than ${n} characters`,
          ar: (_, n) => `يجب ألا يتجاوز ${n} حرفاً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\s+characters\.?/i,
          en: (_, n) => `Must be at least ${n} characters`,
          ar: (_, n) => `يجب أن يكون على الأقل ${n} حرفاً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\s+characters\.?/i,
          en: (_, min, max) => `Must be between ${min} and ${max} characters`,
          ar: (_, min, max) => `يجب أن يكون بين ${min} و ${max} حرفاً`
        },

        // Date validation patterns
        {
          re: /The\s+.+?\s+is\s+not\s+a\s+valid\s+date\.?/i,
          en: `Is not a valid date`,
          ar: `ليس تاريخاً صحيحاً`
        },
        {
          re: /The\s+.+?\s+does\s+not\s+match\s+the\s+format\s+.+?\.?/i,
          en: `Does not match the required format`,
          ar: `لا يطابق التنسيق المطلوب`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+after\s+or\s+equal\s+to\s+.+?\.?/i,
          en: `Must be after or equal to the specified date`,
          ar: `يجب أن يكون بعد أو يساوي التاريخ المحدد`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+before\s+or\s+equal\s+to\s+.+?\.?/i,
          en: `Must be before or equal to the specified date`,
          ar: `يجب أن يكون قبل أو يساوي التاريخ المحدد`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+after\s+.+?\.?/i,
          en: `Must be after the specified date`,
          ar: `يجب أن يكون بعد التاريخ المحدد`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+before\s+.+?\.?/i,
          en: `Must be before the specified date`,
          ar: `يجب أن يكون قبل التاريخ المحدد`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+date\s+after\s+or\s+equal\s+to\s+today\.?/i,
          en: `Must be a date after or equal to today`,
          ar: `يجب أن يكون تاريخ بعد أو يساوي اليوم`
        },

        // Format validation patterns
        {
          re: /The\s+.+?\s+format\s+is\s+invalid\.?/i,
          en: `Invalid format`,
          ar: `تنسيق غير صالح`
        },
        {
          re: /The\s+.+?\s+does\s+not\s+match\s+the\s+required\s+format\.?/i,
          en: `Does not match the required format`,
          ar: `لا يطابق التنسيق المطلوب`
        },
        {
          re: /The\s+.+?\s+must\s+match\s+the\s+pattern\.?/i,
          en: `Must match the required pattern`,
          ar: `يجب أن يطابق النمط المطلوب`
        },

        // Uniqueness patterns
        {
          re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i,
          en: `This value has already been taken`,
          ar: `هذه القيمة مستخدمة بالفعل`
        },
        {
          re: /The\s+.+?\s+already\s+exists\.?/i,
          en: `Already exists`,
          ar: `موجود بالفعل`
        },
        {
          re: /This\s+.+?\s+is\s+already\s+in\s+use\.?/i,
          en: `This is already in use`,
          ar: `هذا مستخدم بالفعل`
        },

        // File upload patterns
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+file\.?/i,
          en: `Must be a file`,
          ar: `يجب أن يكون ملفاً`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+an\s+image\.?/i,
          en: `Must be an image`,
          ar: `يجب أن يكون صورة`
        },
        {
          re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+image\.?/i,
          en: `Must be a valid image`,
          ar: `يجب أن يكون صورة صحيحة`
        },
        {
          re: /The\s+.+?\s+file\s+is\s+too\s+large\.?/i,
          en: `File is too large`,
          ar: `الملف كبير جداً`
        },
        {
          re: /The\s+.+?\s+file\s+size\s+must\s+not\s+exceed\s+(\d+)\s+KB\.?/i,
          en: (_, n) => `File size must not exceed ${n} KB`,
          ar: (_, n) => `حجم الملف يجب ألا يتجاوز ${n} كيلوبايت`
        },

        // Confirmation patterns
        {
          re: /The\s+.+?\s+confirmation\s+does\s+not\s+match\.?/i,
          en: `Confirmation does not match`,
          ar: `التأكيد غير متطابق`
        },
        {
          re: /The\s+.+?\s+and\s+.+?\s+must\s+match\.?/i,
          en: `Must match`,
          ar: `يجب أن يتطابقا`
        },

        // Custom validation patterns for supplier form
        {
          re: /Mobile\s+number\s+is\s+required\.?/i,
          en: `Mobile number is required`,
          ar: `رقم الهاتف المحمول مطلوب`
        },
        {
          re: /Business\s+name\s+is\s+required\s+for\s+company\s+suppliers\.?/i,
          en: `Business name is required for company suppliers`,
          ar: `اسم الشركة مطلوب لموردي الشركات`
        },
        {
          re: /Phone\s+number\s+is\s+required\.?/i,
          en: `Phone number is required`,
          ar: `رقم الهاتف مطلوب`
        },
        {
          re: /Email\s+is\s+required\.?/i,
          en: `Email is required`,
          ar: `البريد الإلكتروني مطلوب`
        },
        {
          re: /Full\s+name\s+is\s+required\.?/i,
          en: `Full name is required`,
          ar: `الاسم الكامل مطلوب`
        },
        {
          re: /First\s+name\s+is\s+required\.?/i,
          en: `First name is required`,
          ar: `الاسم الأول مطلوب`
        },
        {
          re: /Last\s+name\s+is\s+required\.?/i,
          en: `Last name is required`,
          ar: `الاسم الأخير مطلوب`
        },
        {
          re: /Company\s+name\s+is\s+required\.?/i,
          en: `Company name is required`,
          ar: `اسم الشركة مطلوب`
        },
        {
          re: /Please\s+enter\s+a\s+mobile\s+number\.?/i,
          en: `Please enter a mobile number`,
          ar: `يرجى إدخال رقم هاتف محمول`
        },
        {
          re: /Please\s+enter\s+a\s+business\s+name\.?/i,
          en: `Please enter a business name`,
          ar: `يرجى إدخال اسم شركة`
        },
        {
          re: /Please\s+enter\s+a\s+phone\s+number\.?/i,
          en: `Please enter a phone number`,
          ar: `يرجى إدخال رقم هاتف`
        },
        {
          re: /Please\s+enter\s+an\s+email\.?/i,
          en: `Please enter an email`,
          ar: `يرجى إدخال بريد إلكتروني`
        },
        {
          re: /Please\s+enter\s+a\s+full\s+name\.?/i,
          en: `Please enter a full name`,
          ar: `يرجى إدخال اسم كامل`
        },
        {
          re: /Please\s+enter\s+a\s+first\s+name\.?/i,
          en: `Please enter a first name`,
          ar: `يرجى إدخال اسم أول`
        },
        {
          re: /Please\s+enter\s+a\s+last\s+name\.?/i,
          en: `Please enter a last name`,
          ar: `يرجى إدخال اسم أخير`
        },
        {
          re: /Please\s+enter\s+a\s+company\s+name\.?/i,
          en: `Please enter a company name`,
          ar: `يرجى إدخال اسم شركة`
        },
        {
          re: /Please\s+select\s+a\s+type\.?/i,
          en: `Please select a type`,
          ar: `يرجى اختيار نوع`
        },
        {
          re: /Type\s+is\s+required\.?/i,
          en: `Type is required`,
          ar: `النوع مطلوب`
        },
        {
          re: /Status\s+is\s+required\.?/i,
          en: `Status is required`,
          ar: `الحالة مطلوبة`
        },
        {
          re: /Please\s+select\s+a\s+status\.?/i,
          en: `Please select a status`,
          ar: `يرجى اختيار حالة`
        },

        // Generic fallback patterns
        {
          re: /This\s+field\s+is\s+required\.?/i,
          en: `This field is required`,
          ar: `هذا الحقل مطلوب`
        },
        {
          re: /This\s+field\s+must\s+be\s+filled\.?/i,
          en: `This field must be filled`,
          ar: `يجب ملء هذا الحقل`
        },
        {
          re: /This\s+value\s+is\s+invalid\.?/i,
          en: `This value is invalid`,
          ar: `هذه القيمة غير صالحة`
        },
        {
          re: /Invalid\s+input\.?/i,
          en: `Invalid input`,
          ar: `إدخال غير صالح`
        },
        {
          re: /Please\s+check\s+your\s+input\.?/i,
          en: `Please check your input`,
          ar: `يرجى التحقق من المدخلات`
        },
      ]

      for (const { re, en, ar } of patterns) {
        const match = message.match(re)
        if (match) {
          const text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en)(...match) : (isArabic ? ar : en)
          return `${fieldLabel}: ${text}`
        }
      }

      // Fallback: return original message if nothing matched
      return message
    },

    // Reset form
    resetForm() {
      this.$refs.supplierForm.resetForm();
    },

    // save form data temporarily
    saveTemporary() {
      if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
        const f = this.$refs.supplierForm.form
        const tempData = {
          codeNumber: f.codeNumber,
          notes: f.notes,
          displayLanguage: f.displayLanguage,
          type: f.type,
          fullName: f.fullName,
          businessName: f.businessName,
          firstName: f.firstName,
          lastName: f.lastName,
          phone: f.phone,
          phoneNumber: f.phoneNumber,
          email: f.email,
          streetAddress1: f.streetAddress1,
          streetAddress2: f.streetAddress2,
          city: f.city,
          state: f.state,
          postalCode: f.postalCode,
          country: f.country,
          neighbourhood: f.neighbourhood,
          commercialRegister: f.commercialRegister,
          taxCard: f.taxCard,
          attachments: f.attachments,
          status: f.status,
          isSendEmail: f.isSendEmail,
          isSendSMS: f.isSendSMS,
          chartOfAccountId: f.chartOfAccountId,
          representatives: f.representatives,
          timestamp: new Date().toISOString()
        }
        localStorage.setItem('supplierTempData', JSON.stringify(tempData))

      }
    },
    // load temporary data
    loadTemporaryData() {
      const tempData = localStorage.getItem('supplierTempData')
      if (tempData && this.$refs.supplierForm && this.$refs.supplierForm.form) {
        try {
          const d = JSON.parse(tempData)
          const f = this.$refs.supplierForm.form
          f.codeNumber = d.codeNumber || f.codeNumber
          f.notes = d.notes || f.notes
          f.displayLanguage = d.displayLanguage || f.displayLanguage
          f.type = d.type || f.type
          f.fullName = d.fullName || f.fullName
          f.businessName = d.businessName || f.businessName
          f.firstName = d.firstName || f.firstName
          f.lastName = d.lastName || f.lastName
          f.phone = d.phone || f.phone
          f.phoneNumber = d.phoneNumber || f.phoneNumber
          f.email = d.email || f.email
          f.streetAddress1 = d.streetAddress1 || f.streetAddress1
          f.streetAddress2 = d.streetAddress2 || f.streetAddress2
          f.city = d.city || f.city
          f.state = d.state || f.state
          f.postalCode = d.postalCode || f.postalCode
          f.country = d.country || f.country
          f.neighbourhood = d.neighbourhood || f.neighbourhood
          f.commercialRegister = d.commercialRegister || f.commercialRegister
          f.taxCard = d.taxCard || f.taxCard
          f.attachments = d.attachments || f.attachments
          f.status = d.status !== undefined ? d.status : f.status
          f.isSendEmail = d.isSendEmail !== undefined ? d.isSendEmail : f.isSendEmail
          f.isSendSMS = d.isSendSMS !== undefined ? d.isSendSMS : f.isSendSMS
          f.chartOfAccountId = d.chartOfAccountId || f.chartOfAccountId
          f.representatives = d.representatives || f.representatives
        } catch (e) {
          console.error('Error loading temporary data:', e)
        }
      }
    },
    // clear temporary data
    clearTemporaryData() {
      localStorage.removeItem('supplierTempData')
    },
  },
};
</script>
<style src="vue-tel-input/dist/vue-tel-input.css"></style>
<style scoped>
/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}



.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-header {
  background-color: white;
  border-bottom: 1px solid #CED4DA;
  padding: 1.25rem 1.25rem 0 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;

  border: none !important;
  font-weight: 500;
  margin-right: 10px;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

.vue-tel-input {
  padding: 3px;
}
</style>
