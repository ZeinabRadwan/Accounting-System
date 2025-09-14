"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8732],{

/***/ 18732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/edit.vue?vue&type=template&id=d19c7696&scoped=true
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
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('Edit Chart of Account')) + "\n          ")]), _vm._v(" "), _c('router-link', {
    staticClass: "btn btn-dark float-right",
    attrs: {
      "to": {
        name: 'chart-of-accounts.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n          ")])], 1), _vm._v(" "), _c('form', {
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
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('name')
    },
    attrs: {
      "id": "name",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter account name')
    },
    domProps: {
      "value": _vm.form.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "code"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Code')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "code-generation-toggle mb-2"
  }, [_c('div', {
    staticClass: "btn-group btn-group-sm",
    attrs: {
      "role": "group"
    }
  }, [_c('button', {
    "class": ['btn', _vm.form.code_generation === 'manual' ? 'btn-primary' : 'btn-outline-primary'],
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setCodeGeneration('manual');
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-edit mr-1"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Manual')) + "\n                    ")]), _vm._v(" "), _c('button', {
    "class": ['btn', _vm.form.code_generation === 'automatic' ? 'btn-primary' : 'btn-outline-primary'],
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.setCodeGeneration('automatic');
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-magic mr-1"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Regenerate')) + "\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "code-input-container"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.code,
      expression: "form.code"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('code')
    },
    style: _vm.form.code_generation === 'automatic' ? 'background-color: #f8f9fa;' : '',
    attrs: {
      "id": "code",
      "type": "text",
      "name": "code",
      "placeholder": _vm.form.code_generation === 'automatic' ? _vm.$t('Code will be regenerated') : _vm.$t('Enter account code'),
      "readonly": _vm.form.code_generation === 'automatic'
    },
    domProps: {
      "value": _vm.form.code
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "code", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.code_generation === 'automatic' ? _c('div', {
    staticClass: "code-generate-btn"
  }, [_c('button', {
    staticClass: "btn btn-outline-secondary btn-sm",
    attrs: {
      "type": "button",
      "disabled": !_vm.form.parent_id
    },
    on: {
      "click": _vm.generateCode
    }
  }, [_c('i', {
    staticClass: "fas fa-sync-alt mr-1"
  }), _vm._v("\n                      " + _vm._s(_vm.$t('Generate')) + "\n                    ")])]) : _vm._e()]), _vm._v(" "), _vm.form.code_generation === 'automatic' && _vm.form.code ? _c('div', {
    staticClass: "code-preview mt-2"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-1"
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Generated Code')) + ": "), _c('strong', [_vm._v(_vm._s(_vm.form.code))])])]) : _vm._e(), _vm._v(" "), _vm.form.code_generation === 'automatic' && _vm.originalCode && _vm.form.code !== _vm.originalCode ? _c('div', {
    staticClass: "code-warning mt-2"
  }, [_c('small', {
    staticClass: "text-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle mr-1"
  }), _vm._v("\n                    " + _vm._s(_vm.$t('Warning')) + ": " + _vm._s(_vm.$t('Code will be changed from')) + " "), _c('strong', [_vm._v(_vm._s(_vm.originalCode))]), _vm._v(" " + _vm._s(_vm.$t('to')) + " "), _c('strong', [_vm._v(_vm._s(_vm.form.code))])])]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "code"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "type_id"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Type')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('type_id')
    },
    attrs: {
      "options": _vm.accountTypes,
      "label": "name",
      "name": "type_id",
      "placeholder": _vm.$t('Select account type')
    },
    model: {
      value: _vm.form.type_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "type_id", $$v);
      },
      expression: "form.type_id"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "type_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "parent_id"
    }
  }, [_vm._v(_vm._s(_vm.$t('Parent Account')))]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('parent_id')
    },
    attrs: {
      "options": _vm.parentAccounts,
      "label": "name",
      "name": "parent_id",
      "placeholder": _vm.$t('Select parent account (optional)')
    },
    model: {
      value: _vm.form.parent_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "parent_id", $$v);
      },
      expression: "form.parent_id"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "parent_id"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "order"
    }
  }, [_vm._v(_vm._s(_vm.$t('Order')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.order,
      expression: "form.order"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('order')
    },
    attrs: {
      "id": "order",
      "type": "number",
      "name": "order",
      "placeholder": _vm.$t('Enter display order')
    },
    domProps: {
      "value": _vm.form.order
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "order", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "order"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "is_active"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.is_active,
      expression: "form.is_active"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('is_active')
    },
    attrs: {
      "id": "is_active"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "is_active", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      "field": "is_active"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-primary",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t('Save changes')) + "\n            ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/edit.vue?vue&type=script&lang=js
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

/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Edit Chart of Account')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Edit Chart of Account',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Cashbook',
        url: ''
      }, {
        name: 'Chart of Accounts',
        url: 'chart-of-accounts.index'
      }, {
        name: 'Edit',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        name: '',
        code: '',
        code_generation: 'manual',
        // 'automatic' or 'manual' - default to manual for edit
        type_id: null,
        parent_id: null,
        order: '',
        is_active: 1
      }),
      accountTypes: [],
      parentAccounts: [],
      codeGenerationTimeout: null,
      // For debouncing
      isGeneratingCode: false,
      // Prevent multiple simultaneous generations
      originalCode: '' // Store original code for comparison
    };
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _this.loadAccountTypes();
          case 1:
            _context.n = 2;
            return _this.loadParentAccounts();
          case 2:
            _context.n = 3;
            return _this.getAccount();
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up any pending timeouts
    if (this.codeGenerationTimeout) {
      clearTimeout(this.codeGenerationTimeout);
    }
  },
  watch: {
    // Watch for parent_id changes to auto-generate code
    'form.parent_id': {
      handler: function handler(newParent, oldParent) {
        var _this2 = this;
        // console.log('Parent changed from', oldParent, 'to', newParent);
        if (this.form.code_generation === 'automatic' && newParent !== oldParent) {
          // console.log('Auto-generating code due to parent change');

          // Clear any existing timeout
          if (this.codeGenerationTimeout) {
            clearTimeout(this.codeGenerationTimeout);
          }

          // Debounce the code generation
          this.codeGenerationTimeout = setTimeout(function () {
            _this2.generateCode();
          }, 300); // 300ms delay
        }
      },
      deep: true
    }
  },
  methods: {
    // set code generation mode
    setCodeGeneration: function setCodeGeneration(mode) {
      this.form.code_generation = mode;
      if (mode === 'automatic') {
        // Don't clear the code, just make it readonly
        this.generateCode();
      } else {
        // Switch back to manual mode - keep current code
        // this.form.code = this.originalCode; // Keep current code
      }
    },
    // generate automatic code based on parent-child hierarchy
    generateCode: function generateCode() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(_this3.form.code_generation !== 'automatic')) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              if (!_this3.isGeneratingCode) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2);
            case 2:
              _this3.isGeneratingCode = true;
              // console.log('Generating code with parent_id:', this.form.parent_id ? this.form.parent_id.id : null);
              _context2.p = 3;
              _context2.n = 4;
              return _this3.$axios.post('/api/chart-of-accounts/generate-code', {
                parent_id: _this3.form.parent_id ? _this3.form.parent_id.id : null
              });
            case 4:
              response = _context2.v;
              // console.log('Code generation response:', response.data);

              if (response.data && response.data.code) {
                // console.log('Setting code to:', response.data.code);
                _this3.form.code = response.data.code;
              }
              _context2.n = 6;
              break;
            case 5:
              _context2.p = 5;
              _t = _context2.v;
              console.error('Error generating code:', _t);
              _this3.$toastr.error(_this3.$t('Error generating code'));
            case 6:
              _context2.p = 6;
              _this3.isGeneratingCode = false;
              return _context2.f(6);
            case 7:
              return _context2.a(2);
          }
        }, _callee2, null, [[3, 5, 6, 7]]);
      }))();
    },
    // load account types
    loadAccountTypes: function loadAccountTypes() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _this4.$axios.get('/api/chart-of-account-types');
            case 1:
              response = _context3.v;
              _this4.accountTypes = response.data.data || [];
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t2 = _context3.v;
              console.error('Error loading account types:', _t2);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // load parent accounts
    loadParentAccounts: function loadParentAccounts() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _this5.$axios.get('/api/chart-of-accounts/all');
            case 1:
              response = _context4.v;
              _this5.parentAccounts = response.data.data || [];
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t3 = _context4.v;
              console.error('Error loading parent accounts:', _t3);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // get account data
    getAccount: function getAccount() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var response, account, type, parent, _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return _this6.$axios.get("/api/chart-of-accounts/".concat(_this6.$route.params.slug));
            case 1:
              response = _context5.v;
              account = response.data.data;
              console.log('Account data received:', account); // Debug log

              // Set form data
              _this6.form.name = account.name || '';
              _this6.form.code = account.code || '';
              _this6.originalCode = account.code || ''; // Store original code
              _this6.form.order = account.order || '';

              // Handle is_active status - ensure it's a boolean/number
              if (account.is_active !== null && account.is_active !== undefined) {
                _this6.form.is_active = account.is_active ? 1 : 0;
              } else {
                _this6.form.is_active = 1; // Default to active if null/undefined
              }
              console.log('Form is_active set to:', _this6.form.is_active); // Debug log

              // Set type_id (find the type object from accountTypes array)
              if (account.type_id) {
                type = _this6.accountTypes.find(function (t) {
                  return t.id === account.type_id;
                });
                _this6.form.type_id = type || null;
              }

              // Set parent_id (find the parent object from parentAccounts array)
              if (account.parent_id) {
                parent = _this6.parentAccounts.find(function (p) {
                  return p.id === account.parent_id;
                });
                _this6.form.parent_id = parent || null;
              }
              console.log('Form data after population:', _this6.form.data()); // Debug log
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t4 = _context5.v;
              console.error('Error loading account:', _t4);
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // update chart of account
    updateAccount: function updateAccount() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var formData, response, _error$response, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              // Extract IDs from the selected objects before sending
              formData = _objectSpread(_objectSpread({}, _this7.form.data()), {}, {
                type_id: _this7.form.type_id ? _this7.form.type_id.id : null,
                parent_id: _this7.form.parent_id ? _this7.form.parent_id.id : null
              });
              console.log('Sending update data:', formData);
              _context6.n = 1;
              return _this7.$axios.put("/api/chart-of-accounts/".concat(_this7.$route.params.slug), formData);
            case 1:
              response = _context6.v;
              if (!(response.status === 200 || response.status === 201)) {
                _context6.n = 2;
                break;
              }
              // Show success message
              toast.fire({
                icon: 'success',
                title: _this7.$t('Chart of account updated successfully'),
                showConfirmButton: false,
                timer: 2000
              });

              // Wait a moment for the toast to show, then redirect
              setTimeout(function () {
                _this7.$router.push({
                  name: 'chart-of-accounts.index'
                });
              }, 1000);
              _context6.n = 3;
              break;
            case 2:
              throw new Error('Update failed');
            case 3:
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t5 = _context6.v;
              console.error('Error updating:', _t5);

              // Handle validation errors from the response
              if (_t5.response && _t5.response.data && _t5.response.data.errors) {
                _this7.form.errors.set(_t5.response.data.errors);
              }

              // Show error message
              toast.fire({
                icon: 'error',
                title: ((_error$response = _t5.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this7.$t('Opps...something went wrong'),
                showConfirmButton: false,
                timer: 3000
              });
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 4]]);
      }))();
    }
  }
});
;// ./resources/js/pages/cashbook/chart-of-accounts/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const chart_of_accounts_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/edit.vue?vue&type=style&index=0&id=d19c7696&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_d19c7696_prod_scoped_true_lang_css = __webpack_require__(66842);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/edit.vue?vue&type=style&index=0&id=d19c7696&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_d19c7696_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const chart_of_accounts_editvue_type_style_index_0_id_d19c7696_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_d19c7696_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/cashbook/chart-of-accounts/edit.vue?vue&type=style&index=0&id=d19c7696&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cashbook/chart-of-accounts/edit.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  chart_of_accounts_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "d19c7696",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ }),

