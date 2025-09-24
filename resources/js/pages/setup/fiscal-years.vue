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
                    <div class="card-header setings-header">
                        <h3 class="card-title">{{ $t('Fiscal Years') }}</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body position-relative">
                        <div class="row">
                            <div class="col-xl-8 col-8 float-right text-right">
                                <div class="btn-group c-w-100">
                                    <button
                                        class="btn btn-primary"
                                        @click="openModal"
                                    >
                                        {{ $t('Add Fiscal Year') }}
                                        <i class="fas fa-plus-circle d-none d-sm-inline-block" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive table-custom mt-3" id="printMe">
                            <table class="table fiscal-years-table">
                                <thead>
                                    <th>{{ $t('ID') }}</th>
                                    <th>{{ $t('Name') }}</th>
                                    <th>{{ $t('Start Date') }}</th>
                                    <th>{{ $t('End Date') }}</th>
                                    <th>{{ $t('Status') }}</th>
                                    <th>{{ $t('Accounting Periods') }}</th>
                                    <th class="text-right no-print">{{ $t('Actions') }}</th>
                                </thead>
                                <tbody>
                                    <tr v-for="fiscalYear in fiscalYears" :key="fiscalYear.id">
                                        <td>{{ fiscalYear.id }}</td>
                                        <td>{{ fiscalYear.full_name }}</td>
                                        <td>{{ formatDate(fiscalYear.start_date) }}</td>
                                        <td>{{ formatDate(fiscalYear.end_date) }}</td>
                                        <td>
                                            <span 
                                                :class="fiscalYear.is_active ? 'badge bg-success' : 'badge bg-danger'"
                                            >
                                                {{ fiscalYear.is_active ? $t('Active') : $t('Inactive') }}
                                            </span>
                                        </td>
                                        <td>{{ fiscalYear.accounting_periods_count || 0 }}</td>
                                        <td class="text-right no-print">
                                            <div class="action-dropdown" :class="{ open: openActionIndex === fiscalYear.id }">
                                                <button type="button" class="action-icon-btn" :data-action-index="fiscalYear.id" @click.stop="toggleAction(fiscalYear.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                        <path d="M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z" fill="#023033"/>
                                                    </svg>
                                                </button>
                                                <div class="action-menu" v-if="openActionIndex === fiscalYear.id">
                                                    <div class="action-menu-header">
                                                        <span class="action-menu-title">Actions</span>
                                                        <button type="button" class="action-menu-close" @click="toggleAction(fiscalYear.id)">
                                                            <i class="fas fa-times"></i>
                                                        </button>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="#" @click.prevent="editFiscalYear(fiscalYear)">
                                                                <i class="fas fa-edit"></i>
                                                                {{ $t('Edit') }}
                                                            </a>
                                                        </li>
                                                        <li v-if="fiscalYear.id !== currentFiscalYearId">
                                                            <a href="#" @click.prevent="setCurrentFiscalYear(fiscalYear)">
                                                                <i class="fas fa-check"></i>
                                                                {{ $t('Set as Current') }}
                                                            </a>
                                                        </li>
                                                        <li v-if="fiscalYear.accounting_periods_count === 0">
                                                            <a href="#" @click.prevent="deleteFiscalYear(fiscalYear)">
                                                                <i class="fas fa-trash"></i>
                                                                {{ $t('Delete') }}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- /.card-body -->
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
        openActionIndex: null,
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
                const menu = document.querySelector('.action-menu');
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

<style scoped>
.table-custom {
  border: none !important;
  overflow: visible !important;
}

.fiscal-years-table {
  border-collapse: separate;
  border-spacing: 0;
}

.fiscal-years-table thead th {
  background-color: #33a0d9;
  color: #ffffff;
  padding: 8px;
  border: none !important;
  border-color: inherit !important;
  font-weight: 400;
}

.fiscal-years-table thead tr {
  border: none !important;
}

.fiscal-years-table thead th:first-child {
  border-top-left-radius: 10px;
}

.fiscal-years-table thead th:last-child {
  border-top-right-radius: 10px;
}

/* RTL styles for Arabic language */
[dir="rtl"] .fiscal-years-table thead th:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 10px;
}

[dir="rtl"] .fiscal-years-table thead th:last-child {
  border-top-right-radius: 0;
  border-top-left-radius: 10px;
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
.fiscal-years-table .badge.bg-success {
  background: #F6FEF4 !important;
  color: #2AB930 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding: 10px 16px;
}

.fiscal-years-table .badge.bg-danger {
  background: #FEF4F4 !important;
  color: #DC3545 !important;
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
