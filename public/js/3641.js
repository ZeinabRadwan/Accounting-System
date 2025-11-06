"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[3641],{

/***/ 5181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=template&id=6a94e85c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showClientCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Client")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showClientCreateModal,
      callback: function callback($$v) {
        _vm.showClientCreateModal = $$v;
      },
      expression: "showClientCreateModal"
    }
  }, [_vm._v(" "), [_c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": false
    },
    on: {
      "submit": _vm.saveClient
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" \n          " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n        ")])])]], 2), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 5 modules
var ClientForm = __webpack_require__(77958);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const ClientCreateModalvue_type_script_lang_js = ({
  name: "ClientCreateModal",
  middleware: ["auth", "check-permissions"],
  components: {
    ClientForm: ClientForm/* default */.A
  },
  data: function data() {
    return {
      showClientCreateModal: false,
      form: null,
      isSubmitting: false
    };
  },
  methods: {
    // save client
    saveClient: function saveClient() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var formData, fd, appendIfDefined, response, status, serverErrors, form, mapped, _error$response, errorMessage, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!_this.isSubmitting) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _this.isSubmitting = true;
              _context.p = 2;
              if (_this.$refs.clientForm.validateForm()) {
                _context.n = 3;
                break;
              }
              _this.isSubmitting = false;
              return _context.a(2);
            case 3:
              // Get the form data from the ClientForm component
              formData = _this.$refs.clientForm.getFormData(); // Build multipart/form-data to properly send files and handle boolean conversion
              fd = new FormData();
              appendIfDefined = function appendIfDefined(key, value) {
                if (value !== undefined && value !== null && value !== '') {
                  fd.append(key, value);
                }
              }; // Simple scalar fields
              appendIfDefined('codeNumber', formData.codeNumber);
              appendIfDefined('notes', formData.notes);
              appendIfDefined('displayLanguage', formData.displayLanguage);
              appendIfDefined('type', formData.type);
              appendIfDefined('fullName', formData.fullName);
              appendIfDefined('businessName', formData.businessName);
              appendIfDefined('firstName', formData.firstName);
              appendIfDefined('lastName', formData.lastName);
              appendIfDefined('phone', formData.phone);
              appendIfDefined('phoneNumber', formData.phoneNumber);
              appendIfDefined('email', formData.email);
              appendIfDefined('streetAddress1', formData.streetAddress1);
              appendIfDefined('streetAddress2', formData.streetAddress2);
              appendIfDefined('city', formData.city);
              appendIfDefined('state', formData.state);
              appendIfDefined('postalCode', formData.postalCode);
              appendIfDefined('country', formData.country);
              appendIfDefined('neighbourhood', formData.neighbourhood);
              appendIfDefined('commercialRegister', formData.commercialRegister);
              appendIfDefined('taxCard', formData.taxCard);
              appendIfDefined('status', formData.status);

              // Convert boolean values to integers for Laravel validation
              appendIfDefined('isSendEmail', formData.isSendEmail ? 1 : 0);
              appendIfDefined('isSendSMS', formData.isSendSMS ? 1 : 0);

              // Chart of account id (number or object)
              if (formData.chartOfAccountId && _typeof(formData.chartOfAccountId) === 'object' && formData.chartOfAccountId.id) {
                appendIfDefined('chartOfAccountId', formData.chartOfAccountId.id);
              } else {
                appendIfDefined('chartOfAccountId', formData.chartOfAccountId);
              }

              // Image file
              if (formData.image instanceof File) {
                fd.append('image', formData.image);
              }

              // Attachments as files
              if (Array.isArray(formData.attachments)) {
                formData.attachments.forEach(function (file, idx) {
                  if (file instanceof File) {
                    fd.append("attachments[".concat(idx, "]"), file);
                  }
                });
              }

              // Representatives array (as nested fields)
              if (Array.isArray(formData.representatives)) {
                formData.representatives.forEach(function (rep, i) {
                  if (!rep) return;
                  if (rep.name !== undefined && rep.name !== null) fd.append("representatives[".concat(i, "][name]"), rep.name);
                  if (rep.email) fd.append("representatives[".concat(i, "][email]"), rep.email);
                  if (rep.phone) fd.append("representatives[".concat(i, "][phone]"), rep.phone);
                  if (rep.position) fd.append("representatives[".concat(i, "][position]"), rep.position);
                  if (rep.is_primary !== undefined && rep.is_primary !== null) fd.append("representatives[".concat(i, "][is_primary]"), rep.is_primary ? 1 : 0);
                  if (rep.notes) fd.append("representatives[".concat(i, "][notes]"), rep.notes);
                });
              }
              _context.n = 4;
              return _this.$http.post("/api/clients", fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 4:
              response = _context.v;
              if (!response.data.success) {
                _context.n = 5;
                break;
              }
              toast.fire({
                type: "success",
                title: _this.$t("Client added successfully")
              });
              _this.$emit("reloadClients");
              _this.$refs.clientForm.resetForm();
              _this.showClientCreateModal = false;
              _this.form = null; // Reset form reference
              _context.n = 6;
              break;
            case 5:
              throw new Error(response.data.message || 'Failed to create client');
            case 6:
              _context.n = 8;
              break;
            case 7:
              _context.p = 7;
              _t = _context.v;
              console.error("Error creating client:", _t);
              status = _t && _t.response && _t.response.status;
              serverErrors = _t && _t.response && _t.response.data && _t.response.data.errors;
              if (status === 422 && serverErrors && _this.$refs.clientForm && _this.$refs.clientForm.getFormData) {
                // Map backend validation errors into ClientForm's vform errors
                form = _this.$refs.clientForm.getFormData();
                mapped = {};
                Object.keys(serverErrors).forEach(function (key) {
                  var messages = serverErrors[key];
                  if (Array.isArray(messages) && messages.length > 0) {
                    mapped[key] = messages[0];
                    // Also map attachments.* to attachments field for UI display
                    if (key.startsWith('attachments.')) {
                      if (!mapped.attachments) {
                        mapped.attachments = messages[0];
                      }
                    }
                  }
                });
                if (form && form.errors && typeof form.errors.record === 'function') {
                  form.errors.record(mapped);
                }
                // Show toast notification for validation errors
                toast.fire({
                  type: "error",
                  title: _this.$t("Validation Error"),
                  text: _this.$t("Please check the form for errors and try again.")
                });
              } else {
                errorMessage = ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              }
            case 8:
              _context.p = 8;
              _this.isSubmitting = false;
              return _context.f(8);
            case 9:
              return _context.a(2);
          }
        }, _callee, null, [[2, 7, 8, 9]]);
      }))();
    },
    toggleModal: function toggleModal() {
      this.showClientCreateModal = !this.showClientCreateModal;
      // Reset form when opening modal
      if (this.showClientCreateModal) {
        this.form = null;
        this.isSubmitting = false;
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
    }
  }
});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ClientCreateModalvue_type_script_lang_js = (ClientCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6a94e85c&prod&scoped=true&lang=css
var ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css = __webpack_require__(79377);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6a94e85c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css = (ClientCreateModalvue_type_style_index_0_id_6a94e85c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=6a94e85c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ClientCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ClientCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6a94e85c",
  null
  
)

/* harmony default export */ const ClientCreateModal = (component.exports);

/***/ }),

