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
                            {{ $t('Accounting Periods') }}
                        </h3>
                        <div class="card-tools">
                            <button
                                class="btn btn-primary"
                                @click="openModal"
                            >
                                <i class="fas fa-plus" />
                                {{ $t('Add Accounting Period') }}
                            </button>
                        </div>
                    </div>
                    <div class="card-body">
                        <!-- Filters -->
                        <div class="row mb-3">
                            <div class="col-md-4">
                                <select
                                    v-model="selectedFiscalYear"
                                    class="form-control"
                                    @change="filterByFiscalYear"
                                >
                                    <option value="">{{ $t('All Fiscal Years') }}</option>
                                    <option
                                        v-for="fy in fiscalYears"
                                        :key="fy.id"
                                        :value="fy.id"
                                    >
                                        {{ fy.full_name }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>{{ $t('Name') }}</th>
                                        <th>{{ $t('Fiscal Year') }}</th>
                                        <th>{{ $t('Start Date') }}</th>
                                        <th>{{ $t('End Date') }}</th>
                                        <th>{{ $t('Status') }}</th>
                                        <th>{{ $t('Actions') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="period in filteredPeriods" :key="period.id">
                                        <td>{{ period.full_name }}</td>
                                        <td>{{ period.fiscal_year ? period.fiscal_year.name : '-' }}</td>
                                        <td>{{ formatDate(period.start_date) }}</td>
                                        <td>{{ formatDate(period.end_date) }}</td>
                                        <td>
                                            <span 
                                                :class="getStatusClass(period)"
                                            >
                                                {{ getStatusText(period) }}
                                            </span>
                                        </td>
                                        <td>
                                            <div class="btn-group">
                                                <button
                                                    class="btn btn-info btn-sm"
                                                    @click="editPeriod(period)"
                                                    :title="$t('Edit')"
                                                >
                                                    <i class="fas fa-edit" />
                                                </button>
                                                <button
                                                    class="btn btn-success btn-sm"
                                                    @click="setCurrentPeriod(period)"
                                                    :title="$t('Set as Current')"
                                                    :disabled="period.is_closed"
                                                >
                                                    <i class="fas fa-check" />
                                                </button>
                                                <button
                                                    v-if="!period.is_closed"
                                                    class="btn btn-warning btn-sm"
                                                    @click="closePeriod(period)"
                                                    :title="$t('Close Period')"
                                                >
                                                    <i class="fas fa-lock" />
                                                </button>
                                                <button
                                                    v-else
                                                    class="btn btn-primary btn-sm"
                                                    @click="reopenPeriod(period)"
                                                    :title="$t('Reopen Period')"
                                                >
                                                    <i class="fas fa-unlock" />
                                                </button>
                                                <button
                                                    class="btn btn-danger btn-sm"
                                                    @click="deletePeriod(period)"
                                                    :title="$t('Delete')"
                                                    :disabled="period.is_closed"
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

        <!-- Accounting Period Modal -->
        <div class="modal fade" id="periodModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            {{ isEditMode ? $t('Edit Accounting Period') : $t('Add Accounting Period') }}
                        </h5>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="savePeriod">
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
                                        :placeholder="$t('Enter period name')"
                                    />
                                    <has-error :form="form" field="name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="fiscal_year_id">{{ $t('Fiscal Year') }} <span class="required">*</span></label>
                                    <select
                                        id="fiscal_year_id"
                                        v-model="form.fiscal_year_id"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('fiscal_year_id') }"
                                    >
                                        <option value="">{{ $t('Select Fiscal Year') }}</option>
                                        <option
                                            v-for="fy in fiscalYears"
                                            :key="fy.id"
                                            :value="fy.id"
                                        >
                                            {{ fy.full_name }}
                                        </option>
                                    </select>
                                    <has-error :form="form" field="fiscal_year_id" />
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
                            <div class="row">
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
                                <div class="form-group col-md-6">
                                    <label for="is_closed">{{ $t('Closed') }}</label>
                                    <select
                                        id="is_closed"
                                        v-model="form.is_closed"
                                        class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('is_closed') }"
                                    >
                                        <option :value="false">{{ $t('Open') }}</option>
                                        <option :value="true">{{ $t('Closed') }}</option>
                                    </select>
                                    <has-error :form="form" field="is_closed" />
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
        return { title: this.$t('Accounting Periods') };
    },
    components: {
        SettingsSidebar: () => import('~/components/SettingsSidebar'),
    },
    data: () => ({
        breadcrumbsCurrent: 'Accounting Periods',
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
                name: 'Accounting Periods',
                url: '',
            },
        ],
        accountingPeriods: [],
        fiscalYears: [],
        selectedFiscalYear: '',
        isEditMode: false,
        form: new Form({
            name: '',
            fiscal_year_id: '',
            start_date: '',
            end_date: '',
            is_active: true,
            is_closed: false,
            note: '',
        }),
    }),
    computed: {
        ...mapGetters({
            appInfo: 'operations/appInfo',
        }),
        filteredPeriods() {
            if (!this.selectedFiscalYear) {
                return this.accountingPeriods;
            }
            return this.accountingPeriods.filter(period => 
                period.fiscal_year_id == this.selectedFiscalYear
            );
        },
    },
    created() {
        this.getAccountingPeriods();
        this.getFiscalYears();
    },
    methods: {
        // Get all accounting periods
        async getAccountingPeriods() {
            try {
                const response = await axios.get('/api/accounting-periods');
                this.accountingPeriods = response.data.data;
            } catch (error) {
                console.error('Error fetching accounting periods:', error);
            }
        },
        // Get all fiscal years
        async getFiscalYears() {
            try {
                const response = await axios.get('/api/all-fiscal-years');
                this.fiscalYears = response.data.data;
            } catch (error) {
                console.error('Error fetching fiscal years:', error);
            }
        },
        // Filter by fiscal year
        filterByFiscalYear() {
            // This is handled by the computed property
        },
        // Open modal for adding/editing
        openModal() {
            this.isEditMode = false;
            this.form.reset();
            this.form.clear();
            $('#periodModal').modal('show');
        },
        // Edit period
        editPeriod(period) {
            this.isEditMode = true;
            this.form.fill(period);
            $('#periodModal').modal('show');
        },
        // Save period
        async savePeriod() {
            try {
                if (this.isEditMode) {
                    await this.form.put(`/api/accounting-periods/${this.form.id}`);
                } else {
                    await this.form.post('/api/accounting-periods');
                }
                
                toast.fire({
                    type: 'success',
                    title: this.$t('Accounting period saved successfully'),
                });
                
                $('#periodModal').modal('hide');
                this.getAccountingPeriods();
            } catch (error) {
                console.error('Error saving accounting period:', error);
            }
        },
        // Set current period
        async setCurrentPeriod(period) {
            try {
                await axios.post('/api/accounting-periods/set-current', {
                    accounting_period_id: period.id
                });
                
                toast.fire({
                    type: 'success',
                    title: this.$t('Current accounting period set successfully'),
                });
                
                this.getAccountingPeriods();
            } catch (error) {
                console.error('Error setting current period:', error);
            }
        },
        // Close period
        async closePeriod(period) {
            if (confirm(this.$t('Are you sure you want to close this accounting period?'))) {
                try {
                    await axios.post(`/api/accounting-periods/${period.id}/close`);
                    
                    toast.fire({
                        type: 'success',
                        title: this.$t('Accounting period closed successfully'),
                    });
                    
                    this.getAccountingPeriods();
                } catch (error) {
                    console.error('Error closing period:', error);
                }
            }
        },
        // Reopen period
        async reopenPeriod(period) {
            if (confirm(this.$t('Are you sure you want to reopen this accounting period?'))) {
                try {
                    await axios.post(`/api/accounting-periods/${period.id}/reopen`);
                    
                    toast.fire({
                        type: 'success',
                        title: this.$t('Accounting period reopened successfully'),
                    });
                    
                    this.getAccountingPeriods();
                } catch (error) {
                    console.error('Error reopening period:', error);
                }
            }
        },
        // Delete period
        async deletePeriod(period) {
            if (confirm(this.$t('Are you sure you want to delete this accounting period?'))) {
                try {
                    await axios.delete(`/api/accounting-periods/${period.id}`);
                    
                    toast.fire({
                        type: 'success',
                        title: this.$t('Accounting period deleted successfully'),
                    });
                    
                    this.getAccountingPeriods();
                } catch (error) {
                    console.error('Error deleting period:', error);
                    toast.fire({
                        type: 'error',
                        title: this.$t('Cannot delete closed accounting period'),
                    });
                }
            }
        },
        // Get status class
        getStatusClass(period) {
            if (period.is_closed) {
                return 'badge badge-danger';
            } else if (period.is_active) {
                return 'badge badge-success';
            } else {
                return 'badge badge-secondary';
            }
        },
        // Get status text
        getStatusText(period) {
            if (period.is_closed) {
                return this.$t('Closed');
            } else if (period.is_active) {
                return this.$t('Active');
            } else {
                return this.$t('Inactive');
            }
        },
        // Format date
        formatDate(date) {
            return new Date(date).toLocaleDateString();
        },
    },
};
</script>
