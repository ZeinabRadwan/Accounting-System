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
                                        'Mail Configuration'
                                    )
                                }}
                            </h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="mail_mailer"
                                        >{{
                                            $t(
                                                'MAIL MAILER'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_mailer"
                                        v-model="form.mail_mailer"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has('mail_mailer'),
                                        }"
                                        name="mail_mailer"
                                        :placeholder="
                                            $t(
                                                'MAIL MAILER'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="mail_mailer"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="mail_host"
                                        >{{
                                            $t(
                                                'MAIL HOST'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_host"
                                        v-model="form.mail_host"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has('mail_host'),
                                        }"
                                        name="mail_host"
                                        :placeholder="
                                            $t(
                                                'MAIL HOST'
                                            )
                                        "
                                        required
                                    />
                                    <has-error :form="form" field="mail_host" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="mail_port"
                                        >{{
                                            $t(
                                                'MAIL PORT'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_port"
                                        v-model="form.mail_port"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has('mail_port'),
                                        }"
                                        name="mail_port"
                                        :placeholder="
                                            $t(
                                                'MAIL PORT'
                                            )
                                        "
                                        required
                                    />
                                    <has-error :form="form" field="mail_port" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="mail_username"
                                        >{{
                                            $t(
                                                'MAIL USERNAME'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_username"
                                        v-model="form.mail_username"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has(
                                                    'mail_username'
                                                ),
                                        }"
                                        name="mail_username"
                                        :placeholder="
                                            $t(
                                                'MAIL USERNAME'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="mail_username"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="mail_password"
                                        >{{
                                            $t(
                                                'MAIL PASSWORD'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_password"
                                        v-model="form.mail_password"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has(
                                                    'mail_password'
                                                ),
                                        }"
                                        name="mail_password"
                                        :placeholder="
                                            $t(
                                                'MAIL PASSWORD'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="mail_password"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="mail_encryption"
                                        >{{
                                            $t(
                                                'MAIL ENCRYPTION'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_encryption"
                                        v-model="form.mail_encryption"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has(
                                                    'mail_encryption'
                                                ),
                                        }"
                                        name="mail_encryption"
                                        :placeholder="
                                            $t(
                                                'MAIL ENCRYPTION'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="mail_encryption"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="mail_from_address"
                                        >{{
                                            $t(
                                                'MAIL FROM ADDRESS'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_from_address"
                                        v-model="form.mail_from_address"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has(
                                                    'mail_from_address'
                                                ),
                                        }"
                                        name="mail_from_address"
                                        :placeholder="
                                            $t(
                                                'MAIL FROM ADDRESS'
                                            )
                                        "
                                        required
                                    />
                                    <has-error
                                        :form="form"
                                        field="mail_from_address"
                                    />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="mail_from_name"
                                        >{{
                                            $t(
                                                'MAIL FROM NAME'
                                            )
                                        }}
                                        <span class="required">*</span></label
                                    >
                                    <input
                                        id="mail_from_name"
                                        v-model="form.mail_from_name"
                                        type="text"
                                        class="form-control"
                                        :class="{
                                            'is-invalid':
                                                form.errors.has(
                                                    'mail_from_address'
                                                ),
                                        }"
                                        name="mail_from_name"
                                        :placeholder="
                                            $t(
                                                'MAIL FROM ADDRESS'
                                            )
                                        "
                                    />
                                    <has-error
                                        :form="form"
                                        field="mail_from_name"
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
                             <button type="button" class="btn btn-secondary float-right" :class="{ 'btn-loading': loading }" @click="testConnection()">
                                <i class="fas fa-wifi"></i> {{ $t("Test Connection") }}
                            </button>
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
        return { title: this.$t('Mail Configuration') };
    },
    data: () => ({
        isDemoMode: window.config.isDemoMode,
        breadcrumbsCurrent:
            'Mail Configuration',
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
                name: 'Mail Configuration',
                url: '',
            },
        ],
        form: new Form({
            mail_mailer: '',
            mail_host: '',
            mail_port: '',
            mail_username: '',
            mail_password: '',
            mail_encryption: '',
            mail_from_address: '',
            mail_from_name: '',
        }),
        loading : false,
    }),

    created() {
        this.getMailServerValues();
    },
    methods: {
        // get all current values
        async getMailServerValues() {
            const { data } = await axios.get(
                window.location.origin + '/api/mail-configuration'
            );
            this.form.mail_mailer = data.mail_mailer;
            this.form.mail_host = data.mail_host;
            this.form.mail_port = data.mail_port;
            this.form.mail_username = data.mail_username;
            this.form.mail_password = data.mail_password;
            this.form.mail_encryption = data.mail_encryption;
            this.form.mail_from_address = data.mail_from_address;
            this.form.mail_from_name = data.mail_from_name;
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
                .post(window.location.origin + '/api/update-mail-configuration')
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

        testConnection() {
        this.loading = true;
        axios
            .get( window.location.origin + "/api/send-test-connection-email")
            .then(() => {
        this.loading = false;
            toast.fire({
                type: "success",
                title: this.$t("Email sent. Your connection is secure"),
            });
            })
            .catch(() => {
        this.loading = false;
            toast.fire({
                type: "error",
                title: this.$t("Please check your input and try again."),
            });
            });
        }
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

/* Keep file inputs consistent if used */
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