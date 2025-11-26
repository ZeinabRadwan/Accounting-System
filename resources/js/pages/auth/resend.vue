<template>
    <div>
        <div class="container-fluid">
            <div class="row no-gutter">
                <!-- The content half -->
                <div class="col-12" style="background: #ffffff;">
                    <div class="auth-wrapper d-flex align-items-center py-5" style="width: 100%;">
                        <!-- Demo content-->
                        <div class="container">
                            <!-- Two Column Layout -->
                            <div class="row register-page-layout">
                                <div class="col-md-6 register-form-column">
                                    <form @submit.prevent="resendVerification" @keydown="verificationForm.onKeydown($event)" class="register-form">
                                        <!-- Form Title -->
                                        <h2 class="register-form-title">{{ $t('resend_verification_link') }}</h2>
                                        
                                        <!-- Error Message Display -->
                                        <div v-if="message && type === 'danger'" class="alert alert-danger mb-4">
                                            {{ message }}
                                        </div>
                                        
                                        <!-- Success Message Display -->
                                        <div v-if="showSentMessage && message && type === 'success'" class="alert alert-success mb-4">
                                            {{ message }}
                                        </div>
                                        
                                        <!-- Email -->
                                        <div class="form-group mb-3">
                                            <input v-model="verificationForm.email" id="email" name="email" :class="{
                                                'is-invalid': verificationForm.errors.has('email'),
                                            }" class="form-control input-radius-10 border-0 px-4 text-primary" type="text"
                                                :placeholder="$t('Email')" />
                                            <has-error :form="verificationForm" field="email" class="ml-4" />
                                        </div>
                                        
                                        <!-- Submit Button -->
                                        <div class="register-submit-btn-wrapper">
                                            <v-button :loading="verificationForm.busy"
                                                class="btn btn-block mb-2 register-submit-btn">
                                                <strong>{{ $t("Send") }}</strong>
                                                <i class="fas fa-sign-in-alt" style="transform: scaleX(-1);" />
                                            </v-button>
                                        </div>
                                        
                                        <!-- Success Message Content -->
                                        <div v-if="showSentMessage && type === 'success'" class="mt-4">
                                            <h3 class="mb-3">{{ $t('one_more_step') }}</h3>
                                            <p class="mb-3">
                                                {{ $t("We've sent an email to") }}
                                                <span class="text-indigo font-weight-bold">{{ verificationForm.email }}</span>.
                                                {{
                                                    $t(
                                                        "Please click the confirmation link in it to finalize your account"
                                                    )
                                                }}
                                            </p>
                                            <p>
                                                {{
                                                    $t(
                                                        "Didn't get the email? Please check your spam folder or"
                                                    )
                                                }}
                                                <button @click="resendVerification" class="btn p-0 resend-link-text">
                                                    {{ $t("Resend Verification") }}
                                                </button>
                                            </p>
                                        </div>
                                        
                                        <!-- Don't have account / Register link -->
                                        <div class="row justify-content-center mt-3">
                                            <div class="mx-2 already-registered-text">
                                                <span class="already-registered-question">{{ $t('dont_have_account') }}</span>
                                                <router-link :to="{ name: 'register' }" class="login-link-text">
                                                    {{ $t('register') }}
                                                </router-link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <!-- Platform Features Column -->
                                <div class="col-md-6 platform-features-column">
                                    <div class="platform-features-content">
                                        <router-link to="/" class="platform-logo-link">
                                            <img v-if="appInfo" :src="appInfo.blackLogo" :alt="appInfo.companyName"
                                                class="lg-logo img-fluid logo-width" />
                                        </router-link>
                                        <h2 class="platform-title">{{ $t('platform_title') }}</h2>
                                        <p class="platform-description">{{ $t('platform_description') }}</p>
                                        <h3 class="platform-includes-title">{{ $t('platform_includes') }}</h3>
                                        <div class="platform-features-grid">
                                            <div class="feature-card">{{ $t('electronic_invoicing') }}</div>
                                            <div class="feature-card">{{ $t('sales_pos_management') }}</div>
                                            <div class="feature-card">{{ $t('inventory_management') }}</div>
                                            <div class="feature-card">{{ $t('accounting_general_ledger') }}</div>
                                            <div class="feature-card">{{ $t('branch_management') }}</div>
                                            <div class="feature-card">{{ $t('customer_relationship') }}</div>
                                            <div class="feature-card">{{ $t('hr_employee_affairs') }}</div>
                                            <div class="feature-card">{{ $t('integrated_workflow') }}</div>
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
    </div>
