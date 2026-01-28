"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9522],{

/***/ 5351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-66883e4c]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header.setings-header[data-v-66883e4c]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:22px 16px}.form-control[data-v-66883e4c]{background:#fff!important}input[readonly][data-v-66883e4c]{background-color:#f8f9fa!important;border-color:#ced4da;color:#6c757d;cursor:not-allowed}.form-control[data-v-66883e4c]:focus,select.form-control[data-v-66883e4c]:focus,textarea.form-control[data-v-66883e4c]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.required[data-v-66883e4c]{color:#dc3545}.custom-file-input:focus~.custom-file-label[data-v-66883e4c]{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.custom-file-label[data-v-66883e4c]{border-radius:6px}.custom-file-label[data-v-66883e4c],[dir=rtl] .custom-file-label[data-v-66883e4c]{text-align:left!important}.btn-primary[data-v-66883e4c]{background:#2ab930!important}.btn-primary[data-v-66883e4c],.btn-secondary[data-v-66883e4c]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-66883e4c]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 49522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sms_configuration)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/sms-configuration.vue?vue&type=template&id=66883e4c&scoped=true
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
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateSettings.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "twilio_account_sid"
    }
  }, [_vm._v(_vm._s(_vm.$t('TWILIO ACCOUNT SID')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.twilio_account_sid,
      expression: "form.twilio_account_sid"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('twilio_account_sid')
    },
    attrs: {
      "id": "twilio_account_sid",
      "type": "text",
      "name": "twilio_account_sid",
      "placeholder": _vm.$t('TWILIO ACCOUNT SID'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.twilio_account_sid
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "twilio_account_sid", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "twilio_account_sid"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "twilio_auth_token"
    }
  }, [_vm._v(_vm._s(_vm.$t('TWILIO AUTH TOKEN')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.twilio_auth_token,
      expression: "form.twilio_auth_token"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('twilio_auth_token')
    },
    attrs: {
      "id": "twilio_auth_token",
      "type": "text",
      "name": "twilio_auth_token",
      "placeholder": _vm.$t('TWILIO AUTH TOKEN'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.twilio_auth_token
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "twilio_auth_token", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "twilio_auth_token"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "twilio_from"
    }
  }, [_vm._v(_vm._s(_vm.$t('TWILIO FROM NUMBER')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.twilio_from,
      expression: "form.twilio_from"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('twilio_from')
    },
    attrs: {
      "id": "twilio_from",
      "type": "text",
      "name": "twilio_from",
      "placeholder": _vm.$t('TWILIO FROM NUMBER'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.twilio_from
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "twilio_from", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "twilio_from"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "twilio_sms_service_sid"
    }
  }, [_vm._v(_vm._s(_vm.$t('TWILIO SMS SERVICE SID')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.twilio_sms_service_sid,
      expression: "form.twilio_sms_service_sid"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('twilio_sms_service_sid')
    },
    attrs: {
      "id": "twilio_sms_service_sid",
      "type": "text",
      "name": "twilio_sms_service_sid",
      "placeholder": _vm.$t('TWILIO SMS SERVICE SID'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.twilio_sms_service_sid
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "twilio_sms_service_sid", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "twilio_sms_service_sid"
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
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Save changes')) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/sms-configuration.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const sms_configurationvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('SMS Configuration')
    };
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: 'Mail Configuration',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: 'setup.index'
      }, {
        name: 'SMS Configuration',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        twilio_account_sid: '',
        twilio_auth_token: '',
        twilio_from: '',
        twilio_sms_service_sid: ''
      })
    };
  },
  created: function created() {
    this.getSMSServerValues();
  },
  methods: {
    // get all current values
    getSMSServerValues: function getSMSServerValues() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/sms-configuration');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.form.twilio_account_sid = data.twilio_account_sid;
              _this.form.twilio_auth_token = data.twilio_auth_token;
              _this.form.twilio_from = data.twilio_from;
              _this.form.twilio_sms_service_sid = data.twilio_sms_service_sid;
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // update settings
    updateSettings: function updateSettings() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_this2.isDemoMode) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, toast.fire({
                type: 'warning',
                title: _this2.$t('You are not allowed to do this in demo version.')
              }));
            case 1:
              _context2.n = 2;
              return _this2.form.post(window.location.origin + '/api/update-sms-configuration').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Settings updated successfully')
                });
              })["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this2.$t('Please check your input and try again.')
                });
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/pages/setup/sms-configuration.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_sms_configurationvue_type_script_lang_js = (sms_configurationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/sms-configuration.vue?vue&type=style&index=0&id=66883e4c&prod&scoped=true&lang=css
var sms_configurationvue_type_style_index_0_id_66883e4c_prod_scoped_true_lang_css = __webpack_require__(5351);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/sms-configuration.vue?vue&type=style&index=0&id=66883e4c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(sms_configurationvue_type_style_index_0_id_66883e4c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const setup_sms_configurationvue_type_style_index_0_id_66883e4c_prod_scoped_true_lang_css = (sms_configurationvue_type_style_index_0_id_66883e4c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/sms-configuration.vue?vue&type=style&index=0&id=66883e4c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/sms-configuration.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_sms_configurationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "66883e4c",
  null
  
)

/* harmony default export */ const sms_configuration = (component.exports);

/***/ })

}]);