/***/ 13415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-56bbb7fc]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-56bbb7fc]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-56bbb7fc]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-56bbb7fc]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-56bbb7fc]:after{display:none}.form-card .card-header .section-title i[data-v-56bbb7fc]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-56bbb7fc]{padding:16px}.section-title[data-v-56bbb7fc]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-56bbb7fc]{margin-bottom:1rem}.form-group label[data-v-56bbb7fc]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-56bbb7fc]{color:#dc3545;font-weight:700}.row[data-v-56bbb7fc]{margin-bottom:1rem}.row[data-v-56bbb7fc]:last-child{margin-bottom:0}.auto-assign-btn[data-v-56bbb7fc]{min-width:40px;padding:.375rem .5rem;white-space:nowrap}.auto-assign-btn[data-v-56bbb7fc]:disabled{cursor:not-allowed;opacity:.6}.form-text[data-v-56bbb7fc]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-56bbb7fc]{text-align:center}.image-preview img[data-v-56bbb7fc]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-56bbb7fc]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-56bbb7fc]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-56bbb7fc]{color:#6c757d}.create-button[data-v-56bbb7fc]{cursor:pointer;text-decoration:none}@media (max-width:768px){.section-title[data-v-56bbb7fc]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-56bbb7fc]{padding:.75rem}.auto-assign-btn[data-v-56bbb7fc]{font-size:.75rem;min-width:35px}}.input-group-prepend .input-group-text[data-v-56bbb7fc]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-56bbb7fc]{margin-bottom:0}.is-invalid[data-v-56bbb7fc]{border-color:#dc3545!important}.invalid-feedback[data-v-56bbb7fc]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-56bbb7fc]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-56bbb7fc]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-56bbb7fc]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-56bbb7fc]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-56bbb7fc]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-56bbb7fc]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-56bbb7fc]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-56bbb7fc]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-56bbb7fc]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-56bbb7fc]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-56bbb7fc]{flex-direction:column;gap:.5rem}.option-content[data-v-56bbb7fc]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-56bbb7fc]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-56bbb7fc]{font-size:.85rem}.override-checkbox-container .form-check-label[data-v-56bbb7fc]{min-height:44px;padding:.6rem .8rem}.checkbox-text[data-v-56bbb7fc]{font-size:.9rem}.form-check-input[data-v-56bbb7fc]{height:16px;width:16px}}.form-check-input[data-v-56bbb7fc]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-color:#fff;border:2px solid #ced4da;border-radius:4px;cursor:pointer;height:18px;margin-right:.75rem;margin-top:.1rem;position:relative;transition:all .2s ease;width:18px}.form-check-input[data-v-56bbb7fc]:checked{background-color:#33a0d9;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:12px;border-color:#33a0d9}.form-check-input[data-v-56bbb7fc]:focus,.form-check-input[data-v-56bbb7fc]:hover{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-check-input[data-v-56bbb7fc]:focus{outline:none}.form-check-label[data-v-56bbb7fc]{align-items:center;background-color:#f8f9fa;border:1px solid #e9ecef;border-radius:6px;color:#495057;cursor:pointer;display:flex;font-weight:600;margin-bottom:0;padding:.5rem .75rem;transition:all .2s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.form-check-label[data-v-56bbb7fc]:hover{background-color:#e3f2fd;border-color:#33a0d9;box-shadow:0 2px 4px rgba(51,160,217,.1);color:#33a0d9;transform:translateY(-1px)}.form-check-label[data-v-56bbb7fc]:active{box-shadow:0 1px 2px rgba(51,160,217,.1);transform:translateY(0)}.override-checkbox-container[data-v-56bbb7fc]{align-items:center;display:flex}.checkbox-text[data-v-56bbb7fc]{color:#495057;font-size:.95rem;font-weight:600;margin-left:.5rem;padding:0 26px}.override-checkbox-container .form-check-label[data-v-56bbb7fc]{background:linear-gradient(135deg,#f8f9fa,#fff);border:2px solid #e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.05);min-height:48px;padding:.75rem 1rem}.override-checkbox-container .form-check-label[data-v-56bbb7fc]:hover{background:linear-gradient(135deg,#e3f2fd,#f0f8ff);border-color:#33a0d9;box-shadow:0 4px 8px rgba(51,160,217,.15)}.override-checkbox-container .form-check-label[data-v-56bbb7fc]:has(.form-check-input:checked){background:linear-gradient(135deg,#e8f5e8,#f0fff0);border-color:#28a745;color:#155724}.override-checkbox-container .form-check-label:has(.form-check-input:checked) .checkbox-text[data-v-56bbb7fc]{color:#155724;font-weight:700}.alert-info[data-v-56bbb7fc]{background-color:#d1ecf1;border-color:#bee5eb;border-radius:.375rem;font-size:.9rem;padding:.75rem 1rem}.alert-info[data-v-56bbb7fc],.alert-info i[data-v-56bbb7fc]{color:#0c5460}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 43641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ invoice)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=template&id=4c6861ea&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12 col-xl-12"
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
        name: 'quotations.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t("Back")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'invoiceCreateForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('ChartOfAccountValidation', {
    attrs: {
      "client": _vm.form.client,
      "products": _vm.form.selectedProducts,
      "type": "invoice"
    },
    on: {
      "chart-of-account-assigned": _vm.handleChartOfAccountAssigned
    }
  }), _vm._v(" "), _c('form', {
    attrs: {
      "id": "invoiceCreateForm"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.createInvoice.apply(null, arguments);
      }
    }
  }, [_vm.items ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t("Client")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('client')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _c('ClientCreateModal', {
    on: {
      "reloadClients": function reloadClients($event) {
        return _vm.getClients('latest');
      }
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _vm.form.client ? _c('div', {
    staticClass: "client-status mt-2"
  }, [!_vm.form.client.chart_of_account_id ? _c('div', {
    staticClass: "client-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Client needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningClient
    },
    on: {
      "click": _vm.autoAssignClientChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningClient ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                          " + _vm._s(_vm.isAutoAssigningClient ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                        ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "reference"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Reference")) + "\n                  ")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.reference,
      expression: "form.reference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('reference')
    },
    attrs: {
      "id": "reference",
      "type": "text",
      "name": "reference",
      "placeholder": _vm.$t('Enter reference')
    },
    domProps: {
      "value": _vm.form.reference
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "reference", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('reference');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "reference"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.products ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t("Select Items")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col"
  }, [_c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('selectedProducts')
    },
    attrs: {
      "options": _vm.products,
      "label": "label",
      "name": "product",
      "placeholder": _vm.$t('Search Items')
    },
    on: {
      "input": function input($event) {
        return _vm.storeProduct(_vm.form.product);
      }
    },
    model: {
      value: _vm.form.product,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "product", $$v);
      },
      expression: "form.product"
    }
  }), _vm._v(" "), _c('ProductCreateModal', {
    on: {
      "reloadProducts": _vm.getProducts,
      "productCreated": _vm.handleProductCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _vm.form.product ? _c('div', {
    staticClass: "product-status mt-2"
  }, [!_vm.form.product.sales_account_id ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.product.name) + "\" " + _vm._s(_vm.$t('needs Sales Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningProduct === _vm.form.product.id
    },
    on: {
      "click": function click($event) {
        return _vm.autoAssignProductChartOfAccount(_vm.form.product, 'sales');
      }
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningProduct === _vm.form.product.id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                          " + _vm._s(_vm.isAutoAssigningProduct === _vm.form.product.id ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                        ")])]) : !_vm.form.product.productTax || !_vm.form.product.productTax.id ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.product.name) + "\" " + _vm._s(_vm.$t('needs VAT Rate')))])]) : _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 && _vm.form.selectedProducts[0].sales_account_id ? _c('div', {
    staticClass: "product-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Product')) + " \"" + _vm._s(_vm.form.selectedProducts[0].name) + "\" " + _vm._s(_vm.$t('Sales Account ready')))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  }), _vm._v(" "), !_vm.form.selectedProducts || _vm.form.selectedProducts.length === 0 ? _c('div', {
    staticClass: "text-warning mt-1"
  }, [_c('small', [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v(" " + _vm._s(_vm.$t('At least one product must be selected')))])]) : _vm._e()], 1)])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-95 m-auto"
  }, [_c('table', {
    staticClass: "table table-hover table-sm text-center invoices-create-table"
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]), _vm._v(" "), _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.form.selectedProducts, function (item, index) {
    return _c('tr', {
      key: "item-".concat(index)
    }, [_c('td', {
      staticStyle: {
        "min-width": "50px"
      }
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "100px"
      }
    }, [_vm._v("\n                        " + _vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)) + "\n                      ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product' ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Click to manage stock'),
        expression: "$t('Click to manage stock')"
      }],
      staticClass: "badge badge-danger p-2 mr-2 clickable-badge",
      on: {
        "click": function click($event) {
          return _vm.openStockAdjustmentModal(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-exclamation"
    })]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "flex-grow-1"
    }, [_vm.$can('product-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'products.show',
          params: {
            slug: item.slug
          }
        }
      }
    }, [_vm._v("\n                              " + _vm._s(item.name) + "\n                            ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('button', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Edit Product'),
        expression: "$t('Edit Product')"
      }],
      staticClass: "btn btn-sm btn-outline-primary ml-2",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.editProductFromTable(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })])])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "120px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(item.qty, 'qty', index, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item.qty,
        expression: "item.qty",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0 incrementor",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(index, ".qty")),
        'insufficient-stock-input': Number(item.inventoryCount) < Number(item.qty) && item.itemType == 'product'
      },
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(index + 1),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": item.itemType == 'product' ? item.inventoryCount : null,
        "placeholder": "Quantity"
      },
      domProps: {
        "value": item.qty
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "qty", _vm._n($event.target.value));
        }, function ($event) {
          return _vm.generateItemTotal(item.qty, 'qty', index, '');
        }],
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), _c('input', {
      staticClass: "button-plus icon-shape icon-sm btn-primary",
      attrs: {
        "type": "button",
        "value": "+",
        "data-field": "quantity"
      },
      on: {
        "click": function click($event) {
          return _vm.generateItemTotal(item.qty, 'qty', index, 'increment');
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(index, ".qty")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(index, ".qty"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.unitPrice,
        expression: "item.unitPrice"
      }],
      staticClass: "quantity-field border-0",
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "id": "unitPrice-".concat(index + 1),
        "name": "unitPrice",
        "required": ""
      },
      domProps: {
        "value": item.unitPrice
      },
      on: {
        "change": function change($event) {
          return _vm.generateItemTotal($event.target.value, 'price', index, '');
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "unitPrice", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(index, ".unitPrice")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(index, ".unitPrice"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalBeforeDiscount)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "180px"
      }
    }, [_c('div', {
      staticClass: "input-group"
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.discountType,
        expression: "item.discountType"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(index, ".discountType"))
      },
      staticStyle: {
        "width": "85px"
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.calculateProductDiscount(index);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": "fixed"
      }
    }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "percentage"
      }
    }, [_vm._v(_vm._s(_vm.$t("%")))])]), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.discount,
        expression: "item.discount"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(index, ".discount"))
      },
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : item.unitPrice * item.qty,
        "placeholder": "0"
      },
      domProps: {
        "value": item.discount
      },
      on: {
        "change": function change($event) {
          return _vm.calculateProductDiscount(index);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(index, ".discount")) || _vm.form.errors.has("selectedProducts.".concat(index, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.form.errors.has("selectedProducts.".concat(index, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(index, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(index, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.form.errors.get("selectedProducts.".concat(index, ".discountType"))))]) : _vm._e()]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalAfterDiscount)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "150px"
      }
    }, [_c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.form.errors.has("selectedProducts.".concat(index, ".selectedVatRate"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "selectedVatRate", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.calculateProductVat(index);
        }]
      }
    }, [_c('option', {
      attrs: {
        "value": ""
      }
    }, [_vm._v(_vm._s(_vm.$t('Select VAT')))]), _vm._v(" "), _vm._l(_vm.taxes, function (tax) {
      return _c('option', {
        key: tax.id,
        domProps: {
          "value": tax
        }
      }, [_vm._v("\n                            " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                          ")]);
    })], 2), _vm._v(" "), _vm.form.errors.has("selectedProducts.".concat(index, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                          " + _vm._s(_vm.form.errors.get("selectedProducts.".concat(index, ".selectedVatRate"))) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "100px"
      }
    }, [_c('span', {
      staticClass: "form-control-plaintext form-control-sm text-center no-currency"
    }, [_vm._v("\n                          " + _vm._s(_vm.formatToTwoDecimals(item.productTax)) + "\n                        ")]), _vm._v(" "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency",
      staticStyle: {
        "min-width": "120px"
      }
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalPrice)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), _c('td', {
      staticClass: "text-right",
      staticStyle: {
        "min-width": "80px"
      }
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeItem(item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])])]);
  }), _vm._v(" "), _c('tr', {
    key: "totals"
  }, [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": "5"
    }
  }, [_c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.toWord()) + " ")])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.getTotalUnitPrice())) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.getTotalDiscount())) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.getTotalAfterDiscount())) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.getProductTotalTax())) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td', [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.getSubTotal())) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('td')])], 2)])])]) : _vm._e(), _vm._v(" "), _vm.hasInsufficientStock ? _c('div', {
    staticClass: "row mt-3 mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-warning d-flex align-items-center",
    attrs: {
      "role": "alert"
    }
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle mr-3",
    staticStyle: {
      "font-size": "1.5rem"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex-grow-1"
  }, [_c('h6', {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.$t("Insufficient Stock Alert")))]), _vm._v(" "), _c('p', {
    staticClass: "mb-0"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Some products have insufficient stock. Click on the red badges to manage stock levels.")) + "\n                      "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.showAllInsufficientStock
    }
  }, [_c('i', {
    staticClass: "fas fa-list mr-1"
  }), _vm._v("\n                        " + _vm._s(_vm.$t("View All")) + "\n                      ")])])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [!_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "discountType"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount Type')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discountType,
      expression: "form.discountType"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discountType')
    },
    attrs: {
      "id": "discountType",
      "step": "any",
      "name": "discountType"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "discountType", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.calculateSum],
      "keyup": _vm.calculateSum
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('Fixed')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Percentage')) + "(%)")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discountType"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group",
    "class": _vm.form.discountType == 1 ? 'col-md-2' : 'col-md-4'
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Discount')) + "\n                  "), _vm.form.discountType == 1 ? _c('span', [_vm._v("(%)")]) : _vm._e()]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "id": "discount",
      "type": "number",
      "step": "any",
      "min": "1",
      "max": _vm.form.discountType == 1 ? 100 : _vm.form.netTotal,
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.form.discountType == 1 && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-2"
  }, [_c('label', {
    attrs: {
      "for": "totalDiscount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total discount')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalDiscount,
      expression: "form.totalDiscount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('totalDiscount')
    },
    attrs: {
      "id": "totalDiscount",
      "type": "number",
      "step": "any",
      "name": "totalDiscount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalDiscount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalDiscount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalDiscount"
    }
  })], 1) : _vm._e(), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t('Transport Cost')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transportCost,
      expression: "form.transportCost"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('transportCost')
    },
    attrs: {
      "id": "transportCost",
      "type": "number",
      "step": "any",
      "min": "1",
      "name": "transportCost",
      "placeholder": _vm.$t('Enter transport cost')
    },
    domProps: {
      "value": _vm.form.transportCost
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transportCost", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "transportCost"
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.taxes ? _c('div', {
    staticClass: "form-group col-md-4",
    staticStyle: {
      "display": "none"
    }
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Invoice Tax')) + "\n                  "), !_vm.isSaudiArabia ? _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('orderTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "orderTax",
      "placeholder": _vm.$t('Select a tax type')
    },
    on: {
      "input": _vm.calculateSum
    },
    model: {
      value: _vm.form.orderTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "orderTax", $$v);
      },
      expression: "form.orderTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "orderTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.taxes ? _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "totalTax"
    }
  }, [_vm._v(_vm._s(_vm.$t('Total Tax')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalTax,
      expression: "form.totalTax"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('totalTax')
    },
    attrs: {
      "id": "totalTax",
      "type": "text",
      "name": "totalTax",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalTax
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalTax", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "totalTax"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "netTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t('Net Total')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.netTotal,
      expression: "form.netTotal"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('netTotal')
    },
    attrs: {
      "id": "netTotal",
      "type": "number",
      "step": "any",
      "name": "netTotal",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.netTotal
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "netTotal", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "netTotal"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "poReference"
    }
  }, [_vm._v(_vm._s(_vm.$t('PO Reference')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.poReference,
      expression: "form.poReference"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('poReference')
    },
    attrs: {
      "id": "poReference",
      "type": "text",
      "step": "any",
      "name": "poReference",
      "placeholder": _vm.$t('Enter PO reference')
    },
    domProps: {
      "value": _vm.form.poReference
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poReference", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poReference"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paymentTerms"
    }
  }, [_vm._v(_vm._s(_vm.$t('Payment Terms')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentTerms,
      expression: "form.paymentTerms"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentTerms')
    },
    attrs: {
      "id": "paymentTerms",
      "type": "text",
      "name": "paymentTerms",
      "placeholder": _vm.$t('Enter payment terms')
    },
    domProps: {
      "value": _vm.form.paymentTerms
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentTerms", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentTerms"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "addPayment"
    }
  }, [_vm._v(_vm._s(_vm.$t('Add Payment?')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.addPayment,
      expression: "form.addPayment"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('addPayment')
    },
    attrs: {
      "id": "addPayment",
      "name": "addPayment"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "addPayment", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "disabled": ""
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t('Select an option')) + "\n                  ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t('Yes')))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t('No')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "addPayment"
    }
  })], 1)]), _vm._v(" "), _vm.form.addPayment == 1 && _vm.accounts && _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('account')
    },
    attrs: {
      "options": _vm.accounts,
      "label": "label",
      "name": "account",
      "placeholder": _vm.$t('Select an account')
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(option) {
        return [_c('img', {
          staticStyle: {
            "width": "30px",
            "height": "30px"
          },
          attrs: {
            "src": option.image
          }
        }), _vm._v("\n                      " + _vm._s(option.label) + "\n                  ")];
      }
    }], null, false, 3023951659),
    model: {
      value: _vm.form.account,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "account", $$v);
      },
      expression: "form.account"
    }
  }), _vm._v(" "), _vm.form.account ? _c('div', {
    staticClass: "account-status mt-2"
  }, [!_vm.form.account.chartOfAccountId ? _c('div', {
    staticClass: "account-warning"
  }, [_c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Bank Account needs Chart of Account')))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningAccount
    },
    on: {
      "click": _vm.autoAssignBankAccountChartOfAccount
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningAccount ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                      " + _vm._s(_vm.isAutoAssigningAccount ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n                    ")])]) : _c('div', {
    staticClass: "account-success"
  }, [_c('i', {
    staticClass: "fas fa-check-circle text-success"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.$t('Bank Account Chart of Account ready')))])])]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  }), _vm._v(" "), _vm.form.addPayment == 1 && !_vm.form.account ? _c('div', {
    staticClass: "text-warning mt-1"
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("Please choose a bank account")))])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paidAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t('Paid Amount'))), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paidAmount,
      expression: "form.paidAmount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paidAmount')
    },
    attrs: {
      "id": "paidAmount",
      "type": "number",
      "step": "any",
      "name": "paidAmount",
      "min": "1",
      "max": _vm.form.netTotal,
      "placeholder": _vm.$t('Enter an amount')
    },
    domProps: {
      "value": _vm.form.paidAmount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paidAmount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paidAmount"
    }
  }), _vm._v(" "), _vm.form.addPayment == 1 && (!_vm.form.paidAmount || Number(_vm.form.paidAmount) <= 0) ? _c('div', {
    staticClass: "text-warning mt-1"
  }, [_c('small', [_vm._v(_vm._s(_vm.$t("Paid amount must be greater than 0")))])]) : _vm._e(), _vm._v(" "), _vm.form.addPayment == 1 && _vm.form.paidAmount ? _c('div', {
    staticClass: "mt-2"
  }, [_c('small', {
    staticClass: "text-muted"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Due Amount")) + ": "), _c('strong', [_vm._v(_vm._s(_vm.dueAmount) + " "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t('Receipt No')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.receiptNo,
      expression: "form.receiptNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('receiptNo')
    },
    attrs: {
      "id": "receiptNo",
      "type": "text",
      "name": "receiptNo",
      "placeholder": _vm.$t('Enter a receipt no')
    },
    domProps: {
      "value": _vm.form.receiptNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "receiptNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "receiptNo"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "deliveryPlace"
    }
  }, [_vm._v(_vm._s(_vm.$t('Delivery Place')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.deliveryPlace,
      expression: "form.deliveryPlace"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('deliveryPlace')
    },
    attrs: {
      "id": "deliveryPlace",
      "type": "text",
      "name": "deliveryPlace",
      "placeholder": _vm.$t('Enter a delivery place')
    },
    domProps: {
      "value": _vm.form.deliveryPlace
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deliveryPlace", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deliveryPlace"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
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
  })], 1), _vm._v(" "), !_vm.isSaudiArabia ? _c('div', {
    staticClass: "form-group col-md-4"
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group text-right"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    "class": {
      'btn-warning': !_vm.isFormReady
    },
    attrs: {
      "type": "submit",
      "disabled": !_vm.isFormReady || _vm.form.busy
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    "class": _vm.isFormReady ? 'fas fa-save' : 'fas fa-times'
  }), _vm._v(" \n                " + _vm._s(_vm.form.busy ? _vm.$t('Saving...') : _vm.isFormReady ? _vm.$t('Save') : _vm.$t('Complete Required Fields')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info ml-2",
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
  }), _vm._v(" " + _vm._s(_vm.$t('Reset')) + "\n              ")])])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-4 debug-panel"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-primary"
  }, [_vm._v("Individual Item Calculations:")]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', _vm._l(_vm.form.selectedProducts, function (item, index) {
    return _c('div', {
      key: "debug-item-".concat(index),
      staticClass: "alert alert-light border-left-primary"
    }, [_c('h6', {
      staticClass: "mb-2"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("Subtotal:")]), _vm._v(" " + _vm._s(item.unitPrice) + " × " + _vm._s(item.qty) + " = " + _vm._s(item.totalBeforeDiscount) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("Discount Type:")]), _vm._v(" " + _vm._s(item.discountType || 'fixed') + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("Discount Amount:")]), _vm._v(" " + _vm._s(item.discountAmount || 0) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("After Discount:")]), _vm._v(" " + _vm._s(item.totalAfterDiscount) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("VAT Rate ID:")]), _vm._v(" "), _c('span', {
      "class": item.vat_rate_id ? 'badge badge-success' : 'badge badge-warning'
    }, [_vm._v("\n                        " + _vm._s(item.vat_rate_id || 'Not Set') + "\n                      ")])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-2"
    }, [_c('strong', [_vm._v("VAT:")]), _vm._v(" " + _vm._s(item.totalTax) + "\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("VAT Code:")]), _vm._v(" " + _vm._s(item.selectedVatRate ? item.selectedVatRate.code : 'Not Set') + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("VAT %:")]), _vm._v(" " + _vm._s(item.selectedVatRate ? item.selectedVatRate.rate : 0) + "%\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("Product Tax:")]), _vm._v(" " + _vm._s(item.productTax) + "\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_c('strong', [_vm._v("Total with VAT:")]), _vm._v(" " + _vm._s(item.totalPrice) + "\n                    ")])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('strong', [_vm._v("VAT Type Calculation:")]), _vm._v(" "), _c('span', {
      staticClass: "badge badge-info"
    }, [_vm._v(_vm._s(_vm.getVatTypeInfo(item).formula))]), _vm._v(" "), _c('small', {
      staticClass: "text-muted ml-2"
    }, [_vm._v("(VAT Amount ÷ Total After Discount = VAT Type %)")])])]), _vm._v(" "), _c('div', {
      staticClass: "row mt-2"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('strong', [_vm._v("Total with VAT:")]), _vm._v(" " + _vm._s(item.totalPrice) + "\n                    ")])])]);
  }), 0) : _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                No products selected\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-success"
  }, [_vm._v("Summary Totals:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Unit Price")]), _vm._v(" "), _c('h4', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.getTotalUnitPrice()))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.getTotalDiscount()))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total After Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.getTotalAfterDiscount()))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Tax")]), _vm._v(" "), _c('h4', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.getProductTotalTax()))])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-info"
  }, [_vm._v("Form Values:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.subTotal:")]), _vm._v(" " + _vm._s(_vm.form.subTotal) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.totalDiscount:")]), _vm._v(" " + _vm._s(_vm.form.totalDiscount) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.totalTax:")]), _vm._v(" " + _vm._s(_vm.form.totalTax) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('strong', [_vm._v("form.netTotal:")]), _vm._v(" " + _vm._s(_vm.form.netTotal) + "\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-warning"
  }, [_vm._v("Template Display:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('strong', [_vm._v("Summary Final Total:")]), _vm._v(" " + _vm._s(_vm.getSubTotal()) + ".00\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.toWord()) + "\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-dark"
  }, [_vm._v("Calculation Steps:")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("Sum of all item totals = " + _vm._s(_vm.getSubTotal()))]), _vm._v(" "), _c('li', [_vm._v("form.netTotal = " + _vm._s(_vm.form.netTotal))]), _vm._v(" "), _c('li', [_vm._v("Are they equal? \n                  "), _c('span', {
    "class": _vm.getSubTotal() === _vm.form.netTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                    " + _vm._s(_vm.getSubTotal() === _vm.form.netTotal ? '✅ YES' : '❌ NO') + "\n                  ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-danger"
  }, [_vm._v("VAT Information from Quotation Products:")]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-sm"
  }, [_vm._m(2), _vm._v(" "), _c('tbody', _vm._l(_vm.getQuotationProductVatRates(), function (vat) {
    return _c('tr', {
      key: "vat-".concat(vat.index)
    }, [_c('td', [_vm._v(_vm._s(vat.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.productCode))]), _vm._v(" "), _c('td', [_c('span', {
      "class": vat.vatRateId ? 'badge badge-success' : 'badge badge-warning'
    }, [_vm._v("\n                            " + _vm._s(vat.vatRateId || 'Not Set') + "\n                          ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.vatRateCode))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.vatRatePercentage) + "%")]), _vm._v(" "), _c('td', [_c('span', {
      staticClass: "badge badge-info"
    }, [_vm._v("\n                            " + _vm._s(_vm.calculateVatTypePercentage(_vm.form.selectedProducts[vat.index])) + "%\n                          ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.productTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.totalTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.totalAfterDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(vat.totalPrice))])]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total VAT")]), _vm._v(" "), _c('h4', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.getVatSummary().totalVat))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Items with VAT")]), _vm._v(" "), _c('h4', {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.getVatSummary().itemsWithVat) + " / " + _vm._s(_vm.getVatSummary().totalItems))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Items without VAT")]), _vm._v(" "), _c('h4', {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.getVatSummary().itemsWithoutVat))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("VAT Rate Groups")]), _vm._v(" "), _c('h4', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.getVatSummary().vatRateGroups.length))])])])])]), _vm._v(" "), _vm.getVatSummary().vatRateGroups.length > 0 ? _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h6', {
    staticClass: "text-primary"
  }, [_vm._v("VAT Rate Groups Breakdown:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, _vm._l(_vm.getVatSummary().vatRateGroups, function (group) {
    return _c('div', {
      key: "group-".concat(group.vatRateId),
      staticClass: "col-md-4 mb-2"
    }, [_c('div', {
      staticClass: "card bg-light"
    }, [_c('div', {
      staticClass: "card-body text-center"
    }, [_c('h6', [_vm._v(_vm._s(group.vatRateCode) + " (" + _vm._s(group.vatRatePercentage) + "%)")]), _vm._v(" "), _c('p', {
      staticClass: "mb-1"
    }, [_vm._v("Items: " + _vm._s(group.count))]), _vm._v(" "), _c('p', {
      staticClass: "mb-0"
    }, [_vm._v("Total Tax: " + _vm._s(group.totalTax))])])])]);
  }), 0)])]) : _vm._e()]) : _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                No products selected\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-warning"
  }, [_vm._v("Discount Information from Quotation Products:")]), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', [_c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-sm"
  }, [_vm._m(3), _vm._v(" "), _c('tbody', _vm._l(_vm.getQuotationProductDiscounts(), function (discount) {
    return _c('tr', {
      key: "discount-".concat(discount.index)
    }, [_c('td', [_vm._v(_vm._s(discount.productName))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.productCode))]), _vm._v(" "), _c('td', [_c('span', {
      "class": discount.discountType === 'percentage' ? 'badge badge-info' : 'badge badge-primary'
    }, [_vm._v("\n                            " + _vm._s(discount.discountType) + "\n                          ")])]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.discountAmount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.totalBeforeDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(discount.totalAfterDiscount))])]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "row mt-3"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Total Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-warning"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().totalDiscount))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Items with Discount")]), _vm._v(" "), _c('h4', {
    staticClass: "text-info"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().itemsWithDiscount) + " / " + _vm._s(_vm.getDiscountSummary().totalItems))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Fixed Discounts")]), _vm._v(" "), _c('h4', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().fixedDiscounts.length))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card bg-light"
  }, [_c('div', {
    staticClass: "card-body text-center"
  }, [_c('h6', [_vm._v("Percentage Discounts")]), _vm._v(" "), _c('h4', {
    staticClass: "text-success"
  }, [_vm._v(_vm._s(_vm.getDiscountSummary().percentageDiscounts.length))])])])])])]) : _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                No products selected\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row mb-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-secondary"
  }, [_vm._v("Current State:")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Selected Products Count:")]), _vm._v(" " + _vm._s(_vm.form.selectedProducts ? _vm.form.selectedProducts.length : 0) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Is Saudi Arabia:")]), _vm._v(" " + _vm._s(_vm.isSaudiArabia ? 'true' : 'false') + "\n                ")]), _vm._v(" "), _vm._m(4)])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('h5', {
    staticClass: "text-primary"
  }, [_vm._v("Summary Table Comparison:")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-bordered table-sm"
  }, [_vm._m(5), _vm._v(" "), _c('tbody', [_c('tr', [_vm._m(6), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalUnitPrice()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.subTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalUnitPrice()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getTotalUnitPrice() === _vm.form.subTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getTotalUnitPrice() === _vm.form.subTotal ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(7), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalDiscount()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.totalDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalDiscount()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getTotalDiscount() === _vm.form.totalDiscount ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getTotalDiscount() === _vm.form.totalDiscount ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(8), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalAfterDiscount()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.subTotal - _vm.form.totalDiscount))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getTotalAfterDiscount()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getTotalAfterDiscount() === _vm.form.subTotal - _vm.form.totalDiscount ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getTotalAfterDiscount() === _vm.form.subTotal - _vm.form.totalDiscount ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(9), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getProductTotalTax()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.totalTax))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getProductTotalTax()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getProductTotalTax() === _vm.form.totalTax ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getProductTotalTax() === _vm.form.totalTax ? '✅' : '❌') + "\n                        ")])])]), _vm._v(" "), _c('tr', [_vm._m(10), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getSubTotal()))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.form.netTotal))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.getSubTotal()) + ".00")]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.getSubTotal() === _vm.form.netTotal ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                          " + _vm._s(_vm.getSubTotal() === _vm.form.netTotal ? '✅' : '❌') + "\n                        ")])])])])])])])])])])])])]), _vm._v(" "), _c('ProductEditModal', {
    ref: "productEditModal",
    on: {
      "reloadProducts": _vm.getProducts,
      "productUpdated": _vm.handleProductUpdated
    }
  }), _vm._v(" "), _c('StockAdjustmentModal', {
    attrs: {
      "is-open": _vm.showStockAdjustmentModal,
      "product": _vm.selectedProductForStockAdjustment
    },
    on: {
      "close": _vm.closeStockAdjustmentModal,
      "adjust-quantity": _vm.adjustProductQuantity,
      "stock-updated": _vm.handleStockUpdated
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong')]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-header bg-info text-white"
  }, [_c('h4', {
    staticClass: "card-title mb-0"
  }, [_vm._v("\n            🔍 Debug Panel - Calculation Steps\n            "), _c('span', {
    staticClass: "badge badge-light ml-2"
  }, [_vm._v("DEBUG MODE ACTIVE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Product")]), _vm._v(" "), _c('th', [_vm._v("Code")]), _vm._v(" "), _c('th', [_vm._v("VAT Rate ID")]), _vm._v(" "), _c('th', [_vm._v("VAT Code")]), _vm._v(" "), _c('th', [_vm._v("VAT %")]), _vm._v(" "), _c('th', [_vm._v("VAT Type %")]), _vm._v(" "), _c('th', [_vm._v("Product Tax")]), _vm._v(" "), _c('th', [_vm._v("Total Tax")]), _vm._v(" "), _c('th', [_vm._v("After Discount")]), _vm._v(" "), _c('th', [_vm._v("Total with VAT")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Product")]), _vm._v(" "), _c('th', [_vm._v("Code")]), _vm._v(" "), _c('th', [_vm._v("Discount Type")]), _vm._v(" "), _c('th', [_vm._v("Discount Amount")]), _vm._v(" "), _c('th', [_vm._v("Before Discount")]), _vm._v(" "), _c('th', [_vm._v("After Discount")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-md-4"
  }, [_c('strong', [_vm._v("Debug Panel Visible:")]), _vm._v(" ✅ YES\n                ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Value")]), _vm._v(" "), _c('th', [_vm._v("Computed Property")]), _vm._v(" "), _c('th', [_vm._v("Form Value")]), _vm._v(" "), _c('th', [_vm._v("Template Display")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Subtotal")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Discount")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("After Discount")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Tax")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('td', [_c('strong', [_vm._v("Final Total")])]);
}];

;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=template&id=4c6861ea&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=template&id=0ebdcb7a&scoped=true
var ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.validationErrors.length > 0 ? _c('div', {
    staticClass: "alert alert-warning"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t('Chart of Account Validation Required')))])]), _vm._v(" "), _c('hr', {
    staticClass: "my-2"
  }), _vm._v(" "), _c('div', {
    staticClass: "validation-errors"
  }, _vm._l(_vm.validationErrors, function (error, index) {
    return _c('div', {
      key: index,
      staticClass: "validation-error mb-2"
    }, [_c('div', {
      staticClass: "d-flex align-items-center justify-content-between"
    }, [_c('span', {
      staticClass: "text-danger"
    }, [_c('i', {
      staticClass: "fas fa-times-circle mr-1"
    }), _vm._v("\n          " + _vm._s(error.message) + "\n        ")]), _vm._v(" "), _c('div', {
      staticClass: "validation-actions"
    }, [error.editUrl ? _c('router-link', {
      staticClass: "btn btn-sm btn-outline-primary mr-2",
      attrs: {
        "to": error.editUrl,
        "target": "_blank",
        "type": "button"
      }
    }, [_c('i', {
      staticClass: "fas fa-edit mr-1"
    }), _vm._v("\n            " + _vm._s(_vm.$t('Edit')) + "\n          ")]) : _vm._e(), _vm._v(" "), error.autoAssignUrl ? _c('button', {
      staticClass: "btn btn-sm btn-outline-success",
      attrs: {
        "type": "button",
        "disabled": error.isAutoAssigning
      },
      on: {
        "click": function click($event) {
          return _vm.autoAssignChartOfAccount(error);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-magic mr-1"
    }), _vm._v("\n            " + _vm._s(error.isAutoAssigning ? _vm.$t('Assigning...') : _vm.$t('Auto-Assign')) + "\n          ")]) : _vm._e()], 1)]), _vm._v(" "), error.context ? _c('small', {
      staticClass: "text-muted d-block mt-1"
    }, [_vm._v("\n        " + _vm._s(error.context) + "\n      ")]) : _vm._e()]);
  }), 0)]) : _vm._e();
};
var ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }

