<template>
  <div class="print-templates-page">
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <!-- Header Section -->
    <div class="page-header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h1 class="page-title">
              <i class="fas fa-print me-2"></i>
              {{ $t('Print Templates') }} - {{ $t(selectedModule.charAt(0).toUpperCase() + selectedModule.slice(1) + 's') }}
            </h1>
            <p class="page-subtitle">{{ $t('Manage your') }} {{ $t(selectedModule.charAt(0).toUpperCase() + selectedModule.slice(1) + 's') }} {{ $t('templates') }}</p>
          </div>
          <div class="col-md-4 text-end">
            <button class="btn btn-primary" @click="createNewTemplate" v-if="!isEditing">
              <i class="fas fa-plus me-2"></i>
              {{ $t('New Template') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Template List View -->
    <div v-if="!isEditing" class="template-list-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Module Filter -->
            <div class="module-filter mb-4">
              <div class="btn-group" role="group">
                <button class="btn btn-outline-primary" :class="{ active: selectedModule === 'invoice' }" 
                        @click="selectModule('invoice')" type="button">
                  {{ $t('Invoices') }}
                </button>
                <button class="btn btn-outline-primary" :class="{ active: selectedModule === 'purchase' }" 
                        @click="selectModule('purchase')" type="button">
                  {{ $t('Purchases') }}
                </button>
                <button class="btn btn-outline-primary" :class="{ active: selectedModule === 'quotation' }" 
                        @click="selectModule('quotation')" type="button">
                  {{ $t('Quotations') }}
                </button>
                <button class="btn btn-outline-primary" :class="{ active: selectedModule === 'expense' }" 
                        @click="selectModule('expense')" type="button">
                  {{ $t('Expenses') }}
                </button>
              </div>
            </div>

            <!-- Templates Grid -->
            <div class="templates-grid">
              <div class="row">
                <div v-for="template in filteredTemplates" :key="template.id" class="col-xl-4 col-lg-6 col-md-6 mb-4">
                  <div class="template-card" :class="{ 'is-default': template.is_default }">
                    <!-- Template Header -->
                    <div class="template-header">
                      <div class="template-title">
                        <h5 class="template-name">{{ template.display_name }}</h5>
                        <span class="template-module">{{ template.module }}</span>
                      </div>
                      <div class="template-status">
                        <span v-if="template.is_default" class="badge badge-default">
                          <i class="fas fa-star me-1"></i>{{ $t('Default') }}
                        </span>
                      </div>
                    </div>

                    <!-- Template Description -->
                    <div class="template-description">
                      <p>{{ template.description || $t('No description provided') }}</p>
                    </div>

                    <!-- Template Actions -->
                    <div class="template-actions">
                      <button class="btn btn-primary btn-sm" @click="editTemplate(template)">
                        <i class="fas fa-edit me-1"></i>
                        {{ $t('Edit') }}
                      </button>
                      <button class="btn btn-outline-secondary btn-sm" @click="previewTemplate(template)">
                        <i class="fas fa-eye me-1"></i>
                        {{ $t('Preview') }}
                      </button>
                      <button class="btn btn-outline-success btn-sm" @click="setAsDefault(template)"
                        v-if="!template.is_default" :disabled="saving">
                        <i class="fas fa-star me-1" v-if="!saving"></i>
                        <i class="fas fa-spinner fa-spin me-1" v-if="saving"></i>
                        {{ saving ? $t('Setting...') : $t('Set Default') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Empty State -->
              <div v-if="filteredTemplates.length === 0" class="empty-state">
                <div class="empty-state-content">
                  <i class="fas fa-file-alt empty-state-icon"></i>
                  <h4 class="empty-state-title">{{ $t('No Templates Found') }}</h4>
                  <p class="empty-state-description">
                    {{ $t('No templates found for') }} {{ $t(selectedModule.charAt(0).toUpperCase() + selectedModule.slice(1) + 's') }}
                  </p>
                  <button class="btn btn-primary" @click="createNewTemplate" v-if="$can('print-templates-create')">
                    <i class="fas fa-plus me-2"></i>
                    {{ $t('Create First Template') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Template Editor -->
    <div v-if="isEditing" class="template-editor-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Editor Header -->
            <div class="editor-header mb-4">
              <div class="row align-items-center">
                <div class="col-md-8">
                  <h2 class="editor-title">
                    <i class="fas fa-edit me-2"></i>
                    {{ editingTemplate.display_name || $t('New Template') }}
                  </h2>
                  <span class="badge badge-primary">{{ editingTemplate.module }}</span>
                </div>
                <div class="col-md-4 text-end">
                  <button class="btn btn-outline-secondary me-2" @click="cancelEdit">
                    <i class="fas fa-times me-1"></i>
                    {{ $t('Cancel') }}
                  </button>
                  <button class="btn btn-outline-primary me-2" @click="previewCurrentTemplate">
                    <i class="fas fa-eye me-1"></i>
                    {{ $t('Preview') }}
                  </button>
                  <button class="btn btn-success" @click="saveTemplate" :disabled="saving">
                    <i class="fas fa-save" v-if="!saving"></i>
                    <i class="fas fa-spinner fa-spin" v-else></i>
                    {{ saving ? $t('Saving...') : $t('Save') }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Editor Content -->
            <div class="editor-content">
              <div class="row g-4">
                <!-- Left Panel - Template Settings -->
                <div class="col-xl-4 col-lg-5 col-md-12">
                  <div class="editor-controls">
                    <!-- Basic Information Card -->
                    <div class="card settings-card mb-4">
                      <div class="card-header">
                        <h5 class="card-title mb-0">
                          <i class="fas fa-info-circle me-2"></i>
                          {{ $t('Basic Information') }}
                        </h5>
                      </div>
                      <div class="card-body">
                        <div class="form-group mb-3">
                          <label class="form-label">{{ $t('Template Name') }} <span class="text-danger">*</span></label>
                          <input v-model="editingTemplate.display_name" type="text" class="form-control form-control-lg"
                            :placeholder="$t('Enter template name')" @input="generateLivePreview">
                          <div v-if="!editingTemplate.display_name" class="invalid-feedback d-block">
                            {{ $t('Template name is required') }}
                          </div>
                        </div>
                        
                        <div class="form-group mb-0">
                          <label class="form-label">{{ $t('Description') }}</label>
                          <textarea v-model="editingTemplate.description" class="form-control" rows="3"
                            :placeholder="$t('Enter template description')" @input="generateLivePreview"></textarea>
                        </div>
                      </div>
                    </div>

                    <!-- Design Settings Card -->
                    <div class="card settings-card mb-4">
                      <div class="card-header">
                        <h5 class="card-title mb-0">
                          <i class="fas fa-palette me-2"></i>
                          {{ $t('Design Settings') }}
                        </h5>
                      </div>
                      <div class="card-body">
                        <div class="form-group mb-3">
                          <label class="form-label">{{ $t('Primary Color') }}</label>
                          <div class="color-input-group">
                            <input v-model="templateConfig.colors.primary" type="color" class="color-picker" @input="generateLivePreview">
                            <input v-model="templateConfig.colors.primary" type="text" class="form-control color-text-input" @input="generateLivePreview">
                          </div>
                        </div>

                        <div class="form-group mb-3">
                          <label class="form-label">{{ $t('Secondary Color') }}</label>
                          <div class="color-input-group">
                            <input v-model="templateConfig.colors.secondary" type="color" class="color-picker" @input="generateLivePreview">
                            <input v-model="templateConfig.colors.secondary" type="text" class="form-control color-text-input" @input="generateLivePreview">
                          </div>
                        </div>

                        <div class="form-group mb-3">
                          <label class="form-label">{{ $t('Paper Size') }}</label>
                          <select v-model="templateConfig.layout.paperSize" class="form-select" @change="generateLivePreview">
                            <option value="A4">A4 (210 × 297 mm)</option>
                            <option value="Letter">Letter (8.5 × 11 in)</option>
                            <option value="Legal">Legal (8.5 × 14 in)</option>
                          </select>
                        </div>

                        <div class="form-group mb-0">
                          <label class="form-label">{{ $t('Margins') }} (mm)</label>
                          <input v-model.number="templateConfig.layout.margins" type="number" class="form-control" min="5" max="50" @input="generateLivePreview">
                        </div>
                      </div>
                    </div>

                    <!-- Logo Settings Card -->
                    <div class="card settings-card mb-4">
                      <div class="card-header">
                        <h5 class="card-title mb-0">
                          <i class="fas fa-image me-2"></i>
                          {{ $t('Logo Settings') }}
                        </h5>
                      </div>
                      <div class="card-body">
                        <div class="form-group mb-3">
                          <label class="form-label">{{ $t('Template Logo') }}</label>
                          <div class="logo-upload-container">
                            <div v-if="editingTemplate.custom_logo || editingTemplate.logo_url" class="current-logo">
                              <img :src="editingTemplate.logo_url || editingTemplate.custom_logo" alt="Current Logo" class="logo-preview">
                              <div class="logo-actions">
                                <button type="button" class="btn btn-sm btn-outline-primary" @click="triggerLogoUpload">
                                  <i class="fas fa-edit me-1"></i>
                                  {{ $t('Change Logo') }}
                                </button>
                                <button type="button" class="btn btn-sm btn-outline-danger" @click="removeCustomLogo" :disabled="saving">
                                  <i class="fas fa-trash me-1"></i>
                                  {{ $t('Remove') }}
                                </button>
                              </div>
                            </div>
                            <div v-else class="logo-upload-placeholder" @click="triggerLogoUpload">
                              <i class="fas fa-cloud-upload-alt"></i>
                              <p>{{ $t('Upload Custom Logo') }}</p>
                              <small>{{ $t('Click to browse or drag and drop') }}</small>
                            </div>
                            <input ref="logoInput" type="file" @change="handleLogoUpload" accept="image/*" style="display: none;">
                          </div>
                          <div class="form-text">
                            <i class="fas fa-info-circle me-1"></i>
                            {{ $t('Upload a custom logo for this template. If no custom logo is uploaded, the system will use the logo from general settings.') }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Template Elements Card -->
                    <div class="card settings-card">
                      <div class="card-header">
                        <h5 class="card-title mb-0">
                          <i class="fas fa-cogs me-2"></i>
                          {{ $t('Template Elements') }}
                        </h5>
                      </div>
                      <div class="card-body">
                        <div class="elements-grid">
                          <div class="element-item">
                            <div class="form-check">
                              <input v-model="templateConfig.elements.showLogo" type="checkbox" class="form-check-input" id="showLogo" @change="generateLivePreview">
                              <label class="form-check-label" for="showLogo">
                                <i class="fas fa-image element-icon"></i>
                                <div class="element-content">
                                  <div class="element-title">{{ $t('Company Logo') }}</div>
                                  <div class="element-description">{{ $t('Display company logo in header') }}</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          
                          <div class="element-item">
                            <div class="form-check">
                              <input v-model="templateConfig.elements.showCompanyInfo" type="checkbox" class="form-check-input" id="showCompanyInfo" @change="generateLivePreview">
                              <label class="form-check-label" for="showCompanyInfo">
                                <i class="fas fa-building element-icon"></i>
                                <div class="element-content">
                                  <div class="element-title">{{ $t('Company Information') }}</div>
                                  <div class="element-description">{{ $t('Show company name, address, contact') }}</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          
                          <div class="element-item">
                            <div class="form-check">
                              <input v-model="templateConfig.elements.showClientInfo" type="checkbox" class="form-check-input" id="showClientInfo" @change="generateLivePreview">
                              <label class="form-check-label" for="showClientInfo">
                                <i class="fas fa-user element-icon"></i>
                                <div class="element-content">
                                  <div class="element-title">{{ $t('Client Information') }}</div>
                                  <div class="element-description">{{ $t('Show client/customer details') }}</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          
                          <div class="element-item">
                            <div class="form-check">
                              <input v-model="templateConfig.elements.showItemsTable" type="checkbox" class="form-check-input" id="showItemsTable" @change="generateLivePreview">
                              <label class="form-check-label" for="showItemsTable">
                                <i class="fas fa-table element-icon"></i>
                                <div class="element-content">
                                  <div class="element-title">{{ $t('Items Table') }}</div>
                                  <div class="element-description">{{ $t('Display products/services table') }}</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          
                          <div class="element-item">
                            <div class="form-check">
                              <input v-model="templateConfig.elements.showTotals" type="checkbox" class="form-check-input" id="showTotals" @change="generateLivePreview">
                              <label class="form-check-label" for="showTotals">
                                <i class="fas fa-calculator element-icon"></i>
                                <div class="element-content">
                                  <div class="element-title">{{ $t('Totals Section') }}</div>
                                  <div class="element-description">{{ $t('Show subtotal, tax, and total') }}</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          
                          <div class="element-item">
                            <div class="form-check">
                              <input v-model="templateConfig.elements.showFooter" type="checkbox" class="form-check-input" id="showFooter" @change="generateLivePreview">
                              <label class="form-check-label" for="showFooter">
                                <i class="fas fa-align-center element-icon"></i>
                                <div class="element-content">
                                  <div class="element-title">{{ $t('Footer') }}</div>
                                  <div class="element-description">{{ $t('Show footer text and notes') }}</div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Right Panel - Live Preview -->
                <div class="col-xl-8 col-lg-7 col-md-12">
                  <div class="editor-preview">
                    <div class="card preview-card">
                      <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5 class="card-title mb-0">
                            <i class="fas fa-eye me-2"></i>
                            {{ $t('Live Preview') }}
                          </h5>
                          <div class="preview-actions">
                            <button class="btn btn-sm btn-outline-primary me-2" @click="refreshPreview">
                              <i class="fas fa-sync me-1"></i>
                              {{ $t('Refresh') }}
                            </button>
                            <button class="btn btn-sm btn-outline-success" @click="downloadPreview">
                              <i class="fas fa-external-link-alt me-1"></i>
                              {{ $t('Open Preview') }}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="card-body p-0">
                        <div class="preview-container">
                          <div v-if="!livePreview" class="preview-placeholder">
                            <div class="preview-placeholder-content">
                              <i class="fas fa-file-alt preview-icon"></i>
                              <h6 class="preview-title">{{ $t('Preview will appear here') }}</h6>
                              <p class="preview-description">{{ $t('Start editing your template to see the live preview') }}</p>
                            </div>
                          </div>
                          <div v-else class="preview-frame-container">
                            <div class="preview-frame" v-html="livePreview"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="previewModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content preview-modal">
          <div class="modal-header">
            <h5 class="modal-title" id="previewModalLabel">
              <i class="fas fa-eye me-2"></i>
              {{ $t('Template Preview') }}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="preview-modal-content" v-html="modalPreview"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal" @click="closeModal">
              <i class="fas fa-times me-1"></i>
              {{ $t('Close') }}
            </button>
            <button type="button" class="btn btn-primary" @click="downloadPreview">
              <i class="fas fa-external-link-alt me-1"></i> 
              {{ $t('Open Preview') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'

export default {
  name: 'PrintTemplatesSettings',
  middleware: ['auth', 'check-permissions'],

  metaInfo() {
    return { title: this.$t('Print Templates') }
  },

  data() {
    return {
      // Breadcrumbs
      breadcrumbsCurrent: 'Print Templates',
      breadcrumbs: [
        {
          name: 'Dashboard',
          url: 'home',
        },
        {
          name: 'Print Templates',
          url: '',
        },
      ],

      // View states
      isEditing: false,
      selectedModule: 'invoice', // Default to invoices

      // Templates data
      templates: [],
      editingTemplate: {},

      // Template configuration
      templateConfig: {
        colors: {
          primary: '#2563eb',
          secondary: '#6b7280',
          background: '#ffffff'
        },
        typography: {
          fontFamily: 'Inter, sans-serif',
          baseFontSize: 14,
          headerFontSize: 24
        },
        layout: {
          paperSize: 'A4',
          orientation: 'portrait',
          margins: 20
        },
        elements: {
          showLogo: true,
          showCompanyInfo: true,
          showClientInfo: true,
          showItemsTable: true,
          showTotals: true,
          showFooter: true
        }
      },

      // Preview data
      livePreview: '',
      modalPreview: '',

      // Loading states
      loading: false,
      saving: false
    }
  },

  computed: {
    filteredTemplates() {
      return this.templates.filter(t => t.module === this.selectedModule);
    }
  },

  mounted() {
    this.loadTemplates();
  },

  watch: {
    // Watch template config changes and update preview
    templateConfig: {
      handler() {
        this.generateLivePreview();
      },
      deep: true
    },

    // Watch editing template changes
    editingTemplate: {
      handler() {
        if (this.isEditing) {
          this.generateLivePreview();
        }
      },
      deep: true
    }
  },

  methods: {
    // Select module
    selectModule(module) {
      this.selectedModule = module;
      this.loadTemplates();
    },

    // Load templates from API
    async loadTemplates() {
      try {
        this.loading = true;
        const { data } = await axios.get('/api/print-templates', {
          params: { module: this.selectedModule }
        });
        this.templates = data.data || [];
      } catch (error) {
        console.error('Error loading templates:', error);
        this.$toastr.error(this.$t('Failed to load templates'));
        this.templates = [];
      } finally {
        this.loading = false;
      }
    },

    // Create new template
    createNewTemplate() {
      this.editingTemplate = {
        name: '',
        module: this.selectedModule,
        template_key: '',
        display_name: '',
        description: '',
        is_default: false,
        is_active: true,
        template_config: { ...this.templateConfig },
        html_template: '',
        css_styles: '',
        preview_data: null,
        sort_order: 0
      };
      this.isEditing = true;
      this.generateLivePreview();
    },

    // Edit existing template
    editTemplate(template) {
      this.editingTemplate = { ...template };
      this.templateConfig = {
        colors: {
          primary: '#2563eb',
          secondary: '#6b7280',
          background: '#ffffff'
        },
        typography: {
          fontFamily: 'Inter, sans-serif',
          baseFontSize: 14,
          headerFontSize: 24
        },
        layout: {
          paperSize: 'A4',
          orientation: 'portrait',
          margins: 20
        },
        elements: {
          showLogo: true,
          showCompanyInfo: true,
          showClientInfo: true,
          showItemsTable: true,
          showTotals: true,
          showFooter: true
        }
      };

      // Merge with existing template config if available
      if (template.template_config) {
        this.templateConfig = {
          colors: { ...this.templateConfig.colors, ...template.template_config.colors },
          typography: { ...this.templateConfig.typography, ...template.template_config.typography },
          layout: { ...this.templateConfig.layout, ...template.template_config.layout },
          elements: { ...this.templateConfig.elements, ...template.template_config.elements }
        };
      }

      this.isEditing = true;
      this.generateLivePreview();
    },

    // Cancel editing
    cancelEdit() {
      this.isEditing = false;
      this.editingTemplate = {};
      this.templateConfig = {
        colors: { primary: '#2563eb', secondary: '#6b7280', background: '#ffffff' },
        typography: { fontFamily: 'Inter, sans-serif', baseFontSize: 14, headerFontSize: 24 },
        layout: { paperSize: 'A4', orientation: 'portrait', margins: 20 },
        elements: { showLogo: true, showCompanyInfo: true, showClientInfo: true, showItemsTable: true, showTotals: true, showFooter: true }
      };
    },

    // Save template
    async saveTemplate() {
      // Validate required fields
      if (!this.editingTemplate.display_name || this.editingTemplate.display_name.trim() === '') {
        this.$toastr.error(this.$t('Template name is required'));
        return;
      }

      try {
        this.saving = true;

        // Generate template key if new
        if (!this.editingTemplate.template_key) {
          this.editingTemplate.template_key = `${this.editingTemplate.module}_${this.editingTemplate.display_name.toLowerCase().replace(/\s+/g, '_')}`;
        }

        // Update template config
        this.editingTemplate.template_config = { ...this.templateConfig };

        // Generate HTML and CSS
        this.editingTemplate.html_template = this.generateHTMLTemplate();
        this.editingTemplate.css_styles = this.generateCSSTemplate();

        const response = this.editingTemplate.id 
          ? await axios.put(`/api/print-templates/${this.editingTemplate.id}`, this.editingTemplate)
          : await axios.post('/api/print-templates', this.editingTemplate);

        if (response.data.status === 'success') {
          this.$toastr.success(this.$t('Template saved successfully'));
          this.cancelEdit();
          this.loadTemplates();
        } else {
          this.$toastr.error(response.data.message || this.$t('Failed to save template'));
        }
      } catch (error) {
        console.error('Error saving template:', error);
        
        if (error.response?.status === 422) {
          // Validation errors
          const errors = error.response.data.errors;
          const firstError = Object.values(errors)[0][0];
          this.$toastr.error(firstError);
        } else {
          this.$toastr.error(this.$t('Failed to save template'));
        }
      } finally {
        this.saving = false;
      }
    },

    // Set as default
    async setAsDefault(template) {
      try {
        this.saving = true;
        
        const response = await axios.post(`/api/print-templates/${template.id}/set-default`);
        
        if (response.data.status === 'success') {
          this.$toastr.success(this.$t('Template set as default'));
          await this.loadTemplates();
        } else {
          this.$toastr.error(response.data.message || this.$t('Failed to set default template'));
        }
      } catch (error) {
        console.error('Error setting template as default:', error);
        
        if (error.response?.status === 404) {
          this.$toastr.error(this.$t('Template not found'));
        } else if (error.response?.status === 422) {
          this.$toastr.error(this.$t('Cannot set this template as default'));
        } else {
          this.$toastr.error(this.$t('Failed to set default template'));
        }
      } finally {
        this.saving = false;
      }
    },

    // Preview template
    async previewTemplate(template) {
      try {
        // Generate the full document preview
        const previewContent = this.generateFullDocumentPreview(template);
        
        // Open preview in new tab
        this.openPreviewInNewTab(previewContent);
        
      } catch (error) {
        console.error('Error generating preview:', error);
        this.$toastr.error(this.$t('Failed to generate preview'));
      }
    },

    // Close modal
    closeModal() {
      $('#previewModal').modal('hide');
    },

    // Open preview in new tab
    openPreviewInNewTab(content) {
      try {
        // Create a new window
        const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
        
        if (!printWindow) {
          this.$toastr.error(this.$t('Please allow popups for this site to preview templates'));
          return;
        }

        // Write the content to the new window
        printWindow.document.write(content);
        printWindow.document.close();
        
        // Focus the new window
        printWindow.focus();
        
        this.$toastr.success(this.$t('Preview opened in new tab'));
      } catch (error) {
        console.error('Error opening preview in new tab:', error);
        this.$toastr.error(this.$t('Failed to open preview'));
      }
    },


    // Preview current template
    previewCurrentTemplate() {
      this.modalPreview = this.generateHTMLTemplate();
      this.$nextTick(() => {
        $('#previewModal').modal('show');
      });
    },

    // Generate live preview
    generateLivePreview() {
      if (!this.isEditing) return;
      
      // Only generate preview if we have a template name
      if (this.editingTemplate.display_name && this.editingTemplate.display_name.trim()) {
        this.livePreview = this.generateHTMLTemplate();
      } else {
        this.livePreview = '';
      }
    },

    // Get template preview HTML (mini preview for cards)
    getTemplatePreview(template) {
      // Return a simplified preview of the template
      return `
        <div class="template-preview-mini">
          <div class="preview-header" style="background: ${template.template_config?.colors?.primary || '#2563eb'}; color: white; padding: 10px;">
            <h4 style="margin: 0; font-size: 16px;">${template.display_name}</h4>
          </div>
          <div class="preview-body" style="padding: 15px; background: ${template.template_config?.colors?.background || '#ffffff'};">
            <p style="margin: 0; color: ${template.template_config?.colors?.secondary || '#6b7280'};">
              ${template.description || 'Template preview'}
            </p>
          </div>
        </div>
      `;
    },

    // Generate full document preview with sample data
    generateFullDocumentPreview(template) {
      console.log('Template config:', template.template_config);
      const config = template.template_config || {
        colors: { primary: '#2563eb', secondary: '#6b7280', background: '#ffffff' },
        typography: { fontFamily: 'Inter, sans-serif', baseFontSize: 14, headerFontSize: 24 },
        layout: { paperSize: 'A4', orientation: 'portrait', margins: 20 },
        elements: { showLogo: true, showCompanyInfo: true, showClientInfo: true, showItemsTable: true, showTotals: true, showFooter: true }
      };

      const elements = config.elements || {};
      const colors = config.colors || {};
      const typography = config.typography || {};
      const layout = config.layout || {};

      // Sample data for preview
      const sampleData = {
        company: {
          name: 'Sample Company Ltd.',
          address: '123 Business Street, City, State 12345',
          phone: '+1 (555) 123-4567',
          email: 'info@samplecompany.com'
        },
        client: {
          name: 'John Doe',
          address: '456 Client Avenue, City, State 67890',
          phone: '+1 (555) 987-6543',
          email: 'john.doe@email.com'
        },
        document: {
          number: 'INV-2024-001',
          date: new Date().toLocaleDateString(),
          dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
          items: [
            { description: 'Sample Product 1', quantity: 2, price: 100.00, total: 200.00 },
            { description: 'Sample Service 1', quantity: 1, price: 150.00, total: 150.00 },
            { description: 'Sample Product 2', quantity: 3, price: 75.00, total: 225.00 }
          ],
          subtotal: 575.00,
          tax: 57.50,
          total: 632.50
        }
      };

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${template.display_name || 'Document'} - Preview</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: ${typography.fontFamily || 'Inter, sans-serif'}; 
              font-size: ${typography.baseFontSize || 14}px;
              line-height: 1.6;
              color: #374151;
              background: #f8fafc;
              padding: 2rem;
              margin: 0;
            }
            .document-container {
              max-width: 800px;
              margin: 0 auto;
              background: ${colors.background || '#ffffff'};
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .document-header {
              padding: 30px;
              border-bottom: 2px solid #e5e7eb;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
            }
            .company-info h1 {
              color: ${colors.primary || '#2563eb'};
              font-size: ${typography.headerFontSize || 24}px;
              margin-bottom: 10px;
            }
            .company-info p {
              color: ${colors.secondary || '#6b7280'};
              margin: 5px 0;
            }
            .document-info {
              text-align: right;
            }
            .document-info h2 {
              color: ${colors.primary || '#2563eb'};
              font-size: 24px;
              margin-bottom: 15px;
            }
            .document-info p {
              color: ${colors.secondary || '#6b7280'};
              margin: 5px 0;
            }
            .client-section {
              padding: 30px;
              border-bottom: 1px solid #e5e7eb;
            }
            .client-section h3 {
              color: ${colors.primary || '#2563eb'};
              margin-bottom: 15px;
            }
            .items-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            .items-table th,
            .items-table td {
              padding: 12px;
              text-align: left;
              border-bottom: 1px solid #e5e7eb;
            }
            .items-table th {
              background: #f8fafc;
              font-weight: 600;
              color: ${colors.primary || '#2563eb'};
            }
            .items-table tr:hover {
              background: #f8fafc;
            }
            .totals-section {
              padding: 20px 30px;
              border-top: 2px solid #e5e7eb;
            }
            .total-row {
              display: flex;
              justify-content: space-between;
              margin: 10px 0;
            }
            .total-final {
              font-weight: 700;
              font-size: 18px;
              color: ${colors.primary || '#2563eb'};
              border-top: 2px solid #e5e7eb;
              padding-top: 10px;
            }
            .document-footer {
              padding: 30px;
              text-align: center;
              background: #f8fafc;
              color: ${colors.secondary || '#6b7280'};
            }
            .company-logo {
              max-height: 60px;
              margin-bottom: 15px;
            }
          </style>
        </head>
        <body>
          <div class="document-container">
            ${elements.showLogo || elements.showCompanyInfo ? `
            <div class="document-header">
              <div class="company-info">
                ${elements.showLogo ? `<img src="${this.getLogoUrl()}" alt="Company Logo" class="company-logo">` : ''}
                ${elements.showCompanyInfo ? `
                <h1>${sampleData.company.name}</h1>
                <p>${sampleData.company.address}</p>
                <p>${sampleData.company.phone} • ${sampleData.company.email}</p>
                ` : ''}
              </div>
              <div class="document-info">
                <h2>INVOICE</h2>
                <p><strong>Invoice #:</strong> ${sampleData.document.number}</p>
                <p><strong>Date:</strong> ${sampleData.document.date}</p>
                <p><strong>Due Date:</strong> ${sampleData.document.dueDate}</p>
              </div>
            </div>
            ` : ''}
            
            ${elements.showClientInfo ? `
            <div class="client-section">
              <h3>Bill To:</h3>
              <p><strong>${sampleData.client.name}</strong></p>
              <p>${sampleData.client.address}</p>
              <p>${sampleData.client.phone} • ${sampleData.client.email}</p>
            </div>
            ` : ''}
            
            ${elements.showItemsTable ? `
            <div style="padding: 0 30px;">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${sampleData.document.items.map(item => `
                    <tr>
                      <td>${item.description}</td>
                      <td>${item.quantity}</td>
                      <td>$${item.price.toFixed(2)}</td>
                      <td>$${item.total.toFixed(2)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ` : ''}
            
            ${elements.showTotals ? `
            <div class="totals-section">
              <div class="total-row">
                <span>Subtotal:</span>
                <span>$${sampleData.document.subtotal.toFixed(2)}</span>
              </div>
              <div class="total-row">
                <span>Tax (10%):</span>
                <span>$${sampleData.document.tax.toFixed(2)}</span>
              </div>
              <div class="total-row total-final">
                <span>Total:</span>
                <span>$${sampleData.document.total.toFixed(2)}</span>
              </div>
            </div>
            ` : ''}
            
            ${elements.showFooter ? `
            <div class="document-footer">
              <p>Thank you for your business!</p>
              <p>This is a sample preview of your template.</p>
            </div>
            ` : ''}
          </div>
        </body>
        </html>
      `;
    },

    // Generate HTML template
    generateHTMLTemplate() {
      const config = this.templateConfig || {
        colors: { primary: '#2563eb', secondary: '#6b7280', background: '#ffffff' },
        typography: { fontFamily: 'Inter, sans-serif', baseFontSize: 14, headerFontSize: 24 },
        layout: { paperSize: 'A4', orientation: 'portrait', margins: 20 },
        elements: { showLogo: true, showCompanyInfo: true, showClientInfo: true, showItemsTable: true, showTotals: true, showFooter: true }
      };

      const elements = config.elements || {};
      const colors = config.colors || {};
      const typography = config.typography || {};
      const layout = config.layout || {};

      return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${this.editingTemplate.display_name || 'Document'}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
            * { 
              margin: 0; 
              padding: 0; 
              box-sizing: border-box; 
            }
            body { 
              font-family: ${typography.fontFamily || 'Inter, sans-serif'}; 
              font-size: ${typography.baseFontSize || 14}px; 
              line-height: 1.6; 
              color: ${colors.secondary || '#6b7280'}; 
              background: ${colors.background || '#ffffff'}; 
              margin: 0; 
              padding: ${layout.margins || 20}mm;
              min-height: 100vh;
            }
            .document-container { 
              max-width: 100%; 
              margin: 0 auto; 
              width: 100%;
            }
            h1, h2, h3 { 
              color: ${colors.primary || '#2563eb'}; 
              margin: 0 0 1rem 0;
            }
            .document-header { 
              border-bottom: 2px solid #e5e7eb; 
              margin-bottom: 2rem; 
              padding-bottom: 1.5rem; 
            }
            .items-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 1.5rem 0;
            }
            .items-table th { 
              background: #f8fafc; 
              font-weight: 600;
              padding: 0.75rem;
              text-align: left;
              border-bottom: 1px solid #e5e7eb;
            }
            .items-table td {
              padding: 0.75rem;
              border-bottom: 1px solid #f3f4f6;
            }
            .text-right {
              text-align: right;
            }
            .total-final { 
              font-weight: 700; 
              border-top: 2px solid #e5e7eb; 
              padding-top: 0.75rem;
            }
            .totals-section {
              display: flex;
              justify-content: flex-end;
              margin: 2rem 0;
            }
            .totals-table {
              width: 300px;
            }
            .total-row {
              display: flex;
              justify-content: space-between;
              padding: 0.5rem 0;
              border-bottom: 1px solid #f3f4f6;
            }
            .client-section {
              margin-bottom: 2rem;
            }
            .document-footer {
              text-align: center;
              padding-top: 1.5rem;
              border-top: 1px solid #e5e7eb;
              margin-top: 2rem;
            }
            .company-logo {
              max-height: 60px;
              margin-bottom: 1rem;
            }
            @media print {
              body {
                padding: ${layout.margins || 20}mm;
              }
            }
          </style>
        </head>
        <body>
          <div class="document-container">
            ${elements.showLogo || elements.showCompanyInfo ? `
            <!-- Header -->
            <div class="document-header">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  ${elements.showLogo ? `<div><img src="${this.getLogoUrl()}" alt="Logo" class="company-logo"></div>` : ''}
                  ${elements.showCompanyInfo ? `
                  <h1 style="color: ${colors.primary || '#2563eb'}; font-size: ${typography.headerFontSize || 24}px;">Company Name</h1>
                  <p style="margin: 0.5rem 0; color: ${colors.secondary || '#6b7280'};">123 Business Street, City, State 12345</p>
                  <p style="margin: 0; color: ${colors.secondary || '#6b7280'};">Phone: (555) 123-4567 • Email: info@company.com</p>
                  ` : ''}
                </div>
                <div style="text-align: right;">
                  <h2 style="color: ${colors.primary || '#2563eb'}; font-size: 24px; margin: 0 0 1rem 0;">${this.editingTemplate.module?.toUpperCase() || 'DOCUMENT'}</h2>
                  <p style="margin: 0.25rem 0; color: ${colors.secondary || '#6b7280'};">#: ${this.editingTemplate.module?.toUpperCase() || 'DOC'}-001</p>
                  <p style="margin: 0; color: ${colors.secondary || '#6b7280'};">Date: ${new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            ` : ''}
            
            ${elements.showClientInfo ? `
            <!-- Client Info -->
            <div class="client-section">
              <h3 style="color: ${colors.primary || '#2563eb'}; margin-bottom: 0.75rem;">Bill To:</h3>
              <p style="margin: 0.25rem 0; font-weight: 600;">John Doe</p>
              <p style="margin: 0.25rem 0; color: ${colors.secondary || '#6b7280'};">123 Main St, City, State 12345</p>
              <p style="margin: 0; color: ${colors.secondary || '#6b7280'};">john@example.com • +1 234 567 8900</p>
            </div>
            ` : ''}
            
            ${elements.showItemsTable ? `
            <!-- Items Table -->
            <div class="items-section">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th class="text-right">Qty</th>
                    <th class="text-right">Rate</th>
                    <th class="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sample Product</td>
                    <td class="text-right">2</td>
                    <td class="text-right">$500.00</td>
                    <td class="text-right">$1,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            ` : ''}
            
            ${elements.showTotals ? `
            <!-- Totals -->
            <div class="totals-section">
              <div class="totals-table">
                <div class="total-row">
                  <span>Subtotal:</span>
                  <span>$1,000.00</span>
                </div>
                <div class="total-row">
                  <span>Tax:</span>
                  <span>$100.00</span>
                </div>
                <div class="total-row total-final">
                  <span>Total:</span>
                  <span>$1,100.00</span>
                </div>
              </div>
            </div>
            ` : ''}
            
            ${elements.showFooter ? `
            <!-- Footer -->
            <div class="document-footer">
              <p style="margin: 0; color: ${colors.secondary || '#6b7280'}; font-style: italic;">Thank you for your business!</p>
            </div>
            ` : ''}
          </div>
        </body>
        </html>
      `;
    },

    // Generate CSS template
    generateCSSTemplate() {
      const config = this.templateConfig || {
        colors: { primary: '#2563eb', secondary: '#6b7280', background: '#ffffff' },
        typography: { fontFamily: 'Inter, sans-serif', baseFontSize: 14, headerFontSize: 24 }
      };

      return `
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: ${config.typography?.fontFamily || 'Inter, sans-serif'}; 
          font-size: ${config.typography?.baseFontSize || 14}px; 
          line-height: 1.6; 
          color: ${config.colors?.secondary || '#6b7280'}; 
          background: ${config.colors?.background || '#ffffff'}; 
        }
        .document-container { max-width: 800px; margin: 0 auto; }
        h1, h2, h3 { color: ${config.colors?.primary || '#2563eb'}; }
        .document-header { border-bottom: 2px solid #e5e7eb; }
        .items-table th { background: #f8fafc; }
        .total-final { font-weight: 700; border-top: 2px solid #e5e7eb; }
      `;
    },

    // Refresh preview
    refreshPreview() {
      this.generateLivePreview();
    },

    // Download preview as PDF
    async downloadPreview() {
      try {
        // Generate HTML content for printing
        const htmlContent = this.generateFullDocumentPreview(this.editingTemplate);
        
        // Create a new window with the HTML content
        const printWindow = window.open('', '_blank');
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        // Wait for content to load, then trigger print
        printWindow.onload = function() {
          printWindow.print();
        };
        
        this.$toastr.success(this.$t('Print dialog opened'));
      } catch (error) {
        console.error('Error generating preview:', error);
        this.$toastr.error(this.$t('Failed to open print dialog'));
      }
    },

    // Logo upload methods
    triggerLogoUpload() {
      this.$refs.logoInput.click();
    },

    async handleLogoUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.$toastr.error(this.$t('Please select a valid image file'));
        return;
      }

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        this.$toastr.error(this.$t('File size must be less than 2MB'));
        return;
      }

      try {
        this.saving = true;
        
        const formData = new FormData();
        formData.append('custom_logo', file);
        formData.append('_method', 'PUT');

        const response = await axios.post(`/api/print-templates/${this.editingTemplate.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data.status === 'success') {
          this.editingTemplate.custom_logo = response.data.data.custom_logo;
          this.editingTemplate.logo_url = response.data.data.logo_url;
          this.$toastr.success(this.$t('Logo uploaded successfully'));
          this.generateLivePreview();
        } else {
          this.$toastr.error(response.data.message || this.$t('Failed to upload logo'));
        }
      } catch (error) {
        console.error('Error uploading logo:', error);
        
        if (error.response?.status === 422) {
          const errors = error.response.data.errors;
          const firstError = Object.values(errors)[0][0];
          this.$toastr.error(firstError);
        } else {
          this.$toastr.error(this.$t('Failed to upload logo'));
        }
      } finally {
        this.saving = false;
        // Reset file input
        event.target.value = '';
      }
    },

    async removeCustomLogo() {
      if (!this.editingTemplate.id) return;

      try {
        this.saving = true;
        
        const response = await axios.delete(`/api/print-templates/${this.editingTemplate.id}/remove-logo`);
        
        if (response.data.status === 'success') {
          this.editingTemplate.custom_logo = null;
          this.editingTemplate.logo_url = null;
          this.$toastr.success(this.$t('Custom logo removed successfully'));
          this.generateLivePreview();
        } else {
          this.$toastr.error(response.data.message || this.$t('Failed to remove logo'));
        }
      } catch (error) {
        console.error('Error removing logo:', error);
        this.$toastr.error(this.$t('Failed to remove logo'));
      } finally {
        this.saving = false;
      }
    },

    // Get logo URL for template
    getLogoUrl() {
      if (this.editingTemplate.logo_url) {
        return this.editingTemplate.logo_url;
      }
      return '/images/white_logo.png'; // Default logo
    }
  }
}
</script>

<style scoped>
/* Main Page Container */
.print-templates-page {
  min-height: 100vh;
  background: #f8fafc;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Page Header */
.page-header {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #1f2937;
}

.page-subtitle {
  font-size: 1rem;
  margin: 0.5rem 0 0 0;
  color: #6b7280;
}

/* Template List Section */
.template-list-section {
  padding: 0 0 3rem 0;
}

/* Module Filter */
.module-filter {
  margin-bottom: 2rem;
}

.module-filter .btn-group .btn {
  border-radius: 6px;
  margin-right: 0.5rem;
}

.module-filter .btn-group .btn.active {
  background-color: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

/* Template Cards */
.templates-grid {
  margin-top: 1rem;
}

.template-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  transition: all 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.template-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.template-card.is-default {
  border-color: #10b981;
  background: #f0fdf4;
}

/* Template Header */
.template-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.template-title {
  flex: 1;
}

.template-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.template-module {
  font-size: 0.875rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.template-status {
  margin-left: 1rem;
}

.badge-default {
  background: #10b981;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

/* Template Description */
.template-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
  flex: 1;
}

/* Template Actions */
.template-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.template-actions .btn {
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
}

.template-actions .btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-state-content {
  max-width: 400px;
  margin: 0 auto;
}

.empty-state-icon {
  font-size: 4rem;
  color: #d1d5db;
  margin-bottom: 1.5rem;
}

.empty-state-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 1rem;
}

.empty-state-description {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Editor Section */
.template-editor-section {
  padding: 0 0 3rem 0;
}

.editor-header {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.editor-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.badge-primary {
  background: #3b82f6;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.editor-content {
  min-height: 60vh;
}

/* Editor Controls */
.settings-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  overflow: hidden;
}

.settings-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}

.settings-card .card-header {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 1.25rem;
}

.settings-card .card-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.settings-card .card-body {
  padding: 1.25rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-group label,
.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 0.875rem;
}

.form-control-lg {
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: all 0.2s ease;
}

.form-control-lg:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.color-input-group {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.color-picker {
  width: 50px !important;
  height: 42px !important;
  border: 1px solid #d1d5db !important;
  border-radius: 8px !important;
  cursor: pointer;
  padding: 0 !important;
  transition: all 0.2s ease;
}

.color-picker:hover {
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.color-text-input {
  flex: 1;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.875rem;
}

.elements-grid {
  display: grid;
  gap: 0.75rem;
}

.element-item {
  border: 1px solid #f3f4f6;
  border-radius: 10px;
  transition: all 0.2s ease;
  overflow: hidden;
}

.element-item:hover {
  background: #f8fafc;
  border-color: #e5e7eb;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.element-item .form-check {
  margin: 0;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.element-item .form-check-input {
  margin-top: 0.25rem;
  margin-right: 0;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid #d1d5db;
  transition: all 0.2s ease;
}

.element-item .form-check-input:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.element-item .form-check-input:focus {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.element-item .form-check-label {
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1;
}

.element-icon {
  color: #6b7280;
  font-size: 1.125rem;
  margin-top: 0.125rem;
  transition: color 0.2s ease;
}

.element-item:hover .element-icon {
  color: #3b82f6;
}

.element-content {
  flex: 1;
}

.element-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  line-height: 1.3;
}

.element-description {
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1.4;
  margin: 0;
}

.element-item .form-check-input:checked + .form-check-label .element-title {
  color: #1f2937;
}

.element-item .form-check-input:checked + .form-check-label .element-icon {
  color: #3b82f6;
}

.invalid-feedback {
  font-size: 0.75rem;
  color: #dc2626;
  margin-top: 0.25rem;
  font-weight: 500;
}

/* Logo Upload Styles */
.logo-upload-container {
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s ease;
  background: #f9fafb;
}

.logo-upload-container:hover {
  border-color: #3b82f6;
  background: #f8fafc;
}

.current-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.logo-preview {
  max-width: 200px;
  max-height: 100px;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.logo-upload-placeholder {
  cursor: pointer;
  padding: 2rem;
  color: #6b7280;
  transition: all 0.2s ease;
}

.logo-upload-placeholder:hover {
  color: #3b82f6;
}

.logo-upload-placeholder i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.logo-upload-placeholder p {
  font-weight: 600;
  margin: 0.5rem 0;
  font-size: 1rem;
}

.logo-upload-placeholder small {
  font-size: 0.875rem;
  opacity: 0.8;
}

.form-text {
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.form-text i {
  margin-top: 0.125rem;
  flex-shrink: 0;
}

/* Editor Preview */
.preview-card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  overflow: hidden;
}

.preview-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}

.preview-card .card-header {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 1.25rem;
}

.preview-card .card-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.preview-actions {
  display: flex;
  gap: 0.5rem;
}

.preview-actions .btn {
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  transition: all 0.2s ease;
}

.preview-actions .btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.preview-container {
  height: 70vh;
  overflow: auto;
  background: #f8fafc;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

.preview-container::-webkit-scrollbar {
  width: 8px;
}

.preview-container::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.preview-container::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.preview-container::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.preview-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #9ca3af;
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.preview-placeholder:hover {
  border-color: #cbd5e1;
  background: #f8fafc;
}

.preview-placeholder-content {
  text-align: center;
  max-width: 300px;
}

.preview-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #cbd5e1;
  transition: color 0.2s ease;
}

.preview-placeholder:hover .preview-icon {
  color: #94a3b8;
}

.preview-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.preview-description {
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 0;
  line-height: 1.5;
}

.preview-frame-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0;
}

.preview-frame {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  background: white;
  min-height: 600px;
  width: 100%;
  max-width: 800px;
  margin: 0;
  transform: scale(0.9);
  transform-origin: top center;
  transition: transform 0.2s ease;
}

.preview-frame:hover {
  transform: scale(0.92);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

/* Fix preview frame content margins */
.preview-frame * {
  margin: 0 !important;
  padding: 0 !important;
}

.preview-frame body {
  margin: 0 !important;
  padding: 20mm !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  color: #374151 !important;
  background: white !important;
}

.preview-frame .document-container {
  max-width: 100% !important;
  margin: 0 auto !important;
  padding: 0 !important;
}

.preview-frame h1, 
.preview-frame h2, 
.preview-frame h3 {
  margin: 0 0 1rem 0 !important;
  padding: 0 !important;
}

.preview-frame p {
  margin: 0 0 0.5rem 0 !important;
  padding: 0 !important;
}

.preview-frame table {
  margin: 1rem 0 !important;
  width: 100% !important;
  border-collapse: collapse !important;
}

.preview-frame th,
.preview-frame td {
  padding: 0.75rem !important;
  text-align: left !important;
  border-bottom: 1px solid #e5e7eb !important;
}

.preview-frame th {
  background: #f8fafc !important;
  font-weight: 600 !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
  }

  .template-actions {
    flex-direction: column;
  }

  .template-actions .btn {
    width: 100%;
  }

  .editor-header .row {
    flex-direction: column;
    gap: 1rem;
  }

  .editor-header .col-md-4 {
    text-align: left !important;
  }

  .preview-container {
    height: 40vh;
    padding: 1rem;
  }
}

</style>