</template>
<script>
import Form from "vform";
import { mapGetters } from "vuex";

export default {
  layout: "basic",
  middleware: "guest",
  metaInfo() {
    return { title: this.$t("find_domain") };
  },
  data: () => ({
    isDemoMode: window.config.isDemoMode,
    message: "",
    type: null,
    verificationForm: new Form({
      email: "",
    }),
    showSentMessage: false,
    appName: window.config.appName,
    host: location.host,
  }),
  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo"]),
  },
  methods: {
    async resendVerification() {
      if(this.isDemoMode){
        return toast.fire({
          type: "warning",
          title: this.$t("You are not allowed to do this in demo version."),
        });
      }
      await this.verificationForm
        .post("/api/email/resend")
        .then(({ data }) => {
          this.message = data.message;
          this.type = "success";
          this.showSentMessage = true;
        })
        .catch((e) => {
          this.message = e.response.data.message;
          this.type = "danger";
        })
        .finally(() => { });
    },
  },
};
</script>

<style scoped>
* {
    font-family: 'Almarai', sans-serif;
}

/* Exclude Font Awesome icons from Almarai font */
.fa,
.fas,
.far,
.fab,
.fa-solid,
.fa-regular,
.fa-brands,
[class^="fa-"],
[class*=" fa-"] {
    font-family: "Font Awesome 7 Free", "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
}

.input-radius-10 {
    border-radius: 10px !important;
}

.input-radius-10:focus {
    border: 1px solid #0775AF !important;
    outline: none;
}

.register-submit-btn-wrapper {
    padding: 1px;
    margin: 1rem 0 0.5rem 0;
}

.register-submit-btn {
    background: #0775AF !important;
    border: 1px solid #0775AF !important;
    padding: 12px;
    border-radius: 9px;
    color: #ffffff;
    font-weight: 500;
    transition: all 0.3s ease;
    width: 100%;
    margin: 0;
}

.register-submit-btn:hover {
    background: #06608a !important;
    color: #ffffff;
}

.register-submit-btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(7, 117, 175, 0.25);
}

/* Register form styling */
.register-form {
    border: 1px solid #CBD0DD;
    border-radius: 10px;
    padding: 1.5rem;
}

.register-form-title {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: right;
}

/* RTL support for form title */
[dir="rtl"] .register-form-title {
    text-align: right;
}

[dir="ltr"] .register-form-title {
    text-align: left;
}

/* Already registered text styling */
.already-registered-text {
    color: #000000;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.already-registered-question {
    color: #000000;
}

.login-link-text {
    color: #0775AF !important;
    text-decoration: none;
    transition: color 0.2s ease;
}

.login-link-text:hover {
    color: #06608a !important;
    text-decoration: underline;
}

.resend-link-text {
    color: #0775AF !important;
    text-decoration: none;
    transition: color 0.2s ease;
}

.resend-link-text:hover {
    color: #06608a !important;
    text-decoration: underline;
}

/* Register page layout */
.register-page-layout {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
}

.register-form-column {
    width: 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.platform-features-column {
    width: 50%;
    flex: 0 0 50%;
    max-width: 50%;
}

.platform-features-content {
    border: 1px solid #CBD0DD;
    border-radius: 10px;
    padding: 2rem;
    height: 100%;
}

.platform-logo-link {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.platform-logo-link img {
    display: block;
}

.logo-width {
    max-width: 300px;
}

.platform-title {
    font-size: 22px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.platform-description {
    color: #586687;
    font-size: 16px;
    line-height: 35px;
    margin-bottom: 1.5rem;
}

.platform-includes-title {
    font-size: 20px;
    color: #000000;
    font-weight: 700;
    margin-bottom: 1rem;
}

.platform-features-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.feature-card {
    background: #0775AF1A;
    border-radius: 10px;
    padding: 16px;
    color: #000000;
    font-size: 16px;
    /* line-height: 1.5; */
    font-weight: 500;
    width: fit-content;
    display: inline-block;
    margin: 0.25rem 0;
}

/* RTL support for platform features */
[dir="rtl"] .platform-title,
[dir="rtl"] .platform-description,
[dir="rtl"] .platform-includes-title {
    text-align: right;
}

[dir="ltr"] .platform-title,
[dir="ltr"] .platform-description,
[dir="ltr"] .platform-includes-title {
    text-align: left;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .register-form-column,
    .platform-features-column {
        width: 100%;
        flex: 0 0 100%;
        margin-bottom: 2rem;
    }

    .platform-features-grid {
        flex-direction: column;
    }
}
</style>
