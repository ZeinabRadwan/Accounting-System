<template>
  <div>
    <auth-wrapper :title="$t('resend_verification_link')">
      <template #form>
        <form @submit.prevent="resendVerification" @keydown="verificationForm.onKeydown($event)">
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
                $t("Please click the confirmation link in it to finalize your account")
              }}
            </p>
            <p>
              {{
                $t("Didn't get the email? Please check your spam folder or")
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
      </template>
    </auth-wrapper>
  </div>
</template>
<script>
import Form from "vform";
import { mapGetters } from "vuex";
import AuthWrapper from '@/components/auth/AuthWrapper.vue';

export default {
  layout: "basic",
  middleware: "guest",
  components: {
    AuthWrapper,
  },
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
/* No unique styles needed - all styles are in AuthWrapper */
</style>
