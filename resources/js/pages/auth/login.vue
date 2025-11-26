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
                  <form @submit.prevent="login" @keydown="form.onKeydown($event)" class="register-form">
                    <!-- Form Title -->
                    <h2 class="register-form-title">{{ $t('login') }}</h2>

                    <!-- Email -->
                    <div class="form-group mb-3">
                      <input id="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }"
                        class="form-control input-radius-10 border-0 px-4 text-primary" type="email" name="email"
                        :placeholder="$t('email_placeholder')" />
                      <has-error :form="form" field="email" class="ml-4" />
                    </div>

                    <!-- Password -->
                    <div class="form-group mb-3">
                      <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }"
                        class="form-control input-radius-10 border-0 px-4 text-primary" type="password" name="password"
                        :placeholder="$t('password_placeholder')" />
                      <has-error :form="form" field="password" class="ml-4" />
                    </div>

                    <!-- Remember Me and Forgot Password -->
                    <div class="row mb-3">
                      <div class="col-md-6">
                        <checkbox v-model="remember" name="remember">
                          {{ $t("remember_me") }}
                        </checkbox>
                      </div>
                      <div class="col-md-6 text-right">
                        <router-link :to="{ name: 'password.request' }" class="forgot-password-link">
                          {{ $t("forgot_password") }}
                        </router-link>
                      </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="register-submit-btn-wrapper">
                      <v-button :loading="form.busy" class="btn btn-block mb-2 register-submit-btn">
                        <strong>{{ $t("login") }}</strong>
                        <i class="fas fa-sign-in-alt" style="transform: scaleX(-1);" />
                      </v-button>
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
import Cookies from "js-cookie";
import { mapGetters } from "vuex";

export default {
  layout: "basic",
  middleware: "guest",
  metaInfo() {
    return { title: this.$t("login") };
  },
  data: () => ({
    form: new Form({
      email: "",
      password: "",
    }),
    remember: false,
    appName: window.config.appName,
    isSubdomain: false,
    isDemoMode: window.config.isDemoMode
  }),

  // Map Getters
  computed: {
    ...mapGetters("operations", ["appInfo"]),
  },

  created() {
    this.isSubdomain = this.checkDomain(window.location.hostname);
    this.getSubdomain();
    console.log(this.getSubdomain());
  },

  methods: {
    async login() {
      try {
        // Submit the form.
        const loginRequest = await this.form.post("/api/login");
        if (loginRequest.status !== 200) {
          toast.fire({
            type: "error",
            title: this.$t("Something went wrong, please try again!"),
          });
          Object.keys(Cookies.get()).forEach(function (cookieName) {
            var neededAttributes = {
              // Here you pass the same attributes that were used when the cookie was created
              // and are required when removing the cookie
            };
            Cookies.remove(cookieName, neededAttributes);
          });
          return;
        }
        const { data } = loginRequest;

        // Save the token.
        this.$store.dispatch("auth/saveToken", {
          token: data.token,
          remember: this.remember,
        });

        // Fetch the user.
        await this.$store.dispatch("auth/fetchUser");

        // Show success toast
        toast.fire({
          type: "success",
          title: this.$t("Login successful! Redirecting"),
        });

        // Quick redirect without delay
        this.redirect();
      } catch (error) {
        console.error('Login error:', error);
        toast.fire({
          type: "error",
          title: this.$t("Something went wrong, please try again!"),
        });
      }
    },
    redirect() {
      const intendedUrl = Cookies.get("intended_url");
      if (intendedUrl) {
        Cookies.remove("intended_url");
        this.$router.push({ path: intendedUrl });
      } else {
        this.$router.push({ name: "home" });
      }
    },
    loginCredential(email, pass) {
      this.form.email = email;
      this.form.password = pass;
      this.login();
    },

    checkDomain(url) {
      url = url || "http://www.test-domain.com"; // just for the example
      var regex = new RegExp(/^([a-z]+\:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);
      return !!url.match(regex); // make sure it returns boolean
    },

    getSubdomain() {
      return window.location.hostname;
    },

    checkSubdomain(subdomainName) {
      const subdomain = this.getSubdomain();
      return subdomain.includes(subdomainName);
    }
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

.forgot-password-link {
  color: #0775AF !important;
  text-decoration: none;
  transition: color 0.2s ease;
}

.forgot-password-link:hover {
  color: #06608a !important;
  text-decoration: underline;
}

/* Register page layout */
.register-page-layout {
  align-items: flex-start;
  display: flex;
  flex-direction: row-reverse;
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
