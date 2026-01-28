"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[1054],{

/***/ 51054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=template&id=45c73482&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
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
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'accounts.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                  ")]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "title": _vm.$t('Save Temporarily'),
      "form": "accountEditForm"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "accountEditForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateAccount.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "bankName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Bank Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankName,
      expression: "form.bankName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('bankName')
    },
    attrs: {
      "id": "bankName",
      "type": "text",
      "name": "bankName",
      "placeholder": _vm.$t('Enter a bank name')
    },
    domProps: {
      "value": _vm.form.bankName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "bankName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "bankName"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "branchName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Branch Name')) + "\n                ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.branchName,
      expression: "form.branchName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('branchName')
    },
    attrs: {
      "id": "branchName",
      "type": "text",
      "name": "branchName",
      "placeholder": _vm.$t('Enter a branch name')
    },
    domProps: {
      "value": _vm.form.branchName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "branchName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branchName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "accountNumber"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Number')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.accountNumber,
      expression: "form.accountNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('accountNumber')
    },
    attrs: {
      "id": "accountNumber",
      "type": "text",
      "name": "accountNumber",
      "placeholder": _vm.$t('Enter an account number')
    },
    domProps: {
      "value": _vm.form.accountNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "accountNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "accountNumber"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "chartOfAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccountId')
    },
    attrs: {
      "options": _vm.filteredChartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "chartOfAccountId",
      "placeholder": _vm.$t('Select a Chart of Account'),
      "disabled": _vm.loadingChartOfAccounts
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          type = _ref.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v("\n                        " + _vm._s(code) + " - " + _vm._s(type) + "\n                      ")])])];
      }
    }]),
    model: {
      value: _vm.form.chartOfAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "chartOfAccountId", $$v);
      },
      expression: "form.chartOfAccountId"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mt-2"
  }, [_vm.$can('chart-of-account-create') ? _c('button', {
    staticClass: "btn btn-sm btn-outline-primary",
    attrs: {
      "type": "button",
      "disabled": !_vm.form.bankName || _vm.form.bankName.trim() === '' || _vm.creatingChartOfAccount
    },
    on: {
      "click": _vm.createNewChartOfAccount
    }
  }, [_c('i', {
    staticClass: "fas fa-plus"
  }), _vm._v(" "), _vm.creatingChartOfAccount ? _c('span', [_vm._v(_vm._s(_vm.$t('Creating...')))]) : _c('span', [_vm._v(_vm._s(_vm.$t('Create New Chart of Account')))])]) : _vm._e(), _vm._v(" "), !_vm.form.bankName || _vm.form.bankName.trim() === '' ? _c('small', {
    staticClass: "text-muted d-block mt-1"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Enter bank name to create a new chart of account')) + "\n                  ")]) : _vm._e()]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chartOfAccountId"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t("Image")))]), _vm._v(" "), _c('div', {
    staticClass: "custom-file"
  }, [_c('input', {
    staticClass: "custom-file-input",
    "class": {
      'is-invalid': _vm.form.errors.has('image')
    },
    attrs: {
      "id": "image",
      "type": "file",
      "name": "image"
    },
    on: {
      "change": _vm.onFileChange
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-file-label",
    attrs: {
      "for": "image"
    }
  }, [_vm._v(_vm._s(_vm.$t("Choose file")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bg-light mt-4 w-25"
  }, [_vm.url ? _c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Attached Image')
    }
  }) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Date')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.date,
      expression: "form.date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('date')
    },
    attrs: {
      "id": "date",
      "type": "date",
      "name": "date"
    },
    domProps: {
      "value": _vm.form.date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('status')
    },
    attrs: {
      "id": "status"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Active')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('note')
    },
    attrs: {
      "id": "note",
      "placeholder": _vm.$t('Write your note here!')
    },
    domProps: {
      "value": _vm.form.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success"
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": function click($event) {
        return _vm.form.reset();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Account')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Account',
      breadcrumbs: [{
        name: 'Edit Account',
        url: 'home'
      }, {
        name: 'Cashbook',
        url: ''
      }, {
        name: 'Accounts',
        url: 'accounts.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        accountLabel: '',
        bankName: '',
        branchName: '',
        accountNumber: '',
        date: '',
        image: '',
        note: '',
        status: 1,
        chartOfAccountId: null
      }),
      url: null,
      loading: true,
      chartOfAccounts: [],
      loadingChartOfAccounts: false,
      creatingChartOfAccount: false,
      accountType: null // 'bank' or 'cash'
    };
  },
  computed: {
    filteredChartOfAccounts: function filteredChartOfAccounts() {
      return this.chartOfAccounts || [];
    }
  },
  mounted: function mounted() {
    this.loadTemporaryData();
    // Load account first to determine account type
    this.getAccount();
  },
  methods: {
    // load chart of accounts based on account type
    loadChartOfAccounts: function loadChartOfAccounts(accountType) {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (accountType) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _this.loadingChartOfAccounts = true;
              _context.p = 2;
              _context.n = 3;
              return _this.$axios.get('/api/accounts/child-chart-of-accounts', {
                params: {
                  account_type: accountType
                }
              });
            case 3:
              response = _context.v;
              if (response.data && response.data.success) {
                _this.chartOfAccounts = response.data.data || [];
              } else {
                _this.chartOfAccounts = [];
              }
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Error loading chart of accounts:', _t);
              toast.fire({
                type: 'error',
                title: _this.$t('Failed to load chart of accounts')
              });
              _this.chartOfAccounts = [];
            case 5:
              _context.p = 5;
              _this.loadingChartOfAccounts = false;
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4, 5, 6]]);
      }))();
    },
    // determine account type from chart of account's parent
    determineAccountType: function determineAccountType(chartOfAccount) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this2$$store$getters, parentId, branchId, bankSettingResponse, settings, bankSetting, cashSettingResponse, _settings, cashSetting, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(!chartOfAccount || !chartOfAccount.parent_id)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, 'bank');
            case 1:
              _context2.p = 1;
              parentId = chartOfAccount.parent_id;
              branchId = (_this2$$store$getters = _this2.$store.getters['auth/currentUser']) === null || _this2$$store$getters === void 0 ? void 0 : _this2$$store$getters.default_branch_id; // Check if parent is main_bank_account
              _context2.n = 2;
              return _this2.$axios.get('/api/account-routing-settings', {
                params: {
                  module: 'banking',
                  setting_key: 'main_bank_account',
                  branch_id: branchId
                }
              });
            case 2:
              bankSettingResponse = _context2.v;
              if (!(bankSettingResponse.data && bankSettingResponse.data.success)) {
                _context2.n = 3;
                break;
              }
              settings = bankSettingResponse.data.data || [];
              bankSetting = settings.find(function (s) {
                return s.main_account_id === parentId;
              });
              if (!bankSetting) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2, 'bank');
            case 3:
              _context2.n = 4;
              return _this2.$axios.get('/api/account-routing-settings', {
                params: {
                  module: 'banking',
                  setting_key: 'main_cash_account',
                  branch_id: branchId
                }
              });
            case 4:
              cashSettingResponse = _context2.v;
              if (!(cashSettingResponse.data && cashSettingResponse.data.success)) {
                _context2.n = 5;
                break;
              }
              _settings = cashSettingResponse.data.data || [];
              cashSetting = _settings.find(function (s) {
                return s.main_account_id === parentId;
              });
              if (!cashSetting) {
                _context2.n = 5;
                break;
              }
              return _context2.a(2, 'cash');
            case 5:
              _context2.n = 7;
              break;
            case 6:
              _context2.p = 6;
              _t2 = _context2.v;
              console.error('Error determining account type:', _t2);
            case 7:
              return _context2.a(2, 'bank');
          }
        }, _callee2, null, [[1, 6]]);
      }))();
    },
    // get account
    getAccount: function getAccount() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get, data, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/accounts/' + _this3.$route.params.slug);
            case 1:
              _yield$axios$get = _context3.v;
              data = _yield$axios$get.data;
              _this3.form.accountLabel = data.data.accountLabel;
              _this3.form.bankName = data.data.bankName;
              _this3.form.branchName = data.data.branchName;
              _this3.form.accountNumber = data.data.accountNumber;
              _this3.form.date = data.data.date;
              _this3.url = data.data.image;
              _this3.form.note = data.data.note;
              _this3.form.status = data.data.status;

              // Determine account type from chart of account
              if (!(data.data.chartOfAccount && data.data.chartOfAccount.id)) {
                _context3.n = 4;
                break;
              }
              _this3.form.chartOfAccountId = data.data.chartOfAccount.id;
              // Determine account type and load appropriate chart of accounts
              _context3.n = 2;
              return _this3.determineAccountType(data.data.chartOfAccount);
            case 2:
              _this3.accountType = _context3.v;
              _context3.n = 3;
              return _this3.loadChartOfAccounts(_this3.accountType);
            case 3:
              _context3.n = 5;
              break;
            case 4:
              _this3.form.chartOfAccountId = null;
              // Default to bank if no chart of account
              _this3.accountType = 'bank';
              _context3.n = 5;
              return _this3.loadChartOfAccounts('bank');
            case 5:
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              console.error('Error loading account:', _t3);
              toast.fire({
                type: 'error',
                title: _this3.$t('Failed to load account')
              });
              // Default to bank on error
              _this3.accountType = 'bank';
              _context3.n = 7;
              return _this3.loadChartOfAccounts('bank');
            case 7:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 6]]);
      }))();
    },
    // create new chart of account
    createNewChartOfAccount: function createNewChartOfAccount() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var accountType, response, newAccount, _response$data, _error$response, errorMessage, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              if (!(!_this4.form.bankName || _this4.form.bankName.trim() === '')) {
                _context4.n = 1;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this4.$t('Bank name is required to create a chart of account')
              });
              return _context4.a(2);
            case 1:
              // Use determined account type or default to bank
              accountType = _this4.accountType || 'bank';
              _this4.creatingChartOfAccount = true;
              _context4.p = 2;
              _context4.n = 3;
              return _this4.$axios.post('/api/accounts/create-child-chart-of-account', {
                account_type: accountType,
                bank_name: _this4.form.bankName.trim()
              });
            case 3:
              response = _context4.v;
              if (response.data && response.data.success) {
                newAccount = response.data.data; // Add the new account to the list
                _this4.chartOfAccounts.push(newAccount);
                // Select the newly created account
                _this4.form.chartOfAccountId = newAccount.id;
                toast.fire({
                  type: 'success',
                  title: _this4.$t('Chart of account created successfully')
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: ((_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message) || _this4.$t('Failed to create chart of account')
                });
              }
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t4 = _context4.v;
              console.error('Error creating chart of account:', _t4);
              errorMessage = ((_error$response = _t4.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this4.$t('Failed to create chart of account');
              toast.fire({
                type: 'error',
                title: errorMessage
              });
            case 5:
              _context4.p = 5;
              _this4.creatingChartOfAccount = false;
              return _context4.f(5);
            case 6:
              return _context4.a(2);
          }
        }, _callee4, null, [[2, 4, 5, 6]]);
      }))();
    },
    // update account
    updateAccount: function updateAccount() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this5.form.patch(window.location.origin + '/api/accounts/' + _this5.$route.params.slug).then(function () {
                // Clear temporary data after successful save
                _this5.clearTemporaryData();
                toast.fire({
                  type: 'success',
                  title: _this5.$t('Account updated successfully')
                });
                _this5.$router.push({
                  name: 'accounts.index'
                });
              })["catch"](function (error) {
                var _error$response$data, _error$response$data2;
                if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
                  var errors = error.response.data.errors;
                  if (_this5.form && _this5.form.errors && typeof _this5.form.errors.set === 'function') {
                    _this5.form.errors.set(errors);
                  }
                  var messages = Object.values(errors).flat();
                  var firstMessage = messages && messages.length ? messages[0] : _this5.$t('Validation Error');
                  var backendMessage = error.response.data.message && error.response.data.message !== 'Validation Error' ? error.response.data.message : firstMessage;
                  toast.fire({
                    type: 'error',
                    title: backendMessage
                  });
                } else if (error.response && ((_error$response$data = error.response.data) !== null && _error$response$data !== void 0 && _error$response$data.message || (_error$response$data2 = error.response.data) !== null && _error$response$data2 !== void 0 && _error$response$data2.error)) {
                  var msg = error.response.data.message || error.response.data.error;
                  toast.fire({
                    type: 'error',
                    title: msg
                  });
                } else {
                  toast.fire({
                    type: 'error',
                    title: _this5.$t('Please check your input and try again.')
                  });
                }
              });
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        bankName: this.form.bankName,
        branchName: this.form.branchName,
        accountNumber: this.form.accountNumber,
        accountName: this.form.accountName,
        openingBalance: this.form.openingBalance,
        bankPhone: this.form.bankPhone,
        bankAddress: this.form.bankAddress,
        enabled: this.form.enabled,
        note: this.form.note,
        chartOfAccountId: this.form.chartOfAccountId,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('accountEditTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('accountEditTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.bankName = data.bankName || this.form.bankName;
          this.form.branchName = data.branchName || this.form.branchName;
          this.form.accountNumber = data.accountNumber || this.form.accountNumber;
          this.form.accountName = data.accountName || this.form.accountName;
          this.form.openingBalance = data.openingBalance || this.form.openingBalance;
          this.form.bankPhone = data.bankPhone || this.form.bankPhone;
          this.form.bankAddress = data.bankAddress || this.form.bankAddress;
          this.form.enabled = data.enabled !== undefined ? data.enabled : this.form.enabled;
          this.form.note = data.note || this.form.note;
          this.form.chartOfAccountId = data.chartOfAccountId || this.form.chartOfAccountId;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('accountEditTempData');
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this6 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this6.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'));
      }
    }
  }
});
;// ./resources/js/pages/cashbook/accounts/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const accounts_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=0&id=45c73482&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_45c73482_prod_scoped_true_lang_css = __webpack_require__(69276);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=0&id=45c73482&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_45c73482_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const accounts_editvue_type_style_index_0_id_45c73482_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_45c73482_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=0&id=45c73482&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=1&id=45c73482&prod&scoped=true&lang=css
var editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css = __webpack_require__(73377);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=1&id=45c73482&prod&scoped=true&lang=css

            

var editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css_options = {};

editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css_options.insert = "head";
editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css_options.singleton = false;

var editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css/* default */.A, editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css_options);



/* harmony default export */ const accounts_editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css = (editvue_type_style_index_1_id_45c73482_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=1&id=45c73482&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cashbook/accounts/edit.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  accounts_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "45c73482",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 69276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-45c73482]{gap:10px}.header-buttons[data-v-45c73482]{margin-bottom:15px}.footer-buttons[data-v-45c73482]{display:flex;gap:10px}.footer-buttons .btn[data-v-45c73482]{margin-right:10px}.footer-buttons .btn[data-v-45c73482]:last-child{margin-right:0}.card[data-v-45c73482]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-45c73482]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-45c73482]{background:#fff!important}.btn-primary[data-v-45c73482]{background:#2ab930!important}.btn-primary[data-v-45c73482],.btn-secondary[data-v-45c73482]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-45c73482]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 73377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-45c73482]{gap:10px}.header-buttons[data-v-45c73482]{margin-bottom:15px}.footer-buttons[data-v-45c73482]{display:flex;gap:10px}.footer-buttons .btn[data-v-45c73482]{margin-right:10px}.footer-buttons .btn[data-v-45c73482]:last-child{margin-right:0}.card[data-v-45c73482]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-45c73482]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-45c73482]{background:#fff!important}.btn-primary[data-v-45c73482]{background:#2ab930!important}.btn-primary[data-v-45c73482],.btn-secondary[data-v-45c73482]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-45c73482]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);