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
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            {{ $t('Fiscal Years') }}
                        </h3>
                        <div class="card-tools">
                            <button
                                class="btn btn-primary"
                                @click="openModal"
                            >
                                <i class="fas fa-plus" />
                                {{ $t('Add Fiscal Year') }}
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>{{ $t('ID') }}</th>
                                        <th>{{ $t('Name') }}</th>
                                        <th>{{ $t('Start Date') }}</th>
                                        <th>{{ $t('End Date') }}</th>
                                        <th>{{ $t('Status') }}</th>
                                        <th>{{ $t('Accounting Periods') }}</th>
                                        <th>{{ $t('Actions') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="fiscalYear in fiscalYears" :key="fiscalYear.id">
                                        <td>{{ fiscalYear.id }}</td>
                                        <td>{{ fiscalYear.full_name }}</td>
                                        <td>{{ formatDate(fiscalYear.start_date) }}</td>
                                        <td>{{ formatDate(fiscalYear.end_date) }}</td>
                                        <td>
                                            <span 
                                                :class="fiscalYear.is_active ? 'badge badge-success' : 'badge badge-secondary'"
                                            >
                                                {{ fiscalYear.is_active ? $t('Active') : $t('Inactive') }}
                                            </span>
                                        </td>
                                        <td>{{ fiscalYear.accounting_periods_count || 0 }}</td>
                                        <td>
                                            <div class="btn-group">
                                                <button
                                                    class="btn btn-info btn-sm"
                                                    @click="editFiscalYear(fiscalYear)"
                                                    :title="$t('Edit')"
                                                >
                                                    <i class="fas fa-edit" />
                                                </button>
                                                <button
                                                    class="btn btn-success btn-sm"
                                                    @click="setCurrentFiscalYear(fiscalYear)"
                                                    :title="$t('Set as Current')"
                                                    :disabled="fiscalYear.id === currentFiscalYearId"
                                                >
                                                    <i class="fas fa-check" />
                                                </button>
                                                <button
                                                    class="btn btn-danger btn-sm"
                                                    @click="deleteFiscalYear(fiscalYear)"
                                                    :title="$t('Delete')"
                                                    :disabled="fiscalYear.accounting_periods_count > 0"
                                                >
                                                    <i class="fas fa-trash" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fiscal Year Modal -->
        <div class="modal fade" id="fiscalYearModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ isEditMode ? $t('Edit Fiscal Year') : $t('Add Fiscal Year') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="saveFiscalYear">
                        <div class="modal-body">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name">{{ $t('Name') }} <span class="required">*</span></label>
                                    <input
                                        id="name"
                                        v-model="form.name"
                                        type="text"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('name') }"
                                        :placeholder="$t('Enter fiscal year name')"
                                    />
                                    <has-error :form="form" field="name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="is_active">{{ $t('Status') }}</label>
                                    <select
                                        id="is_active"
                                        v-model="form.is_active"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('is_active') }"
                                    >
                                        <option :value="true">{{ $t('Active') }}</option>
                                        <option :value="false">{{ $t('Inactive') }}</option>
                                    </select>
                                    <has-error :form="form" field="is_active" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="start_date">{{ $t('Start Date') }} <span class="required">*</span></label>
                                    <input
                                        id="start_date"
                                        v-model="form.start_date"
                                        type="date"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('start_date') }"
                                    />
                                    <has-error :form="form" field="start_date" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="end_date">{{ $t('End Date') }} <span class="required">*</span></label>
                                    <input
                                        id="end_date"
                                        v-model="form.end_date"
                                        type="date"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('end_date') }"
                                    />
                                    <has-error :form="form" field="end_date" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="note">{{ $t('Note') }}</label>
                                <textarea
                                    id="note"
                                    v-model="form.note"
                                    class="form-control"
                                    :class="{ 'is-invalid': form.errors.has('note') }"
                                    rows="3"
                                    :placeholder="$t('Enter any additional notes')"
                                ></textarea>
                                <has-error :form="form" field="note" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                {{ $t('Cancel') }}
                            </button>
                            <v-button :loading="form.busy" class="btn btn-primary">
                                {{ isEditMode ? $t('Update') : $t('Save') }}
                            </v-button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Form from 'vform';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    middleware: ['auth', 'check-permissions'],
    metaInfo() {
        return { title: this.$t('Fiscal Years') };
    },
    components: {
        SettingsSidebar: () => import('~/components/SettingsSidebar'),
    },
    data: () => ({
        breadcrumbsCurrent: 'Fiscal Years',
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
                name: 'Fiscal Years',
                url: '',
            },
        ],
        fiscalYears: [],
        currentFiscalYearId: null,
        isEditMode: false,
        form: new Form({
            id: null,
            name: '',
            start_date: '',
            end_date: '',
            is_active: true,
            note: '',
        }),
    }),
    computed: {
        ...mapGetters({
            appInfo: 'operations/appInfo',
        }),
    },
    created() {
        this.getFiscalYears();
        this.getCurrentFiscalYear();
    },
    methods: {
        // Get all fiscal years
        async getFiscalYears() {
            try {
                const response = await axios.get('/api/fiscal-years');
                this.fiscalYears = response.data.data;
                
                // Auto-set current if only one fiscal year exists
                this.autoSetCurrentIfSingle();
            } catch (error) {
                console.error('Error fetching fiscal years:', error);
            }
        },
        
        // Auto-set current if only one item exists
        autoSetCurrentIfSingle() {
            if (this.fiscalYears.length === 1 && !this.currentFiscalYearId) {
                const fiscalYear = this.fiscalYears[0];
                this.setCurrentFiscalYear(fiscalYear);
            }
        },
        // Get current fiscal year
        async getCurrentFiscalYear() {
            try {
                const response = await axios.get('/api/fiscal-years/current');
                if (response.data.data) {
                    this.currentFiscalYearId = response.data.data.id;
                }
            } catch (error) {
                console.error('Error fetching current fiscal year:', error);
            }
        },
        // Open modal for adding/editing
        openModal() {
            this.isEditMode = false;
            this.form.reset();
            this.form.clear();
            this.form.id = null;
            $('#fiscalYearModal').modal('show');
        },
        // Edit fiscal year
        editFiscalYear(fiscalYear) {
            this.isEditMode = true;
            this.form.fill(fiscalYear);
            $('#fiscalYearModal').modal('show');
        },
        // Save fiscal year
        async saveFiscalYear() {
            try {
                if (this.isEditMode) {
                    console.log('Editing fiscal year with ID:', this.form.id);
                    await this.form.put(`/api/fiscal-years/${this.form.id}`);
                } else {
                    await this.form.post('/api/fiscal-years');
                }
                
                toast.fire({
                    type: 'success',
                    title: this.$t('Fiscal year saved successfully'),
                });
                
                $('#fiscalYearModal').modal('hide');
                this.getFiscalYears();
            } catch (error) {
                console.error('Error saving fiscal year:', error);
                if (error.response && error.response.data && error.response.data.message) {
                    toast.fire({
                        type: 'error',
                        title: error.response.data.message,
                    });
                } else {
                    toast.fire({
                        type: 'error',
                        title: this.$t('Error saving fiscal year'),
                    });
                }
            }
        },
        // Set current fiscal year
        async setCurrentFiscalYear(fiscalYear) {
            try {
                await axios.post('/api/fiscal-years/set-current', {
                    fiscal_year_id: fiscalYear.id
                });
                
                // Update the current fiscal year ID
                this.currentFiscalYearId = fiscalYear.id;
                
                toast.fire({
                    type: 'success',
                    title: this.$t('Current fiscal year set successfully'),
                });
                
                this.getFiscalYears();
            } catch (error) {
                console.error('Error setting current fiscal year:', error);
                if (error.response && error.response.data && error.response.data.message) {
                    toast.fire({
                        type: 'error',
                        title: error.response.data.message,
                    });
                } else {
                    toast.fire({
                        type: 'error',
                        title: this.$t('Error setting current fiscal year'),
                    });
                }
            }
        },
        // Delete fiscal year
        async deleteFiscalYear(fiscalYear) {
            if (confirm(this.$t('Are you sure you want to delete this fiscal year?'))) {
                try {
                    await axios.delete(`/api/fiscal-years/${fiscalYear.id}`);
                    
                    toast.fire({
                        type: 'success',
                        title: this.$t('Fiscal year deleted successfully'),
                    });
                    
                    this.getFiscalYears();
                } catch (error) {
                    console.error('Error deleting fiscal year:', error);
                    if (error.response && error.response.data && error.response.data.message) {
                        toast.fire({
                            type: 'error',
                            title: error.response.data.message,
                        });
                    } else {
                        toast.fire({
                            type: 'error',
                            title: this.$t('Cannot delete fiscal year with existing accounting periods'),
                        });
                    }
                }
            }
        },
        // Format date
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        },
    },
};
</script>
