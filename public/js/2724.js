"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[2724],{

/***/ 20385
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dtable-footer{align-items:center;display:flex;flex-direction:column;justify-content:space-between;margin-top:30px;padding:0 0 0 10px}.card-footer .form-group.row.display-per-page{align-items:center;display:flex;gap:10px;justify-content:flex-end;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 72724
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ setup)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/index.vue?vue&type=template&id=18ce7a90
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "row set-up-page"
  }, [_vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xxl-3 col-lg-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('General Settings')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('General settings such as, site title, site description, address and so on.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.general'
      },
      "href": "#"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Change Setting')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xxl-3 col-lg-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Mail Configurations')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage your mail configuration such as HOST, USERNAME, PASSWORD etc.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.mailConfiguration'
      },
      "href": "#"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Change Setting')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xxl-3 col-lg-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('SMS Configurations')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage your sms configuration such as TWILIO ACCOUNT SID, FROM etc.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.smsConfiguration'
      },
      "href": "#"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Change Setting')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('payment-settings') ? _c('div', {
    staticClass: "col-xxl-3 col-lg-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Payment Settings')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage payment settings. Add your stripe information.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'advanced-settings'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Change Settings')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('user-role') ? _c('div', {
    staticClass: "col-xxl-3 col-lg-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Role & Permissions')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage Roles & Permissions to assign them to employees.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'roles.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Roles & Permissions')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('user-management') ? _c('div', {
    staticClass: "col-xxl-3 col-lg-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('User Management')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Create system user and assign individual role to users.')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'user.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Manage User')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e(), _vm._v(" "), _vm.$can('general-settings') ? _c('div', {
    staticClass: "col-xxl-3 col-lg-4 col-sm-12 col-md-6"
  }, [_c('div', {
    staticClass: "card card-large-icons"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('h5', [_vm._v(_vm._s(_vm.$t('Currency Settings')))]), _vm._v(" "), _c('p', [_vm._v("\n              " + _vm._s(_vm.$t('Manage your currency')) + "\n            ")]), _vm._v(" "), _c('router-link', {
    staticClass: "card-cta",
    attrs: {
      "to": {
        name: 'setup.centralCurrency.index'
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t('Change Setting')) + "\n              "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-right"
  })])], 1)])]) : _vm._e()])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-cog"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-envelope"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-sms"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-money-check-alt"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-user-lock"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-users-cog"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-icon text-white bg-success"
  }, [_c('i', {
    staticClass: "fas fa-money-check-alt"
  })]);
}];

;// ./resources/js/pages/central/setup/index.vue?vue&type=template&id=18ce7a90

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/index.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const setupvue_type_script_lang_js = ({
  layout: 'central',
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Setup')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Setup',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: ''
      }],
      developer: ''
    };
  },
  // Map Getters
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('auth', ['user'])),
  created: function created() {
    this.developer = this.user.roles.includes('developer');
  }
});
;// ./resources/js/pages/central/setup/index.vue?vue&type=script&lang=js
 /* harmony default export */ const central_setupvue_type_script_lang_js = (setupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/index.vue?vue&type=style&index=0&id=18ce7a90&prod&lang=css
var setupvue_type_style_index_0_id_18ce7a90_prod_lang_css = __webpack_require__(20385);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/setup/index.vue?vue&type=style&index=0&id=18ce7a90&prod&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(setupvue_type_style_index_0_id_18ce7a90_prod_lang_css/* default */.A, options);



/* harmony default export */ const central_setupvue_type_style_index_0_id_18ce7a90_prod_lang_css = (setupvue_type_style_index_0_id_18ce7a90_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/central/setup/index.vue?vue&type=style&index=0&id=18ce7a90&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/setup/index.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  central_setupvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const setup = (component.exports);

/***/ }

}]);