/* harmony default export */ const ChartOfAccountValidationvue_type_script_lang_js = ({
  name: 'ChartOfAccountValidation',
  props: {
    client: {
      type: Object,
      "default": null
    },
    products: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    allProducts: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    supplier: {
      type: Object,
      "default": null
    },
    type: {
      type: String,
      "default": 'invoice',
      // 'invoice', 'purchase'
      validator: function validator(value) {
        return ['invoice', 'purchase'].includes(value);
      }
    }
  },
  data: function data() {
    return {
      autoAssigning: {}
    };
  },
  mounted: function mounted() {},
  watch: {
    client: {
      handler: function handler(newVal, oldVal) {
        console.log('Client changed:', {
          "new": newVal,
          old: oldVal
        });
      },
      deep: true
    },
    products: {
      handler: function handler(newVal, oldVal) {
        console.log('Products changed:', {
          "new": newVal,
          old: oldVal
        });
      },
      deep: true
    },
    allProducts: {
      handler: function handler(newVal, oldVal) {
        console.log('AllProducts changed:', {
          "new": newVal === null || newVal === void 0 ? void 0 : newVal.length,
          old: oldVal === null || oldVal === void 0 ? void 0 : oldVal.length
        });
        // Force re-computation of validation errors when allProducts changes
        this.$forceUpdate();
      },
      deep: true
    }
  },
  computed: {
    validationErrors: function validationErrors() {
      var _this = this;
      var errors = [];

      // Check if we have data to validate
      if (!this.client && !this.products) {
        return errors;
      }

      // Validate client (for invoices)
      if (this.type === 'invoice' && this.client && _typeof(this.client) === 'object') {
        if (!this.client.chart_of_account_id) {
          errors.push({
            message: this.$t('Client must have a Chart of Account assigned for journal entries'),
            field: 'client',
            entity: 'client',
            entityId: this.client.id,
            entitySlug: this.client.slug,
            editUrl: {
              name: 'clients.edit',
              params: {
                slug: this.client.slug
              }
            },
            autoAssignUrl: "/api/clients/".concat(this.client.slug, "/auto-assign-chart-of-account"),
            context: "Client: ".concat(this.client.name)
          });
        }
      }

      // Validate supplier (for purchases)
      if (this.type === 'purchase' && this.supplier && _typeof(this.supplier) === 'object') {
        if (!this.supplier.chart_of_account_id) {
          errors.push({
            message: this.$t('Supplier must have a Chart of Account assigned for journal entries'),
            field: 'supplier',
            entity: 'supplier',
            entityId: this.supplier.id,
            entitySlug: this.supplier.slug,
            editUrl: {
              name: 'suppliers.edit',
              params: {
                slug: this.supplier.slug
              }
            },
            autoAssignUrl: "/api/suppliers/".concat(this.supplier.slug, "/auto-assign-chart-of-account"),
            context: "Supplier: ".concat(this.supplier.name)
          });
        }
      }

      // Validate products
      if (this.products && Array.isArray(this.products) && this.products.length > 0) {
        console.log('Validating products array:', this.products);
        this.products.forEach(function (product, index) {
          if (product && _typeof(product) === 'object') {
            // Get the latest product data from allProducts to check chart of accounts
            var latestProduct = _this.allProducts.find(function (p) {
              return p.id === product.id;
            });
            var salesAccountId = latestProduct ? latestProduct.sales_account_id : product.sales_account_id;
            var purchaseAccountId = latestProduct ? latestProduct.purchase_account_id : product.purchase_account_id;
            console.log("Validating product ".concat(index + 1, ":"), product);
            console.log("Product ".concat(index + 1, " latest sales_account_id:"), salesAccountId);
            console.log("Product ".concat(index + 1, " latest purchase_account_id:"), purchaseAccountId);
            if (_this.type === 'invoice' && !salesAccountId) {
              console.log("Product ".concat(index + 1, " missing sales account"));
              errors.push({
                message: _this.$t('Product must have a Sales Account assigned for journal entries'),
                field: 'sales_account_id',
                entity: 'product',
                entityId: product.id,
                entitySlug: product.slug,
                editUrl: {
                  name: 'products.edit',
                  params: {
                    slug: product.slug
                  }
                },
                autoAssignUrl: "/api/products/".concat(product.slug, "/auto-assign-chart-of-account"),
                context: "Product ".concat(index + 1, ": ").concat(product.name || 'Unknown')
              });
            } else if (_this.type === 'invoice') {
              console.log("Product ".concat(index + 1, " has sales account:"), salesAccountId);
            }
            if (_this.type === 'purchase' && !purchaseAccountId) {
              errors.push({
                message: _this.$t('Product must have a Purchase Account assigned for journal entries'),
                field: 'purchase_account_id',
                entity: 'product',
                entityId: product.id,
                entitySlug: product.slug,
                editUrl: {
                  name: 'products.edit',
                  params: {
                    slug: product.slug
                  }
                },
                autoAssignUrl: "/api/products/".concat(product.slug, "/auto-assign-chart-of-account"),
                context: "Product ".concat(index + 1, ": ").concat(product.name || 'Unknown')
              });
            }
          }
        });
      }
      return errors;
    }
  },
  methods: {
    autoAssignChartOfAccount: function autoAssignChartOfAccount(error) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (error.autoAssignUrl) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              console.log('Starting auto-assignment for:', error);
              _this2.$set(error, 'isAutoAssigning', true);
              _context.p = 2;
              _context.n = 3;
              return axios_default().post(error.autoAssignUrl);
            case 3:
              response = _context.v;
              console.log('Auto-assignment response:', response.data);
              if (response.data.success) {
                // Show success message
                _this2.$toast.fire({
                  icon: 'success',
                  title: _this2.$t('Chart of Account assigned successfully')
                });
                console.log('Emitting chart-of-account-assigned event:', {
                  entity: error.entity,
                  entityId: error.entityId,
                  chartOfAccountId: response.data.chart_of_account_id
                });

                // Emit event to refresh data
                _this2.$emit('chart-of-account-assigned', {
                  entity: error.entity,
                  entityId: error.entityId,
                  chartOfAccountId: response.data.chart_of_account_id
                });

                // Force re-computation of validation errors
                _this2.$nextTick(function () {
                  _this2.$forceUpdate();
                });
              }
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Failed to auto-assign chart of account:', _t);
              _this2.$toast.fire({
                icon: 'error',
                title: _this2.$t('Failed to assign Chart of Account automatically')
              });
            case 5:
              _context.p = 5;
              _this2.$set(error, 'isAutoAssigning', false);
              console.log('Auto-assignment completed');
              return _context.f(5);
            case 6:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Method to refresh validation state
    refreshValidation: function refreshValidation() {
      this.$forceUpdate();
    }
  }
});
;// ./resources/js/components/ChartOfAccountValidation.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ChartOfAccountValidationvue_type_script_lang_js = (ChartOfAccountValidationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=style&index=0&id=0ebdcb7a&prod&scoped=true&lang=css
var ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css = __webpack_require__(86565);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ChartOfAccountValidation.vue?vue&type=style&index=0&id=0ebdcb7a&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css = (ChartOfAccountValidationvue_type_style_index_0_id_0ebdcb7a_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ChartOfAccountValidation.vue?vue&type=style&index=0&id=0ebdcb7a&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ChartOfAccountValidation.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ChartOfAccountValidationvue_type_script_lang_js,
  ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_render,
  ChartOfAccountValidationvue_type_template_id_0ebdcb7a_scoped_true_staticRenderFns,
  false,
  null,
  "0ebdcb7a",
  null
  
)

