"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[4928],{

/***/ 4928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tree)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/tree.vue?vue&type=template&id=a65c7966&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mb-50"
  }, [_c('breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbs,
      "current": _vm.breadcrumbsCurrent
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "d-none d-lg-block"
  }, [_c('div', {
    staticClass: "card custom-card w-100 mb-4"
  }, [_c('div', {
    staticClass: "card-header setings-header"
  }, [_c('div', {
    staticClass: "col-xl-4 col-4"
  }, [_c('h3', {
    staticClass: "card-title"
  }, [_vm._v("\n          " + _vm._s(_vm.$t("Chart of Accounts - Tree View")) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-8 col-8 float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100"
  }, [_c('a', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Refresh'),
      expression: "$t('Refresh')"
    }],
    staticClass: "btn refresh-btn",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        return _vm.refreshTree();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-sync"
  })]), _vm._v(" "), _vm.$can('chart-of-account-list') ? _c('router-link', {
    staticClass: "btn tree-btn",
    attrs: {
      "to": {
        name: 'chart-of-accounts.index'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-list"
  })]) : _vm._e(), _vm._v(" "), _vm.$can('chart-of-account-create') ? _c('router-link', {
    staticClass: "btn btn-primary",
    attrs: {
      "to": {
        name: 'chart-of-accounts.create'
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-plus-circle"
  }), _vm._v(" " + _vm._s(_vm.$t("Create")) + "\n          ")]) : _vm._e()], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "chart-of-accounts-container"
  }, [_c('div', {
    staticClass: "chart-of-accounts-row"
  }, [_c('div', {
    staticClass: "chart-of-accounts-col chart-of-accounts-col-3"
  }, [_c('div', {
    staticClass: "chart-of-accounts-search-wrapper"
  }, [_c('div', {
    staticClass: "chart-of-accounts-col-3-filters-container"
  }, [_c('div', {
    staticClass: "chart-of-accounts-col-3-filters-row"
  }, [_c('div', {
    staticClass: "chart-of-accounts-col-3-filters-col"
  }, [_c('search', {
    on: {
      "reset-pagination": function resetPagination($event) {
        return _vm.resetPagination();
      },
      "reload": _vm.reload
    },
    model: {
      value: _vm.query,
      callback: function callback($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "chart-of-accounts-col-3-body-container"
  }, [_c('ul', {
    staticClass: "tree-view-list",
    attrs: {
      "role": "tree",
      "aria-multiselectable": "false"
    }
  }, _vm._l(_vm.hierarchicalAccounts, function (account) {
    return _c('li', {
      key: account.id,
      staticClass: "tree-item",
      attrs: {
        "role": "treeitem"
      }
    }, [_c('div', {
      staticClass: "tree-item-content",
      style: {
        paddingLeft: account.level * 20 + 20 + 'px'
      },
      on: {
        "click": function click($event) {
          return _vm.toggleNode(account.id);
        }
      }
    }, [_c('div', {
      staticClass: "tree-item-icon-container"
    }, [account.hasChildren ? _c('i', {
      "class": account.expanded ? 'fas fa-folder-open' : 'fas fa-folder'
    }) : _c('i', {
      staticClass: "fas fa-file-alt"
    })]), _vm._v(" "), _c('div', {
      staticClass: "tree-item-label"
    }, [_c('div', {
      staticClass: "account-name"
    }, [_vm._v(_vm._s(_vm.getTranslatedName(account)))]), _vm._v(" "), _c('div', {
      staticClass: "account-code"
    }, [_vm._v(_vm._s(account.code))])]), _vm._v(" "), account.hasChildren ? _c('div', {
      staticClass: "tree-item-toggle"
    }, [_c('i', {
      "class": account.expanded ? 'fas fa-chevron-down' : _vm.isRTL ? 'fas fa-chevron-left' : 'fas fa-chevron-right'
    })]) : _vm._e()])]);
  }), 0)])]), _vm._v(" "), _c('div', {
    staticClass: "chart-of-accounts-col chart-of-accounts-col-9"
  }, [_c('div', {
    staticClass: "chart-of-accounts-col-9-body-container",
    attrs: {
      "id": "chart-of-accounts-child-board"
    }
  }, [!_vm.selectedAccount ? _c('div', {
    staticClass: "empty-state"
  }, [_c('div', {
    staticClass: "empty-state-content"
  }, [_c('i', {
    staticClass: "fas fa-box-open",
    staticStyle: {
      "font-size": "48px",
      "margin-bottom": "20px"
    }
  }), _vm._v(" "), _c('h4', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('Select an Account')))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t('Click on any account in the tree to view its details and child accounts.')))])])]) : _c('div', [_c('div', {
    staticClass: "selected-account-header mb-4"
  }, [_c('div', {
    staticClass: "d-flex align-items-center justify-content-between"
  }, [_c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-folder-open text-primary mr-3",
    staticStyle: {
      "font-size": "24px"
    }
  }), _vm._v(" "), _c('div', [_c('h4', {
    staticClass: "mb-1"
  }, [_vm._v(_vm._s(_vm.getTranslatedName(_vm.selectedAccount)))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted mb-0"
  }, [_vm._v(_vm._s(_vm.$t("Account Code")) + ": " + _vm._s(_vm.selectedAccount.code))]), _vm._v(" "), _vm.selectedAccount.types ? _c('p', {
    staticClass: "text-muted mb-0"
  }, [_vm._v("\n                      " + _vm._s(_vm.$t("Type")) + ": " + _vm._s(_vm.getTranslatedName(_vm.selectedAccount.types)) + "\n                    ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "account-balance-info"
  }, [_c('div', {
    staticClass: "balance-cards"
  }, [_c('div', {
    staticClass: "balance-card debit-card"
  }, [_c('div', {
    staticClass: "balance-label"
  }, [_vm._v(_vm._s(_vm.$t("Debit")))]), _vm._v(" "), _c('div', {
    staticClass: "balance-amount"
  }, [_vm._v("\n                        " + _vm._s(_vm.selectedAccount.formatted_debit_amount || '0.00') + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "balance-card credit-card"
  }, [_c('div', {
    staticClass: "balance-label"
  }, [_vm._v(_vm._s(_vm.$t("Credit")))]), _vm._v(" "), _c('div', {
    staticClass: "balance-amount"
  }, [_vm._v("\n                        " + _vm._s(_vm.selectedAccount.formatted_credit_amount || '0.00') + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "balance-card balance-card-main",
    "class": _vm.selectedAccount.balance_type === 'Debit' ? 'debit-balance' : 'credit-balance'
  }, [_c('div', {
    staticClass: "balance-label"
  }, [_vm._v(_vm._s(_vm.$t("Balance")))]), _vm._v(" "), _c('div', {
    staticClass: "balance-amount"
  }, [_vm._v("\n                        " + _vm._s(_vm.selectedAccount.formatted_balance_with_type || '0.00 ' + _vm.$t('Debit')) + "\n                      ")])])])])])]), _vm._v(" "), _vm.childAccounts.length > 0 ? _c('div', [_c('h5', {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.$t("Child Accounts")))]), _vm._v(" "), _c('table', {
    staticClass: "list-table table table-hover not-clickable chart-of-accounts-col-9-body-container-table"
  }, [_c('thead', [_c('tr', [_c('th', {
    staticClass: "border-0"
  }, [_vm._v(_vm._s(_vm.$t("Account")))]), _vm._v(" "), _c('th', {
    staticClass: "border-0 text-center"
  }, [_vm._v(_vm._s(_vm.$t("Debit")))]), _vm._v(" "), _c('th', {
    staticClass: "border-0 text-center"
  }, [_vm._v(_vm._s(_vm.$t("Credit")))]), _vm._v(" "), _c('th', {
    staticClass: "border-0 text-center"
  }, [_vm._v(_vm._s(_vm.$t("Balance")))]), _vm._v(" "), _c('th', {
    staticClass: "border-0 text-right",
    attrs: {
      "width": "50"
    }
  }, [_vm._v(_vm._s(_vm.$t("Actions")))])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.childAccounts, function (child) {
    return _c('tr', {
      key: child.id,
      staticClass: "chart-of-accounts-col-9-body-container-table-row"
    }, [_c('td', {
      staticClass: "border-0"
    }, [_vm.$can('chart-of-account-view') ? _c('router-link', {
      attrs: {
        "to": {
          name: 'chart-of-accounts.show',
          params: {
            slug: child.code
          }
        }
      }
    }, [_c('div', {
      staticClass: "chart-of-accounts-col-9-body-container-table-item"
    }, [_c('div', {
      staticClass: "item-container"
    }, [_c('i', {
      staticClass: "icon fas fa-file-alt mr-3"
    }), _vm._v(" "), _c('div', {
      staticClass: "details"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(_vm.getTranslatedName(child)))]), _vm._v(" "), _c('p', {
      staticClass: "id"
    }, [_vm._v(_vm._s(child.code))])])])])]) : _c('div', {
      staticClass: "chart-of-accounts-col-9-body-container-table-item"
    }, [_c('div', {
      staticClass: "item-container"
    }, [_c('i', {
      staticClass: "icon fas fa-file-alt mr-3"
    }), _vm._v(" "), _c('div', {
      staticClass: "details"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(_vm.getTranslatedName(child)))]), _vm._v(" "), _c('p', {
      staticClass: "id"
    }, [_vm._v(_vm._s(child.code))])])])])], 1), _vm._v(" "), _c('td', {
      staticClass: "border-0 text-center"
    }, [_c('div', {
      staticClass: "amount-display"
    }, [_c('span', {
      staticClass: "amount-value"
    }, [_vm._v(_vm._s(child.formatted_debit_amount || '0.00'))])])]), _vm._v(" "), _c('td', {
      staticClass: "border-0 text-center"
    }, [_c('div', {
      staticClass: "amount-display"
    }, [_c('span', {
      staticClass: "amount-value"
    }, [_vm._v(_vm._s(child.formatted_credit_amount || '0.00'))])])]), _vm._v(" "), _c('td', {
      staticClass: "border-0 text-center"
    }, [_c('div', {
      staticClass: "balance-display"
    }, [_c('span', {
      staticClass: "balance-value",
      "class": child.balance_type === 'Debit' ? 'debit-text' : 'credit-text'
    }, [_vm._v("\n                          " + _vm._s(child.formatted_balance_with_type || '0.00 ' + _vm.$t('Debit')) + "\n                        ")])])]), _vm._v(" "), _c('td', {
      staticClass: "border-0 text-right",
      attrs: {
        "width": "50"
      }
    }, [_c('div', {
      staticClass: "action-dropdown",
      "class": {
        open: _vm.openActionIndex === child.id
      }
    }, [_c('button', {
      staticClass: "action-icon-btn",
      attrs: {
        "type": "button",
        "data-action-index": child.id
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.toggleAction(child.id);
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
    })])]), _vm._v(" "), _vm.openActionIndex === child.id ? _c('div', {
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
          return _vm.toggleAction(child.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]), _vm._v(" "), _c('ul', [_vm.$can('chart-of-account-view') ? _c('li', [_c('router-link', {
      attrs: {
        "to": {
          name: 'chart-of-accounts.show',
          params: {
            slug: child.code
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-eye"
    }), _vm._v("\n                                " + _vm._s(_vm.$t('View')) + "\n                              ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('chart-of-account-edit') ? _c('li', [_c('router-link', {
      attrs: {
        "to": {
          name: 'chart-of-accounts.edit',
          params: {
            slug: child.code
          }
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    }), _vm._v("\n                                " + _vm._s(_vm.$t('Edit')) + "\n                              ")])], 1) : _vm._e(), _vm._v(" "), _vm.$can('chart-of-account-delete') ? _c('li', [_c('a', {
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.deleteData(child.code);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash"
    }), _vm._v("\n                                " + _vm._s(_vm.$t('Delete')) + "\n                              ")])]) : _vm._e()])]) : _vm._e()])])]);
  }), 0)])]) : _c('div', {
    staticClass: "no-children-message"
  }, [_c('div', {
    staticClass: "text-center py-4"
  }, [_c('i', {
    staticClass: "fas fa-info-circle",
    staticStyle: {
      "font-size": "32px",
      "margin-bottom": "16px"
    }
  }), _vm._v(" "), _c('h5', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("No Child Accounts")))]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v(_vm._s(_vm.$t("This account doesn't have any child accounts.")))])])])])])])])])], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/tree.vue?vue&type=script&lang=js
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


