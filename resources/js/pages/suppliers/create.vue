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
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t("Back") }}
                </router-link>
                <button type="button" class="btn btn-success" @click="saveTemporary" :title="$t('Save Temporarily')">
                  <i class="fas fa-save" />
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <!-- form start -->
            <SupplierForm 
              ref="supplierForm"
              :showCardBody="false"
              @submit="saveSupplier"
            />
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
        // Use the submitted form data directly
        const response = await this.$http.post("/api/suppliers", formData);
        
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
        Object.keys(serverErrors).forEach((field) => {
          const fieldErrors = serverErrors[field] || []
          translatedErrors[field] = fieldErrors.map((message) => this.translateValidationMessage(message, field))
        })
        
        // Set errors on the form if it exists
        if (this.$refs.supplierForm && this.$refs.supplierForm.form) {
          this.$refs.supplierForm.form.errors.set(translatedErrors)
        }
        
        toast.fire({ type: 'error', title: this.$t('Please fix the highlighted errors and try again') })
      } else {
        const message = error?.response?.data?.message || this.$t('Please check your input and try again.')
        toast.fire({ type: 'error', title: message })
      }
    },

    // translate validation messages from backend to localized messages
    translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      const direct = this.$t(message)
      if (direct && direct !== message) return direct

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
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        address: this.$t('Address'),
      }
      const fieldLabel = fieldLabelMap[field] || field

      // Common Laravel validation patterns
      const patterns = [
        // Required field patterns
        { re: /The\s+.+?\s+field\s+is\s+required\.?/i, ar: `هذا الحقل مطلوب` },
        { re: /Please\s+select\s+an?\s+.+?\.?/i, ar: `يرجى اختيار` },
        { re: /Please\s+enter\s+a\s+.+?\.?/i, ar: `يرجى إدخال` },
        { re: /Please\s+provide\s+a\s+.+?\.?/i, ar: `يرجى تقديم` },
        
        // Selection and choice patterns
        { re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i, ar: `القيمة المحددة غير صالحة` },
        { re: /The\s+selected\s+.+?\s+does\s+not\s+exist\.?/i, ar: `القيمة المحددة غير موجودة` },
        { re: /Please\s+choose\s+a\s+.+?\.?/i, ar: `يرجى اختيار` },
        { re: /You\s+must\s+select\s+a\s+.+?\.?/i, ar: `يجب اختيار` },
        
        // Data type patterns
        { re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i, ar: `يجب أن يكون رقماً` },
        { re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i, ar: `يجب أن يكون عدداً صحيحاً` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+string\.?/i, ar: `يجب أن يكون نصاً` },
        { re: /The\s+.+?\s+must\s+be\s+an\s+array\.?/i, ar: `يجب أن يكون مصفوفة` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+boolean\.?/i, ar: `يجب أن يكون صحيح أو خطأ` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+email\.?/i, ar: `يجب أن يكون بريد إلكتروني صحيح` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+url\.?/i, ar: `يجب أن يكون رابط صحيح` },
        
        // Numeric validation patterns
        { re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i, ar: (_, n) => `يجب ألا يقل عن ${n}` },
        { re: /The\s+.+?\s+must\s+be\s+greater\s+than\s+(\d+)\.?/i, ar: (_, n) => `يجب أن يكون أكبر من ${n}` },
        { re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i, ar: (_, n) => `يجب ألا يزيد عن ${n}` },
        { re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\.?/i, ar: (_, min, max) => `يجب أن يكون بين ${min} و ${max}` },
        { re: /The\s+.+?\s+must\s+be\s+exactly\s+(\d+)\.?/i, ar: (_, n) => `يجب أن يكون بالضبط ${n}` },
        
        // String length patterns
        { re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\s+characters\.?/i, ar: (_, n) => `يجب ألا يتجاوز ${n} حرفاً` },
        { re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\s+characters\.?/i, ar: (_, n) => `يجب أن يكون على الأقل ${n} حرفاً` },
        { re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\s+characters\.?/i, ar: (_, min, max) => `يجب أن يكون بين ${min} و ${max} حرفاً` },
        
        // Date validation patterns
        { re: /The\s+.+?\s+is\s+not\s+a\s+valid\s+date\.?/i, ar: `ليس تاريخاً صحيحاً` },
        { re: /The\s+.+?\s+does\s+not\s+match\s+the\s+format\s+.+?\.?/i, ar: `لا يطابق التنسيق المطلوب` },
        { re: /The\s+.+?\s+must\s+be\s+after\s+or\s+equal\s+to\s+.+?\.?/i, ar: `يجب أن يكون بعد أو يساوي التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+before\s+or\s+equal\s+to\s+.+?\.?/i, ar: `يجب أن يكون قبل أو يساوي التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+after\s+.+?\.?/i, ar: `يجب أن يكون بعد التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+before\s+.+?\.?/i, ar: `يجب أن يكون قبل التاريخ المحدد` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+date\s+after\s+or\s+equal\s+to\s+today\.?/i, ar: `يجب أن يكون تاريخ بعد أو يساوي اليوم` },
        
        // Format validation patterns
        { re: /The\s+.+?\s+format\s+is\s+invalid\.?/i, ar: `تنسيق غير صالح` },
        { re: /The\s+.+?\s+does\s+not\s+match\s+the\s+required\s+format\.?/i, ar: `لا يطابق التنسيق المطلوب` },
        { re: /The\s+.+?\s+must\s+match\s+the\s+pattern\.?/i, ar: `يجب أن يطابق النمط المطلوب` },
        
        // Uniqueness patterns
        { re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i, ar: `هذه القيمة مستخدمة بالفعل` },
        { re: /The\s+.+?\s+already\s+exists\.?/i, ar: `موجود بالفعل` },
        { re: /This\s+.+?\s+is\s+already\s+in\s+use\.?/i, ar: `هذا مستخدم بالفعل` },
        
        // File upload patterns
        { re: /The\s+.+?\s+must\s+be\s+a\s+file\.?/i, ar: `يجب أن يكون ملفاً` },
        { re: /The\s+.+?\s+must\s+be\s+an\s+image\.?/i, ar: `يجب أن يكون صورة` },
        { re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+image\.?/i, ar: `يجب أن يكون صورة صحيحة` },
        { re: /The\s+.+?\s+file\s+is\s+too\s+large\.?/i, ar: `الملف كبير جداً` },
        { re: /The\s+.+?\s+file\s+size\s+must\s+not\s+exceed\s+(\d+)\s+KB\.?/i, ar: (_, n) => `حجم الملف يجب ألا يتجاوز ${n} كيلوبايت` },
        
        // Confirmation patterns
        { re: /The\s+.+?\s+confirmation\s+does\s+not\s+match\.?/i, ar: `التأكيد غير متطابق` },
        { re: /The\s+.+?\s+and\s+.+?\s+must\s+match\.?/i, ar: `يجب أن يتطابقا` },
        
        // Custom validation patterns for supplier form
        { re: /Mobile\s+number\s+is\s+required\.?/i, ar: `رقم الهاتف المحمول مطلوب` },
        { re: /Business\s+name\s+is\s+required\s+for\s+company\s+suppliers\.?/i, ar: `اسم الشركة مطلوب لموردي الشركات` },
        { re: /Phone\s+number\s+is\s+required\.?/i, ar: `رقم الهاتف مطلوب` },
        { re: /Email\s+is\s+required\.?/i, ar: `البريد الإلكتروني مطلوب` },
        { re: /Full\s+name\s+is\s+required\.?/i, ar: `الاسم الكامل مطلوب` },
        { re: /First\s+name\s+is\s+required\.?/i, ar: `الاسم الأول مطلوب` },
        { re: /Last\s+name\s+is\s+required\.?/i, ar: `الاسم الأخير مطلوب` },
        { re: /Company\s+name\s+is\s+required\.?/i, ar: `اسم الشركة مطلوب` },
        { re: /Please\s+enter\s+a\s+mobile\s+number\.?/i, ar: `يرجى إدخال رقم هاتف محمول` },
        { re: /Please\s+enter\s+a\s+business\s+name\.?/i, ar: `يرجى إدخال اسم شركة` },
        { re: /Please\s+enter\s+a\s+phone\s+number\.?/i, ar: `يرجى إدخال رقم هاتف` },
        { re: /Please\s+enter\s+an\s+email\.?/i, ar: `يرجى إدخال بريد إلكتروني` },
        { re: /Please\s+enter\s+a\s+full\s+name\.?/i, ar: `يرجى إدخال اسم كامل` },
        { re: /Please\s+enter\s+a\s+first\s+name\.?/i, ar: `يرجى إدخال اسم أول` },
        { re: /Please\s+enter\s+a\s+last\s+name\.?/i, ar: `يرجى إدخال اسم أخير` },
        { re: /Please\s+enter\s+a\s+company\s+name\.?/i, ar: `يرجى إدخال اسم شركة` },
        { re: /Please\s+select\s+a\s+type\.?/i, ar: `يرجى اختيار نوع` },
        { re: /Type\s+is\s+required\.?/i, ar: `النوع مطلوب` },
        { re: /Status\s+is\s+required\.?/i, ar: `الحالة مطلوبة` },
        { re: /Please\s+select\s+a\s+status\.?/i, ar: `يرجى اختيار حالة` },
        
        // Generic fallback patterns
        { re: /This\s+field\s+is\s+required\.?/i, ar: `هذا الحقل مطلوب` },
        { re: /This\s+field\s+must\s+be\s+filled\.?/i, ar: `يجب ملء هذا الحقل` },
        { re: /This\s+value\s+is\s+invalid\.?/i, ar: `هذه القيمة غير صالحة` },
        { re: /Invalid\s+input\.?/i, ar: `إدخال غير صالح` },
        { re: /Please\s+check\s+your\s+input\.?/i, ar: `يرجى التحقق من المدخلات` },
      ]

      for (const { re, ar } of patterns) {
        const match = message.match(re)
        if (match) {
          const text = typeof ar === 'function' ? ar(...match) : ar
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
