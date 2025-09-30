<template>
    <div class="container-fluid">
        <div class="row no-gutter">
            <!-- The image half -->
            <div class="col-md-6 d-none d-md-flex bg-image"></div>
            <!-- The content half -->
            <div class="col-md-6 bg-light">
                <div class="auth-wrapper d-flex align-items-center py-5">
                    <!-- Demo content-->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-lg-10 col-xl-8 mx-auto">
                                <div class="text-center">
                                    <router-link to="/">
                                        <img
                                            v-if="appInfo"
                                            :src="appInfo.blackLogo"
                                            :alt="appInfo.companyName"
                                            class="lg-logo img-fluid logo-width"
                                        />
                                    </router-link>
                                    <div
                                        v-if="
                                            !verificationForm.email && appInfo
                                        "
                                    >
                                        <p class="text-22 mb-4 mt-2">
                                            {{
                                                $t(
                                                    'Sign Up Instantly Free for'
                                                ) +
                                                ' ' +
                                                appInfo.trial_day_count +
                                                ' ' +
                                                $t(
                                                    'days, no credit card required'
                                                ) +
                                                '.'
                                            }}
                                        </p>
                                    </div>

                                    <div
                                        v-if="isDemoMode"
                                        class="alert alert-danger"
                                    >
                                        To prevent the creation of multiple
                                        sub-domains, we have disabled the
                                        registration feature for the demo. You
                                        can access the Tenant panel
                                        <a
                                            href="https://john.arqam.sa/login"
                                            >here</a
                                        >
                                    </div>
                                </div>
                                <form
                                    v-if="!verificationForm.email"
                                    @submit.prevent="tenantRegister"
                                    @keydown="form.onKeydown($event)"
                                >
                                    <!-- Error Message Display -->
                                    <div
                                        v-if="message && type === 'danger'"
                                        class="alert alert-danger mb-4"
                                    >
                                        {{ message }}
                                    </div>
                                    <!-- Full Name-->
                                    <div class="form-group mb-3">
                                        <input
                                            id="name"
                                            v-model="form.name"
                                            :class="{
                                                'is-invalid':
                                                    form.errors.has('name'),
                                            }"
                                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                            type="text"
                                            name="name"
                                            :placeholder="$t('Name')"
                                        />
                                        <has-error
                                            :form="form"
                                            field="name"
                                            class="ml-4"
                                        />
                                    </div>
                                    <!-- Email -->
                                    <div class="form-group mb-3">
                                        <input
                                            v-model="form.email"
                                            id="email"
                                            name="email"
                                            :class="{
                                                'is-invalid':
                                                    form.errors.has('email'),
                                            }"
                                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                            type="email"
                                            :placeholder="$t('Email')"
                                        />
                                        <has-error
                                            :form="form"
                                            field="email"
                                            class="ml-4"
                                        />
                                    </div>
                                    <!-- domain -->
                                    <div class="form-group mb-3">
                                        <div class="d-flex url">
                                            <input
                                                v-model="form.domain"
                                                id="domain"
                                                name="domain"
                                                :class="{
                                                    'is-invalid':
                                                        form.errors.has(
                                                            'domain'
                                                        ),
                                                }"
                                                class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                type="text"
                                                :placeholder="$t('domain')"
                                            />
                                            <span style="height: 100%; line-height: 2">{{ host }}</span>
                                        </div>
                                        <has-error
                                            :form="form"
                                            field="domain"
                                            class="ml-4"
                                        />
                                    </div>
                                    <!-- Company -->
                                    <div class="form-group mb-3">
                                        <input
                                            v-model="form.company"
                                            id="company"
                                            name="company"
                                            :class="{
                                                'is-invalid':
                                                    form.errors.has('company'),
                                            }"
                                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                            type="text"
                                            :placeholder="
                                                $t('Company Name')
                                            "
                                        />
                                        <has-error
                                            :form="form"
                                            field="company"
                                            class="ml-4"
                                        />
                                    </div>
                                    <!-- Password -->
                                    <div class="form-group mb-3">
                                        <input
                                            v-model="form.password"
                                            id="password"
                                            name="password"
                                            :class="{
                                                'is-invalid':
                                                    form.errors.has('password'),
                                            }"
                                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                            type="password"
                                            :placeholder="$t('password')"
                                        />
                                        <has-error
                                            :form="form"
                                            field="password"
                                            class="ml-4"
                                        />
                                    </div>
                                    <!-- Password -->
                                    <div class="form-group mb-3">
                                        <input
                                            v-model="form.password_confirmation"
                                            id="password_confirmation"
                                            name="password_confirmation"
                                            :class="{
                                                'is-invalid': form.errors.has(
                                                    'password_confirmation'
                                                ),
                                            }"
                                            class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                            type="password"
                                            :placeholder="
                                                $t('confirm_password')
                                            "
                                        />
                                        <has-error
                                            :form="form"
                                            field="password_confirmation"
                                            class="ml-4"
                                        />
                                    </div>

                                    <!-- terms and conditions -->
                                    <div class="row mb-5 ml-2">
                                        <checkbox
                                            v-model="form.terms_and_conditions"
                                            id="terms_and_conditions"
                                            name="terms_and_conditions"
                                            :class="{
                                                'is-invalid': form.errors.has(
                                                    'terms_and_conditions'
                                                ),
                                            }"
                                            required
                                        >
                                            {{ $t('register_policy') }}
                                        </checkbox>
                                        <has-error
                                            :form="form"
                                            field="terms_and_conditions"
                                        />
                                    </div>
                                    <!-- Submit Button -->
                                    <v-button
                                        :loading="form.busy"
                                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                                    >
                                        <i class="fas fa-sign-in-alt" />
                                        <strong>{{ $t('register') }}</strong>
                                    </v-button>
                                    <div class="row justify-content-between">
                                        <router-link
                                            :to="{ name: 'find-domain' }"
                                            class="mx-2"
                                        >
                                            {{ $t('already_registered') }}
                                        </router-link>
                                        <router-link
                                            :to="{ name: 'resend' }"
                                            class="mx-2"
                                        >
                                            {{ $t('resend_verification_link') }}
                                        </router-link>
                                    </div>
                                </form>

                                <div class="mt-5" v-else>
                                    <div
                                        v-if="message"
                                        class="alert"
                                        :class="
                                            type == 'success'
                                                ? 'alert-success'
                                                : 'alert-danger'
                                        "
                                    >
                                        {{ message }}
                                        <span v-if="type != 'success'">
                                            {{ $t('please') }}
                                            <router-link
                                                :to="{ name: 'find-domain' }"
                                                >{{ $t('login') }}</router-link
                                            >
                                        </span>
                                    </div>
                                    <h3>{{ $t('register_next_step') }}</h3>
                                    <p class="text-22 mb-4 mt-2">
                                        {{ $t('email_sent') }}
                                        <span class="text-indigo">
                                            {{ verificationForm.email }} </span
                                        >.
                                        {{ $t('confirm_account') }}
                                    </p>
                                    <p>
                                        {{ $t('check_email') }}
                                        <button
                                            @click="resendVerification"
                                            class="btn p-0 text-indigo"
                                        >
                                            {{ $t('resend_verification_link') }}
                                        </button>
                                    </p>
                                    <div class="mt-3">
                                        <router-link
                                            :to="{ 
                                                name: 'find-domain', 
                                                query: { 
                                                    email: verificationForm.email,
                                                    domain: form.domain 
                                                } 
                                            }"
                                            class="btn btn-outline-primary btn-sm"
                                        >
                                            <i class="fas fa-sign-in-alt mr-1"></i>
                                            {{ $t('go_to_login') }}
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                </div>
            </div>
            <!-- End -->
        </div>
    </div>