/* harmony default export */ const ChartOfAccountValidation = (component.exports);
// EXTERNAL MODULE: ./resources/js/components/StockAdjustmentModal.vue + 6 modules
var StockAdjustmentModal = __webpack_require__(75528);
// EXTERNAL MODULE: ./resources/js/components/ClientCreateModal.vue + 5 modules
var ClientCreateModal = __webpack_require__(5181);
// EXTERNAL MODULE: ./resources/js/components/ProductCreateModal.vue + 5 modules
var ProductCreateModal = __webpack_require__(52210);
// EXTERNAL MODULE: ./resources/js/components/ProductEditModal.vue + 18 modules
var ProductEditModal = __webpack_require__(66574);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=script&lang=js
function invoicevue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return invoicevue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, invoicevue_type_script_lang_js_typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(invoicevue_type_script_lang_js_typeof(e) + " is not iterable"); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function invoicevue_type_script_lang_js_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return invoicevue_type_script_lang_js_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (invoicevue_type_script_lang_js_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, invoicevue_type_script_lang_js_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, invoicevue_type_script_lang_js_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), invoicevue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", invoicevue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), invoicevue_type_script_lang_js_regeneratorDefine2(u), invoicevue_type_script_lang_js_regeneratorDefine2(u, o, "Generator"), invoicevue_type_script_lang_js_regeneratorDefine2(u, n, function () { return this; }), invoicevue_type_script_lang_js_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (invoicevue_type_script_lang_js_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function invoicevue_type_script_lang_js_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } invoicevue_type_script_lang_js_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { invoicevue_type_script_lang_js_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, invoicevue_type_script_lang_js_regeneratorDefine2(e, r, n, t); }
function invoicevue_type_script_lang_js_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function invoicevue_type_script_lang_js_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { invoicevue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { invoicevue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == invoicevue_type_script_lang_js_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != invoicevue_type_script_lang_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != invoicevue_type_script_lang_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









var toast = sweetalert2_all_default().mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});
/* harmony default export */ const invoicevue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Quotation To Invoice')
    };
  },
  components: {
    ChartOfAccountValidation: ChartOfAccountValidation,
    StockAdjustmentModal: StockAdjustmentModal/* default */.A,
    ClientCreateModal: ClientCreateModal/* default */.A,
    ProductCreateModal: ProductCreateModal/* default */.A,
    ProductEditModal: ProductEditModal/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Quotation To Invoice',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Quotations',
        url: 'quotations.index'
      }, {
        name: 'Create',
        url: ''
      }],
      form: new vform_es/* default */.Ay({
        client: '',
        reference: '',
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        discountType: 0,
        discount: '',
        totalDiscount: '',
        orderTax: '',
        totalTax: 0,
        productTotalTax: 0,
        transportCost: '',
        date: new Date().toISOString().slice(0, 10),
        poReference: '',
        paymentTerms: '',
        deliveryPlace: '',
        addPayment: 0,
        account: '',
        paidAmount: '',
        receiptNo: '',
        note: '',
        status: 1
      }),
      products: '',
      accounts: '',
      taxes: '',
      prefix: '',
      isAutoAssigningClient: false,
      isAutoAssigningProduct: false,
      isAutoAssigningAccount: false,
      isRTL: false,
      currentLocale: 'en',
      showStockAdjustmentModal: false,
      selectedProductForStockAdjustment: null
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['items', 'appInfo'])), {}, {
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    },
    hasInsufficientStock: function hasInsufficientStock() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return false;
      }
      return this.form.selectedProducts.some(function (item) {
        return item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty);
      });
    },
    // Add computed property to check if chart of account is assigned
    hasChartOfAccount: function hasChartOfAccount() {
      return !!this.form.client && !!this.form.client.chart_of_account_id;
    },
    // Check if all products have sales accounts assigned
    allProductsHaveSalesAccounts: function allProductsHaveSalesAccounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true; // No products selected, so no validation needed
      }
      return this.form.selectedProducts.every(function (product) {
        return product.sales_account_id;
      });
    },
    // Check if all products have VAT rates assigned
    allProductsHaveVatRates: function allProductsHaveVatRates() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return true; // No products selected, so no validation needed
      }
      return this.form.selectedProducts.every(function (product) {
        return product.vat_rate_id;
      });
    },
    // Check if bank account has chart of account assigned (when payment is being added)
    hasBankAccountChartOfAccount: function hasBankAccountChartOfAccount() {
      if (this.form.addPayment != 1) {
        return true; // No payment being added, so no validation needed
      }
      return this.form.account && this.form.account.chartOfAccountId;
    },
    // Calculate due amount when payment is being added
    dueAmount: function dueAmount() {
      if (this.form.addPayment != 1 || !this.form.paidAmount) {
        return this.form.netTotal;
      }
      return Math.max(0, this.form.netTotal - Number(this.form.paidAmount));
    },
    // Check if form is ready for submission
    isFormReady: function isFormReady() {
      var _this$form$selectedPr;
      var basicRequirements = this.hasChartOfAccount && this.allProductsHaveSalesAccounts && this.allProductsHaveVatRates && this.hasBankAccountChartOfAccount && this.form.selectedProducts && this.form.selectedProducts.length > 0;

      // Debug logging
      console.log('Form validation debug:', {
        hasChartOfAccount: this.hasChartOfAccount,
        allProductsHaveSalesAccounts: this.allProductsHaveSalesAccounts,
        allProductsHaveVatRates: this.allProductsHaveVatRates,
        hasBankAccountChartOfAccount: this.hasBankAccountChartOfAccount,
        selectedProducts: ((_this$form$selectedPr = this.form.selectedProducts) === null || _this$form$selectedPr === void 0 ? void 0 : _this$form$selectedPr.length) || 0,
        addPayment: this.form.addPayment,
        isPaymentValid: this.isPaymentValid,
        basicRequirements: basicRequirements,
        client: this.form.client,
        products: this.form.selectedProducts
      });

      // If basic requirements are not met, form is not ready
      if (!basicRequirements) {
        return false;
      }

      // If payment is enabled, check payment fields
      if (this.form.addPayment == 1) {
        return this.isPaymentValid;
      }

      // If no payment required, form is ready
      return true;
    },
    // Check if payment fields are valid when payment is enabled
    isPaymentValid: function isPaymentValid() {
      if (this.form.addPayment != 1) {
        return true; // No payment required
      }

      // Check if both fields have values and paid amount is greater than 0
      return this.form.account && this.form.paidAmount && Number(this.form.paidAmount) > 0;
    },
    // Check if payment fields are filled (for warning hints)
    arePaymentFieldsFilled: function arePaymentFieldsFilled() {
      if (this.form.addPayment != 1) {
        return true; // No payment required
      }

      // Only check if fields have values, not their validity
      return this.form.account && this.form.paidAmount;
    }
  }),
  created: function created() {
    this.getClients();
    this.getProducts();
    this.getTaxes();
    this.getQuotation();
    this.getAccounts();
    this.prefix = this.appInfo.productPrefix;

    // Set default status based on country
    if (this.isSaudiArabia) {
      this.form.status = 0; // Inactive for Saudi Arabia
    } else {
      this.form.status = 1; // Active for other countries
    }
  },
  methods: {
    // get the quotation
    getQuotation: function getQuotation() {
      var _this = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee() {
        var _yield$axios$get, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/quotations/' + _this.$route.params.slug);
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.form.client = data.data.client;
              _this.form.reference = data.data.reference;
              _this.form.totalTax = data.data.totalTax;
              _this.form.orderTax = data.data.quotationTax;
              _this.form.discount = data.data.discountType == 0 ? data.data.discount : data.data.discountPercentage;
              _this.form.discountPercentage = data.data.discountPercentage;
              _this.form.totalDiscount = data.data.discount;
              _this.form.transportCost = data.data.transport;
              _this.form.subTotal = data.data.subTotal;
              _this.form.deliveryPlace = data.data.deliveryPlace;
              _this.form.note = data.data.note;
              // Set status based on country after loading quotation data
              if (_this.isSaudiArabia) {
                _this.form.status = 0; // Inactive for Saudi Arabia
              } else {
                _this.form.status = data.data.status || 1; // Use quotation status or default to Active
              }
              _this.form.selectedProducts = _this.assignProducts(data.data.products);

              // Set default tax if needed (for Saudi Arabia or if quotation has no tax)
              _this.setDefaultTax();

              // Recalculate totals after loading data
              _this.calculateSum();

              // Debug logging
              console.log('Quotation data loaded:', {
                client: _this.form.client,
                selectedProducts: _this.form.selectedProducts,
                isSaudiArabia: _this.isSaudiArabia,
                status: _this.form.status,
                hasChartOfAccount: _this.hasChartOfAccount,
                allProductsHaveSalesAccounts: _this.allProductsHaveSalesAccounts,
                isFormReady: _this.isFormReady
              });
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get all clients
    getClients: function getClients() {
      var _this2 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee2() {
        return invoicevue_type_script_lang_js_regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this2.$store.dispatch('operations/allData', {
                path: '/api/all-clients'
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this3 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee3() {
        var _yield$axios$get2, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + '/api/all-products');
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this3.products = data.data;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get taxes
    getTaxes: function getTaxes() {
      var _this4 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee4() {
        var _yield$axios$get3, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + '/api/all-vat-rates');
            case 1:
              _yield$axios$get3 = _context4.v;
              data = _yield$axios$get3.data;
              _this4.taxes = data.data;

              // Set default tax for Saudi Arabia if no tax is selected
              _this4.setDefaultTax();

              // Recalculate VAT for all products after taxes are loaded
              _this4.recalculateAllProductsVat();

              // Force update VAT rate selection for all products
              _this4.forceUpdateVatRateSelection();

              // Debug: Log VAT rate matching
              console.log('VAT Rate Matching Debug:', {
                taxes: _this4.taxes,
                selectedProducts: _this4.form.selectedProducts.map(function (item) {
                  return {
                    name: item.name,
                    vat_rate_id: item.vat_rate_id,
                    selectedVatRate: item.selectedVatRate
                  };
                })
              });
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // set default tax for Saudi Arabia or when no tax is assigned
    setDefaultTax: function setDefaultTax() {
      if (this.taxes && this.taxes.length > 0 && !this.form.orderTax) {
        // Find a 0% tax rate or the first available tax
        var zeroTax = this.taxes.find(function (tax) {
          return tax.rate === 0;
        });
        var defaultTax = zeroTax || this.taxes[0];
        this.form.orderTax = defaultTax;
        console.log('Default tax set:', defaultTax);
      }
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this5 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee5() {
        var _yield$axios$get4, data;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios_default().get(window.location.origin + '/api/all-accounts');
            case 1:
              _yield$axios$get4 = _context5.v;
              data = _yield$axios$get4.data;
              _this5.accounts = data.data;
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // store item in array
    storeProduct: function storeProduct(product) {
      var index = this.form.selectedProducts.findIndex(function (x) {
        return x.id == product.id;
      });
      var qunatity = 1;
      if (index === -1) {
        var productTax = product.taxType == 'Exclusive' ? product.regularPrice * (product.taxRate / 100) : product.regularPrice - product.regularPrice / (1 + product.taxRate / 100);
        var totalTax = productTax * qunatity;
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: qunatity,
          inventoryCount: product.inventoryCount,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.regularPrice,
          unitCost: product.taxType == 'Exclusive' ? product.regularPrice + productTax : product.regularPrice,
          totalPrice: product.taxType == 'Exclusive' ? 1 * (product.regularPrice + totalTax) : 1 * product.regularPrice,
          productTax: product.productTax,
          totalTax: totalTax,
          sales_account_id: product.sales_account_id || null,
          selectedVatRate: product.selectedVatRate || null,
          vat_rate_id: product.vat_rate_id || null,
          itemType: product.itemType || 'product',
          discountType: 'fixed',
          discount: 0,
          discountAmount: 0,
          totalBeforeDiscount: product.priceWithDiscount * qunatity,
          totalAfterDiscount: product.priceWithDiscount * qunatity
        });
      }
      this.generateItemTotal(qunatity, 'qty', index, '');
      return;
    },
    // update array
    generateItemTotal: function generateItemTotal(value, type, index, action) {
      var item = this.form.selectedProducts[index];
      if (item) {
        if (type == 'qty') {
          item.qty = value;
          if (action == 'increment') {
            item.qty = Number(item.qty) + 1;
          } else if (action == 'decrement') {
            if (item.qty > 0) {
              item.qty = Number(item.qty) - 1;
            }
          }
        } else if (type == 'price') {
          item.unitPrice = value;
          if (action == 'increment') {
            item.unitPrice = Number(item.unitPrice) + 1;
          } else if (action == 'decrement') {
            if (item.unitPrice > 0) {
              item.unitPrice = Number(item.unitPrice) - 1;
            }
          }
        }

        // Update calculated fields
        item.totalBeforeDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = this.roundToTwoDecimals(item.totalBeforeDiscount - (item.discountAmount || 0));

        // Calculate VAT based on selected VAT rate
        if (item.selectedVatRate && item.selectedVatRate.rate) {
          var vatRate = item.selectedVatRate.rate;
          item.productTax = this.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);
        } else {
          // No VAT rate selected
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
        }
        item.unitCost = this.roundToTwoDecimals(item.unitPrice);
        this.form.selectedProducts[index] = item;
      }
      this.calculateSum();
      return;
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }
      this.calculateSum();
      return;
    },
    // calculate sum
    calculateSum: function calculateSum() {
      // calculate subtotal (without VAT for quotations)
      this.form.subTotal = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + (cur.totalAfterDiscount || 0)).toFixed(2));
      }, 0);

      // calculate product tax
      this.form.productTotalTax = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + cur.totalTax).toFixed(2));
      }, 0);

      // calculate total product discount
      this.form.totalDiscount = this.form.selectedProducts.reduce(function (prev, cur) {
        return Number((prev + (cur.discountAmount || 0)).toFixed(2));
      }, 0);

      // calculate global discount (skip for Saudi Arabia)
      var globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          // Percentage
          globalDiscount = Number((this.form.discount / 100 * this.form.subTotal).toFixed(2));
        } else {
          // Fixed
          globalDiscount = Number(this.form.discount);
        }
      }

      // calculate invoice tax
      if (this.isSaudiArabia) {
        // For Saudi Arabia: Use product VAT as total tax
        this.form.totalTax = this.form.productTotalTax;
      } else {
        // For other countries: Calculate invoice tax
        this.form.totalTax = 0;
        if (this.form.orderTax) {
          this.form.totalTax = Number((this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)).toFixed(2));
        }
      }

      // calculate final total
      if (this.isSaudiArabia) {
        // For Saudi Arabia: Net Total = SubTotal + Product VAT (no global discount, no invoice tax, no transport cost)
        this.form.netTotal = Number((this.form.subTotal + this.form.productTotalTax).toFixed(2));
      } else {
        // For other countries: Net Total = SubTotal - Global Discount + Invoice Tax + Transport Cost
        this.form.netTotal = Number((this.form.subTotal - globalDiscount + this.form.totalTax + Number(this.form.transportCost || 0)).toFixed(2));
      }
      return;
    },
    // get quotation products
    assignProducts: function assignProducts(quotationProducts) {
      var _this6 = this;
      var _loop = function _loop() {
        var quotationProduct = quotationProducts[key];

        // Find the VAT rate object based on vat_rate_id
        var vatRate = _this6.taxes ? _this6.taxes.find(function (tax) {
          return tax.id === quotationProduct.vat_rate_id;
        }) : null;

        // Calculate VAT based on the retrieved vat_rate_id
        var productTax = 0;
        var totalTax = 0;
        var totalPrice = 0;
        if (vatRate && quotationProduct.vat_rate_id) {
          // Calculate VAT based on the rate from vat_rates table
          var totalAfterDiscount = quotationProduct.salePrice * quotationProduct.quantity - (quotationProduct.discount_amount || 0);
          productTax = _this6.roundToTwoDecimals(totalAfterDiscount * vatRate.rate / 100);
          totalTax = _this6.roundToTwoDecimals(productTax);
          totalPrice = _this6.roundToTwoDecimals(totalAfterDiscount + totalTax);
        } else {
          // Calculate VAT type from existing taxAmount: vat / Total After Discount
          var _totalAfterDiscount = quotationProduct.salePrice * quotationProduct.quantity - (quotationProduct.discount_amount || 0);
          var existingTaxAmount = quotationProduct.taxAmount || 0;
          if (existingTaxAmount > 0 && _totalAfterDiscount > 0) {
            // Calculate VAT rate from existing tax: vat / Total After Discount
            var calculatedVatRate = _this6.roundToTwoDecimals(existingTaxAmount / _totalAfterDiscount * 100);

            // Find matching VAT rate or create a temporary one
            var matchingVatRate = _this6.taxes ? _this6.taxes.find(function (tax) {
              return Math.abs(tax.rate - calculatedVatRate) < 0.01;
            }) : null;
            if (!matchingVatRate && _this6.taxes && _this6.taxes.length > 0) {
              // Use the closest VAT rate
              matchingVatRate = _this6.taxes.reduce(function (closest, current) {
                var currentDiff = Math.abs(current.rate - calculatedVatRate);
                var closestDiff = Math.abs(closest.rate - calculatedVatRate);
                return currentDiff < closestDiff ? current : closest;
              });
            }
            if (matchingVatRate) {
              productTax = _this6.roundToTwoDecimals(_totalAfterDiscount * matchingVatRate.rate / 100);
              totalTax = _this6.roundToTwoDecimals(productTax);
              totalPrice = _this6.roundToTwoDecimals(_totalAfterDiscount + totalTax);
              vatRate = matchingVatRate; // Update vatRate for later use

              // Update the quotationProduct to include the vat_rate_id
              quotationProduct.vat_rate_id = matchingVatRate.id;
            } else {
              // Fallback to existing values
              productTax = existingTaxAmount;
              totalTax = existingTaxAmount;
              totalPrice = quotationProduct.unitCostTotal || _totalAfterDiscount + existingTaxAmount;
            }
          } else {
            // No VAT
            productTax = 0;
            totalTax = 0;
            totalPrice = _totalAfterDiscount;
          }
        }
        _this6.form.selectedProducts.unshift({
          id: quotationProduct.productID,
          slug: quotationProduct.productSlug,
          name: quotationProduct.productName,
          code: quotationProduct.productCode,
          taxType: quotationProduct.taxType,
          taxRate: quotationProduct.taxRate,
          qty: quotationProduct.quantity,
          inventoryCount: quotationProduct.inventoryCount,
          avgPurchasePrice: quotationProduct.avgPurchasePrice,
          unitPrice: quotationProduct.salePrice,
          unitCost: quotationProduct.unitCost,
          totalPrice: totalPrice,
          productTax: productTax,
          totalTax: totalTax,
          sales_account_id: quotationProduct.sales_account_id || null,
          selectedVatRate: vatRate,
          vat_rate_id: quotationProduct.vat_rate_id || (vatRate ? vatRate.id : null),
          itemType: quotationProduct.itemType || 'product',
          discountType: quotationProduct.discount_type || 'fixed',
          discount: quotationProduct.discount_amount || 0,
          discountAmount: quotationProduct.discount_amount || 0,
          totalBeforeDiscount: quotationProduct.salePrice * quotationProduct.quantity,
          totalAfterDiscount: quotationProduct.salePrice * quotationProduct.quantity - (quotationProduct.discount_amount || 0)
        });
      };
      for (var key in quotationProducts) {
        _loop();
      }
      this.calculateSum();
      return this.form.selectedProducts;
    },
    // Validate payment fields
    validatePaymentFields: function validatePaymentFields() {
      var errors = [];
      if (this.form.addPayment == 1) {
        if (!this.form.account) {
          errors.push({
            type: "warning",
            title: this.$t("Account Required"),
            message: this.$t("Please select an account for payment."),
            field: "account"
          });
        }
        if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
          errors.push({
            type: "warning",
            title: this.$t("Paid Amount Required"),
            message: this.$t("Please enter a valid paid amount."),
            field: "paidAmount"
          });
        }
        if (Number(this.form.paidAmount) > this.form.netTotal) {
          errors.push({
            type: "warning",
            title: this.$t("Invalid Paid Amount"),
            message: this.$t("Paid amount cannot exceed the net total."),
            field: "paidAmount"
          });
        }
      }
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    },
    // Validate calculations
    validateCalculations: function validateCalculations() {
      try {
        // Basic validation that calculations are reasonable
        return this.form.netTotal > 0 && this.form.subTotal >= 0 && this.form.totalTax >= 0;
      } catch (error) {
        return false;
      }
    },
    // Show multiple validation errors
    showMultipleValidationErrors: function showMultipleValidationErrors(errors) {
      if (errors.length === 1) {
        // Single error - show as regular toast
        toast.fire({
          type: errors[0].type,
          title: errors[0].title,
          text: errors[0].message,
          timer: errors[0].timer || 5000,
          timerProgressBar: errors[0].timerProgressBar || false
        });
      } else {
        // Multiple errors - show as alert with list
        var errorList = errors.map(function (err) {
          return "\u2022 ".concat(err.message);
        }).join('\n');
        this.$toast.warning(this.$t('Validation Errors'), this.$t('Please fix the following issues:') + '\n' + errorList);
      }
    },
    // Format form values before submission
    formatFormValues: function formatFormValues() {
      // Ensure all monetary values are properly formatted to 2 decimal places
      if (this.form.discount) {
        this.form.discount = Number(this.form.discount).toFixed(2);
      }
      if (this.form.transportCost) {
        this.form.transportCost = Number(this.form.transportCost).toFixed(2);
      }
      if (this.form.paidAmount) {
        this.form.paidAmount = Number(this.form.paidAmount).toFixed(2);
      }

      // Format product values
      if (this.form.selectedProducts) {
        this.form.selectedProducts.forEach(function (product) {
          product.unitPrice = Number(product.unitPrice).toFixed(2);
          product.totalPrice = Number(product.totalPrice).toFixed(2);
          product.totalTax = Number(product.totalTax).toFixed(2);
          product.productTax = Number(product.productTax).toFixed(2);
        });
      }
    },
    // create invoice
    createInvoice: function createInvoice() {
      var _this7 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee6() {
        var validationErrors, productsWithoutSalesAccount, productNames, productsWithoutVatRate, _productNames, paymentValidation, _t;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              console.log('createInvoice method called');
              _context6.p = 1;
              // Ensure all monetary values are properly formatted to 2 decimal places before submission
              _this7.formatFormValues();

              // Collect all validation errors before submission
              validationErrors = [];
              if (!_this7.form.client || !_this7.form.client.chart_of_account_id) {
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("Chart of Account Required"),
                  message: _this7.$t("Client must have a Chart of Account assigned before creating an invoice."),
                  field: "client"
                });
              }
              if (!_this7.form.selectedProducts || _this7.form.selectedProducts.length === 0) {
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("No Products Selected"),
                  message: _this7.$t("Please select at least one product to create an invoice."),
                  field: "selectedProducts"
                });
              }

              // Validate that all products have sales accounts assigned
              productsWithoutSalesAccount = _this7.form.selectedProducts.filter(function (product) {
                return !product.sales_account_id;
              });
              if (productsWithoutSalesAccount.length > 0) {
                productNames = productsWithoutSalesAccount.map(function (p) {
                  return p.name || 'Unknown';
                }).join(', ');
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("Product Chart of Account Required"),
                  message: _this7.$t("The following products must have Sales Accounts assigned: ") + productNames,
                  field: "products",
                  timer: 8000,
                  timerProgressBar: true
                });
              }

              // Validate that all products have VAT rates assigned
              productsWithoutVatRate = _this7.form.selectedProducts.filter(function (product) {
                return !product.vat_rate_id;
              });
              if (productsWithoutVatRate.length > 0) {
                _productNames = productsWithoutVatRate.map(function (p) {
                  return p.name || 'Unknown';
                }).join(', ');
                validationErrors.push({
                  type: "warning",
                  title: _this7.$t("Product VAT Rate Required"),
                  message: _this7.$t("The following products must have a VAT rate assigned: ") + _productNames,
                  field: "products",
                  timer: 8000,
                  timerProgressBar: true
                });
              }

              // Validate payment fields when "Add Payment" is set to "Yes"
              paymentValidation = _this7.validatePaymentFields();
              if (!paymentValidation.isValid) {
                validationErrors.push.apply(validationErrors, _toConsumableArray(paymentValidation.errors));
              }

              // Validate that all calculations are correct
              if (!_this7.validateCalculations()) {
                validationErrors.push({
                  type: "error",
                  title: _this7.$t("Calculation Error"),
                  message: _this7.$t("There was an error in the calculations. Please refresh the page and try again."),
                  field: "calculations"
                });
              }

              // If there are validation errors, show them all and return
              if (!(validationErrors.length > 0)) {
                _context6.n = 2;
                break;
              }
              _this7.showMultipleValidationErrors(validationErrors);
              return _context6.a(2);
            case 2:
              _context6.n = 3;
              return _this7.form.post(window.location.origin + '/api/invoices').then(function () {
                toast.fire({
                  type: 'success',
                  title: _this7.$t('Invoice created successfully')
                });
                _this7.$router.push({
                  name: 'invoices.index'
                });
              })["catch"](function (error) {
                console.error('Invoice creation error:', error);
                toast.fire({
                  type: 'error',
                  title: _this7.$t('Please check your input and try again.')
                });
              });
            case 3:
              _context6.n = 5;
              break;
            case 4:
              _context6.p = 4;
              _t = _context6.v;
              console.error('Unexpected error:', _t);
              toast.fire({
                type: 'error',
                title: _this7.$t('Please check your input and try again.')
              });
            case 5:
              return _context6.a(2);
          }
        }, _callee6, null, [[1, 4]]);
      }))();
    },
    // Handle chart of account assignment
    handleChartOfAccountAssigned: function handleChartOfAccountAssigned(data) {
      if (data.entity === 'client') {
        // Refresh client data
        this.getClients();
      } else if (data.entity === 'product') {
        // Refresh product data
        this.getProducts();
      }
    },
    // Auto-assign client chart of account
    autoAssignClientChartOfAccount: function autoAssignClientChartOfAccount() {
      var _this8 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee7() {
        var response, newAccountId, idx, errorMessage, _error$response$data, _t2;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (_this8.form.client) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              if (_this8.form.client.slug) {
                _context7.n = 2;
                break;
              }
              toast.fire({
                type: 'error',
                title: _this8.$t('Error'),
                text: _this8.$t('Client missing required information. Please refresh and try again.')
              });
              return _context7.a(2);
            case 2:
              _this8.isAutoAssigningClient = true;
              _context7.p = 3;
              _context7.n = 4;
              return axios_default().post(window.location.origin + '/api/clients/' + _this8.form.client.slug + '/auto-assign-chart-of-account');
            case 4:
              response = _context7.v;
              if (response && response.data && response.data.success) {
                // Update the client data with new chart of account
                newAccountId = response.data.chart_of_account_id || response.data.data && response.data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this8.form.client.chart_of_account_id = newAccountId;
                  // Also update the option in items list to keep state consistent when switching clients
                  idx = _this8.items.findIndex(function (i) {
                    return i.slug === _this8.form.client.slug;
                  });
                  if (idx !== -1) {
                    _this8.$set(_this8.items[idx], 'chart_of_account_id', newAccountId);
                  }
                }
                toast.fire({
                  type: 'success',
                  title: _this8.$t('Chart of Account assigned successfully')
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Failed to assign Chart of Account'),
                  text: response && response.data && response.data.message || _this8.$t('Please try again')
                });
              }
              _context7.n = 6;
              break;
            case 5:
              _context7.p = 5;
              _t2 = _context7.v;
              console.error('Error assigning client chart of account:', _t2);
              errorMessage = _this8.$t('Failed to assign Chart of Account. Please try again.');
              if (_t2 && _t2.response) {
                errorMessage = ((_error$response$data = _t2.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || _t2.message || errorMessage;
              } else if (_t2 && _t2.message) {
                errorMessage = _t2.message;
              }
              toast.fire({
                type: 'error',
                title: _this8.$t('Error'),
                text: errorMessage
              });
            case 6:
              _context7.p = 6;
              _this8.isAutoAssigningClient = false;
              return _context7.f(6);
            case 7:
              return _context7.a(2);
          }
        }, _callee7, null, [[3, 5, 6, 7]]);
      }))();
    },
    // Auto-assign all products chart of account
    autoAssignAllProductsChartOfAccount: function autoAssignAllProductsChartOfAccount() {
      var _this9 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee8() {
        var productsWithoutSalesAccount, _iterator, _step, _loop2, errorMessage, _error$response$data2, _t3, _t4;
        return invoicevue_type_script_lang_js_regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              if (!(!_this9.form.selectedProducts || _this9.form.selectedProducts.length === 0)) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              _this9.isAutoAssigningProduct = true;
              _context9.p = 2;
              productsWithoutSalesAccount = _this9.form.selectedProducts.filter(function (product) {
                return !product.sales_account_id;
              });
              if (!(productsWithoutSalesAccount.length === 0)) {
                _context9.n = 3;
                break;
              }
              toast.fire({
                type: 'info',
                title: _this9.$t('All products already have sales accounts assigned')
              });
              return _context9.a(2);
            case 3:
              _iterator = _createForOfIteratorHelper(productsWithoutSalesAccount);
              _context9.p = 4;
              _loop2 = /*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _loop2() {
                var product, response, productIndex;
                return invoicevue_type_script_lang_js_regenerator().w(function (_context8) {
                  while (1) switch (_context8.n) {
                    case 0:
                      product = _step.value;
                      if (product.slug) {
                        _context8.n = 1;
                        break;
                      }
                      console.warn('Product missing slug:', product);
                      return _context8.a(2, 1);
                    case 1:
                      _context8.n = 2;
                      return axios_default().post(window.location.origin + '/api/products/' + product.slug + '/sales/auto-assign-chart-of-account');
                    case 2:
                      response = _context8.v;
                      if (response.data && response.data.success) {
                        // Update the product data with new chart of account
                        product.sales_account_id = response.data.sales_account_id;

                        // Update the product in the products list
                        productIndex = _this9.products.findIndex(function (p) {
                          return p.id === product.id;
                        });
                        if (productIndex !== -1) {
                          _this9.$set(_this9.products[productIndex], 'sales_account_id', response.data.sales_account_id);
                        }
                      }
                    case 3:
                      return _context8.a(2);
                  }
                }, _loop2);
              });
              _iterator.s();
            case 5:
              if ((_step = _iterator.n()).done) {
                _context9.n = 8;
                break;
              }
              return _context9.d(_regeneratorValues(_loop2()), 6);
            case 6:
              if (!_context9.v) {
                _context9.n = 7;
                break;
              }
              return _context9.a(3, 7);
            case 7:
              _context9.n = 5;
              break;
            case 8:
              _context9.n = 10;
              break;
            case 9:
              _context9.p = 9;
              _t3 = _context9.v;
              _iterator.e(_t3);
            case 10:
              _context9.p = 10;
              _iterator.f();
              return _context9.f(10);
            case 11:
              toast.fire({
                type: 'success',
                title: _this9.$t('Chart of Accounts assigned successfully')
              });
              _context9.n = 13;
              break;
            case 12:
              _context9.p = 12;
              _t4 = _context9.v;
              console.error('Error assigning product chart of accounts:', _t4);
              errorMessage = _this9.$t('Failed to assign Chart of Accounts. Please try again.');
              if (_t4 && _t4.response) {
                errorMessage = ((_error$response$data2 = _t4.response.data) === null || _error$response$data2 === void 0 ? void 0 : _error$response$data2.message) || _t4.message || errorMessage;
              } else if (_t4 && _t4.message) {
                errorMessage = _t4.message;
              }
              toast.fire({
                type: 'error',
                title: _this9.$t('Error'),
                text: errorMessage
              });
            case 13:
              _context9.p = 13;
              _this9.isAutoAssigningProduct = false;
              return _context9.f(13);
            case 14:
              return _context9.a(2);
          }
        }, _callee8, null, [[4, 9, 10, 11], [2, 12, 13, 14]]);
      }))();
    },
    // Auto-assign bank account chart of account
    autoAssignBankAccountChartOfAccount: function autoAssignBankAccountChartOfAccount() {
      var _this0 = this;
      return invoicevue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/invoicevue_type_script_lang_js_regenerator().m(function _callee9() {
        return invoicevue_type_script_lang_js_regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (_this0.form.account) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2);
            case 1:
              // For now, show a message that this feature is not available
              toast.fire({
                type: 'info',
                title: _this0.$t('Feature Not Available'),
                text: _this0.$t('Auto-assign for bank accounts is not yet available. Please assign Chart of Account manually.')
              });
            case 2:
              return _context0.a(2);
          }
        }, _callee9);
      }))();
    },
    // Edit product from table
    editProductFromTable: function editProductFromTable(item) {
      // Open product edit modal or navigate to product edit page
      this.$router.push({
        name: 'products.edit',
        params: {
          slug: item.slug
        }
      });
    },
    // Open stock adjustment modal
    openStockAdjustmentModal: function openStockAdjustmentModal(product) {
      this.selectedProductForStockAdjustment = product;
      this.showStockAdjustmentModal = true;
    },
    closeStockAdjustmentModal: function closeStockAdjustmentModal() {
      this.showStockAdjustmentModal = false;
      this.selectedProductForStockAdjustment = null;
    },
    adjustProductQuantity: function adjustProductQuantity(product) {
      // Find the product in the selected products array and adjust its quantity
      var index = this.form.selectedProducts.findIndex(function (p) {
        return p.id === product.id;
      });
      if (index !== -1) {
        // Set quantity to available stock
        this.$set(this.form.selectedProducts[index], 'qty', product.inventoryCount);
        this.generateItemTotal(product.inventoryCount, "qty", index, "");
        sweetalert2_all_default().fire({
          type: "info",
          title: this.$t("Quantity Adjusted"),
          text: this.$t("Product quantity has been adjusted to available stock.")
        });
      }
      this.closeStockAdjustmentModal();
    },
    handleStockUpdated: function handleStockUpdated(eventData) {
      // Refresh products to get updated stock levels
      this.getProducts();
    },
    handleProductUpdated: function handleProductUpdated(eventData) {
      var originalProduct = eventData.originalProduct,
        updatedData = eventData.updatedData;

      // Find and update the product in selectedProducts array
      var productIndex = this.form.selectedProducts.findIndex(function (p) {
        return p.id === originalProduct.id || p.slug === originalProduct.slug;
      });
      if (productIndex !== -1) {
        // Update the product data in the selected products array
        var updatedProduct = _objectSpread({}, this.form.selectedProducts[productIndex]);

        // Update relevant fields from the form data
        updatedProduct.name = updatedData.itemName || updatedProduct.name;
        updatedProduct.item_name = updatedData.itemName || updatedProduct.item_name;
        updatedProduct.regular_price = updatedData.regularPrice || updatedProduct.regular_price;
        updatedProduct.price = updatedData.regularPrice || updatedProduct.price;
        updatedProduct.discount = updatedData.discount || updatedProduct.discount;
        updatedProduct.selling_price = updatedData.sellingPrice || updatedProduct.selling_price;

        // Update related objects if they have IDs
        if (updatedData.subCategory) {
          updatedProduct.sub_category_id = updatedData.subCategory;
        }
        if (updatedData.itemUnit) {
          updatedProduct.unit_id = updatedData.itemUnit;
        }
        if (updatedData.productTax) {
          updatedProduct.tax_id = updatedData.productTax;
          updatedProduct.vat_rate_id = updatedData.productTax;
        }
        if (updatedData.brand) {
          updatedProduct.brand_id = updatedData.brand;
        }

        // Replace the product in the array
        this.$set(this.form.selectedProducts, productIndex, updatedProduct);

        // Recalculate totals
        this.calculateSum();
      }

      // Also update the product in the main products array if it exists
      var mainProductIndex = this.products.findIndex(function (p) {
        return p.id === originalProduct.id || p.slug === originalProduct.slug;
      });
      if (mainProductIndex !== -1) {
        var updatedMainProduct = _objectSpread({}, this.products[mainProductIndex]);

        // Update relevant fields from the form data
        updatedMainProduct.name = updatedData.itemName || updatedMainProduct.name;
        updatedMainProduct.regular_price = updatedData.regularPrice || updatedMainProduct.regular_price;
        updatedMainProduct.discount = updatedData.discount || updatedMainProduct.discount;
        updatedMainProduct.selling_price = updatedData.sellingPrice || updatedMainProduct.selling_price;

        // Replace the product in the main products array
        this.$set(this.products, mainProductIndex, updatedMainProduct);
      }
    },
    // calculate product discount
    calculateProductDiscount: function calculateProductDiscount(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Calculate discount amount based on type
        var discountAmount;
        if (item.discountType === "percentage") {
          discountAmount = this.roundToTwoDecimals(item.unitPrice * item.qty * item.discount / 100);
        } else {
          discountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
        }

        // Update item properties
        item.discountAmount = discountAmount;
        item.totalBeforeDiscount = this.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = this.roundToTwoDecimals(item.totalBeforeDiscount - discountAmount);

        // Recalculate VAT on the discounted amount
        this.calculateProductVat(index);
      }
    },
    // Handle VAT rate change
    onVatRateChange: function onVatRateChange(index) {
      var item = this.form.selectedProducts[index];
      if (item) {
        // Find the selected VAT rate object
        var selectedVatRate = this.taxes ? this.taxes.find(function (tax) {
          return tax.id === item.vat_rate_id;
        }) : null;
        if (selectedVatRate) {
          // Calculate VAT based on the total after discount
          var vatRate = selectedVatRate.rate || 0;
          item.productTax = this.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
          item.totalTax = this.roundToTwoDecimals(item.productTax);
          item.totalPrice = this.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);

          // Store the full VAT rate object for reference
          item.selectedVatRate = selectedVatRate;
        } else {
          // No VAT rate selected
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
          item.selectedVatRate = null;
        }

        // Update the item in the array
        this.$set(this.form.selectedProducts, index, item);
        this.calculateSum();
      }
    },
    // calculate product VAT (legacy method for backward compatibility)
    calculateProductVat: function calculateProductVat(index) {
      this.onVatRateChange(index);
    },
    // find matching VAT rate
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!this.taxes || !productTax) return null;
      return this.taxes.find(function (tax) {
        return tax.rate === productTax.rate;
      }) || null;
    },
    // round to two decimals
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },
    formatToTwoDecimals: function formatToTwoDecimals(value) {
      if (value === null || value === undefined || value === '') {
        return '0.00';
      }
      var numValue = Number(value);
      if (isNaN(numValue)) {
        return '0.00';
      }
      return numValue.toFixed(2);
    },
    clearFieldError: function clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },
    handleProductCreated: function handleProductCreated(newProduct) {
      // Add the new product to the products list
      this.products.unshift(newProduct);
      this.products.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      // Automatically select the newly created product
      this.form.product = newProduct;

      // Automatically add it to the selected products list
      this.storeProduct(newProduct);
    },
    showAllInsufficientStock: function showAllInsufficientStock() {
      var _this1 = this;
      // Show a summary of all insufficient stock products
      var insufficientProducts = this.form.selectedProducts.filter(function (item) {
        return item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty);
      });
      if (insufficientProducts.length === 0) return;
      var message = this.$t("Products with insufficient stock:") + "\n\n";
      insufficientProducts.forEach(function (product, index) {
        var shortage = Number(product.qty) - Number(product.inventoryCount);
        message += "".concat(index + 1, ". ").concat(product.name, "\n");
        message += "   ".concat(_this1.$t("Required"), ": ").concat(product.qty, ", ").concat(_this1.$t("Available"), ": ").concat(product.inventoryCount, ", ").concat(_this1.$t("Shortage"), ": ").concat(shortage, "\n\n");
      });
      sweetalert2_all_default().fire({
        title: this.$t("Insufficient Stock Summary"),
        text: message,
        icon: "warning",
        confirmButtonText: this.$t("OK")
      });
    },
    // Methods to get totals on-demand (forces reactivity)
    getTotalUnitPrice: function getTotalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getTotalAfterDiscount: function getTotalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getTotalDiscount: function getTotalDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getProductTotalTax: function getProductTotalTax() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    getSubTotal: function getSubTotal() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalPrice || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // return number to word with language support
    toWord: function toWord() {
      var amount = this.form.netTotal || 0;

      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }

      // For now, return a simple representation
      return "".concat(amount.toFixed(2), " SAR");
    },
    // Get discount information from quotation products
    getQuotationProductDiscounts: function getQuotationProductDiscounts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      return this.form.selectedProducts.map(function (product, index) {
        return {
          productName: product.name,
          productCode: product.code,
          discountType: product.discountType || 'fixed',
          discountAmount: product.discountAmount || 0,
          discountPercentage: product.discountType === 'percentage' ? product.discount : 0,
          totalBeforeDiscount: product.totalBeforeDiscount || 0,
          totalAfterDiscount: product.totalAfterDiscount || 0,
          index: index
        };
      });
    },
    // Display discount summary
    getDiscountSummary: function getDiscountSummary() {
      var discounts = this.getQuotationProductDiscounts();
      var totalDiscount = discounts.reduce(function (sum, item) {
        return sum + item.discountAmount;
      }, 0);
      var fixedDiscounts = discounts.filter(function (item) {
        return item.discountType === 'fixed';
      });
      var percentageDiscounts = discounts.filter(function (item) {
        return item.discountType === 'percentage';
      });
      return {
        totalDiscount: totalDiscount,
        fixedDiscounts: fixedDiscounts,
        percentageDiscounts: percentageDiscounts,
        totalItems: discounts.length,
        itemsWithDiscount: discounts.filter(function (item) {
          return item.discountAmount > 0;
        }).length
      };
    },
    // Get VAT information from quotation products
    getQuotationProductVatRates: function getQuotationProductVatRates() {
      var _this10 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      return this.form.selectedProducts.map(function (product, index) {
        var vatRate = _this10.taxes ? _this10.taxes.find(function (tax) {
          return tax.id === product.vat_rate_id;
        }) : null;
        return {
          productName: product.name,
          productCode: product.code,
          vatRateId: product.vat_rate_id || null,
          vatRateCode: vatRate ? vatRate.code : 'Not Set',
          vatRatePercentage: vatRate ? vatRate.rate : 0,
          productTax: product.productTax || 0,
          totalTax: product.totalTax || 0,
          totalAfterDiscount: product.totalAfterDiscount || 0,
          totalPrice: product.totalPrice || 0,
          index: index
        };
      });
    },
    // Display VAT summary
    getVatSummary: function getVatSummary() {
      var vatRates = this.getQuotationProductVatRates();
      var totalVat = vatRates.reduce(function (sum, item) {
        return sum + item.totalTax;
      }, 0);
      var itemsWithVat = vatRates.filter(function (item) {
        return item.vatRateId && item.totalTax > 0;
      });
      var itemsWithoutVat = vatRates.filter(function (item) {
        return !item.vatRateId || item.totalTax === 0;
      });

      // Group by VAT rate
      var vatRateGroups = {};
      vatRates.forEach(function (item) {
        var key = item.vatRateId || 'no-vat';
        if (!vatRateGroups[key]) {
          vatRateGroups[key] = {
            vatRateId: item.vatRateId,
            vatRateCode: item.vatRateCode,
            vatRatePercentage: item.vatRatePercentage,
            count: 0,
            totalTax: 0
          };
        }
        vatRateGroups[key].count++;
        vatRateGroups[key].totalTax += item.totalTax;
      });
      return {
        totalVat: totalVat,
        itemsWithVat: itemsWithVat.length,
        itemsWithoutVat: itemsWithoutVat.length,
        totalItems: vatRates.length,
        vatRateGroups: Object.values(vatRateGroups)
      };
    },
    // Recalculate VAT for all products to ensure consistency
    recalculateAllProductsVat: function recalculateAllProductsVat() {
      var _this11 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return;
      }
      this.form.selectedProducts.forEach(function (item, index) {
        // Recalculate totalBeforeDiscount and totalAfterDiscount
        item.totalBeforeDiscount = _this11.roundToTwoDecimals(item.unitPrice * item.qty);
        item.totalAfterDiscount = _this11.roundToTwoDecimals(item.totalBeforeDiscount - (item.discountAmount || 0));

        // Find the VAT rate object based on vat_rate_id
        var selectedVatRate = _this11.taxes ? _this11.taxes.find(function (tax) {
          return tax.id === item.vat_rate_id;
        }) : null;

        // Recalculate VAT if VAT rate is selected
        if (selectedVatRate && selectedVatRate.rate) {
          var vatRate = selectedVatRate.rate;
          item.productTax = _this11.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
          item.totalTax = _this11.roundToTwoDecimals(item.productTax);
          item.totalPrice = _this11.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);

          // Store the full VAT rate object for reference
          item.selectedVatRate = selectedVatRate;
        } else {
          item.productTax = 0;
          item.totalTax = 0;
          item.totalPrice = item.totalAfterDiscount;
          item.selectedVatRate = null;
        }

        // Update the item in the array
        _this11.$set(_this11.form.selectedProducts, index, item);
      });

      // Recalculate totals
      this.calculateSum();
    },
    // Calculate VAT type percentage: vat / Total After Discount
    calculateVatTypePercentage: function calculateVatTypePercentage(item) {
      if (!item || !item.totalAfterDiscount || item.totalAfterDiscount <= 0) {
        return 0;
      }
      var vatAmount = item.totalTax || item.productTax || 0;
      var percentage = this.roundToTwoDecimals(vatAmount / item.totalAfterDiscount * 100);
      return percentage;
    },
    // Get VAT type information for debug display
    getVatTypeInfo: function getVatTypeInfo(item) {
      var percentage = this.calculateVatTypePercentage(item);
      var vatAmount = item.totalTax || item.productTax || 0;
      var totalAfterDiscount = item.totalAfterDiscount || 0;
      return {
        percentage: percentage,
        vatAmount: vatAmount,
        totalAfterDiscount: totalAfterDiscount,
        formula: "".concat(vatAmount, " / ").concat(totalAfterDiscount, " = ").concat(percentage, "%")
      };
    },
    // Force update VAT rate selection for all products
    forceUpdateVatRateSelection: function forceUpdateVatRateSelection() {
      var _this12 = this;
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0 || !this.taxes) {
        return;
      }
      this.form.selectedProducts.forEach(function (item, index) {
        if (item.vat_rate_id) {
          // Find the matching VAT rate
          var matchingVatRate = _this12.taxes.find(function (tax) {
            return tax.id === item.vat_rate_id;
          });
          if (matchingVatRate) {
            // Update the selectedVatRate object
            _this12.$set(_this12.form.selectedProducts[index], 'selectedVatRate', matchingVatRate);

            // Recalculate VAT with the correct rate
            var vatRate = matchingVatRate.rate;
            item.productTax = _this12.roundToTwoDecimals(item.totalAfterDiscount * vatRate / 100);
            item.totalTax = _this12.roundToTwoDecimals(item.productTax);
            item.totalPrice = _this12.roundToTwoDecimals(item.totalAfterDiscount + item.totalTax);

            // Update the item
            _this12.$set(_this12.form.selectedProducts, index, item);
          }
        }
      });

      // Recalculate totals
      this.calculateSum();
    }
  }
});
;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=script&lang=js
 /* harmony default export */ const quotations_invoicevue_type_script_lang_js = (invoicevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=4c6861ea&prod&lang=scss&scoped=true
var invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true = __webpack_require__(79514);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=4c6861ea&prod&lang=scss&scoped=true

            

var invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true_options = {};

invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true_options.insert = "head";
invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true_options.singleton = false;

var invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true_update = injectStylesIntoStyleTag_default()(invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true/* default */.A, invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true_options);



/* harmony default export */ const quotations_invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true = (invoicevue_type_style_index_0_id_4c6861ea_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/pages/sales/quotations/invoice.vue?vue&type=style&index=0&id=4c6861ea&prod&lang=scss&scoped=true

;// ./resources/js/pages/sales/quotations/invoice.vue



;


/* normalize component */

var invoice_component = (0,componentNormalizer/* default */.A)(
  quotations_invoicevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4c6861ea",
  null
  
)

/* harmony default export */ const invoice = (invoice_component.exports);

/***/ }),

/***/ 45332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-565cc0e9]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-565cc0e9]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-565cc0e9]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-565cc0e9]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-565cc0e9]:after{display:none}.form-card .card-header .section-title i[data-v-565cc0e9]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-565cc0e9]{padding:16px}.section-title[data-v-565cc0e9]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-565cc0e9]{margin-bottom:1rem}.form-group label[data-v-565cc0e9]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-565cc0e9]{color:#dc3545;font-weight:700}.row[data-v-565cc0e9]{margin-bottom:1rem}.row[data-v-565cc0e9]:last-child{margin-bottom:0}.form-text[data-v-565cc0e9]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-565cc0e9]{text-align:center}.image-preview img[data-v-565cc0e9]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-565cc0e9]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-565cc0e9]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-565cc0e9]{color:#6c757d}@media (max-width:768px){.section-title[data-v-565cc0e9]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-565cc0e9]{padding:.75rem}}.input-group-prepend .input-group-text[data-v-565cc0e9]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-565cc0e9]{margin-bottom:0}.is-invalid[data-v-565cc0e9]{border-color:#dc3545!important}.invalid-feedback[data-v-565cc0e9]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-565cc0e9]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-565cc0e9]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-565cc0e9]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-565cc0e9]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-565cc0e9]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-565cc0e9]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-565cc0e9]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-565cc0e9]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-565cc0e9]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-565cc0e9]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-565cc0e9]{flex-direction:column;gap:.5rem}.option-content[data-v-565cc0e9]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-565cc0e9]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-565cc0e9]{font-size:.85rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=template&id=56bbb7fc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": function close($event) {
        _vm.showProductCreateModal = false;
      }
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Product")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showProductCreateModal,
      callback: function callback($$v) {
        _vm.showProductCreateModal = $$v;
      },
      expression: "showProductCreateModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-cube mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Item Type")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "item-type-selector"
  }, [_c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'product'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "product",
      "name": "itemType",
      "value": "product",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "product")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "product");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cube"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Product")))])])]), _vm._v(" "), _c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'service'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "service",
      "name": "itemType",
      "value": "service",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "service")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "service");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cogs"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Service")))])])])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemType"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Product Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Name")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemName,
      expression: "form.itemName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemName')
    },
    attrs: {
      "id": "itemName",
      "type": "text",
      "name": "itemName",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.form.itemName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemCode"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Code")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm.prefix ? _c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.prefix))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemCode,
      expression: "form.itemCode"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemCode')
    },
    attrs: {
      "type": "text",
      "name": "itemCode",
      "placeholder": _vm.$t('Enter item code')
    },
    domProps: {
      "value": _vm.form.itemCode
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemCode", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemCode"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t("Category")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "subCategory",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.form.subCategory,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subCategory", $$v);
      },
      expression: "form.subCategory"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit')
    },
    attrs: {
      "options": _vm.units,
      "label": "name",
      "name": "itemUnit",
      "placeholder": _vm.$t('Select a unit')
    },
    model: {
      value: _vm.form.itemUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "itemUnit", $$v);
      },
      expression: "form.itemUnit"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "productTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Rate")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('productTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "productTax",
      "placeholder": _vm.$t('Select a tax')
    },
    on: {
      "input": _vm.calculatePrice
    },
    model: {
      value: _vm.form.productTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "productTax", $$v);
      },
      expression: "form.productTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "productTax"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemModel"
    }
  }, [_vm._v(_vm._s(_vm.$t("Model")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemModel,
      expression: "form.itemModel"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemModel')
    },
    attrs: {
      "id": "itemModel",
      "type": "text",
      "name": "itemModel",
      "placeholder": _vm.$t('Enter a model')
    },
    domProps: {
      "value": _vm.form.itemModel
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemModel", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemModel"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "regularPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.regularPrice,
      expression: "form.regularPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('regularPrice')
    },
    attrs: {
      "id": "regularPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "regularPrice",
      "placeholder": _vm.$t('Enter price')
    },
    domProps: {
      "value": _vm.form.regularPrice
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "regularPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "regularPrice"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount (%)")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "type": "number",
      "min": "0",
      "max": "100",
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sellingPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Final Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sellingPrice,
      expression: "form.sellingPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('sellingPrice')
    },
    attrs: {
      "id": "sellingPrice",
      "type": "number",
      "readonly": "",
      "name": "sellingPrice",
      "placeholder": _vm.$t('Calculated automatically')
    },
    domProps: {
      "value": _vm.form.sellingPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sellingPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "sellingPrice"
    }
  })], 1)])])])]), _vm._v(" "), _vm.form.itemType === 'product' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-warehouse mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Stock Information")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockCount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Opening Stock")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockCount,
      expression: "form.openingStockCount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount')
    },
    attrs: {
      "id": "openingStockCount",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockCount",
      "placeholder": _vm.$t('Enter opening stock')
    },
    domProps: {
      "value": _vm.form.openingStockCount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockCount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockCount"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockUnitPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Stock Unit Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockUnitPrice,
      expression: "form.openingStockUnitPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockUnitPrice')
    },
    attrs: {
      "id": "openingStockUnitPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "openingStockUnitPrice",
      "placeholder": _vm.$t('Enter unit price')
    },
    domProps: {
      "value": _vm.form.openingStockUnitPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockUnitPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockUnitPrice"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "alertQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t("Alert Quantity")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.alertQuantity,
      expression: "form.alertQuantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('alertQuantity')
    },
    attrs: {
      "id": "alertQuantity",
      "type": "number",
      "min": "0",
      "max": "1000",
      "name": "alertQuantity",
      "placeholder": _vm.$t('Enter alert quantity')
    },
    domProps: {
      "value": _vm.form.alertQuantity
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "alertQuantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "alertQuantity"
    }
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _vm.form.itemType === 'service' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-dollar-sign mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Service Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "servicePurchasePrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.servicePurchasePrice,
      expression: "form.servicePurchasePrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('servicePurchasePrice')
    },
    attrs: {
      "id": "servicePurchasePrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "servicePurchasePrice",
      "placeholder": _vm.$t('Enter purchase price')
    },
    domProps: {
      "value": _vm.form.servicePurchasePrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "servicePurchasePrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "servicePurchasePrice"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Chart of Accounts")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm.isSalesAccountAutomatic || _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-info d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Accounts will be assigned automatically based on your settings. Check the boxes below to manually select accounts for this product.")))])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "override-checkbox-container mb-3"
  }, [_c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overrideSalesAccount,
      expression: "form.overrideSalesAccount"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.overrideSalesAccount) ? _vm._i(_vm.form.overrideSalesAccount, null) > -1 : _vm.form.overrideSalesAccount
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.form.overrideSalesAccount,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "overrideSalesAccount", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "overrideSalesAccount", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "overrideSalesAccount", $$c);
        }
      }, _vm.onOverrideSalesAccountChange]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "checkbox-text"
  }, [_vm._v(_vm._s(_vm.$t("Select it manually")))])])]), _vm._v(" "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('salesAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "salesAccountId",
      "placeholder": _vm.$t('Select sales account'),
      "required": ""
    },
    model: {
      value: _vm.form.salesAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "salesAccountId", $$v);
      },
      expression: "form.salesAccountId"
    }
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isSalesAccountAutomatic && !_vm.form.overrideSalesAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Sales Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                    ")])]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "override-checkbox-container mb-3"
  }, [_c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overridePurchaseAccount,
      expression: "form.overridePurchaseAccount"
    }],
    staticClass: "form-check-input",
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.overridePurchaseAccount) ? _vm._i(_vm.form.overridePurchaseAccount, null) > -1 : _vm.form.overridePurchaseAccount
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.form.overridePurchaseAccount,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "overridePurchaseAccount", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "overridePurchaseAccount", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "overridePurchaseAccount", $$c);
        }
      }, _vm.onOverridePurchaseAccountChange]
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "checkbox-text"
  }, [_vm._v(_vm._s(_vm.$t("Select it manually")))])])]), _vm._v(" "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 mr-2",
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "purchaseAccountId",
      "placeholder": _vm.$t('Select purchase account'),
      "required": ""
    },
    model: {
      value: _vm.form.purchaseAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchaseAccountId", $$v);
      },
      expression: "form.purchaseAccountId"
    }
  })], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isPurchaseAccountAutomatic && !_vm.form.overridePurchaseAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Purchase Account")))]), _vm._v(" "), _c('div', {
    staticClass: "form-control-plaintext text-muted"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Auto-assigned")) + "\n                    ")])]) : _vm._e()])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Additional Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
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
  }, [_c('i', {
    staticClass: "fas fa-upload"
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n                    ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "image-preview mt-2"
  }, [_c('img', {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "80px"
    },
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Product Image')
    }
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c('textarea', {
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
      "rows": "3",
      "name": "note",
      "placeholder": _vm.$t('Add any additional notes...')
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
  })], 1)])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    },
    on: {
      "click": function click($event) {
        return _vm.submitItem($event);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
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



/* harmony default export */ const ProductCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Product")
    };
  },
  data: function data() {
    return {
      showProductCreateModal: false,
      form: new vform_es/* default */.Ay({
        itemType: "product",
        itemName: "",
        itemCode: "",
        itemModel: "",
        barcodeSymbology: "CODE128",
        subCategory: "",
        brand: "",
        itemUnit: "",
        productTax: "",
        taxType: "Exclusive",
        regularPrice: "",
        servicePurchasePrice: "",
        openingStockCount: "",
        openingStockUnitPrice: "",
        discount: "",
        sellingPrice: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: "",
        overrideSalesAccount: false,
        overridePurchaseAccount: false
      }),
      categories: [],
      options: [],
      units: [],
      brands: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      url: null,
      isAutoAssigningSales: false,
      isAutoAssigningPurchase: false,
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false
    };
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])),
  created: function created() {
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.getItemCode();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showProductCreateModal = !this.showProductCreateModal;

      // When opening the modal, ensure account routing settings are loaded
      if (this.showProductCreateModal) {
        this.loadAccountRoutingSettings();
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveProduct();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.chartOfAccounts = data || [];
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error loading chart of accounts:", _t);
              _this.chartOfAccounts = [];
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this2$accountRouting, _this2$accountRouting2, _this2$accountRouting3, _this2$accountRouting4, response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 1:
              response = _context2.v;
              _this2.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this2.isSalesAccountAutomatic = _this2.accountRoutingSettings.sales && _this2.accountRoutingSettings.sales.routing_type === 'automatic';
              _this2.isPurchaseAccountAutomatic = _this2.accountRoutingSettings.purchase && _this2.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this2.isSalesAccountAutomatic && _this2.accountRoutingSettings.sales.main_account_id) {
                _this2.form.salesAccountId = _this2.accountRoutingSettings.sales.main_account_id;
              }
              if (_this2.isPurchaseAccountAutomatic && _this2.accountRoutingSettings.purchase.main_account_id) {
                _this2.form.purchaseAccountId = _this2.accountRoutingSettings.purchase.main_account_id;
              }
              console.log('=== ACCOUNT ROUTING DEBUG ===');
              console.log('Full account routing settings:', _this2.accountRoutingSettings);
              console.log('Sales settings:', _this2.accountRoutingSettings.sales);
              console.log('Purchase settings:', _this2.accountRoutingSettings.purchase);
              console.log('Sales routing type:', (_this2$accountRouting = _this2.accountRoutingSettings.sales) === null || _this2$accountRouting === void 0 ? void 0 : _this2$accountRouting.routing_type);
              console.log('Sales main_account_id:', (_this2$accountRouting2 = _this2.accountRoutingSettings.sales) === null || _this2$accountRouting2 === void 0 ? void 0 : _this2$accountRouting2.main_account_id);
              console.log('Purchase routing type:', (_this2$accountRouting3 = _this2.accountRoutingSettings.purchase) === null || _this2$accountRouting3 === void 0 ? void 0 : _this2$accountRouting3.routing_type);
              console.log('Purchase main_account_id:', (_this2$accountRouting4 = _this2.accountRoutingSettings.purchase) === null || _this2$accountRouting4 === void 0 ? void 0 : _this2$accountRouting4.main_account_id);
              console.log('isSalesAccountAutomatic:', _this2.isSalesAccountAutomatic);
              console.log('isPurchaseAccountAutomatic:', _this2.isPurchaseAccountAutomatic);
              console.log('Form salesAccountId after auto-assignment:', _this2.form.salesAccountId);
              console.log('Form purchaseAccountId after auto-assignment:', _this2.form.purchaseAccountId);
              console.log('==============================');
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error("Error loading account routing settings:", _t2);
              // Set defaults if API fails
              _this2.isSalesAccountAutomatic = false;
              _this2.isPurchaseAccountAutomatic = false;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this3$form$ge, data;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this3.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 1:
              _yield$_this3$form$ge = _context3.v;
              data = _yield$_this3$form$ge.data;
              _this3.categories = data.data;
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get2, data;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this4.brands = data.data;
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 1:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              _this5.units = data.data;
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get4, data, defaultVatRateSlug;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get4 = _context6.v;
              data = _yield$axios$get4.data;
              _this6.taxes = data.data;
              // assign default vat rate
              if (_this6.taxes && _this6.taxes.length > 0) {
                defaultVatRateSlug = _this6.appInfo.defaultVatRateSlug;
                _this6.form.productTax = _this6.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                });
              }
              _this6.calculatePrice();
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // get item code
    getItemCode: function getItemCode() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _yield$axios$get5, data;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return axios_default().get(window.location.origin + "/api/generate-itemcode");
            case 1:
              _yield$axios$get5 = _context7.v;
              data = _yield$axios$get5.data;
              _this7.form.itemCode = data.code;
              _this7.prefix = data.prefix;
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // calculate selling price
    calculatePrice: function calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType) {
        var discount = 0;
        if (this.form.discount && this.form.discount > 0) {
          discount = this.form.discount / 100 * this.form.regularPrice;
        }
        var currentPrice = this.form.regularPrice - discount;
        var taxAmount = 0;
        var totalTax = 0;
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100;
        }
        if (this.form.taxType == "Exclusive") {
          totalTax = currentPrice * taxAmount;
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount);
        }
        if (this.form.taxType == "Exclusive") {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax;
        } else {
          this.form.sellingPrice = (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax;
        }
        return;
      }
      this.form.sellingPrice = this.form.regularPrice;
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this8 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this8.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // save product
    saveProduct: function saveProduct() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _this9$accountRouting, _this9$accountRouting2;
        var needsSalesAccount, needsPurchaseAccount;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (!(_this9.form.itemType === 'service' && !_this9.form.servicePurchasePrice)) {
                _context8.n = 1;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Service Purchase Price is required for services")
              });
              return _context8.a(2);
            case 1:
              // Debug: Log validation state
              console.log("Validation state:", {
                isSalesAccountAutomatic: _this9.isSalesAccountAutomatic,
                overrideSalesAccount: _this9.form.overrideSalesAccount,
                salesAccountId: _this9.form.salesAccountId,
                isPurchaseAccountAutomatic: _this9.isPurchaseAccountAutomatic,
                overridePurchaseAccount: _this9.form.overridePurchaseAccount,
                purchaseAccountId: _this9.form.purchaseAccountId
              });

              // Validate sales account - required if not automatic OR if override is checked
              needsSalesAccount = !_this9.isSalesAccountAutomatic || _this9.form.overrideSalesAccount;
              if (!(needsSalesAccount && !_this9.form.salesAccountId)) {
                _context8.n = 2;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Sales Account is required")
              });
              return _context8.a(2);
            case 2:
              // Validate purchase account - required if not automatic OR if override is checked
              needsPurchaseAccount = !_this9.isPurchaseAccountAutomatic || _this9.form.overridePurchaseAccount;
              if (!(needsPurchaseAccount && !_this9.form.purchaseAccountId)) {
                _context8.n = 3;
                break;
              }
              toast.fire({
                type: "error",
                title: _this9.$t("Purchase Account is required")
              });
              return _context8.a(2);
            case 3:
              // Debug: Log form data being sent
              console.log("=== FORM SUBMISSION DEBUG ===");
              console.log("Form data being sent:", _this9.form.data());
              console.log("Account routing settings:", _this9.accountRoutingSettings);
              console.log("Sales settings:", _this9.accountRoutingSettings.sales);
              console.log("Purchase settings:", _this9.accountRoutingSettings.purchase);
              console.log("Sales routing type:", (_this9$accountRouting = _this9.accountRoutingSettings.sales) === null || _this9$accountRouting === void 0 ? void 0 : _this9$accountRouting.routing_type);
              console.log("Sales main_account_id:", (_this9$accountRouting2 = _this9.accountRoutingSettings.sales) === null || _this9$accountRouting2 === void 0 ? void 0 : _this9$accountRouting2.main_account_id);
              console.log("Form salesAccountId:", _this9.form.salesAccountId);
              console.log("Form purchaseAccountId:", _this9.form.purchaseAccountId);
              console.log("=============================");
              _context8.n = 4;
              return _this9.form.post(window.location.origin + "/api/products").then(function (response) {
                toast.fire({
                  type: "success",
                  title: _this9.$t("Product added successfully")
                });

                // Emit the newly created product data
                if (response.data && response.data.data) {
                  var newProduct = response.data.data;
                  // Format the product data to match the expected structure for v-select
                  var formattedProduct = {
                    id: newProduct.id,
                    slug: newProduct.slug,
                    name: newProduct.name,
                    code: newProduct.code,
                    label: "".concat(newProduct.name, " [").concat(newProduct.code, "]"),
                    itemType: newProduct.itemType,
                    itemModel: newProduct.itemModel || '',
                    avgPurchasePrice: newProduct.avgPurchasePrice || 0,
                    regularPrice: newProduct.regularPrice || 0,
                    priceWithDiscount: newProduct.sellingPrice,
                    sellingPrice: newProduct.sellingPrice,
                    taxAmount: newProduct.taxAmount || 0,
                    taxType: newProduct.taxType,
                    taxRate: newProduct.taxRate,
                    productTax: newProduct.productTax,
                    inventoryCount: newProduct.inventoryCount || 0,
                    image: newProduct.image || '',
                    sales_account_id: newProduct.sales_account_id,
                    purchase_account_id: newProduct.purchase_account_id
                  };
                  _this9.$emit('productCreated', formattedProduct);
                }

                // Store auto-assigned account IDs before reset
                var autoAssignedSalesAccountId = _this9.isSalesAccountAutomatic ? _this9.form.salesAccountId : null;
                var autoAssignedPurchaseAccountId = _this9.isPurchaseAccountAutomatic ? _this9.form.purchaseAccountId : null;
                _this9.form.reset();
                _this9.form.itemType = "product"; // Reset to default
                _this9.form.overrideSalesAccount = false; // Reset override flags
                _this9.form.overridePurchaseAccount = false;

                // Restore auto-assigned account IDs after reset
                if (autoAssignedSalesAccountId) {
                  _this9.form.salesAccountId = autoAssignedSalesAccountId;
                }
                if (autoAssignedPurchaseAccountId) {
                  _this9.form.purchaseAccountId = autoAssignedPurchaseAccountId;
                }
                _this9.showProductCreateModal = false;
                _this9.$emit('reloadProducts');
              })["catch"](function (error) {
                var _error$response;
                console.error("Error creating product:", error);
                var errorMessage = ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this9.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: errorMessage
                });
              });
            case 4:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // Auto-assign sales account
    autoAssignSalesAccount: function autoAssignSalesAccount() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var defaultAccount;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              if (!_this0.isAutoAssigningSales) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2);
            case 1:
              _this0.isAutoAssigningSales = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this0.form.itemType === 'product') {
                  // Look for "Sales of Goods" or similar
                  defaultAccount = _this0.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this0.form.itemType === 'service') {
                  // Look for "Sales of Services" or similar
                  defaultAccount = _this0.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Sales account
                if (!defaultAccount) {
                  defaultAccount = _this0.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this0.chartOfAccounts.length > 0) {
                  defaultAccount = _this0.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this0.form.salesAccountId = defaultAccount.id;
                  toast.fire({
                    type: "success",
                    title: _this0.$t("Sales Account auto-assigned successfully")
                  });
                } else {
                  toast.fire({
                    type: "error",
                    title: _this0.$t("No suitable Sales Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning sales account:", error);
                toast.fire({
                  type: "error",
                  title: _this0.$t("Failed to auto-assign Sales Account")
                });
              } finally {
                _this0.isAutoAssigningSales = false;
              }
            case 2:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // Auto-assign purchase account
    autoAssignPurchaseAccount: function autoAssignPurchaseAccount() {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var defaultAccount;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              if (!_this1.isAutoAssigningPurchase) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2);
            case 1:
              _this1.isAutoAssigningPurchase = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this1.form.itemType === 'product') {
                  // Look for "Cost of Goods Sold" or similar
                  defaultAccount = _this1.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this1.form.itemType === 'service') {
                  // Look for "Cost of Services" or similar
                  defaultAccount = _this1.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Cost account
                if (!defaultAccount) {
                  defaultAccount = _this1.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this1.chartOfAccounts.length > 0) {
                  defaultAccount = _this1.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this1.form.purchaseAccountId = defaultAccount.id;
                  toast.fire({
                    type: "success",
                    title: _this1.$t("Purchase Account auto-assigned successfully")
                  });
                } else {
                  toast.fire({
                    type: "error",
                    title: _this1.$t("No suitable Purchase Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning purchase account:", error);
                toast.fire({
                  type: "error",
                  title: _this1.$t("Failed to auto-assign Purchase Account")
                });
              } finally {
                _this1.isAutoAssigningPurchase = false;
              }
            case 2:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    // Handle Select it manually checkbox change
    onOverrideSalesAccountChange: function onOverrideSalesAccountChange() {
      if (this.form.overrideSalesAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.salesAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isSalesAccountAutomatic && this.accountRoutingSettings.sales.main_account_id) {
          this.form.salesAccountId = this.accountRoutingSettings.sales.main_account_id;
        }
      }
    },
    // Handle Select it manually checkbox change
    onOverridePurchaseAccountChange: function onOverridePurchaseAccountChange() {
      if (this.form.overridePurchaseAccount) {
        // When overriding, clear the current account selection to force manual selection
        this.form.purchaseAccountId = "";
      } else {
        // When not overriding and automatic is enabled, restore the automatic account
        if (this.isPurchaseAccountAutomatic && this.accountRoutingSettings.purchase.main_account_id) {
          this.form.purchaseAccountId = this.accountRoutingSettings.purchase.main_account_id;
        }
      }
    }
  }
});
;// ./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductCreateModalvue_type_script_lang_js = (ProductCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=56bbb7fc&prod&scoped=true&lang=css
var ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css = __webpack_require__(13415);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=56bbb7fc&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css = (ProductCreateModalvue_type_style_index_0_id_56bbb7fc_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=56bbb7fc&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ProductCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ProductCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "56bbb7fc",
  null
  
)

/* harmony default export */ const ProductCreateModal = (component.exports);

/***/ }),