/***/ 66842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".code-generation-toggle[data-v-d19c7696]{margin-bottom:.5rem}.code-generation-toggle .btn-group[data-v-d19c7696]{width:100%}.code-generation-toggle .btn[data-v-d19c7696]{flex:1;font-size:.875rem;padding:.5rem 1rem}.code-input-container[data-v-d19c7696]{position:relative}.code-generate-btn[data-v-d19c7696]{position:absolute;right:.5rem;top:50%;transform:translateY(-50%);z-index:10}.code-generate-btn .btn[data-v-d19c7696]{font-size:.8rem;padding:.25rem .75rem}.code-preview[data-v-d19c7696]{background:#e3f2fd;border:1px solid #bbdefb;border-radius:4px;font-size:.875rem;padding:.5rem}.code-preview strong[data-v-d19c7696]{color:#1976d2;font-family:Monaco,Menlo,Ubuntu Mono,monospace}.code-warning[data-v-d19c7696]{background:#fff3cd;border:1px solid #ffeaa7;border-radius:4px;font-size:.875rem;padding:.5rem}.code-warning strong[data-v-d19c7696]{color:#856404;font-family:Monaco,Menlo,Ubuntu Mono,monospace}.form-control[readonly][data-v-d19c7696]{background-color:#f8f9fa!important;border-color:#e9ecef;cursor:not-allowed}@media (max-width:768px){.code-generate-btn[data-v-d19c7696]{margin-top:.5rem;position:static;transform:none;width:100%}.code-generate-btn .btn[data-v-d19c7696]{width:100%}.code-generation-toggle .btn[data-v-d19c7696]{font-size:.8rem;padding:.4rem .8rem}}.btn-outline-primary[data-v-d19c7696]:hover{background-color:#007bff;border-color:#007bff;color:#fff}.btn-outline-secondary[data-v-d19c7696]:hover{background-color:#6c757d;border-color:#6c757d;color:#fff}.btn[data-v-d19c7696]:disabled{cursor:not-allowed;opacity:.6}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);