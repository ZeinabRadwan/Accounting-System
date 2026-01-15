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
                <div class="card custom-card w-100">
                    <!-- /.card-header -->
                    <div class="card-body position-relative">
                        <!-- Filters and Action Inline -->
                        <div class="row align-items-center mb-3">
                            <div class="col-md-6 col-lg-4 mb-2 mb-md-0">
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
                            <div class="col-md-6 col-lg-8 text-right">
                                <div class="btn-group c-w-100">
                                    <button
                                        class="btn btn-primary"
                                        @click="openModal"
                                    >
                                        {{ $t('Add Accounting Period') }}
                                        <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <GeneralTable
                            :columns="accountingPeriodColumns"
                            :rows="filteredPeriods"
                            table-id="printMe"
                            wrapper-class="mt-3"
                            :show-actions="true"
                        >
                            <template #cell-fiscal_year="{ row }">
                                {{ row.fiscal_year ? row.fiscal_year.name : '-' }}
                            </template>
                            <template #cell-start_date="{ row }">
                                {{ formatDate(row.start_date) }}
                            </template>
                            <template #cell-end_date="{ row }">
                                {{ formatDate(row.end_date) }}
                            </template>
                            <template #cell-status="{ row }">
                                <span 
                                    :class="getStatusClass(row)"
                                >
                                    {{ getStatusText(row) }}
                                </span>
                            </template>
                            <template #actions="{ row, index }">
                                <div class="action-dropdown" :class="{ open: openActionIndex === index }">
                                    <button type="button" class="action-icon-btn" :data-action-index="index" @click.stop="toggleAction(index)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z" fill="#023033"/>
                                        </svg>
                                    </button>
                                    <div class="action-menu" v-if="openActionIndex === index">
                                        <div class="action-menu-header">
                                            <span class="action-menu-title">{{ $t('Actions') }}</span>
                                            <button type="button" class="action-menu-close" @click="toggleAction(index)">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="#" @click.prevent="editPeriod(row)">
                                                    <i class="fas fa-edit"></i>
                                                    {{ $t('Edit') }}
                                                </a>
                                            </li>
                                            <li v-if="!row.is_closed && row.id !== currentPeriodId">
                                                <a href="#" @click.prevent="setCurrentPeriod(row)">
                                                    <i class="fas fa-check"></i>
                                                    {{ $t('Set as Current') }}
                                                </a>
                                            </li>
                                            <li v-if="!row.is_closed">
                                                <a href="#" @click.prevent="closePeriod(row)">
                                                    <i class="fas fa-lock"></i>
                                                    {{ $t('Close Period') }}
                                                </a>
                                            </li>
                                            <li v-if="row.is_closed">
                                                <a href="#" @click.prevent="reopenPeriod(row)">
                                                    <i class="fas fa-unlock"></i>
                                                    {{ $t('Reopen Period') }}
                                                </a>
                                            </li>
                                            <li v-if="!row.is_closed">
                                                <a href="#" @click.prevent="deletePeriod(row)">
                                                    <i class="fas fa-trash"></i>
                                                    {{ $t('Delete') }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </template>
                        </GeneralTable>
                    </div>
                    <!-- /.card-body -->
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
                            <v-button :loading="form.busy" class="btn btn-success">
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
        GeneralTable: () => import('~/components/GeneralTable'),
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
        currentPeriodId: null,
        fiscalYears: [],
        selectedFiscalYear: '',
        isEditMode: false,
        openActionIndex: null,
        form: new Form({
            id: null,
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
        accountingPeriodColumns() {
            return [
                { key: 'id', label: this.$t('ID') },
                { key: 'full_name', label: this.$t('Name') },
                { key: 'fiscal_year', label: this.$t('Fiscal Year') },
                { key: 'start_date', label: this.$t('Start Date') },
                { key: 'end_date', label: this.$t('End Date') },
                { key: 'status', label: this.$t('Status') },
            ];
        },
    },
    created() {
        this.getAccountingPeriods();
        this.getFiscalYears();
        this.getCurrentPeriod();
    },
    mounted() {
        document.addEventListener('click', this.onClickOutside);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.onClickOutside);
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        // Action dropdown methods
        toggleAction(index) {
            this.openActionIndex = this.openActionIndex === index ? null : index;
            
            if (this.openActionIndex === index) {
                this.$nextTick(() => {
                    this.positionDropdown(index);
                });
            }
        },
        positionDropdown(index) {
            const button = document.querySelector(`[data-action-index="${index}"]`);
            if (button) {
                const rect = button.getBoundingClientRect();
                const menu = button.closest('.action-dropdown')?.querySelector('.action-menu');
                if (menu) {
                    // Check if page direction is RTL
                    const isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
                    
                    if (isRTL) {
                        menu.style.left = '45px';
                        menu.style.right = 'auto';
                    } else {
                        menu.style.left = `${rect.right - 200}px`; // 200px is min-width
                        menu.style.right = 'auto';
                    }
                    menu.style.top = `${rect.bottom + 8}px`;
                }
            }
        },
        onClickOutside() {
            this.openActionIndex = null;
        },
        handleScroll() {
            if (this.openActionIndex !== null) {
                this.positionDropdown(this.openActionIndex);
            }
        },
        handleResize() {
            if (this.openActionIndex !== null) {
                this.positionDropdown(this.openActionIndex);
            }
        },
        // Get all accounting periods
        async getAccountingPeriods() {
            try {
                const response = await axios.get('/api/accounting-periods');
                this.accountingPeriods = response.data.data;
                console.log('Accounting periods loaded:', this.accountingPeriods);
                
                // Update current period ID based on is_active flag
                this.getCurrentPeriod();
                
                // Auto-set current if only one accounting period exists
                this.autoSetCurrentIfSingle();
            } catch (error) {
                console.error('Error fetching accounting periods:', error);
            }
        },
        
        // Get accounting periods by fiscal year
        async getAccountingPeriodsByFiscalYear(fiscalYearId) {
            try {
                const response = await axios.get(`/api/accounting-periods/by-fiscal-year/${fiscalYearId}`);
                this.accountingPeriods = response.data.data;
                console.log('Accounting periods loaded for fiscal year:', this.accountingPeriods);
                
                // Update current period ID based on is_active flag
                this.getCurrentPeriod();
            } catch (error) {
                console.error('Error fetching accounting periods by fiscal year:', error);
            }
        },
        
        // Reset current accounting period when fiscal year changes
        async resetCurrentAccountingPeriod() {
            if (!this.selectedFiscalYear) return;
            
            try {
                const response = await axios.post('/api/accounting-periods/reset-current', {
                    fiscal_year_id: this.selectedFiscalYear
                });
                
                // Refresh the accounting periods list
                await this.getAccountingPeriodsByFiscalYear(this.selectedFiscalYear);
                
                console.log('Current accounting period reset:', response.data.message);
            } catch (error) {
                console.error('Error resetting current accounting period:', error);
                // If no periods exist for the fiscal year, just refresh the list
                await this.getAccountingPeriodsByFiscalYear(this.selectedFiscalYear);
            }
        },
        
        // Auto-set current if only one item exists
        autoSetCurrentIfSingle() {
            if (this.accountingPeriods.length === 1 && !this.currentPeriodId) {
                const period = this.accountingPeriods[0];
                if (!period.is_closed) {
                    this.setCurrentPeriod(period);
                }
            }
        },
        // Get all fiscal years
        async getFiscalYears() {
            try {
                const response = await axios.get('/api/all-fiscal-years');
                this.fiscalYears = response.data.data;
                console.log('Fiscal years loaded:', this.fiscalYears);
            } catch (error) {
                console.error('Error fetching fiscal years:', error);
                toast.fire({
                    type: 'error',
                    title: this.$t('Error loading fiscal years'),
                });
            }
        },
        // Get current accounting period (find the one with is_active = true)
        getCurrentPeriod() {
            const activePeriod = this.accountingPeriods.find(period => period.is_active);
            this.currentPeriodId = activePeriod ? activePeriod.id : null;
        },
        // Filter by fiscal year
        async filterByFiscalYear() {
            if (this.selectedFiscalYear) {
                // Load accounting periods for the selected fiscal year
                await this.getAccountingPeriodsByFiscalYear(this.selectedFiscalYear);
                
                // Reset current accounting period to the first one in the selected fiscal year
                await this.resetCurrentAccountingPeriod();
            } else {
                // Load all accounting periods
                await this.getAccountingPeriods();
            }
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
            
            // Manually set all form fields to ensure proper mapping
            this.form.id = period.id;
            this.form.name = period.name;
            this.form.fiscal_year_id = period.fiscal_year_id;
            this.form.start_date = period.start_date;
            this.form.end_date = period.end_date;
            this.form.is_active = period.is_active;
            this.form.is_closed = period.is_closed;
            this.form.note = period.note;
            
            $('#periodModal').modal('show');
        },
        // Save period
        async savePeriod() {
            try {
                if (this.isEditMode) {
                    if (!this.form.id) {
                        throw new Error('Period ID is missing for update operation');
                    }
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
                if (error.response && error.response.data && error.response.data.message) {
                    toast.fire({
                        type: 'error',
                        title: error.response.data.message,
                    });
                } else {
                    toast.fire({
                        type: 'error',
                        title: this.$t('Error saving accounting period'),
                    });
                }
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
                
                // Refresh the accounting periods list to get updated is_active flags
                await this.getAccountingPeriods();
                
                // Update the current period ID based on the refreshed data
                this.getCurrentPeriod();
            } catch (error) {
                console.error('Error setting current period:', error);
                if (error.response && error.response.data && error.response.data.message) {
                    toast.fire({
                        type: 'error',
                        title: error.response.data.message,
                    });
                } else {
                    toast.fire({
                        type: 'error',
                        title: this.$t('Error setting current accounting period'),
                    });
                }
            }
        },
        // Close period
        async closePeriod(period) {
            if (confirm(this.$t('Are you sure you want to close this accounting period?'))) {
                try {
                    const response = await axios.post(`/api/accounting-periods/${period.id}/close`);
                    
                    toast.fire({
                        type: 'success',
                        title: response.data.message || this.$t('Accounting period closed successfully'),
                    });
                    
                    // Refresh the accounting periods list to get updated is_closed flags
                    await this.getAccountingPeriods();
                } catch (error) {
                    console.error('Error closing period:', error);
                    if (error.response && error.response.data && error.response.data.message) {
                        toast.fire({
                            type: 'error',
                            title: error.response.data.message,
                        });
                    } else {
                        toast.fire({
                            type: 'error',
                            title: this.$t('Error closing accounting period'),
                        });
                    }
                }
            }
        },
        // Reopen period
        async reopenPeriod(period) {
            if (confirm(this.$t('Are you sure you want to reopen this accounting period?'))) {
                try {
                    const response = await axios.post(`/api/accounting-periods/${period.id}/reopen`);
                    
                    toast.fire({
                        type: 'success',
                        title: response.data.message || this.$t('Accounting period reopened successfully'),
                    });
                    
                    // Refresh the accounting periods list to get updated is_closed flags
                    await this.getAccountingPeriods();
                } catch (error) {
                    console.error('Error reopening period:', error);
                    if (error.response && error.response.data && error.response.data.message) {
                        toast.fire({
                            type: 'error',
                            title: error.response.data.message,
                        });
                    } else {
                        toast.fire({
                            type: 'error',
                            title: this.$t('Error reopening accounting period'),
                        });
                    }
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
                    if (error.response && error.response.data && error.response.data.message) {
                        toast.fire({
                            type: 'error',
                            title: error.response.data.message,
                        });
                    } else {
                        toast.fire({
                            type: 'error',
                            title: this.$t('Cannot delete closed accounting period'),
                        });
                    }
                }
            }
        },
        // Get status class
        getStatusClass(period) {
            if (period.is_closed) {
                return 'badge bg-danger';
            } else if (period.is_active) {
                return 'badge bg-success';
            } else {
                return 'badge bg-secondary';
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

<style scoped>
.table-custom {
  border: none !important;
  overflow: visible !important;
}

/* Action dropdown styles */
.action-dropdown {
  position: relative;
  display: inline-block;
}

.action-icon-btn {
  border: none;
  width: 24px;
  height: 24px;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
}

.action-menu {
  position: fixed;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 8px 20px 0px #00000014;
  border-radius: 12px;
  min-width: 200px;
  z-index: 9999;
  max-height: 80vh;
  overflow: hidden;
  animation: slideInDown 0.3s ease-out;
}

/* RTL Support for Action Menu */
[dir="rtl"] .action-menu {
  left: 45px !important;
  right: auto !important;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.action-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5fb;
  background: #f8fafc;
  border-radius: 12px 12px 0 0;
}

.action-menu-title {
  font-size: 14px;
  font-weight: 600;
  color: #023033;
}

.action-menu-close {
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.action-menu-close:hover {
  background: #e5e7eb;
  color: #374151;
}

.action-menu ul {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.action-menu li {
  border-bottom: 1px solid #f1f5fb;
}

.action-menu li:last-child {
  border-bottom: none;
}

.action-menu li a {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #023033;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  gap: 10px;
}

.action-menu li a i {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.action-menu li a:hover {
  background: #f8fafc;
  color: #2AB930;
  transform: translateX(2px);
}

.action-menu li a:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #2AB930;
  transform: scaleY(0);
  transition: transform 0.2s ease;
}

.action-menu li a:hover:before {
  transform: scaleY(1);
}

/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
  overflow: visible;
}

/* Custom Status Badge Styling */
.general-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.general-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.general-table .badge.bg-secondary {
  background: #F8F9FA !important;
  color: #6C757D !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

/* Create Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}
</style>
