<template>
    <div class="container-fluid p-0">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-8">
                <div class="back-image"
                     :style="'background-image: url('+urlGenerator(configData.company_banner)+')'">
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 pl-md-0">
                <div class="login-form d-flex align-items-center">
                    <form class="sign-in-sign-up-form w-100" ref="form" data-url="/register" action="store">
                        <div class="text-center mb-4">
                            <img
                                :src="configData.company_logo ?
                                urlGenerator(configData.company_logo) :
                                urlGenerator('/images/core.png')"
                                alt="" class="img-fluid logo">
                        </div>
                        <div class="form-row">
                            <div class="form-group col-12">
                                <h6 class="text-center mb-0">{{ $t('sign_up') }}</h6>
                                <p class="text-center text-muted">{{ $t('create_new_tenant') || 'Create a new tenant organization' }}</p>
                            </div>
                        </div>
                        
                        <!-- Company Information -->
                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="user_company_name">{{ $t('company_name') || 'Company Name' }}</label>
                                <app-input type="text"
                                           v-model="user.company_name"
                                           :placeholder="$t('enter_company_name') || 'My Company Inc.'"
                                           :required="true"
                                />
                                <small class="form-text text-muted">{{ $t('company_name_help') || 'Your organization\'s name. A unique tenant path will be generated automatically.' }}</small>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="user_first_name">{{ $t('first_name') }}</label>
                                <app-input type="text"
                                           v-model="user.first_name"
                                           :placeholder="$t('enter_first_name')"
                                           :required="true"
                                />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="user_last_name">{{ $t('last_name') }}</label>
                                <app-input type="text"
                                           v-model="user.last_name"
                                           :placeholder="$t('enter_last_name')"
                                           :required="true"
                                />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="user_email">{{ $t('email') }}</label>
                                <app-input type="email"
                                           v-model="user.email"
                                           :placeholder="$t('enter_email')"
                                           :required="true"
                                />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="user_password">{{ $t('password') }}</label>
                                <app-input type="password"
                                           v-model="user.password"
                                           :specialValidation="true"
                                           :show-password="true"
                                           :placeholder="$t('enter_your_password')"
                                           :required="true"
                                />
                                <PasswordWarning/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-12">
                                <label for="user_password_confirmation">{{ $t('confirm_password') }}</label>
                                <app-input type="password"
                                           same-as="user_password"
                                           v-model="user.password_confirmation"
                                           :show-password="true"
                                           :placeholder="$t('confirm_password')"
                                           :required="true"
                                />
                            </div>

                        </div>
                        <div class="form-row" v-if="recaptchaEnable == 1">
                            <div class="form-group col-12 px-0">
                                <re-captcha :site-key="siteKey"></re-captcha>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-12">
                                <app-load-more :preloader="preloader"
                                               :label="$t('sign_up')"
                                               type="submit"
                                               class-name="btn btn-primary btn-block text-center"
                                               @submit="submit"/>
                            </div>
                        </div>
                        <div
                            class="form-row form-row flex-column flex-md-row justify-content-center justify-content-md-between justify-content-lg-between">
                            <a :href="urlGenerator('/login')"
                               class="bluish-text d-flex align-items-center justify-content-center justify-content-lg-end">
                                <app-icon name="log-in" class="pr-2"/> {{ $t('login') }}
                            </a>
                        </div>
                        <div class="form-row">
                            <div class="col-12">
                                <p class="text-center mt-5">
                                    {{ $t('copyright_text') + configData.company_name }}
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ThemeMixin from "../../../../core/mixins/global/ThemeMixin";
    import PasswordWarning from './PasswordWarning';
    import {AuthMixin} from "./Mixins/AuthMixin";
    import {urlGenerator} from "../../../Helpers/AxiosHelper";

    export default {
        name: "Registration",
        mixins: [AuthMixin, ThemeMixin],
        components: {
            PasswordWarning
        },
        props: {
            siteKey: String,
            recaptchaEnable: {},
        },
        data() {
            return {
                urlGenerator,
                user: {
                    company_name: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },
                userData: {},
            }
        },

        methods: {
            submit() {
                this.save(this.user);
            },
            afterSuccess(res) {
                this.$toastr.s(res.data.message);
                
                // Check if we have a redirect URL from the response
                if (res.data.redirect_url) {
                    // Redirect to the tenant dashboard
                    window.location = urlGenerator(res.data.redirect_url);
                } else {
                    // Fallback redirect after 3 seconds
                    setTimeout(()=>{
                        window.location = urlGenerator('/');
                    }, 3000);
                }
            },
            afterError(res) {
                // Handle validation errors specifically
                if (res.data.errors) {
                    // Show validation errors
                    Object.keys(res.data.errors).forEach(field => {
                        const errorMessage = res.data.errors[field][0];
                        this.$toastr.e(`${field}: ${errorMessage}`);
                    });
                } else {
                    // Show general error message
                    this.$toastr.e(res.data.message);
                }
            }
        }

    }
</script>