</template>
<script>
import Form from 'vform';
import { mapGetters } from 'vuex';

export default {
    layout: 'basic',
    middleware: 'guest',
    metaInfo() {
        return { title: this.$t('register') };
    },
    data: () => ({
        isDemoMode: window.config.isDemoMode,
        form: new Form({
            name: '',
            email: '',
            domain: '',
            password: '',
            password_confirmation: '',
            terms_and_conditions: false,
        }),
        appName: window.config.appName,
        host: location.host,
        verificationForm: new Form({
            email: '',
        }),
        message: '',
        type: null,
    }),
    // Map Getters
    computed: {
        ...mapGetters('operations', ['appInfo']),
    },
    methods: {
        async tenantRegister() {
            if (this.isDemoMode) {
                return window.toast.fire({
                    type: 'warning',
                    title: this.$t(
                        'You are not allowed to do this in demo version.'
                    ),
                });
            }
            // register the user.
            try {
                const { data } = await this.form.post('/api/register');
                if (data) {
                    this.verificationForm.email = data.data.tenant.email;
                }
            } catch (error) {
                this.handleSubmitError(error);
            }
        },

        // handle form submission errors
        handleSubmitError(error) {
            // Handle SMTP configuration error specifically
            if (error.response && error.response.status === 422) {
                const errorData = error.response.data;
                if (errorData.message && errorData.message.includes('SMTP configuration')) {
                    // Show error message in the form area for SMTP issues
                    this.message = this.$t('System is unable to send email. Please contact the administrator.');
                    this.type = 'danger';
                    return;
                }
            }

            // Handle validation errors
            if (error?.response?.status === 422 && error.response?.data?.errors) {
                const serverErrors = error.response.data.errors || {}
                const translatedErrors = {}
                Object.keys(serverErrors).forEach((field) => {
                    const fieldErrors = serverErrors[field] || []
                    translatedErrors[field] = fieldErrors.map((message) => this.translateValidationMessage(message, field))
                })
                this.form.errors.set(translatedErrors)
                
                // Show first validation error as message
                const firstError = Object.values(translatedErrors)[0]
                if (firstError && firstError.length > 0) {
                    this.message = firstError[0]
                    this.type = 'danger'
                } else {
                    this.message = this.$t('Please check your input and try again.')
                    this.type = 'danger'
                }
            } else {
                // Handle other errors normally
                if (error.response && error.response.data && error.response.data.message) {
                    this.message = error.response.data.message;
                    this.type = 'danger';
                } else {
                    this.message = this.$t('An error occurred during registration. Please try again.');
                    this.type = 'danger';
                }
            }
        },

        // translate validation messages from backend to localized messages
        translateValidationMessage(message, field) {
            // If there is a direct translation key, use it
            const direct = this.$t(message)
            if (direct && direct !== message) return direct

            // Field label mapping for registration form fields
            const fieldLabelMap = {
                name: this.$t('Name'),
                email: this.$t('Email'),
                password: this.$t('Password'),
                password_confirmation: this.$t('Password Confirmation'),
                domain: this.$t('Domain'),
                company_name: this.$t('Company Name'),
                phone: this.$t('Phone'),
                address: this.$t('Address'),
                city: this.$t('City'),
                state: this.$t('State'),
                country: this.$t('Country'),
                zip_code: this.$t('Zip Code'),
                currency: this.$t('Currency'),
                timezone: this.$t('Timezone'),
                date_format: this.$t('Date Format'),
                time_format: this.$t('Time Format'),
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
                
                // Custom validation patterns for registration form
                { re: /This\s+domain\s+has\s+already\s+been\s+taken\.?/i, ar: `هذا النطاق مستخدم بالفعل` },
                { re: /The\s+email\s+has\s+already\s+been\s+taken\.?/i, ar: `البريد الإلكتروني مستخدم بالفعل` },
                { re: /The\s+password\s+confirmation\s+does\s+not\s+match\.?/i, ar: `تأكيد كلمة المرور غير متطابق` },
                { re: /Password\s+confirmation\s+does\s+not\s+match\.?/i, ar: `تأكيد كلمة المرور غير متطابق` },
                { re: /The\s+password\s+and\s+password\s+confirmation\s+must\s+match\.?/i, ar: `كلمة المرور وتأكيدها يجب أن يتطابقا` },
                { re: /Domain\s+is\s+required\.?/i, ar: `النطاق مطلوب` },
                { re: /Email\s+is\s+required\.?/i, ar: `البريد الإلكتروني مطلوب` },
                { re: /Password\s+is\s+required\.?/i, ar: `كلمة المرور مطلوبة` },
                { re: /Name\s+is\s+required\.?/i, ar: `الاسم مطلوب` },
                { re: /Company\s+name\s+is\s+required\.?/i, ar: `اسم الشركة مطلوب` },
                { re: /Please\s+enter\s+a\s+domain\.?/i, ar: `يرجى إدخال نطاق` },
                { re: /Please\s+enter\s+an\s+email\.?/i, ar: `يرجى إدخال بريد إلكتروني` },
                { re: /Please\s+enter\s+a\s+password\.?/i, ar: `يرجى إدخال كلمة مرور` },
                { re: /Please\s+enter\s+a\s+name\.?/i, ar: `يرجى إدخال اسم` },
                { re: /Please\s+enter\s+a\s+company\s+name\.?/i, ar: `يرجى إدخال اسم شركة` },
                
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
        async resendVerification() {
            if (this.isDemoMode) {
                return window.toast.fire({
                    type: 'warning',
                    title: this.$t(
                        'You are not allowed to do this in demo version.'
                    ),
                });
            }
            await this.verificationForm
                .post('/api/email/resend')
                .then(({ data }) => {
                    this.message = data.message;
                    this.type = 'success';
                })
                .catch((e) => {
                    this.message = e.response.data.message;
                    this.type = 'danger';
                });
        },
    },
};
</script>