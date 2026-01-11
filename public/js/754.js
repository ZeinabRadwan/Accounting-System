"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[754],{

/***/ 10754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=template&id=fdf3c294&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_vm.showWarning ? _c('div', {
    staticClass: "chart-account-warning"
  }, [_c('div', {
    staticClass: "warning-content"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "warning-text"
  }, [_c('h6', {
    staticClass: "warning-title"
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account Required')))]), _vm._v(" "), _c('p', {
    staticClass: "warning-description"
  }, [_vm._v(_vm._s(_vm.$t('Client must have a Chart of Account assigned for journal entries')) + "\n        ")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
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
        name: 'clients.index'
      }
    }
  }, [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n                  " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                      " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                    ")]]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "button",
      "title": _vm.$t('Save')
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": false
    },
    on: {
      "submit": _vm.saveClient
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.isSubmitting
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm.isSubmitting ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n                " + _vm._s(_vm.isSubmitting ? _vm.$t("Saving...") : _vm.$t("Save")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
    attrs: {
      "type": "reset"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n              ")])])])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "warning-icon"
  }, [_c('i', {
    staticClass: "fas fa-info-circle"
  })]);
}];

;// ./resources/js/pages/clients/create.vue?vue&type=template&id=fdf3c294&scoped=true

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 6 modules
var ClientForm = __webpack_require__(99532);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=script&lang=js
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Client")
    };
  },
  components: {
    ClientForm: ClientForm/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Create Client",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Clients",
        url: "clients.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: null,
      isSubmitting: false
    };
  },
  computed: {
    showWarning: function showWarning() {
      return false; // Temporarily disable warning to test component rendering
    }
  },
  mounted: function mounted() {
    var _this = this;
    console.log('Create page mounted');
    console.log('ClientForm ref:', this.$refs.clientForm);
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this.loadTemporaryData();
    });
  },
  methods: {
    // Submit form by calling ClientForm's submitForm method
    submitForm: function submitForm() {
      if (this.$refs.clientForm) {
        this.$refs.clientForm.submitForm();
      }
    },
    // save client
    saveClient: function saveClient(formData) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this2$$refs$clientFo, fd, appendIfDefined, taxStatusValue, taxStatusToSend, response, status, serverErrors, form, errorMessages, errorsObject, mapped, errorTitle, _error$response, message, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!_this2.isSubmitting) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _this2.isSubmitting = true;
              _context.p = 2;
              // Build multipart/form-data to properly send files (image, attachments)
              fd = new FormData();
              appendIfDefined = function appendIfDefined(key, value) {
                if (value !== undefined && value !== null && value !== '') {
                  fd.append(key, value);
                }
              }; // Debug: Log formData before building FormData - CRITICAL
              console.log('=== CLIENT CREATE - FORM DATA RECEIVED ===');
              console.log('Client Create - formData received:', {
                taxStatus: formData.taxStatus,
                tax_status: formData.tax_status,
                allFormData: formData
              });
              console.log('Client Create - formData keys:', Object.keys(formData || {}));
              console.log('Client Create - formData.taxStatus type:', _typeof(formData.taxStatus));
              console.log('Client Create - formData.taxStatus value:', formData.taxStatus);
              console.log('Client Create - formData.tax_status value:', formData.tax_status);
              console.log('Client Create - $refs.clientForm exists:', !!_this2.$refs.clientForm);
              console.log('Client Create - $refs.clientForm.form exists:', !!(_this2.$refs.clientForm && _this2.$refs.clientForm.form));
              if (_this2.$refs.clientForm && _this2.$refs.clientForm.form) {
                console.log('Client Create - form.taxStatus:', _this2.$refs.clientForm.form.taxStatus);
                console.log('Client Create - form.data() taxStatus:', _this2.$refs.clientForm.form.data ? _this2.$refs.clientForm.form.data().taxStatus : 'N/A');
              }

              // Simple scalar fields
              appendIfDefined('codeNumber', formData.codeNumber);
              appendIfDefined('notes', formData.notes);
              appendIfDefined('displayLanguage', formData.displayLanguage);
              appendIfDefined('type', formData.type);

              // CRITICAL: Always append taxStatus - don't use appendIfDefined to ensure it's always sent
              // Get taxStatus from formData, or try to get it from form object if available
              taxStatusValue = formData.taxStatus || formData.tax_status;
              console.log('Client Create - Initial taxStatus check:', {
                formDataTaxStatus: formData.taxStatus,
                formDataTax_status: formData.tax_status,
                currentTaxStatusValue: taxStatusValue
              });

              // If still not found, try to get it from the form component
              if (!taxStatusValue && _this2.$refs.clientForm && _this2.$refs.clientForm.form) {
                taxStatusValue = _this2.$refs.clientForm.form.taxStatus;
                console.log('Client Create - Got taxStatus from form object:', taxStatusValue);
              }

              // Default to non_taxable if still not found
              taxStatusValue = taxStatusValue || 'non_taxable';
              console.log('Client Create - Final taxStatusValue before appending:', taxStatusValue);

              // Always append taxStatus - never skip it, even if it's the default value
              // CRITICAL: Use explicit string conversion and ensure it's never null/undefined
              taxStatusToSend = String(taxStatusValue || 'non_taxable');
              fd.append('taxStatus', taxStatusToSend);
              fd.append('tax_status', taxStatusToSend);
              console.log('=== CLIENT CREATE - APPENDING TAX STATUS ===');
              console.log('Client Create - taxStatusValue:', taxStatusValue);
              console.log('Client Create - taxStatusToSend:', taxStatusToSend);
              console.log('Client Create - Appended taxStatus to FormData:', taxStatusToSend);
              console.log('Client Create - formData.taxStatus:', formData.taxStatus);
              console.log('Client Create - formData.tax_status:', formData.tax_status);
              console.log('Client Create - form.taxStatus:', (_this2$$refs$clientFo = _this2.$refs.clientForm) === null || _this2$$refs$clientFo === void 0 || (_this2$$refs$clientFo = _this2$$refs$clientFo.form) === null || _this2$$refs$clientFo === void 0 ? void 0 : _this2$$refs$clientFo.taxStatus);

              // Verify it was added
              console.log('Client Create - FormData has taxStatus:', fd.has('taxStatus'));
              console.log('Client Create - FormData has tax_status:', fd.has('tax_status'));
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
              appendIfDefined('taxRegistrationNumber', formData.taxRegistrationNumber || formData.taxCard);
              appendIfDefined('buildingNumber', formData.buildingNumber);
              appendIfDefined('streetNumber', formData.streetNumber);
              appendIfDefined('districtNumber', formData.districtNumber);
              appendIfDefined('unitNumber', formData.unitNumber);
              appendIfDefined('additionalNumber', formData.additionalNumber);
              appendIfDefined('saudi_region', formData.saudi_region);
              appendIfDefined('status', formData.status);
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
              _context.n = 3;
              return _this2.$http.post("/api/clients", fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 3:
              response = _context.v;
              if (!response.data.success) {
                _context.n = 4;
                break;
              }
              // Clear temporary data after successful save
              _this2.clearTemporaryData();
              toast.fire({
                type: "success",
                title: _this2.$t("Client added successfully")
              });
              _this2.$router.push({
                name: "clients.index"
              });
              _context.n = 5;
              break;
            case 4:
              throw new Error(response.data.message || 'Failed to create client');
            case 5:
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error("Error creating client:", _t);
              status = _t && _t.response && _t.response.status;
              serverErrors = _t && _t.response && _t.response.data && _t.response.data.errors;
              if (status === 422 && serverErrors && _this2.$refs.clientForm) {
                // Get form object directly from ClientForm component
                form = _this2.$refs.clientForm.form;
                errorMessages = []; // Prepare errors object for vform
                errorsObject = {};
                Object.keys(serverErrors).forEach(function (key) {
                  var messages = serverErrors[key];
                  if (Array.isArray(messages) && messages.length > 0) {
                    // Translate messages before adding to errorsObject
                    var translatedMessages = messages.map(function (msg) {
                      return _this2.translateValidationMessage(msg, key);
                    });
                    errorsObject[key] = translatedMessages;

                    // Collect error messages for toast notification
                    var fieldLabel = _this2.getFieldLabel(key);
                    translatedMessages.forEach(function (msg) {
                      errorMessages.push("".concat(fieldLabel, ": ").concat(msg));
                    });

                    // Also map attachments.* to attachments field for UI display
                    if (key.startsWith('attachments.')) {
                      if (!errorsObject.attachments) {
                        errorsObject.attachments = translatedMessages;
                      }
                    }
                  }
                });

                // Set errors on form using vform's set method
                if (form && form.errors && typeof form.errors.set === 'function') {
                  form.errors.set(errorsObject);
                  console.log('Client Create - Set errors on form:', errorsObject);
                } else if (form && form.errors && typeof form.errors.record === 'function') {
                  // Fallback to record method if set is not available
                  mapped = {};
                  Object.keys(errorsObject).forEach(function (key) {
                    mapped[key] = Array.isArray(errorsObject[key]) ? errorsObject[key][0] : errorsObject[key];
                  });
                  form.errors.record(mapped);
                  console.log('Client Create - Recorded errors on form (fallback):', mapped);
                } else {
                  console.warn('Client Create - Form errors object not available or invalid');
                }

                // Optionally scroll to the first invalid input
                _this2.$nextTick(function () {
                  var invalid = document.querySelector('.is-invalid');
                  if (invalid && typeof invalid.scrollIntoView === 'function') {
                    invalid.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }
                });

                // Show detailed error messages in toast
                errorTitle = errorMessages.length > 0 ? errorMessages.slice(0, 3).join(' | ') + (errorMessages.length > 3 ? " (+".concat(errorMessages.length - 3, " more)") : '') : _this2.$t("Please check the form for errors and try again.");
                console.log('Client Create - Error messages for toast:', errorMessages);
                console.log('Client Create - Error title:', errorTitle);
                toast.fire({
                  type: "error",
                  title: _this2.$t("Validation Error"),
                  text: errorTitle,
                  html: errorMessages.length > 0 ? "<div style=\"text-align: left; max-height: 200px; overflow-y: auto;\">".concat(errorMessages.map(function (msg) {
                    return "<div>\u2022 ".concat(msg, "</div>");
                  }).join(''), "</div>") : undefined
                });
              } else {
                message = (_t === null || _t === void 0 || (_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || (_t === null || _t === void 0 ? void 0 : _t.message) || _this2.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: _this2.$t("Error"),
                  text: message
                });
              }
            case 7:
              _context.p = 7;
              _this2.isSubmitting = false;
              return _context.f(7);
            case 8:
              return _context.a(2);
          }
        }, _callee, null, [[2, 6, 7, 8]]);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      if (this.$refs.clientForm && this.$refs.clientForm.form) {
        var form = this.$refs.clientForm.form;
        var tempData = {
          type: form.type,
          fullName: form.fullName,
          businessName: form.businessName,
          firstName: form.firstName,
          lastName: form.lastName,
          phone: form.phone,
          phoneNumber: form.phoneNumber,
          email: form.email,
          address: form.address,
          city: form.city,
          state: form.state,
          zipCode: form.zipCode,
          country: form.country,
          taxNumber: form.taxNumber,
          note: form.note,
          status: form.status,
          chartOfAccountId: form.chartOfAccountId,
          timestamp: new Date().toISOString()
        };
        localStorage.setItem('clientTempData', JSON.stringify(tempData));
      }
    },
    // Get field label for error messages
    getFieldLabel: function getFieldLabel(field) {
      var fieldLabelMap = {
        codeNumber: this.$t('Code Number'),
        notes: this.$t('Notes'),
        displayLanguage: this.$t('Display Language'),
        type: this.$t('Type'),
        fullName: this.$t('Full Name'),
        businessName: this.$t('Business Name'),
        firstName: this.$t('First Name'),
        lastName: this.$t('Last Name'),
        phone: this.$t('Phone'),
        phoneNumber: this.$t('Mobile Number'),
        email: this.$t('Email'),
        streetAddress1: this.$t('Street Address 1'),
        streetAddress2: this.$t('Street Address 2'),
        city: this.$t('City'),
        state: this.$t('State'),
        postalCode: this.$t('Postal Code'),
        country: this.$t('Country'),
        neighbourhood: this.$t('Neighbourhood'),
        commercialRegister: this.$t('Commercial Register'),
        taxCard: this.$t('Tax Card'),
        buildingNumber: this.$t('Building Number'),
        streetNumber: this.$t('Street Number'),
        districtNumber: this.$t('District Number'),
        unitNumber: this.$t('Unit Number'),
        additionalNumber: this.$t('Additional Number'),
        taxStatus: this.$t('Tax Status'),
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        image: this.$t('Image'),
        attachments: this.$t('Attachments'),
        status: this.$t('Status'),
        chartOfAccountId: this.$t('Chart of Account')
      };
      return fieldLabelMap[field] || field;
    },
    // translate validation messages from backend to localized messages
    translateValidationMessage: function translateValidationMessage(message, field) {
      // If there is a direct translation key, use it
      var direct = this.$t(message);
      if (direct && direct !== message) return direct;

      // Get current locale
      var currentLocale = this.$i18n.locale || 'en';
      var isArabic = currentLocale === 'ar';

      // Field label mapping for client form fields
      var fieldLabelMap = {
        codeNumber: this.$t('Code Number'),
        notes: this.$t('Notes'),
        displayLanguage: this.$t('Display Language'),
        type: this.$t('Type'),
        fullName: this.$t('Full Name'),
        businessName: this.$t('Business Name'),
        firstName: this.$t('First Name'),
        lastName: this.$t('Last Name'),
        phone: this.$t('Phone'),
        phoneNumber: this.$t('Mobile Number'),
        email: this.$t('Email'),
        streetAddress1: this.$t('Street Address 1'),
        streetAddress2: this.$t('Street Address 2'),
        city: this.$t('City'),
        state: this.$t('State'),
        postalCode: this.$t('Postal Code'),
        country: this.$t('Country'),
        neighbourhood: this.$t('Neighbourhood'),
        commercialRegister: this.$t('Commercial Register'),
        taxCard: this.$t('Tax Card'),
        buildingNumber: this.$t('Building Number'),
        streetNumber: this.$t('Street Number'),
        districtNumber: this.$t('District Number'),
        unitNumber: this.$t('Unit Number'),
        additionalNumber: this.$t('Additional Number'),
        taxStatus: this.$t('Tax Status'),
        taxRegistrationNumber: this.$t('Tax Registration Number'),
        image: this.$t('Image'),
        attachments: this.$t('Attachments'),
        status: this.$t('Status'),
        chartOfAccountId: this.$t('Chart of Account')
      };

      // Try to translate common validation messages
      var commonMessages = {
        'required': isArabic ? 'مطلوب' : 'required',
        'must be exactly 15 digits': isArabic ? 'يجب أن يكون 15 رقم بالضبط' : 'must be exactly 15 digits',
        'must contain only numbers and be 15 digits': isArabic ? 'يجب أن يحتوي على أرقام فقط ويكون 15 رقم' : 'must contain only numbers and be 15 digits'
      };

      // Check if message contains common patterns
      for (var _i = 0, _Object$entries = Object.entries(commonMessages); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          pattern = _Object$entries$_i[0],
          translation = _Object$entries$_i[1];
        if (message.toLowerCase().includes(pattern.toLowerCase())) {
          var fieldLabel = fieldLabelMap[field] || field;
          return "".concat(fieldLabel, ": ").concat(translation);
        }
      }

      // Return original message if no translation found
      return message;
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('clientTempData');
      if (tempData && this.$refs.clientForm && this.$refs.clientForm.form) {
        try {
          var data = JSON.parse(tempData);
          var form = this.$refs.clientForm.form;
          form.type = data.type || 'Individual';
          form.fullName = data.fullName || '';
          form.businessName = data.businessName || '';
          form.firstName = data.firstName || '';
          form.lastName = data.lastName || '';
          form.phone = data.phone || '';
          form.phoneNumber = data.phoneNumber || '';
          form.email = data.email || '';
          form.address = data.address || '';
          form.city = data.city || '';
          form.state = data.state || '';
          form.zipCode = data.zipCode || '';
          form.country = data.country || '';
          form.taxNumber = data.taxNumber || '';
          form.note = data.note || '';
          form.status = data.status !== undefined ? data.status : 1;
          form.chartOfAccountId = data.chartOfAccountId || null;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('clientTempData');
    },
    // Reset form
    resetForm: function resetForm() {
      this.$refs.clientForm.resetForm();
    }
  }
});
;// ./resources/js/pages/clients/create.vue?vue&type=script&lang=js
 /* harmony default export */ const clients_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=style&index=0&id=fdf3c294&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_fdf3c294_prod_scoped_true_lang_css = __webpack_require__(35078);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/create.vue?vue&type=style&index=0&id=fdf3c294&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_fdf3c294_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const clients_createvue_type_style_index_0_id_fdf3c294_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_fdf3c294_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/clients/create.vue?vue&type=style&index=0&id=fdf3c294&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/clients/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  clients_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "fdf3c294",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 35078:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-fdf3c294]{margin-bottom:15px}.footer-buttons[data-v-fdf3c294]{display:flex;gap:10px}.footer-buttons .btn[data-v-fdf3c294]{margin-right:10px}.footer-buttons .btn[data-v-fdf3c294]:last-child{margin-right:0}.create-btn[data-v-fdf3c294]{padding:11px}.chart-account-success[data-v-fdf3c294],.chart-account-warning[data-v-fdf3c294]{border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:16px}.chart-account-warning[data-v-fdf3c294]{background:linear-gradient(135deg,#fff3cd,#ffeaa7);border:1px solid #ffc107}.chart-account-success[data-v-fdf3c294]{background:linear-gradient(135deg,#d4edda,#c3e6cb);border:1px solid #28a745}.success-content[data-v-fdf3c294],.warning-content[data-v-fdf3c294]{align-items:center;display:flex;gap:16px}.success-icon[data-v-fdf3c294],.warning-icon[data-v-fdf3c294]{flex-shrink:0;font-size:24px}.warning-icon[data-v-fdf3c294]{color:#856404}.success-icon[data-v-fdf3c294]{color:#155724}.success-text[data-v-fdf3c294],.warning-text[data-v-fdf3c294]{flex-grow:1}.success-title[data-v-fdf3c294],.warning-title[data-v-fdf3c294]{font-size:14px;font-weight:600;margin:0 0 4px}.warning-title[data-v-fdf3c294]{color:#856404}.success-title[data-v-fdf3c294]{color:#155724}.success-description[data-v-fdf3c294],.warning-description[data-v-fdf3c294]{font-size:13px;margin:0;opacity:.8}.warning-description[data-v-fdf3c294]{color:#856404}.success-description[data-v-fdf3c294]{color:#155724}.warning-action[data-v-fdf3c294]{flex-shrink:0}.button-plus.icon-shape.icon-sm.btn-primary[data-v-fdf3c294]{padding:0}.btn-primary[data-v-fdf3c294]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-primary[data-v-fdf3c294]:disabled{box-shadow:none;cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.success-content[data-v-fdf3c294],.warning-content[data-v-fdf3c294]{flex-direction:column;gap:12px;text-align:center}.btn-primary[data-v-fdf3c294],.warning-action[data-v-fdf3c294]{width:100%}}.client-status[data-v-fdf3c294]{font-size:13px}.client-success[data-v-fdf3c294],.client-warning[data-v-fdf3c294]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.client-warning[data-v-fdf3c294]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.client-success[data-v-fdf3c294]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.btn-outline-warning[data-v-fdf3c294]{border-color:#ffc107;color:#856404;font-size:12px;padding:4px 8px}.btn-outline-warning[data-v-fdf3c294]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-fdf3c294]:disabled{cursor:not-allowed;opacity:.6}.product-status[data-v-fdf3c294]{font-size:13px}.product-success[data-v-fdf3c294],.product-warning[data-v-fdf3c294]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.product-warning[data-v-fdf3c294]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.product-success[data-v-fdf3c294]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.account-status[data-v-fdf3c294]{font-size:13px}.account-success[data-v-fdf3c294],.account-warning[data-v-fdf3c294]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.account-warning[data-v-fdf3c294]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.account-success[data-v-fdf3c294]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.radio-group-horizontal[data-v-fdf3c294]{align-items:center;display:flex;flex-direction:row;gap:20px}.radio-group-horizontal .form-check[data-v-fdf3c294]{align-items:center;display:flex;margin-bottom:0}.radio-group-horizontal .form-check-input[data-v-fdf3c294]{margin-right:8px}.radio-group-horizontal .form-check-label[data-v-fdf3c294]{cursor:pointer;margin-bottom:0}.text-warning[data-v-fdf3c294]{color:#856404!important}.text-warning small[data-v-fdf3c294]{font-size:12px;font-weight:500}.text-warning i[data-v-fdf3c294]{margin-right:4px}.table-custom[data-v-fdf3c294]{border:none!important}.invoices-create-table[data-v-fdf3c294]{border-collapse:separate;border-spacing:0}.invoices-create-table thead th[data-v-fdf3c294]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.invoices-create-table thead tr[data-v-fdf3c294]{border:none!important}.invoices-create-table thead th[data-v-fdf3c294]:first-child{border-top-left-radius:10px}.invoices-create-table thead th[data-v-fdf3c294]:last-child{border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-fdf3c294]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-fdf3c294]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.btn-group.c-w-100[data-v-fdf3c294]{gap:10px}.card[data-v-fdf3c294]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-fdf3c294]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.invoices-create-table .badge.badge-danger[data-v-fdf3c294]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-fdf3c294]{background:#fff!important}.btn-primary[data-v-fdf3c294]{background:#2ab930!important}.btn-secondary[data-v-fdf3c294]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);