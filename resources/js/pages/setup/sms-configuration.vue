<template>
    <div>
        <!-- breadcrumbs Start -->
        <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
        <!-- breadcrumbs end -->
        <div class="row">
            <div class="col-12 col-xl-3">
                <SettingsSidebar />
            </div>
            <div class="col-12 col-xl-9">
                <form
                    role="form"
                    @submit.prevent="updateSettings"
                    @keydown="form.onKeydown($event)"
                >
                    <div class="card">
                        <div class="card-header setings-header">
                            <h3 class="card-title">
                                {{
                                    $t(
                                        'SMS Configuration'
                                    )
                                }}
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="twilio_account_sid"
                                        >{{
                                            $t(
                                                'TWILIO ACCOUNT SID'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="twilio_account_sid"
                                        v-model="form.twilio_account_sid"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has(
                                                    'twilio_account_sid'
                                                ),
                                        }"
                                        name="twilio_account_sid"
                                        :placeholder="
                                            $t(
                                                'TWILIO ACCOUNT SID'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="twilio_account_sid"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="twilio_auth_token"
                                        >{{
                                            $t(
                                                'TWILIO AUTH TOKEN'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="twilio_auth_token"
                                        v-model="form.twilio_auth_token"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has(
                                                    'twilio_auth_token'
                                                ),
                                        }"
                                        name="twilio_auth_token"
                                        :placeholder="
                                            $t(
                                                'TWILIO AUTH TOKEN'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="twilio_auth_token"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="twilio_from"
                                        >{{
                                            $t(
                                                'TWILIO FROM NUMBER'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="twilio_from"
                                        v-model="form.twilio_from"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has('twilio_from'),
                                        }"
                                        name="twilio_from"
                                        :placeholder="
                                            $t(
                                                'TWILIO FROM NUMBER'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="twilio_from"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="twilio_sms_service_sid"
                                        >{{
                                            $t(
                                                'TWILIO SMS SERVICE SID'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="twilio_sms_service_sid"
                                        v-model="form.twilio_sms_service_sid"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid': form.errors.has(
                                                'twilio_sms_service_sid'
                                            ),
                                        }"
                                        name="twilio_sms_service_sid"
                                        :placeholder="
                                            $t(
                                                'TWILIO SMS SERVICE SID'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="twilio_sms_service_sid"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <v-button
                                :loading="form.busy"
                                class="btn btn-primary"
                            >
                                <i class="fas fa-edit" />
                                {{ $t('Save changes') }}
                            </v-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Form from 'vform';
import axios from 'axios';

export default {
    middleware: ['auth', 'check-permissions'],
    metaInfo() {
        return { title: this.$t('SMS Configuration') };
    },
    data: () => ({
        isDemoMode: window.config.isDemoMode,
        breadcrumbsCurrent: 'Mail Configuration',
        breadcrumbs: [
            {
                name: 'Dashboard',
                url: 'home',
            },
            {
                name: 'Setup',
                url: 'setup.index',
            },
            {
                name: 'SMS Configuration',
                url: '',
            },
        ],
        form: new Form({
            twilio_account_sid: '',
            twilio_auth_token: '',
            twilio_from: '',
            twilio_sms_service_sid: '',
        }),
    }),

    created() {
        this.getSMSServerValues();
    },
    methods: {
        // get all current values
        async getSMSServerValues() {
            const { data } = await axios.get(
                window.location.origin + '/api/sms-configuration'
            );
            this.form.twilio_account_sid = data.twilio_account_sid;
            this.form.twilio_auth_token = data.twilio_auth_token;
            this.form.twilio_from = data.twilio_from;
            this.form.twilio_sms_service_sid = data.twilio_sms_service_sid;
        },

        // update settings
        async updateSettings() {
            if (this.isDemoMode) {
                return toast.fire({
                    type: 'warning',
                    title: this.$t(
                        'You are not allowed to do this in demo version.'
                    ),
                });
            }
            // for production
            await this.form
                .post(window.location.origin + '/api/update-sms-configuration')
                .then(() => {
                    toast.fire({
                        type: 'success',
                        title: this.$t(
                            'Settings updated successfully'
                        ),
                    });
                })
                .catch(() => {
                    toast.fire({
                        type: 'error',
                        title: this.$t('Please check your input and try again.'),
                    });
                });
            // action for demo
            // toast.fire({
            //   type: "warning",
            //   title: this.$t("You are not allowed to do this in demo version."),
            // });
        },
    },
};
</script>

<style scoped>
/* Card styling to match ClientForm */
.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  background: #fff;
}

.card-header.setings-header {
  background-color: #33a0d9;
  color: #ffffff;
  border-radius: 20px 20px 0 0;
  padding: 22px 16px;
  border-bottom: none;
}

/* Inputs styling to match ClientForm */
.form-control {
  background: #fff !important;
}

input[readonly] {
  background-color: #f8f9fa !important;
  color: #6c757d;
  border-color: #CED4DA;
  cursor: not-allowed;
}

.form-control:focus,
select.form-control:focus,
textarea.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

.required {
  color: #dc3545;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.15);
}

.custom-file-label {
  border-radius: 6px;
  text-align: left !important;
}

[dir="rtl"] .custom-file-label {
  text-align: left !important;
}

/* Project-standard buttons */
.btn-primary {
  background: #2AB930 !important;
  color: #fff !important;
  padding: 10px 20px !important;
  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: #fff !important;
  padding: 10px 20px !important;
  border: none !important;
}
</style>