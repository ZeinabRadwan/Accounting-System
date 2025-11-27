"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4038],{

/***/ 44038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ account_routing)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=template&id=7ed58549&scoped=true
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
  }, [_c('div', {
    staticClass: "card settings-card no-print"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v(_vm._s(_vm.$t('اعدادات الحسابات العامة')))]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('ul', {
    staticClass: "nav flex-column nav-pills m-1"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c('li', {
      key: tab.id,
      staticClass: "nav-item"
    }, [_c('button', {
      "class": ['nav-link', 'thumb', {
        'active': _vm.activeTab === tab.id
      }],
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          _vm.activeTab = tab.id;
        }
      }
    }, [_c('i', {
      "class": tab.icon
    }), _vm._v("\n                " + _vm._s(tab.label) + "\n                "), tab.count > 0 ? _c('span', {
      staticClass: "badge badge-secondary ml-2"
    }, [_vm._v(_vm._s(tab.count))]) : _vm._e()])]);
  }), 0)])])]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-xl-9"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_c('i', {
    staticClass: "fas fa-route mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t('اعدادات الحسابات العامة')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "card-description"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('قم باختيار الحسابات الرئيسية لكل قسم محاسبي بشكل مباشر')) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "branch-selector mb-4"
  }, [_c('label', {
    staticClass: "form-label"
  }, [_vm._v(_vm._s(_vm.$t('Branch')))]), _vm._v(" "), _c('VSelect', {
    staticClass: "form-select",
    attrs: {
      "options": _vm.branches,
      "reduce": function reduce(option) {
        return option.id;
      },
      "placeholder": _vm.$t('Select branch'),
      "searchable": true,
      "clearable": false
    },
    on: {
      "input": _vm.onBranchChange
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code;
        return [_c('div', [_c('span', {
          staticClass: "font-weight-bold"
        }, [_vm._v(_vm._s(name))]), _vm._v(" "), code ? _c('span', {
          staticClass: "text-muted ml-2"
        }, [_vm._v("(" + _vm._s(code) + ")")]) : _vm._e()])];
      }
    }]),
    model: {
      value: _vm.selectedBranchId,
      callback: function callback($$v) {
        _vm.selectedBranchId = $$v;
      },
      expression: "selectedBranchId"
    }
  })], 1), _vm._v(" "), _vm.isLoading ? _c('div', {
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
    staticClass: "tab-content"
  }, [_vm.activeTab === 'sales' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l(_vm.salesSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref2) {
          var name = _ref2.name,
            code = _ref2.code,
            type = _ref2.type;
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
        fn: function fn(_ref3) {
          var label = _ref3.label,
            name = _ref3.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'purchase' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l(_vm.purchaseSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref4) {
          var name = _ref4.name,
            code = _ref4.code,
            type = _ref4.type;
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
        fn: function fn(_ref5) {
          var label = _ref5.label,
            name = _ref5.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'vat' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l(_vm.vatSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref6) {
          var name = _ref6.name,
            code = _ref6.code,
            type = _ref6.type;
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
        fn: function fn(_ref7) {
          var label = _ref7.label,
            name = _ref7.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'expenses' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l(_vm.expenseSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref8) {
          var name = _ref8.name,
            code = _ref8.code,
            type = _ref8.type;
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
        fn: function fn(_ref9) {
          var label = _ref9.label,
            name = _ref9.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'inventory' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l(_vm.inventorySettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref0) {
          var name = _ref0.name,
            code = _ref0.code,
            type = _ref0.type;
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
        fn: function fn(_ref1) {
          var label = _ref1.label,
            name = _ref1.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'banking' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l(_vm.bankingSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref10) {
          var name = _ref10.name,
            code = _ref10.code,
            type = _ref10.type;
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
        fn: function fn(_ref11) {
          var label = _ref11.label,
            name = _ref11.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'assets' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l(_vm.assetsSettings, function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref12) {
          var name = _ref12.name,
            code = _ref12.code,
            type = _ref12.type;
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
        fn: function fn(_ref13) {
          var label = _ref13.label,
            name = _ref13.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'equity' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l([].concat(_toConsumableArray(_vm.equitySettings), _toConsumableArray(_vm.liabilitiesSettings)), function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref14) {
          var name = _ref14.name,
            code = _ref14.code,
            type = _ref14.type;
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
        fn: function fn(_ref15) {
          var label = _ref15.label,
            name = _ref15.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.activeTab === 'loans' ? _c('div', {
    staticClass: "simple-panel"
  }, [_c('div', {
    staticClass: "settings-list"
  }, _vm._l([].concat(_toConsumableArray(_vm.loansSettings), _toConsumableArray(_vm.advancesSettings)), function (setting) {
    return _c('div', {
      key: setting.setting_key,
      staticClass: "setting-row"
    }, [_c('label', {
      staticClass: "setting-label"
    }, [_vm._v("\n              " + _vm._s(_vm.$t(setting.setting_name)) + "\n              "), setting.is_required ? _c('span', {
      staticClass: "required"
    }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('VSelect', {
      staticClass: "simple-select",
      attrs: {
        "options": _vm.getAccountsForType(setting.account_type),
        "label": "label",
        "reduce": function reduce(option) {
          return option.id;
        },
        "placeholder": _vm.$t('Select account'),
        "searchable": true,
        "clearable": true,
        "append-to-body": true
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
        fn: function fn(_ref16) {
          var name = _ref16.name,
            code = _ref16.code,
            type = _ref16.type;
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
        fn: function fn(_ref17) {
          var label = _ref17.label,
            name = _ref17.name;
          return [_c('span', {
            staticClass: "selected-account-name"
          }, [_vm._v(_vm._s(label || name))])];
        }
      }], null, true),
      model: {
        value: setting.main_account_id,
        callback: function callback($$v) {
          _vm.$set(setting, "main_account_id", $$v);
        },
        expression: "setting.main_account_id"
      }
    })], 1);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c('div', {
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
  }), _vm._v("\n                " + _vm._s(_vm.saving ? _vm.$t('Saving...') : _vm.$t('Save All Settings')) + "\n              ")])]), _vm._v(" "), _vm.message ? _c('div', {
    staticClass: "alert",
    "class": _vm.messageType
  }, [_vm._v("\n              " + _vm._s(_vm.message) + "\n            ")]) : _vm._e()])])])])])], 1);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const account_routingvue_type_script_lang_js = ({
  name: 'AccountRoutingSettings',
  components: {
    SettingsSidebar: function SettingsSidebar() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 21524));
    }
  },
  data: function data() {
    return {
      breadcrumbsCurrent: this.$t('اعدادات الحسابات العامة'),
      breadcrumbs: [{
        name: this.$t('Dashboard'),
        url: 'home'
      }, {
        name: this.$t('Setup'),
        url: 'setup.index'
      }, {
        name: this.$t('اعدادات الحسابات العامة'),
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
      branches: [],
      selectedBranchId: null
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters['auth/user'] || {};
    },
    currentBranchId: function currentBranchId() {
      var _this$user;
      return this.selectedBranchId || ((_this$user = this.user) === null || _this$user === void 0 ? void 0 : _this$user.default_branch_id) || null;
    },
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
      }, {
        id: 'inventory',
        label: this.$t('Inventory'),
        icon: 'fas fa-boxes',
        count: this.inventorySettings.length
      }, {
        id: 'banking',
        label: this.$t('Banking & Cash'),
        icon: 'fas fa-university',
        count: this.bankingSettings.length
      }, {
        id: 'assets',
        label: this.$t('Assets'),
        icon: 'fas fa-building',
        count: this.assetsSettings.length
      }, {
        id: 'equity',
        label: this.$t('Equity & Liabilities'),
        icon: 'fas fa-balance-scale',
        count: this.equitySettings.length + this.liabilitiesSettings.length
      }, {
        id: 'loans',
        label: this.$t('Loans & Advances'),
        icon: 'fas fa-hand-holding-usd',
        count: this.loansSettings.length + this.advancesSettings.length
      }];
    },
    salesSettings: function salesSettings() {
      var _this = this;
      return this.settings.filter(function (s) {
        return _this.isSalesSetting(s);
      });
    },
    purchaseSettings: function purchaseSettings() {
      var _this2 = this;
      return this.settings.filter(function (s) {
        return _this2.isPurchaseSetting(s);
      });
    },
    vatSettings: function vatSettings() {
      var _this3 = this;
      return this.settings.filter(function (s) {
        return _this3.isVatSetting(s);
      });
    },
    expenseSettings: function expenseSettings() {
      var _this4 = this;
      return this.settings.filter(function (s) {
        return _this4.isExpenseSetting(s);
      });
    },
    inventorySettings: function inventorySettings() {
      var _this5 = this;
      return this.settings.filter(function (s) {
        return _this5.isInventorySetting(s);
      });
    },
    bankingSettings: function bankingSettings() {
      var _this6 = this;
      return this.settings.filter(function (s) {
        return _this6.isBankingSetting(s);
      });
    },
    assetsSettings: function assetsSettings() {
      var _this7 = this;
      return this.settings.filter(function (s) {
        return _this7.isAssetsSetting(s);
      });
    },
    equitySettings: function equitySettings() {
      var _this8 = this;
      return this.settings.filter(function (s) {
        return _this8.isEquitySetting(s);
      });
    },
    liabilitiesSettings: function liabilitiesSettings() {
      var _this9 = this;
      return this.settings.filter(function (s) {
        return _this9.isLiabilitiesSetting(s);
      });
    },
    loansSettings: function loansSettings() {
      var _this0 = this;
      return this.settings.filter(function (s) {
        return _this0.isLoansSetting(s);
      });
    },
    advancesSettings: function advancesSettings() {
      var _this1 = this;
      return this.settings.filter(function (s) {
        return _this1.isAdvancesSetting(s);
      });
    },
    formattedAccounts: function formattedAccounts() {
      // Ensure we always work with an array to avoid runtime errors
      if (!Array.isArray(this.chartOfAccounts) || this.chartOfAccounts.length === 0) {
        return [];
      }

      // Filter accounts from level 3 and higher, then format them
      return this.chartOfAccounts.filter(function (account) {
        var _account$level;
        var level = (_account$level = account.level) !== null && _account$level !== void 0 ? _account$level : 0;
        return level >= 3;
      }).map(function (account) {
        var _account$level2;
        var level = (_account$level2 = account.level) !== null && _account$level2 !== void 0 ? _account$level2 : 0;
        // Create indent based on level (level 3 = 2 dashes, level 4 = 3 dashes, etc.)
        var indent = level > 1 ? '— '.repeat(Math.max(0, level - 1)) : '';
        return {
          id: account.id,
          label: "".concat(indent).concat(account.name, " (").concat(account.code, ")"),
          name: account.name,
          code: account.code,
          type: account.type,
          type_id: account.type_id,
          level: account.level,
          is_active: account.is_active
        };
      });
    }
  },
  mounted: function mounted() {
    var _this10 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var user, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!_this10.$store.getters['auth/user'] && _this10.$store.getters['auth/token'])) {
              _context.n = 4;
              break;
            }
            _context.p = 1;
            _context.n = 2;
            return _this10.$store.dispatch('auth/fetchUser');
          case 2:
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.warn('Failed to fetch user:', _t);
          case 4:
            // Initialize selectedBranchId with user's default branch before loading
            user = _this10.user;
            if (user && user.default_branch_id) {
              _this10.selectedBranchId = user.default_branch_id;
            }
            _context.n = 5;
            return _this10.loadBranches();
          case 5:
            _context.n = 6;
            return _this10.loadSettings();
          case 6:
            if (!_this10.currentBranchId) {
              _context.n = 8;
              break;
            }
            _context.n = 7;
            return _this10.loadChartOfAccounts();
          case 7:
            _context.n = 9;
            break;
          case 8:
            console.warn('No branch selected, cannot load chart of accounts');
          case 9:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }))();
  },
  methods: {
    loadBranches: function loadBranches() {
      var _this11 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var user, response, isSuperAdmin, branchesData, _response, _response2, fallbackResponse, defaultBranchExists, _error$response, _t2, _t3, _t4;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              // Use computed property which returns empty object if user is not available
              user = _this11.user;
              console.log('Loading branches for user:', user);
              if (!(!user || !user.id)) {
                _context2.n = 5;
                break;
              }
              console.warn('No user found, trying to load all branches...');
              // Fallback: try to load all branches
              _context2.p = 1;
              _context2.n = 2;
              return _this11.$http.get('/api/branches', {
                params: {
                  perPage: 1000
                }
              });
            case 2:
              response = _context2.v;
              if (response.data && response.data.data) {
                _this11.branches = Array.isArray(response.data.data) ? response.data.data.map(function (b) {
                  return {
                    id: b.id,
                    label: b.name,
                    name: b.name,
                    code: b.code || ''
                  };
                }) : [];

                // Set first branch as selected if available
                if (_this11.branches.length > 0 && !_this11.selectedBranchId) {
                  _this11.selectedBranchId = _this11.branches[0].id;
                }
              }
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              console.error('Fallback branch loading failed:', _t2);
            case 4:
              return _context2.a(2);
            case 5:
              // Try to get all branches first (for superadmin) or user's branches
              isSuperAdmin = Number(user.account_role) === 1;
              console.log('Is superadmin:', isSuperAdmin);
              branchesData = [];
              if (!isSuperAdmin) {
                _context2.n = 7;
                break;
              }
              console.log('Loading all branches for superadmin...');
              _context2.n = 6;
              return _this11.$http.get('/api/branches', {
                params: {
                  perPage: 1000
                }
              });
            case 6:
              _response = _context2.v;
              console.log('Branches API response:', _response.data);

              // Paginated response structure: { data: [...], current_page: 1, ... }
              if (_response.data && _response.data.data) {
                branchesData = Array.isArray(_response.data.data) ? _response.data.data : [];
              } else if (Array.isArray(_response.data)) {
                branchesData = _response.data;
              }
              _context2.n = 12;
              break;
            case 7:
              console.log('Loading user branches for user:', user.id);
              _context2.p = 8;
              _context2.n = 9;
              return _this11.$http.get("/api/users/".concat(user.id, "/branches"));
            case 9:
              _response2 = _context2.v;
              console.log('User branches API response:', _response2.data);

              // Direct array response
              if (Array.isArray(_response2.data)) {
                branchesData = _response2.data;
              } else if (_response2.data && Array.isArray(_response2.data.data)) {
                branchesData = _response2.data.data;
              }
              _context2.n = 12;
              break;
            case 10:
              _context2.p = 10;
              _t3 = _context2.v;
              console.error('Error loading user branches, trying all branches:', _t3);
              // Fallback to all branches if user branches fail
              _context2.n = 11;
              return _this11.$http.get('/api/branches', {
                params: {
                  perPage: 1000
                }
              });
            case 11:
              fallbackResponse = _context2.v;
              if (fallbackResponse.data && fallbackResponse.data.data) {
                branchesData = Array.isArray(fallbackResponse.data.data) ? fallbackResponse.data.data : [];
              }
            case 12:
              console.log('Branches data:', branchesData);

              // Format branches for VSelect
              _this11.branches = branchesData.map(function (branch) {
                return {
                  id: branch.id,
                  label: branch.name || branch.label,
                  name: branch.name,
                  code: branch.code || ''
                };
              });
              console.log('Formatted branches:', _this11.branches);

              // Set default branch - always use user's default branch if available, otherwise first branch
              if (_this11.branches.length > 0) {
                // Priority: user's default branch > first branch in list
                if (user.default_branch_id) {
                  defaultBranchExists = _this11.branches.some(function (b) {
                    return b.id === user.default_branch_id;
                  });
                  if (defaultBranchExists) {
                    _this11.selectedBranchId = user.default_branch_id;
                    console.log('Set selected branch to user default:', _this11.selectedBranchId);
                  } else {
                    // User's default branch not in available branches, use first branch
                    _this11.selectedBranchId = _this11.branches[0].id;
                    console.log('User default branch not available, using first branch:', _this11.selectedBranchId);
                  }
                } else {
                  // No default branch set for user, use first branch
                  _this11.selectedBranchId = _this11.branches[0].id;
                  console.log('No user default branch, using first branch:', _this11.selectedBranchId);
                }
              }
              _context2.n = 14;
              break;
            case 13:
              _context2.p = 13;
              _t4 = _context2.v;
              console.error('Error loading branches:', _t4);
              console.error('Error response:', _t4.response);
              _this11.showMessage(_this11.$t('Error loading branches') + ': ' + (((_error$response = _t4.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _t4.message), 'alert-danger');
            case 14:
              return _context2.a(2);
          }
        }, _callee2, null, [[8, 10], [1, 3], [0, 13]]);
      }))();
    },
    onBranchChange: function onBranchChange() {
      // Reload both settings and chart of accounts when branch changes
      // This ensures we see accounts specific to the selected branch
      this.loadSettings();
      this.loadChartOfAccounts();
    },
    // Resolve module robustly in case backend sends inconsistent module values
    getResolvedModule: function getResolvedModule(setting) {
      if (!setting) return '';
      var module = (setting.module || '').toString().toLowerCase();
      var key = (setting.setting_key || '').toString().toLowerCase();
      if (module === 'sales' || ['clients_account', 'sales_account', 'product_sales_account', 'discount_allowed_account'].includes(key)) return 'sales';
      if (module === 'purchase' || ['suppliers_account', 'purchase_account', 'product_purchase_account', 'discount_received_account', 'transport_expense_account', 'purchase_returns_account'].includes(key)) return 'purchase';
      if (module === 'vat' || ['sales_vat_account', 'purchase_vat_account'].includes(key)) return 'vat';
      if (module === 'expenses' || ['expenses_account'].includes(key)) return 'expenses';
      if (module === 'inventory' || ['inventory_account'].includes(key)) return 'inventory';
      if (module === 'banking' || ['main_cash_account', 'main_bank_account'].includes(key)) return 'banking';
      if (module === 'assets' || ['asset_depreciation_account'].includes(key)) return 'assets';
      if (module === 'equity' || ['equity_account'].includes(key)) return 'equity';
      if (module === 'liabilities' || ['current_liabilities_account'].includes(key)) return 'liabilities';
      if (module === 'loans' || ['loans_account'].includes(key)) return 'loans';
      if (module === 'advances' || ['advances_account'].includes(key)) return 'advances';
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
      return this.keyMatchesAny(key, ['suppliers_account', 'discount_received_account', 'transport_expense_account', 'purchase_returns_account']);
    },
    isVatSetting: function isVatSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      return this.keyMatchesAny(key, ['sales_vat_account', 'purchase_vat_account']);
    },
    isExpenseSetting: function isExpenseSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      return this.keyMatchesAny(key, ['expenses_account']);
    },
    isInventorySetting: function isInventorySetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      var module = (s.module || '').toString().toLowerCase();
      return module === 'inventory' || this.keyMatchesAny(key, ['inventory_account', 'cost_of_sales_account']);
    },
    isBankingSetting: function isBankingSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      var module = (s.module || '').toString().toLowerCase();
      return module === 'banking' || this.keyMatchesAny(key, ['main_cash_account', 'main_bank_account']);
    },
    isAssetsSetting: function isAssetsSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      var module = (s.module || '').toString().toLowerCase();
      return module === 'assets' || this.keyMatchesAny(key, ['asset_depreciation_account']);
    },
    isEquitySetting: function isEquitySetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      var module = (s.module || '').toString().toLowerCase();
      return module === 'equity' || this.keyMatchesAny(key, ['equity_account']);
    },
    isLiabilitiesSetting: function isLiabilitiesSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      var module = (s.module || '').toString().toLowerCase();
      return module === 'liabilities' || this.keyMatchesAny(key, ['current_liabilities_account']);
    },
    isLoansSetting: function isLoansSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      var module = (s.module || '').toString().toLowerCase();
      return module === 'loans' || this.keyMatchesAny(key, ['loans_account']);
    },
    isAdvancesSetting: function isAdvancesSetting(s) {
      var key = (s.setting_key || '').toString().toLowerCase();
      var module = (s.module || '').toString().toLowerCase();
      return module === 'advances' || this.keyMatchesAny(key, ['advances_account']);
    },
    getDefaultSettings: function getDefaultSettings() {
      // Return default settings structure so all selects are always shown
      return [
      // Sales Module
      {
        id: null,
        module: 'sales',
        setting_key: 'clients_account',
        setting_name: 'Clients Account',
        account_type: 'Asset',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'sales',
        setting_key: 'sales_account',
        setting_name: 'Sales Account',
        account_type: 'Revenue',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'sales',
        setting_key: 'product_sales_account',
        setting_name: 'Product Sales Account',
        account_type: 'Revenue',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'sales',
        setting_key: 'discount_allowed_account',
        setting_name: 'Discount Allowed Account',
        account_type: 'Expense',
        main_account_id: null,
        is_required: true
      },
      // Purchase Module
      {
        id: null,
        module: 'purchase',
        setting_key: 'suppliers_account',
        setting_name: 'Suppliers Account',
        account_type: 'Liability',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'purchase',
        setting_key: 'discount_received_account',
        setting_name: 'Discount Received Account',
        account_type: 'Expense',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'purchase',
        setting_key: 'transport_expense_account',
        setting_name: 'Transport Expense Account',
        account_type: 'Expense',
        main_account_id: null,
        is_required: false
      }, {
        id: null,
        module: 'purchase',
        setting_key: 'purchase_returns_account',
        setting_name: 'Purchase Returns Account',
        account_type: 'Expense',
        main_account_id: null,
        is_required: false
      },
      // VAT/Tax Module
      {
        id: null,
        module: 'vat',
        setting_key: 'sales_vat_account',
        setting_name: 'Sales VAT Account',
        account_type: 'Liability',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'vat',
        setting_key: 'purchase_vat_account',
        setting_name: 'Purchase VAT Account',
        account_type: 'Asset',
        main_account_id: null,
        is_required: true
      },
      // Expenses Module
      {
        id: null,
        module: 'expenses',
        setting_key: 'expenses_account',
        setting_name: 'Expenses Account',
        account_type: 'Expense',
        main_account_id: null,
        is_required: true
      },
      // Inventory Module
      {
        id: null,
        module: 'inventory',
        setting_key: 'inventory_account',
        setting_name: 'Inventory Account',
        account_type: 'Asset',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'inventory',
        setting_key: 'cost_of_sales_account',
        setting_name: 'Cost of Sales Account',
        account_type: 'Expense',
        main_account_id: null,
        is_required: true
      },
      // Banking Module
      {
        id: null,
        module: 'banking',
        setting_key: 'main_cash_account',
        setting_name: 'Main Cash Account',
        account_type: 'Asset',
        main_account_id: null,
        is_required: true
      }, {
        id: null,
        module: 'banking',
        setting_key: 'main_bank_account',
        setting_name: 'Main Bank Account',
        account_type: 'Asset',
        main_account_id: null,
        is_required: true
      },
      // Advances Module
      {
        id: null,
        module: 'advances',
        setting_key: 'advances_account',
        setting_name: 'Advances Account',
        account_type: 'Asset',
        main_account_id: null,
        is_required: true
      },
      // Assets Module
      {
        id: null,
        module: 'assets',
        setting_key: 'asset_depreciation_account',
        setting_name: 'Asset Depreciation Account',
        account_type: 'Expense',
        main_account_id: null,
        is_required: true
      },
      // Equity Module
      {
        id: null,
        module: 'equity',
        setting_key: 'equity_account',
        setting_name: 'Equity Account',
        account_type: 'Equity',
        main_account_id: null,
        is_required: true
      },
      // Liabilities Module
      {
        id: null,
        module: 'liabilities',
        setting_key: 'current_liabilities_account',
        setting_name: 'Current Liabilities Account',
        account_type: 'Liability',
        main_account_id: null,
        is_required: true
      },
      // Loans Module
      {
        id: null,
        module: 'loans',
        setting_key: 'loans_account',
        setting_name: 'Loans Account',
        account_type: 'Liability',
        main_account_id: null,
        is_required: true
      }];
    },
    mergeSettings: function mergeSettings(existingSettings, defaultSettings) {
      var _this12 = this;
      // Create a map of existing settings by setting_key
      var existingMap = {};
      existingSettings.forEach(function (setting) {
        existingMap[setting.setting_key] = setting;
      });

      // Merge: use existing if available, otherwise use default
      return defaultSettings.map(function (defaultSetting) {
        var existing = existingMap[defaultSetting.setting_key];
        if (existing) {
          return existing;
        }
        // Return default with branch_id set
        return _objectSpread(_objectSpread({}, defaultSetting), {}, {
          branch_id: _this12.currentBranchId
        });
      });
    },
    loadSettings: function loadSettings() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, existingSettings, defaultSettings, _defaultSettings, _t5;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              if (_this13.currentBranchId) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              _this13.isLoading = true;
              _context3.p = 2;
              _context3.n = 3;
              return _this13.$http.get('/api/account-routing-settings', {
                params: {
                  branch_id: _this13.currentBranchId
                }
              });
            case 3:
              response = _context3.v;
              existingSettings = []; // Handle both grouped and flat data structures
              if (response.data.data) {
                if (Array.isArray(response.data.data)) {
                  // Flat array structure
                  existingSettings = response.data.data;
                } else {
                  // Grouped structure - flatten it
                  Object.keys(response.data.data).forEach(function (module) {
                    if (Array.isArray(response.data.data[module])) {
                      existingSettings = existingSettings.concat(response.data.data[module]);
                    }
                  });
                }
              }

              // Merge existing settings with defaults to ensure all selects are shown
              defaultSettings = _this13.getDefaultSettings();
              _this13.settings = _this13.mergeSettings(existingSettings, defaultSettings);
              _context3.n = 5;
              break;
            case 4:
              _context3.p = 4;
              _t5 = _context3.v;
              console.error('Error loading settings:', _t5);
              // Even on error, show default settings so user can still configure
              _defaultSettings = _this13.getDefaultSettings();
              _this13.settings = _defaultSettings.map(function (s) {
                return _objectSpread(_objectSpread({}, s), {}, {
                  branch_id: _this13.currentBranchId
                });
              });
            case 5:
              _context3.p = 5;
              _this13.isLoading = false;
              return _context3.f(5);
            case 6:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 4, 5, 6]]);
      }))();
    },
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this14 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, accountsData, _error$response2, _t6;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _this14.chartAccountsLoading = true;
              _context4.p = 1;
              _context4.n = 2;
              return _this14.$http.get('/api/chart-of-accounts/dropdown', {
                params: {
                  branch_id: _this14.currentBranchId,
                  include_stopped: true
                }
              });
            case 2:
              response = _context4.v;
              console.log('API Response:', response.data);
              accountsData = response.data && response.data.data;
              _this14.chartOfAccounts = Array.isArray(accountsData) ? accountsData : [];
              console.log('Loaded accounts:', _this14.chartOfAccounts.length);
              console.log('Sample account:', _this14.chartOfAccounts[0]);
              if (_this14.chartOfAccounts.length === 0) {
                console.warn('No accounts found. Branch ID:', _this14.currentBranchId);
                _this14.showMessage(_this14.$t('Warning: No chart of accounts found. Please create some accounts first.'), 'alert-warning');
              }
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t6 = _context4.v;
              console.error('Error loading chart of accounts:', _t6);
              console.error('Error response:', _t6.response);
              _this14.showMessage(_this14.$t('Error loading chart of accounts') + ': ' + (((_error$response2 = _t6.response) === null || _error$response2 === void 0 || (_error$response2 = _error$response2.data) === null || _error$response2 === void 0 ? void 0 : _error$response2.message) || _t6.message), 'alert-danger');
            case 4:
              _context4.p = 4;
              _this14.chartAccountsLoading = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3, 4, 5]]);
      }))();
    },
    getAccountsForType: function getAccountsForType(accountType) {
      // Return all accounts from level 3 and higher, regardless of type
      // All account selects should show all accounts from the tree
      return this.formattedAccounts;
    },
    updateSetting: function updateSetting(setting) {
      var _this15 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var createData, createResponse, _createResponse$data$, updateData, response, _error$response3, _t7;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              if (setting.id) {
                _context5.n = 3;
                break;
              }
              createData = {
                branch_id: _this15.currentBranchId,
                module: setting.module,
                setting_key: setting.setting_key,
                setting_name: setting.setting_name,
                account_type: setting.account_type,
                main_account_id: setting.main_account_id,
                is_required: setting.is_required || false,
                is_active: true
              };
              _context5.n = 1;
              return _this15.$http.post('/api/account-routing-settings', createData);
            case 1:
              createResponse = _context5.v;
              if (!createResponse.data.success) {
                _context5.n = 2;
                break;
              }
              // Update the setting with the new ID
              setting.id = (_createResponse$data$ = createResponse.data.data) === null || _createResponse$data$ === void 0 ? void 0 : _createResponse$data$.id;
              _this15.showMessage(_this15.$t('Setting created successfully'), 'alert-success');
              return _context5.a(2);
            case 2:
              _context5.n = 5;
              break;
            case 3:
              // Update existing setting
              updateData = {
                main_account_id: setting.main_account_id
              };
              _context5.n = 4;
              return _this15.$http.put("/api/account-routing-settings/".concat(setting.id), updateData);
            case 4:
              response = _context5.v;
              if (response.data.success) {
                _this15.showMessage(_this15.$t('Setting updated successfully'), 'alert-success');
              }
            case 5:
              _context5.n = 7;
              break;
            case 6:
              _context5.p = 6;
              _t7 = _context5.v;
              console.error('Error updating setting:', _t7);
              _this15.showMessage(_this15.$t('Error updating setting') + ': ' + (((_error$response3 = _t7.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || _t7.message), 'alert-danger');
            case 7:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 6]]);
      }))();
    },
    saveAllSettings: function saveAllSettings() {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var updates, creates, _i, _creates, createData, _error$response4, _t8;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              if (_this16.currentBranchId) {
                _context6.n = 1;
                break;
              }
              _this16.showMessage(_this16.$t('Please select a branch'), 'alert-danger');
              return _context6.a(2);
            case 1:
              _this16.saving = true;
              _context6.p = 2;
              // Separate settings into updates (have ID) and creates (no ID)
              updates = [];
              creates = [];
              _this16.settings.forEach(function (setting) {
                if (setting.id) {
                  updates.push({
                    id: setting.id,
                    main_account_id: setting.main_account_id
                  });
                } else if (setting.main_account_id) {
                  // Only create if an account is selected
                  creates.push({
                    branch_id: _this16.currentBranchId,
                    module: setting.module,
                    setting_key: setting.setting_key,
                    setting_name: setting.setting_name,
                    account_type: setting.account_type,
                    main_account_id: setting.main_account_id,
                    is_required: setting.is_required || false,
                    is_active: true
                  });
                }
              });

              // Update existing settings
              if (!(updates.length > 0)) {
                _context6.n = 3;
                break;
              }
              _context6.n = 3;
              return _this16.$http.put('/api/account-routing-settings/bulk', {
                updates: updates,
                branch_id: _this16.currentBranchId
              });
            case 3:
              _i = 0, _creates = creates;
            case 4:
              if (!(_i < _creates.length)) {
                _context6.n = 6;
                break;
              }
              createData = _creates[_i];
              _context6.n = 5;
              return _this16.$http.post('/api/account-routing-settings', createData);
            case 5:
              _i++;
              _context6.n = 4;
              break;
            case 6:
              _context6.n = 7;
              return _this16.loadSettings();
            case 7:
              _this16.showMessage(_this16.$t('All settings saved successfully'), 'alert-success');
              _context6.n = 9;
              break;
            case 8:
              _context6.p = 8;
              _t8 = _context6.v;
              console.error('Error saving settings:', _t8);
              _this16.showMessage(_this16.$t('Error saving settings') + ': ' + (((_error$response4 = _t8.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.message) || _t8.message), 'alert-danger');
            case 9:
              _context6.p = 9;
              _this16.saving = false;
              return _context6.f(9);
            case 10:
              return _context6.a(2);
          }
        }, _callee6, null, [[2, 8, 9, 10]]);
      }))();
    },
    showMessage: function showMessage(message) {
      var _this17 = this;
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'alert-info';
      this.message = message;
      this.messageType = type;
      setTimeout(function () {
        _this17.message = '';
      }, 5000);
    },
    showSeederInstructions: function showSeederInstructions() {
      this.showMessage(this.$t('To initialize the account routing settings, you need to run the database seeder. Open your terminal and run: php artisan db:seed --class=AccountRoutingSettingsSeeder. This will create the default settings for all modules. After running the seeder, refresh this page to see the settings.'), 'alert-info');
    },
    checkSettingsExist: function checkSettingsExist() {
      var _this18 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var response, _t9;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return _this18.$http.get('/api/account-routing-settings');
            case 1:
              response = _context7.v;
              if (!(response.data.data && Array.isArray(response.data.data) && response.data.data.length > 0)) {
                _context7.n = 2;
                break;
              }
              return _context7.a(2, true);
            case 2:
              return _context7.a(2, false);
            case 3:
              _context7.p = 3;
              _t9 = _context7.v;
              console.error('Error checking settings:', _t9);
              return _context7.a(2, false);
          }
        }, _callee7, null, [[0, 3]]);
      }))();
    },
    onMainAccountChange: function onMainAccountChange(setting) {
      // Update the setting
      this.updateSetting(setting);
    },
    isSettingConfigured: function isSettingConfigured(setting) {
      return setting.main_account_id !== null;
    }
  }
});
;// ./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=script&lang=js
 /* harmony default export */ const accounting_settings_account_routingvue_type_script_lang_js = (account_routingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=style&index=0&id=7ed58549&prod&scoped=true&lang=css
var account_routingvue_type_style_index_0_id_7ed58549_prod_scoped_true_lang_css = __webpack_require__(90705);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=style&index=0&id=7ed58549&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(account_routingvue_type_style_index_0_id_7ed58549_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const accounting_settings_account_routingvue_type_style_index_0_id_7ed58549_prod_scoped_true_lang_css = (account_routingvue_type_style_index_0_id_7ed58549_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/accounting-settings/account-routing.vue?vue&type=style&index=0&id=7ed58549&prod&scoped=true&lang=css

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
  "7ed58549",
  null
  
)

/* harmony default export */ const account_routing = (component.exports);

/***/ }),