/***/ 66574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductEditModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=template&id=565cc0e9&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    style: {
      cursor: _vm.product ? 'pointer' : 'not-allowed'
    },
    on: {
      "click": function click($event) {
        _vm.product && _vm.openModal();
      }
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('VModal', {
    attrs: {
      "size": "lg"
    },
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Edit Product")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showProductEditModal,
      callback: function callback($$v) {
        _vm.showProductEditModal = $$v;
      },
      expression: "showProductEditModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100"
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.updateProduct.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-cube mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Item Type")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "item-type-selector"
  }, [_c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'product'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "product",
      "name": "itemType",
      "value": "product",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "product")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "product");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cube"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Product")))])])]), _vm._v(" "), _c('label', {
    staticClass: "item-type-option",
    "class": {
      'active': _vm.form.itemType === 'service'
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemType,
      expression: "form.itemType"
    }],
    attrs: {
      "type": "radio",
      "id": "service",
      "name": "itemType",
      "value": "service",
      "autocomplete": "off"
    },
    domProps: {
      "checked": _vm._q(_vm.form.itemType, "service")
    },
    on: {
      "change": function change($event) {
        return _vm.$set(_vm.form, "itemType", "service");
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('i', {
    staticClass: "fas fa-cogs"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.$t("Service")))])])])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemType"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Product Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Name")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemName,
      expression: "form.itemName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemName')
    },
    attrs: {
      "id": "itemName",
      "type": "text",
      "name": "itemName",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.form.itemName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemCode"
    }
  }, [_vm._v(_vm._s(_vm.$t("Item Code")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_vm.prefix ? _c('span', {
    staticClass: "input-group-text"
  }, [_vm._v(_vm._s(_vm.prefix))]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemCode,
      expression: "form.itemCode"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemCode')
    },
    attrs: {
      "type": "text",
      "readonly": "",
      "name": "itemCode",
      "placeholder": _vm.$t('Enter item code')
    },
    domProps: {
      "value": _vm.form.itemCode
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemCode", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemCode"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t("Category")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "subCategory",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.form.subCategory,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "subCategory", $$v);
      },
      expression: "form.subCategory"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "subCategory"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Unit")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit')
    },
    attrs: {
      "options": _vm.units,
      "label": "name",
      "name": "itemUnit",
      "placeholder": _vm.$t('Select a unit')
    },
    model: {
      value: _vm.form.itemUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "itemUnit", $$v);
      },
      expression: "form.itemUnit"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "productTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Tax Rate")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('productTax')
    },
    attrs: {
      "options": _vm.taxes,
      "label": "code",
      "name": "productTax",
      "placeholder": _vm.$t('Select a tax')
    },
    on: {
      "input": _vm.calculatePrice
    },
    model: {
      value: _vm.form.productTax,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "productTax", $$v);
      },
      expression: "form.productTax"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "productTax"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "itemModel"
    }
  }, [_vm._v(_vm._s(_vm.$t("Model")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.itemModel,
      expression: "form.itemModel"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('itemModel')
    },
    attrs: {
      "id": "itemModel",
      "type": "text",
      "name": "itemModel",
      "placeholder": _vm.$t('Enter a model')
    },
    domProps: {
      "value": _vm.form.itemModel
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "itemModel", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemModel"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "regularPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.regularPrice,
      expression: "form.regularPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('regularPrice')
    },
    attrs: {
      "id": "regularPrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "regularPrice",
      "placeholder": _vm.$t('Enter price')
    },
    domProps: {
      "value": _vm.form.regularPrice
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "regularPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "regularPrice"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "discount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount (%)")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount')
    },
    attrs: {
      "type": "number",
      "min": "0",
      "max": "100",
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculatePrice,
      "keyup": _vm.calculatePrice,
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "discount"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "sellingPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Final Price")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.sellingPrice,
      expression: "form.sellingPrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('sellingPrice')
    },
    attrs: {
      "id": "sellingPrice",
      "type": "number",
      "readonly": "",
      "name": "sellingPrice",
      "placeholder": _vm.$t('Calculated automatically')
    },
    domProps: {
      "value": _vm.form.sellingPrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "sellingPrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "sellingPrice"
    }
  })], 1)])])])]), _vm._v(" "), _vm.form.itemType === 'service' ? _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-dollar-sign mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Service Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "servicePurchasePrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Price")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.servicePurchasePrice,
      expression: "form.servicePurchasePrice"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('servicePurchasePrice')
    },
    attrs: {
      "id": "servicePurchasePrice",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "servicePurchasePrice",
      "placeholder": _vm.$t('Enter purchase price')
    },
    domProps: {
      "value": _vm.form.servicePurchasePrice
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "servicePurchasePrice", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "servicePurchasePrice"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Chart of Accounts")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('salesAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "salesAccountId",
      "placeholder": _vm.$t('Select sales account'),
      "required": ""
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
      value: _vm.form.salesAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "salesAccountId", $$v);
      },
      expression: "form.salesAccountId"
    }
  }), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Originally auto-assigned, but you can change it")) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "salesAccountId"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Account")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('purchaseAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "name": "purchaseAccountId",
      "placeholder": _vm.$t('Select purchase account'),
      "required": ""
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref2) {
        var name = _ref2.name,
          code = _ref2.code,
          type = _ref2.type;
        return [_c('div', [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('small', {
          staticClass: "text-muted"
        }, [_vm._v(_vm._s(code) + " - " + _vm._s(type))])])];
      }
    }]),
    model: {
      value: _vm.form.purchaseAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "purchaseAccountId", $$v);
      },
      expression: "form.purchaseAccountId"
    }
  }), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "form-text text-info"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Originally auto-assigned, but you can change it")) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "purchaseAccountId"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Additional Details")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
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
  }, [_vm._v(_vm._s(_vm.$t("Active")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
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
  }, [_c('i', {
    staticClass: "fas fa-upload"
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n                    ")])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "image"
    }
  }), _vm._v(" "), _vm.url ? _c('div', {
    staticClass: "image-preview mt-2"
  }, [_c('img', {
    staticClass: "img-fluid rounded",
    staticStyle: {
      "max-height": "80px"
    },
    attrs: {
      "src": _vm.url,
      "alt": _vm.$t('Product Image')
    }
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Notes")))]), _vm._v(" "), _c('textarea', {
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
      "rows": "3",
      "name": "note",
      "placeholder": _vm.$t('Add any additional notes...')
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
  })], 1)])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary mr-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.form.busy
    },
    on: {
      "click": _vm.updateProduct
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Update")) + "\n      ")])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/VModal.vue + 5 modules
var VModal = __webpack_require__(35079);
// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vform/src/components/bootstrap5/Button.vue + 3 modules
var Button = __webpack_require__(15677);
// EXTERNAL MODULE: ./node_modules/vform/src/components/bootstrap5/HasError.vue + 4 modules
var HasError = __webpack_require__(73883);
;// ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=template&id=0ddbf4f7
var AlertErrorvue_type_template_id_0ddbf4f7_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),_vm._t("default",function(){return [(_vm.form.errors.has('error'))?_c('div',{domProps:{"innerHTML":_vm._s(_vm.form.errors.get('error'))}}):(_vm.form.errors.has('message'))?_c('div',{domProps:{"innerHTML":_vm._s(_vm.form.errors.get('message'))}}):_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]})],2):_vm._e()
}
var AlertErrorvue_type_template_id_0ddbf4f7_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertError.js
var AlertError = __webpack_require__(8739);
;// ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js