/* harmony default export */ const treevue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Chart of Accounts - Tree View")
    };
  },
  data: function data() {
    return {
      breadcrumbsCurrent: "Chart of Accounts - Tree View",
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Cashbook",
        url: ""
      }, {
        name: "Chart of Accounts",
        url: ""
      }],
      query: "",
      allAccounts: [],
      hierarchicalAccounts: [],
      expandedNodes: new Set(),
      selectedAccount: null,
      // Add this
      childAccounts: [],
      // Add this
      openActionIndex: null,
      currentLocale: null
    };
  },
  // Map Getters
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["loading", "appInfo"])), {}, {
    exportUrl: function exportUrl() {
      return "/chart-of-accounts/export/excel?term=".concat(this.query);
    },
    isRTL: function isRTL() {
      return document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
    }
  }),
  watch: {
    // watch search data
    query: function query(newQ) {
      if (newQ === "") {
        this.getData();
      } else {
        this.searchData();
      }
    },
    // watch locale changes
    '$store.getters["lang/locale"]': function () {
      var _$storeGettersLang_locale = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(newLocale) {
        var _this = this;
        var selectedAccountId;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(newLocale && newLocale !== this.currentLocale)) {
                _context.n = 4;
                break;
              }
              this.currentLocale = newLocale;

              // Store selected account ID before reloading
              selectedAccountId = this.selectedAccount ? this.selectedAccount.id : null;
              if (!(this.query === "")) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return this.getData();
            case 1:
              _context.n = 3;
              break;
            case 2:
              _context.n = 3;
              return this.searchData();
            case 3:
              // Restore selected account after data reload
              if (selectedAccountId) {
                this.$nextTick(function () {
                  var account = _this.allAccounts.find(function (acc) {
                    return acc.id === selectedAccountId;
                  });
                  if (account) {
                    _this.selectedAccount = account;
                    _this.childAccounts = _this.allAccounts.filter(function (acc) {
                      return acc.parent_id === selectedAccountId;
                    });
                  }
                });
              }
            case 4:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function $storeGettersLang_locale(_x) {
        return _$storeGettersLang_locale.apply(this, arguments);
      }
      return $storeGettersLang_locale;
    }(),
    // watch i18n locale changes as fallback
    '$i18n.locale': function () {
      var _$i18nLocale = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(newLocale) {
        var _this2 = this;
        var selectedAccountId;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(newLocale && newLocale !== this.currentLocale)) {
                _context2.n = 4;
                break;
              }
              this.currentLocale = newLocale;

              // Store selected account ID before reloading
              selectedAccountId = this.selectedAccount ? this.selectedAccount.id : null;
              if (!(this.query === "")) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return this.getData();
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _context2.n = 3;
              return this.searchData();
            case 3:
              // Restore selected account after data reload
              if (selectedAccountId) {
                this.$nextTick(function () {
                  var account = _this2.allAccounts.find(function (acc) {
                    return acc.id === selectedAccountId;
                  });
                  if (account) {
                    _this2.selectedAccount = account;
                    _this2.childAccounts = _this2.allAccounts.filter(function (acc) {
                      return acc.parent_id === selectedAccountId;
                    });
                  }
                });
              }
            case 4:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function $i18nLocale(_x2) {
        return _$i18nLocale.apply(this, arguments);
      }
      return $i18nLocale;
    }()
  },
  created: function created() {
    var _this$$store;
    this.currentLocale = ((_this$$store = this.$store) === null || _this$$store === void 0 || (_this$$store = _this$$store.getters) === null || _this$$store === void 0 ? void 0 : _this$$store['lang/locale']) || window.config && window.config.locale || 'en';
    this.getData();
  },
  mounted: function mounted() {
    var _this$$store2, _this$$i18n;
    // Update currentLocale from store in case it changed
    this.currentLocale = ((_this$$store2 = this.$store) === null || _this$$store2 === void 0 || (_this$$store2 = _this$$store2.getters) === null || _this$$store2 === void 0 ? void 0 : _this$$store2['lang/locale']) || ((_this$$i18n = this.$i18n) === null || _this$$i18n === void 0 ? void 0 : _this$$i18n.locale) || window.config && window.config.locale || 'en';
    document.addEventListener('click', this.onClickOutside);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('locale-changed', this.handleLocaleChange);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.onClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('locale-changed', this.handleLocaleChange);
  },
  methods: {
    toggleAction: function toggleAction(index) {
      var _this3 = this;
      this.openActionIndex = this.openActionIndex === index ? null : index;
      if (this.openActionIndex === index) {
        this.$nextTick(function () {
          _this3.positionDropdown(index);
        });
      }
    },
    positionDropdown: function positionDropdown(index) {
      var button = document.querySelector("[data-action-index=\"".concat(index, "\"]"));
      if (button) {
        var rect = button.getBoundingClientRect();
        var menu = document.querySelector('.action-menu');
        if (menu) {
          var isRTL = document.documentElement.dir === 'rtl' || document.documentElement.getAttribute('dir') === 'rtl';
          if (isRTL) {
            menu.style.left = '45px';
            menu.style.right = 'auto';
          } else {
            menu.style.left = "".concat(rect.right - 200, "px");
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
    // get all accounts data
    getData: function getData() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this4.$store.state.operations.loading = true;
              _context3.p = 1;
              _context3.n = 2;
              return _this4.$axios.get('/api/chart-of-accounts/translations', {
                params: {
                  locale: _this4.currentLocale,
                  include_translations: true,
                  include: 'type',
                  include_type_translations: true,
                  perPage: 1000 // Get all accounts for tree view
                }
              });
            case 2:
              response = _context3.v;
              _this4.allAccounts = response.data.data || [];
              _this4.buildHierarchy();
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t = _context3.v;
              console.error('Error loading accounts:', _t);
            case 4:
              _context3.p = 4;
              _this4.$store.state.operations.loading = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    // search accounts
    searchData: function searchData() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var response, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _this5.$store.state.operations.loading = true;
              _context4.p = 1;
              _context4.n = 2;
              return _this5.$axios.get('/api/chart-of-accounts/translations/search', {
                params: {
                  term: _this5.query,
                  locale: _this5.currentLocale,
                  search_field: 'name',
                  include_translations: true,
                  include: 'type',
                  include_type_translations: true,
                  perPage: 1000 // Get all accounts for tree view
                }
              });
            case 2:
              response = _context4.v;
              _this5.allAccounts = response.data.data || [];
              _this5.buildHierarchy();
              _context4.n = 4;
              break;
            case 3:
              _context4.p = 3;
              _t2 = _context4.v;
              console.error('Error searching accounts:', _t2);
            case 4:
              _context4.p = 4;
              _this5.$store.state.operations.loading = false;
              return _context4.f(4);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[1, 3, 4, 5]]);
      }))();
    },
    // build hierarchical structure
    buildHierarchy: function buildHierarchy() {
      var _this6 = this;
      var accountsMap = new Map();
      var rootAccounts = [];

      // Create a map of all accounts
      this.allAccounts.forEach(function (account) {
        accountsMap.set(account.id, _objectSpread(_objectSpread({}, account), {}, {
          level: 0,
          expanded: _this6.expandedNodes.has(account.id),
          hasChildren: false,
          children: []
        }));
      });

      // Build parent-child relationships
      this.allAccounts.forEach(function (account) {
        if (account.parent_id) {
          var parent = accountsMap.get(account.parent_id);
          if (parent) {
            parent.children.push(account.id);
            parent.hasChildren = true;
          }
        } else {
          rootAccounts.push(account.id);
        }
      });

      // Build flat hierarchical list with levels
      this.hierarchicalAccounts = [];
      this.buildHierarchicalList(rootAccounts, accountsMap, 0);
    },
    // recursively build hierarchical list
    buildHierarchicalList: function buildHierarchicalList(accountIds, accountsMap, level) {
      var _this7 = this;
      accountIds.forEach(function (id) {
        var account = accountsMap.get(id);
        if (account) {
          account.level = level;
          _this7.hierarchicalAccounts.push(account);

          // Add children if expanded
          if (account.expanded && account.children.length > 0) {
            _this7.buildHierarchicalList(account.children, accountsMap, level + 1);
          }
        }
      });
    },
    // toggle node expansion and select account
    toggleNode: function toggleNode(accountId) {
      // Toggle expansion
      if (this.expandedNodes.has(accountId)) {
        this.expandedNodes["delete"](accountId);
      } else {
        this.expandedNodes.add(accountId);
      }

      // Select account and show children
      var account = this.allAccounts.find(function (acc) {
        return acc.id === accountId;
      });
      if (account) {
        this.selectedAccount = account;
        this.childAccounts = this.allAccounts.filter(function (acc) {
          return acc.parent_id === accountId;
        });
      }
      this.buildHierarchy();
    },
    // expand all nodes
    expandAll: function expandAll() {
      var _this8 = this;
      this.allAccounts.forEach(function (account) {
        if (account.hasChildren) {
          _this8.expandedNodes.add(account.id);
        }
      });
      this.buildHierarchy();
    },
    // collapse all nodes
    collapseAll: function collapseAll() {
      this.expandedNodes.clear();
      this.buildHierarchy();
    },
    // refresh tree
    refreshTree: function refreshTree() {
      this.query = "";
      this.expandedNodes.clear();
      this.getData();
    },
    // reset pagination
    resetPagination: function resetPagination() {
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    } // Not needed for tree view
    ,
    // reload after search
    reload: function reload() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _this9.query = "";
              _context6.n = 1;
              return _this9.searchData();
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // print tree
    print: function print() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return _this0.$htmlToPaper("printMe");
            case 1:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // delete data
    deleteData: function deleteData(slug) {
      var _this1 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              sweetalert2_all_default().fire({
                title: _this1.$t("Are you sure?"),
                text: _this1.$t("You will not be able to return to this!"),
                type: "warning",
                showCancelButton: true,
                confirmButtonText: _this1.$t("Confirm"),
                cancelButtonText: _this1.$t("Cancel")
              }).then(function (result) {
                if (result.value) {
                  _this1.$store.dispatch("operations/deleteData", {
                    path: "/api/chart-of-accounts/",
                    slug: slug
                  }).then(function (response) {
                    if (response === true) {
                      _this1.getData();
                      _this1.$toast.success(_this1.$t("Deleted!"), _this1.$t("Deleted successfully."));
                    } else {
                      if (response && response.deletable === false) {
                        _this1.$toast.warning(_this1.$t("Cannot Delete"), response.message || _this1.$t("Sorry you can't remove this chart of account!"));
                      } else {
                        _this1.$toast.warning(_this1.$t("Failed!"), _this1.$t("Sorry you can't remove this chart of account!"));
                      }
                    }
                  })["catch"](function (error) {
                    console.error('Delete error:', error);
                    _this1.$toast.warning(_this1.$t("Failed!"), _this1.$t("Sorry you can't remove this chart of account!"));
                  });
                }
              });
            case 1:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // get account by id
    getAccountById: function getAccountById(id) {
      return this.allAccounts.find(function (account) {
        return account.id === id;
      });
    },
    // get translated name for account or type
    getTranslatedName: function getTranslatedName(entity) {
      if (!entity) return '';
      var translations = entity.translations && entity.translations.name;
      var locale = this.currentLocale;
      if (translations && translations[locale] && translations[locale].trim() !== '') {
        return translations[locale];
      }
      return entity.name || entity.original_name || '';
    },
    // Handle locale change event
    handleLocaleChange: function handleLocaleChange(event) {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var newLocale, selectedAccountId;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              if (!(event && event.detail && event.detail.locale)) {
                _context9.n = 4;
                break;
              }
              newLocale = event.detail.locale;
              if (!(newLocale !== _this10.currentLocale)) {
                _context9.n = 4;
                break;
              }
              _this10.currentLocale = newLocale;

              // Store selected account ID before reloading
              selectedAccountId = _this10.selectedAccount ? _this10.selectedAccount.id : null; // Reload accounts with new locale
              if (!(_this10.query === "")) {
                _context9.n = 2;
                break;
              }
              _context9.n = 1;
              return _this10.getData();
            case 1:
              _context9.n = 3;
              break;
            case 2:
              _context9.n = 3;
              return _this10.searchData();
            case 3:
              // Restore selected account after data reload
              if (selectedAccountId) {
                _this10.$nextTick(function () {
                  var account = _this10.allAccounts.find(function (acc) {
                    return acc.id === selectedAccountId;
                  });
                  if (account) {
                    _this10.selectedAccount = account;
                    _this10.childAccounts = _this10.allAccounts.filter(function (acc) {
                      return acc.parent_id === selectedAccountId;
                    });
                  }
                });
              }
            case 4:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    }
  }
});
;// ./resources/js/pages/cashbook/chart-of-accounts/tree.vue?vue&type=script&lang=js
 /* harmony default export */ const chart_of_accounts_treevue_type_script_lang_js = (treevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/tree.vue?vue&type=style&index=0&id=a65c7966&prod&scoped=true&lang=css
var treevue_type_style_index_0_id_a65c7966_prod_scoped_true_lang_css = __webpack_require__(42264);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/cashbook/chart-of-accounts/tree.vue?vue&type=style&index=0&id=a65c7966&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(treevue_type_style_index_0_id_a65c7966_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const chart_of_accounts_treevue_type_style_index_0_id_a65c7966_prod_scoped_true_lang_css = (treevue_type_style_index_0_id_a65c7966_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/cashbook/chart-of-accounts/tree.vue?vue&type=style&index=0&id=a65c7966&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/cashbook/chart-of-accounts/tree.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  chart_of_accounts_treevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "a65c7966",
  null
  
)

/* harmony default export */ const tree = (component.exports);

/***/ }),

