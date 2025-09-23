<template>
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">{{ $t('Update your profile') }}</h3>
        </div>
        <div class="card-body">
            <form
                class="form-horizontal"
                @submit.prevent="updateProfile"
                @keydown="form.onKeydown($event)"
            >
                <div class="form-group row">
                    <label for="profile_image" class="col-sm-2 col-form-label text-right"
                        >{{ $t('Profile Image') }}</label
                    >
                    <div class="col-sm-10">
                        <div class="d-flex align-items-center">
                            <div class="mr-3">
                                <img
                                    v-if="profileImagePreview"
                                    :src="profileImagePreview"
                                    alt="Profile Preview"
                                    class="rounded-circle"
                                    style="width: 80px; height: 80px; object-fit: cover;"
                                />
                                <div
                                    v-else
                                    class="rounded-circle bg-light d-flex align-items-center justify-content-center"
                                    style="width: 80px; height: 80px;"
                                >
                                    <i class="fas fa-user fa-2x text-muted"></i>
                                </div>
                            </div>
                            <div>
                                <input
                                    type="file"
                                    ref="profileImageInput"
                                    @change="handleImageChange"
                                    accept="image/*"
                                    class="form-control-file"
                                    :class="{ 'is-invalid': form.errors.has('profile_image') }"
                                    id="profile_image"
                                />
                                <small class="form-text text-muted">
                                    {{ $t('Select an image (JPEG, PNG, JPG, GIF) - Max 2MB') }}
                                </small>
                                <has-error :form="form" field="profile_image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label text-right"
                        >{{ $t('Name') }}
                        <span class="required">*</span></label
                    >
                    <div class="col-sm-10">
                        <input
                            type="text"
                            v-model="form.name"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('name') }"
                            id="name"
                            :placeholder="$t('Enter a name')"
                        />
                        <has-error :form="form" field="name" />
                    </div>
                </div>
                <div class="form-group row">
                    <label
                        for="email"
                        class="col-sm-2 col-form-label text-right"
                        >{{ $t('Email') }}
                        <span class="required">*</span></label
                    >
                    <div class="col-sm-10">
                        <input
                            type="email"
                            v-model="form.email"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('email') }"
                            id="email"
                            readonly
                            :placeholder="$t('Enter your email address')"
                        />
                        <has-error :form="form" field="email" />
                    </div>
                </div>
                <div class="form-group row">
                    <label
                        for="currentPassword"
                        class="col-sm-2 col-form-label text-right"
                        >{{ $t('Current Password') }}</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="password"
                            v-model="form.currentPassword"
                            class="form-control"
                            :class="{
                                'is-invalid':
                                    form.errors.has('currentPassword'),
                            }"
                            id="currentPassword"
                            :placeholder="$t('Current Password')"
                        />
                        <has-error :form="form" field="currentPassword" />
                    </div>
                </div>
                <div class="form-group row">
                    <label
                        for="newPassword"
                        class="col-sm-2 col-form-label text-right"
                        >{{ $t('New Password') }}</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="password"
                            v-model="form.newPassword"
                            class="form-control"
                            :class="{
                                'is-invalid': form.errors.has('newPassword'),
                            }"
                            id="newPassword"
                            :placeholder="
                                $t('Enter new password')
                            "
                        />
                        <has-error :form="form" field="newPassword" />
                    </div>
                </div>
                <div class="form-group row">
                    <label
                        for="confirmPassword"
                        class="col-sm-2 col-form-label text-right"
                        >{{ $t('Confirm Password') }}</label
                    >
                    <div class="col-sm-10">
                        <input
                            type="password"
                            v-model="form.confirmPassword"
                            class="form-control"
                            :class="{
                                'is-invalid':
                                    form.errors.has('confirmPassword'),
                            }"
                            id="confirmPassword"
                            :placeholder="
                                $t('Enter confirm password')
                            "
                        />
                        <has-error :form="form" field="confirmPassword" />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                        <v-button :loading="form.busy" class="btn btn-success">
                            <i class="fas fa-edit" />
                            {{ $t('Save changes') }}
                        </v-button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Form from 'vform';
import axios from 'axios';

export default {
    middleware: 'auth',
    metaInfo() {
        return { title: this.$t('Update Profile') };
    },
    data: () => ({
        isDemoMode: window.config.isDemoMode,
        breadcrumbsCurrent: 'Update Profile',
        breadcrumbs: [
            {
                name: 'Dashboard',
                url: 'home',
            },
            {
                name: 'Update',
                url: '',
            },
        ],
        form: new Form({
            name: '',
            email: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            profile_image: null,
        }),
        loading: true,
        user: '',
        profileImagePreview: null,
    }),
    created() {
        this.getUser();
    },
    methods: {
        // get the user
        async getUser() {
            const { data } = await axios.get(
                window.location.origin + '/api/user'
            );
            this.user = data.data;
            this.form.name = data.data.name;
            this.form.email = data.data.email;
            this.profileImagePreview = data.data.photo_url;
        },

        // handle image change
        handleImageChange(event) {
            const file = event.target.files[0];
            if (file) {
                // Validate file size (2MB max)
                if (file.size > 2 * 1024 * 1024) {
                    toast.fire({
                        type: 'error',
                        title: this.$t('File size must be less than 2MB'),
                    });
                    return;
                }
                
                // Validate file type
                const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
                if (!allowedTypes.includes(file.type)) {
                    toast.fire({
                        type: 'error',
                        title: this.$t('Please select a valid image file (JPEG, PNG, JPG, GIF)'),
                    });
                    return;
                }
                
                this.form.profile_image = file;
                
                // Create preview
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.profileImagePreview = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        // update profile
        async updateProfile() {
            if (this.isDemoMode) {
                return toast.fire({
                    type: 'warning',
                    title: this.$t(
                        'You are not allowed to do this in demo version.'
                    ),
                });
            }
            
            // Create FormData for file upload
            const formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('email', this.form.email);
            formData.append('currentPassword', this.form.currentPassword);
            formData.append('newPassword', this.form.newPassword);
            formData.append('confirmPassword', this.form.confirmPassword);
            
            if (this.form.profile_image) {
                formData.append('profile_image', this.form.profile_image);
            }
            
            try {
                await axios.post(window.location.origin + '/api/update-profile', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                
                toast.fire({
                    type: 'success',
                    title: this.$t('Profile updated successfully'),
                });
                
                // Refresh user data to get updated profile image
                await this.getUser();
                
                // Reset form but keep the profile image preview
                this.form.reset();
                this.form.profile_image = null;
            } catch (error) {
                if (error.response && error.response.data.errors) {
                    this.form.errors.record(error.response.data.errors);
                }
                toast.fire({
                    type: 'error',
                    title: this.$t('Opps...something went wrong'),
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
