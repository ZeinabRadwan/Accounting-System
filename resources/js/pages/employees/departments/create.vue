<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <!-- breadcrumbs Start -->
            <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
            <!-- breadcrumbs end -->
            <div class="col-xl-8 col-8 float-right text-right">
              <div class="btn-group c-w-100">
                <router-link :to="{ name: 'departments.index' }" class="btn btn-info">
                  <i class="fas fa-long-arrow-alt-left" /> {{ $t('Back') }}
                </router-link>
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <!-- form start -->
          <form role="form" @submit.prevent="saveDepartment" @keydown="form.onKeydown($event)">
            <div class="card-body">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">{{ $t('Name') }}
                    <span class="required">*</span></label>
                  <input id="name" v-model="form.name" type="text" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }" name="name"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="form" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="status">{{ $t('Status') }}</label>
                  <select id="status" v-model="form.status" class="form-control"
                    :class="{ 'is-invalid': form.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="form" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="note">{{ $t('Note') }}</label>
                <textarea id="note" v-model="form.note" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('note') }" :placeholder="$t('Write your note here!')" />
                <has-error :form="form" field="note" />
              </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <div class="dtable-footer">
                <div class="form-group row display-per-page">
                  <v-button :loading="form.busy" class="btn btn-success">
                    <i class="fas fa-save" /> {{ $t('Save') }}
                  </v-button>
                  <button type="reset" class="btn btn-info" @click="form.reset()">
                    <i class="fas fa-power-off" /> {{ $t('Reset') }}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Department') }
  },
  data: () => ({
    breadcrumbsCurrent: 'Create Department',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Departments',
        url: 'departments.index',
      },
      {
        name: 'Create',
        url: '',
      },
    ],
    form: new Form({
      name: '',
      note: '',
      status: 1,
    }),
    loading: true,
  }),
  methods: {
    // save category
    async saveDepartment() {
      await this.form
        .post(window.location.origin + '/api/departments')
        .then(() => {
          toast.fire({
            type: 'success',
            title: this.$t('Department added successfully'),
          })
          this.$router.push({ name: 'departments.index' })
        })
        .catch((error) => {
          this.handleSubmitError(error)
        })
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
        this.form.errors.set(translatedErrors)
        toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
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

      // Get current locale
      const currentLocale = this.$i18n.locale || 'en'
      const isArabic = currentLocale === 'ar'

      // Field label mapping for department form fields
      const fieldLabelMap = {
        name: this.$t('Name'),
        status: this.$t('Status'),
        note: this.$t('Note'),
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
        
        // Custom validation patterns for department form
        { 
          re: /Department\s+name\s+is\s+required\.?/i, 
          en: `Department name is required`,
          ar: `اسم القسم مطلوب` 
        },
        { 
          re: /Name\s+is\s+required\.?/i, 
          en: `Name is required`,
          ar: `الاسم مطلوب` 
        },
        { 
          re: /Status\s+is\s+required\.?/i, 
          en: `Status is required`,
          ar: `الحالة مطلوبة` 
        },
        { 
          re: /Note\s+is\s+required\.?/i, 
          en: `Note is required`,
          ar: `الملاحظة مطلوبة` 
        },
        { 
          re: /Please\s+enter\s+a\s+department\s+name\.?/i, 
          en: `Please enter a department name`,
          ar: `يرجى إدخال اسم القسم` 
        },
        { 
          re: /Please\s+provide\s+a\s+name\.?/i, 
          en: `Please provide a name`,
          ar: `يرجى تقديم اسم` 
        },
        { 
          re: /Department\s+already\s+exists\.?/i, 
          en: `Department already exists`,
          ar: `القسم موجود بالفعل` 
        },
        { 
          re: /This\s+department\s+name\s+is\s+already\s+taken\.?/i, 
          en: `This department name is already taken`,
          ar: `اسم القسم هذا مستخدم بالفعل` 
        },
        { 
          re: /The\s+name\s+has\s+already\s+been\s+taken\.?/i, 
          en: `The name has already been taken`,
          ar: `الاسم مستخدم بالفعل` 
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
  },
}
</script>

<style scoped>
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

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Form Control Styling */
.form-control {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Form Group Labels */
.form-group label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
  display: block;
}

.required {
  color: #DC3545;
  font-weight: bold;
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

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
