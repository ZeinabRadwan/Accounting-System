"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[767],{

/***/ 10767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ accounting_periods)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-periods.vue?vue&type=template&id=5665de0c&scoped=true
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
  }, [_c('div', {
    staticClass: "card custom-card w-100"
  }, [_c('div', {
    staticClass: "card-body position-relative"
  }, [_c('div', {
    staticClass: "row align-items-center mb-3"
  }, [_c('div', {
    staticClass: "col-md-6 col-lg-4 mb-2 mb-md-0"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedFiscalYear,
      expression: "selectedFiscalYear"
    }],
    staticClass: "form-control",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectedFiscalYear = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.filterByFiscalYear]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('All Fiscal Years')))]), _vm._v(" "), _vm._l(_vm.fiscalYears, function (fy) {
    return _c('option', {
      key: fy.id,
      domProps: {
        "value": fy.id
      }
    }, [_vm._v("\n                                    " + _vm._s(fy.full_name) + "\n                                ")]);
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-lg-8 text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.openModal
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.$t('Add Accounting Period')) + "\n                                    "), _c('i', {
    staticClass: "fas fa-plus-circle d-none d-sm-inline-block"
  })])])])]), _vm._v(" "), _c('GeneralTable', {
    attrs: {
      "columns": _vm.accountingPeriodColumns,
      "rows": _vm.filteredPeriods,
      "table-id": "printMe",
      "wrapper-class": "mt-3",
      "show-actions": true
    },
    scopedSlots: _vm._u([{
      key: "cell-fiscal_year",
      fn: function fn(_ref) {
        var row = _ref.row;
        return [_vm._v("\n                            " + _vm._s(row.fiscal_year ? row.fiscal_year.name : '-') + "\n                        ")];
      }
    }, {
      key: "cell-start_date",
      fn: function fn(_ref2) {
        var row = _ref2.row;
        return [_vm._v("\n                            " + _vm._s(_vm.formatDate(row.start_date)) + "\n                        ")];
      }
    }, {
      key: "cell-end_date",
      fn: function fn(_ref3) {
        var row = _ref3.row;
        return [_vm._v("\n                            " + _vm._s(_vm.formatDate(row.end_date)) + "\n                        ")];
      }
    }, {
      key: "cell-status",
      fn: function fn(_ref4) {
        var row = _ref4.row;
        return [_c('span', {
          "class": _vm.getStatusClass(row)
        }, [_vm._v("\n                                " + _vm._s(_vm.getStatusText(row)) + "\n                            ")])];
      }
    }, {
      key: "actions",
      fn: function fn(_ref5) {
        var row = _ref5.row,
          index = _ref5.index;
        return [_c('div', {
          staticClass: "action-dropdown",
          "class": {
            open: _vm.openActionIndex === index
          }
        }, [_c('button', {
          staticClass: "action-icon-btn",
          attrs: {
            "type": "button",
            "data-action-index": index
          },
          on: {
            "click": function click($event) {
              $event.stopPropagation();
              return _vm.toggleAction(index);
            }
          }
        }, [_c('svg', {
          attrs: {
            "xmlns": "http://www.w3.org/2000/svg",
            "width": "24",
            "height": "25",
            "viewBox": "0 0 24 25",
            "fill": "none"
          }
        }, [_c('path', {
          attrs: {
            "d": "M13.125 12.7858C13.125 13.0083 13.059 13.2258 12.9354 13.4108C12.8118 13.5958 12.6361 13.74 12.4305 13.8252C12.225 13.9103 11.9988 13.9326 11.7805 13.8892C11.5623 13.8458 11.3618 13.7387 11.2045 13.5813C11.0472 13.424 10.94 13.2235 10.8966 13.0053C10.8532 12.7871 10.8755 12.5609 10.9606 12.3553C11.0458 12.1497 11.19 11.974 11.375 11.8504C11.56 11.7268 11.7775 11.6608 12 11.6608C12.2984 11.6608 12.5845 11.7794 12.7955 11.9903C13.0065 12.2013 13.125 12.4875 13.125 12.7858ZM12 7.53583C12.2225 7.53583 12.44 7.46985 12.625 7.34623C12.81 7.22262 12.9542 7.04691 13.0394 6.84135C13.1245 6.63578 13.1468 6.40958 13.1034 6.19135C13.06 5.97312 12.9528 5.77267 12.7955 5.61533C12.6382 5.458 12.4377 5.35085 12.2195 5.30744C12.0012 5.26404 11.775 5.28632 11.5695 5.37146C11.3639 5.45661 11.1882 5.60081 11.0646 5.78581C10.941 5.97082 10.875 6.18832 10.875 6.41083C10.875 6.7092 10.9935 6.99534 11.2045 7.20632C11.4155 7.4173 11.7016 7.53583 12 7.53583ZM12 18.0358C11.7775 18.0358 11.56 18.1018 11.375 18.2254C11.19 18.349 11.0458 18.5247 10.9606 18.7303C10.8755 18.9359 10.8532 19.1621 10.8966 19.3803C10.94 19.5985 11.0472 19.799 11.2045 19.9563C11.3618 20.1137 11.5623 20.2208 11.7805 20.2642C11.9988 20.3076 12.225 20.2853 12.4305 20.2002C12.6361 20.115 12.8118 19.9708 12.9354 19.7858C13.059 19.6008 13.125 19.3833 13.125 19.1608C13.125 18.8625 13.0065 18.5763 12.7955 18.3653C12.5845 18.1544 12.2984 18.0358 12 18.0358Z",
            "fill": "#023033"
          }
        })])]), _vm._v(" "), _vm.openActionIndex === index ? _c('div', {
          staticClass: "action-menu"
        }, [_c('div', {
          staticClass: "action-menu-header"
        }, [_c('span', {
          staticClass: "action-menu-title"
        }, [_vm._v(_vm._s(_vm.$t('Actions')))]), _vm._v(" "), _c('button', {
          staticClass: "action-menu-close",
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.toggleAction(index);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-times"
        })])]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.editPeriod(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-edit"
        }), _vm._v("\n                                                " + _vm._s(_vm.$t('Edit')) + "\n                                            ")])]), _vm._v(" "), !row.is_closed && row.id !== _vm.currentPeriodId ? _c('li', [_c('a', {
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.setCurrentPeriod(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-check"
        }), _vm._v("\n                                                " + _vm._s(_vm.$t('Set as Current')) + "\n                                            ")])]) : _vm._e(), _vm._v(" "), !row.is_closed ? _c('li', [_c('a', {
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.closePeriod(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-lock"
        }), _vm._v("\n                                                " + _vm._s(_vm.$t('Close Period')) + "\n                                            ")])]) : _vm._e(), _vm._v(" "), row.is_closed ? _c('li', [_c('a', {
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.reopenPeriod(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-unlock"
        }), _vm._v("\n                                                " + _vm._s(_vm.$t('Reopen Period')) + "\n                                            ")])]) : _vm._e(), _vm._v(" "), !row.is_closed ? _c('li', [_c('a', {
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _vm.deletePeriod(row);
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-trash"
        }), _vm._v("\n                                                " + _vm._s(_vm.$t('Delete')) + "\n                                            ")])]) : _vm._e()])]) : _vm._e()])];
      }
    }])
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "periodModal",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-lg",
    attrs: {
      "role": "document"
    }
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.isEditMode ? _vm.$t('Edit Accounting Period') : _vm.$t('Add Accounting Period')) + "\n                    ")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('form', {
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.savePeriod.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.name,
      expression: "form.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('name')
    },
    attrs: {
      "id": "name",
      "type": "text",
      "placeholder": _vm.$t('Enter period name')
    },
    domProps: {
      "value": _vm.form.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "fiscal_year_id"
    }
  }, [_vm._v(_vm._s(_vm.$t('Fiscal Year')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.fiscal_year_id,
      expression: "form.fiscal_year_id"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('fiscal_year_id')
    },
    attrs: {
      "id": "fiscal_year_id"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "fiscal_year_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t('Select Fiscal Year')))]), _vm._v(" "), _vm._l(_vm.fiscalYears, function (fy) {
    return _c('option', {
      key: fy.id,
      domProps: {
        "value": fy.id
      }
    }, [_vm._v("\n                                        " + _vm._s(fy.full_name) + "\n                                    ")]);
  })], 2), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "fiscal_year_id"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "start_date"
    }
  }, [_vm._v(_vm._s(_vm.$t('Start Date')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.start_date,
      expression: "form.start_date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('start_date')
    },
    attrs: {
      "id": "start_date",
      "type": "date"
    },
    domProps: {
      "value": _vm.form.start_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "start_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "start_date"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "end_date"
    }
  }, [_vm._v(_vm._s(_vm.$t('End Date')) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.end_date,
      expression: "form.end_date"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('end_date')
    },
    attrs: {
      "id": "end_date",
      "type": "date"
    },
    domProps: {
      "value": _vm.form.end_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "end_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "end_date"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "is_active"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.is_active,
      expression: "form.is_active"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('is_active')
    },
    attrs: {
      "id": "is_active"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "is_active", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    domProps: {
      "value": true
    }
  }, [_vm._v(_vm._s(_vm.$t('Active')))]), _vm._v(" "), _c('option', {
    domProps: {
      "value": false
    }
  }, [_vm._v(_vm._s(_vm.$t('Inactive')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "is_active"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "is_closed"
    }
  }, [_vm._v(_vm._s(_vm.$t('Closed')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.is_closed,
      expression: "form.is_closed"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('is_closed')
    },
    attrs: {
      "id": "is_closed"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "is_closed", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    domProps: {
      "value": false
    }
  }, [_vm._v(_vm._s(_vm.$t('Open')))]), _vm._v(" "), _c('option', {
    domProps: {
      "value": true
    }
  }, [_vm._v(_vm._s(_vm.$t('Closed')))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "is_closed"
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
      "rows": "3",
      "placeholder": _vm.$t('Enter any additional notes')
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
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.$t('Cancel')) + "\n                        ")]), _vm._v(" "), _c('v-button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.form.busy
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.isEditMode ? _vm.$t('Update') : _vm.$t('Save')) + "\n                        ")])], 1)])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_c('span', [_vm._v("×")])]);
}];

