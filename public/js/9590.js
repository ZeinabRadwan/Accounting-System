"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9590],{

/***/ 9590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/increments/create.vue?vue&type=template&id=29f9c1cd&scoped=true
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
  }), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('router-link', {
    staticClass: "btn btn-info",
    attrs: {
      "to": {
        name: 'increments.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.saveIncrement.apply(null, arguments);
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
      "for": "reason"
    }
  }, [_vm._v(_vm._s(_vm.$t('Increment Reason'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reason,
      expression: "form.reason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reason')
    },
    attrs: {
      "id": "reason",
      "type": "text",
      "name": "reason",
      "placeholder": _vm.$t('Enter a reason')
    },
    domProps: {
      "value": _vm.form.reason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reason"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "employee"
    }
  }, [_vm._v(_vm._s(_vm.$t('Employee'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _vm.items ? _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('employee')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "employee",
      "placeholder": _vm.$t('Select an employee')
    },
    model: {
      value: _vm.form.employee,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "employee", $$v);
      },
      expression: "form.employee"
    }
  }) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "employee"
    }
  })], 1)]), _vm._v(" "), _vm.form.employee ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "presentSalary"
    }
  }, [_vm._v(_vm._s(_vm.$t('Present Salary'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.employee.totalSalary,
      expression: "form.employee.totalSalary"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('presentSalary')
    },
    attrs: {
      "id": "presentSalary",
      "type": "text",
      "name": "presentSalary",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.employee.totalSalary
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.employee, "totalSalary", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "presentSalary"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "incrementAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Increment Amount')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.incrementAmount,
      expression: "form.incrementAmount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('incrementAmount')
    },
    attrs: {
      "id": "incrementAmount",
      "type": "number",
      "step": "any",
      "name": "incrementAmount",
      "placeholder": _vm.$t('Enter increment amount'),
      "min": "0",
      "max": _vm.form.employee.totalSalary
    },
    domProps: {
      "value": _vm.form.incrementAmount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "incrementAmount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "incrementAmount"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "incrementDate"
    }
  }, [_vm._v(_vm._s(_vm.$t('Increment Date')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.incrementDate,
      expression: "form.incrementDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('incrementDate')
    },
    attrs: {
      "id": "incrementDate",
      "type": "date",
      "name": "incrementDate"
    },
    domProps: {
      "value": _vm.form.incrementDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "incrementDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "incrementDate"
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
    staticClass: "form-group row display-per-page"
  }, [_c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t('Save')) + "\n                ")]), _vm._v(" "), _c('button', {
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

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/increments/create.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Create Salary Increment')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Create Salary Increment',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Increments',
        url: 'increments.index'
      }, {
        name: 'Create',
        url: ''
      }],
      url: null,
      form: new vform_es/* default */.Ay({
        reason: '',
        employee: '',
        presentSalary: '',
        incrementAmount: '',
        incrementDate: new Date().toISOString().slice(0, 10),
        status: 1,
        note: ''
      })
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items'])),
  created: function created() {
    this.getEmployees();
  },
  methods: {
    // get all employees
    getEmployees: function getEmployees() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch('operations/allData', {
                path: '/api/all-employees'
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // save increment
    saveIncrement: function saveIncrement() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.form.post(window.location.origin + '/api/increments').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Increment added successfully')
                });
                _this2.$router.push({
                  name: 'increments.index'
                });
              })["catch"](function (error) {
                _this2.handleSubmitError(error);
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // handle form submission errors
    handleSubmitError: function handleSubmitError(error) {
      var _error$response,
        _error$response2,
        _this3 = this;
      if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.errors) {
        var serverErrors = error.response.data.errors || {};
        var translatedErrors = {};
        Object.keys(serverErrors).forEach(function (field) {
          var fieldErrors = serverErrors[field] || [];
          translatedErrors[field] = fieldErrors.map(function (message) {
            return _this3.translateValidationMessage(message, field);
          });
        });
        this.form.errors.set(translatedErrors);
        toast.fire({
          type: 'error',
          title: this.$t('Please check your input and try again.')
        });
      } else {
        var _error$response3;
        var message = (error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || this.$t('Please check your input and try again.');
        toast.fire({
          type: 'error',
          title: message
        });
      }
    },
    // translate validation messages from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Field label mapping for increment form fields
      var fieldLabelMap = {
        reason: this.$t('Increment Reason'),
        employee: this.$t('Employee'),
        incrementAmount: this.$t('Increment Amount'),
        incrementDate: this.$t('Increment Date'),
        note: this.$t('Note'),
        status: this.$t('Status')
      };
      var fieldLabel = fieldLabelMap[field] || field;

      // Common Laravel validation patterns with localized messages
      var patterns = [
      // Required field patterns
      {
        re: /The\s+.+?\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Please\s+select\s+an?\s+.+?\.?/i,
        en: "Please select",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631"
      }, {
        re: /Please\s+enter\s+a\s+.+?\.?/i,
        en: "Please enter",
        ar: "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644"
      }, {
        re: /Please\s+provide\s+a\s+.+?\.?/i,
        en: "Please provide",
        ar: "\u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645"
      },
      // Selection and choice patterns
      {
        re: /The\s+selected\s+.+?\s+is\s+invalid\.?/i,
        en: "The selected value is invalid",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /The\s+selected\s+.+?\s+does\s+not\s+exist\.?/i,
        en: "The selected value does not exist",
        ar: "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"
      }, {
        re: /Please\s+choose\s+a\s+.+?\.?/i,
        en: "Please choose",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631"
      }, {
        re: /You\s+must\s+select\s+a\s+.+?\.?/i,
        en: "You must select",
        ar: "\u064A\u062C\u0628 \u0627\u062E\u062A\u064A\u0627\u0631"
      },
      // Data type patterns
      {
        re: /The\s+.+?\s+must\s+be\s+a\s+number\.?/i,
        en: "Must be a number",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+integer\.?/i,
        en: "Must be an integer",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u062F\u062F\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+string\.?/i,
        en: "Must be a string",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0646\u0635\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+array\.?/i,
        en: "Must be an array",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0635\u0641\u0648\u0641\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+boolean\.?/i,
        en: "Must be true or false",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u062D\u064A\u062D \u0623\u0648 \u062E\u0637\u0623"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+email\.?/i,
        en: "Must be a valid email",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u062D\u064A\u062D"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+url\.?/i,
        en: "Must be a valid URL",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0627\u0628\u0637 \u0635\u062D\u064A\u062D"
      },
      // Numeric validation patterns
      {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+greater\s+than\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be greater than ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "May not be greater than ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0632\u064A\u062F \u0639\u0646 ".concat(n);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\.?/i,
        en: function en(_, min, max) {
          return "Must be between ".concat(min, " and ").concat(max);
        },
        ar: function ar(_, min, max) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 ".concat(min, " \u0648 ").concat(max);
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+exactly\s+(\d+)\.?/i,
        en: function en(_, n) {
          return "Must be exactly ".concat(n);
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0627\u0644\u0636\u0628\u0637 ".concat(n);
        }
      },
      // String length patterns
      {
        re: /The\s+.+?\s+may\s+not\s+be\s+greater\s+than\s+(\d+)\s+characters\.?/i,
        en: function en(_, n) {
          return "May not be greater than ".concat(n, " characters");
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 ".concat(n, " \u062D\u0631\u0641\u0627\u064B");
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+at\s+least\s+(\d+)\s+characters\.?/i,
        en: function en(_, n) {
          return "Must be at least ".concat(n, " characters");
        },
        ar: function ar(_, n) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 ".concat(n, " \u062D\u0631\u0641\u0627\u064B");
        }
      }, {
        re: /The\s+.+?\s+must\s+be\s+between\s+(\d+)\s+and\s+(\d+)\s+characters\.?/i,
        en: function en(_, min, max) {
          return "Must be between ".concat(min, " and ").concat(max, " characters");
        },
        ar: function ar(_, min, max) {
          return "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 ".concat(min, " \u0648 ").concat(max, " \u062D\u0631\u0641\u0627\u064B");
        }
      },
      // Date validation patterns
      {
        re: /The\s+.+?\s+is\s+not\s+a\s+valid\s+date\.?/i,
        en: "Is not a valid date",
        ar: "\u0644\u064A\u0633 \u062A\u0627\u0631\u064A\u062E\u0627\u064B \u0635\u062D\u064A\u062D\u0627\u064B"
      }, {
        re: /The\s+.+?\s+does\s+not\s+match\s+the\s+format\s+.+?\.?/i,
        en: "Does not match the required format",
        ar: "\u0644\u0627 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+.+?\s+must\s+be\s+after\s+or\s+equal\s+to\s+.+?\.?/i,
        en: "Must be after or equal to the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+before\s+or\s+equal\s+to\s+.+?\.?/i,
        en: "Must be before or equal to the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0642\u0628\u0644 \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+after\s+.+?\.?/i,
        en: "Must be after the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+before\s+.+?\.?/i,
        en: "Must be before the specified date",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0642\u0628\u0644 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062D\u062F\u062F"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+date\s+after\s+or\s+equal\s+to\s+today\.?/i,
        en: "Must be a date after or equal to today",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0628\u0639\u062F \u0623\u0648 \u064A\u0633\u0627\u0648\u064A \u0627\u0644\u064A\u0648\u0645"
      },
      // Format validation patterns
      {
        re: /The\s+.+?\s+format\s+is\s+invalid\.?/i,
        en: "Invalid format",
        ar: "\u062A\u0646\u0633\u064A\u0642 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /The\s+.+?\s+does\s+not\s+match\s+the\s+required\s+format\.?/i,
        en: "Does not match the required format",
        ar: "\u0644\u0627 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /The\s+.+?\s+must\s+match\s+the\s+pattern\.?/i,
        en: "Must match the required pattern",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
      },
      // Uniqueness patterns
      {
        re: /The\s+.+?\s+has\s+already\s+been\s+taken\.?/i,
        en: "This value has already been taken",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u0645\u0633\u062A\u062E\u062F\u0645\u0629 \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /The\s+.+?\s+already\s+exists\.?/i,
        en: "Already exists",
        ar: "\u0645\u0648\u062C\u0648\u062F \u0628\u0627\u0644\u0641\u0639\u0644"
      }, {
        re: /This\s+.+?\s+is\s+already\s+in\s+use\.?/i,
        en: "This is already in use",
        ar: "\u0647\u0630\u0627 \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644"
      },
      // File upload patterns
      {
        re: /The\s+.+?\s+must\s+be\s+a\s+file\.?/i,
        en: "Must be a file",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0644\u0641\u0627\u064B"
      }, {
        re: /The\s+.+?\s+must\s+be\s+an\s+image\.?/i,
        en: "Must be an image",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u0648\u0631\u0629"
      }, {
        re: /The\s+.+?\s+must\s+be\s+a\s+valid\s+image\.?/i,
        en: "Must be a valid image",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0635\u0648\u0631\u0629 \u0635\u062D\u064A\u062D\u0629"
      }, {
        re: /The\s+.+?\s+file\s+is\s+too\s+large\.?/i,
        en: "File is too large",
        ar: "\u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B"
      }, {
        re: /The\s+.+?\s+file\s+size\s+must\s+not\s+exceed\s+(\d+)\s+KB\.?/i,
        en: function en(_, n) {
          return "File size must not exceed ".concat(n, " KB");
        },
        ar: function ar(_, n) {
          return "\u062D\u062C\u0645 \u0627\u0644\u0645\u0644\u0641 \u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 ".concat(n, " \u0643\u064A\u0644\u0648\u0628\u0627\u064A\u062A");
        }
      },
      // Confirmation patterns
      {
        re: /The\s+.+?\s+confirmation\s+does\s+not\s+match\.?/i,
        en: "Confirmation does not match",
        ar: "\u0627\u0644\u062A\u0623\u0643\u064A\u062F \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642"
      }, {
        re: /The\s+.+?\s+and\s+.+?\s+must\s+match\.?/i,
        en: "Must match",
        ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0637\u0627\u0628\u0642\u0627"
      },
      // Custom validation patterns for increment form
      {
        re: /Increment\s+amount\s+cannot\s+exceed\s+present\s+salary\.?/i,
        en: "Increment amount cannot exceed present salary",
        ar: "\u0645\u0628\u0644\u063A \u0627\u0644\u0632\u064A\u0627\u062F\u0629 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0631\u0627\u062A\u0628 \u0627\u0644\u062D\u0627\u0644\u064A"
      }, {
        re: /Increment\s+date\s+must\s+be\s+after\s+employee\s+joining\s+date\.?/i,
        en: "Increment date must be after employee joining date",
        ar: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0632\u064A\u0627\u062F\u0629 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u0639\u062F \u062A\u0627\u0631\u064A\u062E \u0627\u0646\u0636\u0645\u0627\u0645 \u0627\u0644\u0645\u0648\u0638\u0641"
      }, {
        re: /Please\s+select\s+an\s+employee\.?/i,
        en: "Please select an employee",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0648\u0638\u0641"
      }, {
        re: /Employee\s+is\s+required\.?/i,
        en: "Employee is required",
        ar: "\u0627\u0644\u0645\u0648\u0638\u0641 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Increment\s+reason\s+is\s+required\.?/i,
        en: "Increment reason is required",
        ar: "\u0633\u0628\u0628 \u0627\u0644\u0632\u064A\u0627\u062F\u0629 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Increment\s+amount\s+is\s+required\.?/i,
        en: "Increment amount is required",
        ar: "\u0645\u0628\u0644\u063A \u0627\u0644\u0632\u064A\u0627\u062F\u0629 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /Increment\s+amount\s+must\s+be\s+greater\s+than\s+zero\.?/i,
        en: "Increment amount must be greater than zero",
        ar: "\u0645\u0628\u0644\u063A \u0627\u0644\u0632\u064A\u0627\u062F\u0629 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631"
      }, {
        re: /Note\s+cannot\s+exceed\s+255\s+characters\.?/i,
        en: "Note cannot exceed 255 characters",
        ar: "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0629 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u062A\u062C\u0627\u0648\u0632 255 \u062D\u0631\u0641\u0627\u064B"
      },
      // Generic fallback patterns
      {
        re: /This\s+field\s+is\s+required\.?/i,
        en: "This field is required",
        ar: "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628"
      }, {
        re: /This\s+field\s+must\s+be\s+filled\.?/i,
        en: "This field must be filled",
        ar: "\u064A\u062C\u0628 \u0645\u0644\u0621 \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644"
      }, {
        re: /This\s+value\s+is\s+invalid\.?/i,
        en: "This value is invalid",
        ar: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064A\u0645\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629"
      }, {
        re: /Invalid\s+input\.?/i,
        en: "Invalid input",
        ar: "\u0625\u062F\u062E\u0627\u0644 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D"
      }, {
        re: /Please\s+check\s+your\s+input\.?/i,
        en: "Please check your input",
        ar: "\u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u062F\u062E\u0644\u0627\u062A"
      }];
      for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
        var _patterns$_i = _patterns[_i],
          re = _patterns$_i.re,
          en = _patterns$_i.en,
          ar = _patterns$_i.ar;
        var match = message.match(re);
        if (match) {
          var text = typeof (isArabic ? ar : en) === 'function' ? (isArabic ? ar : en).apply(void 0, _toConsumableArray(match)) : isArabic ? ar : en;
          return "".concat(fieldLabel, ": ").concat(text);
        }
      }

      // Fallback: return original message if nothing matched
      return message;
    }
  }
});
;// ./resources/js/pages/employees/increments/create.vue?vue&type=script&lang=js
 /* harmony default export */ const increments_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/increments/create.vue?vue&type=style&index=0&id=29f9c1cd&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_29f9c1cd_prod_scoped_true_lang_css = __webpack_require__(58040);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/employees/increments/create.vue?vue&type=style&index=0&id=29f9c1cd&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_29f9c1cd_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const increments_createvue_type_style_index_0_id_29f9c1cd_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_29f9c1cd_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/employees/increments/create.vue?vue&type=style&index=0&id=29f9c1cd&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/employees/increments/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  increments_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "29f9c1cd",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 58040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-29f9c1cd]{gap:10px}.card[data-v-29f9c1cd]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-29f9c1cd]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-29f9c1cd]{padding:1.25rem}.card-footer[data-v-29f9c1cd]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-29f9c1cd]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-29f9c1cd]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-29f9c1cd]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.required[data-v-29f9c1cd]{color:#dc3545;font-weight:700}.btn-primary[data-v-29f9c1cd]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-29f9c1cd]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-29f9c1cd]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-29f9c1cd]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.is-invalid[data-v-29f9c1cd]{border-color:#dc3545!important}textarea.form-control[data-v-29f9c1cd]{min-height:100px;resize:vertical}.v-select[data-v-29f9c1cd]{background:#fff!important}.v-select .vs__dropdown-toggle[data-v-29f9c1cd]{background:#fff!important;border:1px solid #e5e7eb!important;padding:10px 16px!important}.v-select .vs__dropdown-toggle[data-v-29f9c1cd]:focus{border-color:#33a0d9!important;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)!important}.v-select.is-invalid .vs__dropdown-toggle[data-v-29f9c1cd]{border-color:#dc3545!important}.row[data-v-29f9c1cd]{margin-bottom:1rem}@media (max-width:768px){.card-footer[data-v-29f9c1cd]{flex-direction:column;gap:10px}.card-footer .btn[data-v-29f9c1cd]{margin-right:0!important;width:100%}.card-footer div[data-v-29f9c1cd]{display:flex;flex-direction:column;gap:10px;width:100%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);