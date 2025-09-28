"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6403],{

/***/ 46403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/create.vue?vue&type=template&id=2a465ffc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('div', {
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
        name: 'invoicePayments.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n              ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "type": "submit",
      "form": 'clientInvoicePaymentCreateForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('form', {
    attrs: {
      "id": "clientInvoicePaymentCreateForm",
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.savePayment.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "card-body"
  }, [_vm.items ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t("Client")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('client')
    },
    attrs: {
      "options": _vm.items,
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    on: {
      "input": _vm.getInvoices
    },
    model: {
      value: _vm.form.client,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "client", $$v);
      },
      expression: "form.client"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.client ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "clientInvoiceTotal"
    }
  }, [_vm._v(_vm._s(_vm.$t("Invoice Total")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.client.clientInvoiceTotal,
      expression: "form.client.clientInvoiceTotal"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "clientInvoiceTotal",
      "type": "text",
      "name": "clientInvoiceTotal",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.client.clientInvoiceTotal
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.client, "clientInvoiceTotal", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "clientTotalPaid"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total Paid")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.client.clientTotalPaid,
      expression: "form.client.clientTotalPaid"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "clientTotalPaid",
      "type": "text",
      "name": "clientTotalPaid",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.client.clientTotalPaid
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.client, "clientTotalPaid", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "clientDue"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total Due")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.client.clientDue,
      expression: "form.client.clientDue"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "clientDue",
      "type": "text",
      "name": "clientDue",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.client.clientDue
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form.client, "clientDue", $event.target.value);
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.form.client && _vm.invoices ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "invoice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Select Invoice")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('invoice')
    },
    attrs: {
      "options": _vm.invoices,
      "label": "label",
      "name": "invoice",
      "placeholder": _vm.$t('Search invoice number')
    },
    on: {
      "input": function input($event) {
        return _vm.storeInvoice(_vm.form.invoice);
      }
    },
    model: {
      value: _vm.form.invoice,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "invoice", $$v);
      },
      expression: "form.invoice"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "invoice"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.form.errors.errors && _vm.form.errors.errors.selectedInvoices ? _c('div', {
    staticClass: "col-md-11 m-auto"
  }, _vm._l(_vm.form.errors.errors.selectedInvoices, function (msg, i) {
    return _c('div', {
      key: i,
      staticClass: "callout callout-danger"
    }, [_c('p', [_c('i', {
      staticClass: "icon fas fa-ban"
    }), _vm._v(" " + _vm._s(msg))])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.form.selectedInvoices ? _c('div', {
    staticClass: "col-md-11 m-auto"
  }, _vm._l(_vm.form.selectedInvoices, function (item, i) {
    return _c('div', {
      key: i,
      staticClass: "card bg-light border-dark mb-3"
    }, [_c('div', {
      staticClass: "card-header"
    }, [_vm._v("\n                  " + _vm._s(item.invoiceNo) + " " + _vm._s(_vm.$t("Invoice Details")) + "\n                  "), _c('button', {
      staticClass: "btn btn-danger float-right",
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
    })])]), _vm._v(" "), _c('div', {
      staticClass: "card-body"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "form-group col-md-3"
    }, [_c('label', {
      attrs: {
        "for": "invoiceNumber"
      }
    }, [_vm._v(_vm._s(_vm.$t("Invoice No")))]), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "id": "invoiceNumber-".concat(++i),
        "readonly": ""
      },
      domProps: {
        "value": item.invoiceNo
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "form-group col-md-3"
    }, [_c('label', {
      attrs: {
        "for": "invoiceTotal"
      }
    }, [_vm._v(_vm._s(_vm.$t("Invoice Total")))]), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "id": "invoiceTotal-".concat(i),
        "readonly": ""
      },
      domProps: {
        "value": item.invoiceTotal
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "form-group col-md-3"
    }, [_c('label', {
      attrs: {
        "for": "invoiceDue"
      }
    }, [_vm._v(_vm._s(_vm.$t("Invoice Due")))]), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      attrs: {
        "type": "text",
        "id": "invoiceDue-".concat(i),
        "readonly": ""
      },
      domProps: {
        "value": item.newDue
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "form-group col-md-3"
    }, [_c('label', {
      attrs: {
        "for": "paidAmount"
      }
    }, [_vm._v(_vm._s(_vm.$t("Paid Amount")))]), _vm._v(" "), _c('input', {
      staticClass: "form-control",
      attrs: {
        "type": "number",
        "step": "any",
        "id": "paidAmount-".concat(i),
        "placeholder": _vm.$t('Enter an amount'),
        "required": "",
        "min": "1",
        "max": item.originalDue,
        "value": "1"
      },
      on: {
        "change": function change($event) {
          return _vm.updateArray($event.target.value, i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.updateArray($event.target.value, 'paidAmount', i - 1);
        }
      }
    })])])])]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.accounts ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "totalPayment"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total Payment")) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalPayment,
      expression: "form.totalPayment"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "totalPayment",
      "type": "number",
      "step": "any",
      "name": "totalPayment",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.totalPayment
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "totalPayment", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account")) + "\n                  "), _c('span', {
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
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "account"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t("Receipt No")))]), _vm._v(" "), _c('input', {
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
      "type": "text",
      "id": "receiptNo",
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "paymentDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.paymentDate,
      expression: "form.paymentDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('paymentDate')
    },
    attrs: {
      "id": "paymentDate",
      "type": "date",
      "name": "paymentDate"
    },
    domProps: {
      "value": _vm.form.paymentDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")) + "\n                  "), _vm.hasInactiveInvoice ? _c('small', {
    staticClass: "text-muted ml-2"
  }, [_vm._v("(" + _vm._s(_vm.$t("Cannot be changed when invoice is inactive")) + ")")]) : _vm._e()]), _vm._v(" "), _c('select', {
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
      "id": "status",
      "disabled": _vm.hasInactiveInvoice
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
  }, [!_vm.hasInactiveInvoice ? _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _vm._e(), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "note"
    }
  }, [_vm._v(_vm._s(_vm.$t("Note")))]), _vm._v(" "), _c('textarea', {
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
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode
    },
    model: {
      value: _vm.form.isSendEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendEmail", $$v);
      },
      expression: "form.isSendEmail"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Send Email Notification")) + "\n              ")], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode
    },
    model: {
      value: _vm.form.isSendSMS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendSMS", $$v);
      },
      expression: "form.isSendSMS"
    }
  }), _vm._v("\n                " + _vm._s(_vm.$t("Send SMS Notification")) + "\n              ")], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('v-button', {
    attrs: {
      "loading": _vm.form.busy,
      "type": "success"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n                ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-info",
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
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n                ")])], 1)])])])])])])]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__(12616);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/create.vue?vue&type=script&lang=js
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




/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Client Invoice Payment")
    };
  },
  components: {
    ToggleButton: dist.ToggleButton
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: "Create Payment",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Payments",
        url: ""
      }, {
        name: "Invoice Payments",
        url: "invoicePayments.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        client: "",
        selectedInvoices: [],
        totalPayment: 0,
        paymentDate: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        account: "",
        chequeNo: "",
        receiptNo: "",
        isSendEmail: false,
        isSendSMS: false
      }),
      accounts: "",
      invoices: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    // Check if any selected invoice has status 0 (inactive)
    hasInactiveInvoice: function hasInactiveInvoice() {
      return this.form.selectedInvoices.some(function (invoice) {
        return invoice.status === 0;
      });
    }
  }),
  created: function created() {
    this.getClients();
    this.getAccounts();
  },
  mounted: function mounted() {
    this.loadTemporaryData();
  },
  methods: {
    // get all clients
    getClients: function getClients() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _this.$store.dispatch("operations/allData", {
                path: "/api/all-clients"
              });
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    // get invoices
    getInvoices: function getInvoices() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _this2.form.selectedInvoices = [];
              if (!_this2.form.client) {
                _context2.n = 2;
                break;
              }
              _this2.form.clientBalance = _this2.form.client.clientTotalAdvance;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/client/" + _this2.form.client.slug + "/invoices");
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this2.invoices = data.invoices;
              _this2.form.client = data.client;
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get2, data, defaultAccountSlug;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return axios_default().get(window.location.origin + "/api/all-accounts");
            case 1:
              _yield$axios$get2 = _context3.v;
              data = _yield$axios$get2.data;
              _this3.accounts = data.data;

              // assign default account
              if (_this3.accounts && _this3.accounts.length > 0) {
                defaultAccountSlug = _this3.appInfo.defaultAccountSlug;
                _this3.form.account = _this3.accounts.find(function (account) {
                  return account.slug == defaultAccountSlug;
                });
              }
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // store item in array
    storeInvoice: function storeInvoice(invoice) {
      var index = this.form.selectedInvoices.findIndex(function (x) {
        return x.id == invoice.id;
      });
      if (index === -1) {
        // store product
        this.form.selectedInvoices.push({
          id: invoice.id,
          slug: invoice.slug,
          invoiceNo: invoice.label,
          invoiceTotal: invoice.invoiceTotal,
          newDue: invoice.due,
          originalDue: invoice.due,
          maxAmount: invoice.due,
          paidAmount: 1,
          note: "",
          status: invoice.status // Include invoice status
        });

        // Set payment status based on invoice status
        if (invoice.status === 0) {
          this.form.status = 0; // Set payment to inactive if invoice is inactive
        }
      }
      return true;
    },
    // update array
    updateArray: function updateArray(value, index) {
      var invoice = this.form.selectedInvoices[index];
      if (invoice && value <= invoice.maxAmount) {
        this.form.selectedInvoices[index].paidAmount = Number(value);
        invoice.newDue = Number((invoice.originalDue - invoice.paidAmount).toFixed(2));
      }
      this.form.selectedInvoices[index] = invoice;
      this.calculateTotal();
      return;
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedInvoices.indexOf(item);
      if (index > -1) {
        this.form.selectedInvoices.splice(index, 1);
      }
      this.calculateTotal();
      this.form.invoice = "";
      return;
    },
    // calculate total
    calculateTotal: function calculateTotal() {
      this.form.totalPayment = this.form.selectedInvoices.reduce(function (prev, cur) {
        return prev + cur.paidAmount;
      }, 0);
      return;
    },
    // save payment
    savePayment: function savePayment() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this4.form.post(window.location.origin + "/api/payments/invoice").then(function () {
                // Clear temporary data after successful save
                _this4.clearTemporaryData();
                toast.fire({
                  type: "success",
                  title: _this4.$t("Invoice payment added successfully")
                });
                _this4.$router.push({
                  name: "invoicePayments.index"
                });
              })["catch"](function (error) {
                var _error$response, _error$response2, _error$response3, _error$response4;
                // Show all validation messages when present
                if ((error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 422 && error !== null && error !== void 0 && (_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.errors) {
                  var errorsMap = error.response.data.errors;
                  _this4.form.errors.set(errorsMap);
                  var messages = Object.values(errorsMap).flat();
                  var combined = messages.join('\n');
                  toast.fire({
                    type: 'error',
                    title: _this4.$t('Validation Error'),
                    text: combined,
                    timer: 8000,
                    timerProgressBar: true
                  });
                  return;
                }

                // Prefer backend-provided general message
                var backendMessage = (error === null || error === void 0 || (_error$response3 = error.response) === null || _error$response3 === void 0 || (_error$response3 = _error$response3.data) === null || _error$response3 === void 0 ? void 0 : _error$response3.message) || (error === null || error === void 0 || (_error$response4 = error.response) === null || _error$response4 === void 0 || (_error$response4 = _error$response4.data) === null || _error$response4 === void 0 ? void 0 : _error$response4.error) || (error === null || error === void 0 ? void 0 : error.message);
                toast.fire({
                  type: 'error',
                  title: _this4.$t('Error'),
                  text: backendMessage || _this4.$t('Please check your input and try again.')
                });
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        client: this.form.client,
        invoices: this.form.invoices,
        account: this.form.account,
        amount: this.form.amount,
        paymentMethod: this.form.paymentMethod,
        reference: this.form.reference,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        sendSms: this.form.sendSms,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('invoicePaymentTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('invoicePaymentTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.client = data.client || null;
          this.form.invoices = data.invoices || [];
          this.form.account = data.account || null;
          this.form.amount = data.amount || '';
          this.form.paymentMethod = data.paymentMethod || '';
          this.form.reference = data.reference || '';
          this.form.date = data.date || '';
          this.form.note = data.note || '';
          this.form.status = data.status !== undefined ? data.status : 1;
          this.form.sendSms = data.sendSms || false;
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('invoicePaymentTempData');
    }
  }
});
;// ./resources/js/pages/payments/clients/invoice/create.vue?vue&type=script&lang=js
 /* harmony default export */ const invoice_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/create.vue?vue&type=style&index=0&id=2a465ffc&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_2a465ffc_prod_scoped_true_lang_css = __webpack_require__(95788);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/payments/clients/invoice/create.vue?vue&type=style&index=0&id=2a465ffc&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_2a465ffc_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const invoice_createvue_type_style_index_0_id_2a465ffc_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_2a465ffc_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/payments/clients/invoice/create.vue?vue&type=style&index=0&id=2a465ffc&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/payments/clients/invoice/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  invoice_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2a465ffc",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }),

/***/ 95788:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".btn-group.c-w-100[data-v-2a465ffc]{gap:10px}.header-buttons[data-v-2a465ffc]{margin-bottom:15px}.footer-buttons[data-v-2a465ffc]{display:flex;gap:10px}.footer-buttons .btn[data-v-2a465ffc]{margin-right:10px}.footer-buttons .btn[data-v-2a465ffc]:last-child{margin-right:0}.card[data-v-2a465ffc]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-header[data-v-2a465ffc]{background-color:#fff;border-bottom:1px solid #ced4da;border-radius:20px 20px 0 0;padding:1.25rem 1.25rem 0}.card-body[data-v-2a465ffc]{padding:1.25rem}.card-footer[data-v-2a465ffc]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.form-control[data-v-2a465ffc]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-2a465ffc]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.form-group label[data-v-2a465ffc]{color:#374151;display:block;font-weight:500;margin-bottom:8px}.required[data-v-2a465ffc]{color:#dc3545;font-weight:700}.btn-primary[data-v-2a465ffc]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-primary[data-v-2a465ffc]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-2a465ffc]{background:#33a0d9!important;border:none!important;color:#fff!important;font-weight:500;margin-right:10px;padding:10px 20px!important}.btn-secondary[data-v-2a465ffc]:hover{background:#2a8bc4!important;box-shadow:0 4px 8px rgba(51,160,217,.3);transform:translateY(-1px)}.btn-danger[data-v-2a465ffc]{background:#dc3545!important;border:none!important;border-radius:8px!important;color:#fff!important;font-weight:500;padding:8px 12px!important}.btn-danger[data-v-2a465ffc]:hover{background:#c82333!important;box-shadow:0 4px 8px rgba(220,53,69,.3);transform:translateY(-1px)}.is-invalid[data-v-2a465ffc]{border-color:#dc3545!important}textarea.form-control[data-v-2a465ffc]{min-height:100px;resize:vertical}.v-select[data-v-2a465ffc]{background:#fff!important}.v-select .vs__dropdown-toggle[data-v-2a465ffc]{background:#fff!important;border:1px solid #e5e7eb!important;padding:10px 16px!important}.v-select .vs__dropdown-toggle[data-v-2a465ffc]:focus{border-color:#33a0d9!important;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)!important}.v-select.is-invalid .vs__dropdown-toggle[data-v-2a465ffc]{border-color:#dc3545!important}.bg-light[data-v-2a465ffc]{background-color:#f8f9fa!important;border:1px solid #e5e7eb;border-radius:10px;margin-bottom:15px}.bg-light .card-header[data-v-2a465ffc]{background-color:#e9ecef!important;border-bottom:1px solid #dee2e6;border-radius:10px 10px 0 0;color:#495057;font-weight:600;padding:12px 16px}.bg-light .card-body[data-v-2a465ffc]{padding:16px}.callout[data-v-2a465ffc]{border-radius:10px;margin-bottom:16px;padding:12px 16px}.callout-danger[data-v-2a465ffc]{background-color:#f8d7da;border:1px solid #f5c6cb;color:#721c24}.callout i[data-v-2a465ffc]{margin-right:8px}.d-flex[data-v-2a465ffc]{align-items:center;display:flex!important}.pr-5[data-v-2a465ffc]{padding-right:3rem!important}.row[data-v-2a465ffc]{margin-bottom:1rem}.text-muted[data-v-2a465ffc]{color:#6c757d!important}.text-muted[data-v-2a465ffc],small[data-v-2a465ffc]{font-size:12px}@media (max-width:768px){.card-footer[data-v-2a465ffc]{flex-direction:column;gap:10px}.card-footer .btn[data-v-2a465ffc]{margin-right:0!important;width:100%}.card-footer div[data-v-2a465ffc]{display:flex;flex-direction:column;gap:10px;width:100%}.pr-5[data-v-2a465ffc]{padding-right:1rem!important}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);