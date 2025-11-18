"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8222],{

/***/ 8222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ print_templates)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/print-templates.vue?vue&type=template&id=7aea7555&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row align-items-center mb-4"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('h1', {
    staticClass: "page-title m-0"
  }, [_c('i', {
    staticClass: "fas fa-print me-2"
  }), _vm._v("\n                " + _vm._s(_vm.$t('Print Templates')) + " - " + _vm._s(_vm.$t(_vm.selectedModule.charAt(0).toUpperCase() + _vm.selectedModule.slice(1) + 's')) + "\n              ")]), _vm._v(" "), _c('p', {
    staticClass: "page-subtitle"
  }, [_vm._v(_vm._s(_vm.$t('Manage your')) + " " + _vm._s(_vm.$t(_vm.selectedModule.charAt(0).toUpperCase() + _vm.selectedModule.slice(1) + 's')) + " " + _vm._s(_vm.$t('templates')))])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 text-end"
  }, [!_vm.isEditing ? _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.createNewTemplate
    }
  }, [_c('i', {
    staticClass: "fas fa-plus me-2"
  }), _vm._v("\n                " + _vm._s(_vm.$t('New Template')) + "\n              ")]) : _vm._e()])]), _vm._v(" "), !_vm.isEditing ? _c('div', {
    staticClass: "template-list-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "module-filter mb-4"
  }, [_c('div', {
    staticClass: "btn-group",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    staticClass: "btn btn-outline-primary",
    "class": {
      active: _vm.selectedModule === 'invoice'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.selectModule('invoice');
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('Invoices')) + "\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-primary",
    "class": {
      active: _vm.selectedModule === 'purchase'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.selectModule('purchase');
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('Purchases')) + "\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-primary",
    "class": {
      active: _vm.selectedModule === 'quotation'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.selectModule('quotation');
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('Quotations')) + "\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-primary",
    "class": {
      active: _vm.selectedModule === 'expense'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.selectModule('expense');
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('Expenses')) + "\n                    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-primary",
    "class": {
      active: _vm.selectedModule === 'reports'
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.selectModule('reports');
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t('Reports')) + "\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "templates-grid"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.filteredTemplates, function (template) {
    return _c('div', {
      key: template.id,
      staticClass: "col-xl-4 col-lg-6 col-md-6 mb-4"
    }, [_c('div', {
      staticClass: "template-card",
      "class": {
        'is-default': template.is_default
      }
    }, [_c('div', {
      staticClass: "template-header"
    }, [_c('div', {
      staticClass: "template-title"
    }, [_c('h5', {
      staticClass: "template-name"
    }, [_vm._v(_vm._s(_vm.translateTemplateText(template.display_name)))]), _vm._v(" "), _c('span', {
      staticClass: "template-module"
    }, [_vm._v(_vm._s(template.module))])]), _vm._v(" "), _c('div', {
      staticClass: "template-status"
    }, [template.is_default ? _c('span', {
      staticClass: "badge badge-default"
    }, [_c('i', {
      staticClass: "fas fa-star me-1"
    }), _vm._v(_vm._s(_vm.$t('Default')) + "\n                            ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "template-description"
    }, [_c('p', [_vm._v(_vm._s(template.description ? _vm.translateTemplateText(template.description) : _vm.$t('No description provided')))])]), _vm._v(" "), _c('div', {
      staticClass: "template-actions"
    }, [_c('button', {
      staticClass: "btn btn-primary btn-sm",
      on: {
        "click": function click($event) {
          return _vm.editTemplate(template);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit me-1"
    }), _vm._v("\n                            " + _vm._s(_vm.$t('Edit')) + "\n                          ")]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-outline-secondary btn-sm",
      on: {
        "click": function click($event) {
          return _vm.previewTemplate(template);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-eye me-1"
    }), _vm._v("\n                            " + _vm._s(_vm.$t('Preview')) + "\n                          ")]), _vm._v(" "), !template.is_default ? _c('button', {
      staticClass: "btn btn-outline-success btn-sm",
      attrs: {
        "disabled": _vm.saving
      },
      on: {
        "click": function click($event) {
          return _vm.setAsDefault(template);
        }
      }
    }, [!_vm.saving ? _c('i', {
      staticClass: "fas fa-star me-1"
    }) : _vm._e(), _vm._v(" "), _vm.saving ? _c('i', {
      staticClass: "fas fa-spinner fa-spin me-1"
    }) : _vm._e(), _vm._v("\n                            " + _vm._s(_vm.saving ? _vm.$t('Setting...') : _vm.$t('Set Default')) + "\n                          ")]) : _vm._e()])])]);
  }), 0), _vm._v(" "), _vm.filteredTemplates.length === 0 ? _c('div', {
    staticClass: "empty-state"
  }, [_c('div', {
    staticClass: "empty-state-content"
  }, [_c('i', {
    staticClass: "fas fa-file-alt empty-state-icon"
  }), _vm._v(" "), _c('h4', {
    staticClass: "empty-state-title"
  }, [_vm._v(_vm._s(_vm.$t('No Templates Found')))]), _vm._v(" "), _c('p', {
    staticClass: "empty-state-description"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t('No templates found for')) + " " + _vm._s(_vm.$t(_vm.selectedModule.charAt(0).toUpperCase() + _vm.selectedModule.slice(1) + 's')) + "\n                      ")]), _vm._v(" "), _vm.$can('print-templates-create') ? _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.createNewTemplate
    }
  }, [_c('i', {
    staticClass: "fas fa-plus me-2"
  }), _vm._v("\n                        " + _vm._s(_vm.$t('Create First Template')) + "\n                      ")]) : _vm._e()])]) : _vm._e()])])])]) : _vm._e(), _vm._v(" "), _vm.isEditing ? _c('div', {
    staticClass: "template-editor-section"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "editor-header mb-4"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('h2', {
    staticClass: "editor-title"
  }, [_c('i', {
    staticClass: "fas fa-edit me-2"
  }), _vm._v("\n                          " + _vm._s(_vm.editingTemplate.display_name ? _vm.translateTemplateText(_vm.editingTemplate.display_name) : _vm.$t('New Template')) + "\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-primary"
  }, [_vm._v(_vm._s(_vm.editingTemplate.module))])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4 text-end"
  }, [_c('button', {
    staticClass: "btn btn-outline-secondary me-2",
    on: {
      "click": _vm.cancelEdit
    }
  }, [_c('i', {
    staticClass: "fas fa-times me-1"
  }), _vm._v("\n                          " + _vm._s(_vm.$t('Cancel')) + "\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-outline-primary me-2",
    on: {
      "click": _vm.previewCurrentTemplate
    }
  }, [_c('i', {
    staticClass: "fas fa-eye me-1"
  }), _vm._v("\n                          " + _vm._s(_vm.$t('Preview')) + "\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.saving
    },
    on: {
      "click": _vm.saveTemplate
    }
  }, [!_vm.saving ? _c('i', {
    staticClass: "fas fa-save"
  }) : _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }), _vm._v("\n                          " + _vm._s(_vm.saving ? _vm.$t('Saving...') : _vm.$t('Save')) + "\n                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "editor-content"
  }, [_c('div', {
    staticClass: "row g-4"
  }, [_c('div', {
    staticClass: "col-xl-4 col-lg-5 col-md-12"
  }, [_c('div', {
    staticClass: "editor-controls"
  }, [_c('div', {
    staticClass: "card settings-card mb-4"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "card-title mb-0"
  }, [_c('i', {
    staticClass: "fas fa-info-circle me-2"
  }), _vm._v("\n                                " + _vm._s(_vm.$t('Basic Information')) + "\n                              ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Template Name')) + " "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editingTemplate.display_name,
      expression: "editingTemplate.display_name"
    }],
    staticClass: "form-control form-control-lg",
    attrs: {
      "type": "text",
      "placeholder": _vm.$t('Enter template name')
    },
    domProps: {
      "value": _vm.editingTemplate.display_name
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.editingTemplate, "display_name", $event.target.value);
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), !_vm.editingTemplate.display_name ? _c('div', {
    staticClass: "invalid-feedback d-block"
  }, [_vm._v("\n                                  " + _vm._s(_vm.$t('Template name is required')) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-0"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Description')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editingTemplate.description,
      expression: "editingTemplate.description"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "3",
      "placeholder": _vm.$t('Enter template description')
    },
    domProps: {
      "value": _vm.editingTemplate.description
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.editingTemplate, "description", $event.target.value);
      }, _vm.generateLivePreview]
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card settings-card mb-4"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "card-title mb-0"
  }, [_c('i', {
    staticClass: "fas fa-palette me-2"
  }), _vm._v("\n                                " + _vm._s(_vm.$t('Design Settings')) + "\n                              ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Primary Color')))]), _vm._v(" "), _c('div', {
    staticClass: "color-input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.colors.primary,
      expression: "templateConfig.colors.primary"
    }],
    staticClass: "color-picker",
    attrs: {
      "type": "color"
    },
    domProps: {
      "value": _vm.templateConfig.colors.primary
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.templateConfig.colors, "primary", $event.target.value);
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.colors.primary,
      expression: "templateConfig.colors.primary"
    }],
    staticClass: "form-control color-text-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.templateConfig.colors.primary
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.templateConfig.colors, "primary", $event.target.value);
      }, _vm.generateLivePreview]
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Secondary Color')))]), _vm._v(" "), _c('div', {
    staticClass: "color-input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.colors.secondary,
      expression: "templateConfig.colors.secondary"
    }],
    staticClass: "color-picker",
    attrs: {
      "type": "color"
    },
    domProps: {
      "value": _vm.templateConfig.colors.secondary
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.templateConfig.colors, "secondary", $event.target.value);
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.colors.secondary,
      expression: "templateConfig.colors.secondary"
    }],
    staticClass: "form-control color-text-input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.templateConfig.colors.secondary
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.templateConfig.colors, "secondary", $event.target.value);
      }, _vm.generateLivePreview]
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Paper Size')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.layout.paperSize,
      expression: "templateConfig.layout.paperSize"
    }],
    staticClass: "form-select",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.templateConfig.layout, "paperSize", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.generateLivePreview]
    }
  }, [_c('option', {
    attrs: {
      "value": "A4"
    }
  }, [_vm._v("A4 (210 × 297 mm)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Letter"
    }
  }, [_vm._v("Letter (8.5 × 11 in)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Legal"
    }
  }, [_vm._v("Legal (8.5 × 14 in)")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group mb-0"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Margins')) + " (mm)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.number",
      value: _vm.templateConfig.layout.margins,
      expression: "templateConfig.layout.margins",
      modifiers: {
        "number": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "min": "5",
      "max": "50"
    },
    domProps: {
      "value": _vm.templateConfig.layout.margins
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.templateConfig.layout, "margins", _vm._n($event.target.value));
      }, _vm.generateLivePreview],
      "blur": function blur($event) {
        return _vm.$forceUpdate();
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "card settings-card mb-4"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "card-title mb-0"
  }, [_c('i', {
    staticClass: "fas fa-image me-2"
  }), _vm._v("\n                                " + _vm._s(_vm.$t('Logo Settings')) + "\n                              ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group mb-3"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Template Logo')))]), _vm._v(" "), _c('div', {
    staticClass: "logo-upload-container"
  }, [_vm.editingTemplate.custom_logo || _vm.editingTemplate.logo_url ? _c('div', {
    staticClass: "current-logo"
  }, [_c('img', {
    staticClass: "logo-preview",
    attrs: {
      "src": _vm.editingTemplate.logo_url || _vm.editingTemplate.custom_logo,
      "alt": "Current Logo"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "logo-actions"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-outline-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.triggerLogoUpload
    }
  }, [_c('i', {
    staticClass: "fas fa-edit me-1"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('Change Logo')) + "\n                                      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-danger",
    attrs: {
      "type": "button",
      "disabled": _vm.saving
    },
    on: {
      "click": _vm.removeCustomLogo
    }
  }, [_c('i', {
    staticClass: "fas fa-trash me-1"
  }), _vm._v("\n                                        " + _vm._s(_vm.$t('Remove')) + "\n                                      ")])])]) : _c('div', {
    staticClass: "logo-upload-placeholder",
    on: {
      "click": _vm.triggerLogoUpload
    }
  }, [_c('i', {
    staticClass: "fas fa-cloud-upload-alt"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.$t('Upload Custom Logo')))]), _vm._v(" "), _c('small', [_vm._v(_vm._s(_vm.$t('Click to browse or drag and drop')))])]), _vm._v(" "), _c('input', {
    ref: "logoInput",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "accept": "image/*"
    },
    on: {
      "change": _vm.handleLogoUpload
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-text"
  }, [_c('i', {
    staticClass: "fas fa-info-circle me-1"
  }), _vm._v("\n                                  " + _vm._s(_vm.$t('Upload a custom logo for this template. If no custom logo is uploaded, the system will use the logo from general settings.')) + "\n                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "card settings-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "card-title mb-0"
  }, [_c('i', {
    staticClass: "fas fa-cogs me-2"
  }), _vm._v("\n                                " + _vm._s(_vm.$t('Template Elements')) + "\n                              ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "elements-grid"
  }, [_c('div', {
    staticClass: "element-item"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.elements.showLogo,
      expression: "templateConfig.elements.showLogo"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "showLogo"
    },
    domProps: {
      "checked": Array.isArray(_vm.templateConfig.elements.showLogo) ? _vm._i(_vm.templateConfig.elements.showLogo, null) > -1 : _vm.templateConfig.elements.showLogo
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.templateConfig.elements.showLogo,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.templateConfig.elements, "showLogo", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.templateConfig.elements, "showLogo", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.templateConfig.elements, "showLogo", $$c);
        }
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "showLogo"
    }
  }, [_c('i', {
    staticClass: "fas fa-image element-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "element-content"
  }, [_c('div', {
    staticClass: "element-title"
  }, [_vm._v(_vm._s(_vm.$t('Company Logo')))]), _vm._v(" "), _c('div', {
    staticClass: "element-description"
  }, [_vm._v(_vm._s(_vm.$t('Display company logo in header')))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "element-item"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.elements.showCompanyInfo,
      expression: "templateConfig.elements.showCompanyInfo"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "showCompanyInfo"
    },
    domProps: {
      "checked": Array.isArray(_vm.templateConfig.elements.showCompanyInfo) ? _vm._i(_vm.templateConfig.elements.showCompanyInfo, null) > -1 : _vm.templateConfig.elements.showCompanyInfo
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.templateConfig.elements.showCompanyInfo,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.templateConfig.elements, "showCompanyInfo", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.templateConfig.elements, "showCompanyInfo", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.templateConfig.elements, "showCompanyInfo", $$c);
        }
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "showCompanyInfo"
    }
  }, [_c('i', {
    staticClass: "fas fa-building element-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "element-content"
  }, [_c('div', {
    staticClass: "element-title"
  }, [_vm._v(_vm._s(_vm.$t('Company Information')))]), _vm._v(" "), _c('div', {
    staticClass: "element-description"
  }, [_vm._v(_vm._s(_vm.$t('Show company name, address, contact')))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "element-item"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.elements.showClientInfo,
      expression: "templateConfig.elements.showClientInfo"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "showClientInfo"
    },
    domProps: {
      "checked": Array.isArray(_vm.templateConfig.elements.showClientInfo) ? _vm._i(_vm.templateConfig.elements.showClientInfo, null) > -1 : _vm.templateConfig.elements.showClientInfo
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.templateConfig.elements.showClientInfo,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.templateConfig.elements, "showClientInfo", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.templateConfig.elements, "showClientInfo", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.templateConfig.elements, "showClientInfo", $$c);
        }
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "showClientInfo"
    }
  }, [_c('i', {
    staticClass: "fas fa-user element-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "element-content"
  }, [_c('div', {
    staticClass: "element-title"
  }, [_vm._v(_vm._s(_vm.$t('Client Information')))]), _vm._v(" "), _c('div', {
    staticClass: "element-description"
  }, [_vm._v(_vm._s(_vm.$t('Show client/customer details')))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "element-item"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.elements.showItemsTable,
      expression: "templateConfig.elements.showItemsTable"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "showItemsTable"
    },
    domProps: {
      "checked": Array.isArray(_vm.templateConfig.elements.showItemsTable) ? _vm._i(_vm.templateConfig.elements.showItemsTable, null) > -1 : _vm.templateConfig.elements.showItemsTable
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.templateConfig.elements.showItemsTable,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.templateConfig.elements, "showItemsTable", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.templateConfig.elements, "showItemsTable", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.templateConfig.elements, "showItemsTable", $$c);
        }
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "showItemsTable"
    }
  }, [_c('i', {
    staticClass: "fas fa-table element-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "element-content"
  }, [_c('div', {
    staticClass: "element-title"
  }, [_vm._v(_vm._s(_vm.$t('Items Table')))]), _vm._v(" "), _c('div', {
    staticClass: "element-description"
  }, [_vm._v(_vm._s(_vm.$t('Display products/services table')))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "element-item"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.elements.showTotals,
      expression: "templateConfig.elements.showTotals"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "showTotals"
    },
    domProps: {
      "checked": Array.isArray(_vm.templateConfig.elements.showTotals) ? _vm._i(_vm.templateConfig.elements.showTotals, null) > -1 : _vm.templateConfig.elements.showTotals
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.templateConfig.elements.showTotals,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.templateConfig.elements, "showTotals", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.templateConfig.elements, "showTotals", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.templateConfig.elements, "showTotals", $$c);
        }
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "showTotals"
    }
  }, [_c('i', {
    staticClass: "fas fa-calculator element-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "element-content"
  }, [_c('div', {
    staticClass: "element-title"
  }, [_vm._v(_vm._s(_vm.$t('Totals Section')))]), _vm._v(" "), _c('div', {
    staticClass: "element-description"
  }, [_vm._v(_vm._s(_vm.$t('Show subtotal, tax, and total')))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "element-item"
  }, [_c('div', {
    staticClass: "form-check"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.templateConfig.elements.showFooter,
      expression: "templateConfig.elements.showFooter"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox",
      "id": "showFooter"
    },
    domProps: {
      "checked": Array.isArray(_vm.templateConfig.elements.showFooter) ? _vm._i(_vm.templateConfig.elements.showFooter, null) > -1 : _vm.templateConfig.elements.showFooter
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.templateConfig.elements.showFooter,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.templateConfig.elements, "showFooter", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.templateConfig.elements, "showFooter", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.templateConfig.elements, "showFooter", $$c);
        }
      }, _vm.generateLivePreview]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "form-check-label",
    attrs: {
      "for": "showFooter"
    }
  }, [_c('i', {
    staticClass: "fas fa-align-center element-icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "element-content"
  }, [_c('div', {
    staticClass: "element-title"
  }, [_vm._v(_vm._s(_vm.$t('Footer')))]), _vm._v(" "), _c('div', {
    staticClass: "element-description"
  }, [_vm._v(_vm._s(_vm.$t('Show footer text and notes')))])])])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-lg-7 col-md-12"
  }, [_c('div', {
    staticClass: "editor-preview"
  }, [_c('div', {
    staticClass: "card preview-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center"
  }, [_c('h5', {
    staticClass: "card-title mb-0"
  }, [_c('i', {
    staticClass: "fas fa-eye me-2"
  }), _vm._v("\n                                  " + _vm._s(_vm.$t('Live Preview')) + "\n                                ")]), _vm._v(" "), _c('div', {
    staticClass: "preview-actions"
  }, [_c('button', {
    staticClass: "btn btn-sm btn-outline-primary me-2",
    on: {
      "click": _vm.refreshPreview
    }
  }, [_c('i', {
    staticClass: "fas fa-sync me-1"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('Refresh')) + "\n                                  ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-success",
    on: {
      "click": _vm.downloadPreview
    }
  }, [_c('i', {
    staticClass: "fas fa-external-link-alt me-1"
  }), _vm._v("\n                                    " + _vm._s(_vm.$t('Open Preview')) + "\n                                  ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "card-body p-0"
  }, [_c('div', {
    staticClass: "preview-container"
  }, [!_vm.livePreview ? _c('div', {
    staticClass: "preview-placeholder"
  }, [_c('div', {
    staticClass: "preview-placeholder-content"
  }, [_c('i', {
    staticClass: "fas fa-file-alt preview-icon"
  }), _vm._v(" "), _c('h6', {
    staticClass: "preview-title"
  }, [_vm._v(_vm._s(_vm.$t('Preview will appear here')))]), _vm._v(" "), _c('p', {
    staticClass: "preview-description"
  }, [_vm._v(_vm._s(_vm.$t('Start editing your template to see the live preview')))])])]) : _c('div', {
    staticClass: "preview-frame-container"
  }, [_c('div', {
    staticClass: "preview-frame",
    domProps: {
      "innerHTML": _vm._s(_vm.livePreview)
    }
  })])])])])])])])])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "previewModal",
      "tabindex": "-1",
      "role": "dialog",
      "aria-labelledby": "previewModalLabel",
      "aria-hidden": "true"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-xl",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content preview-modal"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title",
    attrs: {
      "id": "previewModalLabel"
    }
  }, [_c('i', {
    staticClass: "fas fa-eye me-2"
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Template Preview')) + "\n                  ")]), _vm._v(" "), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-label": "Close"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "preview-modal-content",
    domProps: {
      "innerHTML": _vm._s(_vm.modalPreview)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-outline-secondary",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_c('i', {
    staticClass: "fas fa-times me-1"
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Close')) + "\n                  ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.downloadPreview
    }
  }, [_c('i', {
    staticClass: "fas fa-external-link-alt me-1"
  }), _vm._v(" \n                    " + _vm._s(_vm.$t('Open Preview')) + "\n                  ")])])])])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/print-templates.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const print_templatesvue_type_script_lang_js = ({
  name: 'PrintTemplatesSettings',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Print Templates')
    };
  },
  data: function data() {
    return {
      // Breadcrumbs
      breadcrumbsCurrent: 'Print Templates',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Print Templates',
        url: ''
      }],
      // View states
      isEditing: false,
      selectedModule: 'invoice',
      // Default to invoices

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
    };
  },
  computed: {
    filteredTemplates: function filteredTemplates() {
      var _this = this;
      return this.templates.filter(function (t) {
        return t.module === _this.selectedModule;
      });
    }
  },
  mounted: function mounted() {
    this.loadTemplates();
  },
  watch: {
    // Watch template config changes and update preview
    templateConfig: {
      handler: function handler() {
        this.generateLivePreview();
      },
      deep: true
    },
    // Watch editing template changes
    editingTemplate: {
      handler: function handler() {
        if (this.isEditing) {
          this.generateLivePreview();
        }
      },
      deep: true
    }
  },
  methods: {
    // Helper method to translate template names and descriptions
    translateTemplateText: function translateTemplateText(text) {
      if (!text) return '';
      var translated = this.$t(text);
      // If translation exists (different from original), return it, otherwise return original
      return translated !== text ? translated : text;
    },
    // Select module
    selectModule: function selectModule(module) {
      this.selectedModule = module;
      this.loadTemplates();
    },
    // Load templates from API
    loadTemplates: function loadTemplates() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$axios$get, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _this2.loading = true;
              _context.next = 4;
              return axios_default().get('/api/print-templates', {
                params: {
                  module: _this2.selectedModule
                }
              });
            case 4:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this2.templates = data.data || [];
              _context.next = 14;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error('Error loading templates:', _context.t0);
              _this2.$toastr.error(_this2.$t('Failed to load templates'));
              _this2.templates = [];
            case 14:
              _context.prev = 14;
              _this2.loading = false;
              return _context.finish(14);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9, 14, 17]]);
      }))();
    },
    // Create new template
    createNewTemplate: function createNewTemplate() {
      this.editingTemplate = {
        name: '',
        module: this.selectedModule,
        template_key: '',
        display_name: '',
        description: '',
        is_default: false,
        is_active: true,
        template_config: _objectSpread({}, this.templateConfig),
        html_template: '',
        css_styles: '',
        preview_data: null,
        sort_order: 0
      };
      this.isEditing = true;
      this.generateLivePreview();
    },
    // Edit existing template
    editTemplate: function editTemplate(template) {
      this.editingTemplate = _objectSpread({}, template);
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
          colors: _objectSpread(_objectSpread({}, this.templateConfig.colors), template.template_config.colors),
          typography: _objectSpread(_objectSpread({}, this.templateConfig.typography), template.template_config.typography),
          layout: _objectSpread(_objectSpread({}, this.templateConfig.layout), template.template_config.layout),
          elements: _objectSpread(_objectSpread({}, this.templateConfig.elements), template.template_config.elements)
        };
      }
      this.isEditing = true;
      this.generateLivePreview();
    },
    // Cancel editing
    cancelEdit: function cancelEdit() {
      this.isEditing = false;
      this.editingTemplate = {};
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
    },
    // Save template
    saveTemplate: function saveTemplate() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response, _error$response, errors, firstError;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!_this3.editingTemplate.display_name || _this3.editingTemplate.display_name.trim() === '')) {
                _context2.next = 3;
                break;
              }
              _this3.$toastr.error(_this3.$t('Template name is required'));
              return _context2.abrupt("return");
            case 3:
              _context2.prev = 3;
              _this3.saving = true;

              // Generate template key if new
              if (!_this3.editingTemplate.template_key) {
                _this3.editingTemplate.template_key = "".concat(_this3.editingTemplate.module, "_").concat(_this3.editingTemplate.display_name.toLowerCase().replace(/\s+/g, '_'));
              }

              // Update template config
              _this3.editingTemplate.template_config = _objectSpread({}, _this3.templateConfig);

              // Generate HTML and CSS
              _this3.editingTemplate.html_template = _this3.generateHTMLTemplate();
              _this3.editingTemplate.css_styles = _this3.generateCSSTemplate();
              if (!_this3.editingTemplate.id) {
                _context2.next = 15;
                break;
              }
              _context2.next = 12;
              return axios_default().put("/api/print-templates/".concat(_this3.editingTemplate.id), _this3.editingTemplate);
            case 12:
              _context2.t0 = _context2.sent;
              _context2.next = 18;
              break;
            case 15:
              _context2.next = 17;
              return axios_default().post('/api/print-templates', _this3.editingTemplate);
            case 17:
              _context2.t0 = _context2.sent;
            case 18:
              response = _context2.t0;
              if (response.data.status === 'success') {
                _this3.$toastr.success(_this3.$t('Template saved successfully'));
                _this3.cancelEdit();
                _this3.loadTemplates();
              } else {
                _this3.$toastr.error(response.data.message || _this3.$t('Failed to save template'));
              }
              _context2.next = 26;
              break;
            case 22:
              _context2.prev = 22;
              _context2.t1 = _context2["catch"](3);
              console.error('Error saving template:', _context2.t1);
              if (((_error$response = _context2.t1.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422) {
                // Validation errors
                errors = _context2.t1.response.data.errors;
                firstError = Object.values(errors)[0][0];
                _this3.$toastr.error(firstError);
              } else {
                _this3.$toastr.error(_this3.$t('Failed to save template'));
              }
            case 26:
              _context2.prev = 26;
              _this3.saving = false;
              return _context2.finish(26);
            case 29:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[3, 22, 26, 29]]);
      }))();
    },
    // Set as default
    setAsDefault: function setAsDefault(template) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response, _error$response2, _error$response3;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _this4.saving = true;
              _context3.next = 4;
              return axios_default().post("/api/print-templates/".concat(template.id, "/set-default"));
            case 4:
              response = _context3.sent;
              if (!(response.data.status === 'success')) {
                _context3.next = 11;
                break;
              }
              _this4.$toastr.success(_this4.$t('Template set as default'));
              _context3.next = 9;
              return _this4.loadTemplates();
            case 9:
              _context3.next = 12;
              break;
            case 11:
              _this4.$toastr.error(response.data.message || _this4.$t('Failed to set default template'));
            case 12:
              _context3.next = 18;
              break;
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);
              console.error('Error setting template as default:', _context3.t0);
              if (((_error$response2 = _context3.t0.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 404) {
                _this4.$toastr.error(_this4.$t('Template not found'));
              } else if (((_error$response3 = _context3.t0.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.status) === 422) {
                _this4.$toastr.error(_this4.$t('Cannot set this template as default'));
              } else {
                _this4.$toastr.error(_this4.$t('Failed to set default template'));
              }
            case 18:
              _context3.prev = 18;
              _this4.saving = false;
              return _context3.finish(18);
            case 21:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 14, 18, 21]]);
      }))();
    },
    // Preview template
    previewTemplate: function previewTemplate(template) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var previewContent;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              try {
                // Generate the full document preview
                previewContent = _this5.generateFullDocumentPreview(template); // Open preview in new tab
                _this5.openPreviewInNewTab(previewContent);
              } catch (error) {
                console.error('Error generating preview:', error);
                _this5.$toastr.error(_this5.$t('Failed to generate preview'));
              }
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    // Close modal
    closeModal: function closeModal() {
      $('#previewModal').modal('hide');
    },
    // Open preview in new tab
    openPreviewInNewTab: function openPreviewInNewTab(content) {
      try {
        // Create a new window
        var printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
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
    previewCurrentTemplate: function previewCurrentTemplate() {
      this.modalPreview = this.generateHTMLTemplate();
      this.$nextTick(function () {
        $('#previewModal').modal('show');
      });
    },
    // Generate live preview
    generateLivePreview: function generateLivePreview() {
      if (!this.isEditing) return;

      // Only generate preview if we have a template name
      if (this.editingTemplate.display_name && this.editingTemplate.display_name.trim()) {
        this.livePreview = this.generateHTMLTemplate();
      } else {
        this.livePreview = '';
      }
    },
    // Get template preview HTML (mini preview for cards)
    getTemplatePreview: function getTemplatePreview(template) {
      var _template$template_co, _template$template_co2, _template$template_co3;
      // Return a simplified preview of the template
      return "\n        <div class=\"template-preview-mini\">\n          <div class=\"preview-header\" style=\"background: ".concat(((_template$template_co = template.template_config) === null || _template$template_co === void 0 || (_template$template_co = _template$template_co.colors) === null || _template$template_co === void 0 ? void 0 : _template$template_co.primary) || '#2563eb', "; color: white; padding: 10px;\">\n            <h4 style=\"margin: 0; font-size: 16px;\">").concat(template.display_name, "</h4>\n          </div>\n          <div class=\"preview-body\" style=\"padding: 15px; background: ").concat(((_template$template_co2 = template.template_config) === null || _template$template_co2 === void 0 || (_template$template_co2 = _template$template_co2.colors) === null || _template$template_co2 === void 0 ? void 0 : _template$template_co2.background) || '#ffffff', ";\">\n            <p style=\"margin: 0; color: ").concat(((_template$template_co3 = template.template_config) === null || _template$template_co3 === void 0 || (_template$template_co3 = _template$template_co3.colors) === null || _template$template_co3 === void 0 ? void 0 : _template$template_co3.secondary) || '#6b7280', ";\">\n              ").concat(template.description || 'Template preview', "\n            </p>\n          </div>\n        </div>\n      ");
    },
    // Generate full document preview with sample data
    generateFullDocumentPreview: function generateFullDocumentPreview(template) {
      console.log('Template config:', template.template_config);
      var config = template.template_config || {
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
      var elements = config.elements || {};
      var colors = config.colors || {};
      var typography = config.typography || {};
      var layout = config.layout || {};

      // Sample data for preview
      var sampleData = {
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
          items: [{
            description: 'Sample Product 1',
            quantity: 2,
            price: 100.00,
            total: 200.00
          }, {
            description: 'Sample Service 1',
            quantity: 1,
            price: 150.00,
            total: 150.00
          }, {
            description: 'Sample Product 2',
            quantity: 3,
            price: 75.00,
            total: 225.00
          }],
          subtotal: 575.00,
          tax: 57.50,
          total: 632.50
        }
      };
      return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>".concat(template.display_name || 'Document', " - Preview</title>\n          <style>\n            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n            * { margin: 0; padding: 0; box-sizing: border-box; }\n            body { \n              font-family: ").concat(typography.fontFamily || 'Inter, sans-serif', "; \n              font-size: ").concat(typography.baseFontSize || 14, "px;\n              line-height: 1.6;\n              color: #374151;\n              background: #f8fafc;\n              padding: 2rem;\n              margin: 0;\n            }\n            .document-container {\n              max-width: 800px;\n              margin: 0 auto;\n              background: ").concat(colors.background || '#ffffff', ";\n              border-radius: 8px;\n              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n              overflow: hidden;\n            }\n            .document-header {\n              padding: 30px;\n              border-bottom: 2px solid #e5e7eb;\n              display: flex;\n              justify-content: space-between;\n              align-items: flex-start;\n            }\n            .company-info h1 {\n              color: ").concat(colors.primary || '#2563eb', ";\n              font-size: ").concat(typography.headerFontSize || 24, "px;\n              margin-bottom: 10px;\n            }\n            .company-info p {\n              color: ").concat(colors.secondary || '#6b7280', ";\n              margin: 5px 0;\n            }\n            .document-info {\n              text-align: right;\n            }\n            .document-info h2 {\n              color: ").concat(colors.primary || '#2563eb', ";\n              font-size: 24px;\n              margin-bottom: 15px;\n            }\n            .document-info p {\n              color: ").concat(colors.secondary || '#6b7280', ";\n              margin: 5px 0;\n            }\n            .client-section {\n              padding: 30px;\n              border-bottom: 1px solid #e5e7eb;\n            }\n            .client-section h3 {\n              color: ").concat(colors.primary || '#2563eb', ";\n              margin-bottom: 15px;\n            }\n            .items-table {\n              width: 100%;\n              border-collapse: collapse;\n              margin: 20px 0;\n            }\n            .items-table th,\n            .items-table td {\n              padding: 12px;\n              text-align: left;\n              border-bottom: 1px solid #e5e7eb;\n            }\n            .items-table th {\n              background: #f8fafc;\n              font-weight: 600;\n              color: ").concat(colors.primary || '#2563eb', ";\n            }\n            .items-table tr:hover {\n              background: #f8fafc;\n            }\n            .totals-section {\n              padding: 20px 30px;\n              border-top: 2px solid #e5e7eb;\n            }\n            .total-row {\n              display: flex;\n              justify-content: space-between;\n              margin: 10px 0;\n            }\n            .total-final {\n              font-weight: 700;\n              font-size: 18px;\n              color: ").concat(colors.primary || '#2563eb', ";\n              border-top: 2px solid #e5e7eb;\n              padding-top: 10px;\n            }\n            .document-footer {\n              padding: 30px;\n              text-align: center;\n              background: #f8fafc;\n              color: ").concat(colors.secondary || '#6b7280', ";\n            }\n            .company-logo {\n              max-height: 60px;\n              margin-bottom: 15px;\n            }\n          </style>\n        </head>\n        <body>\n          <div class=\"document-container\">\n            ").concat(elements.showLogo || elements.showCompanyInfo ? "\n            <div class=\"document-header\">\n              <div class=\"company-info\">\n                ".concat(elements.showLogo ? "<img src=\"".concat(this.getLogoUrl(), "\" alt=\"Company Logo\" class=\"company-logo\">") : '', "\n                ").concat(elements.showCompanyInfo ? "\n                <h1>".concat(sampleData.company.name, "</h1>\n                <p>").concat(sampleData.company.address, "</p>\n                <p>").concat(sampleData.company.phone, " \u2022 ").concat(sampleData.company.email, "</p>\n                ") : '', "\n              </div>\n              <div class=\"document-info\">\n                <h2>INVOICE</h2>\n                <p><strong>Invoice #:</strong> ").concat(sampleData.document.number, "</p>\n                <p><strong>Date:</strong> ").concat(sampleData.document.date, "</p>\n                <p><strong>Due Date:</strong> ").concat(sampleData.document.dueDate, "</p>\n              </div>\n            </div>\n            ") : '', "\n            \n            ").concat(elements.showClientInfo ? "\n            <div class=\"client-section\">\n              <h3>Bill To:</h3>\n              <p><strong>".concat(sampleData.client.name, "</strong></p>\n              <p>").concat(sampleData.client.address, "</p>\n              <p>").concat(sampleData.client.phone, " \u2022 ").concat(sampleData.client.email, "</p>\n            </div>\n            ") : '', "\n            \n            ").concat(elements.showItemsTable ? "\n            <div style=\"padding: 0 30px;\">\n              <table class=\"items-table\">\n                <thead>\n                  <tr>\n                    <th>Description</th>\n                    <th>Qty</th>\n                    <th>Price</th>\n                    <th>Total</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  ".concat(sampleData.document.items.map(function (item) {
        return "\n                    <tr>\n                      <td>".concat(item.description, "</td>\n                      <td>").concat(item.quantity, "</td>\n                      <td>$").concat(item.price.toFixed(2), "</td>\n                      <td>$").concat(item.total.toFixed(2), "</td>\n                    </tr>\n                  ");
      }).join(''), "\n                </tbody>\n              </table>\n            </div>\n            ") : '', "\n            \n            ").concat(elements.showTotals ? "\n            <div class=\"totals-section\">\n              <div class=\"total-row\">\n                <span>Subtotal:</span>\n                <span>$".concat(sampleData.document.subtotal.toFixed(2), "</span>\n              </div>\n              <div class=\"total-row\">\n                <span>Tax (10%):</span>\n                <span>$").concat(sampleData.document.tax.toFixed(2), "</span>\n              </div>\n              <div class=\"total-row total-final\">\n                <span>Total:</span>\n                <span>$").concat(sampleData.document.total.toFixed(2), "</span>\n              </div>\n            </div>\n            ") : '', "\n            \n            ").concat(elements.showFooter ? "\n            <div class=\"document-footer\">\n              <p>Thank you for your business!</p>\n              <p>This is a sample preview of your template.</p>\n            </div>\n            " : '', "\n          </div>\n        </body>\n        </html>\n      ");
    },
    // Generate HTML template
    generateHTMLTemplate: function generateHTMLTemplate() {
      var _this$editingTemplate, _this$editingTemplate2;
      var config = this.templateConfig || {
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
      var elements = config.elements || {};
      var colors = config.colors || {};
      var typography = config.typography || {};
      var layout = config.layout || {};
      return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>".concat(this.editingTemplate.display_name || 'Document', "</title>\n          <style>\n            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n            * { \n              margin: 0; \n              padding: 0; \n              box-sizing: border-box; \n            }\n            body { \n              font-family: ").concat(typography.fontFamily || 'Inter, sans-serif', "; \n              font-size: ").concat(typography.baseFontSize || 14, "px; \n              line-height: 1.6; \n              color: ").concat(colors.secondary || '#6b7280', "; \n              background: ").concat(colors.background || '#ffffff', "; \n              margin: 0; \n              padding: ").concat(layout.margins || 20, "mm;\n              min-height: 100vh;\n            }\n            .document-container { \n              max-width: 100%; \n              margin: 0 auto; \n              width: 100%;\n            }\n            h1, h2, h3 { \n              color: ").concat(colors.primary || '#2563eb', "; \n              margin: 0 0 1rem 0;\n            }\n            .document-header { \n              border-bottom: 2px solid #e5e7eb; \n              margin-bottom: 2rem; \n              padding-bottom: 1.5rem; \n            }\n            .items-table { \n              width: 100%; \n              border-collapse: collapse; \n              margin: 1.5rem 0;\n            }\n            .items-table th { \n              background: #f8fafc; \n              font-weight: 600;\n              padding: 0.75rem;\n              text-align: left;\n              border-bottom: 1px solid #e5e7eb;\n            }\n            .items-table td {\n              padding: 0.75rem;\n              border-bottom: 1px solid #f3f4f6;\n            }\n            .text-right {\n              text-align: right;\n            }\n            .total-final { \n              font-weight: 700; \n              border-top: 2px solid #e5e7eb; \n              padding-top: 0.75rem;\n            }\n            .totals-section {\n              display: flex;\n              justify-content: flex-end;\n              margin: 2rem 0;\n            }\n            .totals-table {\n              width: 300px;\n            }\n            .total-row {\n              display: flex;\n              justify-content: space-between;\n              padding: 0.5rem 0;\n              border-bottom: 1px solid #f3f4f6;\n            }\n            .client-section {\n              margin-bottom: 2rem;\n            }\n            .document-footer {\n              text-align: center;\n              padding-top: 1.5rem;\n              border-top: 1px solid #e5e7eb;\n              margin-top: 2rem;\n            }\n            .company-logo {\n              max-height: 60px;\n              margin-bottom: 1rem;\n            }\n            @media print {\n              body {\n                padding: ").concat(layout.margins || 20, "mm;\n              }\n            }\n          </style>\n        </head>\n        <body>\n          <div class=\"document-container\">\n            ").concat(elements.showLogo || elements.showCompanyInfo ? "\n            <!-- Header -->\n            <div class=\"document-header\">\n              <div style=\"display: flex; justify-content: space-between; align-items: flex-start;\">\n                <div>\n                  ".concat(elements.showLogo ? "<div><img src=\"".concat(this.getLogoUrl(), "\" alt=\"Logo\" class=\"company-logo\"></div>") : '', "\n                  ").concat(elements.showCompanyInfo ? "\n                  <h1 style=\"color: ".concat(colors.primary || '#2563eb', "; font-size: ").concat(typography.headerFontSize || 24, "px;\">Company Name</h1>\n                  <p style=\"margin: 0.5rem 0; color: ").concat(colors.secondary || '#6b7280', ";\">123 Business Street, City, State 12345</p>\n                  <p style=\"margin: 0; color: ").concat(colors.secondary || '#6b7280', ";\">Phone: (555) 123-4567 \u2022 Email: info@company.com</p>\n                  ") : '', "\n                </div>\n                <div style=\"text-align: right;\">\n                  <h2 style=\"color: ").concat(colors.primary || '#2563eb', "; font-size: 24px; margin: 0 0 1rem 0;\">").concat(((_this$editingTemplate = this.editingTemplate.module) === null || _this$editingTemplate === void 0 ? void 0 : _this$editingTemplate.toUpperCase()) || 'DOCUMENT', "</h2>\n                  <p style=\"margin: 0.25rem 0; color: ").concat(colors.secondary || '#6b7280', ";\">#: ").concat(((_this$editingTemplate2 = this.editingTemplate.module) === null || _this$editingTemplate2 === void 0 ? void 0 : _this$editingTemplate2.toUpperCase()) || 'DOC', "-001</p>\n                  <p style=\"margin: 0; color: ").concat(colors.secondary || '#6b7280', ";\">Date: ").concat(new Date().toLocaleDateString(), "</p>\n                </div>\n              </div>\n            </div>\n            ") : '', "\n            \n            ").concat(elements.showClientInfo ? "\n            <!-- Client Info -->\n            <div class=\"client-section\">\n              <h3 style=\"color: ".concat(colors.primary || '#2563eb', "; margin-bottom: 0.75rem;\">Bill To:</h3>\n              <p style=\"margin: 0.25rem 0; font-weight: 600;\">John Doe</p>\n              <p style=\"margin: 0.25rem 0; color: ").concat(colors.secondary || '#6b7280', ";\">123 Main St, City, State 12345</p>\n              <p style=\"margin: 0; color: ").concat(colors.secondary || '#6b7280', ";\">john@example.com \u2022 +1 234 567 8900</p>\n            </div>\n            ") : '', "\n            \n            ").concat(elements.showItemsTable ? "\n            <!-- Items Table -->\n            <div class=\"items-section\">\n              <table class=\"items-table\">\n                <thead>\n                  <tr>\n                    <th>Description</th>\n                    <th class=\"text-right\">Qty</th>\n                    <th class=\"text-right\">Rate</th>\n                    <th class=\"text-right\">Amount</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>Sample Product</td>\n                    <td class=\"text-right\">2</td>\n                    <td class=\"text-right\">$500.00</td>\n                    <td class=\"text-right\">$1,000.00</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            " : '', "\n            \n            ").concat(elements.showTotals ? "\n            <!-- Totals -->\n            <div class=\"totals-section\">\n              <div class=\"totals-table\">\n                <div class=\"total-row\">\n                  <span>Subtotal:</span>\n                  <span>$1,000.00</span>\n                </div>\n                <div class=\"total-row\">\n                  <span>Tax:</span>\n                  <span>$100.00</span>\n                </div>\n                <div class=\"total-row total-final\">\n                  <span>Total:</span>\n                  <span>$1,100.00</span>\n                </div>\n              </div>\n            </div>\n            " : '', "\n            \n            ").concat(elements.showFooter ? "\n            <!-- Footer -->\n            <div class=\"document-footer\">\n              <p style=\"margin: 0; color: ".concat(colors.secondary || '#6b7280', "; font-style: italic;\">Thank you for your business!</p>\n            </div>\n            ") : '', "\n          </div>\n        </body>\n        </html>\n      ");
    },
    // Generate CSS template
    generateCSSTemplate: function generateCSSTemplate() {
      var _config$typography, _config$typography2, _config$colors, _config$colors2, _config$colors3;
      var config = this.templateConfig || {
        colors: {
          primary: '#2563eb',
          secondary: '#6b7280',
          background: '#ffffff'
        },
        typography: {
          fontFamily: 'Inter, sans-serif',
          baseFontSize: 14,
          headerFontSize: 24
        }
      };
      return "\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body { \n          font-family: ".concat(((_config$typography = config.typography) === null || _config$typography === void 0 ? void 0 : _config$typography.fontFamily) || 'Inter, sans-serif', "; \n          font-size: ").concat(((_config$typography2 = config.typography) === null || _config$typography2 === void 0 ? void 0 : _config$typography2.baseFontSize) || 14, "px; \n          line-height: 1.6; \n          color: ").concat(((_config$colors = config.colors) === null || _config$colors === void 0 ? void 0 : _config$colors.secondary) || '#6b7280', "; \n          background: ").concat(((_config$colors2 = config.colors) === null || _config$colors2 === void 0 ? void 0 : _config$colors2.background) || '#ffffff', "; \n        }\n        .document-container { max-width: 800px; margin: 0 auto; }\n        h1, h2, h3 { color: ").concat(((_config$colors3 = config.colors) === null || _config$colors3 === void 0 ? void 0 : _config$colors3.primary) || '#2563eb', "; }\n        .document-header { border-bottom: 2px solid #e5e7eb; }\n        .items-table th { background: #f8fafc; }\n        .total-final { font-weight: 700; border-top: 2px solid #e5e7eb; }\n      ");
    },
    // Refresh preview
    refreshPreview: function refreshPreview() {
      this.generateLivePreview();
    },
    // Download preview as PDF
    downloadPreview: function downloadPreview() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var htmlContent, printWindow;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              try {
                // Generate HTML content for printing
                htmlContent = _this6.generateFullDocumentPreview(_this6.editingTemplate); // Create a new window with the HTML content
                printWindow = window.open('', '_blank');
                printWindow.document.write(htmlContent);
                printWindow.document.close();

                // Wait for content to load, then trigger print
                printWindow.onload = function () {
                  printWindow.print();
                };
                _this6.$toastr.success(_this6.$t('Print dialog opened'));
              } catch (error) {
                console.error('Error generating preview:', error);
                _this6.$toastr.error(_this6.$t('Failed to open print dialog'));
              }
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // Logo upload methods
    triggerLogoUpload: function triggerLogoUpload() {
      this.$refs.logoInput.click();
    },
    handleLogoUpload: function handleLogoUpload(event) {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var file, formData, response, _error$response4, errors, firstError;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              file = event.target.files[0];
              if (file) {
                _context6.next = 3;
                break;
              }
              return _context6.abrupt("return");
            case 3:
              if (file.type.startsWith('image/')) {
                _context6.next = 6;
                break;
              }
              _this7.$toastr.error(_this7.$t('Please select a valid image file'));
              return _context6.abrupt("return");
            case 6:
              if (!(file.size > 2 * 1024 * 1024)) {
                _context6.next = 9;
                break;
              }
              _this7.$toastr.error(_this7.$t('File size must be less than 2MB'));
              return _context6.abrupt("return");
            case 9:
              _context6.prev = 9;
              _this7.saving = true;
              formData = new FormData();
              formData.append('custom_logo', file);
              formData.append('_method', 'PUT');
              _context6.next = 16;
              return axios_default().post("/api/print-templates/".concat(_this7.editingTemplate.id), formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 16:
              response = _context6.sent;
              if (response.data.status === 'success') {
                _this7.editingTemplate.custom_logo = response.data.data.custom_logo;
                _this7.editingTemplate.logo_url = response.data.data.logo_url;
                _this7.$toastr.success(_this7.$t('Logo uploaded successfully'));
                _this7.generateLivePreview();
              } else {
                _this7.$toastr.error(response.data.message || _this7.$t('Failed to upload logo'));
              }
              _context6.next = 24;
              break;
            case 20:
              _context6.prev = 20;
              _context6.t0 = _context6["catch"](9);
              console.error('Error uploading logo:', _context6.t0);
              if (((_error$response4 = _context6.t0.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.status) === 422) {
                errors = _context6.t0.response.data.errors;
                firstError = Object.values(errors)[0][0];
                _this7.$toastr.error(firstError);
              } else {
                _this7.$toastr.error(_this7.$t('Failed to upload logo'));
              }
            case 24:
              _context6.prev = 24;
              _this7.saving = false;
              // Reset file input
              event.target.value = '';
              return _context6.finish(24);
            case 28:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[9, 20, 24, 28]]);
      }))();
    },
    removeCustomLogo: function removeCustomLogo() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (_this8.editingTemplate.id) {
                _context7.next = 2;
                break;
              }
              return _context7.abrupt("return");
            case 2:
              _context7.prev = 2;
              _this8.saving = true;
              _context7.next = 6;
              return axios_default()["delete"]("/api/print-templates/".concat(_this8.editingTemplate.id, "/remove-logo"));
            case 6:
              response = _context7.sent;
              if (response.data.status === 'success') {
                _this8.editingTemplate.custom_logo = null;
                _this8.editingTemplate.logo_url = null;
                _this8.$toastr.success(_this8.$t('Custom logo removed successfully'));
                _this8.generateLivePreview();
              } else {
                _this8.$toastr.error(response.data.message || _this8.$t('Failed to remove logo'));
              }
              _context7.next = 14;
              break;
            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](2);
              console.error('Error removing logo:', _context7.t0);
              _this8.$toastr.error(_this8.$t('Failed to remove logo'));
            case 14:
              _context7.prev = 14;
              _this8.saving = false;
              return _context7.finish(14);
            case 17:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[2, 10, 14, 17]]);
      }))();
    },
    // Get logo URL for template
    getLogoUrl: function getLogoUrl() {
      if (this.editingTemplate.logo_url) {
        return this.editingTemplate.logo_url;
      }
      return '/images/white_logo.png'; // Default logo
    }
  }
});
;// ./resources/js/pages/settings/print-templates.vue?vue&type=script&lang=js
 /* harmony default export */ const settings_print_templatesvue_type_script_lang_js = (print_templatesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/print-templates.vue?vue&type=style&index=0&id=7aea7555&prod&scoped=true&lang=css
var print_templatesvue_type_style_index_0_id_7aea7555_prod_scoped_true_lang_css = __webpack_require__(78427);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/print-templates.vue?vue&type=style&index=0&id=7aea7555&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(print_templatesvue_type_style_index_0_id_7aea7555_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const settings_print_templatesvue_type_style_index_0_id_7aea7555_prod_scoped_true_lang_css = (print_templatesvue_type_style_index_0_id_7aea7555_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/settings/print-templates.vue?vue&type=style&index=0&id=7aea7555&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/settings/print-templates.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  settings_print_templatesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7aea7555",
  null
  
)

/* harmony default export */ const print_templates = (component.exports);

/***/ }),

