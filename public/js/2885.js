"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2885],{

/***/ 49200
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-3def46c9]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header.setings-header[data-v-3def46c9]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:22px 16px}.form-control[data-v-3def46c9]{background:#fff!important}input[readonly][data-v-3def46c9]{background-color:#f8f9fa!important;border-color:#ced4da;color:#6c757d;cursor:not-allowed}.form-control[data-v-3def46c9]:focus,select.form-control[data-v-3def46c9]:focus,textarea.form-control[data-v-3def46c9]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.required[data-v-3def46c9]{color:#dc3545}.custom-file-input:focus~.custom-file-label[data-v-3def46c9]{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(23,162,184,.15)}.custom-file-label[data-v-3def46c9]{border-radius:6px}.custom-file-label[data-v-3def46c9],[dir=rtl] .custom-file-label[data-v-3def46c9]{text-align:left!important}.btn-primary[data-v-3def46c9]{background:#2ab930!important}.btn-primary[data-v-3def46c9],.btn-secondary[data-v-3def46c9]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-3def46c9]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 85266
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mail_configuration)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/mail-configuration.vue?vue&type=template&id=3def46c9&scoped=true
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
      "for": "mail_mailer"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL MAILER')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_mailer,
      expression: "form.mail_mailer"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_mailer')
    },
    attrs: {
      "id": "mail_mailer",
      "type": "text",
      "name": "mail_mailer",
      "placeholder": _vm.$t('MAIL MAILER'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_mailer
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_mailer", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_mailer"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_host"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL HOST')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_host,
      expression: "form.mail_host"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_host')
    },
    attrs: {
      "id": "mail_host",
      "type": "text",
      "name": "mail_host",
      "placeholder": _vm.$t('MAIL HOST'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_host
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_host", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_host"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_port"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL PORT')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_port,
      expression: "form.mail_port"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_port')
    },
    attrs: {
      "id": "mail_port",
      "type": "text",
      "name": "mail_port",
      "placeholder": _vm.$t('MAIL PORT'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_port
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_port", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_port"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_username"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL USERNAME')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_username,
      expression: "form.mail_username"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_username')
    },
    attrs: {
      "id": "mail_username",
      "type": "text",
      "name": "mail_username",
      "placeholder": _vm.$t('MAIL USERNAME'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_username
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_username", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_username"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_password"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL PASSWORD')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_password,
      expression: "form.mail_password"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_password')
    },
    attrs: {
      "id": "mail_password",
      "type": "text",
      "name": "mail_password",
      "placeholder": _vm.$t('MAIL PASSWORD'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_password
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_password", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_encryption"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL ENCRYPTION')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_encryption,
      expression: "form.mail_encryption"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_encryption')
    },
    attrs: {
      "id": "mail_encryption",
      "type": "text",
      "name": "mail_encryption",
      "placeholder": _vm.$t('MAIL ENCRYPTION'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_encryption
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_encryption", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_encryption"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_from_address"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL FROM ADDRESS')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_from_address,
      expression: "form.mail_from_address"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_from_address')
    },
    attrs: {
      "id": "mail_from_address",
      "type": "text",
      "name": "mail_from_address",
      "placeholder": _vm.$t('MAIL FROM ADDRESS'),
      "required": ""
    },
    domProps: {
      "value": _vm.form.mail_from_address
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_from_address", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_from_address"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "mail_from_name"
    }
  }, [_vm._v(_vm._s(_vm.$t('MAIL FROM NAME')) + "\n                                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.mail_from_name,
      expression: "form.mail_from_name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('mail_from_address')
    },
    attrs: {
      "id": "mail_from_name",
      "type": "text",
      "name": "mail_from_name",
      "placeholder": _vm.$t('MAIL FROM ADDRESS')
    },
    domProps: {
      "value": _vm.form.mail_from_name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "mail_from_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "mail_from_name"
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
  }), _vm._v("\n                            " + _vm._s(_vm.$t('Save changes')) + "\n                        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary float-right",
    "class": {
      'btn-loading': _vm.loading
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.testConnection();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-wifi"
  }), _vm._v(" " + _vm._s(_vm.$t("Test Connection")) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/mail-configuration.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const mail_configurationvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Mail Configuration')
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
        name: 'Mail Configuration',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        mail_mailer: '',
        mail_host: '',
        mail_port: '',
        mail_username: '',
        mail_password: '',
        mail_encryption: '',
        mail_from_address: '',
        mail_from_name: ''
      }),
      loading: false
    };
  },
  created: function created() {
    this.getMailServerValues();
  },
  methods: {
    // get all current values
    getMailServerValues: function getMailServerValues() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/mail-configuration');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.form.mail_mailer = data.mail_mailer;
              _this.form.mail_host = data.mail_host;
              _this.form.mail_port = data.mail_port;
              _this.form.mail_username = data.mail_username;
              _this.form.mail_password = data.mail_password;
              _this.form.mail_encryption = data.mail_encryption;
              _this.form.mail_from_address = data.mail_from_address;
              _this.form.mail_from_name = data.mail_from_name;
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
              return _this2.form.post(window.location.origin + '/api/update-mail-configuration').then(function () {
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
    },
    testConnection: function testConnection() {
      var _this3 = this;
      this.loading = true;
      axios_default().get(window.location.origin + "/api/send-test-connection-email").then(function () {
        _this3.loading = false;
        toast.fire({
          type: "success",
          title: _this3.$t("Email sent. Your connection is secure")
        });
      })["catch"](function () {
        _this3.loading = false;
        toast.fire({
          type: "error",
          title: _this3.$t("Please check your input and try again.")
        });
      });
    }
  }
});
;// ./resources/js/pages/setup/mail-configuration.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_mail_configurationvue_type_script_lang_js = (mail_configurationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/mail-configuration.vue?vue&type=style&index=0&id=3def46c9&prod&scoped=true&lang=css
var mail_configurationvue_type_style_index_0_id_3def46c9_prod_scoped_true_lang_css = __webpack_require__(49200);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/mail-configuration.vue?vue&type=style&index=0&id=3def46c9&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(mail_configurationvue_type_style_index_0_id_3def46c9_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const setup_mail_configurationvue_type_style_index_0_id_3def46c9_prod_scoped_true_lang_css = (mail_configurationvue_type_style_index_0_id_3def46c9_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/mail-configuration.vue?vue&type=style&index=0&id=3def46c9&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/mail-configuration.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_mail_configurationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "3def46c9",
  null
  
)

/* harmony default export */ const mail_configuration = (component.exports);

/***/ }

}]);