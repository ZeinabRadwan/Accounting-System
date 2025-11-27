<template>
  <div>
    <div class="container-fluid">
      <div class="row no-gutter">
        <!-- The content half -->
        <div class="col-12" style="background: #ffffff;">
          <div class="auth-wrapper d-flex align-items-center py-5" style="width: 100%;">
            <!-- Demo content-->
            <div class="container">
              <!-- Optional top message slot (for signup message, etc.) -->
              <div v-if="$slots.topMessage" class="signup-message-wrapper">
                <slot name="topMessage"></slot>
              </div>

              <!-- Two Column Layout -->
              <div class="row register-page-layout">
                <div class="col-md-6 register-form-column">
                  <div class="register-form">
                    <!-- Form Title -->
                    <h2 v-if="title" class="register-form-title">{{ title }}</h2>
                    
                    <!-- Form content slot -->
                    <slot name="form"></slot>
                  </div>
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
import { mapGetters } from 'vuex'

export default {
  name: 'AuthWrapper',
  props: {
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapGetters('operations', ['appInfo'])
  }
}
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

/* Signup message wrapper - Full width */
.signup-message-wrapper {
  width: 100%;
}

/* Shared input styling */
.input-radius-10 {
  border-radius: 10px !important;
}

.input-radius-10:focus {
  border: 1px solid #0775AF !important;
  outline: none;
}

/* Shared button styling */
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

/* Shared link styling */
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

/* Password input wrapper - shared */
.password-input-wrapper {
  position: relative;
}

.password-toggle-btn {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.password-toggle-btn:hover {
  color: #0775AF;
}

.password-toggle-btn:focus {
  outline: none;
}

.password-toggle-btn i {
  font-size: 16px;
}

/* RTL support for password toggle button */
[dir="rtl"] .password-toggle-btn {
  right: auto;
  left: 15px;
}

/* Domain host span - used in register and find-domain */
.domain-host-span {
  height: 80%;
  margin-left: 8px !important;
  margin-right: 8px !important;
  margin-top: 3px !important;
  background: #F7F7FC;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  padding: 0 12px;
  line-height: 2;
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

/* Platform features content */
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

/* Tablet and below (max-width: 1024px) */
@media (max-width: 1024px) {
  .register-page-layout {
    flex-direction: column;
    gap: 2rem;
  }

  .register-form-column,
  .platform-features-column {
    width: 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  .register-form {
    padding: 1.25rem;
  }

  .platform-features-content {
    padding: 1.5rem;
    height: auto;
  }

  .register-form-title {
    font-size: 22px;
    margin-bottom: 1.25rem;
  }

  .platform-title {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  .platform-description {
    font-size: 15px;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .platform-includes-title {
    font-size: 18px;
    margin-bottom: 0.75rem;
  }

  .feature-card {
    font-size: 14px;
    padding: 14px;
  }
}

/* Mobile (max-width: 768px) */
@media (max-width: 768px) {
  .auth-wrapper {
    padding: 1.5rem 0 !important;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Form group spacing on mobile */
  .form-group {
    margin-bottom: 1rem !important;
  }

  .form-group.mb-3 {
    margin-bottom: 1rem !important;
  }

  .signup-message-wrapper {
    margin-bottom: 1.5rem;
  }

  .register-page-layout {
    gap: 1.5rem;
  }

  .register-form-column,
  .platform-features-column {
    margin-bottom: 1.5rem;
  }

  .register-form {
    padding: 1rem;
    border-radius: 8px;
  }

  .register-form-title {
    font-size: 20px;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .register-submit-btn-wrapper {
    margin: 0.75rem 0 0.5rem 0;
  }

  .register-submit-btn {
    padding: 14px 16px;
    font-size: 15px;
    min-height: 48px;
  }

  .input-radius-10 {
    padding: 12px 16px !important;
    font-size: 16px;
  }

  .already-registered-text {
    flex-wrap: wrap;
    justify-content: center;
    font-size: 14px;
    gap: 0.5rem;
  }

  .already-registered-question {
    font-size: 14px;
  }

  .login-link-text,
  .resend-link-text {
    font-size: 14px;
  }

  .platform-features-content {
    padding: 1.25rem;
    border-radius: 8px;
  }

  .platform-logo-link {
    margin-bottom: 1rem;
  }

  .logo-width {
    max-width: 200px;
  }

  .platform-title {
    font-size: 18px;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .platform-description {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  .platform-includes-title {
    font-size: 16px;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  .platform-features-grid {
    gap: 8px;
  }

  .feature-card {
    font-size: 13px;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
    display: block;
    margin: 0;
  }

  .domain-host-span {
    font-size: 12px;
    padding: 0 10px;
    margin-left: 4px !important;
    margin-right: 4px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
  }

  /* Domain input wrapper on mobile */
  .d-flex.url {
    flex-wrap: wrap;
    gap: 8px;
  }

  .d-flex.url input {
    flex: 1;
    min-width: 0;
  }

  .password-toggle-btn {
    right: 12px;
    padding: 8px;
  }

  [dir="rtl"] .password-toggle-btn {
    left: 12px;
  }

  /* Alert messages on mobile */
  .alert {
    font-size: 14px;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
  }
}

/* Small mobile (max-width: 480px) */
@media (max-width: 480px) {
  .auth-wrapper {
    padding: 1rem 0 !important;
  }

  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  /* Form group spacing on small mobile */
  .form-group {
    margin-bottom: 0.875rem !important;
  }

  .form-group.mb-3 {
    margin-bottom: 0.875rem !important;
  }

  .register-form {
    padding: 0.875rem;
  }

  .domain-host-span {
    font-size: 11px;
    padding: 0 8px;
    max-width: 100px;
  }

  .d-flex.url {
    gap: 6px;
  }

  .register-form-title {
    font-size: 18px;
    margin-bottom: 0.875rem;
  }

  .register-submit-btn {
    padding: 12px;
    font-size: 14px;
  }

  .input-radius-10 {
    padding: 10px 14px !important;
    font-size: 16px;
  }

  .platform-features-content {
    padding: 1rem;
  }

  .logo-width {
    max-width: 150px;
  }

  .platform-title {
    font-size: 16px;
  }

  .platform-description {
    font-size: 13px;
  }

  .platform-includes-title {
    font-size: 15px;
  }

  .feature-card {
    font-size: 12px;
    padding: 10px;
  }

  /* Alert messages on small mobile */
  .alert {
    font-size: 13px;
    padding: 0.625rem 0.875rem;
    margin-bottom: 0.875rem;
  }
}

/* Large screens (min-width: 1200px) */
@media (min-width: 1200px) {
  .register-form {
    padding: 2rem;
  }

  .platform-features-content {
    padding: 2.5rem;
  }

  .register-form-title {
    font-size: 26px;
  }

  .platform-title {
    font-size: 24px;
  }

  .platform-description {
    font-size: 17px;
  }
}
</style>

