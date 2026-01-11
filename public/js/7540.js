"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[7540],{

/***/ 37128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".price-single[data-v-0a8aa71e]{align-items:flex-start;border:2px solid #c9cafa5c;border-radius:5px;cursor:pointer;display:flex;margin:0 0 10px!important;padding:15px 14px!important;position:relative;width:100%}.price-single img[data-v-0a8aa71e]{max-width:80px}.price-single ul[data-v-0a8aa71e]{display:grid;grid-template-columns:1fr 1fr;list-style:none;margin:8px 0 0;padding:0}.price-single ul li[data-v-0a8aa71e]{color:#8b8f95;font-size:12px;margin-right:12px}.price-single ul li span[data-v-0a8aa71e]{color:#33a0d9}.price-single .price-badge[data-v-0a8aa71e]{background:#33a0d9;border-top-left-radius:12px;bottom:0;position:absolute}.activePlanText[data-v-0a8aa71e],.price-single .price-badge[data-v-0a8aa71e]{color:#fff;font-size:13px;margin:0;padding:3px 8px;right:0}.activePlanText[data-v-0a8aa71e]{background:green;border-radius:3px;top:12px}label.price-single.selected[data-v-0a8aa71e]{border-color:#33a0d9}.current-plan[data-v-0a8aa71e]{background:#ddd;border:2px solid green;cursor:no-drop!important;opacity:1}.line-through[data-v-0a8aa71e]{text-decoration:line-through}.small-text[data-v-0a8aa71e]{font-size:11px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 37540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ billing)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/billing.vue?vue&type=template&id=587ba990&scoped=true
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', [_vm.tenant && !_vm.tenant.on_trial && _vm.tenant.is_subscribed ? _c('div', [_c('div', {
    staticClass: "subscribe-plan"
  }, [_c('img', {
    staticClass: "w-16 h-16 mr-3",
    attrs: {
      "src": _vm.tenant.plan.image_url,
      "alt": "plan-name"
    }
  }), _vm._v(" "), _c('div', [_c('p', [_vm._v("\n                    " + _vm._s(_vm.$t("Subscribed to")) + " " + _vm._s(_vm.tenant && _vm.tenant.plan.name) + "\n                    " + _vm._s(_vm.$t("Plan until")) + "\n                    " + _vm._s(_vm._f("moment")(_vm.tenant && _vm.tenant.plan_ends_at, "Do MMM, YYYY")) + "\n                  ")]), _vm._v(" "), _c('span', {
    staticClass: "text-xs text-gray-700 block"
  }, [_vm._v("\n                    " + _vm._s(_vm.tenant && _vm.tenant.plan.description) + "\n                  ")])]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "btn btn-primary btn-block",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.setShowPlan
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Change plan")) + "\n                  ")])])])]) : _vm.tenant.plan_ends_at && !_vm.tenant.is_subscribed ? _c('div', {
    staticClass: "mt-3"
  }, [_c('div', {
    staticClass: "resume-alert"
  }, [_vm._v("\n                " + _vm._s(_vm.$t("Subscription expired")) + "\n              ")])]) : !_vm.tenant.is_subscribed && !_vm.tenant.on_trial ? _c('div', {
    staticClass: "trial-block"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "d": "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    }
  })]), _vm._v(" "), _c('div', [_c('h4', [_vm._v("\n                  " + _vm._s(_vm.$t("Your trial period ended")) + "\n                  " + _vm._s(_vm._f("moment")(_vm.tenant && _vm.tenant.trial_ends_at, "from", "now")) + "\n                ")])])]) : _c('div', {
    staticClass: "trial-block"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "d": "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    }
  })]), _vm._v(" "), _c('div', [_c('h4', [_vm._v("\n                  " + _vm._s(_vm.$t("You are on Trial Period for the")) + "\n                  " + _vm._s(_vm.getLocalizedPlanName(_vm.tenant && _vm.tenant.plan.name)) + " " + _vm._s(_vm.$t("plan")) + "\n                ")]), _vm._v(" "), _c('p', [_vm._v("\n                  " + _vm._s(_vm.$t("You have")) + "\n                  " + _vm._s(_vm.getTrialDaysLeft(_vm.tenant && _vm.tenant.trial_ends_at)) + "\n                  " + _vm._s(_vm.$t("days left on your trial")) + "\n                ")])])])]), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [this.$store.state.operations.showPlan ? _c('div', {
    staticClass: "pricing-wrap"
  }, [_c('h6', {
    staticClass: "my-3"
  }, [_vm._v(_vm._s(_vm.$t("Subscribe to a plan below")))]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-12 col-xl-12"
  }, [_c('ul', {
    staticClass: "nav nav-tabs justify-content-center"
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.form.selectedPlanType === 'month'
    },
    attrs: {
      "role": "button"
    },
    on: {
      "click": function click($event) {
        _vm.form.selectedPlanType = 'month';
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Monthly")) + "\n                    ")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.form.selectedPlanType === 'year'
    },
    attrs: {
      "role": "button"
    },
    on: {
      "click": function click($event) {
        _vm.form.selectedPlanType = 'year';
      }
    }
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Yearly")) + "\n                      "), _vm.centralPlanDiscount > 0 ? _c('span', {
    staticClass: "small-text"
  }, [_vm._v(_vm._s(_vm.centralPlanDiscount) + "% OFF")]) : _vm._e()])])])]), _vm._v(" "), _c('plans', {
    attrs: {
      "planIdError": _vm.form.errors.has('plan_id'),
      "hasError": _vm.form,
      "selectedPlan": _vm.form.plan_id,
      "selectedPlanType": _vm.form.selectedPlanType
    },
    on: {
      "changePlan": _vm.changePlan
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    "class": {
      'd-none': _vm.form.plan_id == null
    }
  }, [_c('div', [_vm.showExchangeRate ? _c('div', {
    staticClass: "bg-success p-3 rounded my-3"
  }, [_c('strong', {
    staticClass: "text-capitalize"
  }, [_c('i', {
    staticClass: "icon fas fa-info"
  }), _vm._v(" Dollar exchange rate is:\n                    " + _vm._s(_vm.centralCurrency.symbol) + " " + _vm._s(_vm.centralCurrencyRate) + "\n                    " + _vm._s(_vm.centralCurrencyRateBasedOn) + " "), _c('br'), _vm._v("\n                    " + _vm._s(_vm.$t("You will be charged")) + ": $\n                    "), _vm.form.selectedPlanType == 'month' ? _c('span', [_vm._v("\n                      " + _vm._s(_vm.totalAmount) + "\n                    ")]) : _c('span', [_vm._v("\n                      " + _vm._s(_vm.getDiscountedPrice(_vm.totalAmount, _vm.centralPlanDiscount)) + "\n                    ")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "quantity"
    }
  }, [_c('p', [_vm._v("\n                      " + _vm._s(_vm.form.selectedPlanType === "month" ? _vm.$t("Number of Months") : _vm.$t("Number of Years")) + "\n                      "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.quantity,
      expression: "form.quantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('quantity')
    },
    attrs: {
      "type": "number",
      "min": "1",
      "max": "9999",
      "id": "quantity"
    },
    domProps: {
      "value": _vm.form.quantity
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "quantity", $event.target.value);
      }, _vm.updateQuantity]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "quantity"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "payment_method"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Payment Method")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.payment_method,
      expression: "form.payment_method"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('payment_method')
    },
    attrs: {
      "id": "payment_method",
      "name": "payment_method"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "payment_method", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.changeSelectedPaymentMethod(_vm.form.quantity, _vm.form.plan_id);
      }]
    }
  }, [_c('option', {
    attrs: {
      "disabled": ""
    },
    domProps: {
      "value": null
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Select a payment method")) + "\n                      ")]), _vm._v(" "), _vm._l(_vm.paymentMethods, function (paymentMethod) {
    return _c('option', {
      key: paymentMethod.identifier,
      domProps: {
        "value": paymentMethod.identifier
      }
    }, [_vm._v("\n                        " + _vm._s(paymentMethod.name) + "\n                      ")]);
  })], 2), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "payment_method"
    }
  })], 1)]), _vm._v(" "), _vm.selectedPaymentMethod && _vm.selectedPaymentMethod.identifier === 'manual' ? _c('div', {
    staticClass: "alert alert-warning"
  }, [_vm._v("\n                  " + _vm._s(_vm.$t("Please follow the payment instructions provided below to complete your subscription.")) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.form.payment_method === 'manual' ? _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "transaction_id"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Transaction ID") + " (" + _vm.$t("If have any") + ")") + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transaction_id,
      expression: "form.transaction_id"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('transaction_id')
    },
    attrs: {
      "type": "text",
      "id": "transaction_id",
      "placeholder": _vm.$t('123456XYZ789')
    },
    domProps: {
      "value": _vm.form.transaction_id
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transaction_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "transaction_id"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.payment_method === 'manual' ? _c('div', {
    staticClass: "form-group row"
  }, [_c('label', {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "document_path"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Document") + " (" + _vm.$t("If have any") + ")") + "\n                  ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('input', {
    staticClass: "form-control-file",
    "class": {
      'is-invalid': _vm.form.errors.has('document_path')
    },
    attrs: {
      "type": "file",
      "id": "document_path"
    },
    on: {
      "change": function change(e) {
        _vm.form.document_path = e.target.files[0];
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "document_path"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-block btn-success",
    "class": {
      'btn-loading': _vm.loading
    },
    attrs: {
      "type": "submit",
      "disabled": _vm.loading
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Subscribe")) + "\n                  ")])])])])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/billing/Plans.vue?vue&type=template&id=0a8aa71e&scoped=true
var Plansvue_type_template_id_0a8aa71e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.plans, function (plan, i) {
    return _c('div', {
      key: i
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.selectedPlanId,
        expression: "selectedPlanId"
      }],
      staticClass: "radio-plan d-none",
      "class": {
        'is-invalid': _vm.planIdError
      },
      attrs: {
        "id": plan.id,
        "type": "radio",
        "name": "plan_id"
      },
      domProps: {
        "value": plan.id,
        "checked": _vm._q(_vm.selectedPlanId, plan.id)
      },
      on: {
        "change": [function ($event) {
          _vm.selectedPlanId = plan.id;
        }, function ($event) {
          return _vm.$emit('changePlan', plan.id);
        }]
      }
    }), _vm._v(" "), _c('has-error', {
      attrs: {
        "form": _vm.hasError,
        "field": "plan_id"
      }
    }), _vm._v(" "), _c('label', {
      staticClass: "price-single",
      "class": {
        'selected': plan.id === _vm.selectedPlanId && !_vm.currentPlan(plan.id),
        'current-plan': _vm.currentPlan(plan.id)
      },
      attrs: {
        "for": plan.id
      }
    }, [_c('img', {
      staticClass: "w-16 h-16 mr-3",
      attrs: {
        "src": plan.image,
        "alt": plan.name
      }
    }), _vm._v(" "), _c('div', [_c('span', [_vm._v(_vm._s(_vm.getLocalizedPlanName(plan.name)) + " "), _vm.currentPlan(plan.id) ? _c('span', {
      staticClass: "activePlanText text-capitalize"
    }, [_vm._v("\n          " + _vm._s(_vm.$t('Current Plan')) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c('span', {
      staticClass: "text-xs text-gray-700 d-block"
    }, [_vm._v(_vm._s(_vm.getLocalizedPlanDescription(plan.description)))]), _vm._v(" "), _c('ul', [_c('li', [_vm._v(_vm._s(_vm.$t('Client Limit')) + ": "), _c('span', [_vm._v(_vm._s(_vm._f("limitFormat")(plan.limit_clients)))])]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t('Domains Limit')) + ": "), _c('span', [_vm._v(_vm._s(_vm._f("limitFormat")(plan.limit_domains)))])]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t('Employee Limit')) + ": "), _c('span', [_vm._v(_vm._s(_vm._f("limitFormat")(plan.limit_employees)))])]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t('Supplier Limit')) + ": "), _c('span', [_vm._v(_vm._s(_vm._f("limitFormat")(plan.limit_suppliers)))])]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t('Purchase Limit')) + ": "), _c('span', [_vm._v(_vm._s(_vm._f("limitFormat")(plan.limit_purchases)))])]), _vm._v(" "), _c('li', [_vm._v(_vm._s(_vm.$t('Invoice Limit')) + ": "), _c('span', [_vm._v(_vm._s(_vm._f("limitFormat")(plan.limit_invoices)))])])]), _vm._v(" "), _c('span', {
      staticClass: "price-badge"
    }, [_vm.centralPlanDiscount > 0 && _vm.selectedPlanType === 'year' ? [_c('span', {
      staticClass: "line-through small-text"
    }, [_c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(_vm._s(plan.amount * 12) + " \n            ")]), _vm._v(" "), _c('strong', {
      staticClass: "text-strong text-capitalize"
    }, [_c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(_vm._s(_vm.getDiscountedPrice(plan.amount, _vm.centralPlanDiscount)) + "\n            ")]), _vm._v("\n            / " + _vm._s(_vm.selectedPlanType === "year" ? _vm.$t("Year") : _vm.$t("Month")) + "\n          ")] : [_vm.centralCurrency ? _c('span', [_c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")]), _vm._v(_vm._s(_vm.getAdjustedPrice(plan.amount)) + " /\n              " + _vm._s(_vm.selectedPlanType === "year" ? _vm.$t("Year") : _vm.$t("Month")) + "\n            ")]) : _vm._e()]], 2)])])], 1);
  }), 0);
};
var Plansvue_type_template_id_0a8aa71e_scoped_true_staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/billing/Plans.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const Plansvue_type_script_lang_js = ({
  props: {
    planIdError: {
      type: [String, Boolean]
    },
    hasError: {
      type: Object
    },
    selectedPlan: {
      type: Number
    },
    selectedPlanType: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      plans: [],
      selectedPlanId: null,
      centralCurrency: null,
      centralPlanDiscount: null
    };
  },
  created: function created() {
    this.centralAppInfo();
    this.getCentralPlanDiscount();
    this.getPlans();
    this.selectedPlanId = this.selectedPlan;
  },
  computed: _objectSpread({}, (0,vuex_esm/* mapGetters */.L8)('operations', ['tenant'])),
  methods: {
    currentPlan: function currentPlan(planId) {
      if (this.tenant.plan_id == planId) {
        return true;
      }
      return false;
    },
    getAdjustedPrice: function getAdjustedPrice(planAmount) {
      return this.selectedPlanType === "year" ? planAmount * 12 : planAmount;
    },
    getDiscountedPrice: function getDiscountedPrice(planAmount, discount) {
      var yearlyPrice = planAmount * 12;
      var discountAmount = yearlyPrice * discount / 100;
      return (yearlyPrice - discountAmount).toFixed(2);
    },
    getPlans: function getPlans() {
      var _this = this;
      this.$axios.get('/api/plans').then(function (response) {
        _this.plans = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    centralAppInfo: function centralAppInfo() {
      var _this2 = this;
      this.$axios.get('/api/central-currency').then(function (response) {
        _this2.centralCurrency = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getCentralPlanDiscount: function getCentralPlanDiscount() {
      var _this3 = this;
      this.$axios.get("/api/central-plan-discount").then(function (response) {
        _this3.centralPlanDiscount = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getImg: function getImg(data) {
      return data;
    },
    getLocalizedPlanName: function getLocalizedPlanName(planName) {
      // Map plan names to translation keys
      var planNameMap = {
        'New Business': 'New Business',
        'Growing Business': 'Growing Business',
        'Pro Marketer': 'Pro Marketer'
      };
      if (planNameMap[planName]) {
        return this.$t(planNameMap[planName]);
      }

      // If no mapping found, try to translate directly
      return this.$t(planName) || planName;
    },
    getLocalizedPlanDescription: function getLocalizedPlanDescription(description) {
      // Map descriptions to translation keys
      var descriptionMap = {
        'Best for small businesses': 'Best for small businesses',
        'Best for medium businesses': 'Best for medium businesses',
        'Best for large businesses': 'Best for large businesses'
      };
      if (descriptionMap[description]) {
        return this.$t(descriptionMap[description]);
      }

      // If no mapping found, try to translate directly
      return this.$t(description) || description;
    }
  }
});
;// ./resources/js/components/billing/Plans.vue?vue&type=script&lang=js
 /* harmony default export */ const billing_Plansvue_type_script_lang_js = (Plansvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/billing/Plans.vue?vue&type=style&index=0&id=0a8aa71e&prod&lang=scss&scoped=true
var Plansvue_type_style_index_0_id_0a8aa71e_prod_lang_scss_scoped_true = __webpack_require__(37128);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/billing/Plans.vue?vue&type=style&index=0&id=0a8aa71e&prod&lang=scss&scoped=true

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Plansvue_type_style_index_0_id_0a8aa71e_prod_lang_scss_scoped_true/* default */.A, options);



/* harmony default export */ const billing_Plansvue_type_style_index_0_id_0a8aa71e_prod_lang_scss_scoped_true = (Plansvue_type_style_index_0_id_0a8aa71e_prod_lang_scss_scoped_true/* default */.A.locals || {});
;// ./resources/js/components/billing/Plans.vue?vue&type=style&index=0&id=0a8aa71e&prod&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/billing/Plans.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  billing_Plansvue_type_script_lang_js,
  Plansvue_type_template_id_0a8aa71e_scoped_true_render,
  Plansvue_type_template_id_0a8aa71e_scoped_true_staticRenderFns,
  false,
  null,
  "0a8aa71e",
  null
  
)

/* harmony default export */ const Plans = (component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/billing.vue?vue&type=script&lang=js
function billingvue_type_script_lang_js_typeof(o) { "@babel/helpers - typeof"; return billingvue_type_script_lang_js_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, billingvue_type_script_lang_js_typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function billingvue_type_script_lang_js_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function billingvue_type_script_lang_js_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? billingvue_type_script_lang_js_ownKeys(Object(t), !0).forEach(function (r) { billingvue_type_script_lang_js_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : billingvue_type_script_lang_js_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function billingvue_type_script_lang_js_defineProperty(e, r, t) { return (r = billingvue_type_script_lang_js_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function billingvue_type_script_lang_js_toPropertyKey(t) { var i = billingvue_type_script_lang_js_toPrimitive(t, "string"); return "symbol" == billingvue_type_script_lang_js_typeof(i) ? i : i + ""; }
function billingvue_type_script_lang_js_toPrimitive(t, r) { if ("object" != billingvue_type_script_lang_js_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != billingvue_type_script_lang_js_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




/* harmony default export */ const billingvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Billing Settings")
    };
  },
  created: function created() {
    this.centralAppInfo();
    this.getCentralPlanDiscount();
    this.getPaymentMethods();
    this.passedPlanEndsAt();
    this.toggleShowPlan();
  },
  computed: billingvue_type_script_lang_js_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["tenant"])),
  components: {
    Plans: Plans
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Billing Settings",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Billing Settings",
        url: ""
      }],
      subscription: false,
      showPlan: false,
      showResumePlanLink: false,
      isLoading: false,
      showExchangeRate: false,
      loading: false,
      plans: [],
      paymentMethods: [],
      currentSubscriptions: [],
      centralCurrency: null,
      centralCurrencyRate: null,
      centralCurrencyRateBasedOn: "",
      totalAmount: null,
      selectedPaymentMethod: null,
      centralPlanDiscount: null,
      form: new vform_es/* default */.Ay({
        plan_id: null,
        selectedPlanType: "month",
        quantity: 1,
        payment_method: null,
        transaction_id: null,
        document_path: null
      })
    };
  },
  methods: {
    getCentralPlanDiscount: function getCentralPlanDiscount() {
      var _this = this;
      this.$axios.get("/api/central-plan-discount").then(function (response) {
        _this.centralPlanDiscount = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getDiscountedPrice: function getDiscountedPrice(planAmount, discount) {
      var yearlyPrice = planAmount * 12;
      var discountAmount = yearlyPrice * discount / 100;
      return yearlyPrice - discountAmount;
    },
    changeSelectedPaymentMethod: function changeSelectedPaymentMethod(quantity, plan_id) {
      var _this2 = this;
      this.selectedPaymentMethod = this.paymentMethods.find(function (el) {
        return el.identifier === _this2.form.payment_method;
      });
      this.exchangeRate(this.selectedPaymentMethod, quantity, plan_id);
    },
    updateQuantity: function updateQuantity() {
      this.exchangeRate(this.selectedPaymentMethod, this.form.quantity, this.form.plan_id);
    },
    exchangeRate: function exchangeRate(paymentMethod, quantity, plan_id) {
      var _this3 = this;
      if (paymentMethod && paymentMethod.name !== "Manual Payment") {
        this.$axios.get("/api/central-currency-exchange-rate-info", {
          params: {
            quantity: quantity,
            plan_id: plan_id
          }
        }).then(function (response) {
          _this3.centralCurrencyRate = response.data.rate;
          _this3.centralCurrencyRateBasedOn = response.data.basedOn;
          _this3.totalAmount = response.data.total;
        })["catch"](function (error) {
          console.log(error);
        });
        this.showExchangeRate = true;
      } else {
        this.showExchangeRate = false;
      }
    },
    getPaymentMethods: function getPaymentMethods() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this4.isLoading = true;
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/subscriptions/payment-methods").then(function (_ref) {
                var data = _ref.data.data;
                _this4.paymentMethods = data;
              })["catch"](function (err) {
                return console.log(err);
              })["finally"](function () {
                _this4.isLoading = false;
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    centralAppInfo: function centralAppInfo() {
      var _this5 = this;
      this.$axios.get("/api/central-currency").then(function (response) {
        _this5.centralCurrency = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    passedPlanEndsAt: function passedPlanEndsAt() {
      if (new Date(this.tenant.plan_ends_at) < new Date()) {
        this.$store.dispatch("operations/setShowPlan", true);
        this.showResumePlanLink = false;
        return true;
      }
      this.showResumePlanLink = true;
      return false;
    },
    // get settings
    refreshTenant: function refreshTenant() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return _this6.$store.dispatch("operations/fetchTenant");
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    changePlan: function changePlan(plan_id) {
      this.form.plan_id = plan_id;
      this.exchangeRate(this.selectedPaymentMethod, this.form.quantity, this.form.plan_id);
    },
    submitForm: function submitForm() {
      var _this7 = this;
      this.loading = true;
      this.form.post("/api/subscription-requests").then(function (_ref2) {
        var data = _ref2.data;
        if (data.url) {
          window.location.href = data.url;
          return;
        }
        if (_this7.form.payment_method === "manual") {
          _this7.$router.push({
            name: "settings.billing.subscription-requests"
          });
          toast.fire({
            type: "success",
            title: _this7.$t("Subscription request sent.")
          });
          return;
        }
        _this7.refreshTenant();
        _this7.form.reset();
        // this.$store.dispatch("operations/setShowPlan", false);
      })["finally"](function () {
        _this7.loading = false;
      });
    },
    toggleShowPlan: function toggleShowPlan() {
      if (this.tenant && !this.tenant.plan_id) this.setShowPlan();
    },
    setShowPlan: function setShowPlan() {
      this.$store.dispatch("operations/setShowPlan", true);
    },
    getLocalizedPlanName: function getLocalizedPlanName(planName) {
      if (!planName) return '';
      // Map plan names to translation keys
      var planNameMap = {
        'New Business': 'New Business',
        'Growing Business': 'Growing Business',
        'Pro Marketer': 'Pro Marketer'
      };
      if (planNameMap[planName]) {
        return this.$t(planNameMap[planName]);
      }

      // If no mapping found, try to translate directly
      return this.$t(planName) || planName;
    },
    getTrialDaysLeft: function getTrialDaysLeft(trialEndsAt) {
      if (!trialEndsAt) return '';
      // Calculate days left
      var now = new Date();
      var trialEnd = new Date(trialEndsAt);
      var diffTime = trialEnd - now;
      var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  }
});
;// ./resources/js/pages/settings/billing.vue?vue&type=script&lang=js
 /* harmony default export */ const settings_billingvue_type_script_lang_js = (billingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/billing.vue?vue&type=style&index=0&id=587ba990&prod&scoped=true&lang=css
var billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css = __webpack_require__(87124);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/settings/billing.vue?vue&type=style&index=0&id=587ba990&prod&scoped=true&lang=css

            

var billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css_options = {};

billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css_options.insert = "head";
billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css_options.singleton = false;

var billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css/* default */.A, billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css_options);



/* harmony default export */ const settings_billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css = (billingvue_type_style_index_0_id_587ba990_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/settings/billing.vue?vue&type=style&index=0&id=587ba990&prod&scoped=true&lang=css

;// ./resources/js/pages/settings/billing.vue



;


/* normalize component */

var billing_component = (0,componentNormalizer/* default */.A)(
  settings_billingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "587ba990",
  null
  
)

/* harmony default export */ const billing = (billing_component.exports);

/***/ }),

/***/ 87124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card[data-v-587ba990]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-587ba990]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-587ba990]{padding:1.25rem}.card-footer[data-v-587ba990]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.refresh-btn[data-v-587ba990]{background:#33a0d91a!important;border:none;border-radius:10px;color:#33a0d9!important;height:44px;padding:10px 16px;width:56px}.export-excel-btn[data-v-587ba990],.export-pdf-btn[data-v-587ba990]{background:#f6fef4!important;color:#2ab930!important}.export-excel-btn[data-v-587ba990],.export-pdf-btn[data-v-587ba990],.print-btn[data-v-587ba990]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.print-btn[data-v-587ba990]{background:#33a0d91a!important;color:#33a0d9!important}.btn-primary[data-v-587ba990]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.pricing-wrap h2[data-v-587ba990]{color:#4c4e51;font-size:15px}.subscribe-plan[data-v-587ba990]{align-items:center;display:flex;justify-content:space-between}.subscribe-plan img[data-v-587ba990]{max-width:100px}.subscribe-plan>div p[data-v-587ba990]{font-size:18px;font-weight:400;margin-bottom:0}.switch-plan[data-v-587ba990]{justify-content:space-between;margin-top:30px}.resume-alert[data-v-587ba990]{background:#dc3545;border-radius:8px;color:#fff;font-size:18px;padding:20px}.resume-subs-block p[data-v-587ba990]{margin-bottom:0;margin-right:9px}.resume-subs-block[data-v-587ba990]{display:flex;justify-content:flex-end;margin-top:11px}.small-text[data-v-587ba990]{font-size:10px}.card-icon.bg-brand-primary[data-v-587ba990]{background:linear-gradient(135deg,#33a0d9,#2a8bc7)!important;border:1px solid rgba(51,160,217,.3);border-radius:20px}.card-icon.bg-brand-light-blue[data-v-587ba990]{background:linear-gradient(135deg,#ebf6fc,#d6edf7)!important;border:1px solid rgba(235,246,252,.5);border-radius:20px;color:#33a0d9!important}.card-icon.bg-brand-light-green[data-v-587ba990]{background:linear-gradient(135deg,#f6fef4,#e8f5e8)!important;border:1px solid rgba(246,254,244,.5);border-radius:20px;color:#33a0d9!important}.card-icon.bg-brand-green[data-v-587ba990]{background:linear-gradient(135deg,#2ab930,#239a26)!important;border:1px solid rgba(42,185,48,.3);border-radius:20px}.card-icon.bg-brand-dark-blue[data-v-587ba990]{background:linear-gradient(135deg,#33a0d9,#152a4a)!important;border:1px solid rgba(27,60,113,.3);border-radius:20px}.card-icon.bg-brand-teal[data-v-587ba990]{background:linear-gradient(135deg,#449eae,#3a8a98)!important;border:1px solid rgba(68,158,174,.3);border-radius:20px}.card-icon.bg-brand-dark-teal[data-v-587ba990]{background:linear-gradient(135deg,#377578,#2d5f61)!important;border:1px solid rgba(55,117,120,.3);border-radius:20px}.card-icon.bg-brand-light-blue i[data-v-587ba990],.card-icon.bg-brand-light-green i[data-v-587ba990]{color:#33a0d9!important}.card-icon.bg-brand-dark-blue i[data-v-587ba990],.card-icon.bg-brand-dark-teal i[data-v-587ba990],.card-icon.bg-brand-green i[data-v-587ba990],.card-icon.bg-brand-primary i[data-v-587ba990],.card-icon.bg-brand-teal i[data-v-587ba990]{color:#fff!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);