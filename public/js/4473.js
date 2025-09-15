"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4473],{

/***/ 65940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings-card .card-header{border-bottom:1px solid#ddd}.settings-card .card-body{padding:10px}.settings-card .nav-pills .nav-link,.settings-card .nav-tabs .nav-link{justify-content:flex-start}.settings-card .nav-pills .nav-link.active,.settings-card .nav-pills .show>.nav-link{background-color:#6366f159;color:#6366f1}.settings-card .nav-pills .nav-link{align-items:center;display:flex}.settings-card .nav-pills .nav-link svg{height:12px;margin-right:6px;width:12px}.settings-card .nav.flex-column:not(.nav-sidebar)>li{border-bottom:none!important}.setings-header{align-items:center;background:#ddd;border-bottom:0;display:flex;padding:13px 20px}.setings-header h3{margin-top:0}.trial-block{align-items:center;background:#6366f1;border-radius:5px;color:#fff;display:flex;padding:15px}.trial-block svg{color:#c9cafa;margin-right:10px;width:80px}.trial-block div h4{font-size:20px;font-weight:600;margin-bottom:0;text-transform:uppercase}.trial-block div p{font-size:14px;font-weight:500;margin-bottom:-3px;margin-top:4px;text-transform:uppercase}.trial-block div small{color:#edc1c7}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 94473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ settings)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/index.vue?vue&type=template&id=e3e1e7a6
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
    staticClass: "col-md-3"
  }, [_c('card', {
    staticClass: "settings-card",
    attrs: {
      "title": _vm.$t('Billing Settings')
    }
  }, [_c('ul', {
    staticClass: "nav flex-column nav-pills m-1"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c('li', {
      key: tab.route,
      staticClass: "nav-item"
    }, [_vm.$can(tab.permission) ? _c('router-link', {
      staticClass: "nav-link",
      attrs: {
        "to": {
          name: tab.route
        },
        "active-class": "active"
      }
    }, [_c('i', {
      staticClass: "mr-2",
      "class": tab.icon
    }), _vm._v("\n              " + _vm._s(tab.name) + "\n            ")]) : _vm._e()], 1);
  }), 0)])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)])], 1);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/index.vue?vue&type=script&lang=js
/* harmony default export */ const settingsvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Update Profile')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Billing Settings',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Billing Settings',
        url: ''
      }]
    };
  },
  computed: {
    tabs: function tabs() {
      return [{
        icon: "fas fa-user",
        name: this.$t('profile'),
        route: 'settings.profile',
        permission: 'update-profile'
      }, {
        icon: "fas fa-money-bill",
        name: this.$t('Billing Settings'),
        route: 'settings.billing',
        permission: 'billing'
      }, {
        icon: "fas fa-file-invoice",
        name: this.$t('Payments'),
        route: 'settings.billing.payments',
        permission: 'billing'
      }, {
        icon: "fas fa-paper-plane",
        name: this.$t('Subscription Requests'),
        route: 'settings.billing.subscription-requests',
        permission: 'billing'
      }];
    }
  }
});
;// ./resources/js/pages/settings/index.vue?vue&type=script&lang=js
 /* harmony default export */ const pages_settingsvue_type_script_lang_js = (settingsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/index.vue?vue&type=style&index=0&id=e3e1e7a6&prod&lang=css
var settingsvue_type_style_index_0_id_e3e1e7a6_prod_lang_css = __webpack_require__(65940);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/index.vue?vue&type=style&index=0&id=e3e1e7a6&prod&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(settingsvue_type_style_index_0_id_e3e1e7a6_prod_lang_css/* default */.A, options);



/* harmony default export */ const pages_settingsvue_type_style_index_0_id_e3e1e7a6_prod_lang_css = (settingsvue_type_style_index_0_id_e3e1e7a6_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/settings/index.vue?vue&type=style&index=0&id=e3e1e7a6&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/settings/index.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  pages_settingsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const settings = (component.exports);

/***/ })

}]);