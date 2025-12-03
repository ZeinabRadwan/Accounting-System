<template>
  <div>
    <auth-wrapper :title="$t('login')">
      <template #form>
        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
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
      </template>
    </auth-wrapper>
  </div>
</template>
<script>
import Form from "vform";
import Cookies from "js-cookie";
import { mapGetters } from "vuex";
import AuthWrapper from '@/components/auth/AuthWrapper.vue';

export default {
  layout: "basic",
  middleware: "guest",
  components: {
    AuthWrapper,
  },
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
      var regex = new RegExp(/^([a-z]+:\/{2})?([\w-]+\.[\w-]+\.\w+)$/);
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
/* Unique styles for login page */
.forgot-password-link {
  color: #0775AF !important;
  text-decoration: none;
  transition: color 0.2s ease;
}

.forgot-password-link:hover {
  color: #06608a !important;
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .forgot-password-link {
    font-size: 14px;
    display: inline-block;
    padding: 4px 0;
  }
}

@media (max-width: 480px) {
  .forgot-password-link {
    font-size: 13px;
  }
}
</style>