/***/ 78427:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-7aea7555]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-7aea7555]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-7aea7555]{padding:1.25rem}.card-footer[data-v-7aea7555]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.refresh-btn[data-v-7aea7555]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-7aea7555],.export-pdf-btn[data-v-7aea7555]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-7aea7555],.export-pdf-btn[data-v-7aea7555],.print-btn[data-v-7aea7555]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-7aea7555]{background:#33a0d91a!important;color:#33a0d9!important}.btn-primary[data-v-7aea7555]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.page-title[data-v-7aea7555]{color:#1f2937;font-size:2rem;font-weight:700;margin:0}.page-subtitle[data-v-7aea7555]{color:#6b7280;font-size:1rem;margin:.5rem 0 0}.template-list-section[data-v-7aea7555]{padding:0 0 3rem}.module-filter[data-v-7aea7555]{margin-bottom:2rem}.module-filter .btn-group .btn[data-v-7aea7555]{border-radius:6px;margin-right:.5rem}.module-filter .btn-group .btn.active[data-v-7aea7555]{background-color:#3b82f6;border-color:#3b82f6;color:#fff}.templates-grid[data-v-7aea7555]{margin-top:1rem}.template-card[data-v-7aea7555]{background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);display:flex;flex-direction:column;height:100%;padding:1.5rem;transition:all .2s ease}.template-card[data-v-7aea7555]:hover{box-shadow:0 4px 8px rgba(0,0,0,.15);transform:translateY(-2px)}.template-card.is-default[data-v-7aea7555]{background:#f0fdf4;border-color:#10b981}.template-header[data-v-7aea7555]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:1rem}.template-title[data-v-7aea7555]{flex:1}.template-name[data-v-7aea7555]{color:#1f2937;font-size:1.25rem;font-weight:700;line-height:1.3;margin:0 0 .25rem}.template-module[data-v-7aea7555]{color:#6b7280;font-size:.875rem;letter-spacing:.5px;text-transform:uppercase}.template-status[data-v-7aea7555]{margin-left:1rem}.badge-default[data-v-7aea7555]{background:#10b981;border-radius:4px;color:#fff;font-size:.75rem;font-weight:600;padding:.25rem .5rem}.template-description[data-v-7aea7555]{color:#6b7280;flex:1;font-size:.875rem;line-height:1.5;margin:0 0 1.5rem}.template-actions[data-v-7aea7555]{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:auto}.template-actions .btn[data-v-7aea7555]{border-radius:6px;font-size:.875rem;font-weight:500;padding:.5rem 1rem;transition:all .2s ease}.template-actions .btn[data-v-7aea7555]:hover{box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-1px)}.empty-state[data-v-7aea7555]{padding:4rem 2rem;text-align:center}.empty-state-content[data-v-7aea7555]{margin:0 auto;max-width:400px}.empty-state-icon[data-v-7aea7555]{color:#d1d5db;font-size:4rem;margin-bottom:1.5rem}.empty-state-title[data-v-7aea7555]{color:#374151;font-size:1.5rem;font-weight:700;margin-bottom:1rem}.empty-state-description[data-v-7aea7555]{color:#6b7280;line-height:1.6;margin-bottom:2rem}.template-editor-section[data-v-7aea7555]{padding:0 0 3rem}.editor-header[data-v-7aea7555]{background:#fff;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:2rem;padding:1.5rem}.editor-title[data-v-7aea7555]{color:#1f2937;font-size:1.5rem;font-weight:700;margin:0}.badge-primary[data-v-7aea7555]{background:#3b82f6;border-radius:4px;color:#fff;font-size:.75rem;font-weight:600;padding:.25rem .5rem}.editor-content[data-v-7aea7555]{min-height:60vh}.settings-card[data-v-7aea7555]{border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.04);overflow:hidden;transition:all .2s ease}.settings-card[data-v-7aea7555]:hover{border-color:#d1d5db;box-shadow:0 4px 12px rgba(0,0,0,.08)}.settings-card .card-header[data-v-7aea7555]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border-bottom:1px solid #e5e7eb;padding:1rem 1.25rem}.settings-card .card-title[data-v-7aea7555]{align-items:center;color:#1f2937;display:flex;font-size:.95rem;font-weight:600}.settings-card .card-body[data-v-7aea7555]{padding:1.25rem}.form-group[data-v-7aea7555]{margin-bottom:1.25rem}.form-group[data-v-7aea7555]:last-child{margin-bottom:0}.form-group label[data-v-7aea7555],.form-label[data-v-7aea7555]{color:#374151;display:block;font-size:.875rem;font-weight:600;margin-bottom:.5rem}.form-control-lg[data-v-7aea7555]{border:1px solid #d1d5db;border-radius:8px;font-size:1rem;padding:.75rem 1rem;transition:all .2s ease}.form-control-lg[data-v-7aea7555]:focus{border-color:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.1)}.color-input-group[data-v-7aea7555]{align-items:center;display:flex;gap:.75rem}.color-picker[data-v-7aea7555]{border:1px solid #d1d5db!important;border-radius:8px!important;cursor:pointer;height:42px!important;padding:0!important;transition:all .2s ease;width:50px!important}.color-picker[data-v-7aea7555]:hover{border-color:#3b82f6!important;box-shadow:0 0 0 3px rgba(59,130,246,.1)}.color-text-input[data-v-7aea7555]{flex:1;font-family:Monaco,Menlo,Ubuntu Mono,monospace;font-size:.875rem}.elements-grid[data-v-7aea7555]{display:grid;gap:.75rem}.element-item[data-v-7aea7555]{border:1px solid #f3f4f6;border-radius:10px;overflow:hidden;transition:all .2s ease}.element-item[data-v-7aea7555]:hover{background:#f8fafc;border-color:#e5e7eb;box-shadow:0 2px 8px rgba(0,0,0,.06);transform:translateY(-1px)}.element-item .form-check[data-v-7aea7555]{align-items:flex-start;display:flex;gap:.75rem;margin:0;padding:1rem}.element-item .form-check-input[data-v-7aea7555]{border:2px solid #d1d5db;border-radius:4px;height:18px;margin-right:0;margin-top:.25rem;transition:all .2s ease;width:18px}.element-item .form-check-input[data-v-7aea7555]:checked{background-color:#3b82f6;border-color:#3b82f6}.element-item .form-check-input[data-v-7aea7555]:focus{box-shadow:0 0 0 3px rgba(59,130,246,.1)}.element-item .form-check-label[data-v-7aea7555]{align-items:flex-start;cursor:pointer;display:flex;flex:1;gap:.75rem;margin:0}.element-icon[data-v-7aea7555]{color:#6b7280;font-size:1.125rem;margin-top:.125rem;transition:color .2s ease}.element-item:hover .element-icon[data-v-7aea7555]{color:#3b82f6}.element-content[data-v-7aea7555]{flex:1}.element-title[data-v-7aea7555]{color:#1f2937;font-size:.875rem;font-weight:600;line-height:1.3;margin-bottom:.25rem}.element-description[data-v-7aea7555]{color:#6b7280;font-size:.75rem;line-height:1.4;margin:0}.element-item .form-check-input:checked+.form-check-label .element-title[data-v-7aea7555]{color:#1f2937}.element-item .form-check-input:checked+.form-check-label .element-icon[data-v-7aea7555]{color:#3b82f6}.invalid-feedback[data-v-7aea7555]{color:#dc2626;font-size:.75rem;font-weight:500;margin-top:.25rem}.logo-upload-container[data-v-7aea7555]{background:#f9fafb;border:2px dashed #d1d5db;border-radius:8px;padding:1.5rem;text-align:center;transition:all .2s ease}.logo-upload-container[data-v-7aea7555]:hover{background:#f8fafc;border-color:#3b82f6}.current-logo[data-v-7aea7555]{align-items:center;display:flex;flex-direction:column;gap:1rem}.logo-preview[data-v-7aea7555]{border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.1);max-height:100px;max-width:200px;-o-object-fit:contain;object-fit:contain}.logo-actions[data-v-7aea7555]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}.logo-upload-placeholder[data-v-7aea7555]{color:#6b7280;cursor:pointer;padding:2rem;transition:all .2s ease}.logo-upload-placeholder[data-v-7aea7555]:hover{color:#3b82f6}.logo-upload-placeholder i[data-v-7aea7555]{display:block;font-size:2.5rem;margin-bottom:1rem}.logo-upload-placeholder p[data-v-7aea7555]{font-size:1rem;font-weight:600;margin:.5rem 0}.logo-upload-placeholder small[data-v-7aea7555]{font-size:.875rem;opacity:.8}.form-text[data-v-7aea7555]{align-items:flex-start;color:#6b7280;display:flex;font-size:.875rem;gap:.5rem;margin-top:.75rem}.form-text i[data-v-7aea7555]{flex-shrink:0;margin-top:.125rem}.preview-card[data-v-7aea7555]{border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.04);overflow:hidden;transition:all .2s ease}.preview-card[data-v-7aea7555]:hover{border-color:#d1d5db;box-shadow:0 4px 12px rgba(0,0,0,.08)}.preview-card .card-header[data-v-7aea7555]{background:linear-gradient(135deg,#f8fafc,#f1f5f9);border-bottom:1px solid #e5e7eb;padding:1rem 1.25rem}.preview-card .card-title[data-v-7aea7555]{align-items:center;color:#1f2937;display:flex;font-size:.95rem;font-weight:600}.preview-actions[data-v-7aea7555]{display:flex;gap:.5rem}.preview-actions .btn[data-v-7aea7555]{border-radius:6px;font-size:.875rem;font-weight:500;padding:.5rem .75rem;transition:all .2s ease}.preview-actions .btn[data-v-7aea7555]:hover{box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-1px)}.preview-container[data-v-7aea7555]{align-items:flex-start;background:#f8fafc;display:flex;height:70vh;justify-content:center;overflow:auto;padding:1.5rem;position:relative}.preview-container[data-v-7aea7555]::-webkit-scrollbar{width:8px}.preview-container[data-v-7aea7555]::-webkit-scrollbar-track{background:#f1f5f9;border-radius:4px}.preview-container[data-v-7aea7555]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}.preview-container[data-v-7aea7555]::-webkit-scrollbar-thumb:hover{background:#94a3b8}.preview-placeholder[data-v-7aea7555]{align-items:center;background:#f9fafb;border:2px dashed #d1d5db;border-radius:12px;color:#9ca3af;display:flex;height:100%;justify-content:center;transition:all .2s ease;width:100%}.preview-placeholder[data-v-7aea7555]:hover{background:#f8fafc;border-color:#cbd5e1}.preview-placeholder-content[data-v-7aea7555]{max-width:300px;text-align:center}.preview-icon[data-v-7aea7555]{color:#cbd5e1;font-size:3.5rem;margin-bottom:1.5rem;transition:color .2s ease}.preview-placeholder:hover .preview-icon[data-v-7aea7555]{color:#94a3b8}.preview-title[data-v-7aea7555]{color:#6b7280;font-size:1.125rem;font-weight:600;margin-bottom:.5rem}.preview-description[data-v-7aea7555]{color:#9ca3af;font-size:.875rem;line-height:1.5;margin:0}.preview-frame-container[data-v-7aea7555]{align-items:flex-start;display:flex;justify-content:center;padding:1rem 0;width:100%}.preview-frame[data-v-7aea7555]{background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.12);margin:0;max-width:800px;min-height:600px;overflow:hidden;transform:scale(.9);transform-origin:top center;transition:transform .2s ease;width:100%}.preview-frame[data-v-7aea7555]:hover{box-shadow:0 12px 32px rgba(0,0,0,.15);transform:scale(.92)}.preview-frame *[data-v-7aea7555]{margin:0!important;padding:0!important}.preview-frame body[data-v-7aea7555]{background:#fff!important;color:#374151!important;font-family:Inter,sans-serif!important;font-size:14px!important;line-height:1.6!important;margin:0!important;padding:20mm!important}.preview-frame .document-container[data-v-7aea7555]{margin:0 auto!important;max-width:100%!important;padding:0!important}.preview-frame h1[data-v-7aea7555],.preview-frame h2[data-v-7aea7555],.preview-frame h3[data-v-7aea7555]{margin:0 0 1rem!important;padding:0!important}.preview-frame p[data-v-7aea7555]{margin:0 0 .5rem!important;padding:0!important}.preview-frame table[data-v-7aea7555]{border-collapse:collapse!important;margin:1rem 0!important;width:100%!important}.preview-frame td[data-v-7aea7555],.preview-frame th[data-v-7aea7555]{border-bottom:1px solid #e5e7eb!important;padding:.75rem!important;text-align:left!important}.preview-frame th[data-v-7aea7555]{background:#f8fafc!important;font-weight:600!important}@media (max-width:768px){.page-title[data-v-7aea7555]{font-size:1.5rem}.template-actions[data-v-7aea7555]{flex-direction:column}.template-actions .btn[data-v-7aea7555]{width:100%}.editor-header .row[data-v-7aea7555]{flex-direction:column;gap:1rem}.editor-header .col-md-4[data-v-7aea7555]{text-align:left!important}.preview-container[data-v-7aea7555]{height:40vh;padding:1rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);