;// ./resources/js/pages/setup/accounting-periods.vue?vue&type=template&id=5665de0c&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-periods.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const accounting_periodsvue_type_script_lang_js = ({
  middleware: ['auth', 'check-permissions'],
  metaInfo: function metaInfo() {
    return {
      title: this.$t('Accounting Periods')
    };
  },
  components: {
    SettingsSidebar: function SettingsSidebar() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 12207));
    },
    GeneralTable: function GeneralTable() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 39173));
    }
  },
  data: function data() {
    return {
      breadcrumbsCurrent: 'Accounting Periods',
      breadcrumbs: [{
        name: 'Dashboard',
        url: 'home'
      }, {
        name: 'Setup',
        url: 'setup.index'
      }, {
        name: 'Accounting Periods',
        url: ''
      }],
      accountingPeriods: [],
      currentPeriodId: null,
      fiscalYears: [],
      selectedFiscalYear: '',
      isEditMode: false,
      openActionIndex: null,
      form: new vform_es/* default */.Ay({
        id: null,
        name: '',
        fiscal_year_id: '',
        start_date: '',
        end_date: '',
        is_active: true,
        is_closed: false,
        note: ''
      })
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)({
    appInfo: 'operations/appInfo'
  })), {}, {
    filteredPeriods: function filteredPeriods() {
      var _this = this;
      if (!this.selectedFiscalYear) {
        return this.accountingPeriods;
      }
      return this.accountingPeriods.filter(function (period) {
        return period.fiscal_year_id == _this.selectedFiscalYear;
      });
    },
    accountingPeriodColumns: function accountingPeriodColumns() {
      return [{
        key: 'id',
        label: this.$t('ID')
      }, {
        key: 'full_name',
        label: this.$t('Name')
      }, {
        key: 'fiscal_year',
        label: this.$t('Fiscal Year')
      }, {
        key: 'start_date',
        label: this.$t('Start Date')
      }, {
        key: 'end_date',
        label: this.$t('End Date')
      }, {
        key: 'status',
        label: this.$t('Status')
      }];
    }
  }),
  created: function created() {
    this.getAccountingPeriods();
    this.getFiscalYears();
    this.getCurrentPeriod();
  },
  mounted: function mounted() {
    document.addEventListener('click', this.onClickOutside);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.onClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    // Action dropdown methods
    toggleAction: function toggleAction(index) {
      var _this2 = this;
      this.openActionIndex = this.openActionIndex === index ? null : index;
      if (this.openActionIndex === index) {
        this.$nextTick(function () {
          _this2.positionDropdown(index);
        });
      }
    },
    positionDropdown: function positionDropdown(index) {
      var button = document.querySelector("[data-action-index=\"".concat(index, "\"]"));
      if (button) {
        var _button$closest;
        var rect = button.getBoundingClientRect();
        var menu = (_button$closest = button.closest('.action-dropdown')) === null || _button$closest === void 0 ? void 0 : _button$closest.querySelector('.action-menu');
        if (menu) {
          // Check if page direction is RTL
          var isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
          if (isRTL) {
            menu.style.left = '45px';
            menu.style.right = 'auto';
          } else {
            menu.style.left = "".concat(rect.right - 200, "px"); // 200px is min-width
            menu.style.right = 'auto';
          }
          menu.style.top = "".concat(rect.bottom + 8, "px");
        }
      }
    },
    onClickOutside: function onClickOutside() {
      this.openActionIndex = null;
    },
    handleScroll: function handleScroll() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },
    handleResize: function handleResize() {
      if (this.openActionIndex !== null) {
        this.positionDropdown(this.openActionIndex);
      }
    },
    // Get all accounting periods
    getAccountingPeriods: function getAccountingPeriods() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios_default().get('/api/accounting-periods');
            case 3:
              response = _context.sent;
              _this3.accountingPeriods = response.data.data;
              console.log('Accounting periods loaded:', _this3.accountingPeriods);

              // Update current period ID based on is_active flag
              _this3.getCurrentPeriod();

              // Auto-set current if only one accounting period exists
              _this3.autoSetCurrentIfSingle();
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching accounting periods:', _context.t0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10]]);
      }))();
    },
    // Get accounting periods by fiscal year
    getAccountingPeriodsByFiscalYear: function getAccountingPeriodsByFiscalYear(fiscalYearId) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios_default().get("/api/accounting-periods/by-fiscal-year/".concat(fiscalYearId));
            case 3:
              response = _context2.sent;
              _this4.accountingPeriods = response.data.data;
              console.log('Accounting periods loaded for fiscal year:', _this4.accountingPeriods);

              // Update current period ID based on is_active flag
              _this4.getCurrentPeriod();
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error('Error fetching accounting periods by fiscal year:', _context2.t0);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 9]]);
      }))();
    },
    // Reset current accounting period when fiscal year changes
    resetCurrentAccountingPeriod: function resetCurrentAccountingPeriod() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (_this5.selectedFiscalYear) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _context3.prev = 2;
              _context3.next = 5;
              return axios_default().post('/api/accounting-periods/reset-current', {
                fiscal_year_id: _this5.selectedFiscalYear
              });
            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return _this5.getAccountingPeriodsByFiscalYear(_this5.selectedFiscalYear);
            case 8:
              console.log('Current accounting period reset:', response.data.message);
              _context3.next = 16;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](2);
              console.error('Error resetting current accounting period:', _context3.t0);
              // If no periods exist for the fiscal year, just refresh the list
              _context3.next = 16;
              return _this5.getAccountingPeriodsByFiscalYear(_this5.selectedFiscalYear);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 11]]);
      }))();
    },
    // Auto-set current if only one item exists
    autoSetCurrentIfSingle: function autoSetCurrentIfSingle() {
      if (this.accountingPeriods.length === 1 && !this.currentPeriodId) {
        var period = this.accountingPeriods[0];
        if (!period.is_closed) {
          this.setCurrentPeriod(period);
        }
      }
    },
    // Get all fiscal years
    getFiscalYears: function getFiscalYears() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios_default().get('/api/all-fiscal-years');
            case 3:
              response = _context4.sent;
              _this6.fiscalYears = response.data.data;
              console.log('Fiscal years loaded:', _this6.fiscalYears);
              _context4.next = 12;
              break;
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error('Error fetching fiscal years:', _context4.t0);
              toast.fire({
                type: 'error',
                title: _this6.$t('Error loading fiscal years')
              });
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 8]]);
      }))();
    },
    // Get current accounting period (find the one with is_active = true)
    getCurrentPeriod: function getCurrentPeriod() {
      var activePeriod = this.accountingPeriods.find(function (period) {
        return period.is_active;
      });
      this.currentPeriodId = activePeriod ? activePeriod.id : null;
    },
    // Filter by fiscal year
    filterByFiscalYear: function filterByFiscalYear() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this7.selectedFiscalYear) {
                _context5.next = 7;
                break;
              }
              _context5.next = 3;
              return _this7.getAccountingPeriodsByFiscalYear(_this7.selectedFiscalYear);
            case 3:
              _context5.next = 5;
              return _this7.resetCurrentAccountingPeriod();
            case 5:
              _context5.next = 9;
              break;
            case 7:
              _context5.next = 9;
              return _this7.getAccountingPeriods();
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    // Open modal for adding/editing
    openModal: function openModal() {
      this.isEditMode = false;
      this.form.reset();
      this.form.clear();
      $('#periodModal').modal('show');
    },
    // Edit period
    editPeriod: function editPeriod(period) {
      this.isEditMode = true;

      // Manually set all form fields to ensure proper mapping
      this.form.id = period.id;
      this.form.name = period.name;
      this.form.fiscal_year_id = period.fiscal_year_id;
      this.form.start_date = period.start_date;
      this.form.end_date = period.end_date;
      this.form.is_active = period.is_active;
      this.form.is_closed = period.is_closed;
      this.form.note = period.note;
      $('#periodModal').modal('show');
    },
    // Save period
    savePeriod: function savePeriod() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              if (!_this8.isEditMode) {
                _context6.next = 8;
                break;
              }
              if (_this8.form.id) {
                _context6.next = 4;
                break;
              }
              throw new Error('Period ID is missing for update operation');
            case 4:
              _context6.next = 6;
              return _this8.form.put("/api/accounting-periods/".concat(_this8.form.id));
            case 6:
              _context6.next = 10;
              break;
            case 8:
              _context6.next = 10;
              return _this8.form.post('/api/accounting-periods');
            case 10:
              toast.fire({
                type: 'success',
                title: _this8.$t('Accounting period saved successfully')
              });
              $('#periodModal').modal('hide');
              _this8.getAccountingPeriods();
              _context6.next = 19;
              break;
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](0);
              console.error('Error saving accounting period:', _context6.t0);
              if (_context6.t0.response && _context6.t0.response.data && _context6.t0.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _context6.t0.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this8.$t('Error saving accounting period')
                });
              }
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 15]]);
      }))();
    },
    // Set current period
    setCurrentPeriod: function setCurrentPeriod(period) {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return axios_default().post('/api/accounting-periods/set-current', {
                accounting_period_id: period.id
              });
            case 3:
              toast.fire({
                type: 'success',
                title: _this9.$t('Current accounting period set successfully')
              });

              // Refresh the accounting periods list to get updated is_active flags
              _context7.next = 6;
              return _this9.getAccountingPeriods();
            case 6:
              // Update the current period ID based on the refreshed data
              _this9.getCurrentPeriod();
              _context7.next = 13;
              break;
            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              console.error('Error setting current period:', _context7.t0);
              if (_context7.t0.response && _context7.t0.response.data && _context7.t0.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _context7.t0.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this9.$t('Error setting current accounting period')
                });
              }
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 9]]);
      }))();
    },
    // Close period
    closePeriod: function closePeriod(period) {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!confirm(_this0.$t('Are you sure you want to close this accounting period?'))) {
                _context8.next = 14;
                break;
              }
              _context8.prev = 1;
              _context8.next = 4;
              return axios_default().post("/api/accounting-periods/".concat(period.id, "/close"));
            case 4:
              response = _context8.sent;
              toast.fire({
                type: 'success',
                title: response.data.message || _this0.$t('Accounting period closed successfully')
              });

              // Refresh the accounting periods list to get updated is_closed flags
              _context8.next = 8;
              return _this0.getAccountingPeriods();
            case 8:
              _context8.next = 14;
              break;
            case 10:
              _context8.prev = 10;
              _context8.t0 = _context8["catch"](1);
              console.error('Error closing period:', _context8.t0);
              if (_context8.t0.response && _context8.t0.response.data && _context8.t0.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _context8.t0.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this0.$t('Error closing accounting period')
                });
              }
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[1, 10]]);
      }))();
    },
    // Reopen period
    reopenPeriod: function reopenPeriod(period) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var response;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!confirm(_this1.$t('Are you sure you want to reopen this accounting period?'))) {
                _context9.next = 14;
                break;
              }
              _context9.prev = 1;
              _context9.next = 4;
              return axios_default().post("/api/accounting-periods/".concat(period.id, "/reopen"));
            case 4:
              response = _context9.sent;
              toast.fire({
                type: 'success',
                title: response.data.message || _this1.$t('Accounting period reopened successfully')
              });

              // Refresh the accounting periods list to get updated is_closed flags
              _context9.next = 8;
              return _this1.getAccountingPeriods();
            case 8:
              _context9.next = 14;
              break;
            case 10:
              _context9.prev = 10;
              _context9.t0 = _context9["catch"](1);
              console.error('Error reopening period:', _context9.t0);
              if (_context9.t0.response && _context9.t0.response.data && _context9.t0.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _context9.t0.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this1.$t('Error reopening accounting period')
                });
              }
            case 14:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[1, 10]]);
      }))();
    },
    // Delete period
    deletePeriod: function deletePeriod(period) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0() {
        return _regeneratorRuntime().wrap(function _callee0$(_context0) {
          while (1) switch (_context0.prev = _context0.next) {
            case 0:
              if (!confirm(_this10.$t('Are you sure you want to delete this accounting period?'))) {
                _context0.next = 12;
                break;
              }
              _context0.prev = 1;
              _context0.next = 4;
              return axios_default()["delete"]("/api/accounting-periods/".concat(period.id));
            case 4:
              toast.fire({
                type: 'success',
                title: _this10.$t('Accounting period deleted successfully')
              });
              _this10.getAccountingPeriods();
              _context0.next = 12;
              break;
            case 8:
              _context0.prev = 8;
              _context0.t0 = _context0["catch"](1);
              console.error('Error deleting period:', _context0.t0);
              if (_context0.t0.response && _context0.t0.response.data && _context0.t0.response.data.message) {
                toast.fire({
                  type: 'error',
                  title: _context0.t0.response.data.message
                });
              } else {
                toast.fire({
                  type: 'error',
                  title: _this10.$t('Cannot delete closed accounting period')
                });
              }
            case 12:
            case "end":
              return _context0.stop();
          }
        }, _callee0, null, [[1, 8]]);
      }))();
    },
    // Get status class
    getStatusClass: function getStatusClass(period) {
      if (period.is_closed) {
        return 'badge bg-danger';
      } else if (period.is_active) {
        return 'badge bg-success';
      } else {
        return 'badge bg-secondary';
      }
    },
    // Get status text
    getStatusText: function getStatusText(period) {
      if (period.is_closed) {
        return this.$t('Closed');
      } else if (period.is_active) {
        return this.$t('Active');
      } else {
        return this.$t('Inactive');
      }
    },
    // Format date
    formatDate: function formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
});
;// ./resources/js/pages/setup/accounting-periods.vue?vue&type=script&lang=js
 /* harmony default export */ const setup_accounting_periodsvue_type_script_lang_js = (accounting_periodsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-periods.vue?vue&type=style&index=0&id=5665de0c&prod&scoped=true&lang=css
var accounting_periodsvue_type_style_index_0_id_5665de0c_prod_scoped_true_lang_css = __webpack_require__(89340);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/setup/accounting-periods.vue?vue&type=style&index=0&id=5665de0c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(accounting_periodsvue_type_style_index_0_id_5665de0c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const setup_accounting_periodsvue_type_style_index_0_id_5665de0c_prod_scoped_true_lang_css = (accounting_periodsvue_type_style_index_0_id_5665de0c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/setup/accounting-periods.vue?vue&type=style&index=0&id=5665de0c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/setup/accounting-periods.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  setup_accounting_periodsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5665de0c",
  null
  
)

/* harmony default export */ const accounting_periods = (component.exports);

/***/ }),