/* harmony default export */ const AlertErrorvue_type_script_lang_js = ({
  name: 'AlertError',

  extends: AlertError/* default */.A
});

;// ./node_modules/vform/src/components/bootstrap5/AlertError.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertErrorvue_type_script_lang_js = (AlertErrorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./node_modules/vform/src/components/bootstrap5/AlertError.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertErrorvue_type_script_lang_js,
  AlertErrorvue_type_template_id_0ddbf4f7_render,
  AlertErrorvue_type_template_id_0ddbf4f7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertError = (component.exports);
;// ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=template&id=3a05553a
var AlertErrorsvue_type_template_id_3a05553a_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.errors.any())?_c('div',{staticClass:"alert alert-danger alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),(_vm.message)?_c('div',{staticClass:"mb-2",domProps:{"innerHTML":_vm._s(_vm.message)}}):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"mb-0 ps-4"},_vm._l((_vm.form.errors.flatten()),function(error,index){return _c('li',{key:index,domProps:{"innerHTML":_vm._s(error)}})}),0)]):_vm._e()
}
var AlertErrorsvue_type_template_id_3a05553a_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertErrors.js
var AlertErrors = __webpack_require__(11014);
;// ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js



/* harmony default export */ const AlertErrorsvue_type_script_lang_js = ({
  name: 'AlertErrors',

  extends: AlertErrors/* default */.A
});

;// ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertErrorsvue_type_script_lang_js = (AlertErrorsvue_type_script_lang_js); 
;// ./node_modules/vform/src/components/bootstrap5/AlertErrors.vue





/* normalize component */
;
var AlertErrors_component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertErrorsvue_type_script_lang_js,
  AlertErrorsvue_type_template_id_3a05553a_render,
  AlertErrorsvue_type_template_id_3a05553a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertErrors = (AlertErrors_component.exports);
;// ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=template&id=4c30318c
var AlertSuccessvue_type_template_id_4c30318c_render = function render(){var _vm=this,_c=_vm._self._c;return (_vm.form.successful)?_c('div',{staticClass:"alert alert-success alert-dismissible",attrs:{"role":"alert"}},[(_vm.dismissible)?_c('button',{staticClass:"btn-close",attrs:{"type":"button","aria-label":"Dismiss"},on:{"click":_vm.dismiss}}):_vm._e(),_vm._v(" "),_vm._t("default",function(){return [_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}})]})],2):_vm._e()
}
var AlertSuccessvue_type_template_id_4c30318c_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/vform/src/components/AlertSuccess.js
var AlertSuccess = __webpack_require__(81918);
;// ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js



