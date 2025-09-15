"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9270],{

/***/ 29270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ settings)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/index.vue?vue&type=template&id=6c75dba3
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
    staticClass: "col-sm-12 col-md-4 col-lg-3 col-xl-2"
  }, [_c('card', {
    staticClass: "settings-card",
    attrs: {
      "title": _vm.$t('Landing Page Settings')
    }
  }, [_c('ul', {
    staticClass: "nav flex-column nav-pills m-1"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c('li', {
      key: tab.route,
      staticClass: "nav-item"
    }, [_c('router-link', {
      staticClass: "nav-link thumb",
      attrs: {
        "to": {
          name: tab.route
        },
        "active-class": "active"
      }
    }, [_c('fa', {
      attrs: {
        "icon": tab.icon,
        "fixed-width": ""
      }
    }), _vm._v("\n              " + _vm._s(tab.name) + "\n            ")], 1)], 1);
  }), 0)])], 1), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12 col-md-8 col-lg-9 col-xl-10"
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)])], 1);
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/index.vue?vue&type=script&lang=js
/* harmony default export */ const settingsvue_type_script_lang_js = ({
  layout: 'central',
  middleware: 'auth',
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Landing Page Settings')
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Landing Page Settings',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Landing Page Settings',
        url: ''
      }]
    };
  },
  computed: {
    tabs: function tabs() {
      return [{
        icon: 'mask',
        name: this.$t('Hero'),
        route: 'settings.hero'
      }, {
        icon: 'address-card',
        name: this.$t('About Us'),
        route: 'settings.about-us'
      }, {
        icon: 'question',
        name: this.$t('Why Us'),
        route: 'settings.why-us'
      }, {
        icon: 'briefcase',
        name: this.$t('Business Start'),
        route: 'settings.business-start'
      }, {
        icon: 'asterisk',
        name: this.$t('Features'),
        route: 'settings.features'
      }, {
        icon: 'bolt',
        name: this.$t('Explorers'),
        route: 'settings.explorers'
      }, {
        icon: 'hourglass-start',
        name: this.$t('All features'),
        route: 'settings.all-features'
      }, {
        icon: 'space-shuttle',
        name: this.$t('CTA Area'),
        route: 'settings.cta'
      }, {
        icon: 'eye',
        name: this.$t('Software overview'),
        route: 'settings.software-overview'
      }, {
        icon: 'money-bill',
        name: this.$t('Pricing plan'),
        route: 'settings.pricing-plan'
      }, {
        icon: 'star',
        name: this.$t('Testimonial'),
        route: 'settings.testimonial'
      }, {
        icon: 'newspaper',
        name: this.$t('Brands'),
        route: 'settings.brands'
      }, {
        icon: 'envelope',
        name: this.$t('Newsletter'),
        route: 'settings.newsletter'
      }, {
        icon: 'code',
        name: this.$t('Custom HTML'),
        route: 'settings.custom-html'
      }];
    }
  }
});
;// ./resources/js/pages/central/settings/index.vue?vue&type=script&lang=js
 /* harmony default export */ const central_settingsvue_type_script_lang_js = (settingsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/index.vue?vue&type=style&index=0&id=6c75dba3&prod&lang=css
var settingsvue_type_style_index_0_id_6c75dba3_prod_lang_css = __webpack_require__(30898);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/central/settings/index.vue?vue&type=style&index=0&id=6c75dba3&prod&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(settingsvue_type_style_index_0_id_6c75dba3_prod_lang_css/* default */.A, options);



/* harmony default export */ const central_settingsvue_type_style_index_0_id_6c75dba3_prod_lang_css = (settingsvue_type_style_index_0_id_6c75dba3_prod_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/central/settings/index.vue?vue&type=style&index=0&id=6c75dba3&prod&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/central/settings/index.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  central_settingsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ const settings = (component.exports);

/***/ }),

/***/ 30898:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".settings-card .card-header{border-bottom:1px solid#ddd;box-shadow:none}.settings-card .card-body{padding:10px}.settings-card .nav-pills .nav-link,.settings-card .nav-tabs .nav-link{justify-content:flex-start}.settings-card .nav-pills .nav-link.active,.settings-card .nav-pills .show>.nav-link{background-color:#6366f159;color:#6366f1}.settings-card{position:sticky;top:30px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);