/***/ 90705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card-description[data-v-7ed58549]{color:#6c757d;font-size:.9rem;margin:.5rem 0 0}.settings-card[data-v-7ed58549]{margin-bottom:1.5rem}.settings-card .nav-link[data-v-7ed58549]{align-items:center;background:transparent;border:none;border-radius:6px;color:#495057;cursor:pointer;display:flex;gap:.75rem;justify-content:flex-start;padding:.75rem 1rem;text-align:right;transition:all .2s ease;width:100%}.settings-card .nav-link[data-v-7ed58549]:hover{background:#f8f9fa;color:#007bff}.settings-card .nav-link.active[data-v-7ed58549]{background:#007bff;color:#fff}.settings-card .nav-link i[data-v-7ed58549]{font-size:1rem;text-align:center;width:20px}.settings-card .nav-link .badge[data-v-7ed58549]{font-size:.75rem;margin-right:auto;padding:.25rem .5rem}.settings-card .nav-link.active .badge[data-v-7ed58549]{background:hsla(0,0%,100%,.3);color:#fff}.tab-content[data-v-7ed58549]{padding:1rem}.tab-panel[data-v-7ed58549]{animation:fadeIn-7ed58549 .3s ease}@keyframes fadeIn-7ed58549{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.simple-panel[data-v-7ed58549]{animation:fadeIn-7ed58549 .2s ease;padding:0 .5rem}.settings-list[data-v-7ed58549]{gap:1rem}.setting-row[data-v-7ed58549],.settings-list[data-v-7ed58549]{display:flex;flex-direction:column}.setting-row[data-v-7ed58549]{border-bottom:1px solid #eef1f4;gap:.4rem;padding-bottom:.75rem}.setting-row[data-v-7ed58549]:last-child{border-bottom:none;padding-bottom:0}.setting-label[data-v-7ed58549]{color:#0f172a;font-size:1rem;font-weight:600;margin:0}.required[data-v-7ed58549]{color:#e74c3c;margin-left:.25rem}.simple-select[data-v-7ed58549]{width:100%}.vselect-loading[data-v-7ed58549],.vselect-status[data-v-7ed58549]{align-items:center;color:#6c757d;display:flex;gap:.5rem;padding:.5rem .75rem}.v-select .vs__dropdown-menu[data-v-7ed58549]{z-index:2000}.actions-container[data-v-7ed58549]{background:#f8fafc;border-radius:12px;margin-top:2rem;padding:1.5rem;text-align:center}.alert[data-v-7ed58549]{border-radius:8px;margin:1rem 0;padding:1rem;text-align:center}.alert-success[data-v-7ed58549]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.alert-danger[data-v-7ed58549]{background-color:#f8d7da;border:1px solid #f5c6cb;color:#721c24}.alert-info[data-v-7ed58549]{background-color:#d1ecf1;border:1px solid #bee5eb;color:#0c5460}.alert-warning[data-v-7ed58549]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.loading-container[data-v-7ed58549]{background:#fff;border-radius:12px;box-shadow:0 2px 4px rgba(0,0,0,.1);padding:3rem;text-align:center}.loading-text[data-v-7ed58549]{color:#7f8c8d;font-size:1.1rem;margin-top:1rem}.spinner-border[data-v-7ed58549]{height:3rem;width:3rem}.no-settings-message[data-v-7ed58549]{background-color:#f8f9fa;border-radius:12px;margin-top:2rem;padding:3rem;text-align:center}.no-settings-message .text-muted[data-v-7ed58549]{color:#6c757d!important}.no-settings-message .fas[data-v-7ed58549]{opacity:.6}.account-option[data-v-7ed58549],.routing-option[data-v-7ed58549]{display:flex;flex-direction:column;gap:.25rem;padding:.5rem 0}.account-name[data-v-7ed58549],.routing-label[data-v-7ed58549]{color:#2c3e50;font-weight:600}.account-code[data-v-7ed58549],.routing-description[data-v-7ed58549]{color:#7f8c8d;font-family:monospace;font-size:.8rem}.account-option .account-type[data-v-7ed58549],.routing-option .account-type[data-v-7ed58549]{color:#3498db;font-size:.8rem;font-weight:500;text-transform:uppercase}.selected-account-name[data-v-7ed58549],.selected-routing-label[data-v-7ed58549]{color:#2c3e50;font-weight:600}@media (max-width:768px){.account-routing-settings[data-v-7ed58549]{padding:1rem}.settings-card[data-v-7ed58549]{margin-bottom:1rem}.settings-card .nav-link[data-v-7ed58549]{font-size:.9rem;padding:.5rem .75rem}.page-title[data-v-7ed58549]{font-size:2rem}.setting-row[data-v-7ed58549]{padding-bottom:.5rem}}@media (max-width:480px){.tab-content[data-v-7ed58549]{padding:.5rem 0}.simple-panel[data-v-7ed58549]{padding:0}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);