/* harmony default export */ const AlertSuccessvue_type_script_lang_js = ({
  name: 'AlertSuccess',

  extends: AlertSuccess/* default */.A
});

;// ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue?vue&type=script&lang=js
 /* harmony default export */ const bootstrap5_AlertSuccessvue_type_script_lang_js = (AlertSuccessvue_type_script_lang_js); 
;// ./node_modules/vform/src/components/bootstrap5/AlertSuccess.vue





/* normalize component */
;
var AlertSuccess_component = (0,componentNormalizer/* default */.A)(
  bootstrap5_AlertSuccessvue_type_script_lang_js,
  AlertSuccessvue_type_template_id_4c30318c_render,
  AlertSuccessvue_type_template_id_4c30318c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const bootstrap5_AlertSuccess = (AlertSuccess_component.exports);
;// ./node_modules/vform/src/components/bootstrap5/index.js








// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




/* harmony default export */ const ProductEditModalvue_type_script_lang_js = ({
  name: "ProductEditModal",
  components: {
    VModal: VModal["default"],
    HasError: HasError/* default */.A
  },
  props: {
    product: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      showProductEditModal: false,
      url: null,
      currentProduct: null,
      // Store the product being edited
      form: new vform_es/* default */.Ay({
        itemType: "product",
        itemName: "",
        itemCode: "",
        itemModel: "",
        barcodeSymbology: "CODE128",
        subCategory: "",
        brand: "",
        itemUnit: "",
        productTax: "",
        taxType: "Exclusive",
        regularPrice: "",
        servicePurchasePrice: "",
        openingStockCount: "",
        openingStockUnitPrice: "",
        newOpeningStockCount: "",
        newOpeningStockUnitPrice: "",
        isOpeningStock: false,
        discount: "",
        sellingPrice: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: ""
      }),
      categories: [],
      brands: [],
      units: [],
      taxes: [],
      chartOfAccounts: [],
      prefix: "",
      accountRoutingSettings: null,
      isSalesAccountAutomatic: false,
      isPurchaseAccountAutomatic: false
    };
  },
  created: function created() {
    // Pre-load dropdown data so it's available immediately when modal opens
    this.getSubCategories();
    this.getUnits();
    // this.getBrands(); // Temporarily commented out
    this.getTaxes();
    this.loadChartOfAccounts();
    this.loadAccountRoutingSettings();
  },
  methods: {
    openModal: function openModal() {
      var _arguments = arguments,
        _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var product, productToEdit, needsFullData, identifier, _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              product = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
              // If product is passed as parameter, use it; otherwise use the prop
              productToEdit = product || _this.product;
              if (productToEdit) {
                _context.n = 1;
                break;
              }
              console.warn('No product provided to ProductEditModal');
              return _context.a(2);
            case 1:
              // Store the product being edited in component data
              _this.currentProduct = productToEdit;

              // Show modal immediately
              _this.showProductEditModal = true;

              // Load product data immediately with available data
              _this.loadProductData(productToEdit);

              // Check if we need to fetch complete product data in background
              needsFullData = !productToEdit.itemUnit || !productToEdit.itemTax || !productToEdit.subCategory || !productToEdit.brand || typeof productToEdit.itemUnit === 'string' || typeof productToEdit.itemTax === 'string';
              if (!(needsFullData && (productToEdit.slug || productToEdit.id))) {
                _context.n = 5;
                break;
              }
              console.log('Fetching complete product data from API...');
              identifier = productToEdit.slug || productToEdit.id;
              _context.p = 2;
              _context.n = 3;
              return axios_default().get("/api/products/".concat(identifier));
            case 3:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              // Update with complete product data from API
              _this.loadProductData(data.data);
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.warn('Failed to fetch complete product data, using provided data:', _t);
              // Keep using the initially loaded product data
            case 5:
              return _context.a(2);
          }
        }, _callee, null, [[2, 4]]);
      }))();
    },
    loadProductData: function loadProductData(product) {
      var _this2 = this;
      console.log('=== LOADING PRODUCT DATA DEBUG ===');
      console.log('Full product object:', product);
      console.log('Product keys:', Object.keys(product));
      console.log('Product structure:');
      console.log('- itemType/item_type:', product.itemType, '/', product.item_type);
      console.log('- name/item_name:', product.name, '/', product.item_name);
      console.log('- price/regular_price/regularPrice:', product.price, '/', product.regular_price, '/', product.regularPrice);
      console.log('- subCategory/sub_category_id:', product.subCategory, '/', product.sub_category_id);
      console.log('- itemUnit/unit_id/item_unit:', product.itemUnit, '/', product.unit_id, '/', product.item_unit);
      console.log('- itemTax/tax_id/vat_rate_id:', product.itemTax, '/', product.tax_id, '/', product.vat_rate_id);
      console.log('- brand/brand_id/itemBrand:', product.brand, '/', product.brand_id, '/', product.itemBrand);
      console.log('===================================');
      this.form.itemType = product.item_type || product.itemType || "product";
      this.form.itemName = product.name || product.item_name || "";
      this.form.itemModel = product.model || product.item_model || "";
      this.form.itemCode = product.code || product.item_code || "";
      this.form.barcodeSymbology = product.barcode_symbology || product.barcodeSymbology || product.symbology || "CODE128";

      // Handle subCategory - find the exact object from categories array
      if (product.subCategory) {
        if (_typeof(product.subCategory) === 'object' && product.subCategory.id) {
          // Find the exact object from categories array to ensure proper v-select binding
          var categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory.id;
          });
          this.form.subCategory = categoryObject || product.subCategory;
        } else {
          // It's an ID, find the object
          var _categoryObject = this.categories.find(function (cat) {
            return cat.id == product.subCategory;
          });
          this.form.subCategory = _categoryObject || product.subCategory;
        }
      } else {
        // Try to find by ID if available
        var categoryId = product.sub_category_id || product.category_id;
        if (categoryId) {
          var _categoryObject2 = this.categories.find(function (cat) {
            return cat.id == categoryId;
          });
          this.form.subCategory = _categoryObject2 || "";
        } else {
          this.form.subCategory = "";
        }
      }

      // Handle brand - find the exact object from brands array
      if (product.itemBrand) {
        if (_typeof(product.itemBrand) === 'object' && product.itemBrand.id) {
          // Find the exact object from brands array to ensure proper v-select binding
          var brandObject = this.brands.find(function (brand) {
            return brand.id == product.itemBrand.id;
          });
          this.form.brand = brandObject || product.itemBrand;
        } else {
          // It's an ID, find the object
          var _brandObject = this.brands.find(function (brand) {
            return brand.id == product.itemBrand;
          });
          this.form.brand = _brandObject || product.itemBrand;
        }
      } else {
        // Try to find by ID if available
        var brandId = product.brand_id || product.brand || product.item_brand;
        if (brandId) {
          var _brandObject2 = this.brands.find(function (brand) {
            return brand.id == brandId;
          });
          this.form.brand = _brandObject2 || "";
        } else {
          this.form.brand = "";
        }
      }

      // Handle unit - find the exact object from units array
      if (product.itemUnit) {
        if (_typeof(product.itemUnit) === 'object' && product.itemUnit.id) {
          // Find the exact object from units array to ensure proper v-select binding
          var unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit.id;
          });
          this.form.itemUnit = unitObject || product.itemUnit;
        } else {
          // It's an ID, find the object
          var _unitObject = this.units.find(function (unit) {
            return unit.id == product.itemUnit;
          });
          this.form.itemUnit = _unitObject || product.itemUnit;
        }
      } else {
        // Try to find by ID if available
        var unitId = product.unit_id || product.item_unit || product.unit;
        if (unitId) {
          var _unitObject2 = this.units.find(function (unit) {
            return unit.id == unitId;
          });
          this.form.itemUnit = _unitObject2 || "";
        } else {
          this.form.itemUnit = "";
        }
      }

      // Handle tax field - find the exact object from taxes array
      if (product.itemTax) {
        if (_typeof(product.itemTax) === 'object' && product.itemTax.id) {
          // Find the exact object from taxes array to ensure proper v-select binding
          var taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax.id;
          });
          this.form.productTax = taxObject || product.itemTax;
        } else {
          // It's an ID, find the object
          var _taxObject = this.taxes.find(function (tax) {
            return tax.id == product.itemTax;
          });
          this.form.productTax = _taxObject || product.itemTax;
        }
      } else if (product.tax_id || product.tax || product.item_tax || product.vat_rate_id) {
        var taxId = product.tax_id || product.tax || product.item_tax || product.vat_rate_id;
        // Find the tax object by ID from the taxes array
        var _taxObject2 = this.taxes.find(function (tax) {
          return tax.id == taxId;
        });
        this.form.productTax = _taxObject2 || "";
      } else {
        this.form.productTax = "";
      }
      this.form.taxType = product.tax_type || product.taxType || "Exclusive";
      this.form.regularPrice = product.regular_price || product.regularPrice || product.price || "";
      this.form.servicePurchasePrice = product.service_purchase_price || product.servicePurchasePrice || "";
      this.form.discount = product.discount || 0;
      this.form.sellingPrice = product.selling_price || product.sellingPrice || "";
      this.form.openingStockCount = product.opening_stock_count || product.openingStockCount || "";
      this.form.openingStockUnitPrice = product.opening_stock_unit_price || product.openingStockUnitPrice || "";
      this.form.note = product.note || product.description || "";
      this.form.status = product.status || "1";
      this.form.alertQuantity = product.alert_quantity || product.alertQuantity || product.alert_qty || 1;
      this.form.salesAccountId = product.sales_account_id || (product.sales_account ? product.sales_account.id : "") || "";
      this.form.purchaseAccountId = product.purchase_account_id || (product.purchase_account ? product.purchase_account.id : "") || "";
      this.url = product.image || "";
      console.log('Form data after loading:', this.form.data()); // Debug log

      // Calculate selling price after loading data
      this.$nextTick(function () {
        _this2.calculatePrice();
      });
    },
    updateProduct: function updateProduct() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var currentProduct, productSlug, productId, identifier, formData, response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              // Get the current product being edited (stored in component data)
              currentProduct = _this3.currentProduct; // Debug logging to understand the product object structure
              console.log('Current product object:', currentProduct);
              console.log('Available properties:', currentProduct ? Object.keys(currentProduct) : 'No product');
              if (currentProduct) {
                _context2.n = 1;
                break;
              }
              console.error('No product available for update');
              toast.fire({
                type: "error",
                title: _this3.$t("No product selected for update")
              });
              return _context2.a(2);
            case 1:
              // Check for slug property with fallbacks
              productSlug = currentProduct.slug || currentProduct.productSlug || currentProduct.product_slug;
              productId = currentProduct.id || currentProduct.productID || currentProduct.product_id;
              if (!(!productSlug && !productId)) {
                _context2.n = 2;
                break;
              }
              console.error('No product identifier (slug or ID) available for update');
              console.error('Product object:', currentProduct);
              toast.fire({
                type: "error",
                title: _this3.$t("Product identifier missing. Cannot update product.")
              });
              return _context2.a(2);
            case 2:
              // If we don't have a slug but have an ID, we need to fetch the product to get the slug
              identifier = productSlug;
              if (!productSlug && productId) {
                console.log('No slug found, attempting to use ID as fallback:', productId);
                // For now, try to use the ID directly - if the backend doesn't support it, we'll get an error
                identifier = productId;
              }

              // Validate required fields based on item type
              if (!(_this3.form.itemType === 'service' && !_this3.form.servicePurchasePrice)) {
                _context2.n = 3;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Service Purchase Price is required for services")
              });
              return _context2.a(2);
            case 3:
              if (!_this3.form.isOpeningStock) {
                _context2.n = 5;
                break;
              }
              if (!(!_this3.form.newOpeningStockCount || _this3.form.newOpeningStockCount <= 0)) {
                _context2.n = 4;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Count is required and must be greater than 0")
              });
              return _context2.a(2);
            case 4:
              if (!(!_this3.form.newOpeningStockUnitPrice || _this3.form.newOpeningStockUnitPrice <= 0)) {
                _context2.n = 5;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("New Opening Stock Unit Price is required and must be greater than 0")
              });
              return _context2.a(2);
            case 5:
              if (!(!_this3.isSalesAccountAutomatic && !_this3.form.salesAccountId)) {
                _context2.n = 6;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Sales Account is required")
              });
              return _context2.a(2);
            case 6:
              if (!(!_this3.isPurchaseAccountAutomatic && !_this3.form.purchaseAccountId)) {
                _context2.n = 7;
                break;
              }
              toast.fire({
                type: "error",
                title: _this3.$t("Purchase Account is required")
              });
              return _context2.a(2);
            case 7:
              console.log('Using identifier for API call:', identifier);

              // Transform object fields to IDs before sending
              formData = _this3.form.data(); // Transform v-select objects to IDs
              if (formData.subCategory && _typeof(formData.subCategory) === 'object') {
                formData.subCategory = formData.subCategory.id;
              }
              if (formData.brand && _typeof(formData.brand) === 'object') {
                formData.brand = formData.brand.id;
              }
              if (formData.itemUnit && _typeof(formData.itemUnit) === 'object') {
                formData.itemUnit = formData.itemUnit.id;
              }
              if (formData.productTax && _typeof(formData.productTax) === 'object') {
                formData.productTax = formData.productTax.id;
              }

              // Debug: Log each field transformation
              console.log('Field transformations:');
              console.log('- subCategory:', _this3.form.subCategory, '→', formData.subCategory);
              console.log('- brand:', _this3.form.brand, '→', formData.brand);
              console.log('- itemUnit:', _this3.form.itemUnit, '→', formData.itemUnit);
              console.log('- productTax:', _this3.form.productTax, '→', formData.productTax);
              console.log('Form data being sent:', formData);
              _context2.n = 8;
              return axios_default().put("/api/products/".concat(identifier), formData);
            case 8:
              response = _context2.v;
              if (response.data.success) {
                // Show success message with system notification style
                toast.fire({
                  type: "success",
                  title: _this3.$t("Product updated successfully")
                });
                _this3.showProductEditModal = false;

                // Emit event with updated product data so parent can update its arrays
                _this3.$emit("reloadProducts");
                _this3.$emit("productUpdated", {
                  originalProduct: _this3.currentProduct,
                  updatedData: formData
                });
                _this3.form.reset();
                _this3.url = null;
                _this3.currentProduct = null; // Clear the stored product
              }
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t2 = _context2.v;
              if (_t2.response && _t2.response.data) {
                if (_t2.response.data.errors) {
                  _this3.form.errors.set(_t2.response.data.errors);
                } else {
                  toast.fire({
                    type: "error",
                    title: _t2.response.data.message || _this3.$t("Error updating product")
                  });
                }
              } else {
                toast.fire({
                  type: "error",
                  title: _this3.$t("Error updating product")
                });
              }
              console.error('Error updating product:', _t2);
            case 10:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    closeModal: function closeModal() {
      this.showProductEditModal = false;
      this.currentProduct = null; // Clear the stored product
      this.form.reset();
      this.url = null;
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$_this4$form$ge, data, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _this4.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 1:
              _yield$_this4$form$ge = _context3.v;
              data = _yield$_this4$form$ge.data;
              _this4.categories = data.data;
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error("Error fetching categories:", _t3);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get2, data, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this5.brands = data.data;
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error("Error fetching brands:", _t4);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 1:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              _this6.units = data.data;
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              console.error("Error fetching units:", _t5);
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get4, data, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get4 = _context6.v;
              data = _yield$axios$get4.data;
              _this7.taxes = data.data;
              _this7.calculatePrice();
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t6 = _context6.v;
              console.error("Error fetching taxes:", _t6);
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _yield$axios$get5, data, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 1:
              _yield$axios$get5 = _context7.v;
              data = _yield$axios$get5.data;
              _this8.chartOfAccounts = data || [];
              _context7.n = 3;
              break;
            case 2:
              _context7.p = 2;
              _t7 = _context7.v;
              console.error("Error loading chart of accounts:", _t7);
              _this8.chartOfAccounts = [];
            case 3:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var response, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 1:
              response = _context8.v;
              _this9.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this9.isSalesAccountAutomatic = _this9.accountRoutingSettings.sales && _this9.accountRoutingSettings.sales.routing_type === 'automatic';
              _this9.isPurchaseAccountAutomatic = _this9.accountRoutingSettings.purchase && _this9.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this9.isSalesAccountAutomatic && _this9.accountRoutingSettings.sales.parent_account_id) {
                _this9.form.salesAccountId = _this9.accountRoutingSettings.sales.parent_account_id;
              }
              if (_this9.isPurchaseAccountAutomatic && _this9.accountRoutingSettings.purchase.parent_account_id) {
                _this9.form.purchaseAccountId = _this9.accountRoutingSettings.purchase.parent_account_id;
              }
              console.log('Account routing settings loaded:', _this9.accountRoutingSettings);
              console.log('Sales automatic:', _this9.isSalesAccountAutomatic);
              console.log('Purchase automatic:', _this9.isPurchaseAccountAutomatic);
              _context8.n = 3;
              break;
            case 2:
              _context8.p = 2;
              _t8 = _context8.v;
              console.error("Error loading account routing settings:", _t8);
              // Set defaults if API fails
              _this9.isSalesAccountAutomatic = false;
              _this9.isPurchaseAccountAutomatic = false;
            case 3:
              return _context8.a(2);
          }
        }, _callee8, null, [[0, 2]]);
      }))();
    },
    calculatePrice: function calculatePrice() {
      if (this.form.regularPrice && this.form.productTax && this.form.taxType && this.form.productTax.rate) {
        var discount = 0;
        if (this.form.discount && this.form.discount > 0) {
          discount = this.form.discount / 100 * this.form.regularPrice;
        }
        var currentPrice = this.form.regularPrice - discount;
        var taxAmount = 0;
        var totalTax = 0;
        if (this.form.productTax.rate > 0) {
          taxAmount = this.form.productTax.rate / 100;
        }
        if (this.form.taxType == "Exclusive") {
          totalTax = currentPrice * taxAmount;
        } else {
          totalTax = currentPrice - currentPrice / (1 + taxAmount);
        }
        if (this.form.taxType == "Exclusive") {
          this.form.sellingPrice = this.form.regularPrice - discount + totalTax;
        } else {
          this.form.sellingPrice = (this.form.regularPrice - discount) / (1 + taxAmount) + totalTax;
        }
        return;
      }
      this.form.sellingPrice = this.form.regularPrice;
    },
    onFileChange: function onFileChange(e) {
      var _this0 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif')) {
        reader.onloadend = function () {
          _this0.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        toast.fire({
          type: "error",
          title: this.$t('Please select a valid thumbnail with size less than 2 MB')
        });
      }
    }
  }
});
;// ./resources/js/components/ProductEditModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ProductEditModalvue_type_script_lang_js = (ProductEditModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=565cc0e9&prod&scoped=true&lang=css
var ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css = __webpack_require__(45332);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=565cc0e9&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css = (ProductEditModalvue_type_style_index_0_id_565cc0e9_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=565cc0e9&prod&scoped=true&lang=css

;// ./resources/js/components/ProductEditModal.vue



;


/* normalize component */

var ProductEditModal_component = (0,componentNormalizer/* default */.A)(
  components_ProductEditModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "565cc0e9",
  null
  
)

/* harmony default export */ const ProductEditModal = (ProductEditModal_component.exports);

/***/ }),