/***/ 42264:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".refresh-btn[data-v-a65c7966]{background:#33a0d91a!important;color:#33a0d9!important}.refresh-btn[data-v-a65c7966],.tree-btn[data-v-a65c7966]{border:none;border-radius:10px;height:44px;padding:10px 16px;width:56px}.tree-btn[data-v-a65c7966]{background:#f6fef4!important;color:#2ab930!important}.btn-primary[data-v-a65c7966]{background:#2ab930!important;border:none!important;color:#fff!important;padding:10px 20px!important}.btn-group.c-w-100[data-v-a65c7966]{gap:10px}.chart-of-accounts-container[data-v-a65c7966]{background:#fff;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,.1);overflow:hidden}.chart-of-accounts-row[data-v-a65c7966]{display:flex;min-height:600px}.chart-of-accounts-col[data-v-a65c7966]{padding:0}.chart-of-accounts-col-3[data-v-a65c7966]{background:#f8f9fa;border-right:1px solid #e9ecef;flex:0 0 25%;max-width:25%}.chart-of-accounts-col-9[data-v-a65c7966]{background:#fff;flex:0 0 75%;max-width:75%}.chart-of-accounts-search-wrapper[data-v-a65c7966]{background:#fff;border-bottom:1px solid #e9ecef;padding:20px}.chart-of-accounts-col-3-filters-container[data-v-a65c7966]{width:100%}.chart-of-accounts-col-3-body-container[data-v-a65c7966]{height:calc(100vh - 300px);overflow-y:auto;padding:0}.tree-view-list[data-v-a65c7966]{list-style:none;margin:0;padding:0}.tree-item[data-v-a65c7966]{border-bottom:1px solid #f1f3f4}.tree-item-content[data-v-a65c7966]{align-items:center;border-left:2px solid transparent;cursor:pointer;display:flex;min-height:50px;padding:12px 20px;position:relative;transition:all .2s ease}.tree-item-content[data-v-a65c7966]:hover{background-color:#e3f2fd;border-left-color:#1976d2}.tree-item-icon-container[data-v-a65c7966]{align-items:center;color:#1976d2;display:flex;flex-shrink:0;height:20px;justify-content:center;width:20px}.tree-item-label[data-v-a65c7966]{flex:1;margin-left:8px}.tree-item-label .account-name[data-v-a65c7966]{color:#333;display:block;font-size:14px;font-weight:500;margin-bottom:2px}.tree-item-label .account-code[data-v-a65c7966]{color:#666;display:block;font-size:11px;font-weight:400}.tree-item-toggle[data-v-a65c7966]{align-items:center;color:#666;display:flex;flex-shrink:0;height:20px;justify-content:center;margin-left:8px;width:20px}.tree-item-content[data-v-a65c7966]:before{border-bottom:4px solid transparent;border-left:4px solid #e0e0e0;border-top:4px solid transparent;content:\"\";height:0;left:0;position:absolute;top:50%;transform:translateY(-50%);width:0}.tree-item-content[data-v-a65c7966]:hover:before{border-left-color:#1976d2}.tree-item-icon-container .fa-folder[data-v-a65c7966]{color:#ffc107}.tree-item-icon-container .fa-folder-open[data-v-a65c7966]{color:#ff9800}.tree-item-icon-container .fa-file-alt[data-v-a65c7966]{color:#9e9e9e}.tree-item-toggle i[data-v-a65c7966]{transition:transform .2s ease}.tree-item[aria-expanded=true] .tree-item-toggle i[data-v-a65c7966]{transform:rotate(0deg)}.tree-item[aria-expanded=false] .tree-item-toggle i[data-v-a65c7966]{transform:rotate(-90deg)}.tree-children[data-v-a65c7966]{background:#fafbfc;list-style:none;margin:0;padding:0}.tree-children .tree-item[data-v-a65c7966]{border-bottom:1px solid #f1f3f4}.tree-children .tree-item-content[data-v-a65c7966]{border-left:2px solid #e3f2fd;margin-left:20px;padding-left:40px}.tree-children-level-2 .tree-item-content[data-v-a65c7966]{border-left:2px solid #f0f4f8;margin-left:40px;padding-left:60px}.tree-children .tree-item-content[data-v-a65c7966]:hover{background-color:#f0f4f8}.tree-children-level-2 .tree-item-content[data-v-a65c7966]:hover{background-color:#e8f4fd}.chart-of-accounts-col-9-body-container[data-v-a65c7966]{padding:20px}.chart-of-accounts-col-9-body-container-table[data-v-a65c7966]{margin-bottom:20px;width:100%}.chart-of-accounts-col-9-body-container-table th[data-v-a65c7966]{background:#f8f9fa;border:none;color:#495057;font-size:14px;font-weight:600;padding:12px 16px}.chart-of-accounts-col-9-body-container-table td[data-v-a65c7966]{border:none;padding:16px;vertical-align:middle}.chart-of-accounts-col-9-body-container-table-row[data-v-a65c7966]:hover{background-color:#f8f9fa}.chart-of-accounts-col-9-body-container-table-item[data-v-a65c7966],.item-container[data-v-a65c7966]{align-items:center;display:flex}.item-container[data-v-a65c7966]{width:100%}.item-container .icon[data-v-a65c7966]{color:#1976d2;font-size:18px;margin-right:12px}.item-container .details[data-v-a65c7966]{flex:1}.item-container .details .name[data-v-a65c7966]{color:#333;font-size:14px;font-weight:600;margin:0}.item-container .details .id[data-v-a65c7966]{color:#666;font-size:12px;margin:0}.credit-wrap[data-v-a65c7966]{text-align:right}.credit-container[data-v-a65c7966]{display:inline-block;text-align:right}.credit-container .cost[data-v-a65c7966]{color:#333;font-size:14px;font-weight:600;margin:0}.credit-container .type[data-v-a65c7966]{color:#666;font-size:12px;margin:0;text-transform:capitalize}.add-account[data-v-a65c7966]{align-items:center;border-radius:6px;display:inline-flex;padding:12px 24px;text-decoration:none;transition:all .2s ease}.add-account[data-v-a65c7966]:hover{box-shadow:0 4px 12px rgba(0,0,0,.15);text-decoration:none;transform:translateY(-1px)}.dropdown-toggle[data-v-a65c7966]{background:#6c757d;border:none;padding:6px 12px}.dropdown-toggle[data-v-a65c7966]:hover{background:#5a6268}.dropdown-menu[data-v-a65c7966]{border:none;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.15)}.dropdown-item[data-v-a65c7966]{font-size:14px;padding:8px 16px}.dropdown-item[data-v-a65c7966]:hover{background-color:#f8f9fa}@media (max-width:768px){.chart-of-accounts-row[data-v-a65c7966]{flex-direction:column}.chart-of-accounts-col-3[data-v-a65c7966],.chart-of-accounts-col-9[data-v-a65c7966]{flex:0 0 100%;max-width:100%}.chart-of-accounts-col-3[data-v-a65c7966]{border-bottom:1px solid #e9ecef;border-right:none}.chart-of-accounts-col-3-body-container[data-v-a65c7966]{height:300px}.balance-cards[data-v-a65c7966]{flex-direction:column;gap:10px}.balance-card[data-v-a65c7966]{min-width:auto;width:100%}.account-balance-info[data-v-a65c7966]{margin-left:0;margin-top:15px}.selected-account-header .d-flex[data-v-a65c7966]{align-items:flex-start!important;flex-direction:column}}@media print{.chart-of-accounts-container[data-v-a65c7966]{border:1px solid #000;box-shadow:none}.add-account[data-v-a65c7966],.dropdown[data-v-a65c7966]{display:none}}.empty-state[data-v-a65c7966]{align-items:center;display:flex;height:400px;justify-content:center;text-align:center}.empty-state-content[data-v-a65c7966]{max-width:400px}.empty-state-content h4[data-v-a65c7966]{margin-bottom:10px}.empty-state-content p[data-v-a65c7966]{font-size:16px;line-height:1.5}.selected-account-header[data-v-a65c7966]{background:#f8f9fa;border-left:4px solid #007bff;border-radius:8px;padding:20px}.selected-account-header h4[data-v-a65c7966]{color:#333;margin:0}.account-balance-info[data-v-a65c7966]{margin-left:20px}.balance-cards[data-v-a65c7966]{display:flex;flex-wrap:wrap;gap:15px}.balance-card[data-v-a65c7966]{background:#fff;border:1px solid #e9ecef;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.1);min-width:120px;padding:15px 20px;text-align:center;transition:all .2s ease}.balance-card[data-v-a65c7966]:hover{box-shadow:0 4px 12px rgba(0,0,0,.15);transform:translateY(-2px)}.balance-card-main[data-v-a65c7966]{background:linear-gradient(135deg,#f8f9fa,#e9ecef);border:2px solid #007bff}.debit-card[data-v-a65c7966]{border-left:4px solid #28a745}.credit-card[data-v-a65c7966]{border-left:4px solid #dc3545}.debit-balance[data-v-a65c7966]{background:linear-gradient(135deg,#d4edda,#c3e6cb);border-left:4px solid #28a745}.credit-balance[data-v-a65c7966]{background:linear-gradient(135deg,#f8d7da,#f5c6cb);border-left:4px solid #dc3545}.balance-label[data-v-a65c7966]{color:#666;font-size:12px;font-weight:600;letter-spacing:.5px;margin-bottom:5px;text-transform:uppercase}.balance-amount[data-v-a65c7966]{color:#333;font-size:16px;font-weight:700;line-height:1.2}.amount-display[data-v-a65c7966]{text-align:center}.amount-value[data-v-a65c7966]{color:#333;font-size:14px;font-weight:600}.balance-display[data-v-a65c7966]{text-align:center}.balance-value[data-v-a65c7966]{border-radius:4px;display:inline-block;font-size:14px;font-weight:700;padding:4px 8px}.debit-text[data-v-a65c7966]{background:rgba(40,167,69,.1);color:#28a745}.credit-text[data-v-a65c7966]{background:rgba(220,53,69,.1);color:#dc3545}.no-children-message[data-v-a65c7966]{padding:40px 20px}.no-children-message h5[data-v-a65c7966]{margin-bottom:10px}.no-children-message p[data-v-a65c7966]{margin-bottom:0}.account-actions[data-v-a65c7966]{display:flex;justify-content:flex-end}.action-buttons[data-v-a65c7966]{display:flex;gap:6px}.action-btn[data-v-a65c7966]{align-items:center;border:none;border-radius:6px;display:inline-flex;font-size:12px;height:32px;justify-content:center;position:relative;text-decoration:none;transition:all .2s ease;width:32px}.action-btn[data-v-a65c7966]:hover{text-decoration:none;transform:translateY(-1px)}.action-btn[data-v-a65c7966]:active{transform:translateY(0)}.view-btn[data-v-a65c7966]{background:linear-gradient(135deg,#33a0d9,#138496);color:#fff}.view-btn[data-v-a65c7966]:hover{background:linear-gradient(135deg,#138496,#117a8b);box-shadow:0 4px 12px rgba(23,162,184,.3);color:#fff}.edit-btn[data-v-a65c7966]{background:linear-gradient(135deg,#ffc107,#e0a800);color:#212529}.edit-btn[data-v-a65c7966]:hover{background:linear-gradient(135deg,#e0a800,#d39e00);box-shadow:0 4px 12px rgba(255,193,7,.3);color:#212529}.delete-btn[data-v-a65c7966]{background:linear-gradient(135deg,#dc3545,#c82333);color:#fff}.delete-btn[data-v-a65c7966]:hover{background:linear-gradient(135deg,#c82333,#bd2130);box-shadow:0 4px 12px rgba(220,53,69,.3);color:#fff}@media (max-width:768px){.action-buttons[data-v-a65c7966]{gap:4px}.action-btn[data-v-a65c7966]{font-size:11px;height:28px;width:28px}}.tooltip[data-v-a65c7966]{font-size:12px;font-weight:500}.action-btn[data-v-a65c7966]:before{background:hsla(0,0%,100%,.1);border-radius:6px;bottom:0;content:\"\";left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity .2s ease}.action-btn[data-v-a65c7966]:hover:before{opacity:1}.action-dropdown[data-v-a65c7966]{display:inline-block;position:relative}.action-icon-btn[data-v-a65c7966]{align-items:center;background-color:#fff;border:none;cursor:pointer;display:inline-flex;height:24px;justify-content:center;padding:0;width:24px}.action-menu[data-v-a65c7966]{animation:slideInDown-a65c7966 .3s ease-out;background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 8px 20px 0 #00000014;max-height:80vh;min-width:200px;overflow:hidden;position:fixed;z-index:9999}[dir=rtl] .action-menu[data-v-a65c7966]{left:45px!important;right:auto!important}@keyframes slideInDown-a65c7966{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.action-menu-header[data-v-a65c7966]{align-items:center;background:#f8fafc;border-bottom:1px solid #f1f5fb;border-radius:12px 12px 0 0;display:flex;justify-content:space-between;padding:12px 16px}.action-menu-title[data-v-a65c7966]{color:#023033;font-size:14px;font-weight:600}.action-menu-close[data-v-a65c7966]{background:none;border:none;border-radius:4px;color:#6b7280;cursor:pointer;padding:4px;transition:all .2s ease}.action-menu-close[data-v-a65c7966]:hover{background:#e5e7eb;color:#374151}.action-menu ul[data-v-a65c7966]{list-style:none;margin:0;padding:8px 0}.action-menu li[data-v-a65c7966]{border-bottom:1px solid #f1f5fb}.action-menu li[data-v-a65c7966]:last-child{border-bottom:none}.action-menu li a[data-v-a65c7966]{align-items:center;color:#023033;display:flex;font-size:14px;font-weight:500;gap:10px;padding:12px 16px;position:relative;text-decoration:none;transition:all .2s ease}.action-menu li a i[data-v-a65c7966]{align-items:center;display:flex;font-size:12px;height:16px;justify-content:center;width:16px}.action-menu li a[data-v-a65c7966]:hover{background:#f8fafc;color:#2ab930;transform:translateX(2px)}.action-menu li a[data-v-a65c7966]:before{background:#2ab930;bottom:0;content:\"\";left:0;position:absolute;top:0;transform:scaleY(0);transition:transform .2s ease;width:3px}.action-menu li a[data-v-a65c7966]:hover:before{transform:scaleY(1)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);