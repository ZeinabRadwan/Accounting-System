<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row">
      <div class="col-md-3">
        <card :title="$t('Print Templates')" class="settings-card">
          <ul class="nav flex-column nav-pills m-1">
            <li v-for="tab in tabs" :key="tab.module" class="nav-item">
              <a 
                href="#" 
                @click.prevent="setActiveModule(tab.module)"
                class="nav-link" 
                :class="{ active: activeModule === tab.module }"
              >
                <i class="mr-2" :class="tab.icon"></i>
                {{ tab.name }}
              </a>
            </li>
          </ul>
        </card>
      </div>
      <div class="col-md-9">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">{{ $t('Print Templates') }} - {{ getModuleName(activeModule) }}</h3>
            <div class="card-tools">
              <button 
                class="btn btn-primary btn-sm" 
                @click="openTemplateModal()"
                v-if="$can('print-templates-create')"
              >
                <i class="fas fa-plus"></i> {{ $t('Add Template') }}
              </button>
            </div>
          </div>
          <div class="card-body">
            <div v-if="loading" class="text-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">{{ $t('Loading...') }}</span>
              </div>
            </div>
            
            <div v-else-if="templates.length === 0" class="text-center py-4">
              <i class="fas fa-file-alt fa-3x text-muted mb-3"></i>
              <p class="text-muted">{{ $t('No templates found for this module') }}</p>
              <button 
                class="btn btn-primary" 
                @click="openTemplateModal()"
                v-if="$can('print-templates-create')"
              >
                <i class="fas fa-plus"></i> {{ $t('Create First Template') }}
              </button>
            </div>

            <div v-else class="row">
              <div 
                v-for="template in templates" 
                :key="template.id" 
                class="col-md-6 col-lg-4 mb-4"
              >
                <div class="card template-card" :class="{ 'border-primary': template.is_default }">
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                      <h5 class="card-title mb-0">{{ template.display_name }}</h5>
                      <div class="dropdown">
                        <button 
                          class="btn btn-sm btn-outline-secondary dropdown-toggle" 
                          type="button" 
                          data-toggle="dropdown"
                        >
                          <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#" @click.prevent="previewTemplate(template)">
                            <i class="fas fa-eye mr-2"></i> {{ $t('Preview') }}
                          </a>
                          <a class="dropdown-item" href="#" @click.prevent="editTemplate(template)">
                            <i class="fas fa-edit mr-2"></i> {{ $t('Edit') }}
                          </a>
                          <a 
                            class="dropdown-item" 
                            href="#" 
                            @click.prevent="setAsDefault(template)"
                            v-if="!template.is_default"
                          >
                            <i class="fas fa-star mr-2"></i> {{ $t('Set as Default') }}
                          </a>
                          <div class="dropdown-divider" v-if="!template.is_default"></div>
                          <a 
                            class="dropdown-item text-danger" 
                            href="#" 
                            @click.prevent="deleteTemplate(template)"
                            v-if="!template.is_default"
                          >
                            <i class="fas fa-trash mr-2"></i> {{ $t('Delete') }}
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <p class="card-text text-muted small">{{ template.description }}</p>
                    
                    <div class="template-preview mb-3">
                      <div 
                        class="preview-container" 
                        v-html="getTemplatePreview(template)"
                      ></div>
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center">
                      <span 
                        class="badge" 
                        :class="template.is_default ? 'badge-primary' : 'badge-secondary'"
                      >
                        {{ template.is_default ? $t('Default') : $t('Custom') }}
                      </span>
                      <small class="text-muted">{{ template.name }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Template Modal -->
    <div class="modal fade" id="templateModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ editingTemplate ? $t('Edit Template') : $t('Create Template') }}
            </h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveTemplate">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{ $t('Template Name') }} <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      v-model="form.name" 
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('name') }"
                      required
                    >
                    <has-error :form="form" field="name" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{ $t('Display Name') }} <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      v-model="form.display_name" 
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('display_name') }"
                      required
                    >
                    <has-error :form="form" field="display_name" />
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>{{ $t('Description') }}</label>
                <textarea 
                  v-model="form.description" 
                  class="form-control" 
                  rows="2"
                ></textarea>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{ $t('Template Key') }} <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      v-model="form.template_key" 
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('template_key') }"
                      required
                    >
                    <has-error :form="form" field="template_key" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>{{ $t('Sort Order') }}</label>
                    <input 
                      type="number" 
                      v-model="form.sort_order" 
                      class="form-control"
                      min="0"
                    >
                  </div>
                </div>
              </div>

              <!-- Template Configuration -->
              <div class="card">
                <div class="card-header">
                  <h6 class="mb-0">{{ $t('Template Configuration') }}</h6>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>{{ $t('Primary Color') }}</label>
                        <input 
                          type="color" 
                          v-model="form.template_config.primary_color" 
                          class="form-control"
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>{{ $t('Secondary Color') }}</label>
                        <input 
                          type="color" 
                          v-model="form.template_config.secondary_color" 
                          class="form-control"
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label>{{ $t('Accent Color') }}</label>
                        <input 
                          type="color" 
                          v-model="form.template_config.accent_color" 
                          class="form-control"
                        >
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>{{ $t('Font Family') }}</label>
                        <select v-model="form.template_config.font_family" class="form-control">
                          <option value="Inter, sans-serif">Inter</option>
                          <option value="Roboto, sans-serif">Roboto</option>
                          <option value="Poppins, sans-serif">Poppins</option>
                          <option value="Playfair Display, serif">Playfair Display</option>
                          <option value="JetBrains Mono, monospace">JetBrains Mono</option>
                          <option value="Arial, sans-serif">Arial</option>
                          <option value="Times New Roman, serif">Times New Roman</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>{{ $t('Font Size') }}</label>
                        <select v-model="form.template_config.font_size" class="form-control">
                          <option value="12px">12px</option>
                          <option value="13px">13px</option>
                          <option value="14px">14px</option>
                          <option value="15px">15px</option>
                          <option value="16px">16px</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label>{{ $t('Header Font Size') }}</label>
                        <select v-model="form.template_config.header_font_size" class="form-control">
                          <option value="18px">18px</option>
                          <option value="20px">20px</option>
                          <option value="22px">22px</option>
                          <option value="24px">24px</option>
                          <option value="26px">26px</option>
                          <option value="28px">28px</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>{{ $t('Border Radius') }}</label>
                        <select v-model="form.template_config.border_radius" class="form-control">
                          <option value="0px">None</option>
                          <option value="4px">Small</option>
                          <option value="6px">Medium</option>
                          <option value="8px">Large</option>
                          <option value="12px">Extra Large</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>{{ $t('Layout Style') }}</label>
                        <select v-model="form.template_config.layout" class="form-control">
                          <option value="minimal">Minimal</option>
                          <option value="corporate">Corporate</option>
                          <option value="creative">Creative</option>
                          <option value="classic">Classic</option>
                          <option value="tech">Tech</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- HTML Template -->
              <div class="form-group">
                <label>{{ $t('HTML Template') }} <span class="text-danger">*</span></label>
                <textarea 
                  v-model="form.html_template" 
                  class="form-control" 
                  rows="10"
                  :class="{ 'is-invalid': form.errors.has('html_template') }"
                  required
                ></textarea>
                <has-error :form="form" field="html_template" />
              </div>

              <!-- CSS Styles -->
              <div class="form-group">
                <label>{{ $t('CSS Styles') }} <span class="text-danger">*</span></label>
                <textarea 
                  v-model="form.css_styles" 
                  class="form-control" 
                  rows="8"
                  :class="{ 'is-invalid': form.errors.has('css_styles') }"
                  required
                ></textarea>
                <has-error :form="form" field="css_styles" />
              </div>

              <div class="form-group">
                <div class="form-check">
                  <input 
                    type="checkbox" 
                    v-model="form.is_default" 
                    class="form-check-input" 
                    id="is_default"
                  >
                  <label class="form-check-label" for="is_default">
                    {{ $t('Set as default template for this module') }}
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              {{ $t('Cancel') }}
            </button>
            <button 
              type="button" 
              class="btn btn-primary" 
              @click="saveTemplate"
              :disabled="form.busy"
            >
              <i class="fas fa-save" v-if="!form.busy"></i>
              <i class="fas fa-spinner fa-spin" v-else></i>
              {{ form.busy ? $t('Saving...') : $t('Save Template') }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview Modal -->
    <div class="modal fade" id="previewModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('Template Preview') }}</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="preview-container" v-html="previewContent"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              {{ $t('Close') }}
            </button>
            <button type="button" class="btn btn-primary" @click="downloadPDF">
              <i class="fas fa-download"></i> {{ $t('Download PDF') }}
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
  middleware: ['auth', 'check-permissions'],
  
  metaInfo() {
    return { title: this.$t('Print Templates') }
  },

  data: () => ({
    breadcrumbsCurrent: 'Print Templates',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Settings',
        url: 'settings.index',
      },
      {
        name: 'Print Templates',
        url: '',
      },
    ],
    
    activeModule: 'invoice',
    loading: false,
    templates: [],
    editingTemplate: null,
    previewContent: '',
    
    form: new Form({
      name: '',
      module: 'invoice',
      template_key: '',
      display_name: '',
      description: '',
      is_default: false,
      is_active: true,
      template_config: {
        primary_color: '#2563eb',
        secondary_color: '#64748b',
        accent_color: '#f1f5f9',
        font_family: 'Inter, sans-serif',
        font_size: '14px',
        header_font_size: '24px',
        border_radius: '8px',
        layout: 'minimal'
      },
      html_template: '',
      css_styles: '',
      preview_data: null,
      sort_order: 0
    })
  }),

  computed: {
    tabs() {
      return [
        {
          module: 'invoice',
          name: this.$t('Invoices'),
          icon: 'fas fa-file-invoice'
        },
        {
          module: 'purchase',
          name: this.$t('Purchases'),
          icon: 'fas fa-shopping-cart'
        },
        {
          module: 'quotation',
          name: this.$t('Quotations'),
          icon: 'fas fa-file-contract'
        },
        {
          module: 'expense',
          name: this.$t('Expenses'),
          icon: 'fas fa-receipt'
        }
      ]
    }
  },

  created() {
    this.loadTemplates()
  },

  methods: {
    async loadTemplates() {
      this.loading = true
      try {
        const { data } = await axios.get(`/api/print-templates?module=${this.activeModule}`)
        this.templates = data.data
      } catch (error) {
        this.$toastr.error(this.$t('Failed to load templates'))
      } finally {
        this.loading = false
      }
    },

    setActiveModule(module) {
      this.activeModule = module
      this.form.module = module
      this.loadTemplates()
    },

    getModuleName(module) {
      const tab = this.tabs.find(t => t.module === module)
      return tab ? tab.name : module
    },

    openTemplateModal(template = null) {
      this.editingTemplate = template
      if (template) {
        this.form.fill(template)
        this.form.template_config = { ...template.template_config }
      } else {
        this.form.reset()
        this.form.module = this.activeModule
        this.form.template_key = `${this.activeModule}_${Date.now()}`
      }
      $('#templateModal').modal('show')
    },

    editTemplate(template) {
      this.openTemplateModal(template)
    },

    async saveTemplate() {
      try {
        if (this.editingTemplate) {
          await this.form.put(`/api/print-templates/${this.editingTemplate.id}`)
          this.$toastr.success(this.$t('Template updated successfully'))
        } else {
          await this.form.post('/api/print-templates')
          this.$toastr.success(this.$t('Template created successfully'))
        }
        
        $('#templateModal').modal('hide')
        this.loadTemplates()
        this.form.reset()
        this.editingTemplate = null
      } catch (error) {
        this.$toastr.error(this.$t('Failed to save template'))
      }
    },

    async deleteTemplate(template) {
      if (confirm(this.$t('Are you sure you want to delete this template?'))) {
        try {
          await axios.delete(`/api/print-templates/${template.id}`)
          this.$toastr.success(this.$t('Template deleted successfully'))
          this.loadTemplates()
        } catch (error) {
          this.$toastr.error(this.$t('Failed to delete template'))
        }
      }
    },

    async setAsDefault(template) {
      try {
        await axios.post(`/api/print-templates/${template.id}/set-default`)
        this.$toastr.success(this.$t('Template set as default successfully'))
        this.loadTemplates()
      } catch (error) {
        this.$toastr.error(this.$t('Failed to set template as default'))
      }
    },

    async previewTemplate(template) {
      try {
        const { data } = await axios.get(`/api/print-templates/${template.id}/preview`)
        this.previewContent = this.renderTemplate(template, data.data.preview_data)
        $('#previewModal').modal('show')
      } catch (error) {
        this.$toastr.error(this.$t('Failed to load template preview'))
      }
    },

    getTemplatePreview(template) {
      // Simple preview rendering
      return `
        <div class="template-preview-mini" style="
          font-family: ${template.template_config.font_family};
          font-size: ${template.template_config.font_size};
          color: ${template.template_config.secondary_color};
          background: ${template.template_config.accent_color};
          padding: 10px;
          border-radius: ${template.template_config.border_radius};
          border: 1px solid ${template.template_config.primary_color};
        ">
          <div style="color: ${template.template_config.primary_color}; font-size: ${template.template_config.header_font_size}; font-weight: bold; margin-bottom: 5px;">
            ${template.display_name}
          </div>
          <div style="font-size: 12px;">
            Sample Document Preview
          </div>
        </div>
      `
    },

    renderTemplate(template, data) {
      // This would render the actual template with data
      // For now, return a simple preview
      return `
        <div style="
          font-family: ${template.template_config.font_family};
          font-size: ${template.template_config.font_size};
          color: ${template.template_config.secondary_color};
          background: white;
          padding: 20px;
          border-radius: ${template.template_config.border_radius};
        ">
          <div style="color: ${template.template_config.primary_color}; font-size: ${template.template_config.header_font_size}; font-weight: bold; margin-bottom: 20px;">
            ${template.display_name} - Preview
          </div>
          <div>
            <p><strong>Document Number:</strong> ${data.invoice_no || data.purchase_no || data.quotation_no || 'DOC-001'}</p>
            <p><strong>Date:</strong> ${data.date}</p>
            <p><strong>Total:</strong> $${data.total}</p>
          </div>
        </div>
      `
    },

    downloadPDF() {
      // This would generate and download the PDF
      this.$toastr.info(this.$t('PDF download functionality will be implemented'))
    }
  }
}
</script>

<style scoped>
.template-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.template-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.template-card.border-primary {
  border-color: #007bff !important;
}

.template-preview {
  height: 120px;
  overflow: hidden;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  background: #f8f9fa;
}

.preview-container {
  font-size: 12px;
  line-height: 1.4;
}

.settings-card .card-header {
  border-bottom: 1px solid #ddd;
}

.settings-card .card-body {
  padding: 10px;
}

.settings-card .nav-pills .nav-link {
  justify-content: flex-start;
}

.settings-card .nav-pills .nav-link.active,
.settings-card .nav-pills .show > .nav-link {
  color: #6366f1;
  background-color: #6366f159;
}

.settings-card .nav-pills .nav-link {
  display: flex;
  align-items: center;
}

.settings-card .nav-pills .nav-link svg {
  width: 12px;
  margin-right: 6px;
  height: 12px;
}

.settings-card .nav.flex-column:not(.nav-sidebar) > li {
  border-bottom: none !important;
}
</style>