/***/ 75528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ StockAdjustmentModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=template&id=651d741c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isOpen ? _c('div', {
    staticClass: "modal-overlay",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "modal-content",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning mr-2"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Insufficient Stock")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_c('span', [_vm._v("×")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "alert alert-warning",
    attrs: {
      "role": "alert"
    }
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Stock Alert")) + ":")]), _vm._v("\n        " + _vm._s(_vm.$t("The selected quantity exceeds available stock for this product.")) + "\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "product-info mb-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Product Details")))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Name")) + ":")]), _vm._v(" " + _vm._s(_vm.product.name || 'N/A'))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Code")) + ":")]), _vm._v(" " + _vm._s(_vm.productCodeWithPrefix))]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Current Stock")) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-info"
  }, [_vm._v(_vm._s(_vm.product.inventoryCount || 0))])]), _vm._v(" "), _c('p', {
    staticClass: "mb-1"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Required Quantity")) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "badge badge-danger"
  }, [_vm._v(_vm._s(_vm.product.qty || 0))])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Stock Shortage")))]), _vm._v(" "), _c('p', {
    staticClass: "text-danger"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-circle mr-1"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.shortageQuantity))]), _vm._v(" " + _vm._s(_vm.$t("units short")) + "\n            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "stock-options"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("How to increase stock?")))]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "option-card",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.openInventoryAdjustment.apply(null, arguments);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Quick Stock Adjustment")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Add stock directly to inventory")))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "option-card",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.openPurchaseOrder.apply(null, arguments);
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "option-content"
  }, [_c('h6', [_vm._v(_vm._s(_vm.$t("Create Purchase Order")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Order more stock from supplier")))])])])])])]), _vm._v(" "), _vm.showQuickAdjustment ? _c('div', {
    staticClass: "quick-adjustment mt-4"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h6', {
    staticClass: "mb-0"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle text-success mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Quick Stock Adjustment")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.submitQuickAdjustment.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentReason"
    }
  }, [_vm._v(_vm._s(_vm.$t("Reason")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.reason,
      expression: "adjustmentForm.reason"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.adjustmentForm.errors.has('reason')
    },
    attrs: {
      "id": "adjustmentReason",
      "type": "text",
      "placeholder": _vm.$t('Enter reason for stock adjustment'),
      "required": ""
    },
    domProps: {
      "value": _vm.adjustmentForm.reason
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "reason", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.adjustmentForm,
      "field": "reason"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentQuantity"
    }
  }, [_vm._v(_vm._s(_vm.$t("Quantity to Add")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.quantity,
      expression: "adjustmentForm.quantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.adjustmentForm.errors.has('quantity')
    },
    attrs: {
      "id": "adjustmentQuantity",
      "type": "number",
      "min": "1",
      "placeholder": _vm.$t('Enter quantity to add'),
      "required": ""
    },
    domProps: {
      "value": _vm.adjustmentForm.quantity
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.adjustmentForm,
      "field": "quantity"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "adjustmentNote"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.adjustmentForm.note,
      expression: "adjustmentForm.note"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "adjustmentNote",
      "rows": "3",
      "placeholder": _vm.$t('Enter additional notes (optional)')
    },
    domProps: {
      "value": _vm.adjustmentForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.adjustmentForm, "note", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-actions"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        _vm.showQuickAdjustment = false;
      }
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Cancel")) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "disabled": _vm.adjustmentForm.busy
    }
  }, [_c('i', {
    staticClass: "fas fa-save mr-1"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Add Stock")) + "\n                ")])])])])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.closeModal
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Close")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.adjustQuantity
    }
  }, [_c('i', {
    staticClass: "fas fa-edit mr-1"
  }), _vm._v("\n        " + _vm._s(_vm.$t("Adjust Quantity")) + "\n      ")])])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "option-icon"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle text-success"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "option-icon"
  }, [_c('i', {
    staticClass: "fas fa-shopping-cart text-primary"
  })]);
}];

;// ./resources/js/components/StockAdjustmentModal.vue?vue&type=template&id=651d741c&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./resources/js/plugins/filter.js
var filter = __webpack_require__(44121);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=script&lang=js
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





var toast = sweetalert2_all_default().mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});
/* harmony default export */ const StockAdjustmentModalvue_type_script_lang_js = ({
  name: "StockAdjustmentModal",
  props: {
    isOpen: {
      type: Boolean,
      "default": false
    },
    product: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showQuickAdjustment: false,
      adjustmentForm: new vform_es/* default */.Ay({
        reason: "",
        quantity: 1,
        note: ""
      })
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    prefix: function prefix() {
      var _this$appInfo;
      return ((_this$appInfo = this.appInfo) === null || _this$appInfo === void 0 ? void 0 : _this$appInfo.productPrefix) || "";
    },
    shortageQuantity: function shortageQuantity() {
      if (!this.product || !this.product.inventoryCount || !this.product.qty) {
        return 0;
      }
      return Math.max(0, this.product.qty - this.product.inventoryCount);
    },
    productCodeWithPrefix: function productCodeWithPrefix() {
      if (!this.product || !this.product.code) {
        return 'N/A';
      }
      return this.prefix + this.product.code;
    }
  }),
  watch: {
    isOpen: function isOpen(newVal) {
      console.log("Modal isOpen changed to:", newVal);
      console.log("Product object:", this.product);
      if (newVal && this.product) {
        // Set default quantity to shortage amount
        this.adjustmentForm.quantity = this.shortageQuantity || 1;
        this.adjustmentForm.reason = "Stock shortage adjustment";
        console.log("Modal opened with product:", this.product.name);
      }
    }
  },
  mounted: function mounted() {
    console.log("StockAdjustmentModal mounted");
    console.log("Initial isOpen:", this.isOpen);
    console.log("Initial product:", this.product);
  },
  beforeDestroy: function beforeDestroy() {
    console.log("StockAdjustmentModal beforeDestroy");
    console.log("Product at destroy:", this.product);
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit("close");
      this.showQuickAdjustment = false;
      this.adjustmentForm.reset();
    },
    adjustQuantity: function adjustQuantity() {
      this.$emit("adjust-quantity", this.product);
      this.closeModal();
    },
    openInventoryAdjustment: function openInventoryAdjustment() {
      var _this = this;
      try {
        console.log("Opening inventory adjustment...");
        console.log("Product object:", this.product);

        // Validate product object
        if (!this.product || !this.product.id) {
          console.error("Invalid product object:", this.product);
          toast.fire({
            type: "error",
            title: this.$t("Error"),
            text: this.$t("Product information is missing. Please try again.")
          });
          return;
        }

        // Capture product data before closing modal to avoid null reference
        var productData = {
          id: this.product.id,
          name: this.product.name,
          code: this.product.code,
          slug: this.product.slug
        };
        console.log("Captured product data:", productData);

        // Ask parent to persist current form state before leaving
        this.$emit('persist');
        // Close modal first
        this.closeModal();

        // Then navigate with a small delay
        setTimeout(function () {
          try {
            console.log("Navigating to adjustments.create");
            console.log("Product ID:", productData.id);

            // Get current route safely
            var returnUrl = _this.$route ? _this.$route.fullPath : window.location.pathname;
            console.log("Return URL:", returnUrl);

            // Check if user has permission to create adjustments
            if (!_this.$can('adjustment-create')) {
              toast.fire({
                type: "error",
                title: _this.$t("Permission Denied"),
                text: _this.$t("You don't have permission to create adjustments.")
              });
              return;
            }

            // Try navigation with fallback
            _this.$router.push({
              name: "adjustments.create",
              query: {
                productId: productData.id,
                returnUrl: returnUrl
              }
            }).then(function () {
              console.log("Navigation successful");
            })["catch"](function (err) {
              console.error("Navigation error:", err);

              // Fallback: show alert with manual navigation option
              sweetalert2_all_default().fire({
                title: _this.$t("Navigate to Adjustments"),
                text: _this.$t("Click OK to go to the adjustments page manually."),
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: _this.$t("Go to Adjustments"),
                cancelButtonText: _this.$t("Cancel")
              }).then(function (result) {
                if (result.isConfirmed) {
                  window.location.href = '/inventory-adjustments/create?productId=' + productData.id + '&returnUrl=' + encodeURIComponent(returnUrl);
                }
              });
            });
          } catch (error) {
            console.error("Error in navigation timeout:", error);
            toast.fire({
              type: "error",
              title: _this.$t("Error"),
              text: _this.$t("An error occurred while navigating. Please try again.")
            });
          }
        }, 300);
      } catch (error) {
        console.error("Error in openInventoryAdjustment:", error);
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("An unexpected error occurred. Please try again.")
        });
      }
    },
    openPurchaseOrder: function openPurchaseOrder() {
      var _this2 = this;
      console.log("Opening purchase order...");
      // Close modal first
      this.closeModal();
      // Then navigate with a small delay
      setTimeout(function () {
        console.log("Navigating to purchases.create");
        _this2.$router.push({
          name: "purchases.create"
        })["catch"](function (err) {
          console.error("Navigation error:", err);
        });
      }, 300);
    },
    submitQuickAdjustment: function submitQuickAdjustment() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var adjustmentData, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              // Create a quick inventory adjustment
              adjustmentData = {
                adjustmentReason: _this3.adjustmentForm.reason,
                adjustmentDate: new Date().toISOString().slice(0, 10),
                note: _this3.adjustmentForm.note,
                status: 1,
                selectedProducts: [{
                  slug: _this3.product.slug,
                  adjustType: "Increment",
                  adjustQty: parseInt(_this3.adjustmentForm.quantity),
                  purchasePrice: _this3.product.avgPurchasePrice || 0
                }]
              };
              _context.n = 1;
              return axios_default().post("/api/inventory-adjustments", adjustmentData);
            case 1:
              toast.fire({
                type: "success",
                title: _this3.$t("Stock added successfully"),
                text: _this3.$t("The product stock has been increased.")
              });

              // Emit event to refresh product data
              _this3.$emit("stock-updated", {
                product: _this3.product,
                newQuantity: parseInt(_this3.adjustmentForm.quantity)
              });
              _this3.closeModal();
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error adding stock:", _t);
              toast.fire({
                type: "error",
                title: _this3.$t("Error"),
                text: _this3.$t("Failed to add stock. Please try again.")
              });
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    }
  }
});
;// ./resources/js/components/StockAdjustmentModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_StockAdjustmentModalvue_type_script_lang_js = (StockAdjustmentModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css
var StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css = __webpack_require__(85989);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css = (StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/StockAdjustmentModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_StockAdjustmentModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "651d741c",
  null
  
)

/* harmony default export */ const StockAdjustmentModal = (component.exports);

/***/ }),

/***/ 79377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".create-button[data-v-6a94e85c]{cursor:pointer;text-decoration:none}.modal-content[data-v-6a94e85c]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 79514:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-4c6861ea]{margin-bottom:15px}.footer-buttons[data-v-4c6861ea]{display:flex;gap:10px}.footer-buttons .btn[data-v-4c6861ea]{margin-right:10px}.footer-buttons .btn[data-v-4c6861ea]:last-child{margin-right:0}.create-btn[data-v-4c6861ea]{cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-4c6861ea]:hover{background-color:#e9ecef}.edit-btn[data-v-4c6861ea]{background-color:#17a2b8!important;border-color:#17a2b8!important;color:#fff!important}.edit-btn[data-v-4c6861ea]:hover{background-color:#138496!important;border-color:#117a8b!important}.table-custom[data-v-4c6861ea]{border:none!important}.quotations-create-table[data-v-4c6861ea]{border-collapse:separate;border-spacing:0}.quotations-create-table thead th[data-v-4c6861ea]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.quotations-create-table thead tr[data-v-4c6861ea]{border:none!important}.quotations-create-table thead th[data-v-4c6861ea]:first-child{border-top-left-radius:10px}.quotations-create-table thead th[data-v-4c6861ea]:last-child{border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-4c6861ea]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .quotations-create-table thead th[data-v-4c6861ea]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-4c6861ea]{gap:10px}.card[data-v-4c6861ea]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-4c6861ea]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.quotations-create-table .badge.badge-danger[data-v-4c6861ea]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-4c6861ea]{background:#fff!important}.btn-primary[data-v-4c6861ea]{background:#2ab930!important}.btn-secondary[data-v-4c6861ea]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.custom-qty-input[data-v-4c6861ea]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-4c6861ea],.button-plus[data-v-4c6861ea]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-4c6861ea]{background-color:#dc3545;color:#fff}.button-plus[data-v-4c6861ea]{background-color:#007bff;color:#fff}.button-minus[data-v-4c6861ea]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-4c6861ea]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-4c6861ea]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-4c6861ea]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}[dir=rtl] .d-flex[data-v-4c6861ea]{direction:rtl}[dir=rtl] .create-btn[data-v-4c6861ea]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .create-btn[data-v-4c6861ea]{border-radius:0 .25rem .25rem 0}[dir=rtl] .rtl-select .vs__dropdown-toggle[data-v-4c6861ea]{border-radius:.25rem 0 0 .25rem}[dir=ltr] .rtl-select .vs__dropdown-toggle[data-v-4c6861ea]{border-radius:.25rem}[dir=rtl] .flex-grow-1.rtl-select[data-v-4c6861ea]{border-right:none}[dir=ltr] .flex-grow-1.rtl-select[data-v-4c6861ea]{border-right:1px solid #ced4da}.clickable-badge[data-v-4c6861ea]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-4c6861ea]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-4c6861ea]:active{transform:scale(.95)}.insufficient-stock-input[data-v-4c6861ea]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-4c6861ea]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.debug-panel[data-v-4c6861ea]{border:2px solid #ffc107;border-radius:10px;box-shadow:0 4px 8px rgba(255,193,7,.2);display:none!important}.debug-panel .card-header[data-v-4c6861ea]{background:linear-gradient(45deg,#ffc107,#ffeb3b)!important;border-bottom:2px solid #ffc107;border-radius:8px 8px 0 0!important}.debug-item[data-v-4c6861ea]{background-color:#f8f9fa;border-left:4px solid #007bff!important;transition:all .3s ease}.debug-item[data-v-4c6861ea]:hover{background-color:#e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-2px)}.debug-step[data-v-4c6861ea]{background-color:#fff;border:1px solid #dee2e6;border-radius:4px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:4px 8px}.debug-summary[data-v-4c6861ea]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-summary ul li[data-v-4c6861ea]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-summary ul li[data-v-4c6861ea]:last-child{border-bottom:none}.debug-display[data-v-4c6861ea]{background:linear-gradient(135deg,#e3f2fd,#f3e5f5)!important;border:1px solid #bbdefb;font-family:Courier New,monospace}.debug-steps .step[data-v-4c6861ea]{background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:8px 12px}.debug-state[data-v-4c6861ea]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-state div[data-v-4c6861ea]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-state div[data-v-4c6861ea]:last-child{border-bottom:none}.debug-panel .table th[data-v-4c6861ea]{background-color:#f8f9fa;font-size:.85em;font-weight:600}.debug-panel .table td[data-v-4c6861ea]{font-size:.85em;vertical-align:middle}.debug-panel .table tbody tr[data-v-4c6861ea]:hover{background-color:#f8f9fa}@media (max-width:768px){.debug-panel .card-body[data-v-4c6861ea]{padding:15px}.debug-item .row[data-v-4c6861ea]{margin:0}.debug-item .col-md-6[data-v-4c6861ea]{padding:0 5px}.debug-step[data-v-4c6861ea]{font-size:.8em;padding:3px 6px}.debug-panel .table[data-v-4c6861ea]{font-size:.75em}}.saudi-riyal[data-v-4c6861ea]{color:#28a745;font-weight:700}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 85989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-overlay[data-v-651d741c]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1050}.modal-content[data-v-651d741c]{background:#fff;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-651d741c]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #dee2e6;border-radius:10px 10px 0 0;display:flex;justify-content:space-between;padding:20px}.modal-title[data-v-651d741c]{font-size:1.25rem;font-weight:600;margin:0}.close[data-v-651d741c]{background:none;border:none;color:#6c757d;cursor:pointer;font-size:1.5rem}.close[data-v-651d741c]:hover{color:#000}.modal-body[data-v-651d741c]{padding:20px}.modal-footer[data-v-651d741c]{background-color:#f8f9fa;border-radius:0 0 10px 10px;border-top:1px solid #dee2e6;display:flex;gap:10px;justify-content:flex-end;padding:20px}.option-card[data-v-651d741c]{align-items:center;border:2px solid #e9ecef;border-radius:8px;cursor:pointer;display:flex;margin-bottom:15px;padding:15px;transition:all .3s ease}.option-card[data-v-651d741c]:hover{background-color:#f8f9fa;border-color:#007bff;box-shadow:0 4px 8px rgba(0,0,0,.1);transform:translateY(-2px)}.option-icon[data-v-651d741c]{font-size:2rem;margin-right:15px;min-width:50px;text-align:center}.option-content h6[data-v-651d741c]{font-weight:600;margin:0 0 5px}.option-content p[data-v-651d741c]{font-size:.9rem;margin:0}.product-info[data-v-651d741c]{background-color:#f8f9fa;border-left:4px solid #007bff;border-radius:8px;padding:15px}.quick-adjustment .card[data-v-651d741c]{border:1px solid #dee2e6;border-radius:8px}.quick-adjustment .card-header[data-v-651d741c]{background-color:#e9ecef;border-bottom:1px solid #dee2e6;padding:15px}.form-actions[data-v-651d741c]{display:flex;gap:10px;justify-content:flex-end;margin-top:20px}.required[data-v-651d741c]{color:#dc3545}.badge[data-v-651d741c]{font-size:.875em;padding:.375rem .75rem}.alert[data-v-651d741c]{border:none;border-radius:8px}.alert-warning[data-v-651d741c]{background-color:#fff3cd;border-left:4px solid #ffc107;color:#856404}[dir=rtl] .option-card[data-v-651d741c]{flex-direction:row-reverse}[dir=rtl] .option-icon[data-v-651d741c]{margin-left:15px;margin-right:0}[dir=rtl] .product-info[data-v-651d741c]{border-left:none;border-right:4px solid #007bff}[dir=rtl] .alert-warning[data-v-651d741c]{border-left:none;border-right:4px solid #ffc107}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86565:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".validation-errors[data-v-0ebdcb7a]{max-height:300px;overflow-y:auto}.validation-error[data-v-0ebdcb7a]{background-color:rgba(255,193,7,.1);border-left:3px solid #ffc107;border-radius:4px;padding:8px}.validation-actions[data-v-0ebdcb7a]{display:flex;gap:8px}.alert-warning[data-v-0ebdcb7a]{background-color:#fff3cd;border-color:#ffc107;color:#856404}.alert-warning hr[data-v-0ebdcb7a]{border-color:#ffeaa7}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);