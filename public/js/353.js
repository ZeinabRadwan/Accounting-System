"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[353],{

/***/ 8771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-732e596f]{gap:10px}.header-buttons[data-v-732e596f]{margin-bottom:15px}.footer-buttons[data-v-732e596f]{display:flex;gap:10px}.footer-buttons .btn[data-v-732e596f]{margin-right:10px}.footer-buttons .btn[data-v-732e596f]:last-child{margin-right:0}.card[data-v-732e596f]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-732e596f]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-732e596f]{background:#fff!important}.btn-primary[data-v-732e596f]{background:#2ab930!important}.btn-primary[data-v-732e596f],.btn-secondary[data-v-732e596f]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-732e596f]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 70353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=template&id=732e596f&scoped=true
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
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": "Save Temporarily"
    },
    on: {
      "click": _vm.saveTemporary
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
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
    key: _vm.chartOfAccounts.length,
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "track-by": "id",
      "name": "chartOfAccountId",
      "placeholder": _vm.$t('Select a Chart of Account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          type = _ref.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
    model: {
      value: _vm.formattedChartOfAccountId,
      callback: function callback($$v) {
        _vm.formattedChartOfAccountId = $$v;
      },
      expression: "formattedChartOfAccountId"
    }
  }), _vm._v(" "), _vm.selectedChartOfAccount ? _c('div', {
    staticClass: "mt-2 text-muted small"
  }, [_vm._v("\n                  Selected: " + _vm._s(_vm.selectedChartOfAccount.name) + " (ID: " + _vm._s(_vm.selectedChartOfAccount.id) + ")\n                ")]) : _c('div', {
    staticClass: "mt-2 text-muted small"
  }, [_vm._v("\n                  No chart of account selected. Current value: " + _vm._s(_vm.formattedChartOfAccountId) + "\n                ")]), _vm._v(" "), _c('has-error', {
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
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
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
        chartOfAccountId: ''
      }),
      url: null,
      loading: true,
      chartOfAccounts: []
    };
  },
  mounted: function mounted() {
    this.loadChartOfAccounts();
    this.loadTemporaryData();
  },
  watch: {
    'formattedChartOfAccountId': {
      handler: function handler(newVal, oldVal) {
        console.log('formattedChartOfAccountId changed from', oldVal, 'to', newVal);
      },
      deep: true
    },
    'chartOfAccounts': {
      handler: function handler(newVal) {
        if (newVal && newVal.length > 0) {
          // Load account data after chart of accounts are available
          this.getAccount();
        }
      },
      immediate: true
    }
  },
  computed: {
    selectedChartOfAccount: function selectedChartOfAccount() {
      var _this = this;
      if (!this.form.chartOfAccountId || !this.chartOfAccounts.length) return null;
      return this.chartOfAccounts.find(function (coa) {
        return coa.id === _this.form.chartOfAccountId;
      });
    },
    // Ensure the chartOfAccountId is properly formatted
    formattedChartOfAccountId: {
      get: function get() {
        return this.form.chartOfAccountId;
      },
      set: function set(value) {
        this.form.chartOfAccountId = value;
      }
    }
  },
  methods: {
    // load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return _this2.$axios.get('/api/accounts/chart-of-accounts');
            case 1:
              response = _context.v;
              console.log('Full API response:', response);
              console.log('Response data:', response.data);
              _this2.chartOfAccounts = response.data.data || [];
              console.log('Loaded chart of accounts:', _this2.chartOfAccounts);
              console.log('First chart of account structure:', _this2.chartOfAccounts[0]);
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading chart of accounts:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // get account
    getAccount: function getAccount() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + '/api/accounts/' + _this3.$route.params.slug);
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              console.log('Loaded account data:', data.data);
              _this3.form.accountLabel = data.data.accountLabel;
              _this3.form.bankName = data.data.bankName;
              _this3.form.branchName = data.data.branchName;
              _this3.form.accountNumber = data.data.accountNumber;
              _this3.form.date = data.data.date;
              _this3.url = data.data.image;
              _this3.form.note = data.data.note;
              _this3.form.status = data.data.status;

              // Fix: Set the chartOfAccountId to the ID value for proper v-select handling
              if (data.data.chartOfAccount && data.data.chartOfAccount.id) {
                _this3.form.chartOfAccountId = data.data.chartOfAccount.id;
              } else {
                _this3.form.chartOfAccountId = null;
              }
              console.log('Set chartOfAccountId to:', _this3.form.chartOfAccountId);

              // Ensure the v-select is properly updated
              _this3.$nextTick(function () {
                console.log('After nextTick - chartOfAccountId:', _this3.form.chartOfAccountId);
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // update account
    updateAccount: function updateAccount() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this4.form.patch(window.location.origin + '/api/accounts/' + _this4.$route.params.slug).then(function () {
                // Clear temporary data after successful save
                _this4.clearTemporaryData();
                toast.fire({
                  type: 'success',
                  title: _this4.$t('Account updated successfully')
                });
                _this4.$router.push({
                  name: 'accounts.index'
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this4.$t('Opps...something went wrong')
                });
              });
            case 1:
              return _context3.a(2);
          }
        }, _callee3);
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
      var _this5 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this5.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        sweetalert2_all_default().fire(this.$t('Error!'), this.$t('Please select a valid thumbnail with size less than 2 MB'), 'error');
      }
    }
  }
});
;// ./resources/js/pages/cashbook/accounts/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const accounts_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=0&id=732e596f&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_732e596f_prod_scoped_true_lang_css = __webpack_require__(8771);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=0&id=732e596f&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_732e596f_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const accounts_editvue_type_style_index_0_id_732e596f_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_732e596f_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=0&id=732e596f&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=1&id=732e596f&prod&scoped=true&lang=css
var editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css = __webpack_require__(87298);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=1&id=732e596f&prod&scoped=true&lang=css

            

var editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css_options = {};

editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css_options.insert = "head";
editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css_options.singleton = false;

var editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css/* default */.A, editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css_options);



/* harmony default export */ const accounts_editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css = (editvue_type_style_index_1_id_732e596f_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/cashbook/accounts/edit.vue?vue&type=style&index=1&id=732e596f&prod&scoped=true&lang=css

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
  "732e596f",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 87298:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-732e596f]{gap:10px}.header-buttons[data-v-732e596f]{margin-bottom:15px}.footer-buttons[data-v-732e596f]{display:flex;gap:10px}.footer-buttons .btn[data-v-732e596f]{margin-right:10px}.footer-buttons .btn[data-v-732e596f]:last-child{margin-right:0}.card[data-v-732e596f]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-732e596f]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-732e596f]{background:#fff!important}.btn-primary[data-v-732e596f]{background:#2ab930!important}.btn-primary[data-v-732e596f],.btn-secondary[data-v-732e596f]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-732e596f]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);