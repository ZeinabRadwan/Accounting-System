"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[8158],{

/***/ 13789:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-44a618cc]{gap:10px}.header-buttons[data-v-44a618cc]{margin-bottom:15px}.footer-buttons[data-v-44a618cc]{display:flex;gap:10px}.footer-buttons .btn[data-v-44a618cc]{margin-right:10px}.footer-buttons .btn[data-v-44a618cc]:last-child{margin-right:0}.card[data-v-44a618cc]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-44a618cc]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-44a618cc]{background:#fff!important}.btn-primary[data-v-44a618cc]{background:#2ab930!important}.btn-primary[data-v-44a618cc],.btn-secondary[data-v-44a618cc]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-44a618cc]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 24048:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-44a618cc]{gap:10px}.header-buttons[data-v-44a618cc]{margin-bottom:15px}.footer-buttons[data-v-44a618cc]{display:flex;gap:10px}.footer-buttons .btn[data-v-44a618cc]{margin-right:10px}.footer-buttons .btn[data-v-44a618cc]:last-child{margin-right:0}.card[data-v-44a618cc]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-44a618cc]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-44a618cc]{background:#fff!important}.btn-primary[data-v-44a618cc]{background:#2ab930!important}.btn-primary[data-v-44a618cc],.btn-secondary[data-v-44a618cc]{border:none!important;color:#fff!important;padding:10px 20px!important}.btn-secondary[data-v-44a618cc]{background:#33a0d9!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 78158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=template&id=44a618cc&scoped=true
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
        name: 'clients.index'
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
  })])], 1)])], 1), _vm._v(" "), !_vm.loading && _vm.clientData && _vm.clientData.slug ? _c('ClientForm', {
    ref: "clientForm",
    attrs: {
      "showCardBody": true,
      "initialData": _vm.clientData
    },
    on: {
      "submit": _vm.saveClient
    }
  }) : _vm.loading ? _c('div', {
    staticClass: "card-body text-center"
  }, [_c('div', {
    staticClass: "spinner-border text-primary",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v(_vm._s(_vm.$t('Loading...')))])]), _vm._v(" "), _c('p', {
    staticClass: "mt-2"
  }, [_vm._v(_vm._s(_vm.$t('Loading client data...')))])]) : _c('div', {
    staticClass: "card-body text-center"
  }, [_c('div', {
    staticClass: "alert alert-danger"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v("\n            " + _vm._s(_vm.$t('Failed to load client data')) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button",
      "disabled": _vm.isSubmitting || _vm.loading || !_vm.isFormReady
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_c('i', {
    staticClass: "fas fa-edit"
  }), _vm._v(" " + _vm._s(_vm.$t("Save changes")) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n              ")])])])])], 1)])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./resources/js/components/ClientForm.vue + 5 modules
var ClientForm = __webpack_require__(12904);
// EXTERNAL MODULE: ./resources/js/components/Button.vue + 3 modules
var Button = __webpack_require__(60069);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const editvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Edit Client")
    };
  },
  components: {
    ClientForm: ClientForm/* default */.A,
    VButton: Button/* default */.A
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Edit Client",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Clients",
        url: "clients.index"
      }, {
        name: "Edit",
        url: ""
      }],
      loading: true,
      isSubmitting: false,
      clientData: {}
    };
  },
  computed: {
    // Check if form is ready
    isFormReady: function isFormReady() {
      var ready = !this.loading && this.clientData && this.clientData.slug && Object.keys(this.clientData).length > 0;
      console.log('=== IS FORM READY CHECK ===');
      console.log('Loading:', this.loading);
      console.log('ClientData:', this.clientData);
      console.log('ClientData slug:', this.clientData ? this.clientData.slug : 'No clientData');
      console.log('ClientData keys length:', this.clientData ? Object.keys(this.clientData).length : 'No clientData');
      console.log('Is form ready:', ready);
      return ready;
    }
  },
  watch: {
    // Watch for form readiness
    '$refs.clientForm': {
      handler: function handler(newVal) {
        if (newVal && newVal.getFormData && typeof newVal.getFormData().data === 'function') {
          console.log('Form is now ready');
          this.loading = false;
        }
      },
      immediate: true
    }
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _this.getClient();
          case 1:
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error("Error in created lifecycle:", _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;
    // Load temporary data after component is mounted
    this.$nextTick(function () {
      _this2.loadTemporaryData();
    });
  },
  methods: {
    // Get client data
    getClient: function getClient() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, clientData, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              if (_this3.$route.params.slug) {
                _context2.n = 1;
                break;
              }
              throw new Error("No client slug provided");
            case 1:
              console.log("Fetching client with slug:", _this3.$route.params.slug);
              _context2.n = 2;
              return _this3.$http.get("/api/clients/".concat(_this3.$route.params.slug));
            case 2:
              response = _context2.v;
              if (response.data) {
                _context2.n = 3;
                break;
              }
              throw new Error("No data received from API");
            case 3:
              console.log("Raw API response data:", response.data);

              // The API response is wrapped in a 'data' object
              clientData = response.data.data || response.data;
              console.log("Client data slug:", clientData.slug);
              console.log("Route params slug:", _this3.$route.params.slug);

              // Map the API response fields to the new form structure
              _this3.clientData = {
                // Include the actual slug from the client data for representatives loading
                slug: clientData.slug || _this3.$route.params.slug,
                // Account Details
                codeNumber: clientData.codeNumber || clientData.clientID || '000001',
                notes: clientData.notes || '',
                displayLanguage: clientData.displayLanguage || '',
                // Client Details
                type: clientData.type || 'Company',
                fullName: clientData.type === 'Individual' ? clientData.name : '',
                businessName: clientData.type === 'Company' ? clientData.companyName : '',
                firstName: clientData.firstName || '',
                lastName: clientData.lastName || '',
                phone: clientData.phone || '',
                phoneNumber: clientData.phoneNumber || '',
                email: clientData.email || '',
                streetAddress1: clientData.streetAddress1 || clientData.address || '',
                streetAddress2: clientData.streetAddress2 || '',
                city: clientData.city || '',
                state: clientData.state || '',
                postalCode: clientData.postalCode || '',
                country: clientData.country || 'SA',
                neighbourhood: clientData.neighbourhood || '',
                commercialRegister: clientData.commercialRegister || clientData.taxRegistrationNumber || '',
                taxCard: clientData.taxCard || '',
                // Additional Fields
                image: clientData.image || '',
                attachments: clientData.attachments || [],
                status: clientData.status || 1,
                isSendEmail: clientData.isSendEmail || false,
                isSendSMS: clientData.isSendSMS || false,
                // Chart of Account
                chartOfAccountId: clientData.chartOfAccountId || null,
                // Representatives
                representatives: clientData.representatives || [],
                // Legacy fields for backward compatibility
                name: clientData.name || '',
                companyName: clientData.companyName || '',
                taxRegistrationNumber: clientData.taxRegistrationNumber || '',
                address: clientData.address || ''
              };
              _this3.loading = false;
              console.log("Client data loaded successfully:", clientData);
              console.log("Client data slug:", clientData.slug);
              console.log("Route params slug:", _this3.$route.params.slug);
              console.log("Final slug used:", clientData.slug || _this3.$route.params.slug);
              console.log("Mapped client data:", _this3.clientData);
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error("Error fetching client:", _t2);

              // Show error message if toast is available
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "error",
                  title: _this3.$t("Failed to load client data"),
                  text: _t2.message || "Please check the client slug and try again."
                });
              } else {
                // Fallback to console and alert if toast is not available
                console.error("Toast not available, showing alert");
                alert(_this3.$t("Failed to load client data: ") + (_t2.message || "Unknown error"));
              }

              // Don't redirect immediately, let user see the error
              _this3.loading = false;

              // Only redirect if it's a critical error (like invalid slug)
              if (_t2.response && _t2.response.status === 404) {
                setTimeout(function () {
                  _this3.$router.push({
                    name: "clients.index"
                  });
                }, 3000);
              }
            case 5:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 4]]);
      }))();
    },
    // Submit form by calling ClientForm's submitForm method
    submitForm: function submitForm() {
      console.log('=== SUBMIT FORM CALLED ===');
      console.log('Is submitting:', this.isSubmitting);
      console.log('Is loading:', this.loading);
      console.log('Is form ready:', this.isFormReady);
      console.log('ClientForm ref:', this.$refs.clientForm);
      console.log('ClientForm methods:', this.$refs.clientForm ? Object.getOwnPropertyNames(this.$refs.clientForm) : 'No ref');
      if (this.isSubmitting || this.loading) {
        console.log('Form is submitting or loading, ignoring click');
        return;
      }
      if (!this.isFormReady) {
        console.log('Form is not ready, ignoring click');
        return;
      }
      if (this.$refs.clientForm) {
        console.log('Calling ClientForm submitForm method...');
        this.$refs.clientForm.submitForm();
      } else {
        console.error('ClientForm ref is not available');
      }
    },
    // Save client
    saveClient: function saveClient(formData) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              console.log('=== SAVE CLIENT CALLED ===');
              console.log('Form data received:', formData);
              console.log('Is submitting:', _this4.isSubmitting);
              console.log('Loading:', _this4.loading);
              if (!(_this4.isSubmitting || _this4.loading)) {
                _context3.n = 1;
                break;
              }
              console.log('Already submitting or loading, returning');
              return _context3.a(2);
            case 1:
              console.log('Save client called with form data:', formData);
              _this4.isSubmitting = true;
              _context3.p = 2;
              // Use the form data directly from the submit event
              console.log('Sending update request with data:', formData);
              _context3.n = 3;
              return _this4.$http.put("/api/clients/".concat(_this4.clientData.slug), formData);
            case 3:
              response = _context3.v;
              console.log('API response received:', response);
              if (!response.data.success) {
                _context3.n = 4;
                break;
              }
              console.log('Client updated successfully');
              // Clear temporary data after successful save
              _this4.clearTemporaryData();
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "success",
                  title: _this4.$t("Client updated successfully")
                });
              } else {
                alert(_this4.$t("Client updated successfully"));
              }
              _this4.$router.push({
                name: "clients.index"
              });
              _context3.n = 5;
              break;
            case 4:
              throw new Error(response.data.message || 'Update failed');
            case 5:
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              console.error("Error saving client:", _t3);
              if (window.toast && typeof window.toast.fire === 'function') {
                window.toast.fire({
                  type: "error",
                  title: _this4.$t("Opps...something went wrong")
                });
              } else {
                alert(_this4.$t("Opps...something went wrong"));
              }
            case 7:
              _context3.p = 7;
              console.log('Setting isSubmitting to false');
              _this4.isSubmitting = false;
              return _context3.f(7);
            case 8:
              return _context3.a(2);
          }
        }, _callee3, null, [[2, 6, 7, 8]]);
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
        localStorage.setItem('clientEditTempData', JSON.stringify(tempData));
      }
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('clientEditTempData');
      if (tempData && this.$refs.clientForm && this.$refs.clientForm.form) {
        try {
          var data = JSON.parse(tempData);
          var form = this.$refs.clientForm.form;
          form.type = data.type || form.type;
          form.fullName = data.fullName || form.fullName;
          form.businessName = data.businessName || form.businessName;
          form.firstName = data.firstName || form.firstName;
          form.lastName = data.lastName || form.lastName;
          form.phone = data.phone || form.phone;
          form.phoneNumber = data.phoneNumber || form.phoneNumber;
          form.email = data.email || form.email;
          form.address = data.address || form.address;
          form.city = data.city || form.city;
          form.state = data.state || form.state;
          form.zipCode = data.zipCode || form.zipCode;
          form.country = data.country || form.country;
          form.taxNumber = data.taxNumber || form.taxNumber;
          form.note = data.note || form.note;
          form.status = data.status !== undefined ? data.status : form.status;
          form.chartOfAccountId = data.chartOfAccountId || form.chartOfAccountId;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('clientEditTempData');
    },
    // Reset form
    resetForm: function resetForm() {
      if (this.$refs.clientForm) {
        this.$refs.clientForm.resetForm();
      }
    }
  }
});
;// ./resources/js/pages/clients/edit.vue?vue&type=script&lang=js
 /* harmony default export */ const clients_editvue_type_script_lang_js = (editvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=0&id=44a618cc&prod&scoped=true&lang=css
var editvue_type_style_index_0_id_44a618cc_prod_scoped_true_lang_css = __webpack_require__(13789);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=0&id=44a618cc&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(editvue_type_style_index_0_id_44a618cc_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const clients_editvue_type_style_index_0_id_44a618cc_prod_scoped_true_lang_css = (editvue_type_style_index_0_id_44a618cc_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/clients/edit.vue?vue&type=style&index=0&id=44a618cc&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=1&id=44a618cc&prod&scoped=true&lang=css
var editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css = __webpack_require__(24048);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/clients/edit.vue?vue&type=style&index=1&id=44a618cc&prod&scoped=true&lang=css

            

var editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css_options = {};

editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css_options.insert = "head";
editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css_options.singleton = false;

var editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css/* default */.A, editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css_options);



/* harmony default export */ const clients_editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css = (editvue_type_style_index_1_id_44a618cc_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/clients/edit.vue?vue&type=style&index=1&id=44a618cc&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/clients/edit.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  clients_editvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "44a618cc",
  null
  
)

/* harmony default export */ const edit = (component.exports);

/***/ })

}]);