/***/ 89340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-custom[data-v-5665de0c]{border:none!important;overflow:visible!important}.action-dropdown[data-v-5665de0c]{display:inline-block;position:relative}.action-icon-btn[data-v-5665de0c]{align-items:center;background-color:#fff;border:none;cursor:pointer;display:inline-flex;height:24px;justify-content:center;padding:0;width:24px}.action-menu[data-v-5665de0c]{animation:slideInDown-5665de0c .3s ease-out;background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 20px 0 #00000014;max-height:80vh;min-width:200px;overflow:hidden;position:fixed;z-index:9999}[dir=rtl] .action-menu[data-v-5665de0c]{left:45px!important;right:auto!important}@keyframes slideInDown-5665de0c{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.action-menu-header[data-v-5665de0c]{align-items:center;background:#f8fafc;border-bottom:1px solid #f1f5fb;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:12px 16px}.action-menu-title[data-v-5665de0c]{color:#023033;font-size:14px;font-weight:600}.action-menu-close[data-v-5665de0c]{background:none;border:none;border-radius:4px;color:#6b7280;cursor:pointer;padding:4px;transition:all .2s ease}.action-menu-close[data-v-5665de0c]:hover{background:#e5e7eb;color:#374151}.action-menu ul[data-v-5665de0c]{list-style:none;margin:0;padding:8px 0}.action-menu li[data-v-5665de0c]{border-bottom:1px solid #f1f5fb}.action-menu li[data-v-5665de0c]:last-child{border-bottom:none}.action-menu li a[data-v-5665de0c]{align-items:center;color:#023033;display:flex;font-size:14px;font-weight:500;gap:10px;padding:12px 16px;position:relative;text-decoration:none;transition:all .2s ease}.action-menu li a i[data-v-5665de0c]{align-items:center;display:flex;font-size:12px;height:16px;justify-content:center;width:16px}.action-menu li a[data-v-5665de0c]:hover{background:#f8fafc;color:#2ab930;transform:translateX(2px)}.action-menu li a[data-v-5665de0c]:before{background:#2ab930;bottom:0;content:\"\";left:0;position:absolute;top:0;transform:scaleY(0);transition:transform .2s ease;width:3px}.action-menu li a[data-v-5665de0c]:hover:before{transform:scaleY(1)}.btn-group.c-w-100[data-v-5665de0c]{gap:10px}.card[data-v-5665de0c]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px;overflow:visible}.general-table .badge.bg-success[data-v-5665de0c]{background:#f6fef4!important;color:#2ab930!important}.general-table .badge.bg-danger[data-v-5665de0c],.general-table .badge.bg-success[data-v-5665de0c]{font-size:12px!important;font-weight:500!important;padding:10px 16px}.general-table .badge.bg-danger[data-v-5665de0c]{background:#fef4f4!important;color:#dc3545!important}.general-table .badge.bg-secondary[data-v-5665de0c]{background:#f8f9fa!important;color:#6c757d!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.btn-primary[data-v-5665de0c]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);