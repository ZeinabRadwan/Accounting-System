"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[718],{

/***/ 20718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ account_routing)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=template&id=400d5f06&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12 col-xl-3"
  }, [_c('SettingsSidebar')], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-xl-9"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_c('i', {
    staticClass: "fas fa-route mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t('Account Routing Settings')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "card-description"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Configure parent accounts for different accounting modules to ensure proper journal entry routing')) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm.isLoading ? _c('div', {
    staticClass: "loading-container"
  }, [_c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v(_vm._s(_vm.$t('Loading...')))])]), _vm._v(" "), _c('p', {
    staticClass: "loading-text"
  }, [_vm._v(_vm._s(_vm.$t('Loading Chart of Accounts...')))])]) : _c('div', {
    staticClass: "settings-container"
  }, [_c('div', {
    staticClass: "tab-navigation"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c('button', {
      key: tab.id,
      "class": ['tab-button', {
        'active': _vm.activeTab === tab.id
      }],
      on: {
        "click": function click($event) {
          _vm.activeTab = tab.id;
        }
      }
    }, [_c('i', {
      "class": tab.icon
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(tab.label))]), _vm._v(" "), tab.count > 0 ? _c('span', {
      staticClass: "tab-count"
    }, [_vm._v(_vm._s(tab.count))]) : _vm._e()]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_vm.activeTab === 'sales' ? _c('div', {
    staticClass: "tab-panel"
  }, [_c('div', {
    staticClass: "module-header"
  }, [_c('h3', {
    staticClass: "module-title"
  }, [_c('i', {
    staticClass: "fas fa-shopping-cart text-primary"
  }), _vm._v("\n            " + _vm._s(_vm.$t('Sales Module')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "module-description"
  }, [_vm._v(_vm._s(_vm.$t('Configure accounts for sales-related transactions')))])]), _vm._v(" "), _c('div', {
    staticClass: "settings-grid"
  }, _vm._l(_vm.salesSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-card"
    }, [_c('div', {
      staticClass: "setting-header"
    }, [_c('h4', {
      staticClass: "setting-name"
    }, [_vm._v("\n                " + _vm._s(_vm.$t(setting.setting_name)) + "\n                "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "setting-status"
    }, [_vm.isSettingConfigured(setting) ? _c('span', {
      staticClass: "status-badge status-success"
    }, [_c('i', {
      staticClass: "fas fa-check-circle"
    }), _vm._v(" " + _vm._s(_vm.$t('Configured')) + "\n                ")]) : _c('span', {
      staticClass: "status-badge status-warning"
    }, [_c('i', {
      staticClass: "fas fa-exclamation-triangle"
    }), _vm._v(" " + _vm._s(_vm.$t('Not Configured')) + "\n                ")])])]), _vm._v(" "), _c('p', {
      staticClass: "setting-description"
    }, [_vm._v(_vm._s(_vm.$t(setting.description)))]), _vm._v(" "), _c('div', {
      staticClass: "setting-controls"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Routing Type')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getRoutingTypeOptions(setting),
        "reduce": function reduce(option) {
          return option.value;
        },
        "placeholder": _vm.$t('Select routing type'),
        "searchable": false,
        "clearable": false
      },
      on: {
        "input": function input($event) {
          return _vm.onRoutingTypeChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref) {
          var label = _ref.label,
            description = _ref.description;
          return [_c('div', {
            staticClass: "routing-option"
          }, [_c('span', {
            staticClass: "routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))]), _vm._v(" "), _c('span', {
            staticClass: "routing-description"
          }, [_vm._v(_vm._s(_vm.$t(description)))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref2) {
          var label = _ref2.label;
          return [_c('span', {
            staticClass: "selected-routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))])];
        }
      }], null, true),
      model: {
        value: setting.routing_type,
        callback: function callback($$v) {
          _vm.$set(setting, "routing_type", $$v);
        },
        expression: "setting.routing_type"
      }
    })], 1), _vm._v(" "), _vm.shouldShowMainAccount(setting) ? _c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Main Account')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true
      },
      on: {
        "input": function input($event) {
          return _vm.onMainAccountChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "no-options",
        fn: function fn() {
          return [_c('div', {
            staticClass: "vselect-status"
          }, [_vm.chartAccountsLoading ? _c('i', {
            staticClass: "fas fa-spinner fa-spin mr-2"
          }) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.chartAccountsLoading ? _vm.$t('Loading accounts...') : _vm.$t('No accounts found')))])])];
        },
        proxy: true
      }, {
        key: "list-header",
        fn: function fn() {
          return [_vm.chartAccountsLoading ? _c('div', {
            staticClass: "vselect-loading"
          }, [_c('i', {
            staticClass: "fas fa-spinner fa-spin mr-2"
          }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t('Loading accounts...')))])]) : _vm._e()];
        },
        proxy: true
      }, {
        key: "option",
        fn: function fn(_ref3) {
          var name = _ref3.name,
            code = _ref3.code,
            type = _ref3.type;
          return [_c('div', {
            staticClass: "account-option"
          }, [_c('span', {
            staticClass: "account-name"
          }, [_vm._v(_vm._s(name))]), _vm._v(" "), _c('span', {
            staticClass: "account-code"
          }, [_vm._v(_vm._s(code))]), _vm._v(" "), _c('span', {
            staticClass: "account-type"
          }, [_vm._v(_vm._s(type))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref4) {
          var name = _ref4.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1) : _vm._e(), _vm._v(" "), setting.setting_key === 'discount_allowed_account' && setting.routing_type === 'automatic' ? _c('div', {
      staticClass: "form-group"
    }, [_c('div', {
      staticClass: "alert alert-info"
    }, [_c('i', {
      staticClass: "fas fa-info-circle mr-2"
    }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t('Note')) + ":")]), _vm._v(" " + _vm._s(_vm.$t('When discounts are applied to sales, they will be automatically posted to the selected account above.')) + "\n                ")])]) : _vm._e()])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'purchase' ? _c('div', {
    staticClass: "tab-panel"
  }, [_c('div', {
    staticClass: "module-header"
  }, [_c('h3', {
    staticClass: "module-title"
  }, [_c('i', {
    staticClass: "fas fa-truck text-success"
  }), _vm._v("\n            " + _vm._s(_vm.$t('Purchase Module')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "module-description"
  }, [_vm._v(_vm._s(_vm.$t('Configure accounts for purchase-related transactions')))])]), _vm._v(" "), _c('div', {
    staticClass: "settings-grid"
  }, _vm._l(_vm.purchaseSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-card"
    }, [_c('div', {
      staticClass: "setting-header"
    }, [_c('h4', {
      staticClass: "setting-name"
    }, [_vm._v("\n                " + _vm._s(_vm.$t(setting.setting_name)) + "\n                "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "setting-status"
    }, [_vm.isSettingConfigured(setting) ? _c('span', {
      staticClass: "status-badge status-success"
    }, [_c('i', {
      staticClass: "fas fa-check-circle"
    }), _vm._v(" " + _vm._s(_vm.$t('Configured')) + "\n                ")]) : _c('span', {
      staticClass: "status-badge status-warning"
    }, [_c('i', {
      staticClass: "fas fa-exclamation-triangle"
    }), _vm._v(" " + _vm._s(_vm.$t('Not Configured')) + "\n                ")])])]), _vm._v(" "), _c('p', {
      staticClass: "setting-description"
    }, [_vm._v(_vm._s(_vm.$t(setting.description)))]), _vm._v(" "), _c('div', {
      staticClass: "setting-controls"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Routing Type')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getRoutingTypeOptions(setting),
        "reduce": function reduce(option) {
          return option.value;
        },
        "placeholder": _vm.$t('Select routing type'),
        "searchable": false,
        "clearable": false
      },
      on: {
        "input": function input($event) {
          return _vm.onRoutingTypeChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref5) {
          var label = _ref5.label,
            description = _ref5.description;
          return [_c('div', {
            staticClass: "routing-option"
          }, [_c('span', {
            staticClass: "routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))]), _vm._v(" "), _c('span', {
            staticClass: "routing-description"
          }, [_vm._v(_vm._s(_vm.$t(description)))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref6) {
          var label = _ref6.label;
          return [_c('span', {
            staticClass: "selected-routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))])];
        }
      }], null, true),
      model: {
        value: setting.routing_type,
        callback: function callback($$v) {
          _vm.$set(setting, "routing_type", $$v);
        },
        expression: "setting.routing_type"
      }
    })], 1), _vm._v(" "), _vm.shouldShowMainAccount(setting) ? _c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Main Account')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true
      },
      on: {
        "input": function input($event) {
          return _vm.onMainAccountChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref7) {
          var name = _ref7.name,
            code = _ref7.code,
            type = _ref7.type;
          return [_c('div', {
            staticClass: "account-option"
          }, [_c('span', {
            staticClass: "account-name"
          }, [_vm._v(_vm._s(name))]), _vm._v(" "), _c('span', {
            staticClass: "account-code"
          }, [_vm._v(_vm._s(code))]), _vm._v(" "), _c('span', {
            staticClass: "account-type"
          }, [_vm._v(_vm._s(type))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref8) {
          var name = _ref8.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1) : _vm._e()])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'vat' ? _c('div', {
    staticClass: "tab-panel"
  }, [_c('div', {
    staticClass: "module-header"
  }, [_c('h3', {
    staticClass: "module-title"
  }, [_c('i', {
    staticClass: "fas fa-percentage text-warning"
  }), _vm._v("\n            " + _vm._s(_vm.$t('VAT/Tax Module')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "module-description"
  }, [_vm._v(_vm._s(_vm.$t('Configure accounts for VAT and tax transactions')))])]), _vm._v(" "), _c('div', {
    staticClass: "settings-grid"
  }, _vm._l(_vm.vatSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-card"
    }, [_c('div', {
      staticClass: "setting-header"
    }, [_c('h4', {
      staticClass: "setting-name"
    }, [_vm._v("\n                " + _vm._s(_vm.$t(setting.setting_name)) + "\n                "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "setting-status"
    }, [_vm.isSettingConfigured(setting) ? _c('span', {
      staticClass: "status-badge status-success"
    }, [_c('i', {
      staticClass: "fas fa-check-circle"
    }), _vm._v(" " + _vm._s(_vm.$t('Configured')) + "\n                ")]) : _c('span', {
      staticClass: "status-badge status-warning"
    }, [_c('i', {
      staticClass: "fas fa-exclamation-triangle"
    }), _vm._v(" " + _vm._s(_vm.$t('Not Configured')) + "\n                ")])])]), _vm._v(" "), _c('p', {
      staticClass: "setting-description"
    }, [_vm._v(_vm._s(_vm.$t(setting.description)))]), _vm._v(" "), _c('div', {
      staticClass: "setting-controls"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Routing Type')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getRoutingTypeOptions(setting),
        "reduce": function reduce(option) {
          return option.value;
        },
        "placeholder": _vm.$t('Select routing type'),
        "searchable": false,
        "clearable": false
      },
      on: {
        "input": function input($event) {
          return _vm.onRoutingTypeChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref9) {
          var label = _ref9.label,
            description = _ref9.description;
          return [_c('div', {
            staticClass: "routing-option"
          }, [_c('span', {
            staticClass: "routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))]), _vm._v(" "), _c('span', {
            staticClass: "routing-description"
          }, [_vm._v(_vm._s(_vm.$t(description)))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref0) {
          var label = _ref0.label;
          return [_c('span', {
            staticClass: "selected-routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))])];
        }
      }], null, true),
      model: {
        value: setting.routing_type,
        callback: function callback($$v) {
          _vm.$set(setting, "routing_type", $$v);
        },
        expression: "setting.routing_type"
      }
    })], 1), _vm._v(" "), _vm.shouldShowMainAccount(setting) ? _c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Main Account')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true
      },
      on: {
        "input": function input($event) {
          return _vm.onMainAccountChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref1) {
          var name = _ref1.name,
            code = _ref1.code,
            type = _ref1.type;
          return [_c('div', {
            staticClass: "account-option"
          }, [_c('span', {
            staticClass: "account-name"
          }, [_vm._v(_vm._s(name))]), _vm._v(" "), _c('span', {
            staticClass: "account-code"
          }, [_vm._v(_vm._s(code))]), _vm._v(" "), _c('span', {
            staticClass: "account-type"
          }, [_vm._v(_vm._s(type))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref10) {
          var name = _ref10.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1) : _vm._e()])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'expenses' ? _c('div', {
    staticClass: "tab-panel"
  }, [_c('div', {
    staticClass: "module-header"
  }, [_c('h3', {
    staticClass: "module-title"
  }, [_c('i', {
    staticClass: "fas fa-receipt text-danger"
  }), _vm._v("\n            " + _vm._s(_vm.$t('Expenses Module')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "module-description"
  }, [_vm._v(_vm._s(_vm.$t('Configure accounts for expense transactions')))])]), _vm._v(" "), _c('div', {
    staticClass: "settings-grid"
  }, _vm._l(_vm.expenseSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-card"
    }, [_c('div', {
      staticClass: "setting-header"
    }, [_c('h4', {
      staticClass: "setting-name"
    }, [_vm._v("\n                " + _vm._s(_vm.$t(setting.setting_name)) + "\n                "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "setting-status"
    }, [_vm.isSettingConfigured(setting) ? _c('span', {
      staticClass: "status-badge status-success"
    }, [_c('i', {
      staticClass: "fas fa-check-circle"
    }), _vm._v(" " + _vm._s(_vm.$t('Configured')) + "\n                ")]) : _c('span', {
      staticClass: "status-badge status-warning"
    }, [_c('i', {
      staticClass: "fas fa-exclamation-triangle"
    }), _vm._v(" " + _vm._s(_vm.$t('Not Configured')) + "\n                ")])])]), _vm._v(" "), _c('p', {
      staticClass: "setting-description"
    }, [_vm._v(_vm._s(_vm.$t(setting.description)))]), _vm._v(" "), _c('div', {
      staticClass: "setting-controls"
    }, [_c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Routing Type')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getRoutingTypeOptions(setting),
        "reduce": function reduce(option) {
          return option.value;
        },
        "placeholder": _vm.$t('Select routing type'),
        "searchable": false,
        "clearable": false
      },
      on: {
        "input": function input($event) {
          return _vm.onRoutingTypeChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref11) {
          var label = _ref11.label,
            description = _ref11.description;
          return [_c('div', {
            staticClass: "routing-option"
          }, [_c('span', {
            staticClass: "routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))]), _vm._v(" "), _c('span', {
            staticClass: "routing-description"
          }, [_vm._v(_vm._s(_vm.$t(description)))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref12) {
          var label = _ref12.label;
          return [_c('span', {
            staticClass: "selected-routing-label"
          }, [_vm._v(_vm._s(_vm.$t(label)))])];
        }
      }], null, true),
      model: {
        value: setting.routing_type,
        callback: function callback($$v) {
          _vm.$set(setting, "routing_type", $$v);
        },
        expression: "setting.routing_type"
      }
    })], 1), _vm._v(" "), _vm.shouldShowMainAccount(setting) ? _c('div', {
      staticClass: "form-group"
    }, [_c('label', {
      staticClass: "form-label"
    }, [_vm._v(_vm._s(_vm.$t('Main Account')))]), _vm._v(" "), _c('VSelect', {
      staticClass: "form-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true
      },
      on: {
        "input": function input($event) {
          return _vm.onMainAccountChange(setting);
        }
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(_ref13) {
          var name = _ref13.name,
            code = _ref13.code,
            type = _ref13.type;
          return [_c('div', {
            staticClass: "account-option"
          }, [_c('span', {
            staticClass: "account-name"
          }, [_vm._v(_vm._s(name))]), _vm._v(" "), _c('span', {
            staticClass: "account-code"
          }, [_vm._v(_vm._s(code))]), _vm._v(" "), _c('span', {
            staticClass: "account-type"
          }, [_vm._v(_vm._s(type))])])];
        }
      }, {
        key: "selected-option",
        fn: function fn(_ref14) {
          var name = _ref14.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1) : _vm._e()])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.settings.length === 0 ? _c('div', {
    staticClass: "no-settings-message"
  }, [_c('div', {
    staticClass: "text-center py-5"
  }, [_c('i', {
    staticClass: "fas fa-cog text-muted",
    staticStyle: {
      "font-size": "48px",
      "margin-bottom": "16px"
    }
  }), _vm._v(" "), _c('h4', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('No Account Routing Settings Found')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('The account routing settings have not been initialized yet.')))]), _vm._v(" "), _c('div', {
    staticClass: "mt-3"
  }, [_c('button', {
    staticClass: "btn btn-primary mr-2",
    on: {
      "click": _vm.loadSettings
    }
  }, [_c('i', {
    staticClass: "fas fa-refresh mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t('Refresh Settings')) + "\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    on: {
      "click": _vm.showSeederInstructions
    }
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t('How to Fix')) + "\n            ")])])])]) : _vm._e()])]), _vm._v(" "), _vm.settings.length > 0 ? _c('div', {
    staticClass: "actions-container"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "disabled": _vm.saving
    },
    on: {
      "click": _vm.saveAllSettings
    }
  }, [_c('i', {
    staticClass: "fas fa-save mr-2"
  }), _vm._v("\n      " + _vm._s(_vm.saving ? _vm.$t('Saving...') : _vm.$t('Save All Settings')) + "\n    ")])]) : _vm._e(), _vm._v(" "), _vm.message ? _c('div', {
    staticClass: "alert",
    "class": _vm.messageType
  }, [_vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]) : _vm._e()])])])])], 1);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const account_routingvue_type_script_lang_js = ({
  name: 'AccountRoutingSettings',
  components: {
    SettingsSidebar: function SettingsSidebar() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 21524));
    }
  },
  data: function data() {
    return {
      breadcrumbsCurrent: this.$t('Account Routing Settings'),
      breadcrumbs: [{
        name: this.$t('Dashboard'),
        url: 'home'
      }, {
        name: this.$t('Setup'),
        url: 'setup.index'
      }, {
        name: this.$t('Account Routing Settings'),
        url: ''
      }],
      settings: [],
      saving: false,
      message: '',
      messageType: 'alert-info',
      chartOfAccounts: [],
      chartAccountsLoading: false,
      isLoading: false,
      activeTab: 'sales',
      // Default routing type options for most settings
      defaultRoutingTypeOptions: [{
        label: this.$t('Automatic Account Routing'),
        description: this.$t('System automatically routes to the selected parent account'),
        value: 'automatic'
      }, {
        label: this.$t('Specify Per Each'),
        description: this.$t('You will specify accounts individually for each item'),
        value: 'per_each'
      }, {
        label: this.$t('Specify Main Account Per Each'),
        description: this.$t('You will specify a main account and then individual accounts'),
        value: 'main_account_per_each'
      }]
    };
  },
  computed: {
    tabs: function tabs() {
      return [{
        id: 'sales',
        label: this.$t('Sales'),
        icon: 'fas fa-shopping-cart',
        count: this.salesSettings.length
      }, {
        id: 'purchase',
        label: this.$t('Purchase'),
        icon: 'fas fa-truck',
        count: this.purchaseSettings.length
      }, {
        id: 'vat',
        label: this.$t('VAT/Tax'),
        icon: 'fas fa-percentage',
        count: this.vatSettings.length
      }, {
        id: 'expenses',
        label: this.$t('Expenses'),
        icon: 'fas fa-receipt',
        count: this.expenseSettings.length
      }];
    },
    salesSettings: function salesSettings() {
      var _this = this;
      var sales = this.settings.filter(function (s) {
        return _this.isSalesSetting(s);
      });
      console.log('Sales settings found:', sales.map(function (s) {
        return {
          key: s.setting_key,
          name: s.setting_name,
          routing_type: s.routing_type
        };
      }));
      return sales;
    },
    purchaseSettings: function purchaseSettings() {
      var _this2 = this;
      var purchase = this.settings.filter(function (s) {
        return _this2.isPurchaseSetting(s);
      });
      console.log('Purchase settings found:', purchase.map(function (s) {
        return {
          key: s.setting_key,
          name: s.setting_name,
          routing_type: s.routing_type
        };
      }));
      return purchase;
    },
    vatSettings: function vatSettings() {
      var _this3 = this;
      var vat = this.settings.filter(function (s) {
        return _this3.isVatSetting(s);
      });
      console.log('VAT settings found:', vat.map(function (s) {
        return {
          key: s.setting_key,
          name: s.setting_name,
          routing_type: s.routing_type
        };
      }));
      return vat;
    },
    expenseSettings: function expenseSettings() {
      var _this4 = this;
      var expenses = this.settings.filter(function (s) {
        return _this4.isExpenseSetting(s);
      });
      console.log('Expense settings found:', expenses.map(function (s) {
        return {
          key: s.setting_key,
          name: s.setting_name,
          routing_type: s.routing_type
        };
      }));
      return expenses;
    },
    // Get routing type options for a specific setting
    getRoutingTypeOptions: function getRoutingTypeOptions() {
      var _this5 = this;
      return function (setting) {
        console.log('getRoutingTypeOptions called for setting:', setting.setting_key);

        // If a custom routing_type_options array is provided, use it.
        if (setting.routing_type_options && Array.isArray(setting.routing_type_options)) {
          // Debug for discount setting
          if (setting.setting_key === 'discount_allowed_account') {
            console.log('Discount setting using custom routing options:', setting.routing_type_options);
          }
          // Apply translations to database-loaded options
          return setting.routing_type_options.map(function (option) {
            return _objectSpread(_objectSpread({}, option), {}, {
              label: _this5.$t(option.label),
              description: _this5.$t(option.description)
            });
          });
        }
        // Otherwise, use the default options.
        if (setting.setting_key === 'discount_allowed_account') {
          console.log('Discount setting using default routing options:', _this5.defaultRoutingTypeOptions);
        }
        return _this5.defaultRoutingTypeOptions;
      };
    }
  },
  mounted: function mounted() {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this6.loadSettings();
          case 1:
            _context.n = 2;
            return _this6.loadChartOfAccounts();
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  methods: {
    // Resolve module robustly in case backend sends inconsistent module values
    getResolvedModule: function getResolvedModule(setting) {
      if (!setting) return '';
      var module = (setting.module || '').toString().toLowerCase();
      var key = (setting.setting_key || '').toString().toLowerCase();
      if (module === 'sales' || ['clients_account', 'sales_account', 'product_sales_account', 'discount_allowed_account'].includes(key)) return 'sales';
      if (module === 'purchase' || ['suppliers_account', 'purchase_account', 'product_purchase_account', 'discount_received_account', 'transport_expense_account', 'purchase_returns_account'].includes(key)) return 'purchase';
      if (module === 'vat' || ['sales_vat_account', 'purchase_vat_account'].includes(key)) return 'vat';
      if (module === 'expenses' || ['expenses_account'].includes(key)) return 'expenses';
      return module;
    },
    // Helper: match base keys with optional suffixes like _automatic, _cancel
    keyMatchesAny: function keyMatchesAny(keyRaw, baseList) {
      var key = (keyRaw || '').toString().toLowerCase();
      return baseList.some(function (base) {
        return key === base || key.startsWith(base + '_');
      });
    },
    // Strong, reusable predicates per module to avoid cross-tab leakage
    isSalesSetting: function isSalesSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      return this.keyMatchesAny(key, ['clients_account', 'sales_account', 'product_sales_account', 'discount_allowed_account']);
    },
    isPurchaseSetting: function isPurchaseSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      return this.keyMatchesAny(key, ['suppliers_account', 'purchase_account', 'product_purchase_account', 'discount_received_account', 'transport_expense_account', 'purchase_returns_account']);
    },
    isVatSetting: function isVatSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      return this.keyMatchesAny(key, ['sales_vat_account', 'purchase_vat_account']);
    },
    isExpenseSetting: function isExpenseSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      return this.keyMatchesAny(key, ['expenses_account']);
    },
    loadSettings: function loadSettings() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, discountSetting, _error$response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _this7.isLoading = true;
              _context2.p = 1;
              _context2.n = 2;
              return _this7.$http.get('/api/account-routing-settings');
            case 2:
              response = _context2.v;
              console.log('Settings response:', response.data);

              // Handle both grouped and flat data structures
              if (response.data.data) {
                if (Array.isArray(response.data.data)) {
                  // Flat array structure
                  _this7.settings = response.data.data;
                } else {
                  // Grouped structure - flatten it
                  _this7.settings = [];
                  Object.keys(response.data.data).forEach(function (module) {
                    if (Array.isArray(response.data.data[module])) {
                      _this7.settings = _this7.settings.concat(response.data.data[module]);
                    }
                  });
                }
              } else {
                _this7.settings = [];
              }
              console.log('Processed settings:', _this7.settings);

              // Check for discount setting specifically
              discountSetting = _this7.settings.find(function (s) {
                return s.setting_key === 'discount_allowed_account';
              });
              if (discountSetting) {
                console.log('Discount Allowed Setting found:', discountSetting);
              } else {
                console.log('Discount Allowed Setting NOT found in processed settings');
                console.log('Available setting keys:', _this7.settings.map(function (s) {
                  return s.setting_key;
                }));
              }
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t = _context2.v;
              console.error('Error loading settings:', _t);
              _this7.showMessage(_this7.$t('Error loading settings') + ': ' + (((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _t.message), 'alert-danger');
            case 4:
              _context2.p = 4;
              _this7.isLoading = false;
              return _context2.f(4);
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _error$response2, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this8.chartAccountsLoading = true;
              _context3.p = 1;
              _context3.n = 2;
              return _this8.$http.get('/api/chart-of-accounts/dropdown');
            case 2:
              response = _context3.v;
              _this8.chartOfAccounts = response.data.data || [];
              if (_this8.chartOfAccounts.length === 0) {
                _this8.showMessage(_this8.$t('Warning: No chart of accounts found. Please create some accounts first.'), 'alert-warning');
              }
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error('Error loading chart of accounts:', _t2);
              _this8.showMessage(_this8.$t('Error loading chart of accounts') + ': ' + (((_error$response2 = _t2.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _t2.message), 'alert-danger');
            case 4:
              _context3.p = 4;
              _this8.chartAccountsLoading = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    getAccountsForType: function getAccountsForType(accountType) {
      if (!this.chartOfAccounts || this.chartOfAccounts.length === 0) {
        return [];
      }

      // Filter by account type name
      var accounts = this.chartOfAccounts.filter(function (account) {
        return account.type === accountType;
      }).map(function (account) {
        return {
          id: account.id,
          name: account.name,
          code: account.code,
          type: account.type
        };
      });
      return accounts;
    },
    updateSetting: function updateSetting(setting) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var updateData, response, _error$response3, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              updateData = {
                routing_type: setting.routing_type,
                main_account_id: setting.main_account_id
              };
              _context4.n = 1;
              return _this9.$http.put("/api/account-routing-settings/".concat(setting.id), updateData);
            case 1:
              response = _context4.v;
              if (response.data.success) {
                _this9.showMessage(_this9.$t('Setting updated successfully'), 'alert-success');
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              console.error('Error updating setting:', _t3);
              _this9.showMessage(_this9.$t('Error updating setting') + ': ' + (((_error$response3 = _t3.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _t3.message), 'alert-danger');
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    saveAllSettings: function saveAllSettings() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var updates, response, _error$response4, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _this0.saving = true;
              _context5.p = 1;
              updates = _this0.settings.map(function (setting) {
                return {
                  id: setting.id,
                  routing_type: setting.routing_type,
                  main_account_id: setting.main_account_id
                };
              });
              _context5.n = 2;
              return _this0.$http.put('/api/account-routing-settings/bulk', {
                updates: updates
              });
            case 2:
              response = _context5.v;
              if (response.data.success) {
                _this0.showMessage(_this0.$t('All settings saved successfully'), 'alert-success');
              }
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t4 = _context5.v;
              console.error('Error saving settings:', _t4);
              _this0.showMessage(_this0.$t('Error saving settings') + ': ' + (((_error$response4 = _t4.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _t4.message), 'alert-danger');
            case 4:
              _context5.p = 4;
              _this0.saving = false;
              return _context5.f(4);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, null, [[1, 3, 4, 5]]);
      }))();
    },
    showMessage: function showMessage(message) {
      var _this1 = this;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'alert-info';
      this.message = message;
      this.messageType = type;
      setTimeout(function () {
        _this1.message = '';
      }, 5000);
    },
    showSeederInstructions: function showSeederInstructions() {
      this.showMessage(this.$t('To initialize the account routing settings, you need to run the database seeder. Open your terminal and run: php artisan db:seed --class=AccountRoutingSettingsSeeder. This will create the default settings for all modules. After running the seeder, refresh this page to see the settings.'), 'alert-info');

      // Debug current state
      console.log('Seeder instructions shown - current settings state:', {
        settingsCount: this.settings.length,
        hasDiscountSetting: this.settings.some(function (s) {
          return s.setting_key === 'discount_allowed_account';
        }),
        discountSetting: this.settings.find(function (s) {
          return s.setting_key === 'discount_allowed_account';
        })
      });
    },
    checkSettingsExist: function checkSettingsExist() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var response, hasDiscountSetting, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return _this10.$http.get('/api/account-routing-settings');
            case 1:
              response = _context6.v;
              if (!(response.data.data && Array.isArray(response.data.data) && response.data.data.length > 0)) {
                _context6.n = 2;
                break;
              }
              // Check for discount setting specifically
              hasDiscountSetting = response.data.data.some(function (s) {
                return s.setting_key === 'discount_allowed_account';
              });
              console.log('Settings exist check - has discount setting:', hasDiscountSetting);
              return _context6.a(2, true);
            case 2:
              return _context6.a(2, false);
            case 3:
              _context6.p = 3;
              _t5 = _context6.v;
              console.error('Error checking settings:', _t5);
              return _context6.a(2, false);
          }
        }, _callee6, null, [[0, 3]]);
      }))();
    },
    onRoutingTypeChange: function onRoutingTypeChange(setting) {
      // Clear main account when switching to per_each or cancel routing
      if (setting.routing_type === 'per_each' || setting.routing_type === 'cancel') {
        setting.main_account_id = null;
      }
      // Update the setting
      this.updateSetting(setting);
    },
    onMainAccountChange: function onMainAccountChange(setting) {
      // Update the setting
      this.updateSetting(setting);
    },
    shouldShowMainAccount: function shouldShowMainAccount(setting) {
      var shouldShow = ['automatic', 'main_account_per_each'].includes(setting.routing_type);
      return shouldShow;
    },
    isSettingConfigured: function isSettingConfigured(setting) {
      var isConfigured = function () {
        switch (setting.routing_type) {
          case 'automatic':
            return setting.main_account_id !== null;
          case 'per_each':
            return true;
          // No account needed for per each routing
          case 'main_account_per_each':
            return setting.main_account_id !== null;
          case 'cancel':
            return true;
          // No account needed for cancel routing
          default:
            return false;
        }
      }();
      return isConfigured;
    }
  }
});
;// ./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=script&lang=js
 /* harmony default export */ const accounting_settings_account_routingvue_type_script_lang_js = (account_routingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=style&index=0&id=400d5f06&prod&scoped=true&lang=css
var account_routingvue_type_style_index_0_id_400d5f06_prod_scoped_true_lang_css = __webpack_require__(87083);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=style&index=0&id=400d5f06&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(account_routingvue_type_style_index_0_id_400d5f06_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const accounting_settings_account_routingvue_type_style_index_0_id_400d5f06_prod_scoped_true_lang_css = (account_routingvue_type_style_index_0_id_400d5f06_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=style&index=0&id=400d5f06&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/accounting-settings/account-routing.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  accounting_settings_account_routingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "400d5f06",
  null
  
)

/* harmony default export */ const account_routing = (component.exports);

/***/ }),

/***/ 87083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-description[data-v-400d5f06]{color:#6c757d;font-size:.9rem;margin:.5rem 0 0}.tab-navigation[data-v-400d5f06]{background:#f8f9fa;border-bottom:1px solid #dee2e6;display:flex;gap:.75rem;overflow-x:auto;padding:.5rem .75rem}.tab-button[data-v-400d5f06]{align-items:center;background:transparent;border:none;border-bottom:3px solid transparent;color:#6c757d;cursor:pointer;display:flex;font-weight:500;gap:.75rem;justify-content:center;min-width:120px;padding:1rem 1.5rem;transition:all .2s ease;white-space:nowrap}.tab-button[data-v-400d5f06]:hover{background:#e9ecef;color:#495057}.tab-button.active[data-v-400d5f06]{background:#fff;border-bottom-color:#007bff;color:#007bff}.tab-button i[data-v-400d5f06]{font-size:1.1rem}.tab-count[data-v-400d5f06]{background:#6c757d;border-radius:12px;color:#fff;font-size:.75rem;font-weight:600;min-width:20px;padding:.2rem .5rem;text-align:center}.tab-button.active .tab-count[data-v-400d5f06]{background:#007bff}.tab-content[data-v-400d5f06]{padding:1rem}.tab-panel[data-v-400d5f06]{animation:fadeIn-400d5f06 .3s ease}@keyframes fadeIn-400d5f06{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.module-header[data-v-400d5f06]{border-bottom:1px solid #e9ecef;margin-bottom:2rem;margin-top:.5rem;padding-bottom:1rem;text-align:left}.module-title[data-v-400d5f06]{align-items:center;color:#2c3e50;display:flex;font-size:1.4rem;font-weight:600;gap:1rem;justify-content:flex-start;line-height:1.3;margin-bottom:1rem}.module-description[data-v-400d5f06]{color:#6c757d;font-size:.9rem;margin:0}.settings-grid[data-v-400d5f06]{display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(500px,1fr))}.setting-card[data-v-400d5f06]{background:#fff;border:1px solid #e9ecef;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);padding:1.5rem;transition:all .2s ease}.setting-card[data-v-400d5f06]:hover{box-shadow:0 4px 12px rgba(0,0,0,.1);transform:translateY(-2px)}.setting-header[data-v-400d5f06]{align-items:flex-start;display:flex;justify-content:space-between;margin-bottom:1rem}.setting-name[data-v-400d5f06]{color:#2c3e50;flex:1;font-size:1.2rem;font-weight:600;margin:0}.required[data-v-400d5f06]{color:#e74c3c;margin-left:.25rem}.setting-description[data-v-400d5f06]{color:#7f8c8d;font-size:.95rem;line-height:1.5;margin-bottom:1.5rem}.setting-controls[data-v-400d5f06]{gap:1rem}.form-group[data-v-400d5f06],.setting-controls[data-v-400d5f06]{display:flex;flex-direction:column}.form-group[data-v-400d5f06]{gap:.5rem}.form-label[data-v-400d5f06]{color:#2c3e50;font-size:.9rem;font-weight:600;margin:0}.form-select[data-v-400d5f06]{width:100%}.vselect-loading[data-v-400d5f06],.vselect-status[data-v-400d5f06]{align-items:center;color:#6c757d;display:flex;gap:.5rem;padding:.5rem .75rem}.setting-status[data-v-400d5f06]{margin-left:1rem}.status-badge[data-v-400d5f06]{align-items:center;border-radius:20px;display:inline-flex;font-size:.8rem;font-weight:600;gap:.5rem;padding:.4rem .8rem;white-space:nowrap}.status-success[data-v-400d5f06]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.status-warning[data-v-400d5f06]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.actions-container[data-v-400d5f06]{background:#fff;border-radius:12px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-top:2rem;padding:2rem;text-align:center}.alert[data-v-400d5f06]{border-radius:8px;margin:1rem 0;padding:1rem;text-align:center}.alert-success[data-v-400d5f06]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.alert-danger[data-v-400d5f06]{background-color:#f8d7da;border:1px solid #f5c6cb;color:#721c24}.alert-info[data-v-400d5f06]{background-color:#d1ecf1;border:1px solid #bee5eb;color:#0c5460}.alert-warning[data-v-400d5f06]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.setting-card .alert-info[data-v-400d5f06]{border-left:4px solid #33a0d9;font-size:.9rem;margin:.5rem 0;padding:.75rem;text-align:left}.setting-card .alert-info i[data-v-400d5f06]{color:#33a0d9;margin-right:.5rem}.loading-container[data-v-400d5f06]{background:#fff;border-radius:12px;box-shadow:0 2px 4px rgba(0,0,0,.1);padding:3rem;text-align:center}.loading-text[data-v-400d5f06]{color:#7f8c8d;font-size:1.1rem;margin-top:1rem}.spinner-border[data-v-400d5f06]{height:3rem;width:3rem}.no-settings-message[data-v-400d5f06]{background-color:#f8f9fa;border-radius:12px;margin-top:2rem;padding:3rem;text-align:center}.no-settings-message .text-muted[data-v-400d5f06]{color:#6c757d!important}.no-settings-message .fas[data-v-400d5f06]{opacity:.6}.account-option[data-v-400d5f06],.routing-option[data-v-400d5f06]{display:flex;flex-direction:column;gap:.25rem;padding:.5rem 0}.account-name[data-v-400d5f06],.routing-label[data-v-400d5f06]{color:#2c3e50;font-weight:600}.account-code[data-v-400d5f06],.routing-description[data-v-400d5f06]{color:#7f8c8d;font-family:monospace;font-size:.8rem}.account-option .account-type[data-v-400d5f06],.routing-option .account-type[data-v-400d5f06]{color:#3498db;font-size:.8rem;font-weight:500;text-transform:uppercase}.selected-account-name[data-v-400d5f06],.selected-routing-label[data-v-400d5f06]{color:#2c3e50;font-weight:600}@media (max-width:768px){.account-routing-settings[data-v-400d5f06]{padding:1rem}.settings-grid[data-v-400d5f06]{grid-template-columns:1fr}.tab-navigation[data-v-400d5f06]{flex-wrap:wrap}.tab-button[data-v-400d5f06]{min-width:100px;padding:.75rem 1rem}.page-title[data-v-400d5f06]{font-size:2rem}.setting-header[data-v-400d5f06]{align-items:flex-start;flex-direction:column;gap:1rem}.setting-status[data-v-400d5f06]{margin-left:0}}@media (max-width:480px){.setting-card[data-v-400d5f06],.tab-content[data-v-400d5f06]{padding:1rem}.module-header[data-v-400d5f06]{text-align:left}.module-title[data-v-400d5f06]{justify-content:flex-start}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);