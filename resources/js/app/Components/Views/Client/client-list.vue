<template>
  <div class="mb-primary col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    <!-- Client Management Header -->
    <div class="row mb-3">
      <div class="col-12 text-right">
        <button 
          class="btn btn-primary" 
          @click="navigateToCreateClient"
        >
          <i class="fas fa-plus mr-1"></i>
          {{ $t('add_new_client') }}
        </button>
      </div>
    </div>

    <!-- Client Table -->
    <app-table 
      class="mb-primary" 
      id="client-table"
      ref="clientTable"
      :options="options"
      @action="handleTableAction"
    />

    <!-- Email Management Modal -->
    <div class="modal fade" id="emailModal" tabindex="-1" role="dialog" aria-labelledby="emailModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="emailModalLabel">{{ $t('manage_client_emails') }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add New Email Form -->
            <div class="card mb-3">
              <div class="card-header">
                <h6 class="mb-0">{{ $t('add_new_email') }}</h6>
              </div>
              <div class="card-body">
                <form @submit.prevent="addEmail">
                  <div class="row">
                    <div class="col-md-8">
                      <div class="form-group">
                        <label>{{ $t('email_address') }} *</label>
                        <input 
                          v-model="emailForm.email" 
                          type="email" 
                          class="form-control"
                          :class="{ 'is-invalid': emailErrors.email }"
                          required
                        />
                        <div class="invalid-feedback" v-if="emailErrors.email">
                          {{ emailErrors.email }}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>{{ $t('notes') }}</label>
                        <input 
                          v-model="emailForm.notes" 
                          type="text" 
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="custom-control custom-checkbox">
                        <input 
                          type="checkbox" 
                          class="custom-control-input" 
                          id="emailPrimary"
                          v-model="emailForm.is_primary"
                        />
                        <label class="custom-control-label" for="emailPrimary">
                          {{ $t('primary_email') }}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="custom-control custom-checkbox">
                        <input 
                          type="checkbox" 
                          class="custom-control-input" 
                          id="emailVerified"
                          v-model="emailForm.is_verified"
                        />
                        <label class="custom-control-label" for="emailVerified">
                          {{ $t('verified') }}
                        </label>
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    class="btn btn-primary"
                    :disabled="isEmailSubmitting"
                  >
                    <span v-if="isEmailSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    {{ $t('add_email') }}
                  </button>
                </form>
              </div>
            </div>

            <!-- Existing Emails List -->
            <div class="card">
              <div class="card-header">
                <h6 class="mb-0">{{ $t('existing_emails') }}</h6>
              </div>
              <div class="card-body">
                <div v-if="clientEmails.length === 0" class="text-center text-muted py-3">
                  {{ $t('no_emails_found') }}
                </div>
                <div v-else class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>{{ $t('email') }}</th>
                        <th>{{ $t('status') }}</th>
                        <th>{{ $t('notes') }}</th>
                        <th>{{ $t('actions') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="email in clientEmails" :key="email.id">
                        <td>
                          <span v-if="email.is_primary" class="badge badge-primary mr-1">{{ $t('primary') }}</span>
                          {{ email.email }}
                        </td>
                        <td>
                          <span v-if="email.is_verified" class="badge badge-success">{{ $t('verified') }}</span>
                          <span v-else class="badge badge-warning">{{ $t('not_verified') }}</span>
                        </td>
                        <td>{{ email.notes || '-' }}</td>
                        <td>
                          <button 
                            @click="deleteEmail(email)"
                            class="btn btn-sm btn-danger"
                            :title="$t('delete_email')"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('close') }}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Management Modal -->
    <div class="modal fade" id="mobileModal" tabindex="-1" role="dialog" aria-labelledby="mobileModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="mobileModalLabel">{{ $t('manage_client_mobiles') }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- Add New Mobile Form -->
            <div class="card mb-3">
              <div class="card-header">
                <h6 class="mb-0">{{ $t('add_new_mobile') }}</h6>
              </div>
              <div class="card-body">
                <form @submit.prevent="addMobile">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>{{ $t('country_code') }}</label>
                        <select v-model="mobileForm.country_code" class="form-control">
                          <option value="+966">+966</option>
                          <option value="+971">+971</option>
                          <option value="+973">+973</option>
                          <option value="+974">+974</option>
                          <option value="+965">+965</option>
                          <option value="+968">+968</option>
                          <option value="+20">+20</option>
                          <option value="+1">+1</option>
                          <option value="+44">+44</option>
                          <option value="+33">+33</option>
                          <option value="+49">+49</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="form-group">
                        <label>{{ $t('mobile_number') }} *</label>
                        <input 
                          v-model="mobileForm.mobile_number" 
                          type="tel" 
                          class="form-control"
                          :class="{ 'is-invalid': mobileErrors.mobile_number }"
                          required
                        />
                        <div class="invalid-feedback" v-if="mobileErrors.mobile_number">
                          {{ mobileErrors.mobile_number }}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>{{ $t('notes') }}</label>
                        <input 
                          v-model="mobileForm.notes" 
                          type="text" 
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="custom-control custom-checkbox">
                        <input 
                          type="checkbox" 
                          class="custom-control-input" 
                          id="mobilePrimary"
                          v-model="mobileForm.is_primary"
                        />
                        <label class="custom-control-label" for="mobilePrimary">
                          {{ $t('primary_mobile') }}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="custom-control custom-checkbox">
                        <input 
                          type="checkbox" 
                          class="custom-control-input" 
                          id="mobileVerified"
                          v-model="mobileForm.is_verified"
                        />
                        <label class="custom-control-label" for="mobileVerified">
                          {{ $t('verified') }}
                        </label>
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    class="btn btn-primary"
                    :disabled="isMobileSubmitting"
                  >
                    <span v-if="isMobileSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    {{ $t('add_mobile') }}
                  </button>
                </form>
              </div>
            </div>

            <!-- Existing Mobiles List -->
            <div class="card">
              <div class="card-header">
                <h6 class="mb-0">{{ $t('existing_mobiles') }}</h6>
              </div>
              <div class="card-body">
                <div v-if="clientMobiles.length === 0" class="text-center text-muted py-3">
                  {{ $t('no_mobiles_found') }}
                </div>
                <div v-else class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>{{ $t('mobile_number') }}</th>
                        <th>{{ $t('status') }}</th>
                        <th>{{ $t('notes') }}</th>
                        <th>{{ $t('actions') }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="mobile in clientMobiles" :key="mobile.id">
                        <td>
                          <span v-if="mobile.is_primary" class="badge badge-primary mr-1">{{ $t('primary') }}</span>
                          {{ mobile.country_code }} {{ mobile.mobile_number }}
                        </td>
                        <td>
                          <span v-if="mobile.is_verified" class="badge badge-success">{{ $t('verified') }}</span>
                          <span v-else class="badge badge-warning">{{ $t('not_verified') }}</span>
                        </td>
                        <td>{{ mobile.notes || '-' }}</td>
                        <td>
                          <button 
                            @click="deleteMobile(mobile)"
                            class="btn btn-sm btn-danger"
                            :title="$t('delete_mobile')"
                          >
                            <i class="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('close') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoreLibrary from "../../../../core/helpers/CoreLibrary";
import * as actions from "../../../Config/ApiUrl";
import { TableHelpers } from "./mixins/TableHelpers";

export default {
  name: "ClientList",
  mixins: [TableHelpers],
  extends: CoreLibrary,
  data() {
    return {
      viewingClient: null,
      selectedLocale: null,
      selectedClient: null,
      clientTranslations: {},
      clientEmails: [],
      clientMobiles: [],
      isEmailSubmitting: false,
      isMobileSubmitting: false,
      isTranslationSubmitting: false,
      emailErrors: {},
      mobileErrors: {},
      translationErrors: {},
      emailForm: {
        email: '',
        is_primary: false,
        is_verified: false,
        notes: ''
      },
      mobileForm: {
        mobile_number: '',
        country_code: '+966',
        is_primary: false,
        is_verified: false,
        notes: ''
      },
      translationForm: {
        name: '',
        job: '',
        job_place: ''
      },
      availableLocales: [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' }
      ],
      options: {
        url: this.getTenantUrl('/clients/datatable'), // Use tenant-based URL
        name: this.$t("clients"),
        showHeader: true,
        showCount: true,
        showClearFilter: true,
        columns: [],
        filters: [
          {
            title: this.$t("client_type"),
            type: "checkbox",
            key: "type",
            option: [
              { id: 1, value: this.$t("individual") },
              { id: 2, value: this.$t("company") },
            ],
          },
          {
            title: this.$t("status"),
            type: "checkbox",
            key: "is_active",
            option: [
              { id: true, value: this.$t("active") },
              { id: false, value: this.$t("inactive") },
            ],
          },
          {
            title: this.$t("date_range"),
            type: "range-picker",
            key: "date_range",
            option: ["today", "thisMonth", "last7Days", "nextYear"],
          },
          {
            title: this.$t("search"),
            type: "text",
            key: "search",
            placeholder: this.$t("search_clients_by_name_cr_vat"),
          }
        ],
        paginationType: "pagination",
        responsive: true,
        rowLimit: 10,
        showAction: true,
        actions: [
          {
            title: this.$t('edit'),
            type: 'edit',
            icon: 'fas fa-edit',
            class: 'btn btn-sm btn-primary mr-1',
            action: 'edit'
          },
          {
            title: this.$t('delete'),
            type: 'delete',
            icon: 'fas fa-trash',
            class: 'btn btn-sm btn-danger',
            action: 'delete'
          }
        ],
        orderBy: "desc",
      },
      editingClient: null,
      isSubmitting: false,
      errors: {},
      clientForm: {
        name: '',
        type: 1,
        cr_number: '',
        vat_number: '',
        id_type_id: '',
        id_no: '',
        id_date: '',
        phone_no: '',
        dob: '',
        nationality_id: '',
        job: '',
        job_place: '',
        client_id: '',
        bank_id: '',
        iban: '',
        currency_id: '',
        avatar: '',
        is_active: true,
        balance: 0.00,
        // New email and mobile fields
        primary_email: '',
        primary_mobile: '',
        mobile_country_code: '+966',
        additional_emails: [],
        additional_mobiles: []
      },
    };
  },
  created() {
    this.options.columns = [...this.tableColumns, this.actionObj];
  },
  mounted() {
    console.log('Client list mounted');
    console.log('Options:', this.options);
    console.log('Actions config:', this.options.actions);
  },
  methods: {
    // Table Actions
    handleTableAction(client, action, active) {
      console.log('=== handleTableAction called ===');
      console.log('Client object:', client);
      console.log('Action object:', action);
      console.log('Active flag:', active);
      console.log('Action type:', action.type);
      
      // Check the action type and call appropriate method
      if (action.type === 'edit') {
        this.editClient(client);
      } else if (action.type === 'delete') {
        this.deleteClient(client);
      } else {
        console.log('Unknown action type:', action.type);
      }
    },

    // Client Operations
    navigateToCreateClient() {
      // Get current tenant ID from URL
      const currentPath = window.location.pathname;
      const tenantMatch = currentPath.match(/^\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
      
      if (tenantMatch) {
        const tenantId = tenantMatch[1];
        // Navigate to create client page with tenant prefix
        window.location.href = `/${tenantId}/clients/create`;
      } else {
        // Fallback to current path + /clients/create
        const basePath = currentPath.split('/').slice(0, -1).join('/');
        window.location.href = `${basePath}/clients/create`;
      }
    },

    // Edit client - navigate to edit page
    editClient(client) {
      console.log('=== editClient called ===');
      console.log('Client to edit:', client);
      
      const currentPath = window.location.pathname;
      const tenantMatch = currentPath.match(/^\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
      
      if (tenantMatch) {
        const tenantId = tenantMatch[1];
        const editUrl = `/${tenantId}/clients/${client.id}/edit`;
        console.log('Navigating to:', editUrl);
        window.location.href = editUrl;
      } else {
        const editUrl = `/clients/${client.id}/edit`;
        console.log('Navigating to (fallback):', editUrl);
        window.location.href = editUrl;
      }
    },

    async saveClient() {
      if (!this.validateClientForm()) {
        return;
      }

      this.isSubmitting = true;
      
      try {
        // Prepare the complete data including translation
        const requestData = { ...this.clientForm };
        
        // Add translation data if available
        if (this.clientTranslations && this.clientTranslations[this.otherLocale]) {
          const translation = this.clientTranslations[this.otherLocale];
          
          if (translation.name || translation.job || translation.job_place) {
            requestData.translation_name = translation.name || '';
            requestData.translation_job = translation.job || '';
            requestData.translation_job_place = translation.job_place || '';
            requestData.translation_locale = this.otherLocale;
          }
        }
        
        // Prepare emails and mobiles data
        const emailsData = [];
        const mobilesData = [];
        
        // Add primary email if provided
        if (requestData.primary_email) {
          emailsData.push({
            email: requestData.primary_email,
            is_primary: true,
            is_verified: false,
            notes: 'Primary email'
          });
        }
        
        // Add additional emails
        if (requestData.additional_emails && requestData.additional_emails.length > 0) {
          requestData.additional_emails.forEach(email => {
            if (email.email && email.email.trim()) {
              emailsData.push({
                email: email.email.trim(),
                is_primary: false,
                is_verified: false,
                notes: 'Additional email'
              });
            }
          });
        }
        
        // Add primary mobile if provided
        if (requestData.primary_mobile) {
          mobilesData.push({
            mobile_number: requestData.primary_mobile,
            country_code: requestData.mobile_country_code || '+966',
            is_primary: true,
            is_verified: false,
            notes: 'Primary mobile'
          });
        }
        
        // Add additional mobiles
        if (requestData.additional_mobiles && requestData.additional_mobiles.length > 0) {
          requestData.additional_mobiles.forEach(mobile => {
            if (mobile.mobile_number && mobile.mobile_number.trim()) {
              mobilesData.push({
                mobile_number: mobile.mobile_number.trim(),
                country_code: mobile.country_code || '+966',
                is_primary: false,
                is_verified: false,
                notes: 'Additional mobile'
              });
            }
          });
        }
        
        // Add emails and mobiles to request data
        if (emailsData.length > 0) {
          requestData.emails = emailsData;
        }
        if (mobilesData.length > 0) {
          requestData.mobiles = mobilesData;
        }
        
        let finalRequestData;
        if (requestData.avatar instanceof File) {
          finalRequestData = new FormData();
          Object.keys(requestData).forEach(key => {
            if (requestData[key] !== null && requestData[key] !== undefined && requestData[key] !== '') {
              if (key === 'emails' || key === 'mobiles') {
                finalRequestData.append(key, JSON.stringify(requestData[key]));
              } else {
                finalRequestData.append(key, requestData[key]);
              }
            }
          });
        } else {
          finalRequestData = requestData;
        }
        
        let response;
        if (this.isEditing) {
          // Update existing client
          response = await this.axiosPut({
            url: this.getTenantUrl(`/clients/${this.clientId}`),
            data: finalRequestData
          });
          this.$toastr.s(this.$t('client_updated_successfully'));
        } else {
          // Create new client
          response = await this.axiosPost({
            url: this.getTenantUrl('/clients'),
            data: finalRequestData
          });
          this.$toastr.s(this.$t('client_created_successfully'));
        }
        
        // Redirect to client list
        setTimeout(() => {
          window.location.href = this.getTenantUrl('/clients');
        }, 1000);
        
      } catch (error) {
        console.error('Save client error:', error);
        this.$toastr.e(this.$t('error_saving_client'));
      } finally {
        this.isSubmitting = false;
      }
    },

    validateClientForm() {
      this.errors = {};
      console.log('Validating form:', this.clientForm);
      
      if (!this.clientForm.name || this.clientForm.name.trim().length < 2) {
        this.errors.name = this.$t('name_required_min_2_chars');
      }
      
      if (this.clientForm.cr_number && this.clientForm.cr_number.trim().length < 3) {
        this.errors.cr_number = this.$t('cr_number_min_3_chars');
      }
      
      if (this.clientForm.vat_number && this.clientForm.vat_number.trim().length < 3) {
        this.errors.vat_number = this.$t('vat_number_min_3_chars');
      }

      if (this.clientForm.id_no && this.clientForm.id_no.trim().length < 3) {
        this.errors.id_no = this.$t('id_number_min_3_chars');
      }

      if (this.clientForm.iban && this.clientForm.iban.trim().length < 10) {
        this.errors.iban = this.$t('iban_min_10_chars');
      }

      if (this.clientForm.balance && isNaN(this.clientForm.balance)) {
        this.errors.balance = this.$t('balance_must_be_number');
      }

      // Convert numeric fields to proper types
      if (this.clientForm.type) {
        this.clientForm.type = parseInt(this.clientForm.type);
      }
      if (this.clientForm.id_type_id) {
        this.clientForm.id_type_id = parseInt(this.clientForm.id_type_id);
      }
      if (this.clientForm.nationality_id) {
        this.clientForm.nationality_id = parseInt(this.clientForm.nationality_id);
      }
      if (this.clientForm.bank_id) {
        this.clientForm.bank_id = parseInt(this.clientForm.bank_id);
      }
      if (this.clientForm.currency_id) {
        this.clientForm.currency_id = parseInt(this.clientForm.currency_id);
      }
      if (this.clientForm.client_id) {
        this.clientForm.client_id = parseInt(this.clientForm.client_id);
      }
      if (this.clientForm.balance) {
        this.clientForm.balance = parseFloat(this.clientForm.balance);
      }
      
      console.log('Validation result:', this.errors);
      console.log('Form after validation:', this.clientForm);
      
      return Object.keys(this.errors).length === 0;
    },

    // Helper methods for emails and mobiles
    addEmail() {
      this.clientForm.additional_emails.push({
        email: '',
        is_primary: false
      });
    },

    removeEmail(index) {
      this.clientForm.additional_emails.splice(index, 1);
    },

    addMobile() {
      this.clientForm.additional_mobiles.push({
        mobile_number: '',
        country_code: '+966',
        is_primary: false
      });
    },

    removeMobile(index) {
      this.clientForm.additional_mobiles.splice(index, 1);
    },

    async loadClient() {
      try {
        const response = await this.axiosGet(this.getTenantUrl(`/clients/${this.clientId}`));
        
        // Check if response has data and handle both structures
        if (response.data && response.data.data) {
          // If response is wrapped in data property
          this.clientForm = { ...response.data.data };
        } else if (response.data) {
          // If response is direct
          this.clientForm = { ...response.data };
        } else {
          throw new Error('Invalid response structure');
        }

        // Load client emails and mobiles
        await this.loadClientEmailsAndMobiles();
        
      } catch (error) {
        console.error('Error loading client:', error);
        this.$toastr.e(this.$t('error_loading_client'));
      }
    },

    async loadClientEmailsAndMobiles() {
      try {
        // Load emails
        const emailsResponse = await this.axiosGet(this.getTenantUrl(`/clients/${this.clientId}/emails`));
        const emails = emailsResponse.data.emails || [];
        
        // Load mobiles
        const mobilesResponse = await this.axiosGet(this.getTenantUrl(`/clients/${this.clientId}/mobiles`));
        const mobiles = mobilesResponse.data.mobiles || [];
        
        // Set primary email and mobile
        const primaryEmail = emails.find(email => email.is_primary);
        const primaryMobile = mobiles.find(mobile => mobile.is_primary);
        
        if (primaryEmail) {
          this.clientForm.primary_email = primaryEmail.email;
        }
        
        if (primaryMobile) {
          this.clientForm.primary_mobile = primaryMobile.mobile_number;
          this.clientForm.mobile_country_code = primaryMobile.country_code;
        }
        
        // Set additional emails and mobiles
        this.clientForm.additional_emails = emails
          .filter(email => !email.is_primary)
          .map(email => ({
            email: email.email,
            is_primary: false
          }));
        
        this.clientForm.additional_mobiles = mobiles
          .filter(mobile => !mobile.is_primary)
          .map(mobile => ({
            mobile_number: mobile.mobile_number,
            country_code: mobile.country_code,
            is_primary: false
          }));
        
      } catch (error) {
        console.error('Error loading client emails and mobiles:', error);
        // Initialize empty arrays if loading fails
        this.clientForm.additional_emails = [];
        this.clientForm.additional_mobiles = [];
      }
    },

    resetClientForm() {
      this.editingClient = null;
      this.clientForm = {
        name: '',
        type: 1,
        cr_number: '',
        vat_number: '',
        id_type_id: '',
        id_no: '',
        id_date: '',
        phone_no: '',
        dob: '',
        nationality_id: '',
        job: '',
        job_place: '',
        client_id: '',
        bank_id: '',
        iban: '',
        currency_id: '',
        avatar: '',
        is_active: true,
        balance: 0.00,
        // Reset email and mobile fields
        primary_email: '',
        primary_mobile: '',
        mobile_country_code: '+966',
        additional_emails: [],
        additional_mobiles: []
      };
      this.errors = {};
    },

    // Delete client
    async deleteClient(client) {
      console.log('=== deleteClient called ===');
      console.log('Client to delete:', client);
      
      if (confirm(this.$t('are_you_sure_delete_client'))) {
        try {
          const currentPath = window.location.pathname;
          const tenantMatch = currentPath.match(/^\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
          
          console.log('Deleting client:', client.id);
          
          await this.axiosDelete({
            url: this.getTenantUrl(`/clients/${client.id}`),
            data: { _method: 'DELETE' }
          });
          
          this.$toastr.s(this.$t('client_deleted_successfully'));
          
          // Refresh the table
          if (this.$refs.clientTable && this.$refs.clientTable.refresh) {
            this.$refs.clientTable.refresh();
          }
        } catch (error) {
          console.error('Delete client error:', error);
          this.$toastr.e(this.$t('error_deleting_client'));
        }
      }
    },

    // Email Operations
    manageEmails(client) {
      this.selectedClient = client;
      this.loadClientEmails(client);
      $('#emailModal').modal('show');
    },

    async loadClientEmails(client) {
      try {
        const response = await this.axiosGet(this.getTenantUrl(`/clients/${client.id}/emails`));
        this.clientEmails = response.data.emails || [];
      } catch (error) {
        console.error('Error loading emails:', error);
        this.clientEmails = [];
      }
    },

    async addEmail() {
      if (!this.validateEmailForm()) {
        return;
      }

      this.isEmailSubmitting = true;
      
      try {
        await this.axiosPost({
          url: this.getTenantUrl(`/clients/${this.selectedClient.id}/emails`),
          data: this.emailForm
        });
        this.$toastr.success(this.$t('email_added_successfully'));
        this.loadClientEmails(this.selectedClient);
        this.resetEmailForm();
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.emailErrors = error.response.data.errors;
        } else {
          this.$toastr.error(this.$t('error_adding_email'));
        }
      } finally {
        this.isEmailSubmitting = false;
      }
    },

    async deleteEmail(email) {
      if (confirm(this.$t('are_you_sure_delete_email'))) {
        try {
          await this.axiosDelete(this.getTenantUrl(`/clients/${this.selectedClient.id}/emails/${email.id}`));
          this.$toastr.success(this.$t('email_deleted_successfully'));
          this.loadClientEmails(this.selectedClient);
        } catch (error) {
          this.$toastr.error(this.$t('error_deleting_email'));
        }
      }
    },

    resetEmailForm() {
      this.emailForm = {
        email: '',
        is_primary: false,
        is_verified: false,
        notes: ''
      };
      this.emailErrors = {};
    },

    validateEmailForm() {
      this.emailErrors = {};
      
      if (!this.emailForm.email || !this.emailForm.email.trim()) {
        this.emailErrors.email = this.$t('email_required');
        return false;
      }
      
      return true;
    },

    // Mobile Operations
    manageMobiles(client) {
      this.selectedClient = client;
      this.loadClientMobiles(client);
      $('#mobileModal').modal('show');
    },

    async loadClientMobiles(client) {
      try {
        const response = await this.axiosGet(this.getTenantUrl(`/clients/${client.id}/mobiles`));
        this.clientMobiles = response.data.mobiles || [];
      } catch (error) {
        console.error('Error loading mobiles:', error);
        this.clientMobiles = [];
      }
    },

    async addMobile() {
      if (!this.validateMobileForm()) {
        return;
      }

      this.isMobileSubmitting = true;
      
      try {
        await this.axiosPost({
          url: this.getTenantUrl(`/clients/${this.selectedClient.id}/mobiles`),
          data: this.mobileForm
        });
        this.$toastr.success(this.$t('mobile_added_successfully'));
        this.loadClientMobiles(this.selectedClient);
        this.resetMobileForm();
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.mobileErrors = error.response.data.errors;
        } else {
          this.$toastr.error(this.$t('error_adding_mobile'));
        }
      } finally {
        this.isMobileSubmitting = false;
      }
    },

    async deleteMobile(mobile) {
      if (confirm(this.$t('are_you_sure_delete_mobile'))) {
        try {
          await this.axiosDelete(this.getTenantUrl(`/clients/${this.selectedClient.id}/mobiles/${mobile.id}`));
          this.$toastr.success(this.$t('mobile_deleted_successfully'));
          this.loadClientMobiles(this.selectedClient);
        } catch (error) {
          this.$toastr.error(this.$t('error_deleting_mobile'));
        }
      }
    },

    resetMobileForm() {
      this.mobileForm = {
        mobile_number: '',
        country_code: '+966',
        is_primary: false,
        is_verified: false,
        notes: ''
      };
      this.mobileErrors = {};
    },

    validateMobileForm() {
      this.mobileErrors = {};
      
      if (!this.mobileForm.mobile_number || !this.mobileForm.mobile_number.trim()) {
        this.mobileErrors.mobile_number = this.$t('mobile_number_required');
        return false;
      }
      
      return true;
    },

    // Translation Operations
    manageTranslations(client) {
      this.selectedClient = client;
      this.selectedLocale = null;
      this.translationErrors = {};
      this.loadClientTranslations(client);
      $('#translationModal').modal('show');
    },

    async loadClientTranslations(client) {
      try {
        const response = await this.axiosGet(this.getTenantUrl(`/clients/${client.id}/translations`));
        this.clientTranslations = response.data.translations || {};
      } catch (error) {
        console.error('Error loading translations:', error);
        this.clientTranslations = {};
      }
    },

    selectLocale(locale) {
      this.selectedLocale = locale;
      this.translationErrors = {};
      this.translationForm = {
        name: this.clientTranslations[locale]?.name || '',
        job: this.clientTranslations[locale]?.job || '',
        job_place: this.clientTranslations[locale]?.job_place || ''
      };
    },

    async saveTranslation() {
      if (!this.selectedLocale || !this.selectedClient) return;

      this.isTranslationSubmitting = true;
      this.translationErrors = {};
      
      try {
        await this.axiosPost({
          url: this.getTenantUrl(`/clients/${this.selectedClient.id}/translations`),
          data: {
            locale: this.selectedLocale,
            ...this.translationForm
          }
        });
        
        this.$toastr.success(this.$t('translation_saved_successfully'));
        this.loadClientTranslations(this.selectedClient);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          this.translationErrors = error.response.data.errors;
        } else {
          this.$toastr.error(this.$t('error_saving_translation'));
        }
      } finally {
        this.isTranslationSubmitting = false;
      }
    },

    async deleteTranslation() {
      if (!this.selectedLocale || !this.selectedClient) return;
      
      if (confirm(this.$t('are_you_sure_delete_translation'))) {
        try {
          await this.axiosDelete(this.getTenantUrl(`/clients/${this.selectedClient.id}/translations`), {
            data: { locale: this.selectedLocale }
          });
          
          this.$toastr.success(this.$t('translation_deleted_successfully'));
          this.loadClientTranslations(this.selectedClient);
          this.selectedLocale = null;
          this.translationForm = { name: '', job: '', job_place: '' };
        } catch (error) {
          this.$toastr.error(this.$t('error_deleting_translation'));
        }
      }
    },

    hasTranslation(locale) {
      return this.clientTranslations && this.clientTranslations[locale];
    },

    getTranslationStatusClass(locale) {
      if (this.clientTranslations && this.clientTranslations[locale]) {
        return 'badge-success';
      }
      return 'badge-secondary';
    },

    getTranslationStatusText(locale) {
      if (this.clientTranslations && this.clientTranslations[locale]) {
        return this.$t('translated');
      }
      return this.$t('not_translated');
    },

    getLocaleName(locale) {
      const lang = this.availableLocales.find(l => l.code === locale);
      return lang ? lang.name : locale;
    },

    // Utility Methods
    refreshTable() {
      // Trigger table refresh
      this.$emit('refresh');
    },

    formatDate(date) {
      if (!date) return this.$t('not_provided');
      return new Date(date).toLocaleDateString();
    },

    // Add this helper method to get tenant-based URLs
    getTenantUrl(path) {
      const currentPath = window.location.pathname;
      const tenantMatch = currentPath.match(/^\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
      
      if (tenantMatch) {
        const tenantId = tenantMatch[1];
        return `/${tenantId}${path}`;
      }
      return path; // Fallback
    },
  },
};
</script>

<style scoped>
.translation-form {
  padding: 20px;
  border: 1px solid #e9ecef;
  border-radius: 5px;
}

.list-group-item {
  cursor: pointer;
  transition: background-color 0.2s;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

.list-group-item.active {
  background-color: #007bff;
  color: white;
}

.badge {
  font-size: 0.75em;
}

.modal-xl {
  max-width: 1140px;
}

.form-group {
  margin-bottom: 1rem;
}

.invalid-feedback {
  display: block;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}

.custom-control {
  margin-bottom: 0.5rem;
}

.table-responsive {
  max-height: 400px;
  overflow-y: auto;
}
</style>
